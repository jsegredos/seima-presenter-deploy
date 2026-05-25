import{t as e}from"./rolldown-runtime-DK3Fl9T5.js";import{t}from"./vendor-fuse-CT6aDlEj.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var n={ROOMS:{PREDEFINED:[{name:`Bath 1`,icon:`🛁`},{name:`Bath 2`,icon:`🛁`},{name:`Bath 3`,icon:`🛁`},{name:`Ensuite`,icon:`🚿`},{name:`Powder`,icon:`🚽`},{name:`Kitchen`,icon:`🍽️`},{name:`Butlers`,icon:`👨‍🍳`},{name:`Laundry`,icon:`🧺`},{name:`Alfresco`,icon:`🍽️`}]},SEARCH:{MAX_RESULTS:8,SEARCH_FIELDS:[`Description`,`ProductName`,`OrderCode`,`BARCODE`]},CATALOG:{URL:`https://docs.google.com/spreadsheets/d/e/2PACX-1vT_zdHuh36ubrchDnG8GyaH6bSEAarJ68ypAlNjsKHWs8a-_BgJCEm-bNiTRhUp5Au8-P-ofkpp4fTw/pub?gid=0&single=true&output=csv`,CACHE_DURATION:3600*1e3,FORCE_FRESH:!1},STORAGE_KEYS:{CUSTOM_ROOMS:`customRooms`,SELECTED_PRODUCTS:`selectedProducts`,PRODUCT_CATALOG:`productCatalog`,USER_PREFERENCES:`userPreferences`,ROOM_ASSIGNMENTS:`roomAssignments`,STAFF_CONTACT:`staffContactDetails`,PDF_FORM_SETTINGS:`pdfFormSettings`},UI:{ANNOTATION_MAX_LENGTH:140,QUANTITY_OPTIONS:[1,2,3,4,5,6,7,8,9,10],MAX_QUANTITY:999},IMPORT:{MAX_FILE_SIZE:10*1024*1024,ACCEPTED_TYPES:[`.csv`,`.xlsx`,`.xls`,`.json`],PRODUCT_CODE:{VALIDATION_REGEX:`^\\d{6}$`,ALLOW_ANY_NON_EMPTY:!1,SKIP_VALIDATION:!1},COLUMN_PATTERNS:{productCode:[`code`,`ordercode`,`productcode`,`sku`,`order code`,`product code`,`item code`,`article`],productName:[`product name`,`description`,`name`,`item name`,`title`],quantity:[`quantity`,`qty`,`min order quantity`,`orderquantity`,`count`,`amount`],priceIncGst:[`price ea inc gst`,`price inc gst`,`priceincgst`,`rrp inc gst`,`inc gst`,`price incl gst`],priceExGst:[`price per unit`,`price ex gst`,`rrp ex gst`,`ex gst`,`price excl gst`,`unit price`],room:[`room`,`location`,`area`,`zone`],notes:[`notes`,`note`,`comments`,`comment`,`remarks`,`annotation`],productsJson:[`products json`,`productsjson`,`products_json`],customerName:[`customer name`,`customername`,`client name`,`buyer name`],customerEmail:[`customer email`,`customeremail`,`client email`,`email`],customerPhone:[`customer phone`,`customerphone`,`phone`,`telephone`,`mobile`],customerAddress:[`customer address`,`customeraddress`,`address`,`delivery address`],customerProject:[`customer project`,`customerproject`,`project`,`project name`],customerType:[`customer type`,`customertype`,`client type`],builderName:[`builder name`,`buildername`,`builder`],merchantName:[`merchant name`,`merchantname`,`merchant`],staffName:[`staff name`,`staffname`,`salesperson`,`rep name`],staffEmail:[`staff email`,`staffemail`,`rep email`],projectNotes:[`project notes`,`projectnotes`,`about notes`],roomsList:[`rooms list`,`roomslist`,`rooms`],estimateValue:[`estimate value`,`estimatevalue`,`total value`,`estimate`]}},EMAIL:{SEIMA_EMAIL_API_URL:`https://seima-email.seima.workers.dev/send-email`,SEIMA_EMAIL_API_KEY:``,FROM_EMAIL:`selections@seima.com.au`,FROM_NAME:`Seima Team`,MAX_ATTACHMENT_SIZE:15*1024*1024,RETRY_ATTEMPTS:3,RETRY_DELAY:2e3},RECORDING:{ENABLED:!0,GOOGLE_SHEETS_URL:`https://script.google.com/macros/s/AKfycbypt3Y7RLAko49s6Nc0mecYYd4FyiQqBcHFJr-1megO3-m1Vo1bCbUOkqAax3g9w508RA/exec`,RETRY_ATTEMPTS:3,RETRY_DELAY:1e3},COMPATIBILITY:{MIN_CHROME_VERSION:80,MIN_FIREFOX_VERSION:75,MIN_SAFARI_VERSION:13,MIN_EDGE_VERSION:80,REQUIRED_FEATURES:[`localStorage`,`fileReader`,`blob`,`createObjectURL`],MIN_COMPATIBILITY_SCORE:70,MEMORY_WARNING_THRESHOLD:.8},PERFORMANCE:{MAX_PRODUCTS_PER_SESSION:1e3,IMAGE_CACHE_SIZE:100,DEBOUNCE_DELAY:300}},r=class e{static loadScript(e){return new Promise((t,n)=>{if(document.querySelector(`script[src="${e}"]`)){t();return}let r=document.createElement(`script`);r.src=e,r.onload=t,r.onerror=()=>n(Error(`Failed to load script: ${e}`)),document.head.appendChild(r)})}static loadImage(e){return new Promise((t,n)=>{let r=new Image;r.onload=()=>t(r),r.onerror=()=>n(Error(`Failed to load image: ${e}`)),r.src=e})}static loadImageAsDataURL(e,t){let n=new Image;n.crossOrigin=`anonymous`,n.onload=function(){let e=document.createElement(`canvas`),r=e.getContext(`2d`);e.width=n.width,e.height=n.height,r.drawImage(n,0,0);try{t(e.toDataURL(`image/png`),n.width,n.height)}catch{t(null,0,0)}},n.onerror=()=>t(null,0,0),n.src=e}static formatPrice(e){if(!e||e===``)return``;let t=parseFloat(e.toString().replace(/[^\d.-]/g,``));return isNaN(t)?``:`$${t.toFixed(2)}`}static formatPriceLocale(e,t=!0){if(!e||e===``)return``;let n=parseFloat(e.toString().replace(/[^\d.-]/g,``));if(isNaN(n))return``;let r=n.toLocaleString(`en-AU`,{minimumFractionDigits:2,maximumFractionDigits:2});return t?`$${r}`:r}static sanitizeInput(e,t=null){if(typeof e!=`string`)return``;let n=e.trim();return t&&n.length>t&&(n=n.substring(0,t)),n}static escapeHtml(e){return typeof e==`string`?e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`).replace(/'/g,`&#039;`):``}static debounce(e,t){let n;return function(...r){clearTimeout(n),n=setTimeout(()=>e.apply(this,r),t)}}static throttle(e,t){let n;return function(...r){n||(e.apply(this,r),n=!0,setTimeout(()=>n=!1,t))}}static generateId(){return Date.now().toString(36)+Math.random().toString(36).substr(2)}static deepClone(e){return JSON.parse(JSON.stringify(e))}static getStorageItem(e,t=null){try{let n=localStorage.getItem(e);return n?JSON.parse(n):t}catch(n){return console.warn(`Failed to parse localStorage item: ${e}`,n),t}}static setStorageItem(e,t){try{return localStorage.setItem(e,JSON.stringify(t)),!0}catch(t){return console.warn(`Failed to set localStorage item: ${e}`,t),!1}}static removeStorageItem(e){try{return localStorage.removeItem(e),!0}catch(t){return console.warn(`Failed to remove localStorage item: ${e}`,t),!1}}static isMobileDevice(){return/Android|iPhone|iPad|iPod|webOS|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}static isIOSDevice(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream}static isSafari(){return/^((?!chrome|android).)*safari/i.test(navigator.userAgent)}static formatDate(e,t=!1){let n=new Date(e);if(isNaN(n.getTime()))return``;let r=String(n.getDate()).padStart(2,`0`),i=String(n.getMonth()+1).padStart(2,`0`),a=n.getFullYear();return t?`${r}/${i}/${a} ${String(n.getHours()).padStart(2,`0`)}:${String(n.getMinutes()).padStart(2,`0`)}`:`${r}/${i}/${a}`}static generateFilename(e,t){let n=new Date,r=String(n.getDate()).padStart(2,`0`),i=String(n.getMonth()+1).padStart(2,`0`),a=String(n.getFullYear()).slice(-2),o=String(n.getHours()).padStart(2,`0`),s=String(n.getMinutes()).padStart(2,`0`);return`${(e||`file`).replace(/[^a-zA-Z0-9\s]/g,``)}-${r}${i}${a}.${o}${s}.${t}`}static sleep(e){return new Promise(t=>setTimeout(t,e))}static async fetchWithRetry(t,{retries:n=2,backoff:r=1e3,timeout:i=15e3,...a}={}){let o;for(let s=0;s<=n;s++){let c=new AbortController,l=setTimeout(()=>c.abort(),i);try{let e=await fetch(t,{...a,signal:c.signal});if(clearTimeout(l),!e.ok&&s<n)throw Error(`HTTP ${e.status}`);return e}catch(t){clearTimeout(l),o=t,s<n&&await e.sleep(r*2**s)}}throw o}},i={CUSTOM_ROOMS:`customRooms`,SELECTED_PRODUCTS:`selectedProducts`,PRODUCT_CATALOG:`productCatalog`,USER_PREFERENCES:`userPreferences`,ROOM_ASSIGNMENTS:`roomAssignments`,STAFF_CONTACT:`staffContactDetails`,PDF_FORM_SETTINGS:`pdfFormSettings`},a=class e{static keys={...i};static configure(t){e.keys={...i,...t}}static getCustomRooms(){return r.getStorageItem(e.keys.CUSTOM_ROOMS,[])}static setCustomRooms(t){return r.setStorageItem(e.keys.CUSTOM_ROOMS,t)}static addCustomRoom(t,n=[]){let i=e.getCustomRooms(),a=r.sanitizeInput(t,50);return!a||[...n.map(e=>e.name),...i.map(e=>e.name)].includes(a)?!1:(i.push({name:a}),e.setCustomRooms(i))}static removeCustomRoom(t){let n=e.getCustomRooms();return t>=0&&t<n.length?(n.splice(t,1),e.setCustomRooms(n)):!1}static getSelectedProducts(){return r.getStorageItem(e.keys.SELECTED_PRODUCTS,[])}static setSelectedProducts(t){return r.setStorageItem(e.keys.SELECTED_PRODUCTS,t)}static addProductToSelection(t,{notes:n=``,room:i=``,quantity:a=1,planCode:o=``,maxAnnotationLength:s=140}={}){try{let c=e.getSelectedProducts(),l={id:r.generateId(),product:r.deepClone(t),notes:r.sanitizeInput(n,s),room:r.sanitizeInput(i,50),planCode:r.sanitizeInput(o,32),quantity:Math.max(1,Math.min(999,parseInt(a)||1)),timestamp:Date.now()};return c.push(l),e.setSelectedProducts(c)?l.id:!1}catch(e){return console.error(`Error adding product to selection:`,e),!1}}static updateProductQuantity(t,n){let r=e.getSelectedProducts(),i=r.findIndex(e=>e.id===t);return i===-1?!1:(r[i].quantity=Math.max(1,Math.min(999,parseInt(n)||1)),e.setSelectedProducts(r))}static updateProductRoom(t,n){let i=e.getSelectedProducts(),a=i.findIndex(e=>e.id===t);return a===-1?!1:(i[a].room=r.sanitizeInput(n,50),e.setSelectedProducts(i))}static updateProductNotes(t,n,i=140){let a=e.getSelectedProducts(),o=a.findIndex(e=>e.id===t);return o===-1?!1:(a[o].notes=r.sanitizeInput(n,i),e.setSelectedProducts(a))}static updateProductPrice(t,n){let r=e.getSelectedProducts(),i=r.findIndex(e=>e.id===t);return i===-1?!1:(r[i].product.UserEditedPrice=n,e.setSelectedProducts(r))}static updateProductDetails(t,n={},i=140){let a=e.getSelectedProducts(),o=a.findIndex(e=>e.id===t);if(o===-1)return!1;let s={...a[o],...n};return n.notes!==void 0&&(s.notes=r.sanitizeInput(n.notes,i)),n.room!==void 0&&(s.room=r.sanitizeInput(n.room,50)),n.planCode!==void 0&&(s.planCode=r.sanitizeInput(n.planCode,32)),n.quantity!==void 0&&(s.quantity=Math.max(1,Math.min(999,parseInt(n.quantity)||1))),n.product&&(s.product=r.deepClone(n.product)),a[o]=s,e.setSelectedProducts(a)}static removeProductFromSelection(t){let n=e.getSelectedProducts().filter(e=>e.id!==t);return e.setSelectedProducts(n)}static clearAllSelections(){return e.setSelectedProducts([])&&e.setCustomRooms([])}static getSelectionCount(){return e.getSelectedProducts().length}static getStaffContactDetails(){try{let t=localStorage.getItem(e.keys.STAFF_CONTACT);return t?JSON.parse(t):null}catch(e){return console.error(`Error getting staff contact details:`,e),null}}static setStaffContactDetails(t){try{return localStorage.setItem(e.keys.STAFF_CONTACT,JSON.stringify(t)),!0}catch(e){return console.error(`Error saving staff contact details:`,e),!1}}static getUserSettings(){return r.getStorageItem(e.keys.USER_PREFERENCES,{})}static saveUserSettings(t){return r.setStorageItem(e.keys.USER_PREFERENCES,t)}static getPdfFormSettings(){return r.getStorageItem(e.keys.PDF_FORM_SETTINGS,{})}static savePdfFormSettings(t){return r.setStorageItem(e.keys.PDF_FORM_SETTINGS,t)}static getCachedCatalog(){return r.getStorageItem(e.keys.PRODUCT_CATALOG,null)}static saveCatalogCache(t){return r.setStorageItem(e.keys.PRODUCT_CATALOG,{products:t,timestamp:Date.now()})}static clearCatalogCache(){return r.removeStorageItem(e.keys.PRODUCT_CATALOG)}},o=new class{constructor(){this.features={},this.deviceInfo={},this.networkStatus={},this.memoryInfo={},this.compatibilityScore=0,this.init()}init(){this.detectDevice(),this.detectBrowser(),this.checkFeatureSupport(),this.checkMemoryLimitations(),this.setupNetworkMonitoring(),this.calculateCompatibilityScore(),this.setupPerformanceMonitoring()}detectDevice(){let e=navigator.userAgent;this.deviceInfo={isMobile:/Mobi|Android/i.test(e),isTablet:/iPad|Android(?=.*Tablet)|(?=.*Mobile)(?=.*Safari)/i.test(e),isDesktop:!/Mobi|Android|iPad/i.test(e),isIOS:/iPad|iPhone|iPod/.test(e),isAndroid:/Android/i.test(e),isWindows:/Windows/i.test(e),isMacOS:/Macintosh|Mac OS X/i.test(e),isIPhone:/iPhone/i.test(e),isIPad:/iPad/i.test(e),isWebView:this.detectWebView(e),isStandalone:window.navigator.standalone===!0,screenWidth:window.screen.width,screenHeight:window.screen.height,devicePixelRatio:window.devicePixelRatio||1,orientation:this.getOrientation(),userAgent:e}}detectBrowser(){let e=navigator.userAgent;this.deviceInfo.browser={name:this.getBrowserName(e),version:this.getBrowserVersion(e),engine:this.getBrowserEngine(e),isChrome:/Chrome/i.test(e)&&!/Edge|Edg/i.test(e),isFirefox:/Firefox/i.test(e),isSafari:/Safari/i.test(e)&&!/Chrome|Chromium/i.test(e),isEdge:/Edge|Edg/i.test(e),isOpera:/Opera|OPR/i.test(e),chromeVersion:this.getChromeVersion(e),safariVersion:this.getSafariVersion(e),firefoxVersion:this.getFirefoxVersion(e)}}checkFeatureSupport(){this.features={localStorage:this.checkLocalStorage(),sessionStorage:this.checkSessionStorage(),indexedDB:`indexedDB`in window,fileAPI:`File`in window,fileReader:`FileReader`in window,fileSystemAccess:`showSaveFilePicker`in window,downloadAttribute:this.checkDownloadAttribute(),getUserMedia:`mediaDevices`in navigator&&`getUserMedia`in navigator.mediaDevices,webRTC:`RTCPeerConnection`in window,canvas:`HTMLCanvasElement`in window,webGL:this.checkWebGL(),fetch:`fetch`in window,xhr:`XMLHttpRequest`in window,serviceWorker:`serviceWorker`in navigator,modules:this.checkESModules(),asyncAwait:this.checkAsyncAwait(),webAssembly:`WebAssembly`in window,createObjectURL:`URL`in window&&`createObjectURL`in URL,revokeObjectURL:`URL`in window&&`revokeObjectURL`in URL,blob:`Blob`in window,touchEvents:`ontouchstart`in window,deviceMotion:`DeviceMotionEvent`in window,deviceOrientation:`DeviceOrientationEvent`in window,clipboard:`clipboard`in navigator,onlineStatus:`onLine`in navigator,connection:`connection`in navigator||`mozConnection`in navigator||`webkitConnection`in navigator}}checkMemoryLimitations(){this.memoryInfo={jsHeapSizeLimit:performance.memory?.jsHeapSizeLimit||null,totalJSHeapSize:performance.memory?.totalJSHeapSize||null,usedJSHeapSize:performance.memory?.usedJSHeapSize||null,estimatedMaxFileSize:this.estimateMaxFileSize(),memoryPressure:this.estimateMemoryPressure(),maxBlobSize:this.estimateMaxBlobSize(),maxDataURISize:this.estimateMaxDataURISize()}}setupNetworkMonitoring(){this.networkStatus={isOnline:navigator.onLine,connectionType:this.getConnectionType(),effectiveType:this.getEffectiveConnectionType(),downlink:this.getDownlink(),rtt:this.getRTT()},window.addEventListener(`online`,()=>{this.networkStatus.isOnline=!0,this.onNetworkChange(`online`)}),window.addEventListener(`offline`,()=>{this.networkStatus.isOnline=!1,this.onNetworkChange(`offline`)}),navigator.connection&&navigator.connection.addEventListener(`change`,()=>{this.updateNetworkStatus(),this.onNetworkChange(`connection`)})}calculateCompatibilityScore(){let e=100,t=[];this.features.localStorage||(e-=20,t.push(`Local storage not supported`)),this.features.fileReader||(e-=15,t.push(`File reading not supported`)),this.features.blob||(e-=15,t.push(`Blob creation not supported`)),this.features.createObjectURL||(e-=15,t.push(`Object URL creation not supported`)),this.features.fetch||(e-=10,t.push(`Modern fetch API not available`)),this.features.modules||(e-=10,t.push(`ES6 modules not supported`)),this.features.getUserMedia||(e-=8,t.push(`Camera access limited`)),this.deviceInfo.isWebView&&(e-=5,t.push(`WebView compatibility concerns`)),this.memoryInfo.memoryPressure===`high`&&(e-=8,t.push(`High memory pressure detected`)),this.networkStatus.isOnline||(e-=5,t.push(`Currently offline`)),this.compatibilityScore=Math.max(0,e),this.compatibilityIssues=t}setupPerformanceMonitoring(){if(performance.memory&&setInterval(()=>{this.updateMemoryInfo()},3e4),`PerformanceObserver`in window)try{new PerformanceObserver(e=>{for(let t of e.getEntries())t.entryType===`measure`&&this.onPerformanceMeasure(t)}).observe({entryTypes:[`measure`]})}catch(e){console.warn(`Performance observer not fully supported:`,e)}}detectWebView(e){return/wv|WebView|Version\/[\d.]+.*Mobile.*Safari/i.test(e)||/Android/i.test(e)&&/Version\/\d\.\d/i.test(e)&&!/ Chrome\//.test(e)||/FB_IAB|FBAN|FBAV/i.test(e)}getOrientation(){return window.screen&&window.screen.orientation?window.screen.orientation.type:window.innerHeight>window.innerWidth?`portrait`:`landscape`}getBrowserName(e){return/SamsungBrowser/i.test(e)?`Samsung Internet`:/Chrome/i.test(e)&&!/Edge|Edg/i.test(e)?`Chrome`:/Firefox/i.test(e)?`Firefox`:/Safari/i.test(e)&&!/Chrome|Chromium/i.test(e)?`Safari`:/Edge|Edg/i.test(e)?`Edge`:/Opera|OPR/i.test(e)?`Opera`:`Unknown`}getBrowserVersion(e){let t=e.match(/(Chrome|Firefox|Safari|Edge|Edg|SamsungBrowser|Opera|OPR)\/([0-9.]+)/i);return t?t[2]:`Unknown`}getBrowserEngine(e){return/WebKit/i.test(e)?`WebKit`:/Gecko/i.test(e)?`Gecko`:/Trident/i.test(e)?`Trident`:/EdgeHTML/i.test(e)?`EdgeHTML`:`Unknown`}getChromeVersion(e){let t=e.match(/Chrome\/([0-9.]+)/i);return t?parseInt(t[1]):null}getSafariVersion(e){let t=e.match(/Version\/([0-9.]+).*Safari/i);return t?parseFloat(t[1]):null}getFirefoxVersion(e){let t=e.match(/Firefox\/([0-9.]+)/i);return t?parseInt(t[1]):null}checkLocalStorage(){try{let e=`compatibilityTest`;return localStorage.setItem(e,e),localStorage.removeItem(e),!0}catch{return!1}}checkSessionStorage(){try{let e=`compatibilityTest`;return sessionStorage.setItem(e,e),sessionStorage.removeItem(e),!0}catch{return!1}}checkDownloadAttribute(){return`download`in document.createElement(`a`)}checkWebGL(){try{let e=document.createElement(`canvas`);return!!(e.getContext(`webgl`)||e.getContext(`experimental-webgl`))}catch{return!1}}checkESModules(){try{return typeof Symbol<`u`&&typeof Promise<`u`&&typeof Map<`u`}catch{return!1}}checkAsyncAwait(){try{return typeof(async function(){}).constructor==`function`}catch{return!1}}estimateMaxFileSize(){return this.deviceInfo.isDesktop?100*1024*1024:this.deviceInfo.isTablet?50*1024*1024:this.deviceInfo.isMobile?20*1024*1024:10*1024*1024}estimateMemoryPressure(){if(!performance.memory)return`unknown`;let e=performance.memory.usedJSHeapSize/performance.memory.jsHeapSizeLimit;return e>.8?`high`:e>.6?`medium`:`low`}estimateMaxBlobSize(){return this.deviceInfo.browser?.isChrome?500*1024*1024:this.deviceInfo.browser?.isFirefox?200*1024*1024:this.deviceInfo.browser?.isSafari?100*1024*1024:50*1024*1024}estimateMaxDataURISize(){return this.deviceInfo.browser?.isChrome?2*1024*1024:this.deviceInfo.browser?.isFirefox?1*1024*1024:(this.deviceInfo.browser?.isSafari,512*1024)}getConnectionType(){return navigator.connection?navigator.connection.type||navigator.connection.effectiveType:`unknown`}getEffectiveConnectionType(){return navigator.connection?.effectiveType||`unknown`}getDownlink(){return navigator.connection?.downlink||null}getRTT(){return navigator.connection?.rtt||null}updateNetworkStatus(){this.networkStatus={isOnline:navigator.onLine,connectionType:this.getConnectionType(),effectiveType:this.getEffectiveConnectionType(),downlink:this.getDownlink(),rtt:this.getRTT()}}updateMemoryInfo(){performance.memory&&(this.memoryInfo.totalJSHeapSize=performance.memory.totalJSHeapSize,this.memoryInfo.usedJSHeapSize=performance.memory.usedJSHeapSize,this.memoryInfo.memoryPressure=this.estimateMemoryPressure())}onNetworkChange(e){console.log(`Network status changed: ${e}`,this.networkStatus)}onPerformanceMeasure(e){e.duration>1e3&&console.warn(`Performance concern: ${e.name} took ${e.duration}ms`)}getCompatibilityReport(){return{score:this.compatibilityScore,issues:this.compatibilityIssues,device:this.deviceInfo,features:this.features,memory:this.memoryInfo,network:this.networkStatus,recommendations:this.getRecommendations()}}getRecommendations(){let e=[];return this.compatibilityScore<70&&e.push({type:`critical`,message:`Browser compatibility issues detected. Consider updating your browser.`,action:`update_browser`}),this.memoryInfo.memoryPressure===`high`&&e.push({type:`warning`,message:`High memory usage detected. Close other browser tabs for better performance.`,action:`reduce_memory`}),!this.features.fileSystemAccess&&this.deviceInfo.isDesktop&&e.push({type:`info`,message:`Modern file saving features available in newer browsers.`,action:`update_browser`}),this.networkStatus.isOnline||e.push({type:`error`,message:`Internet connection required for full functionality.`,action:`check_connection`}),e}isFeatureSupported(e){return this.features[e]||!1}isCompatible(){return this.compatibilityScore>=70}getOptimalDownloadMethod(){return this.features.fileSystemAccess&&this.deviceInfo.isDesktop?`fileSystemAPI`:this.features.downloadAttribute?`downloadAttribute`:this.features.createObjectURL?`objectURL`:`manual`}shouldShowCompatibilityWarning(){return this.compatibilityScore<80||this.compatibilityIssues.length>0}logCompatibilityInfo(){console.group(`Browser Compatibility Report`),console.log(`Score:`,this.compatibilityScore),console.log(`Device:`,this.deviceInfo),console.log(`Features:`,this.features),console.log(`Issues:`,this.compatibilityIssues),console.log(`Recommendations:`,this.getRecommendations()),console.groupEnd()}};new class{constructor(e=n){this.config=e,this.products=[],this.isLoaded=!1,this.isLoading=!1,this.lastLoadTime=null,this.loadPromise=null}async init(e={}){let t=e.forceFresh||this.config.CATALOG?.FORCE_FRESH||!1;if(this.isLoading)return this.loadPromise;this.isLoading=!0,this.loadPromise=this._loadCatalog(t);try{return await this.loadPromise,this.isLoaded=!0,console.log(`✅ Data service initialized with ${this.products.length} products`),!0}catch(e){return console.error(`❌ Failed to initialize data service:`,e),!1}finally{this.isLoading=!1}}async _loadCatalog(e=!1){let t=this.config.CATALOG?.URL||this.config.CSV?.URL||this.config.CATALOG_URL;if(!t)throw Error(`Catalog URL not configured`);if(!e){let e=a.getCachedCatalog(),t=this.config.CATALOG?.CACHE_DURATION||3600*1e3;if(e&&e.products&&e.timestamp&&Date.now()-e.timestamp<t){this.products=e.products,this.lastLoadTime=new Date(e.timestamp),console.log(`📦 Loaded ${this.products.length} products from cache`);return}}console.log(`🌐 Fetching product catalog from server...`);try{let e=await fetch(t);if(!e.ok)throw Error(`HTTP ${e.status}: ${e.statusText}`);let n=await e.text();this.products=this._parseCSV(n),this.lastLoadTime=new Date,a.saveCatalogCache(this.products),console.log(`✅ Loaded ${this.products.length} products from server`)}catch(e){let t=a.getCachedCatalog();if(t&&t.products)this.products=t.products,this.lastLoadTime=new Date(t.timestamp),console.warn(`⚠️ Using cached catalog due to network error:`,e.message);else throw e}}_parseCSV(e){let t=e.split(`
`).filter(e=>e.trim());if(t.length<2)return[];let n=this._parseCSVLine(t[0]),r=[];for(let e=1;e<t.length;e++){let i=this._parseCSVLine(t[e]);if(i.length===n.length){let e={};n.forEach((t,n)=>{e[t.trim()]=i[n]}),e.OrderCode&&r.push(e)}}return r}_parseCSVLine(e){let t=[],n=``,r=!1;for(let i=0;i<e.length;i++){let a=e[i],o=e[i+1];a===`"`&&!r?r=!0:a===`"`&&r?o===`"`?(n+=`"`,i++):r=!1:a===`,`&&!r?(t.push(n.trim()),n=``):n+=a}return t.push(n.trim()),t}getAllProducts(){return this.products}searchProducts(e,t=null){if(!e||!this.isLoaded)return[];let n=e.toLowerCase().trim(),r=t||this.config.SEARCH?.MAX_RESULTS||8,i=this.config.SEARCH?.SEARCH_FIELDS||[`Description`,`ProductName`,`OrderCode`,`BARCODE`];return this.products.map(e=>{let t=0;for(let r of i){let i=(e[r]||``).toString().toLowerCase();i===n?t+=100:i.startsWith(n)?t+=50:i.includes(n)&&(t+=25)}return{product:e,score:t}}).filter(e=>e.score>0).sort((e,t)=>t.score-e.score).slice(0,r).map(e=>e.product)}findProductByOrderCode(e){if(!e||!this.isLoaded)return null;let t=e.toString().trim();return this.products.find(e=>(e.OrderCode||``).toString().trim()===t)||null}findProductByBarcode(e){if(!e||!this.isLoaded)return null;let t=e.toString().trim();return this.products.find(e=>(e.BARCODE||e.Barcode||``).toString().trim()===t)||null}getSelection(){return a.getSelectedProducts()}addProduct(e,{notes:t=``,room:n=`Blank`,quantity:r=1}={}){return a.addProductToSelection(e,{notes:t,room:n,quantity:r})}removeProduct(e){return a.removeProductFromSelection(e)}clearSelection(){return a.clearAllSelections()}getSelectionStats(){let e=this.getSelection(),t=0,n=0,r=new Set;for(let i of e){t+=i.quantity||1,r.add(i.room||`Unassigned`);let e=i.product,a=0;if(e.UserEditedPrice!==void 0&&e.UserEditedPrice!==null)a=parseFloat(e.UserEditedPrice.toString().replace(/[^\d.-]/g,``))||0;else{let t=e.RRP_INCGST||e.RRP_EX||e.Price||0;a=parseFloat(t.toString().replace(/[^\d.-]/g,``))||0}n+=a*(i.quantity||1)}return{totalProducts:t,totalItems:e.length,totalValue:n,roomCount:r.size,rooms:Array.from(r)}}getProductsLegacyFormat(){return this.getSelection().map(e=>({...e.product,Room:e.room,Notes:e.notes,Quantity:e.quantity,Timestamp:new Date(e.timestamp).toISOString()}))}getStaffContact(){return a.getStaffContactDetails()}async refreshCatalog(){return a.clearCatalogCache(),this.init({forceFresh:!0})}},new class{constructor(e=n.EMAIL){this.config=e,this.isInitialized=!1,this.emailJsLoaded=!1}async init(){if(this.isInitialized)return!0;try{return await this._loadEmailJS(),window.emailjs&&this.config.PUBLIC_KEY&&(window.emailjs.init(this.config.PUBLIC_KEY),this.emailJsLoaded=!0),this.isInitialized=!0,console.log(`✅ Email service initialized`),!0}catch(e){return console.error(`❌ Failed to initialize email service:`,e),!1}}async _loadEmailJS(){if(!window.emailjs)return r.loadScript(`https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js`)}async send(e){if(this.isInitialized||await this.init(),!this.emailJsLoaded)throw Error(`EmailJS not loaded`);let t={to_email:e.to_email,to_name:e.to_name||e.customer_name||`Customer`,from_name:this.config.FROM_NAME||`Seima Team`,subject:e.subject||`Your Seima Product Selection`,message:e.message||``,customer_name:e.customer_name||``,customer_project:e.customer_project||``,customer_address:e.customer_address||``,customer_telephone:e.customer_telephone||``,total_products:e.total_products||``,total_rooms:e.total_rooms||``,file_info:e.file_info||``,...this._sanitizeAttachment(e)},n=this.config.RETRY_ATTEMPTS||3,i=this.config.RETRY_DELAY||2e3;for(let e=1;e<=n;e++)try{let n=await window.emailjs.send(this.config.SERVICE_ID,this.config.TEMPLATE_ID,t);return console.log(`✅ Email sent successfully (attempt ${e})`),{success:!0,result:n}}catch(t){if(console.warn(`❌ Email attempt ${e} failed:`,t),e<n)await r.sleep(i);else throw t}}_sanitizeAttachment(e){if(!e.attachment)return{};let t=e.attachment;return t.startsWith(`data:`)&&(t=t.split(`,`)[1]||t),{attachment:t,attachment_name:e.attachment_name||`attachment.pdf`}}async sendWithAttachments(e,t,n,i){let a=await this._blobToBase64(t),o=(e.project||`Selection`).replace(/[^a-zA-Z0-9\s]/g,``),s=r.generateFilename(o,`pdf`),c=this._buildEmailMessage(e,i),l={to_email:e.email,to_name:e.name,customer_name:e.name,customer_project:e.project,customer_address:e.address,customer_telephone:e.telephone||e.phone,total_products:i.totalProducts.toString(),total_rooms:i.roomCount.toString(),message:c,attachment:a,attachment_name:s,file_info:`PDF: ${s} (${(t.size/1024).toFixed(1)} KB)`};return this.send(l)}_blobToBase64(e){return new Promise((t,n)=>{let r=new FileReader;r.onloadend=()=>{let e=r.result.split(`,`)[1];t(e)},r.onerror=n,r.readAsDataURL(e)})}_buildEmailMessage(e,t){let n=[`Thank you for your Seima product selection.`,``,`Your selection summary:`,`• Total products: ${t.totalProducts}`,`• Rooms: ${t.roomCount}`];return t.totalValue>0&&!e.excludePrice&&n.push(`• Estimated value: ${r.formatPriceLocale(t.totalValue)}`),n.push(``,`Please find your product selection attached as a PDF document.`,``,`If you have any questions, please contact your Seima representative.`,``,`Kind regards,`,`The Seima Team`,`www.seima.com.au`),n.join(`
`)}isAvailable(){return this.emailJsLoaded&&!!this.config.SERVICE_ID&&!!this.config.TEMPLATE_ID}static validateEmail(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}};var s=`authSession`,c=10080*60*1e3,l=720*60*60*1e3,u=new class{constructor(){this.baseUrl=``,this.emailConfig=null,this.session=null,this.onAuthChange=null,this.loadSession()}configure(e){e.googleSheetsUrl&&(this.baseUrl=e.googleSheetsUrl),e.email&&(this.emailConfig=e.email),console.log(`🔐 Auth service configured`)}loadSession(){try{let e=localStorage.getItem(s);if(e){let t=JSON.parse(e);t.expiry&&Date.now()<t.expiry?(this.session=t,console.log(`✅ Session restored`)):(console.log(`⏰ Session expired, clearing...`),this.clearSession())}}catch(e){console.warn(`Failed to load session:`,e),this.clearSession()}}saveSession(e){try{localStorage.setItem(s,JSON.stringify(e)),this.session=e}catch(e){console.error(`Failed to save session:`,e)}}clearSession(){localStorage.removeItem(s),this.session=null,this.onAuthChange&&this.onAuthChange(null)}isLoggedIn(){return this.session!==null&&this.session.user!==null}getCurrentUser(){return this.session?.user||null}getUserRole(){let e=this.getCurrentUser();if(!e)return`user`;let t=String(e.role||``).toLowerCase().trim(),n=e.email&&String(e.email).toLowerCase().endsWith(`@seima.com.au`),r=e.emailVerified!==!1;return t===`admin`&&(!n||r)?`admin`:t===`staff`&&(!n||r)||n&&r?`staff`:t===`power`?`power`:`user`}isPowerUser(){let e=this.getUserRole();return e===`power`||e===`staff`||e===`admin`}isStaffMode(){let e=this.getUserRole();return e===`staff`||e===`admin`}isAdmin(){return this.getUserRole()===`admin`}getSession(){return this.session}getSessionToken(){return this.session?.token||null}getAuthHeaders(){let e=this.getSessionToken();return e?{Authorization:`Bearer ${e}`}:{}}handleUnauthorizedResponse(e,t=``){if(!e||e.status!==401)return!1;if(this.session){let e=t?` (${t})`:``;console.warn(`🔐 Session unauthorized${e}; clearing local session`),this.clearSession()}return!0}async apiRequest(e,t){if(!this.baseUrl)throw Error(`Google Sheets URL not configured. Call authService.configure() first.`);let n=new URLSearchParams;n.append(`action`,e);for(let[e,r]of Object.entries(t))r!=null&&n.append(e,typeof r==`object`?JSON.stringify(r):r);let r=await fetch(this.baseUrl,{method:`POST`,body:n});if(!r.ok)throw Error(`HTTP ${r.status}: ${r.statusText}`);return await r.json()}validatePassword(e){return!e||e.length<8?{valid:!1,error:`Password must be at least 8 characters`}:/\d/.test(e)?{valid:!0}:{valid:!1,error:`Password must contain at least one number`}}validateEmail(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}async register(e,t,n,r=``,i=``){if(!e||!this.validateEmail(e))return{success:!1,error:`Please enter a valid email address`};let a=this.validatePassword(t);if(!a.valid)return{success:!1,error:a.error};if(!n||n.trim().length<2)return{success:!1,error:`Please enter your name`};try{let a=await this.apiRequest(`userRegister`,{email:e.trim().toLowerCase(),password:t,name:n.trim(),position:r.trim(),phone:String(i||``).trim()});return a.success&&a.verifyToken&&this.sendVerificationEmail(e.trim().toLowerCase(),n.trim(),a.verifyToken),a}catch(e){return console.error(`Registration error:`,e),{success:!1,error:`Registration failed. Please try again.`}}}async login(e,t,n=!1){if(!e||!t)return{success:!1,error:`Please enter email and password`};try{let r=await this.apiRequest(`userLogin`,{email:e.trim().toLowerCase(),password:t});if(r.success){let e=Date.now()+(n?l:c),t={user:r.user,token:r.sessionToken,expiry:e,rememberMe:n};this.saveSession(t),this.onAuthChange&&this.onAuthChange(r.user),console.log(`✅ Logged in`)}return r}catch(e){return console.error(`Login error:`,e),{success:!1,error:`Login failed. Please try again.`}}}async logout(){let e=this.getSessionToken();if(e&&this.baseUrl)try{await this.apiRequest(`userLogout`,{sessionToken:e})}catch{}this.clearSession(),console.log(`👋 Logged out`)}async requestPasswordReset(e){if(!e||!this.validateEmail(e))return{success:!1,error:`Please enter a valid email address`};try{let t=await this.apiRequest(`userRequestPasswordReset`,{email:e.trim().toLowerCase()});return t.success&&t.resetToken&&await this.sendPasswordResetEmail(t.userEmail,t.userName,t.resetToken),{success:!0,message:`If this email exists, a reset code has been sent`}}catch(e){return console.error(`Password reset request error:`,e),{success:!1,error:`Failed to request password reset. Please try again.`}}}async sendPasswordResetEmail(e,t,n){if(!this.emailConfig){console.warn(`Email config not set, cannot send password reset email`);return}let r=this.emailConfig.SEIMA_EMAIL_API_URL;if(!r){console.error(`SEIMA_EMAIL_API_URL not configured, cannot send password reset email`);return}let i=t||`User`,a=`<!DOCTYPE html>
<html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f8f8fa;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f8f8fa;padding:32px 0;">
<tr><td align="center">
<table width="480" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:8px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
  <tr><td style="background:#a09484;padding:24px 32px;text-align:center;">
    <h1 style="margin:0;color:#ffffff;font-size:20px;font-weight:600;letter-spacing:0.5px;">SEIMA</h1>
  </td></tr>
  <tr><td style="padding:32px;">
    <p style="margin:0 0 16px;color:#222;font-size:15px;">Hi ${i},</p>
    <p style="margin:0 0 24px;color:#4b5563;font-size:14px;line-height:1.6;">We received a request to reset your password. Use the code below to complete the process. This code expires in 1 hour.</p>
    <div style="text-align:center;margin:24px 0;">
      <div style="display:inline-block;background:#f3f0ed;border:2px solid #a09484;border-radius:8px;padding:16px 32px;letter-spacing:6px;font-size:28px;font-weight:700;color:#222;">${n}</div>
    </div>
    <p style="margin:24px 0 0;color:#6b7280;font-size:13px;line-height:1.5;">If you didn't request this, you can safely ignore this email. Your password will remain unchanged.</p>
  </td></tr>
  <tr><td style="background:#f8f8fa;padding:16px 32px;text-align:center;border-top:1px solid #e5e7eb;">
    <p style="margin:0;color:#9ca3af;font-size:11px;">© ${new Date().getFullYear()} Seima · Build with Confidence · <a href="https://www.seima.com.au" style="color:#a09484;text-decoration:none;">seima.com.au</a></p>
  </td></tr>
</table>
</td></tr></table>
</body></html>`;try{let t={"Content-Type":`application/json`,...this.getAuthHeaders()};!t.Authorization&&this.emailConfig.SEIMA_EMAIL_API_KEY&&(t[`X-Api-Key`]=this.emailConfig.SEIMA_EMAIL_API_KEY),console.log(`📧 Sending password reset email`);let n=await fetch(r,{method:`POST`,headers:t,body:JSON.stringify({to:e,toName:i,subject:`Your Seima Password Reset Code`,html:a,fromName:this.emailConfig.FROM_NAME||`Seima Team`})}),o=await n.json().catch(()=>({}));n.ok?console.log(`✅ Password reset email sent`):console.error(`Password reset email failed:`,n.status,o)}catch(e){console.error(`Failed to send password reset email:`,e)}}async sendVerificationEmail(e,t,n){if(!this.emailConfig){console.warn(`Email config not set, cannot send verification email`);return}let r=this.emailConfig.SEIMA_EMAIL_API_URL;if(!r){console.error(`SEIMA_EMAIL_API_URL not configured, cannot send verification email`);return}let i=t||`there`,a=new Date().getFullYear(),o=`<!DOCTYPE html>
<html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f8f8fa;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f8f8fa;padding:32px 0;">
<tr><td align="center">
<table width="480" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:8px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
  <tr><td style="background:#a09484;padding:24px 32px;text-align:center;">
    <h1 style="margin:0;color:#ffffff;font-size:20px;font-weight:600;letter-spacing:0.5px;">SEIMA</h1>
  </td></tr>
  <tr><td style="padding:32px;">
    <p style="margin:0 0 16px;color:#222;font-size:15px;">Hi ${i},</p>
    <p style="margin:0 0 24px;color:#4b5563;font-size:14px;line-height:1.6;">Welcome to the Seima Product Presenter! Verify your email address using the code below. This code expires in 1 hour.</p>
    <div style="text-align:center;margin:24px 0;">
      <div style="display:inline-block;background:#f3f0ed;border:2px solid #a09484;border-radius:8px;padding:16px 32px;letter-spacing:6px;font-size:28px;font-weight:700;color:#222;">${n}</div>
    </div>
    <p style="margin:24px 0 0;color:#6b7280;font-size:13px;line-height:1.5;">Sign in at <a href="https://presenter.seima.com.au" style="color:#a09484;text-decoration:none;font-weight:600;">presenter.seima.com.au</a> and enter this code when prompted to verify your email and access staff features.</p>
    ${e.toLowerCase().endsWith(`@seima.com.au`)?`<p style="margin:16px 0 0;color:#166534;font-size:14px;line-height:1.6;background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:12px 16px;">
          <strong>Staff access:</strong> Once verified, you will have access to staff features including competitor cross-referencing.</p>`:``}
  </td></tr>
  <tr><td style="background:#f8f8fa;padding:16px 32px;text-align:center;border-top:1px solid #e5e7eb;">
    <p style="margin:0;color:#9ca3af;font-size:11px;">\u00a9 ${a} Seima \u00b7 Build with Confidence \u00b7 <a href="https://www.seima.com.au" style="color:#a09484;text-decoration:none;">seima.com.au</a></p>
  </td></tr>
</table>
</td></tr></table>
</body></html>`;try{let t={"Content-Type":`application/json`,...this.getAuthHeaders()};!t.Authorization&&this.emailConfig.SEIMA_EMAIL_API_KEY&&(t[`X-Api-Key`]=this.emailConfig.SEIMA_EMAIL_API_KEY),console.log(`📧 Sending verification email`);let n=await fetch(r,{method:`POST`,headers:t,body:JSON.stringify({to:e,toName:i,subject:`Verify your email — Seima Product Presenter`,html:o,fromName:this.emailConfig.FROM_NAME||`Seima Team`})}),a=await n.json().catch(()=>({}));n.ok?console.log(`✅ Verification email sent`):console.error(`Verification email failed:`,n.status,a)}catch(e){console.error(`Failed to send verification email:`,e)}}async resetPassword(e,t,n){if(!e||!t||!n)return{success:!1,error:`All fields are required`};let r=this.validatePassword(n);if(!r.valid)return{success:!1,error:r.error};try{return await this.apiRequest(`userResetPassword`,{email:e.trim().toLowerCase(),token:t.trim().toUpperCase(),newPassword:n})}catch(e){return console.error(`Password reset error:`,e),{success:!1,error:`Failed to reset password. Please try again.`}}}async verifyEmail(e,t){if(!e||!t)return{success:!1,error:`Email and verification code are required`};try{let n=await this.apiRequest(`userVerifyEmail`,{email:e.trim().toLowerCase(),token:t.trim().toUpperCase()});return n.success&&this.isLoggedIn()&&this.session.user.email.toLowerCase()===e.trim().toLowerCase()&&(this.session.user.emailVerified=!0,this.saveSession(this.session),this.onAuthChange&&this.onAuthChange(this.session.user)),n}catch(e){return console.error(`Email verification error:`,e),{success:!1,error:`Verification failed. Please try again.`}}}async requestEmailVerification(e){if(!e||!this.validateEmail(e))return{success:!1,error:`Please enter a valid email address`};try{let t=await this.apiRequest(`userRequestEmailVerification`,{email:e.trim().toLowerCase()});return t.success&&t.verifyToken&&await this.sendVerificationEmail(t.userEmail,t.userName,t.verifyToken),{success:!0,message:`If this email exists, a verification code has been sent`}}catch(e){return console.error(`Request verification error:`,e),{success:!1,error:`Failed to send verification code. Please try again.`}}}isEmailVerified(){let e=this.getCurrentUser();return e?e.emailVerified!==!1:!1}async changePassword(e,t){if(!this.isLoggedIn())return{success:!1,error:`Please log in first`};let n=this.validatePassword(t);if(!n.valid)return{success:!1,error:n.error};try{let n=await this.apiRequest(`userChangePassword`,{email:this.session.user.email,currentPassword:e,newPassword:t,sessionToken:this.getSessionToken()});return n.success&&n.sessionToken&&(this.session.token=n.sessionToken,this.saveSession(this.session)),n}catch(e){return console.error(`Change password error:`,e),{success:!1,error:`Failed to change password. Please try again.`}}}async updateProfile(e){if(!this.isLoggedIn())return{success:!1,error:`Please log in first`};try{let t=await this.apiRequest(`userUpdateProfile`,{email:this.session.user.email,updates:JSON.stringify(e),sessionToken:this.getSessionToken()});return t.success&&t.user&&(this.session.user=t.user,this.saveSession(this.session),this.onAuthChange&&this.onAuthChange(t.user)),t}catch(e){return console.error(`Update profile error:`,e),{success:!1,error:`Failed to update profile. Please try again.`}}}async deleteAccount(e){if(!this.isLoggedIn())return{success:!1,error:`Please log in first`};try{let t=await this.apiRequest(`userDeleteAccount`,{email:this.session.user.email,password:e,sessionToken:this.getSessionToken()});return t.success&&this.clearSession(),t}catch(e){return console.error(`Delete account error:`,e),{success:!1,error:`Failed to delete account. Please try again.`}}}},d=new class{constructor(){this.currentModal=null,this.pendingAction=null,this.escHandler=null,this.config={logoSrc:`assets/seima-logo.png`,brandName:`Seima`,appName:`Product App`},this.injectStyles()}configure(e){e.logoSrc&&(this.config.logoSrc=e.logoSrc),e.brandName&&(this.config.brandName=e.brandName),e.appName&&(this.config.appName=e.appName)}injectStyles(){if(document.getElementById(`auth-ui-styles`))return;let e=document.createElement(`style`);e.id=`auth-ui-styles`,e.textContent=`
      /* Auth Modal Overlay */
      .auth-modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(26, 26, 26, 0.85);
        backdrop-filter: blur(8px);
        z-index: 200000;
        display: flex;
        align-items: center;
        justify-content: center;
        animation: authFadeIn 0.2s ease;
      }
      
      @keyframes authFadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      
      /* Auth Modal Container */
      .auth-modal {
        background: #fff;
        border-radius: 16px;
        max-width: 420px;
        width: 90%;
        max-height: 90vh;
        overflow-y: auto;
        box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
        animation: authSlideUp 0.3s ease;
      }
      
      @keyframes authSlideUp {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
      
      /* Auth Header */
      .auth-header {
        padding: 32px 32px 0;
        text-align: center;
      }
      
      .auth-logo {
        height: 36px;
        margin-bottom: 8px;
      }
      
      .auth-brand {
        font-size: 11px;
        color: #9ca3af;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        margin-bottom: 24px;
      }
      
      .auth-title {
        font-family: var(--font-display, 'Fraunces', serif);
        font-size: 1.5rem;
        font-weight: 600;
        color: #1a1a1a;
        margin: 0 0 8px 0;
      }
      
      .auth-subtitle {
        font-size: 0.9375rem;
        color: #6b7280;
        margin: 0;
      }
      
      /* Auth Form */
      .auth-form {
        padding: 32px;
      }
      
      .auth-field {
        margin-bottom: 20px;
      }
      
      .auth-field label {
        display: block;
        font-size: 0.8125rem;
        font-weight: 600;
        color: #374151;
        margin-bottom: 6px;
      }
      
      .auth-field input {
        width: 100%;
        padding: 12px 14px;
        font-size: 0.9375rem;
        border: 1px solid #d1d5db;
        border-radius: 8px;
        background: #fff;
        color: #1a1a1a;
        transition: all 0.15s ease;
        box-sizing: border-box;
      }
      
      .auth-field input:focus {
        outline: none;
        border-color: var(--color-copper, #b87333);
        box-shadow: 0 0 0 3px rgba(184, 115, 51, 0.15);
      }
      
      .auth-field input.error {
        border-color: #ef4444;
      }
      
      .auth-field .field-hint {
        font-size: 0.75rem;
        color: #9ca3af;
        margin-top: 4px;
      }
      
      .auth-field .field-error {
        font-size: 0.75rem;
        color: #ef4444;
        margin-top: 4px;
      }
      
      /* Remember Me / Forgot Password Row */
      .auth-options {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 24px;
      }
      
      .auth-remember {
        display: flex;
        align-items: center;
        gap: 8px;
        cursor: pointer;
      }
      
      .auth-remember input[type="checkbox"] {
        width: 16px;
        height: 16px;
        accent-color: var(--color-copper, #b87333);
      }
      
      .auth-remember span {
        font-size: 0.875rem;
        color: #4b5563;
      }
      
      .auth-forgot {
        font-size: 0.875rem;
        color: var(--color-copper, #b87333);
        text-decoration: none;
        cursor: pointer;
      }
      
      .auth-forgot:hover {
        text-decoration: underline;
      }
      
      /* Auth Buttons */
      .auth-btn {
        width: 100%;
        padding: 14px;
        font-size: 0.9375rem;
        font-weight: 600;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        transition: all 0.15s ease;
      }
      
      .auth-btn-primary {
        background: var(--color-charcoal, #1a1a1a);
        color: #fff;
      }
      
      .auth-btn-primary:hover {
        background: #2d2d2d;
        transform: translateY(-1px);
      }
      
      .auth-btn-primary:disabled {
        background: #9ca3af;
        cursor: not-allowed;
        transform: none;
      }
      
      .auth-btn-secondary {
        background: transparent;
        color: #4b5563;
        border: 1px solid #d1d5db;
        margin-top: 12px;
      }
      
      .auth-btn-secondary:hover {
        background: #f3f4f6;
      }
      
      /* Auth Footer Links */
      .auth-footer {
        padding: 0 32px 32px;
        text-align: center;
      }
      
      .auth-footer-text {
        font-size: 0.875rem;
        color: #6b7280;
      }
      
      .auth-footer-link {
        color: var(--color-copper, #b87333);
        font-weight: 600;
        cursor: pointer;
      }
      
      .auth-footer-link:hover {
        text-decoration: underline;
      }
      
      /* Auth Divider */
      .auth-divider {
        display: flex;
        align-items: center;
        margin: 24px 0;
        color: #9ca3af;
        font-size: 0.75rem;
        text-transform: uppercase;
        letter-spacing: 0.05em;
      }
      
      .auth-divider::before,
      .auth-divider::after {
        content: '';
        flex: 1;
        height: 1px;
        background: #e5e7eb;
      }
      
      .auth-divider span {
        padding: 0 16px;
      }
      
      /* Auth Message */
      .auth-message {
        padding: 12px 16px;
        border-radius: 8px;
        margin-bottom: 20px;
        font-size: 0.875rem;
      }
      
      .auth-message.error {
        background: #fef2f2;
        color: #b91c1c;
        border: 1px solid #fecaca;
      }
      
      .auth-message.success {
        background: #f0fdf4;
        color: #166534;
        border: 1px solid #bbf7d0;
      }
      
      /* Auth Close Button */
      .auth-close {
        position: absolute;
        top: 16px;
        right: 16px;
        width: 32px;
        height: 32px;
        border: none;
        background: transparent;
        color: #9ca3af;
        cursor: pointer;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.15s ease;
      }
      
      .auth-close:hover {
        background: #f3f4f6;
        color: #4b5563;
      }
      
      /* User Menu (logged in state) */
      .user-menu-trigger {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 6px 12px;
        background: rgba(255,255,255,0.1);
        border: none;
        border-radius: 6px;
        color: rgba(255,255,255,0.9);
        font-size: 0.8125rem;
        cursor: pointer;
        transition: all 0.15s ease;
      }
      
      .user-menu-trigger:hover {
        background: rgba(255,255,255,0.15);
      }
      
      .user-avatar {
        width: 24px;
        height: 24px;
        border-radius: 50%;
        background: var(--color-copper, #b87333);
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.6875rem;
        font-weight: 600;
      }
      
      .user-menu-dropdown {
        position: absolute;
        top: 100%;
        right: 0;
        margin-top: 8px;
        background: #fff;
        border-radius: 12px;
        box-shadow: 0 10px 40px rgba(0,0,0,0.15);
        min-width: 220px;
        overflow: hidden;
        z-index: 100;
        animation: dropdownFadeIn 0.15s ease;
      }
      
      @keyframes dropdownFadeIn {
        from { opacity: 0; transform: translateY(-8px); }
        to { opacity: 1; transform: translateY(0); }
      }
      
      .user-menu-header {
        padding: 16px;
        border-bottom: 1px solid #e5e7eb;
      }
      
      .user-menu-name {
        font-weight: 600;
        color: #1a1a1a;
        font-size: 0.9375rem;
      }
      
      .user-menu-email {
        font-size: 0.75rem;
        color: #6b7280;
        margin-top: 2px;
      }
      
      .user-menu-items {
        padding: 8px;
      }
      
      .user-menu-item {
        display: flex;
        align-items: center;
        gap: 12px;
        width: 100%;
        padding: 10px 12px;
        background: transparent;
        border: none;
        border-radius: 8px;
        color: #374151;
        font-size: 0.875rem;
        cursor: pointer;
        transition: background 0.15s ease;
        text-align: left;
      }
      
      .user-menu-item:hover {
        background: #f3f4f6;
      }
      
      .user-menu-item.danger {
        color: #b91c1c;
      }
      
      .user-menu-item.danger:hover {
        background: #fef2f2;
      }
      
      .user-menu-divider {
        height: 1px;
        background: #e5e7eb;
        margin: 4px 8px;
      }
      
      .user-menu-footer {
        padding: 10px 16px;
        border-top: 1px solid #e5e7eb;
        font-size: 0.6875rem;
        color: #9ca3af;
        text-align: center;
        cursor: pointer;
        transition: color 0.15s ease;
      }
      
      .user-menu-footer:hover {
        color: #6b7280;
      }
      
      /* Loading Spinner */
      .auth-spinner {
        width: 20px;
        height: 20px;
        border: 2px solid rgba(255,255,255,0.3);
        border-top-color: #fff;
        border-radius: 50%;
        animation: authSpin 0.8s linear infinite;
        display: inline-block;
        margin-right: 8px;
      }
      
      @keyframes authSpin {
        to { transform: rotate(360deg); }
      }
      
      /* Reset Code Input */
      .reset-code-input {
        font-family: 'SF Mono', 'Consolas', monospace;
        font-size: 1.5rem !important;
        text-align: center;
        letter-spacing: 0.3em;
        text-transform: uppercase;
      }
      
      /* User Menu (Mobile-friendly) */
      .auth-user-menu {
        position: fixed;
        background: #fff;
        border-radius: 12px;
        box-shadow: 0 10px 40px rgba(0,0,0,0.2);
        min-width: 260px;
        max-width: 320px;
        z-index: 200001;
        overflow: hidden;
        animation: authSlideUp 0.2s ease;
      }
      
      .auth-user-menu-header {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 16px;
        background: linear-gradient(135deg, #0c4a6e 0%, #0369a1 100%);
        color: #fff;
      }
      
      .auth-user-menu-avatar {
        width: 44px;
        height: 44px;
        border-radius: 50%;
        background: rgba(255,255,255,0.2);
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 600;
        font-size: 1rem;
      }
      
      .auth-user-menu-info {
        flex: 1;
        min-width: 0;
      }
      
      .auth-user-menu-name {
        font-weight: 600;
        font-size: 1rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      
      .auth-user-menu-email {
        font-size: 0.8rem;
        opacity: 0.85;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      
      .auth-user-menu-items {
        padding: 8px;
      }
      
      .auth-user-menu-item {
        display: flex;
        align-items: center;
        gap: 12px;
        width: 100%;
        padding: 12px 14px;
        background: transparent;
        border: none;
        border-radius: 8px;
        color: #374151;
        font-size: 0.9375rem;
        cursor: pointer;
        transition: background 0.15s ease;
        text-align: left;
      }
      
      .auth-user-menu-item:hover {
        background: #f3f4f6;
      }
      
      .auth-user-menu-item svg {
        flex-shrink: 0;
        color: #6b7280;
      }
      
      .auth-user-menu-item-danger {
        color: #b91c1c;
      }
      
      .auth-user-menu-item-danger:hover {
        background: #fef2f2;
      }
      
      .auth-user-menu-item-danger svg {
        color: #b91c1c;
      }
      
      .auth-user-menu-divider {
        height: 1px;
        background: #e5e7eb;
        margin: 8px 0;
      }
      
      /* Mobile adjustments */
      @media (max-width: 480px) {
        .auth-user-menu {
          left: 16px !important;
          right: 16px !important;
          max-width: none;
        }
      }
      
      /* Verify email banner (when logged in but not verified) */
      .verify-email-banner {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 12px;
        padding: 10px 20px;
        background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
        border-bottom: 1px solid #f59e0b;
        color: #92400e;
        font-size: 0.875rem;
      }
      .verify-email-btn {
        padding: 6px 14px;
        background: #f59e0b;
        color: #fff;
        border: none;
        border-radius: 6px;
        font-weight: 600;
        font-size: 0.8125rem;
        cursor: pointer;
      }
      .verify-email-btn:hover {
        background: #d97706;
      }
    `,document.head.appendChild(e)}showLogin(e=null){this.pendingAction=e?{callback:e}:null;let t=`
      <div class="auth-modal-overlay" id="auth-modal">
        <div class="auth-modal" style="position: relative;">
          <button class="auth-close" id="auth-close">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>
          
          <div class="auth-header">
            <img src="${this.config.logoSrc}" alt="${this.config.brandName}" class="auth-logo">
            <div class="auth-brand">${this.config.appName}</div>
            <h2 class="auth-title">Login</h2>
            <p class="auth-subtitle">Sign in to create PDF and other features</p>
          </div>
          
          <form class="auth-form" id="login-form">
            <div id="auth-message"></div>
            
            <div class="auth-field">
              <label for="login-email">Email</label>
              <input type="email" id="login-email" placeholder="you@example.com" required>
            </div>
            
            <div class="auth-field">
              <label for="login-password">Password</label>
              <input type="password" id="login-password" placeholder="Enter your password" required>
            </div>
            
            <div class="auth-options">
              <label class="auth-remember">
                <input type="checkbox" id="login-remember">
                <span>Remember me</span>
              </label>
              <a class="auth-forgot" id="show-forgot">Forgot password?</a>
            </div>
            
            <button type="submit" class="auth-btn auth-btn-primary" id="login-submit">
              Sign In
            </button>
          </form>
          
          <div class="auth-footer">
            <p class="auth-footer-text">
              Don't have an account? 
              <span class="auth-footer-link" id="show-register">Create one</span>
            </p>
            <p class="auth-footer-text" style="margin-top:8px;">
              Need to verify your email? 
              <span class="auth-footer-link" id="show-verify">Verify now</span>
            </p>
          </div>
        </div>
      </div>
    `;this.showModal(t),this.setupLoginHandlers(e)}showRegister(){let e=`
      <div class="auth-modal-overlay" id="auth-modal">
        <div class="auth-modal" style="position: relative;">
          <button class="auth-close" id="auth-close">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>
          
          <div class="auth-header">
            <img src="${this.config.logoSrc}" alt="${this.config.brandName}" class="auth-logo">
            <div class="auth-brand">${this.config.appName}</div>
            <h2 class="auth-title">Create Account</h2>
            <p class="auth-subtitle">Register for staff access</p>
          </div>
          
          <form class="auth-form" id="register-form">
            <div id="auth-message"></div>
            
            <div class="auth-field">
              <label for="register-name">Full Name *</label>
              <input type="text" id="register-name" placeholder="Your name" required>
            </div>
            
            <div class="auth-field">
              <label for="register-email">Email *</label>
              <input type="email" id="register-email" placeholder="you@example.com" required>
            </div>
            
            <div class="auth-field">
              <label for="register-password">Password *</label>
              <input type="password" id="register-password" placeholder="Create a password" required>
              <div class="field-hint">At least 8 characters with 1 number</div>
            </div>
            
            <div class="auth-field">
              <label for="register-position">Position</label>
              <input type="text" id="register-position" placeholder="e.g. Sales Consultant">
            </div>
            
            <div class="auth-field">
              <label for="register-phone">Phone</label>
              <input type="tel" id="register-phone" placeholder="Your phone number">
            </div>
            
            <button type="submit" class="auth-btn auth-btn-primary" id="register-submit">
              Create Account
            </button>
          </form>
          
          <div class="auth-footer">
            <p class="auth-footer-text">
              Already have an account? 
              <span class="auth-footer-link" id="show-login">Sign in</span>
            </p>
          </div>
        </div>
      </div>
    `;this.showModal(e),this.setupRegisterHandlers()}showForgotPassword(){let e=`
      <div class="auth-modal-overlay" id="auth-modal">
        <div class="auth-modal" style="position: relative;">
          <button class="auth-close" id="auth-close">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>
          
          <div class="auth-header">
            <img src="${this.config.logoSrc}" alt="${this.config.brandName}" class="auth-logo">
            <div class="auth-brand">${this.config.appName}</div>
            <h2 class="auth-title">Reset Password</h2>
            <p class="auth-subtitle">Enter your email to receive a reset code</p>
          </div>
          
          <form class="auth-form" id="forgot-form">
            <div id="auth-message"></div>
            
            <div class="auth-field">
              <label for="forgot-email">Email</label>
              <input type="email" id="forgot-email" placeholder="you@example.com" required>
            </div>
            
            <button type="submit" class="auth-btn auth-btn-primary" id="forgot-submit">
              Send Reset Code
            </button>
            
            <button type="button" class="auth-btn auth-btn-secondary" id="show-login-back">
              Back to Sign In
            </button>
          </form>
        </div>
      </div>
    `;this.showModal(e),this.setupForgotHandlers()}showResetPassword(e=``){let t=`
      <div class="auth-modal-overlay" id="auth-modal">
        <div class="auth-modal" style="position: relative;">
          <button class="auth-close" id="auth-close">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>
          
          <div class="auth-header">
            <img src="${this.config.logoSrc}" alt="${this.config.brandName}" class="auth-logo">
            <div class="auth-brand">${this.config.appName}</div>
            <h2 class="auth-title">Enter Reset Code</h2>
            <p class="auth-subtitle">Check your email for the 6-character code</p>
          </div>
          
          <form class="auth-form" id="reset-form">
            <div id="auth-message"></div>
            
            <div class="auth-field">
              <label for="reset-email">Email</label>
              <input type="email" id="reset-email" value="${this._escapeAttr(e)}" placeholder="you@example.com" required>
            </div>
            
            <div class="auth-field">
              <label for="reset-code">Reset Code</label>
              <input type="text" id="reset-code" class="reset-code-input" placeholder="ABC123" maxlength="6" required>
            </div>
            
            <div class="auth-field">
              <label for="reset-new-password">New Password</label>
              <input type="password" id="reset-new-password" placeholder="Create a new password" required>
              <div class="field-hint">At least 8 characters with 1 number</div>
            </div>
            
            <button type="submit" class="auth-btn auth-btn-primary" id="reset-submit">
              Reset Password
            </button>
            
            <button type="button" class="auth-btn auth-btn-secondary" id="show-login-back">
              Back to Sign In
            </button>
          </form>
        </div>
      </div>
    `;this.showModal(t),this.setupResetHandlers()}showVerifyEmail(e=``,t=null){let n=`
      <div class="auth-modal-overlay" id="auth-modal">
        <div class="auth-modal" style="position: relative;">
          <button class="auth-close" id="auth-close">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>
          
          <div class="auth-header">
            <img src="${this.config.logoSrc}" alt="${this.config.brandName}" class="auth-logo">
            <div class="auth-brand">${this.config.appName}</div>
            <h2 class="auth-title">Verify Your Email</h2>
            <p class="auth-subtitle">Enter the 6-character code we sent to your email</p>
          </div>
          
          <form class="auth-form" id="verify-form">
            <div id="auth-message"></div>
            
            <div class="auth-field">
              <label for="verify-email">Email</label>
              <input type="email" id="verify-email" value="${this._escapeAttr(e)}" placeholder="you@example.com" required>
            </div>
            
            <div class="auth-field">
              <label for="verify-code">Verification Code</label>
              <input type="text" id="verify-code" class="reset-code-input" placeholder="ABC123" maxlength="6" required>
            </div>
            
            <button type="submit" class="auth-btn auth-btn-primary" id="verify-submit">
              Verify Email
            </button>
            
            <button type="button" class="auth-btn auth-btn-secondary" id="verify-resend">
              Resend Code
            </button>
            
            <button type="button" class="auth-btn auth-btn-secondary" id="verify-to-login">
              Back to Sign In
            </button>
          </form>
        </div>
      </div>
    `;this.showModal(n),this.setupVerifyEmailHandlers(t)}_escapeAttr(e){if(!e)return``;let t=document.createElement(`div`);return t.textContent=e,t.innerHTML}showEditProfile(e=null){let t=u.getCurrentUser();if(!t){console.warn(`Cannot edit profile: not logged in`);return}let n=`
      <div class="auth-modal-overlay" id="auth-modal">
        <div class="auth-modal" style="position: relative;">
          <button class="auth-close" id="auth-close">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>
          
          <div class="auth-header">
            <img src="${this.config.logoSrc}" alt="${this.config.brandName}" class="auth-logo">
            <div class="auth-brand">${this.config.appName}</div>
            <h2 class="auth-title">Edit Profile</h2>
            <p class="auth-subtitle">Update your contact information</p>
          </div>
          
          <form class="auth-form" id="edit-profile-form">
            <div id="auth-message"></div>
            
            <div class="auth-field">
              <label for="profile-email">Email</label>
              <input type="email" id="profile-email" value="${this._escapeAttr(t.email||``)}" disabled style="background: #f3f4f6; cursor: not-allowed;">
              <div class="field-hint">Email cannot be changed</div>
            </div>
            
            <div class="auth-field">
              <label for="profile-name">Full Name *</label>
              <input type="text" id="profile-name" value="${this._escapeAttr(t.name||``)}" placeholder="Your name" required>
            </div>
            
            <div class="auth-field">
              <label for="profile-position">Position</label>
              <input type="text" id="profile-position" value="${this._escapeAttr(t.position||``)}" placeholder="e.g. Sales Representative">
            </div>
            
            <div class="auth-field">
              <label for="profile-phone">Phone</label>
              <input type="tel" id="profile-phone" value="${this._escapeAttr(t.phone||``)}" placeholder="Your phone number">
            </div>
            
            <button type="submit" class="auth-btn auth-btn-primary" id="profile-submit">
              Save Changes
            </button>
            
            <button type="button" class="auth-btn auth-btn-secondary" id="profile-cancel">
              Cancel
            </button>
          </form>
        </div>
      </div>
    `;this.showModal(n),this.setupEditProfileHandlers(e)}setupEditProfileHandlers(e){document.getElementById(`edit-profile-form`)?.addEventListener(`submit`,async t=>{t.preventDefault();let n=document.getElementById(`profile-name`)?.value?.trim(),r=document.getElementById(`profile-position`)?.value?.trim()||``,i=document.getElementById(`profile-phone`)?.value?.trim()||``;if(!n){this.showMessage(`Name is required`);return}this.setLoading(`profile-submit`,!0);let a=await u.updateProfile({name:n,position:r,phone:i});this.setLoading(`profile-submit`,!1),a.success?(this.showMessage(`Profile updated successfully!`,`success`),setTimeout(()=>{this.closeModal(),e&&e(a.user)},1e3)):this.showMessage(a.error)}),document.getElementById(`profile-cancel`)?.addEventListener(`click`,()=>this.closeModal())}showChangePassword(e=null){if(!u.isLoggedIn()){console.warn(`Cannot change password: not logged in`);return}let t=`
      <div class="auth-modal-overlay" id="auth-modal">
        <div class="auth-modal" style="position: relative;">
          <button class="auth-close" id="auth-close">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>
          
          <div class="auth-header">
            <img src="${this.config.logoSrc}" alt="${this.config.brandName}" class="auth-logo">
            <div class="auth-brand">${this.config.appName}</div>
            <h2 class="auth-title">Change Password</h2>
            <p class="auth-subtitle">Enter your current and new password</p>
          </div>
          
          <form class="auth-form" id="change-password-form">
            <div id="auth-message"></div>
            
            <div class="auth-field">
              <label for="current-password">Current Password</label>
              <input type="password" id="current-password" placeholder="Enter current password" required>
            </div>
            
            <div class="auth-field">
              <label for="new-password">New Password</label>
              <input type="password" id="new-password" placeholder="Enter new password" required>
              <div class="field-hint">At least 8 characters with 1 number</div>
            </div>
            
            <div class="auth-field">
              <label for="confirm-password">Confirm New Password</label>
              <input type="password" id="confirm-password" placeholder="Confirm new password" required>
            </div>
            
            <button type="submit" class="auth-btn auth-btn-primary" id="password-submit">
              Change Password
            </button>
            
            <button type="button" class="auth-btn auth-btn-secondary" id="password-cancel">
              Cancel
            </button>
          </form>
        </div>
      </div>
    `;this.showModal(t),this.setupChangePasswordHandlers(e)}setupChangePasswordHandlers(e){document.getElementById(`change-password-form`)?.addEventListener(`submit`,async t=>{t.preventDefault();let n=document.getElementById(`current-password`)?.value,r=document.getElementById(`new-password`)?.value;if(r!==document.getElementById(`confirm-password`)?.value){this.showMessage(`New passwords do not match`);return}if(r.length<8){this.showMessage(`New password must be at least 8 characters`);return}if(!/\d/.test(r)){this.showMessage(`New password must contain at least one number`);return}this.setLoading(`password-submit`,!0);let i=await u.changePassword(n,r);this.setLoading(`password-submit`,!1),i.success?(this.showMessage(`Password changed successfully!`,`success`),setTimeout(()=>{this.closeModal(),e&&e()},1500)):this.showMessage(i.error)}),document.getElementById(`password-cancel`)?.addEventListener(`click`,()=>this.closeModal())}showUserMenu(e,t={}){let n=u.getCurrentUser();if(!n)return;let r=document.getElementById(`auth-user-menu`);if(r){r.remove();return}let i=`
      <div id="auth-user-menu" class="auth-user-menu">
        <div class="auth-user-menu-header">
          <div class="auth-user-menu-avatar">${this.getInitials(n.name)}</div>
          <div class="auth-user-menu-info">
            <div class="auth-user-menu-name">${n.name||`User`}</div>
            <div class="auth-user-menu-email">${n.email||``}</div>
          </div>
        </div>
        <div class="auth-user-menu-items">
          <button class="auth-user-menu-item" id="user-menu-profile">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
            Edit Profile
          </button>
          <button class="auth-user-menu-item" id="user-menu-password">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
            Change Password
          </button>
          <div class="auth-user-menu-divider"></div>
          <button class="auth-user-menu-item auth-user-menu-item-danger" id="user-menu-logout">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
              <polyline points="16 17 21 12 16 7"></polyline>
              <line x1="21" y1="12" x2="9" y2="12"></line>
            </svg>
            Sign Out
          </button>
        </div>
      </div>
    `;document.body.insertAdjacentHTML(`beforeend`,i);let a=document.getElementById(`auth-user-menu`);if(e){let t=e.getBoundingClientRect();a.style.position=`fixed`,a.style.top=t.bottom+8+`px`,a.style.right=window.innerWidth-t.right+`px`}document.getElementById(`user-menu-profile`)?.addEventListener(`click`,()=>{a.remove(),this.showEditProfile()}),document.getElementById(`user-menu-password`)?.addEventListener(`click`,()=>{a.remove(),this.showChangePassword()}),document.getElementById(`user-menu-logout`)?.addEventListener(`click`,()=>{a.remove(),u.logout(),t.onLogout&&t.onLogout()}),setTimeout(()=>{let t=n=>{!a.contains(n.target)&&n.target!==e&&(a.remove(),document.removeEventListener(`click`,t))};document.addEventListener(`click`,t)},10)}showModal(e){this.closeModal();let t=document.createElement(`div`);t.innerHTML=e,document.body.appendChild(t.firstElementChild),this.currentModal=document.getElementById(`auth-modal`),document.getElementById(`auth-close`)?.addEventListener(`click`,()=>this.closeModal()),document.addEventListener(`keydown`,this.escHandler=e=>{e.key===`Escape`&&this.closeModal()})}closeModal(){this.currentModal&&=(this.currentModal.remove(),null),this.escHandler&&document.removeEventListener(`keydown`,this.escHandler)}showMessage(e,t=`error`){let n=document.getElementById(`auth-message`);if(n){let r=document.createElement(`div`);r.className=`auth-message ${t}`,r.textContent=e,n.innerHTML=``,n.appendChild(r)}}setLoading(e,t){let n=document.getElementById(e);n&&(t?(n.disabled=!0,n.dataset.originalText=n.textContent,n.innerHTML=`<span class="auth-spinner"></span>Please wait...`):(n.disabled=!1,n.textContent=n.dataset.originalText||`Submit`))}setupLoginHandlers(e){document.getElementById(`login-form`)?.addEventListener(`submit`,async t=>{t.preventDefault();let n=document.getElementById(`login-email`)?.value,r=document.getElementById(`login-password`)?.value,i=document.getElementById(`login-remember`)?.checked||!1;this.setLoading(`login-submit`,!0);let a=await u.login(n,r,i);this.setLoading(`login-submit`,!1),a.success?(this.closeModal(),e&&e(a.user),this.pendingAction?.callback&&(this.pendingAction.callback(a.user),this.pendingAction=null)):this.showMessage(a.error)}),document.getElementById(`show-register`)?.addEventListener(`click`,()=>this.showRegister()),document.getElementById(`show-forgot`)?.addEventListener(`click`,()=>this.showForgotPassword()),document.getElementById(`show-verify`)?.addEventListener(`click`,()=>this.showVerifyEmail())}setupRegisterHandlers(){document.getElementById(`register-form`)?.addEventListener(`submit`,async e=>{e.preventDefault();let t=document.getElementById(`register-name`)?.value,n=document.getElementById(`register-email`)?.value,r=document.getElementById(`register-password`)?.value,i=document.getElementById(`register-position`)?.value||``,a=document.getElementById(`register-phone`)?.value||``;this.setLoading(`register-submit`,!0);let o=await u.register(n,r,t,i,a);this.setLoading(`register-submit`,!1),o.success?(this.closeModal(),this.showVerifyEmail(n.trim(),()=>{})):this.showMessage(o.error)}),document.getElementById(`show-login`)?.addEventListener(`click`,()=>this.showLogin())}setupForgotHandlers(){document.getElementById(`forgot-form`)?.addEventListener(`submit`,async e=>{e.preventDefault();let t=document.getElementById(`forgot-email`)?.value;this.setLoading(`forgot-submit`,!0);let n=await u.requestPasswordReset(t);this.setLoading(`forgot-submit`,!1),n.success?(this.showMessage(`If this email exists, a reset code has been sent.`,`success`),setTimeout(()=>this.showResetPassword(t),2e3)):this.showMessage(n.error)}),document.getElementById(`show-login-back`)?.addEventListener(`click`,()=>this.showLogin())}setupResetHandlers(){document.getElementById(`reset-form`)?.addEventListener(`submit`,async e=>{e.preventDefault();let t=document.getElementById(`reset-email`)?.value,n=document.getElementById(`reset-code`)?.value,r=document.getElementById(`reset-new-password`)?.value;this.setLoading(`reset-submit`,!0);let i=await u.resetPassword(t,n,r);this.setLoading(`reset-submit`,!1),i.success?(this.showMessage(`Password reset successfully! You can now sign in.`,`success`),setTimeout(()=>this.showLogin(),1500)):this.showMessage(i.error)}),document.getElementById(`show-login-back`)?.addEventListener(`click`,()=>this.showLogin())}setupVerifyEmailHandlers(e){document.getElementById(`verify-form`)?.addEventListener(`submit`,async t=>{t.preventDefault();let n=document.getElementById(`verify-email`)?.value,r=document.getElementById(`verify-code`)?.value;this.setLoading(`verify-submit`,!0);let i=await u.verifyEmail(n,r);this.setLoading(`verify-submit`,!1),i.success?(this.showMessage(`Email verified successfully!`,`success`),setTimeout(()=>{this.closeModal(),e&&e(),this.showLogin()},1500)):this.showMessage(i.error)}),document.getElementById(`verify-resend`)?.addEventListener(`click`,async()=>{let e=document.getElementById(`verify-email`)?.value;if(!e){this.showMessage(`Please enter your email first`);return}this.setLoading(`verify-resend`,!0);let t=await u.requestEmailVerification(e);this.setLoading(`verify-resend`,!1),this.showMessage(t.success?`Verification code sent! Check your email.`:t.error,t.success?`success`:`error`)}),document.getElementById(`verify-to-login`)?.addEventListener(`click`,()=>this.showLogin())}getInitials(e){if(!e)return`?`;let t=e.split(` `);return t.length>=2?(t[0][0]+t[t.length-1][0]).toUpperCase():e.substring(0,2).toUpperCase()}requireAuth(e,t=`continue`){u.isLoggedIn()?e(u.getCurrentUser()):this.showLogin(e)}},f={keys:[{name:`OrderCode`,weight:1},{name:`ProductName`,weight:.8},{name:`Range`,weight:.5},{name:`Group`,weight:.5},{name:`SubGroup`,weight:.5},{name:`Description`,weight:.4},{name:`Finish`,weight:.35},{name:`Colour`,weight:.35},{name:`LongDescription`,weight:.2}],threshold:.4,includeScore:!0,ignoreLocation:!0,minMatchCharLength:2};function p(e){return{...e,ProductName:e.ProductName||e[`Product Name`]||``,LongDescription:e.LongDescription||e[`Long Description`]||``,SubGroup:e.SubGroup||e.Subgroup||``,Colour:e.Colour||e.Color||``,Barcode:(e.BARCODE||e.Barcode||``).toString()}}var m=class{constructor(e={}){this._getSynonyms=e.getSynonyms||(e=>[e]),this._products=[],this._normalised=[],this._fuse=null,this._codeIndex=new Map,this._termIndex=new Map}buildIndex(e){this._products=e,this._normalised=e.map(p),this._fuse=new t(this._normalised,f),this._codeIndex.clear(),this._termIndex.clear();for(let t=0;t<e.length;t++){let n=e[t];n.OrderCode&&(this._codeIndex.set(n.OrderCode.toString().toLowerCase().trim(),t),this._codeIndex.set(n.OrderCode.toString().toLowerCase().trim().replace(/[-\s]/g,``),t));let r=(n.BARCODE||n.Barcode||``).toString().trim();r&&(this._codeIndex.set(r.toLowerCase(),t),this._codeIndex.set(r.toLowerCase().replace(/[-\s]/g,``),t));let i=this._normalised[t],a=[i.OrderCode,i.ProductName,i.Description,i.Range,i.Group,i.SubGroup,i.Finish,i.Colour,i.LongDescription].join(` `).toLowerCase().split(/\s+/).filter(e=>e.length>=2),o=new Set;for(let e of a){if(o.has(e))continue;o.add(e);let n=this._termIndex.get(e);n||(n=[],this._termIndex.set(e,n)),n.push(t)}}}findByCode(e){if(!e)return null;let t=e.toString().toLowerCase().trim(),n=this._codeIndex.get(t)??this._codeIndex.get(t.replace(/[-\s]/g,``));return n==null?null:this._products[n]}search(e,t=50,{fuzzy:n=!1}={}){return!e||e.length<2?[]:n?this._searchFuzzy(e,t):this._searchExact(e,t)}_searchExact(e,t){let n=e.toLowerCase().trim().split(/\s+/).filter(e=>e.length>=2);if(n.length===0)return[];let r=null;if(this._termIndex.size>0){let e=n[0],t=this._getSynonyms(e),i=new Set;for(let e of t)for(let[t,n]of this._termIndex)if(t.includes(e))for(let e of n)i.add(e);i.size>0&&i.size<this._normalised.length*.7&&(r=i)}let i=[],a=r?[...r].map(e=>this._normalised[e]):this._normalised;for(let e of a){let t=n.map(t=>this._scoreExact(e,t));if(t.some(e=>e===0))continue;let r=t.reduce((e,t)=>e+t,0)/t.length;i.push({product:e,score:r})}return i.sort((e,t)=>t.score-e.score),i.slice(0,t).map(e=>e.product)}_scoreExact(e,t){let n=0,r=(e.OrderCode||``).toString().toLowerCase().trim(),i=(e.Barcode||``).toString().toLowerCase().trim(),a=(e.ProductName||``).toLowerCase().trim(),o=(e.Description||``).toLowerCase().trim(),s=(e.LongDescription||``).toLowerCase().trim(),c=(e.Range||``).toLowerCase().trim(),l=(e.Group||``).toLowerCase().trim(),u=(e.SubGroup||``).toLowerCase().trim(),d=(e.Finish||``).toLowerCase().trim(),f=(e.Colour||``).toLowerCase().trim(),p=/^\d+$/.test(t),m=this._getSynonyms(t);if(m.some(e=>e!==t)){let e=[a,o,l,u,c,s].join(` `);for(let t of m)if(e.includes(t)){n=Math.max(n,45);break}}return r===t||i===t?100:(r.includes(t)&&(n=Math.max(n,90)),!p&&i.includes(t)&&(n=Math.max(n,90)),a===t?n=Math.max(n,80):a.startsWith(t)?n=Math.max(n,70):a.includes(t)&&(n=Math.max(n,60)),u===t||l===t?n=Math.max(n,62):c===t?n=Math.max(n,56):(c.includes(t)||l.includes(t)||u.includes(t))&&(n=Math.max(n,50)),o.includes(t)&&(n=Math.max(n,40)),(d.includes(t)||f.includes(t))&&(n=Math.max(n,30)),s.includes(t)&&(n=Math.max(n,20)),n)}_searchFuzzy(e,t){if(!this._fuse)return[];let n=e.toLowerCase().trim().split(/\s+/).filter(e=>e.length>=2);if(n.length===0)return[];let r=new Map;for(let e of n){let n=this._getSynonyms(e);for(let i of n){let n=this._fuse.search(i,{limit:t*2});for(let t of n){let n=t.item.OrderCode;if(!n)continue;let i=r.get(n);(!i||t.score<i.score)&&r.set(n,{product:t.item,score:t.score,matchedTerms:i?i.matchedTerms:new Set}),r.get(n).matchedTerms.add(e)}}}let i=[...r.values()];return i.sort((e,t)=>{let n=t.matchedTerms.size-e.matchedTerms.size;return n===0?e.score-t.score:n}),i.slice(0,t).map(e=>e.product)}},h=1.1;function g(e){if(e==null||e===``)return NaN;let t=Number(String(e).replace(/,/g,``));return Number.isFinite(t)&&t>0?t:NaN}function _(e,t=2){let n=g(e);if(Number.isNaN(n))return null;let r=n/h,i=10**t;return Math.round(r*i)/i}function v(e){if(!e||typeof e!=`object`)return e;let t=g(e.rrp_ex_gst);if(!Number.isNaN(t))return e;let n=_(e.rrp_inc_gst,2);return n==null||(e.rrp_ex_gst=n),e}function y(e){if(!Array.isArray(e))return e;for(let t of e)v(t);return e}var b={BM25_TOP_K:25,FINAL_TOP_K:3,MIN_CONFIDENCE:35},x={AUTO_ACCEPT:88,REVIEW:60},S=.4,C=.6,w=25,T=[{name:`strict-category`,multiplier:1},{name:`relaxed-category`,multiplier:.92},{name:`global-fallback`,multiplier:.84}],E={productType:20,finish:20,dimensions:20,material:15,wels:10,priceBracket:15},D={chrome:[`chrome`,`cr`,`cp`,`polished chrome`],"matte black":[`matte black`,`matt black`,`mb`,`black`,`mblk`],"brushed nickel":[`brushed nickel`,`bn`,`satin nickel`,`nickel`],"brushed brass":[`brushed brass`,`bb`,`brass`,`warm brass`],"brushed gold":[`brushed gold`,`bg`,`gold`,`light gold`],"gun metal":[`gun metal`,`gunmetal`,`gm`,`gun metal grey`],white:[`white`,`wh`,`gloss white`,`matte white`],"stainless steel":[`stainless steel`,`ss`,`stainless`]},O={"stainless steel":[`stainless steel`,`stainless`,`ss`,`304 stainless`,`316 stainless`],ceramic:[`ceramic`,`vitreous china`,`porcelain`,`fireclay`,`fine fire clay`],stone:[`stone`,`engineered stone`,`granite`,`marble`,`quartz`,`arqstone`,`oros`,`cristalplant`],acrylic:[`acrylic`,`lucite`],"solid surface":[`solid surface`,`corian`],"cast iron":[`cast iron`],copper:[`copper`],brass:[`brass`],composite:[`composite`,`granite composite`]},k={"basin mixer":[`basin mixer`,`basin tap`,`basin set`],"wall mixer":[`wall mixer`,`wall tap`,`wall set`],"shower mixer":[`shower mixer`,`shower tap`],"towel rail":[`towel rail`,`towel bar`,`towel holder`],"robe hook":[`robe hook`,`coat hook`],"toilet roll holder":[`toilet roll holder`,`paper holder`,`tissue holder`]},A={basin:[`BASIN`],basins:[`BASIN`],"bathroom tapware":[`TAPWARE`],tapware:[`TAPWARE`],"kitchen tapware":[`KITCHEN`,`TAPWARE`],"laundry tapware":[`TAPWARE`],toilets:[`TOILET`,`WC`],toilet:[`TOILET`,`WC`],baths:[`BATH`],bath:[`BATH`],showers:[`SHOWER`],shower:[`SHOWER`],"bathroom accessories":[`ACCESSORIES`,`BATH ACCESS`],accessories:[`ACCESSORIES`,`BATH ACCESS`],sink:[`SINK`],sinks:[`SINK`],"plug & waste":[`WASTE`,`PLUG`],mirrors:[`MIRROR`],mixers:[`TAPWARE`],"vessel mixers":[`TAPWARE`],"sink mixers":[`TAPWARE`,`SINK`],outlets:[`TAPWARE`],"shower / wall mixers":[`TAPWARE`],"shower / bath diverter mixers":[`TAPWARE`],"wall bath mixer sets":[`TAPWARE`],"wall basin mixer sets":[`TAPWARE`],"wall basin sets":[`TAPWARE`],"wall top assemblies":[`TAPWARE`],"hob mixers":[`TAPWARE`],"floor mounted bath mixers":[`TAPWARE`],"shower roses":[`SHOWER`],"wall showers":[`SHOWER`],"wall shower systems":[`SHOWER`],"twin showers":[`SHOWER`],"twin shower / wall mixers":[`SHOWER`,`TAPWARE`],"heated towel ladders & rails":[`BATH ACCESS`],"towel ladders & racks":[`BATH ACCESS`],"drainage solutions":[`WASTE`,`PLUG`],parts:[`TAPWARE`],"shower parts":[`SHOWER`],"sink sets":[`SINK`],"wall sink sets":[`SINK`],"spa outlets":[`TAPWARE`],"washing machine stops":[`TAPWARE`],"shower mixers":[`TAPWARE`],"diverter mixers":[`TAPWARE`],"bidet mixers":[`TAPWARE`],"bath spouts/hob sets":[`TAPWARE`],"floor spouts/bath fillers":[`TAPWARE`],"overhead showers":[`SHOWER`],"kitchen/laundry mixers":[`TAPWARE`,`KITCHEN`],"plug & wastes":[`WASTE`,`PLUG`],"grab rail":[`BATH ACCESS`],"grab rails":[`BATH ACCESS`],"basin mixers":[`TAPWARE`],"bracket showers":[`SHOWER`],diverters:[`TAPWARE`],"double towel rails":[`BATH ACCESS`,`ACCESSORIES`],"dual showers":[`SHOWER`],"hand towel holders":[`BATH ACCESS`,`ACCESSORIES`],"panel showers":[`SHOWER`],"rail showers":[`SHOWER`],"robe hooks":[`BATH ACCESS`,`ACCESSORIES`],"single towel rails":[`BATH ACCESS`,`ACCESSORIES`],"soap dishes":[`BATH ACCESS`,`ACCESSORIES`],spouts:[`TAPWARE`],"toilet roll holders":[`BATH ACCESS`,`ACCESSORIES`],"towel ladders":[`BATH ACCESS`,`ACCESSORIES`],"trim kits and in-wall bodies":[`TAPWARE`],"twin mixers":[`TAPWARE`],"wall mixers":[`TAPWARE`],"universal showers":[`SHOWER`],"toothbrush holders":[`BATH ACCESS`,`ACCESSORIES`],"doorware accessories":[`BATH ACCESS`],"above counter":[`BASIN`],"above-counter":[`BASIN`],above:[`BASIN`],"bench mounted":[`BASIN`],"bench mount":[`BASIN`],"top mounted":[`BASIN`],"top mount":[`BASIN`],vessel:[`BASIN`],"on counter":[`BASIN`],"counter top":[`BASIN`],"basin tap sets":[`TAPWARE`],"bath mixer sets":[`TAPWARE`],"bath tap sets":[`TAPWARE`],"body sprays":[`SHOWER`],"flush buttons":[`TOILET`,`WC`],freestanding:[`BATH`,`BASIN`],"freestanding bath mixer":[`TAPWARE`],"freestanding baths":[`BATH`],"glass holders":[`BATH ACCESS`,`ACCESSORIES`],"handshower accessories":[`SHOWER`],"handshower and rail sets":[`SHOWER`],inset:[`BASIN`],"inset baths":[`BATH`],"semi-inset":[`BASIN`],"semi inset":[`BASIN`],semi:[`BASIN`],semirecessed:[`BASIN`],semiinset:[`BASIN`],"semi recessed basin":[`BASIN`],"semi inset basin":[`BASIN`],"drop-in":[`BASIN`],"drop in":[`BASIN`],recessed:[`BASIN`],"semi-recessed":[`BASIN`],"semi recessed":[`BASIN`],"intelligent toilets":[`TOILET`,`WC`],"kitchen mixers":[`KITCHEN`,`TAPWARE`],"kitchen tap sets":[`KITCHEN`,`TAPWARE`],"outdoor ceiling showers":[`SHOWER`],shelves:[`BATH ACCESS`,`ACCESSORIES`],"shower columns":[`SHOWER`],"shower arms":[`SHOWER`],"shower heads":[`SHOWER`],"shower panels":[`SHOWER`],"soap dispensers":[`BATH ACCESS`,`ACCESSORIES`],"toilet brushes":[`BATH ACCESS`,`ACCESSORIES`],"toilet suites":[`TOILET`,`WC`],"towel rails":[`BATH ACCESS`,`ACCESSORIES`],"under counter":[`BASIN`],"wall faced pans":[`TOILET`,`WC`],"wall hung":[`BASIN`,`TOILET`],"wall-hung":[`BASIN`,`TOILET`],"wall mounted":[`BASIN`,`TOILET`],"wall-mounted":[`BASIN`,`TOILET`],"wall mount":[`BASIN`,`TOILET`],wallmount:[`BASIN`,`TOILET`],mounted:[`BASIN`,`TOILET`],"wall hung pans":[`TOILET`,`WC`],"wall tap sets":[`TAPWARE`],wastes:[`WASTE`,`PLUG`],"above counter basins":[`BASIN`],"wall mounted basins":[`BASIN`],"inset basins":[`BASIN`],"semi recessed basins":[`BASIN`],"under counter basins":[`BASIN`],"vanity basins":[`BASIN`],"shroud pedestal basins":[`BASIN`],"basin sets":[`BASIN`,`TAPWARE`],"shower bases":[`SHOWER`],"hand showers":[`SHOWER`],"ceiling showers":[`SHOWER`],"exposed showers":[`SHOWER`],"shower mixer":[`TAPWARE`],"shower systems":[`SHOWER`],"shower heads outlets":[`SHOWER`],"shower accessories":[`SHOWER`,`BATH ACCESS`],"shower spare parts":[`SHOWER`],"shower spares":[`SHOWER`],"double bowl sinks":[`SINK`],"single bowl sinks":[`SINK`],"laundry trough":[`SINK`],"cleaners sink":[`SINK`],"benchtop drainer":[`SINK`],"sink accessories":[`SINK`],"toilet pans":[`TOILET`,`WC`],cisterns:[`TOILET`,`WC`],"concealed cistern components":[`TOILET`,`WC`],bidets:[`TOILET`,`WC`],"toilet roll holder":[`BATH ACCESS`,`ACCESSORIES`],"toilet roll holder, toilet roll holders":[`BATH ACCESS`,`ACCESSORIES`],"toilet seat spares":[`TOILET`,`WC`],"toilet spare parts":[`TOILET`,`WC`],"toilet spares other":[`TOILET`,`WC`],"toilet brush & holder":[`BATH ACCESS`,`ACCESSORIES`],"wall mixer":[`TAPWARE`],"floor mounted bath outlets":[`TAPWARE`],"wastes & traps":[`WASTE`,`PLUG`],"channel drains":[`WASTE`,`PLUG`],"channel drain kits":[`WASTE`,`PLUG`],"point drains":[`WASTE`,`PLUG`],"bathroom holders":[`BATH ACCESS`,`ACCESSORIES`],"towel rail":[`BATH ACCESS`,`ACCESSORIES`],"towel ring/rails":[`BATH ACCESS`,`ACCESSORIES`],"robe hook":[`BATH ACCESS`,`ACCESSORIES`],"robe hook, robe hooks":[`BATH ACCESS`,`ACCESSORIES`],"grab rail, grab rails":[`BATH ACCESS`,`ACCESSORIES`],shelf:[`BATH ACCESS`,`ACCESSORIES`],"shelf, shelves":[`BATH ACCESS`,`ACCESSORIES`],"soap dish/dispenser, soap dishes/dispensers":[`BATH ACCESS`,`ACCESSORIES`],"soap dishes/dispensers":[`BATH ACCESS`,`ACCESSORIES`],overhead:[`SHOWER`],"builders shower":[`SHOWER`],"builders wall":[`TAPWARE`],"spare parts":[`TAPWARE`],"tapware spare parts":[`TAPWARE`],"basin spare parts":[`BASIN`],"bath spare parts":[`BATH`],"1.5 bowl sink":[`SINK`],"1.75 bowl sink":[`SINK`],"adjustable showers":[`SHOWER`],arms:[`SHOWER`],"basin outlets":[`TAPWARE`],"basin spares other":[`BASIN`],"basin top assemblies":[`TAPWARE`],"basin pop up/plug wastes":[`WASTE`,`PLUG`],"basins sets":[`BASIN`],"bath outlets":[`TAPWARE`],"bath shower mixers":[`TAPWARE`],"bath/shower trim kits":[`TAPWARE`],"bath/shower trim kits with diverters":[`TAPWARE`],"baths spare parts":[`BATH`],"bidet suites":[`TOILET`],"buttons/flush plates":[`TOILET`,`WC`],"care accessories":[`BATH ACCESS`,`ACCESSORIES`],"care basin mixers":[`TAPWARE`],"care basins":[`BASIN`],"care pans":[`TOILET`,`WC`],"care seats":[`TOILET`,`WC`],"care sink mixers":[`TAPWARE`,`SINK`],"care suites":[`TOILET`,`WC`],"closed coupled pans":[`TOILET`,`WC`],"closed coupled suites":[`TOILET`,`WC`],"concealed connector pans":[`TOILET`,`WC`],"concealed suites":[`TOILET`,`WC`],"connector suites":[`TOILET`,`WC`],"corner baths":[`BATH`],"double bowl sink":[`SINK`],"electronic basin mixers":[`TAPWARE`],"electronic sets":[`TAPWARE`],"fixed showers":[`SHOWER`],"floor waste":[`WASTE`,`PLUG`],"freestanding bath mixers":[`TAPWARE`],"hand shower pieces":[`SHOWER`],"heated towel rails":[`BATH ACCESS`,`ACCESSORIES`],"island baths":[`BATH`],"mid basin mixers":[`TAPWARE`],pedestals:[`BASIN`],"polymarble shower bases":[`SHOWER`],"rectangular baths":[`BATH`],"retractable sink mixers":[`TAPWARE`,`SINK`],"shower mixers with diverter":[`TAPWARE`],"shower sets":[`SHOWER`],"shower system with overheads":[`SHOWER`],"shower on rails":[`SHOWER`],"shower with brackets":[`SHOWER`],"single bowl sink":[`SINK`],"single robe hook":[`BATH ACCESS`,`ACCESSORIES`],"single shelves":[`BATH ACCESS`,`ACCESSORIES`],"sink cover":[`SINK`],"sink outlets":[`TAPWARE`,`SINK`],"soap baskets":[`BATH ACCESS`,`ACCESSORIES`],"soap holders":[`BATH ACCESS`,`ACCESSORIES`],"standard basin mixers":[`TAPWARE`],"stop taps":[`TAPWARE`],"toilet seats":[`TOILET`,`WC`],"towel holders":[`BATH ACCESS`,`ACCESSORIES`],"towel rings":[`BATH ACCESS`,`ACCESSORIES`],"tower basin mixers":[`TAPWARE`],urinals:[`TOILET`],vanity:[`BASIN`],"wall basin mixers":[`TAPWARE`],"wall basin/bath sets":[`TAPWARE`],"wall bath mixers":[`TAPWARE`],"wall bath sets":[`TAPWARE`],"wall bath/basin trim kits":[`TAPWARE`],"wall faced suites":[`TOILET`,`WC`],"washing machine":[`TAPWARE`],"waste traps":[`WASTE`,`PLUG`]};function j(e){return String(e||``).toLowerCase().replace(/[^a-z0-9\s]/g,` `).split(/\s+/).filter(e=>e.length>=2)}function M(e){if(!e)return``;let t=e.toLowerCase();for(let[e,n]of[[/towel\s*(?:rail|holder|ring|ladder|rack)|robe\s*hook|soap\s*dish|toilet\s*roll|shower\s*shelf/i,`accessories`],[/sink\s*mixer|retractable\s*sink/i,`sink mixers`],[/basin\s*mixer|wall\s*mixer|shower\s*mixer|diverter\s*mixer|hob\s*mixer/i,`tapware`],[/mixer\s*set|wall\s*(?:basin|bath)\b.*\bset/i,`tapware`],[/basin(?!\s*mixer)/i,`basins`],[/toilet|wc|cistern|seat/i,`toilets`],[/bath(?!\s*room)(?!\s*accessories)(?!\s*shower)/i,`baths`],[/shower\s*(?:on\s+)?(?:head|arm|rail|rose|set|panel|system|bracket)/i,`showers`],[/shower/i,`showers`],[/sink/i,`sink`],[/diverter/i,`tapware`],[/tap|spout|mixer|outlet|assembly/i,`tapware`],[/shelf|hook|holder|grab\s*rail/i,`accessories`],[/mirror/i,`mirrors`],[/waste|plug|drain/i,`plug & waste`]])if(e.test(t))return n;return``}function N(e){return(e||``).toLowerCase().replace(/\b(above|counter|top|mounted|bench)\b/g,`above-counter`).replace(/\b(wall)\s*(hung|mounted|mount)\b/g,`wall-hung`).replace(/\b(semi)\s*(recessed|inset)\b/g,`semi-recessed`).replace(/\b(under)\s*(counter|mount|mounted)\b/g,`undermount`).replace(/\b(free)\s*(standing)\b/g,`freestanding`)}function P(e){let t=String(e||``).toLowerCase().trim();if(!t)return``;for(let[e,n]of Object.entries(D))if(n.some(e=>t.includes(e)))return e;return t}function F(e){let t=String(e||``).toLowerCase().trim();if(!t)return``;for(let[e,n]of Object.entries(O))if(n.some(e=>t.includes(e)))return e;return t}function ee(e,t){for(let n of Object.values(k)){let r=n.some(t=>e.includes(t)),i=n.some(e=>t.includes(e));if(r&&i)return!0}return!1}function I(e){let t=0,n=0,r=0;if(e?.dimensions_mm){let i=String(e.dimensions_mm).match(/[\d.]+/g);i&&i.length>=2&&(t=parseFloat(i[0])||0,n=parseFloat(i[1])||0,i.length>=3&&(r=parseFloat(i[2])||0))}for(let i of Object.keys(e||{})){let a=i.toLowerCase(),o=parseFloat(e[i])||0;a.includes(`width`)&&!t&&(t=o),a.includes(`depth`)&&!n&&(n=o),a.includes(`height`)&&!r&&(r=o)}return{width:t,depth:n,height:r}}function L(e){return{width:parseFloat(e.DimX||e[`X Dimension (mm)`])||0,depth:parseFloat(e.DimY||e[`Y Dimension (mm)`])||0,height:parseFloat(e.DimZ||e[`Z Dimension (mm)`])||0}}function R(e){return!e||e<=0?null:Math.round(e/25)*25}function z(e,t){let n=[];if(t===`seima`){let t=L(e);t.width&&n.push(`w_${R(t.width)}`),t.depth&&n.push(`d_${R(t.depth)}`),t.height&&n.push(`h_${R(t.height)}`);let r=parseFloat(e.WELS_STAR||e[`WELS Star`])||0;r>0&&n.push(`wels_${r.toFixed(1).replace(`.0`,``)}`);let i=F(`${e.LongDescription||``} ${e.Description||``} ${e.ProductName||``}`);return i&&n.push(`mat_${i.replace(/\s+/g,`_`)}`),n}let r=I(e);r.width&&n.push(`w_${R(r.width)}`),r.depth&&n.push(`d_${R(r.depth)}`),r.height&&n.push(`h_${R(r.height)}`);let i=parseFloat(e.wels_rating)||0;i>0&&n.push(`wels_${i.toFixed(1).replace(`.0`,``)}`);let a=F(e.material||``);return a&&n.push(`mat_${a.replace(/\s+/g,`_`)}`),n}function te(e){return[`${e.SubGroup||``} ${e.Group||``}`.trim(),`${e.ProductName||``} ${e.Description||``}`.trim(),e.Range||``,`${e.Finish||``} ${e.Colour||``}`.trim(),e.LongDescription||``].filter(Boolean).join(` `)}function ne(e,t){let n=N(e.product_type||e.subcategory||M(e.product_name)),r=N(`${t.SubGroup||``} ${t.Group||``}`);if(!n||!r)return 50;let i=new Set(j(n)),a=new Set(j(r)),o=0;for(let e of i)a.has(e)&&o++;return o===0?ee(n,r)?70:0:Math.min(100,Math.round(o/Math.max(i.size,1)*100))}function re(e,t){let n=P(e.finish||e.colour||``),r=P(`${t.Finish||``} ${t.Colour||``}`);if(!n||!r)return 50;if(n===r)return 100;let i=new Set(n.split(/\s+/)),a=new Set(r.split(/\s+/)),o=0;for(let e of i)a.has(e)&&o++;return o>0?70:0}function ie(e,t){let n=I(e),r=L(t);if(n.width===0&&n.depth===0||r.width===0&&r.depth===0)return 50;let i=0,a=0;return n.width>0&&r.width>0&&(a++,Math.abs(n.width-r.width)<=50&&i++),n.depth>0&&r.depth>0&&(a++,Math.abs(n.depth-r.depth)<=50&&i++),n.height>0&&r.height>0&&(a++,Math.abs(n.height-r.height)<=50&&i++),a===0?50:Math.round(i/a*100)}function ae(e,t){let n=F(e.material||``);if(!n)return 50;let r=F(`${t.LongDescription||``} ${t.Description||``} ${t.ProductName||``}`);return r?n===r?100:0:50}function oe(e,t){let n=e.wels_rating,r=t.WELS_STAR;if(!n||n===`Not Required`||!r)return 50;let i=parseFloat(n)||0,a=parseFloat(r)||0;return i===0||a===0?50:i===a?100:Math.abs(i-a)<=.5?70:30}function se(e,t){let n=g(e.rrp_ex_gst);Number.isNaN(n)&&(n=_(e.rrp_inc_gst,4)??0),n>0||(n=parseFloat(String(e.rrp||e.price||``).replace(/,/g,``))||0);let r=parseFloat(String(t.RRP_EX||t[`RRP EX GST`]||``).replace(/,/g,``))||0;if(n===0||r===0)return 50;let i=Math.min(n,r)/Math.max(n,r);return i>=.8?100:i>=.6?70:i>=.4?40:10}function ce(e,t){let n=0;return n+=ne(e,t)*E.productType/100,n+=re(e,t)*E.finish/100,n+=ie(e,t)*E.dimensions/100,n+=ae(e,t)*E.material/100,n+=oe(e,t)*E.wels/100,n+=se(e,t)*E.priceBracket/100,Math.round(n)}function le(e,t=A){let n=[M(e.product_name),e.product_type,e.subcategory,e.collection].filter(Boolean);for(let e of n){let n=t[e.toLowerCase()];if(n)return{keywords:n,source:e}}return{keywords:null,source:``}}function ue(e){return`${e.SubGroup||``} ${e.Group||``} ${e.Range||``} ${e.Description||``}`.toUpperCase()}function de(e,t,n=A){let{keywords:r}=le(e,n);if(!r)return[{name:T[2].name,products:t,multiplier:T[2].multiplier}];let i=[],a=[],o=new Set;for(let e of t){let t=ue(e),n=r.filter(e=>t.includes(e)).length;n===r.length||n>=2?(i.push(e),o.add(e.OrderCode)):n>0&&a.push(e)}let s=t.filter(e=>!o.has(e.OrderCode)),c=[];return i.length&&c.push({name:T[0].name,products:i,multiplier:T[0].multiplier}),a.length&&c.push({name:T[1].name,products:a,multiplier:T[1].multiplier}),c.push({name:T[2].name,products:s.length?s:t,multiplier:T[2].multiplier}),c}function fe(e){let t=.75,n=e.map(e=>{let t=j(te(e)),n=z(e,`seima`),r=[...t,...n],i=new Map;for(let e of r)i.set(e,(i.get(e)||0)+1);return{product:e,tokens:r,tf:i,length:r.length||1}}),r=n.reduce((e,t)=>e+t.length,0)/(n.length||1),i=new Map;for(let e of n){let t=new Set(e.tokens);for(let e of t)i.set(e,(i.get(e)||0)+1)}let a=n.length;return{docs:n,search(e,o=20){let s=j(e);if(!s.length)return[];let c=n.map(e=>{let n=0;for(let o of s){let s=i.get(o)||0;if(!s)continue;let c=Math.log((a-s+.5)/(s+.5)+1),l=e.tf.get(o)||0;if(!l)continue;let u=l*2.5/(l+1.5*(1-t+t*(e.length/r)));n+=c*u}return{product:e.product,score:n}});return c.sort((e,t)=>t.score-e.score),c.slice(0,o).filter(e=>e.score>0)}}}function pe(e,t={}){if(!t||Object.keys(t).length===0)return e;let n=[...e];for(let r of e){let e=t[r];if(e)if(Array.isArray(e))for(let t of e)n.push(...j(t));else n.push(...j(e))}return n}function me(e,t={}){let n=e.product_type||e.subcategory||``,r=e.product_name||``,i=e.finish||e.colour||``,a=j([n,n,n,r,i,i,e.collection||``,e.description||e.product_description||``,e.material||``,e.style||``].filter(Boolean).join(` `)),o=pe(a,t.synonymMap||{}),s=z(e,`competitor`);return[...a,...o,...s].join(` `)}function he(e,t,n={}){let{categoryMap:r=A,synonymMap:i={},topKPerTier:a=b.BM25_TOP_K,totalTopK:o=b.BM25_TOP_K}=n,s=me(e,{synonymMap:i}),c=de(e,t,r),l=new Map;for(let e of c){if(!e.products.length)continue;let t=fe(e.products).search(s,a);for(let n of t){let t=n.score*e.multiplier,r=n.product.OrderCode,i=l.get(r);(!i||t>i.score)&&l.set(r,{product:n.product,score:t,rawScore:n.score,retrievalTier:e.name})}}return[...l.values()].sort((e,t)=>t.score-e.score).slice(0,o)}function ge(e,t,n){if(!n||n.length===0)return e;let r=(t.collection||t.style||``).toLowerCase().trim();if(!r)return e;let i=n.filter(e=>r.includes(String(e.competitorRange||``).toLowerCase()));if(i.length===0)return e;let a=new Set(i.map(e=>String(e.seimaRange||``).toLowerCase()));return e.map(e=>{let t=String(e.product.Range||``).toLowerCase();return t&&a.has(t)?{...e,combinedScore:e.combinedScore+w,rangeHintApplied:!0}:e})}function _e(e,t=x){return e>=t.AUTO_ACCEPT?`Auto-Accept`:e>=t.REVIEW?`Review`:`Reject`}function ve(e,t){let n=[];e.retrievalTier&&n.push(`tier: ${e.retrievalTier}`),e.rangeHintApplied&&n.push(`range match`);let r=P(t.finish||t.colour||``),i=P(`${e.product.Finish||``} ${e.product.Colour||``}`);r&&i&&r===i&&n.push(`finish: ${r}`);let a=F(t.material||``),o=F(`${e.product.LongDescription||``} ${e.product.Description||``}`);a&&o&&a===o&&n.push(`material: ${a}`);let s=I(t),c=L(e.product);return s.width>0&&c.width>0&&Math.abs(s.width-c.width)<=50&&n.push(`similar dims`),e.embeddingScore!=null&&n.push(`embedding: ${e.embeddingScore}%`),e.bm25Score!=null&&n.push(`text: ${e.bm25Score}%`),n.push(`attr: ${e.attrScore}%`),n.join(`, `)}function ye(e,t){let n=new Set,r=[];for(let i of e){let e=i.product.OrderCode;if(!n.has(e)&&(n.add(e),r.push(i),r.length>=t))break}return r}function be(e,t,n,r={}){let i=r.finalTopK||b.FINAL_TOP_K,a=r.confidenceBands||x,o=t.length>0?t[0].score:1,s=ge(t.map(t=>{let n=o>0?t.score/o*100:0,r=ce(e,t.product),i=Math.round(n*S+r*C);return{product:t.product,bm25Score:Math.round(n),attrScore:r,combinedScore:i,retrievalTier:t.retrievalTier||``,rangeHintApplied:!1}}),e,n);return s.sort((e,t)=>t.combinedScore-e.combinedScore),ye(s,i).map((t,n)=>{let r=Math.min(100,t.combinedScore);return{seimaSKU:t.product.OrderCode,seimaName:t.product.Description||t.product.ProductName,rank:n+1,confidence:r,decision:_e(r,a),reason:ve(t,e)}})}function B(e){let t=String(e??``).trim();if(!t)return``;let n=t.match(/^=HYPERLINK\s*\(\s*"([^"]+)"/i);if(n)return n[1].trim();let r=t.match(/^=HYPERLINK\s*\(\s*'([^']+)'/i);return r?r[1].trim():((t.startsWith(`"`)&&t.endsWith(`"`)||t.startsWith(`'`)&&t.endsWith(`'`))&&(t=t.slice(1,-1).trim()),t)}function V(e){let t=B(e);return!t||t===`#`?``:t.startsWith(`http://`)||t.startsWith(`https://`)?t:t.startsWith(`//`)?`https:${t}`:/^www\./i.test(t)||/^(pages\.)?seima\.com\.au(\/|$)/i.test(t)?`https://${t}`:t}function H(e){if(!e||typeof e!=`string`)return[];let t=e.trim();return t.startsWith(`//`)&&(t=`https:${t}`),t.startsWith(`data:`)?[t]:!t.startsWith(`http://`)&&!t.startsWith(`https://`)?[]:[`https://wsrv.nl/?url=${encodeURIComponent(t)}`,`https://images.weserv.nl/?url=${encodeURIComponent(t)}`,`https://api.codetabs.com/v1/proxy?quest=${encodeURIComponent(t)}`,t]}function U(e,t){let n=String(e??``).trim();if(!n)return``;if(/^https?:\/\//i.test(n))return n;if(n.startsWith(`//`))return`https:${n}`;if(/^www\./i.test(n))return n;let r=n.replace(/^\/+/,``);return r?/^(datasheets|images|diagrams)\//i.test(r)?`https://pages.seima.com.au/${r}`:`https://pages.seima.com.au/${t}/${r}`:``}function W(e,t){let n=B(e).trim();return!n||n===`#`?``:V(U(n,t))}function G(e,t){let n=e||{},r=t===`diagram`?n.Diagram_URL||n.diagramUrl||n[`Diagram URL`]||n[`Web Diagram`]||n[`Web diagram`]||n.X_WEB_DIAG||n.X_WEB_DIAG||n.LineDrawing_URL||n[`Line Drawing URL`]||``:n.Image_URL||n.imageUrl||n[`Image URL`]||n.X_WEB_IMAGE||n.X_IMAGE_WEB||n.X_IMAGE_WEB||n.X_WEB_IMAGE||``,i=t===`diagram`?`diagrams`:`images`;return U(String(r||``).trim(),i)}function xe(e){try{if(typeof localStorage>`u`||localStorage.getItem(`seimaPdfDebug`)!==`1`)return;let t=e||{},n=String(t.OrderCode||t.Code||``).trim();console.warn(`[seimaPdfDebug]`,n||`(no code)`,{Image_URL:t.Image_URL||``,Diagram_URL:t.Diagram_URL||``,Datasheet_URL:t.Datasheet_URL||``,Website_URL:t.Website_URL||``})}catch{}}function Se(e){if(!e||typeof e!=`object`)return e;let t={...e},n=t.Datasheet_URL||t.datasheetUrl||t[`Datasheet URL`]||t.X_WEB_DSHEET||t.X_WEB_DSHEET||``,r=typeof t.URL==`string`&&/^https?:|^www\.|^\/\/|pages\.seima\.com\.au/i.test(t.URL.trim())?t.URL.trim():``,i=t.Website_URL||t.websiteUrl||t[`Website URL`]||t.product_url||t.productUrl||t[`Product URL`]||t.Product_URL||t[`Web URL`]||r||``;return t.Image_URL=G(t,`image`),t.Diagram_URL=G(t,`diagram`),t.Datasheet_URL=W(String(n||``).trim(),`datasheets`),t.Website_URL=V(String(i||``).trim()),t}function Ce(e){if(!e||typeof e!=`string`)return!0;let t=e.trim();return!t||(t.startsWith(`//`)&&(t=`https:${t}`),t.length<10)||!t.startsWith(`http://`)&&!t.startsWith(`https://`)&&!t.startsWith(`data:`)||/\/images\/\d+$/.test(t)||t.endsWith(`/0`)?!0:t.startsWith(`data:`)?!1:/\.pdf(\?|#|$)/i.test(t)?!0:!(/\.(jpe?g|png|gif|webp|svg|bmp|tif{1,2}|avif)(\?.*)?$/i.test(t)||/^https?:\/\/pages\.seima\.com\.au\/(images|diagrams)\//i.test(t)||t.startsWith(`https://`)||t.startsWith(`http://`))}function we(e,t){try{let n=Math.min(100,e.width),r=Math.min(100,e.height),i=t.getImageData(0,0,n,r).data,a=new Set;for(let e=0;e<i.length;e+=4){let t=`${i[e]},${i[e+1]},${i[e+2]}`;if(a.add(t),a.size>1e3)return!1}return a.size<1e3}catch(e){return console.warn(`Could not analyze image for diagram detection:`,e),!1}}function Te(e,t){try{let n=t.getImageData(0,0,e.width,e.height).data;for(let e=3;e<n.length;e+=4)if(n[e]<255)return!0;return!1}catch(e){return console.warn(`Could not detect transparency:`,e),!1}}function Ee(e){let t=String(e||``).replace(/^\.\/+/,``).replace(/^\/+/,``);return`/`.endsWith(`/`)?`/${t}`:`//${t}`}async function K(){return new Promise((e,t)=>{if(window.jsPDF||window.jspdf){e();return}let n=document.createElement(`script`);n.src=`https://cdn.jsdelivr.net/npm/jspdf@2.5.1/dist/jspdf.umd.min.js`,n.onload=()=>{console.log(`✅ jsPDF loaded`),e()},n.onerror=()=>t(Error(`Failed to load jsPDF`)),document.head.appendChild(n)})}var q={headerBackground:`#8B6C2B`,footerBackground:`#9B9184`,textPrimary:`#222`,textSecondary:`#444`,textMuted:`#888`,textSubtle:`#666`,linkColor:[0,102,204],white:`#fff`,headerText:`#f4f4f4`},J={margins:{left:32,right:32,top:20,bottom:30},footerHeight:28,headerHeight:33.7,maxRowsPerPage:4,rowPadding:8,imageWidth:90,imagePadding:12,welsColumnWidth:50,codeColumnOffset:85,coverLogoWidth:250},Y=new Map;async function X(e,t={}){let{batchSize:n=10,maxWidth:r=400,quality:i=.8}=t;Y.clear();let a=e=>{if(!e||typeof e!=`string`)return``;let t=e.trim();return t.startsWith(`//`)&&(t=`https:${t}`),t},o=new Set;e.forEach(e=>{let t=a(e.Image_URL||``),n=a(e.Diagram_URL||``);t.length>10&&o.add(t),n.length>10&&o.add(n)});let s=Array.from(o);if(s.length===0)return console.log(`📷 No images to preload`),0;console.log(`📷 Preloading ${s.length} images in parallel...`);let c=Date.now(),l=0,u=0;for(let e=0;e<s.length;e+=n){let t=s.slice(e,e+n);(await Promise.allSettled(t.map(e=>De(e,r,i)))).forEach((e,n)=>{let r=t[n];e.status===`fulfilled`&&e.value?(Y.set(r,e.value),l++):u++});let a=document.getElementById(`preload-progress`);a&&(a.textContent=`Loading images: ${Math.min(100,Math.round((e+t.length)/s.length*100))}%`)}let d=((Date.now()-c)/1e3).toFixed(1);return console.log(`✅ Preloaded ${l}/${s.length} images in ${d}s (${u} failed)`),l}async function De(e,t=400,n=.8){let r=typeof e==`string`?e.trim():``;if(r.startsWith(`//`)&&(r=`https:${r}`),Y.has(r))return Y.get(r);if(Ce(r))return console.warn(`Skipping malformed image URL:`,e?.substring(0,50)+`...`),null;let i=H(r);for(let e=0;e<i.length;e++){let r=await Oe(i[e],t,n);if(r)return r}return console.warn(`All image fetch attempts failed for preload:`,r.substring(0,60)),null}function Oe(e,t,n){return new Promise(r=>{let i=new Image;i.crossOrigin=`anonymous`;let a=setTimeout(()=>{i.src=``,r(null)},3e3);i.onload=function(){clearTimeout(a);try{let e=document.createElement(`canvas`),a=e.getContext(`2d`,{willReadFrequently:!0}),o=i.width,s=i.height;o>t&&(s=s*t/o,o=t),e.width=o,e.height=s,a.imageSmoothingEnabled=!0,a.imageSmoothingQuality=`high`,a.drawImage(i,0,0,o,s);let c=Te(e,a),l=we(e,a),u=c||l?`PNG`:`JPEG`,d=l?.9:n;r({dataUrl:e.toDataURL(`image/${u.toLowerCase()}`,d),width:o,height:s,format:u})}catch{console.warn(`Failed to optimize preloaded image:`,e.substring(0,50)),r(null)}},i.onerror=()=>{clearTimeout(a),r(null)},i.src=e})}function ke(e){return Y.get(e)}function Ae(){return Y.size}function je(){Y.clear()}new class{constructor(){this.isInitialized=!1,this.imageAliasCache=new Map}async init(){try{return await K(),this.isInitialized=!0,console.log(`✅ PDF Core initialized`),!0}catch(e){return console.error(`❌ PDF Core initialization failed:`,e),!1}}async preloadImages(e,t){return X(e,t)}getCachedImage(e){return ke(e)}clearCaches(){this.imageAliasCache.clear(),je()}};function Me(e){let t=e[`WELS STAR`]||e.WELS_STAR||e.WELS_STAR||e.WelsStar||``;return t&&t.toString().trim()!==``}function Ne(e,t={}){let{leftMargin:n=J.margins.left,rightMargin:r=J.margins.right,showRrp:i=!1,showPrice:a=!0,showQty:o=!0,showTotal:s=!0}=t,c=J.imageWidth,l=J.imagePadding,u=J.welsColumnWidth,d=n+c*2+l*2,f=d+J.codeColumnOffset,p,m,h;if(i&&a&&o&&s){let t=e-280,r=t-u,i=e-200,a=e-120,o=e-60;p=[n,d,f,r,t,i,a,o],m=[c,c,r-f-10,u,i-t,a-i,o-a,60],h=[`Code`,`Description`,`WELS`,`RRP`,`Price`,`Qty`,`Total`]}else if(a&&o&&s){let t=e-200,r=t-u,i=e-120,a=e-60;p=[n,d,f,r,t,i,a],m=[c,c,r-f-10,u,i-t,a-i,60],h=[`Code`,`Description`,`WELS`,`Price`,`Qty`,`Total`]}else if(a&&!o)if(i){let t=e-180,r=t-u,i=e-90;p=[n,d,f,r,t,i],m=[c,c,r-f-10,u,i-t,90],h=[`Code`,`Description`,`WELS`,`RRP`,`Price`]}else{let t=e-90,r=t-u;p=[n,d,f,r,t],m=[c,c,r-f-10,u,90],h=[`Code`,`Description`,`WELS`,`Price`]}else if(!a&&o){let t=e-80,r=t-u;p=[n,d,f,r,t],m=[c,c,r-f-10,u,80],h=[`Code`,`Description`,`WELS`,`Qty`]}else{let t=e-r-u;p=[n,d,f,t],m=[c,c,t-f-10,u],h=[`Code`,`Description`,`WELS`]}return{colX:p,colW:m,headers:h,imgW:c,imgPad:l}}function Pe(e,t={}){let{pageWidth:n,colX:r,colW:i,leftMargin:a=J.margins.left,footerHeight:o=J.footerHeight,logoDataUrl:s,logoNaturalW:c,logoNaturalH:l,headers:u=[],userDetails:d={},skipWelsHeader:f=!1,showRefAboveCode:p=!1,headerColor:m=q.headerBackground}=t,h=o+5.7;if(e.setFillColor(m),e.rect(0,0,n,h,`F`),s&&c&&l){let t=c/l,n=h*.6,r=n*t,i=n;r>80&&(r=80,i=r/t);let o=(h-i)/2;e.addImage(s,`PNG`,a,o,r,i)}e.setFontSize(10),e.setTextColor(q.headerText),e.setFont(`helvetica`,`normal`);let g=h-8;u.forEach((t,n)=>{if(t===`WELS`&&f)return;let a=n+1;if(a<r.length){let n=r[a]+i[a]/2;if(t===`Price`&&!d.excludePrice){e.setFont(`helvetica`,`normal`);let t=d.includeGst?`INC GST`:`EX GST`,r=`Price ${t}`,i=e.getTextWidth(`Price `),a=n-e.getTextWidth(r)/2;e.text(`Price `,a,g),e.setFont(`helvetica`,`bold`),e.text(t,a+i,g),e.setFont(`helvetica`,`normal`)}else if(t===`RRP`){let t=d.includeGst?`INC`:`EX`;e.text(`RRP ${t}`,n,g,{align:`center`})}else t===`Code`&&p?(e.setFontSize(7.5),e.text(`Ref`,n,g-9,{align:`center`}),e.setFontSize(10),e.text(`Code`,n,g,{align:`center`})):e.text(t,n,g,{align:`center`})}})}function Z(e,t={}){let{pageWidth:n,pageHeight:r,leftMargin:i=J.margins.left,footerHeight:a=J.footerHeight,pageNumber:o,totalPages:s,footerColor:c=q.footerBackground}=t;e.setFillColor(c),e.rect(0,r-a,n,a,`F`),e.setTextColor(q.white),e.setFontSize(11);let l=r-a/2+3;e.text(`www.seima.com.au`,n-140,l),o!==void 0&&s!==void 0&&e.text(`Page ${o} of ${s}`,i,l)}function Q(e,t={}){let{pageWidth:n,pageHeight:r,seimaLogoDataUrl:i,seimaLogoNaturalW:a,seimaLogoNaturalH:o,customerLogoDataUrl:s,userDetails:c={},staffContact:l,footerHeight:u=J.footerHeight}=t,d=n/2,f=(n-320)/2;if(s){e.setFillColor(255,255,255),e.rect(f,70,320,90,`F`);try{let t=new Image;t.src=s;let n=t.width/t.height||2,r=300,i=300/n;i>70&&(i=70,r=70*n);let a=f+(320-r)/2,o=70+(90-i)/2;e.addImage(s,`PNG`,a,o,r,i,void 0,`FAST`)}catch(e){console.warn(`Failed to draw customer logo:`,e)}}let p=J.coverLogoWidth,m=o&&a?p*o/a:65,h=(n-p)/2;i&&e.addImage(i,`PNG`,h,240,p,m,void 0,`FAST`);let g=`Build with Confidence`,_=240+m+28;e.setFont(`helvetica`,`normal`),e.setFontSize(18),e.setTextColor(`#333`);let v=g.split(``),y=(p-e.getTextWidth(g))/(v.length-1),b=h;v.forEach(t=>{e.text(t,b,_),b+=e.getTextWidth(t)+y}),e.setFontSize(15),e.setTextColor(q.textSecondary);let x=_+50,S=[];c?.name&&c.name.trim()&&S.push({label:`Name:`,value:c.name.trim(),bold:!0}),c?.project&&c.project.trim()&&S.push({label:`Project:`,value:c.project.trim(),bold:!0}),c?.address&&c.address.trim()&&S.push({label:`Address:`,value:c.address.trim(),bold:!0}),c?.email&&c.email.trim()&&S.push({label:`Email:`,value:c.email.trim(),bold:!0});let C=c?.telephone||c?.phone||``;C&&C.trim()&&S.push({label:`Telephone:`,value:C.trim(),bold:!0});let w=S.length*26,T=r-u-40-x;w<T&&(x+=(T-w)/3);let E=0,D=S.map(t=>{e.setFont(`helvetica`,`normal`),e.setFontSize(15);let n=e.getTextWidth(t.label+` `);e.setFont(`helvetica`,t.bold?`bold`:`normal`);let r=n+e.getTextWidth(t.value);return r>E&&(E=r),{...t,labelWidth:n}}),O=d-E/2;D.forEach(t=>{e.setFont(`helvetica`,`normal`),e.setFontSize(15),e.setTextColor(q.textSecondary),e.text(t.label,O,x),t.bold&&e.setFont(`helvetica`,`bold`),e.text(t.value,O+t.labelWidth,x),x+=26});let k=``,A=l?.name||l?.staffName||``,j=l?.phone||l?.mobile||l?.staffPhone||``,M=l?.email||l?.staffEmail||``,N=l?.position||l?.staffPosition||``;A&&j&&M?k=`For more information, please contact ${N?`${A}, ${N}`:A} on ${j} or email ${M}`:A&&M?k=`For more information, please contact ${N?`${A}, ${N}`:A} at ${M}`:A?k=`For more information, please contact ${N?`${A}, ${N}`:A}`:j?k=`For more information, please call ${j}`:M&&(k=`For more information, please email ${M}`),k||=`For more information, please contact your Seima representative or email info@seima.com.au`,e.setFont(`helvetica`,`normal`),e.setFontSize(14),e.setTextColor(`#111`),e.text(k,d,r-u-18,{align:`center`}),Z(e,{pageWidth:n,pageHeight:r,footerHeight:u})}function Fe(e,t,n,r,i){e.setFontSize(12),e.setFont(`helvetica`,`bold`),e.setTextColor(`#333`),e.text(`${t} (${n})`,r,i+10),e.setFont(`helvetica`,`normal`)}function Ie(e,t,n,r){let i=r,a=t.Datasheet_URL||t.datasheetUrl||t[`Datasheet URL`]||t.X_WEB_DSHEET||t.X_WEB_DSHEET||``,o=W(String(a).trim(),`datasheets`);if(o&&o.startsWith(`http`)){e.setFont(`helvetica`,`normal`),e.setFontSize(9),e.setTextColor(...q.linkColor);let t=`Datasheet`,r=e.getTextWidth(t),a=n-r/2;e.textWithLink(t,a,i,{url:o}),e.setDrawColor(...q.linkColor),e.setLineWidth(.3),e.line(a,i+1.5,a+r,i+1.5),i+=16}let s=t.Website_URL||t.websiteUrl||t[`Website URL`]||t.product_url||t.productUrl||t[`Product URL`]||t.Product_URL||t[`Web URL`]||t.URL||``,c=V(String(s).trim());if(c&&c.startsWith(`http`)){e.setFont(`helvetica`,`normal`),e.setFontSize(9),e.setTextColor(...q.linkColor);let t=`Website`,r=e.getTextWidth(t),a=n-r/2;e.textWithLink(t,a,i,{url:c}),e.setDrawColor(...q.linkColor),e.setLineWidth(.3),e.line(a,i+1.5,a+r,i+1.5),i+=16}return i}function Le(e,t,n,r,i,a=!1){let o=r;e.setFontSize(10),e.setTextColor(q.textPrimary);let s=e.splitTextToSize(String(t.Description||``),i);e.text(s,n+5,o),o+=s.length*12;let c=t.LongDescription||t[`Long Description`]||t.longDescription||``;if(!a&&c){e.setFontSize(9),e.setTextColor(q.textSecondary);let t=e.splitTextToSize(String(c),i);e.text(t,n+5,o),o+=t.length*11}if(t.Notes){e.setFont(`helvetica`,`italic`),e.setFontSize(9),e.setTextColor(q.textSecondary);let r=e.splitTextToSize(`Notes: `+String(t.Notes),i);e.text(r,n+5,o),e.setFont(`helvetica`,`normal`),o+=r.length*11}return o}function Re(e,t,n,r){let i=t[`WELS STAR`]||t.WELS_STAR||t.WELS_STAR||t.WelsStar||``;if(i&&i.toString().trim()){let t=i.toString().replace(/[^\d.]/g,``).trim();t&&(e.setFontSize(9),e.setTextColor(q.textSubtle),e.text(`${t} star`,n,r,{align:`center`}))}}function $(e){return!e||isNaN(e)||e<=0?``:`$`+e.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,`,`)}function ze(e,t,n,r,i,a,o={}){let{excludePrice:s=!1,includeGst:c=!1}=o;e.setFontSize(10),e.setTextColor(q.textPrimary);let l=i.indexOf(`RRP`)+1,u=e=>e&&e!==`0`&&parseFloat(String(e).replace(/,/g,``))>0?e:``;if(l>0&&n[l]){let i=NaN,o=u(t.RRP_EX)||u(t[`RRP EX GST`])||u(t.RRP_EX)||u(t.RRP_EXGST)||u(t[`PL1 - RRP EX GST`]);o&&(i=parseFloat(o.toString().replace(/,/g,``)),c&&!isNaN(i)&&(i*=1.1));let s=$(i);if(s){let t=n[l]+r[l]/2;e.text(s,t,a,{align:`center`})}}let d=i.indexOf(`Price`)+1,f=NaN;if(d>0&&n[d]){if(t.UserEditedPrice!==void 0&&t.UserEditedPrice!==null&&t.UserEditedPrice!==``)f=parseFloat(t.UserEditedPrice.toString().replace(/,/g,``));else{let e=u(t.RRP_EX)||u(t[`RRP EX GST`])||u(t.RRP_EX)||u(t.RRP_EXGST)||u(t[`PL1 - RRP EX GST`]);e&&(f=parseFloat(e.toString().replace(/,/g,``)))}c&&!isNaN(f)&&(f*=1.1);let i=$(f);if(i){let t=n[d]+r[d]/2;e.text(i,t,a,{align:`center`})}}let p=i.indexOf(`Qty`)+1;if(p>0&&n[p]){let i=n[p]+r[p]/2;e.text(String(t.Quantity||1),i,a,{align:`center`})}let m=i.indexOf(`Total`)+1;if(m>0&&n[m]){let i=$((isNaN(f)?0:f)*(t.Quantity||1));if(i){let t=n[m]+r[m]/2;e.text(i,t,a,{align:`center`})}}}new class{constructor(){this.headerDrawn=!1}drawHeader(e,t){Pe(e,t),this.headerDrawn=!0}drawFooter(e,t){Z(e,t)}drawCoverPage(e,t){Q(e,t)}calculateColumns(e,t){return Ne(e,t)}};var Be=e({AU_GST_INC_MULTIPLIER:()=>h,authService:()=>u});export{y as A,Ce as C,be as D,M as E,o as F,r as I,m as M,d as N,he as O,u as P,X as S,b as T,Ae as _,Pe as a,xe as b,ze as c,Me as d,q as f,ke as g,Se as h,Z as i,g as j,_ as k,Fe as l,U as m,Ne as n,Le as o,J as p,Q as r,Ie as s,Be as t,Re as u,H as v,A as w,Ee as x,K as y};