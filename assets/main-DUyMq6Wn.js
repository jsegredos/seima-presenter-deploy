(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const LogLevel={DEBUG:"debug",INFO:"info",WARN:"warn",ERROR:"error",CRITICAL:"critical"},ErrorCategory={NETWORK:"network",DATA:"data",UI:"ui",PDF:"pdf",STORAGE:"storage",COMPATIBILITY:"compatibility",IMPORT:"import",VALIDATION:"validation"};class ErrorHandler{constructor(){this.logs=[],this.maxLogs=1e3,this.enableConsoleLogging=!0,this.enableUserNotifications=!0,this.errorStats=new Map,this.setupGlobalErrorHandlers()}setupGlobalErrorHandlers(){window.addEventListener("error",e=>{var t;e.message&&e.message.includes("ResizeObserver")||this.handleError({message:e.message,filename:e.filename,lineNumber:e.lineno,columnNumber:e.colno,error:e.error,category:ErrorCategory.UI,context:"global",showUser:!((t=e.message)!=null&&t.includes("ResizeObserver"))})}),window.addEventListener("unhandledrejection",e=>{String(e.reason||"").includes("ResizeObserver")||this.handleError({message:`Unhandled promise rejection: ${e.reason}`,error:e.reason,category:ErrorCategory.DATA,context:"promise"})})}handleError(e){const{message:t,error:o,category:r=ErrorCategory.UI,context:s="unknown",level:n=LogLevel.ERROR,showUser:i=!0}=e,c={id:this.generateErrorId(),timestamp:new Date().toISOString(),message:t,category:r,context:s,level:n,stack:(o==null?void 0:o.stack)||new Error().stack,userAgent:navigator.userAgent,url:window.location.href,additionalInfo:this.gatherAdditionalInfo(o)};return this.log(c),this.updateErrorStats(r),i&&this.enableUserNotifications&&n!==LogLevel.DEBUG&&this.showUserNotification(c),n===LogLevel.CRITICAL&&this.attemptRecovery(c),c.id}log(e,t=LogLevel.INFO){const o=typeof e=="string"?{message:e,level:t,timestamp:new Date().toISOString()}:e;this.logs.push(o),this.logs.length>this.maxLogs&&this.logs.shift(),this.enableConsoleLogging&&this.consoleLog(o),(t===LogLevel.ERROR||t===LogLevel.CRITICAL)&&this.persistCriticalLog(o)}consoleLog(e){const{level:t,message:o,category:r,context:s}=e,n=`[${t.toUpperCase()}]${r?` [${r}]`:""}${s?` [${s}]`:""}`;switch(t){case LogLevel.DEBUG:console.debug(n,o,e);break;case LogLevel.INFO:console.info(n,o);break;case LogLevel.WARN:console.warn(n,o,e);break;case LogLevel.ERROR:case LogLevel.CRITICAL:console.error(n,o,e);break;default:console.log(n,o)}}showUserNotification(e){const{message:t,category:o,level:r}=e,s=this.generateUserFriendlyMessage(t,o);r!==LogLevel.CRITICAL?this.showToast(s,r):this.showErrorModal(s,e)}showToast(e,t){const o=document.createElement("div");o.className=`error-toast error-toast--${t}`,o.style.cssText=`
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
    `,document.body.appendChild(o)}generateUserFriendlyMessage(e,t){return{[ErrorCategory.NETWORK]:"Unable to connect to the server. Please check your internet connection and try again.",[ErrorCategory.DATA]:"There was an issue loading product data. The page will retry automatically.",[ErrorCategory.PDF]:"PDF generation failed. Please try again or contact support if the problem persists.",[ErrorCategory.STORAGE]:"Unable to save your data locally. Please ensure you have enough storage space.",[ErrorCategory.IMPORT]:"File import failed. Please check your file format and try again.",[ErrorCategory.VALIDATION]:"Please check your input and try again.",[ErrorCategory.COMPATIBILITY]:"Your browser may not support all features. Consider updating to a newer version.",[ErrorCategory.UI]:"A display issue occurred. This usually resolves automatically."}[t]||"An unexpected error occurred. Please try refreshing the page."}gatherAdditionalInfo(e){var t;return{timestamp:Date.now(),memoryUsage:performance.memory?{used:Math.round(performance.memory.usedJSHeapSize/1024/1024),total:Math.round(performance.memory.totalJSHeapSize/1024/1024),limit:Math.round(performance.memory.jsHeapSizeLimit/1024/1024)}:null,viewport:{width:window.innerWidth,height:window.innerHeight},localStorage:this.getStorageInfo(),errorType:(t=e==null?void 0:e.constructor)==null?void 0:t.name,hasNetworkConnection:navigator.onLine}}getStorageInfo(){try{const e=Object.keys(localStorage),t=e.reduce((o,r)=>o+localStorage.getItem(r).length,0);return{itemCount:e.length,totalSize:Math.round(t/1024),available:!0}}catch{return{available:!1}}}generateErrorId(){return`err_${Date.now()}_${Math.random().toString(36).substr(2,9)}`}updateErrorStats(e){const t=this.errorStats.get(e)||0;this.errorStats.set(e,t+1)}attemptRecovery(e){const{category:t}=e;switch(this.log(`Attempting recovery for critical ${t} error`,LogLevel.INFO),t){case ErrorCategory.STORAGE:this.recoverStorage();break;case ErrorCategory.DATA:this.recoverData();break;default:this.log("No specific recovery strategy available",LogLevel.WARN)}}recoverStorage(){try{["logs","cache","temp"].forEach(t=>{localStorage.getItem(t)&&(localStorage.removeItem(t),this.log(`Cleared ${t} from storage for recovery`,LogLevel.INFO))})}catch{this.log("Storage recovery failed",LogLevel.ERROR)}}recoverData(){try{window.dataLayer&&typeof window.dataLayer.init=="function"&&(window.dataLayer.init(),this.log("Attempting data layer recovery",LogLevel.INFO))}catch{this.log("Data recovery failed",LogLevel.ERROR)}}persistCriticalLog(e){try{const t=JSON.parse(localStorage.getItem("criticalLogs")||"[]");t.push(e),t.length>50&&t.splice(0,t.length-50),localStorage.setItem("criticalLogs",JSON.stringify(t))}catch{}}getErrorStats(){return{totalLogs:this.logs.length,categoryBreakdown:Object.fromEntries(this.errorStats),recentErrors:this.logs.filter(e=>e.level===LogLevel.ERROR||e.level===LogLevel.CRITICAL).slice(-10)}}exportLogs(){return JSON.stringify({logs:this.logs,stats:this.getErrorStats(),exportTime:new Date().toISOString(),userAgent:navigator.userAgent,url:window.location.href},null,2)}clearLogs(){this.logs=[],this.errorStats.clear(),localStorage.removeItem("criticalLogs"),this.log("Logs cleared",LogLevel.INFO)}}const errorHandler=new ErrorHandler;window.errorHandler=errorHandler;const Environment={DEVELOPMENT:"development",STAGING:"staging",PRODUCTION:"production"},CONFIG_SCHEMA={app:{name:{type:"string",default:"Seima Product Presenter",required:!0},version:{type:"string",default:"1.9.2",required:!0},environment:{type:"string",default:Environment.PRODUCTION,enum:Object.values(Environment)},debug:{type:"boolean",default:!1},buildDate:{type:"string",default:()=>new Date().toISOString()}},api:{catalogUrl:{type:"string",default:"https://docs.google.com/spreadsheets/d/e/2PACX-1vRnMqBCqB9L52W6YNgreLHJKvxOanS76CJN8ZUorBl8Iccha6MzUpDkGa0N8GSYFPP2zyql1Tq6aBn8/pub?gid=0&single=true&output=csv",required:!0},timeout:{type:"number",default:3e4,min:5e3,max:12e4},retryAttempts:{type:"number",default:3,min:1,max:10},retryDelay:{type:"number",default:1e3,min:500,max:1e4}},storage:{keys:{type:"object",default:{customRooms:"customRooms",selectedProducts:"selectedProducts",productCatalog:"productCatalog",userPreferences:"userPreferences",roomAssignments:"roomAssignments",criticalLogs:"criticalLogs"}},maxSize:{type:"number",default:5*1024*1024},compressionEnabled:{type:"boolean",default:!0}},ui:{theme:{type:"string",default:"light",enum:["light","dark","auto"]},language:{type:"string",default:"en-AU"},animationsEnabled:{type:"boolean",default:!0},annotationMaxLength:{type:"number",default:140,min:50,max:500},quantityOptions:{type:"array",default:[1,2,3,4,5,6,7,8,9,10]},autoSaveInterval:{type:"number",default:3e4,min:1e4,max:3e5},maxSearchResults:{type:"number",default:8,min:5,max:50}},rooms:{predefined:{type:"array",default:[{name:"Bath 1",icon:"🛁",category:"bathroom"},{name:"Bath 2",icon:"🛁",category:"bathroom"},{name:"Bath 3",icon:"🛁",category:"bathroom"},{name:"Ensuite",icon:"🚿",category:"bathroom"},{name:"Powder",icon:"🚽",category:"bathroom"},{name:"Kitchen",icon:"🍽️",category:"kitchen"},{name:"Butlers",icon:"👨‍🍳",category:"kitchen"},{name:"Laundry",icon:"🧺",category:"utility"},{name:"Alfresco",icon:"🍽️",category:"outdoor"},{name:"Standard",icon:"📦",category:"package"},{name:"Upgrade",icon:"⭐",category:"package"}]},maxCustomRooms:{type:"number",default:20,min:5,max:100}},import:{maxFileSize:{type:"number",default:10*1024*1024},acceptedTypes:{type:"array",default:[".csv",".xlsx",".xls",".json"]},requiredColumns:{type:"array",default:["OrderCode"]},optionalColumns:{type:"array",default:["Description","RRP_INCGST","Image_URL","Room","Quantity","Notes"]},batchSize:{type:"number",default:100,min:10,max:1e3},allowDuplicates:{type:"boolean",default:!1},productCodeValidation:{type:"object",default:{regex:"^\\d{6}$",allowAnyNonEmpty:!1,skipValidation:!1}},columnPatterns:{type:"object",default:{productCode:["code","ordercode","productcode","sku","order code","product code"],productName:["product name","description","name"],quantity:["quantity","qty","min order quantity","orderquantity"],priceIncGst:["price ea inc gst","price inc gst","priceincgst","rrp inc gst"],priceExGst:["price per unit","price ex gst","rrp ex gst"],room:["room","location","group"],notes:["notes","note","comments","comment"],productsJson:["products json","productsjson"],customerName:["customer name","customername"],customerEmail:["customer email","customeremail"],customerPhone:["customer phone","customerphone"],customerAddress:["customer address","customeraddress"],customerProject:["customer project","customerproject"]}}},pdf:{format:{type:"string",default:"A4",enum:["A4","Letter","A3"]},orientation:{type:"string",default:"portrait",enum:["portrait","landscape"]},quality:{type:"number",default:1,min:.1,max:2},maxFileSize:{type:"number",default:50*1024*1024},includeImages:{type:"boolean",default:!0},imageCompression:{type:"number",default:.8,min:.1,max:1},watermark:{type:"boolean",default:!1},fonts:{type:"object",default:{primary:"SF Pro Display, Segoe UI, Arial, sans-serif",monospace:"Menlo, Monaco, Consolas, monospace"}}},email:{serviceId:{type:"string",default:"service_rblizfg",required:!0},templateId:{type:"string",default:"template_8st9fhk",required:!0},publicKey:{type:"string",default:"MHAEjvnc_xx8DIRCA",required:!0},maxAttachmentSize:{type:"number",default:15*1024*1024},retryAttempts:{type:"number",default:3,min:1,max:5},retryDelay:{type:"number",default:2e3,min:1e3,max:1e4},bccEmail:{type:"string",default:"jsegredos@gmail.com"}},compatibility:{minChromeVersion:{type:"number",default:80,min:60},minFirefoxVersion:{type:"number",default:75,min:60},minSafariVersion:{type:"number",default:13,min:10},requiredFeatures:{type:"array",default:["localStorage","fileReader","blob","createObjectURL","fetch"]},minCompatibilityScore:{type:"number",default:70,min:50,max:100},memoryWarningThreshold:{type:"number",default:.8,min:.5,max:1},enableSamsungOptimisations:{type:"boolean",default:!0},enableExtendedTimeouts:{type:"boolean",default:!0}},performance:{maxProductsPerSession:{type:"number",default:1e3,min:100,max:1e4},imageCacheSize:{type:"number",default:100,min:50,max:500},virtualScrollThreshold:{type:"number",default:100,min:50,max:1e3},debounceDelay:{type:"number",default:300,min:100,max:1e3},batchUpdateSize:{type:"number",default:50,min:10,max:200}},logging:{maxLogs:{type:"number",default:1e3,min:100,max:1e4},persistCriticalLogs:{type:"boolean",default:!0},enableConsoleLogging:{type:"boolean",default:!0},enableUserNotifications:{type:"boolean",default:!0},logLevel:{type:"string",default:"info",enum:["debug","info","warn","error","critical"]}}};class ConfigManager{constructor(){this.config={},this.validators=new Map,this.listeners=new Map,this.environment=this.detectEnvironment(),this.initializeConfig(),this.setupValidators()}detectEnvironment(){return window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1"||window.location.port!==""?Environment.DEVELOPMENT:window.location.hostname.includes("staging")||window.location.hostname.includes("test")?Environment.STAGING:Environment.PRODUCTION}initializeConfig(){this.config=this.buildDefaultConfig(CONFIG_SCHEMA),this.applyEnvironmentOverrides(),this.loadUserPreferences(),this.validateConfig(),errorHandler.log(`Configuration initialized for ${this.environment} environment`,LogLevel.INFO)}buildDefaultConfig(e){const t={};for(const[o,r]of Object.entries(e))r&&typeof r=="object"&&r.type==="object"&&!r.default?t[o]=this.buildDefaultConfig(r):r&&typeof r=="object"&&!r.type&&!r.default?t[o]=this.buildDefaultConfig(r):r&&r.default!==void 0&&(t[o]=typeof r.default=="function"?r.default():r.default);return t}applyEnvironmentOverrides(){switch(this.config.app||(this.config.app={}),this.config.logging||(this.config.logging={}),this.config.api||(this.config.api={}),this.config.pdf||(this.config.pdf={}),this.environment){case Environment.DEVELOPMENT:this.config.app.debug=!0,this.config.logging.logLevel="debug",this.config.logging.enableConsoleLogging=!0,this.config.api.timeout=6e4;break;case Environment.STAGING:this.config.app.debug=!0,this.config.logging.logLevel="info",this.config.pdf.watermark=!0;break;case Environment.PRODUCTION:this.config.app.debug=!1,this.config.logging.logLevel="warn",this.config.logging.enableConsoleLogging=!1;break}}loadUserPreferences(){try{const e=JSON.parse(localStorage.getItem("configPreferences")||"{}");this.applyUserPreferences(e)}catch(e){errorHandler.handleError({message:"Failed to load user preferences",error:e,category:ErrorCategory.STORAGE,level:LogLevel.WARN})}}applyUserPreferences(e){for(const[t,o]of Object.entries(e))try{this.setConfigValue(t,o,!1)}catch(r){errorHandler.handleError({message:`Invalid user preference: ${t}`,error:r,category:ErrorCategory.VALIDATION,level:LogLevel.WARN})}}setupValidators(){this.validators.set("url",e=>{try{return new URL(e),!0}catch{return!1}}),this.validators.set("email",e=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)),this.validators.set("positive",e=>typeof e=="number"&&e>0)}get(e,t=void 0){const o=e.split(".");let r=this.config;for(const s of o)if(r&&typeof r=="object"&&s in r)r=r[s];else return t;return r}set(e,t,o=!0){this.setConfigValue(e,t,o)}setConfigValue(e,t,o){if(!this.validateConfigPath(e,t))throw new Error(`Invalid configuration value for ${e}: ${t}`);const r=e.split(".");let s=this.config;for(let c=0;c<r.length-1;c++){const l=r[c];(!(l in s)||typeof s[l]!="object")&&(s[l]={}),s=s[l]}const n=r[r.length-1],i=s[n];s[n]=t,this.notifyListeners(e,t,i),o&&this.persistUserPreference(e,t),errorHandler.log(`Configuration updated: ${e} = ${JSON.stringify(t)}`,LogLevel.DEBUG)}validateConfigPath(e,t){const o=this.getSchemaForPath(e);return o?this.validateValue(t,o):!0}getSchemaForPath(e){const t=e.split(".");let o=CONFIG_SCHEMA;for(const r of t)if(o&&typeof o=="object"&&r in o)o=o[r];else return null;return o}validateValue(e,t){return t.type&&(t.type==="array"&&!Array.isArray(e)||t.type!=="array"&&typeof e!==t.type)||t.enum&&!t.enum.includes(e)||typeof e=="number"&&(t.min!==void 0&&e<t.min||t.max!==void 0&&e>t.max)||typeof e=="string"&&(t.minLength&&e.length<t.minLength||t.maxLength&&e.length>t.maxLength)||Array.isArray(e)&&(t.minItems&&e.length<t.minItems||t.maxItems&&e.length>t.maxItems)?!1:t.validator&&this.validators.has(t.validator)?this.validators.get(t.validator)(e):!0}validateConfig(){const e=[];this.validateConfigSection(this.config,CONFIG_SCHEMA,"",e),e.length>0&&errorHandler.handleError({message:`Configuration validation errors: ${e.join(", ")}`,category:ErrorCategory.VALIDATION,level:LogLevel.WARN})}validateConfigSection(e,t,o,r){for(const[s,n]of Object.entries(t)){const i=o?`${o}.${s}`:s,c=e[s];if(n.required&&c==null){r.push(`Missing required config: ${i}`);continue}c!==void 0&&(n.type==="object"&&!n.default?this.validateConfigSection(c,n,i,r):this.validateValue(c,n)||r.push(`Invalid config value: ${i}`))}}persistUserPreference(e,t){try{const o=JSON.parse(localStorage.getItem("configPreferences")||"{}");o[e]=t,localStorage.setItem("configPreferences",JSON.stringify(o))}catch(o){errorHandler.handleError({message:"Failed to persist user preference",error:o,category:ErrorCategory.STORAGE,level:LogLevel.WARN})}}addListener(e,t){return this.listeners.has(e)||this.listeners.set(e,new Set),this.listeners.get(e).add(t),()=>{const o=this.listeners.get(e);o&&(o.delete(t),o.size===0&&this.listeners.delete(e))}}notifyListeners(e,t,o){const r=this.listeners.get(e);r&&r.forEach(s=>{try{s(t,o,e)}catch(n){errorHandler.handleError({message:"Configuration listener error",error:n,category:ErrorCategory.UI,level:LogLevel.WARN})}});for(const[s,n]of this.listeners)if(s.endsWith("*")){const i=s.slice(0,-1);e.startsWith(i)&&n.forEach(c=>{try{c(t,o,e)}catch(l){errorHandler.handleError({message:"Configuration wildcard listener error",error:l,category:ErrorCategory.UI,level:LogLevel.WARN})}})}}reset(e){if(e){const t=this.getSchemaForPath(e);if(t&&t.default!==void 0){const o=typeof t.default=="function"?t.default():t.default;this.set(e,o)}}else this.config=this.buildDefaultConfig(CONFIG_SCHEMA),this.applyEnvironmentOverrides(),localStorage.removeItem("configPreferences"),this.validateConfig();errorHandler.log(`Configuration reset: ${e||"all"}`,LogLevel.INFO)}getEnvironment(){return this.environment}isDevelopment(){return this.environment===Environment.DEVELOPMENT}isProduction(){return this.environment===Environment.PRODUCTION}export(){return{config:this.config,environment:this.environment,schema:CONFIG_SCHEMA,exportTime:new Date().toISOString()}}getSummary(){return{environment:this.environment,version:this.get("app.version"),debug:this.get("app.debug"),totalSettings:this.countConfigSettings(this.config),customPreferences:Object.keys(JSON.parse(localStorage.getItem("configPreferences")||"{}")).length}}countConfigSettings(e){let t=0;for(const o of Object.values(e))typeof o=="object"&&o!==null&&!Array.isArray(o)?t+=this.countConfigSettings(o):t++;return t}}const config=new ConfigManager,CONFIG$2=new Proxy({},{get(a,e){return config.get(e.toString())},set(a,e,t){return config.set(e.toString(),t),!0}});window.config=config;window.CONFIG=CONFIG$2;const CONFIG_BASE={EMAIL:{PUBLIC_KEY:"MHAEjvnc_xx8DIRCA",SERVICE_ID:"service_rblizfg",TEMPLATE_ID:"template_8st9fhk",PASSWORD_RESET_TEMPLATE_ID:"template_u15l8di",FROM_EMAIL:"noreply@seima.com.au",FROM_NAME:"Seima Team",MAX_ATTACHMENT_SIZE:15*1024*1024,RETRY_ATTEMPTS:3,RETRY_DELAY:2e3,BCC_EMAIL:"jsegredos@gmail.com"}};class Utils{static loadScript(e){return new Promise((t,o)=>{if(document.querySelector(`script[src="${e}"]`)){t();return}const r=document.createElement("script");r.src=e,r.onload=t,r.onerror=()=>o(new Error(`Failed to load script: ${e}`)),document.head.appendChild(r)})}static loadImage(e){return new Promise((t,o)=>{const r=new Image;r.onload=()=>t(r),r.onerror=()=>o(new Error(`Failed to load image: ${e}`)),r.src=e})}static loadImageAsDataURL(e,t){const o=new Image;o.crossOrigin="anonymous",o.onload=function(){const r=document.createElement("canvas"),s=r.getContext("2d");r.width=o.width,r.height=o.height,s.drawImage(o,0,0);try{const n=r.toDataURL("image/png");t(n,o.width,o.height)}catch{t(null,0,0)}},o.onerror=()=>t(null,0,0),o.src=e}static formatPrice(e){if(!e||e==="")return"";const t=parseFloat(e.toString().replace(/[^\d.-]/g,""));return isNaN(t)?"":`$${t.toFixed(2)}`}static formatPriceLocale(e,t=!0){if(!e||e==="")return"";const o=parseFloat(e.toString().replace(/[^\d.-]/g,""));if(isNaN(o))return"";const r=o.toLocaleString("en-AU",{minimumFractionDigits:2,maximumFractionDigits:2});return t?`$${r}`:r}static sanitizeInput(e,t=null){if(typeof e!="string")return"";let o=e.trim();return t&&o.length>t&&(o=o.substring(0,t)),o}static escapeHtml(e){return typeof e!="string"?"":e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}static debounce(e,t){let o;return function(...r){clearTimeout(o),o=setTimeout(()=>e.apply(this,r),t)}}static throttle(e,t){let o;return function(...r){o||(e.apply(this,r),o=!0,setTimeout(()=>o=!1,t))}}static generateId(){return Date.now().toString(36)+Math.random().toString(36).substr(2)}static deepClone(e){return JSON.parse(JSON.stringify(e))}static getStorageItem(e,t=null){try{const o=localStorage.getItem(e);return o?JSON.parse(o):t}catch(o){return console.warn(`Failed to parse localStorage item: ${e}`,o),t}}static setStorageItem(e,t){try{return localStorage.setItem(e,JSON.stringify(t)),!0}catch(o){return console.warn(`Failed to set localStorage item: ${e}`,o),!1}}static removeStorageItem(e){try{return localStorage.removeItem(e),!0}catch(t){return console.warn(`Failed to remove localStorage item: ${e}`,t),!1}}static isMobileDevice(){return/Android|iPhone|iPad|iPod|webOS|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}static isIOSDevice(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream}static isSafari(){return/^((?!chrome|android).)*safari/i.test(navigator.userAgent)}static formatDate(e,t=!1){const o=new Date(e);if(isNaN(o.getTime()))return"";const r=String(o.getDate()).padStart(2,"0"),s=String(o.getMonth()+1).padStart(2,"0"),n=o.getFullYear();if(!t)return`${r}/${s}/${n}`;const i=String(o.getHours()).padStart(2,"0"),c=String(o.getMinutes()).padStart(2,"0");return`${r}/${s}/${n} ${i}:${c}`}static generateFilename(e,t){const o=new Date,r=String(o.getDate()).padStart(2,"0"),s=String(o.getMonth()+1).padStart(2,"0"),n=String(o.getFullYear()).slice(-2),i=String(o.getHours()).padStart(2,"0"),c=String(o.getMinutes()).padStart(2,"0");return`${(e||"file").replace(/[^a-zA-Z0-9\s]/g,"")}-${r}${s}${n}.${i}${c}.${t}`}static sleep(e){return new Promise(t=>setTimeout(t,e))}}class BrowserCompatibilityManager{constructor(){this.features={},this.deviceInfo={},this.networkStatus={},this.memoryInfo={},this.compatibilityScore=0,this.init()}init(){this.detectDevice(),this.detectBrowser(),this.checkFeatureSupport(),this.checkMemoryLimitations(),this.setupNetworkMonitoring(),this.calculateCompatibilityScore(),this.setupPerformanceMonitoring()}detectDevice(){const a=navigator.userAgent;this.deviceInfo={isMobile:/Mobi|Android/i.test(a),isTablet:/iPad|Android(?=.*Tablet)|(?=.*Mobile)(?=.*Safari)/i.test(a),isDesktop:!/Mobi|Android|iPad/i.test(a),isIOS:/iPad|iPhone|iPod/.test(a),isAndroid:/Android/i.test(a),isWindows:/Windows/i.test(a),isMacOS:/Macintosh|Mac OS X/i.test(a),isIPhone:/iPhone/i.test(a),isIPad:/iPad/i.test(a),isWebView:this.detectWebView(a),isStandalone:window.navigator.standalone===!0,screenWidth:window.screen.width,screenHeight:window.screen.height,devicePixelRatio:window.devicePixelRatio||1,orientation:this.getOrientation(),userAgent:a}}detectBrowser(){const a=navigator.userAgent;this.deviceInfo.browser={name:this.getBrowserName(a),version:this.getBrowserVersion(a),engine:this.getBrowserEngine(a),isChrome:/Chrome/i.test(a)&&!/Edge|Edg/i.test(a),isFirefox:/Firefox/i.test(a),isSafari:/Safari/i.test(a)&&!/Chrome|Chromium/i.test(a),isEdge:/Edge|Edg/i.test(a),isOpera:/Opera|OPR/i.test(a),chromeVersion:this.getChromeVersion(a),safariVersion:this.getSafariVersion(a),firefoxVersion:this.getFirefoxVersion(a)}}checkFeatureSupport(){this.features={localStorage:this.checkLocalStorage(),sessionStorage:this.checkSessionStorage(),indexedDB:"indexedDB"in window,fileAPI:"File"in window,fileReader:"FileReader"in window,fileSystemAccess:"showSaveFilePicker"in window,downloadAttribute:this.checkDownloadAttribute(),getUserMedia:"mediaDevices"in navigator&&"getUserMedia"in navigator.mediaDevices,webRTC:"RTCPeerConnection"in window,canvas:"HTMLCanvasElement"in window,webGL:this.checkWebGL(),fetch:"fetch"in window,xhr:"XMLHttpRequest"in window,serviceWorker:"serviceWorker"in navigator,modules:this.checkESModules(),asyncAwait:this.checkAsyncAwait(),webAssembly:"WebAssembly"in window,createObjectURL:"URL"in window&&"createObjectURL"in URL,revokeObjectURL:"URL"in window&&"revokeObjectURL"in URL,blob:"Blob"in window,touchEvents:"ontouchstart"in window,deviceMotion:"DeviceMotionEvent"in window,deviceOrientation:"DeviceOrientationEvent"in window,clipboard:"clipboard"in navigator,onlineStatus:"onLine"in navigator,connection:"connection"in navigator||"mozConnection"in navigator||"webkitConnection"in navigator}}checkMemoryLimitations(){var a,e,t;this.memoryInfo={jsHeapSizeLimit:((a=performance.memory)==null?void 0:a.jsHeapSizeLimit)||null,totalJSHeapSize:((e=performance.memory)==null?void 0:e.totalJSHeapSize)||null,usedJSHeapSize:((t=performance.memory)==null?void 0:t.usedJSHeapSize)||null,estimatedMaxFileSize:this.estimateMaxFileSize(),memoryPressure:this.estimateMemoryPressure(),maxBlobSize:this.estimateMaxBlobSize(),maxDataURISize:this.estimateMaxDataURISize()}}setupNetworkMonitoring(){this.networkStatus={isOnline:navigator.onLine,connectionType:this.getConnectionType(),effectiveType:this.getEffectiveConnectionType(),downlink:this.getDownlink(),rtt:this.getRTT()},window.addEventListener("online",()=>{this.networkStatus.isOnline=!0,this.onNetworkChange("online")}),window.addEventListener("offline",()=>{this.networkStatus.isOnline=!1,this.onNetworkChange("offline")}),navigator.connection&&navigator.connection.addEventListener("change",()=>{this.updateNetworkStatus(),this.onNetworkChange("connection")})}calculateCompatibilityScore(){let a=100;const e=[];this.features.localStorage||(a-=20,e.push("Local storage not supported")),this.features.fileReader||(a-=15,e.push("File reading not supported")),this.features.blob||(a-=15,e.push("Blob creation not supported")),this.features.createObjectURL||(a-=15,e.push("Object URL creation not supported")),this.features.fetch||(a-=10,e.push("Modern fetch API not available")),this.features.modules||(a-=10,e.push("ES6 modules not supported")),this.features.getUserMedia||(a-=8,e.push("Camera access limited")),this.deviceInfo.isWebView&&(a-=5,e.push("WebView compatibility concerns")),this.memoryInfo.memoryPressure==="high"&&(a-=8,e.push("High memory pressure detected")),this.networkStatus.isOnline||(a-=5,e.push("Currently offline")),this.compatibilityScore=Math.max(0,a),this.compatibilityIssues=e}setupPerformanceMonitoring(){if(performance.memory&&setInterval(()=>{this.updateMemoryInfo()},3e4),"PerformanceObserver"in window)try{new PerformanceObserver(e=>{for(const t of e.getEntries())t.entryType==="measure"&&this.onPerformanceMeasure(t)}).observe({entryTypes:["measure"]})}catch(a){console.warn("Performance observer not fully supported:",a)}}detectWebView(a){return/wv|WebView|Version\/[\d.]+.*Mobile.*Safari/i.test(a)||/Android/i.test(a)&&/Version\/\d\.\d/i.test(a)&&!/ Chrome\//.test(a)||/FB_IAB|FBAN|FBAV/i.test(a)}getOrientation(){return window.screen&&window.screen.orientation?window.screen.orientation.type:window.innerHeight>window.innerWidth?"portrait":"landscape"}getBrowserName(a){return/SamsungBrowser/i.test(a)?"Samsung Internet":/Chrome/i.test(a)&&!/Edge|Edg/i.test(a)?"Chrome":/Firefox/i.test(a)?"Firefox":/Safari/i.test(a)&&!/Chrome|Chromium/i.test(a)?"Safari":/Edge|Edg/i.test(a)?"Edge":/Opera|OPR/i.test(a)?"Opera":"Unknown"}getBrowserVersion(a){const e=a.match(/(Chrome|Firefox|Safari|Edge|Edg|SamsungBrowser|Opera|OPR)\/([0-9.]+)/i);return e?e[2]:"Unknown"}getBrowserEngine(a){return/WebKit/i.test(a)?"WebKit":/Gecko/i.test(a)?"Gecko":/Trident/i.test(a)?"Trident":/EdgeHTML/i.test(a)?"EdgeHTML":"Unknown"}getChromeVersion(a){const e=a.match(/Chrome\/([0-9.]+)/i);return e?parseInt(e[1]):null}getSafariVersion(a){const e=a.match(/Version\/([0-9.]+).*Safari/i);return e?parseFloat(e[1]):null}getFirefoxVersion(a){const e=a.match(/Firefox\/([0-9.]+)/i);return e?parseInt(e[1]):null}checkLocalStorage(){try{const a="compatibilityTest";return localStorage.setItem(a,a),localStorage.removeItem(a),!0}catch{return!1}}checkSessionStorage(){try{const a="compatibilityTest";return sessionStorage.setItem(a,a),sessionStorage.removeItem(a),!0}catch{return!1}}checkDownloadAttribute(){return"download"in document.createElement("a")}checkWebGL(){try{const a=document.createElement("canvas");return!!(a.getContext("webgl")||a.getContext("experimental-webgl"))}catch{return!1}}checkESModules(){try{return typeof Symbol<"u"&&typeof Promise<"u"&&typeof Map<"u"}catch{return!1}}checkAsyncAwait(){try{return eval("(async function() {})").constructor===(async function(){}).constructor}catch(a){return!1}}estimateMaxFileSize(){return this.deviceInfo.isDesktop?100*1024*1024:this.deviceInfo.isTablet?50*1024*1024:this.deviceInfo.isMobile?20*1024*1024:10*1024*1024}estimateMemoryPressure(){if(!performance.memory)return"unknown";const a=performance.memory.usedJSHeapSize,e=performance.memory.jsHeapSizeLimit,t=a/e;return t>.8?"high":t>.6?"medium":"low"}estimateMaxBlobSize(){var a,e,t;return(a=this.deviceInfo.browser)!=null&&a.isChrome?500*1024*1024:(e=this.deviceInfo.browser)!=null&&e.isFirefox?200*1024*1024:(t=this.deviceInfo.browser)!=null&&t.isSafari?100*1024*1024:50*1024*1024}estimateMaxDataURISize(){var a,e,t;return(a=this.deviceInfo.browser)!=null&&a.isChrome?2*1024*1024:(e=this.deviceInfo.browser)!=null&&e.isFirefox?1*1024*1024:((t=this.deviceInfo.browser)!=null&&t.isSafari,512*1024)}getConnectionType(){return navigator.connection?navigator.connection.type||navigator.connection.effectiveType:"unknown"}getEffectiveConnectionType(){var a;return((a=navigator.connection)==null?void 0:a.effectiveType)||"unknown"}getDownlink(){var a;return((a=navigator.connection)==null?void 0:a.downlink)||null}getRTT(){var a;return((a=navigator.connection)==null?void 0:a.rtt)||null}updateNetworkStatus(){this.networkStatus={isOnline:navigator.onLine,connectionType:this.getConnectionType(),effectiveType:this.getEffectiveConnectionType(),downlink:this.getDownlink(),rtt:this.getRTT()}}updateMemoryInfo(){performance.memory&&(this.memoryInfo.totalJSHeapSize=performance.memory.totalJSHeapSize,this.memoryInfo.usedJSHeapSize=performance.memory.usedJSHeapSize,this.memoryInfo.memoryPressure=this.estimateMemoryPressure())}onNetworkChange(a){console.log(`Network status changed: ${a}`,this.networkStatus)}onPerformanceMeasure(a){a.duration>1e3&&console.warn(`Performance concern: ${a.name} took ${a.duration}ms`)}getCompatibilityReport(){return{score:this.compatibilityScore,issues:this.compatibilityIssues,device:this.deviceInfo,features:this.features,memory:this.memoryInfo,network:this.networkStatus,recommendations:this.getRecommendations()}}getRecommendations(){const a=[];return this.compatibilityScore<70&&a.push({type:"critical",message:"Browser compatibility issues detected. Consider updating your browser.",action:"update_browser"}),this.memoryInfo.memoryPressure==="high"&&a.push({type:"warning",message:"High memory usage detected. Close other browser tabs for better performance.",action:"reduce_memory"}),!this.features.fileSystemAccess&&this.deviceInfo.isDesktop&&a.push({type:"info",message:"Modern file saving features available in newer browsers.",action:"update_browser"}),this.networkStatus.isOnline||a.push({type:"error",message:"Internet connection required for full functionality.",action:"check_connection"}),a}isFeatureSupported(a){return this.features[a]||!1}isCompatible(){return this.compatibilityScore>=70}getOptimalDownloadMethod(){return this.features.fileSystemAccess&&this.deviceInfo.isDesktop?"fileSystemAPI":this.features.downloadAttribute?"downloadAttribute":this.features.createObjectURL?"objectURL":"manual"}shouldShowCompatibilityWarning(){return this.compatibilityScore<80||this.compatibilityIssues.length>0}logCompatibilityInfo(){console.group("Browser Compatibility Report"),console.log("Score:",this.compatibilityScore),console.log("Device:",this.deviceInfo),console.log("Features:",this.features),console.log("Issues:",this.compatibilityIssues),console.log("Recommendations:",this.getRecommendations()),console.groupEnd()}}const browserCompatibility=new BrowserCompatibilityManager;class EmailService{constructor(e=CONFIG_BASE.EMAIL){this.config=e,this.isInitialized=!1,this.emailJsLoaded=!1}async init(){if(this.isInitialized)return!0;try{return await this._loadEmailJS(),window.emailjs&&this.config.PUBLIC_KEY&&(window.emailjs.init(this.config.PUBLIC_KEY),this.emailJsLoaded=!0),this.isInitialized=!0,console.log("✅ Email service initialized"),!0}catch(e){return console.error("❌ Failed to initialize email service:",e),!1}}async _loadEmailJS(){if(!window.emailjs)return Utils.loadScript("https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js")}async send(e){if(this.isInitialized||await this.init(),!this.emailJsLoaded)throw new Error("EmailJS not loaded");const t={to_email:e.to_email,to_name:e.to_name||e.customer_name||"Customer",from_name:this.config.FROM_NAME||"Seima Team",subject:e.subject||"Your Seima Product Selection",message:e.message||"",customer_name:e.customer_name||"",customer_project:e.customer_project||"",customer_address:e.customer_address||"",customer_telephone:e.customer_telephone||"",total_products:e.total_products||"",total_rooms:e.total_rooms||"",file_info:e.file_info||"",...this._sanitizeAttachment(e)};this.config.BCC_EMAIL&&(t.bcc_email=this.config.BCC_EMAIL);const o=this.config.RETRY_ATTEMPTS||3,r=this.config.RETRY_DELAY||2e3;for(let s=1;s<=o;s++)try{const n=await window.emailjs.send(this.config.SERVICE_ID,this.config.TEMPLATE_ID,t);return console.log(`✅ Email sent successfully (attempt ${s})`),{success:!0,result:n}}catch(n){if(console.warn(`❌ Email attempt ${s} failed:`,n),s<o)await Utils.sleep(r);else throw n}}_sanitizeAttachment(e){if(!e.attachment)return{};let t=e.attachment;return t.startsWith("data:")&&(t=t.split(",")[1]||t),{attachment:t,attachment_name:e.attachment_name||"attachment.pdf"}}async sendWithAttachments(e,t,o,r){const s=await this._blobToBase64(t),n=(e.project||"Selection").replace(/[^a-zA-Z0-9\s]/g,""),i=Utils.generateFilename(n,"pdf"),c=this._buildEmailMessage(e,r),l={to_email:e.email,to_name:e.name,customer_name:e.name,customer_project:e.project,customer_address:e.address,customer_telephone:e.telephone||e.phone,total_products:r.totalProducts.toString(),total_rooms:r.roomCount.toString(),message:c,attachment:s,attachment_name:i,file_info:`PDF: ${i} (${(t.size/1024).toFixed(1)} KB)`};return this.send(l)}_blobToBase64(e){return new Promise((t,o)=>{const r=new FileReader;r.onloadend=()=>{const s=r.result.split(",")[1];t(s)},r.onerror=o,r.readAsDataURL(e)})}_buildEmailMessage(e,t){const o=["Thank you for your Seima product selection.","","Your selection summary:",`• Total products: ${t.totalProducts}`,`• Rooms: ${t.roomCount}`];return t.totalValue>0&&!e.excludePrice&&o.push(`• Estimated value: ${Utils.formatPriceLocale(t.totalValue)}`),o.push("","Please find your product selection attached as a PDF document.","","If you have any questions, please contact your Seima representative.","","Kind regards,","The Seima Team","www.seima.com.au"),o.join(`
`)}isAvailable(){return this.emailJsLoaded&&!!this.config.SERVICE_ID&&!!this.config.TEMPLATE_ID}static validateEmail(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}}new EmailService;const SESSION_KEY="authSession",SESSION_DURATION_DEFAULT=7*24*60*60*1e3,SESSION_DURATION_REMEMBER=30*24*60*60*1e3;class AuthService{constructor(){this.baseUrl="",this.emailConfig=null,this.session=null,this.onAuthChange=null,this.loadSession()}configure(e){e.googleSheetsUrl&&(this.baseUrl=e.googleSheetsUrl),e.email&&(this.emailConfig=e.email),console.log("🔐 Auth service configured")}loadSession(){var e;try{const t=localStorage.getItem(SESSION_KEY);if(t){const o=JSON.parse(t);o.expiry&&Date.now()<o.expiry?(this.session=o,console.log("✅ Session restored for:",(e=o.user)==null?void 0:e.email)):(console.log("⏰ Session expired, clearing..."),this.clearSession())}}catch(t){console.warn("Failed to load session:",t),this.clearSession()}}saveSession(e){try{localStorage.setItem(SESSION_KEY,JSON.stringify(e)),this.session=e}catch(t){console.error("Failed to save session:",t)}}clearSession(){localStorage.removeItem(SESSION_KEY),this.session=null,this.onAuthChange&&this.onAuthChange(null)}isLoggedIn(){return this.session!==null&&this.session.user!==null}getCurrentUser(){var e;return((e=this.session)==null?void 0:e.user)||null}isStaffMode(){const e=this.getCurrentUser();return e!=null&&e.email?e.email.toLowerCase().endsWith("@seima.com.au"):!1}getSession(){return this.session}async apiRequest(e,t){if(!this.baseUrl)throw new Error("Google Sheets URL not configured. Call authService.configure() first.");const o=new URLSearchParams;o.append("action",e);for(const[s,n]of Object.entries(t))n!=null&&o.append(s,typeof n=="object"?JSON.stringify(n):n);const r=await fetch(this.baseUrl,{method:"POST",body:o});if(!r.ok)throw new Error(`HTTP ${r.status}: ${r.statusText}`);return await r.json()}validatePassword(e){return!e||e.length<8?{valid:!1,error:"Password must be at least 8 characters"}:/\d/.test(e)?{valid:!0}:{valid:!1,error:"Password must contain at least one number"}}validateEmail(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}async register(e,t,o,r="",s=""){if(!e||!this.validateEmail(e))return{success:!1,error:"Please enter a valid email address"};const n=this.validatePassword(t);if(!n.valid)return{success:!1,error:n.error};if(!o||o.trim().length<2)return{success:!1,error:"Please enter your name"};try{return await this.apiRequest("userRegister",{email:e.trim().toLowerCase(),password:t,name:o.trim(),position:r.trim(),phone:s.trim()})}catch(i){return console.error("Registration error:",i),{success:!1,error:"Registration failed. Please try again."}}}async login(e,t,o=!1){if(!e||!t)return{success:!1,error:"Please enter email and password"};try{const r=await this.apiRequest("userLogin",{email:e.trim().toLowerCase(),password:t});if(r.success){const s=Date.now()+(o?SESSION_DURATION_REMEMBER:SESSION_DURATION_DEFAULT),n={user:r.user,token:r.sessionToken,expiry:s,rememberMe:o};this.saveSession(n),this.onAuthChange&&this.onAuthChange(r.user),console.log("✅ Logged in as:",r.user.email)}return r}catch(r){return console.error("Login error:",r),{success:!1,error:"Login failed. Please try again."}}}logout(){this.clearSession(),console.log("👋 Logged out")}async requestPasswordReset(e){if(!e||!this.validateEmail(e))return{success:!1,error:"Please enter a valid email address"};try{const t=await this.apiRequest("userRequestPasswordReset",{email:e.trim().toLowerCase()});return t.success&&t.resetToken&&await this.sendPasswordResetEmail(t.userEmail,t.userName,t.resetToken),{success:!0,message:"If this email exists, a reset code has been sent"}}catch(t){return console.error("Password reset request error:",t),{success:!1,error:"Failed to request password reset. Please try again."}}}async sendPasswordResetEmail(e,t,o){if(!this.emailConfig){console.warn("Email config not set, cannot send password reset email");return}try{window.emailjs||await this.loadEmailJS(),window.emailjs.init({publicKey:this.emailConfig.PUBLIC_KEY});const r={email:e,user_name:t||"User",reset_code:o,current_year:new Date().getFullYear().toString()},s=this.emailConfig.PASSWORD_RESET_TEMPLATE_ID||this.emailConfig.TEMPLATE_ID;console.log("📧 Sending password reset email to:",e);const n=await window.emailjs.send(this.emailConfig.SERVICE_ID,s,r,this.emailConfig.PUBLIC_KEY);console.log("✅ Password reset email sent to:",e,n)}catch(r){console.error("Failed to send password reset email:",r)}}async loadEmailJS(){return new Promise((e,t)=>{if(window.emailjs){e();return}const o=document.createElement("script");o.src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js",o.onload=()=>{e()},o.onerror=t,document.head.appendChild(o)})}async resetPassword(e,t,o){if(!e||!t||!o)return{success:!1,error:"All fields are required"};const r=this.validatePassword(o);if(!r.valid)return{success:!1,error:r.error};try{return await this.apiRequest("userResetPassword",{email:e.trim().toLowerCase(),token:t.trim().toUpperCase(),newPassword:o})}catch(s){return console.error("Password reset error:",s),{success:!1,error:"Failed to reset password. Please try again."}}}async changePassword(e,t){if(!this.isLoggedIn())return{success:!1,error:"Please log in first"};const o=this.validatePassword(t);if(!o.valid)return{success:!1,error:o.error};try{return await this.apiRequest("userChangePassword",{email:this.session.user.email,currentPassword:e,newPassword:t})}catch(r){return console.error("Change password error:",r),{success:!1,error:"Failed to change password. Please try again."}}}async updateProfile(e){if(!this.isLoggedIn())return{success:!1,error:"Please log in first"};try{const t=await this.apiRequest("userUpdateProfile",{email:this.session.user.email,updates:JSON.stringify(e)});return t.success&&t.user&&(this.session.user=t.user,this.saveSession(this.session),this.onAuthChange&&this.onAuthChange(t.user)),t}catch(t){return console.error("Update profile error:",t),{success:!1,error:"Failed to update profile. Please try again."}}}async deleteAccount(e){if(!this.isLoggedIn())return{success:!1,error:"Please log in first"};try{const t=await this.apiRequest("userDeleteAccount",{email:this.session.user.email,password:e});return t.success&&this.clearSession(),t}catch(t){return console.error("Delete account error:",t),{success:!1,error:"Failed to delete account. Please try again."}}}}const authService=new AuthService;class AuthUI{constructor(){this.currentModal=null,this.pendingAction=null,this.escHandler=null,this.config={logoSrc:"assets/seima-logo.png",brandName:"Seima",appName:"Product App"},this.injectStyles()}configure(e){e.logoSrc&&(this.config.logoSrc=e.logoSrc),e.brandName&&(this.config.brandName=e.brandName),e.appName&&(this.config.appName=e.appName)}injectStyles(){if(document.getElementById("auth-ui-styles"))return;const e=document.createElement("style");e.id="auth-ui-styles",e.textContent=`
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
    `,document.head.appendChild(e)}showLogin(e=null){this.pendingAction=e?{callback:e}:null;const t=`
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
          </div>
        </div>
      </div>
    `;this.showModal(t),this.setupLoginHandlers(e)}showRegister(){const e=`
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
    `;this.showModal(e),this.setupRegisterHandlers()}showForgotPassword(){const e=`
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
    `;this.showModal(e),this.setupForgotHandlers()}showResetPassword(e=""){const t=`
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
    `;this.showModal(t),this.setupResetHandlers()}showEditProfile(e=null){const t=authService.getCurrentUser();if(!t){console.warn("Cannot edit profile: not logged in");return}const o=`
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
              <input type="email" id="profile-email" value="${t.email||""}" disabled style="background: #f3f4f6; cursor: not-allowed;">
              <div class="field-hint">Email cannot be changed</div>
            </div>
            
            <div class="auth-field">
              <label for="profile-name">Full Name *</label>
              <input type="text" id="profile-name" value="${t.name||""}" placeholder="Your name" required>
            </div>
            
            <div class="auth-field">
              <label for="profile-position">Position</label>
              <input type="text" id="profile-position" value="${t.position||""}" placeholder="e.g. Sales Representative">
            </div>
            
            <div class="auth-field">
              <label for="profile-phone">Phone</label>
              <input type="tel" id="profile-phone" value="${t.phone||""}" placeholder="Your phone number">
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
    `;this.showModal(o),this.setupEditProfileHandlers(e)}setupEditProfileHandlers(e){var o;const t=document.getElementById("edit-profile-form");t==null||t.addEventListener("submit",async r=>{var l,d,u,m,g,h;r.preventDefault();const s=(d=(l=document.getElementById("profile-name"))==null?void 0:l.value)==null?void 0:d.trim(),n=((m=(u=document.getElementById("profile-position"))==null?void 0:u.value)==null?void 0:m.trim())||"",i=((h=(g=document.getElementById("profile-phone"))==null?void 0:g.value)==null?void 0:h.trim())||"";if(!s){this.showMessage("Name is required");return}this.setLoading("profile-submit",!0);const c=await authService.updateProfile({name:s,position:n,phone:i});this.setLoading("profile-submit",!1),c.success?(this.showMessage("Profile updated successfully!","success"),setTimeout(()=>{this.closeModal(),e&&e(c.user)},1e3)):this.showMessage(c.error)}),(o=document.getElementById("profile-cancel"))==null||o.addEventListener("click",()=>this.closeModal())}showChangePassword(e=null){if(!authService.isLoggedIn()){console.warn("Cannot change password: not logged in");return}const t=`
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
    `;this.showModal(t),this.setupChangePasswordHandlers(e)}setupChangePasswordHandlers(e){var o;const t=document.getElementById("change-password-form");t==null||t.addEventListener("submit",async r=>{var l,d,u;r.preventDefault();const s=(l=document.getElementById("current-password"))==null?void 0:l.value,n=(d=document.getElementById("new-password"))==null?void 0:d.value,i=(u=document.getElementById("confirm-password"))==null?void 0:u.value;if(n!==i){this.showMessage("New passwords do not match");return}if(n.length<8){this.showMessage("New password must be at least 8 characters");return}if(!/\d/.test(n)){this.showMessage("New password must contain at least one number");return}this.setLoading("password-submit",!0);const c=await authService.changePassword(s,n);this.setLoading("password-submit",!1),c.success?(this.showMessage("Password changed successfully!","success"),setTimeout(()=>{this.closeModal(),e&&e()},1500)):this.showMessage(c.error)}),(o=document.getElementById("password-cancel"))==null||o.addEventListener("click",()=>this.closeModal())}showUserMenu(e,t={}){var c,l,d;const o=authService.getCurrentUser();if(!o)return;const r=document.getElementById("auth-user-menu");if(r){r.remove();return}const n=`
      <div id="auth-user-menu" class="auth-user-menu">
        <div class="auth-user-menu-header">
          <div class="auth-user-menu-avatar">${this.getInitials(o.name)}</div>
          <div class="auth-user-menu-info">
            <div class="auth-user-menu-name">${o.name||"User"}</div>
            <div class="auth-user-menu-email">${o.email||""}</div>
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
    `;document.body.insertAdjacentHTML("beforeend",n);const i=document.getElementById("auth-user-menu");if(e){const u=e.getBoundingClientRect();i.style.position="fixed",i.style.top=u.bottom+8+"px",i.style.right=window.innerWidth-u.right+"px"}(c=document.getElementById("user-menu-profile"))==null||c.addEventListener("click",()=>{i.remove(),this.showEditProfile()}),(l=document.getElementById("user-menu-password"))==null||l.addEventListener("click",()=>{i.remove(),this.showChangePassword()}),(d=document.getElementById("user-menu-logout"))==null||d.addEventListener("click",()=>{i.remove(),authService.logout(),t.onLogout&&t.onLogout()}),setTimeout(()=>{const u=m=>{!i.contains(m.target)&&m.target!==e&&(i.remove(),document.removeEventListener("click",u))};document.addEventListener("click",u)},10)}showModal(e){var o;this.closeModal();const t=document.createElement("div");t.innerHTML=e,document.body.appendChild(t.firstElementChild),this.currentModal=document.getElementById("auth-modal"),(o=document.getElementById("auth-close"))==null||o.addEventListener("click",()=>this.closeModal()),document.addEventListener("keydown",this.escHandler=r=>{r.key==="Escape"&&this.closeModal()})}closeModal(){this.currentModal&&(this.currentModal.remove(),this.currentModal=null),this.escHandler&&document.removeEventListener("keydown",this.escHandler)}showMessage(e,t="error"){const o=document.getElementById("auth-message");o&&(o.innerHTML=`<div class="auth-message ${t}">${e}</div>`)}setLoading(e,t){const o=document.getElementById(e);o&&(t?(o.disabled=!0,o.dataset.originalText=o.textContent,o.innerHTML='<span class="auth-spinner"></span>Please wait...'):(o.disabled=!1,o.textContent=o.dataset.originalText||"Submit"))}setupLoginHandlers(e){var o,r;const t=document.getElementById("login-form");t==null||t.addEventListener("submit",async s=>{var d,u,m,g;s.preventDefault();const n=(d=document.getElementById("login-email"))==null?void 0:d.value,i=(u=document.getElementById("login-password"))==null?void 0:u.value,c=((m=document.getElementById("login-remember"))==null?void 0:m.checked)||!1;this.setLoading("login-submit",!0);const l=await authService.login(n,i,c);this.setLoading("login-submit",!1),l.success?(this.closeModal(),e&&e(l.user),(g=this.pendingAction)!=null&&g.callback&&(this.pendingAction.callback(l.user),this.pendingAction=null)):this.showMessage(l.error)}),(o=document.getElementById("show-register"))==null||o.addEventListener("click",()=>this.showRegister()),(r=document.getElementById("show-forgot"))==null||r.addEventListener("click",()=>this.showForgotPassword())}setupRegisterHandlers(){var t;const e=document.getElementById("register-form");e==null||e.addEventListener("submit",async o=>{var d,u,m,g,h;o.preventDefault();const r=(d=document.getElementById("register-name"))==null?void 0:d.value,s=(u=document.getElementById("register-email"))==null?void 0:u.value,n=(m=document.getElementById("register-password"))==null?void 0:m.value,i=((g=document.getElementById("register-position"))==null?void 0:g.value)||"",c=((h=document.getElementById("register-phone"))==null?void 0:h.value)||"";this.setLoading("register-submit",!0);const l=await authService.register(s,n,r,i,c);this.setLoading("register-submit",!1),l.success?(this.showMessage("Account created! You can now sign in.","success"),setTimeout(()=>this.showLogin(),1500)):this.showMessage(l.error)}),(t=document.getElementById("show-login"))==null||t.addEventListener("click",()=>this.showLogin())}setupForgotHandlers(){var t;const e=document.getElementById("forgot-form");e==null||e.addEventListener("submit",async o=>{var n;o.preventDefault();const r=(n=document.getElementById("forgot-email"))==null?void 0:n.value;this.setLoading("forgot-submit",!0);const s=await authService.requestPasswordReset(r);this.setLoading("forgot-submit",!1),s.success?(this.showMessage("If this email exists, a reset code has been sent.","success"),setTimeout(()=>this.showResetPassword(r),2e3)):this.showMessage(s.error)}),(t=document.getElementById("show-login-back"))==null||t.addEventListener("click",()=>this.showLogin())}setupResetHandlers(){var t;const e=document.getElementById("reset-form");e==null||e.addEventListener("submit",async o=>{var c,l,d;o.preventDefault();const r=(c=document.getElementById("reset-email"))==null?void 0:c.value,s=(l=document.getElementById("reset-code"))==null?void 0:l.value,n=(d=document.getElementById("reset-new-password"))==null?void 0:d.value;this.setLoading("reset-submit",!0);const i=await authService.resetPassword(r,s,n);this.setLoading("reset-submit",!1),i.success?(this.showMessage("Password reset successfully! You can now sign in.","success"),setTimeout(()=>this.showLogin(),1500)):this.showMessage(i.error)}),(t=document.getElementById("show-login-back"))==null||t.addEventListener("click",()=>this.showLogin())}getInitials(e){if(!e)return"?";const t=e.split(" ");return t.length>=2?(t[0][0]+t[t.length-1][0]).toUpperCase():e.substring(0,2).toUpperCase()}requireAuth(e,t="continue"){authService.isLoggedIn()?e(authService.getCurrentUser()):this.showLogin(e)}}const authUI=new AuthUI;function isTechnicalDiagram$1(a,e){try{const t=Math.min(100,a.width),o=Math.min(100,a.height),s=e.getImageData(0,0,t,o).data,n=new Set;for(let i=0;i<s.length;i+=4){const c=`${s[i]},${s[i+1]},${s[i+2]}`;if(n.add(c),n.size>1e3)return!1}return n.size<1e3}catch(t){return console.warn("Could not analyze image for diagram detection:",t),!1}}function detectTransparency$1(a,e){try{const o=e.getImageData(0,0,a.width,a.height).data;for(let r=3;r<o.length;r+=4)if(o[r]<255)return!0;return!1}catch(t){return console.warn("Could not detect transparency:",t),!1}}const PDF_COLORS={headerBackground:"#8B6C2B",footerBackground:"#9B9184",textPrimary:"#222",textSecondary:"#444",textSubtle:"#666",linkColor:[0,102,204],white:"#fff",headerText:"#f4f4f4"},PDF_LAYOUT={margins:{left:32,right:32},footerHeight:28,imageWidth:90,imagePadding:12,welsColumnWidth:50,codeColumnOffset:85,coverLogoWidth:250},preloadedImageCache=new Map;async function preloadAllProductImages(a,e={}){const{batchSize:t=10,maxWidth:o=400,quality:r=.8}=e;preloadedImageCache.clear();const s=new Set;a.forEach(u=>{u.Image_URL&&u.Image_URL.length>10&&s.add(u.Image_URL),u.Diagram_URL&&u.Diagram_URL.length>10&&s.add(u.Diagram_URL)});const n=Array.from(s);if(n.length===0)return console.log("📷 No images to preload"),0;console.log(`📷 Preloading ${n.length} images in parallel...`);const i=Date.now();let c=0,l=0;for(let u=0;u<n.length;u+=t){const m=n.slice(u,u+t);(await Promise.allSettled(m.map(f=>preloadSingleImage(f,o,r)))).forEach((f,w)=>{const y=m[w];f.status==="fulfilled"&&f.value?(preloadedImageCache.set(y,f.value),c++):l++});const h=document.getElementById("preload-progress");if(h){const f=Math.min(100,Math.round((u+m.length)/n.length*100));h.textContent=`Loading images: ${f}%`}}const d=((Date.now()-i)/1e3).toFixed(1);return console.log(`✅ Preloaded ${c}/${n.length} images in ${d}s (${l} failed)`),c}async function preloadSingleImage(a,e=400,t=.8){if(preloadedImageCache.has(a))return preloadedImageCache.get(a);if((s=>{if(!s||s.length<25||/\/images\/\d+$/.test(s)||s.endsWith("/0"))return!0;const n=/\.(jpg|jpeg|png|gif|webp|svg)(\?.*)?$/i.test(s),i=s.startsWith("data:");return!n&&!i})(a))return console.warn("Skipping malformed image URL:",(a==null?void 0:a.substring(0,50))+"..."),null;const r=["https://wsrv.nl/?url=","https://images.weserv.nl/?url=","https://api.codetabs.com/v1/proxy?quest="];for(let s=0;s<r.length;s++){const n=await tryLoadWithProxy(a,r[s],e,t);if(n)return n}return console.warn("All proxies failed for image:",a.substring(0,60)),null}function tryLoadWithProxy(a,e,t,o){return new Promise(r=>{const s=new Image;s.crossOrigin="anonymous";const n=setTimeout(()=>{s.src="",r(null)},3e3);s.onload=function(){clearTimeout(n);try{const c=document.createElement("canvas"),l=c.getContext("2d");let d=s.width,u=s.height;d>t&&(u=u*t/d,d=t),c.width=d,c.height=u,l.imageSmoothingEnabled=!0,l.imageSmoothingQuality="high",l.drawImage(s,0,0,d,u);const m=detectTransparency$1(c,l),g=isTechnicalDiagram$1(c,l),h=m||g?"PNG":"JPEG",f=g?.9:o,w=c.toDataURL(`image/${h.toLowerCase()}`,f);r({dataUrl:w,width:d,height:u,format:h})}catch{console.warn("Failed to optimize image:",a.substring(0,50)),r(null)}},s.onerror=()=>{clearTimeout(n),r(null)};const i=e?e+encodeURIComponent(a):a;s.src=i})}function getCachedImage(a){return preloadedImageCache.get(a)}function getImageCacheSize(){return preloadedImageCache.size}function hasWelsData(a){const e=a["WELS STAR"]||a.WELS_STAR||a.WELS_STAR||a.WelsStar||"";return e&&e.toString().trim()!==""}function calculateColumnLayout(a,e={}){const{leftMargin:t=PDF_LAYOUT.margins.left,rightMargin:o=PDF_LAYOUT.margins.right,showRrp:r=!1,showPrice:s=!0,showQty:n=!0,showTotal:i=!0}=e,c=PDF_LAYOUT.imageWidth,l=PDF_LAYOUT.imagePadding,d=PDF_LAYOUT.welsColumnWidth,u=t+c*2+l*2,m=u+PDF_LAYOUT.codeColumnOffset;let g,h,f;if(r&&s&&n&&i){const w=a-280,y=w-d,b=a-200,p=a-120,v=a-60;g=[t,u,m,y,w,b,p,v],h=[c,c,y-m-10,d,b-w,p-b,v-p,60],f=["Code","Description","WELS","RRP","Price","Qty","Total"]}else if(s&&n&&i){const w=a-200,y=w-d,b=a-120,p=a-60;g=[t,u,m,y,w,b,p],h=[c,c,y-m-10,d,b-w,p-b,60],f=["Code","Description","WELS","Price","Qty","Total"]}else if(s&&!n)if(r){const w=a-180,y=w-d,b=a-90;g=[t,u,m,y,w,b],h=[c,c,y-m-10,d,b-w,90],f=["Code","Description","WELS","RRP","Price"]}else{const w=a-90,y=w-d;g=[t,u,m,y,w],h=[c,c,y-m-10,d,90],f=["Code","Description","WELS","Price"]}else if(!s&&n){const w=a-80,y=w-d;g=[t,u,m,y,w],h=[c,c,y-m-10,d,80],f=["Code","Description","WELS","Qty"]}else{const w=a-o-d;g=[t,u,m,w],h=[c,c,w-m-10,d],f=["Code","Description","WELS"]}return{colX:g,colW:h,headers:f,imgW:c,imgPad:l}}function drawPDFHeader(a,e={}){const{pageWidth:t,colX:o,colW:r,leftMargin:s=PDF_LAYOUT.margins.left,footerHeight:n=PDF_LAYOUT.footerHeight,logoDataUrl:i,logoNaturalW:c,logoNaturalH:l,headers:d=[],userDetails:u={},skipWelsHeader:m=!1,headerColor:g=PDF_COLORS.headerBackground}=e,h=n+5.7;if(a.setFillColor(g),a.rect(0,0,t,h,"F"),i&&c&&l){const w=c/l,y=80,b=h*.6;let p=b*w,v=b;p>y&&(p=y,v=p/w);const S=(h-v)/2;a.addImage(i,"PNG",s,S,p,v)}a.setFontSize(10),a.setTextColor(PDF_COLORS.headerText),a.setFont("helvetica","normal");const f=h-8;d.forEach((w,y)=>{if(w==="WELS"&&m)return;const b=y+1;if(b<o.length){const p=o[b]+r[b]/2;if(w==="Price"&&!u.excludePrice){a.setFont("helvetica","normal");const v=u.includeGst?"INC GST":"EX GST",S=`Price ${v}`,C=a.getTextWidth("Price "),D=p-a.getTextWidth(S)/2;a.text("Price ",D,f),a.setFont("helvetica","bold"),a.text(v,D+C,f),a.setFont("helvetica","normal")}else if(w==="RRP"){const v=u.includeGst?"INC":"EX";a.text(`RRP ${v}`,p,f,{align:"center"})}else a.text(w,p,f,{align:"center"})}})}function drawPDFFooter(a,e={}){const{pageWidth:t,pageHeight:o,leftMargin:r=PDF_LAYOUT.margins.left,footerHeight:s=PDF_LAYOUT.footerHeight,pageNumber:n,totalPages:i,footerColor:c=PDF_COLORS.footerBackground}=e;a.setFillColor(c),a.rect(0,o-s,t,s,"F"),a.setTextColor(PDF_COLORS.white),a.setFontSize(11);const l=o-s/2+3;a.text("www.seima.com.au",t-140,l),n!==void 0&&i!==void 0&&a.text(`Page ${n} of ${i}`,r,l)}function drawCoverPage(a,e={}){const{pageWidth:t,pageHeight:o,seimaLogoDataUrl:r,seimaLogoNaturalW:s,seimaLogoNaturalH:n,customerLogoDataUrl:i,userDetails:c={},staffContact:l,footerHeight:d=PDF_LAYOUT.footerHeight}=e,u=t/2,m=320,g=90,h=(t-m)/2,f=70;if(i){a.setFillColor(255,255,255),a.rect(h,f,m,g,"F");try{const R=new Image;R.src=i;const W=m-20,se=g-20,ne=R.width/R.height||2;let ue=W,A=W/ne;A>se&&(A=se,ue=se*ne);const Se=h+(m-ue)/2,ie=f+(g-A)/2;a.addImage(i,"PNG",Se,ie,ue,A,void 0,"FAST")}catch(R){console.warn("Failed to draw customer logo:",R)}}const w=PDF_LAYOUT.coverLogoWidth,y=n&&s?w*n/s:65,b=(t-w)/2,p=f+g+80;r&&a.addImage(r,"PNG",b,p,w,y,void 0,"FAST");const v="Build with Confidence",S=p+y+28;a.setFont("helvetica","normal"),a.setFontSize(18),a.setTextColor("#333");const C=v.split(""),D=a.getTextWidth(v),K=(w-D)/(C.length-1);let G=b;C.forEach(R=>{a.text(R,G,S),G+=a.getTextWidth(R)+K}),a.setFontSize(15),a.setTextColor(PDF_COLORS.textSecondary);const j=u;let F=S+50;const M=[];c!=null&&c.name&&c.name.trim()&&M.push({label:"Name:",value:c.name.trim(),bold:!0}),c!=null&&c.project&&c.project.trim()&&M.push({label:"Project:",value:c.project.trim(),bold:!0}),c!=null&&c.address&&c.address.trim()&&M.push({label:"Address:",value:c.address.trim(),bold:!0}),c!=null&&c.email&&c.email.trim()&&M.push({label:"Email:",value:c.email.trim(),bold:!0});const H=(c==null?void 0:c.telephone)||(c==null?void 0:c.phone)||"";H&&H.trim()&&M.push({label:"Telephone:",value:H.trim(),bold:!0});const le=M.length*26,de=o-d-40-F;le<de&&(F=F+(de-le)/3),M.forEach(R=>{a.setFont("helvetica","normal"),a.setFontSize(15),a.setTextColor(PDF_COLORS.textSecondary);const W=a.getTextWidth(R.label+" ");a.text(R.label,j-80,F),R.bold&&a.setFont("helvetica","bold"),a.text(R.value,j-80+W,F),F+=26});let q="";const $=(l==null?void 0:l.name)||(l==null?void 0:l.staffName)||"",oe=(l==null?void 0:l.phone)||(l==null?void 0:l.mobile)||(l==null?void 0:l.staffPhone)||"",re=(l==null?void 0:l.email)||(l==null?void 0:l.staffEmail)||"",te=(l==null?void 0:l.position)||(l==null?void 0:l.staffPosition)||"";$&&oe&&re?q=`For more information, please contact ${te?`${$}, ${te}`:$} on ${oe} or email ${re}`:$&&re?q=`For more information, please contact ${te?`${$}, ${te}`:$} at ${re}`:$?q=`For more information, please contact ${te?`${$}, ${te}`:$}`:oe?q=`For more information, please call ${oe}`:re&&(q=`For more information, please email ${re}`),q||(q="For more information, please contact your Seima representative or email info@seima.com.au"),a.setFont("helvetica","normal"),a.setFontSize(14),a.setTextColor("#111"),a.text(q,u,o-d-18,{align:"center"}),drawPDFFooter(a,{pageWidth:t,pageHeight:o,footerHeight:d})}function drawRoomHeader(a,e,t,o,r){a.setFontSize(12),a.setFont("helvetica","bold"),a.setTextColor("#333"),a.text(`${e} (${t})`,o,r+10),a.setFont("helvetica","normal")}function drawProductLinks(a,e,t,o){let r=o;if(e.Datasheet_URL&&e.Datasheet_URL!=="#"&&e.Datasheet_URL.startsWith("http")){a.setFontSize(9),a.setTextColor(...PDF_COLORS.linkColor),a.textWithLink("Datasheet",t,r,{url:e.Datasheet_URL,align:"center"});const s=a.getTextWidth("Datasheet");a.setDrawColor(...PDF_COLORS.linkColor),a.setLineWidth(.3),a.line(t-s/2,r+1.5,t+s/2,r+1.5),r+=16}if(e.Website_URL&&e.Website_URL!=="#"&&e.Website_URL.startsWith("http")){a.setFontSize(9),a.setTextColor(...PDF_COLORS.linkColor),a.textWithLink("Website",t,r,{url:e.Website_URL,align:"center"});const s=a.getTextWidth("Website");a.setDrawColor(...PDF_COLORS.linkColor),a.setLineWidth(.3),a.line(t-s/2,r+1.5,t+s/2,r+1.5),r+=16}return r}function drawProductDescription(a,e,t,o,r,s=!1){let n=o;a.setFontSize(10),a.setTextColor(PDF_COLORS.textPrimary);const i=a.splitTextToSize(String(e.Description||""),r);a.text(i,t+5,n),n+=i.length*12;const c=e.LongDescription||e["Long Description"]||e.longDescription||"";if(!s&&c){a.setFontSize(9),a.setTextColor(PDF_COLORS.textSecondary);const l=a.splitTextToSize(String(c),r);a.text(l,t+5,n),n+=l.length*11}if(e.Notes){a.setFont("helvetica","italic"),a.setFontSize(9),a.setTextColor(PDF_COLORS.textSecondary);const l=a.splitTextToSize("Notes: "+String(e.Notes),r);a.text(l,t+5,n),a.setFont("helvetica","normal"),n+=l.length*11}return n}function drawWelsRating(a,e,t,o){const r=e["WELS STAR"]||e.WELS_STAR||e.WELS_STAR||e.WelsStar||"";if(r&&r.toString().trim()){const s=r.toString().replace(/[^\d.]/g,"").trim();s&&(a.setFontSize(9),a.setTextColor(PDF_COLORS.textSubtle),a.text(`${s} star`,t,o,{align:"center"}))}}function formatPrice(a){return!a||isNaN(a)||a<=0?"":"$"+a.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,",")}function drawProductPricing(a,e,t,o,r,s,n={}){const{excludePrice:i=!1,includeGst:c=!1}=n;a.setFontSize(10),a.setTextColor(PDF_COLORS.textPrimary);const l=r.indexOf("RRP")+1;if(l>0&&t[l]){let h=NaN;const f=e.RRP_EX||e["RRP EX GST"]||e.RRP_EX||e.RRP_EXGST;f&&(h=parseFloat(f.toString().replace(/,/g,"")),c&&!isNaN(h)&&(h*=1.1));const w=formatPrice(h);if(w){const y=t[l]+o[l]/2;a.text(w,y,s,{align:"center"})}}const d=r.indexOf("Price")+1;let u=NaN;if(d>0&&t[d]){if(e.UserEditedPrice!==void 0&&e.UserEditedPrice!==null&&e.UserEditedPrice!=="")u=parseFloat(e.UserEditedPrice.toString().replace(/,/g,""));else{const f=e.RRP_EX||e["RRP EX GST"]||e.RRP_EX||e.RRP_EXGST;f&&(u=parseFloat(f.toString().replace(/,/g,"")))}c&&!isNaN(u)&&(u*=1.1);const h=formatPrice(u);if(h){const f=t[d]+o[d]/2;a.text(h,f,s,{align:"center"})}}const m=r.indexOf("Qty")+1;if(m>0&&t[m]){const h=t[m]+o[m]/2;a.text(String(e.Quantity||1),h,s,{align:"center"})}const g=r.indexOf("Total")+1;if(g>0&&t[g]){const h=(isNaN(u)?0:u)*(e.Quantity||1),f=formatPrice(h);if(f){const w=t[g]+o[g]/2;a.text(f,w,s,{align:"center"})}}}class StorageManager{static getCustomRooms(){return Utils.getStorageItem(config.get("storage.keys.customRooms"),[])}static setCustomRooms(e){return Utils.setStorageItem(config.get("storage.keys.customRooms"),e)}static addCustomRoom(e){const t=this.getCustomRooms(),o=Utils.sanitizeInput(e,50);return!o||[...config.get("rooms.predefined",[]).map(n=>n.name),...t.map(n=>n.name)].includes(o)?!1:(t.push({name:o}),this.setCustomRooms(t))}static removeCustomRoom(e){const t=this.getCustomRooms();return e>=0&&e<t.length?(t.splice(e,1),this.setCustomRooms(t)):!1}static getSelectedProducts(){return Utils.getStorageItem(config.get("storage.keys.selectedProducts"),[])}static setSelectedProducts(e){return Utils.setStorageItem(config.get("storage.keys.selectedProducts"),e)}static addProductToSelection(e,t,o,r){try{const s=this.getSelectedProducts(),n=config.get("ui.annotationMaxLength",140),i={id:Utils.generateId(),product:Utils.deepClone(e),notes:Utils.sanitizeInput(t,n),room:Utils.sanitizeInput(o,50),quantity:Math.max(1,parseInt(r)||1),timestamp:Date.now()};s.push(i);const c=this.setSelectedProducts(s);return c?errorHandler.log(`Product added to selection: ${e.OrderCode}`,LogLevel.DEBUG):errorHandler.handleError({message:"Failed to save product to selection",category:ErrorCategory.STORAGE,level:LogLevel.WARN}),c}catch(s){return errorHandler.handleError({message:"Error adding product to selection",error:s,category:ErrorCategory.STORAGE,level:LogLevel.ERROR}),!1}}static updateProductQuantity(e,t){const o=this.getSelectedProducts(),r=o.findIndex(s=>s.id===e);return r!==-1?(o[r].quantity=Math.max(1,parseInt(t)||1),this.setSelectedProducts(o)):!1}static updateProductRoom(e,t){const o=this.getSelectedProducts(),r=o.findIndex(s=>s.id===e);return r!==-1?(o[r].room=Utils.sanitizeInput(t,50),this.setSelectedProducts(o)):!1}static updateProductNotes(e,t){const o=this.getSelectedProducts(),r=o.findIndex(s=>s.id===e);return r!==-1?(o[r].notes=Utils.sanitizeInput(t,config.get("ui.annotationMaxLength",140)),this.setSelectedProducts(o)):!1}static updateProductPrice(e,t){const o=this.getSelectedProducts(),r=o.findIndex(s=>s.id===e);return r!==-1?(o[r].product.UserEditedPrice=t,this.setSelectedProducts(o)):!1}static removeProductFromSelection(e){const o=this.getSelectedProducts().filter(r=>r.id!==e);return this.setSelectedProducts(o)}static clearAllSelections(){return this.setSelectedProducts([])&&this.setCustomRooms([])}static getSelectionCount(){return this.getSelectedProducts().length}static getUserSettings(){return Utils.getStorageItem(config.get("storage.keys.userPreferences"),{})}static saveUserSettings(e){return Utils.setStorageItem(config.get("storage.keys.userPreferences"),e)}static clearUserSettings(){try{return localStorage.removeItem(config.get("storage.keys.userPreferences")),!0}catch(e){return console.error("Error clearing user settings:",e),!1}}}class DataLayer{constructor(){this.products=[],this.isLoaded=!1,this.searchIndex=new Map}async init(){try{return await this.loadProductCatalog(),this.buildSearchIndex(),console.log("✅ Data Layer initialized"),!0}catch(e){return console.error("❌ Failed to initialize Data Layer:",e),!1}}async loadProductCatalog(){try{console.log("📦 Loading product catalog...");const e=localStorage.getItem("productCatalogCsv");let t=[];e&&(t=this.parseCSV(e),this.products=t,this.isLoaded=!0,console.log(`⚡ Loaded ${t.length} products from cache`));const o=config.get("api.catalogUrl"),r=`${o+(o.includes("?")?"&":"?")}t=${Date.now()}`,s=new AbortController,n=setTimeout(()=>s.abort(),15e3);return fetch(r,{signal:s.signal,mode:"cors",cache:"no-cache"}).then(i=>(clearTimeout(n),i.ok?i.text():Promise.reject(`Failed to fetch catalog: ${i.status}`))).then(i=>{if(!e||i!==e){localStorage.setItem("productCatalogCsv",i);const c=this.parseCSV(i);JSON.stringify(c)!==JSON.stringify(t)&&(this.products=c,this.isLoaded=!0,console.log("🔄 New catalog loaded, reloading app..."),window.location.reload())}}).catch(i=>{clearTimeout(n),i.name==="AbortError"?console.warn("🕐 Background catalog update timed out (using cached data)"):console.warn("⚠️ Background catalog update failed (using cached data):",i.message)}),t}catch(e){throw console.error("❌ Failed to load product catalog:",e),e}}parseCSV(e){const t=this.parseCSVRows(e);if(t.length===0)return[];const o=t[0].map(s=>s.replace(/[\r\n]+\s*/g," ").trim()),r=[];for(let s=1;s<t.length;s++){const n=t[s];if(!(n.length===0||n.length===1&&!n[0].trim()))try{if(n.length>=o.length){const i={};o.forEach((d,u)=>{i[d]=n[u]||""}),i.Group=i.Group||"",i["Product Name"]=i["Product Name"]||i.Description||"",i.Description=i.Description||i["Product Name"]||"",i["Long Description"]=i["Long Description"]||i.LongDescription||"",i.OrderCode=i["Order Code"]||i.OrderCode||"",i["RRP EX GST"]=i["RRP EX"]||i["RRP EX GST"]||i.RRP_EXGST||"",i.RRP_EX=i["RRP EX"]||i["RRP EX GST"]||i.RRP_EXGST||i.RRP_EX||"",i["RRP INC GST"]=i["RRP INC GST"]||i.RRP_INCGST||"",i.RRP_INCGST=i["RRP INC GST"]||i.RRP_INCGST||i.RRP_INCGST||"",i["Release Note"]=i["Release Note"]||"",i.Website_URL=i.Website_URL||"";const c=i.Image_URL||"";i.Image_URL=c&&c.length>10&&(c.startsWith("http://")||c.startsWith("https://"))?c:"";const l=i.Diagram_URL||"";i.Diagram_URL=l&&l.length>10&&(l.startsWith("http://")||l.startsWith("https://"))?l:"",i.Datasheet_URL=i.Datasheet_URL||"",i.BARCODE=i.BARCODE||"",i["X Dimension (mm)"]=i["X Dimension (mm)"]||"",i["Y Dimension (mm)"]=i["Y Dimension (mm)"]||"",i["Z Dimension (mm)"]=i["Z Dimension (mm)"]||"",i.WEIGHT=i.WEIGHT||"",i["WELS NO"]=i["WELS NO"]||"",i["WELS STAR"]=i["WELS STAR"]||"",i["WELS CONSUMPTION"]=i["WELS CONSUMPTION"]||"",i["WELS Expiry"]=i["WELS Expiry"]||"",i.WATERMARK=i.WATERMARK||"",i.OrderCode&&i.OrderCode.trim()&&r.push(i)}}catch(i){console.warn(`Skipping invalid CSV line ${s+1}:`,i)}}return r}parseCSVRows(e){const t=[];let o=[],r="",s=!1;for(let n=0;n<e.length;n++){const i=e[n],c=e[n+1];i==='"'?s&&c==='"'?(r+='"',n++):s=!s:i===","&&!s?(o.push(r),r=""):(i==="\r"||i===`
`)&&!s?(i==="\r"&&c===`
`&&n++,o.push(r),o.length>0&&o.some(l=>l.trim())&&t.push(o),o=[],r=""):r+=i}return(r||o.length>0)&&(o.push(r),o.some(n=>n.trim())&&t.push(o)),t}parseCSVLine(e){const t=[];let o="",r=!1;for(let s=0;s<e.length;s++){const n=e[s];n==='"'?r&&e[s+1]==='"'?(o+='"',s++):r=!r:n===","&&!r?(t.push(o),o=""):o+=n}return t.push(o),t}buildSearchIndex(){console.log("🔍 Building search index..."),this.searchIndex.clear(),this.products.forEach((t,o)=>{t.OrderCode&&(this.searchIndex.set(t.OrderCode.toLowerCase(),o),this.searchIndex.set(t.OrderCode.toLowerCase().replace(/[-\s]/g,""),o)),t.BARCODE&&t.BARCODE.trim()&&(this.searchIndex.set(t.BARCODE.toLowerCase(),o),this.searchIndex.set(t.BARCODE.toLowerCase().replace(/[-\s]/g,""),o)),t.Description&&t.Description.toLowerCase().split(/\s+/).forEach(s=>{if(s.length>2){this.searchIndex.has(s)||this.searchIndex.set(s,[]);const n=this.searchIndex.get(s);Array.isArray(n)&&n.push(o)}})});const e=this.products.filter(t=>t.BARCODE&&t.BARCODE.trim()).length;console.log(`✅ Search index built with ${this.searchIndex.size} entries (${e} barcodes indexed)`)}findProductByCode(e){if(!e)return null;const t=e.toLowerCase().trim(),o=this.searchIndex.get(t)||this.searchIndex.get(t.replace(/[-\s]/g,"")),r=typeof o=="number"?this.products[o]:null;return e.length>8&&console.log(`🔍 Barcode search for "${e}": ${r?"FOUND":"NOT FOUND"} ${r?`(${r.OrderCode} - ${r.Description})`:""}`),r}searchProducts(e,t=50){if(!e||e.length<2)return[];const o=e.toLowerCase().trim().split(/\s+/).filter(s=>s.length>=2);if(o.length===0)return[];const r=[];for(const s of this.products){const n=o.map(c=>this.calculateSearchScore(s,c));if(n.some(c=>c===0))continue;const i=n.reduce((c,l)=>c+l,0)/n.length;r.push({product:s,score:i})}return r.sort((s,n)=>n.score-s.score),r.slice(0,t).map(s=>s.product)}calculateSearchScore(e,t){let o=0;const r=(e.OrderCode||"").toString().toLowerCase().trim(),s=(e.BARCODE||e.Barcode||"").toString().toLowerCase().trim(),n=(e["Product Name"]||e.ProductName||"").toString().toLowerCase().trim(),i=(e.Description||"").toString().toLowerCase().trim(),c=(e["Long Description"]||e.LongDescription||"").toString().toLowerCase().trim(),l=/^\d+$/.test(t);return r===t||s===t?100:(r.includes(t)&&(o=Math.max(o,90)),!l&&s.includes(t)&&(o=Math.max(o,90)),n===t?o=Math.max(o,80):n.startsWith(t)?o=Math.max(o,70):n.includes(t)&&(o=Math.max(o,60)),i.includes(t)&&(o=Math.max(o,40)),c.includes(t)&&(o=Math.max(o,20)),o)}getAllProducts(){return[...this.products]}getProductsByCategory(e){return this.products.filter(t=>t.Category&&t.Category.toLowerCase().includes(e.toLowerCase()))}getSelectedProducts(){const e=JSON.parse(localStorage.getItem("selection")||"[]"),t=JSON.parse(localStorage.getItem(config.get("storage.keys.selectedProducts"))||"[]");return t.length>0?t:e.map(o=>({product:o,room:o.Room||"",notes:o.Notes||"",quantity:o.Quantity||1,id:this.generateSelectionId()}))}addProductToSelection(e,t="",o="",r=1){const s=this.getSelectedProducts(),n={id:this.generateSelectionId(),product:{...e},room:t,notes:o,quantity:Math.max(1,parseInt(r)||1)};return s.push(n),this.saveSelectedProducts(s),console.log(`✅ Added ${e.OrderCode} to selection`),n}removeProductFromSelection(e){const o=this.getSelectedProducts().filter(r=>r.id!==e);return this.saveSelectedProducts(o),console.log("✅ Removed product from selection"),o}updateSelectionItem(e,t){const o=this.getSelectedProducts(),r=o.findIndex(s=>s.id===e);return r!==-1?(o[r]={...o[r],...t},this.saveSelectedProducts(o),console.log("✅ Updated selection item"),o[r]):null}clearSelection(){localStorage.removeItem("selection"),localStorage.removeItem(config.get("storage.keys.selectedProducts")),console.log("✅ Selection cleared")}saveSelectedProducts(e){localStorage.setItem(config.get("storage.keys.selectedProducts"),JSON.stringify(e));const t=e.map(o=>({...o.product,Room:o.room,Notes:o.notes,Quantity:o.quantity}));localStorage.setItem("selection",JSON.stringify(t))}generateSelectionId(){return`sel_${Date.now()}_${Math.random().toString(36).substr(2,9)}`}getSelectionSummary(){const e=this.getSelectedProducts(),t=e.length,o=new Set(e.map(n=>n.room).filter(Boolean)),r=o.size||1;let s=0;return e.forEach(n=>{var l;const i=parseFloat((((l=n.product)==null?void 0:l.RRP_EX)||"0").toString().replace(/[^0-9.]/g,""))||0,c=n.quantity||1;s+=i*c}),{totalProducts:t,totalRooms:r,totalValue:s,hasProducts:t>0,rooms:Array.from(o)}}getProductsByRoom(){const e=this.getSelectedProducts(),t={};return e.forEach(o=>{const r=o.room||"Unassigned";t[r]||(t[r]=[]),t[r].push(o)}),t}validateProduct(e){return["OrderCode","Description"].every(o=>e[o]&&e[o].trim())}validateSelection(){const e=this.getSelectedProducts(),t=[];return e.forEach((o,r)=>{this.validateProduct(o.product)||t.push(`Product ${r+1}: Missing required fields`),(!o.quantity||o.quantity<1)&&t.push(`Product ${r+1}: Invalid quantity`)}),{isValid:t.length===0,issues:t}}exportSelectionData(){const e=this.getSelectedProducts(),t=this.getSelectionSummary();return{selection:e,summary:t,exportDate:new Date().toISOString(),version:"1.0"}}importSelectionData(e){try{if(e.selection&&Array.isArray(e.selection))return this.saveSelectedProducts(e.selection),console.log(`✅ Imported ${e.selection.length} products`),!0;throw new Error("Invalid selection data format")}catch(t){return console.error("❌ Failed to import selection data:",t),!1}}}const dataLayer=new DataLayer,CONFIG$1={ROOMS:{PREDEFINED:[{name:"Bath 1",icon:"🛁"},{name:"Bath 2",icon:"🛁"},{name:"Bath 3",icon:"🛁"},{name:"Ensuite",icon:"🚿"},{name:"Powder",icon:"🚽"},{name:"Kitchen",icon:"🍽️"},{name:"Butlers",icon:"👨‍🍳"},{name:"Laundry",icon:"🧺"},{name:"Alfresco",icon:"🍽️"},{name:"Standard",icon:"📦"},{name:"Upgrade",icon:"⭐"}]},SEARCH:{MAX_RESULTS:8,SEARCH_FIELDS:["Description","ProductName","OrderCode","BARCODE"]},CSV:{URL:"https://docs.google.com/spreadsheets/d/e/2PACX-1vRnMqBCqB9L52W6YNgreLHJKvxOanS76CJN8ZUorBl8Iccha6MzUpDkGa0N8GSYFPP2zyql1Tq6aBn8/pub?gid=0&single=true&output=csv"},STORAGE_KEYS:{CUSTOM_ROOMS:"customRooms",SELECTED_PRODUCTS:"selectedProducts",PRODUCT_CATALOG:"productCatalog",USER_PREFERENCES:"userPreferences",ROOM_ASSIGNMENTS:"roomAssignments"},UI:{ANNOTATION_MAX_LENGTH:140,QUANTITY_OPTIONS:[1,2,3,4,5,6,7,8,9,10]},IMPORT:{MAX_FILE_SIZE:10*1024*1024,ACCEPTED_TYPES:[".csv",".xlsx",".xls",".json"],PRODUCT_CODE:{VALIDATION_REGEX:"^\\d{6}$",ALLOW_ANY_NON_EMPTY:!1,SKIP_VALIDATION:!1},COLUMN_PATTERNS:{productCode:["code","ordercode","productcode","sku","order code","product code","item code","article"],productName:["product name","description","name","item name","title"],quantity:["quantity","qty","min order quantity","orderquantity","count","amount"],priceIncGst:["price ea inc gst","price inc gst","priceincgst","rrp inc gst","inc gst","price incl gst"],priceExGst:["price per unit","price ex gst","rrp ex gst","ex gst","price excl gst","unit price"],room:["room","location","area","zone"],notes:["notes","note","comments","comment","remarks","annotation"],productsJson:["products json","productsjson","products_json"],customerName:["customer name","customername","client name","buyer name"],customerEmail:["customer email","customeremail","client email","email"],customerPhone:["customer phone","customerphone","phone","telephone","mobile"],customerAddress:["customer address","customeraddress","address","delivery address"],customerProject:["customer project","customerproject","project","project name"],customerType:["customer type","customertype","client type"],builderName:["builder name","buildername","builder"],merchantName:["merchant name","merchantname","merchant"],staffName:["staff name","staffname","salesperson","rep name"],staffEmail:["staff email","staffemail","rep email"],projectNotes:["project notes","projectnotes","about notes"],roomsList:["rooms list","roomslist","rooms"],estimateValue:["estimate value","estimatevalue","total value","estimate"]}},CSV_CONFIG:{MAX_FILE_SIZE:10*1024*1024,ACCEPTED_TYPES:[".csv",".xlsx",".xls"],REQUIRED_COLUMNS:["OrderCode"],OPTIONAL_COLUMNS:["Description","RRP_INCGST","Image_URL","Room","Quantity","Notes"]},CATALOG_URL:"https://docs.google.com/spreadsheets/d/e/2PACX-1vRnMqBCqB9L52W6YNgreLHJKvxOanS76CJN8ZUorBl8Iccha6MzUpDkGa0N8GSYFPP2zyql1Tq6aBn8/pub?gid=0&single=true&output=csv",VERSION:"3.0.0",PERFORMANCE:{MAX_PRODUCTS_PER_SESSION:1e3,IMAGE_CACHE_SIZE:100},EMAIL:{PUBLIC_KEY:"MHAEjvnc_xx8DIRCA",SERVICE_ID:"service_rblizfg",TEMPLATE_ID:"template_8st9fhk",PASSWORD_RESET_TEMPLATE_ID:"template_u15l8di",MAX_ATTACHMENT_SIZE:15*1024*1024,RETRY_ATTEMPTS:3,RETRY_DELAY:2e3,BCC_EMAIL:"jsegredos@gmail.com"},PRESENTATION_RECORDING:{ENABLED:!0,GOOGLE_SHEETS_URL:"https://script.google.com/macros/s/AKfycbypt3Y7RLAko49s6Nc0mecYYd4FyiQqBcHFJr-1megO3-m1Vo1bCbUOkqAax3g9w508RA/exec",RETRY_ATTEMPTS:3,RETRY_DELAY:1e3},COMPATIBILITY:{MIN_CHROME_VERSION:80,MIN_FIREFOX_VERSION:75,MIN_SAFARI_VERSION:13,REQUIRED_FEATURES:["localStorage","fileReader","blob","createObjectURL"],MIN_COMPATIBILITY_SCORE:70,MEMORY_WARNING_THRESHOLD:.8,SAMSUNG_OPTIMIZATIONS:!0,EXTENDED_TIMEOUTS_FOR_SAMSUNG:!0}};class PDFCore{constructor(){this.doc=null,this.pageWidth=210,this.pageHeight=297,this.margins={left:10,right:10,top:15,bottom:15},this.currentY=this.margins.top}async init(){try{return window.jsPDF||await this.loadJsPDF(),console.log("✅ PDF Core initialized"),!0}catch(e){return console.error("❌ Failed to initialize PDF Core:",e),!1}}async loadJsPDF(){return new Promise((e,t)=>{if(window.jsPDF){e();return}const o=document.createElement("script");o.src="https://cdn.jsdelivr.net/npm/jspdf@2.5.1/dist/jspdf.umd.min.js",o.onload=e,o.onerror=t,document.head.appendChild(o)})}createDocument(){return this.doc=new window.jsPDF({orientation:"portrait",unit:"mm",format:"a4"}),this.currentY=this.margins.top,this.doc}addNewPage(){this.doc.addPage(),this.currentY=this.margins.top}checkPageSpace(e){const t=this.pageHeight-this.margins.bottom;return this.currentY+e>t?(this.addNewPage(),!0):!1}addText(e,t,o,r={}){const{fontSize:s=10,fontStyle:n="normal",align:i="left",maxWidth:c=null}=r;if(this.doc.setFontSize(s),this.doc.setFont("helvetica",n),c){const l=this.doc.splitTextToSize(e,c);return this.doc.text(l,t,o,{align:i}),l.length*(s*.35)}else return this.doc.text(e,t,o,{align:i}),s*.35}addLine(e,t,o,r,s="#000000",n=.1){this.doc.setDrawColor(s),this.doc.setLineWidth(n),this.doc.line(e,t,o,r)}addRect(e,t,o,r,s="S",n="#000000"){this.doc.setDrawColor(n),this.doc.rect(e,t,o,r,s)}async addImage(e,t,o,r,s){return new Promise(n=>{if(!e||e==="N/A"){n({width:0,height:0});return}const i=new Image;i.crossOrigin="anonymous",i.onload=()=>{try{const c=document.createElement("canvas"),l=c.getContext("2d"),d=i.width/i.height;let u=r,m=r/d;m>s&&(m=s,u=s*d),c.width=u,c.height=m,l.drawImage(i,0,0,u,m);const g=this.detectTechnicalImage(i),h=g?.8:.7,f=g?"PNG":"JPEG",w=c.toDataURL(`image/${f.toLowerCase()}`,h);this.doc.addImage(w,f,t,o,u,m,void 0,"FAST"),n({width:u,height:m})}catch(c){console.warn("Failed to add image:",c),n({width:0,height:0})}},i.onerror=()=>{console.warn("Failed to load image:",e),n({width:0,height:0})},i.src=e})}getContentWidth(){return this.pageWidth-this.margins.left-this.margins.right}getContentHeight(){return this.pageHeight-this.margins.top-this.margins.bottom}detectTechnicalImage(e){const t=document.createElement("canvas"),o=t.getContext("2d"),r=Math.min(50,Math.min(e.width,e.height));t.width=r,t.height=r,o.drawImage(e,0,0,r,r);const n=o.getImageData(0,0,r,r).data,i=new Set;let c=0;for(let m=0;m<n.length;m+=4){const g=n[m],h=n[m+1],f=n[m+2];if(i.add(`${g},${h},${f}`),m>0&&m<n.length-4){const w=n[m-4],y=n[m-3],b=n[m-2];Math.abs(g-w)+Math.abs(h-y)+Math.abs(f-b)>50&&c++}}const l=i.size<500,d=c>r*r*.1,u=e.width<800&&e.height<800;return l||d||u}moveY(e){this.currentY+=e}getCurrentY(){return this.currentY}setCurrentY(e){this.currentY=e}getRemainingPageHeight(){return this.pageHeight-this.margins.bottom-this.currentY}isValidUrl(e){if(!e||typeof e!="string")return!1;try{return new URL(e),!0}catch{return!1}}formatPrice(e){if(!e||e==="N/A")return"";const t=parseFloat(e.toString().replace(/[^0-9.]/g,""));return t>0?`$${t.toFixed(2)}`:""}formatText(e,t=50){return e?e.length>t?`${e.substring(0,t-3)}...`:e:""}async finalize(){if(!this.doc)throw new Error("No document created");return this.doc.output("blob")}getDocument(){return this.doc}}const pdfCore=new PDFCore;class PDFLayouts{constructor(e){this.core=e||pdfCore}async addHeader(e){this.core.getDocument();const t=this.core.pageWidth,o=this.core.margins;this.core.addText("SEIMA",o.left,25,{fontSize:20,fontStyle:"bold"}),this.core.addText("Product Selection Report",t/2,25,{fontSize:16,fontStyle:"bold",align:"center"});const r=new Date().toLocaleDateString("en-AU");this.core.addText(r,t-o.right,25,{fontSize:10,align:"right"}),this.core.addLine(o.left,30,t-o.right,30,"#cccccc"),this.core.setCurrentY(35)}async addCustomerInfo(e){this.core.getDocument();const t=this.core.margins,o=this.core.getContentWidth();this.core.addText("Customer Information",t.left,this.core.getCurrentY(),{fontSize:14,fontStyle:"bold"}),this.core.moveY(8);const r=t.left,s=t.left+o/2;let n=this.core.getCurrentY();if(e.name&&e.name.trim()&&(this.core.addText(`Customer: ${e.name.trim()}`,r,n,{fontSize:10}),n+=5),e.project&&e.project.trim()&&(this.core.addText(`Project: ${e.project.trim()}`,r,n,{fontSize:10}),n+=5),n=this.core.getCurrentY(),e.email&&e.email.trim()&&(this.core.addText(`Email: ${e.email.trim()}`,s,n,{fontSize:10}),n+=5),e.phone&&e.phone.trim()&&(this.core.addText(`Phone: ${e.phone.trim()}`,s,n,{fontSize:10}),n+=5),e.address&&e.address.trim()){this.core.setCurrentY(n+2);const i=this.core.addText(`Address: ${e.address.trim()}`,r,this.core.getCurrentY(),{fontSize:10,maxWidth:o-20});this.core.moveY(i)}this.core.moveY(10),this.core.addLine(t.left,this.core.getCurrentY(),this.core.pageWidth-t.right,this.core.getCurrentY(),"#eeeeee"),this.core.moveY(5)}async addSelectionSummary(e){const t=this.core.margins;this.core.addText("Selection Summary",t.left,this.core.getCurrentY(),{fontSize:14,fontStyle:"bold"}),this.core.moveY(8);const o=e.length,s=new Set(e.map(i=>i.room).filter(Boolean)).size||1;let n=0;e.forEach(i=>{var d;const c=parseFloat((((d=i.product)==null?void 0:d.RRP_EX)||"0").toString().replace(/[^0-9.]/g,""))||0,l=i.quantity||1;n+=c*l}),this.core.addText(`Total Products: ${o}`,t.left,this.core.getCurrentY(),{fontSize:10}),this.core.moveY(5),this.core.addText(`Total Rooms: ${s}`,t.left,this.core.getCurrentY(),{fontSize:10}),this.core.moveY(5),n>0&&(this.core.addText(`Estimated Total Value: $${n.toFixed(2)} (inc GST)`,t.left,this.core.getCurrentY(),{fontSize:10,fontStyle:"bold"}),this.core.moveY(5)),this.core.moveY(10),this.core.addLine(t.left,this.core.getCurrentY(),this.core.pageWidth-t.right,this.core.getCurrentY(),"#eeeeee"),this.core.moveY(10)}async addProductTableHeader(){this.core.getDocument();const e=this.core.margins,t=this.core.getContentWidth();this.core.addText("Product Details",e.left,this.core.getCurrentY(),{fontSize:14,fontStyle:"bold"}),this.core.moveY(8);const o=this.core.getCurrentY(),r={image:25,code:35,description:70,price:25,qty:15,room:30};let s=e.left;return this.core.addRect(e.left,o-2,t,8,"F","#f5f5f5"),this.core.addText("Image",s+2,o+3,{fontSize:9,fontStyle:"bold"}),s+=r.image,this.core.addText("Code",s+2,o+3,{fontSize:9,fontStyle:"bold"}),s+=r.code,this.core.addText("Description",s+2,o+3,{fontSize:9,fontStyle:"bold"}),s+=r.description,this.core.addText("Price",s+2,o+3,{fontSize:9,fontStyle:"bold"}),s+=r.price,this.core.addText("Qty",s+2,o+3,{fontSize:9,fontStyle:"bold"}),s+=r.qty,this.core.addText("Room",s+2,o+3,{fontSize:9,fontStyle:"bold"}),this.core.moveY(10),r}async addProductRow(e,t,o=!1,r=null){var h,f,w,y,b,p,v;this.core.getDocument();const s=this.core.margins,n=20;this.core.checkPageSpace(n+5);const i=this.core.getCurrentY();let c=s.left;if(o&&this.core.addRect(s.left,i-1,this.core.getContentWidth(),n+2,"F","#fafafa"),(h=e.product)!=null&&h.Image_URL&&this.core.isValidUrl(e.product.Image_URL))try{await this.core.addImage(e.product.Image_URL,c+2,i,20,15)}catch(S){console.warn("Failed to add product image:",S)}c+=t.image;const l=this.core.formatText(((f=e.product)==null?void 0:f.OrderCode)||"",15);this.core.addText(l,c+2,i+5,{fontSize:8}),c+=t.code;const d=this.core.formatText(((w=e.product)==null?void 0:w.Description)||"",45);this.core.addText(d,c+2,i+5,{fontSize:8,maxWidth:t.description-4}),c+=t.description;let u=0;((y=e.product)==null?void 0:y.UserEditedPrice)!==void 0&&((b=e.product)==null?void 0:b.UserEditedPrice)!==null&&((p=e.product)==null?void 0:p.UserEditedPrice)!==""?u=parseFloat(e.product.UserEditedPrice.toString().replace(/,/g,""))||0:u=parseFloat((((v=e.product)==null?void 0:v.RRP_EX)||"0").toString().replace(/,/g,""))||0,u>0&&(r!=null&&r.includeGst)&&(u=u*1.1);const m=u>=0?`$${u.toLocaleString("en-AU",{minimumFractionDigits:2,maximumFractionDigits:2})}`:"";this.core.addText(m,c+2,i+5,{fontSize:8}),c+=t.price,this.core.addText((e.quantity||1).toString(),c+2,i+5,{fontSize:8}),c+=t.qty;const g=this.core.formatText(e.room||"",15);if(this.core.addText(g,c+2,i+5,{fontSize:8}),e.notes){const S=i+10;this.core.addText(`Notes: ${this.core.formatText(e.notes,60)}`,s.left+2,S,{fontSize:7,fontStyle:"italic"})}this.core.moveY(n)}async addFooter(e){const t=this.core.getDocument(),o=this.core.margins,r=this.core.pageWidth,n=this.core.pageHeight-20;this.core.addLine(o.left,n,r-o.right,n,"#cccccc"),this.core.addText("Generated by Seima Product Scanner",o.left,n+5,{fontSize:8,fontStyle:"italic"}),this.core.addText("www.seima.com.au",r-o.right,n+5,{fontSize:8,fontStyle:"italic",align:"right"});const i=t.internal.getNumberOfPages();this.core.addText(`Page ${i}`,r/2,n+5,{fontSize:8,align:"center"})}async addQRSection(e){const t=this.core.margins;this.core.checkPageSpace(40),this.core.moveY(10),this.core.addText("Quick Access Links",t.left,this.core.getCurrentY(),{fontSize:12,fontStyle:"bold"}),this.core.moveY(8);const o=e.filter(r=>{var s;return((s=r.product)==null?void 0:s.Website_URL)&&this.core.isValidUrl(r.product.Website_URL)}).slice(0,5);o.forEach((r,s)=>{const n=`${r.product.OrderCode}: ${r.product.Website_URL}`;this.core.addText(this.core.formatText(n,80),t.left+5,this.core.getCurrentY(),{fontSize:8}),this.core.moveY(4)}),o.length===0&&(this.core.addText("Visit www.seima.com.au for more product information",t.left+5,this.core.getCurrentY(),{fontSize:8,fontStyle:"italic"}),this.core.moveY(4))}}const pdfLayouts=new PDFLayouts;class UnifiedPDFGenerator{constructor(){this.core=pdfCore,this.layouts=pdfLayouts,this.isInitialized=!1}async init(){try{return await this.core.init(),this.isInitialized=!0,console.log("✅ Unified PDF Generator initialized"),!0}catch(e){return console.error("❌ Failed to initialize PDF Generator:",e),!1}}async generatePDF(e){try{this.isInitialized||await this.init();const t=this.getSelectedProducts();if(!t.length)throw new Error("No products selected");console.log(`📄 Generating PDF for ${t.length} products...`),this.core.createDocument(),await this.layouts.addHeader(e),await this.layouts.addCustomerInfo(e),await this.layouts.addSelectionSummary(t);const o=await this.layouts.addProductTableHeader();for(let s=0;s<t.length;s++){const n=t[s],i=s%2===0;await this.layouts.addProductRow(n,o,i,e)}await this.layouts.addQRSection(t),await this.layouts.addFooter(e);const r=await this.core.finalize();return console.log("✅ PDF generated successfully"),r}catch(t){throw console.error("❌ PDF generation failed:",t),t}}async generateCSV(e){try{const t=this.getSelectedProducts();if(!t.length)throw new Error("No products selected");console.log(`📊 Generating CSV for ${t.length} products...`);const o=[];o.push('"Code","Description","WELS Star","Quantity","Price ea ex GST","Price Total ex GST","Notes","Room","Image URL","Diagram URL","Datasheet URL","Website URL"'),t.forEach(n=>{var v,S,C,D,O,K,G,j,F,M,H;const i=this.cleanForCSV(((v=n.product)==null?void 0:v.OrderCode)||""),c=this.cleanForCSV(((S=n.product)==null?void 0:S.Description)||""),l=((C=n.product)==null?void 0:C["WELS STAR"])||((D=n.product)==null?void 0:D.WELS_STAR)||((O=n.product)==null?void 0:O.WELS_STAR)||((K=n.product)==null?void 0:K.WelsStar)||"",d=this.cleanForCSV(l&&l.toString().trim()?l.toString().replace(/[^\d.]/g,"").trim():""),u=n.quantity||1,m=this.cleanForCSV(((G=n.product)==null?void 0:G.RRP_EX)||""),g=this.calculateTotalPrice(m,u),h=this.cleanForCSV(n.notes||""),f=this.cleanForCSV(n.room||""),w=this.cleanForCSV(((j=n.product)==null?void 0:j.Image_URL)||""),y=this.cleanForCSV(((F=n.product)==null?void 0:F.Diagram_URL)||""),b=this.cleanForCSV(((M=n.product)==null?void 0:M.Datasheet_URL)||""),p=this.cleanForCSV(((H=n.product)==null?void 0:H.Website_URL)||"");o.push(`"${i}","${c}","${d}","${u}","${m}","${g}","${h}","${f}","${w}","${y}","${b}","${p}"`)});const r=o.join(`
`),s=new Blob([r],{type:"text/csv;charset=utf-8"});return console.log("✅ CSV generated successfully"),s}catch(t){throw console.error("❌ CSV generation failed:",t),t}}async generateBothFiles(e){try{const[t,o]=await Promise.all([this.generatePDF(e),this.generateCSV(e)]);return{pdfBlob:t,csvBlob:o}}catch(t){throw console.error("❌ File generation failed:",t),t}}getSelectedProducts(){const e=JSON.parse(localStorage.getItem("selection")||"[]"),t=JSON.parse(localStorage.getItem(CONFIG$1.STORAGE_KEYS.SELECTED_PRODUCTS)||"[]");return t.length>0?t:e.map(o=>({product:o,room:o.Room||"",notes:o.Notes||"",quantity:o.Quantity||1}))}calculateTotalPrice(e,t){const r=(parseFloat(e.toString().replace(/[^0-9.]/g,""))||0)*(t||1);return r>0?r.toFixed(2):""}cleanForCSV(e){return e?e.toString().replace(/"/g,'""').replace(/[\r\n]/g," "):""}async generateQuotePDF(e){return await this.generatePDF(e)}async generateReportPDF(e){return await this.generatePDF(e)}generateFileName(e,t){const o=new Date,r=String(o.getDate()).padStart(2,"0"),s=String(o.getMonth()+1).padStart(2,"0"),n=String(o.getFullYear()).slice(-2),i=String(o.getHours()).padStart(2,"0"),c=String(o.getMinutes()).padStart(2,"0");return`${(e.project||"seima-selection").replace(/[^a-zA-Z0-9\s]/g,"")}-${r}${s}${n}.${i}${c}.${t}`}downloadFile(e,t){const o=URL.createObjectURL(e),r=document.createElement("a");r.href=o,r.download=t,document.body.appendChild(r),r.click(),document.body.removeChild(r),URL.revokeObjectURL(o)}getSelectionSummary(){const e=this.getSelectedProducts(),t=e.length,r=new Set(e.map(n=>n.room).filter(Boolean)).size||1;let s=0;return e.forEach(n=>{var l;const i=parseFloat((((l=n.product)==null?void 0:l.RRP_EX)||"0").toString().replace(/[^0-9.]/g,""))||0,c=n.quantity||1;s+=i*c}),{totalProducts:t,totalRooms:r,totalValue:s,hasProducts:t>0}}}const pdfGenerator=new UnifiedPDFGenerator,utils={Utils},CONFIG=config;class ModuleCoordinator{constructor(){this.modules={dataLayer,pdfGenerator,pdfCore,pdfLayouts,StorageManager,utils},this.isInitialized=!1,this.initStatus={}}async init(){try{console.log("🚀 Initializing modular components...");const e=[this.initModule("dataLayer",this.modules.dataLayer),this.initModule("pdfGenerator",this.modules.pdfGenerator)];return(await Promise.allSettled(e)).forEach((o,r)=>{const s=["dataLayer","pdfGenerator"][r];o.status==="rejected"?(console.error(`❌ Failed to initialize ${s}:`,o.reason),this.initStatus[s]=!1):this.initStatus[s]=o.value}),this.isInitialized=!0,console.log("✅ Module initialization complete:",this.initStatus),this.initStatus}catch(e){return console.error("❌ Module coordinator initialization failed:",e),!1}}async initModule(e,t){try{if(t&&typeof t.init=="function"){const o=await t.init();return console.log(`✅ ${e} initialized:`,o),o}else return console.log(`ℹ️ ${e} does not require initialization`),!0}catch(o){throw console.error(`❌ Failed to initialize ${e}:`,o),o}}async searchProducts(e,t=10){return this.modules.dataLayer.isLoaded||await this.modules.dataLayer.init(),this.modules.dataLayer.searchProducts(e,t)}async findProductByCode(e){return this.modules.dataLayer.isLoaded||await this.modules.dataLayer.init(),this.modules.dataLayer.findProductByCode(e)}async addProductToSelection(e,t="",o="",r=1){return this.modules.dataLayer.addProductToSelection(e,t,o,r)}getSelectedProducts(){return this.modules.dataLayer.getSelectedProducts()}getSelectionSummary(){return this.modules.dataLayer.getSelectionSummary()}async generatePDF(e){return await this.modules.pdfGenerator.generatePDF(e)}async generateCSV(e){return await this.modules.pdfGenerator.generateCSV(e)}async generateBothFiles(e){return await this.modules.pdfGenerator.generateBothFiles(e)}async sendEmail(e,t){return await this.modules.emailService.sendEmailWithPDF(e,t)}clearSelection(){return this.modules.dataLayer.clearSelection()}getModuleStatus(){return{initialized:this.isInitialized,moduleStatus:this.initStatus,dataLayer:{loaded:this.modules.dataLayer.isLoaded,productCount:this.modules.dataLayer.products.length},selection:{count:this.getSelectedProducts().length,summary:this.getSelectionSummary()}}}async reinitializeModule(e){if(this.modules[e])try{return this.initStatus[e]=await this.initModule(e,this.modules[e]),this.initStatus[e]}catch(t){return console.error(`❌ Failed to reinitialize ${e}:`,t),!1}return!1}async batchAddProducts(e){const t=[];for(const{product:o,room:r,notes:s,quantity:n}of e)try{const i=await this.addProductToSelection(o,r,s,n);t.push({success:!0,result:i})}catch(i){t.push({success:!1,error:i.message,product:o})}return t}exportState(){return{moduleStatus:this.getModuleStatus(),config:CONFIG,timestamp:new Date().toISOString()}}}const moduleCoordinator=new ModuleCoordinator;moduleCoordinator.init().catch(a=>{console.error("❌ Auto-initialization failed:",a)});class NavigationManager{constructor(){this.currentScreen="welcome",this.currentSearchResults=[]}async init(){try{await dataLayer.init()}catch(e){console.error("Failed to load product catalog:",e)}await this.loadVersion(),this.updateSelectionCount(),setTimeout(()=>this.loadVersion(),1e3)}async loadVersion(){try{const e=await fetch("./version.txt");if(e.ok){const t=await e.text(),o=document.getElementById("version-number");if(o){const r=t.trim().split(`
`).filter(i=>i.trim()!==""),s=r.length>0?r[r.length-1]:"Unknown",n=s.split(" - ")[0]||s;o.innerText=n,o.innerText.trim()||(o.innerText="v2.1.0")}}else throw new Error("Version file not found")}catch{const t=document.getElementById("version-number");if(t){const o=config.get("app.version")||"v2.1.0";t.innerText=o}else setTimeout(()=>{const o=document.getElementById("version-number");if(o&&!o.innerText.trim()){const r=config.get("app.version")||"v2.1.0";o.innerText=r}},1e3);console.info("Version loaded from config (GitHub Pages mode)")}}async showProductLookupScreen(){try{const t=await(await fetch("./screens/product-grid.html")).text();document.body.innerHTML=t,this.currentScreen="product-grid";const o=document.createElement("script");o.type="module",o.src="js/app.js",document.body.appendChild(o),setTimeout(()=>{document.querySelectorAll(".back-btn").forEach(r=>r.remove())},100),window.productGridManager&&window.productGridManager.init(),await this.loadVersion(),setTimeout(()=>this.loadVersion(),1e3)}catch(e){console.error("Failed to load product grid screen:",e)}}setupSplitInterface(){const e=document.getElementById("back-to-home");e&&(e.onclick=()=>location.reload());const t=document.getElementById("download-btn"),o=document.getElementById("clear-all-btn");t&&(t.onclick=()=>this.showDownloadFormModal()),o&&(o.onclick=()=>this.showClearConfirmModal()),this.setupSplitProductSearch(),this.setupReviewTable(),this.renderReviewTable(),this.loadInitialSearchResults()}setupSplitProductSearch(){const e=document.getElementById("product-search-input"),t=document.getElementById("search-results-list"),o=document.getElementById("search-loading"),r=document.getElementById("search-no-results");if(!e||!t)return;const s=[],n=Utils.debounce(i=>{this.performSplitProductSearch(i,t,s,o,r)},200);e.addEventListener("input",()=>{const i=e.value.trim();i?n(i):this.loadInitialSearchResults()}),t.addEventListener("click",i=>{const c=i.target.closest(".result-item");if(!c)return;const l=parseInt(c.getAttribute("data-idx"),10),d=s.length>0?s:this.currentSearchResults||[];!isNaN(l)&&d[l]&&this.showSplitProductDetails(d[l])})}performSplitProductSearch(e,t,o,r,s){if(!dataLayer.isLoaded){r.style.display="flex",s.style.display="none",t.innerHTML="";return}o.length=0,o.push(...dataLayer.searchProducts(e)),r.style.display="none",o.length===0?(s.style.display="flex",t.innerHTML=""):(s.style.display="none",t.innerHTML=o.map((n,i)=>`
          <div class="result-item" data-idx="${i}">
            <span class="result-code">${Utils.sanitizeInput(n.OrderCode||n.Code||"")}</span> - ${Utils.sanitizeInput(n.Description||n.ProductName||n["Product Name"]||"")}
          </div>
        `).join(""))}async loadInitialSearchResults(){const e=document.getElementById("search-results-list"),t=document.getElementById("search-loading"),o=document.getElementById("search-no-results");if(!e)return;if(!dataLayer.isLoaded){t.style.display="flex",o.style.display="none",e.innerHTML="",setTimeout(()=>this.loadInitialSearchResults(),500);return}const r=dataLayer.getAllProducts().slice(0,50);t.style.display="none",o.style.display="none",e.innerHTML=r.map((s,n)=>`
        <div class="result-item" data-idx="${n}">
          <span class="result-code">${Utils.sanitizeInput(s.OrderCode||s.Code||"")}</span> - ${Utils.sanitizeInput(s.Description||s.ProductName||s["Product Name"]||"")}
        </div>
      `).join(""),this.currentSearchResults=r}showSplitProductDetails(e){const t=document.getElementById("product-details"),o=document.getElementById("product-image"),r=document.getElementById("product-name"),s=document.getElementById("product-code"),n=document.getElementById("product-price"),i=document.getElementById("product-room"),c=document.getElementById("product-quantity"),l=document.getElementById("product-notes"),d=document.getElementById("add-product-btn"),u=document.getElementById("close-details");if(t){if(o){const m=e.Image||e.Image_URL||e.imageUrl||"assets/no-image.png";o.src=m,o.alt=e.Description||e.ProductName||e["Product Name"]||"Product Image"}if(r&&(r.textContent=e.Description||e.ProductName||e["Product Name"]||""),s&&(s.textContent=e.OrderCode||e.Code||""),n){const m=e.RRP_EX||e["RRP EX GST"]||e.RRP_EX||e.RRP_EXGST||e.rrpExGst||e.RRP_INCGST||e["RRP INC GST"]||0;n.textContent=m?`$${parseFloat(m).toFixed(2)}`:"Price not available"}this.populateRoomSelect(i),c&&(c.value=1),l&&(l.value=""),u&&(u.onclick=()=>{t.style.display="none"}),d&&(d.onclick=()=>{const m=i?i.value:"Blank",g=c&&parseInt(c.value)||1,h=l?l.value.trim():"";this.addProductToSplitSelection(e,m,g,h),t.style.display="none"}),t.style.display="block"}}async showProductDetailsScreen(e,t={}){try{const r=await(await fetch("./screens/product-details.html")).text();document.body.innerHTML=r,this.currentScreen="product-details",this.populateProductDetails(e,t),this.setupProductDetailsHandlers(e)}catch(o){console.error("Failed to load product details screen:",o)}}populateProductDetails(e,t){const o=document.getElementById("product-image");o&&(o.src=e.Image_URL||"assets/no-image.png",o.onerror=function(){this.src="assets/no-image.png"}),document.getElementById("product-name").textContent=e.Description||"",document.getElementById("product-code").textContent=e.OrderCode?`Code: ${e.OrderCode}`:"";let r="",s=NaN;const n=e.RRP_EX||e["RRP EX GST"]||e.RRP_EX||e.RRP_EXGST||e.rrpExGst||e.RRP_INCGST||e["RRP INC GST"];n&&(s=parseFloat(n.toString().replace(/,/g,""))),!isNaN(s)&&s>0?r=`$${s.toFixed(2)} ex GST`:r="Price unavailable",document.getElementById("product-price-inline").textContent=r,document.getElementById("product-description").textContent=e.LongDescription||"",this.setLink("datasheet-link",e.Datasheet_URL),this.setLink("diagram-link",e.Diagram_URL),this.setLink("website-link",e.Website_URL);const i=document.getElementById("diagram-link"),c=document.getElementById("datasheet-link"),l=document.getElementById("website-link");if([i,c,l].forEach(d=>{d&&(d.setAttribute("target","_blank"),d.setAttribute("rel","noopener noreferrer"))}),this.setupVariantDropdown(e,t),this.populateRoomSelect(),this.setupQuantitySelect(),this.setupAnnotationField(),this.setupAnnotationCharacterCount(t),t.quantity){const d=document.getElementById("product-quantity");d&&(d.value=t.quantity)}t.scannedCode&&this.showScanFeedback(`Successfully scanned: ${t.scannedCode}`)}populateRoomSelect(e=null){const t=e||document.getElementById("room-select");if(!t)return;t.innerHTML='<option value="Blank">Blank</option>',config.get("rooms.predefined",[]).forEach(n=>{const i=document.createElement("option");i.value=n.name,i.textContent=n.name,t.appendChild(i)}),StorageManager.getCustomRooms().forEach(n=>{const i=document.createElement("option");i.value=n.name,i.textContent=n.name,t.appendChild(i)});const s=document.createElement("option");s.value="__ADD_NEW_ROOM__",s.textContent="➕ Add new room...",s.style.fontWeight="bold",s.style.color="#2563eb",t.appendChild(s),t.value="Blank",t.removeEventListener("change",this.handleRoomSelectChange.bind(this)),t.addEventListener("change",this.handleRoomSelectChange.bind(this))}setupQuantitySelect(){const e=document.getElementById("product-quantity");if(!e)return;e.innerHTML="",config.get("ui.quantityOptions",[1,2,3,4,5,6,7,8,9,10]).forEach(o=>{const r=document.createElement("option");r.value=o,r.textContent=o.toString(),e.appendChild(r)})}setLink(e,t){const o=document.getElementById(e);t&&t!=="#"?(o.href=t,o.style.display=""):o.style.display="none"}setupVariantDropdown(e,t){const o=document.getElementById("variant-select-row"),r=document.getElementById("variant-select");if(o&&r){let s=e.ProductName||e["Product Name"]||"";typeof s=="string"&&(s=s.trim());let n=[];s&&(n=dataLayer.getAllProducts().filter(i=>{let c=i.ProductName||i["Product Name"]||"";return typeof c=="string"&&(c=c.trim()),c&&c===s})),n.length>1?(n.sort((i,c)=>(i.Description||"").localeCompare(c.Description||"")),o.style.display="",r.innerHTML=n.map(i=>`<option value="${i.OrderCode}"${i.OrderCode===e.OrderCode?" selected":""}>${i.Description}</option>`).join(""),r.onchange=()=>{var l;const i=r.value,c=n.find(d=>d.OrderCode===i);if(c&&c.OrderCode!==e.OrderCode){const d=((l=document.getElementById("product-annotation"))==null?void 0:l.value)||t.notes||"",u=document.getElementById("product-quantity");let m=1;u&&u.value?m=Math.max(1,parseInt(u.value,10)||1):t.quantity&&(m=t.quantity),this.showProductDetailsScreen(c,{notes:d,quantity:m})}}):o.style.display="none"}}setupAnnotationCharacterCount(e){const t=document.getElementById("product-annotation"),o=document.getElementById("annotation-char-count");t&&o&&(t.addEventListener("input",()=>{t.value=t.value.replace(/\r?\n|\r/g," "),o.textContent=`${t.value.length}/140`}),t.addEventListener("keydown",r=>{r.key==="Enter"&&r.preventDefault()}),o.textContent=`${t.value.length}/140`,e.notes&&(t.value=e.notes))}setupAnnotationField(){}setupProductDetailsHandlers(e){const t=document.getElementById("back-to-grid"),o=document.getElementById("add-to-room-btn");t&&(t.onclick=()=>this.showProductLookupScreen()),o&&(o.onclick=()=>this.addProductToSelection(e))}addProductToSelection(e){const t=document.getElementById("room-select"),o=document.getElementById("product-quantity"),r=document.getElementById("product-annotation"),s=t?t.value:"Blank",n=o?parseInt(o.value):1,i=r?r.value:"";StorageManager.addProductToSelection(e,i,s,n)?this.showProductLookupScreen():alert("Failed to add product to selection")}addProductToSplitSelection(e,t,o,r){StorageManager.addProductToSelection(e,r,t,o)?(this.renderReviewTable(),this.updateSelectionCount()):alert("Failed to add product to selection")}setupReviewTable(){const e=document.getElementById("review-table-body");e&&(e.addEventListener("change",t=>{t.target.classList.contains("quantity-input")?this.handleQuantityChange(t.target):t.target.classList.contains("room-select")&&this.handleRoomChange(t.target)}),e.addEventListener("click",t=>{t.target.classList.contains("remove-btn")&&this.handleRemoveProduct(t.target)}))}renderReviewTable(){const e=document.getElementById("review-table"),t=document.getElementById("review-table-empty"),o=document.getElementById("review-table-body"),r=document.getElementById("total-items"),s=document.getElementById("total-value");if(!e||!t||!o)return;const n=StorageManager.getSelectedProducts();if(n.length===0){e.style.display="none",t.style.display="flex",r&&(r.textContent="0 items"),s&&(s.textContent="$0.00");return}t.style.display="none",e.style.display="flex";let i=0,c=0;n.forEach(l=>{i+=l.quantity;let d=0;l.product.UserEditedPrice!==void 0&&l.product.UserEditedPrice!==null&&l.product.UserEditedPrice!==""?d=parseFloat(l.product.UserEditedPrice.toString().replace(/,/g,""))||0:d=parseFloat((l.product.RRP_EX||l.product["RRP EX GST"]||l.product.RRP_EX||l.product.RRP_EXGST||0).toString().replace(/,/g,""))||0,d>0&&(c+=d*l.quantity)}),r&&(r.textContent=i),s&&(s.textContent=c>0?`$${c.toLocaleString("en-AU",{minimumFractionDigits:2,maximumFractionDigits:2})}`:"$0.00"),o.innerHTML=n.map((l,d)=>{const u=l.product;let m=0;u.UserEditedPrice!==void 0&&u.UserEditedPrice!==null&&u.UserEditedPrice!==""?m=parseFloat(u.UserEditedPrice.toString().replace(/,/g,""))||0:m=parseFloat((u.RRP_EX||u["RRP EX GST"]||u.RRP_EX||u.RRP_EXGST||0).toString().replace(/,/g,""))||0;const g=m*l.quantity,h=u.Image||u.Image_URL||u.imageUrl||"assets/no-image.png";return`
        <div class="table-row" data-index="${d}">
          <div class="col-image">
            <img class="table-product-image" src="${h}" alt="Product" onerror="this.src='assets/no-image.png';">
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
            <div class="price-display">${m?`$${m.toLocaleString("en-AU",{minimumFractionDigits:2,maximumFractionDigits:2})}`:"N/A"}</div>
          </div>
          <div class="col-qty">
            <input type="number" class="quantity-input" data-index="${d}" value="${l.quantity}" min="1" step="1">
          </div>
          <div class="col-total">
            <div class="price-display">${m?`$${g.toLocaleString("en-AU",{minimumFractionDigits:2,maximumFractionDigits:2})}`:"N/A"}</div>
          </div>
          <div class="col-actions">
            <button class="remove-btn" data-index="${d}" title="Remove">×</button>
          </div>
        </div>
      `}).join("")}getRoomOptions(e){let t=`<option value="Blank"${e==="Blank"?" selected":""}>Blank</option>`;return config.get("rooms.predefined",[]).forEach(s=>{t+=`<option value="${s.name}"${e===s.name?" selected":""}>${s.name}</option>`}),StorageManager.getCustomRooms().forEach(s=>{t+=`<option value="${s.name}"${e===s.name?" selected":""}>${s.name}</option>`}),t+='<option value="__ADD_NEW_ROOM__" style="font-weight: bold; color: #2563eb;">➕ Add new room...</option>',t}handleQuantityChange(e){const t=parseInt(e.getAttribute("data-index")),o=Math.max(1,parseInt(e.value)||1),r=StorageManager.getSelectedProducts();r[t]&&(r[t].quantity=o,StorageManager.setSelectedProducts(r),this.renderReviewTable(),this.updateSelectionCount())}handleRoomChange(e){const t=parseInt(e.getAttribute("data-index"));let o=e.value;if(o==="__ADD_NEW_ROOM__"){const s=prompt("Enter new room name:");if(s&&s.trim()){const n=s.trim();if(StorageManager.addCustomRoom(n)){o=n,console.log("✅ Added new room:",n),this.renderSelectionTable();return}else{alert("Room name already exists or is invalid");const i=StorageManager.getSelectedProducts();i[t]&&(e.value=i[t].room||"Blank");return}}else{const n=StorageManager.getSelectedProducts();n[t]&&(e.value=n[t].room||"Blank");return}}const r=StorageManager.getSelectedProducts();r[t]&&(r[t].room=o,StorageManager.setSelectedProducts(r),this.updateSelectionCount())}handleRemoveProduct(e){const t=parseInt(e.getAttribute("data-index")),o=StorageManager.getSelectedProducts();o[t]&&(o.splice(t,1),StorageManager.setSelectedProducts(o),this.renderReviewTable(),this.updateSelectionCount())}async showReviewScreen(){try{const t=await(await fetch("./screens/review.html")).text();document.body.innerHTML=t,this.currentScreen="review",this.setupReviewScreenHandlers(),this.renderReviewList()}catch(e){console.error("Failed to load review screen:",e)}}setupReviewScreenHandlers(){const e=document.getElementById("back-to-grid"),t=document.getElementById("add-more-btn"),o=document.getElementById("quick-pdf-btn");e&&(e.onclick=()=>this.showProductLookupScreen()),t&&(t.onclick=()=>this.showProductLookupScreen()),o&&(o.onclick=()=>this.showDownloadFormModal())}renderReviewList(){const e=document.getElementById("review-list"),t=document.getElementById("review-empty");if(!e)return;const o=StorageManager.getSelectedProducts();if(o.length===0){e.innerHTML="",t&&(t.style.display="block");return}t&&(t.style.display="none");const r={};o.forEach(s=>{const n=s.room||"Unassigned";r[n]||(r[n]=[]),r[n].push(s)}),e.innerHTML=Object.entries(r).map(([s,n])=>`
      <div class="review-room-group">
        <div class="review-room-header">${s} <span class="room-count">(${n.length})</span></div>
        ${n.map((i,c)=>{const l=i.product,d=l.Description||l.description||l.productName||l["Product Name"]||"Product",u=l.OrderCode||l.orderCode||"",m=l.Image_URL||l.imageUrl||"assets/no-image.png",g=l.RRP_EX||l["RRP EX GST"]||l.RRP_EX||l.rrpExGst||l.RRP_EXGST||l.RRP_INCGST||l["RRP INC GST"]||"0";return`
          <div class="review-product-card" style="display: flex; flex-direction: column; align-items: stretch;">
            <div style="display: flex; flex-direction: row; align-items: flex-start;">
              <div class="review-product-thumb-wrap">
                <img class="review-product-thumb" src="${m}" alt="Product" onerror="this.src='assets/no-image.png';" onload="">
                <div class="review-qty-pill" data-room="${s}" data-idx="${c}">
                  <button class="review-qty-btn${(i.quantity||1)===1?" delete":""}" data-action="decrement" title="${(i.quantity||1)===1?"Delete":"Decrease"}">
                    ${(i.quantity||1)===1?"<svg viewBox='0 0 64 64' width='64' height='64'><rect x='10' y='8' width='44' height='6' rx='3' fill='black'/><polygon points='7,18 57,18 52,58 12,58' fill='none' stroke='black' stroke-width='7'/></svg>":"–"}
                  </button>
                  <span class="review-qty-value">${i.quantity||1}</span>
                  <button class="review-qty-btn" data-action="increment" title="Increase">+</button>
                </div>
              </div>
              <div class="review-product-info">
                <div class="review-product-title">${d}</div>
                <div class="review-product-meta">
                  <span class="review-product-code">${u?`Code: ${u}`:""}</span>
                  <span class="review-product-price">${`$${Number(g).toFixed(2)} ea (EX GST)`}</span>
                </div>
                <div class="review-product-notes">${i.notes?`Notes: ${i.notes}`:""}</div>
              </div>
            </div>
          </div>
          `}).join("")}
      </div>
    `).join(""),this.setupOriginalQuantityControls(r)}groupProductsByRoom(e){return e.reduce((t,o)=>{const r=o.room||"Unassigned";return t[r]||(t[r]=[]),t[r].push(o),t},{})}setupOriginalQuantityControls(e){document.querySelectorAll(".review-qty-pill").forEach(t=>{const o=t.getAttribute("data-room"),r=parseInt(t.getAttribute("data-idx"),10);t.querySelectorAll(".review-qty-btn").forEach(s=>{s.onclick=()=>{const n=s.getAttribute("data-action"),i=StorageManager.getSelectedProducts();let c=-1;const l=i.findIndex(d=>(d.room===o&&c++,d.room===o&&c===r));if(l!==-1){const d=i[l],u=parseInt(d.quantity,10)||1;n==="increment"?StorageManager.updateProductQuantity(d.id,u+1):n==="decrement"&&(u===1?StorageManager.removeProductFromSelection(d.id):StorageManager.updateProductQuantity(d.id,u-1)),this.renderReviewList(),this.updateSelectionCount()}}})})}showDownloadFormModal(){var t;const e=document.getElementById("pdf-email-modal");if(e){e.style.display="flex";const o=document.getElementById("pdf-email-form"),r=document.getElementById("pdf-email-cancel"),s=document.getElementById("pdf-email-send");if(o){const i=Utils.getStorageItem("pdfFormSettings",{});o["user-name"]&&(o["user-name"].value=i.name||""),o["user-project"]&&(o["user-project"].value=i.project||""),o["user-address"]&&(o["user-address"].value=i.address||""),o["user-email"]&&(o["user-email"].value=i.email||""),o["user-telephone"]&&(o["user-telephone"].value=i.telephone||""),o["exclude-prices"]&&(o["exclude-prices"].checked=!!i.excludePrices),o["exclude-qty"]&&(o["exclude-qty"].checked=!!i.excludeQty),o["exclude-long-description"]&&(o["exclude-long-description"].checked=!!i.excludeLongDescription),o["include-gst"]&&(o["include-gst"].checked=!!i.includeGst)}const n=(t=o.querySelector('label[for="export-csv"]'))==null?void 0:t.parentElement;n&&(n.style.display="none"),s&&(s.textContent="Download"),r&&(r.onclick=()=>{e.style.display="none"}),o&&(o.onsubmit=i=>{i.preventDefault(),this.handleDownloadFormSubmit(),e.style.display="none"})}}handleDownloadFormSubmit(){console.log("🎯 handleDownloadFormSubmit called");const e=document.getElementById("pdf-email-form");if(!e){console.error("❌ Form not found!");return}const t=new FormData(e),o={name:t.get("user-name"),project:t.get("user-project"),address:t.get("user-address"),email:t.get("user-email"),telephone:t.get("user-telephone"),excludePrice:t.get("exclude-price")==="on"||t.get("exclude-prices")==="on",excludeQty:t.get("exclude-qty")==="on",excludeLongDescription:t.get("exclude-long-description")==="on",includeGst:t.get("include-gst")==="on",exportCsv:!0};console.log("📝 Navigation userDetails created:",o),window.dispatchEvent(new CustomEvent("generatePdf",{detail:o}))}showClearConfirmModal(){const e=document.getElementById("clear-selection-modal");if(e){e.style.display="flex";const t=document.getElementById("modal-cancel-btn"),o=document.getElementById("modal-confirm-btn");t&&(t.onclick=()=>{e.style.display="none"}),o&&(o.onclick=()=>{StorageManager.clearAllSelections(),e.style.display="none",this.updateSelectionCount(),this.currentScreen==="product-grid"&&window.productGridManager&&window.productGridManager.clearAll()})}}updateSelectionCount(){const e=document.getElementById("selection-count");e&&(e.textContent=StorageManager.getSelectionCount().toString())}handleRoomSelectChange(e){const t=e.target;if(t.value==="__ADD_NEW_ROOM__"){const r=prompt("Enter new room name:");if(r&&r.trim()){const s=r.trim();StorageManager.addCustomRoom(s)?(this.populateRoomSelect(t),t.value=s,console.log("✅ Added new room:",s)):(alert("Room name already exists or is invalid"),t.value="Blank")}else t.value="Blank"}}}async function downloadWithFallback(a,e,t="file"){await downloadWithEnhancedFallbacks(a,e,t)}function showPdfFormScreen$1(a,e=null){const t=document.getElementById("pdf-spinner");t&&(t.style.display="flex"),e&&(window._currentTipTailSettings=e),resetImageOptimizationStats();const o=document.createElement("div");o.id="pdf-processing-notification",o.style.cssText=`
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
    `,document.body.appendChild(o),loadImageAsDataURL("./assets/seima-logo.png",(s,n,i)=>{const c=JSON.parse(localStorage.getItem("selection")||"[]"),l=JSON.parse(localStorage.getItem(CONFIG$1.STORAGE_KEYS.SELECTED_PRODUCTS)||"[]");let d=[];l.length>0?d=l.map(p=>({...p.product,Room:p.room,Notes:p.notes,Quantity:p.quantity,Timestamp:new Date(p.timestamp).toISOString()})):d=c;const u=document.getElementById("sort-by"),m=u?u.value:"room";switch(m){case"code":d.sort((p,v)=>{const S=p.OrderCode||p.Code||"",C=v.OrderCode||v.Code||"";return S.localeCompare(C)});break;case"product":d.sort((p,v)=>{const S=p.Description||p.ProductName||"",C=v.Description||v.ProductName||"";return S.localeCompare(C)});break;case"room":default:d.sort((p,v)=>{const S=p.Room||"Blank",C=v.Room||"Blank";return S.localeCompare(C)});break}if(!d.length){alert("No products selected."),t&&(t.style.display="none");return}if(getImageCacheSize()>0)console.log(`📷 Using ${getImageCacheSize()} pre-cached images (skipping duplicate preload)`);else{const p=document.getElementById("pdf-processing-notification");if(p){const v=document.createElement("span");v.id="preload-progress",v.style.cssText="display: block; font-size: 12px; margin-top: 8px; color: #1e40af;",v.textContent="Loading images: 0%",p.appendChild(v)}console.log("📷 Starting image preload for",d.length,"products"),preloadAllProductImages(d).then(v=>{const S=document.getElementById("preload-progress");S&&(S.textContent=`✓ ${v} images ready`,S.style.color="#059669")}).catch(v=>{console.warn("Image preloading error:",v)})}const h={};m==="room"?d.forEach(p=>{const v=p.Room||"Blank";h[v]||(h[v]=[]),h[v].push(p)}):h.__all__=d;const{jsPDF:f}=window.jspdf,w=new f({orientation:"landscape",unit:"pt",format:"a4",compress:!0,putOnlyUsedFonts:!0,precision:16,userUnit:1,floatPrecision:16}),y=w.internal.pageSize.getWidth(),b=w.internal.pageSize.getHeight();loadImageAsDataURL("./assets/seima-logo.png",(p,v,S)=>{const C=authService.getCurrentUser(),D=StorageManager.getUserSettings(),O=C?{name:C.name,email:C.email,phone:C.phone,position:C.position}:D,K=localStorage.getItem("customerLogo");drawCoverPage(w,{pageWidth:y,pageHeight:b,seimaLogoDataUrl:p,seimaLogoNaturalW:v,seimaLogoNaturalH:S,customerLogoDataUrl:K,userDetails:a,staffContact:O,footerHeight:PDF_LAYOUT.footerHeight}),w.addPage(),loadImageAsDataURL("./assets/seima-logo-white.png",(G,j,F)=>{const q=a.showRrp&&!a.excludePrice,$=!a.excludePrice,oe=!a.excludeQty,te=calculateColumnLayout(y,{leftMargin:32,rightMargin:32,showRrp:q,showPrice:$,showQty:oe,showTotal:$&&oe}),{colX:R,colW:W,headers:se}=te,ne=PDF_LAYOUT.footerHeight;resetImageOptimizationStats();const ue=(E,x,U,V,T,B,L)=>{if(!x||typeof x!="string"||x.length<10||!x.startsWith("http://")&&!x.startsWith("https://")&&!x.startsWith("data:")){L&&L();return}if((P=>{if(!P||P.length<25||/\/images\/\d+$/.test(P)||P.endsWith("/0"))return!0;const I=/\.(jpg|jpeg|png|gif|webp|svg)(\?.*)?$/i.test(P),k=P.startsWith("data:");return!I&&!k})(x)){console.warn("Skipping malformed image URL:",(x==null?void 0:x.substring(0,50))+"..."),L&&L();return}if(imageOptimizationStats.totalImages++,a.emailCompatible){imageOptimizationStats.failedImages++,L&&L();return}const Y=getCachedImage(x);if(Y&&Y.dataUrl)try{const P=Y.width/Y.height;let I=T,k=T/P;k>B&&(k=B,I=B*P),E.addImage(Y.dataUrl,Y.format,U,V,I,k,void 0,"FAST"),imageOptimizationStats.optimizedImages++,L&&L();return}catch{console.warn("Failed to use cached image, falling back to direct load")}let Z=!1;const ce=["https://wsrv.nl/?url=","https://images.weserv.nl/?url=","https://api.codetabs.com/v1/proxy?quest="];let J=0;function X(){if(Z)return;const P=new Image;P.crossOrigin="Anonymous";let I=null;P.onload=function(){if(!Z){Z=!0,I&&clearTimeout(I);try{const ee=getOptimizedFileSettings(0),fe=ee.imageMaxWidth,me=T,Q=B;try{const N=document.createElement("canvas"),_=N.getContext("2d"),{width:z,height:Ee}=calculateOptimizedDimensions(P.width,P.height,fe);N.width=z,N.height=Ee,_.imageSmoothingEnabled=!0,_.imageSmoothingQuality="high",_.drawImage(P,0,0,z,Ee);let ve,be="JPEG";const Pe=detectTransparency(N,_),Ce=isTechnicalDiagram(P);Pe||Ce?(ve=N.toDataURL("image/png",ee.imageQuality),be="PNG"):(ve=N.toDataURL("image/jpeg",ee.imageQuality),be="JPEG");const Ie=`img_${generateImageHash(x)}`;E.addImage(ve,be,U,V,me,Q,Ie,"FAST"),imageOptimizationStats.optimizedImages++,L&&L()}catch(N){console.warn(`Failed to optimize image: ${x}`,N),console.warn("Error details:",N.message,N.stack);try{E.addImage(P,"JPEG",U,V,me,Q),imageOptimizationStats.optimizedImages++,L&&L()}catch(_){console.error(`Fallback also failed for: ${x}`,_),imageOptimizationStats.failedImages++,L&&L()}}}catch(ee){console.warn("Failed to add image to PDF:",ee),imageOptimizationStats.failedImages++,L&&L()}}},P.onerror=function(){Z||(I&&clearTimeout(I),console.warn(`Failed to load image with proxy ${J}: ${x}`),console.warn(`Error details for: ${x} - Proxy: ${ce[J]}`),J++,J<ce.length?setTimeout(()=>{X()},200):(Z=!0,console.warn("All proxies failed, skipping image"),imageOptimizationStats.failedImages++,L&&L()))},I=setTimeout(()=>{Z||(console.warn(`⏰ Timeout with proxy ${J}: ${x}`),P.src="",P.onload=null,P.onerror=null,J++,J<ce.length?setTimeout(()=>{X()},200):(Z=!0,console.warn("All proxies timed out, skipping image"),imageOptimizationStats.failedImages++,L&&L()))},3e3);let k=x;J<ce.length&&(k=ce[J]+encodeURIComponent(x)),P.src=k}X()},A=[];Object.keys(h).forEach((E,x)=>{const U=h[E];if(!U||!Array.isArray(U)){console.warn("⚠️ Skipping invalid room items:",E,U);return}U.forEach((V,T)=>{if(!V){console.warn("⚠️ Skipping null item in room:",E,"at index:",T);return}A.push({item:V,room:E,rIdx:x,iIdx:T,isFirstInRoom:T===0,roomCount:U.length})})}),A.reduce((E,x)=>{if(!x||!x.item)return console.warn("⚠️ Skipping null row in data analysis:",x),E;const U=String(x.item.Description||""),V=String(x.item.LongDescription||""),T=String(x.item.Notes||""),B=String(x.item.OrderCode||"");return E+U.length+V.length+T.length+B.length},0);let ie=0,pe=0;const ge=4,he=8,ye=Math.floor((b-80)/ge);let xe=ne+8;function we(){if(!A||!Array.isArray(A)){console.error("❌ Critical error: rowsToDraw is not a valid array:",A),showDetailedErrorMessage(new Error("Invalid product data structure"),"generating PDF","unknown.pdf");return}if(ie>=A.length){const T=w.internal.getNumberOfPages()-1;for(let I=2;I<=T+1;I++){w.setPage(I);const ee=(I-2)*ge,fe=Math.min(ee+ge,A.length);let me=!1;for(let Q=ee;Q<fe;Q++)if(A[Q]&&A[Q].item&&hasWelsData(A[Q].item)){me=!0;break}drawPDFHeader(w,{pageWidth:y,colX:R,colW:W,leftMargin:32,footerHeight:ne,logoDataUrl:G,logoNaturalW:j,logoNaturalH:F,headers:se,userDetails:a,skipWelsHeader:!me}),drawPDFFooter(w,{pageWidth:y,pageHeight:b,leftMargin:32,footerHeight:ne,pageNumber:I-1,totalPages:T})}const B=new Date,L=String(B.getDate()).padStart(2,"0"),ae=String(B.getMonth()+1).padStart(2,"0"),Y=String(B.getFullYear()).slice(-2),Z=String(B.getHours()).padStart(2,"0"),ce=String(B.getMinutes()).padStart(2,"0"),X=`${a.project.replace(/[^a-zA-Z0-9\s]/g,"")}-${L}${ae}${Y}.${Z}${ce}.pdf`,P=document.getElementById("pdf-processing-notification");P&&P.remove(),showImageOptimizationSummary(a.emailCompatible);try{const I=w.output("blob"),k=w.output("string"),ee=k?k.match(/\/Type\s*\/XObject/g):null,fe=k?k.match(/Tj\s/g):null,me=k?k.match(/\/A\s*<</g):null;a.pdfSize=I.size;const Q=showFileSizeInfo(I,X);if(a.sendEmail&&I.size>15*1024*1024){console.warn(`❌ PDF too large for email (${(I.size/1024/1024).toFixed(1)}MB), offering email-compatible version`),showEmailCompatibleOption(a,X);return}const N=createOptimizedBlob(I,Q.settings);if(a.sendEmail&&a.email)if(a.exportCsv){const _=X.replace(/\.pdf$/,".csv");generateCsvBlobAsync(a,_).then(z=>{window.dispatchEvent(new CustomEvent("sendEmail",{detail:{userDetails:a,pdfBlob:N,csvBlob:z}}))}).catch(z=>{console.error("Async CSV generation for email failed:",z),window.dispatchEvent(new CustomEvent("sendEmail",{detail:{userDetails:a,pdfBlob:N,csvBlob:null}}))})}else window.dispatchEvent(new CustomEvent("sendEmail",{detail:{userDetails:a,pdfBlob:N,csvBlob:null}}));else if((async()=>{const _=await mergeWithTipTail(N);downloadWithFallback(_,X,"PDF")})(),a.exportCsv){const _=X.replace(/\.pdf$/,".csv");setTimeout(()=>{generateCsvBlobAsync(a,_).then(z=>{z&&downloadWithFallback(z,_,"CSV")}).catch(z=>{console.error("CSV generation failed:",z)})},1e3)}}catch(I){console.error("PDF generation failed:",I),showDetailedErrorMessage(I,"generating PDF",X);const k=document.getElementById("pdf-processing-notification");k&&k.remove()}t&&(t.style.display="none");return}pe>=ge&&(w.addPage(),xe=ne+8,pe=0);const E=A[ie];if(!E||!E.item){console.warn(`⚠️  Skipping invalid row at index ${ie}:`,E),ie++,we();return}const x=xe+ye*pe;E.isFirstInRoom&&m==="room"&&E.room!=="__all__"&&drawRoomHeader(w,E.room,E.roomCount,32,x);const U=R[0],V=U+90+12;ue(w,E.item.Image_URL||"",U,x+he+16,90,ye-he*2,()=>{ue(w,E.item.Diagram_URL||"",V,x+he+16,90,ye-he*2,()=>{const T=x+28,B=R[1]+W[1]/2;w.setFontSize(10),w.setTextColor("#222"),w.text(String(E.item.OrderCode||""),B,T+10,{align:"center"}),drawProductLinks(w,E.item,B,T+35);const L=W[2]-10;drawProductDescription(w,E.item,R[2],T+10,L,a.excludeLongDescription);const ae=se.indexOf("WELS")+1;if(ae>0&&R[ae]){const Y=R[ae]+W[ae]/2;drawWelsRating(w,E.item,Y,T+10)}drawProductPricing(w,E.item,R,W,se,T+10,{excludePrice:a.excludePrice,includeGst:a.includeGst}),ie++,pe++,we()})})}we()})})})}function loadImageAsDataURL(a,e){const t=new window.Image;t.crossOrigin="Anonymous",t.onload=function(){const o=document.createElement("canvas"),r=o.getContext("2d"),s=400,n=150;let i=t.width,c=t.height;if(i>s||c>n){const d=s/i,u=n/c,m=Math.min(d,u);i=Math.round(i*m),c=Math.round(c*m)}o.width=i,o.height=c,r.imageSmoothingEnabled=!0,r.imageSmoothingQuality="high",r.drawImage(t,0,0,i,c);const l=o.toDataURL("image/png",.9);e(l,i,c)},t.src=a}function ensurePdfSpinner(){if(!document.getElementById("pdf-spinner")){const a=document.createElement("div");if(a.id="pdf-spinner",a.style.display="none",a.style.position="fixed",a.style.top="0",a.style.left="0",a.style.width="100vw",a.style.height="100vh",a.style.zIndex="9999",a.style.background="rgba(255,255,255,0.7)",a.style.alignItems="center",a.style.justifyContent="center",a.innerHTML='<div style="border:6px solid #e0e0e0;border-top:6px solid #2563eb;border-radius:50%;width:54px;height:54px;animation:spin 1s linear infinite;"></div>',document.body.appendChild(a),!document.getElementById("pdf-spinner-style")){const e=document.createElement("style");e.id="pdf-spinner-style",e.innerHTML="@keyframes spin { 0% { transform: rotate(0deg);} 100% { transform: rotate(360deg);} }",document.head.appendChild(e)}}}async function generateCsvBlobAsync(a,e){return new Promise(async t=>{if(!window.Papa)try{await Utils.loadScript("https://cdn.jsdelivr.net/npm/papaparse@5.4.1/papaparse.min.js")}catch(n){console.error("Failed to load PapaParse:",n),t(null);return}const o=JSON.parse(localStorage.getItem("selection")||"[]"),r=JSON.parse(localStorage.getItem(CONFIG$1.STORAGE_KEYS.SELECTED_PRODUCTS)||"[]");let s=[];if(r.length>0?s=r.map(n=>({...n.product,Room:n.room,Notes:n.notes,Quantity:n.quantity,Timestamp:new Date(n.timestamp).toISOString()})):s=o,!s.length){t(null);return}setTimeout(()=>{const n=s.map(i=>{let c,l,d,u;const m=a.excludePrice;let g=0;if(i.UserEditedPrice!==void 0&&i.UserEditedPrice!==null&&i.UserEditedPrice!=="")g=parseFloat(i.UserEditedPrice.toString().replace(/,/g,""));else{const y=i.RRP_EX||i["RRP EX GST"]||i.RRP_EX||i.RRP_EXGST||"";g=parseFloat((y||"0").toString().replace(/,/g,""))}c=g,d="Price ea ex GST",u="Price Total ex GST",l=!isNaN(c)&&c>=0?(c*(i.Quantity||1)).toFixed(2):"";const h=i["WELS STAR"]||i.WELS_STAR||i.WELS_STAR||i.WelsStar||"",f=h&&h.toString().trim()?h.toString().replace(/[^\d.]/g,"").trim():"",w={Code:sanitizeCSVField(i.OrderCode||""),Description:sanitizeCSVField(i.Description||""),"WELS Star":sanitizeCSVField(f),Quantity:i.Quantity||1,Notes:sanitizeCSVField(i.Notes||""),Room:sanitizeCSVField(i.Room||""),"Image URL":sanitizeCSVField(i.Image_URL||""),"Diagram URL":sanitizeCSVField(i.Diagram_URL||""),"Datasheet URL":sanitizeCSVField(i.Datasheet_URL||""),"Website URL":sanitizeCSVField(i.Website_URL||"")};return w[d]=m?"0.00":c>=0?c.toFixed(2):"",w[u]=m?"0.00":l,w});setTimeout(()=>{const i=window.Papa.unparse(n,{quotes:!0,quoteChar:'"',delimiter:",",header:!0,newline:`\r
`,skipEmptyLines:!1,escapeChar:'"',transform:{value(c,l){return typeof c=="string"?c.replace(/\0/g,"").replace(/[\x00-\x08\x0B\x0C\x0E-\x1F]/g,""):c}}});a.sendEmail?setTimeout(()=>{try{const c=btoa(unescape(encodeURIComponent(i)));t({name:e,data:c,contentType:"text/csv",originalSize:i.length,base64Size:c.length})}catch(c){console.error("CSV base64 encoding failed:",c),t(new Blob([i],{type:"text/csv"}))}},0):t(new Blob([i],{type:"text/csv"}))},0)},0)})}function sanitizeCSVField(a){return typeof a!="string"&&(a=String(a)),a=a.replace(/\0/g,"").replace(/[\x00-\x08\x0B\x0C\x0E-\x1F]/g,"").replace(/\r?\n|\r/g," ").trim(),a}async function downloadViaFileSystemAPI(a,e,t="file"){try{if("showSaveFilePicker"in window){const r=await(await window.showSaveFilePicker({suggestedName:e,types:[{description:`${t} files`,accept:{[a.type]:[`.${e.split(".").pop()}`]}}]})).createWritable();return await r.write(a),await r.close(),!0}}catch(o){console.warn("File System Access API failed:",o)}return!1}function downloadViaDataURI(a,e,t="file"){try{if(a.size>2*1024*1024)return console.warn("File too large for data URI method"),!1;const o=new FileReader;return o.onload=function(r){try{const s=document.createElement("a");s.href=r.target.result,s.download=e,s.style.display="none",document.body.appendChild(s),s.click(),document.body.removeChild(s)}catch(s){console.error("Data URI download failed:",s)}},o.readAsDataURL(a),!0}catch(o){return console.warn("Data URI method failed:",o),!1}}function showManualDownloadOption(a,e,t="file"){const o=URL.createObjectURL(a),r=document.createElement("div");r.style.cssText=`
    position: fixed; top: 0; left: 0; width: 100%; height: 100%; 
    background: rgba(0,0,0,0.8); z-index: 10001; display: flex; 
    align-items: center; justify-content: center; padding: 20px;
  `;const s=document.createElement("div");s.style.cssText=`
    background: white; border-radius: 8px; padding: 30px; max-width: 600px; 
    width: 100%; max-height: 80vh; overflow-y: auto;
  `,s.innerHTML=`
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
  `,r.appendChild(s),document.body.appendChild(r),document.getElementById("manual-download-close").onclick=()=>{URL.revokeObjectURL(o),document.body.removeChild(r)},document.getElementById("manual-download-retry").onclick=()=>{URL.revokeObjectURL(o),document.body.removeChild(r),setTimeout(()=>{downloadWithEnhancedFallbacks(a,e,t)},1e3)},document.getElementById("copy-url-btn").onclick=()=>{const n=document.getElementById("manual-download-url");n.select(),n.setSelectionRange(0,99999);try{navigator.clipboard.writeText(o).then(()=>{const i=document.getElementById("copy-url-btn");i.textContent="Copied!",i.style.background="#059669",setTimeout(()=>{i.textContent="Copy",i.style.background="#059669"},2e3)}).catch(()=>{document.execCommand("copy");const i=document.getElementById("copy-url-btn");i.textContent="Copied!",setTimeout(()=>i.textContent="Copy",2e3)})}catch{alert("Copy failed. Please select the URL manually and copy it.")}},r.onclick=n=>{n.target===r&&(URL.revokeObjectURL(o),document.body.removeChild(r))},setTimeout(()=>{r.parentElement&&(URL.revokeObjectURL(o),document.body.removeChild(r))},5*60*1e3)}async function downloadWithEnhancedFallbacks(a,e,t="file"){try{if(await attemptStandardDownload(a,e))return}catch(o){console.warn("Standard download failed:",o)}await downloadViaFileSystemAPI(a,e,t)||downloadViaDataURI(a,e,t)||showManualDownloadOption(a,e,t)}function attemptStandardDownload(a,e){return new Promise(t=>{try{const o=URL.createObjectURL(a),r=document.createElement("a");r.href=o,r.download=e,r.style.display="none",document.body.appendChild(r);const s=setTimeout(()=>{n(),t(!1)},3e3),n=()=>{clearTimeout(s),r.parentElement&&document.body.removeChild(r),setTimeout(()=>URL.revokeObjectURL(o),1e3)};r.onclick=()=>{n(),t(!0)},r.click(),setTimeout(()=>{n(),t(!0)},500)}catch(o){console.error("Standard download error:",o),t(!1)}})}function isTechnicalDiagram(a){const e=document.createElement("canvas"),t=e.getContext("2d");e.width=Math.min(100,a.width),e.height=Math.min(100,a.height),t.drawImage(a,0,0,e.width,e.height);const r=t.getImageData(0,0,e.width,e.height).data,s=new Set;for(let n=0;n<r.length;n+=4){const i=`${r[n]},${r[n+1]},${r[n+2]}`;s.add(i)}return s.size<1e3}function detectTransparency(a,e){const o=e.getImageData(0,0,a.width,a.height).data;for(let r=3;r<o.length;r+=4)if(o[r]<255)return!0;return!1}function calculateOptimizedDimensions(a,e,t){if(a<=t)return{width:a,height:e};const o=e/a;return{width:t,height:Math.round(t*o)}}function getOptimizedFileSettings(a){return a>25*1024*1024?{compressionLevel:"aggressive",imageQuality:.6,imageMaxWidth:300,removeImages:!1,usePNG:!0,message:"Aggressive compression - maintaining technical diagram clarity"}:a>20*1024*1024?{compressionLevel:"high",imageQuality:.65,imageMaxWidth:350,removeImages:!1,usePNG:!0,message:"High compression - preserving technical diagram details"}:a>15*1024*1024?{compressionLevel:"medium",imageQuality:.7,imageMaxWidth:400,removeImages:!1,usePNG:!0,message:"Medium compression - optimal for technical documentation"}:a>10*1024*1024?{compressionLevel:"light",imageQuality:.75,imageMaxWidth:450,removeImages:!1,usePNG:!0,message:"Light compression - excellent technical diagram quality"}:{compressionLevel:"minimal",imageQuality:.8,imageMaxWidth:500,removeImages:!1,usePNG:!0,message:"Minimal compression - maximum technical diagram quality"}}function createOptimizedBlob(a,e){return a}function showFileSizeInfo(a,e){const t=(a.size/1048576).toFixed(2),o=getOptimizedFileSettings(a.size);if(a.size>15*1024*1024){console.warn(`Large file detected (${t} MB) - exceeds typical email limit, may need email-compatible version`);const r=document.createElement("div");r.style.cssText=`
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
  `;const s=document.createElement("div");return s.style.cssText=`
    background: white; border-radius: 8px; padding: 30px; max-width: 700px; 
    width: 100%; max-height: 80vh; overflow-y: auto;
  `,s.innerHTML=`
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
  `,r.appendChild(s),document.body.appendChild(r),document.getElementById("error-close").onclick=()=>{document.body.removeChild(r)},document.getElementById("error-retry").onclick=()=>{document.body.removeChild(r),console.log("Retry requested for:",e)},document.getElementById("error-report").onclick=()=>{copyErrorReportToClipboard(o),alert("Error details copied to clipboard. Please send this to support.")},r.onclick=n=>{n.target===r&&document.body.removeChild(r)},o}function identifyErrorType(a){var o,r;const e=((o=a.message)==null?void 0:o.toLowerCase())||"",t=((r=a.stack)==null?void 0:r.toLowerCase())||"";return e.includes("network")||e.includes("fetch")?"network":e.includes("permission")||e.includes("denied")?"permission":e.includes("memory")||e.includes("quota")?"memory":e.includes("blob")||e.includes("url")?"download":e.includes("canvas")||e.includes("image")?"rendering":t.includes("jspdf")||e.includes("pdf")?"pdf":"unknown"}function getErrorTitle(a){return{network:"Network Connection Error",permission:"Permission Required",memory:"Insufficient Memory",download:"Download Failed",rendering:"Display Error",pdf:"PDF Generation Error",unknown:"Unexpected Error"}[a]||"Error Occurred"}function getUserFriendlyMessage(a,e,t){return{network:"Unable to load required resources. Please check your internet connection and try again.",permission:`Browser permission required to save ${t}. Please allow downloads and try again.`,memory:"Not enough memory to process this large file. Try closing other browser tabs or use fewer products.",download:`Failed to download ${t}. This may be due to browser security settings or storage limitations.`,rendering:"Unable to display product images properly. Some images may be missing from the final output.",pdf:`PDF generation failed while ${e}. The file may be too large or contain problematic data.`,unknown:`An unexpected error occurred while ${e}. Please try again or contact support.`}[a]||"An unknown error has occurred."}function getSolutionSteps(a){const e={network:`
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
  `,t.appendChild(o),document.body.appendChild(t),document.getElementById("email-regular-version").onclick=()=>{t.remove();const r=new CustomEvent("sendEmailRegular",{detail:{userDetails:a,originalFilename:e}});window.dispatchEvent(r)},document.getElementById("email-optimized-version").onclick=()=>{t.remove(),a.emailCompatible=!0,showPdfFormScreen$1(a)}}const TIP_TAIL_STORAGE_KEY$2="tipTailSettings";async function mergeWithTipTail(a){let e={};if(window._currentTipTailSettings)e=window._currentTipTailSettings,window._currentTipTailSettings=null;else try{e=JSON.parse(localStorage.getItem(TIP_TAIL_STORAGE_KEY$2)||"{}")}catch(c){console.warn("Could not read tipTailSettings from localStorage:",c)}const{tipAsset:t,tipUpload:o,tailAsset:r,tailUpload:s}=e;if(!t&&!o&&!r&&!s)return a;async function n(c,l,d="file"){if(l&&c)try{const u=atob(c),m=new Uint8Array(u.length);for(let g=0;g<u.length;g++)m[g]=u.charCodeAt(g);return m.buffer}catch(u){return console.warn(`⚠️ Error converting base64 to ArrayBuffer for ${d}:`,u),null}if(c)try{const u=await fetch(c);return u.ok?await u.arrayBuffer():(console.warn(`⚠️ Failed to fetch ${d} file: ${c} (${u.status} ${u.statusText})`),null)}catch(u){return console.warn(`⚠️ Error fetching ${d} file: ${c}`,u),null}return null}async function i(c,l="file",d="unknown"){if(!c)return null;try{return await PDFLib.PDFDocument.load(c)}catch(u){return console.warn(`⚠️ Failed to parse ${l} PDF: ${d}`,u),null}}try{const c=await a.arrayBuffer(),l=await PDFLib.PDFDocument.load(c),d=await PDFLib.PDFDocument.create(),[u]=await d.copyPages(l,[0]);d.addPage(u);let m=null,g=null;if(o){const y=await n(o,!0,"tip");y?(m=await i(y,"tip","uploaded file"),m||(g="The uploaded tip file is not a valid PDF or could not be loaded.")):g="Failed to process the uploaded tip file."}else if(t){const y=await n(t,!1,"tip");y?(m=await i(y,"tip",t),m||(g=`The tip file "${t.split("/").pop()}" is not a valid PDF or could not be loaded.`)):g=`The tip file "${t.split("/").pop()}" could not be found or accessed.`}if(m){const y=Array.from({length:m.getPageCount()},(p,v)=>v);(await d.copyPages(m,y)).forEach(p=>d.addPage(p))}else g&&(console.warn(`⚠️ Tip file error: ${g}`),showTipTailWarning("Tip File Issue",g));if(l.getPageCount()>1){const y=Array.from({length:l.getPageCount()-1},(p,v)=>v+1);(await d.copyPages(l,y)).forEach(p=>d.addPage(p))}let h=null,f=null;if(s){const y=await n(s,!0,"tail");y?(h=await i(y,"tail","uploaded file"),h||(f="The uploaded tail file is not a valid PDF or could not be loaded.")):f="Failed to process the uploaded tail file."}else if(r){const y=await n(r,!1,"tail");y?(h=await i(y,"tail",r),h||(f=`The tail file "${r.split("/").pop()}" is not a valid PDF or could not be loaded.`)):f=`The tail file "${r.split("/").pop()}" could not be found or accessed.`}if(h){const y=Array.from({length:h.getPageCount()},(p,v)=>v);(await d.copyPages(h,y)).forEach(p=>d.addPage(p))}else f&&(console.warn(`⚠️ Tail file error: ${f}`),showTipTailWarning("Tail File Issue",f));const w=await d.save({useObjectStreams:!0,addDefaultPage:!1,objectsPerTick:20});return new Blob([w],{type:"application/pdf"})}catch(c){return console.error("❌ Error during PDF merging:",c),showTipTailWarning("PDF Merging Error","An error occurred while merging the PDF files. The main PDF will be generated without tip/tail content."),a}}function showTipTailWarning(a,e){const t=document.createElement("div");t.style.cssText=`
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
  `,document.body.appendChild(t),setTimeout(()=>{t.parentElement&&t.remove()},8e3)}class FileImportManager{constructor(){this.selectedFile=null,this.importMode="append",this.processedData=[],this.notFoundProducts=[],this.importedMetadata=null}init(){this.setupEventHandlers(),console.log("FileImportManager initialized")}setupEventHandlers(){const e=document.getElementById("import-file-btn");e&&(e.onclick=()=>this.showImportModal());const t=document.getElementById("file-drop-zone"),o=document.getElementById("file-input");t&&o&&(t.onclick=()=>o.click(),t.ondragover=d=>{d.preventDefault(),t.style.borderColor="#059669",t.style.background="#f0fdf4"},t.ondragleave=d=>{d.preventDefault(),t.style.borderColor="#ccc",t.style.background="#fafafa"},t.ondrop=d=>{d.preventDefault(),t.style.borderColor="#ccc",t.style.background="#fafafa";const u=d.dataTransfer.files;u.length>0&&this.handleFileSelection(u[0])},o.onchange=d=>{d.target.files.length>0&&this.handleFileSelection(d.target.files[0])});const r=document.getElementById("import-cancel-btn"),s=document.getElementById("import-next-btn"),n=document.getElementById("import-back-btn"),i=document.getElementById("import-process-btn"),c=document.getElementById("import-close-btn");r&&(r.onclick=()=>this.closeModal()),s&&(s.onclick=()=>this.showImportModeStep()),n&&(n.onclick=()=>this.showFileSelectionStep()),i&&(i.onclick=()=>this.processImport()),c&&(c.onclick=()=>this.closeModal()),document.querySelectorAll('input[name="import-mode"]').forEach(d=>{d.onchange=()=>{this.importMode=d.value;const u=document.getElementById("override-warning");u&&(u.style.display=this.importMode==="override"?"block":"none")}})}showImportModal(){const e=document.getElementById("file-import-modal");e&&(e.style.display="flex",this.resetModal())}closeModal(){const e=document.getElementById("file-import-modal");e&&(e.style.display="none",this.resetModal())}resetModal(){this.selectedFile=null,this.importMode="append",this.processedData=[],this.notFoundProducts=[],this.showFileSelectionStep();const e=document.getElementById("file-input");e&&(e.value="");const t=document.getElementById("selected-file-info");t&&(t.style.display="none");const o=document.getElementById("import-next-btn");o&&(o.disabled=!0);const r=document.querySelector('input[name="import-mode"][value="append"]');r&&(r.checked=!0);const s=document.getElementById("override-warning");s&&(s.style.display="none")}showFileSelectionStep(){this.hideAllSteps();const e=document.getElementById("file-selection-step");e&&(e.style.display="block")}showImportModeStep(){this.hideAllSteps();const e=document.getElementById("import-mode-step");e&&(e.style.display="block")}showProcessingStep(){this.hideAllSteps();const e=document.getElementById("import-processing-step");e&&(e.style.display="block")}showResultsStep(){this.hideAllSteps();const e=document.getElementById("import-results-step");e&&(e.style.display="block")}hideAllSteps(){["file-selection-step","import-mode-step","import-processing-step","import-results-step"].forEach(t=>{const o=document.getElementById(t);o&&(o.style.display="none")})}handleFileSelection(e){console.log("File selected:",e.name,e.type,e.size);const t=config.get("import.acceptedTypes",[".csv",".xlsx",".xls",".json"]),o=["text/csv","application/vnd.ms-excel","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","application/json"],r=e.name.toLowerCase(),s=t.some(d=>r.endsWith(d.toLowerCase())),n=config.get("import.maxFileSize",10*1024*1024);if(e.size>n){const d=Math.round(n/1048576);alert(`File is too large. Maximum size is ${d}MB.`);return}if(!o.includes(e.type)&&!s){alert(`Please select a valid file. Accepted formats: ${t.join(", ")}`);return}this.selectedFile=e;const i=document.getElementById("selected-file-info"),c=document.getElementById("selected-file-name"),l=document.getElementById("import-next-btn");i&&c&&l&&(c.textContent=e.name,i.style.display="block",l.disabled=!1)}async processImport(){if(!this.selectedFile){alert("No file selected");return}console.log("Starting import process with mode:",this.importMode),this.showProcessingStep();try{let e;const t=this.selectedFile.name.toLowerCase();if(t.endsWith(".csv"))e=await this.parseCSV(this.selectedFile);else if(t.endsWith(".json"))e=await this.parseJSON(this.selectedFile);else if(t.endsWith(".xlsx")||t.endsWith(".xls"))e=await this.parseExcel(this.selectedFile);else throw new Error("Unsupported file format");console.log("Parsed data:",e),this.importMode==="override"&&(StorageManager.clearAllSelections(),console.log("Cleared all existing data for override mode")),await this.processDataChunked(e),this.showImportResults()}catch(e){console.error("Import failed:",e),alert(`Import failed: ${e.message}`),this.showFileSelectionStep()}}async parseCSV(e){if(typeof Papa>"u")try{await Utils.loadScript("https://cdn.jsdelivr.net/npm/papaparse@5.4.1/papaparse.min.js")}catch{throw new Error("Failed to load Papa Parse library")}return new Promise((t,o)=>{if(typeof Papa>"u"){o(new Error("Papa Parse library not loaded"));return}this.doPapaParseCSV(e,t,o)})}doPapaParseCSV(e,t,o){Papa.parse(e,{header:!0,skipEmptyLines:!1,complete:r=>{console.log("CSV parsing complete:",r);const{data:s,metadata:n}=this.extractSeimaMetadata(r.data);n&&(console.log("Extracted Seima Scanner metadata from CSV:",n),this.importedMetadata=n,this.populateCustomerInfoFromMetadata(n)),t(s)},error:r=>{console.error("CSV parsing error:",r),o(r)}})}extractSeimaMetadata(e){if(!Array.isArray(e)||e.length===0)return{data:e,metadata:null};let t=-1;for(let s=e.length-1;s>=0;s--){const n=e[s];if(Object.values(n).some(c=>c&&c.toString().includes("---METADATA---"))){t=s;break}}if(t===-1)return{data:e.filter(s=>this.isValidProductRow(s)),metadata:null};const o=e.slice(0,t).filter(s=>this.isValidProductRow(s));let r=null;if(t+1<e.length){const s=e[t+1],n=Object.values(s).filter(i=>i!=null&&i!=="");for(const i of n)if(i&&typeof i=="string"&&i.startsWith("{"))try{r=JSON.parse(i),console.log("Successfully parsed Seima metadata JSON from single cell");break}catch{console.log("Single cell JSON parse failed, trying to reconstruct from split cells...")}if(!r&&n.length>0){let i=n.findIndex(c=>c&&typeof c=="string"&&(c.startsWith("{")||c.startsWith('"{')));if(i!==-1){let c=n.slice(i).join(",");c=c.replace(/^"|"$/g,"");try{r=JSON.parse(c),console.log("Successfully parsed Seima metadata JSON from reconstructed cells")}catch(l){console.warn("Failed to parse reconstructed metadata JSON:",l),console.log("Reconstructed string was:",c);const d=c.match(/\{[^{}]*("_metadata"|"customer"|"project")[^]*\}/);if(d)try{r=JSON.parse(d[0]),console.log("Successfully parsed Seima metadata JSON using regex extraction")}catch(u){console.warn("Regex extraction also failed:",u)}}}}}return{data:o,metadata:r}}isValidProductRow(e){if(!e)return!1;const t=Object.values(e);return!(t.every(o=>!o||o.toString().trim()==="")||t.some(o=>o&&o.toString().includes("---METADATA---"))||t.some(o=>o&&o.toString().startsWith('{"_metadata"')))}populateCustomerInfoFromMetadata(e){var r,s,n,i,c,l;if(!e)return;const t=Utils.getStorageItem("pdfFormSettings",{}),o={...t,name:((r=e.customer)==null?void 0:r.name)||t.name||"",email:((s=e.customer)==null?void 0:s.email)||t.email||"",telephone:((n=e.customer)==null?void 0:n.phone)||t.telephone||"",project:((i=e.project)==null?void 0:i.name)||t.project||"",address:((c=e.project)==null?void 0:c.address)||t.address||"",projectNotes:((l=e.project)==null?void 0:l.notes)||t.projectNotes||""};e.staff&&Utils.setStorageItem("staffContact",{name:e.staff.name||"",email:e.staff.email||"",mobile:e.staff.mobile||""}),Utils.setStorageItem("pdfFormSettings",o),console.log("Customer information populated from Seima CSV metadata:",o)}async parseExcel(e){try{typeof XLSX>"u"&&await Utils.loadScript("https://cdn.jsdelivr.net/npm/xlsx@0.18.5/dist/xlsx.full.min.js")}catch{throw new Error("Failed to load XLSX library")}return new Promise((t,o)=>{if(typeof XLSX>"u"){o(new Error("XLSX library not loaded"));return}const r=new FileReader;r.onload=s=>{try{const n=new Uint8Array(s.target.result),i=XLSX.read(n,{type:"array"}),c=i.SheetNames[0],l=i.Sheets[c],d=XLSX.utils.sheet_to_json(l,{header:1,defval:""});if(d.length===0){o(new Error("Excel file is empty"));return}const u=d[0],g=d.slice(1).map(w=>{const y={};return u.forEach((b,p)=>{y[b]=w[p]||""}),y});console.log("Excel parsing complete:",g);const{data:h,metadata:f}=this.extractSeimaMetadata(g);f&&(console.log("Extracted Seima Scanner metadata from Excel:",f),this.importedMetadata=f,this.populateCustomerInfoFromMetadata(f)),t(h)}catch(n){console.error("Excel parsing error:",n),o(n)}},r.onerror=()=>{o(new Error("Failed to read Excel file"))},r.readAsArrayBuffer(e)})}async parseJSON(e){return new Promise((t,o)=>{const r=new FileReader;r.onload=s=>{try{let n=JSON.parse(s.target.result);console.log("JSON parsing complete, raw data:",n);let i=[];if(Array.isArray(n))if(n.length>0&&n[0].productsJson)for(const l of n){const d=this.extractProductsFromRecord(l);i.push(...d)}else i=n;else n&&typeof n=="object"&&(i=this.extractProductsFromRecord(n));if(i.length===0){o(new Error("No products found in JSON file. Expected Seima Scanner export format."));return}const c=i.map(l=>({Code:l.orderCode||l.OrderCode||l.code||l.Code||"",Description:l.description||l.Description||l.productName||l["Product Name"]||"",Quantity:l.quantity||l.Quantity||1,Room:l.room||l.Room||"Blank",Notes:l.notes||l.Notes||"","Price ea inc GST":l.priceIncGst||l.PriceIncGst||l.price||l.Price||"",_originalItem:l}));console.log("Normalized JSON data:",c),t(c)}catch(n){console.error("JSON parsing error:",n),o(new Error("Invalid JSON format: "+n.message))}},r.onerror=()=>{o(new Error("Failed to read JSON file"))},r.readAsText(e)})}extractProductsFromRecord(e){let t=e.productsJson||e.products||[];if(typeof t=="string")try{t=JSON.parse(t)}catch(o){return console.warn("Failed to parse productsJson string:",o),[]}return Array.isArray(t)?t:[]}async processDataChunked(e){if(e.length===0)throw new Error("No data to process");const t=this.detectColumns(e[0]);if(console.log("Detected column mapping:",t),t.productsJson){console.log("Detected Seima Scanner selection record format with Products JSON column"),await this.processSeimaSelectionRecords(e,t);return}if(!t.productCode)throw new Error('Could not find Product Code column. Please ensure your file has a column named like "Order Code", "Product Code", "SKU", or a "Products JSON" column for Seima Scanner exports.');this.processedData=[],this.notFoundProducts=[];const o=50;for(let r=0;r<e.length;r+=o){const s=e.slice(r,r+o);await this.processChunk(s,t),await new Promise(n=>setTimeout(n,10))}console.log("Processing complete. Processed:",this.processedData.length,"Not found:",this.notFoundProducts.length)}async processSeimaSelectionRecords(e,t){this.processedData=[],this.notFoundProducts=[],this.importedMetadata=null;for(const o of e){this.importedMetadata||(this.importedMetadata=this.extractMetadataFromRow(o,t),console.log("Extracted metadata from selection record:",this.importedMetadata),this.populateCustomerInfo(this.importedMetadata));const r=o[t.productsJson];if(!r){console.log("Skipping row - no Products JSON data");continue}let s=[];try{typeof r=="string"?s=JSON.parse(r):Array.isArray(r)&&(s=r)}catch(n){console.warn("Failed to parse Products JSON:",n,r);continue}if(!Array.isArray(s)||s.length===0){console.log("Skipping row - Products JSON is empty or invalid");continue}console.log(`Processing ${s.length} products from selection record`);for(const n of s)await this.processSeimaProduct(n)}console.log("Seima Scanner import complete. Processed:",this.processedData.length,"Not found:",this.notFoundProducts.length)}extractMetadataFromRow(e,t){return{customerName:e[t.customerName]||"",customerEmail:e[t.customerEmail]||"",customerPhone:e[t.customerPhone]||"",customerAddress:e[t.customerAddress]||"",customerProject:e[t.customerProject]||"",customerType:e[t.customerType]||"",builderName:e[t.builderName]||"",merchantProjectName:e[t.merchantProjectName]||"",projectNotes:e[t.projectNotes]||"",staffName:e[t.staffName]||"",staffEmail:e[t.staffEmail]||"",date:e[t.date]||"",time:e[t.time]||"",roomsList:e[t.roomsList]||"",estimateValue:e[t.estimateValue]||""}}async processSeimaProduct(e){const t=String(e.orderCode||e.OrderCode||e.code||"").trim(),o=e.description||e.Description||e.productName||"",r=parseInt(e.quantity||e.Quantity)||1,s=String(e.room||e.Room||"Blank").trim(),n=String(e.notes||e.Notes||"").trim(),i=e.priceIncGst||e.PriceIncGst||e.price||"";s&&s!=="Blank"&&this.ensureRoomExists(s);const c=this.validateProductCode(t);if(!c.isValid){console.log("Excluding product:",t,"-",c.reason);return}let l=0,d=0;if(i){const g=String(i).replace(/[^\d.-]/g,"");l=parseFloat(g)||0,d=l/1.1}console.log("Processing Seima product:",{productCode:t,productName:o,quantity:r,priceIncGst:l,room:s,notes:n});const u=await this.findProductInCatalog(t,o),m=this.createProductObject({productCode:t,productName:o,priceExGst:d,priceIncGst:l,catalogProduct:u});u||this.notFoundProducts.push({orderCode:t,productName:o||"Unknown Product",quantity:r,price:l>0?l.toFixed(2):"N/A"}),StorageManager.addProductToSelection(m,n,s,r),this.processedData.push({...m,quantity:r,notes:n,room:s})}detectColumns(e){const t=Object.keys(e);console.log("Available headers:",t);const o=config.get("import.columnPatterns",{productCode:["code","ordercode","productcode","sku","order code","product code"],productName:["product name","description","name"],quantity:["quantity","qty","min order quantity","orderquantity"],priceIncGst:["price ea inc gst","price inc gst","priceincgst","rrp inc gst"],priceExGst:["price per unit","price ex gst","rrp ex gst"],room:["room","location"],notes:["notes","note","comments","comment"],productsJson:["products json","productsjson"],customerName:["customer name","customername"],customerEmail:["customer email","customeremail"],customerPhone:["customer phone","customerphone"],customerAddress:["customer address","customeraddress"],customerProject:["customer project","customerproject"]}),r=this.findColumnByPatterns(t,o.productsJson||["products json","productsjson"]);if(r)return console.log("Detected Seima Scanner selection record format with Products JSON column"),{productsJson:r,date:this.findColumnByPatterns(t,["date"]),time:this.findColumnByPatterns(t,["time"]),staffName:this.findColumnByPatterns(t,["staff name","staffname"]),staffEmail:this.findColumnByPatterns(t,["staff email","staffemail"]),customerName:this.findColumnByPatterns(t,o.customerName||["customer name","customername"]),customerEmail:this.findColumnByPatterns(t,o.customerEmail||["customer email","customeremail"]),customerPhone:this.findColumnByPatterns(t,o.customerPhone||["customer phone","customerphone"]),customerAddress:this.findColumnByPatterns(t,o.customerAddress||["customer address","customeraddress"]),customerProject:this.findColumnByPatterns(t,o.customerProject||["customer project","customerproject"]),customerType:this.findColumnByPatterns(t,["customer type","customertype"]),builderName:this.findColumnByPatterns(t,["builder name","buildername"]),merchantProjectName:this.findColumnByPatterns(t,["merchant project name","merchantprojectname"]),projectNotes:this.findColumnByPatterns(t,["project notes","projectnotes","about notes"]),roomsList:this.findColumnByPatterns(t,["rooms list","roomslist","rooms"]),estimateValue:this.findColumnByPatterns(t,["estimate value","estimatevalue"])};const s=t.some(l=>l.toLowerCase()==="code")&&!t.some(l=>l.toLowerCase().includes("ordercode"));console.log("Detected Seima Scanner CSV format:",s);const n=this.findColumnByPatterns(t,o.priceIncGst||["price ea inc gst","price inc gst","priceincgst","rrp inc gst"]),i=this.findColumnByPatterns(t,o.priceExGst||["price per unit","price ex gst","rrp ex gst"]),c=this.findColumnByPatterns(t,["adjusted amount","adjustedamount"]);return{productCode:this.findColumnByPatterns(t,o.productCode||["code","ordercode","productcode","sku"]),productName:this.findColumnByPatterns(t,o.productName||["product name","description","name"]),quantity:this.findColumnByPatterns(t,o.quantity||["quantity","qty"]),price:n||i,adjustedAmount:c,room:this.findColumnByPatterns(t,o.room||["room","location"]),notes:this.findColumnByPatterns(t,o.notes||["notes","note","comments"]),priceIncludesGst:s||!!n||t.some(l=>l.toLowerCase().includes("inc gst"))}}findColumnByPatterns(e,t){for(const o of t){const r=e.find(s=>s.toLowerCase().includes(o.toLowerCase()));if(r)return r}return null}async processChunk(e,t){for(const o of e)await this.processRow(o,t)}async processRow(e,t){const o=t.productCode?e[t.productCode]:"",r=t.productName?e[t.productName]:"",s=t.quantity?e[t.quantity]:"1",n=t.price?e[t.price]:"",i=t.room?String(e[t.room]||"").trim():"",c=t.notes?String(e[t.notes]||"").trim():"",l=String(o).trim(),d=this.validateProductCode(l);if(!d.isValid){console.log("Excluding row:",l,"-",d.reason);return}const u=Math.max(1,parseInt(s)||1);let m=0,g=0;if(t.adjustedAmount&&u>0){const y=e[t.adjustedAmount];g=(parseFloat(String(y).replace(/[^\d.-]/g,""))||0)/u,m=g*1.1}else if(n){const y=String(n).replace(/[^\d.-]/g,""),b=parseFloat(y)||0;b>0&&(t.priceIncludesGst?(m=b,g=b/1.1):(g=b,m=b*1.1))}const h=i||"Blank";h!=="Blank"&&this.ensureRoomExists(h),console.log("Processing product:",{productCode:l,productName:r,quantity:u,priceIncGst:m,room:h,notes:c});const f=await this.findProductInCatalog(l,r),w=this.createProductObject({productCode:l,productName:r,priceExGst:g,priceIncGst:m,catalogProduct:f});f?console.log("Found product in catalog:",l):(console.log("Product not found in catalog:",l),this.notFoundProducts.push({orderCode:l,productName:r||"Unknown Product",quantity:u,price:m>0?m.toFixed(2):"N/A"})),StorageManager.addProductToSelection(w,c,h,u),this.processedData.push({...w,quantity:u,notes:c,room:h})}async findProductInCatalog(e,t){const o=dataLayer.getAllProducts();if(e){const r=String(e).trim(),s=o.find(n=>[n.OrderCode,n.orderCode,n["Order Code"],n.order_code].some(c=>c&&String(c).trim().toLowerCase()===r.toLowerCase()));if(s)return console.log("Found product in catalog by code:",r,s),s}if(t){const r=String(t).trim().toLowerCase(),s=o.find(n=>[n.productName,n["Product Name"],n.description,n.Description,n.LongDescription].some(c=>c&&String(c).trim().toLowerCase()===r));if(s)return console.log("Found product in catalog by name:",t,s),s}return console.log("Product not found in catalog:",{productCode:e,productName:t}),null}showImportResults(){this.showResultsStep();const e=document.getElementById("import-summary"),t=document.getElementById("not-found-products"),o=document.getElementById("not-found-list");if(e&&(e.innerHTML=`
        <p><strong>Total processed:</strong> ${this.processedData.length}</p>
        <p><strong>Products added:</strong> ${this.processedData.length}</p>
        <p style="color: #059669;"><strong>All products imported successfully!</strong></p>
      `),t&&o)if(this.notFoundProducts.length>0){const s=t.querySelector("h5");s&&(s.textContent="Products added with placeholder information:",s.style.color="#2563eb");const n=this.notFoundProducts.map(i=>`<li><strong>${i.orderCode}</strong> - ${i.productName} (Qty: ${i.quantity}, Price: ${i.price})</li>`).join("");o.innerHTML=`<ul>${n}</ul>`,t.style.display="block",t.style.borderColor="#2563eb",t.style.backgroundColor="#eff6ff"}else t.style.display="none";const r=document.getElementById("import-close-btn");r&&this.processedData.length>0&&(r.textContent="View Products",r.onclick=()=>{window.location.reload()}),console.log("Import results displayed")}populateCustomerInfo(e){if(!e)return;const t=Utils.getStorageItem("pdfFormSettings",{}),o={...t,name:e.customerName||t.name||"",project:e.customerProject||t.project||"",address:e.customerAddress||t.address||"",email:e.customerEmail||t.email||"",telephone:e.customerPhone||t.telephone||""};Utils.setStorageItem("pdfFormSettings",o),console.log("Customer information populated from import:",o)}validateProductCode(e){const t=String(e||"").trim();if(!t||t.toLowerCase()==="n/a")return{isValid:!1,reason:"Empty or N/A code"};const o=config.get("import.productCodeValidation",{regex:"^\\d{6}$",allowAnyNonEmpty:!1,skipValidation:!1});if(o.skipValidation)return{isValid:!0,reason:"Validation skipped"};try{if(new RegExp(o.regex).test(t))return{isValid:!0,reason:"Matches pattern"}}catch(r){console.warn("Invalid product code regex pattern:",o.regex,r)}return o.allowAnyNonEmpty?{isValid:!0,reason:"Non-empty code accepted"}:{isValid:!1,reason:`Does not match pattern: ${o.regex}`}}createProductObject({productCode:e,productName:t,priceExGst:o,priceIncGst:r,catalogProduct:s}){return{OrderCode:e,orderCode:e,productName:t||(s?s.productName:"Unknown Product"),"Product Name":t||(s?s["Product Name"]:"Unknown Product"),Description:t||(s?s.Description:"Unknown Product"),description:t||(s?s.description:"Unknown Product"),LongDescription:s?s.LongDescription||s["Long Description"]:"","Long Description":s?s.LongDescription||s["Long Description"]:"",price:o>0?o.toFixed(2):s?s.price:"0.00",Image_URL:s?s.Image_URL||s.imageUrl:"assets/no-image.png",imageUrl:s?s.Image_URL||s.imageUrl:"assets/no-image.png",Website_URL:s?s.Website_URL||s.websiteUrl:"",websiteUrl:s?s.Website_URL||s.websiteUrl:"",Diagram_URL:s?s.Diagram_URL||s.diagramUrl:"",diagramUrl:s?s.Diagram_URL||s.diagramUrl:"",Datasheet_URL:s?s.Datasheet_URL||s.datasheetUrl:"",datasheetUrl:s?s.Datasheet_URL||s.datasheetUrl:"",RRP_EXGST:o>0?o.toFixed(2):s?s.RRP_EXGST||s.rrpExGst:"0.00",rrpExGst:o>0?o.toFixed(2):s?s.RRP_EXGST||s.rrpExGst:"0.00",RRP_INCGST:r>0?r.toFixed(2):s?s.RRP_INCGST||s.rrpIncGst:"0.00",rrpIncGst:r>0?r.toFixed(2):s?s.RRP_INCGST||s.rrpIncGst:"0.00"}}ensureRoomExists(e){!e||e==="Blank"||config.get("rooms.predefined",[]).some(n=>n.name===e)||StorageManager.getCustomRooms().some(n=>n.name===e)||(console.log("Adding imported room as custom room:",e),StorageManager.addCustomRoom(e))}}class PresentationRecorder{constructor(){var e,t,o,r;this.isEnabled=(e=CONFIG$1.PRESENTATION_RECORDING)==null?void 0:e.ENABLED,this.googleSheetsUrl=(t=CONFIG$1.PRESENTATION_RECORDING)==null?void 0:t.GOOGLE_SHEETS_URL,this.retryAttempts=(o=CONFIG$1.PRESENTATION_RECORDING)==null?void 0:o.RETRY_ATTEMPTS,this.retryDelay=(r=CONFIG$1.PRESENTATION_RECORDING)==null?void 0:r.RETRY_DELAY,this.currentSelectionId=null}configure(e){this.googleSheetsUrl=e,console.log("📊 Presentation recorder configured with Google Sheets URL")}getStaffContact(){const e=authService.getCurrentUser();if(console.log("🔐 Auth user for save:",e),e&&e.email)return console.log("✅ Using authenticated user email:",e.email),{name:e.name||"",email:e.email,mobile:e.phone||""};console.warn("⚠️ No authenticated user, falling back to settings");try{const t=localStorage.getItem("staffContact");if(t){const o=JSON.parse(t);return console.log("📋 Using settings email:",o.email),o}}catch(t){console.warn("Could not load staff contact:",t)}return{name:"",email:"",mobile:""}}async saveSelection(e){if(!this.isEnabled||!this.googleSheetsUrl)return console.log("📊 Presentation recording disabled or not configured"),{success:!1,reason:"not_configured"};try{const t=this.prepareSelectionData(e);t.action="savePresenterSelection",console.log("📧 Saving with staff email:",t.staffEmail);const o=await this.sendToGoogleSheets(t);if(console.log("📊 Google Sheets response:",o),o.success)return console.log("✅ Presentation saved successfully with ID:",o.id),this.currentSelectionId=o.id,{success:!0,id:o.id,data:t};throw new Error(o.error||"Failed to save presentation")}catch(t){return console.error("❌ Failed to save presentation:",t),{success:!1,error:t.message}}}async updateSelection(e,t){if(!this.isEnabled||!this.googleSheetsUrl)return console.log("📊 Presentation recording disabled or not configured"),{success:!1,reason:"not_configured"};if(!e)return{success:!1,error:"No selection ID provided for update"};try{const o=this.prepareSelectionData(t);o.action="updatePresenterSelection",o.id=e;const r=await this.sendToGoogleSheets(o);if(r.success)return console.log("✅ Presentation updated successfully:",e),{success:!0,id:e,updated:!0};throw new Error(r.error||"Failed to update presentation")}catch(o){return console.error("❌ Failed to update presentation:",o),{success:!1,error:o.message}}}prepareSelectionData(e){const t=new Date,o=this.getStaffContact(),r=e.gridRows||StorageManager.getSelectedProducts()||[],s=r.filter(u=>u.product).length,n=r.reduce((u,m)=>u+(parseInt(m.quantity)||1),0),i=[...new Set(r.map(u=>u.room).filter(Boolean))],c=this.calculateEstimatedValue(r);let l=[];try{const u=localStorage.getItem("customRoomOrder");u&&(l=JSON.parse(u))}catch(u){console.warn("Could not load room order:",u)}const d=e.pdfSettings||{};return{date:t.toLocaleDateString("en-AU"),time:t.toLocaleTimeString("en-AU",{hour:"2-digit",minute:"2-digit",hour12:!1}),appVersion:CONFIG$1.VERSION,staffName:o.name||e.staffName||"",staffEmail:o.email||e.staffEmail||"",staffMobile:this.formatPhoneNumber(o.mobile||e.staffMobile),customerName:e.customerName||"",customerEmail:e.customerEmail||"",customerPhone:this.formatPhoneNumber(e.customerPhone),customerProject:e.customerProject||"",customerAddress:e.customerAddress||"",documentName:e.documentName||`${e.customerName||"Selection"} - ${t.toLocaleDateString("en-AU")}`,notes:e.notes||"",productsJson:JSON.stringify(r.map(u=>{var m;return{id:u.id,product:u.product?{OrderCode:u.product.OrderCode||"",Description:u.product.Description||"",RRP_INCGST:u.product.RRP_INCGST||"0.00",RRP_EX:u.product.RRP_EX||"0.00",Image_URL:u.product.Image_URL||"",Diagram_URL:u.product.Diagram_URL||"",Website_URL:u.product.Website_URL||"",BARCODE:u.product.BARCODE||""}:null,quantity:u.quantity||1,room:u.room||"",notes:u.notes||"",price:u.price||((m=u.product)==null?void 0:m.RRP_EX)||"0.00"}})),roomOrderJson:JSON.stringify(l),pdfSettingsJson:JSON.stringify(d),totalProducts:s,totalQuantity:n,totalRooms:i.length,roomsList:i.join(", "),estimatedValue:c}}calculateEstimatedValue(e){let t=0;return e.forEach(o=>{var i,c;if(!o.product)return;const r=parseInt(o.quantity)||1,s=o.price||((i=o.product)==null?void 0:i.RRP_INCGST)||((c=o.product)==null?void 0:c.RRP_EX)||"0",n=parseFloat(s.toString().replace(/[^0-9.]/g,""))||0;t+=n*r}),t.toFixed(2)}formatPhoneNumber(e){if(!e)return"";let t=String(e).trim();return t.startsWith("'")&&(t=t.substring(1)),/^4\d{8}$/.test(t)&&(t="0"+t),"'"+t}async sendToGoogleSheets(e,t=1){try{const o=new URLSearchParams;o.append("data",JSON.stringify(e)),console.log("📊 Sending to Google Sheets:",this.googleSheetsUrl);const r=await fetch(this.googleSheetsUrl,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:o});if(console.log("📊 Response status:",r.status,r.statusText),!r.ok)throw new Error(`HTTP ${r.status}: ${r.statusText}`);const s=await r.text();console.log("📊 Raw response:",s);try{return JSON.parse(s)}catch(n){return console.error("📊 Failed to parse JSON response:",n),{success:!1,error:"Invalid JSON response",raw:s}}}catch(o){return console.error(`📊 Attempt ${t} failed:`,o),t<this.retryAttempts?(console.log(`📊 Retrying in ${this.retryDelay}ms... (attempt ${t+1}/${this.retryAttempts})`),await new Promise(r=>setTimeout(r,this.retryDelay)),this.sendToGoogleSheets(e,t+1)):{success:!1,error:o.message}}}async testConnection(){if(!this.googleSheetsUrl)return{success:!1,error:"No Google Sheets URL configured"};try{const e=new URL(this.googleSheetsUrl);e.searchParams.append("action","getPresenterSelections"),e.searchParams.append("staffEmail","");const t=await fetch(e.toString(),{method:"GET",headers:{Accept:"application/json"}});if(!t.ok)throw new Error(`HTTP ${t.status}`);return{success:!0,message:"Connection successful",result:await t.json()}}catch(e){return{success:!1,error:e.message}}}getCurrentSelectionId(){return this.currentSelectionId}setCurrentSelectionId(e){this.currentSelectionId=e}clearCurrentSelectionId(){this.currentSelectionId=null}hasLoadedSelection(){return this.currentSelectionId!==null}setEnabled(e){this.isEnabled=e,console.log(`📊 Presentation recording ${e?"enabled":"disabled"}`)}}const presentationRecorder=new PresentationRecorder;class PresentationLoader{constructor(){var e;this.googleSheetsUrl=(e=CONFIG$1.PRESENTATION_RECORDING)==null?void 0:e.GOOGLE_SHEETS_URL,this.cachedSelections=null,this.cacheTimestamp=null,this.cacheDuration=5*60*1e3}getStaffEmail(){const e=authService.getCurrentUser();if(console.log("🔐 Auth user for load:",e),e&&e.email)return console.log("✅ Filtering by authenticated user email:",e.email),e.email;console.warn("⚠️ No authenticated user for filtering");try{const t=localStorage.getItem("staffContact");if(t){const o=JSON.parse(t);return console.log("📋 Fallback to settings email:",o.email),o.email||""}}catch(t){console.warn("Could not load staff email:",t)}return""}clearCache(){this.cachedSelections=null,this.cacheTimestamp=null,console.log("🗑️ Selections cache cleared")}async fetchSelections(e=!1,t=!1){if(!this.googleSheetsUrl)return console.error("❌ Google Sheets URL not configured"),[];if(!t&&!e&&this.cachedSelections&&this.cacheTimestamp&&Date.now()-this.cacheTimestamp<this.cacheDuration)return console.log("📊 Using cached selections"),this.cachedSelections;try{const o=this.getStaffEmail();console.log(`📊 Fetching ${e?"deleted":""} selections for: ${o||"all users"}`);const r=new URL(this.googleSheetsUrl);r.searchParams.append("action","getPresenterSelections"),r.searchParams.append("staffEmail",o),e&&r.searchParams.append("deletedOnly","true");const s=await fetch(r.toString(),{method:"GET",headers:{Accept:"application/json"}});if(!s.ok)throw new Error(`HTTP ${s.status}: ${s.statusText}`);const n=await s.json();if(n.success&&n.selections)return console.log(`✅ Fetched ${n.selections.length} selections`),e||(this.cachedSelections=n.selections,this.cacheTimestamp=Date.now()),n.selections;throw new Error(n.error||"Failed to fetch selections")}catch(o){return console.error("❌ Error fetching selections:",o),[]}}clearCache(){this.cachedSelections=null,this.cacheTimestamp=null}searchSelections(e,t){if(!t||t.trim()==="")return e;const o=t.toLowerCase().trim();return e.filter(r=>{const s=(r.customerName||"").toLowerCase(),n=(r.customerProject||"").toLowerCase(),i=(r.documentName||"").toLowerCase(),c=(r.date||"").toLowerCase();return s.includes(o)||n.includes(o)||i.includes(o)||c.includes(o)})}sortByDateDescending(e){return[...e].sort((t,o)=>{try{const r=this.parseDateValue(t.lastModified||t.date,t.time);return this.parseDateValue(o.lastModified||o.date,o.time)-r}catch{return 0}})}parseDateValue(e,t=""){if(!e)return new Date(0);if(e.includes("T"))return new Date(e);const o=e.toString().split("/");if(o.length===3){const r=parseInt(o[0]),s=parseInt(o[1])-1,n=parseInt(o[2]);if(t){const i=t.replace(/[AP]M/i,"").trim().split(":"),c=parseInt(i[0])||0,l=parseInt(i[1])||0,d=t.toUpperCase().includes("PM");return new Date(n,s,r,d&&c!==12?c+12:c,l)}return new Date(n,s,r)}return new Date(0)}async loadSelection(e,t="replace"){try{console.log(`📊 Loading selection: ${e.id} (mode: ${t})`);let o=[];try{o=JSON.parse(e.productsJson||"[]")}catch(i){return console.error("Failed to parse products JSON:",i),{success:!1,error:"Invalid products data"}}let r=[];try{r=JSON.parse(e.roomOrderJson||"[]")}catch(i){console.warn("Could not parse room order:",i)}let s={};try{s=JSON.parse(e.pdfSettingsJson||"{}")}catch(i){console.warn("Could not parse PDF settings:",i)}const n=await this.enrichProductsWithCatalog(o);if(t==="replace"){StorageManager.clearAllSelections();const i={name:e.customerName||"",email:e.customerEmail||"",phone:this.cleanPhoneNumber(e.customerPhone),project:e.customerProject||"",address:e.customerAddress||""};localStorage.setItem("customerDetails",JSON.stringify(i));const c={name:e.customerName||"",email:e.customerEmail||"",telephone:this.cleanPhoneNumber(e.customerPhone),project:e.customerProject||"",address:e.customerAddress||""};localStorage.setItem("pdfFormSettings",JSON.stringify(c)),r.length>0&&localStorage.setItem("customRoomOrder",JSON.stringify(r)),Object.keys(s).length>0&&localStorage.setItem("pdfSettings",JSON.stringify(s)),n.forEach(l=>{l.product&&StorageManager.addProductToSelection(l.product,l.room||"",l.quantity||1,l.notes||"",l.price||null)})}else t==="merge"&&n.forEach(i=>{i.product&&(StorageManager.getSelectedProducts().some(d=>{var u;return((u=d.product)==null?void 0:u.OrderCode)===i.product.OrderCode&&d.room===i.room})||StorageManager.addProductToSelection(i.product,i.room||"",i.quantity||1,i.notes||"",i.price||null))});return presentationRecorder.setCurrentSelectionId(e.id),console.log(`✅ Loaded ${n.length} products`),{success:!0,id:e.id,documentName:e.documentName,customerName:e.customerName,customerProject:e.customerProject,productCount:n.length,roomOrder:r,customerDetails:{name:e.customerName,email:e.customerEmail,phone:this.cleanPhoneNumber(e.customerPhone),project:e.customerProject,address:e.customerAddress},mode:t}}catch(o){return console.error("❌ Error loading selection:",o),{success:!1,error:o.message}}}async enrichProductsWithCatalog(e){const t=[];for(const o of e){if(!o.product){t.push(o);continue}const r=o.product.OrderCode||o.product.orderCode;if(r){const s=dataLayer.findProductByCode(r);s?t.push({id:o.id||`row_${Date.now()}_${Math.random().toString(36).substr(2,9)}`,product:s,quantity:o.quantity||1,room:o.room||"",notes:o.notes||"",price:o.price||s.RRP_EX||"0.00"}):(console.warn(`Product ${r} not found in catalog, using saved data`),t.push({id:o.id||`row_${Date.now()}_${Math.random().toString(36).substr(2,9)}`,product:{OrderCode:r,Description:o.product.Description||o.product.description||"Unknown Product",RRP_INCGST:o.product.RRP_INCGST||o.product.rrpIncGst||"0.00",RRP_EX:o.product.RRP_EX||o.product.rrpEx||"0.00",Image_URL:o.product.Image_URL||o.product.imageUrl||"",Diagram_URL:o.product.Diagram_URL||"",Website_URL:o.product.Website_URL||"",BARCODE:o.product.BARCODE||"",_notInCatalog:!0},quantity:o.quantity||1,room:o.room||"",notes:o.notes||"",price:o.price||o.product.RRP_EX||"0.00"}))}}return t}cleanPhoneNumber(e){if(!e)return"";let t=String(e).trim();return t.startsWith("'")&&(t=t.substring(1)),t}async deleteSelections(e){if(!this.googleSheetsUrl)return{success:!1,error:"Not configured"};try{const t=new URLSearchParams;t.append("data",JSON.stringify({action:"deletePresenterSelections",ids:e}));const r=await(await fetch(this.googleSheetsUrl,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:t})).json();return r.success&&this.clearCache(),r}catch(t){return{success:!1,error:t.message}}}async restoreSelections(e){if(!this.googleSheetsUrl)return{success:!1,error:"Not configured"};try{const t=new URLSearchParams;t.append("data",JSON.stringify({action:"restorePresenterSelections",ids:e}));const r=await(await fetch(this.googleSheetsUrl,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:t})).json();return r.success&&this.clearCache(),r}catch(t){return{success:!1,error:t.message}}}}const presentationLoader=new PresentationLoader;class PresentationPicker{constructor(){this.isVisible=!1,this.allSelections=[],this.filteredSelections=[],this.currentSearchQuery="",this.onLoadCallback=null,this.selectedItems=new Set,this.showDeletedMode=!1}async show(e){console.log("📂 PresentationPicker.show() called");try{this.onLoadCallback=e,this.selectedItems.clear(),this.showDeletedMode=!1,this.createModalHTML(),this.attachEventListeners(),this.isVisible=!0,console.log("📂 Modal created, fetching selections..."),this.setLoadingState(!0),await this.fetchAndRenderSelections(),console.log("📂 Picker ready")}catch(t){throw console.error("❌ PresentationPicker.show() error:",t),t}}async fetchAndRenderSelections(){this.setLoadingState(!0),this.selectedItems.clear();try{this.allSelections=await presentationLoader.fetchSelections(this.showDeletedMode,!0),this.allSelections=presentationLoader.sortByDateDescending(this.allSelections),this.filterAndRender()}catch(e){console.error("Error fetching selections:",e),this.showError("Failed to load selections. Please try again.")}finally{this.setLoadingState(!1)}}hide(){const e=document.getElementById("presentation-picker-modal");e&&e.remove(),this.isVisible=!1}createModalHTML(){const e=document.getElementById("presentation-picker-modal");e&&e.remove();const t=`
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
    `)}attachEventListeners(){var t,o,r,s,n;const e=document.getElementById("presentation-picker-modal");e&&((t=document.getElementById("picker-close-btn"))==null||t.addEventListener("click",()=>this.hide()),e.addEventListener("click",i=>{i.target===e&&this.hide()}),(o=document.getElementById("picker-search"))==null||o.addEventListener("input",i=>{this.currentSearchQuery=i.target.value,this.filterAndRender()}),(r=document.getElementById("picker-show-deleted"))==null||r.addEventListener("change",i=>{this.showDeletedMode=i.target.checked,this.fetchAndRenderSelections()}),(s=document.getElementById("picker-refresh"))==null||s.addEventListener("click",()=>{presentationLoader.clearCache(),this.fetchAndRenderSelections()}),(n=document.getElementById("picker-retry-btn"))==null||n.addEventListener("click",()=>{this.fetchAndRenderSelections()}),document.addEventListener("keydown",this.handleKeyDown.bind(this)))}handleKeyDown(e){e.key==="Escape"&&this.isVisible&&this.hide()}setLoadingState(e){const t=document.getElementById("picker-loading"),o=document.getElementById("picker-table"),r=document.getElementById("picker-empty"),s=document.getElementById("picker-error");e?(t&&(t.style.display="flex"),o&&(o.style.display="none"),r&&(r.style.display="none"),s&&(s.style.display="none")):t&&(t.style.display="none")}showError(e){const t=document.getElementById("picker-error"),o=document.getElementById("picker-error-message"),r=document.getElementById("picker-table"),s=document.getElementById("picker-empty");o&&(o.textContent=e),t&&(t.style.display="flex"),r&&(r.style.display="none"),s&&(s.style.display="none")}filterAndRender(){this.filteredSelections=presentationLoader.searchSelections(this.allSelections,this.currentSearchQuery),this.renderTable()}renderTable(){const e=document.getElementById("picker-table"),t=document.getElementById("picker-empty"),o=document.getElementById("picker-footer"),r=document.getElementById("picker-table-body");if(!r)return;if(this.filteredSelections.length===0){e&&(e.style.display="none"),t&&(t.style.display="flex"),o&&(o.style.display="none");return}e&&(e.style.display="table"),t&&(t.style.display="none"),o&&(o.style.display="flex"),r.innerHTML=this.filteredSelections.map((n,i)=>`
      <tr data-index="${i}" data-id="${n.id}">
        <td class="col-date">
          <div>${this.formatDate(n.date)}</div>
          <div style="font-size: 0.75rem; color: var(--text-tertiary, #9ca3af);">${this.formatTime(n.time)}</div>
        </td>
        <td class="col-customer">
          <div class="picker-customer-name">${this.escapeHtml(n.customerName||"Unknown")}</div>
          <div class="picker-customer-email">${this.escapeHtml(n.customerEmail||"")}</div>
        </td>
        <td class="col-project">
          <div class="picker-project-name">${this.escapeHtml(n.customerProject||"-")}</div>
          <div class="picker-document-name">${this.escapeHtml(n.documentName||"")}</div>
        </td>
        <td class="col-products" style="text-align: right;">
          ${n.totalProducts||0}
        </td>
        <td class="col-value" style="text-align: right;">
          $${this.formatValue(n.estimatedValue)}
        </td>
        <td class="col-actions">
          <button class="picker-load-btn" data-action="load" data-index="${i}">Load</button>
          ${this.showDeletedMode?`<button class="picker-delete-btn" data-action="restore" data-index="${i}" style="color: #059669; border-color: #059669;">Restore</button>`:`<button class="picker-delete-btn" data-action="delete" data-index="${i}">Delete</button>`}
        </td>
      </tr>
    `).join("");const s=document.getElementById("picker-selection-count");s&&(s.textContent=`${this.filteredSelections.length} selection${this.filteredSelections.length!==1?"s":""}`),this.attachRowEventListeners()}attachRowEventListeners(){const e=document.getElementById("picker-table-body");e&&(e.querySelectorAll("button[data-action]").forEach(t=>{t.addEventListener("click",o=>{o.stopPropagation();const r=t.dataset.action,s=parseInt(t.dataset.index),n=this.filteredSelections[s];r==="load"?this.showLoadConfirmation(n):r==="delete"?this.confirmDelete(n):r==="restore"&&this.restoreSelection(n)})}),e.querySelectorAll("tr").forEach(t=>{t.addEventListener("click",o=>{if(o.target.closest("button"))return;const r=parseInt(t.dataset.index),s=this.filteredSelections[r];this.showLoadConfirmation(s)})}))}showLoadConfirmation(e){const t=StorageManager.getSelectedProducts();if(!(t&&t.length>0)){this.loadSelection(e,"replace");return}const r=`
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
    `;document.body.insertAdjacentHTML("beforeend",r);const s=document.getElementById("picker-confirm-dialog");s.querySelectorAll("button[data-action]").forEach(n=>{n.addEventListener("click",()=>{const i=n.dataset.action;s.remove(),i==="replace"?this.loadSelection(e,"replace"):i==="merge"&&this.loadSelection(e,"merge")})}),s.addEventListener("click",n=>{n.target===s&&s.remove()})}async loadSelection(e,t){try{this.setLoadingState(!0);const o=await presentationLoader.loadSelection(e,t);o.success?(this.hide(),this.showToast(`Loaded ${o.productCount} products (${t})`),this.onLoadCallback&&this.onLoadCallback(o)):this.showError(o.error||"Failed to load selection")}catch(o){this.showError(o.message)}finally{this.setLoadingState(!1)}}async confirmDelete(e){if(confirm(`Delete selection for "${e.customerName||"Unknown"}"?

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
    `,t.textContent=e,document.body.appendChild(t),setTimeout(()=>{t.style.animation="toast-out 0.3s ease",setTimeout(()=>t.remove(),300)},3e3)}formatDate(e){if(!e)return"-";if(/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(e))return e;try{const t=new Date(e);if(!isNaN(t.getTime())&&t.getFullYear()>1900)return t.toLocaleDateString("en-AU")}catch{}return e}formatTime(e){if(!e)return"";const t=e.match(/(\d{1,2}):(\d{2})(?::\d{2})?\s*(AM|PM)?/i);if(t){let o=parseInt(t[1]);const r=t[2],s=(t[3]||"").toUpperCase();return s==="PM"&&o!==12?o+=12:s==="AM"&&o===12&&(o=0),`${o.toString().padStart(2,"0")}:${r}`}return e}formatValue(e){return(parseFloat(e)||0).toLocaleString("en-AU",{minimumFractionDigits:2,maximumFractionDigits:2})}escapeHtml(e){const t=document.createElement("div");return t.textContent=e||"",t.innerHTML}}const presentationPicker=new PresentationPicker,WIZARD_STORAGE_KEY="pdfWizardSettings",TIP_TAIL_STORAGE_KEY$1="tipTailSettings",CUSTOMER_LOGO_KEY$1="customerLogo";class PDFWizard{constructor(){this.wizardData=this.getDefaultData(),this.availableTipPdfs=[],this.availableTailPdfs=[],this.customTipPdf=null,this.customTailPdf=null,this.onComplete=null,this.onCancel=null}getDefaultData(){return{customer:{name:"",project:"",address:"",email:"",phone:"",logo:null},options:{showRrp:!1,includeGst:!1,noPricing:!1,noQty:!1,includeDescriptions:!0,includeNotes:!0},customise:{tipPdf:"",tailPdf:""}}}async open(e={}){this.onComplete=e.onComplete||null,this.onCancel=e.onCancel||null;try{const o=await(await fetch("./screens/pdf-wizard.html")).text(),r=document.createElement("div");if(r.id="pdf-wizard-container",r.innerHTML=o,document.body.appendChild(r),!document.querySelector('link[href*="design-system.css"]')){const s=document.createElement("link");s.rel="stylesheet",s.href="./css/design-system.css",document.head.appendChild(s)}this.loadSavedSettings(),await this.discoverAvailablePdfs(),this.setupEventHandlers(),this.populateForm(),console.log("✅ PDF Wizard opened"),this.startImagePreloading()}catch(t){console.error("Failed to open PDF wizard:",t)}}close(){const e=document.getElementById("pdf-wizard-container");e&&e.remove(),this.onCancel&&this.onCancel()}startImagePreloading(){const e=StorageManager.getSelectedProducts();if(!e||e.length===0){console.log("📷 No products to preload");return}const t=e.map(o=>{var r,s,n;return{...o.product,Image_URL:((r=o.product)==null?void 0:r.Image_URL)||((s=o.product)==null?void 0:s.imageUrl)||"",Diagram_URL:((n=o.product)==null?void 0:n.Diagram_URL)||""}});console.log(`📷 Starting background preload for ${t.length} products...`),preloadAllProductImages(t).then(o=>{console.log(`✅ Preloaded ${o} images - ready for PDF generation`)}).catch(o=>{console.warn("Image preloading error:",o)})}loadSavedSettings(){const e=Utils.getStorageItem(WIZARD_STORAGE_KEY,null);if(e){const s=this.getDefaultData();this.wizardData={...s,...e,customer:{...s.customer,...e.customer||{}},options:{...s.options,...e.options||{}},customise:{...s.customise,...e.customise||{}}}}const t=Utils.getStorageItem("pdfFormSettings",{});t.name&&(this.wizardData.customer.name=t.name),t.project&&(this.wizardData.customer.project=t.project),t.address&&(this.wizardData.customer.address=t.address),t.email&&(this.wizardData.customer.email=t.email),t.telephone&&(this.wizardData.customer.phone=t.telephone);const o=localStorage.getItem(CUSTOMER_LOGO_KEY$1);o&&(this.wizardData.customer.logo=o);const r=Utils.getStorageItem(TIP_TAIL_STORAGE_KEY$1,{});r.tipAsset&&(this.wizardData.customise.tipPdf=r.tipAsset),r.tailAsset&&(this.wizardData.customise.tailPdf=r.tailAsset)}async discoverAvailablePdfs(){try{let e=[];try{const t=await fetch("./assets-list.json");t.ok&&(e=await t.json())}catch{}e.length===0&&(e=["tip-AandD.pdf","tip-Builder.pdf","tip-Merchant.pdf","tip-Volume Merchant.pdf","tail-generic.pdf"]),this.availableTipPdfs=e.filter(t=>t.toLowerCase().startsWith("tip-")),this.availableTailPdfs=e.filter(t=>t.toLowerCase().startsWith("tail-")),this.renderPdfOptions()}catch(e){console.error("Failed to discover PDFs:",e)}}renderPdfOptions(){const e=document.getElementById("tip-pdf-grid");if(e){const o=this.wizardData.customise.tipPdf||"",r=o&&o!==""&&o!=="__custom__";let s=`
        <label class="option-card${r?"":" selected"}" data-tip="none">
          <input type="radio" name="tipPdf" value="" ${r?"":"checked"} style="display: none;">
          <div class="option-card-icon">✕</div>
          <span class="option-card-title">None</span>
        </label>
      `;this.availableTipPdfs.forEach(n=>{const i=n.replace("tip-","").replace(".pdf",""),c=o===`./assets/${n}`;s+=`
          <label class="option-card${c?" selected":""}" data-tip="${n}">
            <input type="radio" name="tipPdf" value="./assets/${n}" ${c?"checked":""} style="display: none;">
            <div class="option-card-icon">📄</div>
            <span class="option-card-title">${i}</span>
          </label>
        `}),e.innerHTML=s,e.querySelectorAll(".option-card").forEach(n=>{n.addEventListener("click",()=>{var c;this.customTipPdf=null,document.getElementById("tip-custom-preview").style.display="none",document.getElementById("tip-upload-link").style.display="",e.querySelectorAll(".option-card").forEach(l=>l.classList.remove("selected")),n.classList.add("selected");const i=n.querySelector("input");i&&(i.checked=!0),this.wizardData.customise.tipPdf=((c=n.querySelector("input"))==null?void 0:c.value)||"",this.saveSettings()})})}const t=document.getElementById("tail-pdf-grid");if(t){const o=this.wizardData.customise.tailPdf||"",r=o&&o!==""&&o!=="__custom__";let s=`
        <label class="option-card${r?"":" selected"}" data-tail="none">
          <input type="radio" name="tailPdf" value="" ${r?"":"checked"} style="display: none;">
          <div class="option-card-icon">✕</div>
          <span class="option-card-title">None</span>
        </label>
      `;this.availableTailPdfs.forEach(n=>{const i=n.replace("tail-","").replace(".pdf",""),c=o===`./assets/${n}`;s+=`
          <label class="option-card${c?" selected":""}" data-tail="${n}">
            <input type="radio" name="tailPdf" value="./assets/${n}" ${c?"checked":""} style="display: none;">
            <div class="option-card-icon">📄</div>
            <span class="option-card-title">${i}</span>
          </label>
        `}),t.innerHTML=s,t.querySelectorAll(".option-card").forEach(n=>{n.addEventListener("click",()=>{var c;this.customTailPdf=null,document.getElementById("tail-custom-preview").style.display="none",document.getElementById("tail-upload-link").style.display="",t.querySelectorAll(".option-card").forEach(l=>l.classList.remove("selected")),n.classList.add("selected");const i=n.querySelector("input");i&&(i.checked=!0),this.wizardData.customise.tailPdf=((c=n.querySelector("input"))==null?void 0:c.value)||"",this.saveSettings()})})}}setupEventHandlers(){var e,t,o;(e=document.getElementById("wizard-close"))==null||e.addEventListener("click",()=>this.close()),(t=document.getElementById("wizard-cancel"))==null||t.addEventListener("click",()=>this.close()),(o=document.getElementById("wizard-generate"))==null||o.addEventListener("click",r=>{r.preventDefault(),this.generatePdf()}),this.setupFormHandlers(),this.setupOptionCardHandlers(),this.setupLogoUpload(),this.setupPdfUploads()}setupFormHandlers(){document.querySelectorAll('#pdf-wizard input[type="text"], #pdf-wizard input[type="email"], #pdf-wizard input[type="tel"]').forEach(o=>{o.addEventListener("blur",()=>{this.collectFormData(),this.saveSettings()})}),document.querySelectorAll("#pdf-wizard .form-checkbox").forEach(o=>{const r=o.querySelector('input[type="checkbox"]');r&&(o.addEventListener("click",s=>{s.target.tagName==="SPAN"&&(r.checked=!r.checked,r.dispatchEvent(new Event("change",{bubbles:!0})))}),r.addEventListener("change",()=>{this.collectFormData(),this.saveSettings()}))})}setupOptionCardHandlers(){const e=document.getElementById("show-rrp"),t=document.getElementById("include-gst"),o=document.getElementById("no-pricing"),r=document.getElementById("no-qty");o&&o.addEventListener("change",()=>{const s=o.checked;this.wizardData.options.noPricing=s,s?(e&&(e.checked=!1,e.disabled=!0,e.parentElement.style.opacity="0.5",this.wizardData.options.showRrp=!1),t&&(t.checked=!1,t.disabled=!0,t.parentElement.style.opacity="0.5",this.wizardData.options.includeGst=!1)):(e&&(e.disabled=!1,e.parentElement.style.opacity="1"),t&&(t.disabled=!1,t.parentElement.style.opacity="1")),this.saveSettings()}),e&&e.addEventListener("change",()=>{this.wizardData.options.showRrp=e.checked,this.saveSettings()}),t&&t.addEventListener("change",()=>{this.wizardData.options.includeGst=t.checked,this.saveSettings()}),r&&r.addEventListener("change",()=>{this.wizardData.options.noQty=r.checked,this.saveSettings()})}setupLogoUpload(){const e=document.getElementById("logo-upload-zone"),t=document.getElementById("customer-logo-input"),o=document.getElementById("logo-preview-container"),r=document.getElementById("logo-preview-img"),s=document.getElementById("remove-logo-btn");e&&t&&(e.onclick=()=>t.click(),e.ondragover=n=>{n.preventDefault(),e.style.borderColor="var(--color-copper)"},e.ondragleave=()=>{e.style.borderColor=""},e.ondrop=n=>{n.preventDefault(),e.style.borderColor="",n.dataTransfer.files.length>0&&this.handleLogoFile(n.dataTransfer.files[0])},t.onchange=n=>{n.target.files.length>0&&this.handleLogoFile(n.target.files[0])}),s&&(s.onclick=()=>{this.wizardData.customer.logo=null,localStorage.removeItem(CUSTOMER_LOGO_KEY$1),o&&(o.style.display="none"),e&&(e.style.display="")}),this.wizardData.customer.logo&&r&&o&&(r.src=this.wizardData.customer.logo,o.style.display="block",e&&(e.style.display="none"))}handleLogoFile(e){if(!e.type.startsWith("image/")){alert("Please select an image file");return}if(e.size>2*1024*1024){alert("File size must be less than 2MB");return}const t=new FileReader;t.onload=o=>{this.wizardData.customer.logo=o.target.result,localStorage.setItem(CUSTOMER_LOGO_KEY$1,o.target.result);const r=document.getElementById("logo-preview-container"),s=document.getElementById("logo-preview-img"),n=document.getElementById("logo-upload-zone");s&&(s.src=o.target.result),r&&(r.style.display="block"),n&&(n.style.display="none")},t.readAsDataURL(e)}setupPdfUploads(){const e=document.getElementById("tip-upload-link"),t=document.getElementById("tip-pdf-input"),o=document.getElementById("tip-custom-preview"),r=document.getElementById("tip-custom-name"),s=document.getElementById("remove-tip-btn");e&&t&&(e.onclick=u=>{u.preventDefault(),t.click()},t.onchange=u=>{u.target.files.length>0&&(this.customTipPdf=u.target.files[0],r&&(r.textContent=this.customTipPdf.name),o&&(o.style.display="flex"),e&&(e.style.display="none"),document.querySelectorAll("#tip-pdf-grid .option-card").forEach(m=>m.classList.remove("selected")),this.wizardData.customise.tipPdf="__custom__")}),s&&(s.onclick=()=>{this.customTipPdf=null,o&&(o.style.display="none"),t&&(t.value=""),e&&(e.style.display="");const u=document.querySelector('#tip-pdf-grid [data-tip="none"]');if(u){document.querySelectorAll("#tip-pdf-grid .option-card").forEach(g=>g.classList.remove("selected")),u.classList.add("selected");const m=u.querySelector("input");m&&(m.checked=!0)}this.wizardData.customise.tipPdf=""});const n=document.getElementById("tail-upload-link"),i=document.getElementById("tail-pdf-input"),c=document.getElementById("tail-custom-preview"),l=document.getElementById("tail-custom-name"),d=document.getElementById("remove-tail-btn");n&&i&&(n.onclick=u=>{u.preventDefault(),i.click()},i.onchange=u=>{u.target.files.length>0&&(this.customTailPdf=u.target.files[0],l&&(l.textContent=this.customTailPdf.name),c&&(c.style.display="flex"),n&&(n.style.display="none"),document.querySelectorAll("#tail-pdf-grid .option-card").forEach(m=>m.classList.remove("selected")),this.wizardData.customise.tailPdf="__custom__")}),d&&(d.onclick=()=>{this.customTailPdf=null,c&&(c.style.display="none"),i&&(i.value=""),n&&(n.style.display="");const u=document.querySelector('#tail-pdf-grid [data-tail="none"]');if(u){document.querySelectorAll("#tail-pdf-grid .option-card").forEach(g=>g.classList.remove("selected")),u.classList.add("selected");const m=u.querySelector("input");m&&(m.checked=!0)}this.wizardData.customise.tailPdf=""})}collectFormData(){const e=["customer-name","customer-project","customer-address","customer-email","customer-phone"],t=["name","project","address","email","phone"];e.forEach((s,n)=>{const i=document.getElementById(s);i&&(this.wizardData.customer[t[n]]=i.value)}),Object.entries({"show-rrp":"showRrp","include-gst":"includeGst","no-pricing":"noPricing","no-qty":"noQty"}).forEach(([s,n])=>{const i=document.getElementById(s);i&&(this.wizardData.options[n]=i.checked)}),Object.entries({"include-descriptions":"includeDescriptions","include-notes":"includeNotes"}).forEach(([s,n])=>{const i=document.getElementById(s);i&&(this.wizardData.options[n]=i.checked)})}populateForm(){const e={"customer-name":this.wizardData.customer.name,"customer-project":this.wizardData.customer.project,"customer-address":this.wizardData.customer.address,"customer-email":this.wizardData.customer.email,"customer-phone":this.wizardData.customer.phone};Object.entries(e).forEach(([r,s])=>{const n=document.getElementById(r);n&&(n.value=s||"")});const t={"show-rrp":this.wizardData.options.showRrp,"include-gst":this.wizardData.options.includeGst,"no-pricing":this.wizardData.options.noPricing,"no-qty":this.wizardData.options.noQty};Object.entries(t).forEach(([r,s])=>{const n=document.getElementById(r);n&&(n.checked=!!s,this.wizardData.options.noPricing&&(r==="show-rrp"||r==="include-gst")&&(n.disabled=!0,n.parentElement.style.opacity="0.5"))});const o={"include-descriptions":this.wizardData.options.includeDescriptions,"include-notes":this.wizardData.options.includeNotes};Object.entries(o).forEach(([r,s])=>{const n=document.getElementById(r);n&&(n.checked=s)})}saveSettings(){try{Utils.setStorageItem(WIZARD_STORAGE_KEY,this.wizardData),Utils.setStorageItem("pdfFormSettings",{name:this.wizardData.customer.name,project:this.wizardData.customer.project,address:this.wizardData.customer.address,email:this.wizardData.customer.email,telephone:this.wizardData.customer.phone}),Utils.setStorageItem(TIP_TAIL_STORAGE_KEY$1,{tipAsset:this.wizardData.customise.tipPdf!=="__custom__"?this.wizardData.customise.tipPdf:"",tailAsset:this.wizardData.customise.tailPdf!=="__custom__"?this.wizardData.customise.tailPdf:""})}catch(e){console.warn("Could not save settings to localStorage:",e.message)}}async generatePdf(){this.collectFormData(),this.saveSettings();const e={name:this.wizardData.customer.name,project:this.wizardData.customer.project,address:this.wizardData.customer.address,email:this.wizardData.customer.email,telephone:this.wizardData.customer.phone,showRrp:this.wizardData.options.showRrp,includeGst:this.wizardData.options.includeGst,excludePrice:this.wizardData.options.noPricing,excludeQty:this.wizardData.options.noQty,excludeLongDescription:!this.wizardData.options.includeDescriptions,exportCsv:!0},t={tipAsset:"",tipUpload:null,tailAsset:"",tailUpload:null};if(this.wizardData.customise.tipPdf&&this.wizardData.customise.tipPdf!=="__custom__"&&(t.tipAsset=this.wizardData.customise.tipPdf),this.wizardData.customise.tailPdf&&this.wizardData.customise.tailPdf!=="__custom__"&&(t.tailAsset=this.wizardData.customise.tailPdf),this.customTipPdf)try{const r=await this.fileToBase64(this.customTipPdf);t.tipUpload=r.replace(/^data:application\/pdf;base64,/,""),console.log("📄 Custom tip PDF converted to base64")}catch(r){console.error("Failed to convert tip PDF:",r)}if(this.customTailPdf)try{const r=await this.fileToBase64(this.customTailPdf);t.tailUpload=r.replace(/^data:application\/pdf;base64,/,""),console.log("📄 Custom tail PDF converted to base64")}catch(r){console.error("Failed to convert tail PDF:",r)}try{localStorage.setItem("tipTailSettings",JSON.stringify(t))}catch(r){console.warn("Could not save tipTailSettings to localStorage (likely quota exceeded), using in-memory:",r.message)}console.log("📄 Generating PDF with settings:",{...e,tipAsset:t.tipAsset||"(none)",tipUpload:t.tipUpload?"(custom file)":"(none)",tailAsset:t.tailAsset||"(none)",tailUpload:t.tailUpload?"(custom file)":"(none)"});const o=document.getElementById("pdf-wizard-container");o&&o.remove(),this.onComplete?this.onComplete(e,t):window.dispatchEvent(new CustomEvent("generatePdf",{detail:{...e,tipTailSettings:t}}))}fileToBase64(e){return new Promise((t,o)=>{const r=new FileReader;r.onload=()=>t(r.result),r.onerror=o,r.readAsDataURL(e)})}showSaveDialog(){authUI.requireAuth(e=>{this._showSaveDialogInternal(e)})}_showSaveDialogInternal(e){this.collectFormData();const t=presentationRecorder.hasLoadedSelection(),o=this.wizardData.customer.name?`${this.wizardData.customer.name} - ${new Date().toLocaleDateString("en-AU")}`:`Selection - ${new Date().toLocaleDateString("en-AU")}`,r=`
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
    `;this.injectSaveDialogStyles(),document.body.insertAdjacentHTML("beforeend",r);const s=document.getElementById("save-dialog"),n=document.getElementById("save-doc-name"),i=document.getElementById("save-notes");n==null||n.focus(),n==null||n.select(),s.querySelectorAll("button[data-action]").forEach(l=>{l.addEventListener("click",async()=>{const d=l.dataset.action;if(d==="cancel"){s.remove();return}const u=(n==null?void 0:n.value.trim())||"Untitled Selection",m=(i==null?void 0:i.value.trim())||"",g={customerName:this.wizardData.customer.name,customerEmail:this.wizardData.customer.email,customerPhone:this.wizardData.customer.phone,customerProject:this.wizardData.customer.project,customerAddress:this.wizardData.customer.address,documentName:u,notes:m,pdfSettings:{showRrp:this.wizardData.options.showRrp,includeGst:this.wizardData.options.includeGst,noPricing:this.wizardData.options.noPricing,noQty:this.wizardData.options.noQty,includeDescriptions:this.wizardData.options.includeDescriptions,includeNotes:this.wizardData.options.includeNotes,tipPdf:this.wizardData.customise.tipPdf,tailPdf:this.wizardData.customise.tailPdf},gridRows:StorageManager.getSelectedProducts()};s.querySelectorAll("button").forEach(h=>h.disabled=!0),l.textContent="Saving...";try{let h;if(d==="save-update"){const f=presentationRecorder.getCurrentSelectionId();h=await presentationRecorder.updateSelection(f,g)}else h=await presentationRecorder.saveSelection(g);s.remove(),h.success?this.showToast(d==="save-update"?"Selection updated!":"Selection saved!"):this.showToast("Failed to save: "+(h.error||"Unknown error"),"error")}catch(h){s.remove(),this.showToast("Failed to save: "+h.message,"error")}})}),s.addEventListener("click",l=>{l.target===s&&s.remove()});const c=l=>{l.key==="Escape"&&(s.remove(),document.removeEventListener("keydown",c))};document.addEventListener("keydown",c)}injectSaveDialogStyles(){if(document.getElementById("save-dialog-styles"))return;document.head.insertAdjacentHTML("beforeend",`
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
    `)}showLoadPicker(){authUI.requireAuth(e=>{this._showLoadPickerInternal(e)})}_showLoadPickerInternal(e){console.log("📂 Opening load picker...");try{presentationPicker.show(t=>{console.log("✅ Selection loaded:",t);try{const o=JSON.parse(localStorage.getItem("customerDetails")||"{}");this.wizardData.customer.name=o.name||"",this.wizardData.customer.email=o.email||"",this.wizardData.customer.phone=o.phone||"",this.wizardData.customer.project=o.project||"",this.wizardData.customer.address=o.address||"";const r=JSON.parse(localStorage.getItem("pdfSettings")||"{}");r.showRrp!==void 0&&(this.wizardData.options.showRrp=r.showRrp),r.includeGst!==void 0&&(this.wizardData.options.includeGst=r.includeGst),r.noPricing!==void 0&&(this.wizardData.options.noPricing=r.noPricing),r.noQty!==void 0&&(this.wizardData.options.noQty=r.noQty),r.includeDescriptions!==void 0&&(this.wizardData.options.includeDescriptions=r.includeDescriptions),r.includeNotes!==void 0&&(this.wizardData.options.includeNotes=r.includeNotes),r.tipPdf&&(this.wizardData.customise.tipPdf=r.tipPdf),r.tailPdf&&(this.wizardData.customise.tailPdf=r.tailPdf),this.populateForm(),this.showToast(`Loaded ${t.productCount} products`)}catch(o){console.warn("Could not reload wizard data:",o)}})}catch(t){console.error("❌ Failed to open load picker:",t),this.showToast("Failed to open picker: "+t.message,"error")}}showToast(e,t="success"){const o=document.createElement("div");o.style.cssText=`
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
    `,o.textContent=e,document.body.appendChild(o),setTimeout(()=>{o.style.animation="toast-out 0.3s ease",setTimeout(()=>o.remove(),300)},3e3)}escapeHtml(e){const t=document.createElement("div");return t.textContent=e||"",t.innerHTML}}const pdfWizard=new PDFWizard;class ToastManager{constructor(){this.container=null,this.toasts=new Map,this.nextId=1,this.init()}init(){document.getElementById("toast-container")?this.container=document.getElementById("toast-container"):(this.container=document.createElement("div"),this.container.id="toast-container",this.container.className="toast-container",document.body.appendChild(this.container))}show({message:e,type:t="info",duration:o=4e3,action:r=null}){const s=this.nextId++,n=document.createElement("div");n.className=`toast toast-${t}`,n.setAttribute("role","alert"),n.setAttribute("aria-live","polite");const i={success:"✓",error:"✕",warning:"⚠",info:"ℹ"};n.innerHTML=`
      <div class="toast-icon">${i[t]||i.info}</div>
      <div class="toast-content">
        <span class="toast-message">${e}</span>
        ${r?`<button class="toast-action" type="button">${r.label}</button>`:""}
      </div>
      <button class="toast-close" type="button" aria-label="Dismiss">×</button>
    `;const c=n.querySelector(".toast-close");if(c.onclick=()=>this.dismiss(s),r&&r.callback){const l=n.querySelector(".toast-action");l.onclick=()=>{r.callback(),this.dismiss(s)}}return this.container.appendChild(n),this.toasts.set(s,n),requestAnimationFrame(()=>{n.classList.add("toast-enter")}),o>0&&setTimeout(()=>this.dismiss(s),o),s}dismiss(e){const t=this.toasts.get(e);t&&(t.classList.add("toast-exit"),t.addEventListener("animationend",()=>{t.remove(),this.toasts.delete(e)}))}dismissAll(){this.toasts.forEach((e,t)=>this.dismiss(t))}success(e,t={}){return this.show({message:e,type:"success",...t})}error(e,t={}){return this.show({message:e,type:"error",duration:6e3,...t})}warning(e,t={}){return this.show({message:e,type:"warning",...t})}info(e,t={}){return this.show({message:e,type:"info",...t})}withUndo(e,t,o=5e3){return this.show({message:e,type:"info",duration:o,action:{label:"Undo",callback:t}})}}const toast=new ToastManager;window.toast=toast;class DropdownManager{constructor(){this.activeDropdown=null,this.updatePositionHandler=null,document.addEventListener("click",e=>{e.target.closest(".global-search-dropdown")||this.hideDropdown()})}showDropdown(e,t,o,r=!1){this.hideDropdown();const s=document.createElement("ul");s.className="global-search-dropdown";const n=300,i=e.getBoundingClientRect(),c=window.innerWidth,l=window.innerHeight,d=i.width,u=l-i.bottom,m=i.top;let g=!1;u<n&&m>u&&(g=!0);let h;g?h=Math.max(8,i.top-n-8):h=Math.min(l-n-8,i.bottom+8);let f=i.left;f+d>c-8&&(f=c-d-8),f<8&&(f=8);const w={position:"fixed",top:`${h}px`,left:`${f}px`,width:`${d}px`,minWidth:`${d}px`,maxWidth:`${d}px`,background:"#fff",border:"1px solid #d1d5db",borderRadius:"8px",boxShadow:"0 10px 25px -5px rgba(0, 0, 0, 0.15), 0 8px 10px -6px rgba(0, 0, 0, 0.10)",maxHeight:`${n}px`,overflowY:"auto",overflowX:"hidden",zIndex:"10010",listStyle:"none",margin:"0",padding:"4px 0",whiteSpace:"normal",wordWrap:"break-word",display:"block",pointerEvents:"auto",transform:"none",contain:"none",isolation:"isolate"};Object.keys(w).forEach(y=>{s.style.setProperty(y,w[y],"important")}),s.dropdownHeight=n,t.length===0?s.innerHTML='<li style="padding: 12px 16px; color: #6b7280; font-style: italic; background: #fff;">No products found</li>':s.innerHTML=t.map(y=>{const b=y.OrderCode||y.Code||"",p=y.Description||y.ProductName||y["Product Name"]||"";return`<li data-product='${JSON.stringify(y).replace(/'/g,"&apos;")}'
                     style="padding: 12px 16px; cursor: pointer; border-bottom: 1px solid #f3f4f6; 
                            transition: background-color 0.15s ease; font-size: 14px; line-height: 1.5;
                            margin: 0; display: block; width: 100%; 
                            white-space: normal; word-wrap: break-word; overflow: visible; background: #fff !important;">
          <span style="font-weight: 600; color: #2563eb;">${Utils.sanitizeInput(b)}</span>
          <span style="color: #6b7280; margin: 0 8px;">—</span>
          <span style="color: #374151;">${Utils.sanitizeInput(p)}</span>
        </li>`}).join(""),s.querySelectorAll("li[data-product]").forEach((y,b)=>{y.addEventListener("mouseenter",()=>{s.querySelectorAll("li.active").forEach(p=>p.classList.remove("active")),y.classList.add("hover")}),y.addEventListener("mouseleave",()=>{y.classList.remove("hover")}),y.onclick=()=>{try{const p=JSON.parse(y.getAttribute("data-product"));o(p),this.hideDropdown()}catch(p){console.error("Failed to parse product data:",p)}},r&&b===0&&(y.classList.add("active"),y.style.setProperty("background","#b87333","important"),y.querySelectorAll("span").forEach(p=>{p.style.setProperty("color","#ffffff","important")}))}),document.body.appendChild(s),this.activeDropdown=s,this.updatePositionHandler=()=>{const y=e.getBoundingClientRect(),b=window.innerHeight,p=s.dropdownHeight||300,v=b-y.bottom,S=y.top;let C=!1;v<p&&S>v&&(C=!0);let D;C?D=Math.max(8,y.top-p-8):D=Math.min(b-p-8,y.bottom+8);let O=y.left;O+y.width>c-8&&(O=c-y.width-8),O<8&&(O=8),s.style.setProperty("top",`${D}px`,"important"),s.style.setProperty("left",`${O}px`,"important"),s.style.setProperty("width",`${y.width}px`,"important"),s.style.setProperty("min-width",`${y.width}px`,"important"),s.style.setProperty("max-width",`${y.width}px`,"important")},window.addEventListener("scroll",this.updatePositionHandler),window.addEventListener("resize",this.updatePositionHandler)}hideDropdown(){this.activeDropdown&&(this.updatePositionHandler&&(window.removeEventListener("scroll",this.updatePositionHandler),window.removeEventListener("resize",this.updatePositionHandler)),this.activeDropdown.remove(),this.activeDropdown=null,this.updatePositionHandler=null)}}const TIP_TAIL_STORAGE_KEY="tipTailSettings",CUSTOMER_LOGO_KEY="customerLogo";class ProductGridManager{constructor(){this.gridRows=[],this.nextRowId=1,this.currentSearchRow=null,this.searchCache=new Map,this.searchTimeout=null,this.dropdownManager=new DropdownManager,this.lastUsedRoom="Blank",this.draggedRowId=null,this.draggedRoomName=null,this.customRoomOrder=this.loadCustomRoomOrder(),this.currentSelectionId=null,this.currentSelectionName="New Selection",this.hasUnsavedChanges=!1,this.autoSaveTimeout=null,this.lastSaveTime=null}loadCustomRoomOrder(){try{const e=localStorage.getItem("customRoomOrder");return e?JSON.parse(e):[]}catch{return[]}}saveCustomRoomOrder(){try{localStorage.setItem("customRoomOrder",JSON.stringify(this.customRoomOrder))}catch(e){console.warn("Failed to save room order:",e)}}init(){const e=document.querySelector(".grid-table");e&&(e.style.removeProperty("table-layout"),e.style.removeProperty("overflow"),e.classList.remove("has-open-dropdown"));const t=document.querySelector(".global-search-dropdown");t&&t.remove(),this.setupEventListeners(),this.updateAllRoomDropdowns(),this.loadExistingProducts(),this.updateTotals(),this.ensureAtLeastOneEmptyRow(),this.handleSortChange(),this.initContextHeader(),this.checkForRecentSelection()}initContextHeader(){this.updateContextHeader();const e=document.getElementById("save-selection-btn"),t=document.getElementById("load-selection-btn");e&&e.addEventListener("click",()=>this.showSaveDialog()),t&&t.addEventListener("click",()=>this.showLoadPicker());const o=document.getElementById("entry-import"),r=document.getElementById("entry-load"),s=document.getElementById("entry-new"),n=document.getElementById("entry-continue");o&&o.addEventListener("click",()=>this.showImportModal()),r&&r.addEventListener("click",()=>this.showLoadPicker()),s&&s.addEventListener("click",()=>this.addEmptyRow()),n&&n.addEventListener("click",()=>this.loadRecentSelection())}updateContextHeader(){const e=document.getElementById("selection-name"),t=document.getElementById("status-icon"),o=document.getElementById("save-indicator");e&&(e.textContent=this.currentSelectionName||"New Selection"),t&&(this.currentSelectionId?(t.textContent="●",t.classList.add("saved"),t.classList.remove("unsaved")):(t.textContent="○",t.classList.remove("saved"))),o&&(o.style.display=this.hasUnsavedChanges?"flex":"none")}markAsChanged(){this.hasUnsavedChanges=!0,this.updateContextHeader(),clearTimeout(this.autoSaveTimeout),this.autoSaveTimeout=setTimeout(()=>{this.hasUnsavedChanges&&this.currentSelectionId&&this.autoSave()},3e4)}async autoSave(){if(!(!this.currentSelectionId||!this.hasUnsavedChanges))try{const e=this.prepareSelectionData();(await presentationRecorder.updateSelection(this.currentSelectionId,e)).success&&(this.hasUnsavedChanges=!1,this.lastSaveTime=new Date,this.updateContextHeader(),toast.success("Auto-saved"))}catch(e){console.warn("Auto-save failed:",e)}}async checkForRecentSelection(){try{const e=StorageManager.getUserSettings();if(!((e==null?void 0:e.staffEmail)||""))return;const o=await presentationLoader.fetchSelections();if(o.length>0){const r=o[0],s=document.getElementById("entry-continue"),n=document.getElementById("recent-selection-name");s&&n&&(s.style.display="flex",n.textContent=`${r.documentName||r.customerName} • ${r.date}`,s.dataset.selectionId=r.id)}}catch(e){console.warn("Could not check for recent selections:",e)}}async loadRecentSelection(){const e=document.getElementById("entry-continue");if(!(e==null?void 0:e.dataset.selectionId)){toast.warning("No recent selection found");return}this.showLoadPicker()}prepareSelectionData(){const e=Utils.getStorageItem("pdfFormSettings",{});return{customerName:e.name||"",customerEmail:e.email||"",customerPhone:e.telephone||"",customerProject:e.project||"",customerAddress:e.address||"",documentName:this.currentSelectionName,notes:"",pdfSettings:Utils.getStorageItem("pdfWizardSettings",{}),gridRows:StorageManager.getSelectedProducts(),roomOrder:this.customRoomOrder}}setupEventListeners(){const e=document.getElementById("back-to-home"),t=document.getElementById("import-file-btn"),o=document.getElementById("download-btn"),r=document.getElementById("clear-all-btn"),s=document.getElementById("settings-btn"),n=document.getElementById("add-row-btn");e&&(e.onclick=()=>location.reload()),t&&(t.onclick=()=>this.showImportModal()),o&&(o.onclick=()=>this.showDownloadModal()),r&&(r.onclick=()=>this.showClearAllModal()),s&&(s.onclick=()=>this.showSettingsModal()),n&&(n.onclick=()=>this.addEmptyRow());const i=document.getElementById("clear-all-cancel"),c=document.getElementById("clear-all-confirm");i&&(i.onclick=()=>this.hideClearAllModal()),c&&(c.onclick=()=>{var S;const v=((S=document.getElementById("clear-customer-details"))==null?void 0:S.checked)??!0;this.clearAll(v),this.hideClearAllModal()});const l=document.getElementById("settings-cancel"),d=document.getElementById("settings-save");l&&(l.onclick=()=>this.hideSettingsModal()),d&&(d.onclick=()=>this.saveSettings());const u=document.getElementById("clear-all-modal"),m=document.getElementById("settings-modal");u&&(u.onclick=v=>{v.target===u&&this.hideClearAllModal()}),m&&(m.onclick=v=>{v.target===m&&this.hideSettingsModal()});const g=document.getElementById("sort-by");g&&(g.onchange=()=>this.handleSortChange());const h=document.getElementById("sort-refresh-btn");h&&(h.onclick=()=>this.handleSortChange());const f=document.getElementById("grid-body");f&&(f.addEventListener("input",this.handleGridInput.bind(this)),f.addEventListener("change",this.handleGridChange.bind(this)),f.addEventListener("click",this.handleGridClick.bind(this)),f.addEventListener("keydown",this.handleGridKeydown.bind(this)),f.addEventListener("focusin",this.handleGridFocusIn.bind(this)),f.addEventListener("focusout",this.handleGridFocusOut.bind(this)),f.addEventListener("dragstart",this.handleDragStart.bind(this)),f.addEventListener("dragover",this.handleDragOver.bind(this)),f.addEventListener("dragleave",this.handleDragLeave.bind(this)),f.addEventListener("drop",this.handleDrop.bind(this)),f.addEventListener("dragend",this.handleDragEnd.bind(this))),document.addEventListener("click",v=>{!v.target.closest(".grid-product-cell")&&!v.target.closest(".global-search-dropdown")&&this.hideAllDropdowns()});const w=document.getElementById("pdf-email-modal"),y=document.getElementById("pdf-email-cancel");y&&w&&(y.onclick=()=>{w.style.display="none"});const b="pdfFormSettings",p=document.getElementById("pdf-email-form");w&&w.addEventListener("show",()=>{const v=Utils.getStorageItem(b,{});p&&(p["user-name"].value=v.name||"",p["user-project"].value=v.project||"",p["user-address"].value=v.address||"",p["user-email"].value=v.email||"",p["user-telephone"].value=v.telephone||"",p["exclude-prices"].checked=!!v.excludePrices,p["exclude-qty"].checked=!!v.excludeQty,p["exclude-long-description"].checked=!!v.excludeLongDescription,p["include-gst"].checked=!!v.includeGst)}),p&&(p.addEventListener("input",()=>{Utils.setStorageItem(b,{name:p["user-name"].value,project:p["user-project"].value,address:p["user-address"].value,email:p["user-email"].value,telephone:p["user-telephone"].value,excludePrices:p["exclude-prices"].checked,excludeQty:p["exclude-qty"].checked,excludeLongDescription:p["exclude-long-description"].checked,includeGst:p["include-gst"].checked})}),p.addEventListener("change",()=>{Utils.setStorageItem(b,{name:p["user-name"].value,project:p["user-project"].value,address:p["user-address"].value,email:p["user-email"].value,telephone:p["user-telephone"].value,excludePrices:p["exclude-prices"].checked,excludeQty:p["exclude-qty"].checked,excludeLongDescription:p["exclude-long-description"].checked,includeGst:p["include-gst"].checked})}),p.onsubmit=v=>{var C,D,O,K,G,j,F,M,H,le,de;v.preventDefault(),Utils.setStorageItem(b,{name:p["user-name"].value,project:p["user-project"].value,address:p["user-address"].value,email:p["user-email"].value,telephone:p["user-telephone"].value,excludePrices:p["exclude-prices"].checked,excludeQty:p["exclude-qty"].checked,excludeLongDescription:p["exclude-long-description"].checked,includeGst:p["include-gst"].checked});const S={name:((C=p["user-name"])==null?void 0:C.value)||"",project:((D=p["user-project"])==null?void 0:D.value)||"",address:((O=p["user-address"])==null?void 0:O.value)||"",email:((K=p["user-email"])==null?void 0:K.value)||"",telephone:((G=p["user-telephone"])==null?void 0:G.value)||"",excludePrice:(j=p["exclude-qty"])!=null&&j.checked?!0:((F=p["exclude-price"])==null?void 0:F.checked)||((M=p["exclude-prices"])==null?void 0:M.checked)||!1,excludeQty:((H=p["exclude-qty"])==null?void 0:H.checked)||!1,excludeLongDescription:((le=p["exclude-long-description"])==null?void 0:le.checked)||!1,includeGst:((de=p["include-gst"])==null?void 0:de.checked)||!1,exportCsv:!0};console.log("DEBUG: userDetails created for PDF:",S),window.showPdfFormScreen?window.showPdfFormScreen(S):typeof showPdfFormScreen=="function"&&showPdfFormScreen(S),w&&(w.style.display="none")})}addEmptyRow(){const e=`row_${this.nextRowId++}`,t={id:e,product:null,room:"Blank",quantity:1,price:"0.00",notes:""};this.gridRows.push(t),this.renderGrid(),setTimeout(()=>{const o=document.querySelector(`[data-row-id="${e}"]`);o&&(o.scrollIntoView({behavior:"smooth",block:"center"}),o.style.backgroundColor="#dbeafe",o.style.transition="background-color 0.3s ease",setTimeout(()=>{o.style.backgroundColor="";const r=o.querySelector(".grid-search-input");r&&r.focus()},800))},100)}removeRow(e){const t=this.gridRows.findIndex(o=>o.id===e);if(t!==-1){const o=this.gridRows[t],r={...o,index:t,product:o.product?{...o.product}:null};if(o.product&&o.storageId&&StorageManager.removeProductFromSelection(o.storageId),this.gridRows.splice(t,1),this.renderGrid(),this.updateTotals(),r.product){const s=r.product.Description||r.product.ProductName||r.product.OrderCode||"Product",n=s.length>30?s.substring(0,30)+"...":s;toast.withUndo(`Removed "${n}"`,()=>{this.restoreRow(r)})}}this.ensureAtLeastOneEmptyRow()}restoreRow(e){const t={id:`row-${this.nextRowId++}`,product:e.product,qty:e.qty||1,notes:e.notes||"",room:e.room||"Blank",price:e.price||null,storageId:null};t.product&&(t.storageId=StorageManager.addProductToSelection({...t.product,qty:t.qty,notes:t.notes,room:t.room,customPrice:t.price}));const o=Math.min(e.index,this.gridRows.length);this.gridRows.splice(o,0,t),this.renderGrid(),this.updateTotals(),toast.success("Product restored")}moveRow(e,t){const o=this.gridRows.findIndex(n=>n.id===e);if(o===-1)return;let r;if(t==="up"?r=Math.max(0,o-1):t==="down"&&(r=Math.min(this.gridRows.length-1,o+1)),r===o)return;const s=this.gridRows.splice(o,1)[0];this.gridRows.splice(r,0,s),this.renderGrid(),this.updateTotals(),setTimeout(()=>{const n=document.querySelector(`[data-row-id="${e}"]`);n&&(n.style.backgroundColor="#dbeafe",setTimeout(()=>{n.style.backgroundColor=""},500))},100)}async handleProductSearch(e,t){if(!t||t.length<2){this.hideSearchDropdown(e);return}const o=t.toLowerCase();if(this.searchCache.has(o)){this.showSearchResults(e,this.searchCache.get(o),t);return}clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(async()=>{try{const r=await this.searchProducts(t);this.searchCache.set(o,r),this.showSearchResults(e,r,t)}catch(r){console.error("Product search failed:",r),this.hideSearchDropdown(e)}},300)}async searchProducts(e){return dataLayer.isLoaded||await new Promise(t=>{const o=()=>{dataLayer.isLoaded?t():setTimeout(o,100)};o()}),dataLayer.searchProducts(e,50)}showSearchResults(e,t,o){let r=!1;if(t.length>0&&o){const s=o.toUpperCase().trim(),n=t[0],i=(n.OrderCode||"").toString().toUpperCase().trim(),c=(n.BARCODE||n.Barcode||"").toString().toUpperCase().trim();(i===s||c===s)&&(r=!0)}this.dropdownManager.showDropdown(e,t,s=>this.selectProduct(e,s),r)}setupDropdownEvents(e,t){}hideSearchDropdown(e){this.hideGlobalDropdown()}hideGlobalDropdown(){this.dropdownManager.hideDropdown()}selectProduct(e,t){const o=e.closest(".grid-row"),r=o.dataset.rowId,s=this.gridRows.find(c=>c.id===r);if(!s)return;s.product=t;const n=t.RRP_EX||t["RRP EX GST"]||t.RRP_EX||t.RRP_EXGST||t.rrpExGst||t.RRP_INCGST||t.RRP_INCGST||t["RRP INC GST"]||t.rrpIncGst||"";s.price=n;const i=o.querySelector('input[name="price"]');i&&(i.value=n),e.value="",this.renderGrid(),this.saveRowToStorage(s),this.focusNextRowOrCreate(r)}saveRowToStorage(e){if(!e.product)return;const t={...e.product,OrderCode:e.product.OrderCode||e.product.Code||"",Description:e.product.Description||e.product.ProductName||e.product["Product Name"]||"",UserEditedPrice:e.price,RRP_EX:e.product.RRP_EX||e.product["RRP EX GST"]||e.product.RRP_EX||e.product.RRP_EXGST||e.product.rrpExGst||"0",RRP_INCGST:e.product.RRP_INCGST||e.product["RRP INC GST"]||e.product.rrpIncGst||"0",Image_URL:e.product.Image_URL||e.product.imageUrl||e.product.Image||"assets/no-image.png"},o=StorageManager.addProductToSelection(t,e.notes,e.room,e.quantity);o&&(e.storageId=o,this.updateTotals())}focusNextRowOrCreate(e){const t=this.gridRows.findIndex(o=>o.id===e);if(t<this.gridRows.length-1){const o=this.gridRows[t+1];setTimeout(()=>{const r=document.querySelector(`[data-row-id="${o.id}"] .grid-search-input`);r&&!r.classList.contains("populated")&&r.focus()},100)}else this.addEmptyRow()}handleGridInput(e){const t=e.target;t.classList.contains("grid-search-input")&&!t.classList.contains("populated")?this.handleProductSearch(t,t.value):(t.classList.contains("grid-input")||t.classList.contains("grid-textarea")||t.classList.contains("grid-select"))&&this.updateRowFromInput(t)}handleGridChange(e){const t=e.target;(t.classList.contains("grid-select")||t.classList.contains("grid-input")||t.classList.contains("grid-textarea"))&&this.updateRowFromInput(t)}handleGridClick(e){const t=e.target;if(t.classList.contains("grid-remove-btn")){const r=t.closest(".grid-row").dataset.rowId;this.removeRow(r)}else if(t.classList.contains("grid-move-btn")){const r=t.closest(".grid-row").dataset.rowId,s=t.dataset.direction;this.moveRow(r,s)}else t.closest(".grid-search-dropdown")||document.querySelectorAll(".grid-search-dropdown.visible").forEach(o=>{o.classList.remove("visible")})}handleGridKeydown(e){if(e.target.classList.contains("grid-search-input")){const t=document.querySelector(".global-search-dropdown");t?this.handleDropdownKeyboard(e,t):e.key==="Enter"&&(e.preventDefault(),this.handleProductSearch(e.target,e.target.value))}}handleDropdownKeyboard(e,t){const o=document.querySelector(".global-search-dropdown");if(!o)return;const r=o.querySelectorAll("li[data-product]"),s=o.querySelector("li.active");let n=null;const i=(c,l)=>{if(l)c.classList.add("active"),c.style.setProperty("background","#b87333","important"),c.querySelectorAll("span").forEach(d=>{d.style.setProperty("color","#ffffff","important")});else{c.classList.remove("active"),c.style.setProperty("background","#fff","important");const d=c.querySelectorAll("span");d[0]&&d[0].style.setProperty("color","#2563eb","important"),d[1]&&d[1].style.setProperty("color","#6b7280","important"),d[2]&&d[2].style.setProperty("color","#374151","important")}};switch(e.key){case"ArrowDown":if(e.preventDefault(),!s)n=r[0];else{i(s,!1);const l=(Array.from(r).indexOf(s)+1)%r.length;n=r[l]}n&&(i(n,!0),n.scrollIntoView({block:"nearest"}));break;case"ArrowUp":if(e.preventDefault(),!s)n=r[r.length-1];else{i(s,!1);const c=Array.from(r).indexOf(s),l=c===0?r.length-1:c-1;n=r[l]}n&&(i(n,!0),n.scrollIntoView({block:"nearest"}));break;case"Enter":e.preventDefault(),s&&s.click();break;case"Escape":e.preventDefault(),this.hideGlobalDropdown();break}}handleGridFocusIn(e){}handleGridFocusOut(e){}handleDragStart(e){const t=e.target.closest(".grid-row");if(!t){e.preventDefault();return}if(t.classList.contains("room-header-row")){const o=t.dataset.roomName;if(o==="Blank"){e.preventDefault();return}if(this.draggedRoomName=o,this.draggedRowId=null,e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("text/plain",`room:${o}`),t.classList.add("dragging"),e.dataTransfer.setDragImage){const r=document.createElement("div");r.textContent=`📁 ${o}`,r.style.cssText=`
          position: absolute; top: -1000px; padding: 8px 16px;
          background: #374151; color: white; border-radius: 6px;
          font-weight: 600; font-size: 14px;
        `,document.body.appendChild(r),e.dataTransfer.setDragImage(r,0,15),setTimeout(()=>r.remove(),0)}return}if(!e.target.classList.contains("grid-drag-handle")){e.preventDefault();return}if(this.draggedRowId=t.dataset.rowId,this.draggedRoomName=null,e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("text/plain",t.dataset.rowId),t.classList.add("dragging"),e.dataTransfer.setDragImage){const o=t.cloneNode(!0);o.style.opacity="0.8",o.style.position="absolute",o.style.top="-1000px",o.style.width=t.offsetWidth+"px",document.body.appendChild(o),e.dataTransfer.setDragImage(o,t.offsetWidth-10,20),setTimeout(()=>o.remove(),0)}}handleDragOver(e){e.preventDefault(),e.dataTransfer.dropEffect="move";const t=e.target.closest(".grid-row");if(!t||t.classList.contains("dragging"))return;if(document.querySelectorAll(".grid-row.drag-over-above, .grid-row.drag-over-below").forEach(s=>{s.classList.remove("drag-over-above","drag-over-below")}),this.draggedRoomName){if(!t.classList.contains("room-header-row")||t.dataset.roomName==="Blank"||t.dataset.roomName===this.draggedRoomName)return;const s=t.getBoundingClientRect(),n=s.top+s.height/2;e.clientY<n?t.classList.add("drag-over-above"):t.classList.add("drag-over-below");return}if(t.classList.contains("room-header-row"))return;const o=t.getBoundingClientRect(),r=o.top+o.height/2;e.clientY<r?t.classList.add("drag-over-above"):t.classList.add("drag-over-below")}handleDragLeave(e){const t=e.target.closest(".grid-row");if(t){const o=e.relatedTarget;t.contains(o)||t.classList.remove("drag-over-above","drag-over-below")}}handleDrop(e){e.preventDefault(),document.querySelectorAll(".grid-row.drag-over-above, .grid-row.drag-over-below").forEach(g=>{g.classList.remove("drag-over-above","drag-over-below")});const t=e.dataTransfer.getData("text/plain"),o=e.target.closest(".grid-row");if(!o||!t)return;if(t.startsWith("room:")){const g=t.replace("room:","");if(!o.classList.contains("room-header-row"))return;const h=o.dataset.roomName;if(h==="Blank"||g===h)return;const f=o.getBoundingClientRect(),w=e.clientY<f.top+f.height/2;this.moveRoomInOrder(g,h,w),this.renderGrid();return}const r=t;if(o.classList.contains("room-header-row"))return;const s=o.dataset.rowId;if(r===s)return;const n=o.getBoundingClientRect(),i=e.clientY<n.top+n.height/2,c=this.gridRows.findIndex(g=>g.id===r),l=this.gridRows.findIndex(g=>g.id===s);if(c===-1||l===-1)return;const d=this.gridRows[c],u=this.gridRows[l];d.room!==u.room&&(d.room=u.room,this.lastUsedRoom=u.room,d.product&&d.storageId&&StorageManager.updateProductRoom(d.storageId,d.room)),this.gridRows.splice(c,1);let m=this.gridRows.findIndex(g=>g.id===s);m!==-1&&(i||m++,this.gridRows.splice(m,0,d),this.renderGrid(),setTimeout(()=>{const g=document.querySelector(`[data-row-id="${r}"]`);g&&(g.style.backgroundColor="#dbeafe",g.style.transition="background-color 0.3s ease",setTimeout(()=>{g.style.backgroundColor=""},500))},50))}handleDragEnd(e){this.draggedRowId=null,this.draggedRoomName=null,document.querySelectorAll(".grid-row.dragging").forEach(t=>t.classList.remove("dragging")),document.querySelectorAll(".grid-row.drag-over-above").forEach(t=>t.classList.remove("drag-over-above")),document.querySelectorAll(".grid-row.drag-over-below").forEach(t=>t.classList.remove("drag-over-below"))}hideAllDropdowns(){this.hideGlobalDropdown()}showClearAllModal(){const e=document.getElementById("clear-all-modal");e&&(e.style.display="flex")}hideClearAllModal(){const e=document.getElementById("clear-all-modal");e&&(e.style.display="none")}async showSettingsModal(){const e=document.getElementById("settings-modal");e&&(e.style.display="flex",setTimeout(async()=>{const t=StorageManager.getUserSettings(),o=authService.getCurrentUser(),r=document.getElementById("staff-name"),s=document.getElementById("staff-position"),n=document.getElementById("staff-email"),i=document.getElementById("staff-telephone"),c=document.getElementById("logged-in-profile-section"),l=document.getElementById("profile-avatar"),d=document.getElementById("profile-display-name"),u=document.getElementById("profile-display-email"),m=document.getElementById("edit-profile-btn");if(t&&(t.staffName||t.staffEmail)?(r&&(r.value=t.staffName||""),s&&(s.value=t.staffPosition||""),n&&(n.value=t.staffEmail||""),i&&(i.value=t.staffPhone||"")):o&&(r&&o.name&&(r.value=o.name),s&&o.position&&(s.value=o.position),n&&o.email&&(n.value=o.email),i&&o.phone&&(i.value=o.phone)),o){c&&(c.style.display="block"),d&&(d.textContent=o.name||""),u&&(u.textContent=o.email||""),l&&(l.textContent=this.getInitials(o.name)),m&&(m.onclick=()=>{authUI.showEditProfile(b=>{console.log("📱 Profile updated:",b),StorageManager.clearUserSettings(),this.showSettingsModal()})});const y=document.getElementById("change-password-btn");y&&(y.onclick=()=>{authUI.showChangePassword(()=>{console.log("📱 Password changed")})})}else c&&(c.style.display="none");const h=document.getElementById("settings-version-info");if(h)try{let b=(await(await fetch("./version.txt")).text()).trim();b=b.split(/\r?\n/)[0].replace(/[^0-9.v]/g,""),h.innerText=b?`v${b}`:"",h.title="App Version"}catch{h.innerText=""}const f=document.getElementById("refresh-catalog-btn");f&&(f.onclick=()=>{localStorage.removeItem("productCatalogCsv"),window.location.reload()});const w=document.getElementById("refresh-pdf-files-btn");w&&(w.onclick=async()=>{await this.refreshPdfFileList();const y=w.textContent;w.textContent="✅ Refreshed!",w.style.background="#dcfce7",w.style.color="#059669",setTimeout(()=>{w.textContent=y,w.style.background="#f3f4f6",w.style.color="#059669"},2e3)}),this.loadCustomerLogoPreview(),this.setupCustomerLogoHandlers(),await this.populateTipTailDropdowns(),this.loadTipTailSelections(),this.setupTipTailHandlers()},0))}getInitials(e){if(!e)return"?";const t=e.trim().split(" ");return t.length>=2?(t[0][0]+t[t.length-1][0]).toUpperCase():t[0][0].toUpperCase()}loadCustomerLogoPreview(){const e=document.getElementById("customer-logo-preview"),t=localStorage.getItem(CUSTOMER_LOGO_KEY);e&&(e.innerHTML=t?`<img src="${t}" style="max-height:100px;max-width:180px;width:auto;height:auto;object-fit:contain;">`:"")}setupCustomerLogoHandlers(){const e=document.getElementById("customer-logo-upload"),t=document.getElementById("customer-logo-clear"),o=document.getElementById("customer-logo-preview");e.onchange=r=>{const s=r.target.files[0];if(s){const n=new FileReader;n.onload=i=>{localStorage.setItem(CUSTOMER_LOGO_KEY,i.target.result),o&&(o.innerHTML=`<img src="${i.target.result}" style="max-height:100px;max-width:180px;width:auto;height:auto;object-fit:contain;">`)},n.readAsDataURL(s)}},t.onclick=()=>{localStorage.removeItem(CUSTOMER_LOGO_KEY),o&&(o.innerHTML=""),e&&(e.value="")}}async populateTipTailDropdowns(){console.log("🔍 Discovering available PDF files...");const t=(await this.detectAvailablePdfFiles()).map(s=>`./assets/${s}`),o=document.getElementById("tip-pdf-select"),r=document.getElementById("tail-pdf-select");o&&r&&(o.innerHTML='<option value="">(None)</option>',r.innerHTML='<option value="">(None)</option>',t.forEach(s=>{const n=s.split("/").pop();o.innerHTML+=`<option value="${s}">${n}</option>`,r.innerHTML+=`<option value="${s}">${n}</option>`}))}async detectAvailablePdfFiles(){try{const o=await fetch("./assets-list");if(o.ok){const r=await o.json();return console.log("✅ Server provided files:",r),r}}catch{console.log("ℹ️ Server endpoint not available, trying assets-list.json...")}try{const o=await fetch("./assets-list.json");if(o.ok){const r=await o.json();return console.log("✅ assets-list.json provided files:",r),r}}catch{console.log("ℹ️ assets-list.json not available, using fallback list...")}const e=["tip-AandD.pdf","tip-Builder.pdf","tip-Merchant.pdf","tip-Volume Merchant.pdf","tail.pdf","tail-generic.pdf"];console.log("🔍 Testing individual file availability...");const t=[];for(const o of e)try{const r=await fetch(`./assets/${o}`,{method:"HEAD"});r.ok?(t.push(o),console.log(`✅ Found: ${o}`)):console.log(`❌ Not found: ${o} (${r.status})`)}catch(r){console.log(`❌ Error checking ${o}:`,r.message)}return console.log(`🎯 Dynamically detected PDF files (${t.length} found):`,t),t}async refreshPdfFileList(){console.log("🔄 Refreshing PDF file list..."),await this.populateTipTailDropdowns(),console.log("✅ PDF file list refreshed")}loadTipTailSelections(){const e=JSON.parse(localStorage.getItem(TIP_TAIL_STORAGE_KEY)||"{}"),t=document.getElementById("tip-pdf-select"),o=document.getElementById("tail-pdf-select"),r=document.getElementById("tip-pdf-upload"),s=document.getElementById("tail-pdf-upload");t&&(e.tipUpload?(t.innerHTML='<option value="">Custom file selected</option>',t.value="",r&&(r.style.fontWeight="bold",r.style.color="#2563eb")):e.tipAsset&&(t.value=e.tipAsset)),o&&(e.tailUpload?(o.innerHTML='<option value="">Custom file selected</option>',o.value="",s&&(s.style.fontWeight="bold",s.style.color="#2563eb")):e.tailAsset&&(o.value=e.tailAsset))}setupTipTailHandlers(){const e=document.getElementById("tip-pdf-select"),t=document.getElementById("tail-pdf-select"),o=document.getElementById("tip-pdf-upload"),r=document.getElementById("tail-pdf-upload"),s=document.getElementById("tip-pdf-clear"),n=document.getElementById("tail-pdf-clear"),i=document.getElementById("tip-pdf-selected"),c=document.getElementById("tail-pdf-selected");e.onchange=()=>{this.saveTipTailSettings({tipAsset:e.value,tipUpload:null,tipUploadName:""}),i&&(i.textContent="")},t.onchange=()=>{this.saveTipTailSettings({tailAsset:t.value,tailUpload:null,tailUploadName:""}),c&&(c.textContent="")},o.onchange=l=>{const d=l.target.files[0];if(d){const u=new FileReader;u.onload=m=>{const g=m.target.result,h=new Uint8Array(g);let f="";for(let y=0;y<h.length;y++)f+=String.fromCharCode(h[y]);const w=btoa(f);this.saveTipTailSettings({tipAsset:"",tipUpload:w,tipUploadName:d.name}),e&&(e.value="",e.innerHTML='<option value="">Custom file selected</option>'),o&&(o.style.fontWeight="bold",o.style.color="#2563eb")},u.readAsArrayBuffer(d)}},r.onchange=l=>{const d=l.target.files[0];if(d){const u=new FileReader;u.onload=m=>{const g=m.target.result,h=new Uint8Array(g);let f="";for(let y=0;y<h.length;y++)f+=String.fromCharCode(h[y]);const w=btoa(f);this.saveTipTailSettings({tailAsset:"",tailUpload:w,tailUploadName:d.name}),t&&(t.value="",t.innerHTML='<option value="">Custom file selected</option>'),r&&(r.style.fontWeight="bold",r.style.color="#2563eb")},u.readAsArrayBuffer(d)}},s.onclick=async()=>{this.saveTipTailSettings({tipAsset:"",tipUpload:null,tipUploadName:""}),e&&(e.value="",e.innerHTML='<option value="">(None)</option>',(await this.detectAvailablePdfFiles()).forEach(d=>{e.innerHTML+=`<option value="assets/${d}">${d}</option>`})),o&&(o.value="",o.style.fontWeight="normal",o.style.color="")},n.onclick=async()=>{this.saveTipTailSettings({tailAsset:"",tailUpload:null,tailUploadName:""}),t&&(t.value="",t.innerHTML='<option value="">(None)</option>',(await this.detectAvailablePdfFiles()).forEach(d=>{t.innerHTML+=`<option value="assets/${d}">${d}</option>`})),r&&(r.value="",r.style.fontWeight="normal",r.style.color="")}}saveTipTailSettings(e){const o={...JSON.parse(localStorage.getItem(TIP_TAIL_STORAGE_KEY)||"{}"),...e};localStorage.setItem(TIP_TAIL_STORAGE_KEY,JSON.stringify(o))}hideSettingsModal(){const e=document.getElementById("settings-modal");e&&(e.style.display="none")}saveSettings(){var n,i,c,l;const e=((n=document.getElementById("staff-name"))==null?void 0:n.value)||"",t=((i=document.getElementById("staff-position"))==null?void 0:i.value)||"",o=((c=document.getElementById("staff-email"))==null?void 0:c.value)||"",r=((l=document.getElementById("staff-telephone"))==null?void 0:l.value)||"",s={staffName:e.trim(),staffPosition:t.trim(),staffEmail:o.trim(),staffPhone:r.trim()};StorageManager.saveUserSettings(s),this.hideSettingsModal(),console.log("Settings saved successfully:",s)}loadSettings(){const e=StorageManager.getUserSettings(),t=document.getElementById("staff-name"),o=document.getElementById("staff-position"),r=document.getElementById("staff-email"),s=document.getElementById("staff-telephone");t&&(t.value=e.staffName||""),o&&(o.value=e.staffPosition||""),r&&(r.value=e.staffEmail||""),s&&(s.value=e.staffPhone||"")}updateRowFromInput(e){const t=e.closest(".grid-row"),o=t.dataset.rowId,r=this.gridRows.find(n=>n.id===o);if(!r)return;let s=!1;if(e.classList.contains("grid-select")&&e.name==="room")if(e.value==="__ADD_NEW_ROOM__"){const n=prompt("Enter new room name:");if(n&&n.trim()){const i=n.trim();if(StorageManager.addCustomRoom(i))r.room=i,this.lastUsedRoom=i,console.log("✅ Added new room:",i),this.updateAllRoomDropdowns(),e.value=i;else{alert("Room name already exists or is invalid"),e.value=r.room||"Blank";return}}else{e.value=r.room||"Blank";return}}else r.room=e.value,this.lastUsedRoom=e.value;else e.classList.contains("grid-input")&&e.name==="quantity"?(r.quantity=Math.max(1,parseInt(e.value)||1),e.value=r.quantity,s=!0):e.classList.contains("grid-input")&&e.name==="price"?(r.price=e.value,s=!0):e.classList.contains("grid-textarea")&&e.name==="notes"&&(r.notes=e.value);s&&this.updateRowTotal(t,r),r.product&&r.storageId&&(StorageManager.updateProductQuantity(r.storageId,r.quantity),StorageManager.updateProductRoom(r.storageId,r.room),StorageManager.updateProductNotes(r.storageId,r.notes),s&&e.name==="price"&&StorageManager.updateProductPrice(r.storageId,r.price),this.updateTotals())}updateRowTotal(e,t){const o=e.querySelector(".grid-total-display");if(o){const r=parseFloat((t.price||"").toString().replace(/,/g,""))||0,s=parseInt(t.quantity)||1,n=r*s;o.textContent=n>0?n.toLocaleString("en-AU",{minimumFractionDigits:2,maximumFractionDigits:2}):""}}loadExistingProducts(){const e=StorageManager.getSelectedProducts();this.gridRows=[],this.nextRowId=1,e.forEach(t=>{var n,i,c,l,d,u,m,g,h,f;const o=`row_${this.nextRowId++}`;let r="";((n=t.product)==null?void 0:n.UserEditedPrice)!==void 0&&((i=t.product)==null?void 0:i.UserEditedPrice)!==null&&((c=t.product)==null?void 0:c.UserEditedPrice)!==""?r=t.product.UserEditedPrice:r=((l=t.product)==null?void 0:l.RRP_EX)||((d=t.product)==null?void 0:d["RRP EX GST"])||((u=t.product)==null?void 0:u.RRP_EX)||((m=t.product)==null?void 0:m.rrpExGst)||((g=t.product)==null?void 0:g.RRP_EXGST)||((h=t.product)==null?void 0:h.RRP_INCGST)||((f=t.product)==null?void 0:f["RRP INC GST"])||"";const s={id:o,product:t.product,room:t.room||"Blank",quantity:t.quantity||1,price:r,notes:t.notes||"",storageId:t.id};this.gridRows.push(s)}),this.renderGrid()}renderGrid(){const e=document.getElementById("grid-body"),t=document.getElementById("product-grid-empty"),o=document.getElementById("product-grid-container");if(!e)return;if(this.gridRows.length===0){o.style.display="none",t.style.display="block";return}t.style.display="none",o.style.display="block";const r=this.groupRowsByRoom(),s=[];Object.entries(r).forEach(([n,i])=>{const c=this.getRoomClass(n),d=!(n==="Blank"),u=`
        <div class="grid-row room-header-row ${c}" 
             data-room-name="${n}"
             ${d?'draggable="true"':""}>
          <div class="col-search room-header-cell" colspan="8">
            <div class="room-header-content">
              ${d?'<span class="room-drag-handle" title="Drag to reorder">⋮⋮</span>':""}
              <span class="room-name">${n}</span>
              <span class="room-count">(${i.length})</span>
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
      `;s.push(u),i.forEach(m=>{s.push(this.renderRowHtml(m))})}),e.innerHTML=s.join("")}renderRowHtml(e){const t=e.product,o=t&&(t.Image_URL||t.imageUrl||t.Image)||"assets/no-image.png",r=t&&(t.Description||t.ProductName||t["Product Name"])||"",s=t&&(t.OrderCode||t.Code)||"",n=s?String(parseInt(s,10)):"",i=e.price||t&&(t.RRP_EX||t["RRP EX GST"]||t.RRP_EX||t.rrpExGst||t.RRP_EXGST||t.RRP_INCGST||t["RRP INC GST"])||"",c=parseFloat((i||"").toString().replace(/,/g,""))||0,l=parseInt(e.quantity)||1,d=c*l,u=d>0?d.toLocaleString("en-AU",{minimumFractionDigits:2,maximumFractionDigits:2}):"";return`
      <div class="grid-row ${this.getRoomRowClass(e.room)}" data-row-id="${e.id}" data-room="${(e.room||"blank").toLowerCase()}">
        <div class="col-image grid-image-cell">
          ${t?`<img src="${o}" alt="Product" class="grid-product-image" onerror="this.src='assets/no-image.png';">`:""}
        </div>
        <div class="col-product grid-product-cell ${t?"has-product":"empty-product"}">
          ${t?`
            <div class="grid-product-display">
              <div class="grid-product-name">
                <strong>${Utils.sanitizeInput(n)}</strong> ${Utils.sanitizeInput(r)}
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
          <input type="text" class="grid-input" name="price" value="${i}" placeholder="0.00">
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
    `}handleSortChange(){const e=document.getElementById("sort-by"),t=e?e.value:"room";this.sortGridRows(t),this.renderGrid()}sortGridRows(e){switch(e){case"room":this.gridRows.sort((t,o)=>{const r=t.room||"Blank",s=o.room||"Blank";return r.localeCompare(s)});break;case"product":this.gridRows.sort((t,o)=>{const r=t.product&&(t.product.Description||t.product.ProductName)||"",s=o.product&&(o.product.Description||o.product.ProductName)||"";return r.localeCompare(s)});break;case"code":this.gridRows.sort((t,o)=>{const r=t.product&&(t.product.OrderCode||t.product.Code)||"",s=o.product&&(o.product.OrderCode||o.product.Code)||"";return r.localeCompare(s)});break;default:this.gridRows.sort((t,o)=>{const r=t.room||"Blank",s=o.room||"Blank";return r.localeCompare(s)});break}}groupRowsByRoom(){const e=document.getElementById("sort-by");if((e?e.value:"room")!=="room")return{"All Products":this.gridRows};const o={};this.gridRows.forEach(i=>{const c=i.room||"Blank";o[c]||(o[c]=[]),o[c].push(i)});const r=Object.keys(o).filter(i=>i!=="Blank"),s=this.getSortedRoomNames(r),n={};return s.forEach(i=>{o[i]&&(n[i]=o[i])}),o.Blank&&(n.Blank=o.Blank),n}getSortedRoomNames(e){const t=this.customRoomOrder.filter(r=>e.includes(r)),o=e.filter(r=>!this.customRoomOrder.includes(r)).sort((r,s)=>r.localeCompare(s));return[...t,...o]}moveRoomInOrder(e,t,o){if(e==="Blank"||t==="Blank"||e===t)return;const r={};this.gridRows.forEach(l=>{const d=l.room||"Blank";r[d]||(r[d]=[])});const s=Object.keys(r).filter(l=>l!=="Blank"),i=this.getSortedRoomNames(s).filter(l=>l!==e);let c=i.indexOf(t);c===-1&&(c=i.length),o||c++,i.splice(c,0,e),this.customRoomOrder=i,this.saveCustomRoomOrder()}getRoomClass(e){return{Blank:"blank-room","Bath 1":"bath-room","Bath 2":"bath-room","Bath 3":"bath-room",Ensuite:"bath-room",Powder:"bath-room",Kitchen:"kitchen-room",Laundry:"laundry-room",Alfresco:"alfresco-room",Butlers:"butlers-room",Standard:"standard-room",Upgrade:"upgrade-room",Other:"other-room","All Products":"all-products"}[e]||""}getRoomRowClass(e){const t=(e||"Blank").toLowerCase();return t.includes("bath")||t.includes("ensuite")||t.includes("powder")?"bath-room-row":t.includes("kitchen")?"kitchen-room-row":t.includes("laundry")?"laundry-room-row":t.includes("alfresco")?"alfresco-room-row":t.includes("butler")?"butlers-room-row":""}getRoomOptions(e){let t=`<option value="Blank" ${e==="Blank"?"selected":""}>Blank</option>`;return config.get("rooms.predefined",[]).forEach(s=>{t+=`<option value="${s.name}" ${e===s.name?"selected":""}>${s.name}</option>`}),StorageManager.getCustomRooms().forEach(s=>{t+=`<option value="${s.name}" ${e===s.name?"selected":""}>${s.name}</option>`}),t+='<option value="__ADD_NEW_ROOM__" style="font-weight: bold; color: #2563eb;">➕ Add new room...</option>',t}updateAllRoomDropdowns(){document.querySelectorAll('.grid-select[name="room"]').forEach(o=>{o.value;const r=this.gridRows.find(s=>s.id===o.closest(".grid-row").dataset.rowId);r&&(o.innerHTML=this.getRoomOptions(r.room))});const t=document.getElementById("bulk-room-select");t&&(t.innerHTML=this.getRoomOptions("Blank"))}ensureAtLeastOneEmptyRow(){this.gridRows.length===0&&this.addEmptyRow()}updateTotals(){const e=document.getElementById("total-items"),t=document.getElementById("total-rooms"),o=document.getElementById("total-value");let r=0,s=0;const n=new Set;this.gridRows.forEach(i=>{if(i.product){r+=i.quantity;const c=parseFloat(i.price)||0;s+=c*i.quantity,i.room&&i.room!=="Blank"&&i.room.trim()!==""&&n.add(i.room)}}),e&&(e.textContent=r),t&&(t.textContent=n.size),o&&(o.textContent=s>0?`$${s.toLocaleString("en-AU",{minimumFractionDigits:2,maximumFractionDigits:2})}`:"$0.00")}clearAll(e=!0){StorageManager.clearAllSelections(),localStorage.removeItem("pdfWizardSettings"),e&&(localStorage.removeItem("pdfFormSettings"),localStorage.removeItem("customerDetails"),this.currentSelectionId=null,this.currentSelectionName="New Selection",this.hasUnsavedChanges=!1,this.customRoomOrder=[],this.saveCustomRoomOrder()),this.gridRows=[],this.nextRowId=1,this.renderGrid(),this.updateTotals(),this.ensureAtLeastOneEmptyRow(),this.updateContextHeader()}showImportModal(){const e=document.getElementById("file-import-modal");e&&(e.style.display="flex")}async showDownloadModal(){authUI.requireAuth(async()=>{try{await pdfWizard.open({onComplete:(e,t)=>{console.log("📄 Wizard completed, generating PDF"),window.showPdfFormScreen?window.showPdfFormScreen(e,t):window.dispatchEvent(new CustomEvent("generatePdf",{detail:{...e,tipTailSettings:t}}))},onCancel:()=>{console.log("📄 Wizard cancelled")}})}catch(e){console.error("Failed to open PDF wizard, falling back to legacy modal:",e),this.showLegacyDownloadModal()}},"create PDF")}async showLegacyDownloadModal(){const e=document.getElementById("pdf-email-modal");if(e){e.style.display="flex";const t=document.getElementById("pdf-email-form");if(t){const o=Utils.getStorageItem("pdfFormSettings",{});t["user-name"]&&(t["user-name"].value=o.name||""),t["user-project"]&&(t["user-project"].value=o.project||""),t["user-address"]&&(t["user-address"].value=o.address||""),t["user-email"]&&(t["user-email"].value=o.email||""),t["user-telephone"]&&(t["user-telephone"].value=o.telephone||""),t["exclude-prices"]&&(t["exclude-prices"].checked=!!o.excludePrices),t["exclude-qty"]&&(t["exclude-qty"].checked=!!o.excludeQty),t["exclude-long-description"]&&(t["exclude-long-description"].checked=!!o.excludeLongDescription),t["include-gst"]&&(t["include-gst"].checked=!!o.includeGst)}this.loadCustomerLogoPreview(),this.setupCustomerLogoHandlers(),await this.populateTipTailDropdowns(),this.loadTipTailSelections(),this.setupTipTailHandlers()}}refreshUI(){this.init()}showSaveDialog(){authUI.requireAuth(e=>{this._showSaveDialogInternal(e)})}_showSaveDialogInternal(e){const t=Utils.getStorageItem("pdfFormSettings",{}),o=!!this.currentSelectionId,r=t.name?`${t.name} - ${new Date().toLocaleDateString("en-AU")}`:this.currentSelectionName||`Selection - ${new Date().toLocaleDateString("en-AU")}`,s=`
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
    `;this.injectSaveDialogStyles(),document.body.insertAdjacentHTML("beforeend",s);const n=document.getElementById("save-dialog"),i=document.getElementById("save-doc-name"),c=document.getElementById("save-notes");i==null||i.focus(),i==null||i.select(),n.querySelectorAll("button[data-action]").forEach(d=>{d.addEventListener("click",async()=>{const u=d.dataset.action;if(u==="cancel"){n.remove();return}const m=(i==null?void 0:i.value.trim())||"Untitled Selection",g=(c==null?void 0:c.value.trim())||"";this.currentSelectionName=m;const h={...this.prepareSelectionData(),documentName:m,notes:g};n.querySelectorAll("button").forEach(f=>f.disabled=!0),d.textContent="Saving...";try{let f;u==="save-update"?f=await presentationRecorder.updateSelection(this.currentSelectionId,h):(f=await presentationRecorder.saveSelection(h),f.success&&f.id&&(this.currentSelectionId=f.id)),n.remove(),f.success?(this.hasUnsavedChanges=!1,this.lastSaveTime=new Date,this.updateContextHeader(),toast.success(u==="save-update"?"Selection updated!":"Selection saved!")):toast.error("Failed to save: "+(f.error||"Unknown error"))}catch(f){n.remove(),toast.error("Failed to save: "+f.message)}})}),n.addEventListener("click",d=>{d.target===n&&n.remove()});const l=d=>{d.key==="Escape"&&(n.remove(),document.removeEventListener("keydown",l))};document.addEventListener("keydown",l)}injectSaveDialogStyles(){if(document.getElementById("save-dialog-styles"))return;document.head.insertAdjacentHTML("beforeend",`
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
    `)}showLoadPicker(){authUI.requireAuth(e=>{this._showLoadPickerInternal(e)})}_showLoadPickerInternal(e){presentationPicker.show(t=>{console.log("✅ Selection loaded:",t),this.currentSelectionId=t.id||null,this.currentSelectionName=t.documentName||t.customerName||"Loaded Selection",this.hasUnsavedChanges=!1,this.loadExistingProducts(),this.updateTotals(),this.updateContextHeader(),t.roomOrder&&Array.isArray(t.roomOrder)&&(this.customRoomOrder=t.roomOrder,this.saveCustomRoomOrder()),toast.success(`Loaded ${t.productCount||this.gridRows.length} products`)})}escapeHtml(e){const t=document.createElement("div");return t.textContent=e||"",t.innerHTML}}const ONBOARDING_KEY="onboardingCompleted",ONBOARDING_VERSION=2;class Onboarding{constructor(){this.currentStep=0,this.overlay=null}shouldShow(){const e=localStorage.getItem(ONBOARDING_KEY);if(!e)return!0;try{return JSON.parse(e).version<ONBOARDING_VERSION}catch{return!0}}show(){this.shouldShow()&&this.showForced()}showForced(){const e=document.getElementById("onboarding-overlay");e&&e.remove(),this.currentStep=0,this.createOverlay(),this.renderStep()}createOverlay(){var e,t;this.overlay=document.createElement("div"),this.overlay.id="onboarding-overlay",this.overlay.innerHTML=`
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
    `,document.head.appendChild(e)}getSteps(){return[{icon:"logo",title:"Welcome to Product Presenter",text:"Create beautiful PDF presentations of Seima products for your clients in minutes.",features:[]},{icon:"📦",title:"Add Your Products",text:"There are three ways to get started:",features:[{icon:"📁",title:"Import a File",desc:"Upload CSV or Excel files with product codes"},{icon:"📂",title:"Load a Selection",desc:"Continue from a previous saved selection"},{icon:"🔍",title:"Search Products",desc:"Search and add products one by one"}]},{icon:"🏠",title:"Organise by Room",text:"Group products by room or area. Drag to reorder, and easily manage your selection.",features:[{icon:"🎨",title:"Colour-coded",desc:"Rooms are visually distinct for quick reference"},{icon:"📊",title:"Sort Options",desc:"Sort by Room/Group, Product Code, or Product Name"},{icon:"💾",title:"Auto-saves",desc:"Your work is automatically preserved"}]},{icon:"📄",title:"Create Your PDF",text:'Click "Create PDF" to customise and generate a professional presentation with your branding.',features:[{icon:"💰",title:"Pricing Options",desc:"Show RRP, add GST, or hide pricing entirely"},{icon:"📝",title:"Content Control",desc:"Include descriptions and custom notes"},{icon:"📑",title:"Cover Pages",desc:"Add branded cover and appendix pages"}]}]}renderStep(){const e=this.getSteps(),t=e[this.currentStep],o=document.getElementById("onboarding-content"),r=document.getElementById("onboarding-dots"),s=document.getElementById("onboarding-next");if(!o||!r)return;let n="";t.features.length>0&&(n=t.features.map(c=>`
        <div class="onboarding-feature">
          <span class="onboarding-feature-icon">${c.icon}</span>
          <div class="onboarding-feature-content">
            <div class="onboarding-feature-title">${c.title}</div>
            <div class="onboarding-feature-desc">${c.desc}</div>
          </div>
        </div>
      `).join(""));const i=t.icon==="logo"?'<img src="assets/seima-logo.png" alt="Seima" class="onboarding-logo">':`<div class="onboarding-icon">${t.icon}</div>`;o.innerHTML=`
      ${i}
      <h2 class="onboarding-title">${t.title}</h2>
      <p class="onboarding-text">${t.text}</p>
      ${n}
    `,r.innerHTML=e.map((c,l)=>`<div class="onboarding-dot ${l===this.currentStep?"active":""}"></div>`).join(""),s&&(s.textContent=this.currentStep===e.length-1?"Get Started":"Next")}nextStep(){const e=this.getSteps();this.currentStep<e.length-1?(this.currentStep++,this.renderStep()):this.complete()}complete(){localStorage.setItem(ONBOARDING_KEY,JSON.stringify({version:ONBOARDING_VERSION,completedAt:new Date().toISOString()})),this.overlay&&(this.overlay.style.animation="fadeIn 0.2s ease reverse",setTimeout(()=>{this.overlay.remove(),this.overlay=null},200))}reset(){localStorage.removeItem(ONBOARDING_KEY)}}const onboarding=new Onboarding;class SeimaScanner{constructor(){this.navigationManager=null,this.fileImportManager=new FileImportManager,this.productGridManager=new ProductGridManager,this.isInitialized=!1,errorHandler.log("SeimaScanner application starting",LogLevel.INFO)}async init(){var e;try{errorHandler.log("Initializing application modules",LogLevel.INFO),authService.configure({googleSheetsUrl:(e=CONFIG$1.PRESENTATION_RECORDING)==null?void 0:e.GOOGLE_SHEETS_URL,email:CONFIG$1.EMAIL}),authUI.configure({logoSrc:"assets/seima-logo.png",brandName:"Seima",appName:"Product Presenter"});const t=browserCompatibility.getCompatibilityReport();errorHandler.log(`Browser compatibility: ${t.score}% (${t.browserName})`,LogLevel.INFO),browserCompatibility.shouldShowCompatibilityWarning()&&this.showCompatibilityWarning(),this.navigationManager=new NavigationManager,await this.navigationManager.init(),this.fileImportManager.init(),this.setupGlobalEventListeners(),this.productGridManager.init(),window.navigationManager=this.navigationManager,window.productGridManager=this.productGridManager,window.browserCompatibility=browserCompatibility,window.downloadWithFallback=downloadWithFallback,window.showPdfFormScreen=showPdfFormScreen$1,this.isInitialized=!0,errorHandler.log("Seima Scanner initialized successfully",LogLevel.INFO);const o=document.querySelector(".grid-container");return o&&o.classList.add("ready"),setTimeout(()=>{onboarding.show()},500),!0}catch(t){return errorHandler.handleError({message:"Failed to initialize application",error:t,category:ErrorCategory.UI,level:LogLevel.CRITICAL,context:"app-init"}),!1}}showCompatibilityWarning(){const e=browserCompatibility.getCompatibilityReport(),t=e.recommendations;if(t.length===0)return;const o=t.filter(n=>n.type==="critical"),r=e.score<config.get("compatibility.minCompatibilityScore",70);if(o.length===0&&!r)return;const s=document.createElement("div");s.style.cssText=`
      position: fixed; top: 0; left: 0; right: 0; z-index: 9998;
      background: linear-gradient(135deg, #fef3c7 0%, #fed7aa 100%);
      border-bottom: 2px solid #f59e0b; padding: 12px 16px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
      font-size: 14px; line-height: 1.4;
    `,s.innerHTML=`
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
    `,document.body.insertBefore(s,document.body.firstChild)}setupGlobalEventListeners(){window.addEventListener("generatePdf",e=>{const{tipTailSettings:t,...o}=e.detail;ensurePdfSpinner(),showPdfFormScreen$1(o,t||null)}),window.addEventListener("beforeunload",()=>{}),browserCompatibility.features.memoryAPI&&setInterval(()=>{const e=browserCompatibility.memoryInfo;e.memoryPressure==="high"&&console.warn("High memory usage detected:",e)},6e4)}getSelectedProducts(){return StorageManager.getSelectedProducts()}clearSelection(){return StorageManager.clearAllSelections()}addProduct(e,t,o,r){return StorageManager.addProductToSelection(e,t,o,r)}updateSelectionCount(){this.navigationManager&&this.navigationManager.updateSelectionCount()}showError(e){alert(e)}}document.addEventListener("DOMContentLoaded",()=>{window.seimaScanner=new SeimaScanner,window.seimaScanner.init()});window.addEventListener("DOMContentLoaded",()=>{fetch("./version.txt").then(a=>a.text()).then(a=>{const e=a.trim().split(`
`);if(e.length>0){const o=e[0].split(" - ")[0].trim(),r=document.getElementById("app-version");r&&(r.textContent=`Ver: ${o}`,r.style.cursor="pointer",r.addEventListener("click",showChangelog))}}),setupHelpButton(),setupUserMenu()});function setupHelpButton(){const a=document.getElementById("help-btn");a&&a.addEventListener("click",()=>{showUserGuide()});const e=document.getElementById("quick-start-btn");e&&e.addEventListener("click",()=>{onboarding.showForced()})}function setupUserMenu(){const a=document.getElementById("user-menu-container"),e=document.getElementById("user-menu-trigger"),t=document.getElementById("user-menu-dropdown"),o=document.getElementById("sign-in-btn"),r=document.getElementById("user-avatar"),s=document.getElementById("user-name-display");function n(l){var d,u,m,g;if(l){a&&(a.style.display="block"),o&&(o.style.display="none");const h=i(l.name);r&&(r.textContent=h),s&&(s.textContent=((d=l.name)==null?void 0:d.split(" ")[0])||"User"),t&&(t.innerHTML=`
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
        `,(u=document.getElementById("menu-profile"))==null||u.addEventListener("click",()=>{t.style.display="none",authUI.showEditProfile(f=>{StorageManager.clearUserSettings(),n(f)})}),(m=document.getElementById("menu-password"))==null||m.addEventListener("click",()=>{t.style.display="none",authUI.showChangePassword()}),(g=document.getElementById("menu-logout"))==null||g.addEventListener("click",()=>{t.style.display="none",StorageManager.clearUserSettings(),authService.logout(),n(null)}))}else a&&(a.style.display="none"),o&&(o.style.display="block")}function i(l){if(!l)return"?";const d=l.trim().split(" ");return d.length>=2?(d[0][0]+d[d.length-1][0]).toUpperCase():l.substring(0,2).toUpperCase()}function c(l){const d=document.createElement("div");return d.textContent=l||"",d.innerHTML}e&&t&&(e.addEventListener("click",l=>{l.stopPropagation();const d=t.style.display!=="none";t.style.display=d?"none":"block"}),document.addEventListener("click",l=>{a!=null&&a.contains(l.target)||(t.style.display="none")})),o&&o.addEventListener("click",()=>{authUI.showLogin(l=>{n(l)})}),authService.onAuthChange=n,n(authService.getCurrentUser())}function showUserGuide(){const a=document.getElementById("user-guide-modal"),e=document.getElementById("user-guide-content");if(!a||!e)return;e.innerHTML=getUserGuideContent(),a.style.display="flex";const t=document.getElementById("user-guide-close");t&&(t.onclick=()=>{a.style.display="none"}),a.onclick=r=>{r.target===a&&(a.style.display="none")};const o=r=>{r.key==="Escape"&&(a.style.display="none",document.removeEventListener("keydown",o))};document.addEventListener("keydown",o)}function getUserGuideContent(){return`
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
  `}async function showChangelog(){try{const a=document.getElementById("changelog-modal"),e=document.getElementById("changelog-content"),r=(await(await fetch("./version.txt")).text()).trim().split(`
`);if(r.length===0){e.innerHTML="<p>No changelog available.</p>",a.style.display="flex";return}let s="";r.forEach(n=>{if(n.trim()){const i=n.indexOf(" - ");if(i>0){const c=n.substring(0,i).trim(),l=n.substring(i+3).trim();s+=`
            <div style="margin-bottom: 30px; border-bottom: 1px solid #eee; padding-bottom: 20px;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                <h4 style="margin: 0; color: #a09484;">v${c}</h4>
              </div>
              <p style="margin: 10px 0; color: #555; line-height: 1.5;">${l}</p>
            </div>
          `}}}),e.innerHTML=s||"<p>No changelog available.</p>",a.style.display="flex"}catch(a){console.error("Error loading changelog:",a),document.getElementById("changelog-content").innerHTML='<p style="color: #999;">Error loading changelog.</p>',document.getElementById("changelog-modal").style.display="flex"}}document.addEventListener("DOMContentLoaded",()=>{const a=document.getElementById("changelog-close");a&&a.addEventListener("click",()=>{document.getElementById("changelog-modal").style.display="none"})});document.addEventListener("click",a=>{const e=document.getElementById("changelog-modal");a.target===e&&(e.style.display="none")});
