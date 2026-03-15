/**
 * Main Application Entry Point
 * Seima Product Presenter - Interactive product catalogue and PDF generation
 *
 * @author Seima Development Team
 * @version 2.0.0
 * @since 1.8.1
 */

import { NavigationManager } from './navigation.js';
import { moduleCoordinator, pdfGenerator } from './modules.js';
import { config } from './config-manager.js';
import { errorHandler, ErrorCategory, LogLevel } from './error-handler.js';
import { showPdfFormScreen, ensurePdfSpinner, downloadWithFallback } from './pdf-generator.js';
import { StorageManager } from './storage.js';
import { FileImportManager } from './file-import.js';
import { ProductGridManager } from './product-grid.js';
import { browserCompatibility } from '@seima/core';
import { onboarding } from './onboarding.js';
import { authService, authUI } from '@seima/core';
import { CONFIG } from './config.js';
import { competitorService } from './competitor-service.js';
import { aiChatPanel } from './ai-chat.js';
import { loadSynonymsFromBackend } from './product-synonyms.js';

/**
 * Main Application Class
 * Coordinates all application modules and provides the primary API
 * @class SeimaScanner
 */
class SeimaScanner {
  constructor() {
    this.navigationManager = null;
    this.fileImportManager = new FileImportManager();
    this.productGridManager = new ProductGridManager();
    this.isInitialized = false;

    // Log application startup
    errorHandler.log('SeimaScanner application starting', LogLevel.INFO);
  }

  /**
   * Initialize the application
   * Sets up all modules, event listeners, and global handlers
   * @async
   * @returns {Promise<boolean>} True if initialization was successful
   */
  async init() {
    try {
      errorHandler.log('Initializing application modules', LogLevel.INFO);

      // Configure authentication service
      authService.configure({
        googleSheetsUrl: CONFIG.PRESENTATION_RECORDING?.GOOGLE_SHEETS_URL,
        email: CONFIG.EMAIL
      });
      
      // Configure auth UI branding
      authUI.configure({
        logoSrc: 'assets/seima-logo.png',
        brandName: 'Seima',
        appName: 'Product Presenter'
      });

      // --- Fire-and-forget background tasks (not needed for first paint) ---

      const sheetsUrl = CONFIG.PRESENTATION_RECORDING?.GOOGLE_SHEETS_URL;
      if (sheetsUrl) {
        loadSynonymsFromBackend(sheetsUrl).catch((err) => {
          console.warn('Synonyms preload failed:', err?.message || err);
        });
      }

      if (CONFIG.CROSSHAIR?.ENABLED) {
        const user = authService.getCurrentUser();
        competitorService.configure(CONFIG.CROSSHAIR, user?.email || '');
        competitorService.preload().catch((err) => {
          console.warn('Crosshair preload failed (user may not be logged in):', err.message);
        });
      }

      // --- Critical-path init: data layer + navigation (run in parallel) ---

      this.navigationManager = new NavigationManager();

      const compatReport = browserCompatibility.getCompatibilityReport();
      errorHandler.log(`Browser compatibility: ${compatReport.score}% (${compatReport.browserName})`, LogLevel.INFO);

      if (browserCompatibility.shouldShowCompatibilityWarning()) {
        this.showCompatibilityWarning();
      }

      await this.navigationManager.init();

      // --- UI setup (all synchronous, runs after data is ready) ---

      this.fileImportManager.init();
      this.setupGlobalEventListeners();
      this.productGridManager.init();

      aiChatPanel.init();
      const aiTrigger = document.getElementById('ai-chat-trigger');
      if (aiTrigger) {
        aiTrigger.addEventListener('click', () => aiChatPanel.toggle());
      }

      // Make services globally available for compatibility
      window.navigationManager = this.navigationManager;
      window.productGridManager = this.productGridManager;
      window.browserCompatibility = browserCompatibility;
      window.downloadWithFallback = downloadWithFallback;
      window.showPdfFormScreen = showPdfFormScreen;

      this.isInitialized = true;
      errorHandler.log('Seima Scanner initialized successfully', LogLevel.INFO);
      
      // Dismiss the loading overlay now that the UI is interactive
      this._dismissLoadingOverlay();
      
      setTimeout(() => {
        onboarding.show();
      }, 500);
      
      return true;
    } catch (error) {
      errorHandler.handleError({
        message: 'Failed to initialize application',
        error,
        category: ErrorCategory.UI,
        level: LogLevel.CRITICAL,
        context: 'app-init'
      });
      this._dismissLoadingOverlay();
      return false;
    }
  }

  _dismissLoadingOverlay() {
    const overlay = document.getElementById('app-loading-overlay');
    if (overlay) {
      overlay.classList.add('fade-out');
      overlay.addEventListener('transitionend', () => overlay.remove(), { once: true });
      setTimeout(() => overlay.remove(), 400);
    }
  }

  showCompatibilityWarning() {
    const report = browserCompatibility.getCompatibilityReport();
    const recommendations = report.recommendations;

    if (recommendations.length === 0) {return;}

    const criticalIssues = recommendations.filter(r => r.type === 'critical');
    const hasCompatibilityIssues = report.score < config.get('compatibility.minCompatibilityScore', 70);

    // Only show warning for actual critical issues, not Samsung detection
    if (criticalIssues.length === 0 && !hasCompatibilityIssues) {
      return; // Don't show anything for minor recommendations
    }

    // Show non-blocking compatibility notification
    const notification = document.createElement('div');
    notification.style.cssText = `
      position: fixed; top: 0; left: 0; right: 0; z-index: 9998;
      background: linear-gradient(135deg, #fef3c7 0%, #fed7aa 100%);
      border-bottom: 2px solid #f59e0b; padding: 12px 16px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
      font-size: 14px; line-height: 1.4;
    `;

    notification.innerHTML = `
      <div style="display: flex; align-items: center; justify-content: space-between;">
        <div style="display: flex; align-items: center;">
          <span style="font-size: 18px; margin-right: 8px;">⚠️</span>
          <div>
            <strong style="color: #92400e;">Browser Compatibility Notice</strong>
            <div style="color: #a16207; font-size: 13px; margin-top: 2px;">
              ${criticalIssues.length > 0 ? criticalIssues[0].message : 'Some features may not work optimally'}
            </div>
          </div>
        </div>
        <div style="display: flex; gap: 8px; align-items: center;">
          <button onclick="window.browserCompatibility.logCompatibilityInfo()" style="
            padding: 4px 8px; border: 1px solid #d97706; background: transparent;
            color: #d97706; border-radius: 3px; cursor: pointer; font-size: 12px;
          ">Details</button>
          <button onclick="this.parentElement.parentElement.parentElement.remove()" style="
            padding: 4px 8px; border: none; background: #f59e0b;
            color: white; border-radius: 3px; cursor: pointer; font-size: 12px;
          ">Dismiss</button>
        </div>
      </div>
    `;

    document.body.insertBefore(notification, document.body.firstChild);
  }

  setupGlobalEventListeners() {
    // Listen for PDF generation requests
    window.addEventListener('generatePdf', (event) => {
      const { tipTailSettings, ...userDetails } = event.detail;
      ensurePdfSpinner();
      showPdfFormScreen(userDetails, tipTailSettings || null);
    });

    // Handle window unload for cleanup
    window.addEventListener('beforeunload', () => {
      // Cleanup any active resources
    });

    // Monitor memory usage
    if (browserCompatibility.features.memoryAPI) {
      setInterval(() => {
        const memoryInfo = browserCompatibility.memoryInfo;
        if (memoryInfo.memoryPressure === 'high') {
          console.warn('High memory usage detected:', memoryInfo);
        }
      }, 60000); // Check every minute
    }
  }

  // Public API methods for backward compatibility
  getSelectedProducts() {
    return StorageManager.getSelectedProducts();
  }

  clearSelection() {
    return StorageManager.clearAllSelections();
  }

  addProduct(product, { notes = '', room = '', quantity = 1 } = {}) {
    return StorageManager.addProductToSelection(product, { notes, room, quantity });
  }

  updateSelectionCount() {
    if (this.navigationManager) {
      this.navigationManager.updateSelectionCount();
    }
  }

  /**
   * Displays a user-friendly error message in a modal or alert.
   * @param {string} message
   */
  showError(message) {
    // Simple fallback: alert, can be replaced with a custom modal if desired
    alert(message);
  }
}

// Initialize the application when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  window.seimaScanner = new SeimaScanner();
  window.seimaScanner.init();

  // Load version number for menus
  fetch('./version.txt')
    .then(resp => resp.text())
    .then(versionText => {
      const lines = versionText.trim().split('\n');
      if (lines.length > 0) {
        const latestLine = lines[0];
        const versionNumber = latestLine.split(' - ')[0].trim();
        window._appVersion = versionNumber;
        const versionFooter = document.getElementById('menu-version-footer');
        if (versionFooter) {
          versionFooter.textContent = `Ver: ${versionNumber}`;
        }
      }
    });

  setupHelpButton();
  setupUserMenu();

  // Changelog close button
  const closeBtn = document.getElementById('changelog-close');
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      document.getElementById('changelog-modal').style.display = 'none';
    });
  }
});

/**
 * Setup the help button to show the user guide modal
 */
function setupHelpButton() {
  const helpBtn = document.getElementById('help-btn');
  if (helpBtn) {
    helpBtn.addEventListener('click', () => {
      showUserGuide();
    });
  }
  
  // Setup Crosshair validator button
  const crosshairBtn = document.getElementById('crosshair-btn');
  if (crosshairBtn) {
    crosshairBtn.addEventListener('click', () => {
      window.location.href = 'screens/validator.html';
    });
  }

  // Setup Landscape button (staff-only)
  const landscapeBtn = document.getElementById('landscape-btn');
  if (landscapeBtn) {
    landscapeBtn.addEventListener('click', () => {
      window.location.href = 'screens/landscape.html';
    });
  }

  // Setup Admin button (admin-only)
  const adminBtn = document.getElementById('admin-btn');
  if (adminBtn) {
    adminBtn.addEventListener('click', () => {
      window.location.href = 'screens/admin.html';
    });
  }

  // Setup Quick Start button to re-show onboarding
  const quickStartBtn = document.getElementById('quick-start-btn');
  if (quickStartBtn) {
    quickStartBtn.addEventListener('click', () => {
      onboarding.showForced();
    });
  }
}

/**
 * Setup user authentication UI
 */
function setupUserMenu() {
  const userMenuContainer = document.getElementById('user-menu-container');
  const userMenuTrigger = document.getElementById('user-menu-trigger');
  const userMenuDropdown = document.getElementById('user-menu-dropdown');
  const signInBtn = document.getElementById('sign-in-btn');
  const userAvatar = document.getElementById('user-avatar');
  const userNameDisplay = document.getElementById('user-name-display');
  
  // Update UI based on auth state
  function updateAuthUI(user) {
    if (user) {
      // Logged in — ensure Crosshair (competitor matching) has staff email so API allows read
      if (CONFIG.CROSSHAIR?.ENABLED) {
        competitorService.configure(CONFIG.CROSSHAIR, user.email || '');
        competitorService.preload().catch(err => {
          console.warn('Crosshair preload after login failed:', err);
        });
      }
      // Logged in
      if (userMenuContainer) userMenuContainer.style.display = 'block';
      if (signInBtn) signInBtn.style.display = 'none';
      const crosshairBtn = document.getElementById('crosshair-btn');
      if (crosshairBtn) crosshairBtn.style.display = (CONFIG.CROSSHAIR?.ENABLED && authService.isStaffMode()) ? '' : 'none';
      const landscapeBtn = document.getElementById('landscape-btn');
      if (landscapeBtn) landscapeBtn.style.display = (CONFIG.CROSSHAIR?.ENABLED && authService.isAdmin()) ? '' : 'none';
      const adminBtn = document.getElementById('admin-btn');
      if (adminBtn) adminBtn.style.display = authService.isAdmin() ? '' : 'none';
      const staffDivider = document.getElementById('staff-divider');
      const anyStaffVisible = crosshairBtn?.style.display !== 'none' || landscapeBtn?.style.display !== 'none' || adminBtn?.style.display !== 'none';
      if (staffDivider) staffDivider.style.display = anyStaffVisible ? '' : 'none';

      // Update avatar and name
      const initials = getInitials(user.name);
      if (userAvatar) userAvatar.textContent = initials;
      if (userNameDisplay) userNameDisplay.textContent = user.name?.split(' ')[0] || 'User';
      
      // Show verify email banner for @seima.com.au users who haven't verified
      const needsVerification = (user.email || '').toLowerCase().endsWith('@seima.com.au') && user.emailVerified === false;
      let verifyBanner = document.getElementById('verify-email-banner');
      if (needsVerification) {
        if (!verifyBanner) {
          verifyBanner = document.createElement('div');
          verifyBanner.id = 'verify-email-banner';
          verifyBanner.className = 'verify-email-banner';
          verifyBanner.innerHTML = `
            <span>Verify your email to access staff features.</span>
            <button id="verify-email-btn" class="verify-email-btn">Verify now</button>
          `;
          document.body.insertBefore(verifyBanner, document.body.firstChild);
          verifyBanner.querySelector('#verify-email-btn').addEventListener('click', () => {
            authUI.showVerifyEmail(user.email, () => {
              updateAuthUI(authService.getCurrentUser());
              verifyBanner?.remove();
            });
          });
        }
        verifyBanner.style.display = '';
      } else if (verifyBanner) {
        verifyBanner.style.display = 'none';
      }

      // Setup dropdown content
      if (userMenuDropdown) {
        const verifyItemHtml = needsVerification ? `
            <button class="user-menu-item" id="menu-verify-email" style="color:var(--color-copper,#b87333);font-weight:600;">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              Verify Email (staff access)
            </button>` : '';
        const versionLabel = window._appVersion ? `Ver: ${window._appVersion}` : 'Loading...';
        userMenuDropdown.innerHTML = `
          <div class="user-menu-header">
            <div class="user-menu-name">${escapeHtml(user.name || 'User')}</div>
            <div class="user-menu-email">${escapeHtml(user.email || '')}</div>
          </div>
          <div class="user-menu-items">
            ${verifyItemHtml}
            <button class="user-menu-item" id="menu-profile">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
              Edit Profile
            </button>
            <button class="user-menu-item" id="menu-password">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
              Change Password
            </button>
            <div class="user-menu-divider"></div>
            <button class="user-menu-item" id="menu-refresh">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="23 4 23 10 17 10"></polyline>
                <polyline points="1 20 1 14 7 14"></polyline>
                <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
              </svg>
              Refresh All Data
            </button>
            <button class="user-menu-item danger" id="menu-logout">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                <polyline points="16 17 21 12 16 7"></polyline>
                <line x1="21" y1="12" x2="9" y2="12"></line>
              </svg>
              Sign Out
            </button>
          </div>
          <div class="user-menu-footer" id="menu-version-footer" title="Click to view what's new">${versionLabel}</div>
        `;
        
        // Add dropdown item handlers - use shared authUI methods
        document.getElementById('menu-verify-email')?.addEventListener('click', () => {
          userMenuDropdown.style.display = 'none';
          authUI.showVerifyEmail(user.email, () => {
            updateAuthUI(authService.getCurrentUser());
            document.getElementById('verify-email-banner')?.remove();
          });
        });
        document.getElementById('menu-refresh')?.addEventListener('click', async () => {
          userMenuDropdown.style.display = 'none';
          try {
            const { del, keys } = await import('idb-keyval');
            const allKeys = await keys();
            const idbKeysToRemove = ['productCatalogCsv', 'customerLogo', 'fredChatHistory', 'fredChatMessages', 'fredFeedback', 'fredQuestionLog'];
            await Promise.all(allKeys.filter(k => typeof k === 'string' && (idbKeysToRemove.includes(k) || k.startsWith('crosshair_'))).map(k => del(k)));
          } catch { /* idb unavailable */ }
          localStorage.removeItem('configPreferences');
          localStorage.removeItem('pdfWizardSettings');
          Object.keys(localStorage)
            .filter(k => k.startsWith('crosshair_') || k.startsWith('fred'))
            .forEach(k => localStorage.removeItem(k));
          window.location.reload();
        });
        document.getElementById('menu-version-footer')?.addEventListener('click', () => {
          userMenuDropdown.style.display = 'none';
          showChangelog();
        });
        document.getElementById('menu-profile')?.addEventListener('click', () => {
          userMenuDropdown.style.display = 'none';
          authUI.showEditProfile((updatedUser) => {
            StorageManager.clearUserSettings();
            updateAuthUI(updatedUser);
          });
        });
        
        document.getElementById('menu-password')?.addEventListener('click', () => {
          userMenuDropdown.style.display = 'none';
          authUI.showChangePassword();
        });
        
        document.getElementById('menu-logout')?.addEventListener('click', () => {
          userMenuDropdown.style.display = 'none';
          // Clear saved contact details so next login uses new user's profile
          StorageManager.clearUserSettings();
          authService.logout();
          updateAuthUI(null);
        });
      }
    } else {
      // Logged out
      if (userMenuContainer) userMenuContainer.style.display = 'none';
      if (signInBtn) signInBtn.style.display = 'block';
    }
  }
  
  // Get initials from name
  function getInitials(name) {
    if (!name) return '?';
    const parts = name.trim().split(' ');
    if (parts.length >= 2) {
      return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
    }
    return name.substring(0, 2).toUpperCase();
  }
  
  // Escape HTML
  function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text || '';
    return div.innerHTML;
  }
  
  // Toggle dropdown
  if (userMenuTrigger && userMenuDropdown) {
    userMenuTrigger.addEventListener('click', (e) => {
      e.stopPropagation();
      const isVisible = userMenuDropdown.style.display !== 'none';
      userMenuDropdown.style.display = isVisible ? 'none' : 'block';
    });
    
    // Close dropdown on outside click
    document.addEventListener('click', (e) => {
      if (!userMenuContainer?.contains(e.target)) {
        userMenuDropdown.style.display = 'none';
      }
    });
  }
  
  // Sign in button
  if (signInBtn) {
    signInBtn.addEventListener('click', () => {
      authUI.showLogin((user) => {
        updateAuthUI(user);
      });
    });
  }
  
  // Listen for auth state changes
  authService.onAuthChange = updateAuthUI;
  
  // Initialize UI with current state
  updateAuthUI(authService.getCurrentUser());
}

// Profile and password modals now use shared authUI methods from @seima/core

/**
 * Show the user guide modal with comprehensive documentation
 */
function showUserGuide() {
  const modal = document.getElementById('user-guide-modal');
  const contentElement = document.getElementById('user-guide-content');
  
  if (!modal || !contentElement) return;
  
  // Populate user guide content
  contentElement.innerHTML = getUserGuideContent();
  
  // Show modal
  modal.style.display = 'flex';
  
  // Add close handler
  const closeBtn = document.getElementById('user-guide-close');
  if (closeBtn) {
    closeBtn.onclick = () => {
      modal.style.display = 'none';
    };
  }
  
  // Close on background click
  modal.onclick = (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  };
  
  // Close on Escape key
  const escHandler = (e) => {
    if (e.key === 'Escape') {
      modal.style.display = 'none';
      document.removeEventListener('keydown', escHandler);
    }
  };
  document.addEventListener('keydown', escHandler);
}

/**
 * Generate the user guide HTML content
 * @returns {string} HTML formatted user guide
 */
function getUserGuideContent() {
  return `
    <div class="guide-header">
      <img src="assets/seima-logo.png" alt="Seima" class="guide-logo">
      <div class="guide-header-text">
        <h2 class="guide-header-title">Product Presenter</h2>
        <p class="guide-header-subtitle">User Guide</p>
      </div>
    </div>
    
    <div class="guide-section">
      <h3>Welcome</h3>
      <p>Create professional PDF presentations of Seima products for your clients. Whether you're a showroom consultant, builder, or architect, this tool streamlines the process of curating and presenting product selections.</p>
    </div>
    
    <div class="guide-section">
      <h3>Understanding the Interface</h3>
      
      <h4>The Context Bar</h4>
      <p>At the top of the screen, you'll see the context bar showing:</p>
      <ul>
        <li><strong>"Working on:"</strong> Shows the name of your current selection (e.g., "New Selection" or a customer name)</li>
        <li><strong>Previous Selections:</strong> Opens a list of your previously saved work</li>
        <li><strong>Save:</strong> Saves your current selection for later use</li>
      </ul>
      
      <div class="guide-tip">
        <strong>💡 Tip:</strong>
        <p>Your work is automatically saved to your browser. For permanent cloud storage, log in and click "Save" to store selections securely.</p>
      </div>
    </div>
    
    <div class="guide-section">
      <h3>Getting Started</h3>
      
      <h4><span class="step-number">1</span>Choose Your Starting Point</h4>
      <p>When you first open the app (or after clearing), you have three options:</p>
      <ul>
        <li><strong>Import File:</strong> Upload a CSV, Excel, or JSON file with product codes</li>
        <li><strong>Previous Selections:</strong> Continue from a previously saved selection</li>
        <li><strong>Start Fresh:</strong> Add products manually one by one</li>
      </ul>
      <p>If you have recent work, you may also see a "Continue Recent Work" option to quickly resume.</p>
      
      <h4><span class="step-number">2</span>Organise Your Products</h4>
      <p>Use the Room/Group column to categorise products by location or project area. This grouping will be reflected in your PDF presentation.</p>
      <ul>
        <li>Select a predefined room from the dropdown, or</li>
        <li>Choose "Add new room..." to create a custom category</li>
        <li>Drag room headers to reorder entire groups</li>
      </ul>
      
      <h4><span class="step-number">3</span>Adjust Details</h4>
      <p>For each product row, you can:</p>
      <ul>
        <li>Edit the quantity using the Qty field</li>
        <li>Add notes specific to that product selection</li>
        <li>Override the price if needed (click on the price field)</li>
        <li>Drag products to reorder them within or between rooms</li>
      </ul>
    </div>
    
    <div class="guide-section">
      <h3>Sign In</h3>
      <p>You can browse products and create selections without signing in. However, you must sign in to <strong>generate PDFs</strong>, <strong>export CSVs</strong>, or <strong>save/load selections</strong> from the cloud.</p>
      <ul>
        <li>Click <strong>Sign In</strong> in the navigation bar to sign in or create an account</li>
        <li>Your saved selections are private—only you can see them</li>
        <li>Use <strong>Forgot Password</strong> if you need to reset your password</li>
      </ul>
      <div class="guide-tip">
        <strong>🔐 Privacy:</strong>
        <p>Each user only sees their own saved selections. Your password is securely hashed and never stored in plain text.</p>
      </div>
    </div>
    
    <div class="guide-section">
      <h3>Saving & Loading Selections</h3>
      
      <h4>Saving Your Work</h4>
      <p>Click the <strong>Save</strong> button in the context bar to save your current selection. You'll be prompted to sign in if you haven't already. Saved selections include:</p>
      <ul>
        <li>All products with quantities, prices, and notes</li>
        <li>Customer details (name, project, address)</li>
        <li>Room organisation and custom room ordering</li>
        <li>PDF settings (pricing options, cover pages)</li>
      </ul>
      
      <h4>Loading Previous Selections</h4>
      <p>Click <strong>Previous Selections</strong> to browse your saved work. The list is always fetched fresh from the cloud. You can:</p>
      <ul>
        <li>Search by customer name or document name</li>
        <li>Choose to <strong>Replace</strong> your current work or <strong>Merge</strong> with existing products</li>
        <li>Use saved selections as templates for new projects</li>
      </ul>
      
      <h4>Starting Fresh</h4>
      <p>Click <strong>Clear All</strong> in the toolbar to start over. You'll be asked if you also want to clear customer details. Check this option for a completely fresh start.</p>
    </div>
    
    <div class="guide-section">
      <h3>Creating Your PDF</h3>
      <p>Click the <strong>Create PDF</strong> button to open the PDF creation screen:</p>
      
      <h4>Customer Details</h4>
      <p>Enter your client's information including name, project name, address, email and phone. These details appear on the title page. You can also upload a customer logo.</p>
      
      <h4>Output Options</h4>
      <ul>
        <li><strong>Full Pricing:</strong> Show all prices (ex GST)</li>
        <li><strong>+ GST:</strong> Show prices with GST included</li>
        <li><strong>Hide Prices:</strong> Create a presentation without pricing</li>
        <li><strong>Products Only:</strong> Show just the product list without quantities or prices</li>
      </ul>
      
      <h4>Advanced Options</h4>
      <p>Click "Advanced Options" to access:</p>
      <ul>
        <li><strong>Cover Pages:</strong> Add pre-designed covers (A&D, Builder, Merchant) or upload your own</li>
        <li><strong>Appendix:</strong> Add warranty/installation information at the end</li>
      </ul>
      
      <h4>Generate</h4>
      <p>Click "Generate PDF" to create and download your presentation.</p>
    </div>
    
    <div class="guide-section">
      <h3>Managing Products</h3>
      
      <h4>Sorting</h4>
      <p>Use the Sort dropdown to reorder your products by:</p>
      <ul>
        <li><strong>Room/Group:</strong> Groups products by their assigned room (default)</li>
        <li><strong>Product Code:</strong> Alphabetical by order code</li>
        <li><strong>Product Name:</strong> Alphabetical by product description</li>
      </ul>
      
      <h4>Product Actions</h4>
      <table class="shortcut-table">
        <thead>
          <tr>
            <th>Action</th>
            <th>How To</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Move product up/down</td>
            <td>Click the ↑ or ↓ arrows, or drag using the ⋮⋮ handle</td>
          </tr>
          <tr>
            <td>Move between rooms</td>
            <td>Drag a product and drop it in a different room section</td>
          </tr>
          <tr>
            <td>Reorder room groups</td>
            <td>Drag a room header to change the group order</td>
          </tr>
          <tr>
            <td>Delete a product</td>
            <td>Click the × button in the Actions column</td>
          </tr>
          <tr>
            <td>Undo delete</td>
            <td>Click "Undo" in the notification that appears</td>
          </tr>
        </tbody>
      </table>
    </div>
    
    <div class="guide-section">
      <h3>Keyboard Shortcuts</h3>
      <table class="shortcut-table">
        <thead>
          <tr>
            <th>Key</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><kbd>↵</kbd> Enter</td>
            <td>Select highlighted product in search results</td>
          </tr>
          <tr>
            <td><kbd>↑</kbd> <kbd>↓</kbd> Arrow Keys</td>
            <td>Navigate through search results</td>
          </tr>
          <tr>
            <td><kbd>Esc</kbd></td>
            <td>Close search dropdown / Cancel action</td>
          </tr>
          <tr>
            <td><kbd>Tab</kbd></td>
            <td>Move to next field</td>
          </tr>
        </tbody>
      </table>
    </div>
    
    <div class="guide-section">
      <h3>Settings</h3>
      <p>Click the ⚙️ settings icon to configure:</p>
      <ul>
        <li><strong>Staff Contact Details:</strong> Your name, position, email and phone. These appear on the presentation title page and are used to filter your saved selections.</li>
        <li><strong>Refresh Product Catalogue:</strong> Update the local product database with the latest Seima products and pricing.</li>
      </ul>
      
      <div class="guide-tip">
        <strong>💡 Important:</strong>
        <p>Make sure to set your email in Settings. This is how the app knows which saved selections belong to you.</p>
      </div>
    </div>
    
    <div class="guide-section">
      <h3>Supported File Formats</h3>
      <h4>Import Formats</h4>
      <ul>
        <li><strong>.csv</strong> - Comma-separated values with product codes</li>
        <li><strong>.xlsx / .xls</strong> - Microsoft Excel spreadsheets</li>
        <li><strong>.json</strong> - Seima Scanner export format</li>
      </ul>
      
      <div class="guide-tip">
        <strong>📋 Required Columns:</strong>
        <p>Import files should contain at minimum an "Order Code" or "Product Code" column. Optional columns include: Description, Quantity, Room, Notes, and Price.</p>
      </div>
    </div>
    
    <div class="guide-section">
      <h3>Troubleshooting</h3>
      
      <h4>Products not found during import?</h4>
      <p>If a product code cannot be matched to the Seima catalogue, it will still be added to your selection with placeholder information. You can manually update the details or remove the row.</p>
      
      <h4>PDF not downloading?</h4>
      <p>Some browsers (particularly on Samsung devices) may require additional permissions. Try using Chrome browser for the best experience.</p>
      
      <h4>Previous Selections not showing?</h4>
      <p>Make sure you have set your email address in Settings. Selections are filtered by the staff member who created them.</p>
      
      <h4>Data not saving?</h4>
      <p>Your work is automatically saved to your browser's local storage. For permanent cloud storage, use the "Save" button to store selections in Google Sheets.</p>
    </div>
    
    <div class="guide-section">
      <h3>Need Help?</h3>
      <p>For additional assistance or to report issues, please contact your Seima representative or email support.</p>
    </div>
    
    <div class="guide-footer">
      <div class="guide-footer-brand">
        <img src="assets/seima-logo.png" alt="Seima" class="guide-footer-logo">
        <span class="guide-footer-tagline">Build with Confidence</span>
      </div>
      <p class="guide-footer-copyright">© ${new Date().getFullYear()} Seima. All rights reserved.</p>
    </div>
  `;
}

async function showChangelog() {
  try {
    const modal = document.getElementById('changelog-modal');
    const content = document.getElementById('changelog-content');
    
    const response = await fetch('./version.txt');
    const versionText = await response.text();
    const lines = versionText.trim().split('\n');
    
    if (lines.length === 0) {
      content.innerHTML = '<p>No changelog available.</p>';
      modal.style.display = 'flex';
      return;
    }

    let html = '';
    lines.forEach(line => {
      if (line.trim()) {
        const dashIndex = line.indexOf(' - ');
        if (dashIndex > 0) {
          const version = line.substring(0, dashIndex).trim();
          const changelogText = line.substring(dashIndex + 3).trim();
          
          html += `
            <div style="margin-bottom: 30px; border-bottom: 1px solid #eee; padding-bottom: 20px;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                <h4 style="margin: 0; color: #a09484;">v${version}</h4>
              </div>
              <p style="margin: 10px 0; color: #555; line-height: 1.5;">${changelogText}</p>
            </div>
          `;
        }
      }
    });
    
    content.innerHTML = html || '<p>No changelog available.</p>';
    modal.style.display = 'flex';
  } catch (error) {
    console.error('Error loading changelog:', error);
    document.getElementById('changelog-content').innerHTML = '<p style="color: #999;">Error loading changelog.</p>';
    document.getElementById('changelog-modal').style.display = 'flex';
  }
}

document.addEventListener('click', (e) => {
  const modal = document.getElementById('changelog-modal');
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

// Export for module usage
export default SeimaScanner;
