(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function t(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(r){if(r.ep)return;r.ep=!0;const n=t(r);fetch(r.href,n)}})();const LogLevel={DEBUG:"debug",INFO:"info",WARN:"warn",ERROR:"error",CRITICAL:"critical"},ErrorCategory={NETWORK:"network",DATA:"data",UI:"ui",PDF:"pdf",STORAGE:"storage",COMPATIBILITY:"compatibility",IMPORT:"import",VALIDATION:"validation"};class ErrorHandler{constructor(){this.logs=[],this.maxLogs=1e3,this.enableConsoleLogging=!0,this.enableUserNotifications=!0,this.errorStats=new Map,this.setupGlobalErrorHandlers()}setupGlobalErrorHandlers(){window.addEventListener("error",e=>{var t;e.message&&e.message.includes("ResizeObserver")||this.handleError({message:e.message,filename:e.filename,lineNumber:e.lineno,columnNumber:e.colno,error:e.error,category:ErrorCategory.UI,context:"global",showUser:!((t=e.message)!=null&&t.includes("ResizeObserver"))})}),window.addEventListener("unhandledrejection",e=>{String(e.reason||"").includes("ResizeObserver")||this.handleError({message:`Unhandled promise rejection: ${e.reason}`,error:e.reason,category:ErrorCategory.DATA,context:"promise"})})}handleError(e){const{message:t,error:o,category:r=ErrorCategory.UI,context:n="unknown",level:i=LogLevel.ERROR,showUser:s=!0}=e,c={id:this.generateErrorId(),timestamp:new Date().toISOString(),message:t,category:r,context:n,level:i,stack:(o==null?void 0:o.stack)||new Error().stack,userAgent:navigator.userAgent,url:window.location.href,additionalInfo:this.gatherAdditionalInfo(o)};return this.log(c),this.updateErrorStats(r),s&&this.enableUserNotifications&&i!==LogLevel.DEBUG&&this.showUserNotification(c),i===LogLevel.CRITICAL&&this.attemptRecovery(c),c.id}log(e,t=LogLevel.INFO){const o=typeof e=="string"?{message:e,level:t,timestamp:new Date().toISOString()}:e;this.logs.push(o),this.logs.length>this.maxLogs&&this.logs.shift(),this.enableConsoleLogging&&this.consoleLog(o),(t===LogLevel.ERROR||t===LogLevel.CRITICAL)&&this.persistCriticalLog(o)}consoleLog(e){const{level:t,message:o,category:r,context:n}=e,i=`[${t.toUpperCase()}]${r?` [${r}]`:""}${n?` [${n}]`:""}`;switch(t){case LogLevel.DEBUG:console.debug(i,o,e);break;case LogLevel.INFO:console.info(i,o);break;case LogLevel.WARN:console.warn(i,o,e);break;case LogLevel.ERROR:case LogLevel.CRITICAL:console.error(i,o,e);break;default:console.log(i,o)}}showUserNotification(e){const{message:t,category:o,level:r}=e,n=this.generateUserFriendlyMessage(t,o);r!==LogLevel.CRITICAL?this.showToast(n,r):this.showErrorModal(n,e)}showToast(e,t){const o=document.createElement("div");o.className=`error-toast error-toast--${t}`,o.style.cssText=`
      position: fixed;
      top: 20px;
      right: 20px;
      z-index: 10000;
      max-width: 400px;
      padding: 16px 20px;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
      font-family: inherit;
      font-size: 14px;
      line-height: 1.4;
      transform: translateX(100%);
      transition: transform 0.3s ease;
      background: ${t===LogLevel.ERROR?"#fee":t===LogLevel.WARN?"#fef3c7":"#e0f2fe"};
      border-left: 4px solid ${t===LogLevel.ERROR?"#dc2626":t===LogLevel.WARN?"#f59e0b":"#0ea5e9"};
      color: ${t===LogLevel.ERROR?"#7f1d1d":t===LogLevel.WARN?"#92400e":"#0c4a6e"};
    `,o.innerHTML=`
      <div style="display: flex; align-items: flex-start; gap: 8px;">
        <span style="font-size: 16px;">${t===LogLevel.ERROR?"❌":t===LogLevel.WARN?"⚠️":"ℹ️"}</span>
        <div style="flex: 1;">${e}</div>
        <button onclick="this.parentElement.parentElement.remove()" style="
          background: none; border: none; font-size: 18px; cursor: pointer; 
          color: inherit; opacity: 0.7; padding: 0; margin-left: 8px;
        ">×</button>
      </div>
    `,document.body.appendChild(o),setTimeout(()=>o.style.transform="translateX(0)",100);const r=t===LogLevel.ERROR?8e3:5e3;setTimeout(()=>{o.parentElement&&(o.style.transform="translateX(100%)",setTimeout(()=>o.remove(),300))},r)}showErrorModal(e,t){const o=document.createElement("div");o.style.cssText=`
      position: fixed; top: 0; left: 0; width: 100%; height: 100%;
      background: rgba(0,0,0,0.8); z-index: 10001; display: flex;
      align-items: center; justify-content: center; padding: 20px;
    `,o.innerHTML=`
      <div style="
        background: white; border-radius: 12px; padding: 24px; max-width: 500px;
        width: 100%; max-height: 80vh; overflow-y: auto;
      ">
        <h3 style="color: #dc2626; margin: 0 0 16px 0; display: flex; align-items: center; gap: 8px;">
          <span>🚨</span> Critical Error
        </h3>
        <p style="margin: 0 0 20px 0; color: #374151; line-height: 1.5;">
          ${e}
        </p>
        <details style="margin: 16px 0; font-size: 12px; color: #6b7280;">
          <summary style="cursor: pointer; margin-bottom: 8px;">Technical Details</summary>
          <pre style="background: #f9fafb; padding: 8px; border-radius: 4px; overflow-x: auto; white-space: pre-wrap;">${JSON.stringify(t,null,2)}</pre>
        </details>
        <div style="display: flex; gap: 12px; justify-content: flex-end;">
          <button onclick="location.reload()" style="
            padding: 8px 16px; border: 1px solid #d1d5db; background: white;
            border-radius: 6px; cursor: pointer;
          ">Reload Page</button>
          <button onclick="this.closest('[style*=\\"position: fixed\\"]').remove()" style="
            padding: 8px 16px; border: none; background: #dc2626; color: white;
            border-radius: 6px; cursor: pointer;
          ">Dismiss</button>
        </div>
      </div>
    `,document.body.appendChild(o)}generateUserFriendlyMessage(e,t){return{[ErrorCategory.NETWORK]:"Unable to connect to the server. Please check your internet connection and try again.",[ErrorCategory.DATA]:"There was an issue loading product data. The page will retry automatically.",[ErrorCategory.PDF]:"PDF generation failed. Please try again or contact support if the problem persists.",[ErrorCategory.STORAGE]:"Unable to save your data locally. Please ensure you have enough storage space.",[ErrorCategory.IMPORT]:"File import failed. Please check your file format and try again.",[ErrorCategory.VALIDATION]:"Please check your input and try again.",[ErrorCategory.COMPATIBILITY]:"Your browser may not support all features. Consider updating to a newer version.",[ErrorCategory.UI]:"A display issue occurred. This usually resolves automatically."}[t]||"An unexpected error occurred. Please try refreshing the page."}gatherAdditionalInfo(e){var t;return{timestamp:Date.now(),memoryUsage:performance.memory?{used:Math.round(performance.memory.usedJSHeapSize/1024/1024),total:Math.round(performance.memory.totalJSHeapSize/1024/1024),limit:Math.round(performance.memory.jsHeapSizeLimit/1024/1024)}:null,viewport:{width:window.innerWidth,height:window.innerHeight},localStorage:this.getStorageInfo(),errorType:(t=e==null?void 0:e.constructor)==null?void 0:t.name,hasNetworkConnection:navigator.onLine}}getStorageInfo(){try{const e=Object.keys(localStorage),t=e.reduce((o,r)=>o+localStorage.getItem(r).length,0);return{itemCount:e.length,totalSize:Math.round(t/1024),available:!0}}catch{return{available:!1}}}generateErrorId(){return`err_${Date.now()}_${Math.random().toString(36).substr(2,9)}`}updateErrorStats(e){const t=this.errorStats.get(e)||0;this.errorStats.set(e,t+1)}attemptRecovery(e){const{category:t}=e;switch(this.log(`Attempting recovery for critical ${t} error`,LogLevel.INFO),t){case ErrorCategory.STORAGE:this.recoverStorage();break;case ErrorCategory.DATA:this.recoverData();break;default:this.log("No specific recovery strategy available",LogLevel.WARN)}}recoverStorage(){try{["logs","cache","temp"].forEach(t=>{localStorage.getItem(t)&&(localStorage.removeItem(t),this.log(`Cleared ${t} from storage for recovery`,LogLevel.INFO))})}catch{this.log("Storage recovery failed",LogLevel.ERROR)}}recoverData(){try{window.dataLayer&&typeof window.dataLayer.init=="function"&&(window.dataLayer.init(),this.log("Attempting data layer recovery",LogLevel.INFO))}catch{this.log("Data recovery failed",LogLevel.ERROR)}}persistCriticalLog(e){try{const t=JSON.parse(localStorage.getItem("criticalLogs")||"[]");t.push(e),t.length>50&&t.splice(0,t.length-50),localStorage.setItem("criticalLogs",JSON.stringify(t))}catch{}}getErrorStats(){return{totalLogs:this.logs.length,categoryBreakdown:Object.fromEntries(this.errorStats),recentErrors:this.logs.filter(e=>e.level===LogLevel.ERROR||e.level===LogLevel.CRITICAL).slice(-10)}}exportLogs(){return JSON.stringify({logs:this.logs,stats:this.getErrorStats(),exportTime:new Date().toISOString(),userAgent:navigator.userAgent,url:window.location.href},null,2)}clearLogs(){this.logs=[],this.errorStats.clear(),localStorage.removeItem("criticalLogs"),this.log("Logs cleared",LogLevel.INFO)}}const errorHandler=new ErrorHandler;window.errorHandler=errorHandler;const Environment={DEVELOPMENT:"development",STAGING:"staging",PRODUCTION:"production"},CONFIG_SCHEMA={app:{name:{type:"string",default:"Seima Product Presenter",required:!0},version:{type:"string",default:"1.9.2",required:!0},environment:{type:"string",default:Environment.PRODUCTION,enum:Object.values(Environment)},debug:{type:"boolean",default:!1},buildDate:{type:"string",default:()=>new Date().toISOString()}},api:{catalogUrl:{type:"string",default:"https://docs.google.com/spreadsheets/d/e/2PACX-1vRnMqBCqB9L52W6YNgreLHJKvxOanS76CJN8ZUorBl8Iccha6MzUpDkGa0N8GSYFPP2zyql1Tq6aBn8/pub?gid=0&single=true&output=csv",required:!0},timeout:{type:"number",default:3e4,min:5e3,max:12e4},retryAttempts:{type:"number",default:3,min:1,max:10},retryDelay:{type:"number",default:1e3,min:500,max:1e4}},storage:{keys:{type:"object",default:{customRooms:"customRooms",selectedProducts:"selectedProducts",productCatalog:"productCatalog",userPreferences:"userPreferences",roomAssignments:"roomAssignments",criticalLogs:"criticalLogs"}},maxSize:{type:"number",default:5*1024*1024},compressionEnabled:{type:"boolean",default:!0}},ui:{theme:{type:"string",default:"light",enum:["light","dark","auto"]},language:{type:"string",default:"en-AU"},animationsEnabled:{type:"boolean",default:!0},annotationMaxLength:{type:"number",default:140,min:50,max:500},quantityOptions:{type:"array",default:[1,2,3,4,5,6,7,8,9,10]},autoSaveInterval:{type:"number",default:3e4,min:1e4,max:3e5},maxSearchResults:{type:"number",default:8,min:5,max:50}},rooms:{predefined:{type:"array",default:[{name:"Bath 1",icon:"🛁",category:"bathroom"},{name:"Bath 2",icon:"🛁",category:"bathroom"},{name:"Bath 3",icon:"🛁",category:"bathroom"},{name:"Ensuite",icon:"🚿",category:"bathroom"},{name:"Powder",icon:"🚽",category:"bathroom"},{name:"Kitchen",icon:"🍽️",category:"kitchen"},{name:"Butlers",icon:"👨‍🍳",category:"kitchen"},{name:"Laundry",icon:"🧺",category:"utility"},{name:"Alfresco",icon:"🍽️",category:"outdoor"},{name:"Standard",icon:"📦",category:"package"},{name:"Upgrade",icon:"⭐",category:"package"}]},maxCustomRooms:{type:"number",default:20,min:5,max:100}},import:{maxFileSize:{type:"number",default:10*1024*1024},acceptedTypes:{type:"array",default:[".csv",".xlsx",".xls",".json"]},requiredColumns:{type:"array",default:["OrderCode"]},optionalColumns:{type:"array",default:["Description","RRP_INCGST","Image_URL","Room","Quantity","Notes"]},batchSize:{type:"number",default:100,min:10,max:1e3},allowDuplicates:{type:"boolean",default:!1},productCodeValidation:{type:"object",default:{regex:"^\\d{6}$",allowAnyNonEmpty:!1,skipValidation:!1}},columnPatterns:{type:"object",default:{productCode:["code","ordercode","productcode","sku","order code","product code"],productName:["product name","description","name"],quantity:["quantity","qty","min order quantity","orderquantity"],priceIncGst:["price ea inc gst","price inc gst","priceincgst","rrp inc gst"],priceExGst:["price per unit","price ex gst","rrp ex gst"],room:["room","location","group"],notes:["notes","note","comments","comment"],productsJson:["products json","productsjson"],customerName:["customer name","customername"],customerEmail:["customer email","customeremail"],customerPhone:["customer phone","customerphone"],customerAddress:["customer address","customeraddress"],customerProject:["customer project","customerproject"]}}},pdf:{format:{type:"string",default:"A4",enum:["A4","Letter","A3"]},orientation:{type:"string",default:"portrait",enum:["portrait","landscape"]},quality:{type:"number",default:1,min:.1,max:2},maxFileSize:{type:"number",default:50*1024*1024},includeImages:{type:"boolean",default:!0},imageCompression:{type:"number",default:.8,min:.1,max:1},watermark:{type:"boolean",default:!1},fonts:{type:"object",default:{primary:"SF Pro Display, Segoe UI, Arial, sans-serif",monospace:"Menlo, Monaco, Consolas, monospace"}}},email:{serviceId:{type:"string",default:"service_rblizfg",required:!0},templateId:{type:"string",default:"template_8st9fhk",required:!0},publicKey:{type:"string",default:"MHAEjvnc_xx8DIRCA",required:!0},maxAttachmentSize:{type:"number",default:15*1024*1024},retryAttempts:{type:"number",default:3,min:1,max:5},retryDelay:{type:"number",default:2e3,min:1e3,max:1e4},bccEmail:{type:"string",default:"jsegredos@gmail.com"}},compatibility:{minChromeVersion:{type:"number",default:80,min:60},minFirefoxVersion:{type:"number",default:75,min:60},minSafariVersion:{type:"number",default:13,min:10},requiredFeatures:{type:"array",default:["localStorage","fileReader","blob","createObjectURL","fetch"]},minCompatibilityScore:{type:"number",default:70,min:50,max:100},memoryWarningThreshold:{type:"number",default:.8,min:.5,max:1},enableSamsungOptimisations:{type:"boolean",default:!0},enableExtendedTimeouts:{type:"boolean",default:!0}},performance:{maxProductsPerSession:{type:"number",default:1e3,min:100,max:1e4},imageCacheSize:{type:"number",default:100,min:50,max:500},virtualScrollThreshold:{type:"number",default:100,min:50,max:1e3},debounceDelay:{type:"number",default:300,min:100,max:1e3},batchUpdateSize:{type:"number",default:50,min:10,max:200}},logging:{maxLogs:{type:"number",default:1e3,min:100,max:1e4},persistCriticalLogs:{type:"boolean",default:!0},enableConsoleLogging:{type:"boolean",default:!0},enableUserNotifications:{type:"boolean",default:!0},logLevel:{type:"string",default:"info",enum:["debug","info","warn","error","critical"]}}};class ConfigManager{constructor(){this.config={},this.validators=new Map,this.listeners=new Map,this.environment=this.detectEnvironment(),this.initializeConfig(),this.setupValidators()}detectEnvironment(){return window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1"||window.location.port!==""?Environment.DEVELOPMENT:window.location.hostname.includes("staging")||window.location.hostname.includes("test")?Environment.STAGING:Environment.PRODUCTION}initializeConfig(){this.config=this.buildDefaultConfig(CONFIG_SCHEMA),this.applyEnvironmentOverrides(),this.loadUserPreferences(),this.validateConfig(),errorHandler.log(`Configuration initialized for ${this.environment} environment`,LogLevel.INFO)}buildDefaultConfig(e){const t={};for(const[o,r]of Object.entries(e))r&&typeof r=="object"&&r.type==="object"&&!r.default?t[o]=this.buildDefaultConfig(r):r&&typeof r=="object"&&!r.type&&!r.default?t[o]=this.buildDefaultConfig(r):r&&r.default!==void 0&&(t[o]=typeof r.default=="function"?r.default():r.default);return t}applyEnvironmentOverrides(){switch(this.config.app||(this.config.app={}),this.config.logging||(this.config.logging={}),this.config.api||(this.config.api={}),this.config.pdf||(this.config.pdf={}),this.environment){case Environment.DEVELOPMENT:this.config.app.debug=!0,this.config.logging.logLevel="debug",this.config.logging.enableConsoleLogging=!0,this.config.api.timeout=6e4;break;case Environment.STAGING:this.config.app.debug=!0,this.config.logging.logLevel="info",this.config.pdf.watermark=!0;break;case Environment.PRODUCTION:this.config.app.debug=!1,this.config.logging.logLevel="warn",this.config.logging.enableConsoleLogging=!1;break}}loadUserPreferences(){try{const e=JSON.parse(localStorage.getItem("configPreferences")||"{}");this.applyUserPreferences(e)}catch(e){errorHandler.handleError({message:"Failed to load user preferences",error:e,category:ErrorCategory.STORAGE,level:LogLevel.WARN})}}applyUserPreferences(e){for(const[t,o]of Object.entries(e))try{this.setConfigValue(t,o,!1)}catch(r){errorHandler.handleError({message:`Invalid user preference: ${t}`,error:r,category:ErrorCategory.VALIDATION,level:LogLevel.WARN})}}setupValidators(){this.validators.set("url",e=>{try{return new URL(e),!0}catch{return!1}}),this.validators.set("email",e=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)),this.validators.set("positive",e=>typeof e=="number"&&e>0)}get(e,t=void 0){const o=e.split(".");let r=this.config;for(const n of o)if(r&&typeof r=="object"&&n in r)r=r[n];else return t;return r}set(e,t,o=!0){this.setConfigValue(e,t,o)}setConfigValue(e,t,o){if(!this.validateConfigPath(e,t))throw new Error(`Invalid configuration value for ${e}: ${t}`);const r=e.split(".");let n=this.config;for(let c=0;c<r.length-1;c++){const l=r[c];(!(l in n)||typeof n[l]!="object")&&(n[l]={}),n=n[l]}const i=r[r.length-1],s=n[i];n[i]=t,this.notifyListeners(e,t,s),o&&this.persistUserPreference(e,t),errorHandler.log(`Configuration updated: ${e} = ${JSON.stringify(t)}`,LogLevel.DEBUG)}validateConfigPath(e,t){const o=this.getSchemaForPath(e);return o?this.validateValue(t,o):!0}getSchemaForPath(e){const t=e.split(".");let o=CONFIG_SCHEMA;for(const r of t)if(o&&typeof o=="object"&&r in o)o=o[r];else return null;return o}validateValue(e,t){return t.type&&(t.type==="array"&&!Array.isArray(e)||t.type!=="array"&&typeof e!==t.type)||t.enum&&!t.enum.includes(e)||typeof e=="number"&&(t.min!==void 0&&e<t.min||t.max!==void 0&&e>t.max)||typeof e=="string"&&(t.minLength&&e.length<t.minLength||t.maxLength&&e.length>t.maxLength)||Array.isArray(e)&&(t.minItems&&e.length<t.minItems||t.maxItems&&e.length>t.maxItems)?!1:t.validator&&this.validators.has(t.validator)?this.validators.get(t.validator)(e):!0}validateConfig(){const e=[];this.validateConfigSection(this.config,CONFIG_SCHEMA,"",e),e.length>0&&errorHandler.handleError({message:`Configuration validation errors: ${e.join(", ")}`,category:ErrorCategory.VALIDATION,level:LogLevel.WARN})}validateConfigSection(e,t,o,r){for(const[n,i]of Object.entries(t)){const s=o?`${o}.${n}`:n,c=e[n];if(i.required&&c==null){r.push(`Missing required config: ${s}`);continue}c!==void 0&&(i.type==="object"&&!i.default?this.validateConfigSection(c,i,s,r):this.validateValue(c,i)||r.push(`Invalid config value: ${s}`))}}persistUserPreference(e,t){try{const o=JSON.parse(localStorage.getItem("configPreferences")||"{}");o[e]=t,localStorage.setItem("configPreferences",JSON.stringify(o))}catch(o){errorHandler.handleError({message:"Failed to persist user preference",error:o,category:ErrorCategory.STORAGE,level:LogLevel.WARN})}}addListener(e,t){return this.listeners.has(e)||this.listeners.set(e,new Set),this.listeners.get(e).add(t),()=>{const o=this.listeners.get(e);o&&(o.delete(t),o.size===0&&this.listeners.delete(e))}}notifyListeners(e,t,o){const r=this.listeners.get(e);r&&r.forEach(n=>{try{n(t,o,e)}catch(i){errorHandler.handleError({message:"Configuration listener error",error:i,category:ErrorCategory.UI,level:LogLevel.WARN})}});for(const[n,i]of this.listeners)if(n.endsWith("*")){const s=n.slice(0,-1);e.startsWith(s)&&i.forEach(c=>{try{c(t,o,e)}catch(l){errorHandler.handleError({message:"Configuration wildcard listener error",error:l,category:ErrorCategory.UI,level:LogLevel.WARN})}})}}reset(e){if(e){const t=this.getSchemaForPath(e);if(t&&t.default!==void 0){const o=typeof t.default=="function"?t.default():t.default;this.set(e,o)}}else this.config=this.buildDefaultConfig(CONFIG_SCHEMA),this.applyEnvironmentOverrides(),localStorage.removeItem("configPreferences"),this.validateConfig();errorHandler.log(`Configuration reset: ${e||"all"}`,LogLevel.INFO)}getEnvironment(){return this.environment}isDevelopment(){return this.environment===Environment.DEVELOPMENT}isProduction(){return this.environment===Environment.PRODUCTION}export(){return{config:this.config,environment:this.environment,schema:CONFIG_SCHEMA,exportTime:new Date().toISOString()}}getSummary(){return{environment:this.environment,version:this.get("app.version"),debug:this.get("app.debug"),totalSettings:this.countConfigSettings(this.config),customPreferences:Object.keys(JSON.parse(localStorage.getItem("configPreferences")||"{}")).length}}countConfigSettings(e){let t=0;for(const o of Object.values(e))typeof o=="object"&&o!==null&&!Array.isArray(o)?t+=this.countConfigSettings(o):t++;return t}}const config=new ConfigManager,CONFIG$2=new Proxy({},{get(a,e){return config.get(e.toString())},set(a,e,t){return config.set(e.toString(),t),!0}});window.config=config;window.CONFIG=CONFIG$2;const CONFIG_BASE={EMAIL:{PUBLIC_KEY:"MHAEjvnc_xx8DIRCA",SERVICE_ID:"service_rblizfg",TEMPLATE_ID:"template_8st9fhk",PASSWORD_RESET_TEMPLATE_ID:"template_u15l8di",FROM_EMAIL:"noreply@seima.com.au",FROM_NAME:"Seima Team",MAX_ATTACHMENT_SIZE:15*1024*1024,RETRY_ATTEMPTS:3,RETRY_DELAY:2e3,BCC_EMAIL:"jsegredos@gmail.com"}};class Utils{static loadScript(e){return new Promise((t,o)=>{if(document.querySelector(`script[src="${e}"]`)){t();return}const r=document.createElement("script");r.src=e,r.onload=t,r.onerror=()=>o(new Error(`Failed to load script: ${e}`)),document.head.appendChild(r)})}static loadImage(e){return new Promise((t,o)=>{const r=new Image;r.onload=()=>t(r),r.onerror=()=>o(new Error(`Failed to load image: ${e}`)),r.src=e})}static loadImageAsDataURL(e,t){const o=new Image;o.crossOrigin="anonymous",o.onload=function(){const r=document.createElement("canvas"),n=r.getContext("2d");r.width=o.width,r.height=o.height,n.drawImage(o,0,0);try{const i=r.toDataURL("image/png");t(i,o.width,o.height)}catch{t(null,0,0)}},o.onerror=()=>t(null,0,0),o.src=e}static formatPrice(e){if(!e||e==="")return"";const t=parseFloat(e.toString().replace(/[^\d.-]/g,""));return isNaN(t)?"":`$${t.toFixed(2)}`}static formatPriceLocale(e,t=!0){if(!e||e==="")return"";const o=parseFloat(e.toString().replace(/[^\d.-]/g,""));if(isNaN(o))return"";const r=o.toLocaleString("en-AU",{minimumFractionDigits:2,maximumFractionDigits:2});return t?`$${r}`:r}static sanitizeInput(e,t=null){if(typeof e!="string")return"";let o=e.trim();return t&&o.length>t&&(o=o.substring(0,t)),o}static escapeHtml(e){return typeof e!="string"?"":e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}static debounce(e,t){let o;return function(...r){clearTimeout(o),o=setTimeout(()=>e.apply(this,r),t)}}static throttle(e,t){let o;return function(...r){o||(e.apply(this,r),o=!0,setTimeout(()=>o=!1,t))}}static generateId(){return Date.now().toString(36)+Math.random().toString(36).substr(2)}static deepClone(e){return JSON.parse(JSON.stringify(e))}static getStorageItem(e,t=null){try{const o=localStorage.getItem(e);return o?JSON.parse(o):t}catch(o){return console.warn(`Failed to parse localStorage item: ${e}`,o),t}}static setStorageItem(e,t){try{return localStorage.setItem(e,JSON.stringify(t)),!0}catch(o){return console.warn(`Failed to set localStorage item: ${e}`,o),!1}}static removeStorageItem(e){try{return localStorage.removeItem(e),!0}catch(t){return console.warn(`Failed to remove localStorage item: ${e}`,t),!1}}static isMobileDevice(){return/Android|iPhone|iPad|iPod|webOS|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}static isIOSDevice(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream}static isSafari(){return/^((?!chrome|android).)*safari/i.test(navigator.userAgent)}static formatDate(e,t=!1){const o=new Date(e);if(isNaN(o.getTime()))return"";const r=String(o.getDate()).padStart(2,"0"),n=String(o.getMonth()+1).padStart(2,"0"),i=o.getFullYear();if(!t)return`${r}/${n}/${i}`;const s=String(o.getHours()).padStart(2,"0"),c=String(o.getMinutes()).padStart(2,"0");return`${r}/${n}/${i} ${s}:${c}`}static generateFilename(e,t){const o=new Date,r=String(o.getDate()).padStart(2,"0"),n=String(o.getMonth()+1).padStart(2,"0"),i=String(o.getFullYear()).slice(-2),s=String(o.getHours()).padStart(2,"0"),c=String(o.getMinutes()).padStart(2,"0");return`${(e||"file").replace(/[^a-zA-Z0-9\s]/g,"")}-${r}${n}${i}.${s}${c}.${t}`}static sleep(e){return new Promise(t=>setTimeout(t,e))}}class BrowserCompatibilityManager{constructor(){this.features={},this.deviceInfo={},this.networkStatus={},this.memoryInfo={},this.compatibilityScore=0,this.init()}init(){this.detectDevice(),this.detectBrowser(),this.checkFeatureSupport(),this.checkMemoryLimitations(),this.setupNetworkMonitoring(),this.calculateCompatibilityScore(),this.setupPerformanceMonitoring()}detectDevice(){const a=navigator.userAgent;this.deviceInfo={isMobile:/Mobi|Android/i.test(a),isTablet:/iPad|Android(?=.*Tablet)|(?=.*Mobile)(?=.*Safari)/i.test(a),isDesktop:!/Mobi|Android|iPad/i.test(a),isIOS:/iPad|iPhone|iPod/.test(a),isAndroid:/Android/i.test(a),isWindows:/Windows/i.test(a),isMacOS:/Macintosh|Mac OS X/i.test(a),isIPhone:/iPhone/i.test(a),isIPad:/iPad/i.test(a),isWebView:this.detectWebView(a),isStandalone:window.navigator.standalone===!0,screenWidth:window.screen.width,screenHeight:window.screen.height,devicePixelRatio:window.devicePixelRatio||1,orientation:this.getOrientation(),userAgent:a}}detectBrowser(){const a=navigator.userAgent;this.deviceInfo.browser={name:this.getBrowserName(a),version:this.getBrowserVersion(a),engine:this.getBrowserEngine(a),isChrome:/Chrome/i.test(a)&&!/Edge|Edg/i.test(a),isFirefox:/Firefox/i.test(a),isSafari:/Safari/i.test(a)&&!/Chrome|Chromium/i.test(a),isEdge:/Edge|Edg/i.test(a),isOpera:/Opera|OPR/i.test(a),chromeVersion:this.getChromeVersion(a),safariVersion:this.getSafariVersion(a),firefoxVersion:this.getFirefoxVersion(a)}}checkFeatureSupport(){this.features={localStorage:this.checkLocalStorage(),sessionStorage:this.checkSessionStorage(),indexedDB:"indexedDB"in window,fileAPI:"File"in window,fileReader:"FileReader"in window,fileSystemAccess:"showSaveFilePicker"in window,downloadAttribute:this.checkDownloadAttribute(),getUserMedia:"mediaDevices"in navigator&&"getUserMedia"in navigator.mediaDevices,webRTC:"RTCPeerConnection"in window,canvas:"HTMLCanvasElement"in window,webGL:this.checkWebGL(),fetch:"fetch"in window,xhr:"XMLHttpRequest"in window,serviceWorker:"serviceWorker"in navigator,modules:this.checkESModules(),asyncAwait:this.checkAsyncAwait(),webAssembly:"WebAssembly"in window,createObjectURL:"URL"in window&&"createObjectURL"in URL,revokeObjectURL:"URL"in window&&"revokeObjectURL"in URL,blob:"Blob"in window,touchEvents:"ontouchstart"in window,deviceMotion:"DeviceMotionEvent"in window,deviceOrientation:"DeviceOrientationEvent"in window,clipboard:"clipboard"in navigator,onlineStatus:"onLine"in navigator,connection:"connection"in navigator||"mozConnection"in navigator||"webkitConnection"in navigator}}checkMemoryLimitations(){var a,e,t;this.memoryInfo={jsHeapSizeLimit:((a=performance.memory)==null?void 0:a.jsHeapSizeLimit)||null,totalJSHeapSize:((e=performance.memory)==null?void 0:e.totalJSHeapSize)||null,usedJSHeapSize:((t=performance.memory)==null?void 0:t.usedJSHeapSize)||null,estimatedMaxFileSize:this.estimateMaxFileSize(),memoryPressure:this.estimateMemoryPressure(),maxBlobSize:this.estimateMaxBlobSize(),maxDataURISize:this.estimateMaxDataURISize()}}setupNetworkMonitoring(){this.networkStatus={isOnline:navigator.onLine,connectionType:this.getConnectionType(),effectiveType:this.getEffectiveConnectionType(),downlink:this.getDownlink(),rtt:this.getRTT()},window.addEventListener("online",()=>{this.networkStatus.isOnline=!0,this.onNetworkChange("online")}),window.addEventListener("offline",()=>{this.networkStatus.isOnline=!1,this.onNetworkChange("offline")}),navigator.connection&&navigator.connection.addEventListener("change",()=>{this.updateNetworkStatus(),this.onNetworkChange("connection")})}calculateCompatibilityScore(){let a=100;const e=[];this.features.localStorage||(a-=20,e.push("Local storage not supported")),this.features.fileReader||(a-=15,e.push("File reading not supported")),this.features.blob||(a-=15,e.push("Blob creation not supported")),this.features.createObjectURL||(a-=15,e.push("Object URL creation not supported")),this.features.fetch||(a-=10,e.push("Modern fetch API not available")),this.features.modules||(a-=10,e.push("ES6 modules not supported")),this.features.getUserMedia||(a-=8,e.push("Camera access limited")),this.deviceInfo.isWebView&&(a-=5,e.push("WebView compatibility concerns")),this.memoryInfo.memoryPressure==="high"&&(a-=8,e.push("High memory pressure detected")),this.networkStatus.isOnline||(a-=5,e.push("Currently offline")),this.compatibilityScore=Math.max(0,a),this.compatibilityIssues=e}setupPerformanceMonitoring(){if(performance.memory&&setInterval(()=>{this.updateMemoryInfo()},3e4),"PerformanceObserver"in window)try{new PerformanceObserver(e=>{for(const t of e.getEntries())t.entryType==="measure"&&this.onPerformanceMeasure(t)}).observe({entryTypes:["measure"]})}catch(a){console.warn("Performance observer not fully supported:",a)}}detectWebView(a){return/wv|WebView|Version\/[\d.]+.*Mobile.*Safari/i.test(a)||/Android/i.test(a)&&/Version\/\d\.\d/i.test(a)&&!/ Chrome\//.test(a)||/FB_IAB|FBAN|FBAV/i.test(a)}getOrientation(){return window.screen&&window.screen.orientation?window.screen.orientation.type:window.innerHeight>window.innerWidth?"portrait":"landscape"}getBrowserName(a){return/SamsungBrowser/i.test(a)?"Samsung Internet":/Chrome/i.test(a)&&!/Edge|Edg/i.test(a)?"Chrome":/Firefox/i.test(a)?"Firefox":/Safari/i.test(a)&&!/Chrome|Chromium/i.test(a)?"Safari":/Edge|Edg/i.test(a)?"Edge":/Opera|OPR/i.test(a)?"Opera":"Unknown"}getBrowserVersion(a){const e=a.match(/(Chrome|Firefox|Safari|Edge|Edg|SamsungBrowser|Opera|OPR)\/([0-9.]+)/i);return e?e[2]:"Unknown"}getBrowserEngine(a){return/WebKit/i.test(a)?"WebKit":/Gecko/i.test(a)?"Gecko":/Trident/i.test(a)?"Trident":/EdgeHTML/i.test(a)?"EdgeHTML":"Unknown"}getChromeVersion(a){const e=a.match(/Chrome\/([0-9.]+)/i);return e?parseInt(e[1]):null}getSafariVersion(a){const e=a.match(/Version\/([0-9.]+).*Safari/i);return e?parseFloat(e[1]):null}getFirefoxVersion(a){const e=a.match(/Firefox\/([0-9.]+)/i);return e?parseInt(e[1]):null}checkLocalStorage(){try{const a="compatibilityTest";return localStorage.setItem(a,a),localStorage.removeItem(a),!0}catch{return!1}}checkSessionStorage(){try{const a="compatibilityTest";return sessionStorage.setItem(a,a),sessionStorage.removeItem(a),!0}catch{return!1}}checkDownloadAttribute(){return"download"in document.createElement("a")}checkWebGL(){try{const a=document.createElement("canvas");return!!(a.getContext("webgl")||a.getContext("experimental-webgl"))}catch{return!1}}checkESModules(){try{return typeof Symbol<"u"&&typeof Promise<"u"&&typeof Map<"u"}catch{return!1}}checkAsyncAwait(){try{return eval("(async function() {})").constructor===(async function(){}).constructor}catch(a){return!1}}estimateMaxFileSize(){return this.deviceInfo.isDesktop?100*1024*1024:this.deviceInfo.isTablet?50*1024*1024:this.deviceInfo.isMobile?20*1024*1024:10*1024*1024}estimateMemoryPressure(){if(!performance.memory)return"unknown";const a=performance.memory.usedJSHeapSize,e=performance.memory.jsHeapSizeLimit,t=a/e;return t>.8?"high":t>.6?"medium":"low"}estimateMaxBlobSize(){var a,e,t;return(a=this.deviceInfo.browser)!=null&&a.isChrome?500*1024*1024:(e=this.deviceInfo.browser)!=null&&e.isFirefox?200*1024*1024:(t=this.deviceInfo.browser)!=null&&t.isSafari?100*1024*1024:50*1024*1024}estimateMaxDataURISize(){var a,e,t;return(a=this.deviceInfo.browser)!=null&&a.isChrome?2*1024*1024:(e=this.deviceInfo.browser)!=null&&e.isFirefox?1*1024*1024:((t=this.deviceInfo.browser)!=null&&t.isSafari,512*1024)}getConnectionType(){return navigator.connection?navigator.connection.type||navigator.connection.effectiveType:"unknown"}getEffectiveConnectionType(){var a;return((a=navigator.connection)==null?void 0:a.effectiveType)||"unknown"}getDownlink(){var a;return((a=navigator.connection)==null?void 0:a.downlink)||null}getRTT(){var a;return((a=navigator.connection)==null?void 0:a.rtt)||null}updateNetworkStatus(){this.networkStatus={isOnline:navigator.onLine,connectionType:this.getConnectionType(),effectiveType:this.getEffectiveConnectionType(),downlink:this.getDownlink(),rtt:this.getRTT()}}updateMemoryInfo(){performance.memory&&(this.memoryInfo.totalJSHeapSize=performance.memory.totalJSHeapSize,this.memoryInfo.usedJSHeapSize=performance.memory.usedJSHeapSize,this.memoryInfo.memoryPressure=this.estimateMemoryPressure())}onNetworkChange(a){console.log(`Network status changed: ${a}`,this.networkStatus)}onPerformanceMeasure(a){a.duration>1e3&&console.warn(`Performance concern: ${a.name} took ${a.duration}ms`)}getCompatibilityReport(){return{score:this.compatibilityScore,issues:this.compatibilityIssues,device:this.deviceInfo,features:this.features,memory:this.memoryInfo,network:this.networkStatus,recommendations:this.getRecommendations()}}getRecommendations(){const a=[];return this.compatibilityScore<70&&a.push({type:"critical",message:"Browser compatibility issues detected. Consider updating your browser.",action:"update_browser"}),this.memoryInfo.memoryPressure==="high"&&a.push({type:"warning",message:"High memory usage detected. Close other browser tabs for better performance.",action:"reduce_memory"}),!this.features.fileSystemAccess&&this.deviceInfo.isDesktop&&a.push({type:"info",message:"Modern file saving features available in newer browsers.",action:"update_browser"}),this.networkStatus.isOnline||a.push({type:"error",message:"Internet connection required for full functionality.",action:"check_connection"}),a}isFeatureSupported(a){return this.features[a]||!1}isCompatible(){return this.compatibilityScore>=70}getOptimalDownloadMethod(){return this.features.fileSystemAccess&&this.deviceInfo.isDesktop?"fileSystemAPI":this.features.downloadAttribute?"downloadAttribute":this.features.createObjectURL?"objectURL":"manual"}shouldShowCompatibilityWarning(){return this.compatibilityScore<80||this.compatibilityIssues.length>0}logCompatibilityInfo(){console.group("Browser Compatibility Report"),console.log("Score:",this.compatibilityScore),console.log("Device:",this.deviceInfo),console.log("Features:",this.features),console.log("Issues:",this.compatibilityIssues),console.log("Recommendations:",this.getRecommendations()),console.groupEnd()}}const browserCompatibility=new BrowserCompatibilityManager;class EmailService{constructor(e=CONFIG_BASE.EMAIL){this.config=e,this.isInitialized=!1,this.emailJsLoaded=!1}async init(){if(this.isInitialized)return!0;try{return await this._loadEmailJS(),window.emailjs&&this.config.PUBLIC_KEY&&(window.emailjs.init(this.config.PUBLIC_KEY),this.emailJsLoaded=!0),this.isInitialized=!0,console.log("✅ Email service initialized"),!0}catch(e){return console.error("❌ Failed to initialize email service:",e),!1}}async _loadEmailJS(){if(!window.emailjs)return Utils.loadScript("https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js")}async send(e){if(this.isInitialized||await this.init(),!this.emailJsLoaded)throw new Error("EmailJS not loaded");const t={to_email:e.to_email,to_name:e.to_name||e.customer_name||"Customer",from_name:this.config.FROM_NAME||"Seima Team",subject:e.subject||"Your Seima Product Selection",message:e.message||"",customer_name:e.customer_name||"",customer_project:e.customer_project||"",customer_address:e.customer_address||"",customer_telephone:e.customer_telephone||"",total_products:e.total_products||"",total_rooms:e.total_rooms||"",file_info:e.file_info||"",...this._sanitizeAttachment(e)};this.config.BCC_EMAIL&&(t.bcc_email=this.config.BCC_EMAIL);const o=this.config.RETRY_ATTEMPTS||3,r=this.config.RETRY_DELAY||2e3;for(let n=1;n<=o;n++)try{const i=await window.emailjs.send(this.config.SERVICE_ID,this.config.TEMPLATE_ID,t);return console.log(`✅ Email sent successfully (attempt ${n})`),{success:!0,result:i}}catch(i){if(console.warn(`❌ Email attempt ${n} failed:`,i),n<o)await Utils.sleep(r);else throw i}}_sanitizeAttachment(e){if(!e.attachment)return{};let t=e.attachment;return t.startsWith("data:")&&(t=t.split(",")[1]||t),{attachment:t,attachment_name:e.attachment_name||"attachment.pdf"}}async sendWithAttachments(e,t,o,r){const n=await this._blobToBase64(t),i=(e.project||"Selection").replace(/[^a-zA-Z0-9\s]/g,""),s=Utils.generateFilename(i,"pdf"),c=this._buildEmailMessage(e,r),l={to_email:e.email,to_name:e.name,customer_name:e.name,customer_project:e.project,customer_address:e.address,customer_telephone:e.telephone||e.phone,total_products:r.totalProducts.toString(),total_rooms:r.roomCount.toString(),message:c,attachment:n,attachment_name:s,file_info:`PDF: ${s} (${(t.size/1024).toFixed(1)} KB)`};return this.send(l)}_blobToBase64(e){return new Promise((t,o)=>{const r=new FileReader;r.onloadend=()=>{const n=r.result.split(",")[1];t(n)},r.onerror=o,r.readAsDataURL(e)})}_buildEmailMessage(e,t){const o=["Thank you for your Seima product selection.","","Your selection summary:",`• Total products: ${t.totalProducts}`,`• Rooms: ${t.roomCount}`];return t.totalValue>0&&!e.excludePrice&&o.push(`• Estimated value: ${Utils.formatPriceLocale(t.totalValue)}`),o.push("","Please find your product selection attached as a PDF document.","","If you have any questions, please contact your Seima representative.","","Kind regards,","The Seima Team","www.seima.com.au"),o.join(`
`)}isAvailable(){return this.emailJsLoaded&&!!this.config.SERVICE_ID&&!!this.config.TEMPLATE_ID}static validateEmail(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}}new EmailService;function isTechnicalDiagram$1(a,e){try{const t=Math.min(100,a.width),o=Math.min(100,a.height),n=e.getImageData(0,0,t,o).data,i=new Set;for(let s=0;s<n.length;s+=4){const c=`${n[s]},${n[s+1]},${n[s+2]}`;if(i.add(c),i.size>1e3)return!1}return i.size<1e3}catch(t){return console.warn("Could not analyze image for diagram detection:",t),!1}}function detectTransparency$1(a,e){try{const o=e.getImageData(0,0,a.width,a.height).data;for(let r=3;r<o.length;r+=4)if(o[r]<255)return!0;return!1}catch(t){return console.warn("Could not detect transparency:",t),!1}}const preloadedImageCache=new Map;async function preloadAllProductImages(a,e={}){const{batchSize:t=10,maxWidth:o=400,quality:r=.8}=e;preloadedImageCache.clear();const n=new Set;a.forEach(u=>{u.Image_URL&&u.Image_URL.length>10&&n.add(u.Image_URL),u.Diagram_URL&&u.Diagram_URL.length>10&&n.add(u.Diagram_URL)});const i=Array.from(n);if(i.length===0)return console.log("📷 No images to preload"),0;console.log(`📷 Preloading ${i.length} images in parallel...`);const s=Date.now();let c=0,l=0;for(let u=0;u<i.length;u+=t){const p=i.slice(u,u+t);(await Promise.allSettled(p.map(g=>preloadSingleImage(g,o,r)))).forEach((g,w)=>{const y=p[w];g.status==="fulfilled"&&g.value?(preloadedImageCache.set(y,g.value),c++):l++});const m=document.getElementById("preload-progress");if(m){const g=Math.min(100,Math.round((u+p.length)/i.length*100));m.textContent=`Loading images: ${g}%`}}const d=((Date.now()-s)/1e3).toFixed(1);return console.log(`✅ Preloaded ${c}/${i.length} images in ${d}s (${l} failed)`),c}async function preloadSingleImage(a,e=400,t=.8){if(preloadedImageCache.has(a))return preloadedImageCache.get(a);if(!a||a.length<20||a.match(/\/images\/\d+$/)||a.endsWith("/0"))return console.warn("Skipping invalid image URL:",a),null;const o=["https://wsrv.nl/?url=","https://images.weserv.nl/?url=","https://api.codetabs.com/v1/proxy?quest="];for(let r=0;r<o.length;r++){const n=await tryLoadWithProxy(a,o[r],e,t);if(n)return n}return console.warn("All proxies failed for image:",a.substring(0,60)),null}function tryLoadWithProxy(a,e,t,o){return new Promise(r=>{const n=new Image;n.crossOrigin="anonymous";const i=setTimeout(()=>{n.src="",r(null)},3e3);n.onload=function(){clearTimeout(i);try{const c=document.createElement("canvas"),l=c.getContext("2d");let d=n.width,u=n.height;d>t&&(u=u*t/d,d=t),c.width=d,c.height=u,l.imageSmoothingEnabled=!0,l.imageSmoothingQuality="high",l.drawImage(n,0,0,d,u);const p=detectTransparency$1(c,l),h=isTechnicalDiagram$1(c,l),m=p||h?"PNG":"JPEG",g=h?.9:o,w=c.toDataURL(`image/${m.toLowerCase()}`,g);r({dataUrl:w,width:d,height:u,format:m})}catch{console.warn("Failed to optimize image:",a.substring(0,50)),r(null)}},n.onerror=()=>{clearTimeout(i),r(null)};const s=e?e+encodeURIComponent(a):a;n.src=s})}function getCachedImage(a){return preloadedImageCache.get(a)}function getImageCacheSize(){return preloadedImageCache.size}class StorageManager{static getCustomRooms(){return Utils.getStorageItem(config.get("storage.keys.customRooms"),[])}static setCustomRooms(e){return Utils.setStorageItem(config.get("storage.keys.customRooms"),e)}static addCustomRoom(e){const t=this.getCustomRooms(),o=Utils.sanitizeInput(e,50);return!o||[...config.get("rooms.predefined",[]).map(i=>i.name),...t.map(i=>i.name)].includes(o)?!1:(t.push({name:o}),this.setCustomRooms(t))}static removeCustomRoom(e){const t=this.getCustomRooms();return e>=0&&e<t.length?(t.splice(e,1),this.setCustomRooms(t)):!1}static getSelectedProducts(){return Utils.getStorageItem(config.get("storage.keys.selectedProducts"),[])}static setSelectedProducts(e){return Utils.setStorageItem(config.get("storage.keys.selectedProducts"),e)}static addProductToSelection(e,t,o,r){try{const n=this.getSelectedProducts(),i=config.get("ui.annotationMaxLength",140),s={id:Utils.generateId(),product:Utils.deepClone(e),notes:Utils.sanitizeInput(t,i),room:Utils.sanitizeInput(o,50),quantity:Math.max(1,parseInt(r)||1),timestamp:Date.now()};n.push(s);const c=this.setSelectedProducts(n);return c?errorHandler.log(`Product added to selection: ${e.OrderCode}`,LogLevel.DEBUG):errorHandler.handleError({message:"Failed to save product to selection",category:ErrorCategory.STORAGE,level:LogLevel.WARN}),c}catch(n){return errorHandler.handleError({message:"Error adding product to selection",error:n,category:ErrorCategory.STORAGE,level:LogLevel.ERROR}),!1}}static updateProductQuantity(e,t){const o=this.getSelectedProducts(),r=o.findIndex(n=>n.id===e);return r!==-1?(o[r].quantity=Math.max(1,parseInt(t)||1),this.setSelectedProducts(o)):!1}static updateProductRoom(e,t){const o=this.getSelectedProducts(),r=o.findIndex(n=>n.id===e);return r!==-1?(o[r].room=Utils.sanitizeInput(t,50),this.setSelectedProducts(o)):!1}static updateProductNotes(e,t){const o=this.getSelectedProducts(),r=o.findIndex(n=>n.id===e);return r!==-1?(o[r].notes=Utils.sanitizeInput(t,config.get("ui.annotationMaxLength",140)),this.setSelectedProducts(o)):!1}static updateProductPrice(e,t){const o=this.getSelectedProducts(),r=o.findIndex(n=>n.id===e);return r!==-1?(o[r].product.UserEditedPrice=t,this.setSelectedProducts(o)):!1}static removeProductFromSelection(e){const o=this.getSelectedProducts().filter(r=>r.id!==e);return this.setSelectedProducts(o)}static clearAllSelections(){return this.setSelectedProducts([])&&this.setCustomRooms([])}static getSelectionCount(){return this.getSelectedProducts().length}static getUserSettings(){return Utils.getStorageItem(config.get("storage.keys.userPreferences"),{})}static saveUserSettings(e){return Utils.setStorageItem(config.get("storage.keys.userPreferences"),e)}}class DataLayer{constructor(){this.products=[],this.isLoaded=!1,this.searchIndex=new Map}async init(){try{return await this.loadProductCatalog(),this.buildSearchIndex(),console.log("✅ Data Layer initialized"),!0}catch(e){return console.error("❌ Failed to initialize Data Layer:",e),!1}}async loadProductCatalog(){try{console.log("📦 Loading product catalog...");const e=localStorage.getItem("productCatalogCsv");let t=[];e&&(t=this.parseCSV(e),this.products=t,this.isLoaded=!0,console.log(`⚡ Loaded ${t.length} products from cache`));const o=config.get("api.catalogUrl"),r=`${o+(o.includes("?")?"&":"?")}t=${Date.now()}`,n=new AbortController,i=setTimeout(()=>n.abort(),15e3);return fetch(r,{signal:n.signal,mode:"cors",cache:"no-cache"}).then(s=>(clearTimeout(i),s.ok?s.text():Promise.reject(`Failed to fetch catalog: ${s.status}`))).then(s=>{if(!e||s!==e){localStorage.setItem("productCatalogCsv",s);const c=this.parseCSV(s);JSON.stringify(c)!==JSON.stringify(t)&&(this.products=c,this.isLoaded=!0,console.log("🔄 New catalog loaded, reloading app..."),window.location.reload())}}).catch(s=>{clearTimeout(i),s.name==="AbortError"?console.warn("🕐 Background catalog update timed out (using cached data)"):console.warn("⚠️ Background catalog update failed (using cached data):",s.message)}),t}catch(e){throw console.error("❌ Failed to load product catalog:",e),e}}parseCSV(e){const t=e.split(`
`),o=this.parseCSVLine(t[0]),r=[];for(let n=1;n<t.length;n++){const i=t[n].trim();if(i)try{const s=this.parseCSVLine(i);if(s.length>=o.length){const c={};o.forEach((u,p)=>{c[u]=s[p]||""}),c.Group=c.Group||"",c["Product Name"]=c["Product Name"]||c.Description||"",c.Description=c.Description||c["Product Name"]||"",c["Long Description"]=c["Long Description"]||c.LongDescription||"",c.OrderCode=c["Order Code"]||c.OrderCode||"",c["RRP EX GST"]=c["RRP EX"]||c["RRP EX GST"]||c.RRP_EXGST||"",c.RRP_EX=c["RRP EX"]||c["RRP EX GST"]||c.RRP_EXGST||c.RRP_EX||"",c["RRP INC GST"]=c["RRP INC GST"]||c.RRP_INCGST||"",c.RRP_INCGST=c["RRP INC GST"]||c.RRP_INCGST||c.RRP_INCGST||"",c["Release Note"]=c["Release Note"]||"",c.Website_URL=c.Website_URL||"";const l=c.Image_URL||"";c.Image_URL=l&&l.length>10&&(l.startsWith("http://")||l.startsWith("https://"))?l:"";const d=c.Diagram_URL||"";c.Diagram_URL=d&&d.length>10&&(d.startsWith("http://")||d.startsWith("https://"))?d:"",c.Datasheet_URL=c.Datasheet_URL||"",c.BARCODE=c.BARCODE||"",c["X Dimension (mm)"]=c["X Dimension (mm)"]||"",c["Y Dimension (mm)"]=c["Y Dimension (mm)"]||"",c["Z Dimension (mm)"]=c["Z Dimension (mm)"]||"",c.WEIGHT=c.WEIGHT||"",c["WELS NO"]=c["WELS NO"]||"",c["WELS STAR"]=c["WELS STAR"]||"",c["WELS CONSUMPTION"]=c["WELS CONSUMPTION"]||"",c["WELS Expiry"]=c["WELS Expiry"]||"",c.WATERMARK=c.WATERMARK||"",c.OrderCode&&c.OrderCode.trim()&&r.push(c)}}catch(s){console.warn(`Skipping invalid CSV line ${n+1}:`,s)}}return r}parseCSVLine(e){const t=[];let o="",r=!1;for(let n=0;n<e.length;n++){const i=e[n];i==='"'?r&&e[n+1]==='"'?(o+='"',n++):r=!r:i===","&&!r?(t.push(o),o=""):o+=i}return t.push(o),t}buildSearchIndex(){console.log("🔍 Building search index..."),this.searchIndex.clear(),this.products.forEach((t,o)=>{t.OrderCode&&(this.searchIndex.set(t.OrderCode.toLowerCase(),o),this.searchIndex.set(t.OrderCode.toLowerCase().replace(/[-\s]/g,""),o)),t.BARCODE&&t.BARCODE.trim()&&(this.searchIndex.set(t.BARCODE.toLowerCase(),o),this.searchIndex.set(t.BARCODE.toLowerCase().replace(/[-\s]/g,""),o)),t.Description&&t.Description.toLowerCase().split(/\s+/).forEach(n=>{if(n.length>2){this.searchIndex.has(n)||this.searchIndex.set(n,[]);const i=this.searchIndex.get(n);Array.isArray(i)&&i.push(o)}})});const e=this.products.filter(t=>t.BARCODE&&t.BARCODE.trim()).length;console.log(`✅ Search index built with ${this.searchIndex.size} entries (${e} barcodes indexed)`)}findProductByCode(e){if(!e)return null;const t=e.toLowerCase().trim(),o=this.searchIndex.get(t)||this.searchIndex.get(t.replace(/[-\s]/g,"")),r=typeof o=="number"?this.products[o]:null;return e.length>8&&console.log(`🔍 Barcode search for "${e}": ${r?"FOUND":"NOT FOUND"} ${r?`(${r.OrderCode} - ${r.Description})`:""}`),r}searchProducts(e,t=50){if(!e||e.length<2)return[];const o=e.toLowerCase().trim().split(/\s+/).filter(n=>n.length>=2);if(o.length===0)return[];const r=[];for(const n of this.products){const i=o.map(c=>this.calculateSearchScore(n,c));if(i.some(c=>c===0))continue;const s=i.reduce((c,l)=>c+l,0)/i.length;r.push({product:n,score:s})}return r.sort((n,i)=>i.score-n.score),r.slice(0,t).map(n=>n.product)}calculateSearchScore(e,t){let o=0;const r=(e.OrderCode||"").toString().toLowerCase().trim(),n=(e.BARCODE||e.Barcode||"").toString().toLowerCase().trim(),i=(e["Product Name"]||e.ProductName||"").toString().toLowerCase().trim(),s=(e.Description||"").toString().toLowerCase().trim(),c=(e["Long Description"]||e.LongDescription||"").toString().toLowerCase().trim();return r===t||n===t?100:((r.includes(t)||n.includes(t))&&(o=Math.max(o,90)),i===t?o=Math.max(o,80):i.startsWith(t)?o=Math.max(o,70):i.includes(t)&&(o=Math.max(o,60)),s.includes(t)&&(o=Math.max(o,40)),c.includes(t)&&(o=Math.max(o,20)),o)}getAllProducts(){return[...this.products]}getProductsByCategory(e){return this.products.filter(t=>t.Category&&t.Category.toLowerCase().includes(e.toLowerCase()))}getSelectedProducts(){const e=JSON.parse(localStorage.getItem("selection")||"[]"),t=JSON.parse(localStorage.getItem(config.get("storage.keys.selectedProducts"))||"[]");return t.length>0?t:e.map(o=>({product:o,room:o.Room||"",notes:o.Notes||"",quantity:o.Quantity||1,id:this.generateSelectionId()}))}addProductToSelection(e,t="",o="",r=1){const n=this.getSelectedProducts(),i={id:this.generateSelectionId(),product:{...e},room:t,notes:o,quantity:Math.max(1,parseInt(r)||1)};return n.push(i),this.saveSelectedProducts(n),console.log(`✅ Added ${e.OrderCode} to selection`),i}removeProductFromSelection(e){const o=this.getSelectedProducts().filter(r=>r.id!==e);return this.saveSelectedProducts(o),console.log("✅ Removed product from selection"),o}updateSelectionItem(e,t){const o=this.getSelectedProducts(),r=o.findIndex(n=>n.id===e);return r!==-1?(o[r]={...o[r],...t},this.saveSelectedProducts(o),console.log("✅ Updated selection item"),o[r]):null}clearSelection(){localStorage.removeItem("selection"),localStorage.removeItem(config.get("storage.keys.selectedProducts")),console.log("✅ Selection cleared")}saveSelectedProducts(e){localStorage.setItem(config.get("storage.keys.selectedProducts"),JSON.stringify(e));const t=e.map(o=>({...o.product,Room:o.room,Notes:o.notes,Quantity:o.quantity}));localStorage.setItem("selection",JSON.stringify(t))}generateSelectionId(){return`sel_${Date.now()}_${Math.random().toString(36).substr(2,9)}`}getSelectionSummary(){const e=this.getSelectedProducts(),t=e.length,o=new Set(e.map(i=>i.room).filter(Boolean)),r=o.size||1;let n=0;return e.forEach(i=>{var l;const s=parseFloat((((l=i.product)==null?void 0:l.RRP_EX)||"0").toString().replace(/[^0-9.]/g,""))||0,c=i.quantity||1;n+=s*c}),{totalProducts:t,totalRooms:r,totalValue:n,hasProducts:t>0,rooms:Array.from(o)}}getProductsByRoom(){const e=this.getSelectedProducts(),t={};return e.forEach(o=>{const r=o.room||"Unassigned";t[r]||(t[r]=[]),t[r].push(o)}),t}validateProduct(e){return["OrderCode","Description"].every(o=>e[o]&&e[o].trim())}validateSelection(){const e=this.getSelectedProducts(),t=[];return e.forEach((o,r)=>{this.validateProduct(o.product)||t.push(`Product ${r+1}: Missing required fields`),(!o.quantity||o.quantity<1)&&t.push(`Product ${r+1}: Invalid quantity`)}),{isValid:t.length===0,issues:t}}exportSelectionData(){const e=this.getSelectedProducts(),t=this.getSelectionSummary();return{selection:e,summary:t,exportDate:new Date().toISOString(),version:"1.0"}}importSelectionData(e){try{if(e.selection&&Array.isArray(e.selection))return this.saveSelectedProducts(e.selection),console.log(`✅ Imported ${e.selection.length} products`),!0;throw new Error("Invalid selection data format")}catch(t){return console.error("❌ Failed to import selection data:",t),!1}}}const dataLayer=new DataLayer,CONFIG$1={ROOMS:{PREDEFINED:[{name:"Bath 1",icon:"🛁"},{name:"Bath 2",icon:"🛁"},{name:"Bath 3",icon:"🛁"},{name:"Ensuite",icon:"🚿"},{name:"Powder",icon:"🚽"},{name:"Kitchen",icon:"🍽️"},{name:"Butlers",icon:"👨‍🍳"},{name:"Laundry",icon:"🧺"},{name:"Alfresco",icon:"🍽️"},{name:"Standard",icon:"📦"},{name:"Upgrade",icon:"⭐"}]},SEARCH:{MAX_RESULTS:8,SEARCH_FIELDS:["Description","ProductName","OrderCode","BARCODE"]},CSV:{URL:"https://docs.google.com/spreadsheets/d/e/2PACX-1vRnMqBCqB9L52W6YNgreLHJKvxOanS76CJN8ZUorBl8Iccha6MzUpDkGa0N8GSYFPP2zyql1Tq6aBn8/pub?gid=0&single=true&output=csv"},STORAGE_KEYS:{CUSTOM_ROOMS:"customRooms",SELECTED_PRODUCTS:"selectedProducts",PRODUCT_CATALOG:"productCatalog",USER_PREFERENCES:"userPreferences",ROOM_ASSIGNMENTS:"roomAssignments"},UI:{ANNOTATION_MAX_LENGTH:140,QUANTITY_OPTIONS:[1,2,3,4,5,6,7,8,9,10]},IMPORT:{MAX_FILE_SIZE:10*1024*1024,ACCEPTED_TYPES:[".csv",".xlsx",".xls",".json"],PRODUCT_CODE:{VALIDATION_REGEX:"^\\d{6}$",ALLOW_ANY_NON_EMPTY:!1,SKIP_VALIDATION:!1},COLUMN_PATTERNS:{productCode:["code","ordercode","productcode","sku","order code","product code","item code","article"],productName:["product name","description","name","item name","title"],quantity:["quantity","qty","min order quantity","orderquantity","count","amount"],priceIncGst:["price ea inc gst","price inc gst","priceincgst","rrp inc gst","inc gst","price incl gst"],priceExGst:["price per unit","price ex gst","rrp ex gst","ex gst","price excl gst","unit price"],room:["room","location","area","zone"],notes:["notes","note","comments","comment","remarks","annotation"],productsJson:["products json","productsjson","products_json"],customerName:["customer name","customername","client name","buyer name"],customerEmail:["customer email","customeremail","client email","email"],customerPhone:["customer phone","customerphone","phone","telephone","mobile"],customerAddress:["customer address","customeraddress","address","delivery address"],customerProject:["customer project","customerproject","project","project name"],customerType:["customer type","customertype","client type"],builderName:["builder name","buildername","builder"],merchantName:["merchant name","merchantname","merchant"],staffName:["staff name","staffname","salesperson","rep name"],staffEmail:["staff email","staffemail","rep email"],projectNotes:["project notes","projectnotes","about notes"],roomsList:["rooms list","roomslist","rooms"],estimateValue:["estimate value","estimatevalue","total value","estimate"]}},CSV_CONFIG:{MAX_FILE_SIZE:10*1024*1024,ACCEPTED_TYPES:[".csv",".xlsx",".xls"],REQUIRED_COLUMNS:["OrderCode"],OPTIONAL_COLUMNS:["Description","RRP_INCGST","Image_URL","Room","Quantity","Notes"]},CATALOG_URL:"https://docs.google.com/spreadsheets/d/e/2PACX-1vRnMqBCqB9L52W6YNgreLHJKvxOanS76CJN8ZUorBl8Iccha6MzUpDkGa0N8GSYFPP2zyql1Tq6aBn8/pub?gid=0&single=true&output=csv",VERSION:"2.2.0",PERFORMANCE:{MAX_PRODUCTS_PER_SESSION:1e3,IMAGE_CACHE_SIZE:100},EMAIL:{PUBLIC_KEY:"MHAEjvnc_xx8DIRCA",SERVICE_ID:"service_rblizfg",TEMPLATE_ID:"template_8st9fhk",PASSWORD_RESET_TEMPLATE_ID:"template_u15l8di",MAX_ATTACHMENT_SIZE:15*1024*1024,RETRY_ATTEMPTS:3,RETRY_DELAY:2e3,BCC_EMAIL:"jsegredos@gmail.com"},PRESENTATION_RECORDING:{ENABLED:!0,GOOGLE_SHEETS_URL:"https://script.google.com/macros/s/AKfycbypt3Y7RLAko49s6Nc0mecYYd4FyiQqBcHFJr-1megO3-m1Vo1bCbUOkqAax3g9w508RA/exec",RETRY_ATTEMPTS:3,RETRY_DELAY:1e3},COMPATIBILITY:{MIN_CHROME_VERSION:80,MIN_FIREFOX_VERSION:75,MIN_SAFARI_VERSION:13,REQUIRED_FEATURES:["localStorage","fileReader","blob","createObjectURL"],MIN_COMPATIBILITY_SCORE:70,MEMORY_WARNING_THRESHOLD:.8,SAMSUNG_OPTIMIZATIONS:!0,EXTENDED_TIMEOUTS_FOR_SAMSUNG:!0}};class PDFCore{constructor(){this.doc=null,this.pageWidth=210,this.pageHeight=297,this.margins={left:10,right:10,top:15,bottom:15},this.currentY=this.margins.top}async init(){try{return window.jsPDF||await this.loadJsPDF(),console.log("✅ PDF Core initialized"),!0}catch(e){return console.error("❌ Failed to initialize PDF Core:",e),!1}}async loadJsPDF(){return new Promise((e,t)=>{if(window.jsPDF){e();return}const o=document.createElement("script");o.src="https://cdn.jsdelivr.net/npm/jspdf@2.5.1/dist/jspdf.umd.min.js",o.onload=e,o.onerror=t,document.head.appendChild(o)})}createDocument(){return this.doc=new window.jsPDF({orientation:"portrait",unit:"mm",format:"a4"}),this.currentY=this.margins.top,this.doc}addNewPage(){this.doc.addPage(),this.currentY=this.margins.top}checkPageSpace(e){const t=this.pageHeight-this.margins.bottom;return this.currentY+e>t?(this.addNewPage(),!0):!1}addText(e,t,o,r={}){const{fontSize:n=10,fontStyle:i="normal",align:s="left",maxWidth:c=null}=r;if(this.doc.setFontSize(n),this.doc.setFont("helvetica",i),c){const l=this.doc.splitTextToSize(e,c);return this.doc.text(l,t,o,{align:s}),l.length*(n*.35)}else return this.doc.text(e,t,o,{align:s}),n*.35}addLine(e,t,o,r,n="#000000",i=.1){this.doc.setDrawColor(n),this.doc.setLineWidth(i),this.doc.line(e,t,o,r)}addRect(e,t,o,r,n="S",i="#000000"){this.doc.setDrawColor(i),this.doc.rect(e,t,o,r,n)}async addImage(e,t,o,r,n){return new Promise(i=>{if(!e||e==="N/A"){i({width:0,height:0});return}const s=new Image;s.crossOrigin="anonymous",s.onload=()=>{try{const c=document.createElement("canvas"),l=c.getContext("2d"),d=s.width/s.height;let u=r,p=r/d;p>n&&(p=n,u=n*d),c.width=u,c.height=p,l.drawImage(s,0,0,u,p);const h=this.detectTechnicalImage(s),m=h?.8:.7,g=h?"PNG":"JPEG",w=c.toDataURL(`image/${g.toLowerCase()}`,m);this.doc.addImage(w,g,t,o,u,p,void 0,"FAST"),i({width:u,height:p})}catch(c){console.warn("Failed to add image:",c),i({width:0,height:0})}},s.onerror=()=>{console.warn("Failed to load image:",e),i({width:0,height:0})},s.src=e})}getContentWidth(){return this.pageWidth-this.margins.left-this.margins.right}getContentHeight(){return this.pageHeight-this.margins.top-this.margins.bottom}detectTechnicalImage(e){const t=document.createElement("canvas"),o=t.getContext("2d"),r=Math.min(50,Math.min(e.width,e.height));t.width=r,t.height=r,o.drawImage(e,0,0,r,r);const i=o.getImageData(0,0,r,r).data,s=new Set;let c=0;for(let p=0;p<i.length;p+=4){const h=i[p],m=i[p+1],g=i[p+2];if(s.add(`${h},${m},${g}`),p>0&&p<i.length-4){const w=i[p-4],y=i[p-3],b=i[p-2];Math.abs(h-w)+Math.abs(m-y)+Math.abs(g-b)>50&&c++}}const l=s.size<500,d=c>r*r*.1,u=e.width<800&&e.height<800;return l||d||u}moveY(e){this.currentY+=e}getCurrentY(){return this.currentY}setCurrentY(e){this.currentY=e}getRemainingPageHeight(){return this.pageHeight-this.margins.bottom-this.currentY}isValidUrl(e){if(!e||typeof e!="string")return!1;try{return new URL(e),!0}catch{return!1}}formatPrice(e){if(!e||e==="N/A")return"";const t=parseFloat(e.toString().replace(/[^0-9.]/g,""));return t>0?`$${t.toFixed(2)}`:""}formatText(e,t=50){return e?e.length>t?`${e.substring(0,t-3)}...`:e:""}async finalize(){if(!this.doc)throw new Error("No document created");return this.doc.output("blob")}getDocument(){return this.doc}}const pdfCore=new PDFCore;class PDFLayouts{constructor(e){this.core=e||pdfCore}async addHeader(e){this.core.getDocument();const t=this.core.pageWidth,o=this.core.margins;this.core.addText("SEIMA",o.left,25,{fontSize:20,fontStyle:"bold"}),this.core.addText("Product Selection Report",t/2,25,{fontSize:16,fontStyle:"bold",align:"center"});const r=new Date().toLocaleDateString("en-AU");this.core.addText(r,t-o.right,25,{fontSize:10,align:"right"}),this.core.addLine(o.left,30,t-o.right,30,"#cccccc"),this.core.setCurrentY(35)}async addCustomerInfo(e){this.core.getDocument();const t=this.core.margins,o=this.core.getContentWidth();this.core.addText("Customer Information",t.left,this.core.getCurrentY(),{fontSize:14,fontStyle:"bold"}),this.core.moveY(8);const r=t.left,n=t.left+o/2;let i=this.core.getCurrentY();if(e.name&&e.name.trim()&&(this.core.addText(`Customer: ${e.name.trim()}`,r,i,{fontSize:10}),i+=5),e.project&&e.project.trim()&&(this.core.addText(`Project: ${e.project.trim()}`,r,i,{fontSize:10}),i+=5),i=this.core.getCurrentY(),e.email&&e.email.trim()&&(this.core.addText(`Email: ${e.email.trim()}`,n,i,{fontSize:10}),i+=5),e.phone&&e.phone.trim()&&(this.core.addText(`Phone: ${e.phone.trim()}`,n,i,{fontSize:10}),i+=5),e.address&&e.address.trim()){this.core.setCurrentY(i+2);const s=this.core.addText(`Address: ${e.address.trim()}`,r,this.core.getCurrentY(),{fontSize:10,maxWidth:o-20});this.core.moveY(s)}this.core.moveY(10),this.core.addLine(t.left,this.core.getCurrentY(),this.core.pageWidth-t.right,this.core.getCurrentY(),"#eeeeee"),this.core.moveY(5)}async addSelectionSummary(e){const t=this.core.margins;this.core.addText("Selection Summary",t.left,this.core.getCurrentY(),{fontSize:14,fontStyle:"bold"}),this.core.moveY(8);const o=e.length,n=new Set(e.map(s=>s.room).filter(Boolean)).size||1;let i=0;e.forEach(s=>{var d;const c=parseFloat((((d=s.product)==null?void 0:d.RRP_EX)||"0").toString().replace(/[^0-9.]/g,""))||0,l=s.quantity||1;i+=c*l}),this.core.addText(`Total Products: ${o}`,t.left,this.core.getCurrentY(),{fontSize:10}),this.core.moveY(5),this.core.addText(`Total Rooms: ${n}`,t.left,this.core.getCurrentY(),{fontSize:10}),this.core.moveY(5),i>0&&(this.core.addText(`Estimated Total Value: $${i.toFixed(2)} (inc GST)`,t.left,this.core.getCurrentY(),{fontSize:10,fontStyle:"bold"}),this.core.moveY(5)),this.core.moveY(10),this.core.addLine(t.left,this.core.getCurrentY(),this.core.pageWidth-t.right,this.core.getCurrentY(),"#eeeeee"),this.core.moveY(10)}async addProductTableHeader(){this.core.getDocument();const e=this.core.margins,t=this.core.getContentWidth();this.core.addText("Product Details",e.left,this.core.getCurrentY(),{fontSize:14,fontStyle:"bold"}),this.core.moveY(8);const o=this.core.getCurrentY(),r={image:25,code:35,description:70,price:25,qty:15,room:30};let n=e.left;return this.core.addRect(e.left,o-2,t,8,"F","#f5f5f5"),this.core.addText("Image",n+2,o+3,{fontSize:9,fontStyle:"bold"}),n+=r.image,this.core.addText("Code",n+2,o+3,{fontSize:9,fontStyle:"bold"}),n+=r.code,this.core.addText("Description",n+2,o+3,{fontSize:9,fontStyle:"bold"}),n+=r.description,this.core.addText("Price",n+2,o+3,{fontSize:9,fontStyle:"bold"}),n+=r.price,this.core.addText("Qty",n+2,o+3,{fontSize:9,fontStyle:"bold"}),n+=r.qty,this.core.addText("Room",n+2,o+3,{fontSize:9,fontStyle:"bold"}),this.core.moveY(10),r}async addProductRow(e,t,o=!1,r=null){var m,g,w,y,b,f,S;this.core.getDocument();const n=this.core.margins,i=20;this.core.checkPageSpace(i+5);const s=this.core.getCurrentY();let c=n.left;if(o&&this.core.addRect(n.left,s-1,this.core.getContentWidth(),i+2,"F","#fafafa"),(m=e.product)!=null&&m.Image_URL&&this.core.isValidUrl(e.product.Image_URL))try{await this.core.addImage(e.product.Image_URL,c+2,s,20,15)}catch(k){console.warn("Failed to add product image:",k)}c+=t.image;const l=this.core.formatText(((g=e.product)==null?void 0:g.OrderCode)||"",15);this.core.addText(l,c+2,s+5,{fontSize:8}),c+=t.code;const d=this.core.formatText(((w=e.product)==null?void 0:w.Description)||"",45);this.core.addText(d,c+2,s+5,{fontSize:8,maxWidth:t.description-4}),c+=t.description;let u=0;((y=e.product)==null?void 0:y.UserEditedPrice)!==void 0&&((b=e.product)==null?void 0:b.UserEditedPrice)!==null&&((f=e.product)==null?void 0:f.UserEditedPrice)!==""?u=parseFloat(e.product.UserEditedPrice.toString().replace(/,/g,""))||0:u=parseFloat((((S=e.product)==null?void 0:S.RRP_EX)||"0").toString().replace(/,/g,""))||0,u>0&&(r!=null&&r.includeGst)&&(u=u*1.1);const p=u>=0?`$${u.toLocaleString("en-AU",{minimumFractionDigits:2,maximumFractionDigits:2})}`:"";this.core.addText(p,c+2,s+5,{fontSize:8}),c+=t.price,this.core.addText((e.quantity||1).toString(),c+2,s+5,{fontSize:8}),c+=t.qty;const h=this.core.formatText(e.room||"",15);if(this.core.addText(h,c+2,s+5,{fontSize:8}),e.notes){const k=s+10;this.core.addText(`Notes: ${this.core.formatText(e.notes,60)}`,n.left+2,k,{fontSize:7,fontStyle:"italic"})}this.core.moveY(i)}async addFooter(e){const t=this.core.getDocument(),o=this.core.margins,r=this.core.pageWidth,i=this.core.pageHeight-20;this.core.addLine(o.left,i,r-o.right,i,"#cccccc"),this.core.addText("Generated by Seima Product Scanner",o.left,i+5,{fontSize:8,fontStyle:"italic"}),this.core.addText("www.seima.com.au",r-o.right,i+5,{fontSize:8,fontStyle:"italic",align:"right"});const s=t.internal.getNumberOfPages();this.core.addText(`Page ${s}`,r/2,i+5,{fontSize:8,align:"center"})}async addQRSection(e){const t=this.core.margins;this.core.checkPageSpace(40),this.core.moveY(10),this.core.addText("Quick Access Links",t.left,this.core.getCurrentY(),{fontSize:12,fontStyle:"bold"}),this.core.moveY(8);const o=e.filter(r=>{var n;return((n=r.product)==null?void 0:n.Website_URL)&&this.core.isValidUrl(r.product.Website_URL)}).slice(0,5);o.forEach((r,n)=>{const i=`${r.product.OrderCode}: ${r.product.Website_URL}`;this.core.addText(this.core.formatText(i,80),t.left+5,this.core.getCurrentY(),{fontSize:8}),this.core.moveY(4)}),o.length===0&&(this.core.addText("Visit www.seima.com.au for more product information",t.left+5,this.core.getCurrentY(),{fontSize:8,fontStyle:"italic"}),this.core.moveY(4))}}const pdfLayouts=new PDFLayouts;class UnifiedPDFGenerator{constructor(){this.core=pdfCore,this.layouts=pdfLayouts,this.isInitialized=!1}async init(){try{return await this.core.init(),this.isInitialized=!0,console.log("✅ Unified PDF Generator initialized"),!0}catch(e){return console.error("❌ Failed to initialize PDF Generator:",e),!1}}async generatePDF(e){try{this.isInitialized||await this.init();const t=this.getSelectedProducts();if(!t.length)throw new Error("No products selected");console.log(`📄 Generating PDF for ${t.length} products...`),this.core.createDocument(),await this.layouts.addHeader(e),await this.layouts.addCustomerInfo(e),await this.layouts.addSelectionSummary(t);const o=await this.layouts.addProductTableHeader();for(let n=0;n<t.length;n++){const i=t[n],s=n%2===0;await this.layouts.addProductRow(i,o,s,e)}await this.layouts.addQRSection(t),await this.layouts.addFooter(e);const r=await this.core.finalize();return console.log("✅ PDF generated successfully"),r}catch(t){throw console.error("❌ PDF generation failed:",t),t}}async generateCSV(e){try{const t=this.getSelectedProducts();if(!t.length)throw new Error("No products selected");console.log(`📊 Generating CSV for ${t.length} products...`);const o=[];o.push('"Code","Description","Quantity","Price ea ex GST","Price Total ex GST","Notes","Room","Image URL","Diagram URL","Datasheet URL","Website URL"'),t.forEach(i=>{var b,f,S,k,$,E,C;const s=this.cleanForCSV(((b=i.product)==null?void 0:b.OrderCode)||""),c=this.cleanForCSV(((f=i.product)==null?void 0:f.Description)||""),l=i.quantity||1,d=this.cleanForCSV(((S=i.product)==null?void 0:S.RRP_EX)||""),u=this.calculateTotalPrice(d,l),p=this.cleanForCSV(i.notes||""),h=this.cleanForCSV(i.room||""),m=this.cleanForCSV(((k=i.product)==null?void 0:k.Image_URL)||""),g=this.cleanForCSV((($=i.product)==null?void 0:$.Diagram_URL)||""),w=this.cleanForCSV(((E=i.product)==null?void 0:E.Datasheet_URL)||""),y=this.cleanForCSV(((C=i.product)==null?void 0:C.Website_URL)||"");o.push(`"${s}","${c}","${l}","${d}","${u}","${p}","${h}","${m}","${g}","${w}","${y}"`)});const r=o.join(`
`),n=new Blob([r],{type:"text/csv;charset=utf-8"});return console.log("✅ CSV generated successfully"),n}catch(t){throw console.error("❌ CSV generation failed:",t),t}}async generateBothFiles(e){try{const[t,o]=await Promise.all([this.generatePDF(e),this.generateCSV(e)]);return{pdfBlob:t,csvBlob:o}}catch(t){throw console.error("❌ File generation failed:",t),t}}getSelectedProducts(){const e=JSON.parse(localStorage.getItem("selection")||"[]"),t=JSON.parse(localStorage.getItem(CONFIG$1.STORAGE_KEYS.SELECTED_PRODUCTS)||"[]");return t.length>0?t:e.map(o=>({product:o,room:o.Room||"",notes:o.Notes||"",quantity:o.Quantity||1}))}calculateTotalPrice(e,t){const r=(parseFloat(e.toString().replace(/[^0-9.]/g,""))||0)*(t||1);return r>0?r.toFixed(2):""}cleanForCSV(e){return e?e.toString().replace(/"/g,'""').replace(/[\r\n]/g," "):""}async generateQuotePDF(e){return await this.generatePDF(e)}async generateReportPDF(e){return await this.generatePDF(e)}generateFileName(e,t){const o=new Date,r=String(o.getDate()).padStart(2,"0"),n=String(o.getMonth()+1).padStart(2,"0"),i=String(o.getFullYear()).slice(-2),s=String(o.getHours()).padStart(2,"0"),c=String(o.getMinutes()).padStart(2,"0");return`${(e.project||"seima-selection").replace(/[^a-zA-Z0-9\s]/g,"")}-${r}${n}${i}.${s}${c}.${t}`}downloadFile(e,t){const o=URL.createObjectURL(e),r=document.createElement("a");r.href=o,r.download=t,document.body.appendChild(r),r.click(),document.body.removeChild(r),URL.revokeObjectURL(o)}getSelectionSummary(){const e=this.getSelectedProducts(),t=e.length,r=new Set(e.map(i=>i.room).filter(Boolean)).size||1;let n=0;return e.forEach(i=>{var l;const s=parseFloat((((l=i.product)==null?void 0:l.RRP_EX)||"0").toString().replace(/[^0-9.]/g,""))||0,c=i.quantity||1;n+=s*c}),{totalProducts:t,totalRooms:r,totalValue:n,hasProducts:t>0}}}const pdfGenerator=new UnifiedPDFGenerator,utils={Utils},CONFIG=config;class ModuleCoordinator{constructor(){this.modules={dataLayer,pdfGenerator,pdfCore,pdfLayouts,StorageManager,utils},this.isInitialized=!1,this.initStatus={}}async init(){try{console.log("🚀 Initializing modular components...");const e=[this.initModule("dataLayer",this.modules.dataLayer),this.initModule("pdfGenerator",this.modules.pdfGenerator)];return(await Promise.allSettled(e)).forEach((o,r)=>{const n=["dataLayer","pdfGenerator"][r];o.status==="rejected"?(console.error(`❌ Failed to initialize ${n}:`,o.reason),this.initStatus[n]=!1):this.initStatus[n]=o.value}),this.isInitialized=!0,console.log("✅ Module initialization complete:",this.initStatus),this.initStatus}catch(e){return console.error("❌ Module coordinator initialization failed:",e),!1}}async initModule(e,t){try{if(t&&typeof t.init=="function"){const o=await t.init();return console.log(`✅ ${e} initialized:`,o),o}else return console.log(`ℹ️ ${e} does not require initialization`),!0}catch(o){throw console.error(`❌ Failed to initialize ${e}:`,o),o}}async searchProducts(e,t=10){return this.modules.dataLayer.isLoaded||await this.modules.dataLayer.init(),this.modules.dataLayer.searchProducts(e,t)}async findProductByCode(e){return this.modules.dataLayer.isLoaded||await this.modules.dataLayer.init(),this.modules.dataLayer.findProductByCode(e)}async addProductToSelection(e,t="",o="",r=1){return this.modules.dataLayer.addProductToSelection(e,t,o,r)}getSelectedProducts(){return this.modules.dataLayer.getSelectedProducts()}getSelectionSummary(){return this.modules.dataLayer.getSelectionSummary()}async generatePDF(e){return await this.modules.pdfGenerator.generatePDF(e)}async generateCSV(e){return await this.modules.pdfGenerator.generateCSV(e)}async generateBothFiles(e){return await this.modules.pdfGenerator.generateBothFiles(e)}async sendEmail(e,t){return await this.modules.emailService.sendEmailWithPDF(e,t)}clearSelection(){return this.modules.dataLayer.clearSelection()}getModuleStatus(){return{initialized:this.isInitialized,moduleStatus:this.initStatus,dataLayer:{loaded:this.modules.dataLayer.isLoaded,productCount:this.modules.dataLayer.products.length},selection:{count:this.getSelectedProducts().length,summary:this.getSelectionSummary()}}}async reinitializeModule(e){if(this.modules[e])try{return this.initStatus[e]=await this.initModule(e,this.modules[e]),this.initStatus[e]}catch(t){return console.error(`❌ Failed to reinitialize ${e}:`,t),!1}return!1}async batchAddProducts(e){const t=[];for(const{product:o,room:r,notes:n,quantity:i}of e)try{const s=await this.addProductToSelection(o,r,n,i);t.push({success:!0,result:s})}catch(s){t.push({success:!1,error:s.message,product:o})}return t}exportState(){return{moduleStatus:this.getModuleStatus(),config:CONFIG,timestamp:new Date().toISOString()}}}const moduleCoordinator=new ModuleCoordinator;moduleCoordinator.init().catch(a=>{console.error("❌ Auto-initialization failed:",a)});class NavigationManager{constructor(){this.currentScreen="welcome",this.currentSearchResults=[]}async init(){try{await dataLayer.init()}catch(e){console.error("Failed to load product catalog:",e)}await this.loadVersion(),this.updateSelectionCount(),setTimeout(()=>this.loadVersion(),1e3)}async loadVersion(){try{const e=await fetch("./version.txt");if(e.ok){const t=await e.text(),o=document.getElementById("version-number");if(o){const r=t.trim().split(`
`).filter(s=>s.trim()!==""),n=r.length>0?r[r.length-1]:"Unknown",i=n.split(" - ")[0]||n;o.innerText=i,o.innerText.trim()||(o.innerText="v2.1.0")}}else throw new Error("Version file not found")}catch{const t=document.getElementById("version-number");if(t){const o=config.get("app.version")||"v2.1.0";t.innerText=o}else setTimeout(()=>{const o=document.getElementById("version-number");if(o&&!o.innerText.trim()){const r=config.get("app.version")||"v2.1.0";o.innerText=r}},1e3);console.info("Version loaded from config (GitHub Pages mode)")}}async showProductLookupScreen(){try{const t=await(await fetch("./screens/product-grid.html")).text();document.body.innerHTML=t,this.currentScreen="product-grid";const o=document.createElement("script");o.type="module",o.src="js/app.js",document.body.appendChild(o),setTimeout(()=>{document.querySelectorAll(".back-btn").forEach(r=>r.remove())},100),window.productGridManager&&window.productGridManager.init(),await this.loadVersion(),setTimeout(()=>this.loadVersion(),1e3)}catch(e){console.error("Failed to load product grid screen:",e)}}setupSplitInterface(){const e=document.getElementById("back-to-home");e&&(e.onclick=()=>location.reload());const t=document.getElementById("download-btn"),o=document.getElementById("clear-all-btn");t&&(t.onclick=()=>this.showDownloadFormModal()),o&&(o.onclick=()=>this.showClearConfirmModal()),this.setupSplitProductSearch(),this.setupReviewTable(),this.renderReviewTable(),this.loadInitialSearchResults()}setupSplitProductSearch(){const e=document.getElementById("product-search-input"),t=document.getElementById("search-results-list"),o=document.getElementById("search-loading"),r=document.getElementById("search-no-results");if(!e||!t)return;const n=[],i=Utils.debounce(s=>{this.performSplitProductSearch(s,t,n,o,r)},200);e.addEventListener("input",()=>{const s=e.value.trim();s?i(s):this.loadInitialSearchResults()}),t.addEventListener("click",s=>{const c=s.target.closest(".result-item");if(!c)return;const l=parseInt(c.getAttribute("data-idx"),10),d=n.length>0?n:this.currentSearchResults||[];!isNaN(l)&&d[l]&&this.showSplitProductDetails(d[l])})}performSplitProductSearch(e,t,o,r,n){if(!dataLayer.isLoaded){r.style.display="flex",n.style.display="none",t.innerHTML="";return}o.length=0,o.push(...dataLayer.searchProducts(e)),r.style.display="none",o.length===0?(n.style.display="flex",t.innerHTML=""):(n.style.display="none",t.innerHTML=o.map((i,s)=>`
          <div class="result-item" data-idx="${s}">
            <span class="result-code">${Utils.sanitizeInput(i.OrderCode||i.Code||"")}</span> - ${Utils.sanitizeInput(i.Description||i.ProductName||i["Product Name"]||"")}
          </div>
        `).join(""))}async loadInitialSearchResults(){const e=document.getElementById("search-results-list"),t=document.getElementById("search-loading"),o=document.getElementById("search-no-results");if(!e)return;if(!dataLayer.isLoaded){t.style.display="flex",o.style.display="none",e.innerHTML="",setTimeout(()=>this.loadInitialSearchResults(),500);return}const r=dataLayer.getAllProducts().slice(0,50);t.style.display="none",o.style.display="none",e.innerHTML=r.map((n,i)=>`
        <div class="result-item" data-idx="${i}">
          <span class="result-code">${Utils.sanitizeInput(n.OrderCode||n.Code||"")}</span> - ${Utils.sanitizeInput(n.Description||n.ProductName||n["Product Name"]||"")}
        </div>
      `).join(""),this.currentSearchResults=r}showSplitProductDetails(e){const t=document.getElementById("product-details"),o=document.getElementById("product-image"),r=document.getElementById("product-name"),n=document.getElementById("product-code"),i=document.getElementById("product-price"),s=document.getElementById("product-room"),c=document.getElementById("product-quantity"),l=document.getElementById("product-notes"),d=document.getElementById("add-product-btn"),u=document.getElementById("close-details");if(t){if(o){const p=e.Image||e.Image_URL||e.imageUrl||"assets/no-image.png";o.src=p,o.alt=e.Description||e.ProductName||e["Product Name"]||"Product Image"}if(r&&(r.textContent=e.Description||e.ProductName||e["Product Name"]||""),n&&(n.textContent=e.OrderCode||e.Code||""),i){const p=e.RRP_EX||e["RRP EX GST"]||e.RRP_EX||e.RRP_EXGST||e.rrpExGst||e.RRP_INCGST||e["RRP INC GST"]||0;i.textContent=p?`$${parseFloat(p).toFixed(2)}`:"Price not available"}this.populateRoomSelect(s),c&&(c.value=1),l&&(l.value=""),u&&(u.onclick=()=>{t.style.display="none"}),d&&(d.onclick=()=>{const p=s?s.value:"Blank",h=c&&parseInt(c.value)||1,m=l?l.value.trim():"";this.addProductToSplitSelection(e,p,h,m),t.style.display="none"}),t.style.display="block"}}async showProductDetailsScreen(e,t={}){try{const r=await(await fetch("./screens/product-details.html")).text();document.body.innerHTML=r,this.currentScreen="product-details",this.populateProductDetails(e,t),this.setupProductDetailsHandlers(e)}catch(o){console.error("Failed to load product details screen:",o)}}populateProductDetails(e,t){const o=document.getElementById("product-image");o&&(o.src=e.Image_URL||"assets/no-image.png",o.onerror=function(){this.src="assets/no-image.png"}),document.getElementById("product-name").textContent=e.Description||"",document.getElementById("product-code").textContent=e.OrderCode?`Code: ${e.OrderCode}`:"";let r="",n=NaN;const i=e.RRP_EX||e["RRP EX GST"]||e.RRP_EX||e.RRP_EXGST||e.rrpExGst||e.RRP_INCGST||e["RRP INC GST"];i&&(n=parseFloat(i.toString().replace(/,/g,""))),!isNaN(n)&&n>0?r=`$${n.toFixed(2)} ex GST`:r="Price unavailable",document.getElementById("product-price-inline").textContent=r,document.getElementById("product-description").textContent=e.LongDescription||"",this.setLink("datasheet-link",e.Datasheet_URL),this.setLink("diagram-link",e.Diagram_URL),this.setLink("website-link",e.Website_URL);const s=document.getElementById("diagram-link"),c=document.getElementById("datasheet-link"),l=document.getElementById("website-link");if([s,c,l].forEach(d=>{d&&(d.setAttribute("target","_blank"),d.setAttribute("rel","noopener noreferrer"))}),this.setupVariantDropdown(e,t),this.populateRoomSelect(),this.setupQuantitySelect(),this.setupAnnotationField(),this.setupAnnotationCharacterCount(t),t.quantity){const d=document.getElementById("product-quantity");d&&(d.value=t.quantity)}t.scannedCode&&this.showScanFeedback(`Successfully scanned: ${t.scannedCode}`)}populateRoomSelect(e=null){const t=e||document.getElementById("room-select");if(!t)return;t.innerHTML='<option value="Blank">Blank</option>',config.get("rooms.predefined",[]).forEach(i=>{const s=document.createElement("option");s.value=i.name,s.textContent=i.name,t.appendChild(s)}),StorageManager.getCustomRooms().forEach(i=>{const s=document.createElement("option");s.value=i.name,s.textContent=i.name,t.appendChild(s)});const n=document.createElement("option");n.value="__ADD_NEW_ROOM__",n.textContent="➕ Add new room...",n.style.fontWeight="bold",n.style.color="#2563eb",t.appendChild(n),t.value="Blank",t.removeEventListener("change",this.handleRoomSelectChange.bind(this)),t.addEventListener("change",this.handleRoomSelectChange.bind(this))}setupQuantitySelect(){const e=document.getElementById("product-quantity");if(!e)return;e.innerHTML="",config.get("ui.quantityOptions",[1,2,3,4,5,6,7,8,9,10]).forEach(o=>{const r=document.createElement("option");r.value=o,r.textContent=o.toString(),e.appendChild(r)})}setLink(e,t){const o=document.getElementById(e);t&&t!=="#"?(o.href=t,o.style.display=""):o.style.display="none"}setupVariantDropdown(e,t){const o=document.getElementById("variant-select-row"),r=document.getElementById("variant-select");if(o&&r){let n=e.ProductName||e["Product Name"]||"";typeof n=="string"&&(n=n.trim());let i=[];n&&(i=dataLayer.getAllProducts().filter(s=>{let c=s.ProductName||s["Product Name"]||"";return typeof c=="string"&&(c=c.trim()),c&&c===n})),i.length>1?(i.sort((s,c)=>(s.Description||"").localeCompare(c.Description||"")),o.style.display="",r.innerHTML=i.map(s=>`<option value="${s.OrderCode}"${s.OrderCode===e.OrderCode?" selected":""}>${s.Description}</option>`).join(""),r.onchange=()=>{var l;const s=r.value,c=i.find(d=>d.OrderCode===s);if(c&&c.OrderCode!==e.OrderCode){const d=((l=document.getElementById("product-annotation"))==null?void 0:l.value)||t.notes||"",u=document.getElementById("product-quantity");let p=1;u&&u.value?p=Math.max(1,parseInt(u.value,10)||1):t.quantity&&(p=t.quantity),this.showProductDetailsScreen(c,{notes:d,quantity:p})}}):o.style.display="none"}}setupAnnotationCharacterCount(e){const t=document.getElementById("product-annotation"),o=document.getElementById("annotation-char-count");t&&o&&(t.addEventListener("input",()=>{t.value=t.value.replace(/\r?\n|\r/g," "),o.textContent=`${t.value.length}/140`}),t.addEventListener("keydown",r=>{r.key==="Enter"&&r.preventDefault()}),o.textContent=`${t.value.length}/140`,e.notes&&(t.value=e.notes))}setupAnnotationField(){}setupProductDetailsHandlers(e){const t=document.getElementById("back-to-grid"),o=document.getElementById("add-to-room-btn");t&&(t.onclick=()=>this.showProductLookupScreen()),o&&(o.onclick=()=>this.addProductToSelection(e))}addProductToSelection(e){const t=document.getElementById("room-select"),o=document.getElementById("product-quantity"),r=document.getElementById("product-annotation"),n=t?t.value:"Blank",i=o?parseInt(o.value):1,s=r?r.value:"";StorageManager.addProductToSelection(e,s,n,i)?this.showProductLookupScreen():alert("Failed to add product to selection")}addProductToSplitSelection(e,t,o,r){StorageManager.addProductToSelection(e,r,t,o)?(this.renderReviewTable(),this.updateSelectionCount()):alert("Failed to add product to selection")}setupReviewTable(){const e=document.getElementById("review-table-body");e&&(e.addEventListener("change",t=>{t.target.classList.contains("quantity-input")?this.handleQuantityChange(t.target):t.target.classList.contains("room-select")&&this.handleRoomChange(t.target)}),e.addEventListener("click",t=>{t.target.classList.contains("remove-btn")&&this.handleRemoveProduct(t.target)}))}renderReviewTable(){const e=document.getElementById("review-table"),t=document.getElementById("review-table-empty"),o=document.getElementById("review-table-body"),r=document.getElementById("total-items"),n=document.getElementById("total-value");if(!e||!t||!o)return;const i=StorageManager.getSelectedProducts();if(i.length===0){e.style.display="none",t.style.display="flex",r&&(r.textContent="0 items"),n&&(n.textContent="$0.00");return}t.style.display="none",e.style.display="flex";let s=0,c=0;i.forEach(l=>{s+=l.quantity;let d=0;l.product.UserEditedPrice!==void 0&&l.product.UserEditedPrice!==null&&l.product.UserEditedPrice!==""?d=parseFloat(l.product.UserEditedPrice.toString().replace(/,/g,""))||0:d=parseFloat((l.product.RRP_EX||l.product["RRP EX GST"]||l.product.RRP_EX||l.product.RRP_EXGST||0).toString().replace(/,/g,""))||0,d>0&&(c+=d*l.quantity)}),r&&(r.textContent=s),n&&(n.textContent=c>0?`$${c.toLocaleString("en-AU",{minimumFractionDigits:2,maximumFractionDigits:2})}`:"$0.00"),o.innerHTML=i.map((l,d)=>{const u=l.product;let p=0;u.UserEditedPrice!==void 0&&u.UserEditedPrice!==null&&u.UserEditedPrice!==""?p=parseFloat(u.UserEditedPrice.toString().replace(/,/g,""))||0:p=parseFloat((u.RRP_EX||u["RRP EX GST"]||u.RRP_EX||u.RRP_EXGST||0).toString().replace(/,/g,""))||0;const h=p*l.quantity,m=u.Image||u.Image_URL||u.imageUrl||"assets/no-image.png";return`
        <div class="table-row" data-index="${d}">
          <div class="col-image">
            <img class="table-product-image" src="${m}" alt="Product" onerror="this.src='assets/no-image.png';">
          </div>
          <div class="col-product">
            <div class="product-info">
              <div class="product-name">${Utils.sanitizeInput(u.Description||u.ProductName||u["Product Name"]||"")}</div>
              <div class="product-code">${Utils.sanitizeInput(u.OrderCode||u.Code||"")}</div>
              ${l.notes?`<div class="product-notes">${Utils.sanitizeInput(l.notes)}</div>`:""}
            </div>
          </div>
          <div class="col-room">
            <select class="room-select" data-index="${d}">
              ${this.getRoomOptions(l.room)}
            </select>
          </div>
          <div class="col-price-ea">
            <div class="price-display">${p?`$${p.toLocaleString("en-AU",{minimumFractionDigits:2,maximumFractionDigits:2})}`:"N/A"}</div>
          </div>
          <div class="col-qty">
            <input type="number" class="quantity-input" data-index="${d}" value="${l.quantity}" min="1" step="1">
          </div>
          <div class="col-total">
            <div class="price-display">${p?`$${h.toLocaleString("en-AU",{minimumFractionDigits:2,maximumFractionDigits:2})}`:"N/A"}</div>
          </div>
          <div class="col-actions">
            <button class="remove-btn" data-index="${d}" title="Remove">×</button>
          </div>
        </div>
      `}).join("")}getRoomOptions(e){let t=`<option value="Blank"${e==="Blank"?" selected":""}>Blank</option>`;return config.get("rooms.predefined",[]).forEach(n=>{t+=`<option value="${n.name}"${e===n.name?" selected":""}>${n.name}</option>`}),StorageManager.getCustomRooms().forEach(n=>{t+=`<option value="${n.name}"${e===n.name?" selected":""}>${n.name}</option>`}),t+='<option value="__ADD_NEW_ROOM__" style="font-weight: bold; color: #2563eb;">➕ Add new room...</option>',t}handleQuantityChange(e){const t=parseInt(e.getAttribute("data-index")),o=Math.max(1,parseInt(e.value)||1),r=StorageManager.getSelectedProducts();r[t]&&(r[t].quantity=o,StorageManager.setSelectedProducts(r),this.renderReviewTable(),this.updateSelectionCount())}handleRoomChange(e){const t=parseInt(e.getAttribute("data-index"));let o=e.value;if(o==="__ADD_NEW_ROOM__"){const n=prompt("Enter new room name:");if(n&&n.trim()){const i=n.trim();if(StorageManager.addCustomRoom(i)){o=i,console.log("✅ Added new room:",i),this.renderSelectionTable();return}else{alert("Room name already exists or is invalid");const s=StorageManager.getSelectedProducts();s[t]&&(e.value=s[t].room||"Blank");return}}else{const i=StorageManager.getSelectedProducts();i[t]&&(e.value=i[t].room||"Blank");return}}const r=StorageManager.getSelectedProducts();r[t]&&(r[t].room=o,StorageManager.setSelectedProducts(r),this.updateSelectionCount())}handleRemoveProduct(e){const t=parseInt(e.getAttribute("data-index")),o=StorageManager.getSelectedProducts();o[t]&&(o.splice(t,1),StorageManager.setSelectedProducts(o),this.renderReviewTable(),this.updateSelectionCount())}async showReviewScreen(){try{const t=await(await fetch("./screens/review.html")).text();document.body.innerHTML=t,this.currentScreen="review",this.setupReviewScreenHandlers(),this.renderReviewList()}catch(e){console.error("Failed to load review screen:",e)}}setupReviewScreenHandlers(){const e=document.getElementById("back-to-grid"),t=document.getElementById("add-more-btn"),o=document.getElementById("quick-pdf-btn");e&&(e.onclick=()=>this.showProductLookupScreen()),t&&(t.onclick=()=>this.showProductLookupScreen()),o&&(o.onclick=()=>this.showDownloadFormModal())}renderReviewList(){const e=document.getElementById("review-list"),t=document.getElementById("review-empty");if(!e)return;const o=StorageManager.getSelectedProducts();if(o.length===0){e.innerHTML="",t&&(t.style.display="block");return}t&&(t.style.display="none");const r={};o.forEach(n=>{const i=n.room||"Unassigned";r[i]||(r[i]=[]),r[i].push(n)}),e.innerHTML=Object.entries(r).map(([n,i])=>`
      <div class="review-room-group">
        <div class="review-room-header">${n} <span class="room-count">(${i.length})</span></div>
        ${i.map((s,c)=>{const l=s.product,d=l.Description||l.description||l.productName||l["Product Name"]||"Product",u=l.OrderCode||l.orderCode||"",p=l.Image_URL||l.imageUrl||"assets/no-image.png",h=l.RRP_EX||l["RRP EX GST"]||l.RRP_EX||l.rrpExGst||l.RRP_EXGST||l.RRP_INCGST||l["RRP INC GST"]||"0";return`
          <div class="review-product-card" style="display: flex; flex-direction: column; align-items: stretch;">
            <div style="display: flex; flex-direction: row; align-items: flex-start;">
              <div class="review-product-thumb-wrap">
                <img class="review-product-thumb" src="${p}" alt="Product" onerror="this.src='assets/no-image.png';" onload="">
                <div class="review-qty-pill" data-room="${n}" data-idx="${c}">
                  <button class="review-qty-btn${(s.quantity||1)===1?" delete":""}" data-action="decrement" title="${(s.quantity||1)===1?"Delete":"Decrease"}">
                    ${(s.quantity||1)===1?"<svg viewBox='0 0 64 64' width='64' height='64'><rect x='10' y='8' width='44' height='6' rx='3' fill='black'/><polygon points='7,18 57,18 52,58 12,58' fill='none' stroke='black' stroke-width='7'/></svg>":"–"}
                  </button>
                  <span class="review-qty-value">${s.quantity||1}</span>
                  <button class="review-qty-btn" data-action="increment" title="Increase">+</button>
                </div>
              </div>
              <div class="review-product-info">
                <div class="review-product-title">${d}</div>
                <div class="review-product-meta">
                  <span class="review-product-code">${u?`Code: ${u}`:""}</span>
                  <span class="review-product-price">${`$${Number(h).toFixed(2)} ea (EX GST)`}</span>
                </div>
                <div class="review-product-notes">${s.notes?`Notes: ${s.notes}`:""}</div>
              </div>
            </div>
          </div>
          `}).join("")}
      </div>
    `).join(""),this.setupOriginalQuantityControls(r)}groupProductsByRoom(e){return e.reduce((t,o)=>{const r=o.room||"Unassigned";return t[r]||(t[r]=[]),t[r].push(o),t},{})}setupOriginalQuantityControls(e){document.querySelectorAll(".review-qty-pill").forEach(t=>{const o=t.getAttribute("data-room"),r=parseInt(t.getAttribute("data-idx"),10);t.querySelectorAll(".review-qty-btn").forEach(n=>{n.onclick=()=>{const i=n.getAttribute("data-action"),s=StorageManager.getSelectedProducts();let c=-1;const l=s.findIndex(d=>(d.room===o&&c++,d.room===o&&c===r));if(l!==-1){const d=s[l],u=parseInt(d.quantity,10)||1;i==="increment"?StorageManager.updateProductQuantity(d.id,u+1):i==="decrement"&&(u===1?StorageManager.removeProductFromSelection(d.id):StorageManager.updateProductQuantity(d.id,u-1)),this.renderReviewList(),this.updateSelectionCount()}}})})}showDownloadFormModal(){var t;const e=document.getElementById("pdf-email-modal");if(e){e.style.display="flex";const o=document.getElementById("pdf-email-form"),r=document.getElementById("pdf-email-cancel"),n=document.getElementById("pdf-email-send");if(o){const s=Utils.getStorageItem("pdfFormSettings",{});o["user-name"]&&(o["user-name"].value=s.name||""),o["user-project"]&&(o["user-project"].value=s.project||""),o["user-address"]&&(o["user-address"].value=s.address||""),o["user-email"]&&(o["user-email"].value=s.email||""),o["user-telephone"]&&(o["user-telephone"].value=s.telephone||""),o["exclude-prices"]&&(o["exclude-prices"].checked=!!s.excludePrices),o["exclude-qty"]&&(o["exclude-qty"].checked=!!s.excludeQty),o["exclude-long-description"]&&(o["exclude-long-description"].checked=!!s.excludeLongDescription),o["include-gst"]&&(o["include-gst"].checked=!!s.includeGst)}const i=(t=o.querySelector('label[for="export-csv"]'))==null?void 0:t.parentElement;i&&(i.style.display="none"),n&&(n.textContent="Download"),r&&(r.onclick=()=>{e.style.display="none"}),o&&(o.onsubmit=s=>{s.preventDefault(),this.handleDownloadFormSubmit(),e.style.display="none"})}}handleDownloadFormSubmit(){console.log("🎯 handleDownloadFormSubmit called");const e=document.getElementById("pdf-email-form");if(!e){console.error("❌ Form not found!");return}const t=new FormData(e),o={name:t.get("user-name"),project:t.get("user-project"),address:t.get("user-address"),email:t.get("user-email"),telephone:t.get("user-telephone"),excludePrice:t.get("exclude-price")==="on"||t.get("exclude-prices")==="on",excludeQty:t.get("exclude-qty")==="on",excludeLongDescription:t.get("exclude-long-description")==="on",includeGst:t.get("include-gst")==="on",exportCsv:!0};console.log("📝 Navigation userDetails created:",o),window.dispatchEvent(new CustomEvent("generatePdf",{detail:o}))}showClearConfirmModal(){const e=document.getElementById("clear-selection-modal");if(e){e.style.display="flex";const t=document.getElementById("modal-cancel-btn"),o=document.getElementById("modal-confirm-btn");t&&(t.onclick=()=>{e.style.display="none"}),o&&(o.onclick=()=>{StorageManager.clearAllSelections(),e.style.display="none",this.updateSelectionCount(),this.currentScreen==="product-grid"&&window.productGridManager&&window.productGridManager.clearAll()})}}updateSelectionCount(){const e=document.getElementById("selection-count");e&&(e.textContent=StorageManager.getSelectionCount().toString())}handleRoomSelectChange(e){const t=e.target;if(t.value==="__ADD_NEW_ROOM__"){const r=prompt("Enter new room name:");if(r&&r.trim()){const n=r.trim();StorageManager.addCustomRoom(n)?(this.populateRoomSelect(t),t.value=n,console.log("✅ Added new room:",n)):(alert("Room name already exists or is invalid"),t.value="Blank")}else t.value="Blank"}}}async function downloadWithFallback(a,e,t="file"){await downloadWithEnhancedFallbacks(a,e,t)}function showPdfFormScreen$1(a,e=null){const t=document.getElementById("pdf-spinner");t&&(t.style.display="flex"),e&&(window._currentTipTailSettings=e),resetImageOptimizationStats();const o=document.createElement("div");o.id="pdf-processing-notification",o.style.cssText=`
      position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); z-index: 10001;
      background: #dbeafe; border: 1px solid #3b82f6; border-radius: 8px;
      padding: 20px; max-width: 400px; min-width: 320px; box-shadow: 0 8px 25px rgba(0,0,0,0.2);
      text-align: center;
    `;const r=a.emailCompatible;o.innerHTML=`
      <div style="display: flex; align-items: center; margin-bottom: 8px;">
        <span style="font-size: 18px; margin-right: 8px;">${r?"📧":"📄"}</span>
        <strong style="color: #1e40af;">Creating your product selection files</strong>
      </div>
      <p style="margin: 0; color: #1e40af; font-size: 14px;">
        ${r?"Creating text-only PDF without images for optimal email delivery.":"This may take a moment."}
      </p>
    `,document.body.appendChild(o),loadImageAsDataURL("./assets/seima-logo.png",(n,i,s)=>{const c=JSON.parse(localStorage.getItem("selection")||"[]"),l=JSON.parse(localStorage.getItem(CONFIG$1.STORAGE_KEYS.SELECTED_PRODUCTS)||"[]");let d=[];if(l.length>0?d=l.map(E=>({...E.product,Room:E.room,Notes:E.notes,Quantity:E.quantity,Timestamp:new Date(E.timestamp).toISOString()})):d=c,!d.length){alert("No products selected."),t&&(t.style.display="none");return}if(getImageCacheSize()>0)console.log(`📷 Using ${getImageCacheSize()} pre-cached images (skipping duplicate preload)`);else{const E=document.getElementById("pdf-processing-notification");if(E){const C=document.createElement("span");C.id="preload-progress",C.style.cssText="display: block; font-size: 12px; margin-top: 8px; color: #1e40af;",C.textContent="Loading images: 0%",E.appendChild(C)}console.log("📷 Starting image preload for",d.length,"products"),preloadAllProductImages(d).then(C=>{const O=document.getElementById("preload-progress");O&&(O.textContent=`✓ ${C} images ready`,O.style.color="#059669")}).catch(C=>{console.warn("Image preloading error:",C)})}const p={};d.forEach(E=>{p[E.Room]||(p[E.Room]=[]),p[E.Room].push(E)});const{jsPDF:h}=window.jspdf,m=new h({orientation:"landscape",unit:"pt",format:"a4",compress:!0,putOnlyUsedFonts:!0,precision:16,userUnit:1,floatPrecision:16}),g=m.internal.pageSize.getWidth(),w=m.internal.pageSize.getHeight(),y=g/2,b=320,f=90,S=(g-b)/2,k=70;m.setFillColor(255,255,255),m.rect(S,k,b,f,"F");const $=localStorage.getItem("customerLogo");if($)try{const E=new Image;E.onload=function(){const C=b-20,O=f-20,ce=E.width/E.height;let Y=C,J=C/ce;J>O&&(J=O,Y=O*ce);const re=S+(b-Y)/2,ne=k+(f-J)/2;m.addImage($,"PNG",re,ne,Y,J,void 0,"FAST")},E.src=$}catch(E){console.warn("Failed to draw customer logo:",E)}loadImageAsDataURL("./assets/seima-logo.png",(E,C,O)=>{const Y=O&&C?250*O/C:65,J=(g-250)/2,re=k+f+80;m.addImage(E,"PNG",J,re,250,Y,void 0,"FAST"),m.setFontSize(15),m.setTextColor("#444");const ne=y;let le=re+Y+50;const q=[];a!=null&&a.name&&a.name.trim()&&q.push({label:"Name:",value:a.name.trim(),bold:!0}),a!=null&&a.project&&a.project.trim()&&q.push({label:"Project:",value:a.project.trim(),bold:!0}),a!=null&&a.address&&a.address.trim()&&q.push({label:"Address:",value:a.address.trim(),bold:!0}),a!=null&&a.email&&a.email.trim()&&q.push({label:"Email:",value:a.email.trim(),bold:!0}),a!=null&&a.telephone&&a.telephone.trim()&&q.push({label:"Telephone:",value:a.telephone.trim(),bold:!0});const W=32;q.length>0&&q.forEach(X=>{m.setFont("helvetica","normal"),m.text(X.label,ne-80,le,{align:"right"}),m.setFont("helvetica","bold"),m.text(X.value,ne-35,le,{align:"left"}),le+=26}),m.setFillColor("#9B9184"),m.rect(0,w-W,g,W,"F"),m.setTextColor("#fff"),m.setFontSize(13);const ue=new Date,ke=["January","February","March","April","May","June","July","August","September","October","November","December"],Te=ue.getDate(),De=ke[ue.getMonth()],Ae=ue.getFullYear(),Be=String(ue.getHours()).padStart(2,"0"),Fe=String(ue.getMinutes()).padStart(2,"0"),Ne=`Printed ${Te} ${De} ${Ae}, ${Be}:${Fe}`;m.text(Ne,16,w-10),m.text("www.seima.com.au",g-140,w-10);const pe=StorageManager.getUserSettings(),_=pe.staffName||"",Q=pe.staffPosition||"",Z=pe.staffEmail||"",ee=pe.staffPhone||"";let te="For more information";_&&ee&&Z?te=`For more information, please contact ${Q?`${_}, ${Q}`:_} on ${ee} or email ${Z}`:_&&ee?te=`For more information, please contact ${Q?`${_}, ${Q}`:_} on ${ee}`:_&&Z?te=`For more information, please contact ${Q?`${_}, ${Q}`:_} or email ${Z}`:ee&&Z?te=`For more information, please call ${ee} or email ${Z}`:_?te=`For more information, please contact ${Q?`${_}, ${Q}`:_}`:ee?te=`For more information, please call ${ee}`:Z&&(te=`For more information, please email ${Z}`),m.setFont("helvetica","normal"),m.setFontSize(14),m.setTextColor("#111"),m.text(te,y,w-W-18,{align:"center"}),m.addPage(),loadImageAsDataURL("./assets/seima-logo-white.png",(X,Ie,Pe)=>{const fe=g-200,ye=g-120,Ce=g-80,oe=[32,236,321,fe,ye,Ce],ie=[90,90,fe-321,ye-fe,Ce-ye,80];resetImageOptimizationStats();const Re=(v,I,N,V,T,M,P)=>{if(!I||typeof I!="string"||I.length<10||!I.startsWith("http://")&&!I.startsWith("https://")&&!I.startsWith("data:")){P&&P();return}if(imageOptimizationStats.totalImages++,a.emailCompatible){imageOptimizationStats.failedImages++,P&&P();return}const D=getCachedImage(I);if(D&&D.dataUrl)try{const x=D.width/D.height;let U=T,R=T/x;R>M&&(R=M,U=M*x),v.addImage(D.dataUrl,D.format,N,V,U,R,void 0,"FAST"),imageOptimizationStats.optimizedImages++,P&&P();return}catch{console.warn("Failed to use cached image, falling back to direct load")}let B=!1;const G=["https://wsrv.nl/?url=","https://images.weserv.nl/?url=","https://api.codetabs.com/v1/proxy?quest="];let F=0;function ae(){if(B)return;const x=new Image;x.crossOrigin="Anonymous";let U=null;x.onload=function(){if(!B){B=!0,U&&clearTimeout(U);try{const A=getOptimizedFileSettings(0),L=A.imageMaxWidth,de=T,Se=M;try{const z=document.createElement("canvas"),j=z.getContext("2d"),{width:K,height:H}=calculateOptimizedDimensions(x.width,x.height,L);z.width=K,z.height=H,j.imageSmoothingEnabled=!0,j.imageSmoothingQuality="high",j.drawImage(x,0,0,K,H);let xe,Ee="JPEG";const Oe=detectTransparency(z,j),Me=isTechnicalDiagram(x);Oe||Me?(xe=z.toDataURL("image/png",A.imageQuality),Ee="PNG"):(xe=z.toDataURL("image/jpeg",A.imageQuality),Ee="JPEG");const Ue=`img_${generateImageHash(I)}`;v.addImage(xe,Ee,N,V,de,Se,Ue,"FAST"),imageOptimizationStats.optimizedImages++,P&&P()}catch(z){console.warn(`Failed to optimize image: ${I}`,z),console.warn("Error details:",z.message,z.stack);try{v.addImage(x,"JPEG",N,V,de,Se),imageOptimizationStats.optimizedImages++,P&&P()}catch(j){console.error(`Fallback also failed for: ${I}`,j),imageOptimizationStats.failedImages++,P&&P()}}}catch(A){console.warn("Failed to add image to PDF:",A),imageOptimizationStats.failedImages++,P&&P()}}},x.onerror=function(){B||(U&&clearTimeout(U),console.warn(`Failed to load image with proxy ${F}: ${I}`),console.warn(`Error details for: ${I} - Proxy: ${G[F]}`),F++,F<G.length?setTimeout(()=>{ae()},200):(B=!0,console.warn("All proxies failed, skipping image"),imageOptimizationStats.failedImages++,P&&P()))},U=setTimeout(()=>{B||(console.warn(`⏰ Timeout with proxy ${F}: ${I}`),x.src="",x.onload=null,x.onerror=null,F++,F<G.length?setTimeout(()=>{ae()},200):(B=!0,console.warn("All proxies timed out, skipping image"),imageOptimizationStats.failedImages++,P&&P()))},3e3);let R=I;F<G.length&&(R=G[F]+encodeURIComponent(I)),x.src=R}ae()},se=[];Object.keys(p).forEach((v,I)=>{const N=p[v];if(!N||!Array.isArray(N)){console.warn("⚠️ Skipping invalid room items:",v,N);return}N.forEach((V,T)=>{if(!V){console.warn("⚠️ Skipping null item in room:",v,"at index:",T);return}se.push({item:V,room:v,rIdx:I,iIdx:T,isFirstInRoom:T===0,roomCount:N.length})})}),se.reduce((v,I)=>{if(!I||!I.item)return console.warn("⚠️ Skipping null row in data analysis:",I),v;const N=String(I.item.Description||""),V=String(I.item.LongDescription||""),T=String(I.item.Notes||""),M=String(I.item.OrderCode||"");return v+N.length+V.length+T.length+M.length},0);let me=0,ge=0;const Le=4,he=8,we=Math.floor((w-80)/Le);let ve=W+8;function be(){if(!se||!Array.isArray(se)){console.error("❌ Critical error: rowsToDraw is not a valid array:",se),showDetailedErrorMessage(new Error("Invalid product data structure"),"generating PDF","unknown.pdf");return}if(me>=se.length){const T=m.internal.getNumberOfPages()-1;for(let R=2;R<=T+1;R++)m.setPage(R),drawPDFHeader(m,g,oe,ie,32,W,X,Ie,Pe,a),ve=W+8,m.setFillColor("#9B9184"),m.rect(0,w-W,g,W,"F"),m.setTextColor("#fff"),m.setFontSize(11),m.text("www.seima.com.au",g-140,w-10),m.text(`Page ${R-1} of ${T}`,32,w-10);const M=new Date,P=String(M.getDate()).padStart(2,"0"),D=String(M.getMonth()+1).padStart(2,"0"),B=String(M.getFullYear()).slice(-2),G=String(M.getHours()).padStart(2,"0"),F=String(M.getMinutes()).padStart(2,"0"),x=`${a.project.replace(/[^a-zA-Z0-9\s]/g,"")}-${P}${D}${B}.${G}${F}.pdf`,U=document.getElementById("pdf-processing-notification");U&&U.remove(),showImageOptimizationSummary(a.emailCompatible);try{const R=m.output("blob"),A=m.output("string"),L=A?A.match(/\/Type\s*\/XObject/g):null,de=A?A.match(/Tj\s/g):null,Se=A?A.match(/\/A\s*<</g):null;a.pdfSize=R.size;const z=showFileSizeInfo(R,x);if(a.sendEmail&&R.size>15*1024*1024){console.warn(`❌ PDF too large for email (${(R.size/1024/1024).toFixed(1)}MB), offering email-compatible version`),showEmailCompatibleOption(a,x);return}const j=createOptimizedBlob(R,z.settings);if(a.sendEmail&&a.email)if(a.exportCsv){const K=x.replace(/\.pdf$/,".csv");generateCsvBlobAsync(a,K).then(H=>{window.dispatchEvent(new CustomEvent("sendEmail",{detail:{userDetails:a,pdfBlob:j,csvBlob:H}}))}).catch(H=>{console.error("Async CSV generation for email failed:",H),window.dispatchEvent(new CustomEvent("sendEmail",{detail:{userDetails:a,pdfBlob:j,csvBlob:null}}))})}else window.dispatchEvent(new CustomEvent("sendEmail",{detail:{userDetails:a,pdfBlob:j,csvBlob:null}}));else if((async()=>{const K=await mergeWithTipTail(j);downloadWithFallback(K,x,"PDF")})(),a.exportCsv){const K=x.replace(/\.pdf$/,".csv");setTimeout(()=>{generateCsvBlobAsync(a,K).then(H=>{H&&downloadWithFallback(H,K,"CSV")}).catch(H=>{console.error("CSV generation failed:",H)})},1e3)}}catch(R){console.error("PDF generation failed:",R),showDetailedErrorMessage(R,"generating PDF",x);const A=document.getElementById("pdf-processing-notification");A&&A.remove()}t&&(t.style.display="none");return}ge>=Le&&(m.addPage(),drawPDFHeader(m,g,oe,ie,32,W,X,Ie,Pe,a),ve=W+8,ge=0);const v=se[me];if(!v||!v.item){console.warn(`⚠️  Skipping invalid row at index ${me}:`,v),me++,be();return}const I=ve+we*ge;v.isFirstInRoom&&(m.setFontSize(12),m.setFont("helvetica","bold"),m.setTextColor("#333"),m.text(`${v.room} (${v.roomCount})`,32,I+10),m.setFont("helvetica","normal"));const N=oe[0],V=N+90+12;Re(m,v.item.Image_URL||"",N,I+he+16,90,we-he*2,()=>{Re(m,v.item.Diagram_URL||"",V,I+he+16,90,we-he*2,()=>{m.setFontSize(10),m.setTextColor("#222");const T=I+28,P=oe[1]+ie[1]/2;m.text(String(v.item.OrderCode||""),P,T+10,{align:"center"});let D=T+35;if(v.item.Datasheet_URL&&v.item.Datasheet_URL!=="#"){m.setFontSize(9),m.setTextColor(0,102,204),m.textWithLink("Datasheet",P,D,{url:v.item.Datasheet_URL,align:"center"});const L=m.getTextWidth("Datasheet");m.setDrawColor(0,102,204),m.setLineWidth(.8),m.line(P-L/2,D+1.5,P+L/2,D+1.5),D+=16}if(v.item.Website_URL&&v.item.Website_URL!=="#"){m.setFontSize(9),m.setTextColor(0,102,204),m.textWithLink("Website",P,D,{url:v.item.Website_URL,align:"center"});const L=m.getTextWidth("Website");m.setDrawColor(0,102,204),m.setLineWidth(.8),m.line(P-L/2,D+1.5,P+L/2,D+1.5),D+=16}let B=T+10;m.setFontSize(10),m.setTextColor("#222");const G=ie[2]-10,F=oe[2],ae=m.splitTextToSize(String(v.item.Description||""),G);if(m.text(ae,F+5,B),B+=ae.length*12,!a.excludeLongDescription&&(v.item.LongDescription||v.item["Long Description"]||v.item.longDescription)){const L=v.item.LongDescription||v.item["Long Description"]||v.item.longDescription;m.setFontSize(9),m.setTextColor("#444");const de=m.splitTextToSize(String(L),G);m.text(de,F+5,B),B+=de.length*11}if(v.item.Notes){m.setFont("helvetica","italic"),m.setFontSize(9),m.setTextColor("#444");const L=m.splitTextToSize(`Notes: ${String(v.item.Notes).replace(/\r?\n|\r/g," ")}`,G);m.text(L,F+5,B),B+=L.length*11,m.setFont("helvetica","normal")}m.setFontSize(10),m.setTextColor("#222");let x=NaN;if(v.item.UserEditedPrice!==void 0&&v.item.UserEditedPrice!==null&&v.item.UserEditedPrice!=="")x=parseFloat(v.item.UserEditedPrice.toString().replace(/,/g,""));else{const L=v.item.RRP_EX||v.item["RRP EX GST"]||v.item.RRP_EX||v.item.RRP_EXGST;L&&(x=parseFloat(L.toString().replace(/,/g,"")))}!isNaN(x)&&x>0&&a.includeGst&&(x=x*1.1);const U=!isNaN(x)&&x>=0?`$${x.toLocaleString("en-AU",{minimumFractionDigits:2,maximumFractionDigits:2})}`:"";if(!a.excludePrice&&!a.excludeQty){const L=oe[3]+ie[3]/2;m.text(U,L,T+10,{align:"center"})}if(m.setFontSize(10),m.setTextColor("#222"),!a.excludeQty){const L=oe[4]+ie[4]/2;m.text(String(v.item.Quantity||1),L,T+10,{align:"center"})}m.setFontSize(10),m.setTextColor("#222");const R=x*(v.item.Quantity||1),A=!isNaN(x)&&x>=0?`$${R.toLocaleString("en-AU",{minimumFractionDigits:2,maximumFractionDigits:2})}`:"";if(!a.excludePrice&&!a.excludeQty){const L=oe[5]+ie[5]/2;m.text(A,L,T+10,{align:"center"})}me++,ge++,be()})})}be()})})})}function drawPDFHeader(a,e,t,o,r,n,i,s,c,l){const d=n+5.7;if(a.setFillColor("#8B6C2B"),a.rect(0,0,e,d,"F"),i&&s&&c){const y=d*.55,b=s/c;let f=y*b;f>80&&(f=80);const S=(d-y)/2;a.addImage(i,"PNG",r,S,f,y)}a.setFontSize(10),a.setTextColor("#f4f4f4"),a.setFont("helvetica","normal");const u=d-8,p=t[1]+o[1]/2,h=t[2]+o[2]/2,m=t[3]+o[3]/2,g=t[4]+o[4]/2,w=t[5]+o[5]/2;if(a.text("Code",p,u,{align:"center"}),a.text("Description",h,u,{align:"center"}),!l.excludePrice&&!l.excludeQty){if(l.includeGst){a.setFont("helvetica","normal");const y=a.getTextWidth("Price ea "),b=m-a.getTextWidth("Price ea INC GST")/2;a.text("Price ea ",b,u),a.setFont("helvetica","bold"),a.text("INC GST",b+y,u),a.setFont("helvetica","normal")}else{a.setFont("helvetica","normal");const y=a.getTextWidth("Price ea "),b=m-a.getTextWidth("Price ea EX GST")/2;a.text("Price ea ",b,u),a.setFont("helvetica","bold"),a.text("EX GST",b+y,u),a.setFont("helvetica","normal")}a.text("Qty",g,u,{align:"center"}),a.text("Total",w,u,{align:"center"})}else l.excludePrice&&!l.excludeQty&&a.text("Qty",g,u,{align:"center"})}function loadImageAsDataURL(a,e){const t=new window.Image;t.crossOrigin="Anonymous",t.onload=function(){const o=document.createElement("canvas"),r=o.getContext("2d"),n=400,i=150;let s=t.width,c=t.height;if(s>n||c>i){const d=n/s,u=i/c,p=Math.min(d,u);s=Math.round(s*p),c=Math.round(c*p)}o.width=s,o.height=c,r.imageSmoothingEnabled=!0,r.imageSmoothingQuality="high",r.drawImage(t,0,0,s,c);const l=o.toDataURL("image/png",.9);e(l,s,c)},t.src=a}function ensurePdfSpinner(){if(!document.getElementById("pdf-spinner")){const a=document.createElement("div");if(a.id="pdf-spinner",a.style.display="none",a.style.position="fixed",a.style.top="0",a.style.left="0",a.style.width="100vw",a.style.height="100vh",a.style.zIndex="9999",a.style.background="rgba(255,255,255,0.7)",a.style.alignItems="center",a.style.justifyContent="center",a.innerHTML='<div style="border:6px solid #e0e0e0;border-top:6px solid #2563eb;border-radius:50%;width:54px;height:54px;animation:spin 1s linear infinite;"></div>',document.body.appendChild(a),!document.getElementById("pdf-spinner-style")){const e=document.createElement("style");e.id="pdf-spinner-style",e.innerHTML="@keyframes spin { 0% { transform: rotate(0deg);} 100% { transform: rotate(360deg);} }",document.head.appendChild(e)}}}async function generateCsvBlobAsync(a,e){return new Promise(async t=>{if(!window.Papa)try{await Utils.loadScript("https://cdn.jsdelivr.net/npm/papaparse@5.4.1/papaparse.min.js")}catch(i){console.error("Failed to load PapaParse:",i),t(null);return}const o=JSON.parse(localStorage.getItem("selection")||"[]"),r=JSON.parse(localStorage.getItem(CONFIG$1.STORAGE_KEYS.SELECTED_PRODUCTS)||"[]");let n=[];if(r.length>0?n=r.map(i=>({...i.product,Room:i.room,Notes:i.notes,Quantity:i.quantity,Timestamp:new Date(i.timestamp).toISOString()})):n=o,!n.length){t(null);return}setTimeout(()=>{const i=n.map(s=>{let c,l,d,u;const p=a.excludePrice;let h=0;if(s.UserEditedPrice!==void 0&&s.UserEditedPrice!==null&&s.UserEditedPrice!=="")h=parseFloat(s.UserEditedPrice.toString().replace(/,/g,""));else{const g=s.RRP_EX||s["RRP EX GST"]||s.RRP_EX||s.RRP_EXGST||"";h=parseFloat((g||"0").toString().replace(/,/g,""))}c=h,d="Price ea ex GST",u="Price Total ex GST",l=!isNaN(c)&&c>=0?(c*(s.Quantity||1)).toFixed(2):"";const m={Code:sanitizeCSVField(s.OrderCode||""),Description:sanitizeCSVField(s.Description||""),Quantity:s.Quantity||1,Notes:sanitizeCSVField(s.Notes||""),Room:sanitizeCSVField(s.Room||""),"Image URL":sanitizeCSVField(s.Image_URL||""),"Diagram URL":sanitizeCSVField(s.Diagram_URL||""),"Datasheet URL":sanitizeCSVField(s.Datasheet_URL||""),"Website URL":sanitizeCSVField(s.Website_URL||"")};return m[d]=p?"0.00":c>=0?c.toFixed(2):"",m[u]=p?"0.00":l,m});setTimeout(()=>{const s=window.Papa.unparse(i,{quotes:!0,quoteChar:'"',delimiter:",",header:!0,newline:`\r
`,skipEmptyLines:!1,escapeChar:'"',transform:{value(c,l){return typeof c=="string"?c.replace(/\0/g,"").replace(/[\x00-\x08\x0B\x0C\x0E-\x1F]/g,""):c}}});a.sendEmail?setTimeout(()=>{try{const c=btoa(unescape(encodeURIComponent(s)));t({name:e,data:c,contentType:"text/csv",originalSize:s.length,base64Size:c.length})}catch(c){console.error("CSV base64 encoding failed:",c),t(new Blob([s],{type:"text/csv"}))}},0):t(new Blob([s],{type:"text/csv"}))},0)},0)})}function sanitizeCSVField(a){return typeof a!="string"&&(a=String(a)),a=a.replace(/\0/g,"").replace(/[\x00-\x08\x0B\x0C\x0E-\x1F]/g,"").replace(/\r?\n|\r/g," ").trim(),a}async function downloadViaFileSystemAPI(a,e,t="file"){try{if("showSaveFilePicker"in window){const r=await(await window.showSaveFilePicker({suggestedName:e,types:[{description:`${t} files`,accept:{[a.type]:[`.${e.split(".").pop()}`]}}]})).createWritable();return await r.write(a),await r.close(),!0}}catch(o){console.warn("File System Access API failed:",o)}return!1}function downloadViaDataURI(a,e,t="file"){try{if(a.size>2*1024*1024)return console.warn("File too large for data URI method"),!1;const o=new FileReader;return o.onload=function(r){try{const n=document.createElement("a");n.href=r.target.result,n.download=e,n.style.display="none",document.body.appendChild(n),n.click(),document.body.removeChild(n)}catch(n){console.error("Data URI download failed:",n)}},o.readAsDataURL(a),!0}catch(o){return console.warn("Data URI method failed:",o),!1}}function showManualDownloadOption(a,e,t="file"){const o=URL.createObjectURL(a),r=document.createElement("div");r.style.cssText=`
    position: fixed; top: 0; left: 0; width: 100%; height: 100%; 
    background: rgba(0,0,0,0.8); z-index: 10001; display: flex; 
    align-items: center; justify-content: center; padding: 20px;
  `;const n=document.createElement("div");n.style.cssText=`
    background: white; border-radius: 8px; padding: 30px; max-width: 600px; 
    width: 100%; max-height: 80vh; overflow-y: auto;
  `,n.innerHTML=`
    <h3 style="color: #2563eb; margin: 0 0 20px 0; display: flex; align-items: center;">
      <span style="margin-right: 8px;">💾</span>
      Manual Download Required
    </h3>
    <p style="margin: 0 0 16px 0; color: #374151;">
      Automatic download failed. Please use one of these manual methods to save your ${t}:
    </p>
    
    <div style="background: #f3f4f6; padding: 16px; border-radius: 6px; margin: 16px 0;">
      <h4 style="margin: 0 0 12px 0; color: #1f2937;">Method 1: Right-click to save</h4>
      <p style="margin: 0 0 12px 0; color: #4b5563; font-size: 14px;">
        Right-click the button below and select "Save link as..." or "Download linked file":
      </p>
      <a href="${o}" download="${e}" style="
        display: inline-block; padding: 10px 20px; background: #2563eb; color: white; 
        text-decoration: none; border-radius: 4px; font-weight: bold;
      ">📄 ${e}</a>
    </div>
    
    <div style="background: #f3f4f6; padding: 16px; border-radius: 6px; margin: 16px 0;">
      <h4 style="margin: 0 0 12px 0; color: #1f2937;">Method 2: Copy download link</h4>
      <p style="margin: 0 0 12px 0; color: #4b5563; font-size: 14px;">
        Copy this link and paste it into a new browser tab:
      </p>
      <div style="display: flex; gap: 8px; align-items: center;">
        <input type="text" id="manual-download-url" value="${o}" readonly style="
          flex: 1; padding: 8px; border: 1px solid #d1d5db; border-radius: 4px; 
          font-family: monospace; font-size: 12px; background: white;
        ">
        <button id="copy-url-btn" style="
          padding: 8px 12px; border: none; background: #059669; color: white; 
          border-radius: 4px; cursor: pointer; font-size: 12px; font-weight: bold;
        ">Copy</button>
      </div>
    </div>
    
    <div style="display: flex; gap: 12px; justify-content: flex-end; margin-top: 24px;">
      <button id="manual-download-close" style="
        padding: 10px 20px; border: 1px solid #d1d5db; background: white; 
        border-radius: 4px; cursor: pointer; font-weight: bold;
      ">Close</button>
      <button id="manual-download-retry" style="
        padding: 10px 20px; border: none; background: #2563eb; color: white; 
        border-radius: 4px; cursor: pointer; font-weight: bold;
      ">Try Auto Download Again</button>
    </div>
  `,r.appendChild(n),document.body.appendChild(r),document.getElementById("manual-download-close").onclick=()=>{URL.revokeObjectURL(o),document.body.removeChild(r)},document.getElementById("manual-download-retry").onclick=()=>{URL.revokeObjectURL(o),document.body.removeChild(r),setTimeout(()=>{downloadWithEnhancedFallbacks(a,e,t)},1e3)},document.getElementById("copy-url-btn").onclick=()=>{const i=document.getElementById("manual-download-url");i.select(),i.setSelectionRange(0,99999);try{navigator.clipboard.writeText(o).then(()=>{const s=document.getElementById("copy-url-btn");s.textContent="Copied!",s.style.background="#059669",setTimeout(()=>{s.textContent="Copy",s.style.background="#059669"},2e3)}).catch(()=>{document.execCommand("copy");const s=document.getElementById("copy-url-btn");s.textContent="Copied!",setTimeout(()=>s.textContent="Copy",2e3)})}catch{alert("Copy failed. Please select the URL manually and copy it.")}},r.onclick=i=>{i.target===r&&(URL.revokeObjectURL(o),document.body.removeChild(r))},setTimeout(()=>{r.parentElement&&(URL.revokeObjectURL(o),document.body.removeChild(r))},5*60*1e3)}async function downloadWithEnhancedFallbacks(a,e,t="file"){try{if(await attemptStandardDownload(a,e))return}catch(o){console.warn("Standard download failed:",o)}await downloadViaFileSystemAPI(a,e,t)||downloadViaDataURI(a,e,t)||showManualDownloadOption(a,e,t)}function attemptStandardDownload(a,e){return new Promise(t=>{try{const o=URL.createObjectURL(a),r=document.createElement("a");r.href=o,r.download=e,r.style.display="none",document.body.appendChild(r);const n=setTimeout(()=>{i(),t(!1)},3e3),i=()=>{clearTimeout(n),r.parentElement&&document.body.removeChild(r),setTimeout(()=>URL.revokeObjectURL(o),1e3)};r.onclick=()=>{i(),t(!0)},r.click(),setTimeout(()=>{i(),t(!0)},500)}catch(o){console.error("Standard download error:",o),t(!1)}})}function isTechnicalDiagram(a){const e=document.createElement("canvas"),t=e.getContext("2d");e.width=Math.min(100,a.width),e.height=Math.min(100,a.height),t.drawImage(a,0,0,e.width,e.height);const r=t.getImageData(0,0,e.width,e.height).data,n=new Set;for(let i=0;i<r.length;i+=4){const s=`${r[i]},${r[i+1]},${r[i+2]}`;n.add(s)}return n.size<1e3}function detectTransparency(a,e){const o=e.getImageData(0,0,a.width,a.height).data;for(let r=3;r<o.length;r+=4)if(o[r]<255)return!0;return!1}function calculateOptimizedDimensions(a,e,t){if(a<=t)return{width:a,height:e};const o=e/a;return{width:t,height:Math.round(t*o)}}function getOptimizedFileSettings(a){return a>25*1024*1024?{compressionLevel:"aggressive",imageQuality:.6,imageMaxWidth:300,removeImages:!1,usePNG:!0,message:"Aggressive compression - maintaining technical diagram clarity"}:a>20*1024*1024?{compressionLevel:"high",imageQuality:.65,imageMaxWidth:350,removeImages:!1,usePNG:!0,message:"High compression - preserving technical diagram details"}:a>15*1024*1024?{compressionLevel:"medium",imageQuality:.7,imageMaxWidth:400,removeImages:!1,usePNG:!0,message:"Medium compression - optimal for technical documentation"}:a>10*1024*1024?{compressionLevel:"light",imageQuality:.75,imageMaxWidth:450,removeImages:!1,usePNG:!0,message:"Light compression - excellent technical diagram quality"}:{compressionLevel:"minimal",imageQuality:.8,imageMaxWidth:500,removeImages:!1,usePNG:!0,message:"Minimal compression - maximum technical diagram quality"}}function createOptimizedBlob(a,e){return a}function showFileSizeInfo(a,e){const t=(a.size/1048576).toFixed(2),o=getOptimizedFileSettings(a.size);if(a.size>15*1024*1024){console.warn(`Large file detected (${t} MB) - exceeds typical email limit, may need email-compatible version`);const r=document.createElement("div");r.style.cssText=`
      position: fixed; top: 20px; right: 20px; z-index: 10001;
      background: #fef3c7; border: 1px solid #f59e0b; border-radius: 6px;
      padding: 16px; max-width: 300px; box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    `,r.innerHTML=`
      <div style="display: flex; align-items: center; margin-bottom: 8px;">
        <span style="font-size: 18px; margin-right: 8px;">📁</span>
        <strong style="color: #92400e;">Large Technical PDF</strong>
      </div>
      <p style="margin: 0; color: #a16207; font-size: 14px;">
        PDF is ${t} MB with quality technical images. May exceed some email limits.
      </p>
      <button onclick="this.parentElement.remove()" style="
        margin-top: 8px; padding: 4px 8px; border: none; background: #f59e0b;
        color: white; border-radius: 3px; cursor: pointer; font-size: 12px;
      ">OK</button>
    `,document.body.appendChild(r),setTimeout(()=>{r.parentElement&&r.remove()},8e3)}else a.size>3*1024*1024;return{size:a.size,sizeInMB:parseFloat(t),settings:o}}function showDetailedErrorMessage(a,e="",t=""){console.error("Detailed error:",a);const o={type:identifyErrorType(a),message:a.message||"Unknown error",context:e,filename:t,timestamp:new Date().toISOString(),userAgent:navigator.userAgent},r=document.createElement("div");r.style.cssText=`
    position: fixed; top: 0; left: 0; width: 100%; height: 100%; 
    background: rgba(0,0,0,0.8); z-index: 10002; display: flex; 
    align-items: center; justify-content: center; padding: 20px;
  `;const n=document.createElement("div");return n.style.cssText=`
    background: white; border-radius: 8px; padding: 30px; max-width: 700px; 
    width: 100%; max-height: 80vh; overflow-y: auto;
  `,n.innerHTML=`
    <h3 style="color: #dc2626; margin: 0 0 20px 0; display: flex; align-items: center;">
      <span style="margin-right: 8px;">⚠️</span>
      ${getErrorTitle(o.type)}
    </h3>
    
    <div style="background: #fef2f2; border: 1px solid #fecaca; border-radius: 6px; padding: 16px; margin: 16px 0;">
      <p style="margin: 0; color: #b91c1c; font-weight: bold;">
        ${getUserFriendlyMessage(o.type,e,t)}
      </p>
    </div>
    
    ${getSolutionSteps(o.type)}
    
    <details style="margin: 20px 0; padding: 16px; background: #f9fafb; border-radius: 6px;">
      <summary style="cursor: pointer; font-weight: bold; color: #374151;">
        🔧 Technical Details (for support)
      </summary>
      <div style="margin-top: 12px; font-family: monospace; font-size: 12px; color: #6b7280;">
        <p><strong>Error Type:</strong> ${o.type}</p>
        <p><strong>Message:</strong> ${o.message}</p>
        <p><strong>Context:</strong> ${o.context}</p>
        <p><strong>File:</strong> ${o.filename}</p>
        <p><strong>Time:</strong> ${o.timestamp}</p>
        <p><strong>Browser:</strong> ${getBrowserInfo()}</p>
      </div>
    </details>
    
    <div style="display: flex; gap: 12px; justify-content: flex-end; margin-top: 24px;">
      <button id="error-close" style="
        padding: 10px 20px; border: 1px solid #d1d5db; background: white; 
        border-radius: 4px; cursor: pointer; font-weight: bold;
      ">Close</button>
      <button id="error-retry" style="
        padding: 10px 20px; border: none; background: #2563eb; color: white; 
        border-radius: 4px; cursor: pointer; font-weight: bold;
      ">Try Again</button>
      <button id="error-report" style="
        padding: 10px 20px; border: none; background: #059669; color: white; 
        border-radius: 4px; cursor: pointer; font-weight: bold;
      ">Report Issue</button>
    </div>
  `,r.appendChild(n),document.body.appendChild(r),document.getElementById("error-close").onclick=()=>{document.body.removeChild(r)},document.getElementById("error-retry").onclick=()=>{document.body.removeChild(r),console.log("Retry requested for:",e)},document.getElementById("error-report").onclick=()=>{copyErrorReportToClipboard(o),alert("Error details copied to clipboard. Please send this to support.")},r.onclick=i=>{i.target===r&&document.body.removeChild(r)},o}function identifyErrorType(a){var o,r;const e=((o=a.message)==null?void 0:o.toLowerCase())||"",t=((r=a.stack)==null?void 0:r.toLowerCase())||"";return e.includes("network")||e.includes("fetch")?"network":e.includes("permission")||e.includes("denied")?"permission":e.includes("memory")||e.includes("quota")?"memory":e.includes("blob")||e.includes("url")?"download":e.includes("canvas")||e.includes("image")?"rendering":t.includes("jspdf")||e.includes("pdf")?"pdf":"unknown"}function getErrorTitle(a){return{network:"Network Connection Error",permission:"Permission Required",memory:"Insufficient Memory",download:"Download Failed",rendering:"Display Error",pdf:"PDF Generation Error",unknown:"Unexpected Error"}[a]||"Error Occurred"}function getUserFriendlyMessage(a,e,t){return{network:"Unable to load required resources. Please check your internet connection and try again.",permission:`Browser permission required to save ${t}. Please allow downloads and try again.`,memory:"Not enough memory to process this large file. Try closing other browser tabs or use fewer products.",download:`Failed to download ${t}. This may be due to browser security settings or storage limitations.`,rendering:"Unable to display product images properly. Some images may be missing from the final output.",pdf:`PDF generation failed while ${e}. The file may be too large or contain problematic data.`,unknown:`An unexpected error occurred while ${e}. Please try again or contact support.`}[a]||"An unknown error has occurred."}function getSolutionSteps(a){const e={network:`
      <div style="background: #f0f9ff; border-radius: 6px; padding: 16px; margin: 16px 0;">
        <h4 style="margin: 0 0 12px 0; color: #0369a1;">🌐 Try These Steps:</h4>
        <ol style="margin: 0; color: #0c4a6e;">
          <li>Check your internet connection</li>
          <li>Refresh the page and try again</li>
          <li>Clear browser cache and cookies</li>
          <li>Try using a different browser</li>
        </ol>
      </div>`,permission:`
      <div style="background: #f0f9ff; border-radius: 6px; padding: 16px; margin: 16px 0;">
        <h4 style="margin: 0 0 12px 0; color: #0369a1;">🔐 Enable Downloads:</h4>
        <ol style="margin: 0; color: #0c4a6e;">
          <li>Click the download icon in your browser's address bar</li>
          <li>Select "Always allow downloads from this site"</li>
          <li>Check your browser's download settings</li>
          <li>Ensure sufficient storage space is available</li>
        </ol>
      </div>`,memory:`
      <div style="background: #f0f9ff; border-radius: 6px; padding: 16px; margin: 16px 0;">
        <h4 style="margin: 0 0 12px 0; color: #0369a1;">💾 Free Up Memory:</h4>
        <ol style="margin: 0; color: #0c4a6e;">
          <li>Close other browser tabs and applications</li>
          <li>Reduce the number of products in your selection</li>
          <li>Try generating smaller sections at a time</li>
          <li>Restart your browser if problem persists</li>
        </ol>
      </div>`,download:`
      <div style="background: #f0f9ff; border-radius: 6px; padding: 16px; margin: 16px 0;">
        <h4 style="margin: 0 0 12px 0; color: #0369a1;">📥 Download Troubleshooting:</h4>
        <ol style="margin: 0; color: #0c4a6e;">
          <li>Check your Downloads folder</li>
          <li>Allow pop-ups for this website</li>
          <li>Try right-clicking and "Save as..."</li>
          <li>Use a different browser if issues persist</li>
        </ol>
      </div>`,rendering:`
      <div style="background: #f0f9ff; border-radius: 6px; padding: 16px; margin: 16px 0;">
        <h4 style="margin: 0 0 12px 0; color: #0369a1;">🖼️ Image Display Issues:</h4>
        <ol style="margin: 0; color: #0c4a6e;">
          <li>Check your internet connection</li>
          <li>Refresh the page to reload images</li>
          <li>Images may take time to load on slow connections</li>
          <li>PDF will still generate with available content</li>
        </ol>
      </div>`,pdf:`
      <div style="background: #f0f9ff; border-radius: 6px; padding: 16px; margin: 16px 0;">
        <h4 style="margin: 0 0 12px 0; color: #0369a1;">📄 PDF Generation Issues:</h4>
        <ol style="margin: 0; color: #0c4a6e;">
          <li>Try reducing the number of products</li>
          <li>Check if any product data is corrupted</li>
          <li>Clear browser cache and try again</li>
          <li>Use CSV export as an alternative</li>
        </ol>
      </div>`,unknown:`
      <div style="background: #f0f9ff; border-radius: 6px; padding: 16px; margin: 16px 0;">
        <h4 style="margin: 0 0 12px 0; color: #0369a1;">🔧 General Troubleshooting:</h4>
        <ol style="margin: 0; color: #0c4a6e;">
          <li>Refresh the page and try again</li>
          <li>Clear browser cache and cookies</li>
          <li>Try using a different browser</li>
          <li>Contact support with the technical details above</li>
        </ol>
      </div>`};return e[a]||e.unknown}function getBrowserInfo(){const a=navigator.userAgent;return a.includes("Chrome")?"Chrome":a.includes("Firefox")?"Firefox":a.includes("Safari")?"Safari":a.includes("Edge")?"Edge":a.includes("SamsungBrowser")?"Samsung Internet":"Unknown"}function copyErrorReportToClipboard(a){const e=`
Seima Scanner Error Report
========================
Time: ${a.timestamp}
Error Type: ${a.type}
Message: ${a.message}
Context: ${a.context}
File: ${a.filename}
Browser: ${getBrowserInfo()}
User Agent: ${a.userAgent}
========================
  `.trim();try{navigator.clipboard.writeText(e)}catch(t){console.error("Failed to copy error report:",t)}}let imageOptimizationStats={totalImages:0,optimizedImages:0,failedImages:0,totalSavings:0};function generateImageHash(a){let e=0;if(a.length===0)return e.toString();for(let t=0;t<a.length;t++){const o=a.charCodeAt(t);e=(e<<5)-e+o,e=e&e}return Math.abs(e).toString(36)}function resetImageOptimizationStats(){imageOptimizationStats={totalImages:0,optimizedImages:0,failedImages:0,totalSavings:0}}function showImageOptimizationSummary(a=!1){imageOptimizationStats.totalImages>0}function showEmailCompatibleOption(a,e){const t=document.createElement("div");t.style.cssText=`
    position: fixed; top: 0; left: 0; width: 100%; height: 100%; 
    background: rgba(0,0,0,0.8); z-index: 10001; display: flex; 
    align-items: center; justify-content: center; padding: 20px;
  `;const o=document.createElement("div");o.style.cssText=`
    background: white; border-radius: 8px; padding: 30px; max-width: 500px; 
    width: 100%; max-height: 80vh; overflow-y: auto;
  `,o.innerHTML=`
    <h3 style="color: #2563eb; margin: 0 0 20px 0; display: flex; align-items: center;">
      <span style="margin-right: 8px;">📧</span>
      Email-Compatible Version Available
    </h3>
    <p style="margin: 0 0 16px 0; color: #374151;">
      Your PDF is large (${(a.pdfSize/1024/1024).toFixed(1)} MB). 
      We can create a smaller, email-friendly version with optimized images.
    </p>
    
    <div style="background: #f3f4f6; padding: 16px; border-radius: 6px; margin: 16px 0;">
      <h4 style="margin: 0 0 12px 0; color: #1f2937;">Email-Compatible Features:</h4>
      <ul style="margin: 0; padding-left: 20px; color: #4b5563; font-size: 14px;">
        <li>Reduced image quality for smaller file size</li>
        <li>Optimized for email attachment limits</li>
        <li>Faster email delivery</li>
        <li>Better compatibility across email clients</li>
      </ul>
    </div>
    
    <div style="display: flex; gap: 12px; justify-content: flex-end; margin-top: 24px;">
      <button id="email-regular-version" style="
        padding: 10px 20px; border: 1px solid #d1d5db; background: white; 
        border-radius: 4px; cursor: pointer; font-weight: bold;
      ">Send Current Version</button>
      <button id="email-optimized-version" style="
        padding: 10px 20px; border: none; background: #2563eb; color: white; 
        border-radius: 4px; cursor: pointer; font-weight: bold;
      ">Create Email Version</button>
    </div>
  `,t.appendChild(o),document.body.appendChild(t),document.getElementById("email-regular-version").onclick=()=>{t.remove();const r=new CustomEvent("sendEmailRegular",{detail:{userDetails:a,originalFilename:e}});window.dispatchEvent(r)},document.getElementById("email-optimized-version").onclick=()=>{t.remove(),a.emailCompatible=!0,showPdfFormScreen$1(a)}}const TIP_TAIL_STORAGE_KEY$2="tipTailSettings";async function mergeWithTipTail(a){let e={};if(window._currentTipTailSettings)e=window._currentTipTailSettings,window._currentTipTailSettings=null;else try{e=JSON.parse(localStorage.getItem(TIP_TAIL_STORAGE_KEY$2)||"{}")}catch(c){console.warn("Could not read tipTailSettings from localStorage:",c)}const{tipAsset:t,tipUpload:o,tailAsset:r,tailUpload:n}=e;if(!t&&!o&&!r&&!n)return a;async function i(c,l,d="file"){if(l&&c)try{const u=atob(c),p=new Uint8Array(u.length);for(let h=0;h<u.length;h++)p[h]=u.charCodeAt(h);return p.buffer}catch(u){return console.warn(`⚠️ Error converting base64 to ArrayBuffer for ${d}:`,u),null}if(c)try{const u=await fetch(c);return u.ok?await u.arrayBuffer():(console.warn(`⚠️ Failed to fetch ${d} file: ${c} (${u.status} ${u.statusText})`),null)}catch(u){return console.warn(`⚠️ Error fetching ${d} file: ${c}`,u),null}return null}async function s(c,l="file",d="unknown"){if(!c)return null;try{return await PDFLib.PDFDocument.load(c)}catch(u){return console.warn(`⚠️ Failed to parse ${l} PDF: ${d}`,u),null}}try{const c=await a.arrayBuffer(),l=await PDFLib.PDFDocument.load(c),d=await PDFLib.PDFDocument.create(),[u]=await d.copyPages(l,[0]);d.addPage(u);let p=null,h=null;if(o){const y=await i(o,!0,"tip");y?(p=await s(y,"tip","uploaded file"),p||(h="The uploaded tip file is not a valid PDF or could not be loaded.")):h="Failed to process the uploaded tip file."}else if(t){const y=await i(t,!1,"tip");y?(p=await s(y,"tip",t),p||(h=`The tip file "${t.split("/").pop()}" is not a valid PDF or could not be loaded.`)):h=`The tip file "${t.split("/").pop()}" could not be found or accessed.`}if(p){const y=Array.from({length:p.getPageCount()},(f,S)=>S);(await d.copyPages(p,y)).forEach(f=>d.addPage(f))}else h&&(console.warn(`⚠️ Tip file error: ${h}`),showTipTailWarning("Tip File Issue",h));if(l.getPageCount()>1){const y=Array.from({length:l.getPageCount()-1},(f,S)=>S+1);(await d.copyPages(l,y)).forEach(f=>d.addPage(f))}let m=null,g=null;if(n){const y=await i(n,!0,"tail");y?(m=await s(y,"tail","uploaded file"),m||(g="The uploaded tail file is not a valid PDF or could not be loaded.")):g="Failed to process the uploaded tail file."}else if(r){const y=await i(r,!1,"tail");y?(m=await s(y,"tail",r),m||(g=`The tail file "${r.split("/").pop()}" is not a valid PDF or could not be loaded.`)):g=`The tail file "${r.split("/").pop()}" could not be found or accessed.`}if(m){const y=Array.from({length:m.getPageCount()},(f,S)=>S);(await d.copyPages(m,y)).forEach(f=>d.addPage(f))}else g&&(console.warn(`⚠️ Tail file error: ${g}`),showTipTailWarning("Tail File Issue",g));const w=await d.save({useObjectStreams:!0,addDefaultPage:!1,objectsPerTick:20});return new Blob([w],{type:"application/pdf"})}catch(c){return console.error("❌ Error during PDF merging:",c),showTipTailWarning("PDF Merging Error","An error occurred while merging the PDF files. The main PDF will be generated without tip/tail content."),a}}function showTipTailWarning(a,e){const t=document.createElement("div");t.style.cssText=`
    position: fixed; top: 20px; right: 20px; z-index: 10002;
    background: #fef3c7; border: 1px solid #f59e0b; border-radius: 8px;
    padding: 16px; max-width: 400px; box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  `,t.innerHTML=`
    <div style="display: flex; align-items: flex-start; gap: 12px;">
      <span style="font-size: 20px;">⚠️</span>
      <div style="flex: 1;">
        <div style="font-weight: 600; color: #92400e; margin-bottom: 4px;">${a}</div>
        <div style="color: #78350f; font-size: 14px; line-height: 1.4;">${e}</div>
        <div style="margin-top: 8px; font-size: 12px; color: #92400e;">
          The PDF will be generated without this content.
        </div>
      </div>
      <button onclick="this.parentElement.parentElement.remove()" style="
        background: none; border: none; color: #92400e; cursor: pointer;
        font-size: 18px; padding: 0; width: 20px; height: 20px;
      ">×</button>
    </div>
  `,document.body.appendChild(t),setTimeout(()=>{t.parentElement&&t.remove()},8e3)}class FileImportManager{constructor(){this.selectedFile=null,this.importMode="append",this.processedData=[],this.notFoundProducts=[],this.importedMetadata=null}init(){this.setupEventHandlers(),console.log("FileImportManager initialized")}setupEventHandlers(){const e=document.getElementById("import-file-btn");e&&(e.onclick=()=>this.showImportModal());const t=document.getElementById("file-drop-zone"),o=document.getElementById("file-input");t&&o&&(t.onclick=()=>o.click(),t.ondragover=d=>{d.preventDefault(),t.style.borderColor="#059669",t.style.background="#f0fdf4"},t.ondragleave=d=>{d.preventDefault(),t.style.borderColor="#ccc",t.style.background="#fafafa"},t.ondrop=d=>{d.preventDefault(),t.style.borderColor="#ccc",t.style.background="#fafafa";const u=d.dataTransfer.files;u.length>0&&this.handleFileSelection(u[0])},o.onchange=d=>{d.target.files.length>0&&this.handleFileSelection(d.target.files[0])});const r=document.getElementById("import-cancel-btn"),n=document.getElementById("import-next-btn"),i=document.getElementById("import-back-btn"),s=document.getElementById("import-process-btn"),c=document.getElementById("import-close-btn");r&&(r.onclick=()=>this.closeModal()),n&&(n.onclick=()=>this.showImportModeStep()),i&&(i.onclick=()=>this.showFileSelectionStep()),s&&(s.onclick=()=>this.processImport()),c&&(c.onclick=()=>this.closeModal()),document.querySelectorAll('input[name="import-mode"]').forEach(d=>{d.onchange=()=>{this.importMode=d.value;const u=document.getElementById("override-warning");u&&(u.style.display=this.importMode==="override"?"block":"none")}})}showImportModal(){const e=document.getElementById("file-import-modal");e&&(e.style.display="flex",this.resetModal())}closeModal(){const e=document.getElementById("file-import-modal");e&&(e.style.display="none",this.resetModal())}resetModal(){this.selectedFile=null,this.importMode="append",this.processedData=[],this.notFoundProducts=[],this.showFileSelectionStep();const e=document.getElementById("file-input");e&&(e.value="");const t=document.getElementById("selected-file-info");t&&(t.style.display="none");const o=document.getElementById("import-next-btn");o&&(o.disabled=!0);const r=document.querySelector('input[name="import-mode"][value="append"]');r&&(r.checked=!0);const n=document.getElementById("override-warning");n&&(n.style.display="none")}showFileSelectionStep(){this.hideAllSteps();const e=document.getElementById("file-selection-step");e&&(e.style.display="block")}showImportModeStep(){this.hideAllSteps();const e=document.getElementById("import-mode-step");e&&(e.style.display="block")}showProcessingStep(){this.hideAllSteps();const e=document.getElementById("import-processing-step");e&&(e.style.display="block")}showResultsStep(){this.hideAllSteps();const e=document.getElementById("import-results-step");e&&(e.style.display="block")}hideAllSteps(){["file-selection-step","import-mode-step","import-processing-step","import-results-step"].forEach(t=>{const o=document.getElementById(t);o&&(o.style.display="none")})}handleFileSelection(e){console.log("File selected:",e.name,e.type,e.size);const t=config.get("import.acceptedTypes",[".csv",".xlsx",".xls",".json"]),o=["text/csv","application/vnd.ms-excel","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","application/json"],r=e.name.toLowerCase(),n=t.some(d=>r.endsWith(d.toLowerCase())),i=config.get("import.maxFileSize",10*1024*1024);if(e.size>i){const d=Math.round(i/1048576);alert(`File is too large. Maximum size is ${d}MB.`);return}if(!o.includes(e.type)&&!n){alert(`Please select a valid file. Accepted formats: ${t.join(", ")}`);return}this.selectedFile=e;const s=document.getElementById("selected-file-info"),c=document.getElementById("selected-file-name"),l=document.getElementById("import-next-btn");s&&c&&l&&(c.textContent=e.name,s.style.display="block",l.disabled=!1)}async processImport(){if(!this.selectedFile){alert("No file selected");return}console.log("Starting import process with mode:",this.importMode),this.showProcessingStep();try{let e;const t=this.selectedFile.name.toLowerCase();if(t.endsWith(".csv"))e=await this.parseCSV(this.selectedFile);else if(t.endsWith(".json"))e=await this.parseJSON(this.selectedFile);else if(t.endsWith(".xlsx")||t.endsWith(".xls"))e=await this.parseExcel(this.selectedFile);else throw new Error("Unsupported file format");console.log("Parsed data:",e),this.importMode==="override"&&(StorageManager.clearAllSelections(),console.log("Cleared all existing data for override mode")),await this.processDataChunked(e),this.showImportResults()}catch(e){console.error("Import failed:",e),alert(`Import failed: ${e.message}`),this.showFileSelectionStep()}}async parseCSV(e){if(typeof Papa>"u")try{await Utils.loadScript("https://cdn.jsdelivr.net/npm/papaparse@5.4.1/papaparse.min.js")}catch{throw new Error("Failed to load Papa Parse library")}return new Promise((t,o)=>{if(typeof Papa>"u"){o(new Error("Papa Parse library not loaded"));return}this.doPapaParseCSV(e,t,o)})}doPapaParseCSV(e,t,o){Papa.parse(e,{header:!0,skipEmptyLines:!1,complete:r=>{console.log("CSV parsing complete:",r);const{data:n,metadata:i}=this.extractSeimaMetadata(r.data);i&&(console.log("Extracted Seima Scanner metadata from CSV:",i),this.importedMetadata=i,this.populateCustomerInfoFromMetadata(i)),t(n)},error:r=>{console.error("CSV parsing error:",r),o(r)}})}extractSeimaMetadata(e){if(!Array.isArray(e)||e.length===0)return{data:e,metadata:null};let t=-1;for(let n=e.length-1;n>=0;n--){const i=e[n];if(Object.values(i).some(c=>c&&c.toString().includes("---METADATA---"))){t=n;break}}if(t===-1)return{data:e.filter(n=>this.isValidProductRow(n)),metadata:null};const o=e.slice(0,t).filter(n=>this.isValidProductRow(n));let r=null;if(t+1<e.length){const n=e[t+1],i=Object.values(n).filter(s=>s!=null&&s!=="");for(const s of i)if(s&&typeof s=="string"&&s.startsWith("{"))try{r=JSON.parse(s),console.log("Successfully parsed Seima metadata JSON from single cell");break}catch{console.log("Single cell JSON parse failed, trying to reconstruct from split cells...")}if(!r&&i.length>0){let s=i.findIndex(c=>c&&typeof c=="string"&&(c.startsWith("{")||c.startsWith('"{')));if(s!==-1){let c=i.slice(s).join(",");c=c.replace(/^"|"$/g,"");try{r=JSON.parse(c),console.log("Successfully parsed Seima metadata JSON from reconstructed cells")}catch(l){console.warn("Failed to parse reconstructed metadata JSON:",l),console.log("Reconstructed string was:",c);const d=c.match(/\{[^{}]*("_metadata"|"customer"|"project")[^]*\}/);if(d)try{r=JSON.parse(d[0]),console.log("Successfully parsed Seima metadata JSON using regex extraction")}catch(u){console.warn("Regex extraction also failed:",u)}}}}}return{data:o,metadata:r}}isValidProductRow(e){if(!e)return!1;const t=Object.values(e);return!(t.every(o=>!o||o.toString().trim()==="")||t.some(o=>o&&o.toString().includes("---METADATA---"))||t.some(o=>o&&o.toString().startsWith('{"_metadata"')))}populateCustomerInfoFromMetadata(e){var r,n,i,s,c,l;if(!e)return;const t=Utils.getStorageItem("pdfFormSettings",{}),o={...t,name:((r=e.customer)==null?void 0:r.name)||t.name||"",email:((n=e.customer)==null?void 0:n.email)||t.email||"",telephone:((i=e.customer)==null?void 0:i.phone)||t.telephone||"",project:((s=e.project)==null?void 0:s.name)||t.project||"",address:((c=e.project)==null?void 0:c.address)||t.address||"",projectNotes:((l=e.project)==null?void 0:l.notes)||t.projectNotes||""};e.staff&&Utils.setStorageItem("staffContact",{name:e.staff.name||"",email:e.staff.email||"",mobile:e.staff.mobile||""}),Utils.setStorageItem("pdfFormSettings",o),console.log("Customer information populated from Seima CSV metadata:",o)}async parseExcel(e){try{typeof XLSX>"u"&&await Utils.loadScript("https://cdn.jsdelivr.net/npm/xlsx@0.18.5/dist/xlsx.full.min.js")}catch{throw new Error("Failed to load XLSX library")}return new Promise((t,o)=>{if(typeof XLSX>"u"){o(new Error("XLSX library not loaded"));return}const r=new FileReader;r.onload=n=>{try{const i=new Uint8Array(n.target.result),s=XLSX.read(i,{type:"array"}),c=s.SheetNames[0],l=s.Sheets[c],d=XLSX.utils.sheet_to_json(l,{header:1,defval:""});if(d.length===0){o(new Error("Excel file is empty"));return}const u=d[0],h=d.slice(1).map(w=>{const y={};return u.forEach((b,f)=>{y[b]=w[f]||""}),y});console.log("Excel parsing complete:",h);const{data:m,metadata:g}=this.extractSeimaMetadata(h);g&&(console.log("Extracted Seima Scanner metadata from Excel:",g),this.importedMetadata=g,this.populateCustomerInfoFromMetadata(g)),t(m)}catch(i){console.error("Excel parsing error:",i),o(i)}},r.onerror=()=>{o(new Error("Failed to read Excel file"))},r.readAsArrayBuffer(e)})}async parseJSON(e){return new Promise((t,o)=>{const r=new FileReader;r.onload=n=>{try{let i=JSON.parse(n.target.result);console.log("JSON parsing complete, raw data:",i);let s=[];if(Array.isArray(i))if(i.length>0&&i[0].productsJson)for(const l of i){const d=this.extractProductsFromRecord(l);s.push(...d)}else s=i;else i&&typeof i=="object"&&(s=this.extractProductsFromRecord(i));if(s.length===0){o(new Error("No products found in JSON file. Expected Seima Scanner export format."));return}const c=s.map(l=>({Code:l.orderCode||l.OrderCode||l.code||l.Code||"",Description:l.description||l.Description||l.productName||l["Product Name"]||"",Quantity:l.quantity||l.Quantity||1,Room:l.room||l.Room||"Blank",Notes:l.notes||l.Notes||"","Price ea inc GST":l.priceIncGst||l.PriceIncGst||l.price||l.Price||"",_originalItem:l}));console.log("Normalized JSON data:",c),t(c)}catch(i){console.error("JSON parsing error:",i),o(new Error("Invalid JSON format: "+i.message))}},r.onerror=()=>{o(new Error("Failed to read JSON file"))},r.readAsText(e)})}extractProductsFromRecord(e){let t=e.productsJson||e.products||[];if(typeof t=="string")try{t=JSON.parse(t)}catch(o){return console.warn("Failed to parse productsJson string:",o),[]}return Array.isArray(t)?t:[]}async processDataChunked(e){if(e.length===0)throw new Error("No data to process");const t=this.detectColumns(e[0]);if(console.log("Detected column mapping:",t),t.productsJson){console.log("Detected Seima Scanner selection record format with Products JSON column"),await this.processSeimaSelectionRecords(e,t);return}if(!t.productCode)throw new Error('Could not find Product Code column. Please ensure your file has a column named like "Order Code", "Product Code", "SKU", or a "Products JSON" column for Seima Scanner exports.');this.processedData=[],this.notFoundProducts=[];const o=50;for(let r=0;r<e.length;r+=o){const n=e.slice(r,r+o);await this.processChunk(n,t),await new Promise(i=>setTimeout(i,10))}console.log("Processing complete. Processed:",this.processedData.length,"Not found:",this.notFoundProducts.length)}async processSeimaSelectionRecords(e,t){this.processedData=[],this.notFoundProducts=[],this.importedMetadata=null;for(const o of e){this.importedMetadata||(this.importedMetadata=this.extractMetadataFromRow(o,t),console.log("Extracted metadata from selection record:",this.importedMetadata),this.populateCustomerInfo(this.importedMetadata));const r=o[t.productsJson];if(!r){console.log("Skipping row - no Products JSON data");continue}let n=[];try{typeof r=="string"?n=JSON.parse(r):Array.isArray(r)&&(n=r)}catch(i){console.warn("Failed to parse Products JSON:",i,r);continue}if(!Array.isArray(n)||n.length===0){console.log("Skipping row - Products JSON is empty or invalid");continue}console.log(`Processing ${n.length} products from selection record`);for(const i of n)await this.processSeimaProduct(i)}console.log("Seima Scanner import complete. Processed:",this.processedData.length,"Not found:",this.notFoundProducts.length)}extractMetadataFromRow(e,t){return{customerName:e[t.customerName]||"",customerEmail:e[t.customerEmail]||"",customerPhone:e[t.customerPhone]||"",customerAddress:e[t.customerAddress]||"",customerProject:e[t.customerProject]||"",customerType:e[t.customerType]||"",builderName:e[t.builderName]||"",merchantProjectName:e[t.merchantProjectName]||"",projectNotes:e[t.projectNotes]||"",staffName:e[t.staffName]||"",staffEmail:e[t.staffEmail]||"",date:e[t.date]||"",time:e[t.time]||"",roomsList:e[t.roomsList]||"",estimateValue:e[t.estimateValue]||""}}async processSeimaProduct(e){const t=String(e.orderCode||e.OrderCode||e.code||"").trim(),o=e.description||e.Description||e.productName||"",r=parseInt(e.quantity||e.Quantity)||1,n=String(e.room||e.Room||"Blank").trim(),i=String(e.notes||e.Notes||"").trim(),s=e.priceIncGst||e.PriceIncGst||e.price||"";n&&n!=="Blank"&&this.ensureRoomExists(n);const c=this.validateProductCode(t);if(!c.isValid){console.log("Excluding product:",t,"-",c.reason);return}let l=0,d=0;if(s){const h=String(s).replace(/[^\d.-]/g,"");l=parseFloat(h)||0,d=l/1.1}console.log("Processing Seima product:",{productCode:t,productName:o,quantity:r,priceIncGst:l,room:n,notes:i});const u=await this.findProductInCatalog(t,o),p=this.createProductObject({productCode:t,productName:o,priceExGst:d,priceIncGst:l,catalogProduct:u});u||this.notFoundProducts.push({orderCode:t,productName:o||"Unknown Product",quantity:r,price:l>0?l.toFixed(2):"N/A"}),StorageManager.addProductToSelection(p,i,n,r),this.processedData.push({...p,quantity:r,notes:i,room:n})}detectColumns(e){const t=Object.keys(e);console.log("Available headers:",t);const o=config.get("import.columnPatterns",{productCode:["code","ordercode","productcode","sku","order code","product code"],productName:["product name","description","name"],quantity:["quantity","qty","min order quantity","orderquantity"],priceIncGst:["price ea inc gst","price inc gst","priceincgst","rrp inc gst"],priceExGst:["price per unit","price ex gst","rrp ex gst"],room:["room","location"],notes:["notes","note","comments","comment"],productsJson:["products json","productsjson"],customerName:["customer name","customername"],customerEmail:["customer email","customeremail"],customerPhone:["customer phone","customerphone"],customerAddress:["customer address","customeraddress"],customerProject:["customer project","customerproject"]}),r=this.findColumnByPatterns(t,o.productsJson||["products json","productsjson"]);if(r)return console.log("Detected Seima Scanner selection record format with Products JSON column"),{productsJson:r,date:this.findColumnByPatterns(t,["date"]),time:this.findColumnByPatterns(t,["time"]),staffName:this.findColumnByPatterns(t,["staff name","staffname"]),staffEmail:this.findColumnByPatterns(t,["staff email","staffemail"]),customerName:this.findColumnByPatterns(t,o.customerName||["customer name","customername"]),customerEmail:this.findColumnByPatterns(t,o.customerEmail||["customer email","customeremail"]),customerPhone:this.findColumnByPatterns(t,o.customerPhone||["customer phone","customerphone"]),customerAddress:this.findColumnByPatterns(t,o.customerAddress||["customer address","customeraddress"]),customerProject:this.findColumnByPatterns(t,o.customerProject||["customer project","customerproject"]),customerType:this.findColumnByPatterns(t,["customer type","customertype"]),builderName:this.findColumnByPatterns(t,["builder name","buildername"]),merchantProjectName:this.findColumnByPatterns(t,["merchant project name","merchantprojectname"]),projectNotes:this.findColumnByPatterns(t,["project notes","projectnotes","about notes"]),roomsList:this.findColumnByPatterns(t,["rooms list","roomslist","rooms"]),estimateValue:this.findColumnByPatterns(t,["estimate value","estimatevalue"])};const n=t.some(c=>c.toLowerCase()==="code")&&!t.some(c=>c.toLowerCase().includes("ordercode"));console.log("Detected Seima Scanner CSV format:",n);const i=this.findColumnByPatterns(t,o.priceIncGst||["price ea inc gst","price inc gst","priceincgst","rrp inc gst"]),s=this.findColumnByPatterns(t,o.priceExGst||["price per unit","price ex gst","rrp ex gst"]);return{productCode:this.findColumnByPatterns(t,o.productCode||["code","ordercode","productcode","sku"]),productName:this.findColumnByPatterns(t,o.productName||["product name","description","name"]),quantity:this.findColumnByPatterns(t,o.quantity||["quantity","qty"]),price:i||s,room:this.findColumnByPatterns(t,o.room||["room","location"]),notes:this.findColumnByPatterns(t,o.notes||["notes","note","comments"]),priceIncludesGst:n||!!i||t.some(c=>c.toLowerCase().includes("inc gst"))}}findColumnByPatterns(e,t){for(const o of t){const r=e.find(n=>n.toLowerCase().includes(o.toLowerCase()));if(r)return r}return null}async processChunk(e,t){for(const o of e)await this.processRow(o,t)}async processRow(e,t){const o=t.productCode?e[t.productCode]:"",r=t.productName?e[t.productName]:"",n=t.quantity?e[t.quantity]:"1",i=t.price?e[t.price]:"",s=t.room?String(e[t.room]||"").trim():"",c=t.notes?String(e[t.notes]||"").trim():"",l=String(o).trim(),d=this.validateProductCode(l);if(!d.isValid){console.log("Excluding row:",l,"-",d.reason);return}const u=parseInt(n)||1;let p=0,h=0;if(i){const y=String(i).replace(/[^\d.-]/g,""),b=parseFloat(y)||0;b>0&&(t.priceIncludesGst?(p=b,h=b/1.1):(h=b,p=b*1.1))}const m=s||"Blank";m!=="Blank"&&this.ensureRoomExists(m),console.log("Processing product:",{productCode:l,productName:r,quantity:u,priceIncGst:p,room:m,notes:c});const g=await this.findProductInCatalog(l,r),w=this.createProductObject({productCode:l,productName:r,priceExGst:h,priceIncGst:p,catalogProduct:g});g?console.log("Found product in catalog:",l):(console.log("Product not found in catalog:",l),this.notFoundProducts.push({orderCode:l,productName:r||"Unknown Product",quantity:u,price:p>0?p.toFixed(2):"N/A"})),StorageManager.addProductToSelection(w,c,m,u),this.processedData.push({...w,quantity:u,notes:c,room:m})}async findProductInCatalog(e,t){const o=dataLayer.getAllProducts();if(e){const r=String(e).trim(),n=o.find(i=>[i.OrderCode,i.orderCode,i["Order Code"],i.order_code].some(c=>c&&String(c).trim().toLowerCase()===r.toLowerCase()));if(n)return console.log("Found product in catalog by code:",r,n),n}if(t){const r=String(t).trim().toLowerCase(),n=o.find(i=>[i.productName,i["Product Name"],i.description,i.Description,i.LongDescription].some(c=>c&&String(c).trim().toLowerCase()===r));if(n)return console.log("Found product in catalog by name:",t,n),n}return console.log("Product not found in catalog:",{productCode:e,productName:t}),null}showImportResults(){this.showResultsStep();const e=document.getElementById("import-summary"),t=document.getElementById("not-found-products"),o=document.getElementById("not-found-list");if(e&&(e.innerHTML=`
        <p><strong>Total processed:</strong> ${this.processedData.length}</p>
        <p><strong>Products added:</strong> ${this.processedData.length}</p>
        <p style="color: #059669;"><strong>All products imported successfully!</strong></p>
      `),t&&o)if(this.notFoundProducts.length>0){const n=t.querySelector("h5");n&&(n.textContent="Products added with placeholder information:",n.style.color="#2563eb");const i=this.notFoundProducts.map(s=>`<li><strong>${s.orderCode}</strong> - ${s.productName} (Qty: ${s.quantity}, Price: ${s.price})</li>`).join("");o.innerHTML=`<ul>${i}</ul>`,t.style.display="block",t.style.borderColor="#2563eb",t.style.backgroundColor="#eff6ff"}else t.style.display="none";const r=document.getElementById("import-close-btn");r&&this.processedData.length>0&&(r.textContent="View Products",r.onclick=()=>{window.location.reload()}),console.log("Import results displayed")}populateCustomerInfo(e){if(!e)return;const t=Utils.getStorageItem("pdfFormSettings",{}),o={...t,name:e.customerName||t.name||"",project:e.customerProject||t.project||"",address:e.customerAddress||t.address||"",email:e.customerEmail||t.email||"",telephone:e.customerPhone||t.telephone||""};Utils.setStorageItem("pdfFormSettings",o),console.log("Customer information populated from import:",o)}validateProductCode(e){const t=String(e||"").trim();if(!t||t.toLowerCase()==="n/a")return{isValid:!1,reason:"Empty or N/A code"};const o=config.get("import.productCodeValidation",{regex:"^\\d{6}$",allowAnyNonEmpty:!1,skipValidation:!1});if(o.skipValidation)return{isValid:!0,reason:"Validation skipped"};try{if(new RegExp(o.regex).test(t))return{isValid:!0,reason:"Matches pattern"}}catch(r){console.warn("Invalid product code regex pattern:",o.regex,r)}return o.allowAnyNonEmpty?{isValid:!0,reason:"Non-empty code accepted"}:{isValid:!1,reason:`Does not match pattern: ${o.regex}`}}createProductObject({productCode:e,productName:t,priceExGst:o,priceIncGst:r,catalogProduct:n}){return{OrderCode:e,orderCode:e,productName:t||(n?n.productName:"Unknown Product"),"Product Name":t||(n?n["Product Name"]:"Unknown Product"),Description:t||(n?n.Description:"Unknown Product"),description:t||(n?n.description:"Unknown Product"),LongDescription:n?n.LongDescription||n["Long Description"]:"","Long Description":n?n.LongDescription||n["Long Description"]:"",price:o>0?o.toFixed(2):n?n.price:"0.00",Image_URL:n?n.Image_URL||n.imageUrl:"assets/no-image.png",imageUrl:n?n.Image_URL||n.imageUrl:"assets/no-image.png",Website_URL:n?n.Website_URL||n.websiteUrl:"",websiteUrl:n?n.Website_URL||n.websiteUrl:"",Diagram_URL:n?n.Diagram_URL||n.diagramUrl:"",diagramUrl:n?n.Diagram_URL||n.diagramUrl:"",Datasheet_URL:n?n.Datasheet_URL||n.datasheetUrl:"",datasheetUrl:n?n.Datasheet_URL||n.datasheetUrl:"",RRP_EXGST:o>0?o.toFixed(2):n?n.RRP_EXGST||n.rrpExGst:"0.00",rrpExGst:o>0?o.toFixed(2):n?n.RRP_EXGST||n.rrpExGst:"0.00",RRP_INCGST:r>0?r.toFixed(2):n?n.RRP_INCGST||n.rrpIncGst:"0.00",rrpIncGst:r>0?r.toFixed(2):n?n.RRP_INCGST||n.rrpIncGst:"0.00"}}ensureRoomExists(e){!e||e==="Blank"||config.get("rooms.predefined",[]).some(i=>i.name===e)||StorageManager.getCustomRooms().some(i=>i.name===e)||(console.log("Adding imported room as custom room:",e),StorageManager.addCustomRoom(e))}}const SESSION_KEY="authSession",SESSION_DURATION_DEFAULT=7*24*60*60*1e3,SESSION_DURATION_REMEMBER=30*24*60*60*1e3;class AuthService{constructor(){var e;this.baseUrl=(e=CONFIG$1.PRESENTATION_RECORDING)==null?void 0:e.GOOGLE_SHEETS_URL,this.session=null,this.onAuthChange=null,this.loadSession()}loadSession(){var e;try{const t=localStorage.getItem(SESSION_KEY);if(t){const o=JSON.parse(t);o.expiry&&Date.now()<o.expiry?(this.session=o,console.log("✅ Session restored for:",(e=o.user)==null?void 0:e.email)):(console.log("⏰ Session expired, clearing..."),this.clearSession())}}catch(t){console.warn("Failed to load session:",t),this.clearSession()}}saveSession(e){try{localStorage.setItem(SESSION_KEY,JSON.stringify(e)),this.session=e}catch(t){console.error("Failed to save session:",t)}}clearSession(){localStorage.removeItem(SESSION_KEY),this.session=null,this.onAuthChange&&this.onAuthChange(null)}isLoggedIn(){return this.session!==null&&this.session.user!==null}getCurrentUser(){var e;return((e=this.session)==null?void 0:e.user)||null}getSession(){return this.session}async apiRequest(e,t){if(!this.baseUrl)throw new Error("Google Sheets URL not configured");const o=new URLSearchParams;o.append("action",e);for(const[n,i]of Object.entries(t))i!=null&&o.append(n,typeof i=="object"?JSON.stringify(i):i);const r=await fetch(this.baseUrl,{method:"POST",body:o});if(!r.ok)throw new Error(`HTTP ${r.status}: ${r.statusText}`);return await r.json()}validatePassword(e){return!e||e.length<8?{valid:!1,error:"Password must be at least 8 characters"}:/\d/.test(e)?{valid:!0}:{valid:!1,error:"Password must contain at least one number"}}validateEmail(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}async register(e,t,o,r="",n=""){if(!e||!this.validateEmail(e))return{success:!1,error:"Please enter a valid email address"};const i=this.validatePassword(t);if(!i.valid)return{success:!1,error:i.error};if(!o||o.trim().length<2)return{success:!1,error:"Please enter your name"};try{return await this.apiRequest("userRegister",{email:e.trim().toLowerCase(),password:t,name:o.trim(),position:r.trim(),phone:n.trim()})}catch(s){return console.error("Registration error:",s),{success:!1,error:"Registration failed. Please try again."}}}async login(e,t,o=!1){if(!e||!t)return{success:!1,error:"Please enter email and password"};try{const r=await this.apiRequest("userLogin",{email:e.trim().toLowerCase(),password:t});if(r.success){const n=Date.now()+(o?SESSION_DURATION_REMEMBER:SESSION_DURATION_DEFAULT),i={user:r.user,token:r.sessionToken,expiry:n,rememberMe:o};this.saveSession(i),this.onAuthChange&&this.onAuthChange(r.user),console.log("✅ Logged in as:",r.user.email)}return r}catch(r){return console.error("Login error:",r),{success:!1,error:"Login failed. Please try again."}}}logout(){this.clearSession(),console.log("👋 Logged out")}async requestPasswordReset(e){if(!e||!this.validateEmail(e))return{success:!1,error:"Please enter a valid email address"};try{const t=await this.apiRequest("userRequestPasswordReset",{email:e.trim().toLowerCase()});return t.success&&t.resetToken&&await this.sendPasswordResetEmail(t.userEmail,t.userName,t.resetToken),{success:!0,message:"If this email exists, a reset code has been sent"}}catch(t){return console.error("Password reset request error:",t),{success:!1,error:"Failed to request password reset. Please try again."}}}async sendPasswordResetEmail(e,t,o){var r,n;try{window.emailjs||await this.loadEmailJS(),window.emailjs.init({publicKey:CONFIG$1.EMAIL.PUBLIC_KEY});const i={email:e,user_name:t||"User",reset_code:o,current_year:new Date().getFullYear().toString()},s=((r=CONFIG$1.EMAIL)==null?void 0:r.PASSWORD_RESET_TEMPLATE_ID)||((n=CONFIG$1.EMAIL)==null?void 0:n.TEMPLATE_ID);console.log("📧 Sending password reset email with:",{serviceId:CONFIG$1.EMAIL.SERVICE_ID,templateId:s,publicKey:CONFIG$1.EMAIL.PUBLIC_KEY,to:e});const c=await window.emailjs.send(CONFIG$1.EMAIL.SERVICE_ID,s,i,CONFIG$1.EMAIL.PUBLIC_KEY);console.log("✅ Password reset email sent to:",e,c)}catch(i){console.error("Failed to send password reset email:",i)}}async loadEmailJS(){return new Promise((e,t)=>{if(window.emailjs){e();return}const o=document.createElement("script");o.src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js",o.onload=()=>{e()},o.onerror=t,document.head.appendChild(o)})}async resetPassword(e,t,o){if(!e||!t||!o)return{success:!1,error:"All fields are required"};const r=this.validatePassword(o);if(!r.valid)return{success:!1,error:r.error};try{return await this.apiRequest("userResetPassword",{email:e.trim().toLowerCase(),token:t.trim().toUpperCase(),newPassword:o})}catch(n){return console.error("Password reset error:",n),{success:!1,error:"Failed to reset password. Please try again."}}}async changePassword(e,t){if(!this.isLoggedIn())return{success:!1,error:"Please log in first"};const o=this.validatePassword(t);if(!o.valid)return{success:!1,error:o.error};try{return await this.apiRequest("userChangePassword",{email:this.session.user.email,currentPassword:e,newPassword:t})}catch(r){return console.error("Change password error:",r),{success:!1,error:"Failed to change password. Please try again."}}}async updateProfile(e){if(!this.isLoggedIn())return{success:!1,error:"Please log in first"};try{const t=await this.apiRequest("userUpdateProfile",{email:this.session.user.email,updates:JSON.stringify(e)});return t.success&&t.user&&(this.session.user=t.user,this.saveSession(this.session),this.onAuthChange&&this.onAuthChange(t.user)),t}catch(t){return console.error("Update profile error:",t),{success:!1,error:"Failed to update profile. Please try again."}}}async deleteAccount(e){if(!this.isLoggedIn())return{success:!1,error:"Please log in first"};try{const t=await this.apiRequest("userDeleteAccount",{email:this.session.user.email,password:e});return t.success&&this.clearSession(),t}catch(t){return console.error("Delete account error:",t),{success:!1,error:"Failed to delete account. Please try again."}}}}const authService=new AuthService;class PresentationRecorder{constructor(){var e,t,o,r;this.isEnabled=(e=CONFIG$1.PRESENTATION_RECORDING)==null?void 0:e.ENABLED,this.googleSheetsUrl=(t=CONFIG$1.PRESENTATION_RECORDING)==null?void 0:t.GOOGLE_SHEETS_URL,this.retryAttempts=(o=CONFIG$1.PRESENTATION_RECORDING)==null?void 0:o.RETRY_ATTEMPTS,this.retryDelay=(r=CONFIG$1.PRESENTATION_RECORDING)==null?void 0:r.RETRY_DELAY,this.currentSelectionId=null}configure(e){this.googleSheetsUrl=e,console.log("📊 Presentation recorder configured with Google Sheets URL")}getStaffContact(){const e=authService.getCurrentUser();if(console.log("🔐 Auth user for save:",e),e&&e.email)return console.log("✅ Using authenticated user email:",e.email),{name:e.name||"",email:e.email,mobile:e.phone||""};console.warn("⚠️ No authenticated user, falling back to settings");try{const t=localStorage.getItem("staffContact");if(t){const o=JSON.parse(t);return console.log("📋 Using settings email:",o.email),o}}catch(t){console.warn("Could not load staff contact:",t)}return{name:"",email:"",mobile:""}}async saveSelection(e){if(!this.isEnabled||!this.googleSheetsUrl)return console.log("📊 Presentation recording disabled or not configured"),{success:!1,reason:"not_configured"};try{const t=this.prepareSelectionData(e);t.action="savePresenterSelection",console.log("📧 Saving with staff email:",t.staffEmail);const o=await this.sendToGoogleSheets(t);if(console.log("📊 Google Sheets response:",o),o.success)return console.log("✅ Presentation saved successfully with ID:",o.id),this.currentSelectionId=o.id,{success:!0,id:o.id,data:t};throw new Error(o.error||"Failed to save presentation")}catch(t){return console.error("❌ Failed to save presentation:",t),{success:!1,error:t.message}}}async updateSelection(e,t){if(!this.isEnabled||!this.googleSheetsUrl)return console.log("📊 Presentation recording disabled or not configured"),{success:!1,reason:"not_configured"};if(!e)return{success:!1,error:"No selection ID provided for update"};try{const o=this.prepareSelectionData(t);o.action="updatePresenterSelection",o.id=e;const r=await this.sendToGoogleSheets(o);if(r.success)return console.log("✅ Presentation updated successfully:",e),{success:!0,id:e,updated:!0};throw new Error(r.error||"Failed to update presentation")}catch(o){return console.error("❌ Failed to update presentation:",o),{success:!1,error:o.message}}}prepareSelectionData(e){const t=new Date,o=this.getStaffContact(),r=e.gridRows||StorageManager.getSelectedProducts()||[],n=r.filter(u=>u.product).length,i=r.reduce((u,p)=>u+(parseInt(p.quantity)||1),0),s=[...new Set(r.map(u=>u.room).filter(Boolean))],c=this.calculateEstimatedValue(r);let l=[];try{const u=localStorage.getItem("customRoomOrder");u&&(l=JSON.parse(u))}catch(u){console.warn("Could not load room order:",u)}const d=e.pdfSettings||{};return{date:t.toLocaleDateString("en-AU"),time:t.toLocaleTimeString("en-AU",{hour:"2-digit",minute:"2-digit",hour12:!1}),appVersion:CONFIG$1.VERSION,staffName:o.name||e.staffName||"",staffEmail:o.email||e.staffEmail||"",staffMobile:this.formatPhoneNumber(o.mobile||e.staffMobile),customerName:e.customerName||"",customerEmail:e.customerEmail||"",customerPhone:this.formatPhoneNumber(e.customerPhone),customerProject:e.customerProject||"",customerAddress:e.customerAddress||"",documentName:e.documentName||`${e.customerName||"Selection"} - ${t.toLocaleDateString("en-AU")}`,notes:e.notes||"",productsJson:JSON.stringify(r.map(u=>{var p;return{id:u.id,product:u.product?{OrderCode:u.product.OrderCode||"",Description:u.product.Description||"",RRP_INCGST:u.product.RRP_INCGST||"0.00",RRP_EX:u.product.RRP_EX||"0.00",Image_URL:u.product.Image_URL||"",Diagram_URL:u.product.Diagram_URL||"",Website_URL:u.product.Website_URL||"",BARCODE:u.product.BARCODE||""}:null,quantity:u.quantity||1,room:u.room||"",notes:u.notes||"",price:u.price||((p=u.product)==null?void 0:p.RRP_EX)||"0.00"}})),roomOrderJson:JSON.stringify(l),pdfSettingsJson:JSON.stringify(d),totalProducts:n,totalQuantity:i,totalRooms:s.length,roomsList:s.join(", "),estimatedValue:c}}calculateEstimatedValue(e){let t=0;return e.forEach(o=>{var s,c;if(!o.product)return;const r=parseInt(o.quantity)||1,n=o.price||((s=o.product)==null?void 0:s.RRP_INCGST)||((c=o.product)==null?void 0:c.RRP_EX)||"0",i=parseFloat(n.toString().replace(/[^0-9.]/g,""))||0;t+=i*r}),t.toFixed(2)}formatPhoneNumber(e){if(!e)return"";let t=String(e).trim();return t.startsWith("'")&&(t=t.substring(1)),/^4\d{8}$/.test(t)&&(t="0"+t),"'"+t}async sendToGoogleSheets(e,t=1){try{const o=new URLSearchParams;o.append("data",JSON.stringify(e)),console.log("📊 Sending to Google Sheets:",this.googleSheetsUrl);const r=await fetch(this.googleSheetsUrl,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:o});if(console.log("📊 Response status:",r.status,r.statusText),!r.ok)throw new Error(`HTTP ${r.status}: ${r.statusText}`);const n=await r.text();console.log("📊 Raw response:",n);try{return JSON.parse(n)}catch(i){return console.error("📊 Failed to parse JSON response:",i),{success:!1,error:"Invalid JSON response",raw:n}}}catch(o){return console.error(`📊 Attempt ${t} failed:`,o),t<this.retryAttempts?(console.log(`📊 Retrying in ${this.retryDelay}ms... (attempt ${t+1}/${this.retryAttempts})`),await new Promise(r=>setTimeout(r,this.retryDelay)),this.sendToGoogleSheets(e,t+1)):{success:!1,error:o.message}}}async testConnection(){if(!this.googleSheetsUrl)return{success:!1,error:"No Google Sheets URL configured"};try{const e=new URL(this.googleSheetsUrl);e.searchParams.append("action","getPresenterSelections"),e.searchParams.append("staffEmail","");const t=await fetch(e.toString(),{method:"GET",headers:{Accept:"application/json"}});if(!t.ok)throw new Error(`HTTP ${t.status}`);return{success:!0,message:"Connection successful",result:await t.json()}}catch(e){return{success:!1,error:e.message}}}getCurrentSelectionId(){return this.currentSelectionId}setCurrentSelectionId(e){this.currentSelectionId=e}clearCurrentSelectionId(){this.currentSelectionId=null}hasLoadedSelection(){return this.currentSelectionId!==null}setEnabled(e){this.isEnabled=e,console.log(`📊 Presentation recording ${e?"enabled":"disabled"}`)}}const presentationRecorder=new PresentationRecorder;class PresentationLoader{constructor(){var e;this.googleSheetsUrl=(e=CONFIG$1.PRESENTATION_RECORDING)==null?void 0:e.GOOGLE_SHEETS_URL,this.cachedSelections=null,this.cacheTimestamp=null,this.cacheDuration=5*60*1e3}getStaffEmail(){const e=authService.getCurrentUser();if(console.log("🔐 Auth user for load:",e),e&&e.email)return console.log("✅ Filtering by authenticated user email:",e.email),e.email;console.warn("⚠️ No authenticated user for filtering");try{const t=localStorage.getItem("staffContact");if(t){const o=JSON.parse(t);return console.log("📋 Fallback to settings email:",o.email),o.email||""}}catch(t){console.warn("Could not load staff email:",t)}return""}clearCache(){this.cachedSelections=null,this.cacheTimestamp=null,console.log("🗑️ Selections cache cleared")}async fetchSelections(e=!1,t=!1){if(!this.googleSheetsUrl)return console.error("❌ Google Sheets URL not configured"),[];if(!t&&!e&&this.cachedSelections&&this.cacheTimestamp&&Date.now()-this.cacheTimestamp<this.cacheDuration)return console.log("📊 Using cached selections"),this.cachedSelections;try{const o=this.getStaffEmail();console.log(`📊 Fetching ${e?"deleted":""} selections for: ${o||"all users"}`);const r=new URL(this.googleSheetsUrl);r.searchParams.append("action","getPresenterSelections"),r.searchParams.append("staffEmail",o),e&&r.searchParams.append("deletedOnly","true");const n=await fetch(r.toString(),{method:"GET",headers:{Accept:"application/json"}});if(!n.ok)throw new Error(`HTTP ${n.status}: ${n.statusText}`);const i=await n.json();if(i.success&&i.selections)return console.log(`✅ Fetched ${i.selections.length} selections`),e||(this.cachedSelections=i.selections,this.cacheTimestamp=Date.now()),i.selections;throw new Error(i.error||"Failed to fetch selections")}catch(o){return console.error("❌ Error fetching selections:",o),[]}}clearCache(){this.cachedSelections=null,this.cacheTimestamp=null}searchSelections(e,t){if(!t||t.trim()==="")return e;const o=t.toLowerCase().trim();return e.filter(r=>{const n=(r.customerName||"").toLowerCase(),i=(r.customerProject||"").toLowerCase(),s=(r.documentName||"").toLowerCase(),c=(r.date||"").toLowerCase();return n.includes(o)||i.includes(o)||s.includes(o)||c.includes(o)})}sortByDateDescending(e){return[...e].sort((t,o)=>{try{const r=this.parseDateValue(t.lastModified||t.date,t.time);return this.parseDateValue(o.lastModified||o.date,o.time)-r}catch{return 0}})}parseDateValue(e,t=""){if(!e)return new Date(0);if(e.includes("T"))return new Date(e);const o=e.toString().split("/");if(o.length===3){const r=parseInt(o[0]),n=parseInt(o[1])-1,i=parseInt(o[2]);if(t){const s=t.replace(/[AP]M/i,"").trim().split(":"),c=parseInt(s[0])||0,l=parseInt(s[1])||0,d=t.toUpperCase().includes("PM");return new Date(i,n,r,d&&c!==12?c+12:c,l)}return new Date(i,n,r)}return new Date(0)}async loadSelection(e,t="replace"){try{console.log(`📊 Loading selection: ${e.id} (mode: ${t})`);let o=[];try{o=JSON.parse(e.productsJson||"[]")}catch(s){return console.error("Failed to parse products JSON:",s),{success:!1,error:"Invalid products data"}}let r=[];try{r=JSON.parse(e.roomOrderJson||"[]")}catch(s){console.warn("Could not parse room order:",s)}let n={};try{n=JSON.parse(e.pdfSettingsJson||"{}")}catch(s){console.warn("Could not parse PDF settings:",s)}const i=await this.enrichProductsWithCatalog(o);if(t==="replace"){StorageManager.clearAllSelections();const s={name:e.customerName||"",email:e.customerEmail||"",phone:this.cleanPhoneNumber(e.customerPhone),project:e.customerProject||"",address:e.customerAddress||""};localStorage.setItem("customerDetails",JSON.stringify(s));const c={name:e.customerName||"",email:e.customerEmail||"",telephone:this.cleanPhoneNumber(e.customerPhone),project:e.customerProject||"",address:e.customerAddress||""};localStorage.setItem("pdfFormSettings",JSON.stringify(c)),r.length>0&&localStorage.setItem("customRoomOrder",JSON.stringify(r)),Object.keys(n).length>0&&localStorage.setItem("pdfSettings",JSON.stringify(n)),i.forEach(l=>{l.product&&StorageManager.addProductToSelection(l.product,l.room||"",l.quantity||1,l.notes||"",l.price||null)})}else t==="merge"&&i.forEach(s=>{s.product&&(StorageManager.getSelectedProducts().some(d=>{var u;return((u=d.product)==null?void 0:u.OrderCode)===s.product.OrderCode&&d.room===s.room})||StorageManager.addProductToSelection(s.product,s.room||"",s.quantity||1,s.notes||"",s.price||null))});return presentationRecorder.setCurrentSelectionId(e.id),console.log(`✅ Loaded ${i.length} products`),{success:!0,id:e.id,documentName:e.documentName,customerName:e.customerName,customerProject:e.customerProject,productCount:i.length,roomOrder:r,customerDetails:{name:e.customerName,email:e.customerEmail,phone:this.cleanPhoneNumber(e.customerPhone),project:e.customerProject,address:e.customerAddress},mode:t}}catch(o){return console.error("❌ Error loading selection:",o),{success:!1,error:o.message}}}async enrichProductsWithCatalog(e){const t=[];for(const o of e){if(!o.product){t.push(o);continue}const r=o.product.OrderCode||o.product.orderCode;if(r){const n=dataLayer.findProductByCode(r);n?t.push({id:o.id||`row_${Date.now()}_${Math.random().toString(36).substr(2,9)}`,product:n,quantity:o.quantity||1,room:o.room||"",notes:o.notes||"",price:o.price||n.RRP_EX||"0.00"}):(console.warn(`Product ${r} not found in catalog, using saved data`),t.push({id:o.id||`row_${Date.now()}_${Math.random().toString(36).substr(2,9)}`,product:{OrderCode:r,Description:o.product.Description||o.product.description||"Unknown Product",RRP_INCGST:o.product.RRP_INCGST||o.product.rrpIncGst||"0.00",RRP_EX:o.product.RRP_EX||o.product.rrpEx||"0.00",Image_URL:o.product.Image_URL||o.product.imageUrl||"",Diagram_URL:o.product.Diagram_URL||"",Website_URL:o.product.Website_URL||"",BARCODE:o.product.BARCODE||"",_notInCatalog:!0},quantity:o.quantity||1,room:o.room||"",notes:o.notes||"",price:o.price||o.product.RRP_EX||"0.00"}))}}return t}cleanPhoneNumber(e){if(!e)return"";let t=String(e).trim();return t.startsWith("'")&&(t=t.substring(1)),t}async deleteSelections(e){if(!this.googleSheetsUrl)return{success:!1,error:"Not configured"};try{const t=new URLSearchParams;t.append("data",JSON.stringify({action:"deletePresenterSelections",ids:e}));const r=await(await fetch(this.googleSheetsUrl,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:t})).json();return r.success&&this.clearCache(),r}catch(t){return{success:!1,error:t.message}}}async restoreSelections(e){if(!this.googleSheetsUrl)return{success:!1,error:"Not configured"};try{const t=new URLSearchParams;t.append("data",JSON.stringify({action:"restorePresenterSelections",ids:e}));const r=await(await fetch(this.googleSheetsUrl,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:t})).json();return r.success&&this.clearCache(),r}catch(t){return{success:!1,error:t.message}}}}const presentationLoader=new PresentationLoader;class PresentationPicker{constructor(){this.isVisible=!1,this.allSelections=[],this.filteredSelections=[],this.currentSearchQuery="",this.onLoadCallback=null,this.selectedItems=new Set,this.showDeletedMode=!1}async show(e){console.log("📂 PresentationPicker.show() called");try{this.onLoadCallback=e,this.selectedItems.clear(),this.showDeletedMode=!1,this.createModalHTML(),this.attachEventListeners(),this.isVisible=!0,console.log("📂 Modal created, fetching selections..."),this.setLoadingState(!0),await this.fetchAndRenderSelections(),console.log("📂 Picker ready")}catch(t){throw console.error("❌ PresentationPicker.show() error:",t),t}}async fetchAndRenderSelections(){this.setLoadingState(!0),this.selectedItems.clear();try{this.allSelections=await presentationLoader.fetchSelections(this.showDeletedMode,!0),this.allSelections=presentationLoader.sortByDateDescending(this.allSelections),this.filterAndRender()}catch(e){console.error("Error fetching selections:",e),this.showError("Failed to load selections. Please try again.")}finally{this.setLoadingState(!1)}}hide(){const e=document.getElementById("presentation-picker-modal");e&&e.remove(),this.isVisible=!1}createModalHTML(){const e=document.getElementById("presentation-picker-modal");e&&e.remove();const t=`
      <div id="presentation-picker-modal" class="presentation-picker-overlay">
        <div class="presentation-picker-container">
          <div class="presentation-picker-header">
            <h2>Load Saved Selection</h2>
            <button class="presentation-picker-close" id="picker-close-btn">&times;</button>
          </div>
          
          <div class="presentation-picker-controls">
            <div class="picker-search-box">
              <input type="text" id="picker-search" placeholder="Search by customer, project, or date..." autocomplete="off">
              <svg class="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.35-4.35"></path>
              </svg>
            </div>
            
            <label class="picker-deleted-toggle">
              <input type="checkbox" id="picker-show-deleted" ${this.showDeletedMode?"checked":""}>
              <span>Show deleted</span>
            </label>
            
            <button class="picker-refresh-btn" id="picker-refresh" title="Refresh">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 12a9 9 0 11-9-9c2.52 0 4.93 1 6.74 2.74L21 8"></path>
                <path d="M21 3v5h-5"></path>
              </svg>
            </button>
          </div>
          
          <div class="presentation-picker-content">
            <div class="picker-loading" id="picker-loading">
              <div class="picker-spinner"></div>
              <p>Loading selections...</p>
            </div>
            
            <div class="picker-error" id="picker-error" style="display: none;">
              <p id="picker-error-message"></p>
              <button id="picker-retry-btn">Retry</button>
            </div>
            
            <div class="picker-empty" id="picker-empty" style="display: none;">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z"></path>
                <polyline points="17,21 17,13 7,13 7,21"></polyline>
                <polyline points="7,3 7,8 12,8"></polyline>
              </svg>
              <p>No saved selections found</p>
              <span>Save a selection from the Create Presentation page to see it here</span>
            </div>
            
            <table class="picker-table" id="picker-table" style="display: none;">
              <thead>
                <tr>
                  <th class="col-date">Date</th>
                  <th class="col-customer">Customer</th>
                  <th class="col-project">Project / Document</th>
                  <th class="col-products">Products</th>
                  <th class="col-value">Value</th>
                  <th class="col-actions">Actions</th>
                </tr>
              </thead>
              <tbody id="picker-table-body">
              </tbody>
            </table>
          </div>
          
          <div class="presentation-picker-footer" id="picker-footer" style="display: none;">
            <span class="picker-selection-count" id="picker-selection-count">0 selections</span>
            <div class="picker-footer-actions">
              <button class="btn-secondary" id="picker-delete-selected" style="display: none;">Delete Selected</button>
              <button class="btn-secondary" id="picker-restore-selected" style="display: none;">Restore Selected</button>
            </div>
          </div>
        </div>
      </div>
    `;document.body.insertAdjacentHTML("beforeend",t),this.injectStyles()}injectStyles(){if(document.getElementById("presentation-picker-styles"))return;document.head.insertAdjacentHTML("beforeend",`
      <style id="presentation-picker-styles">
        .presentation-picker-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.7);
          z-index: 100000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          box-sizing: border-box;
        }
        
        .presentation-picker-container {
          background: var(--bg-primary, #fff);
          border-radius: 12px;
          width: 100%;
          max-width: 900px;
          max-height: 80vh;
          display: flex;
          flex-direction: column;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        }
        
        .presentation-picker-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 24px;
          border-bottom: 1px solid var(--border-color, #e5e7eb);
        }
        
        .presentation-picker-header h2 {
          margin: 0;
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--text-primary, #1f2937);
        }
        
        .presentation-picker-close {
          background: none;
          border: none;
          font-size: 1.5rem;
          cursor: pointer;
          color: var(--text-secondary, #6b7280);
          padding: 4px 8px;
          border-radius: 4px;
          transition: all 0.2s;
        }
        
        .presentation-picker-close:hover {
          background: var(--bg-hover, #f3f4f6);
          color: var(--text-primary, #1f2937);
        }
        
        .presentation-picker-controls {
          display: flex;
          gap: 12px;
          padding: 16px 24px;
          border-bottom: 1px solid var(--border-color, #e5e7eb);
          align-items: center;
          flex-wrap: wrap;
        }
        
        .picker-search-box {
          flex: 1;
          min-width: 200px;
          position: relative;
        }
        
        .picker-search-box input {
          width: 100%;
          padding: 10px 12px 10px 40px;
          border: 1px solid var(--border-color, #e5e7eb);
          border-radius: 8px;
          font-size: 0.9rem;
          outline: none;
          transition: border-color 0.2s;
        }
        
        .picker-search-box input:focus {
          border-color: var(--accent-copper, #b87333);
        }
        
        .picker-search-box .search-icon {
          position: absolute;
          left: 12px;
          top: 50%;
          transform: translateY(-50%);
          width: 18px;
          height: 18px;
          color: var(--text-secondary, #6b7280);
        }
        
        .picker-deleted-toggle {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.85rem;
          color: var(--text-secondary, #6b7280);
          cursor: pointer;
        }
        
        .picker-deleted-toggle input {
          cursor: pointer;
        }
        
        .picker-refresh-btn {
          background: none;
          border: 1px solid var(--border-color, #e5e7eb);
          border-radius: 8px;
          padding: 8px;
          cursor: pointer;
          transition: all 0.2s;
        }
        
        .picker-refresh-btn:hover {
          background: var(--bg-hover, #f3f4f6);
        }
        
        .picker-refresh-btn svg {
          width: 20px;
          height: 20px;
          color: var(--text-secondary, #6b7280);
        }
        
        .presentation-picker-content {
          flex: 1;
          overflow: auto;
          padding: 0;
          min-height: 300px;
        }
        
        .picker-loading, .picker-error, .picker-empty {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 60px 20px;
          text-align: center;
          color: var(--text-secondary, #6b7280);
        }
        
        .picker-spinner {
          width: 40px;
          height: 40px;
          border: 3px solid var(--border-color, #e5e7eb);
          border-top-color: var(--accent-copper, #b87333);
          border-radius: 50%;
          animation: picker-spin 0.8s linear infinite;
        }
        
        @keyframes picker-spin {
          to { transform: rotate(360deg); }
        }
        
        .picker-loading p, .picker-empty p {
          margin: 16px 0 0;
          font-size: 0.95rem;
        }
        
        .picker-empty svg {
          width: 64px;
          height: 64px;
          color: var(--text-tertiary, #9ca3af);
          margin-bottom: 8px;
        }
        
        .picker-empty span {
          font-size: 0.85rem;
          color: var(--text-tertiary, #9ca3af);
        }
        
        .picker-error {
          color: #dc2626;
        }
        
        .picker-error button {
          margin-top: 12px;
          padding: 8px 16px;
          background: var(--accent-copper, #b87333);
          color: white;
          border: none;
          border-radius: 6px;
          cursor: pointer;
        }
        
        .picker-table {
          width: 100%;
          border-collapse: collapse;
        }
        
        .picker-table thead {
          background: var(--bg-secondary, #f9fafb);
          position: sticky;
          top: 0;
          z-index: 1;
        }
        
        .picker-table th {
          padding: 12px 16px;
          text-align: left;
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-secondary, #6b7280);
          border-bottom: 1px solid var(--border-color, #e5e7eb);
        }
        
        .picker-table td {
          padding: 12px 16px;
          font-size: 0.9rem;
          border-bottom: 1px solid var(--border-color, #e5e7eb);
          vertical-align: middle;
        }
        
        .picker-table tbody tr {
          cursor: pointer;
          transition: background 0.15s;
        }
        
        .picker-table tbody tr:hover {
          background: var(--bg-hover, #f9fafb);
        }
        
        .picker-table .col-date {
          width: 90px;
          white-space: nowrap;
        }
        
        .picker-table .col-customer {
          min-width: 150px;
        }
        
        .picker-table .col-project {
          min-width: 180px;
        }
        
        .picker-table .col-products, .picker-table .col-value {
          width: 80px;
          text-align: right;
        }
        
        .picker-table .col-actions {
          width: 120px;
          text-align: center;
        }
        
        .picker-customer-name {
          font-weight: 500;
          color: var(--text-primary, #1f2937);
        }
        
        .picker-customer-email {
          font-size: 0.8rem;
          color: var(--text-secondary, #6b7280);
        }
        
        .picker-project-name {
          font-weight: 500;
          color: var(--text-primary, #1f2937);
        }
        
        .picker-document-name {
          font-size: 0.8rem;
          color: var(--text-secondary, #6b7280);
        }
        
        .picker-load-btn {
          padding: 6px 12px;
          background: var(--accent-copper, #b87333);
          color: white;
          border: none;
          border-radius: 6px;
          font-size: 0.8rem;
          cursor: pointer;
          transition: all 0.2s;
        }
        
        .picker-load-btn:hover {
          background: var(--accent-copper-dark, #a06329);
        }
        
        .picker-delete-btn {
          padding: 6px 12px;
          background: none;
          color: #dc2626;
          border: 1px solid #dc2626;
          border-radius: 6px;
          font-size: 0.8rem;
          cursor: pointer;
          margin-left: 6px;
          transition: all 0.2s;
        }
        
        .picker-delete-btn:hover {
          background: #dc2626;
          color: white;
        }
        
        .presentation-picker-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px 24px;
          border-top: 1px solid var(--border-color, #e5e7eb);
          background: var(--bg-secondary, #f9fafb);
          border-radius: 0 0 12px 12px;
        }
        
        .picker-selection-count {
          font-size: 0.85rem;
          color: var(--text-secondary, #6b7280);
        }
        
        .picker-footer-actions {
          display: flex;
          gap: 8px;
        }
        
        .btn-secondary {
          padding: 8px 16px;
          background: white;
          border: 1px solid var(--border-color, #e5e7eb);
          border-radius: 6px;
          font-size: 0.85rem;
          cursor: pointer;
          transition: all 0.2s;
        }
        
        .btn-secondary:hover {
          background: var(--bg-hover, #f3f4f6);
        }
        
        /* Load confirmation dialog */
        .picker-confirm-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          z-index: 100001;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .picker-confirm-dialog {
          background: white;
          border-radius: 12px;
          padding: 24px;
          max-width: 400px;
          width: 90%;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
        }
        
        .picker-confirm-dialog h3 {
          margin: 0 0 12px;
          font-size: 1.1rem;
          color: var(--text-primary, #1f2937);
        }
        
        .picker-confirm-dialog p {
          margin: 0 0 20px;
          color: var(--text-secondary, #6b7280);
          font-size: 0.9rem;
          line-height: 1.5;
        }
        
        .picker-confirm-actions {
          display: flex;
          gap: 8px;
          justify-content: flex-end;
        }
        
        .picker-confirm-actions button {
          padding: 10px 20px;
          border-radius: 6px;
          font-size: 0.9rem;
          cursor: pointer;
          transition: all 0.2s;
        }
        
        .picker-confirm-cancel {
          background: white;
          border: 1px solid var(--border-color, #e5e7eb);
          color: var(--text-secondary, #6b7280);
        }
        
        .picker-confirm-cancel:hover {
          background: var(--bg-hover, #f3f4f6);
        }
        
        .picker-confirm-replace {
          background: var(--accent-copper, #b87333);
          border: none;
          color: white;
        }
        
        .picker-confirm-replace:hover {
          background: var(--accent-copper-dark, #a06329);
        }
        
        .picker-confirm-merge {
          background: white;
          border: 1px solid var(--accent-copper, #b87333);
          color: var(--accent-copper, #b87333);
        }
        
        .picker-confirm-merge:hover {
          background: var(--accent-copper, #b87333);
          color: white;
        }
      </style>
    `)}attachEventListeners(){var t,o,r,n,i;const e=document.getElementById("presentation-picker-modal");e&&((t=document.getElementById("picker-close-btn"))==null||t.addEventListener("click",()=>this.hide()),e.addEventListener("click",s=>{s.target===e&&this.hide()}),(o=document.getElementById("picker-search"))==null||o.addEventListener("input",s=>{this.currentSearchQuery=s.target.value,this.filterAndRender()}),(r=document.getElementById("picker-show-deleted"))==null||r.addEventListener("change",s=>{this.showDeletedMode=s.target.checked,this.fetchAndRenderSelections()}),(n=document.getElementById("picker-refresh"))==null||n.addEventListener("click",()=>{presentationLoader.clearCache(),this.fetchAndRenderSelections()}),(i=document.getElementById("picker-retry-btn"))==null||i.addEventListener("click",()=>{this.fetchAndRenderSelections()}),document.addEventListener("keydown",this.handleKeyDown.bind(this)))}handleKeyDown(e){e.key==="Escape"&&this.isVisible&&this.hide()}setLoadingState(e){const t=document.getElementById("picker-loading"),o=document.getElementById("picker-table"),r=document.getElementById("picker-empty"),n=document.getElementById("picker-error");e?(t&&(t.style.display="flex"),o&&(o.style.display="none"),r&&(r.style.display="none"),n&&(n.style.display="none")):t&&(t.style.display="none")}showError(e){const t=document.getElementById("picker-error"),o=document.getElementById("picker-error-message"),r=document.getElementById("picker-table"),n=document.getElementById("picker-empty");o&&(o.textContent=e),t&&(t.style.display="flex"),r&&(r.style.display="none"),n&&(n.style.display="none")}filterAndRender(){this.filteredSelections=presentationLoader.searchSelections(this.allSelections,this.currentSearchQuery),this.renderTable()}renderTable(){const e=document.getElementById("picker-table"),t=document.getElementById("picker-empty"),o=document.getElementById("picker-footer"),r=document.getElementById("picker-table-body");if(!r)return;if(this.filteredSelections.length===0){e&&(e.style.display="none"),t&&(t.style.display="flex"),o&&(o.style.display="none");return}e&&(e.style.display="table"),t&&(t.style.display="none"),o&&(o.style.display="flex"),r.innerHTML=this.filteredSelections.map((i,s)=>`
      <tr data-index="${s}" data-id="${i.id}">
        <td class="col-date">
          <div>${this.formatDate(i.date)}</div>
          <div style="font-size: 0.75rem; color: var(--text-tertiary, #9ca3af);">${this.formatTime(i.time)}</div>
        </td>
        <td class="col-customer">
          <div class="picker-customer-name">${this.escapeHtml(i.customerName||"Unknown")}</div>
          <div class="picker-customer-email">${this.escapeHtml(i.customerEmail||"")}</div>
        </td>
        <td class="col-project">
          <div class="picker-project-name">${this.escapeHtml(i.customerProject||"-")}</div>
          <div class="picker-document-name">${this.escapeHtml(i.documentName||"")}</div>
        </td>
        <td class="col-products" style="text-align: right;">
          ${i.totalProducts||0}
        </td>
        <td class="col-value" style="text-align: right;">
          $${this.formatValue(i.estimatedValue)}
        </td>
        <td class="col-actions">
          <button class="picker-load-btn" data-action="load" data-index="${s}">Load</button>
          ${this.showDeletedMode?`<button class="picker-delete-btn" data-action="restore" data-index="${s}" style="color: #059669; border-color: #059669;">Restore</button>`:`<button class="picker-delete-btn" data-action="delete" data-index="${s}">Delete</button>`}
        </td>
      </tr>
    `).join("");const n=document.getElementById("picker-selection-count");n&&(n.textContent=`${this.filteredSelections.length} selection${this.filteredSelections.length!==1?"s":""}`),this.attachRowEventListeners()}attachRowEventListeners(){const e=document.getElementById("picker-table-body");e&&(e.querySelectorAll("button[data-action]").forEach(t=>{t.addEventListener("click",o=>{o.stopPropagation();const r=t.dataset.action,n=parseInt(t.dataset.index),i=this.filteredSelections[n];r==="load"?this.showLoadConfirmation(i):r==="delete"?this.confirmDelete(i):r==="restore"&&this.restoreSelection(i)})}),e.querySelectorAll("tr").forEach(t=>{t.addEventListener("click",o=>{if(o.target.closest("button"))return;const r=parseInt(t.dataset.index),n=this.filteredSelections[r];this.showLoadConfirmation(n)})}))}showLoadConfirmation(e){const t=StorageManager.getSelectedProducts();if(!(t&&t.length>0)){this.loadSelection(e,"replace");return}const r=`
      <div class="picker-confirm-overlay" id="picker-confirm-dialog">
        <div class="picker-confirm-dialog">
          <h3>Load Selection</h3>
          <p>
            You have <strong>${t.length}</strong> products in your current selection.
            How would you like to load "<strong>${this.escapeHtml(e.documentName||e.customerName)}</strong>"?
          </p>
          <div class="picker-confirm-actions">
            <button class="picker-confirm-cancel" data-action="cancel">Cancel</button>
            <button class="picker-confirm-merge" data-action="merge">Merge</button>
            <button class="picker-confirm-replace" data-action="replace">Replace</button>
          </div>
        </div>
      </div>
    `;document.body.insertAdjacentHTML("beforeend",r);const n=document.getElementById("picker-confirm-dialog");n.querySelectorAll("button[data-action]").forEach(i=>{i.addEventListener("click",()=>{const s=i.dataset.action;n.remove(),s==="replace"?this.loadSelection(e,"replace"):s==="merge"&&this.loadSelection(e,"merge")})}),n.addEventListener("click",i=>{i.target===n&&n.remove()})}async loadSelection(e,t){try{this.setLoadingState(!0);const o=await presentationLoader.loadSelection(e,t);o.success?(this.hide(),this.showToast(`Loaded ${o.productCount} products (${t})`),this.onLoadCallback&&this.onLoadCallback(o)):this.showError(o.error||"Failed to load selection")}catch(o){this.showError(o.message)}finally{this.setLoadingState(!1)}}async confirmDelete(e){if(confirm(`Delete selection for "${e.customerName||"Unknown"}"?

This can be restored later.`))try{const t=await presentationLoader.deleteSelections([e.id]);t.success?(this.showToast("Selection deleted"),this.fetchAndRenderSelections()):this.showError(t.error||"Failed to delete")}catch(t){this.showError(t.message)}}async restoreSelection(e){try{const t=await presentationLoader.restoreSelections([e.id]);t.success?(this.showToast("Selection restored"),this.fetchAndRenderSelections()):this.showError(t.error||"Failed to restore")}catch(t){this.showError(t.message)}}showToast(e){const t=document.createElement("div");t.style.cssText=`
      position: fixed;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
      background: #1f2937;
      color: white;
      padding: 12px 24px;
      border-radius: 8px;
      font-size: 0.9rem;
      z-index: 100002;
      animation: toast-in 0.3s ease;
    `,t.textContent=e,document.body.appendChild(t),setTimeout(()=>{t.style.animation="toast-out 0.3s ease",setTimeout(()=>t.remove(),300)},3e3)}formatDate(e){if(!e)return"-";if(/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(e))return e;try{const t=new Date(e);if(!isNaN(t.getTime())&&t.getFullYear()>1900)return t.toLocaleDateString("en-AU")}catch{}return e}formatTime(e){if(!e)return"";const t=e.match(/(\d{1,2}):(\d{2})(?::\d{2})?\s*(AM|PM)?/i);if(t){let o=parseInt(t[1]);const r=t[2],n=(t[3]||"").toUpperCase();return n==="PM"&&o!==12?o+=12:n==="AM"&&o===12&&(o=0),`${o.toString().padStart(2,"0")}:${r}`}return e}formatValue(e){return(parseFloat(e)||0).toLocaleString("en-AU",{minimumFractionDigits:2,maximumFractionDigits:2})}escapeHtml(e){const t=document.createElement("div");return t.textContent=e||"",t.innerHTML}}const presentationPicker=new PresentationPicker;class AuthUI{constructor(){this.currentModal=null,this.pendingAction=null,this.injectStyles()}injectStyles(){if(document.getElementById("auth-ui-styles"))return;const e=document.createElement("style");e.id="auth-ui-styles",e.textContent=`
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
    `,document.head.appendChild(e)}showLogin(e=null){this.pendingAction=e?{callback:e}:null,this.showModal(`
      <div class="auth-modal-overlay" id="auth-modal">
        <div class="auth-modal" style="position: relative;">
          <button class="auth-close" id="auth-close">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>
          
          <div class="auth-header">
            <img src="assets/seima-logo.png" alt="Seima" class="auth-logo">
            <div class="auth-brand">Product Presenter</div>
            <h2 class="auth-title">Welcome Back</h2>
            <p class="auth-subtitle">Sign in to access your saved selections</p>
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
          </div>
        </div>
      </div>
    `),this.setupLoginHandlers(e)}showRegister(){this.showModal(`
      <div class="auth-modal-overlay" id="auth-modal">
        <div class="auth-modal" style="position: relative;">
          <button class="auth-close" id="auth-close">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>
          
          <div class="auth-header">
            <img src="assets/seima-logo.png" alt="Seima" class="auth-logo">
            <div class="auth-brand">Product Presenter</div>
            <h2 class="auth-title">Create Account</h2>
            <p class="auth-subtitle">Join to save and manage your selections</p>
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
    `),this.setupRegisterHandlers()}showForgotPassword(){this.showModal(`
      <div class="auth-modal-overlay" id="auth-modal">
        <div class="auth-modal" style="position: relative;">
          <button class="auth-close" id="auth-close">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>
          
          <div class="auth-header">
            <img src="assets/seima-logo.png" alt="Seima" class="auth-logo">
            <div class="auth-brand">Product Presenter</div>
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
    `),this.setupForgotHandlers()}showResetPassword(e=""){const t=`
      <div class="auth-modal-overlay" id="auth-modal">
        <div class="auth-modal" style="position: relative;">
          <button class="auth-close" id="auth-close">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>
          
          <div class="auth-header">
            <img src="assets/seima-logo.png" alt="Seima" class="auth-logo">
            <div class="auth-brand">Product Presenter</div>
            <h2 class="auth-title">Enter Reset Code</h2>
            <p class="auth-subtitle">Check your email for the 6-character code</p>
          </div>
          
          <form class="auth-form" id="reset-form">
            <div id="auth-message"></div>
            
            <div class="auth-field">
              <label for="reset-email">Email</label>
              <input type="email" id="reset-email" value="${e}" placeholder="you@example.com" required>
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
    `;this.showModal(t),this.setupResetHandlers()}showModal(e){var o,r;this.closeModal();const t=document.createElement("div");t.innerHTML=e,document.body.appendChild(t.firstElementChild),this.currentModal=document.getElementById("auth-modal"),(o=document.getElementById("auth-close"))==null||o.addEventListener("click",()=>this.closeModal()),(r=this.currentModal)==null||r.addEventListener("click",n=>{n.target===this.currentModal&&this.closeModal()}),document.addEventListener("keydown",this.escHandler=n=>{n.key==="Escape"&&this.closeModal()})}closeModal(){this.currentModal&&(this.currentModal.remove(),this.currentModal=null),this.escHandler&&document.removeEventListener("keydown",this.escHandler)}showMessage(e,t="error"){const o=document.getElementById("auth-message");o&&(o.innerHTML=`<div class="auth-message ${t}">${e}</div>`)}setLoading(e,t){const o=document.getElementById(e);o&&(t?(o.disabled=!0,o.dataset.originalText=o.textContent,o.innerHTML='<span class="auth-spinner"></span>Please wait...'):(o.disabled=!1,o.textContent=o.dataset.originalText||"Submit"))}setupLoginHandlers(e){var o,r;const t=document.getElementById("login-form");t==null||t.addEventListener("submit",async n=>{var d,u,p,h;n.preventDefault();const i=(d=document.getElementById("login-email"))==null?void 0:d.value,s=(u=document.getElementById("login-password"))==null?void 0:u.value,c=((p=document.getElementById("login-remember"))==null?void 0:p.checked)||!1;this.setLoading("login-submit",!0);const l=await authService.login(i,s,c);this.setLoading("login-submit",!1),l.success?(this.closeModal(),e&&e(l.user),(h=this.pendingAction)!=null&&h.callback&&(this.pendingAction.callback(l.user),this.pendingAction=null)):this.showMessage(l.error)}),(o=document.getElementById("show-register"))==null||o.addEventListener("click",()=>this.showRegister()),(r=document.getElementById("show-forgot"))==null||r.addEventListener("click",()=>this.showForgotPassword())}setupRegisterHandlers(){var t;const e=document.getElementById("register-form");e==null||e.addEventListener("submit",async o=>{var d,u,p,h,m;o.preventDefault();const r=(d=document.getElementById("register-name"))==null?void 0:d.value,n=(u=document.getElementById("register-email"))==null?void 0:u.value,i=(p=document.getElementById("register-password"))==null?void 0:p.value,s=((h=document.getElementById("register-position"))==null?void 0:h.value)||"",c=((m=document.getElementById("register-phone"))==null?void 0:m.value)||"";this.setLoading("register-submit",!0);const l=await authService.register(n,i,r,s,c);this.setLoading("register-submit",!1),l.success?(this.showMessage("Account created! You can now sign in.","success"),setTimeout(()=>this.showLogin(),1500)):this.showMessage(l.error)}),(t=document.getElementById("show-login"))==null||t.addEventListener("click",()=>this.showLogin())}setupForgotHandlers(){var t;const e=document.getElementById("forgot-form");e==null||e.addEventListener("submit",async o=>{var i;o.preventDefault();const r=(i=document.getElementById("forgot-email"))==null?void 0:i.value;this.setLoading("forgot-submit",!0);const n=await authService.requestPasswordReset(r);this.setLoading("forgot-submit",!1),n.success?(this.showMessage("If this email exists, a reset code has been sent.","success"),setTimeout(()=>this.showResetPassword(r),2e3)):this.showMessage(n.error)}),(t=document.getElementById("show-login-back"))==null||t.addEventListener("click",()=>this.showLogin())}setupResetHandlers(){var t;const e=document.getElementById("reset-form");e==null||e.addEventListener("submit",async o=>{var c,l,d;o.preventDefault();const r=(c=document.getElementById("reset-email"))==null?void 0:c.value,n=(l=document.getElementById("reset-code"))==null?void 0:l.value,i=(d=document.getElementById("reset-new-password"))==null?void 0:d.value;this.setLoading("reset-submit",!0);const s=await authService.resetPassword(r,n,i);this.setLoading("reset-submit",!1),s.success?(this.showMessage("Password reset successfully! You can now sign in.","success"),setTimeout(()=>this.showLogin(),1500)):this.showMessage(s.error)}),(t=document.getElementById("show-login-back"))==null||t.addEventListener("click",()=>this.showLogin())}getInitials(e){if(!e)return"?";const t=e.split(" ");return t.length>=2?(t[0][0]+t[t.length-1][0]).toUpperCase():e.substring(0,2).toUpperCase()}requireAuth(e,t="continue"){authService.isLoggedIn()?e(authService.getCurrentUser()):this.showLogin(e)}}const authUI=new AuthUI,WIZARD_STORAGE_KEY="pdfWizardSettings",TIP_TAIL_STORAGE_KEY$1="tipTailSettings",CUSTOMER_LOGO_KEY$1="customerLogo";class PDFWizard{constructor(){this.wizardData=this.getDefaultData(),this.availableTipPdfs=[],this.availableTailPdfs=[],this.customTipPdf=null,this.customTailPdf=null,this.onComplete=null,this.onCancel=null}getDefaultData(){return{customer:{name:"",project:"",address:"",email:"",phone:"",logo:null},options:{pricingOption:"full",includeDescriptions:!0,includeNotes:!0,groupByRoom:!0},customise:{tipPdf:"",tailPdf:""}}}async open(e={}){this.onComplete=e.onComplete||null,this.onCancel=e.onCancel||null;try{const o=await(await fetch("./screens/pdf-wizard.html")).text(),r=document.createElement("div");if(r.id="pdf-wizard-container",r.innerHTML=o,document.body.appendChild(r),!document.querySelector('link[href*="design-system.css"]')){const n=document.createElement("link");n.rel="stylesheet",n.href="./css/design-system.css",document.head.appendChild(n)}this.loadSavedSettings(),await this.discoverAvailablePdfs(),this.setupEventHandlers(),this.populateForm(),console.log("✅ PDF Wizard opened"),this.startImagePreloading()}catch(t){console.error("Failed to open PDF wizard:",t)}}close(){const e=document.getElementById("pdf-wizard-container");e&&e.remove(),this.onCancel&&this.onCancel()}startImagePreloading(){const e=StorageManager.getSelectedProducts();if(!e||e.length===0){console.log("📷 No products to preload");return}const t=e.map(o=>{var r,n,i;return{...o.product,Image_URL:((r=o.product)==null?void 0:r.Image_URL)||((n=o.product)==null?void 0:n.imageUrl)||"",Diagram_URL:((i=o.product)==null?void 0:i.Diagram_URL)||""}});console.log(`📷 Starting background preload for ${t.length} products...`),preloadAllProductImages(t).then(o=>{console.log(`✅ Preloaded ${o} images - ready for PDF generation`)}).catch(o=>{console.warn("Image preloading error:",o)})}loadSavedSettings(){const e=Utils.getStorageItem(WIZARD_STORAGE_KEY,null);e&&(this.wizardData={...this.getDefaultData(),...e});const t=Utils.getStorageItem("pdfFormSettings",{});t.name&&(this.wizardData.customer.name=t.name),t.project&&(this.wizardData.customer.project=t.project),t.address&&(this.wizardData.customer.address=t.address),t.email&&(this.wizardData.customer.email=t.email),t.telephone&&(this.wizardData.customer.phone=t.telephone);const o=localStorage.getItem(CUSTOMER_LOGO_KEY$1);o&&(this.wizardData.customer.logo=o);const r=Utils.getStorageItem(TIP_TAIL_STORAGE_KEY$1,{});r.tipAsset&&(this.wizardData.customise.tipPdf=r.tipAsset),r.tailAsset&&(this.wizardData.customise.tailPdf=r.tailAsset)}async discoverAvailablePdfs(){try{let e=[];try{const t=await fetch("./assets-list.json");t.ok&&(e=await t.json())}catch{}e.length===0&&(e=["tip-AandD.pdf","tip-Builder.pdf","tip-Merchant.pdf","tip-Volume Merchant.pdf","tail-generic.pdf"]),this.availableTipPdfs=e.filter(t=>t.toLowerCase().startsWith("tip-")),this.availableTailPdfs=e.filter(t=>t.toLowerCase().startsWith("tail-")),this.renderPdfOptions()}catch(e){console.error("Failed to discover PDFs:",e)}}renderPdfOptions(){const e=document.getElementById("tip-pdf-grid");if(e){const o=this.wizardData.customise.tipPdf||"",r=o&&o!==""&&o!=="__custom__";let n=`
        <label class="option-card${r?"":" selected"}" data-tip="none">
          <input type="radio" name="tipPdf" value="" ${r?"":"checked"} style="display: none;">
          <div class="option-card-icon">✕</div>
          <span class="option-card-title">None</span>
        </label>
      `;this.availableTipPdfs.forEach(i=>{const s=i.replace("tip-","").replace(".pdf",""),c=o===`./assets/${i}`;n+=`
          <label class="option-card${c?" selected":""}" data-tip="${i}">
            <input type="radio" name="tipPdf" value="./assets/${i}" ${c?"checked":""} style="display: none;">
            <div class="option-card-icon">📄</div>
            <span class="option-card-title">${s}</span>
          </label>
        `}),e.innerHTML=n,e.querySelectorAll(".option-card").forEach(i=>{i.addEventListener("click",()=>{var c;this.customTipPdf=null,document.getElementById("tip-custom-preview").style.display="none",document.getElementById("tip-upload-link").style.display="",e.querySelectorAll(".option-card").forEach(l=>l.classList.remove("selected")),i.classList.add("selected");const s=i.querySelector("input");s&&(s.checked=!0),this.wizardData.customise.tipPdf=((c=i.querySelector("input"))==null?void 0:c.value)||"",this.saveSettings()})})}const t=document.getElementById("tail-pdf-grid");if(t){const o=this.wizardData.customise.tailPdf||"",r=o&&o!==""&&o!=="__custom__";let n=`
        <label class="option-card${r?"":" selected"}" data-tail="none">
          <input type="radio" name="tailPdf" value="" ${r?"":"checked"} style="display: none;">
          <div class="option-card-icon">✕</div>
          <span class="option-card-title">None</span>
        </label>
      `;this.availableTailPdfs.forEach(i=>{const s=i.replace("tail-","").replace(".pdf",""),c=o===`./assets/${i}`;n+=`
          <label class="option-card${c?" selected":""}" data-tail="${i}">
            <input type="radio" name="tailPdf" value="./assets/${i}" ${c?"checked":""} style="display: none;">
            <div class="option-card-icon">📄</div>
            <span class="option-card-title">${s}</span>
          </label>
        `}),t.innerHTML=n,t.querySelectorAll(".option-card").forEach(i=>{i.addEventListener("click",()=>{var c;this.customTailPdf=null,document.getElementById("tail-custom-preview").style.display="none",document.getElementById("tail-upload-link").style.display="",t.querySelectorAll(".option-card").forEach(l=>l.classList.remove("selected")),i.classList.add("selected");const s=i.querySelector("input");s&&(s.checked=!0),this.wizardData.customise.tailPdf=((c=i.querySelector("input"))==null?void 0:c.value)||"",this.saveSettings()})})}}setupEventHandlers(){var o,r,n;(o=document.getElementById("wizard-close"))==null||o.addEventListener("click",()=>this.close()),(r=document.getElementById("wizard-cancel"))==null||r.addEventListener("click",()=>this.close()),(n=document.getElementById("wizard-generate"))==null||n.addEventListener("click",i=>{i.preventDefault(),this.generatePdf()});const e=document.getElementById("advanced-toggle"),t=document.getElementById("advanced-content");e&&t&&e.addEventListener("click",()=>{const i=t.style.display!=="none";t.style.display=i?"none":"block",e.classList.toggle("expanded",!i)}),this.setupFormHandlers(),this.setupOptionCardHandlers(),this.setupLogoUpload(),this.setupPdfUploads()}setupFormHandlers(){document.querySelectorAll('#pdf-wizard input[type="text"], #pdf-wizard input[type="email"], #pdf-wizard input[type="tel"]').forEach(o=>{o.addEventListener("blur",()=>{this.collectFormData(),this.saveSettings()})}),document.querySelectorAll('#pdf-wizard input[type="checkbox"]').forEach(o=>{o.addEventListener("change",()=>{this.collectFormData(),this.saveSettings()})})}setupOptionCardHandlers(){document.querySelectorAll('.option-card[data-option^="pricing"]').forEach(e=>{e.addEventListener("click",()=>{const t=e.closest(".option-grid");t&&(t.querySelectorAll(".option-card").forEach(r=>r.classList.remove("selected")),e.classList.add("selected"));const o=e.querySelector('input[type="radio"]');o&&(o.checked=!0,this.wizardData.options.pricingOption=o.value),this.saveSettings()})})}setupLogoUpload(){const e=document.getElementById("logo-upload-zone"),t=document.getElementById("customer-logo-input"),o=document.getElementById("logo-preview-container"),r=document.getElementById("logo-preview-img"),n=document.getElementById("remove-logo-btn");e&&t&&(e.onclick=()=>t.click(),e.ondragover=i=>{i.preventDefault(),e.style.borderColor="var(--color-copper)"},e.ondragleave=()=>{e.style.borderColor=""},e.ondrop=i=>{i.preventDefault(),e.style.borderColor="",i.dataTransfer.files.length>0&&this.handleLogoFile(i.dataTransfer.files[0])},t.onchange=i=>{i.target.files.length>0&&this.handleLogoFile(i.target.files[0])}),n&&(n.onclick=()=>{this.wizardData.customer.logo=null,localStorage.removeItem(CUSTOMER_LOGO_KEY$1),o&&(o.style.display="none"),e&&(e.style.display="")}),this.wizardData.customer.logo&&r&&o&&(r.src=this.wizardData.customer.logo,o.style.display="block",e&&(e.style.display="none"))}handleLogoFile(e){if(!e.type.startsWith("image/")){alert("Please select an image file");return}if(e.size>2*1024*1024){alert("File size must be less than 2MB");return}const t=new FileReader;t.onload=o=>{this.wizardData.customer.logo=o.target.result,localStorage.setItem(CUSTOMER_LOGO_KEY$1,o.target.result);const r=document.getElementById("logo-preview-container"),n=document.getElementById("logo-preview-img"),i=document.getElementById("logo-upload-zone");n&&(n.src=o.target.result),r&&(r.style.display="block"),i&&(i.style.display="none")},t.readAsDataURL(e)}setupPdfUploads(){const e=document.getElementById("tip-upload-link"),t=document.getElementById("tip-pdf-input"),o=document.getElementById("tip-custom-preview"),r=document.getElementById("tip-custom-name"),n=document.getElementById("remove-tip-btn");e&&t&&(e.onclick=u=>{u.preventDefault(),t.click()},t.onchange=u=>{u.target.files.length>0&&(this.customTipPdf=u.target.files[0],r&&(r.textContent=this.customTipPdf.name),o&&(o.style.display="flex"),e&&(e.style.display="none"),document.querySelectorAll("#tip-pdf-grid .option-card").forEach(p=>p.classList.remove("selected")),this.wizardData.customise.tipPdf="__custom__")}),n&&(n.onclick=()=>{this.customTipPdf=null,o&&(o.style.display="none"),t&&(t.value=""),e&&(e.style.display="");const u=document.querySelector('#tip-pdf-grid [data-tip="none"]');if(u){document.querySelectorAll("#tip-pdf-grid .option-card").forEach(h=>h.classList.remove("selected")),u.classList.add("selected");const p=u.querySelector("input");p&&(p.checked=!0)}this.wizardData.customise.tipPdf=""});const i=document.getElementById("tail-upload-link"),s=document.getElementById("tail-pdf-input"),c=document.getElementById("tail-custom-preview"),l=document.getElementById("tail-custom-name"),d=document.getElementById("remove-tail-btn");i&&s&&(i.onclick=u=>{u.preventDefault(),s.click()},s.onchange=u=>{u.target.files.length>0&&(this.customTailPdf=u.target.files[0],l&&(l.textContent=this.customTailPdf.name),c&&(c.style.display="flex"),i&&(i.style.display="none"),document.querySelectorAll("#tail-pdf-grid .option-card").forEach(p=>p.classList.remove("selected")),this.wizardData.customise.tailPdf="__custom__")}),d&&(d.onclick=()=>{this.customTailPdf=null,c&&(c.style.display="none"),s&&(s.value=""),i&&(i.style.display="");const u=document.querySelector('#tail-pdf-grid [data-tail="none"]');if(u){document.querySelectorAll("#tail-pdf-grid .option-card").forEach(h=>h.classList.remove("selected")),u.classList.add("selected");const p=u.querySelector("input");p&&(p.checked=!0)}this.wizardData.customise.tailPdf=""})}collectFormData(){const e=["customer-name","customer-project","customer-address","customer-email","customer-phone"],t=["name","project","address","email","phone"];e.forEach((n,i)=>{const s=document.getElementById(n);s&&(this.wizardData.customer[t[i]]=s.value)});const o=document.querySelector('input[name="pricingOption"]:checked');o&&(this.wizardData.options.pricingOption=o.value),Object.entries({"include-descriptions":"includeDescriptions","include-notes":"includeNotes","group-by-room":"groupByRoom"}).forEach(([n,i])=>{const s=document.getElementById(n);s&&(this.wizardData.options[i]=s.checked)})}populateForm(){const e={"customer-name":this.wizardData.customer.name,"customer-project":this.wizardData.customer.project,"customer-address":this.wizardData.customer.address,"customer-email":this.wizardData.customer.email,"customer-phone":this.wizardData.customer.phone};Object.entries(e).forEach(([r,n])=>{const i=document.getElementById(r);i&&(i.value=n||"")});const t=document.querySelector(`input[name="pricingOption"][value="${this.wizardData.options.pricingOption}"]`);if(t){t.checked=!0;const r=t.closest(".option-card");r&&(document.querySelectorAll('.option-card[data-option^="pricing"]').forEach(n=>n.classList.remove("selected")),r.classList.add("selected"))}const o={"include-descriptions":this.wizardData.options.includeDescriptions,"include-notes":this.wizardData.options.includeNotes,"group-by-room":this.wizardData.options.groupByRoom};Object.entries(o).forEach(([r,n])=>{const i=document.getElementById(r);i&&(i.checked=n)})}saveSettings(){try{Utils.setStorageItem(WIZARD_STORAGE_KEY,this.wizardData),Utils.setStorageItem("pdfFormSettings",{name:this.wizardData.customer.name,project:this.wizardData.customer.project,address:this.wizardData.customer.address,email:this.wizardData.customer.email,telephone:this.wizardData.customer.phone}),Utils.setStorageItem(TIP_TAIL_STORAGE_KEY$1,{tipAsset:this.wizardData.customise.tipPdf!=="__custom__"?this.wizardData.customise.tipPdf:"",tailAsset:this.wizardData.customise.tailPdf!=="__custom__"?this.wizardData.customise.tailPdf:""})}catch(e){console.warn("Could not save settings to localStorage:",e.message)}}async generatePdf(){this.collectFormData(),this.saveSettings();const e={name:this.wizardData.customer.name,project:this.wizardData.customer.project,address:this.wizardData.customer.address,email:this.wizardData.customer.email,telephone:this.wizardData.customer.phone,excludePrice:this.wizardData.options.pricingOption==="none"||this.wizardData.options.pricingOption==="minimal",excludeQty:this.wizardData.options.pricingOption==="minimal",excludeLongDescription:!this.wizardData.options.includeDescriptions,includeGst:this.wizardData.options.pricingOption==="gst",exportCsv:!0},t={tipAsset:"",tipUpload:null,tailAsset:"",tailUpload:null};if(this.wizardData.customise.tipPdf&&this.wizardData.customise.tipPdf!=="__custom__"&&(t.tipAsset=this.wizardData.customise.tipPdf),this.wizardData.customise.tailPdf&&this.wizardData.customise.tailPdf!=="__custom__"&&(t.tailAsset=this.wizardData.customise.tailPdf),this.customTipPdf)try{const r=await this.fileToBase64(this.customTipPdf);t.tipUpload=r.replace(/^data:application\/pdf;base64,/,""),console.log("📄 Custom tip PDF converted to base64")}catch(r){console.error("Failed to convert tip PDF:",r)}if(this.customTailPdf)try{const r=await this.fileToBase64(this.customTailPdf);t.tailUpload=r.replace(/^data:application\/pdf;base64,/,""),console.log("📄 Custom tail PDF converted to base64")}catch(r){console.error("Failed to convert tail PDF:",r)}try{localStorage.setItem("tipTailSettings",JSON.stringify(t))}catch(r){console.warn("Could not save tipTailSettings to localStorage (likely quota exceeded), using in-memory:",r.message)}console.log("📄 Generating PDF with settings:",{...e,tipAsset:t.tipAsset||"(none)",tipUpload:t.tipUpload?"(custom file)":"(none)",tailAsset:t.tailAsset||"(none)",tailUpload:t.tailUpload?"(custom file)":"(none)"});const o=document.getElementById("pdf-wizard-container");o&&o.remove(),this.onComplete?this.onComplete(e,t):window.dispatchEvent(new CustomEvent("generatePdf",{detail:{...e,tipTailSettings:t}}))}fileToBase64(e){return new Promise((t,o)=>{const r=new FileReader;r.onload=()=>t(r.result),r.onerror=o,r.readAsDataURL(e)})}showSaveDialog(){authUI.requireAuth(e=>{this._showSaveDialogInternal(e)})}_showSaveDialogInternal(e){this.collectFormData();const t=presentationRecorder.hasLoadedSelection(),o=this.wizardData.customer.name?`${this.wizardData.customer.name} - ${new Date().toLocaleDateString("en-AU")}`:`Selection - ${new Date().toLocaleDateString("en-AU")}`,r=`
      <div class="save-dialog-overlay" id="save-dialog">
        <div class="save-dialog">
          <h3>Save Selection</h3>
          <p>Save your current product selection for later use.</p>
          
          <div class="save-dialog-form">
            <label class="form-label" for="save-doc-name">Document Name</label>
            <input type="text" class="form-input" id="save-doc-name" 
                   value="${this.escapeHtml(o)}" maxlength="100"
                   placeholder="Enter a name for this selection">
            
            <label class="form-label" for="save-notes" style="margin-top: 12px;">Notes (optional)</label>
            <textarea class="form-input" id="save-notes" rows="2" maxlength="500"
                      placeholder="Add any notes about this selection"></textarea>
          </div>
          
          <div class="save-dialog-actions">
            <button class="btn btn-secondary" data-action="cancel">Cancel</button>
            ${t?`
              <button class="btn btn-outline" data-action="save-new">Save as New</button>
              <button class="btn btn-accent" data-action="save-update">Update</button>
            `:`
              <button class="btn btn-accent" data-action="save-new">Save</button>
            `}
          </div>
        </div>
      </div>
    `;this.injectSaveDialogStyles(),document.body.insertAdjacentHTML("beforeend",r);const n=document.getElementById("save-dialog"),i=document.getElementById("save-doc-name"),s=document.getElementById("save-notes");i==null||i.focus(),i==null||i.select(),n.querySelectorAll("button[data-action]").forEach(l=>{l.addEventListener("click",async()=>{const d=l.dataset.action;if(d==="cancel"){n.remove();return}const u=(i==null?void 0:i.value.trim())||"Untitled Selection",p=(s==null?void 0:s.value.trim())||"",h={customerName:this.wizardData.customer.name,customerEmail:this.wizardData.customer.email,customerPhone:this.wizardData.customer.phone,customerProject:this.wizardData.customer.project,customerAddress:this.wizardData.customer.address,documentName:u,notes:p,pdfSettings:{pricingOption:this.wizardData.options.pricingOption,includeDescriptions:this.wizardData.options.includeDescriptions,includeNotes:this.wizardData.options.includeNotes,groupByRoom:this.wizardData.options.groupByRoom,tipPdf:this.wizardData.customise.tipPdf,tailPdf:this.wizardData.customise.tailPdf},gridRows:StorageManager.getSelectedProducts()};n.querySelectorAll("button").forEach(m=>m.disabled=!0),l.textContent="Saving...";try{let m;if(d==="save-update"){const g=presentationRecorder.getCurrentSelectionId();m=await presentationRecorder.updateSelection(g,h)}else m=await presentationRecorder.saveSelection(h);n.remove(),m.success?this.showToast(d==="save-update"?"Selection updated!":"Selection saved!"):this.showToast("Failed to save: "+(m.error||"Unknown error"),"error")}catch(m){n.remove(),this.showToast("Failed to save: "+m.message,"error")}})}),n.addEventListener("click",l=>{l.target===n&&n.remove()});const c=l=>{l.key==="Escape"&&(n.remove(),document.removeEventListener("keydown",c))};document.addEventListener("keydown",c)}injectSaveDialogStyles(){if(document.getElementById("save-dialog-styles"))return;document.head.insertAdjacentHTML("beforeend",`
      <style id="save-dialog-styles">
        .save-dialog-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          z-index: 100001;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }
        
        .save-dialog {
          background: white;
          border-radius: 12px;
          padding: 24px;
          max-width: 450px;
          width: 100%;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
        }
        
        .save-dialog h3 {
          margin: 0 0 8px;
          font-size: 1.25rem;
          color: var(--text-primary, #1f2937);
        }
        
        .save-dialog > p {
          margin: 0 0 20px;
          color: var(--text-secondary, #6b7280);
          font-size: 0.9rem;
        }
        
        .save-dialog-form {
          margin-bottom: 20px;
        }
        
        .save-dialog-form .form-label {
          display: block;
          font-size: 0.8125rem;
          font-weight: 500;
          color: var(--text-primary, #1f2937);
          margin-bottom: 6px;
        }
        
        .save-dialog-form .form-input {
          width: 100%;
          padding: 10px 12px;
          border: 1px solid var(--border-light, #e5e5e5);
          border-radius: 6px;
          font-size: 0.875rem;
        }
        
        .save-dialog-form .form-input:focus {
          outline: none;
          border-color: var(--color-copper, #b87333);
        }
        
        .save-dialog-form textarea {
          resize: vertical;
          min-height: 60px;
        }
        
        .save-dialog-actions {
          display: flex;
          gap: 8px;
          justify-content: flex-end;
        }
        
        .save-dialog-actions button {
          padding: 10px 20px;
          border-radius: 6px;
          font-size: 0.875rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.15s;
        }
        
        .save-dialog-actions button:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
        
        .save-dialog-actions .btn-secondary {
          background: white;
          border: 1px solid var(--border-light, #e5e5e5);
          color: var(--text-secondary, #6b7280);
        }
        
        .save-dialog-actions .btn-outline {
          background: white;
          border: 1px solid var(--color-copper, #b87333);
          color: var(--color-copper, #b87333);
        }
        
        .save-dialog-actions .btn-accent {
          background: var(--color-copper, #b87333);
          border: none;
          color: white;
        }
      </style>
    `)}showLoadPicker(){authUI.requireAuth(e=>{this._showLoadPickerInternal(e)})}_showLoadPickerInternal(e){console.log("📂 Opening load picker...");try{presentationPicker.show(t=>{console.log("✅ Selection loaded:",t);try{const o=JSON.parse(localStorage.getItem("customerDetails")||"{}");this.wizardData.customer.name=o.name||"",this.wizardData.customer.email=o.email||"",this.wizardData.customer.phone=o.phone||"",this.wizardData.customer.project=o.project||"",this.wizardData.customer.address=o.address||"";const r=JSON.parse(localStorage.getItem("pdfSettings")||"{}");r.pricingOption&&(this.wizardData.options.pricingOption=r.pricingOption),r.includeDescriptions!==void 0&&(this.wizardData.options.includeDescriptions=r.includeDescriptions),r.includeNotes!==void 0&&(this.wizardData.options.includeNotes=r.includeNotes),r.groupByRoom!==void 0&&(this.wizardData.options.groupByRoom=r.groupByRoom),r.tipPdf&&(this.wizardData.customise.tipPdf=r.tipPdf),r.tailPdf&&(this.wizardData.customise.tailPdf=r.tailPdf),this.populateForm(),this.showToast(`Loaded ${t.productCount} products`)}catch(o){console.warn("Could not reload wizard data:",o)}})}catch(t){console.error("❌ Failed to open load picker:",t),this.showToast("Failed to open picker: "+t.message,"error")}}showToast(e,t="success"){const o=document.createElement("div");o.style.cssText=`
      position: fixed;
      bottom: 80px;
      left: 50%;
      transform: translateX(-50%);
      background: ${t==="error"?"#dc2626":"#1f2937"};
      color: white;
      padding: 12px 24px;
      border-radius: 8px;
      font-size: 0.9rem;
      z-index: 100002;
      animation: toast-in 0.3s ease;
    `,o.textContent=e,document.body.appendChild(o),setTimeout(()=>{o.style.animation="toast-out 0.3s ease",setTimeout(()=>o.remove(),300)},3e3)}escapeHtml(e){const t=document.createElement("div");return t.textContent=e||"",t.innerHTML}}const pdfWizard=new PDFWizard;class ToastManager{constructor(){this.container=null,this.toasts=new Map,this.nextId=1,this.init()}init(){document.getElementById("toast-container")?this.container=document.getElementById("toast-container"):(this.container=document.createElement("div"),this.container.id="toast-container",this.container.className="toast-container",document.body.appendChild(this.container))}show({message:e,type:t="info",duration:o=4e3,action:r=null}){const n=this.nextId++,i=document.createElement("div");i.className=`toast toast-${t}`,i.setAttribute("role","alert"),i.setAttribute("aria-live","polite");const s={success:"✓",error:"✕",warning:"⚠",info:"ℹ"};i.innerHTML=`
      <div class="toast-icon">${s[t]||s.info}</div>
      <div class="toast-content">
        <span class="toast-message">${e}</span>
        ${r?`<button class="toast-action" type="button">${r.label}</button>`:""}
      </div>
      <button class="toast-close" type="button" aria-label="Dismiss">×</button>
    `;const c=i.querySelector(".toast-close");if(c.onclick=()=>this.dismiss(n),r&&r.callback){const l=i.querySelector(".toast-action");l.onclick=()=>{r.callback(),this.dismiss(n)}}return this.container.appendChild(i),this.toasts.set(n,i),requestAnimationFrame(()=>{i.classList.add("toast-enter")}),o>0&&setTimeout(()=>this.dismiss(n),o),n}dismiss(e){const t=this.toasts.get(e);t&&(t.classList.add("toast-exit"),t.addEventListener("animationend",()=>{t.remove(),this.toasts.delete(e)}))}dismissAll(){this.toasts.forEach((e,t)=>this.dismiss(t))}success(e,t={}){return this.show({message:e,type:"success",...t})}error(e,t={}){return this.show({message:e,type:"error",duration:6e3,...t})}warning(e,t={}){return this.show({message:e,type:"warning",...t})}info(e,t={}){return this.show({message:e,type:"info",...t})}withUndo(e,t,o=5e3){return this.show({message:e,type:"info",duration:o,action:{label:"Undo",callback:t}})}}const toast=new ToastManager;window.toast=toast;class DropdownManager{constructor(){this.activeDropdown=null,this.updatePositionHandler=null,document.addEventListener("click",e=>{e.target.closest(".global-search-dropdown")||this.hideDropdown()})}showDropdown(e,t,o,r=!1){this.hideDropdown();const n=document.createElement("ul");n.className="global-search-dropdown";const i=300,s=e.getBoundingClientRect(),c=window.innerWidth,l=window.innerHeight,d=s.width,u=l-s.bottom,p=s.top;let h=!1;u<i&&p>u&&(h=!0);let m;h?m=Math.max(8,s.top-i-8):m=Math.min(l-i-8,s.bottom+8);let g=s.left;g+d>c-8&&(g=c-d-8),g<8&&(g=8);const w={position:"fixed",top:`${m}px`,left:`${g}px`,width:`${d}px`,minWidth:`${d}px`,maxWidth:`${d}px`,background:"#fff",border:"1px solid #d1d5db",borderRadius:"8px",boxShadow:"0 10px 25px -5px rgba(0, 0, 0, 0.15), 0 8px 10px -6px rgba(0, 0, 0, 0.10)",maxHeight:`${i}px`,overflowY:"auto",overflowX:"hidden",zIndex:"10010",listStyle:"none",margin:"0",padding:"4px 0",whiteSpace:"normal",wordWrap:"break-word",display:"block",pointerEvents:"auto",transform:"none",contain:"none",isolation:"isolate"};Object.keys(w).forEach(y=>{n.style.setProperty(y,w[y],"important")}),n.dropdownHeight=i,t.length===0?n.innerHTML='<li style="padding: 12px 16px; color: #6b7280; font-style: italic; background: #fff;">No products found</li>':n.innerHTML=t.map(y=>{const b=y.OrderCode||y.Code||"",f=y.Description||y.ProductName||y["Product Name"]||"";return`<li data-product='${JSON.stringify(y).replace(/'/g,"&apos;")}'
                     style="padding: 12px 16px; cursor: pointer; border-bottom: 1px solid #f3f4f6; 
                            transition: background-color 0.15s ease; font-size: 14px; line-height: 1.5;
                            margin: 0; display: block; width: 100%; 
                            white-space: normal; word-wrap: break-word; overflow: visible; background: #fff !important;">
          <span style="font-weight: 600; color: #2563eb;">${Utils.sanitizeInput(b)}</span>
          <span style="color: #6b7280; margin: 0 8px;">—</span>
          <span style="color: #374151;">${Utils.sanitizeInput(f)}</span>
        </li>`}).join(""),n.querySelectorAll("li[data-product]").forEach((y,b)=>{y.addEventListener("mouseenter",()=>{n.querySelectorAll("li.active").forEach(f=>f.classList.remove("active")),y.classList.add("hover")}),y.addEventListener("mouseleave",()=>{y.classList.remove("hover")}),y.onclick=()=>{try{const f=JSON.parse(y.getAttribute("data-product"));o(f),this.hideDropdown()}catch(f){console.error("Failed to parse product data:",f)}},r&&b===0&&(y.classList.add("active"),y.style.setProperty("background","#b87333","important"),y.querySelectorAll("span").forEach(f=>{f.style.setProperty("color","#ffffff","important")}))}),document.body.appendChild(n),this.activeDropdown=n,this.updatePositionHandler=()=>{const y=e.getBoundingClientRect(),b=window.innerHeight,f=n.dropdownHeight||300,S=b-y.bottom,k=y.top;let $=!1;S<f&&k>S&&($=!0);let E;$?E=Math.max(8,y.top-f-8):E=Math.min(b-f-8,y.bottom+8);let C=y.left;C+y.width>c-8&&(C=c-y.width-8),C<8&&(C=8),n.style.setProperty("top",`${E}px`,"important"),n.style.setProperty("left",`${C}px`,"important"),n.style.setProperty("width",`${y.width}px`,"important"),n.style.setProperty("min-width",`${y.width}px`,"important"),n.style.setProperty("max-width",`${y.width}px`,"important")},window.addEventListener("scroll",this.updatePositionHandler),window.addEventListener("resize",this.updatePositionHandler)}hideDropdown(){this.activeDropdown&&(this.updatePositionHandler&&(window.removeEventListener("scroll",this.updatePositionHandler),window.removeEventListener("resize",this.updatePositionHandler)),this.activeDropdown.remove(),this.activeDropdown=null,this.updatePositionHandler=null)}}const TIP_TAIL_STORAGE_KEY="tipTailSettings",CUSTOMER_LOGO_KEY="customerLogo";class ProductGridManager{constructor(){this.gridRows=[],this.nextRowId=1,this.currentSearchRow=null,this.searchCache=new Map,this.searchTimeout=null,this.dropdownManager=new DropdownManager,this.lastUsedRoom="Blank",this.draggedRowId=null,this.draggedRoomName=null,this.customRoomOrder=this.loadCustomRoomOrder(),this.currentSelectionId=null,this.currentSelectionName="New Selection",this.hasUnsavedChanges=!1,this.autoSaveTimeout=null,this.lastSaveTime=null}loadCustomRoomOrder(){try{const e=localStorage.getItem("customRoomOrder");return e?JSON.parse(e):[]}catch{return[]}}saveCustomRoomOrder(){try{localStorage.setItem("customRoomOrder",JSON.stringify(this.customRoomOrder))}catch(e){console.warn("Failed to save room order:",e)}}init(){const e=document.querySelector(".grid-table");e&&(e.style.removeProperty("table-layout"),e.style.removeProperty("overflow"),e.classList.remove("has-open-dropdown"));const t=document.querySelector(".global-search-dropdown");t&&t.remove(),this.setupEventListeners(),this.updateAllRoomDropdowns(),this.loadExistingProducts(),this.updateTotals(),this.ensureAtLeastOneEmptyRow(),this.handleSortChange(),this.initContextHeader(),this.checkForRecentSelection()}initContextHeader(){this.updateContextHeader();const e=document.getElementById("save-selection-btn"),t=document.getElementById("load-selection-btn");e&&e.addEventListener("click",()=>this.showSaveDialog()),t&&t.addEventListener("click",()=>this.showLoadPicker());const o=document.getElementById("entry-import"),r=document.getElementById("entry-load"),n=document.getElementById("entry-new"),i=document.getElementById("entry-continue");o&&o.addEventListener("click",()=>this.showImportModal()),r&&r.addEventListener("click",()=>this.showLoadPicker()),n&&n.addEventListener("click",()=>this.addEmptyRow()),i&&i.addEventListener("click",()=>this.loadRecentSelection())}updateContextHeader(){const e=document.getElementById("selection-name"),t=document.getElementById("status-icon"),o=document.getElementById("save-indicator");e&&(e.textContent=this.currentSelectionName||"New Selection"),t&&(this.currentSelectionId?(t.textContent="●",t.classList.add("saved"),t.classList.remove("unsaved")):(t.textContent="○",t.classList.remove("saved"))),o&&(o.style.display=this.hasUnsavedChanges?"flex":"none")}markAsChanged(){this.hasUnsavedChanges=!0,this.updateContextHeader(),clearTimeout(this.autoSaveTimeout),this.autoSaveTimeout=setTimeout(()=>{this.hasUnsavedChanges&&this.currentSelectionId&&this.autoSave()},3e4)}async autoSave(){if(!(!this.currentSelectionId||!this.hasUnsavedChanges))try{const e=this.prepareSelectionData();(await presentationRecorder.updateSelection(this.currentSelectionId,e)).success&&(this.hasUnsavedChanges=!1,this.lastSaveTime=new Date,this.updateContextHeader(),toast.success("Auto-saved"))}catch(e){console.warn("Auto-save failed:",e)}}async checkForRecentSelection(){try{const e=StorageManager.getUserSettings();if(!((e==null?void 0:e.staffEmail)||""))return;const o=await presentationLoader.fetchSelections();if(o.length>0){const r=o[0],n=document.getElementById("entry-continue"),i=document.getElementById("recent-selection-name");n&&i&&(n.style.display="flex",i.textContent=`${r.documentName||r.customerName} • ${r.date}`,n.dataset.selectionId=r.id)}}catch(e){console.warn("Could not check for recent selections:",e)}}async loadRecentSelection(){const e=document.getElementById("entry-continue");if(!(e==null?void 0:e.dataset.selectionId)){toast.warning("No recent selection found");return}this.showLoadPicker()}prepareSelectionData(){const e=Utils.getStorageItem("pdfFormSettings",{});return{customerName:e.name||"",customerEmail:e.email||"",customerPhone:e.telephone||"",customerProject:e.project||"",customerAddress:e.address||"",documentName:this.currentSelectionName,notes:"",pdfSettings:Utils.getStorageItem("pdfWizardSettings",{}),gridRows:StorageManager.getSelectedProducts(),roomOrder:this.customRoomOrder}}setupEventListeners(){const e=document.getElementById("back-to-home"),t=document.getElementById("import-file-btn"),o=document.getElementById("download-btn"),r=document.getElementById("clear-all-btn"),n=document.getElementById("settings-btn"),i=document.getElementById("add-row-btn");e&&(e.onclick=()=>location.reload()),t&&(t.onclick=()=>this.showImportModal()),o&&(o.onclick=()=>this.showDownloadModal()),r&&(r.onclick=()=>this.showClearAllModal()),n&&(n.onclick=()=>this.showSettingsModal()),i&&(i.onclick=()=>this.addEmptyRow());const s=document.getElementById("clear-all-cancel"),c=document.getElementById("clear-all-confirm");s&&(s.onclick=()=>this.hideClearAllModal()),c&&(c.onclick=()=>{var k;const S=((k=document.getElementById("clear-customer-details"))==null?void 0:k.checked)??!0;this.clearAll(S),this.hideClearAllModal()});const l=document.getElementById("settings-cancel"),d=document.getElementById("settings-save");l&&(l.onclick=()=>this.hideSettingsModal()),d&&(d.onclick=()=>this.saveSettings());const u=document.getElementById("clear-all-modal"),p=document.getElementById("settings-modal");u&&(u.onclick=S=>{S.target===u&&this.hideClearAllModal()}),p&&(p.onclick=S=>{S.target===p&&this.hideSettingsModal()});const h=document.getElementById("sort-by");h&&(h.onchange=()=>this.handleSortChange());const m=document.getElementById("sort-refresh-btn");m&&(m.onclick=()=>this.handleSortChange());const g=document.getElementById("grid-body");g&&(g.addEventListener("input",this.handleGridInput.bind(this)),g.addEventListener("change",this.handleGridChange.bind(this)),g.addEventListener("click",this.handleGridClick.bind(this)),g.addEventListener("keydown",this.handleGridKeydown.bind(this)),g.addEventListener("focusin",this.handleGridFocusIn.bind(this)),g.addEventListener("focusout",this.handleGridFocusOut.bind(this)),g.addEventListener("dragstart",this.handleDragStart.bind(this)),g.addEventListener("dragover",this.handleDragOver.bind(this)),g.addEventListener("dragleave",this.handleDragLeave.bind(this)),g.addEventListener("drop",this.handleDrop.bind(this)),g.addEventListener("dragend",this.handleDragEnd.bind(this))),document.addEventListener("click",S=>{!S.target.closest(".grid-product-cell")&&!S.target.closest(".global-search-dropdown")&&this.hideAllDropdowns()});const w=document.getElementById("pdf-email-modal"),y=document.getElementById("pdf-email-cancel");y&&w&&(y.onclick=()=>{w.style.display="none"});const b="pdfFormSettings",f=document.getElementById("pdf-email-form");w&&w.addEventListener("show",()=>{const S=Utils.getStorageItem(b,{});f&&(f["user-name"].value=S.name||"",f["user-project"].value=S.project||"",f["user-address"].value=S.address||"",f["user-email"].value=S.email||"",f["user-telephone"].value=S.telephone||"",f["exclude-prices"].checked=!!S.excludePrices,f["exclude-qty"].checked=!!S.excludeQty,f["exclude-long-description"].checked=!!S.excludeLongDescription,f["include-gst"].checked=!!S.includeGst)}),f&&(f.addEventListener("input",()=>{Utils.setStorageItem(b,{name:f["user-name"].value,project:f["user-project"].value,address:f["user-address"].value,email:f["user-email"].value,telephone:f["user-telephone"].value,excludePrices:f["exclude-prices"].checked,excludeQty:f["exclude-qty"].checked,excludeLongDescription:f["exclude-long-description"].checked,includeGst:f["include-gst"].checked})}),f.addEventListener("change",()=>{Utils.setStorageItem(b,{name:f["user-name"].value,project:f["user-project"].value,address:f["user-address"].value,email:f["user-email"].value,telephone:f["user-telephone"].value,excludePrices:f["exclude-prices"].checked,excludeQty:f["exclude-qty"].checked,excludeLongDescription:f["exclude-long-description"].checked,includeGst:f["include-gst"].checked})}),f.onsubmit=S=>{var $,E,C,O,ce,Y,J,re,ne,le,q;S.preventDefault(),Utils.setStorageItem(b,{name:f["user-name"].value,project:f["user-project"].value,address:f["user-address"].value,email:f["user-email"].value,telephone:f["user-telephone"].value,excludePrices:f["exclude-prices"].checked,excludeQty:f["exclude-qty"].checked,excludeLongDescription:f["exclude-long-description"].checked,includeGst:f["include-gst"].checked});const k={name:(($=f["user-name"])==null?void 0:$.value)||"",project:((E=f["user-project"])==null?void 0:E.value)||"",address:((C=f["user-address"])==null?void 0:C.value)||"",email:((O=f["user-email"])==null?void 0:O.value)||"",telephone:((ce=f["user-telephone"])==null?void 0:ce.value)||"",excludePrice:(Y=f["exclude-qty"])!=null&&Y.checked?!0:((J=f["exclude-price"])==null?void 0:J.checked)||((re=f["exclude-prices"])==null?void 0:re.checked)||!1,excludeQty:((ne=f["exclude-qty"])==null?void 0:ne.checked)||!1,excludeLongDescription:((le=f["exclude-long-description"])==null?void 0:le.checked)||!1,includeGst:((q=f["include-gst"])==null?void 0:q.checked)||!1,exportCsv:!0};console.log("DEBUG: userDetails created for PDF:",k),window.showPdfFormScreen?window.showPdfFormScreen(k):typeof showPdfFormScreen=="function"&&showPdfFormScreen(k),w&&(w.style.display="none")})}addEmptyRow(){const e=`row_${this.nextRowId++}`,t={id:e,product:null,room:"Blank",quantity:1,price:"0.00",notes:""};this.gridRows.push(t),this.renderGrid(),setTimeout(()=>{const o=document.querySelector(`[data-row-id="${e}"]`);o&&(o.scrollIntoView({behavior:"smooth",block:"center"}),o.style.backgroundColor="#dbeafe",o.style.transition="background-color 0.3s ease",setTimeout(()=>{o.style.backgroundColor="";const r=o.querySelector(".grid-search-input");r&&r.focus()},800))},100)}removeRow(e){const t=this.gridRows.findIndex(o=>o.id===e);if(t!==-1){const o=this.gridRows[t],r={...o,index:t,product:o.product?{...o.product}:null};if(o.product&&o.storageId&&StorageManager.removeProductFromSelection(o.storageId),this.gridRows.splice(t,1),this.renderGrid(),this.updateTotals(),r.product){const n=r.product.Description||r.product.ProductName||r.product.OrderCode||"Product",i=n.length>30?n.substring(0,30)+"...":n;toast.withUndo(`Removed "${i}"`,()=>{this.restoreRow(r)})}}this.ensureAtLeastOneEmptyRow()}restoreRow(e){const t={id:`row-${this.nextRowId++}`,product:e.product,qty:e.qty||1,notes:e.notes||"",room:e.room||"Blank",price:e.price||null,storageId:null};t.product&&(t.storageId=StorageManager.addProductToSelection({...t.product,qty:t.qty,notes:t.notes,room:t.room,customPrice:t.price}));const o=Math.min(e.index,this.gridRows.length);this.gridRows.splice(o,0,t),this.renderGrid(),this.updateTotals(),toast.success("Product restored")}moveRow(e,t){const o=this.gridRows.findIndex(i=>i.id===e);if(o===-1)return;let r;if(t==="up"?r=Math.max(0,o-1):t==="down"&&(r=Math.min(this.gridRows.length-1,o+1)),r===o)return;const n=this.gridRows.splice(o,1)[0];this.gridRows.splice(r,0,n),this.renderGrid(),this.updateTotals(),setTimeout(()=>{const i=document.querySelector(`[data-row-id="${e}"]`);i&&(i.style.backgroundColor="#dbeafe",setTimeout(()=>{i.style.backgroundColor=""},500))},100)}async handleProductSearch(e,t){if(!t||t.length<2){this.hideSearchDropdown(e);return}const o=t.toLowerCase();if(this.searchCache.has(o)){this.showSearchResults(e,this.searchCache.get(o),t);return}clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(async()=>{try{const r=await this.searchProducts(t);this.searchCache.set(o,r),this.showSearchResults(e,r,t)}catch(r){console.error("Product search failed:",r),this.hideSearchDropdown(e)}},300)}async searchProducts(e){return dataLayer.isLoaded||await new Promise(t=>{const o=()=>{dataLayer.isLoaded?t():setTimeout(o,100)};o()}),dataLayer.searchProducts(e,50)}showSearchResults(e,t,o){let r=!1;if(t.length>0&&o){const n=o.toUpperCase().trim(),i=t[0],s=(i.OrderCode||"").toString().toUpperCase().trim(),c=(i.BARCODE||i.Barcode||"").toString().toUpperCase().trim();(s===n||c===n)&&(r=!0)}this.dropdownManager.showDropdown(e,t,n=>this.selectProduct(e,n),r)}setupDropdownEvents(e,t){}hideSearchDropdown(e){this.hideGlobalDropdown()}hideGlobalDropdown(){this.dropdownManager.hideDropdown()}selectProduct(e,t){const o=e.closest(".grid-row"),r=o.dataset.rowId,n=this.gridRows.find(c=>c.id===r);if(!n)return;n.product=t;const i=t.RRP_EX||t["RRP EX GST"]||t.RRP_EX||t.RRP_EXGST||t.rrpExGst||t.RRP_INCGST||t.RRP_INCGST||t["RRP INC GST"]||t.rrpIncGst||"";n.price=i;const s=o.querySelector('input[name="price"]');s&&(s.value=i),e.value="",this.renderGrid(),this.saveRowToStorage(n),this.focusNextRowOrCreate(r)}saveRowToStorage(e){if(!e.product)return;const t={...e.product,OrderCode:e.product.OrderCode||e.product.Code||"",Description:e.product.Description||e.product.ProductName||e.product["Product Name"]||"",UserEditedPrice:e.price,RRP_EX:e.product.RRP_EX||e.product["RRP EX GST"]||e.product.RRP_EX||e.product.RRP_EXGST||e.product.rrpExGst||"0",RRP_INCGST:e.product.RRP_INCGST||e.product["RRP INC GST"]||e.product.rrpIncGst||"0",Image_URL:e.product.Image_URL||e.product.imageUrl||e.product.Image||"assets/no-image.png"},o=StorageManager.addProductToSelection(t,e.notes,e.room,e.quantity);o&&(e.storageId=o,this.updateTotals())}focusNextRowOrCreate(e){const t=this.gridRows.findIndex(o=>o.id===e);if(t<this.gridRows.length-1){const o=this.gridRows[t+1];setTimeout(()=>{const r=document.querySelector(`[data-row-id="${o.id}"] .grid-search-input`);r&&!r.classList.contains("populated")&&r.focus()},100)}else this.addEmptyRow()}handleGridInput(e){const t=e.target;t.classList.contains("grid-search-input")&&!t.classList.contains("populated")?this.handleProductSearch(t,t.value):(t.classList.contains("grid-input")||t.classList.contains("grid-textarea")||t.classList.contains("grid-select"))&&this.updateRowFromInput(t)}handleGridChange(e){const t=e.target;(t.classList.contains("grid-select")||t.classList.contains("grid-input")||t.classList.contains("grid-textarea"))&&this.updateRowFromInput(t)}handleGridClick(e){const t=e.target;if(t.classList.contains("grid-remove-btn")){const r=t.closest(".grid-row").dataset.rowId;this.removeRow(r)}else if(t.classList.contains("grid-move-btn")){const r=t.closest(".grid-row").dataset.rowId,n=t.dataset.direction;this.moveRow(r,n)}else t.closest(".grid-search-dropdown")||document.querySelectorAll(".grid-search-dropdown.visible").forEach(o=>{o.classList.remove("visible")})}handleGridKeydown(e){if(e.target.classList.contains("grid-search-input")){const t=document.querySelector(".global-search-dropdown");t?this.handleDropdownKeyboard(e,t):e.key==="Enter"&&(e.preventDefault(),this.handleProductSearch(e.target,e.target.value))}}handleDropdownKeyboard(e,t){const o=document.querySelector(".global-search-dropdown");if(!o)return;const r=o.querySelectorAll("li[data-product]"),n=o.querySelector("li.active");let i=null;const s=(c,l)=>{if(l)c.classList.add("active"),c.style.setProperty("background","#b87333","important"),c.querySelectorAll("span").forEach(d=>{d.style.setProperty("color","#ffffff","important")});else{c.classList.remove("active"),c.style.setProperty("background","#fff","important");const d=c.querySelectorAll("span");d[0]&&d[0].style.setProperty("color","#2563eb","important"),d[1]&&d[1].style.setProperty("color","#6b7280","important"),d[2]&&d[2].style.setProperty("color","#374151","important")}};switch(e.key){case"ArrowDown":if(e.preventDefault(),!n)i=r[0];else{s(n,!1);const l=(Array.from(r).indexOf(n)+1)%r.length;i=r[l]}i&&(s(i,!0),i.scrollIntoView({block:"nearest"}));break;case"ArrowUp":if(e.preventDefault(),!n)i=r[r.length-1];else{s(n,!1);const c=Array.from(r).indexOf(n),l=c===0?r.length-1:c-1;i=r[l]}i&&(s(i,!0),i.scrollIntoView({block:"nearest"}));break;case"Enter":e.preventDefault(),n&&n.click();break;case"Escape":e.preventDefault(),this.hideGlobalDropdown();break}}handleGridFocusIn(e){}handleGridFocusOut(e){}handleDragStart(e){const t=e.target.closest(".grid-row");if(!t){e.preventDefault();return}if(t.classList.contains("room-header-row")){const o=t.dataset.roomName;if(o==="Blank"){e.preventDefault();return}if(this.draggedRoomName=o,this.draggedRowId=null,e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("text/plain",`room:${o}`),t.classList.add("dragging"),e.dataTransfer.setDragImage){const r=document.createElement("div");r.textContent=`📁 ${o}`,r.style.cssText=`
          position: absolute; top: -1000px; padding: 8px 16px;
          background: #374151; color: white; border-radius: 6px;
          font-weight: 600; font-size: 14px;
        `,document.body.appendChild(r),e.dataTransfer.setDragImage(r,0,15),setTimeout(()=>r.remove(),0)}return}if(!e.target.classList.contains("grid-drag-handle")){e.preventDefault();return}if(this.draggedRowId=t.dataset.rowId,this.draggedRoomName=null,e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("text/plain",t.dataset.rowId),t.classList.add("dragging"),e.dataTransfer.setDragImage){const o=t.cloneNode(!0);o.style.opacity="0.8",o.style.position="absolute",o.style.top="-1000px",o.style.width=t.offsetWidth+"px",document.body.appendChild(o),e.dataTransfer.setDragImage(o,t.offsetWidth-10,20),setTimeout(()=>o.remove(),0)}}handleDragOver(e){e.preventDefault(),e.dataTransfer.dropEffect="move";const t=e.target.closest(".grid-row");if(!t||t.classList.contains("dragging"))return;if(document.querySelectorAll(".grid-row.drag-over-above, .grid-row.drag-over-below").forEach(n=>{n.classList.remove("drag-over-above","drag-over-below")}),this.draggedRoomName){if(!t.classList.contains("room-header-row")||t.dataset.roomName==="Blank"||t.dataset.roomName===this.draggedRoomName)return;const n=t.getBoundingClientRect(),i=n.top+n.height/2;e.clientY<i?t.classList.add("drag-over-above"):t.classList.add("drag-over-below");return}if(t.classList.contains("room-header-row"))return;const o=t.getBoundingClientRect(),r=o.top+o.height/2;e.clientY<r?t.classList.add("drag-over-above"):t.classList.add("drag-over-below")}handleDragLeave(e){const t=e.target.closest(".grid-row");if(t){const o=e.relatedTarget;t.contains(o)||t.classList.remove("drag-over-above","drag-over-below")}}handleDrop(e){e.preventDefault(),document.querySelectorAll(".grid-row.drag-over-above, .grid-row.drag-over-below").forEach(h=>{h.classList.remove("drag-over-above","drag-over-below")});const t=e.dataTransfer.getData("text/plain"),o=e.target.closest(".grid-row");if(!o||!t)return;if(t.startsWith("room:")){const h=t.replace("room:","");if(!o.classList.contains("room-header-row"))return;const m=o.dataset.roomName;if(m==="Blank"||h===m)return;const g=o.getBoundingClientRect(),w=e.clientY<g.top+g.height/2;this.moveRoomInOrder(h,m,w),this.renderGrid();return}const r=t;if(o.classList.contains("room-header-row"))return;const n=o.dataset.rowId;if(r===n)return;const i=o.getBoundingClientRect(),s=e.clientY<i.top+i.height/2,c=this.gridRows.findIndex(h=>h.id===r),l=this.gridRows.findIndex(h=>h.id===n);if(c===-1||l===-1)return;const d=this.gridRows[c],u=this.gridRows[l];d.room!==u.room&&(d.room=u.room,this.lastUsedRoom=u.room,d.product&&d.storageId&&StorageManager.updateProductRoom(d.storageId,d.room)),this.gridRows.splice(c,1);let p=this.gridRows.findIndex(h=>h.id===n);p!==-1&&(s||p++,this.gridRows.splice(p,0,d),this.renderGrid(),setTimeout(()=>{const h=document.querySelector(`[data-row-id="${r}"]`);h&&(h.style.backgroundColor="#dbeafe",h.style.transition="background-color 0.3s ease",setTimeout(()=>{h.style.backgroundColor=""},500))},50))}handleDragEnd(e){this.draggedRowId=null,this.draggedRoomName=null,document.querySelectorAll(".grid-row.dragging").forEach(t=>t.classList.remove("dragging")),document.querySelectorAll(".grid-row.drag-over-above").forEach(t=>t.classList.remove("drag-over-above")),document.querySelectorAll(".grid-row.drag-over-below").forEach(t=>t.classList.remove("drag-over-below"))}hideAllDropdowns(){this.hideGlobalDropdown()}showClearAllModal(){const e=document.getElementById("clear-all-modal");e&&(e.style.display="flex")}hideClearAllModal(){const e=document.getElementById("clear-all-modal");e&&(e.style.display="none")}async showSettingsModal(){const e=document.getElementById("settings-modal");e&&(e.style.display="flex",setTimeout(async()=>{const t=StorageManager.getUserSettings();if(t){const i=document.getElementById("staff-name"),s=document.getElementById("staff-position"),c=document.getElementById("staff-email"),l=document.getElementById("staff-telephone");i&&(i.value=t.staffName||""),s&&(s.value=t.staffPosition||""),c&&(c.value=t.staffEmail||""),l&&(l.value=t.staffPhone||"")}const o=document.getElementById("settings-version-info");if(o)try{let s=(await(await fetch("./version.txt")).text()).trim();s=s.split(/\r?\n/)[0].replace(/[^0-9.v]/g,""),o.innerText=s?`v${s}`:"",o.title="App Version"}catch{o.innerText=""}const r=document.getElementById("refresh-catalog-btn");r&&(r.onclick=()=>{localStorage.removeItem("productCatalogCsv"),window.location.reload()});const n=document.getElementById("refresh-pdf-files-btn");n&&(n.onclick=async()=>{await this.refreshPdfFileList();const i=n.textContent;n.textContent="✅ Refreshed!",n.style.background="#dcfce7",n.style.color="#059669",setTimeout(()=>{n.textContent=i,n.style.background="#f3f4f6",n.style.color="#059669"},2e3)}),this.loadCustomerLogoPreview(),this.setupCustomerLogoHandlers(),await this.populateTipTailDropdowns(),this.loadTipTailSelections(),this.setupTipTailHandlers()},0))}loadCustomerLogoPreview(){const e=document.getElementById("customer-logo-preview"),t=localStorage.getItem(CUSTOMER_LOGO_KEY);e&&(e.innerHTML=t?`<img src="${t}" style="max-height:100px;max-width:180px;width:auto;height:auto;object-fit:contain;">`:"")}setupCustomerLogoHandlers(){const e=document.getElementById("customer-logo-upload"),t=document.getElementById("customer-logo-clear"),o=document.getElementById("customer-logo-preview");e.onchange=r=>{const n=r.target.files[0];if(n){const i=new FileReader;i.onload=s=>{localStorage.setItem(CUSTOMER_LOGO_KEY,s.target.result),o&&(o.innerHTML=`<img src="${s.target.result}" style="max-height:100px;max-width:180px;width:auto;height:auto;object-fit:contain;">`)},i.readAsDataURL(n)}},t.onclick=()=>{localStorage.removeItem(CUSTOMER_LOGO_KEY),o&&(o.innerHTML=""),e&&(e.value="")}}async populateTipTailDropdowns(){console.log("🔍 Discovering available PDF files...");const t=(await this.detectAvailablePdfFiles()).map(n=>`./assets/${n}`),o=document.getElementById("tip-pdf-select"),r=document.getElementById("tail-pdf-select");o&&r&&(o.innerHTML='<option value="">(None)</option>',r.innerHTML='<option value="">(None)</option>',t.forEach(n=>{const i=n.split("/").pop();o.innerHTML+=`<option value="${n}">${i}</option>`,r.innerHTML+=`<option value="${n}">${i}</option>`}))}async detectAvailablePdfFiles(){try{const o=await fetch("./assets-list");if(o.ok){const r=await o.json();return console.log("✅ Server provided files:",r),r}}catch{console.log("ℹ️ Server endpoint not available, trying assets-list.json...")}try{const o=await fetch("./assets-list.json");if(o.ok){const r=await o.json();return console.log("✅ assets-list.json provided files:",r),r}}catch{console.log("ℹ️ assets-list.json not available, using fallback list...")}const e=["tip-AandD.pdf","tip-Builder.pdf","tip-Merchant.pdf","tip-Volume Merchant.pdf","tail.pdf","tail-generic.pdf"];console.log("🔍 Testing individual file availability...");const t=[];for(const o of e)try{const r=await fetch(`./assets/${o}`,{method:"HEAD"});r.ok?(t.push(o),console.log(`✅ Found: ${o}`)):console.log(`❌ Not found: ${o} (${r.status})`)}catch(r){console.log(`❌ Error checking ${o}:`,r.message)}return console.log(`🎯 Dynamically detected PDF files (${t.length} found):`,t),t}async refreshPdfFileList(){console.log("🔄 Refreshing PDF file list..."),await this.populateTipTailDropdowns(),console.log("✅ PDF file list refreshed")}loadTipTailSelections(){const e=JSON.parse(localStorage.getItem(TIP_TAIL_STORAGE_KEY)||"{}"),t=document.getElementById("tip-pdf-select"),o=document.getElementById("tail-pdf-select"),r=document.getElementById("tip-pdf-upload"),n=document.getElementById("tail-pdf-upload");t&&(e.tipUpload?(t.innerHTML='<option value="">Custom file selected</option>',t.value="",r&&(r.style.fontWeight="bold",r.style.color="#2563eb")):e.tipAsset&&(t.value=e.tipAsset)),o&&(e.tailUpload?(o.innerHTML='<option value="">Custom file selected</option>',o.value="",n&&(n.style.fontWeight="bold",n.style.color="#2563eb")):e.tailAsset&&(o.value=e.tailAsset))}setupTipTailHandlers(){const e=document.getElementById("tip-pdf-select"),t=document.getElementById("tail-pdf-select"),o=document.getElementById("tip-pdf-upload"),r=document.getElementById("tail-pdf-upload"),n=document.getElementById("tip-pdf-clear"),i=document.getElementById("tail-pdf-clear"),s=document.getElementById("tip-pdf-selected"),c=document.getElementById("tail-pdf-selected");e.onchange=()=>{this.saveTipTailSettings({tipAsset:e.value,tipUpload:null,tipUploadName:""}),s&&(s.textContent="")},t.onchange=()=>{this.saveTipTailSettings({tailAsset:t.value,tailUpload:null,tailUploadName:""}),c&&(c.textContent="")},o.onchange=l=>{const d=l.target.files[0];if(d){const u=new FileReader;u.onload=p=>{const h=p.target.result,m=new Uint8Array(h);let g="";for(let y=0;y<m.length;y++)g+=String.fromCharCode(m[y]);const w=btoa(g);this.saveTipTailSettings({tipAsset:"",tipUpload:w,tipUploadName:d.name}),e&&(e.value="",e.innerHTML='<option value="">Custom file selected</option>'),o&&(o.style.fontWeight="bold",o.style.color="#2563eb")},u.readAsArrayBuffer(d)}},r.onchange=l=>{const d=l.target.files[0];if(d){const u=new FileReader;u.onload=p=>{const h=p.target.result,m=new Uint8Array(h);let g="";for(let y=0;y<m.length;y++)g+=String.fromCharCode(m[y]);const w=btoa(g);this.saveTipTailSettings({tailAsset:"",tailUpload:w,tailUploadName:d.name}),t&&(t.value="",t.innerHTML='<option value="">Custom file selected</option>'),r&&(r.style.fontWeight="bold",r.style.color="#2563eb")},u.readAsArrayBuffer(d)}},n.onclick=async()=>{this.saveTipTailSettings({tipAsset:"",tipUpload:null,tipUploadName:""}),e&&(e.value="",e.innerHTML='<option value="">(None)</option>',(await this.detectAvailablePdfFiles()).forEach(d=>{e.innerHTML+=`<option value="assets/${d}">${d}</option>`})),o&&(o.value="",o.style.fontWeight="normal",o.style.color="")},i.onclick=async()=>{this.saveTipTailSettings({tailAsset:"",tailUpload:null,tailUploadName:""}),t&&(t.value="",t.innerHTML='<option value="">(None)</option>',(await this.detectAvailablePdfFiles()).forEach(d=>{t.innerHTML+=`<option value="assets/${d}">${d}</option>`})),r&&(r.value="",r.style.fontWeight="normal",r.style.color="")}}saveTipTailSettings(e){const o={...JSON.parse(localStorage.getItem(TIP_TAIL_STORAGE_KEY)||"{}"),...e};localStorage.setItem(TIP_TAIL_STORAGE_KEY,JSON.stringify(o))}hideSettingsModal(){const e=document.getElementById("settings-modal");e&&(e.style.display="none")}saveSettings(){var i,s,c,l;const e=((i=document.getElementById("staff-name"))==null?void 0:i.value)||"",t=((s=document.getElementById("staff-position"))==null?void 0:s.value)||"",o=((c=document.getElementById("staff-email"))==null?void 0:c.value)||"",r=((l=document.getElementById("staff-telephone"))==null?void 0:l.value)||"",n={staffName:e.trim(),staffPosition:t.trim(),staffEmail:o.trim(),staffPhone:r.trim()};StorageManager.saveUserSettings(n),this.hideSettingsModal(),console.log("Settings saved successfully:",n)}loadSettings(){const e=StorageManager.getUserSettings(),t=document.getElementById("staff-name"),o=document.getElementById("staff-position"),r=document.getElementById("staff-email"),n=document.getElementById("staff-telephone");t&&(t.value=e.staffName||""),o&&(o.value=e.staffPosition||""),r&&(r.value=e.staffEmail||""),n&&(n.value=e.staffPhone||"")}updateRowFromInput(e){const t=e.closest(".grid-row"),o=t.dataset.rowId,r=this.gridRows.find(i=>i.id===o);if(!r)return;let n=!1;if(e.classList.contains("grid-select")&&e.name==="room")if(e.value==="__ADD_NEW_ROOM__"){const i=prompt("Enter new room name:");if(i&&i.trim()){const s=i.trim();if(StorageManager.addCustomRoom(s))r.room=s,this.lastUsedRoom=s,console.log("✅ Added new room:",s),this.updateAllRoomDropdowns(),e.value=s;else{alert("Room name already exists or is invalid"),e.value=r.room||"Blank";return}}else{e.value=r.room||"Blank";return}}else r.room=e.value,this.lastUsedRoom=e.value;else e.classList.contains("grid-input")&&e.name==="quantity"?(r.quantity=Math.max(1,parseInt(e.value)||1),e.value=r.quantity,n=!0):e.classList.contains("grid-input")&&e.name==="price"?(r.price=e.value,n=!0):e.classList.contains("grid-textarea")&&e.name==="notes"&&(r.notes=e.value);n&&this.updateRowTotal(t,r),r.product&&r.storageId&&(StorageManager.updateProductQuantity(r.storageId,r.quantity),StorageManager.updateProductRoom(r.storageId,r.room),StorageManager.updateProductNotes(r.storageId,r.notes),n&&e.name==="price"&&StorageManager.updateProductPrice(r.storageId,r.price),this.updateTotals())}updateRowTotal(e,t){const o=e.querySelector(".grid-total-display");if(o){const r=parseFloat((t.price||"").toString().replace(/,/g,""))||0,n=parseInt(t.quantity)||1,i=r*n;o.textContent=i>0?i.toLocaleString("en-AU",{minimumFractionDigits:2,maximumFractionDigits:2}):""}}loadExistingProducts(){const e=StorageManager.getSelectedProducts();this.gridRows=[],this.nextRowId=1,e.forEach(t=>{var i,s,c,l,d,u,p,h,m,g;const o=`row_${this.nextRowId++}`;let r="";((i=t.product)==null?void 0:i.UserEditedPrice)!==void 0&&((s=t.product)==null?void 0:s.UserEditedPrice)!==null&&((c=t.product)==null?void 0:c.UserEditedPrice)!==""?r=t.product.UserEditedPrice:r=((l=t.product)==null?void 0:l.RRP_EX)||((d=t.product)==null?void 0:d["RRP EX GST"])||((u=t.product)==null?void 0:u.RRP_EX)||((p=t.product)==null?void 0:p.rrpExGst)||((h=t.product)==null?void 0:h.RRP_EXGST)||((m=t.product)==null?void 0:m.RRP_INCGST)||((g=t.product)==null?void 0:g["RRP INC GST"])||"";const n={id:o,product:t.product,room:t.room||"Blank",quantity:t.quantity||1,price:r,notes:t.notes||"",storageId:t.id};this.gridRows.push(n)}),this.renderGrid()}renderGrid(){const e=document.getElementById("grid-body"),t=document.getElementById("product-grid-empty"),o=document.getElementById("product-grid-container");if(!e)return;if(this.gridRows.length===0){o.style.display="none",t.style.display="block";return}t.style.display="none",o.style.display="block";const r=this.groupRowsByRoom(),n=[];Object.entries(r).forEach(([i,s])=>{const c=this.getRoomClass(i),d=!(i==="Blank"),u=`
        <div class="grid-row room-header-row ${c}" 
             data-room-name="${i}"
             ${d?'draggable="true"':""}>
          <div class="col-search room-header-cell" colspan="8">
            <div class="room-header-content">
              ${d?'<span class="room-drag-handle" title="Drag to reorder">⋮⋮</span>':""}
              <span class="room-name">${i}</span>
              <span class="room-count">(${s.length})</span>
            </div>
          </div>
          <div class="col-image"></div>
          <div class="col-product"></div>
          <div class="col-room"></div>
          <div class="col-qty"></div>
          <div class="col-price"></div>
          <div class="col-notes"></div>
          <div class="col-actions"></div>
        </div>
      `;n.push(u),s.forEach(p=>{n.push(this.renderRowHtml(p))})}),e.innerHTML=n.join("")}renderRowHtml(e){const t=e.product,o=t&&(t.Image_URL||t.imageUrl||t.Image)||"assets/no-image.png",r=t&&(t.Description||t.ProductName||t["Product Name"])||"",n=t&&(t.OrderCode||t.Code)||"",i=n?String(parseInt(n,10)):"",s=e.price||t&&(t.RRP_EX||t["RRP EX GST"]||t.RRP_EX||t.rrpExGst||t.RRP_EXGST||t.RRP_INCGST||t["RRP INC GST"])||"",c=parseFloat((s||"").toString().replace(/,/g,""))||0,l=parseInt(e.quantity)||1,d=c*l,u=d>0?d.toLocaleString("en-AU",{minimumFractionDigits:2,maximumFractionDigits:2}):"";return`
      <div class="grid-row ${this.getRoomRowClass(e.room)}" data-row-id="${e.id}" data-room="${(e.room||"blank").toLowerCase()}">
        <div class="col-image grid-image-cell">
          ${t?`<img src="${o}" alt="Product" class="grid-product-image" onerror="this.src='assets/no-image.png';">`:""}
        </div>
        <div class="col-product grid-product-cell ${t?"has-product":"empty-product"}">
          ${t?`
            <div class="grid-product-display">
              <div class="grid-product-name">
                <strong>${Utils.sanitizeInput(i)}</strong> ${Utils.sanitizeInput(r)}
              </div>
            </div>
          `:`
            <input type="text" 
                   class="grid-search-input" 
                   placeholder="Search for a product..." 
                   value="">
          `}
        </div>
        <div class="col-room">
          <select class="grid-select" name="room">
            ${this.getRoomOptions(e.room)}
          </select>
        </div>
        <div class="col-qty">
          <input type="number" class="grid-input" name="quantity" value="${e.quantity}" min="1" step="1">
        </div>
        <div class="col-price">
          <input type="text" class="grid-input" name="price" value="${s}" placeholder="0.00">
        </div>
        <div class="col-total">
          <div class="grid-total-display">${u}</div>
        </div>
        <div class="col-notes">
          <textarea class="grid-textarea" name="notes" placeholder="Notes..." rows="1" maxlength="140">${Utils.sanitizeInput(e.notes)}</textarea>
        </div>
        <div class="col-actions grid-actions-cell">
          <div class="grid-actions-group">
            <button class="grid-move-btn grid-move-up" title="Move up" data-direction="up">↑</button>
            <button class="grid-move-btn grid-move-down" title="Move down" data-direction="down">↓</button>
            <div class="grid-drag-handle" title="Drag to reorder" draggable="true">⋮⋮</div>
            <button class="grid-remove-btn" title="Remove row">×</button>
          </div>
        </div>
      </div>
    `}handleSortChange(){const e=document.getElementById("sort-by"),t=e?e.value:"room";this.sortGridRows(t),this.renderGrid()}sortGridRows(e){switch(e){case"room":this.gridRows.sort((t,o)=>{const r=t.room||"Blank",n=o.room||"Blank";return r.localeCompare(n)});break;case"product":this.gridRows.sort((t,o)=>{const r=t.product&&(t.product.Description||t.product.ProductName)||"",n=o.product&&(o.product.Description||o.product.ProductName)||"";return r.localeCompare(n)});break;case"code":this.gridRows.sort((t,o)=>{const r=t.product&&(t.product.OrderCode||t.product.Code)||"",n=o.product&&(o.product.OrderCode||o.product.Code)||"";return r.localeCompare(n)});break}}groupRowsByRoom(){const e=document.getElementById("sort-by");if((e?e.value:"room")!=="room")return{"All Products":this.gridRows};const o={};this.gridRows.forEach(s=>{const c=s.room||"Blank";o[c]||(o[c]=[]),o[c].push(s)});const r=Object.keys(o).filter(s=>s!=="Blank"),n=this.getSortedRoomNames(r),i={};return n.forEach(s=>{o[s]&&(i[s]=o[s])}),o.Blank&&(i.Blank=o.Blank),i}getSortedRoomNames(e){const t=this.customRoomOrder.filter(r=>e.includes(r)),o=e.filter(r=>!this.customRoomOrder.includes(r)).sort((r,n)=>r.localeCompare(n));return[...t,...o]}moveRoomInOrder(e,t,o){if(e==="Blank"||t==="Blank"||e===t)return;const r={};this.gridRows.forEach(l=>{const d=l.room||"Blank";r[d]||(r[d]=[])});const n=Object.keys(r).filter(l=>l!=="Blank"),s=this.getSortedRoomNames(n).filter(l=>l!==e);let c=s.indexOf(t);c===-1&&(c=s.length),o||c++,s.splice(c,0,e),this.customRoomOrder=s,this.saveCustomRoomOrder()}getRoomClass(e){return{Blank:"blank-room","Bath 1":"bath-room","Bath 2":"bath-room","Bath 3":"bath-room",Ensuite:"bath-room",Powder:"bath-room",Kitchen:"kitchen-room",Laundry:"laundry-room",Alfresco:"alfresco-room",Butlers:"butlers-room",Standard:"standard-room",Upgrade:"upgrade-room",Other:"other-room","All Products":"all-products"}[e]||""}getRoomRowClass(e){const t=(e||"Blank").toLowerCase();return t.includes("bath")||t.includes("ensuite")||t.includes("powder")?"bath-room-row":t.includes("kitchen")?"kitchen-room-row":t.includes("laundry")?"laundry-room-row":t.includes("alfresco")?"alfresco-room-row":t.includes("butler")?"butlers-room-row":""}getRoomOptions(e){let t=`<option value="Blank" ${e==="Blank"?"selected":""}>Blank</option>`;return config.get("rooms.predefined",[]).forEach(n=>{t+=`<option value="${n.name}" ${e===n.name?"selected":""}>${n.name}</option>`}),StorageManager.getCustomRooms().forEach(n=>{t+=`<option value="${n.name}" ${e===n.name?"selected":""}>${n.name}</option>`}),t+='<option value="__ADD_NEW_ROOM__" style="font-weight: bold; color: #2563eb;">➕ Add new room...</option>',t}updateAllRoomDropdowns(){document.querySelectorAll('.grid-select[name="room"]').forEach(o=>{o.value;const r=this.gridRows.find(n=>n.id===o.closest(".grid-row").dataset.rowId);r&&(o.innerHTML=this.getRoomOptions(r.room))});const t=document.getElementById("bulk-room-select");t&&(t.innerHTML=this.getRoomOptions("Blank"))}ensureAtLeastOneEmptyRow(){this.gridRows.length===0&&this.addEmptyRow()}updateTotals(){const e=document.getElementById("total-items"),t=document.getElementById("total-rooms"),o=document.getElementById("total-value");let r=0,n=0;const i=new Set;this.gridRows.forEach(s=>{if(s.product){r+=s.quantity;const c=parseFloat(s.price)||0;n+=c*s.quantity,s.room&&s.room!=="Blank"&&s.room.trim()!==""&&i.add(s.room)}}),e&&(e.textContent=r),t&&(t.textContent=i.size),o&&(o.textContent=n>0?`$${n.toLocaleString("en-AU",{minimumFractionDigits:2,maximumFractionDigits:2})}`:"$0.00")}clearAll(e=!0){StorageManager.clearAllSelections(),e&&(localStorage.removeItem("pdfFormSettings"),localStorage.removeItem("pdfWizardSettings"),localStorage.removeItem("customerDetails"),this.currentSelectionId=null,this.currentSelectionName="New Selection",this.hasUnsavedChanges=!1,this.customRoomOrder=[],this.saveCustomRoomOrder()),this.gridRows=[],this.nextRowId=1,this.renderGrid(),this.updateTotals(),this.ensureAtLeastOneEmptyRow(),this.updateContextHeader()}showImportModal(){const e=document.getElementById("file-import-modal");e&&(e.style.display="flex")}async showDownloadModal(){try{await pdfWizard.open({onComplete:(e,t)=>{console.log("📄 Wizard completed, generating PDF:",e),window.showPdfFormScreen?window.showPdfFormScreen(e,t):window.dispatchEvent(new CustomEvent("generatePdf",{detail:{...e,tipTailSettings:t}}))},onCancel:()=>{console.log("📄 Wizard cancelled")}})}catch(e){console.error("Failed to open PDF wizard, falling back to legacy modal:",e),this.showLegacyDownloadModal()}}async showLegacyDownloadModal(){const e=document.getElementById("pdf-email-modal");if(e){e.style.display="flex";const t=document.getElementById("pdf-email-form");if(t){const o=Utils.getStorageItem("pdfFormSettings",{});t["user-name"]&&(t["user-name"].value=o.name||""),t["user-project"]&&(t["user-project"].value=o.project||""),t["user-address"]&&(t["user-address"].value=o.address||""),t["user-email"]&&(t["user-email"].value=o.email||""),t["user-telephone"]&&(t["user-telephone"].value=o.telephone||""),t["exclude-prices"]&&(t["exclude-prices"].checked=!!o.excludePrices),t["exclude-qty"]&&(t["exclude-qty"].checked=!!o.excludeQty),t["exclude-long-description"]&&(t["exclude-long-description"].checked=!!o.excludeLongDescription),t["include-gst"]&&(t["include-gst"].checked=!!o.includeGst)}this.loadCustomerLogoPreview(),this.setupCustomerLogoHandlers(),await this.populateTipTailDropdowns(),this.loadTipTailSelections(),this.setupTipTailHandlers()}}refreshUI(){this.init()}showSaveDialog(){authUI.requireAuth(e=>{this._showSaveDialogInternal(e)})}_showSaveDialogInternal(e){const t=Utils.getStorageItem("pdfFormSettings",{}),o=!!this.currentSelectionId,r=t.name?`${t.name} - ${new Date().toLocaleDateString("en-AU")}`:this.currentSelectionName||`Selection - ${new Date().toLocaleDateString("en-AU")}`,n=`
      <div class="save-dialog-overlay" id="save-dialog">
        <div class="save-dialog">
          <h3>Save Selection</h3>
          <p>Save your current product selection for later use.</p>
          
          <div class="save-dialog-form">
            <label class="form-label" for="save-doc-name">Document Name</label>
            <input type="text" class="form-input" id="save-doc-name" 
                   value="${this.escapeHtml(r)}" maxlength="100"
                   placeholder="Enter a name for this selection">
            
            <label class="form-label" for="save-notes" style="margin-top: 12px;">Notes (optional)</label>
            <textarea class="form-input" id="save-notes" rows="2" maxlength="500"
                      placeholder="Add any notes about this selection"></textarea>
          </div>
          
          <div class="save-dialog-actions">
            <button class="btn btn-secondary" data-action="cancel">Cancel</button>
            ${o?`
              <button class="btn btn-outline" data-action="save-new">Save as New</button>
              <button class="btn btn-accent" data-action="save-update">Update</button>
            `:`
              <button class="btn btn-accent" data-action="save-new">Save</button>
            `}
          </div>
        </div>
      </div>
    `;this.injectSaveDialogStyles(),document.body.insertAdjacentHTML("beforeend",n);const i=document.getElementById("save-dialog"),s=document.getElementById("save-doc-name"),c=document.getElementById("save-notes");s==null||s.focus(),s==null||s.select(),i.querySelectorAll("button[data-action]").forEach(d=>{d.addEventListener("click",async()=>{const u=d.dataset.action;if(u==="cancel"){i.remove();return}const p=(s==null?void 0:s.value.trim())||"Untitled Selection",h=(c==null?void 0:c.value.trim())||"";this.currentSelectionName=p;const m={...this.prepareSelectionData(),documentName:p,notes:h};i.querySelectorAll("button").forEach(g=>g.disabled=!0),d.textContent="Saving...";try{let g;u==="save-update"?g=await presentationRecorder.updateSelection(this.currentSelectionId,m):(g=await presentationRecorder.saveSelection(m),g.success&&g.id&&(this.currentSelectionId=g.id)),i.remove(),g.success?(this.hasUnsavedChanges=!1,this.lastSaveTime=new Date,this.updateContextHeader(),toast.success(u==="save-update"?"Selection updated!":"Selection saved!")):toast.error("Failed to save: "+(g.error||"Unknown error"))}catch(g){i.remove(),toast.error("Failed to save: "+g.message)}})}),i.addEventListener("click",d=>{d.target===i&&i.remove()});const l=d=>{d.key==="Escape"&&(i.remove(),document.removeEventListener("keydown",l))};document.addEventListener("keydown",l)}injectSaveDialogStyles(){if(document.getElementById("save-dialog-styles"))return;document.head.insertAdjacentHTML("beforeend",`
      <style id="save-dialog-styles">
        .save-dialog-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          z-index: 100001;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }
        
        .save-dialog {
          background: white;
          border-radius: 12px;
          padding: 24px;
          max-width: 450px;
          width: 100%;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
        }
        
        .save-dialog h3 {
          margin: 0 0 8px;
          font-size: 1.25rem;
          color: var(--text-primary, #1f2937);
        }
        
        .save-dialog > p {
          margin: 0 0 20px;
          color: var(--text-secondary, #6b7280);
          font-size: 0.9rem;
        }
        
        .save-dialog-form {
          margin-bottom: 20px;
        }
        
        .save-dialog-form .form-label {
          display: block;
          font-size: 0.8125rem;
          font-weight: 500;
          color: var(--text-primary, #1f2937);
          margin-bottom: 6px;
        }
        
        .save-dialog-form .form-input {
          width: 100%;
          padding: 10px 12px;
          border: 1px solid var(--border-light, #e5e5e5);
          border-radius: 6px;
          font-size: 0.875rem;
        }
        
        .save-dialog-form .form-input:focus {
          outline: none;
          border-color: var(--color-copper, #b87333);
        }
        
        .save-dialog-form textarea {
          resize: vertical;
          min-height: 60px;
        }
        
        .save-dialog-actions {
          display: flex;
          gap: 8px;
          justify-content: flex-end;
        }
        
        .save-dialog-actions button {
          padding: 10px 20px;
          border-radius: 6px;
          font-size: 0.875rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.15s;
        }
        
        .save-dialog-actions button:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
        
        .save-dialog-actions .btn-secondary {
          background: white;
          border: 1px solid var(--border-light, #e5e5e5);
          color: var(--text-secondary, #6b7280);
        }
        
        .save-dialog-actions .btn-outline {
          background: white;
          border: 1px solid var(--color-copper, #b87333);
          color: var(--color-copper, #b87333);
        }
        
        .save-dialog-actions .btn-accent {
          background: var(--color-copper, #b87333);
          border: none;
          color: white;
        }
      </style>
    `)}showLoadPicker(){authUI.requireAuth(e=>{this._showLoadPickerInternal(e)})}_showLoadPickerInternal(e){presentationPicker.show(t=>{console.log("✅ Selection loaded:",t),this.currentSelectionId=t.id||null,this.currentSelectionName=t.documentName||t.customerName||"Loaded Selection",this.hasUnsavedChanges=!1,this.loadExistingProducts(),this.updateTotals(),this.updateContextHeader(),t.roomOrder&&Array.isArray(t.roomOrder)&&(this.customRoomOrder=t.roomOrder,this.saveCustomRoomOrder()),toast.success(`Loaded ${t.productCount||this.gridRows.length} products`)})}escapeHtml(e){const t=document.createElement("div");return t.textContent=e||"",t.innerHTML}}const ONBOARDING_KEY="onboardingCompleted",ONBOARDING_VERSION=1;class Onboarding{constructor(){this.currentStep=0,this.overlay=null}shouldShow(){const e=localStorage.getItem(ONBOARDING_KEY);if(!e)return!0;try{return JSON.parse(e).version<ONBOARDING_VERSION}catch{return!0}}show(){this.shouldShow()&&this.showForced()}showForced(){const e=document.getElementById("onboarding-overlay");e&&e.remove(),this.currentStep=0,this.createOverlay(),this.renderStep()}createOverlay(){var e,t;this.overlay=document.createElement("div"),this.overlay.id="onboarding-overlay",this.overlay.innerHTML=`
      <div class="onboarding-container">
        <div class="onboarding-content" id="onboarding-content"></div>
        <div class="onboarding-footer">
          <div class="onboarding-dots" id="onboarding-dots"></div>
          <div class="onboarding-actions">
            <button class="onboarding-skip" id="onboarding-skip">Skip</button>
            <button class="onboarding-next" id="onboarding-next">Next</button>
          </div>
        </div>
        <div class="onboarding-brand">
          <span>Seima Product Presenter</span>
        </div>
      </div>
    `,this.injectStyles(),document.body.appendChild(this.overlay),(e=document.getElementById("onboarding-skip"))==null||e.addEventListener("click",()=>this.complete()),(t=document.getElementById("onboarding-next"))==null||t.addEventListener("click",()=>this.nextStep())}injectStyles(){if(document.getElementById("onboarding-styles"))return;const e=document.createElement("style");e.id="onboarding-styles",e.textContent=`
      #onboarding-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(26, 26, 26, 0.9);
        backdrop-filter: blur(8px);
        z-index: 200000;
        display: flex;
        align-items: center;
        justify-content: center;
        animation: fadeIn 0.3s ease;
      }
      
      .onboarding-container {
        background: #fff;
        border-radius: 20px;
        max-width: 560px;
        width: 90%;
        max-height: 85vh;
        overflow: hidden;
        box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
        display: flex;
        flex-direction: column;
        border-top: 4px solid var(--color-copper, #b87333);
      }
      
      .onboarding-content {
        padding: 48px 40px 32px;
        text-align: center;
        flex: 1;
        overflow-y: auto;
      }
      
      .onboarding-logo {
        height: 48px;
        width: auto;
        margin-bottom: 32px;
        opacity: 0.9;
      }
      
      .onboarding-icon {
        font-size: 3.5rem;
        margin-bottom: 24px;
      }
      
      .onboarding-title {
        font-family: var(--font-display, 'Fraunces', serif);
        font-size: 1.75rem;
        font-weight: 600;
        color: #1a1a1a;
        margin: 0 0 16px 0;
      }
      
      .onboarding-text {
        font-size: 1.0625rem;
        color: #6b7280;
        line-height: 1.7;
        margin: 0;
      }
      
      .onboarding-feature {
        display: flex;
        align-items: flex-start;
        gap: 16px;
        text-align: left;
        padding: 16px;
        background: #f9fafb;
        border-radius: 12px;
        margin-top: 24px;
      }
      
      .onboarding-feature-icon {
        font-size: 1.5rem;
        flex-shrink: 0;
      }
      
      .onboarding-feature-content {
        flex: 1;
      }
      
      .onboarding-feature-title {
        font-weight: 600;
        color: #1a1a1a;
        margin-bottom: 4px;
      }
      
      .onboarding-feature-desc {
        font-size: 0.875rem;
        color: #6b7280;
      }
      
      .onboarding-footer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 20px 40px;
        background: #f9fafb;
        border-top: 1px solid #e5e5e5;
      }
      
      .onboarding-dots {
        display: flex;
        gap: 8px;
      }
      
      .onboarding-dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: #d1d5db;
        transition: all 0.2s ease;
      }
      
      .onboarding-dot.active {
        width: 24px;
        border-radius: 4px;
        background: var(--color-copper, #b87333);
      }
      
      .onboarding-actions {
        display: flex;
        gap: 12px;
      }
      
      .onboarding-skip {
        padding: 10px 20px;
        background: transparent;
        border: none;
        color: #6b7280;
        font-size: 0.875rem;
        font-weight: 500;
        cursor: pointer;
        transition: color 0.15s;
      }
      
      .onboarding-skip:hover {
        color: #1a1a1a;
      }
      
      .onboarding-next {
        padding: 10px 24px;
        background: var(--color-charcoal, #1a1a1a);
        border: none;
        color: #fff;
        font-size: 0.875rem;
        font-weight: 600;
        border-radius: 8px;
        cursor: pointer;
        transition: all 0.15s;
      }
      
      .onboarding-next:hover {
        background: #2d2d2d;
        transform: translateY(-1px);
      }
      
      .onboarding-brand {
        text-align: center;
        padding: 12px 20px;
        font-size: 0.6875rem;
        color: #9ca3af;
        letter-spacing: 0.05em;
        text-transform: uppercase;
        border-top: 1px solid #f0f0f0;
      }
      
      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
    `,document.head.appendChild(e)}getSteps(){return[{icon:"logo",title:"Welcome to Product Presenter",text:"Create beautiful PDF presentations of Seima products for your clients in minutes.",features:[]},{icon:"📦",title:"Add Your Products",text:"There are three ways to get started:",features:[{icon:"📁",title:"Import a File",desc:"Upload CSV or Excel files with product codes"},{icon:"📂",title:"Load a Selection",desc:"Continue from a previous saved selection"},{icon:"🔍",title:"Search Products",desc:"Search and add products one by one"}]},{icon:"🏠",title:"Organise by Room",text:"Group products by room or area. Drag to reorder, and easily manage your selection.",features:[{icon:"🎨",title:"Colour-coded",desc:"Rooms are visually distinct for quick reference"},{icon:"💾",title:"Auto-saves",desc:"Your work is automatically preserved"}]},{icon:"📄",title:"Create Your PDF",text:'Click "Create PDF" to customise and generate a professional presentation with your branding.',features:[{icon:"💰",title:"Pricing Options",desc:"Show, hide, or add GST to prices"},{icon:"📑",title:"Cover Pages",desc:"Add branded cover and appendix pages"}]}]}renderStep(){const e=this.getSteps(),t=e[this.currentStep],o=document.getElementById("onboarding-content"),r=document.getElementById("onboarding-dots"),n=document.getElementById("onboarding-next");if(!o||!r)return;let i="";t.features.length>0&&(i=t.features.map(c=>`
        <div class="onboarding-feature">
          <span class="onboarding-feature-icon">${c.icon}</span>
          <div class="onboarding-feature-content">
            <div class="onboarding-feature-title">${c.title}</div>
            <div class="onboarding-feature-desc">${c.desc}</div>
          </div>
        </div>
      `).join(""));const s=t.icon==="logo"?'<img src="assets/seima-logo.png" alt="Seima" class="onboarding-logo">':`<div class="onboarding-icon">${t.icon}</div>`;o.innerHTML=`
      ${s}
      <h2 class="onboarding-title">${t.title}</h2>
      <p class="onboarding-text">${t.text}</p>
      ${i}
    `,r.innerHTML=e.map((c,l)=>`<div class="onboarding-dot ${l===this.currentStep?"active":""}"></div>`).join(""),n&&(n.textContent=this.currentStep===e.length-1?"Get Started":"Next")}nextStep(){const e=this.getSteps();this.currentStep<e.length-1?(this.currentStep++,this.renderStep()):this.complete()}complete(){localStorage.setItem(ONBOARDING_KEY,JSON.stringify({version:ONBOARDING_VERSION,completedAt:new Date().toISOString()})),this.overlay&&(this.overlay.style.animation="fadeIn 0.2s ease reverse",setTimeout(()=>{this.overlay.remove(),this.overlay=null},200))}reset(){localStorage.removeItem(ONBOARDING_KEY)}}const onboarding=new Onboarding;class SeimaScanner{constructor(){this.navigationManager=null,this.fileImportManager=new FileImportManager,this.productGridManager=new ProductGridManager,this.isInitialized=!1,errorHandler.log("SeimaScanner application starting",LogLevel.INFO)}async init(){try{errorHandler.log("Initializing application modules",LogLevel.INFO);const e=browserCompatibility.getCompatibilityReport();errorHandler.log(`Browser compatibility: ${e.score}% (${e.browserName})`,LogLevel.INFO),browserCompatibility.shouldShowCompatibilityWarning()&&this.showCompatibilityWarning(),this.navigationManager=new NavigationManager,await this.navigationManager.init(),this.fileImportManager.init(),this.setupGlobalEventListeners(),this.productGridManager.init(),window.navigationManager=this.navigationManager,window.productGridManager=this.productGridManager,window.browserCompatibility=browserCompatibility,window.downloadWithFallback=downloadWithFallback,window.showPdfFormScreen=showPdfFormScreen$1,this.isInitialized=!0,errorHandler.log("Seima Scanner initialized successfully",LogLevel.INFO);const t=document.querySelector(".grid-container");return t&&t.classList.add("ready"),setTimeout(()=>{onboarding.show()},500),!0}catch(e){return errorHandler.handleError({message:"Failed to initialize application",error:e,category:ErrorCategory.UI,level:LogLevel.CRITICAL,context:"app-init"}),!1}}showCompatibilityWarning(){const e=browserCompatibility.getCompatibilityReport(),t=e.recommendations;if(t.length===0)return;const o=t.filter(i=>i.type==="critical"),r=e.score<config.get("compatibility.minCompatibilityScore",70);if(o.length===0&&!r)return;const n=document.createElement("div");n.style.cssText=`
      position: fixed; top: 0; left: 0; right: 0; z-index: 9998;
      background: linear-gradient(135deg, #fef3c7 0%, #fed7aa 100%);
      border-bottom: 2px solid #f59e0b; padding: 12px 16px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
      font-size: 14px; line-height: 1.4;
    `,n.innerHTML=`
      <div style="display: flex; align-items: center; justify-content: space-between;">
        <div style="display: flex; align-items: center;">
          <span style="font-size: 18px; margin-right: 8px;">⚠️</span>
          <div>
            <strong style="color: #92400e;">Browser Compatibility Notice</strong>
            <div style="color: #a16207; font-size: 13px; margin-top: 2px;">
              ${o.length>0?o[0].message:"Some features may not work optimally"}
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
    `,document.body.insertBefore(n,document.body.firstChild)}setupGlobalEventListeners(){window.addEventListener("generatePdf",e=>{const{tipTailSettings:t,...o}=e.detail;ensurePdfSpinner(),showPdfFormScreen$1(o,t||null)}),window.addEventListener("beforeunload",()=>{}),browserCompatibility.features.memoryAPI&&setInterval(()=>{const e=browserCompatibility.memoryInfo;e.memoryPressure==="high"&&console.warn("High memory usage detected:",e)},6e4)}getSelectedProducts(){return StorageManager.getSelectedProducts()}clearSelection(){return StorageManager.clearAllSelections()}addProduct(e,t,o,r){return StorageManager.addProductToSelection(e,t,o,r)}updateSelectionCount(){this.navigationManager&&this.navigationManager.updateSelectionCount()}showError(e){alert(e)}}document.addEventListener("DOMContentLoaded",()=>{window.seimaScanner=new SeimaScanner,window.seimaScanner.init()});window.addEventListener("DOMContentLoaded",()=>{fetch("./version.txt").then(a=>a.text()).then(a=>{const e=document.getElementById("app-version");if(e){const t=a.trim().split(/\s+|-/)[0];e.textContent=`Ver: ${t}`,e.addEventListener("click",()=>{showChangelog(a.trim(),t)})}}),setupHelpButton(),setupUserMenu()});function setupHelpButton(){const a=document.getElementById("help-btn");a&&a.addEventListener("click",()=>{showUserGuide()});const e=document.getElementById("quick-start-btn");e&&e.addEventListener("click",()=>{onboarding.showForced()})}function setupUserMenu(){const a=document.getElementById("user-menu-container"),e=document.getElementById("user-menu-trigger"),t=document.getElementById("user-menu-dropdown"),o=document.getElementById("sign-in-btn"),r=document.getElementById("user-avatar"),n=document.getElementById("user-name-display");function i(l){var d,u,p,h;if(l){a&&(a.style.display="block"),o&&(o.style.display="none");const m=s(l.name);r&&(r.textContent=m),n&&(n.textContent=((d=l.name)==null?void 0:d.split(" ")[0])||"User"),t&&(t.innerHTML=`
          <div class="user-menu-header">
            <div class="user-menu-name">${c(l.name||"User")}</div>
            <div class="user-menu-email">${c(l.email||"")}</div>
          </div>
          <div class="user-menu-items">
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
            <button class="user-menu-item danger" id="menu-logout">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                <polyline points="16 17 21 12 16 7"></polyline>
                <line x1="21" y1="12" x2="9" y2="12"></line>
              </svg>
              Sign Out
            </button>
          </div>
        `,(u=document.getElementById("menu-profile"))==null||u.addEventListener("click",()=>{t.style.display="none",showProfileModal(l)}),(p=document.getElementById("menu-password"))==null||p.addEventListener("click",()=>{t.style.display="none",showChangePasswordModal()}),(h=document.getElementById("menu-logout"))==null||h.addEventListener("click",()=>{t.style.display="none",authService.logout(),i(null)}))}else a&&(a.style.display="none"),o&&(o.style.display="block")}function s(l){if(!l)return"?";const d=l.trim().split(" ");return d.length>=2?(d[0][0]+d[d.length-1][0]).toUpperCase():l.substring(0,2).toUpperCase()}function c(l){const d=document.createElement("div");return d.textContent=l||"",d.innerHTML}e&&t&&(e.addEventListener("click",l=>{l.stopPropagation();const d=t.style.display!=="none";t.style.display=d?"none":"block"}),document.addEventListener("click",l=>{a!=null&&a.contains(l.target)||(t.style.display="none")})),o&&o.addEventListener("click",()=>{authUI.showLogin(l=>{i(l)})}),authService.onAuthChange=i,i(authService.getCurrentUser())}function showProfileModal(a){var t;const e=`
    <div class="auth-modal-overlay" id="profile-modal">
      <div class="auth-modal" style="position: relative;">
        <button class="auth-close" onclick="document.getElementById('profile-modal').remove()">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>
        
        <div class="auth-header">
          <h2 class="auth-title">Edit Profile</h2>
          <p class="auth-subtitle">Update your account details</p>
        </div>
        
        <form class="auth-form" id="profile-form">
          <div id="profile-message"></div>
          
          <div class="auth-field">
            <label>Email</label>
            <input type="email" value="${a.email||""}" disabled style="background: #f3f4f6; cursor: not-allowed;">
            <div class="field-hint">Email cannot be changed</div>
          </div>
          
          <div class="auth-field">
            <label for="profile-name">Name</label>
            <input type="text" id="profile-name" value="${a.name||""}" required>
          </div>
          
          <div class="auth-field">
            <label for="profile-position">Position</label>
            <input type="text" id="profile-position" value="${a.position||""}">
          </div>
          
          <div class="auth-field">
            <label for="profile-phone">Phone</label>
            <input type="tel" id="profile-phone" value="${a.phone||""}">
          </div>
          
          <button type="submit" class="auth-btn auth-btn-primary">Save Changes</button>
          <button type="button" class="auth-btn auth-btn-secondary" onclick="document.getElementById('profile-modal').remove()">Cancel</button>
        </form>
      </div>
    </div>
  `;document.body.insertAdjacentHTML("beforeend",e),(t=document.getElementById("profile-form"))==null||t.addEventListener("submit",async o=>{var i,s,c;o.preventDefault();const r={name:(i=document.getElementById("profile-name"))==null?void 0:i.value,position:(s=document.getElementById("profile-position"))==null?void 0:s.value,phone:(c=document.getElementById("profile-phone"))==null?void 0:c.value},n=await authService.updateProfile(r);n.success?(document.getElementById("profile-message").innerHTML='<div class="auth-message success">Profile updated!</div>',setTimeout(()=>{var l;(l=document.getElementById("profile-modal"))==null||l.remove(),setupUserMenu()},1e3)):document.getElementById("profile-message").innerHTML=`<div class="auth-message error">${n.error}</div>`})}function showChangePasswordModal(){var e;document.body.insertAdjacentHTML("beforeend",`
    <div class="auth-modal-overlay" id="password-modal">
      <div class="auth-modal" style="position: relative;">
        <button class="auth-close" onclick="document.getElementById('password-modal').remove()">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>
        
        <div class="auth-header">
          <h2 class="auth-title">Change Password</h2>
          <p class="auth-subtitle">Enter your current and new password</p>
        </div>
        
        <form class="auth-form" id="password-form">
          <div id="password-message"></div>
          
          <div class="auth-field">
            <label for="current-password">Current Password</label>
            <input type="password" id="current-password" required>
          </div>
          
          <div class="auth-field">
            <label for="new-password">New Password</label>
            <input type="password" id="new-password" required>
            <div class="field-hint">At least 8 characters with 1 number</div>
          </div>
          
          <div class="auth-field">
            <label for="confirm-password">Confirm New Password</label>
            <input type="password" id="confirm-password" required>
          </div>
          
          <button type="submit" class="auth-btn auth-btn-primary">Change Password</button>
          <button type="button" class="auth-btn auth-btn-secondary" onclick="document.getElementById('password-modal').remove()">Cancel</button>
        </form>
      </div>
    </div>
  `),(e=document.getElementById("password-form"))==null||e.addEventListener("submit",async t=>{var s,c,l;t.preventDefault();const o=(s=document.getElementById("current-password"))==null?void 0:s.value,r=(c=document.getElementById("new-password"))==null?void 0:c.value,n=(l=document.getElementById("confirm-password"))==null?void 0:l.value;if(r!==n){document.getElementById("password-message").innerHTML='<div class="auth-message error">New passwords do not match</div>';return}const i=await authService.changePassword(o,r);i.success?(document.getElementById("password-message").innerHTML='<div class="auth-message success">Password changed!</div>',setTimeout(()=>{var d;(d=document.getElementById("password-modal"))==null||d.remove()},1500)):document.getElementById("password-message").innerHTML=`<div class="auth-message error">${i.error}</div>`})}function showUserGuide(){const a=document.getElementById("user-guide-modal"),e=document.getElementById("user-guide-content");if(!a||!e)return;e.innerHTML=getUserGuideContent(),a.style.display="flex";const t=document.getElementById("user-guide-close");t&&(t.onclick=()=>{a.style.display="none"}),a.onclick=r=>{r.target===a&&(a.style.display="none")};const o=r=>{r.key==="Escape"&&(a.style.display="none",document.removeEventListener("keydown",o))};document.addEventListener("keydown",o)}function getUserGuideContent(){return`
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
      <h3>Login & Authentication</h3>
      <p>You can browse products and create PDFs without logging in. However, to <strong>save or load selections</strong> from the cloud, you'll need to log in.</p>
      <ul>
        <li>Click <strong>Login</strong> in the navigation bar to sign in or create an account</li>
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
      <p>Click the <strong>Save</strong> button in the context bar to save your current selection. You'll be prompted to log in if you haven't already. Saved selections include:</p>
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
        <li><strong>Room/Group:</strong> Groups products by their assigned room</li>
        <li><strong>Entry Order:</strong> Shows products in the order they were added</li>
        <li><strong>Product Name:</strong> Alphabetical by product description</li>
        <li><strong>Product Code:</strong> Numerical by order code</li>
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
        <span class="guide-footer-tagline">Beautiful bathrooms & kitchens</span>
      </div>
      <p class="guide-footer-copyright">© ${new Date().getFullYear()} Seima. All rights reserved.</p>
    </div>
  `}function showChangelog(a,e){const t=document.getElementById("changelog-modal"),o=document.getElementById("changelog-version"),r=document.getElementById("changelog-content");if(!t||!o||!r)return;o.textContent=`v${e}`;const n=parseChangelogContent(a,e);r.innerHTML=n,t.style.display="block";const i=document.getElementById("changelog-close");i&&(i.onclick=()=>{t.style.display="none"}),t.onclick=s=>{s.target===t&&(t.style.display="none")}}function parseChangelogContent(a,e){const t=a.split(/\s*-\s*/,2),o=t.length>1?t[1]:"Updates and improvements";return e==="1.9.0"?`
      <div style="margin-bottom: 20px;">
        <h4 style="color: #2563eb; margin: 0 0 10px 0;">Major Refactoring & Enhanced Architecture</h4>
        <p style="margin: 0 0 15px 0; color: #666;">${o}</p>
      </div>
      
      <div style="margin-bottom: 20px;">
        <h5 style="color: #059669; margin: 0 0 8px 0;">✨ New Features</h5>
        <ul style="margin: 0; padding-left: 20px; color: #555;">
          <li>Enhanced error handling with categorised logging system</li>
          <li>Modular architecture with centralised configuration management</li>
          <li>Comprehensive JSDoc documentation across all modules</li>
          <li>Professional development workflow with ESLint and Prettier</li>
          <li>Clickable version number to view changelog</li>
        </ul>
      </div>
      
      <div style="margin-bottom: 20px;">
        <h5 style="color: #dc2626; margin: 0 0 8px 0;">🐛 Bug Fixes</h5>
        <ul style="margin: 0; padding-left: 20px; color: #555;">
          <li>Fixed version display to show only version number</li>
          <li>Resolved configuration loading errors</li>
          <li>Fixed ES module compatibility issues</li>
          <li>Improved browser compatibility detection</li>
        </ul>
      </div>
      
      <div style="margin-bottom: 20px;">
        <h5 style="color: #7c3aed; margin: 0 0 8px 0;">🔧 Developer Experience</h5>
        <ul style="margin: 0; padding-left: 20px; color: #555;">
          <li>Added Node.js and Python development servers</li>
          <li>Configured automated code formatting and linting</li>
          <li>Enhanced README with setup instructions</li>
          <li>Created npm scripts for common development tasks</li>
        </ul>
      </div>
      
      <div style="background: #f3f4f6; padding: 12px; border-radius: 8px; margin-top: 16px;">
        <p style="margin: 0; font-size: 0.9em; color: #666;">
          <strong>For developers:</strong> This version includes significant architectural improvements that make the codebase more maintainable and easier to extend with new features.
        </p>
      </div>
    `:`
    <div style="margin-bottom: 20px;">
      <h4 style="color: #2563eb; margin: 0 0 10px 0;">Updates & Improvements</h4>
      <p style="margin: 0; color: #666;">${o}</p>
    </div>
    
    <div style="background: #f3f4f6; padding: 12px; border-radius: 8px;">
      <p style="margin: 0; font-size: 0.9em; color: #666;">
        This version includes various updates and improvements to enhance your experience with the Seima Product Selector.
      </p>
    </div>
  `}
