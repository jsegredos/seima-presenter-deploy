const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-BnLAUsuI.js","assets/auth-ui-BChQ8TGM.js","assets/product-search-fHbjsaUa.js","assets/pdf-layouts-Cp5_HuWm.js"])))=>i.map(i=>d[i]);
import"./modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{_ as z}from"./preload-helper-D7HrI6pR.js";import{c as N,e as J,L as Q,E as ke,d as D}from"./data-layer--bhGW-rR.js";import{U as x,a as V,b as Y,c as Se}from"./auth-ui-BChQ8TGM.js";import{C as H}from"./config-EQY5FyP5.js";import{l as xt,g as ot,p as ut,d as Et,P as st,c as Pt,h as Ct,a as kt,b as Rt,e as It,f as _t,i as Tt,j as Lt,k as Dt,m as $t}from"./pdf-layouts-Cp5_HuWm.js";import{c as T}from"./competitor-service-DLxrVEYl.js";import{l as Bt}from"./product-synonyms-CeNdtqLO.js";import"./product-search-fHbjsaUa.js";import"./index-DwnyWBFG.js";class E{static getCustomRooms(){return x.getStorageItem(N.get("storage.keys.customRooms"),[])}static setCustomRooms(e){return x.setStorageItem(N.get("storage.keys.customRooms"),e)}static addCustomRoom(e){const t=this.getCustomRooms(),o=x.sanitizeInput(e,50);return!o||[...N.get("rooms.predefined",[]).map(i=>i.name),...t.map(i=>i.name)].includes(o)?!1:(t.push({name:o}),this.setCustomRooms(t))}static removeCustomRoom(e){const t=this.getCustomRooms();return e>=0&&e<t.length?(t.splice(e,1),this.setCustomRooms(t)):!1}static getSelectedProducts(){return x.getStorageItem(N.get("storage.keys.selectedProducts"),[])}static setSelectedProducts(e){return x.setStorageItem(N.get("storage.keys.selectedProducts"),e)}static _freeStorageSpace(){const e=["fredChatHistory","fredChatMessages","fredFeedback","fredQuestionLog","landscape_canvas_groups"];let t=0;for(const o of e)try{const s=localStorage.getItem(o);s&&(t+=s.length*2,localStorage.removeItem(o))}catch{}return console.log(`Freed ~${Math.round(t/1024)}KB from localStorage cache`),t}static _slimProduct(e){if(!e)return e;const t={OrderCode:e.OrderCode||e.orderCode||e.Code||"",Description:e.Description||e.ProductName||e["Product Name"]||e.description||"",LongDescription:e.LongDescription||e["Long Description"]||e.longDescription||"",RRP_EX:e.RRP_EX||e["RRP EX GST"]||e.RRP_EXGST||e.rrpExGst||e["PL1 - RRP EX GST"]||"",RRP_INCGST:e.RRP_INCGST||e["RRP INC GST"]||e.rrpIncGst||"",Image_URL:e.Image_URL||e.imageUrl||e.Image||"",Website_URL:e.Website_URL||e.websiteUrl||"",Diagram_URL:e.Diagram_URL||e.diagramUrl||"",Datasheet_URL:e.Datasheet_URL||e.datasheetUrl||"",BARCODE:e.BARCODE||"",Range:e.Range||"",Group:e.Group||"",SubGroup:e.SubGroup||e.Subgroup||e["Sub Group"]||"",Finish:e.Finish||"",Colour:e.Colour||"",WELS_STAR:e.WELS_STAR||e["WELS STAR"]||e["WELS Star"]||e.WelsStar||""};return e.UserEditedPrice!==void 0&&e.UserEditedPrice!==null&&(t.UserEditedPrice=e.UserEditedPrice),e._placeholder&&(t._placeholder=!0),t}static addProductToSelection(e,{notes:t="",room:o="",quantity:s=1}={}){try{const n=this.getSelectedProducts(),i=N.get("ui.annotationMaxLength",140),r={id:x.generateId(),product:this._slimProduct(e),notes:x.sanitizeInput(t,i),room:x.sanitizeInput(o,50),quantity:Math.max(1,parseInt(s)||1),timestamp:Date.now()};n.push(r);let a=this.setSelectedProducts(n);return a||this._freeStorageSpace()>0&&(a=this.setSelectedProducts(n)),a?(J.log(`Product added to selection: ${e.OrderCode}`,Q.DEBUG),r.id):(J.handleError({message:"Failed to save product to selection — storage is full",category:ke.STORAGE,level:Q.WARN}),!1)}catch(n){return J.handleError({message:"Error adding product to selection",error:n,category:ke.STORAGE,level:Q.ERROR}),!1}}static addProductsBatch(e){if(!e||e.length===0)return!0;try{const t=this.getSelectedProducts(),o=N.get("ui.annotationMaxLength",140);for(const{product:n,notes:i,room:r,quantity:a}of e)t.push({id:x.generateId(),product:this._slimProduct(n),notes:x.sanitizeInput(i||"",o),room:x.sanitizeInput(r||"",50),quantity:Math.max(1,parseInt(a)||1),timestamp:Date.now()});let s=this.setSelectedProducts(t);if(!s){const n=this._freeStorageSpace();n>0&&(J.log(`Retrying batch save after freeing ~${Math.round(n/1024)}KB`,Q.DEBUG),s=this.setSelectedProducts(t))}return s?J.log(`Batch added ${e.length} products to selection`,Q.DEBUG):J.handleError({message:`Batch save failed for ${e.length} products — storage is full`,category:ke.STORAGE,level:Q.WARN}),s}catch(t){return J.handleError({message:`Error batch adding ${e.length} products`,error:t,category:ke.STORAGE,level:Q.ERROR}),!1}}static updateProductQuantity(e,t){const o=this.getSelectedProducts(),s=o.findIndex(n=>n.id===e);return s!==-1?(o[s].quantity=Math.max(1,parseInt(t)||1),this.setSelectedProducts(o)):!1}static updateProductRoom(e,t){const o=this.getSelectedProducts(),s=o.findIndex(n=>n.id===e);return s!==-1?(o[s].room=x.sanitizeInput(t,50),this.setSelectedProducts(o)):!1}static updateProductNotes(e,t){const o=this.getSelectedProducts(),s=o.findIndex(n=>n.id===e);return s!==-1?(o[s].notes=x.sanitizeInput(t,N.get("ui.annotationMaxLength",140)),this.setSelectedProducts(o)):!1}static updateProductPrice(e,t){const o=this.getSelectedProducts(),s=o.findIndex(n=>n.id===e);return s!==-1?(o[s].product.UserEditedPrice=t,this.setSelectedProducts(o)):!1}static removeProductFromSelection(e){const o=this.getSelectedProducts().filter(s=>s.id!==e);return this.setSelectedProducts(o)}static clearAllSelections(){return this.setSelectedProducts([])&&this.setCustomRooms([])}static getSelectionCount(){return this.getSelectedProducts().length}static getUserSettings(){return x.getStorageItem(N.get("storage.keys.userPreferences"),{})}static saveUserSettings(e){return x.setStorageItem(N.get("storage.keys.userPreferences"),e)}static clearUserSettings(){try{return localStorage.removeItem(N.get("storage.keys.userPreferences")),!0}catch(e){return console.error("Error clearing user settings:",e),!1}}}class At{constructor(){this.doc=null,this.pageWidth=210,this.pageHeight=297,this.margins={left:10,right:10,top:15,bottom:15},this.currentY=this.margins.top}async init(){try{return window.jsPDF||await this.loadJsPDF(),console.log("✅ PDF Core initialized"),!0}catch(e){return console.error("❌ Failed to initialize PDF Core:",e),!1}}async loadJsPDF(){return new Promise((e,t)=>{if(window.jsPDF){e();return}const o=document.createElement("script");o.src="https://cdn.jsdelivr.net/npm/jspdf@2.5.1/dist/jspdf.umd.min.js",o.onload=e,o.onerror=t,document.head.appendChild(o)})}createDocument(){return this.doc=new window.jsPDF({orientation:"portrait",unit:"mm",format:"a4"}),this.currentY=this.margins.top,this.doc}addNewPage(){this.doc.addPage(),this.currentY=this.margins.top}checkPageSpace(e){const t=this.pageHeight-this.margins.bottom;return this.currentY+e>t?(this.addNewPage(),!0):!1}addText(e,t,o,s={}){const{fontSize:n=10,fontStyle:i="normal",align:r="left",maxWidth:a=null}=s;if(this.doc.setFontSize(n),this.doc.setFont("helvetica",i),a){const c=this.doc.splitTextToSize(e,a);return this.doc.text(c,t,o,{align:r}),c.length*(n*.35)}else return this.doc.text(e,t,o,{align:r}),n*.35}addLine(e,t,o,s,n="#000000",i=.1){this.doc.setDrawColor(n),this.doc.setLineWidth(i),this.doc.line(e,t,o,s)}addRect(e,t,o,s,n="S",i="#000000"){this.doc.setDrawColor(i),this.doc.rect(e,t,o,s,n)}async addImage(e,t,o,s,n){return new Promise(i=>{if(!e||e==="N/A"){i({width:0,height:0});return}const r=new Image;r.crossOrigin="anonymous",r.onload=()=>{try{const a=document.createElement("canvas"),c=a.getContext("2d"),l=r.width/r.height;let d=s,u=s/l;u>n&&(u=n,d=n*l),a.width=d,a.height=u,c.drawImage(r,0,0,d,u);const m=this.detectTechnicalImage(r),h=m?.8:.7,p=m?"PNG":"JPEG",y=a.toDataURL(`image/${p.toLowerCase()}`,h);this.doc.addImage(y,p,t,o,d,u,void 0,"FAST"),i({width:d,height:u})}catch(a){console.warn("Failed to add image:",a),i({width:0,height:0})}},r.onerror=()=>{console.warn("Failed to load image:",e),i({width:0,height:0})},r.src=e})}getContentWidth(){return this.pageWidth-this.margins.left-this.margins.right}getContentHeight(){return this.pageHeight-this.margins.top-this.margins.bottom}detectTechnicalImage(e){const t=document.createElement("canvas"),o=t.getContext("2d"),s=Math.min(50,Math.min(e.width,e.height));t.width=s,t.height=s,o.drawImage(e,0,0,s,s);const i=o.getImageData(0,0,s,s).data,r=new Set;let a=0;for(let u=0;u<i.length;u+=4){const m=i[u],h=i[u+1],p=i[u+2];if(r.add(`${m},${h},${p}`),u>0&&u<i.length-4){const y=i[u-4],f=i[u-3],v=i[u-2];Math.abs(m-y)+Math.abs(h-f)+Math.abs(p-v)>50&&a++}}const c=r.size<500,l=a>s*s*.1,d=e.width<800&&e.height<800;return c||l||d}moveY(e){this.currentY+=e}getCurrentY(){return this.currentY}setCurrentY(e){this.currentY=e}getRemainingPageHeight(){return this.pageHeight-this.margins.bottom-this.currentY}isValidUrl(e){if(!e||typeof e!="string")return!1;try{return new URL(e),!0}catch{return!1}}formatPrice(e){if(!e||e==="N/A")return"";const t=parseFloat(e.toString().replace(/[^0-9.]/g,""));return t>0?`$${t.toFixed(2)}`:""}formatText(e,t=50){return e?e.length>t?`${e.substring(0,t-3)}...`:e:""}async finalize(){if(!this.doc)throw new Error("No document created");return this.doc.output("blob")}getDocument(){return this.doc}}const Je=new At;class Ft{constructor(e){this.core=e||Je}async addHeader(e){this.core.getDocument();const t=this.core.pageWidth,o=this.core.margins;this.core.addText("SEIMA",o.left,25,{fontSize:20,fontStyle:"bold"}),this.core.addText("Product Selection Report",t/2,25,{fontSize:16,fontStyle:"bold",align:"center"});const s=new Date().toLocaleDateString("en-AU");this.core.addText(s,t-o.right,25,{fontSize:10,align:"right"}),this.core.addLine(o.left,30,t-o.right,30,"#cccccc"),this.core.setCurrentY(35)}async addCustomerInfo(e){this.core.getDocument();const t=this.core.margins,o=this.core.getContentWidth();this.core.addText("Customer Information",t.left,this.core.getCurrentY(),{fontSize:14,fontStyle:"bold"}),this.core.moveY(8);const s=t.left,n=t.left+o/2;let i=this.core.getCurrentY();if(e.name&&e.name.trim()&&(this.core.addText(`Customer: ${e.name.trim()}`,s,i,{fontSize:10}),i+=5),e.project&&e.project.trim()&&(this.core.addText(`Project: ${e.project.trim()}`,s,i,{fontSize:10}),i+=5),i=this.core.getCurrentY(),e.email&&e.email.trim()&&(this.core.addText(`Email: ${e.email.trim()}`,n,i,{fontSize:10}),i+=5),e.phone&&e.phone.trim()&&(this.core.addText(`Phone: ${e.phone.trim()}`,n,i,{fontSize:10}),i+=5),e.address&&e.address.trim()){this.core.setCurrentY(i+2);const r=this.core.addText(`Address: ${e.address.trim()}`,s,this.core.getCurrentY(),{fontSize:10,maxWidth:o-20});this.core.moveY(r)}this.core.moveY(10),this.core.addLine(t.left,this.core.getCurrentY(),this.core.pageWidth-t.right,this.core.getCurrentY(),"#eeeeee"),this.core.moveY(5)}async addSelectionSummary(e){const t=this.core.margins;this.core.addText("Selection Summary",t.left,this.core.getCurrentY(),{fontSize:14,fontStyle:"bold"}),this.core.moveY(8);const o=e.length,n=new Set(e.map(r=>r.room).filter(Boolean)).size||1;let i=0;e.forEach(r=>{var l;const a=parseFloat((((l=r.product)==null?void 0:l.RRP_EX)||"0").toString().replace(/[^0-9.]/g,""))||0,c=r.quantity||1;i+=a*c}),this.core.addText(`Total Products: ${o}`,t.left,this.core.getCurrentY(),{fontSize:10}),this.core.moveY(5),this.core.addText(`Total Rooms: ${n}`,t.left,this.core.getCurrentY(),{fontSize:10}),this.core.moveY(5),i>0&&(this.core.addText(`Estimated Total Value: $${i.toFixed(2)} (inc GST)`,t.left,this.core.getCurrentY(),{fontSize:10,fontStyle:"bold"}),this.core.moveY(5)),this.core.moveY(10),this.core.addLine(t.left,this.core.getCurrentY(),this.core.pageWidth-t.right,this.core.getCurrentY(),"#eeeeee"),this.core.moveY(10)}async addProductTableHeader(){this.core.getDocument();const e=this.core.margins,t=this.core.getContentWidth();this.core.addText("Product Details",e.left,this.core.getCurrentY(),{fontSize:14,fontStyle:"bold"}),this.core.moveY(8);const o=this.core.getCurrentY(),s={image:25,code:35,description:70,price:25,qty:15,room:30};let n=e.left;return this.core.addRect(e.left,o-2,t,8,"F","#f5f5f5"),this.core.addText("Image",n+2,o+3,{fontSize:9,fontStyle:"bold"}),n+=s.image,this.core.addText("Code",n+2,o+3,{fontSize:9,fontStyle:"bold"}),n+=s.code,this.core.addText("Description",n+2,o+3,{fontSize:9,fontStyle:"bold"}),n+=s.description,this.core.addText("Price",n+2,o+3,{fontSize:9,fontStyle:"bold"}),n+=s.price,this.core.addText("Qty",n+2,o+3,{fontSize:9,fontStyle:"bold"}),n+=s.qty,this.core.addText("Room",n+2,o+3,{fontSize:9,fontStyle:"bold"}),this.core.moveY(10),s}async addProductRow(e,t,o=!1,s=null){var h,p,y,f,v,w,b;this.core.getDocument();const n=this.core.margins,i=20;this.core.checkPageSpace(i+5);const r=this.core.getCurrentY();let a=n.left;if(o&&this.core.addRect(n.left,r-1,this.core.getContentWidth(),i+2,"F","#fafafa"),(h=e.product)!=null&&h.Image_URL&&this.core.isValidUrl(e.product.Image_URL))try{await this.core.addImage(e.product.Image_URL,a+2,r,20,15)}catch(S){console.warn("Failed to add product image:",S)}a+=t.image;const c=this.core.formatText(((p=e.product)==null?void 0:p.OrderCode)||"",15);this.core.addText(c,a+2,r+5,{fontSize:8}),a+=t.code;const l=this.core.formatText(((y=e.product)==null?void 0:y.Description)||"",45);this.core.addText(l,a+2,r+5,{fontSize:8,maxWidth:t.description-4}),a+=t.description;let d=0;((f=e.product)==null?void 0:f.UserEditedPrice)!==void 0&&((v=e.product)==null?void 0:v.UserEditedPrice)!==null&&((w=e.product)==null?void 0:w.UserEditedPrice)!==""?d=parseFloat(e.product.UserEditedPrice.toString().replace(/,/g,""))||0:d=parseFloat((((b=e.product)==null?void 0:b.RRP_EX)||"0").toString().replace(/,/g,""))||0,d>0&&(s!=null&&s.includeGst)&&(d=d*1.1);const u=d>=0?`$${d.toLocaleString("en-AU",{minimumFractionDigits:2,maximumFractionDigits:2})}`:"";this.core.addText(u,a+2,r+5,{fontSize:8}),a+=t.price,this.core.addText((e.quantity||1).toString(),a+2,r+5,{fontSize:8}),a+=t.qty;const m=this.core.formatText(e.room||"",15);if(this.core.addText(m,a+2,r+5,{fontSize:8}),e.notes){const S=r+10;this.core.addText(`Notes: ${this.core.formatText(e.notes,60)}`,n.left+2,S,{fontSize:7,fontStyle:"italic"})}this.core.moveY(i)}async addFooter(e){const t=this.core.getDocument(),o=this.core.margins,s=this.core.pageWidth,i=this.core.pageHeight-20;this.core.addLine(o.left,i,s-o.right,i,"#cccccc"),this.core.addText("Generated by Seima Product Scanner",o.left,i+5,{fontSize:8,fontStyle:"italic"}),this.core.addText("www.seima.com.au",s-o.right,i+5,{fontSize:8,fontStyle:"italic",align:"right"});const r=t.internal.getNumberOfPages();this.core.addText(`Page ${r}`,s/2,i+5,{fontSize:8,align:"center"})}async addQRSection(e){const t=this.core.margins;this.core.checkPageSpace(40),this.core.moveY(10),this.core.addText("Quick Access Links",t.left,this.core.getCurrentY(),{fontSize:12,fontStyle:"bold"}),this.core.moveY(8);const o=e.filter(s=>{var n;return((n=s.product)==null?void 0:n.Website_URL)&&this.core.isValidUrl(s.product.Website_URL)}).slice(0,5);o.forEach((s,n)=>{const i=`${s.product.OrderCode}: ${s.product.Website_URL}`;this.core.addText(this.core.formatText(i,80),t.left+5,this.core.getCurrentY(),{fontSize:8}),this.core.moveY(4)}),o.length===0&&(this.core.addText("Visit www.seima.com.au for more product information",t.left+5,this.core.getCurrentY(),{fontSize:8,fontStyle:"italic"}),this.core.moveY(4))}}const mt=new Ft;class Nt{constructor(){this.core=Je,this.layouts=mt,this.isInitialized=!1}async init(){try{return await this.core.init(),this.isInitialized=!0,console.log("✅ Unified PDF Generator initialized"),!0}catch(e){return console.error("❌ Failed to initialize PDF Generator:",e),!1}}async generatePDF(e){try{this.isInitialized||await this.init();const t=this.getSelectedProducts();if(!t.length)throw new Error("No products selected");console.log(`📄 Generating PDF for ${t.length} products...`),this.core.createDocument(),await this.layouts.addHeader(e),await this.layouts.addCustomerInfo(e),await this.layouts.addSelectionSummary(t);const o=await this.layouts.addProductTableHeader();for(let n=0;n<t.length;n++){const i=t[n],r=n%2===0;await this.layouts.addProductRow(i,o,r,e)}await this.layouts.addQRSection(t),await this.layouts.addFooter(e);const s=await this.core.finalize();return console.log("✅ PDF generated successfully"),s}catch(t){throw console.error("❌ PDF generation failed:",t),t}}async generateCSV(e){try{const t=this.getSelectedProducts();if(!t.length)throw new Error("No products selected");console.log(`📊 Generating CSV for ${t.length} products...`);const o=[];o.push('"Code","Description","WELS Star","Quantity","Price ea ex GST","Price Total ex GST","Notes","Room","Image URL","Diagram URL","Datasheet URL","Website URL"'),t.forEach(i=>{var b,S,C,P,k,R,L,_,U,re,M;const r=this.cleanForCSV(((b=i.product)==null?void 0:b.OrderCode)||""),a=this.cleanForCSV(((S=i.product)==null?void 0:S.Description)||""),c=((C=i.product)==null?void 0:C["WELS STAR"])||((P=i.product)==null?void 0:P.WELS_STAR)||((k=i.product)==null?void 0:k.WELS_STAR)||((R=i.product)==null?void 0:R.WelsStar)||"",l=this.cleanForCSV(c&&c.toString().trim()?c.toString().replace(/[^\d.]/g,"").trim():""),d=i.quantity||1,u=this.cleanForCSV(((L=i.product)==null?void 0:L.RRP_EX)||""),m=this.calculateTotalPrice(u,d),h=this.cleanForCSV(i.notes||""),p=this.cleanForCSV(i.room||""),y=this.cleanForCSV(((_=i.product)==null?void 0:_.Image_URL)||""),f=this.cleanForCSV(((U=i.product)==null?void 0:U.Diagram_URL)||""),v=this.cleanForCSV(((re=i.product)==null?void 0:re.Datasheet_URL)||""),w=this.cleanForCSV(((M=i.product)==null?void 0:M.Website_URL)||"");o.push(`"${r}","${a}","${l}","${d}","${u}","${m}","${h}","${p}","${y}","${f}","${v}","${w}"`)});const s=o.join(`
`),n=new Blob([s],{type:"text/csv;charset=utf-8"});return console.log("✅ CSV generated successfully"),n}catch(t){throw console.error("❌ CSV generation failed:",t),t}}async generateBothFiles(e){try{const[t,o]=await Promise.all([this.generatePDF(e),this.generateCSV(e)]);return{pdfBlob:t,csvBlob:o}}catch(t){throw console.error("❌ File generation failed:",t),t}}getSelectedProducts(){const e=JSON.parse(localStorage.getItem("selection")||"[]"),t=JSON.parse(localStorage.getItem(H.STORAGE_KEYS.SELECTED_PRODUCTS)||"[]");return t.length>0?t:e.map(o=>({product:o,room:o.Room||"",notes:o.Notes||"",quantity:o.Quantity||1}))}calculateTotalPrice(e,t){const s=(parseFloat(e.toString().replace(/[^0-9.]/g,""))||0)*(t||1);return s>0?s.toFixed(2):""}cleanForCSV(e){return e?e.toString().replace(/"/g,'""').replace(/[\r\n]/g," "):""}async generateQuotePDF(e){return await this.generatePDF(e)}async generateReportPDF(e){return await this.generatePDF(e)}generateFileName(e,t){const o=new Date,s=String(o.getDate()).padStart(2,"0"),n=String(o.getMonth()+1).padStart(2,"0"),i=String(o.getFullYear()).slice(-2),r=String(o.getHours()).padStart(2,"0"),a=String(o.getMinutes()).padStart(2,"0");return`${(e.project||"seima-selection").replace(/[^a-zA-Z0-9\s]/g,"")}-${s}${n}${i}.${r}${a}.${t}`}downloadFile(e,t){const o=URL.createObjectURL(e),s=document.createElement("a");s.href=o,s.download=t,document.body.appendChild(s),s.click(),document.body.removeChild(s),URL.revokeObjectURL(o)}getSelectionSummary(){const e=this.getSelectedProducts(),t=e.length,s=new Set(e.map(i=>i.room).filter(Boolean)).size||1;let n=0;return e.forEach(i=>{var c;const r=parseFloat((((c=i.product)==null?void 0:c.RRP_EX)||"0").toString().replace(/[^0-9.]/g,""))||0,a=i.quantity||1;n+=r*a}),{totalProducts:t,totalRooms:s,totalValue:n,hasProducts:t>0}}}const Mt=new Nt,Ot={Utils:x},Ut=N;class zt{constructor(){this.modules={dataLayer:D,pdfGenerator:Mt,pdfCore:Je,pdfLayouts:mt,StorageManager:E,utils:Ot},this.isInitialized=!1,this.initStatus={}}async init(){try{console.log("🚀 Initializing modular components...");const e=await this.initModule("dataLayer",this.modules.dataLayer);return this.initStatus.dataLayer=e,this.initStatus.pdfGenerator="deferred",this.isInitialized=!0,console.log("✅ Module initialization complete:",this.initStatus),this.initStatus}catch(e){return console.error("❌ Module coordinator initialization failed:",e),!1}}async initModule(e,t){try{if(t&&typeof t.init=="function"){const o=await t.init();return console.log(`✅ ${e} initialized:`,o),o}else return console.log(`ℹ️ ${e} does not require initialization`),!0}catch(o){throw console.error(`❌ Failed to initialize ${e}:`,o),o}}async searchProducts(e,t=10){return this.modules.dataLayer.isLoaded||await this.modules.dataLayer.init(),this.modules.dataLayer.searchProducts(e,t)}async findProductByCode(e){return this.modules.dataLayer.isLoaded||await this.modules.dataLayer.init(),this.modules.dataLayer.findProductByCode(e)}async addProductToSelection(e,{room:t="",notes:o="",quantity:s=1}={}){return this.modules.dataLayer.addProductToSelection(e,{room:t,notes:o,quantity:s})}getSelectedProducts(){return this.modules.dataLayer.getSelectedProducts()}getSelectionSummary(){return this.modules.dataLayer.getSelectionSummary()}async generatePDF(e){return await this.modules.pdfGenerator.generatePDF(e)}async generateCSV(e){return await this.modules.pdfGenerator.generateCSV(e)}async generateBothFiles(e){return await this.modules.pdfGenerator.generateBothFiles(e)}async sendEmail(e,t){return await this.modules.emailService.sendEmailWithPDF(e,t)}clearSelection(){return this.modules.dataLayer.clearSelection()}getModuleStatus(){return{initialized:this.isInitialized,moduleStatus:this.initStatus,dataLayer:{loaded:this.modules.dataLayer.isLoaded,productCount:this.modules.dataLayer.products.length},selection:{count:this.getSelectedProducts().length,summary:this.getSelectionSummary()}}}async reinitializeModule(e){if(this.modules[e])try{return this.initStatus[e]=await this.initModule(e,this.modules[e]),this.initStatus[e]}catch(t){return console.error(`❌ Failed to reinitialize ${e}:`,t),!1}return!1}async batchAddProducts(e){const t=[];for(const{product:o,room:s,notes:n,quantity:i}of e)try{const r=await this.addProductToSelection(o,{room:s,notes:n,quantity:i});t.push({success:!0,result:r})}catch(r){t.push({success:!1,error:r.message,product:o})}return t}exportState(){return{moduleStatus:this.getModuleStatus(),config:Ut,timestamp:new Date().toISOString()}}}const jt=new zt;jt.init().catch(g=>{console.error("❌ Auto-initialization failed:",g)});class Gt{constructor(){this.currentScreen="welcome",this.currentSearchResults=[]}async init(){if(!D.isLoaded)try{await D.init()}catch(e){console.error("Failed to load product catalog:",e)}this.updateSelectionCount(),this.loadVersion().catch(()=>{}),setTimeout(()=>this.loadVersion(),1e3)}async loadVersion(){try{const e=await fetch("./version.txt");if(e.ok){const t=await e.text(),o=document.getElementById("version-number");if(o){const s=t.trim().split(`
`).filter(r=>r.trim()!==""),n=s.length>0?s[s.length-1]:"Unknown",i=n.split(" - ")[0]||n;o.innerText=i,o.innerText.trim()||(o.innerText="v2.1.0")}}else throw new Error("Version file not found")}catch{const t=document.getElementById("version-number");if(t){const o=N.get("app.version")||"v2.1.0";t.innerText=o}else setTimeout(()=>{const o=document.getElementById("version-number");if(o&&!o.innerText.trim()){const s=N.get("app.version")||"v2.1.0";o.innerText=s}},1e3);console.info("Version loaded from config (GitHub Pages mode)")}}async showProductLookupScreen(){try{const t=await(await fetch("./screens/product-grid.html")).text();document.body.innerHTML=t,this.currentScreen="product-grid";const o=document.createElement("script");o.type="module",o.src="js/app.js",document.body.appendChild(o),setTimeout(()=>{document.querySelectorAll(".back-btn").forEach(s=>s.remove())},100),window.productGridManager&&window.productGridManager.init(),await this.loadVersion(),setTimeout(()=>this.loadVersion(),1e3)}catch(e){console.error("Failed to load product grid screen:",e)}}setupSplitInterface(){const e=document.getElementById("back-to-home");e&&(e.onclick=()=>location.reload());const t=document.getElementById("download-btn"),o=document.getElementById("clear-all-btn");t&&(t.onclick=()=>this.showDownloadFormModal()),o&&(o.onclick=()=>this.showClearConfirmModal()),this.setupSplitProductSearch(),this.setupReviewTable(),this.renderReviewTable(),this.loadInitialSearchResults()}setupSplitProductSearch(){const e=document.getElementById("product-search-input"),t=document.getElementById("search-results-list"),o=document.getElementById("search-loading"),s=document.getElementById("search-no-results");if(!e||!t)return;const n=[],i=x.debounce(r=>{this.performSplitProductSearch(r,t,n,o,s)},200);e.addEventListener("input",()=>{const r=e.value.trim();r?i(r):this.loadInitialSearchResults()}),t.addEventListener("click",r=>{const a=r.target.closest(".result-item");if(!a)return;const c=parseInt(a.getAttribute("data-idx"),10),l=n.length>0?n:this.currentSearchResults||[];!isNaN(c)&&l[c]&&this.showSplitProductDetails(l[c])})}performSplitProductSearch(e,t,o,s,n){if(!D.isLoaded){s.style.display="flex",n.style.display="none",t.innerHTML="";return}o.length=0,o.push(...D.searchProducts(e)),s.style.display="none",o.length===0?(n.style.display="flex",t.innerHTML=""):(n.style.display="none",t.innerHTML=o.map((i,r)=>`
          <div class="result-item" data-idx="${r}">
            <span class="result-code">${x.sanitizeInput(i.OrderCode||i.Code||"")}</span> - ${x.sanitizeInput(i.Description||i.ProductName||i["Product Name"]||"")}
          </div>
        `).join(""))}async loadInitialSearchResults(){const e=document.getElementById("search-results-list"),t=document.getElementById("search-loading"),o=document.getElementById("search-no-results");if(!e)return;if(!D.isLoaded){t.style.display="flex",o.style.display="none",e.innerHTML="",setTimeout(()=>this.loadInitialSearchResults(),500);return}const s=D.getAllProducts().slice(0,50);t.style.display="none",o.style.display="none",e.innerHTML=s.map((n,i)=>`
        <div class="result-item" data-idx="${i}">
          <span class="result-code">${x.sanitizeInput(n.OrderCode||n.Code||"")}</span> - ${x.sanitizeInput(n.Description||n.ProductName||n["Product Name"]||"")}
        </div>
      `).join(""),this.currentSearchResults=s}showSplitProductDetails(e){const t=document.getElementById("product-details"),o=document.getElementById("product-image"),s=document.getElementById("product-name"),n=document.getElementById("product-code"),i=document.getElementById("product-price"),r=document.getElementById("product-room"),a=document.getElementById("product-quantity"),c=document.getElementById("product-notes"),l=document.getElementById("add-product-btn"),d=document.getElementById("close-details");if(t){if(o){const u=e.Image||e.Image_URL||e.imageUrl||"assets/no-image.png";o.src=u,o.alt=e.Description||e.ProductName||e["Product Name"]||"Product Image"}if(s&&(s.textContent=e.Description||e.ProductName||e["Product Name"]||""),n&&(n.textContent=e.OrderCode||e.Code||""),i){const u=e.RRP_EX||e["RRP EX GST"]||e.RRP_EX||e.RRP_EXGST||e.rrpExGst||e["PL1 - RRP EX GST"]||e.RRP_INCGST||e["RRP INC GST"]||0;i.textContent=u?`$${parseFloat(u).toFixed(2)}`:"Price not available"}this.populateRoomSelect(r),a&&(a.value=1),c&&(c.value=""),d&&(d.onclick=()=>{t.style.display="none"}),l&&(l.onclick=()=>{const u=r?r.value:"Blank",m=a&&parseInt(a.value)||1,h=c?c.value.trim():"";this.addProductToSplitSelection(e,u,m,h),t.style.display="none"}),t.style.display="block"}}async showProductDetailsScreen(e,t={}){try{const s=await(await fetch("./screens/product-details.html")).text();document.body.innerHTML=s,this.currentScreen="product-details",this.populateProductDetails(e,t),this.setupProductDetailsHandlers(e)}catch(o){console.error("Failed to load product details screen:",o)}}populateProductDetails(e,t){const o=document.getElementById("product-image");o&&(o.src=e.Image_URL||"assets/no-image.png",o.onerror=function(){this.src="assets/no-image.png"}),document.getElementById("product-name").textContent=e.Description||"",document.getElementById("product-code").textContent=e.OrderCode?`Code: ${e.OrderCode}`:"";let s="",n=NaN;const i=e.RRP_EX||e["RRP EX GST"]||e.RRP_EX||e.RRP_EXGST||e.rrpExGst||e["PL1 - RRP EX GST"]||e.RRP_INCGST||e["RRP INC GST"];i&&(n=parseFloat(i.toString().replace(/,/g,""))),!isNaN(n)&&n>0?s=`$${n.toFixed(2)} ex GST`:s="Price unavailable",document.getElementById("product-price-inline").textContent=s,document.getElementById("product-description").textContent=e.LongDescription||"",this.setLink("datasheet-link",e.Datasheet_URL),this.setLink("diagram-link",e.Diagram_URL),this.setLink("website-link",e.Website_URL);const r=document.getElementById("diagram-link"),a=document.getElementById("datasheet-link"),c=document.getElementById("website-link");if([r,a,c].forEach(l=>{l&&(l.setAttribute("target","_blank"),l.setAttribute("rel","noopener noreferrer"))}),this.setupVariantDropdown(e,t),this.populateRoomSelect(),this.setupQuantitySelect(),this.setupAnnotationField(),this.setupAnnotationCharacterCount(t),t.quantity){const l=document.getElementById("product-quantity");l&&(l.value=t.quantity)}t.scannedCode&&this.showScanFeedback(`Successfully scanned: ${t.scannedCode}`)}populateRoomSelect(e=null){const t=e||document.getElementById("room-select");if(!t)return;t.innerHTML='<option value="Blank">Blank</option>',N.get("rooms.predefined",[]).forEach(i=>{const r=document.createElement("option");r.value=i.name,r.textContent=i.name,t.appendChild(r)}),E.getCustomRooms().forEach(i=>{const r=document.createElement("option");r.value=i.name,r.textContent=i.name,t.appendChild(r)});const n=document.createElement("option");n.value="__ADD_NEW_ROOM__",n.textContent="➕ Add new room...",n.style.fontWeight="bold",n.style.color="#2563eb",t.appendChild(n),t.value="Blank",t.removeEventListener("change",this.handleRoomSelectChange.bind(this)),t.addEventListener("change",this.handleRoomSelectChange.bind(this))}setupQuantitySelect(){const e=document.getElementById("product-quantity");if(!e)return;e.innerHTML="",N.get("ui.quantityOptions",[1,2,3,4,5,6,7,8,9,10]).forEach(o=>{const s=document.createElement("option");s.value=o,s.textContent=o.toString(),e.appendChild(s)})}setLink(e,t){const o=document.getElementById(e);t&&t!=="#"?(o.href=t,o.style.display=""):o.style.display="none"}setupVariantDropdown(e,t){const o=document.getElementById("variant-select-row"),s=document.getElementById("variant-select");if(o&&s){let n=e.ProductName||e["Product Name"]||"";typeof n=="string"&&(n=n.trim());let i=[];n&&(i=D.getAllProducts().filter(r=>{let a=r.ProductName||r["Product Name"]||"";return typeof a=="string"&&(a=a.trim()),a&&a===n})),i.length>1?(i.sort((r,a)=>(r.Description||"").localeCompare(a.Description||"")),o.style.display="",s.innerHTML=i.map(r=>`<option value="${r.OrderCode}"${r.OrderCode===e.OrderCode?" selected":""}>${r.Description}</option>`).join(""),s.onchange=()=>{var c;const r=s.value,a=i.find(l=>l.OrderCode===r);if(a&&a.OrderCode!==e.OrderCode){const l=((c=document.getElementById("product-annotation"))==null?void 0:c.value)||t.notes||"",d=document.getElementById("product-quantity");let u=1;d&&d.value?u=Math.max(1,parseInt(d.value,10)||1):t.quantity&&(u=t.quantity),this.showProductDetailsScreen(a,{notes:l,quantity:u})}}):o.style.display="none"}}setupAnnotationCharacterCount(e){const t=document.getElementById("product-annotation"),o=document.getElementById("annotation-char-count");t&&o&&(t.addEventListener("input",()=>{t.value=t.value.replace(/\r?\n|\r/g," "),o.textContent=`${t.value.length}/140`}),t.addEventListener("keydown",s=>{s.key==="Enter"&&s.preventDefault()}),o.textContent=`${t.value.length}/140`,e.notes&&(t.value=e.notes))}setupAnnotationField(){}setupProductDetailsHandlers(e){const t=document.getElementById("back-to-grid"),o=document.getElementById("add-to-room-btn");t&&(t.onclick=()=>this.showProductLookupScreen()),o&&(o.onclick=()=>this.addProductToSelection(e))}addProductToSelection(e){const t=document.getElementById("room-select"),o=document.getElementById("product-quantity"),s=document.getElementById("product-annotation"),n=t?t.value:"Blank",i=o?parseInt(o.value):1,r=s?s.value:"";E.addProductToSelection(e,{notes:r,room:n,quantity:i})?this.showProductLookupScreen():alert("Failed to add product to selection")}addProductToSplitSelection(e,t,o,s){E.addProductToSelection(e,{notes:s,room:t,quantity:o})?(this.renderReviewTable(),this.updateSelectionCount()):alert("Failed to add product to selection")}setupReviewTable(){const e=document.getElementById("review-table-body");e&&(e.addEventListener("change",t=>{t.target.classList.contains("quantity-input")?this.handleQuantityChange(t.target):t.target.classList.contains("room-select")&&this.handleRoomChange(t.target)}),e.addEventListener("click",t=>{t.target.classList.contains("remove-btn")&&this.handleRemoveProduct(t.target)}))}renderReviewTable(){const e=document.getElementById("review-table"),t=document.getElementById("review-table-empty"),o=document.getElementById("review-table-body"),s=document.getElementById("total-items"),n=document.getElementById("total-value");if(!e||!t||!o)return;const i=E.getSelectedProducts();if(i.length===0){e.style.display="none",t.style.display="flex",s&&(s.textContent="0 items"),n&&(n.textContent="$0.00");return}t.style.display="none",e.style.display="flex";let r=0,a=0;i.forEach(c=>{r+=c.quantity;let l=0;c.product.UserEditedPrice!==void 0&&c.product.UserEditedPrice!==null&&c.product.UserEditedPrice!==""?l=parseFloat(c.product.UserEditedPrice.toString().replace(/,/g,""))||0:l=parseFloat((c.product.RRP_EX||c.product["RRP EX GST"]||c.product.RRP_EX||c.product.RRP_EXGST||c.product["PL1 - RRP EX GST"]||0).toString().replace(/,/g,""))||0,l>0&&(a+=l*c.quantity)}),s&&(s.textContent=r),n&&(n.textContent=a>0?`$${a.toLocaleString("en-AU",{minimumFractionDigits:2,maximumFractionDigits:2})}`:"$0.00"),o.innerHTML=i.map((c,l)=>{const d=c.product;let u=0;d.UserEditedPrice!==void 0&&d.UserEditedPrice!==null&&d.UserEditedPrice!==""?u=parseFloat(d.UserEditedPrice.toString().replace(/,/g,""))||0:u=parseFloat((d.RRP_EX||d["RRP EX GST"]||d.RRP_EX||d.RRP_EXGST||d["PL1 - RRP EX GST"]||0).toString().replace(/,/g,""))||0;const m=u*c.quantity,h=d.Image||d.Image_URL||d.imageUrl||"assets/no-image.png";return`
        <div class="table-row" data-index="${l}">
          <div class="col-image">
            <img class="table-product-image" src="${h}" alt="Product" onerror="this.src='assets/no-image.png';">
          </div>
          <div class="col-product">
            <div class="product-info">
              <div class="product-name">${x.sanitizeInput(d.Description||d.ProductName||d["Product Name"]||"")}</div>
              <div class="product-code">${x.sanitizeInput(d.OrderCode||d.Code||"")}</div>
              ${c.notes?`<div class="product-notes">${x.sanitizeInput(c.notes)}</div>`:""}
            </div>
          </div>
          <div class="col-room">
            <select class="room-select" data-index="${l}">
              ${this.getRoomOptions(c.room)}
            </select>
          </div>
          <div class="col-price-ea">
            <div class="price-display">${u?`$${u.toLocaleString("en-AU",{minimumFractionDigits:2,maximumFractionDigits:2})}`:"N/A"}</div>
          </div>
          <div class="col-qty">
            <input type="number" class="quantity-input" data-index="${l}" value="${c.quantity}" min="1" step="1">
          </div>
          <div class="col-total">
            <div class="price-display">${u?`$${m.toLocaleString("en-AU",{minimumFractionDigits:2,maximumFractionDigits:2})}`:"N/A"}</div>
          </div>
          <div class="col-actions">
            <button class="remove-btn" data-index="${l}" title="Remove">×</button>
          </div>
        </div>
      `}).join("")}getRoomOptions(e){let t=`<option value="Blank"${e==="Blank"?" selected":""}>Blank</option>`;return N.get("rooms.predefined",[]).forEach(n=>{t+=`<option value="${n.name}"${e===n.name?" selected":""}>${n.name}</option>`}),E.getCustomRooms().forEach(n=>{t+=`<option value="${n.name}"${e===n.name?" selected":""}>${n.name}</option>`}),t+='<option value="__ADD_NEW_ROOM__" style="font-weight: bold; color: #2563eb;">➕ Add new room...</option>',t}handleQuantityChange(e){const t=parseInt(e.getAttribute("data-index")),o=Math.max(1,parseInt(e.value)||1),s=E.getSelectedProducts();s[t]&&(s[t].quantity=o,E.setSelectedProducts(s),this.renderReviewTable(),this.updateSelectionCount())}handleRoomChange(e){const t=parseInt(e.getAttribute("data-index"));let o=e.value;if(o==="__ADD_NEW_ROOM__"){const n=prompt("Enter new room name:");if(n&&n.trim()){const i=n.trim();if(E.addCustomRoom(i)){o=i,console.log("✅ Added new room:",i),this.renderSelectionTable();return}else{alert("Room name already exists or is invalid");const r=E.getSelectedProducts();r[t]&&(e.value=r[t].room||"Blank");return}}else{const i=E.getSelectedProducts();i[t]&&(e.value=i[t].room||"Blank");return}}const s=E.getSelectedProducts();s[t]&&(s[t].room=o,E.setSelectedProducts(s),this.updateSelectionCount())}handleRemoveProduct(e){const t=parseInt(e.getAttribute("data-index")),o=E.getSelectedProducts();o[t]&&(o.splice(t,1),E.setSelectedProducts(o),this.renderReviewTable(),this.updateSelectionCount())}async showReviewScreen(){try{const t=await(await fetch("./screens/review.html")).text();document.body.innerHTML=t,this.currentScreen="review",this.setupReviewScreenHandlers(),this.renderReviewList()}catch(e){console.error("Failed to load review screen:",e)}}setupReviewScreenHandlers(){const e=document.getElementById("back-to-grid"),t=document.getElementById("add-more-btn"),o=document.getElementById("quick-pdf-btn");e&&(e.onclick=()=>this.showProductLookupScreen()),t&&(t.onclick=()=>this.showProductLookupScreen()),o&&(o.onclick=()=>this.showDownloadFormModal())}renderReviewList(){const e=document.getElementById("review-list"),t=document.getElementById("review-empty");if(!e)return;const o=E.getSelectedProducts();if(o.length===0){e.innerHTML="",t&&(t.style.display="block");return}t&&(t.style.display="none");const s={};o.forEach(n=>{const i=n.room||"Unassigned";s[i]||(s[i]=[]),s[i].push(n)}),e.innerHTML=Object.entries(s).map(([n,i])=>`
      <div class="review-room-group">
        <div class="review-room-header">${n} <span class="room-count">(${i.length})</span></div>
        ${i.map((r,a)=>{const c=r.product,l=c.Description||c.description||c.productName||c["Product Name"]||"Product",d=c.OrderCode||c.orderCode||"",u=c.Image_URL||c.imageUrl||"assets/no-image.png",m=c.RRP_EX||c["RRP EX GST"]||c.RRP_EX||c.rrpExGst||c.RRP_EXGST||c["PL1 - RRP EX GST"]||c.RRP_INCGST||c["RRP INC GST"]||"0";return`
          <div class="review-product-card" style="display: flex; flex-direction: column; align-items: stretch;">
            <div style="display: flex; flex-direction: row; align-items: flex-start;">
              <div class="review-product-thumb-wrap">
                <img class="review-product-thumb" src="${u}" alt="Product" onerror="this.src='assets/no-image.png';" onload="">
                <div class="review-qty-pill" data-room="${n}" data-idx="${a}">
                  <button class="review-qty-btn${(r.quantity||1)===1?" delete":""}" data-action="decrement" title="${(r.quantity||1)===1?"Delete":"Decrease"}">
                    ${(r.quantity||1)===1?"<svg viewBox='0 0 64 64' width='64' height='64'><rect x='10' y='8' width='44' height='6' rx='3' fill='black'/><polygon points='7,18 57,18 52,58 12,58' fill='none' stroke='black' stroke-width='7'/></svg>":"–"}
                  </button>
                  <span class="review-qty-value">${r.quantity||1}</span>
                  <button class="review-qty-btn" data-action="increment" title="Increase">+</button>
                </div>
              </div>
              <div class="review-product-info">
                <div class="review-product-title">${l}</div>
                <div class="review-product-meta">
                  <span class="review-product-code">${d?`Code: ${d}`:""}</span>
                  <span class="review-product-price">${`$${Number(m).toFixed(2)} ea (EX GST)`}</span>
                </div>
                <div class="review-product-notes">${r.notes?`Notes: ${r.notes}`:""}</div>
              </div>
            </div>
          </div>
          `}).join("")}
      </div>
    `).join(""),this.setupOriginalQuantityControls(s)}groupProductsByRoom(e){return e.reduce((t,o)=>{const s=o.room||"Unassigned";return t[s]||(t[s]=[]),t[s].push(o),t},{})}setupOriginalQuantityControls(e){document.querySelectorAll(".review-qty-pill").forEach(t=>{const o=t.getAttribute("data-room"),s=parseInt(t.getAttribute("data-idx"),10);t.querySelectorAll(".review-qty-btn").forEach(n=>{n.onclick=()=>{const i=n.getAttribute("data-action"),r=E.getSelectedProducts();let a=-1;const c=r.findIndex(l=>(l.room===o&&a++,l.room===o&&a===s));if(c!==-1){const l=r[c],d=parseInt(l.quantity,10)||1;i==="increment"?E.updateProductQuantity(l.id,d+1):i==="decrement"&&(d===1?E.removeProductFromSelection(l.id):E.updateProductQuantity(l.id,d-1)),this.renderReviewList(),this.updateSelectionCount()}}})})}showDownloadFormModal(){var t;const e=document.getElementById("pdf-email-modal");if(e){e.style.display="flex";const o=document.getElementById("pdf-email-form"),s=document.getElementById("pdf-email-cancel"),n=document.getElementById("pdf-email-send");if(o){const r=x.getStorageItem("pdfFormSettings",{});o["user-name"]&&(o["user-name"].value=r.name||""),o["user-project"]&&(o["user-project"].value=r.project||""),o["user-address"]&&(o["user-address"].value=r.address||""),o["user-email"]&&(o["user-email"].value=r.email||""),o["user-telephone"]&&(o["user-telephone"].value=r.telephone||""),o["exclude-prices"]&&(o["exclude-prices"].checked=!!r.excludePrices),o["exclude-qty"]&&(o["exclude-qty"].checked=!!r.excludeQty),o["exclude-long-description"]&&(o["exclude-long-description"].checked=!!r.excludeLongDescription),o["include-gst"]&&(o["include-gst"].checked=!!r.includeGst)}const i=(t=o.querySelector('label[for="export-csv"]'))==null?void 0:t.parentElement;i&&(i.style.display="none"),n&&(n.textContent="Download"),s&&(s.onclick=()=>{e.style.display="none"}),o&&(o.onsubmit=r=>{r.preventDefault(),this.handleDownloadFormSubmit(),e.style.display="none"})}}handleDownloadFormSubmit(){console.log("🎯 handleDownloadFormSubmit called");const e=document.getElementById("pdf-email-form");if(!e){console.error("❌ Form not found!");return}const t=new FormData(e),o={name:t.get("user-name"),project:t.get("user-project"),address:t.get("user-address"),email:t.get("user-email"),telephone:t.get("user-telephone"),excludePrice:t.get("exclude-price")==="on"||t.get("exclude-prices")==="on",excludeQty:t.get("exclude-qty")==="on",excludeLongDescription:t.get("exclude-long-description")==="on",includeGst:t.get("include-gst")==="on",exportCsv:!0};console.log("📝 Navigation userDetails created:",o),window.dispatchEvent(new CustomEvent("generatePdf",{detail:o}))}showClearConfirmModal(){const e=document.getElementById("clear-selection-modal");if(e){e.style.display="flex";const t=document.getElementById("modal-cancel-btn"),o=document.getElementById("modal-confirm-btn");t&&(t.onclick=()=>{e.style.display="none"}),o&&(o.onclick=()=>{E.clearAllSelections(),e.style.display="none",this.updateSelectionCount(),this.currentScreen==="product-grid"&&window.productGridManager&&window.productGridManager.clearAll()})}}updateSelectionCount(){const e=document.getElementById("selection-count");e&&(e.textContent=E.getSelectionCount().toString())}handleRoomSelectChange(e){const t=e.target;if(t.value==="__ADD_NEW_ROOM__"){const s=prompt("Enter new room name:");if(s&&s.trim()){const n=s.trim();E.addCustomRoom(n)?(this.populateRoomSelect(t),t.value=n,console.log("✅ Added new room:",n)):(alert("Room name already exists or is invalid"),t.value="Blank")}else t.value="Blank"}}}async function Xe(g,e,t="file"){await pt(g,e,t)}function Ye(g,e=null){const t=document.getElementById("pdf-spinner");t&&(t.style.display="flex"),e&&(window._currentTipTailSettings=e),rt();const o=document.createElement("div");o.id="pdf-processing-notification",o.style.cssText=`
      position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); z-index: 10001;
      background: #dbeafe; border: 1px solid #3b82f6; border-radius: 8px;
      padding: 20px; max-width: 400px; min-width: 320px; box-shadow: 0 8px 25px rgba(0,0,0,0.2);
      text-align: center;
    `;const s=g.emailCompatible;o.innerHTML=`
      <div style="display: flex; align-items: center; margin-bottom: 8px;">
        <span style="font-size: 18px; margin-right: 8px;">${s?"📧":"📄"}</span>
        <strong style="color: #1e40af;">Creating your product selection files</strong>
      </div>
      <p style="margin: 0; color: #1e40af; font-size: 14px;">
        ${s?"Creating text-only PDF without images for optimal email delivery.":"This may take a moment."}
      </p>
    `,document.body.appendChild(o);const n=xt();je("./assets/seima-logo.png",async(i,r,a)=>{const c=JSON.parse(localStorage.getItem("selection")||"[]"),l=JSON.parse(localStorage.getItem(H.STORAGE_KEYS.SELECTED_PRODUCTS)||"[]");let d=[];l.length>0?d=l.map(b=>({...b.product,Room:b.room,Notes:b.notes,Quantity:b.quantity,Timestamp:new Date(b.timestamp).toISOString()})):d=c;const u=document.getElementById("sort-by"),m=u?u.value:"room";switch(m){case"code":d.sort((b,S)=>{const C=b.OrderCode||b.Code||"",P=S.OrderCode||S.Code||"";return C.localeCompare(P)});break;case"product":d.sort((b,S)=>{const C=b.Description||b.ProductName||"",P=S.Description||S.ProductName||"";return C.localeCompare(P)});break;case"room":default:{let b=[];try{const S=localStorage.getItem("customRoomOrder");b=S?JSON.parse(S):[]}catch{b=[]}d.sort((S,C)=>{const P=S.Room||"Blank",k=C.Room||"Blank";if(P===k)return 0;if(P==="Blank")return 1;if(k==="Blank")return-1;const R=b.indexOf(P),L=b.indexOf(k);return R!==-1&&L!==-1?R-L:R!==-1?-1:L!==-1?1:P.localeCompare(k)});break}}if(!d.length){alert("No products selected."),t&&(t.style.display="none");return}if(ot()>0)console.log(`📷 Using ${ot()} pre-cached images (skipping duplicate preload)`);else{const b=document.getElementById("pdf-processing-notification");if(b){const S=document.createElement("span");S.id="preload-progress",S.style.cssText="display: block; font-size: 12px; margin-top: 8px; color: #1e40af;",S.textContent="Loading images: 0%",b.appendChild(S)}console.log("📷 Starting image preload for",d.length,"products"),ut(d).then(S=>{const C=document.getElementById("preload-progress");C&&(C.textContent=`✓ ${S} images ready`,C.style.color="#059669")}).catch(S=>{console.warn("Image preloading error:",S)})}const p={};m==="room"?d.forEach(b=>{const S=b.Room||"Blank";p[S]||(p[S]=[]),p[S].push(b)}):p.__all__=d,await n;const{jsPDF:y}=window.jspdf,f=new y({orientation:"landscape",unit:"pt",format:"a4",compress:!0,putOnlyUsedFonts:!0,precision:16,userUnit:1,floatPrecision:16}),v=f.internal.pageSize.getWidth(),w=f.internal.pageSize.getHeight();je("./assets/seima-logo.png",async(b,S,C)=>{const P=V.getCurrentUser(),k=E.getUserSettings(),R=P?{name:P.name,email:P.email,phone:P.phone,position:P.position}:k;let L=null;try{const{get:_}=await z(async()=>{const{get:U}=await import("./index-DwnyWBFG.js");return{get:U}},[]);L=await _("customerLogo")}catch{}Et(f,{pageWidth:v,pageHeight:w,seimaLogoDataUrl:b,seimaLogoNaturalW:S,seimaLogoNaturalH:C,customerLogoDataUrl:L,userDetails:g,staffContact:R,footerHeight:st.footerHeight}),f.addPage(),je("./assets/seima-logo-white.png",(_,U,re)=>{const ae=g.showRrp&&!g.excludePrice,Ie=!g.excludePrice,Ze=!g.excludeQty,vt=Pt(v,{leftMargin:32,rightMargin:32,showRrp:ae,showPrice:Ie,showQty:Ze,showTotal:Ie&&Ze}),{colX:fe,colW:Ee,headers:Ne}=vt,_e=st.footerHeight;rt();const et=($,I,X,ee,G,q,F)=>{if(!I||typeof I!="string"||I.length<10||!I.startsWith("http://")&&!I.startsWith("https://")&&!I.startsWith("data:")){F&&F();return}if((B=>{if(!B||B.length<25||/\/images\/\d+$/.test(B)||B.endsWith("/0"))return!0;const A=/\.(jpg|jpeg|png|gif|webp|svg)(\?.*)?$/i.test(B),j=B.startsWith("data:");return!A&&!j})(I)){console.warn("Skipping malformed image URL:",(I==null?void 0:I.substring(0,50))+"..."),F&&F();return}if(Z.totalImages++,g.emailCompatible){Z.failedImages++,F&&F();return}const te=_t(I);if(te&&te.dataUrl)try{const B=te.width/te.height;let A=G,j=G/B;j>q&&(j=q,A=q*B),$.addImage(te.dataUrl,te.format,X,ee,A,j,void 0,"FAST"),Z.optimizedImages++,F&&F();return}catch{console.warn("Failed to use cached image, falling back to direct load")}let ce=!1;const ve=["https://wsrv.nl/?url=","https://images.weserv.nl/?url=","https://api.codetabs.com/v1/proxy?quest="];let oe=0;function se(){if(ce)return;const B=new Image;B.crossOrigin="Anonymous";let A=null;B.onload=function(){if(!ce){ce=!0,A&&clearTimeout(A);try{const le=ht(0),$e=le.imageMaxWidth,be=G,ne=q;try{const W=document.createElement("canvas"),ie=W.getContext("2d"),{width:de,height:we}=Qt(B.width,B.height,$e);W.width=de,W.height=we,ie.imageSmoothingEnabled=!0,ie.imageSmoothingQuality="high",ie.drawImage(B,0,0,de,we);let Ue,ze="JPEG";const wt=Jt(W,ie),bt=Yt(B);wt||bt?(Ue=W.toDataURL("image/png",le.imageQuality),ze="PNG"):(Ue=W.toDataURL("image/jpeg",le.imageQuality),ze="JPEG");const St=`img_${io(I)}`;$.addImage(Ue,ze,X,ee,be,ne,St,"FAST"),Z.optimizedImages++,F&&F()}catch(W){console.warn(`Failed to optimize image: ${I}`,W),console.warn("Error details:",W.message,W.stack);try{$.addImage(B,"JPEG",X,ee,be,ne),Z.optimizedImages++,F&&F()}catch(ie){console.error(`Fallback also failed for: ${I}`,ie),Z.failedImages++,F&&F()}}}catch(le){console.warn("Failed to add image to PDF:",le),Z.failedImages++,F&&F()}}},B.onerror=function(){ce||(A&&clearTimeout(A),console.warn(`Failed to load image with proxy ${oe}: ${I}`),console.warn(`Error details for: ${I} - Proxy: ${ve[oe]}`),oe++,oe<ve.length?setTimeout(()=>{se()},200):(ce=!0,console.warn("All proxies failed, skipping image"),Z.failedImages++,F&&F()))},A=setTimeout(()=>{ce||(console.warn(`⏰ Timeout with proxy ${oe}: ${I}`),B.src="",B.onload=null,B.onerror=null,oe++,oe<ve.length?setTimeout(()=>{se()},200):(ce=!0,console.warn("All proxies timed out, skipping image"),Z.failedImages++,F&&F()))},3e3);let j=I;oe<ve.length&&(j=ve[oe]+encodeURIComponent(I)),B.src=j}se()},K=[];Object.keys(p).forEach(($,I)=>{const X=p[$];if(!X||!Array.isArray(X)){console.warn("⚠️ Skipping invalid room items:",$,X);return}X.forEach((ee,G)=>{if(!ee){console.warn("⚠️ Skipping null item in room:",$,"at index:",G);return}K.push({item:ee,room:$,rIdx:I,iIdx:G,isFirstInRoom:G===0,roomCount:X.length})})}),K.reduce(($,I)=>{if(!I||!I.item)return console.warn("⚠️ Skipping null row in data analysis:",I),$;const X=String(I.item.Description||""),ee=String(I.item.LongDescription||""),G=String(I.item.Notes||""),q=String(I.item.OrderCode||"");return $+X.length+ee.length+G.length+q.length},0);let Pe=0,Te=0;const Le=4,De=8,Me=Math.floor((w-80)/Le);let tt=_e+8;function Oe(){if(!K||!Array.isArray(K)){console.error("❌ Critical error: rowsToDraw is not a valid array:",K),it(new Error("Invalid product data structure"),"generating PDF","unknown.pdf");return}if(Pe>=K.length){const G=f.internal.getNumberOfPages()-1;for(let A=2;A<=G+1;A++){f.setPage(A);const le=(A-2)*Le,$e=Math.min(le+Le,K.length);let be=!1;for(let ne=le;ne<$e;ne++)if(K[ne]&&K[ne].item&&Ct(K[ne].item)){be=!0;break}kt(f,{pageWidth:v,colX:fe,colW:Ee,leftMargin:32,footerHeight:_e,logoDataUrl:_,logoNaturalW:U,logoNaturalH:re,headers:Ne,userDetails:g,skipWelsHeader:!be}),Rt(f,{pageWidth:v,pageHeight:w,leftMargin:32,footerHeight:_e,pageNumber:A-1,totalPages:G})}const q=new Date,F=String(q.getDate()).padStart(2,"0"),ye=String(q.getMonth()+1).padStart(2,"0"),te=String(q.getFullYear()).slice(-2),ce=String(q.getHours()).padStart(2,"0"),ve=String(q.getMinutes()).padStart(2,"0"),se=`${g.project.replace(/[^a-zA-Z0-9\s]/g,"")}-${F}${ye}${te}.${ce}${ve}.pdf`,B=document.getElementById("pdf-processing-notification");B&&B.remove(),ro(g.emailCompatible);try{const A=f.output("blob"),j=f.output("string"),le=j?j.match(/\/Type\s*\/XObject/g):null,$e=j?j.match(/Tj\s/g):null,be=j?j.match(/\/A\s*<</g):null;g.pdfSize=A.size;const ne=Zt(A,se);if(g.sendEmail&&A.size>15*1024*1024){console.warn(`❌ PDF too large for email (${(A.size/1024/1024).toFixed(1)}MB), offering email-compatible version`),ao(g,se);return}const W=Kt(A,ne.settings);if(g.sendEmail&&g.email)if(g.exportCsv){const ie=se.replace(/\.pdf$/,".csv");nt(g,ie).then(de=>{window.dispatchEvent(new CustomEvent("sendEmail",{detail:{userDetails:g,pdfBlob:W,csvBlob:de}}))}).catch(de=>{console.error("Async CSV generation for email failed:",de),window.dispatchEvent(new CustomEvent("sendEmail",{detail:{userDetails:g,pdfBlob:W,csvBlob:null}}))})}else window.dispatchEvent(new CustomEvent("sendEmail",{detail:{userDetails:g,pdfBlob:W,csvBlob:null}}));else(async()=>{const ie=await lo(W);if(await Xe(ie,se,"PDF"),g.exportCsv){const de=se.replace(/\.pdf$/,".csv");try{const we=await nt(g,de);we&&await Xe(we,de,"CSV")}catch(we){console.error("CSV generation failed:",we)}}})()}catch(A){console.error("PDF generation failed:",A),it(A,"generating PDF",se);const j=document.getElementById("pdf-processing-notification");j&&j.remove()}t&&(t.style.display="none");return}Te>=Le&&(f.addPage(),tt=_e+8,Te=0);const $=K[Pe];if(!$||!$.item){console.warn(`⚠️  Skipping invalid row at index ${Pe}:`,$),Pe++,Oe();return}const I=tt+Me*Te;$.isFirstInRoom&&m==="room"&&$.room!=="__all__"&&It(f,$.room,$.roomCount,32,I);const X=fe[0],ee=X+90+12;et(f,$.item.Image_URL||"",X,I+De+16,90,Me-De*2,()=>{et(f,$.item.Diagram_URL||"",ee,I+De+16,90,Me-De*2,()=>{const G=I+28,q=fe[1]+Ee[1]/2;f.setFontSize(10),f.setTextColor("#222"),f.text(String($.item.OrderCode||""),q,G+10,{align:"center"}),Tt(f,$.item,q,G+35);const F=Ee[2]-10;Lt(f,$.item,fe[2],G+10,F,g.excludeLongDescription);const ye=Ne.indexOf("WELS")+1;if(ye>0&&fe[ye]){const te=fe[ye]+Ee[ye]/2;Dt(f,$.item,te,G+10)}$t(f,$.item,fe,Ee,Ne,G+10,{excludePrice:g.excludePrice,includeGst:g.includeGst}),Pe++,Te++,Oe()})})}Oe()})})})}function je(g,e){const t=new window.Image;t.crossOrigin="Anonymous",t.onload=function(){const o=document.createElement("canvas"),s=o.getContext("2d"),n=400,i=150;let r=t.width,a=t.height;if(r>n||a>i){const l=n/r,d=i/a,u=Math.min(l,d);r=Math.round(r*u),a=Math.round(a*u)}o.width=r,o.height=a,s.imageSmoothingEnabled=!0,s.imageSmoothingQuality="high",s.drawImage(t,0,0,r,a);const c=o.toDataURL("image/png",.9);e(c,r,a)},t.src=g}function Ht(){if(!document.getElementById("pdf-spinner")){const g=document.createElement("div");if(g.id="pdf-spinner",g.style.display="none",g.style.position="fixed",g.style.top="0",g.style.left="0",g.style.width="100vw",g.style.height="100vh",g.style.zIndex="9999",g.style.background="rgba(255,255,255,0.7)",g.style.alignItems="center",g.style.justifyContent="center",g.innerHTML='<div style="border:6px solid #e0e0e0;border-top:6px solid #2563eb;border-radius:50%;width:54px;height:54px;animation:spin 1s linear infinite;"></div>',document.body.appendChild(g),!document.getElementById("pdf-spinner-style")){const e=document.createElement("style");e.id="pdf-spinner-style",e.innerHTML="@keyframes spin { 0% { transform: rotate(0deg);} 100% { transform: rotate(360deg);} }",document.head.appendChild(e)}}}async function nt(g,e){return new Promise(async t=>{if(!window.Papa)try{await x.loadScript("https://cdn.jsdelivr.net/npm/papaparse@5.4.1/papaparse.min.js")}catch(i){console.error("Failed to load PapaParse:",i),t(null);return}const o=JSON.parse(localStorage.getItem("selection")||"[]"),s=JSON.parse(localStorage.getItem(H.STORAGE_KEYS.SELECTED_PRODUCTS)||"[]");let n=[];if(s.length>0?n=s.map(i=>({...i.product,Room:i.room,Notes:i.notes,Quantity:i.quantity,Timestamp:new Date(i.timestamp).toISOString()})):n=o,!n.length){t(null);return}setTimeout(()=>{const i=n.map(r=>{let a,c,l,d;const u=g.excludePrice;let m=0;if(r.UserEditedPrice!==void 0&&r.UserEditedPrice!==null&&r.UserEditedPrice!=="")m=parseFloat(r.UserEditedPrice.toString().replace(/,/g,""));else{const f=r.RRP_EX||r["RRP EX GST"]||r.RRP_EX||r.RRP_EXGST||"";m=parseFloat((f||"0").toString().replace(/,/g,""))}a=m,l="Price ea ex GST",d="Price Total ex GST",c=!isNaN(a)&&a>=0?(a*(r.Quantity||1)).toFixed(2):"";const h=r["WELS STAR"]||r.WELS_STAR||r.WELS_STAR||r.WelsStar||"",p=h&&h.toString().trim()?h.toString().replace(/[^\d.]/g,"").trim():"",y={Code:ue(r.OrderCode||""),Description:ue(r.Description||""),"WELS Star":ue(p),Quantity:r.Quantity||1,Notes:ue(r.Notes||""),Room:ue(r.Room||""),"Image URL":ue(r.Image_URL||""),"Diagram URL":ue(r.Diagram_URL||""),"Datasheet URL":ue(r.Datasheet_URL||""),"Website URL":ue(r.Website_URL||"")};return y[l]=u?"0.00":a>=0?a.toFixed(2):"",y[d]=u?"0.00":c,y});setTimeout(()=>{const r=window.Papa.unparse(i,{quotes:!0,quoteChar:'"',delimiter:",",header:!0,newline:`\r
`,skipEmptyLines:!1,escapeChar:'"',transform:{value(a,c){return typeof a=="string"?a.replace(/\0/g,"").replace(/[\x00-\x08\x0B\x0C\x0E-\x1F]/g,""):a}}});g.sendEmail?setTimeout(()=>{try{const a=btoa(unescape(encodeURIComponent(r)));t({name:e,data:a,contentType:"text/csv",originalSize:r.length,base64Size:a.length})}catch(a){console.error("CSV base64 encoding failed:",a),t(new Blob([r],{type:"text/csv"}))}},0):t(new Blob([r],{type:"text/csv"}))},0)},0)})}function ue(g){return typeof g!="string"&&(g=String(g)),g=g.replace(/\0/g,"").replace(/[\x00-\x08\x0B\x0C\x0E-\x1F]/g,"").replace(/\r?\n|\r/g," ").trim(),g}async function qt(g,e,t="file"){try{if("showSaveFilePicker"in window){const s=await(await window.showSaveFilePicker({suggestedName:e,types:[{description:`${t} files`,accept:{[g.type]:[`.${e.split(".").pop()}`]}}]})).createWritable();return await s.write(g),await s.close(),!0}}catch(o){console.warn("File System Access API failed:",o)}return!1}function Wt(g,e,t="file"){try{if(g.size>2*1024*1024)return console.warn("File too large for data URI method"),!1;const o=new FileReader;return o.onload=function(s){try{const n=document.createElement("a");n.href=s.target.result,n.download=e,n.style.display="none",document.body.appendChild(n),n.click(),document.body.removeChild(n)}catch(n){console.error("Data URI download failed:",n)}},o.readAsDataURL(g),!0}catch(o){return console.warn("Data URI method failed:",o),!1}}function Vt(g,e,t="file"){const o=URL.createObjectURL(g),s=document.createElement("div");s.style.cssText=`
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
  `,s.appendChild(n),document.body.appendChild(s),document.getElementById("manual-download-close").onclick=()=>{URL.revokeObjectURL(o),document.body.removeChild(s)},document.getElementById("manual-download-retry").onclick=()=>{URL.revokeObjectURL(o),document.body.removeChild(s),setTimeout(()=>{pt(g,e,t)},1e3)},document.getElementById("copy-url-btn").onclick=()=>{const i=document.getElementById("manual-download-url");i.select(),i.setSelectionRange(0,99999);try{navigator.clipboard.writeText(o).then(()=>{const r=document.getElementById("copy-url-btn");r.textContent="Copied!",r.style.background="#059669",setTimeout(()=>{r.textContent="Copy",r.style.background="#059669"},2e3)}).catch(()=>{document.execCommand("copy");const r=document.getElementById("copy-url-btn");r.textContent="Copied!",setTimeout(()=>r.textContent="Copy",2e3)})}catch{alert("Copy failed. Please select the URL manually and copy it.")}},s.onclick=i=>{i.target===s&&(URL.revokeObjectURL(o),document.body.removeChild(s))},setTimeout(()=>{s.parentElement&&(URL.revokeObjectURL(o),document.body.removeChild(s))},5*60*1e3)}async function pt(g,e,t="file"){try{if(await Xt(g,e))return}catch(o){console.warn("Standard download failed:",o)}await qt(g,e,t)||Wt(g,e,t)||Vt(g,e,t)}function Xt(g,e){return new Promise(t=>{try{const o=URL.createObjectURL(g),s=document.createElement("a");s.href=o,s.download=e,s.style.display="none",document.body.appendChild(s);const n=setTimeout(()=>{i(),t(!1)},3e3),i=()=>{clearTimeout(n),s.parentElement&&document.body.removeChild(s),setTimeout(()=>URL.revokeObjectURL(o),1e3)};s.onclick=()=>{i(),t(!0)},s.click(),setTimeout(()=>{i(),t(!0)},500)}catch(o){console.error("Standard download error:",o),t(!1)}})}function Yt(g){const e=document.createElement("canvas"),t=e.getContext("2d");e.width=Math.min(100,g.width),e.height=Math.min(100,g.height),t.drawImage(g,0,0,e.width,e.height);const s=t.getImageData(0,0,e.width,e.height).data,n=new Set;for(let i=0;i<s.length;i+=4){const r=`${s[i]},${s[i+1]},${s[i+2]}`;n.add(r)}return n.size<1e3}function Jt(g,e){const o=e.getImageData(0,0,g.width,g.height).data;for(let s=3;s<o.length;s+=4)if(o[s]<255)return!0;return!1}function Qt(g,e,t){if(g<=t)return{width:g,height:e};const o=e/g;return{width:t,height:Math.round(t*o)}}function ht(g){return g>25*1024*1024?{compressionLevel:"aggressive",imageQuality:.6,imageMaxWidth:300,removeImages:!1,usePNG:!0,message:"Aggressive compression - maintaining technical diagram clarity"}:g>20*1024*1024?{compressionLevel:"high",imageQuality:.65,imageMaxWidth:350,removeImages:!1,usePNG:!0,message:"High compression - preserving technical diagram details"}:g>15*1024*1024?{compressionLevel:"medium",imageQuality:.7,imageMaxWidth:400,removeImages:!1,usePNG:!0,message:"Medium compression - optimal for technical documentation"}:g>10*1024*1024?{compressionLevel:"light",imageQuality:.75,imageMaxWidth:450,removeImages:!1,usePNG:!0,message:"Light compression - excellent technical diagram quality"}:{compressionLevel:"minimal",imageQuality:.8,imageMaxWidth:500,removeImages:!1,usePNG:!0,message:"Minimal compression - maximum technical diagram quality"}}function Kt(g,e){return g}function Zt(g,e){const t=(g.size/1048576).toFixed(2),o=ht(g.size);if(g.size>15*1024*1024){console.warn(`Large file detected (${t} MB) - exceeds typical email limit, may need email-compatible version`);const s=document.createElement("div");s.style.cssText=`
      position: fixed; top: 20px; right: 20px; z-index: 10001;
      background: #fef3c7; border: 1px solid #f59e0b; border-radius: 6px;
      padding: 16px; max-width: 300px; box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    `,s.innerHTML=`
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
    `,document.body.appendChild(s),setTimeout(()=>{s.parentElement&&s.remove()},8e3)}else g.size>3*1024*1024;return{size:g.size,sizeInMB:parseFloat(t),settings:o}}function it(g,e="",t=""){console.error("Detailed error:",g);const o={type:eo(g),message:g.message||"Unknown error",context:e,filename:t,timestamp:new Date().toISOString(),userAgent:navigator.userAgent},s=document.createElement("div");s.style.cssText=`
    position: fixed; top: 0; left: 0; width: 100%; height: 100%; 
    background: rgba(0,0,0,0.8); z-index: 10002; display: flex; 
    align-items: center; justify-content: center; padding: 20px;
  `;const n=document.createElement("div");return n.style.cssText=`
    background: white; border-radius: 8px; padding: 30px; max-width: 700px; 
    width: 100%; max-height: 80vh; overflow-y: auto;
  `,n.innerHTML=`
    <h3 style="color: #dc2626; margin: 0 0 20px 0; display: flex; align-items: center;">
      <span style="margin-right: 8px;">⚠️</span>
      ${to(o.type)}
    </h3>
    
    <div style="background: #fef2f2; border: 1px solid #fecaca; border-radius: 6px; padding: 16px; margin: 16px 0;">
      <p style="margin: 0; color: #b91c1c; font-weight: bold;">
        ${oo(o.type,e,t)}
      </p>
    </div>
    
    ${so(o.type)}
    
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
        <p><strong>Browser:</strong> ${gt()}</p>
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
  `,s.appendChild(n),document.body.appendChild(s),document.getElementById("error-close").onclick=()=>{document.body.removeChild(s)},document.getElementById("error-retry").onclick=()=>{document.body.removeChild(s),console.log("Retry requested for:",e)},document.getElementById("error-report").onclick=()=>{no(o),alert("Error details copied to clipboard. Please send this to support.")},s.onclick=i=>{i.target===s&&document.body.removeChild(s)},o}function eo(g){var o,s;const e=((o=g.message)==null?void 0:o.toLowerCase())||"",t=((s=g.stack)==null?void 0:s.toLowerCase())||"";return e.includes("network")||e.includes("fetch")?"network":e.includes("permission")||e.includes("denied")?"permission":e.includes("memory")||e.includes("quota")?"memory":e.includes("blob")||e.includes("url")?"download":e.includes("canvas")||e.includes("image")?"rendering":t.includes("jspdf")||e.includes("pdf")?"pdf":"unknown"}function to(g){return{network:"Network Connection Error",permission:"Permission Required",memory:"Insufficient Memory",download:"Download Failed",rendering:"Display Error",pdf:"PDF Generation Error",unknown:"Unexpected Error"}[g]||"Error Occurred"}function oo(g,e,t){return{network:"Unable to load required resources. Please check your internet connection and try again.",permission:`Browser permission required to save ${t}. Please allow downloads and try again.`,memory:"Not enough memory to process this large file. Try closing other browser tabs or use fewer products.",download:`Failed to download ${t}. This may be due to browser security settings or storage limitations.`,rendering:"Unable to display product images properly. Some images may be missing from the final output.",pdf:`PDF generation failed while ${e}. The file may be too large or contain problematic data.`,unknown:`An unexpected error occurred while ${e}. Please try again or contact support.`}[g]||"An unknown error has occurred."}function so(g){const e={network:`
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
      </div>`};return e[g]||e.unknown}function gt(){const g=navigator.userAgent;return g.includes("Chrome")?"Chrome":g.includes("Firefox")?"Firefox":g.includes("Safari")?"Safari":g.includes("Edge")?"Edge":g.includes("SamsungBrowser")?"Samsung Internet":"Unknown"}function no(g){const e=`
Seima Scanner Error Report
========================
Time: ${g.timestamp}
Error Type: ${g.type}
Message: ${g.message}
Context: ${g.context}
File: ${g.filename}
Browser: ${gt()}
User Agent: ${g.userAgent}
========================
  `.trim();try{navigator.clipboard.writeText(e)}catch(t){console.error("Failed to copy error report:",t)}}let Z={totalImages:0,optimizedImages:0,failedImages:0,totalSavings:0};function io(g){let e=0;if(g.length===0)return e.toString();for(let t=0;t<g.length;t++){const o=g.charCodeAt(t);e=(e<<5)-e+o,e=e&e}return Math.abs(e).toString(36)}function rt(){Z={totalImages:0,optimizedImages:0,failedImages:0,totalSavings:0}}function ro(g=!1){Z.totalImages>0}function ao(g,e){const t=document.createElement("div");t.style.cssText=`
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
      Your PDF is large (${(g.pdfSize/1024/1024).toFixed(1)} MB). 
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
  `,t.appendChild(o),document.body.appendChild(t),document.getElementById("email-regular-version").onclick=()=>{t.remove();const s=new CustomEvent("sendEmailRegular",{detail:{userDetails:g,originalFilename:e}});window.dispatchEvent(s)},document.getElementById("email-optimized-version").onclick=()=>{t.remove(),g.emailCompatible=!0,Ye(g)}}const co="tipTailSettings";async function lo(g){let e={};if(window._currentTipTailSettings)e=window._currentTipTailSettings,window._currentTipTailSettings=null;else try{e=JSON.parse(localStorage.getItem(co)||"{}")}catch(a){console.warn("Could not read tipTailSettings from localStorage:",a)}const{tipAsset:t,tipUpload:o,tailAsset:s,tailUpload:n}=e;if(!t&&!o&&!s&&!n)return g;async function i(a,c,l="file"){if(c&&a)try{const d=atob(a),u=new Uint8Array(d.length);for(let m=0;m<d.length;m++)u[m]=d.charCodeAt(m);return u.buffer}catch(d){return console.warn(`⚠️ Error converting base64 to ArrayBuffer for ${l}:`,d),null}if(a)try{const d=await fetch(a);return d.ok?await d.arrayBuffer():(console.warn(`⚠️ Failed to fetch ${l} file: ${a} (${d.status} ${d.statusText})`),null)}catch(d){return console.warn(`⚠️ Error fetching ${l} file: ${a}`,d),null}return null}async function r(a,c="file",l="unknown"){if(!a)return null;try{return await PDFLib.PDFDocument.load(a)}catch(d){return console.warn(`⚠️ Failed to parse ${c} PDF: ${l}`,d),null}}try{const a=await g.arrayBuffer(),c=await PDFLib.PDFDocument.load(a),l=await PDFLib.PDFDocument.create(),[d]=await l.copyPages(c,[0]);l.addPage(d);let u=null,m=null;if(o){const f=await i(o,!0,"tip");f?(u=await r(f,"tip","uploaded file"),u||(m="The uploaded tip file is not a valid PDF or could not be loaded.")):m="Failed to process the uploaded tip file."}else if(t){const f=await i(t,!1,"tip");f?(u=await r(f,"tip",t),u||(m=`The tip file "${t.split("/").pop()}" is not a valid PDF or could not be loaded.`)):m=`The tip file "${t.split("/").pop()}" could not be found or accessed.`}if(u){const f=Array.from({length:u.getPageCount()},(w,b)=>b);(await l.copyPages(u,f)).forEach(w=>l.addPage(w))}else m&&(console.warn(`⚠️ Tip file error: ${m}`),Ge("Tip File Issue",m));if(c.getPageCount()>1){const f=Array.from({length:c.getPageCount()-1},(w,b)=>b+1);(await l.copyPages(c,f)).forEach(w=>l.addPage(w))}let h=null,p=null;if(n){const f=await i(n,!0,"tail");f?(h=await r(f,"tail","uploaded file"),h||(p="The uploaded tail file is not a valid PDF or could not be loaded.")):p="Failed to process the uploaded tail file."}else if(s){const f=await i(s,!1,"tail");f?(h=await r(f,"tail",s),h||(p=`The tail file "${s.split("/").pop()}" is not a valid PDF or could not be loaded.`)):p=`The tail file "${s.split("/").pop()}" could not be found or accessed.`}if(h){const f=Array.from({length:h.getPageCount()},(w,b)=>b);(await l.copyPages(h,f)).forEach(w=>l.addPage(w))}else p&&(console.warn(`⚠️ Tail file error: ${p}`),Ge("Tail File Issue",p));const y=await l.save({useObjectStreams:!0,addDefaultPage:!1,objectsPerTick:20});return new Blob([y],{type:"application/pdf"})}catch(a){return console.error("❌ Error during PDF merging:",a),Ge("PDF Merging Error","An error occurred while merging the PDF files. The main PDF will be generated without tip/tail content."),g}}function Ge(g,e){const t=document.createElement("div");t.style.cssText=`
    position: fixed; top: 20px; right: 20px; z-index: 10002;
    background: #fef3c7; border: 1px solid #f59e0b; border-radius: 8px;
    padding: 16px; max-width: 400px; box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  `,t.innerHTML=`
    <div style="display: flex; align-items: flex-start; gap: 12px;">
      <span style="font-size: 20px;">⚠️</span>
      <div style="flex: 1;">
        <div style="font-weight: 600; color: #92400e; margin-bottom: 4px;">${g}</div>
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
  `,document.body.appendChild(t),setTimeout(()=>{t.parentElement&&t.remove()},8e3)}const He="fredChatHistory",Fe="fredChatMessages",Ce="fredFeedback",xe="fredQuestionLog",qe=16,O={PROXY_URL:"https://seima-ai-proxy.seima.workers.dev",APP_SECRET:"sk-proj-KRCnI_ABkeaV18bpU1dTOpXWxpKtucw",MODEL:"gpt-4o",MAX_TOKENS:2e3,TEMPERATURE:.2,MAX_CATALOG_RESULTS:60},uo=`You are a product specification parser for building/construction projects. Extract ALL product references from the provided text.

For each product, extract:
- code: the product code, SKU, part number or model number (e.g. RR012100.SN, 878015W, 14683)
- name: the product name or description (e.g. "Bench Mounted Basin Mixer", "Care 800 Cleanflush")
- brand: the manufacturer (e.g. Arcisan, Caroma, Streamline, Greens, ABI Interiors, Argent, Franke, Seima, Clark, Billi, Linsol)
- category: product type (e.g. basin mixer, shower mixer, basin, toilet/WC, bath, kitchen sink, laundry tub, shower arm, robe hook, floor waste)
- quantity: quantity if specified (default 1)
- finish: colour/finish (e.g. brushed nickel, brushed brass, chrome, matte black, gun metal grey, white)
- section: the document section or area this product belongs to (e.g. "Market Apartments - Cool Scheme", "Serviced Apartments", "Base Building")
- specCode: the specification reference code if present (e.g. TW01M, SW02B)
- style: the product style/collection if mentioned (e.g. "Arcisan Vierra", "Galiano", "Aliro")

RULES:
- Extract EVERY product, even sub-items like mounting brackets, wastes, cisterns, mixer bodies
- Do NOT stop early. Process the ENTIRE text from start to finish. Every section, every page.
- The same product appearing in different colour schemes (e.g. Cool vs Warm) should be separate entries
- Capture the section/area heading each product falls under
- If a brand says "Streamline / Harvey Norman Commercial", the brand is "Streamline" (Harvey Norman is the distributor)
- If the brand is "Siema" or "Seima", use "Seima"
- Return ONLY valid JSON — no prose, no markdown fences
- Return an array of objects

Return format: [{"code":"...","name":"...","brand":"...","category":"...","quantity":1,"finish":"...","section":"...","specCode":"...","style":"..."}]`;class mo{constructor(){this.conversationHistory=[],this._historyReady=this._loadHistory(),this.isProcessing=!1,this._catalogChecked=!1,this._syncing=!1}async chat(e,t,o=null,s=null,n=null){var i,r;if(this.isProcessing)throw new Error("A request is already in progress");this.isProcessing=!0,await this._historyReady,this._catalogChecked||(this._catalogChecked=!0,this._checkCatalogFreshness());try{const a=typeof e=="string"?e:((r=(i=e.find)==null?void 0:i.call(e,l=>l.type==="text"))==null?void 0:r.text)||"";let c;try{c=await this._agentChatStream(a,o,n,s)}catch(l){console.warn("Agent chat failed, falling back to legacy flow:",l.message),c=null}if(c||(c=await this._legacyChat(e,a,t,o,s)),!c)throw new Error("No response from AI");return this.conversationHistory.push({role:"user",content:a||e},{role:"assistant",content:c}),this.conversationHistory.length>qe&&(this.conversationHistory=this.conversationHistory.slice(-qe)),await this._saveHistory(),{content:c,usage:null}}finally{this.isProcessing=!1}}async _agentChatStream(e,t,o,s){const n=new AbortController,i=setTimeout(()=>n.abort(),6e4);try{const r=await fetch(`${O.PROXY_URL}/v1/agent-chat`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${O.APP_SECRET}`},body:JSON.stringify({message:e,history:this.conversationHistory.slice(-12),model:O.MODEL,selectedProducts:(t==null?void 0:t.length)>0?t.map(h=>({OrderCode:h.OrderCode,ProductName:h.ProductName||h.Description,room:h.room})):void 0}),signal:n.signal});if(!r.ok){const h=await r.json().catch(()=>({}));throw new Error(h.details||h.error||`Request failed (${r.status})`)}if((r.headers.get("content-type")||"").includes("application/json")){const h=await r.json();return h.needsSync?(this._ensureCatalogSync(),null):h.content||null}const c=r.body.getReader(),l=new TextDecoder;let d="",u="",m="";for(;;){const{done:h,value:p}=await c.read();if(h)break;u+=l.decode(p,{stream:!0});const y=u.split(`
`);u=y.pop();for(const f of y)if(f.startsWith("event: "))m=f.slice(7).trim();else if(f.startsWith("data: ")){try{const v=JSON.parse(f.slice(6));if(m==="status"&&o)o(v.text);else if(m==="token")d+=v.text,s&&s(v.text);else if(m==="error")throw new Error(v.message||"Agent chat failed")}catch(v){if(v instanceof SyntaxError)continue;throw v}m=""}}return d||null}catch(r){throw r.name==="AbortError"?new Error("Request timed out."):r}finally{clearTimeout(i)}}async _legacyChat(e,t,o,s,n){var l,d,u;const i=[],r=await this._findRelevantProductsAI(t,o);if(r?i.push({role:"system",content:`SEIMA PRODUCT DATA (${r.count} products):
${r.text}

IMPORTANT: The above is the COMPLETE list of matching Seima products. Do NOT reference any product whose OrderCode is not listed above.`}):i.push({role:"system",content:"No matching Seima products were found in the catalog for this query. Do NOT invent or recall products from memory. Let the user know honestly that no matching Seima products were found and suggest they refine their search."}),(s==null?void 0:s.length)>0){const m=s.map(h=>[h.OrderCode,h.ProductName||h.Description,h.room?`Room: ${h.room}`:null].filter(Boolean).join(" | ")).join(`
`);i.push({role:"system",content:`USER'S CURRENT SELECTION (${s.length} products):
${m}`})}i.push(...this.conversationHistory),i.push({role:"user",content:e});const a={messages:i,model:O.MODEL,max_tokens:O.MAX_TOKENS,temperature:O.TEMPERATURE};let c;return n?c=await this._callProxyStream("/v1/chat/completions",a,n):c=(u=(d=(l=(await this._callProxy("/v1/chat/completions",a)).choices)==null?void 0:l[0])==null?void 0:d.message)==null?void 0:u.content,this._detectSearchFailure(t,o),c}async extractFromSpecText(e,t){var c,l,d,u,m;const o="--- Page Break ---",s=e.split(o).map(h=>h.trim()).filter(Boolean),n=3,i=[];for(let h=0;h<s.length;h+=n)i.push(s.slice(h,h+n).join(`

${o}

`));console.log(`📄 Spec extraction: ${s.length} pages → ${i.length} chunk(s) (max ${n} pages each)`);for(let h=0;h<i.length;h++)console.log(`  Chunk ${h+1}: ${i[h].length} chars`);const r=[];let a={prompt_tokens:0,completion_tokens:0,total_tokens:0};for(let h=0;h<i.length;h++){t&&t(h,i.length);const p=await this._callProxy("/v1/chat/completions",{model:"gpt-4o-mini",stream:!1,raw:!0,messages:[{role:"system",content:uo},{role:"user",content:`Extract all product references from this specification document (part ${h+1} of ${i.length}):

${i[h]}`}],max_tokens:16e3,temperature:.1},18e4),y=(l=(c=p.choices)==null?void 0:c[0])==null?void 0:l.finish_reason;y==="length"&&console.warn(`⚠️ Chunk ${h+1}/${i.length} was truncated (finish_reason=length). Some products may be missing.`);const f=((m=(u=(d=p.choices)==null?void 0:d[0])==null?void 0:u.message)==null?void 0:m.content)||"[]";let v;try{const w=f.replace(/^```json?\n?/i,"").replace(/\n?```$/i,"").trim();v=JSON.parse(w)}catch{console.warn(`Failed to parse extraction result for chunk ${h+1}:`,f.slice(0,500)),v=[]}console.log(`  Chunk ${h+1}/${i.length}: ${v.length} products (${y})`),r.push(...v),p.usage&&(a.prompt_tokens+=p.usage.prompt_tokens||0,a.completion_tokens+=p.usage.completion_tokens||0,a.total_tokens+=p.usage.total_tokens||0)}return console.log(`📄 Spec extraction complete: ${r.length} products total`),{products:r,usage:a}}async extractFromTender(e,t){const o="--- Page Break ---",s=e.split(o).map(l=>l.trim()).filter(Boolean),n=3,i=[];for(let l=0;l<s.length;l+=n)i.push(s.slice(l,l+n).join(`

${o}

`));const r=[];let a=null,c={prompt_tokens:0,completion_tokens:0,total_tokens:0};for(let l=0;l<i.length;l++){t&&t(l,i.length);const d=await this._callProxy("/v1/extract-tender",{text:i[l],chunkIndex:l+1,totalChunks:i.length},18e4);d.project&&!a&&(a=d.project),r.push(...d.products||[]),d.usage&&(c.prompt_tokens+=d.usage.prompt_tokens||0,c.completion_tokens+=d.usage.completion_tokens||0,c.total_tokens+=d.usage.total_tokens||0)}return{products:r,project:a,usage:c}}async matchRerank(e,t){try{return(await this._callProxy("/v1/match-rerank",{competitorProduct:e,candidates:t},3e4)).matches||[]}catch(o){return console.warn("LLM rerank failed, using original ranking:",o.message),null}}async extractFromSpec(e,t){const o=await this._callProxy("/v1/extract-products",{content:e,mimeType:t},18e4);return{products:o.products||[],usage:o.usage}}async crossReferenceProducts(e,t){if(!T.isEnabled())try{await T.preload()}catch{}const o=[];for(const s of e){const n={...s,status:"unmatched",seimaMatches:[],seimaProduct:null},i=(s.brand||"").toLowerCase();if(i==="seima"||i==="siema"){let r=null;if(s.code&&t&&(r=t.findProductByCode(s.code)),!r&&t&&s.name){const a=t.searchProducts(s.name,5);a.length>0&&(r=a[0])}if(!r&&t&&s.code){const a=t.searchProducts(s.code,3);a.length>0&&(r=a[0])}if(r){n.status="seima-own",n.seimaProduct=r,o.push(n);continue}}if(s.code&&T.isEnabled())try{const r=await T.findSeimaMatches(s.code);if(r){const a=r.matches.map(c=>c.SeimaSKU);n.status="verified",n.seimaMatches=r.matches,t&&a.length>0&&(n.seimaProduct=t.findProductByCode(a[0])),o.push(n);continue}}catch{}if(T.isEnabled()){const r=[s.code,s.name,s.brand].filter(Boolean).join(" ");if(r.length>=2)try{const a=await T.findAlternatives(r,3);if(a.length>0){n.status="alternative",n.seimaMatches=a.map(c=>c.match),t&&(n.seimaProduct=t.findProductByCode(a[0].seimaSKU)),o.push(n);continue}}catch{}}if(t){let r=[];if(s.name&&(r=t.searchProducts(s.name,3)),r.length===0&&s.category){const a=[s.category,s.finish].filter(Boolean).join(" ");r=t.searchProducts(a,3)}r.length>0&&(n.status="catalog-suggestion",n.seimaProduct=r[0],n.catalogSuggestions=r)}o.push(n)}return o}async _callProxy(e,t,o=12e4){const s=new AbortController,n=setTimeout(()=>s.abort(),o);try{const i=await fetch(`${O.PROXY_URL}${e}`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${O.APP_SECRET}`},body:JSON.stringify(t),signal:s.signal});if(!i.ok){const r=await i.json().catch(()=>({}));throw new Error(r.details||r.error||`Request failed (${i.status})`)}return i.json()}catch(i){throw i.name==="AbortError"?new Error("Request timed out. The file may be too large — try a shorter document or individual pages."):i}finally{clearTimeout(n)}}async _callProxyStream(e,t,o,s=12e4){var r,a,c;const n=new AbortController,i=setTimeout(()=>n.abort(),s);try{const l=await fetch(`${O.PROXY_URL}${e}`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${O.APP_SECRET}`},body:JSON.stringify(t),signal:n.signal});if(!l.ok){const p=await l.json().catch(()=>({}));throw new Error(p.details||p.error||`Request failed (${l.status})`)}const d=l.body.getReader(),u=new TextDecoder;let m="",h="";for(;;){const{done:p,value:y}=await d.read();if(p)break;h+=u.decode(y,{stream:!0});const f=h.split(`
`);h=f.pop();for(const v of f){if(!v.startsWith("data: "))continue;const w=v.slice(6);if(w!=="[DONE]")try{const S=(c=(a=(r=JSON.parse(w).choices)==null?void 0:r[0])==null?void 0:a.delta)==null?void 0:c.content;S&&(m+=S,o(S))}catch{}}}return m}catch(l){throw l.name==="AbortError"?new Error("Request timed out. The file may be too large — try a shorter document or individual pages."):l}finally{clearTimeout(i)}}async _findRelevantProductsAI(e,t){if(!e||e.trim().length<2)return null;try{const o=await this._callProxy("/v1/product-search",{message:e,history:this.conversationHistory.slice(-6)},15e3);if(o.needsSync)return this._ensureCatalogSync(),this._findRelevantProductsFuse(e,t);if(o.products&&o.products.length>0){const s=o.products.slice(0,O.MAX_CATALOG_RESULTS);return this._lastProductCodes=new Set(s.map(n=>n.OrderCode)),this._lastSearchMessage=e,{text:this._formatProducts(s),count:s.length}}}catch(o){console.warn("Server-side product search failed, falling back to local Fuse.js:",o.message)}return this._findRelevantProductsFuse(e,t)}async _findRelevantProductsFuse(e,t){if(!t||!t.products||t.products.length===0)return null;let o;try{o=(await this._callProxy("/v1/generate-queries",{messages:this.conversationHistory.slice(-6),currentMessage:e},1e4)).queries}catch{o=null}const s=new Map;if(o&&Array.isArray(o)&&o.length>0){for(const i of o)if(!(!i||typeof i!="string"))for(const r of t.searchProductsFuzzy(i,25))r.OrderCode&&s.set(r.OrderCode,r)}else{const i=this._extractTerms(e.toLowerCase()),r=i.join(" ");if(r.length>=2)for(const a of t.searchProductsFuzzy(r,O.MAX_CATALOG_RESULTS))a.OrderCode&&s.set(a.OrderCode,a);for(const a of i)for(const c of t.searchProductsFuzzy(a,25))c.OrderCode&&s.set(c.OrderCode,c)}for(const i of t.searchProductsFuzzy(e,25))i.OrderCode&&s.set(i.OrderCode,i);this._lastProductCodes=new Set(s.keys()),this._lastSearchMessage=e;const n=[...s.values()].slice(0,O.MAX_CATALOG_RESULTS);return n.length===0?null:{text:this._formatProducts(n),count:n.length}}_checkCatalogFreshness(){this._callProxy("/v1/catalog/status",{},5e3).then(e=>{!e.synced||e.ageHours>24?(console.log(e.synced?`📦 Catalog embeddings are ${e.ageHours}h old — refreshing...`:"📦 No catalog embeddings found — syncing..."),this._ensureCatalogSync()):console.log(`✅ Catalog embeddings up to date (${e.count} products, ${e.ageHours}h old)`)}).catch(()=>{})}_ensureCatalogSync(){this._syncing||(this._syncing=!0,console.log("🔄 Triggering catalog embedding sync..."),this._callProxy("/v1/catalog/sync",{},12e4).then(()=>console.log("✅ Catalog embedding sync complete")).catch(e=>console.warn("⚠️ Catalog sync failed:",e.message)).finally(()=>{this._syncing=!1}))}_detectSearchFailure(e,t){var r;if(!this._lastProductCodes||!this._lastSearchMessage)return;const o=e.match(/\b(\d{6})\b/);if(!o)return;const s=o[1];if(this._lastProductCodes.has(s))return;const n=(r=t==null?void 0:t.findProductByCode)==null?void 0:r.call(t,s);if(!n)return;const i=n.ProductName||n["Product Name"]||n.Description||"";console.warn(`🔍 Search failure detected: "${this._lastSearchMessage}" missed product ${s} (${i})`),this._callProxy("/v1/search-failures",{originalQuery:this._lastSearchMessage,correctionCode:s,productName:i,timestamp:new Date().toISOString()},5e3).catch(()=>{})}_extractTerms(e){const t=new Set(["a","an","the","is","are","for","and","or","in","on","at","to","of","with","from","me","i","my","do","you","can","find","show","get","what","which","please","thanks","seima","want","need","looking","like","have","dont","any","some","got","something","interested","after","just","would","could","there","that","this","about","it","its","also","but","not","has","was","were","been","being","does","did","will","shall","should","may","might","must","how","much","many","very","really","tell","give","help","let","know","think","see"]);return e.replace(/[^a-z0-9\s-]/g," ").split(/\s+/).filter(o=>o.length>=2&&!t.has(o))}_formatProducts(e){return JSON.stringify(e.map(t=>{const o={OrderCode:t.OrderCode};t.ProductName&&(o.ProductName=t.ProductName),t.Description&&(o.Description=t.Description);const s=t["Long Description"]||t.LongDescription;s&&(o.Detail=s),t.Range&&(o.Range=t.Range),t.Group&&(o.Group=t.Group),t.SubGroup&&(o.Type=t.SubGroup);const n=t.DimX||t["X Dimension (mm)"],i=t.DimY||t["Y Dimension (mm)"],r=t.DimZ||t["Z Dimension (mm)"];n&&n!=="0"&&(o.Dimensions=`${n}x${i||0}x${r||0}mm`);const a=t["RRP INC GST"]||t.RRP_INCGST||t["RRP EX GST"]||t.RRP_EXGST||t.RRP_EX;a&&(o.Price=`$${a}`),t.Finish&&(o.Finish=t.Finish),t.Colour&&(o.Colour=t.Colour);const c=t.WELS_STAR||t["WELS Star"];return c&&(o.WELS=`${c} star`),o}))}async clearHistory(){this.conversationHistory=[],await this._saveHistory();try{const{del:e}=await z(async()=>{const{del:t}=await import("./index-DwnyWBFG.js");return{del:t}},[]);await e(Fe)}catch{}}async _saveHistory(){try{const{set:e}=await z(async()=>{const{set:t}=await import("./index-DwnyWBFG.js");return{set:t}},[]);await e(He,this.conversationHistory)}catch{}}async _loadHistory(){try{localStorage.removeItem(He);const{get:e}=await z(async()=>{const{get:o}=await import("./index-DwnyWBFG.js");return{get:o}},[]),t=await e(He);if(!Array.isArray(t))return;this.conversationHistory=t.slice(-qe)}catch{}}get processing(){return this.isProcessing}}const pe=new mo;class po{constructor(){this.selectedFile=null,this.importMode="append",this.processedData=[],this.notFoundProducts=[],this.importedMetadata=null,this._specResults=null,this._projectMeta=null}init(){this.setupEventHandlers(),this._showTenderImportBanner(),console.log("FileImportManager initialized")}setupEventHandlers(){const e=document.getElementById("import-file-btn");e&&(e.onclick=()=>this.showImportModal());const t=document.getElementById("file-drop-zone"),o=document.getElementById("file-input");t&&o&&(t.onclick=()=>o.click(),t.ondragover=l=>{l.preventDefault(),t.style.borderColor="#059669",t.style.background="#f0fdf4"},t.ondragleave=l=>{l.preventDefault(),t.style.borderColor="#ccc",t.style.background="#fafafa"},t.ondrop=l=>{l.preventDefault(),t.style.borderColor="#ccc",t.style.background="#fafafa";const d=l.dataTransfer.files;d.length>0&&this.handleFileSelection(d[0])},o.onchange=l=>{l.target.files.length>0&&this.handleFileSelection(l.target.files[0])});const s=document.getElementById("import-cancel-btn"),n=document.getElementById("import-next-btn"),i=document.getElementById("import-back-btn"),r=document.getElementById("import-process-btn"),a=document.getElementById("import-close-btn");s&&(s.onclick=()=>this.closeModal()),n&&(n.onclick=()=>this.showImportModeStep()),i&&(i.onclick=()=>this.showFileSelectionStep()),r&&(r.onclick=()=>this.processImport()),a&&(a.onclick=()=>this.closeModal()),document.querySelectorAll('input[name="import-mode"]').forEach(l=>{l.onchange=()=>{this.importMode=l.value;const d=document.getElementById("override-warning");d&&(d.style.display=this.importMode==="override"?"block":"none")}})}showImportModal(){const e=document.getElementById("file-import-modal");e&&(e.style.display="flex",this.resetModal())}closeModal(){const e=document.getElementById("file-import-modal");e&&(e.style.display="none",this.resetModal())}resetModal(){this.selectedFile=null,this.importMode="append",this.processedData=[],this.notFoundProducts=[],this._specResults=null,this._projectMeta=null;const e=document.querySelector("#file-import-modal .modal-content");e&&(e.classList.add("modal-wide"),e.classList.remove("modal-fullscreen")),this.showFileSelectionStep();const t=document.getElementById("file-input");t&&(t.value="");const o=document.getElementById("selected-file-info");o&&(o.style.display="none");const s=document.getElementById("import-next-btn");s&&(s.disabled=!0);const n=document.querySelector('input[name="import-mode"][value="append"]');n&&(n.checked=!0);const i=document.getElementById("override-warning");i&&(i.style.display="none")}showFileSelectionStep(){this.hideAllSteps();const e=document.getElementById("file-selection-step");e&&(e.style.display="block")}showImportModeStep(){this.hideAllSteps();const e=document.getElementById("import-mode-step");e&&(e.style.display="block")}showProcessingStep(){this.hideAllSteps();const e=document.getElementById("import-processing-step");e&&(e.style.display="block")}showResultsStep(){this.hideAllSteps();const e=document.getElementById("import-results-step");e&&(e.style.display="block")}showSpecResultsStep(){this.hideAllSteps();const e=document.getElementById("import-spec-results-step");e&&(e.style.display="flex");const t=document.querySelector("#file-import-modal .modal-content");t&&(t.classList.remove("modal-wide"),t.classList.add("modal-fullscreen"))}hideAllSteps(){["file-selection-step","import-mode-step","import-processing-step","import-results-step","import-spec-results-step"].forEach(t=>{const o=document.getElementById(t);o&&(o.style.display="none")})}handleFileSelection(e){console.log("File selected:",e.name,e.type,e.size);const t=N.get("import.acceptedTypes",[".csv",".xlsx",".xls",".json",".pdf",".jpg",".jpeg",".png"]),o=["text/csv","application/vnd.ms-excel","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","application/json","application/pdf","image/jpeg","image/png"],s=e.name.toLowerCase(),n=t.some(u=>s.endsWith(u.toLowerCase())),i=N.get("import.maxFileSize",15*1024*1024),a=s.endsWith(".pdf")?Math.max(i,50*1024*1024):i;if(e.size>a){const u=Math.round(a/1048576);alert(`File is too large. Maximum size is ${u}MB.`);return}if(!o.includes(e.type)&&!n){alert(`Please select a valid file. Accepted formats: ${t.join(", ")}`);return}this.selectedFile=e;const c=document.getElementById("selected-file-info"),l=document.getElementById("selected-file-name"),d=document.getElementById("import-next-btn");c&&l&&d&&(l.textContent=e.name,c.style.display="block",d.disabled=!1)}async processImport(){if(!this.selectedFile){alert("No file selected");return}console.log("Starting import process with mode:",this.importMode),this.showProcessingStep();try{const e=this.selectedFile.name.toLowerCase();if(this._isSpecFile(e)){await this._processSpecFile();return}let t;if(e.endsWith(".csv"))t=await this.parseCSV(this.selectedFile);else if(e.endsWith(".json"))t=await this.parseJSON(this.selectedFile);else if(e.endsWith(".xlsx")||e.endsWith(".xls"))t=await this.parseExcel(this.selectedFile);else throw new Error("Unsupported file format");console.log("Parsed data:",t),this.importMode==="override"&&(E.clearAllSelections(),console.log("Cleared all existing data for override mode")),await this.processDataChunked(t),this.showImportResults()}catch(e){console.error("Import failed:",e),alert(`Import failed: ${e.message}`),this.showFileSelectionStep()}}_isSpecFile(e){return/\.(pdf|jpg|jpeg|png)$/.test(e)}async _processSpecFile(){const e=document.querySelector("#import-processing-step p"),t=Math.round(this.selectedFile.size/1024);try{let o;if(this.selectedFile.type==="application/pdf"||this.selectedFile.name.toLowerCase().endsWith(".pdf")){e&&(e.innerHTML=`Reading PDF...<br><small style="color:#888">${this._escapeHtml(this.selectedFile.name)} (${t}KB)</small>`);const i=await this._extractPdfText(this.selectedFile);if(i&&i.length>100)e&&(e.innerHTML=`Analysing specification text...<br><small style="color:#888">Extracted ${i.length.toLocaleString()} characters from PDF</small>`),o=await pe.extractFromTender(i,(r,a)=>{e&&a>1&&(e.innerHTML=`Analysing specification text (part ${r+1} of ${a})...<br><small style="color:#888">Extracted ${i.length.toLocaleString()} characters from PDF</small>`)});else{let r=this.selectedFile;const a=5*1024*1024;if(this.selectedFile.size>a){e&&(e.innerHTML=`Compressing PDF for analysis...<br><small style="color:#888">Reducing ${(this.selectedFile.size/(1024*1024)).toFixed(1)}MB file for faster processing</small>`);try{if(r=await this._compressPdf(this.selectedFile,(l,d)=>{e&&(e.innerHTML=`Compressing PDF (page ${l} of ${d})...<br><small style="color:#888">Reducing file size for vision analysis</small>`)}),r!==this.selectedFile){const l=(this.selectedFile.size/1048576).toFixed(1),d=(r.size/(1024*1024)).toFixed(1);console.log(`Using compressed PDF: ${l}MB → ${d}MB`)}}catch(l){console.warn("PDF compression failed, using original:",l),r=this.selectedFile}}e&&(e.innerHTML='Analysing PDF with vision AI...<br><small style="color:#888">Image-based PDF — this may take 1-2 minutes</small>');const c=await this._fileToBase64(r);o=await pe.extractFromSpec(c,"application/pdf")}}else{e&&(e.innerHTML=`Analysing image...<br><small style="color:#888">${this._escapeHtml(this.selectedFile.name)} (${t}KB)</small>`);const i=await this._fileToBase64(this.selectedFile),r=this.selectedFile.type||"image/jpeg";o=await pe.extractFromSpec(i,r)}if(!o.products||o.products.length===0){alert("No products were found in this file. Try a clearer image or a different page."),this.showFileSelectionStep();return}this._projectMeta=o.project||null,e&&(e.textContent=`Found ${o.products.length} products. Cross-referencing with Seima catalog...`);const n=await pe.crossReferenceProducts(o.products,D);this._specResults=n,this._showSpecResults(n)}catch(o){console.error("Spec processing failed:",o),alert(`Spec processing failed: ${o.message}`),this.showFileSelectionStep()}}async _extractPdfText(e){try{if(!window.pdfjsLib){const i=document.createElement("script");i.src="https://cdn.jsdelivr.net/npm/pdfjs-dist@4.9.155/build/pdf.min.mjs",i.type="module";const r=document.createElement("script");r.type="module",r.textContent=`
          import * as pdfjsLib from 'https://cdn.jsdelivr.net/npm/pdfjs-dist@4.9.155/build/pdf.min.mjs';
          pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdn.jsdelivr.net/npm/pdfjs-dist@4.9.155/build/pdf.worker.min.mjs';
          window.pdfjsLib = pdfjsLib;
          window.dispatchEvent(new Event('pdfjsReady'));
        `,document.head.appendChild(r),await new Promise((a,c)=>{const l=setTimeout(()=>c(new Error("PDF.js load timeout")),15e3);window.addEventListener("pdfjsReady",()=>{clearTimeout(l),a()},{once:!0})})}const t=await e.arrayBuffer(),o=await window.pdfjsLib.getDocument({data:t}).promise,s=[];for(let i=1;i<=o.numPages;i++){const c=(await(await o.getPage(i)).getTextContent()).items.map(l=>l.str).join(" ");console.log(`  Page ${i}/${o.numPages}: ${c.trim().length} chars${c.trim().length===0?" (EMPTY — may be image-only)":""}`),c.trim()&&s.push(c.trim())}s.length<o.numPages&&console.warn(`⚠️ ${o.numPages-s.length} page(s) had no extractable text (image-only pages)`);const n=s.join(`

--- Page Break ---

`);return console.log(`PDF text extraction: ${o.numPages} pages, ${s.length} with text, ${n.length} chars total`),n}catch(t){return console.warn("PDF text extraction failed, will use vision API:",t),null}}_fileToBase64(e){return new Promise((t,o)=>{const s=new FileReader;s.onload=()=>t(s.result.split(",")[1]),s.onerror=()=>o(new Error("Failed to read file")),s.readAsDataURL(e)})}async _compressPdf(e,t){if(!window.pdfjsLib)throw new Error("PDF.js must be loaded before compression");if(!window.jspdf){const u=document.createElement("script");u.src="https://cdn.jsdelivr.net/npm/jspdf@2.5.2/dist/jspdf.umd.min.js",document.head.appendChild(u),await new Promise((m,h)=>{u.onload=m,u.onerror=()=>h(new Error("Failed to load jsPDF")),setTimeout(()=>h(new Error("jsPDF load timeout")),1e4)})}const o=await e.arrayBuffer(),s=await window.pdfjsLib.getDocument({data:o}).promise,{jsPDF:n}=window.jspdf,i=1.5,r=.65;let a=null;for(let u=1;u<=s.numPages;u++){t&&t(u,s.numPages);const m=await s.getPage(u),h=m.getViewport({scale:i}),p=document.createElement("canvas");p.width=h.width,p.height=h.height;const y=p.getContext("2d");await m.render({canvasContext:y,viewport:h}).promise;const f=p.toDataURL("image/jpeg",r),v=h.width>h.height?"landscape":"portrait";u===1?a=new n({orientation:v,unit:"px",format:[h.width,h.height]}):a.addPage([h.width,h.height],v),a.addImage(f,"JPEG",0,0,h.width,h.height),p.width=0,p.height=0}const c=a.output("blob"),l=new File([c],e.name,{type:"application/pdf"}),d=Math.round((1-l.size/e.size)*100);return console.log(`PDF compressed: ${(e.size/(1024*1024)).toFixed(1)}MB → ${(l.size/(1024*1024)).toFixed(1)}MB (${d}% reduction)`),l.size<e.size*.9?l:(console.log("Compression did not significantly reduce size, using original"),e)}_showSpecResults(e){const t=e.filter(u=>["verified","seima-own","alternative","catalog-suggestion"].includes(u.status)),o=e.filter(u=>u.status==="unmatched"||u.status==="ai-suggested"),s=[...new Set(e.map(u=>u.section).filter(Boolean))],n=document.getElementById("spec-results-content");if(!n)return;let i="";if(this._projectMeta){const u=this._projectMeta;[u.name,u.architect,u.builder,u.location].filter(Boolean).length>0&&(i=`<div class="spec-project-meta" style="margin-bottom:12px;padding:8px 12px;background:#f0f9ff;border-radius:6px;border:1px solid #bae6fd;">
          ${u.name?`<strong style="font-size:14px">${this._escapeHtml(u.name)}</strong><br>`:""}
          <small style="color:#555">${[u.architect?`Architect: ${this._escapeHtml(u.architect)}`:"",u.builder?`Builder: ${this._escapeHtml(u.builder)}`:"",u.location?`Location: ${this._escapeHtml(u.location)}`:""].filter(Boolean).join(" · ")}</small>
        </div>`)}const r=e.filter(u=>u.orEquivalent===!0).length;n.innerHTML=`
      <h4 style="margin:0 0 12px">Specification Analysis — ${this._escapeHtml(this.selectedFile.name)}</h4>
      ${i}
      <div class="spec-summary-bar">
        <span class="spec-stat spec-stat-verified"><strong>${e.length}</strong> Products found</span>
        <span class="spec-stat spec-stat-alt"><strong>${t.length}</strong> Matched</span>
        <span class="spec-stat spec-stat-none"><strong>${o.length}</strong> Unmatched</span>
        ${s.length>1?`<span class="spec-stat"><strong>${s.length}</strong> Sections</span>`:""}
        ${r>0?`<span class="spec-stat" style="color:#b45309"><strong>${r}</strong> "Or equivalent"</span>`:""}
      </div>
      <div class="spec-table-wrap">
        <table class="spec-table">
          <thead>
            <tr>
              <th style="width:40px"><input type="checkbox" id="spec-select-all" checked></th>
              <th>Specified Product</th>
              <th>Status</th>
              <th>Seima Alternative</th>
            </tr>
          </thead>
          <tbody>
            ${this._renderSpecRows(e)}
          </tbody>
        </table>
      </div>
    `;const a=document.getElementById("spec-add-all-btn");a&&(a.style.display="",a.textContent=`Import Selected to Grid (${e.length})`,a.onclick=()=>this._importSelectedToGrid());const c=document.getElementById("spec-export-pdf-btn");c&&(c.style.display="",c.onclick=()=>this._exportSubstitutionPDF());const l=document.getElementById("spec-done-btn");l&&(l.onclick=()=>{this.closeModal(),window.location.reload()});const d=n.querySelector("#spec-select-all");d&&d.addEventListener("change",()=>{n.querySelectorAll(".spec-row-check").forEach(u=>{u.checked=d.checked}),this._updateImportCount()}),n.addEventListener("change",u=>{u.target.classList.contains("spec-row-check")&&this._updateImportCount()}),this.showSpecResultsStep()}_renderSpecRows(e){let t="",o=null;for(let s=0;s<e.length;s++){const n=e[s];n.section&&n.section!==o&&(o=n.section,t+=`<tr class="spec-section-header"><td colspan="4">${this._escapeHtml(n.section)}</td></tr>`),t+=this._renderSpecRow(n,s)}return t}_renderSpecRow(e,t){var p,y,f;const o=e.specCode?`<strong>${this._escapeHtml(e.specCode)}</strong> `:"",s=e.name||e.category||"",n=e.brand||"",i=e.code||"",r=e.style||"",a=e.finish||"",c={"seima-own":'<span class="spec-badge spec-badge-seima">Seima Product</span>',verified:'<span class="spec-badge spec-badge-verified">Verified Match</span>',alternative:'<span class="spec-badge spec-badge-alt">Alternative</span>',"catalog-suggestion":'<span class="spec-badge spec-badge-suggest">Suggestion</span>',"ai-suggested":'<span class="spec-badge spec-badge-ai">AI Suggested</span>',unmatched:'<span class="spec-badge spec-badge-none">No Match</span>'};let l="";if(e.status==="seima-own"&&e.seimaProduct){const v=e.seimaProduct;l=`<strong>${this._escapeHtml(v.OrderCode||v["Order Code"]||"")}</strong>
        <br><small>${this._escapeHtml(v.Description||v.ProductName||"")}</small>`}else if(["verified","alternative"].includes(e.status)&&((p=e.seimaMatches)==null?void 0:p.length)>0){const v=e.seimaMatches[0].SeimaSKU||"",w=((y=e.seimaProduct)==null?void 0:y.Description)||((f=e.seimaProduct)==null?void 0:f.ProductName)||"";l=`<strong>${this._escapeHtml(v)}</strong>`,w&&(l+=`<br><small>${this._escapeHtml(w)}</small>`)}else if(e.status==="catalog-suggestion"&&e.seimaProduct){const v=e.seimaProduct;l=`<em>${this._escapeHtml(v.OrderCode||v["Order Code"]||"")}</em>
        <br><small style="color:#737373">${this._escapeHtml(v.Description||v.ProductName||"")}</small>`}else l='<span style="color:#aaa">—</span>';const d=[n,r,i,a].filter(Boolean).map(v=>this._escapeHtml(v)),u=`spec-row spec-row-${e.status}`,m=e.orEquivalent?'<span style="display:inline-block;margin-top:2px;padding:1px 5px;font-size:10px;background:#fef3c7;color:#92400e;border-radius:3px;">or equivalent</span>':"",h=e.tier?`<span style="display:inline-block;margin-top:2px;padding:1px 5px;font-size:10px;background:#e0e7ff;color:#3730a3;border-radius:3px;">${this._escapeHtml(e.tier)}</span>`:"";return`
      <tr class="${u}" data-index="${t}">
        <td><input type="checkbox" class="spec-row-check" data-index="${t}" checked></td>
        <td>
          <div>${o}${this._escapeHtml(s)}</div>
          <small style="color:#737373">${d.join(" · ")}</small>
          ${m||h?`<div style="display:flex;gap:4px;flex-wrap:wrap">${m}${h}</div>`:""}
        </td>
        <td>${c[e.status]||""}</td>
        <td>${l}</td>
      </tr>
    `}_updateImportCount(){const e=document.querySelectorAll(".spec-row-check:checked").length,t=document.getElementById("spec-add-all-btn");t&&(t.textContent=`Import Selected to Grid (${e})`,t.disabled=e===0)}_importSelectedToGrid(){var c,l;if(!this._specResults)return;const e=document.querySelectorAll(".spec-row-check:checked");this.importMode==="override"&&(E.clearAllSelections(),console.log("Cleared all existing data for override mode (spec import)"));const t=new Set;e.forEach(d=>{const u=parseInt(d.dataset.index),m=this._specResults[u];m!=null&&m.section&&t.add(m.section)}),t.forEach(d=>E.addCustomRoom(d));const o=[];e.forEach(d=>{var f,v;const u=parseInt(d.dataset.index),m=this._specResults[u];if(!m)return;const h=this._buildSpecNote(m),p=m.section||"Imported";if((m.status==="seima-own"||m.status==="verified")&&m.seimaProduct){const w=m.seimaProduct.OrderCode||m.seimaProduct["Order Code"]||((v=(f=m.seimaMatches)==null?void 0:f[0])==null?void 0:v.SeimaSKU),b=D.findProductByCode(w);if(b){o.push({product:b,notes:h,room:p,quantity:m.quantity||1});return}}let y=h;if(m.seimaProduct&&m.status!=="seima-own"&&m.status!=="verified"){const w=m.seimaProduct.OrderCode||"",b=m.seimaProduct.ProductName||m.seimaProduct.Description||"";y+=` | SEIMA SUGGESTION: ${w} ${b}`}o.push({product:{OrderCode:"",Description:h,_placeholder:!0},notes:y,room:p,quantity:m.quantity||1})});const s=E.addProductsBatch(o),n=s?o.length:0;s||alert(`Could not save all products — browser storage is full.
Try clearing old selections or using a different browser.`);const i=this._specResults.filter(d=>d.status==="seima-own"||d.status==="verified").length,r=this._specResults.length;try{sessionStorage.setItem("tenderImportBanner",JSON.stringify({fileName:((c=this.selectedFile)==null?void 0:c.name)||"Specification",total:r,matched:i,unmatched:r-i,project:((l=this._projectMeta)==null?void 0:l.name)||null,timestamp:Date.now()}))}catch{}const a=document.getElementById("spec-add-all-btn");a&&(a.textContent=`Imported ${n} item${n!==1?"s":""}`,a.disabled=!0),e.forEach(d=>{d.disabled=!0})}_buildSpecNote(e){const t=[];return e.specCode&&t.push(e.specCode),e.name&&t.push(e.name),e.brand&&t.push(e.brand),e.style&&t.push(e.style),e.code&&t.push(`Code: ${e.code}`),e.finish&&t.push(e.finish),t.join(" | ")}_showTenderImportBanner(){var e;try{const t=sessionStorage.getItem("tenderImportBanner");if(!t)return;sessionStorage.removeItem("tenderImportBanner");const o=JSON.parse(t);if(Date.now()-o.timestamp>3e4)return;const s=document.getElementById("tender-import-banner");if(!s)return;const n=o.project||o.fileName;s.innerHTML=`
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="flex-shrink:0">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
        </svg>
        <span>Tender: <strong>${this._escapeHtml(n)}</strong> — ${o.matched} matched · ${o.unmatched} unmatched</span>
        <button class="tender-banner-close" title="Dismiss">✕</button>
      `,s.style.display="flex",(e=s.querySelector(".tender-banner-close"))==null||e.addEventListener("click",()=>{s.style.display="none"}),setTimeout(()=>{s.style.display="none"},15e3)}catch{}}async _exportSubstitutionPDF(){var t,o,s;if(!this._specResults||this._specResults.length===0)return;const e=document.getElementById("spec-export-pdf-btn");e&&(e.disabled=!0,e.textContent="Generating PDF...");try{if(!window.jspdf){const w=document.createElement("script");w.src="https://cdn.jsdelivr.net/npm/jspdf@2.5.2/dist/jspdf.umd.min.js",document.head.appendChild(w),await new Promise((b,S)=>{w.onload=b,w.onerror=()=>S(new Error("Failed to load jsPDF")),setTimeout(()=>S(new Error("jsPDF load timeout")),1e4)})}const{jsPDF:n}=window.jspdf,i=new n({orientation:"portrait",unit:"mm",format:"a4"}),r=15,a=210-r*2;let c=r;i.setFontSize(24),i.setFont(void 0,"bold"),i.text("Product Substitution Schedule",r,c+30),i.setFontSize(14),i.setFont(void 0,"normal");const l=this._projectMeta;l!=null&&l.name&&i.text(l.name,r,c+45),l!=null&&l.architect&&i.text(`Architect: ${l.architect}`,r,c+55),l!=null&&l.builder&&i.text(`Builder: ${l.builder}`,r,c+65),l!=null&&l.location&&i.text(`Location: ${l.location}`,r,c+75),i.setFontSize(11),i.text(`Date: ${new Date().toLocaleDateString("en-AU")}`,r,c+90);const d=this._specResults.filter(w=>w.status!=="unmatched").length,u=this._specResults.length,m=u>0?Math.round(d/u*100):0;i.text(`Coverage: ${d} of ${u} products matched (${m}%)`,r,c+100),i.setFontSize(9),i.setTextColor(120),i.text("Prepared by Seima Product Presenter",r,280),i.setTextColor(0),i.addPage(),c=r,i.setFontSize(16),i.setFont(void 0,"bold"),i.text("Substitution Table",r,c),c+=10;const h=[18,50,22,50,25,15],p=["Spec","Specified Product","Brand","Seima Substitute","Code","Conf"];i.setFontSize(8),i.setFont(void 0,"bold"),i.setFillColor(240,240,240),i.rect(r,c,a,7,"F");let y=r;p.forEach((w,b)=>{i.text(w,y+1,c+5),y+=h[b]}),c+=8,i.setFont(void 0,"normal"),i.setFontSize(7);let f=null;for(const w of this._specResults)c>270&&(i.addPage(),c=r),w.section&&w.section!==f&&(f=w.section,i.setFont(void 0,"bold"),i.setFillColor(245,245,245),i.rect(r,c,a,6,"F"),i.text(w.section,r+1,c+4),i.setFont(void 0,"normal"),c+=7),w.status==="unmatched"?(i.setFillColor(255,240,240),i.rect(r,c,a,6,"F")):w.status==="ai-suggested"&&(i.setFillColor(255,248,230),i.rect(r,c,a,6,"F")),y=r,[w.specCode||"",`${w.name||""} ${w.finish?`(${w.finish})`:""}`.trim(),w.brand||"",((t=w.seimaProduct)==null?void 0:t.ProductName)||((o=w.seimaProduct)==null?void 0:o.Description)||"-",((s=w.seimaProduct)==null?void 0:s.OrderCode)||"-",w.status!=="unmatched"?w.aiConfidence||"Yes":"-"].forEach((S,C)=>{const P=i.splitTextToSize(String(S),h[C]-2);i.text(P[0]||"",y+1,c+4),y+=h[C]}),c+=7;const v=l!=null&&l.name?`substitution-schedule-${l.name.replace(/[^a-z0-9]/gi,"-").toLowerCase()}.pdf`:`substitution-schedule-${Date.now()}.pdf`;i.save(v)}catch(n){console.error("PDF export failed:",n),alert(`PDF export failed: ${n.message}`)}finally{e&&(e.disabled=!1,e.textContent="Export Substitution PDF")}}_escapeHtml(e){const t=document.createElement("div");return t.textContent=e||"",t.innerHTML}async parseCSV(e){if(typeof Papa>"u")try{await x.loadScript("https://cdn.jsdelivr.net/npm/papaparse@5.4.1/papaparse.min.js")}catch{throw new Error("Failed to load Papa Parse library")}return new Promise((t,o)=>{if(typeof Papa>"u"){o(new Error("Papa Parse library not loaded"));return}this.doPapaParseCSV(e,t,o)})}doPapaParseCSV(e,t,o){Papa.parse(e,{header:!0,skipEmptyLines:!1,complete:s=>{console.log("CSV parsing complete:",s);const{data:n,metadata:i}=this.extractSeimaMetadata(s.data);i&&(console.log("Extracted Seima Scanner metadata from CSV:",i),this.importedMetadata=i,this.populateCustomerInfoFromMetadata(i)),t(n)},error:s=>{console.error("CSV parsing error:",s),o(s)}})}extractSeimaMetadata(e){if(!Array.isArray(e)||e.length===0)return{data:e,metadata:null};let t=-1;for(let n=e.length-1;n>=0;n--){const i=e[n];if(Object.values(i).some(a=>a&&a.toString().includes("---METADATA---"))){t=n;break}}if(t===-1)return{data:e.filter(n=>this.isValidProductRow(n)),metadata:null};const o=e.slice(0,t).filter(n=>this.isValidProductRow(n));let s=null;if(t+1<e.length){const n=e[t+1],i=Object.values(n).filter(r=>r!=null&&r!=="");for(const r of i)if(r&&typeof r=="string"&&r.startsWith("{"))try{s=JSON.parse(r),console.log("Successfully parsed Seima metadata JSON from single cell");break}catch{console.log("Single cell JSON parse failed, trying to reconstruct from split cells...")}if(!s&&i.length>0){let r=i.findIndex(a=>a&&typeof a=="string"&&(a.startsWith("{")||a.startsWith('"{')));if(r!==-1){let a=i.slice(r).join(",");a=a.replace(/^"|"$/g,"");try{s=JSON.parse(a),console.log("Successfully parsed Seima metadata JSON from reconstructed cells")}catch(c){console.warn("Failed to parse reconstructed metadata JSON:",c),console.log("Reconstructed string was:",a);const l=a.match(/\{[^{}]*("_metadata"|"customer"|"project")[^]*\}/);if(l)try{s=JSON.parse(l[0]),console.log("Successfully parsed Seima metadata JSON using regex extraction")}catch(d){console.warn("Regex extraction also failed:",d)}}}}}return{data:o,metadata:s}}isValidProductRow(e){if(!e)return!1;const t=Object.values(e);return!(t.every(o=>!o||o.toString().trim()==="")||t.some(o=>o&&o.toString().includes("---METADATA---"))||t.some(o=>o&&o.toString().startsWith('{"_metadata"')))}populateCustomerInfoFromMetadata(e){var s,n,i,r,a,c;if(!e)return;const t=x.getStorageItem("pdfFormSettings",{}),o={...t,name:((s=e.customer)==null?void 0:s.name)||t.name||"",email:((n=e.customer)==null?void 0:n.email)||t.email||"",telephone:((i=e.customer)==null?void 0:i.phone)||t.telephone||"",project:((r=e.project)==null?void 0:r.name)||t.project||"",address:((a=e.project)==null?void 0:a.address)||t.address||"",projectNotes:((c=e.project)==null?void 0:c.notes)||t.projectNotes||""};e.staff&&x.setStorageItem("staffContact",{name:e.staff.name||"",email:e.staff.email||"",mobile:e.staff.mobile||""}),x.setStorageItem("pdfFormSettings",o),console.log("Customer information populated from Seima CSV metadata:",o)}async parseExcel(e){try{typeof XLSX>"u"&&await x.loadScript("https://cdn.jsdelivr.net/npm/xlsx@0.18.5/dist/xlsx.full.min.js")}catch{throw new Error("Failed to load XLSX library")}return new Promise((t,o)=>{if(typeof XLSX>"u"){o(new Error("XLSX library not loaded"));return}const s=new FileReader;s.onload=n=>{try{const i=new Uint8Array(n.target.result),r=XLSX.read(i,{type:"array"}),a=r.SheetNames[0],c=r.Sheets[a],l=XLSX.utils.sheet_to_json(c,{header:1,defval:""});if(l.length===0){o(new Error("Excel file is empty"));return}const d=l[0],m=l.slice(1).map(y=>{const f={};return d.forEach((v,w)=>{f[v]=y[w]||""}),f});console.log("Excel parsing complete:",m);const{data:h,metadata:p}=this.extractSeimaMetadata(m);p&&(console.log("Extracted Seima Scanner metadata from Excel:",p),this.importedMetadata=p,this.populateCustomerInfoFromMetadata(p)),t(h)}catch(i){console.error("Excel parsing error:",i),o(i)}},s.onerror=()=>{o(new Error("Failed to read Excel file"))},s.readAsArrayBuffer(e)})}async parseJSON(e){return new Promise((t,o)=>{const s=new FileReader;s.onload=n=>{try{let i=JSON.parse(n.target.result);console.log("JSON parsing complete, raw data:",i);let r=[];if(Array.isArray(i))if(i.length>0&&i[0].productsJson)for(const c of i){const l=this.extractProductsFromRecord(c);r.push(...l)}else r=i;else i&&typeof i=="object"&&(r=this.extractProductsFromRecord(i));if(r.length===0){o(new Error("No products found in JSON file. Expected Seima Scanner export format."));return}const a=r.map(c=>({Code:c.orderCode||c.OrderCode||c.code||c.Code||"",Description:c.description||c.Description||c.productName||c["Product Name"]||"",Quantity:c.quantity||c.Quantity||1,Room:c.room||c.Room||"Blank",Notes:c.notes||c.Notes||"","Price ea inc GST":c.priceIncGst||c.PriceIncGst||c.price||c.Price||"",_originalItem:c}));console.log("Normalized JSON data:",a),t(a)}catch(i){console.error("JSON parsing error:",i),o(new Error("Invalid JSON format: "+i.message))}},s.onerror=()=>{o(new Error("Failed to read JSON file"))},s.readAsText(e)})}extractProductsFromRecord(e){let t=e.productsJson||e.products||[];if(typeof t=="string")try{t=JSON.parse(t)}catch(o){return console.warn("Failed to parse productsJson string:",o),[]}return Array.isArray(t)?t:[]}async processDataChunked(e){if(e.length===0)throw new Error("No data to process");const t=this.detectColumns(e[0]);if(console.log("Detected column mapping:",t),t.productsJson){console.log("Detected Seima Scanner selection record format with Products JSON column"),await this.processSeimaSelectionRecords(e,t);return}if(!t.productCode)throw new Error('Could not find Product Code column. Please ensure your file has a column named like "Order Code", "Product Code", "SKU", or a "Products JSON" column for Seima Scanner exports.');this.processedData=[],this.notFoundProducts=[];const o=50;for(let s=0;s<e.length;s+=o){const n=e.slice(s,s+o);await this.processChunk(n,t),await new Promise(i=>setTimeout(i,10))}console.log("Processing complete. Processed:",this.processedData.length,"Not found:",this.notFoundProducts.length)}async processSeimaSelectionRecords(e,t){this.processedData=[],this.notFoundProducts=[],this.importedMetadata=null;for(const o of e){this.importedMetadata||(this.importedMetadata=this.extractMetadataFromRow(o,t),console.log("Extracted metadata from selection record:",this.importedMetadata),this.populateCustomerInfo(this.importedMetadata));const s=o[t.productsJson];if(!s){console.log("Skipping row - no Products JSON data");continue}let n=[];try{typeof s=="string"?n=JSON.parse(s):Array.isArray(s)&&(n=s)}catch(i){console.warn("Failed to parse Products JSON:",i,s);continue}if(!Array.isArray(n)||n.length===0){console.log("Skipping row - Products JSON is empty or invalid");continue}console.log(`Processing ${n.length} products from selection record`);for(const i of n)await this.processSeimaProduct(i)}console.log("Seima Scanner import complete. Processed:",this.processedData.length,"Not found:",this.notFoundProducts.length)}extractMetadataFromRow(e,t){return{customerName:e[t.customerName]||"",customerEmail:e[t.customerEmail]||"",customerPhone:e[t.customerPhone]||"",customerAddress:e[t.customerAddress]||"",customerProject:e[t.customerProject]||"",customerType:e[t.customerType]||"",builderName:e[t.builderName]||"",merchantProjectName:e[t.merchantProjectName]||"",projectNotes:e[t.projectNotes]||"",staffName:e[t.staffName]||"",staffEmail:e[t.staffEmail]||"",date:e[t.date]||"",time:e[t.time]||"",roomsList:e[t.roomsList]||"",estimateValue:e[t.estimateValue]||""}}async processSeimaProduct(e){const t=String(e.orderCode||e.OrderCode||e.code||"").trim(),o=e.description||e.Description||e.productName||"",s=parseInt(e.quantity||e.Quantity)||1,n=String(e.room||e.Room||"Blank").trim(),i=String(e.notes||e.Notes||"").trim(),r=e.priceIncGst||e.PriceIncGst||e.price||"";n&&n!=="Blank"&&this.ensureRoomExists(n);const a=this.validateProductCode(t);if(!a.isValid){console.log("Excluding product:",t,"-",a.reason);return}let c=0,l=0;if(r){const m=String(r).replace(/[^\d.-]/g,"");c=parseFloat(m)||0,l=c/1.1}console.log("Processing Seima product:",{productCode:t,productName:o,quantity:s,priceIncGst:c,room:n,notes:i});const d=await this.findProductInCatalog(t,o),u=this.createProductObject({productCode:t,productName:o,priceExGst:l,priceIncGst:c,catalogProduct:d});d||this.notFoundProducts.push({orderCode:t,productName:o||"Unknown Product",quantity:s,price:c>0?c.toFixed(2):"N/A"}),E.addProductToSelection(u,{notes:i,room:n,quantity:s}),this.processedData.push({...u,quantity:s,notes:i,room:n})}detectColumns(e){const t=Object.keys(e);console.log("Available headers:",t);const o=N.get("import.columnPatterns",{productCode:["code","ordercode","productcode","sku","order code","product code"],productName:["product name","description","name"],quantity:["quantity","qty","min order quantity","orderquantity"],priceIncGst:["price ea inc gst","price inc gst","priceincgst","rrp inc gst"],priceExGst:["price per unit","price ex gst","rrp ex gst"],room:["room","location"],notes:["notes","note","comments","comment"],productsJson:["products json","productsjson"],customerName:["customer name","customername"],customerEmail:["customer email","customeremail"],customerPhone:["customer phone","customerphone"],customerAddress:["customer address","customeraddress"],customerProject:["customer project","customerproject"]}),s=this.findColumnByPatterns(t,o.productsJson||["products json","productsjson"]);if(s)return console.log("Detected Seima Scanner selection record format with Products JSON column"),{productsJson:s,date:this.findColumnByPatterns(t,["date"]),time:this.findColumnByPatterns(t,["time"]),staffName:this.findColumnByPatterns(t,["staff name","staffname"]),staffEmail:this.findColumnByPatterns(t,["staff email","staffemail"]),customerName:this.findColumnByPatterns(t,o.customerName||["customer name","customername"]),customerEmail:this.findColumnByPatterns(t,o.customerEmail||["customer email","customeremail"]),customerPhone:this.findColumnByPatterns(t,o.customerPhone||["customer phone","customerphone"]),customerAddress:this.findColumnByPatterns(t,o.customerAddress||["customer address","customeraddress"]),customerProject:this.findColumnByPatterns(t,o.customerProject||["customer project","customerproject"]),customerType:this.findColumnByPatterns(t,["customer type","customertype"]),builderName:this.findColumnByPatterns(t,["builder name","buildername"]),merchantProjectName:this.findColumnByPatterns(t,["merchant project name","merchantprojectname"]),projectNotes:this.findColumnByPatterns(t,["project notes","projectnotes","about notes"]),roomsList:this.findColumnByPatterns(t,["rooms list","roomslist","rooms"]),estimateValue:this.findColumnByPatterns(t,["estimate value","estimatevalue"])};const n=t.some(c=>c.toLowerCase()==="code")&&!t.some(c=>c.toLowerCase().includes("ordercode"));console.log("Detected Seima Scanner CSV format:",n);const i=this.findColumnByPatterns(t,o.priceIncGst||["price ea inc gst","price inc gst","priceincgst","rrp inc gst"]),r=this.findColumnByPatterns(t,o.priceExGst||["price per unit","price ex gst","rrp ex gst"]),a=this.findColumnByPatterns(t,["adjusted amount","adjustedamount"]);return{productCode:this.findColumnByPatterns(t,o.productCode||["code","ordercode","productcode","sku"]),productName:this.findColumnByPatterns(t,o.productName||["product name","description","name"]),quantity:this.findColumnByPatterns(t,o.quantity||["quantity","qty"]),price:i||r,adjustedAmount:a,room:this.findColumnByPatterns(t,o.room||["room","location"]),notes:this.findColumnByPatterns(t,o.notes||["notes","note","comments"]),priceIncludesGst:n||!!i||t.some(c=>c.toLowerCase().includes("inc gst"))}}findColumnByPatterns(e,t){for(const o of t){const s=e.find(n=>n.toLowerCase().includes(o.toLowerCase()));if(s)return s}return null}async processChunk(e,t){for(const o of e)await this.processRow(o,t)}async processRow(e,t){const o=t.productCode?e[t.productCode]:"",s=t.productName?e[t.productName]:"",n=t.quantity?e[t.quantity]:"1",i=t.price?e[t.price]:"",r=t.room?String(e[t.room]||"").trim():"",a=t.notes?String(e[t.notes]||"").trim():"",c=String(o).trim(),l=this.validateProductCode(c);if(!l.isValid){console.log("Excluding row:",c,"-",l.reason);return}const d=Math.max(1,parseInt(n)||1);let u=0,m=0;if(t.adjustedAmount&&d>0){const f=e[t.adjustedAmount];m=(parseFloat(String(f).replace(/[^\d.-]/g,""))||0)/d,u=m*1.1}else if(i){const f=String(i).replace(/[^\d.-]/g,""),v=parseFloat(f)||0;v>0&&(t.priceIncludesGst?(u=v,m=v/1.1):(m=v,u=v*1.1))}const h=r||"Blank";h!=="Blank"&&this.ensureRoomExists(h),console.log("Processing product:",{productCode:c,productName:s,quantity:d,priceIncGst:u,room:h,notes:a});const p=await this.findProductInCatalog(c,s),y=this.createProductObject({productCode:c,productName:s,priceExGst:m,priceIncGst:u,catalogProduct:p});p?console.log("Found product in catalog:",c):(console.log("Product not found in catalog:",c),this.notFoundProducts.push({orderCode:c,productName:s||"Unknown Product",quantity:d,price:u>0?u.toFixed(2):"N/A"})),E.addProductToSelection(y,{notes:a,room:h,quantity:d}),this.processedData.push({...y,quantity:d,notes:a,room:h})}async findProductInCatalog(e,t){var s;const o=D.getAllProducts();if(e){const n=String(e).trim(),i=o.find(r=>[r.OrderCode,r.orderCode,r["Order Code"],r.order_code].some(c=>c&&String(c).trim().toLowerCase()===n.toLowerCase()));if(i)return console.log("Found product in catalog by code:",n,i),i}if(t){const n=String(t).trim().toLowerCase(),i=o.find(r=>[r.productName,r["Product Name"],r.description,r.Description,r.LongDescription].some(c=>c&&String(c).trim().toLowerCase()===n));if(i)return console.log("Found product in catalog by name:",t,i),i}if(e&&T.isEnabled())try{const n=await T.findSeimaMatches(e);if(((s=n==null?void 0:n.matches)==null?void 0:s.length)>0){const i=n.matches[0],r=o.find(a=>String(a.OrderCode||"").trim()===String(i.SeimaSKU).trim());if(r)return console.log(`Crosshair: mapped ${e} (${n.competitor}) -> ${i.SeimaSKU}`),r}}catch(n){console.warn("Crosshair lookup failed for",e,n)}return console.log("Product not found in catalog:",{productCode:e,productName:t}),null}showImportResults(){this.showResultsStep();const e=document.getElementById("import-summary"),t=document.getElementById("not-found-products"),o=document.getElementById("not-found-list");if(e&&(e.innerHTML=`
        <p><strong>Total processed:</strong> ${this.processedData.length}</p>
        <p><strong>Products added:</strong> ${this.processedData.length}</p>
        <p style="color: #059669;"><strong>All products imported successfully!</strong></p>
      `),t&&o)if(this.notFoundProducts.length>0){const n=t.querySelector("h5");n&&(n.textContent="Products added with placeholder information:",n.style.color="#2563eb");const i=this.notFoundProducts.map(r=>`<li><strong>${r.orderCode}</strong> - ${r.productName} (Qty: ${r.quantity}, Price: ${r.price})</li>`).join("");o.innerHTML=`<ul>${i}</ul>`,t.style.display="block",t.style.borderColor="#2563eb",t.style.backgroundColor="#eff6ff"}else t.style.display="none";const s=document.getElementById("import-close-btn");s&&this.processedData.length>0&&(s.textContent="View Products",s.onclick=()=>{window.location.reload()}),console.log("Import results displayed")}populateCustomerInfo(e){if(!e)return;const t=x.getStorageItem("pdfFormSettings",{}),o={...t,name:e.customerName||t.name||"",project:e.customerProject||t.project||"",address:e.customerAddress||t.address||"",email:e.customerEmail||t.email||"",telephone:e.customerPhone||t.telephone||""};x.setStorageItem("pdfFormSettings",o),console.log("Customer information populated from import:",o)}validateProductCode(e){const t=String(e||"").trim();if(!t||t.toLowerCase()==="n/a")return{isValid:!1,reason:"Empty or N/A code"};const o=N.get("import.productCodeValidation",{regex:"^\\d{6}$",allowAnyNonEmpty:!1,skipValidation:!1});if(o.skipValidation)return{isValid:!0,reason:"Validation skipped"};try{if(new RegExp(o.regex).test(t))return{isValid:!0,reason:"Matches pattern"}}catch(s){console.warn("Invalid product code regex pattern:",o.regex,s)}return o.allowAnyNonEmpty?{isValid:!0,reason:"Non-empty code accepted"}:{isValid:!1,reason:`Does not match pattern: ${o.regex}`}}createProductObject({productCode:e,productName:t,priceExGst:o,priceIncGst:s,catalogProduct:n}){return{OrderCode:e,orderCode:e,productName:t||(n?n.productName:"Unknown Product"),"Product Name":t||(n?n["Product Name"]:"Unknown Product"),Description:t||(n?n.Description:"Unknown Product"),description:t||(n?n.description:"Unknown Product"),LongDescription:n?n.LongDescription||n["Long Description"]:"","Long Description":n?n.LongDescription||n["Long Description"]:"",price:o>0?o.toFixed(2):n?n.price:"0.00",Image_URL:n?n.Image_URL||n.imageUrl:"assets/no-image.png",imageUrl:n?n.Image_URL||n.imageUrl:"assets/no-image.png",Website_URL:n?n.Website_URL||n.websiteUrl:"",websiteUrl:n?n.Website_URL||n.websiteUrl:"",Diagram_URL:n?n.Diagram_URL||n.diagramUrl:"",diagramUrl:n?n.Diagram_URL||n.diagramUrl:"",Datasheet_URL:n?n.Datasheet_URL||n.datasheetUrl:"",datasheetUrl:n?n.Datasheet_URL||n.datasheetUrl:"",RRP_EXGST:o>0?o.toFixed(2):n?n.RRP_EXGST||n.rrpExGst:"0.00",rrpExGst:o>0?o.toFixed(2):n?n.RRP_EXGST||n.rrpExGst:"0.00",RRP_INCGST:s>0?s.toFixed(2):n?n.RRP_INCGST||n.rrpIncGst:"0.00",rrpIncGst:s>0?s.toFixed(2):n?n.RRP_INCGST||n.rrpIncGst:"0.00"}}ensureRoomExists(e){!e||e==="Blank"||N.get("rooms.predefined",[]).some(i=>i.name===e)||E.getCustomRooms().some(i=>i.name===e)||(console.log("Adding imported room as custom room:",e),E.addCustomRoom(e))}}class ho{constructor(){var e,t,o,s;this.isEnabled=(e=H.PRESENTATION_RECORDING)==null?void 0:e.ENABLED,this.googleSheetsUrl=(t=H.PRESENTATION_RECORDING)==null?void 0:t.GOOGLE_SHEETS_URL,this.retryAttempts=(o=H.PRESENTATION_RECORDING)==null?void 0:o.RETRY_ATTEMPTS,this.retryDelay=(s=H.PRESENTATION_RECORDING)==null?void 0:s.RETRY_DELAY,this.currentSelectionId=null}configure(e){this.googleSheetsUrl=e,console.log("📊 Presentation recorder configured with Google Sheets URL")}getStaffContact(){const e=V.getCurrentUser();if(console.log("🔐 Auth user for save:",e),e&&e.email)return console.log("✅ Using authenticated user email:",e.email),{name:e.name||"",email:e.email,mobile:e.phone||""};console.warn("⚠️ No authenticated user, falling back to settings");try{const t=localStorage.getItem("staffContact");if(t){const o=JSON.parse(t);return console.log("📋 Using settings email:",o.email),o}}catch(t){console.warn("Could not load staff contact:",t)}return{name:"",email:"",mobile:""}}async saveSelection(e){if(!this.isEnabled||!this.googleSheetsUrl)return console.log("📊 Presentation recording disabled or not configured"),{success:!1,reason:"not_configured"};try{const t=this.prepareSelectionData(e);t.action="savePresenterSelection",console.log("📧 Saving with staff email:",t.staffEmail);const o=await this.sendToGoogleSheets(t);if(console.log("📊 Google Sheets response:",o),o.success)return console.log("✅ Presentation saved successfully with ID:",o.id),this.currentSelectionId=o.id,{success:!0,id:o.id,data:t};throw new Error(o.error||"Failed to save presentation")}catch(t){return console.error("❌ Failed to save presentation:",t),{success:!1,error:t.message}}}async updateSelection(e,t){if(!this.isEnabled||!this.googleSheetsUrl)return console.log("📊 Presentation recording disabled or not configured"),{success:!1,reason:"not_configured"};if(!e)return{success:!1,error:"No selection ID provided for update"};try{const o=this.prepareSelectionData(t);o.action="updatePresenterSelection",o.id=e;const s=await this.sendToGoogleSheets(o);if(s.success)return console.log("✅ Presentation updated successfully:",e),{success:!0,id:e,updated:!0};throw new Error(s.error||"Failed to update presentation")}catch(o){return console.error("❌ Failed to update presentation:",o),{success:!1,error:o.message}}}prepareSelectionData(e){const t=new Date,o=this.getStaffContact(),s=e.gridRows||E.getSelectedProducts()||[],n=s.filter(d=>d.product).length,i=s.reduce((d,u)=>d+(parseInt(u.quantity)||1),0),r=[...new Set(s.map(d=>d.room).filter(Boolean))],a=this.calculateEstimatedValue(s);let c=[];try{const d=localStorage.getItem("customRoomOrder");d&&(c=JSON.parse(d))}catch(d){console.warn("Could not load room order:",d)}const l=e.pdfSettings||{};return{date:t.toLocaleDateString("en-AU"),time:t.toLocaleTimeString("en-AU",{hour:"2-digit",minute:"2-digit",hour12:!1}),appVersion:H.VERSION,staffName:o.name||e.staffName||"",staffEmail:o.email||e.staffEmail||"",staffMobile:this.formatPhoneNumber(o.mobile||e.staffMobile),customerName:e.customerName||"",customerEmail:e.customerEmail||"",customerPhone:this.formatPhoneNumber(e.customerPhone),customerProject:e.customerProject||"",customerAddress:e.customerAddress||"",documentName:e.documentName||`${e.customerName||"Selection"} - ${t.toLocaleDateString("en-AU")}`,notes:e.notes||"",productsJson:JSON.stringify(s.map(d=>{var u;return{id:d.id,product:d.product?{OrderCode:d.product.OrderCode||"",Description:d.product.Description||"",RRP_INCGST:d.product.RRP_INCGST||"0.00",RRP_EX:d.product.RRP_EX||"0.00",Image_URL:d.product.Image_URL||"",Diagram_URL:d.product.Diagram_URL||"",Website_URL:d.product.Website_URL||"",BARCODE:d.product.BARCODE||""}:null,quantity:d.quantity||1,room:d.room||"",notes:d.notes||"",price:d.price||((u=d.product)==null?void 0:u.RRP_EX)||"0.00"}})),roomOrderJson:JSON.stringify(c),pdfSettingsJson:JSON.stringify(l),totalProducts:n,totalQuantity:i,totalRooms:r.length,roomsList:r.join(", "),estimatedValue:a}}calculateEstimatedValue(e){let t=0;return e.forEach(o=>{var r,a;if(!o.product)return;const s=parseInt(o.quantity)||1,n=o.price||((r=o.product)==null?void 0:r.RRP_INCGST)||((a=o.product)==null?void 0:a.RRP_EX)||"0",i=parseFloat(n.toString().replace(/[^0-9.]/g,""))||0;t+=i*s}),t.toFixed(2)}formatPhoneNumber(e){if(!e)return"";let t=String(e).trim();return t.startsWith("'")&&(t=t.substring(1)),/^4\d{8}$/.test(t)&&(t="0"+t),"'"+t}async sendToGoogleSheets(e,t=1){try{const o=new URLSearchParams;o.append("data",JSON.stringify(e)),console.log("📊 Sending to Google Sheets:",this.googleSheetsUrl);const s=await fetch(this.googleSheetsUrl,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:o});if(console.log("📊 Response status:",s.status,s.statusText),!s.ok)throw new Error(`HTTP ${s.status}: ${s.statusText}`);const n=await s.text();console.log("📊 Raw response:",n);try{return JSON.parse(n)}catch(i){return console.error("📊 Failed to parse JSON response:",i),{success:!1,error:"Invalid JSON response",raw:n}}}catch(o){return console.error(`📊 Attempt ${t} failed:`,o),t<this.retryAttempts?(console.log(`📊 Retrying in ${this.retryDelay}ms... (attempt ${t+1}/${this.retryAttempts})`),await new Promise(s=>setTimeout(s,this.retryDelay)),this.sendToGoogleSheets(e,t+1)):{success:!1,error:o.message}}}async testConnection(){if(!this.googleSheetsUrl)return{success:!1,error:"No Google Sheets URL configured"};try{const e=new URL(this.googleSheetsUrl);e.searchParams.append("action","getPresenterSelections"),e.searchParams.append("staffEmail","");const t=await fetch(e.toString(),{method:"GET",headers:{Accept:"application/json"}});if(!t.ok)throw new Error(`HTTP ${t.status}`);return{success:!0,message:"Connection successful",result:await t.json()}}catch(e){return{success:!1,error:e.message}}}getCurrentSelectionId(){return this.currentSelectionId}setCurrentSelectionId(e){this.currentSelectionId=e}clearCurrentSelectionId(){this.currentSelectionId=null}hasLoadedSelection(){return this.currentSelectionId!==null}setEnabled(e){this.isEnabled=e,console.log(`📊 Presentation recording ${e?"enabled":"disabled"}`)}}const ge=new ho;class go{constructor(){var e;this.googleSheetsUrl=(e=H.PRESENTATION_RECORDING)==null?void 0:e.GOOGLE_SHEETS_URL,this.cachedSelections=null,this.cacheTimestamp=null,this.cacheDuration=5*60*1e3}getStaffEmail(){const e=V.getCurrentUser();if(console.log("🔐 Auth user for load:",e),e&&e.email)return console.log("✅ Filtering by authenticated user email:",e.email),e.email;console.warn("⚠️ No authenticated user for filtering");try{const t=localStorage.getItem("staffContact");if(t){const o=JSON.parse(t);return console.log("📋 Fallback to settings email:",o.email),o.email||""}}catch(t){console.warn("Could not load staff email:",t)}return""}clearCache(){this.cachedSelections=null,this.cacheTimestamp=null,console.log("🗑️ Selections cache cleared")}async fetchSelections(e=!1,t=!1){if(!this.googleSheetsUrl)return console.error("❌ Google Sheets URL not configured"),[];if(!t&&!e&&this.cachedSelections&&this.cacheTimestamp&&Date.now()-this.cacheTimestamp<this.cacheDuration)return console.log("📊 Using cached selections"),this.cachedSelections;try{const o=this.getStaffEmail();console.log(`📊 Fetching ${e?"deleted":""} selections for: ${o||"all users"}`);const s=new URL(this.googleSheetsUrl);s.searchParams.append("action","getPresenterSelections"),s.searchParams.append("staffEmail",o),e&&s.searchParams.append("deletedOnly","true");const n=await fetch(s.toString(),{method:"GET",headers:{Accept:"application/json"}});if(!n.ok)throw new Error(`HTTP ${n.status}: ${n.statusText}`);const i=await n.json();if(i.success&&i.selections)return console.log(`✅ Fetched ${i.selections.length} selections`),e||(this.cachedSelections=i.selections,this.cacheTimestamp=Date.now()),i.selections;throw new Error(i.error||"Failed to fetch selections")}catch(o){return console.error("❌ Error fetching selections:",o),[]}}clearCache(){this.cachedSelections=null,this.cacheTimestamp=null}searchSelections(e,t){if(!t||t.trim()==="")return e;const o=t.toLowerCase().trim();return e.filter(s=>{const n=(s.customerName||"").toLowerCase(),i=(s.customerProject||"").toLowerCase(),r=(s.documentName||"").toLowerCase(),a=(s.date||"").toLowerCase();return n.includes(o)||i.includes(o)||r.includes(o)||a.includes(o)})}sortByDateDescending(e){return[...e].sort((t,o)=>{try{const s=this.parseDateValue(t.lastModified||t.date,t.time);return this.parseDateValue(o.lastModified||o.date,o.time)-s}catch{return 0}})}parseDateValue(e,t=""){if(!e)return new Date(0);if(e.includes("T"))return new Date(e);const o=e.toString().split("/");if(o.length===3){const s=parseInt(o[0]),n=parseInt(o[1])-1,i=parseInt(o[2]);if(t){const r=t.replace(/[AP]M/i,"").trim().split(":"),a=parseInt(r[0])||0,c=parseInt(r[1])||0,l=t.toUpperCase().includes("PM");return new Date(i,n,s,l&&a!==12?a+12:a,c)}return new Date(i,n,s)}return new Date(0)}async loadSelection(e,t="replace"){try{console.log(`📊 Loading selection: ${e.id} (mode: ${t})`);let o=[];try{o=JSON.parse(e.productsJson||"[]")}catch(r){return console.error("Failed to parse products JSON:",r),{success:!1,error:"Invalid products data"}}let s=[];try{s=JSON.parse(e.roomOrderJson||"[]")}catch(r){console.warn("Could not parse room order:",r)}let n={};try{n=JSON.parse(e.pdfSettingsJson||"{}")}catch(r){console.warn("Could not parse PDF settings:",r)}const i=await this.enrichProductsWithCatalog(o);if(t==="replace"){E.clearAllSelections();const r={name:e.customerName||"",email:e.customerEmail||"",phone:this.cleanPhoneNumber(e.customerPhone),project:e.customerProject||"",address:e.customerAddress||""};localStorage.setItem("customerDetails",JSON.stringify(r));const a={name:e.customerName||"",email:e.customerEmail||"",telephone:this.cleanPhoneNumber(e.customerPhone),project:e.customerProject||"",address:e.customerAddress||""};localStorage.setItem("pdfFormSettings",JSON.stringify(a)),s.length>0&&localStorage.setItem("customRoomOrder",JSON.stringify(s)),Object.keys(n).length>0&&localStorage.setItem("pdfSettings",JSON.stringify(n)),i.forEach(c=>{if(c.product){const l={...c.product};c.price&&(l.UserEditedPrice=c.price),E.addProductToSelection(l,{notes:c.notes||"",room:c.room||"",quantity:c.quantity||1})}})}else t==="merge"&&i.forEach(r=>{if(r.product&&!E.getSelectedProducts().some(l=>{var d;return((d=l.product)==null?void 0:d.OrderCode)===r.product.OrderCode&&l.room===r.room})){const l={...r.product};r.price&&(l.UserEditedPrice=r.price),E.addProductToSelection(l,{notes:r.notes||"",room:r.room||"",quantity:r.quantity||1})}});return ge.setCurrentSelectionId(e.id),console.log(`✅ Loaded ${i.length} products`),{success:!0,id:e.id,documentName:e.documentName,customerName:e.customerName,customerProject:e.customerProject,productCount:i.length,roomOrder:s,customerDetails:{name:e.customerName,email:e.customerEmail,phone:this.cleanPhoneNumber(e.customerPhone),project:e.customerProject,address:e.customerAddress},mode:t}}catch(o){return console.error("❌ Error loading selection:",o),{success:!1,error:o.message}}}async enrichProductsWithCatalog(e){const t=[];for(const o of e){if(!o.product){t.push(o);continue}const s=o.product.OrderCode||o.product.orderCode;if(s){const n=D.findProductByCode(s);n?t.push({id:o.id||`row_${Date.now()}_${Math.random().toString(36).substr(2,9)}`,product:n,quantity:o.quantity||1,room:o.room||"",notes:o.notes||"",price:o.price||n.RRP_EX||"0.00"}):(console.warn(`Product ${s} not found in catalog, using saved data`),t.push({id:o.id||`row_${Date.now()}_${Math.random().toString(36).substr(2,9)}`,product:{OrderCode:s,Description:o.product.Description||o.product.description||"Unknown Product",RRP_INCGST:o.product.RRP_INCGST||o.product.rrpIncGst||"0.00",RRP_EX:o.product.RRP_EX||o.product.rrpEx||"0.00",Image_URL:o.product.Image_URL||o.product.imageUrl||"",Diagram_URL:o.product.Diagram_URL||"",Website_URL:o.product.Website_URL||"",BARCODE:o.product.BARCODE||"",_notInCatalog:!0},quantity:o.quantity||1,room:o.room||"",notes:o.notes||"",price:o.price||o.product.RRP_EX||"0.00"}))}}return t}cleanPhoneNumber(e){if(!e)return"";let t=String(e).trim();return t.startsWith("'")&&(t=t.substring(1)),t}async deleteSelections(e){if(!this.googleSheetsUrl)return{success:!1,error:"Not configured"};try{const t=new URLSearchParams;t.append("data",JSON.stringify({action:"deletePresenterSelections",ids:e}));const s=await(await fetch(this.googleSheetsUrl,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:t})).json();return s.success&&this.clearCache(),s}catch(t){return{success:!1,error:t.message}}}async restoreSelections(e){if(!this.googleSheetsUrl)return{success:!1,error:"Not configured"};try{const t=new URLSearchParams;t.append("data",JSON.stringify({action:"restorePresenterSelections",ids:e}));const s=await(await fetch(this.googleSheetsUrl,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:t})).json();return s.success&&this.clearCache(),s}catch(t){return{success:!1,error:t.message}}}}const he=new go;class fo{constructor(){this.isVisible=!1,this.allSelections=[],this.filteredSelections=[],this.currentSearchQuery="",this.onLoadCallback=null,this.selectedItems=new Set,this.showDeletedMode=!1}async show(e){console.log("📂 PresentationPicker.show() called");try{this.onLoadCallback=e,this.selectedItems.clear(),this.showDeletedMode=!1,this.createModalHTML(),this.attachEventListeners(),this.isVisible=!0,console.log("📂 Modal created, fetching selections..."),this.setLoadingState(!0),await this.fetchAndRenderSelections(),console.log("📂 Picker ready")}catch(t){throw console.error("❌ PresentationPicker.show() error:",t),t}}async fetchAndRenderSelections(){this.setLoadingState(!0),this.selectedItems.clear();try{this.allSelections=await he.fetchSelections(this.showDeletedMode,!0),this.allSelections=he.sortByDateDescending(this.allSelections),this.filterAndRender()}catch(e){console.error("Error fetching selections:",e),this.showError("Failed to load selections. Please try again.")}finally{this.setLoadingState(!1)}}hide(){const e=document.getElementById("presentation-picker-modal");e&&e.remove(),this.isVisible=!1}createModalHTML(){const e=document.getElementById("presentation-picker-modal");e&&e.remove();const t=`
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
    `)}attachEventListeners(){var t,o,s,n,i;const e=document.getElementById("presentation-picker-modal");e&&((t=document.getElementById("picker-close-btn"))==null||t.addEventListener("click",()=>this.hide()),e.addEventListener("click",r=>{r.target===e&&this.hide()}),(o=document.getElementById("picker-search"))==null||o.addEventListener("input",r=>{this.currentSearchQuery=r.target.value,this.filterAndRender()}),(s=document.getElementById("picker-show-deleted"))==null||s.addEventListener("change",r=>{this.showDeletedMode=r.target.checked,this.fetchAndRenderSelections()}),(n=document.getElementById("picker-refresh"))==null||n.addEventListener("click",()=>{he.clearCache(),this.fetchAndRenderSelections()}),(i=document.getElementById("picker-retry-btn"))==null||i.addEventListener("click",()=>{this.fetchAndRenderSelections()}),document.addEventListener("keydown",this.handleKeyDown.bind(this)))}handleKeyDown(e){e.key==="Escape"&&this.isVisible&&this.hide()}setLoadingState(e){const t=document.getElementById("picker-loading"),o=document.getElementById("picker-table"),s=document.getElementById("picker-empty"),n=document.getElementById("picker-error");e?(t&&(t.style.display="flex"),o&&(o.style.display="none"),s&&(s.style.display="none"),n&&(n.style.display="none")):t&&(t.style.display="none")}showError(e){const t=document.getElementById("picker-error"),o=document.getElementById("picker-error-message"),s=document.getElementById("picker-table"),n=document.getElementById("picker-empty");o&&(o.textContent=e),t&&(t.style.display="flex"),s&&(s.style.display="none"),n&&(n.style.display="none")}filterAndRender(){this.filteredSelections=he.searchSelections(this.allSelections,this.currentSearchQuery),this.renderTable()}renderTable(){const e=document.getElementById("picker-table"),t=document.getElementById("picker-empty"),o=document.getElementById("picker-footer"),s=document.getElementById("picker-table-body");if(!s)return;if(this.filteredSelections.length===0){e&&(e.style.display="none"),t&&(t.style.display="flex"),o&&(o.style.display="none");return}e&&(e.style.display="table"),t&&(t.style.display="none"),o&&(o.style.display="flex"),s.innerHTML=this.filteredSelections.map((i,r)=>`
      <tr data-index="${r}" data-id="${i.id}">
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
          <button class="picker-load-btn" data-action="load" data-index="${r}">Load</button>
          ${this.showDeletedMode?`<button class="picker-delete-btn" data-action="restore" data-index="${r}" style="color: #059669; border-color: #059669;">Restore</button>`:`<button class="picker-delete-btn" data-action="delete" data-index="${r}">Delete</button>`}
        </td>
      </tr>
    `).join("");const n=document.getElementById("picker-selection-count");n&&(n.textContent=`${this.filteredSelections.length} selection${this.filteredSelections.length!==1?"s":""}`),this.attachRowEventListeners()}attachRowEventListeners(){const e=document.getElementById("picker-table-body");e&&(e.querySelectorAll("button[data-action]").forEach(t=>{t.addEventListener("click",o=>{o.stopPropagation();const s=t.dataset.action,n=parseInt(t.dataset.index),i=this.filteredSelections[n];s==="load"?this.showLoadConfirmation(i):s==="delete"?this.confirmDelete(i):s==="restore"&&this.restoreSelection(i)})}),e.querySelectorAll("tr").forEach(t=>{t.addEventListener("click",o=>{if(o.target.closest("button"))return;const s=parseInt(t.dataset.index),n=this.filteredSelections[s];this.showLoadConfirmation(n)})}))}showLoadConfirmation(e){const t=E.getSelectedProducts();if(!(t&&t.length>0)){this.loadSelection(e,"replace");return}const s=`
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
    `;document.body.insertAdjacentHTML("beforeend",s);const n=document.getElementById("picker-confirm-dialog");n.querySelectorAll("button[data-action]").forEach(i=>{i.addEventListener("click",()=>{const r=i.dataset.action;n.remove(),r==="replace"?this.loadSelection(e,"replace"):r==="merge"&&this.loadSelection(e,"merge")})}),n.addEventListener("click",i=>{i.target===n&&n.remove()})}async loadSelection(e,t){try{this.setLoadingState(!0);const o=await he.loadSelection(e,t);o.success?(this.hide(),this.showToast(`Loaded ${o.productCount} products (${t})`),this.onLoadCallback&&this.onLoadCallback(o)):this.showError(o.error||"Failed to load selection")}catch(o){this.showError(o.message)}finally{this.setLoadingState(!1)}}async confirmDelete(e){if(confirm(`Delete selection for "${e.customerName||"Unknown"}"?

This can be restored later.`))try{const t=await he.deleteSelections([e.id]);t.success?(this.showToast("Selection deleted"),this.fetchAndRenderSelections()):this.showError(t.error||"Failed to delete")}catch(t){this.showError(t.message)}}async restoreSelection(e){try{const t=await he.restoreSelections([e.id]);t.success?(this.showToast("Selection restored"),this.fetchAndRenderSelections()):this.showError(t.error||"Failed to restore")}catch(t){this.showError(t.message)}}showToast(e){const t=document.createElement("div");t.style.cssText=`
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
    `,t.textContent=e,document.body.appendChild(t),setTimeout(()=>{t.style.animation="toast-out 0.3s ease",setTimeout(()=>t.remove(),300)},3e3)}formatDate(e){if(!e)return"-";if(/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(e))return e;try{const t=new Date(e);if(!isNaN(t.getTime())&&t.getFullYear()>1900)return t.toLocaleDateString("en-AU")}catch{}return e}formatTime(e){if(!e)return"";const t=e.match(/(\d{1,2}):(\d{2})(?::\d{2})?\s*(AM|PM)?/i);if(t){let o=parseInt(t[1]);const s=t[2],n=(t[3]||"").toUpperCase();return n==="PM"&&o!==12?o+=12:n==="AM"&&o===12&&(o=0),`${o.toString().padStart(2,"0")}:${s}`}return e}formatValue(e){return(parseFloat(e)||0).toLocaleString("en-AU",{minimumFractionDigits:2,maximumFractionDigits:2})}escapeHtml(e){const t=document.createElement("div");return t.textContent=e||"",t.innerHTML}}const ft=new fo,at="pdfWizardSettings",ct="tipTailSettings",Be="customerLogo";class yo{constructor(){this.wizardData=this.getDefaultData(),this.availableTipPdfs=[],this.availableTailPdfs=[],this.customTipPdf=null,this.customTailPdf=null,this.onComplete=null,this.onCancel=null}getDefaultData(){return{customer:{name:"",project:"",address:"",email:"",phone:"",logo:null},options:{showRrp:!1,includeGst:!1,noPricing:!1,noQty:!1,includeDescriptions:!0,includeNotes:!0},customise:{tipPdf:"",tailPdf:""}}}async open(e={}){this.onComplete=e.onComplete||null,this.onCancel=e.onCancel||null;try{const o=await(await fetch("./screens/pdf-wizard.html")).text(),s=document.createElement("div");if(s.id="pdf-wizard-container",s.innerHTML=o,document.body.appendChild(s),!document.querySelector('link[href*="design-system.css"]')){const n=document.createElement("link");n.rel="stylesheet",n.href="./css/design-system.css",document.head.appendChild(n)}await this.loadSavedSettings(),await this.discoverAvailablePdfs(),this.setupEventHandlers(),this.populateForm(),console.log("✅ PDF Wizard opened"),this.startImagePreloading()}catch(t){console.error("Failed to open PDF wizard:",t)}}close(){const e=document.getElementById("pdf-wizard-container");e&&e.remove(),this.onCancel&&this.onCancel()}startImagePreloading(){const e=E.getSelectedProducts();if(!e||e.length===0){console.log("📷 No products to preload");return}const t=e.map(o=>{var s,n,i;return{...o.product,Image_URL:((s=o.product)==null?void 0:s.Image_URL)||((n=o.product)==null?void 0:n.imageUrl)||"",Diagram_URL:((i=o.product)==null?void 0:i.Diagram_URL)||""}});console.log(`📷 Starting background preload for ${t.length} products...`),ut(t).then(o=>{console.log(`✅ Preloaded ${o} images - ready for PDF generation`)}).catch(o=>{console.warn("Image preloading error:",o)})}async loadSavedSettings(){const e=x.getStorageItem(at,null);if(e){const s=this.getDefaultData();this.wizardData={...s,...e,customer:{...s.customer,...e.customer||{}},options:{...s.options,...e.options||{}},customise:{...s.customise,...e.customise||{}}}}const t=x.getStorageItem("pdfFormSettings",{});t.name&&(this.wizardData.customer.name=t.name),t.project&&(this.wizardData.customer.project=t.project),t.address&&(this.wizardData.customer.address=t.address),t.email&&(this.wizardData.customer.email=t.email),t.telephone&&(this.wizardData.customer.phone=t.telephone);try{const{get:s}=await z(async()=>{const{get:i}=await import("./index-DwnyWBFG.js");return{get:i}},[]),n=await s(Be);n&&(this.wizardData.customer.logo=n)}catch{}localStorage.removeItem(Be);const o=x.getStorageItem(ct,{});o.tipAsset&&(this.wizardData.customise.tipPdf=o.tipAsset),o.tailAsset&&(this.wizardData.customise.tailPdf=o.tailAsset)}async discoverAvailablePdfs(){try{let e=[];try{const t=await fetch("./assets-list.json");t.ok&&(e=await t.json())}catch{}e.length===0&&(e=["tip-AandD.pdf","tip-Builder.pdf","tip-Merchant.pdf","tip-Volume Merchant.pdf","tail-generic.pdf"]),this.availableTipPdfs=e.filter(t=>t.toLowerCase().startsWith("tip-")),this.availableTailPdfs=e.filter(t=>t.toLowerCase().startsWith("tail-")),this.renderPdfOptions()}catch(e){console.error("Failed to discover PDFs:",e)}}renderPdfOptions(){const e=document.getElementById("tip-pdf-grid");if(e){const o=this.wizardData.customise.tipPdf||"",s=o&&o!==""&&o!=="__custom__";let n=`
        <label class="option-card${s?"":" selected"}" data-tip="none">
          <input type="radio" name="tipPdf" value="" ${s?"":"checked"} style="display: none;">
          <div class="option-card-icon">✕</div>
          <span class="option-card-title">None</span>
        </label>
      `;this.availableTipPdfs.forEach(i=>{const r=i.replace("tip-","").replace(".pdf",""),a=o===`./assets/${i}`;n+=`
          <label class="option-card${a?" selected":""}" data-tip="${i}">
            <input type="radio" name="tipPdf" value="./assets/${i}" ${a?"checked":""} style="display: none;">
            <div class="option-card-icon">📄</div>
            <span class="option-card-title">${r}</span>
          </label>
        `}),e.innerHTML=n,e.querySelectorAll(".option-card").forEach(i=>{i.addEventListener("click",()=>{var a;this.customTipPdf=null,document.getElementById("tip-custom-preview").style.display="none",document.getElementById("tip-upload-link").style.display="",e.querySelectorAll(".option-card").forEach(c=>c.classList.remove("selected")),i.classList.add("selected");const r=i.querySelector("input");r&&(r.checked=!0),this.wizardData.customise.tipPdf=((a=i.querySelector("input"))==null?void 0:a.value)||"",this.saveSettings()})})}const t=document.getElementById("tail-pdf-grid");if(t){const o=this.wizardData.customise.tailPdf||"",s=o&&o!==""&&o!=="__custom__";let n=`
        <label class="option-card${s?"":" selected"}" data-tail="none">
          <input type="radio" name="tailPdf" value="" ${s?"":"checked"} style="display: none;">
          <div class="option-card-icon">✕</div>
          <span class="option-card-title">None</span>
        </label>
      `;this.availableTailPdfs.forEach(i=>{const r=i.replace("tail-","").replace(".pdf",""),a=o===`./assets/${i}`;n+=`
          <label class="option-card${a?" selected":""}" data-tail="${i}">
            <input type="radio" name="tailPdf" value="./assets/${i}" ${a?"checked":""} style="display: none;">
            <div class="option-card-icon">📄</div>
            <span class="option-card-title">${r}</span>
          </label>
        `}),t.innerHTML=n,t.querySelectorAll(".option-card").forEach(i=>{i.addEventListener("click",()=>{var a;this.customTailPdf=null,document.getElementById("tail-custom-preview").style.display="none",document.getElementById("tail-upload-link").style.display="",t.querySelectorAll(".option-card").forEach(c=>c.classList.remove("selected")),i.classList.add("selected");const r=i.querySelector("input");r&&(r.checked=!0),this.wizardData.customise.tailPdf=((a=i.querySelector("input"))==null?void 0:a.value)||"",this.saveSettings()})})}}setupEventHandlers(){var e,t,o;(e=document.getElementById("wizard-close"))==null||e.addEventListener("click",()=>this.close()),(t=document.getElementById("wizard-cancel"))==null||t.addEventListener("click",()=>this.close()),(o=document.getElementById("wizard-generate"))==null||o.addEventListener("click",s=>{s.preventDefault(),this.generatePdf()}),this.setupFormHandlers(),this.setupOptionCardHandlers(),this.setupLogoUpload(),this.setupPdfUploads()}setupFormHandlers(){document.querySelectorAll('#pdf-wizard input[type="text"], #pdf-wizard input[type="email"], #pdf-wizard input[type="tel"]').forEach(o=>{o.addEventListener("blur",()=>{this.collectFormData(),this.saveSettings()})}),document.querySelectorAll("#pdf-wizard .form-checkbox").forEach(o=>{const s=o.querySelector('input[type="checkbox"]');s&&(o.addEventListener("click",n=>{n.target.tagName==="SPAN"&&(s.checked=!s.checked,s.dispatchEvent(new Event("change",{bubbles:!0})))}),s.addEventListener("change",()=>{this.collectFormData(),this.saveSettings()}))})}setupOptionCardHandlers(){const e=document.getElementById("show-rrp"),t=document.getElementById("include-gst"),o=document.getElementById("no-pricing"),s=document.getElementById("no-qty");o&&o.addEventListener("change",()=>{const n=o.checked;this.wizardData.options.noPricing=n,n?(e&&(e.checked=!1,e.disabled=!0,e.parentElement.style.opacity="0.5",this.wizardData.options.showRrp=!1),t&&(t.checked=!1,t.disabled=!0,t.parentElement.style.opacity="0.5",this.wizardData.options.includeGst=!1)):(e&&(e.disabled=!1,e.parentElement.style.opacity="1"),t&&(t.disabled=!1,t.parentElement.style.opacity="1")),this.saveSettings()}),e&&e.addEventListener("change",()=>{this.wizardData.options.showRrp=e.checked,this.saveSettings()}),t&&t.addEventListener("change",()=>{this.wizardData.options.includeGst=t.checked,this.saveSettings()}),s&&s.addEventListener("change",()=>{this.wizardData.options.noQty=s.checked,this.saveSettings()})}setupLogoUpload(){const e=document.getElementById("logo-upload-zone"),t=document.getElementById("customer-logo-input"),o=document.getElementById("logo-preview-container"),s=document.getElementById("logo-preview-img"),n=document.getElementById("remove-logo-btn");e&&t&&(e.onclick=()=>t.click(),e.ondragover=i=>{i.preventDefault(),e.style.borderColor="var(--color-copper)"},e.ondragleave=()=>{e.style.borderColor=""},e.ondrop=i=>{i.preventDefault(),e.style.borderColor="",i.dataTransfer.files.length>0&&this.handleLogoFile(i.dataTransfer.files[0])},t.onchange=i=>{i.target.files.length>0&&this.handleLogoFile(i.target.files[0])}),n&&(n.onclick=async()=>{this.wizardData.customer.logo=null;try{const{del:i}=await z(async()=>{const{del:r}=await import("./index-DwnyWBFG.js");return{del:r}},[]);await i(Be)}catch{}o&&(o.style.display="none"),e&&(e.style.display="")}),this.wizardData.customer.logo&&s&&o&&(s.src=this.wizardData.customer.logo,o.style.display="block",e&&(e.style.display="none"))}handleLogoFile(e){if(!e.type.startsWith("image/")){alert("Please select an image file");return}if(e.size>2*1024*1024){alert("File size must be less than 2MB");return}const t=new FileReader;t.onload=async o=>{this.wizardData.customer.logo=o.target.result;try{const{set:r}=await z(async()=>{const{set:a}=await import("./index-DwnyWBFG.js");return{set:a}},[]);await r(Be,o.target.result)}catch{}const s=document.getElementById("logo-preview-container"),n=document.getElementById("logo-preview-img"),i=document.getElementById("logo-upload-zone");n&&(n.src=o.target.result),s&&(s.style.display="block"),i&&(i.style.display="none")},t.readAsDataURL(e)}setupPdfUploads(){const e=document.getElementById("tip-upload-link"),t=document.getElementById("tip-pdf-input"),o=document.getElementById("tip-custom-preview"),s=document.getElementById("tip-custom-name"),n=document.getElementById("remove-tip-btn");e&&t&&(e.onclick=d=>{d.preventDefault(),t.click()},t.onchange=d=>{d.target.files.length>0&&(this.customTipPdf=d.target.files[0],s&&(s.textContent=this.customTipPdf.name),o&&(o.style.display="flex"),e&&(e.style.display="none"),document.querySelectorAll("#tip-pdf-grid .option-card").forEach(u=>u.classList.remove("selected")),this.wizardData.customise.tipPdf="__custom__")}),n&&(n.onclick=()=>{this.customTipPdf=null,o&&(o.style.display="none"),t&&(t.value=""),e&&(e.style.display="");const d=document.querySelector('#tip-pdf-grid [data-tip="none"]');if(d){document.querySelectorAll("#tip-pdf-grid .option-card").forEach(m=>m.classList.remove("selected")),d.classList.add("selected");const u=d.querySelector("input");u&&(u.checked=!0)}this.wizardData.customise.tipPdf=""});const i=document.getElementById("tail-upload-link"),r=document.getElementById("tail-pdf-input"),a=document.getElementById("tail-custom-preview"),c=document.getElementById("tail-custom-name"),l=document.getElementById("remove-tail-btn");i&&r&&(i.onclick=d=>{d.preventDefault(),r.click()},r.onchange=d=>{d.target.files.length>0&&(this.customTailPdf=d.target.files[0],c&&(c.textContent=this.customTailPdf.name),a&&(a.style.display="flex"),i&&(i.style.display="none"),document.querySelectorAll("#tail-pdf-grid .option-card").forEach(u=>u.classList.remove("selected")),this.wizardData.customise.tailPdf="__custom__")}),l&&(l.onclick=()=>{this.customTailPdf=null,a&&(a.style.display="none"),r&&(r.value=""),i&&(i.style.display="");const d=document.querySelector('#tail-pdf-grid [data-tail="none"]');if(d){document.querySelectorAll("#tail-pdf-grid .option-card").forEach(m=>m.classList.remove("selected")),d.classList.add("selected");const u=d.querySelector("input");u&&(u.checked=!0)}this.wizardData.customise.tailPdf=""})}collectFormData(){const e=["customer-name","customer-project","customer-address","customer-email","customer-phone"],t=["name","project","address","email","phone"];e.forEach((n,i)=>{const r=document.getElementById(n);r&&(this.wizardData.customer[t[i]]=r.value)}),Object.entries({"show-rrp":"showRrp","include-gst":"includeGst","no-pricing":"noPricing","no-qty":"noQty"}).forEach(([n,i])=>{const r=document.getElementById(n);r&&(this.wizardData.options[i]=r.checked)}),Object.entries({"include-descriptions":"includeDescriptions","include-notes":"includeNotes"}).forEach(([n,i])=>{const r=document.getElementById(n);r&&(this.wizardData.options[i]=r.checked)})}populateForm(){const e={"customer-name":this.wizardData.customer.name,"customer-project":this.wizardData.customer.project,"customer-address":this.wizardData.customer.address,"customer-email":this.wizardData.customer.email,"customer-phone":this.wizardData.customer.phone};Object.entries(e).forEach(([s,n])=>{const i=document.getElementById(s);i&&(i.value=n||"")});const t={"show-rrp":this.wizardData.options.showRrp,"include-gst":this.wizardData.options.includeGst,"no-pricing":this.wizardData.options.noPricing,"no-qty":this.wizardData.options.noQty};Object.entries(t).forEach(([s,n])=>{const i=document.getElementById(s);i&&(i.checked=!!n,this.wizardData.options.noPricing&&(s==="show-rrp"||s==="include-gst")&&(i.disabled=!0,i.parentElement.style.opacity="0.5"))});const o={"include-descriptions":this.wizardData.options.includeDescriptions,"include-notes":this.wizardData.options.includeNotes};Object.entries(o).forEach(([s,n])=>{const i=document.getElementById(s);i&&(i.checked=n)})}saveSettings(){try{x.setStorageItem(at,this.wizardData),x.setStorageItem("pdfFormSettings",{name:this.wizardData.customer.name,project:this.wizardData.customer.project,address:this.wizardData.customer.address,email:this.wizardData.customer.email,telephone:this.wizardData.customer.phone}),x.setStorageItem(ct,{tipAsset:this.wizardData.customise.tipPdf!=="__custom__"?this.wizardData.customise.tipPdf:"",tailAsset:this.wizardData.customise.tailPdf!=="__custom__"?this.wizardData.customise.tailPdf:""})}catch(e){console.warn("Could not save settings to localStorage:",e.message)}}async generatePdf(){this.collectFormData(),this.saveSettings();const e={name:this.wizardData.customer.name,project:this.wizardData.customer.project,address:this.wizardData.customer.address,email:this.wizardData.customer.email,telephone:this.wizardData.customer.phone,showRrp:this.wizardData.options.showRrp,includeGst:this.wizardData.options.includeGst,excludePrice:this.wizardData.options.noPricing,excludeQty:this.wizardData.options.noQty,excludeLongDescription:!this.wizardData.options.includeDescriptions,exportCsv:!0},t={tipAsset:"",tipUpload:null,tailAsset:"",tailUpload:null};if(this.wizardData.customise.tipPdf&&this.wizardData.customise.tipPdf!=="__custom__"&&(t.tipAsset=this.wizardData.customise.tipPdf),this.wizardData.customise.tailPdf&&this.wizardData.customise.tailPdf!=="__custom__"&&(t.tailAsset=this.wizardData.customise.tailPdf),this.customTipPdf)try{const s=await this.fileToBase64(this.customTipPdf);t.tipUpload=s.replace(/^data:application\/pdf;base64,/,""),console.log("📄 Custom tip PDF converted to base64")}catch(s){console.error("Failed to convert tip PDF:",s)}if(this.customTailPdf)try{const s=await this.fileToBase64(this.customTailPdf);t.tailUpload=s.replace(/^data:application\/pdf;base64,/,""),console.log("📄 Custom tail PDF converted to base64")}catch(s){console.error("Failed to convert tail PDF:",s)}try{localStorage.setItem("tipTailSettings",JSON.stringify(t))}catch(s){console.warn("Could not save tipTailSettings to localStorage (likely quota exceeded), using in-memory:",s.message)}console.log("📄 Generating PDF with settings:",{...e,tipAsset:t.tipAsset||"(none)",tipUpload:t.tipUpload?"(custom file)":"(none)",tailAsset:t.tailAsset||"(none)",tailUpload:t.tailUpload?"(custom file)":"(none)"});const o=document.getElementById("pdf-wizard-container");o&&o.remove(),this.onComplete?this.onComplete(e,t):window.dispatchEvent(new CustomEvent("generatePdf",{detail:{...e,tipTailSettings:t}}))}fileToBase64(e){return new Promise((t,o)=>{const s=new FileReader;s.onload=()=>t(s.result),s.onerror=o,s.readAsDataURL(e)})}showSaveDialog(){Y.requireAuth(e=>{this._showSaveDialogInternal(e)})}_showSaveDialogInternal(e){this.collectFormData();const t=ge.hasLoadedSelection(),o=this.wizardData.customer.name?`${this.wizardData.customer.name} - ${new Date().toLocaleDateString("en-AU")}`:`Selection - ${new Date().toLocaleDateString("en-AU")}`,s=`
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
    `;this.injectSaveDialogStyles(),document.body.insertAdjacentHTML("beforeend",s);const n=document.getElementById("save-dialog"),i=document.getElementById("save-doc-name"),r=document.getElementById("save-notes");i==null||i.focus(),i==null||i.select(),n.querySelectorAll("button[data-action]").forEach(c=>{c.addEventListener("click",async()=>{const l=c.dataset.action;if(l==="cancel"){n.remove();return}const d=(i==null?void 0:i.value.trim())||"Untitled Selection",u=(r==null?void 0:r.value.trim())||"",m={customerName:this.wizardData.customer.name,customerEmail:this.wizardData.customer.email,customerPhone:this.wizardData.customer.phone,customerProject:this.wizardData.customer.project,customerAddress:this.wizardData.customer.address,documentName:d,notes:u,pdfSettings:{showRrp:this.wizardData.options.showRrp,includeGst:this.wizardData.options.includeGst,noPricing:this.wizardData.options.noPricing,noQty:this.wizardData.options.noQty,includeDescriptions:this.wizardData.options.includeDescriptions,includeNotes:this.wizardData.options.includeNotes,tipPdf:this.wizardData.customise.tipPdf,tailPdf:this.wizardData.customise.tailPdf},gridRows:E.getSelectedProducts()};n.querySelectorAll("button").forEach(h=>h.disabled=!0),c.textContent="Saving...";try{let h;if(l==="save-update"){const p=ge.getCurrentSelectionId();h=await ge.updateSelection(p,m)}else h=await ge.saveSelection(m);n.remove(),h.success?this.showToast(l==="save-update"?"Selection updated!":"Selection saved!"):this.showToast("Failed to save: "+(h.error||"Unknown error"),"error")}catch(h){n.remove(),this.showToast("Failed to save: "+h.message,"error")}})}),n.addEventListener("click",c=>{c.target===n&&n.remove()});const a=c=>{c.key==="Escape"&&(n.remove(),document.removeEventListener("keydown",a))};document.addEventListener("keydown",a)}injectSaveDialogStyles(){if(document.getElementById("save-dialog-styles"))return;document.head.insertAdjacentHTML("beforeend",`
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
    `)}showLoadPicker(){Y.requireAuth(e=>{this._showLoadPickerInternal(e)})}_showLoadPickerInternal(e){console.log("📂 Opening load picker...");try{ft.show(t=>{console.log("✅ Selection loaded:",t);try{const o=JSON.parse(localStorage.getItem("customerDetails")||"{}");this.wizardData.customer.name=o.name||"",this.wizardData.customer.email=o.email||"",this.wizardData.customer.phone=o.phone||"",this.wizardData.customer.project=o.project||"",this.wizardData.customer.address=o.address||"";const s=JSON.parse(localStorage.getItem("pdfSettings")||"{}");s.showRrp!==void 0&&(this.wizardData.options.showRrp=s.showRrp),s.includeGst!==void 0&&(this.wizardData.options.includeGst=s.includeGst),s.noPricing!==void 0&&(this.wizardData.options.noPricing=s.noPricing),s.noQty!==void 0&&(this.wizardData.options.noQty=s.noQty),s.includeDescriptions!==void 0&&(this.wizardData.options.includeDescriptions=s.includeDescriptions),s.includeNotes!==void 0&&(this.wizardData.options.includeNotes=s.includeNotes),s.tipPdf&&(this.wizardData.customise.tipPdf=s.tipPdf),s.tailPdf&&(this.wizardData.customise.tailPdf=s.tailPdf),this.populateForm(),this.showToast(`Loaded ${t.productCount} products`)}catch(o){console.warn("Could not reload wizard data:",o)}})}catch(t){console.error("❌ Failed to open load picker:",t),this.showToast("Failed to open picker: "+t.message,"error")}}showToast(e,t="success"){const o=document.createElement("div");o.style.cssText=`
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
    `,o.textContent=e,document.body.appendChild(o),setTimeout(()=>{o.style.animation="toast-out 0.3s ease",setTimeout(()=>o.remove(),300)},3e3)}escapeHtml(e){const t=document.createElement("div");return t.textContent=e||"",t.innerHTML}}const vo=new yo;class wo{constructor(){this.container=null,this.toasts=new Map,this.nextId=1,this.init()}init(){document.getElementById("toast-container")?this.container=document.getElementById("toast-container"):(this.container=document.createElement("div"),this.container.id="toast-container",this.container.className="toast-container",document.body.appendChild(this.container))}show({message:e,type:t="info",duration:o=4e3,action:s=null}){const n=this.nextId++,i=document.createElement("div");i.className=`toast toast-${t}`,i.setAttribute("role","alert"),i.setAttribute("aria-live","polite");const r={success:"✓",error:"✕",warning:"⚠",info:"ℹ"};i.innerHTML=`
      <div class="toast-icon">${r[t]||r.info}</div>
      <div class="toast-content">
        <span class="toast-message">${e}</span>
        ${s?`<button class="toast-action" type="button">${s.label}</button>`:""}
      </div>
      <button class="toast-close" type="button" aria-label="Dismiss">×</button>
    `;const a=i.querySelector(".toast-close");if(a.onclick=()=>this.dismiss(n),s&&s.callback){const c=i.querySelector(".toast-action");c.onclick=()=>{s.callback(),this.dismiss(n)}}return this.container.appendChild(i),this.toasts.set(n,i),requestAnimationFrame(()=>{i.classList.add("toast-enter")}),o>0&&setTimeout(()=>this.dismiss(n),o),n}dismiss(e){const t=this.toasts.get(e);t&&(t.classList.add("toast-exit"),t.addEventListener("animationend",()=>{t.remove(),this.toasts.delete(e)}))}dismissAll(){this.toasts.forEach((e,t)=>this.dismiss(t))}success(e,t={}){return this.show({message:e,type:"success",...t})}error(e,t={}){return this.show({message:e,type:"error",duration:6e3,...t})}warning(e,t={}){return this.show({message:e,type:"warning",...t})}info(e,t={}){return this.show({message:e,type:"info",...t})}withUndo(e,t,o=5e3){return this.show({message:e,type:"info",duration:o,action:{label:"Undo",callback:t}})}}const me=new wo;window.toast=me;class bo{constructor(){this.activeDropdown=null,this.updatePositionHandler=null,document.addEventListener("click",e=>{e.target.closest(".global-search-dropdown")||this.hideDropdown()})}showDropdown(e,t,o,s=!1){this.hideDropdown();const n=document.createElement("ul");n.className="global-search-dropdown";const i=300,r=e.getBoundingClientRect(),a=window.innerWidth,c=window.innerHeight,l=r.width,d=c-r.bottom,u=r.top;let m=!1;d<i&&u>d&&(m=!0);let h;m?h=Math.max(8,r.top-i-8):h=Math.min(c-i-8,r.bottom+8);let p=r.left;p+l>a-8&&(p=a-l-8),p<8&&(p=8);const y={position:"fixed",top:`${h}px`,left:`${p}px`,width:`${l}px`,minWidth:`${l}px`,maxWidth:`${l}px`,background:"#fff",border:"1px solid #d1d5db",borderRadius:"8px",boxShadow:"0 10px 25px -5px rgba(0, 0, 0, 0.15), 0 8px 10px -6px rgba(0, 0, 0, 0.10)",maxHeight:`${i}px`,overflowY:"auto",overflowX:"hidden",zIndex:"10010",listStyle:"none",margin:"0",padding:"4px 0",whiteSpace:"normal",wordWrap:"break-word",display:"block",pointerEvents:"auto",transform:"none",contain:"none",isolation:"isolate"};Object.keys(y).forEach(f=>{n.style.setProperty(f,y[f],"important")}),n.dropdownHeight=i,t.length===0?n.innerHTML='<li style="padding: 12px 16px; color: #6b7280; font-style: italic; background: #fff;">No products found</li>':n.innerHTML=t.map(f=>{if(f._crosshairValidate){const R=f._crosshairValidate,L=R.imageUrl?`<img src="${x.sanitizeInput(R.imageUrl)}" alt="" style="width:32px; height:32px; object-fit:contain; border-radius:4px; margin-right:10px; vertical-align:middle; flex-shrink:0;">`:"";return`<li data-validate-competitor="${x.sanitizeInput(R.competitor)}" data-validate-code="${x.sanitizeInput(R.productCode)}"
                       style="padding: 10px 16px; cursor: pointer; border-bottom: 1px solid #f3f4f6;
                              font-size: 13px; line-height: 1.4; display: flex; align-items: center;
                              background: #fffbeb !important; border-left: 3px solid #f59e0b;">
            ${L}
            <div style="flex:1; min-width:0;">
              <div style="font-weight: 600; color: #92400e;">${x.sanitizeInput(R.productName)}</div>
              <div style="color: #78716c; font-size: 11px;">${x.sanitizeInput(R.competitor)} · #${x.sanitizeInput(R.productCode)}${R.finish?" · "+x.sanitizeInput(R.finish):""} · ${R.matchCount>0?R.matchCount+" suggested match"+(R.matchCount!==1?"es":""):"no Seima match yet"}</div>
            </div>
            <span style="color: #d97706; font-size: 11px; font-weight: 600; white-space: nowrap; margin-left: 8px;">Review →</span>
          </li>`}const v=f.OrderCode||f.Code||"",w=f.Description||f.ProductName||f["Product Name"]||"",b=f.Image_URL||f.image_url||"",S=f._crosshairMatch,C=S?`<span style="display: inline-block; background: ${S.status==="Verified"?"#e8f5e9":"#e3f2fd"}; color: ${S.status==="Verified"?"#2e7d32":"#1565c0"}; font-size: 10px; font-weight: 600; padding: 1px 6px; border-radius: 8px; margin-left: 8px;">↔ ${x.sanitizeInput(S.competitorLabel||S.competitor)}</span>`:"",P=b?`<img src="${x.sanitizeInput(b)}" alt="" style="width:36px; height:36px; object-fit:contain; border-radius:4px; margin-right:10px; flex-shrink:0;" onerror="this.style.display='none'">`:"",k=S?Object.fromEntries(Object.entries(f).filter(([R])=>R!=="_crosshairMatch")):f;return`<li data-product='${JSON.stringify(k).replace(/'/g,"&apos;")}'
                     style="padding: 8px 16px; cursor: pointer; border-bottom: 1px solid #f3f4f6; 
                            transition: background-color 0.15s ease; font-size: 14px; line-height: 1.5;
                            margin: 0; display: flex; align-items: center; width: 100%; 
                            white-space: normal; word-wrap: break-word; overflow: visible; background: ${S?"#f0f7ff":"#fff"} !important;">
          ${P}
          <div style="flex:1; min-width:0;">
            <span style="font-weight: 600; color: #2563eb;">${x.sanitizeInput(v)}</span>
            <span style="color: #6b7280; margin: 0 8px;">—</span>
            <span style="color: #374151;">${x.sanitizeInput(w)}</span>
            ${C}
          </div>
        </li>`}).join(""),n.querySelectorAll("li[data-validate-competitor]").forEach(f=>{f.addEventListener("mouseenter",()=>f.style.background="#fef3c7"),f.addEventListener("mouseleave",()=>f.style.background="#fffbeb"),f.onclick=()=>{const v=f.dataset.validateCompetitor,w=f.dataset.validateCode;window.location.href=`screens/validator.html?competitor=${encodeURIComponent(v)}&search=${encodeURIComponent(w)}`}}),n.querySelectorAll("li[data-product]").forEach((f,v)=>{f.addEventListener("mouseenter",()=>{n.querySelectorAll("li.active").forEach(w=>w.classList.remove("active")),f.classList.add("hover")}),f.addEventListener("mouseleave",()=>{f.classList.remove("hover")}),f.onclick=()=>{try{const w=JSON.parse(f.getAttribute("data-product"));o(w),this.hideDropdown()}catch(w){console.error("Failed to parse product data:",w)}},s&&v===0&&(f.classList.add("active"),f.style.setProperty("background","rgba(184,115,51,0.12)","important"))}),document.body.appendChild(n),this.activeDropdown=n,this.updatePositionHandler=()=>{const f=e.getBoundingClientRect(),v=window.innerHeight,w=n.dropdownHeight||300,b=v-f.bottom,S=f.top;let C=!1;b<w&&S>b&&(C=!0);let P;C?P=Math.max(8,f.top-w-8):P=Math.min(v-w-8,f.bottom+8);let k=f.left;k+f.width>a-8&&(k=a-f.width-8),k<8&&(k=8),n.style.setProperty("top",`${P}px`,"important"),n.style.setProperty("left",`${k}px`,"important"),n.style.setProperty("width",`${f.width}px`,"important"),n.style.setProperty("min-width",`${f.width}px`,"important"),n.style.setProperty("max-width",`${f.width}px`,"important")},window.addEventListener("scroll",this.updatePositionHandler),window.addEventListener("resize",this.updatePositionHandler)}hideDropdown(){this.activeDropdown&&(this.updatePositionHandler&&(window.removeEventListener("scroll",this.updatePositionHandler),window.removeEventListener("resize",this.updatePositionHandler)),this.activeDropdown.remove(),this.activeDropdown=null,this.updatePositionHandler=null)}}const We="tipTailSettings",Ae="customerLogo";class So{constructor(){this.gridRows=[],this.nextRowId=1,this._matchSuggestionsRunId=0,this.currentSearchRow=null,this.searchCache=new Map,this.searchTimeout=null,this.dropdownManager=new bo,this.lastUsedRoom="Blank",this.draggedRowId=null,this.draggedRoomName=null,this.customRoomOrder=this.loadCustomRoomOrder(),this.currentSelectionId=null,this.currentSelectionName="New Selection",this.hasUnsavedChanges=!1,this.autoSaveTimeout=null,this.lastSaveTime=null}loadCustomRoomOrder(){try{const e=localStorage.getItem("customRoomOrder");return e?JSON.parse(e):[]}catch{return[]}}saveCustomRoomOrder(){try{localStorage.setItem("customRoomOrder",JSON.stringify(this.customRoomOrder))}catch(e){console.warn("Failed to save room order:",e)}}init(){const e=document.querySelector(".grid-table");e&&(e.style.removeProperty("table-layout"),e.style.removeProperty("overflow"),e.classList.remove("has-open-dropdown"));const t=document.querySelector(".global-search-dropdown");t&&t.remove(),this.setupEventListeners(),this.updateAllRoomDropdowns(),this.loadExistingProducts(),this.updateTotals(),this.ensureAtLeastOneEmptyRow(),this.handleSortChange(),this.initContextHeader(),this.checkForRecentSelection()}initContextHeader(){this.updateContextHeader();const e=document.getElementById("save-selection-btn"),t=document.getElementById("load-selection-btn");e&&e.addEventListener("click",()=>this.showSaveDialog()),t&&t.addEventListener("click",()=>this.showLoadPicker());const o=document.getElementById("entry-import"),s=document.getElementById("entry-load"),n=document.getElementById("entry-new"),i=document.getElementById("entry-continue");o&&o.addEventListener("click",()=>this.showImportModal()),s&&s.addEventListener("click",()=>this.showLoadPicker()),n&&n.addEventListener("click",()=>this.addEmptyRow()),i&&i.addEventListener("click",()=>this.loadRecentSelection())}updateContextHeader(){const e=document.getElementById("selection-name"),t=document.getElementById("status-icon"),o=document.getElementById("save-indicator");e&&(e.textContent=this.currentSelectionName||"New Selection"),t&&(this.currentSelectionId?(t.textContent="●",t.classList.add("saved"),t.classList.remove("unsaved")):(t.textContent="○",t.classList.remove("saved"))),o&&(o.style.display=this.hasUnsavedChanges?"flex":"none")}markAsChanged(){this.hasUnsavedChanges=!0,this.updateContextHeader(),clearTimeout(this.autoSaveTimeout),this.autoSaveTimeout=setTimeout(()=>{this.hasUnsavedChanges&&this.currentSelectionId&&this.autoSave()},3e4)}async autoSave(){if(!(!this.currentSelectionId||!this.hasUnsavedChanges))try{const e=this.prepareSelectionData();(await ge.updateSelection(this.currentSelectionId,e)).success&&(this.hasUnsavedChanges=!1,this.lastSaveTime=new Date,this.updateContextHeader(),me.success("Auto-saved"))}catch(e){console.warn("Auto-save failed:",e)}}async checkForRecentSelection(){try{const e=E.getUserSettings(),t=V.getCurrentUser();if(!((e==null?void 0:e.staffEmail)||(t==null?void 0:t.email)||""))return;const s=await he.fetchSelections();if(s.length>0){const n=s[0],i=document.getElementById("entry-continue"),r=document.getElementById("recent-selection-name");i&&r&&(i.style.display="flex",r.textContent=`${n.documentName||n.customerName} • ${n.date}`,i.dataset.selectionId=n.id)}}catch(e){console.warn("Could not check for recent selections:",e)}}async loadRecentSelection(){const e=document.getElementById("entry-continue");if(!(e==null?void 0:e.dataset.selectionId)){me.warning("No recent selection found");return}this.showLoadPicker()}prepareSelectionData(){const e=x.getStorageItem("pdfFormSettings",{});return{customerName:e.name||"",customerEmail:e.email||"",customerPhone:e.telephone||"",customerProject:e.project||"",customerAddress:e.address||"",documentName:this.currentSelectionName,notes:"",pdfSettings:x.getStorageItem("pdfWizardSettings",{}),gridRows:E.getSelectedProducts(),roomOrder:this.customRoomOrder}}setupEventListeners(){const e=document.getElementById("back-to-home"),t=document.getElementById("import-file-btn"),o=document.getElementById("download-btn"),s=document.getElementById("clear-all-btn"),n=document.getElementById("add-row-btn");e&&(e.onclick=()=>location.reload()),t&&(t.onclick=()=>this.showImportModal()),o&&(o.onclick=()=>this.showDownloadModal()),s&&(s.onclick=()=>this.showClearAllModal()),n&&(n.onclick=()=>this.addEmptyRow());const i=document.getElementById("clear-all-cancel"),r=document.getElementById("clear-all-confirm");i&&(i.onclick=()=>this.hideClearAllModal()),r&&(r.onclick=()=>{var f;const y=((f=document.getElementById("clear-customer-details"))==null?void 0:f.checked)??!0;this.clearAll(y),this.hideClearAllModal()});const a=document.getElementById("clear-all-modal");a&&(a.onclick=y=>{y.target===a&&this.hideClearAllModal()});const c=document.getElementById("sort-by");c&&(c.onchange=()=>this.handleSortChange());const l=document.getElementById("sort-refresh-btn");l&&(l.onclick=()=>this.handleSortChange());const d=document.getElementById("grid-body");d&&(d.addEventListener("input",this.handleGridInput.bind(this)),d.addEventListener("change",this.handleGridChange.bind(this)),d.addEventListener("click",this.handleGridClick.bind(this)),d.addEventListener("keydown",this.handleGridKeydown.bind(this)),d.addEventListener("focusin",this.handleGridFocusIn.bind(this)),d.addEventListener("focusout",this.handleGridFocusOut.bind(this)),d.addEventListener("dragstart",this.handleDragStart.bind(this)),d.addEventListener("dragover",this.handleDragOver.bind(this)),d.addEventListener("dragleave",this.handleDragLeave.bind(this)),d.addEventListener("drop",this.handleDrop.bind(this)),d.addEventListener("dragend",this.handleDragEnd.bind(this))),document.addEventListener("click",y=>{!y.target.closest(".grid-product-cell")&&!y.target.closest(".global-search-dropdown")&&this.hideAllDropdowns()});const u=document.getElementById("pdf-email-modal"),m=document.getElementById("pdf-email-cancel");m&&u&&(m.onclick=()=>{u.style.display="none"});const h="pdfFormSettings",p=document.getElementById("pdf-email-form");u&&u.addEventListener("show",()=>{const y=x.getStorageItem(h,{});p&&(p["user-name"].value=y.name||"",p["user-project"].value=y.project||"",p["user-address"].value=y.address||"",p["user-email"].value=y.email||"",p["user-telephone"].value=y.telephone||"",p["exclude-prices"].checked=!!y.excludePrices,p["exclude-qty"].checked=!!y.excludeQty,p["exclude-long-description"].checked=!!y.excludeLongDescription,p["include-gst"].checked=!!y.includeGst)}),p&&(p.addEventListener("input",()=>{x.setStorageItem(h,{name:p["user-name"].value,project:p["user-project"].value,address:p["user-address"].value,email:p["user-email"].value,telephone:p["user-telephone"].value,excludePrices:p["exclude-prices"].checked,excludeQty:p["exclude-qty"].checked,excludeLongDescription:p["exclude-long-description"].checked,includeGst:p["include-gst"].checked})}),p.addEventListener("change",()=>{x.setStorageItem(h,{name:p["user-name"].value,project:p["user-project"].value,address:p["user-address"].value,email:p["user-email"].value,telephone:p["user-telephone"].value,excludePrices:p["exclude-prices"].checked,excludeQty:p["exclude-qty"].checked,excludeLongDescription:p["exclude-long-description"].checked,includeGst:p["include-gst"].checked})}),p.onsubmit=y=>{var v,w,b,S,C,P,k,R,L,_,U;y.preventDefault(),x.setStorageItem(h,{name:p["user-name"].value,project:p["user-project"].value,address:p["user-address"].value,email:p["user-email"].value,telephone:p["user-telephone"].value,excludePrices:p["exclude-prices"].checked,excludeQty:p["exclude-qty"].checked,excludeLongDescription:p["exclude-long-description"].checked,includeGst:p["include-gst"].checked});const f={name:((v=p["user-name"])==null?void 0:v.value)||"",project:((w=p["user-project"])==null?void 0:w.value)||"",address:((b=p["user-address"])==null?void 0:b.value)||"",email:((S=p["user-email"])==null?void 0:S.value)||"",telephone:((C=p["user-telephone"])==null?void 0:C.value)||"",excludePrice:(P=p["exclude-qty"])!=null&&P.checked?!0:((k=p["exclude-price"])==null?void 0:k.checked)||((R=p["exclude-prices"])==null?void 0:R.checked)||!1,excludeQty:((L=p["exclude-qty"])==null?void 0:L.checked)||!1,excludeLongDescription:((_=p["exclude-long-description"])==null?void 0:_.checked)||!1,includeGst:((U=p["include-gst"])==null?void 0:U.checked)||!1,exportCsv:!0};console.log("DEBUG: userDetails created for PDF:",f),window.showPdfFormScreen?window.showPdfFormScreen(f):typeof showPdfFormScreen=="function"&&showPdfFormScreen(f),u&&(u.style.display="none")})}addEmptyRow(){const e=`row_${this.nextRowId++}`,t={id:e,product:null,room:"Blank",quantity:1,price:"0.00",notes:""};this.gridRows.push(t),this.renderGrid(),setTimeout(()=>{const o=document.querySelector(`[data-row-id="${e}"]`);o&&(o.scrollIntoView({behavior:"smooth",block:"center"}),o.style.backgroundColor="#dbeafe",o.style.transition="background-color 0.3s ease",setTimeout(()=>{o.style.backgroundColor="";const s=o.querySelector(".grid-search-input");s&&s.focus()},800))},100)}removeRow(e){const t=this.gridRows.findIndex(o=>o.id===e);if(t!==-1){const o=this.gridRows[t],s={...o,index:t,product:o.product?{...o.product}:null};if(o.product&&o.storageId&&E.removeProductFromSelection(o.storageId),this.gridRows.splice(t,1),this.renderGrid(),this.updateTotals(),s.product){const n=s.product.Description||s.product.ProductName||s.product.OrderCode||"Product",i=n.length>30?n.substring(0,30)+"...":n;me.withUndo(`Removed "${i}"`,()=>{this.restoreRow(s)})}}this.ensureAtLeastOneEmptyRow()}restoreRow(e){const t={id:`row-${this.nextRowId++}`,product:e.product,qty:e.qty||1,notes:e.notes||"",room:e.room||"Blank",price:e.price||null,storageId:null};t.product&&(t.storageId=E.addProductToSelection(t.product,{notes:t.notes,room:t.room,quantity:t.quantity}));const o=Math.min(e.index,this.gridRows.length);this.gridRows.splice(o,0,t),this.renderGrid(),this.updateTotals(),me.success("Product restored")}moveRow(e,t){const o=this.gridRows.findIndex(i=>i.id===e);if(o===-1)return;let s;if(t==="up"?s=Math.max(0,o-1):t==="down"&&(s=Math.min(this.gridRows.length-1,o+1)),s===o)return;const n=this.gridRows.splice(o,1)[0];this.gridRows.splice(s,0,n),this.renderGrid(),this.updateTotals(),setTimeout(()=>{const i=document.querySelector(`[data-row-id="${e}"]`);i&&(i.style.backgroundColor="#dbeafe",setTimeout(()=>{i.style.backgroundColor=""},500))},100)}async handleProductSearch(e,t){if(!t||t.length<2){this.hideSearchDropdown(e);return}const o=t.toLowerCase();if(this.searchCache.has(o)){this.showSearchResults(e,this.searchCache.get(o),t);return}clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(async()=>{try{const s=await this.searchProducts(t);this.searchCache.set(o,s),this.showSearchResults(e,s,t)}catch(s){console.error("Product search failed:",s),this.hideSearchDropdown(e)}},300)}async searchProducts(e){var c;D.isLoaded||await new Promise(l=>{const d=()=>{D.isLoaded?l():setTimeout(d,100)};d()});const t=T.isEnabled(),o=T.isWriteEnabled();let s=null;if(t&&e.trim().length>=2&&!e.includes(" "))try{s=await T.findSeimaMatches(e.trim())}catch{}const[n,i,r]=await Promise.all([Promise.resolve(D.searchProducts(e,50)),t?T.findAlternatives(e).catch(l=>(console.warn("Crosshair competitor lookup failed:",l),[])):Promise.resolve([]),o?T.findUnvalidatedProducts(e).catch(l=>(console.warn("Crosshair unvalidated lookup failed:",l),[])):Promise.resolve([])]),a=[...n];if(s&&((c=s.matches)==null?void 0:c.length)>0){const l=String(s.matches[0].SeimaSKU),d=D.findProductByCode(l);if(d&&!a.some(u=>(u.OrderCode||u.Code)===l)){const u=s.competitorProduct,m=String((u==null?void 0:u.product_code)||s.matches[0].CompetitorSKU||""),h=(u==null?void 0:u.product_name)||"",p=(u==null?void 0:u.finish)||"",y=[s.competitor+":",m,h?"- "+h:"",p?"- "+p:""].filter(Boolean).join(" ");a.unshift({...d,_crosshairMatch:{competitor:s.competitor,competitorProduct:u,competitorLabel:y,confidence:s.matches[0].Confidence,reason:s.matches[0].MatchReason,status:s.matches[0].Status}})}}if(i.length>0){const l=new Set(a.map(d=>d.OrderCode));for(const d of i){const u=D.findProductByCode(d.seimaSKU);if(!u||l.has(u.OrderCode))continue;l.add(u.OrderCode);const m=d.competitorProduct,h=String((m==null?void 0:m.product_code)||d.match.CompetitorSKU||""),p=(m==null?void 0:m.product_name)||"",y=(m==null?void 0:m.finish)||"",f=[d.competitor+":",h,p?"- "+p:"",y?"- "+y:""].filter(Boolean).join(" ");a.unshift({...u,_crosshairMatch:{competitor:d.competitor,competitorProduct:m,competitorLabel:f,confidence:d.match.Confidence,reason:d.match.MatchReason,status:d.match.Status}})}}if(r.length>0)for(const l of r){const d=l.product,u=String(d.product_code||"");a.push({_crosshairValidate:{competitor:l.competitor,productCode:u,productName:d.product_name||d.collection||u,matchCount:l.matchCount,imageUrl:d.image_url,finish:d.finish||""}})}if(a.length===0&&t&&e.trim().length>=3&&!e.includes(" "))try{const l=await T.findCompetitorEntryByCode(e.trim());if(l){const d=l.competitorProduct,u=String((d==null?void 0:d.product_code)||l.matchedCode||e.trim());a.push({_crosshairValidate:{competitor:l.competitor,productCode:u,productName:(d==null?void 0:d.product_name)||(d==null?void 0:d.collection)||u,matchCount:0,imageUrl:(d==null?void 0:d.image_url)||"",finish:(d==null?void 0:d.finish)||""}})}}catch{}return a}showSearchResults(e,t,o){let s=!1;if(t.length>0&&o){const n=o.toUpperCase().trim(),i=t[0],r=(i.OrderCode||"").toString().toUpperCase().trim(),a=(i.BARCODE||i.Barcode||"").toString().toUpperCase().trim();(r===n||a===n)&&(s=!0)}this.dropdownManager.showDropdown(e,t,n=>this.selectProduct(e,n),s)}setupDropdownEvents(e,t){}hideSearchDropdown(e){this.hideGlobalDropdown()}hideGlobalDropdown(){this.dropdownManager.hideDropdown()}selectProduct(e,t){var a;const o=e.closest(".grid-row"),s=o.dataset.rowId,n=this.gridRows.find(c=>c.id===s);if(!n)return;n.storageId&&((a=n.product)!=null&&a._placeholder)&&(E.removeProductFromSelection(n.storageId),n.storageId=null),n.product=t;const i=t.RRP_EX||t["RRP EX GST"]||t.RRP_EX||t.RRP_EXGST||t.rrpExGst||t["PL1 - RRP EX GST"]||t.RRP_INCGST||t.RRP_INCGST||t["RRP INC GST"]||t.rrpIncGst||"";n.price=i;const r=o.querySelector('input[name="price"]');r&&(r.value=i),e.value="",this.renderGrid(),this.saveRowToStorage(n),this.focusNextRowOrCreate(s)}saveRowToStorage(e){if(!e.product)return;const t={...e.product,OrderCode:e.product.OrderCode||e.product.Code||"",Description:e.product.Description||e.product.ProductName||e.product["Product Name"]||"",UserEditedPrice:e.price,RRP_EX:e.product.RRP_EX||e.product["RRP EX GST"]||e.product.RRP_EX||e.product.RRP_EXGST||e.product.rrpExGst||e.product["PL1 - RRP EX GST"]||"",RRP_INCGST:e.product.RRP_INCGST||e.product["RRP INC GST"]||e.product.rrpIncGst||"",Image_URL:e.product.Image_URL||e.product.imageUrl||e.product.Image||"assets/no-image.png"},o=E.addProductToSelection(t,{notes:e.notes,room:e.room,quantity:e.quantity});o&&(e.storageId=o,this.updateTotals())}focusNextRowOrCreate(e){const t=this.gridRows.findIndex(o=>o.id===e);if(t<this.gridRows.length-1){const o=this.gridRows[t+1];setTimeout(()=>{const s=document.querySelector(`[data-row-id="${o.id}"] .grid-search-input`);s&&!s.classList.contains("populated")&&s.focus()},100)}else this.addEmptyRow()}handleGridInput(e){const t=e.target;t.classList.contains("grid-search-input")&&!t.classList.contains("populated")?this.handleProductSearch(t,t.value):(t.classList.contains("grid-input")||t.classList.contains("grid-textarea")||t.classList.contains("grid-select"))&&this.updateRowFromInput(t)}handleGridChange(e){const t=e.target;(t.classList.contains("grid-select")||t.classList.contains("grid-input")||t.classList.contains("grid-textarea"))&&this.updateRowFromInput(t)}handleGridClick(e){var s,n;const t=e.target;if(t.classList.contains("grid-product-image")){const i=t.closest(".grid-row"),r=(s=i==null?void 0:i.dataset)==null?void 0:s.rowId,a=this.gridRows.find(c=>c.id===r);a!=null&&a.product&&!a.product._placeholder&&this._showProductDetailModal(a.product);return}const o=t.closest(".grid-competitor-code-link");if(o){e.preventDefault();const i=o.dataset.competitor,r=o.dataset.code,a=o.closest(".grid-row"),c=(n=a==null?void 0:a.dataset)==null?void 0:n.rowId;i&&r&&this.openValidatorModal(i,r,c);return}if(t.classList.contains("grid-remove-btn")){const r=t.closest(".grid-row").dataset.rowId;this.removeRow(r)}else if(t.classList.contains("grid-move-btn")){const r=t.closest(".grid-row").dataset.rowId,a=t.dataset.direction;this.moveRow(r,a)}else t.closest(".grid-search-dropdown")||document.querySelectorAll(".grid-search-dropdown.visible").forEach(i=>{i.classList.remove("visible")})}handleGridKeydown(e){if(e.target.classList.contains("grid-search-input")){const t=document.querySelector(".global-search-dropdown");t?this.handleDropdownKeyboard(e,t):e.key==="Enter"&&(e.preventDefault(),this.handleProductSearch(e.target,e.target.value))}}handleDropdownKeyboard(e,t){const o=document.querySelector(".global-search-dropdown");if(!o)return;const s=o.querySelectorAll("li[data-product]"),n=o.querySelector("li.active");let i=null;const r=(a,c)=>{c?(a.dataset.origBg||(a.dataset.origBg=a.style.background||"#fff"),a.classList.add("active"),a.style.setProperty("background","rgba(184,115,51,0.12)","important")):(a.classList.remove("active"),a.style.setProperty("background",a.dataset.origBg||"#fff","important"))};switch(e.key){case"ArrowDown":if(e.preventDefault(),!n)i=s[0];else{r(n,!1);const c=(Array.from(s).indexOf(n)+1)%s.length;i=s[c]}i&&(r(i,!0),i.scrollIntoView({block:"nearest"}));break;case"ArrowUp":if(e.preventDefault(),!n)i=s[s.length-1];else{r(n,!1);const a=Array.from(s).indexOf(n),c=a===0?s.length-1:a-1;i=s[c]}i&&(r(i,!0),i.scrollIntoView({block:"nearest"}));break;case"Enter":e.preventDefault(),n&&n.click();break;case"Escape":e.preventDefault(),this.hideGlobalDropdown();break}}handleGridFocusIn(e){}handleGridFocusOut(e){}handleDragStart(e){const t=e.target.closest(".grid-row");if(!t){e.preventDefault();return}if(t.classList.contains("room-header-row")){const o=t.dataset.roomName;if(o==="Blank"){e.preventDefault();return}if(this.draggedRoomName=o,this.draggedRowId=null,e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("text/plain",`room:${o}`),t.classList.add("dragging"),e.dataTransfer.setDragImage){const s=document.createElement("div");s.textContent=`📁 ${o}`,s.style.cssText=`
          position: absolute; top: -1000px; padding: 8px 16px;
          background: #374151; color: white; border-radius: 6px;
          font-weight: 600; font-size: 14px;
        `,document.body.appendChild(s),e.dataTransfer.setDragImage(s,0,15),setTimeout(()=>s.remove(),0)}return}if(!e.target.classList.contains("grid-drag-handle")){e.preventDefault();return}if(this.draggedRowId=t.dataset.rowId,this.draggedRoomName=null,e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("text/plain",t.dataset.rowId),t.classList.add("dragging"),e.dataTransfer.setDragImage){const o=t.cloneNode(!0);o.style.opacity="0.8",o.style.position="absolute",o.style.top="-1000px",o.style.width=t.offsetWidth+"px",document.body.appendChild(o),e.dataTransfer.setDragImage(o,t.offsetWidth-10,20),setTimeout(()=>o.remove(),0)}}handleDragOver(e){e.preventDefault(),e.dataTransfer.dropEffect="move";const t=e.target.closest(".grid-row");if(!t||t.classList.contains("dragging"))return;if(document.querySelectorAll(".grid-row.drag-over-above, .grid-row.drag-over-below").forEach(n=>{n.classList.remove("drag-over-above","drag-over-below")}),this.draggedRoomName){if(!t.classList.contains("room-header-row")||t.dataset.roomName==="Blank"||t.dataset.roomName===this.draggedRoomName)return;const n=t.getBoundingClientRect(),i=n.top+n.height/2;e.clientY<i?t.classList.add("drag-over-above"):t.classList.add("drag-over-below");return}if(t.classList.contains("room-header-row"))return;const o=t.getBoundingClientRect(),s=o.top+o.height/2;e.clientY<s?t.classList.add("drag-over-above"):t.classList.add("drag-over-below")}handleDragLeave(e){const t=e.target.closest(".grid-row");if(t){const o=e.relatedTarget;t.contains(o)||t.classList.remove("drag-over-above","drag-over-below")}}handleDrop(e){e.preventDefault(),document.querySelectorAll(".grid-row.drag-over-above, .grid-row.drag-over-below").forEach(m=>{m.classList.remove("drag-over-above","drag-over-below")});const t=e.dataTransfer.getData("text/plain"),o=e.target.closest(".grid-row");if(!o||!t)return;if(t.startsWith("room:")){const m=t.replace("room:","");if(!o.classList.contains("room-header-row"))return;const h=o.dataset.roomName;if(h==="Blank"||m===h)return;const p=o.getBoundingClientRect(),y=e.clientY<p.top+p.height/2;this.moveRoomInOrder(m,h,y),this.renderGrid();return}const s=t;if(o.classList.contains("room-header-row"))return;const n=o.dataset.rowId;if(s===n)return;const i=o.getBoundingClientRect(),r=e.clientY<i.top+i.height/2,a=this.gridRows.findIndex(m=>m.id===s),c=this.gridRows.findIndex(m=>m.id===n);if(a===-1||c===-1)return;const l=this.gridRows[a],d=this.gridRows[c];l.room!==d.room&&(l.room=d.room,this.lastUsedRoom=d.room,l.product&&l.storageId&&E.updateProductRoom(l.storageId,l.room)),this.gridRows.splice(a,1);let u=this.gridRows.findIndex(m=>m.id===n);u!==-1&&(r||u++,this.gridRows.splice(u,0,l),this.renderGrid(),setTimeout(()=>{const m=document.querySelector(`[data-row-id="${s}"]`);m&&(m.style.backgroundColor="#dbeafe",m.style.transition="background-color 0.3s ease",setTimeout(()=>{m.style.backgroundColor=""},500))},50))}handleDragEnd(e){this.draggedRowId=null,this.draggedRoomName=null,document.querySelectorAll(".grid-row.dragging").forEach(t=>t.classList.remove("dragging")),document.querySelectorAll(".grid-row.drag-over-above").forEach(t=>t.classList.remove("drag-over-above")),document.querySelectorAll(".grid-row.drag-over-below").forEach(t=>t.classList.remove("drag-over-below"))}hideAllDropdowns(){this.hideGlobalDropdown()}showClearAllModal(){const e=document.getElementById("clear-all-modal");e&&(e.style.display="flex")}hideClearAllModal(){const e=document.getElementById("clear-all-modal");e&&(e.style.display="none")}async showSettingsModal(){const e=document.getElementById("settings-modal");e&&(e.style.display="flex",setTimeout(async()=>{const t=E.getUserSettings(),o=V.getCurrentUser(),s=document.getElementById("staff-name"),n=document.getElementById("staff-position"),i=document.getElementById("staff-email"),r=document.getElementById("staff-telephone"),a=document.getElementById("logged-in-profile-section"),c=document.getElementById("profile-avatar"),l=document.getElementById("profile-display-name"),d=document.getElementById("profile-display-email"),u=document.getElementById("edit-profile-btn");if(t&&(t.staffName||t.staffEmail)?(s&&(s.value=t.staffName||""),n&&(n.value=t.staffPosition||""),i&&(i.value=t.staffEmail||""),r&&(r.value=t.staffPhone||"")):o&&(s&&o.name&&(s.value=o.name),n&&o.position&&(n.value=o.position),i&&o.email&&(i.value=o.email),r&&o.phone&&(r.value=o.phone)),o){a&&(a.style.display="block"),l&&(l.textContent=o.name||""),d&&(d.textContent=o.email||""),c&&(c.textContent=this.getInitials(o.name)),u&&(u.onclick=()=>{Y.showEditProfile(v=>{console.log("📱 Profile updated:",v),E.clearUserSettings(),this.showSettingsModal()})});const f=document.getElementById("change-password-btn");f&&(f.onclick=()=>{Y.showChangePassword(()=>{console.log("📱 Password changed")})})}else a&&(a.style.display="none");const h=document.getElementById("settings-version-info");if(h)try{let v=(await(await fetch("./version.txt")).text()).trim();v=v.split(/\r?\n/)[0].replace(/[^0-9.v]/g,""),h.innerText=v?`v${v}`:"",h.title="App Version"}catch{h.innerText=""}const p=document.getElementById("refresh-catalog-btn");p&&(p.onclick=async()=>{try{const{del:f,keys:v}=await z(async()=>{const{del:S,keys:C}=await import("./index-DwnyWBFG.js");return{del:S,keys:C}},[]),w=await v(),b=["productCatalogCsv","customerLogo","fredChatHistory","fredChatMessages","fredFeedback","fredQuestionLog"];await Promise.all(w.filter(S=>typeof S=="string"&&(b.includes(S)||S.startsWith("crosshair_"))).map(S=>f(S)))}catch{}localStorage.removeItem("configPreferences"),localStorage.removeItem("pdfWizardSettings"),Object.keys(localStorage).filter(f=>f.startsWith("crosshair_")||f.startsWith("fred")).forEach(f=>localStorage.removeItem(f)),window.location.reload()});const y=document.getElementById("refresh-pdf-files-btn");y&&(y.onclick=async()=>{await this.refreshPdfFileList();const f=y.textContent;y.textContent="✅ Refreshed!",y.style.background="#dcfce7",y.style.color="#059669",setTimeout(()=>{y.textContent=f,y.style.background="#f3f4f6",y.style.color="#059669"},2e3)}),this.loadCustomerLogoPreview(),this.setupCustomerLogoHandlers(),await this.populateTipTailDropdowns(),this.loadTipTailSelections(),this.setupTipTailHandlers()},0))}getInitials(e){if(!e)return"?";const t=e.trim().split(" ");return t.length>=2?(t[0][0]+t[t.length-1][0]).toUpperCase():t[0][0].toUpperCase()}async loadCustomerLogoPreview(){const e=document.getElementById("customer-logo-preview");try{const{get:t}=await z(async()=>{const{get:s}=await import("./index-DwnyWBFG.js");return{get:s}},[]),o=await t(Ae);e&&(e.innerHTML=o?`<img src="${o}" style="max-height:100px;max-width:180px;width:auto;height:auto;object-fit:contain;">`:"")}catch{e&&(e.innerHTML="")}localStorage.removeItem(Ae)}setupCustomerLogoHandlers(){const e=document.getElementById("customer-logo-upload"),t=document.getElementById("customer-logo-clear"),o=document.getElementById("customer-logo-preview");e.onchange=s=>{const n=s.target.files[0];if(n){const i=new FileReader;i.onload=async r=>{try{const{set:a}=await z(async()=>{const{set:c}=await import("./index-DwnyWBFG.js");return{set:c}},[]);await a(Ae,r.target.result)}catch{}o&&(o.innerHTML=`<img src="${r.target.result}" style="max-height:100px;max-width:180px;width:auto;height:auto;object-fit:contain;">`)},i.readAsDataURL(n)}},t.onclick=async()=>{try{const{del:s}=await z(async()=>{const{del:n}=await import("./index-DwnyWBFG.js");return{del:n}},[]);await s(Ae)}catch{}o&&(o.innerHTML=""),e&&(e.value="")}}async populateTipTailDropdowns(){console.log("🔍 Discovering available PDF files...");const t=(await this.detectAvailablePdfFiles()).map(n=>`./assets/${n}`),o=document.getElementById("tip-pdf-select"),s=document.getElementById("tail-pdf-select");o&&s&&(o.innerHTML='<option value="">(None)</option>',s.innerHTML='<option value="">(None)</option>',t.forEach(n=>{const i=n.split("/").pop();o.innerHTML+=`<option value="${n}">${i}</option>`,s.innerHTML+=`<option value="${n}">${i}</option>`}))}async detectAvailablePdfFiles(){try{const o=await fetch("./assets-list");if(o.ok){const s=await o.json();return console.log("✅ Server provided files:",s),s}}catch{console.log("ℹ️ Server endpoint not available, trying assets-list.json...")}try{const o=await fetch("./assets-list.json");if(o.ok){const s=await o.json();return console.log("✅ assets-list.json provided files:",s),s}}catch{console.log("ℹ️ assets-list.json not available, using fallback list...")}const e=["tip-AandD.pdf","tip-Builder.pdf","tip-Merchant.pdf","tip-Volume Merchant.pdf","tail.pdf","tail-generic.pdf"];console.log("🔍 Testing individual file availability...");const t=[];for(const o of e)try{const s=await fetch(`./assets/${o}`,{method:"HEAD"});s.ok?(t.push(o),console.log(`✅ Found: ${o}`)):console.log(`❌ Not found: ${o} (${s.status})`)}catch(s){console.log(`❌ Error checking ${o}:`,s.message)}return console.log(`🎯 Dynamically detected PDF files (${t.length} found):`,t),t}async refreshPdfFileList(){console.log("🔄 Refreshing PDF file list..."),await this.populateTipTailDropdowns(),console.log("✅ PDF file list refreshed")}loadTipTailSelections(){const e=JSON.parse(localStorage.getItem(We)||"{}"),t=document.getElementById("tip-pdf-select"),o=document.getElementById("tail-pdf-select"),s=document.getElementById("tip-pdf-upload"),n=document.getElementById("tail-pdf-upload");t&&(e.tipUpload?(t.innerHTML='<option value="">Custom file selected</option>',t.value="",s&&(s.style.fontWeight="bold",s.style.color="#2563eb")):e.tipAsset&&(t.value=e.tipAsset)),o&&(e.tailUpload?(o.innerHTML='<option value="">Custom file selected</option>',o.value="",n&&(n.style.fontWeight="bold",n.style.color="#2563eb")):e.tailAsset&&(o.value=e.tailAsset))}setupTipTailHandlers(){const e=document.getElementById("tip-pdf-select"),t=document.getElementById("tail-pdf-select"),o=document.getElementById("tip-pdf-upload"),s=document.getElementById("tail-pdf-upload"),n=document.getElementById("tip-pdf-clear"),i=document.getElementById("tail-pdf-clear"),r=document.getElementById("tip-pdf-selected"),a=document.getElementById("tail-pdf-selected");e.onchange=()=>{this.saveTipTailSettings({tipAsset:e.value,tipUpload:null,tipUploadName:""}),r&&(r.textContent="")},t.onchange=()=>{this.saveTipTailSettings({tailAsset:t.value,tailUpload:null,tailUploadName:""}),a&&(a.textContent="")},o.onchange=c=>{const l=c.target.files[0];if(l){const d=new FileReader;d.onload=u=>{const m=u.target.result,h=new Uint8Array(m);let p="";for(let f=0;f<h.length;f++)p+=String.fromCharCode(h[f]);const y=btoa(p);this.saveTipTailSettings({tipAsset:"",tipUpload:y,tipUploadName:l.name}),e&&(e.value="",e.innerHTML='<option value="">Custom file selected</option>'),o&&(o.style.fontWeight="bold",o.style.color="#2563eb")},d.readAsArrayBuffer(l)}},s.onchange=c=>{const l=c.target.files[0];if(l){const d=new FileReader;d.onload=u=>{const m=u.target.result,h=new Uint8Array(m);let p="";for(let f=0;f<h.length;f++)p+=String.fromCharCode(h[f]);const y=btoa(p);this.saveTipTailSettings({tailAsset:"",tailUpload:y,tailUploadName:l.name}),t&&(t.value="",t.innerHTML='<option value="">Custom file selected</option>'),s&&(s.style.fontWeight="bold",s.style.color="#2563eb")},d.readAsArrayBuffer(l)}},n.onclick=async()=>{this.saveTipTailSettings({tipAsset:"",tipUpload:null,tipUploadName:""}),e&&(e.value="",e.innerHTML='<option value="">(None)</option>',(await this.detectAvailablePdfFiles()).forEach(l=>{e.innerHTML+=`<option value="assets/${l}">${l}</option>`})),o&&(o.value="",o.style.fontWeight="normal",o.style.color="")},i.onclick=async()=>{this.saveTipTailSettings({tailAsset:"",tailUpload:null,tailUploadName:""}),t&&(t.value="",t.innerHTML='<option value="">(None)</option>',(await this.detectAvailablePdfFiles()).forEach(l=>{t.innerHTML+=`<option value="assets/${l}">${l}</option>`})),s&&(s.value="",s.style.fontWeight="normal",s.style.color="")}}saveTipTailSettings(e){const o={...JSON.parse(localStorage.getItem(We)||"{}"),...e};localStorage.setItem(We,JSON.stringify(o))}hideSettingsModal(){const e=document.getElementById("settings-modal");e&&(e.style.display="none")}saveSettings(){var i,r,a,c;const e=((i=document.getElementById("staff-name"))==null?void 0:i.value)||"",t=((r=document.getElementById("staff-position"))==null?void 0:r.value)||"",o=((a=document.getElementById("staff-email"))==null?void 0:a.value)||"",s=((c=document.getElementById("staff-telephone"))==null?void 0:c.value)||"",n={staffName:e.trim(),staffPosition:t.trim(),staffEmail:o.trim(),staffPhone:s.trim()};E.saveUserSettings(n),this.hideSettingsModal(),console.log("Settings saved successfully:",n)}loadSettings(){const e=E.getUserSettings(),t=document.getElementById("staff-name"),o=document.getElementById("staff-position"),s=document.getElementById("staff-email"),n=document.getElementById("staff-telephone");t&&(t.value=e.staffName||""),o&&(o.value=e.staffPosition||""),s&&(s.value=e.staffEmail||""),n&&(n.value=e.staffPhone||"")}updateRowFromInput(e){const t=e.closest(".grid-row"),o=t.dataset.rowId,s=this.gridRows.find(i=>i.id===o);if(!s)return;let n=!1;if(e.classList.contains("grid-select")&&e.name==="room")if(e.value==="__ADD_NEW_ROOM__"){const i=prompt("Enter new room name:");if(i&&i.trim()){const r=i.trim();if(E.addCustomRoom(r))s.room=r,this.lastUsedRoom=r,console.log("✅ Added new room:",r),this.updateAllRoomDropdowns(),e.value=r;else{alert("Room name already exists or is invalid"),e.value=s.room||"Blank";return}}else{e.value=s.room||"Blank";return}}else s.room=e.value,this.lastUsedRoom=e.value;else e.classList.contains("grid-input")&&e.name==="quantity"?(s.quantity=Math.max(1,parseInt(e.value)||1),e.value=s.quantity,n=!0):e.classList.contains("grid-input")&&e.name==="price"?(s.price=e.value,n=!0):e.classList.contains("grid-textarea")&&e.name==="notes"&&(s.notes=e.value);n&&this.updateRowTotal(t,s),s.product&&s.storageId&&(E.updateProductQuantity(s.storageId,s.quantity),E.updateProductRoom(s.storageId,s.room),E.updateProductNotes(s.storageId,s.notes),n&&e.name==="price"&&E.updateProductPrice(s.storageId,s.price),this.updateTotals())}updateRowTotal(e,t){const o=e.querySelector(".grid-total-display");if(o){const s=parseFloat((t.price||"").toString().replace(/,/g,""))||0,n=parseInt(t.quantity)||1,i=s*n;o.textContent=i>0?i.toLocaleString("en-AU",{minimumFractionDigits:2,maximumFractionDigits:2}):""}}loadExistingProducts(){const e=E.getSelectedProducts(),t=D.getAllProducts();this.gridRows=[],this.nextRowId=1,e.forEach(o=>{var r,a,c,l,d,u,m,h,p,y,f;const s=`row_${this.nextRowId++}`;if(o.product&&t.length>0){const v=(o.product.OrderCode||o.product.orderCode||"").toString().trim().toLowerCase();if(v){const w=t.find(b=>[b.OrderCode,b.orderCode,b["Order Code"]].some(S=>S&&String(S).trim().toLowerCase()===v));if(w){const b=w.RRP_EX||w["RRP EX GST"]||w["PL1 - RRP EX GST"]||"";b&&parseFloat(b)>0&&(o.product.RRP_EX=b,o.product["RRP EX GST"]=b)}}}let n="";((r=o.product)==null?void 0:r.UserEditedPrice)!==void 0&&((a=o.product)==null?void 0:a.UserEditedPrice)!==null&&((c=o.product)==null?void 0:c.UserEditedPrice)!==""?n=o.product.UserEditedPrice:n=((l=o.product)==null?void 0:l.RRP_EX)||((d=o.product)==null?void 0:d["RRP EX GST"])||((u=o.product)==null?void 0:u.RRP_EX)||((m=o.product)==null?void 0:m.rrpExGst)||((h=o.product)==null?void 0:h.RRP_EXGST)||((p=o.product)==null?void 0:p["PL1 - RRP EX GST"])||((y=o.product)==null?void 0:y.RRP_INCGST)||((f=o.product)==null?void 0:f["RRP INC GST"])||"";const i={id:s,product:o.product,room:o.room||"Blank",quantity:o.quantity||1,price:n,notes:o.notes||"",storageId:o.id};this.gridRows.push(i)}),this.renderGrid()}renderGrid(){const e=document.getElementById("grid-body"),t=document.getElementById("product-grid-empty"),o=document.getElementById("product-grid-container");if(!e)return;if(this.gridRows.length===0){o.style.display="none",t.style.display="block";return}t.style.display="none",o.style.display="block";const s=this.groupRowsByRoom(),n=[];Object.entries(s).forEach(([i,r])=>{const a=this.getRoomClass(i),l=!(i==="Blank"),d=`
        <div class="grid-row room-header-row ${a}" 
             data-room-name="${i}"
             ${l?'draggable="true"':""}>
          <div class="col-search room-header-cell" colspan="8">
            <div class="room-header-content">
              ${l?'<span class="room-drag-handle" title="Drag to reorder">⋮⋮</span>':""}
              <span class="room-name">${i}</span>
              <span class="room-count">(${r.length})</span>
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
      `;n.push(d),r.forEach(u=>{n.push(this.renderRowHtml(u))})}),e.innerHTML=n.join(""),this.attachSeimaMatchSuggestions()}extractCandidateCodes(e){if(!e||typeof e!="string")return[];const t=new Set,o=[],s=/(?:Code|Part\s*(?:No\.?|Number)|P\/N|Order\s*Code|SKU|Item\s*(?:No\.?|Number)?|#)\s*:?\s*([A-Za-z0-9]{2,14}(?:[.\-][A-Za-z0-9]{1,10})*)/gi;let n;for(;(n=s.exec(e))!==null;){const l=n[1].trim();l.replace(/[.\-]+/g,"").length>=4&&!t.has(l)&&(t.add(l),o.push(l))}const i=e.split(/\|/).map(l=>l.trim()),r=/^[A-Za-z0-9]{2,14}([.\-][A-Za-z0-9]{1,10})*$/,a=/\d/,c=new Set(["white","stainless","steel","black","grey","gray","chrome","brushed","matte","polished"]);for(const l of i){if(!r.test(l)||!a.test(l)||l.replace(/[.\-]+/g,"").length<4)continue;const u=l.toLowerCase();c.has(u)||t.has(l)||(t.add(l),o.push(l))}return o}escapeRegex(e){return String(e).replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}buildPlaceholderHintHtml(e,t){if(!e)return"";let o=x.sanitizeInput(e);if(t.length===0)return o;for(const{code:s,competitor:n,searchCode:i}of t){const r=this.escapeRegex(s),a="(?:(?:Code|Part\\s*(?:No\\.?|Number)|P\\/N|Order\\s*Code|SKU|Item\\s*(?:No\\.?|Number)?|#)\\s*:?\\s*)?",c=new RegExp("("+a+r+")","gi"),l=i??s,d=`<a href="#" class="grid-competitor-code-link" data-competitor="${x.sanitizeInput(n)}" data-code="${x.sanitizeInput(l)}" title="Review in Validator to link to Seima product">$1</a>`;o=o.replace(c,d)}return o}async attachSeimaMatchSuggestions(){var i,r,a,c;const e=++this._matchSuggestionsRunId,t=document.querySelectorAll(".grid-seima-match-wrap");t.forEach(l=>{l.querySelectorAll(".grid-seima-match-btn").forEach(d=>d.remove())});const o=[...t].filter(l=>{var u;const d=this.gridRows.find(m=>m.id===l.dataset.rowId);return(u=d==null?void 0:d.product)==null?void 0:u._placeholder});if(o.length===0)return;const s=document.getElementById("tender-import-banner");let n=0;if(s&&(s.innerHTML=`
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="flex-shrink:0;animation:spin 1s linear infinite">
          <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"></path>
        </svg>
        <span>Cross-referencing ${o.length} products...</span>
      `,s.style.display="flex"),!T.isEnabled())try{await T.preload()}catch{}if(e===this._matchSuggestionsRunId){if(!T.isEnabled()){s&&(s.innerHTML=`
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="flex-shrink:0">
            <circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line>
          </svg>
          <span>Competitor data unavailable — cross-referencing skipped</span>
          <button class="tender-banner-close" title="Dismiss" onclick="this.parentElement.style.display='none'">✕</button>
        `,setTimeout(()=>{s&&(s.style.display="none")},8e3));return}for(const l of t){if(e!==this._matchSuggestionsRunId)return;const d=l.dataset.rowId,u=this.gridRows.find(P=>P.id===d);if(!((i=u==null?void 0:u.product)!=null&&i._placeholder))continue;const m=u.product.Description||"",h=this.extractCandidateCodes(m);if(h.length===0)continue;const p=l.closest(".grid-product-cell"),y=p==null?void 0:p.querySelector(".grid-placeholder-hint"),f=[];for(const P of h)try{const k=await T.findCompetitorEntryByCode(P);if(e!==this._matchSuggestionsRunId)return;if(k){const R=k.matchedCode??((r=k.competitorProduct)==null?void 0:r.product_code)??P;f.push({code:P,competitor:k.competitor,searchCode:R})}else console.log(`Crosshair: no competitor match for code "${P}" (row ${d})`)}catch{}if(y&&f.length>0&&(y.innerHTML=this.buildPlaceholderHintHtml(m,f)),!D.isLoaded)continue;let v=null,w="";for(const P of h)try{const k=await T.findSeimaMatches(P);if(e!==this._matchSuggestionsRunId)return;if(((a=k==null?void 0:k.matches)==null?void 0:a.length)>0){const R=String(k.matches[0].SeimaSKU).trim(),L=D.findProductByCode(R);if(L){v=L;const U=(k.competitorProduct||{}).product_name||L.Description||"";w=`${k.competitor}: ${P} → ${R}${U?" – "+U:""}`;break}}}catch{}if((c=u==null?void 0:u.product)!=null&&c._placeholder&&s){n++;const P=Math.round(n/o.length*100),k=s.querySelector("span");k&&(k.textContent=`Cross-referencing ${n}/${o.length} products (${P}%)...`)}if(!v||l.querySelector(".grid-seima-match-btn"))continue;const b=document.createElement("button");b.type="button",b.className="grid-seima-match-btn";const S=(v.Description||"").trim(),C=S.length>45?S.slice(0,45)+"…":S;b.textContent=`Use Seima match: ${v.OrderCode||""} – ${C}`,b.title=w,b.addEventListener("click",()=>{const P=l.closest(".grid-row"),k=P==null?void 0:P.querySelector(".grid-search-input");k&&this.selectProduct(k,v)}),l.appendChild(b)}if(e===this._matchSuggestionsRunId&&s){const l=document.querySelectorAll(".grid-seima-match-btn").length;s.innerHTML=`
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="flex-shrink:0">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
        <span>Cross-reference complete — ${l} verified match${l!==1?"es":""} found</span>
        <button class="tender-banner-close" title="Dismiss" onclick="this.parentElement.style.display='none'">✕</button>
      `,setTimeout(()=>{s&&(s.style.display="none")},1e4)}}}async openValidatorModal(e,t,o){this.closeValidatorModal();const s=document.createElement("div");s.className="grid-validator-overlay";const n=document.createElement("div");n.className="grid-validator-modal",n.innerHTML=`
      <div class="gvm-header">
        <div class="gvm-title">Loading…</div>
        <button class="gvm-close">&times;</button>
      </div>
      <div class="gvm-body"><div class="gvm-no-matches">Loading competitor data…</div></div>
    `,document.body.appendChild(s),document.body.appendChild(n);const i=()=>this.closeValidatorModal(o);n.querySelector(".gvm-close").addEventListener("click",i),s.addEventListener("click",i);const r=a=>{a.key==="Escape"&&i()};document.addEventListener("keydown",r),this._validatorModal={overlay:s,modal:n,escHandler:r,competitor:e,productCode:t};try{await T._ensureIndex();const a=await T.getMatches(e),l=(await T.getProducts(e)).find(p=>String(p.product_code)===String(t));if(!l){n.querySelector(".gvm-body").innerHTML=`<div class="gvm-no-matches">Product ${x.sanitizeInput(t)} not found in ${x.sanitizeInput(e)} data.</div>`;return}const d=a.filter(p=>String(p.CompetitorSKU)===String(t)).sort((p,y)=>(p.Rank||99)-(y.Rank||99)),u={Verified:0,Manual:1,Rejected:2,"AI-Suggested":3},m=new Map;for(const p of d){const y=String(p.SeimaSKU),f=m.get(y);(!f||(u[p.Status]??9)<(u[f.Status]??9))&&m.set(y,p)}const h=[...m.values()].sort((p,y)=>(p.Rank||99)-(y.Rank||99));this._renderValidatorModal(l,h,e)}catch(a){console.error("Validator modal load failed:",a),n.querySelector(".gvm-body").innerHTML='<div class="gvm-no-matches">Failed to load data. Check console.</div>'}}_renderValidatorModal(e,t,o){var u;const s=(u=this._validatorModal)==null?void 0:u.modal;if(!s)return;const n=e.product_name||e.product_code,i=e.image_url||e.Image||"",r=m=>x.sanitizeInput(m||"");s.querySelector(".gvm-title").textContent=`${n} — ${o}`;let a;t.length===0?a='<div class="gvm-no-matches">No Seima matches found. Use the search below to add one.</div>':a=t.map(m=>{const h=String(m.SeimaSKU||"").trim(),p=D.findProductByCode(h),y=(p==null?void 0:p.Description)||(p==null?void 0:p.ProductName)||h,f=(p==null?void 0:p.Image_URL)||(p==null?void 0:p.imageUrl)||"",v=(p==null?void 0:p.RRP_INCGST)||(p==null?void 0:p["RRP INC GST"])||"",w=v?`$${Number(v).toLocaleString("en-AU",{minimumFractionDigits:2})}`:"",b=Number(m.Confidence)||0,S=b>=70?"high":b>=40?"med":"low",C=(m.Status||"").toLowerCase().replace(/[\s-]+/g,"-");let P;return m.Status==="Verified"||m.Status==="Manual"?P=`<span class="gvm-status-label gvm-status-verified">✓ Verified</span>
            <button class="gvm-btn gvm-btn-undo" data-action="reject" data-sku="${r(h)}">reject</button>`:m.Status==="Rejected"?P=`<span class="gvm-status-label gvm-status-rejected">✗ Rejected</span>
            <button class="gvm-btn gvm-btn-undo" data-action="verify" data-sku="${r(h)}">verify</button>`:P=`<button class="gvm-btn gvm-btn-verify" data-action="verify" data-sku="${r(h)}">✓ Verify</button>
            <button class="gvm-btn gvm-btn-reject" data-action="reject" data-sku="${r(h)}">✗ Reject</button>`,`<div class="gvm-match-card status-${C}" data-seima-sku="${r(h)}" style="cursor:pointer;">
          ${f?`<img src="${r(f)}" alt="" class="gvm-match-img" onerror="this.outerHTML='<div class=\\'gvm-match-img-placeholder\\'>No img</div>'">`:'<div class="gvm-match-img-placeholder">No img</div>'}
          <div class="gvm-match-info">
            <div class="gvm-match-name">${r(y)}</div>
            <div class="gvm-match-sku">${r(h)} <span class="gvm-badge gvm-badge-${S}">${b}%</span></div>
            ${m.MatchReason?`<div class="gvm-match-reason">${r(m.MatchReason)}</div>`:""}
          </div>
          <div class="gvm-match-price">${w}</div>
          <div class="gvm-match-actions">${P}</div>
        </div>`}).join("");const c=e.rrp_ex_gst?`$${Number(e.rrp_ex_gst).toLocaleString("en-AU",{minimumFractionDigits:2})}`:"",d=[["Code",e.product_code],["Brand",e.brand||o],["Category",[e.product_type,e.subcategory].filter(Boolean).join(" / ")],["Collection",e.collection],["Finish",e.finish||e.colour],["RRP",c]].filter(([,m])=>m&&String(m).trim()).map(([m,h])=>`<tr><td>${r(m)}</td><td>${r(h)}</td></tr>`).join("");s.querySelector(".gvm-body").innerHTML=`
      <div class="gvm-layout">
        <div class="gvm-product-detail">
          ${i?`<img src="${r(i)}" alt="${r(n)}" class="gvm-product-img" onerror="this.style.display='none'">`:""}
          <table class="gvm-product-table">
            <tr><td>Name</td><td><strong>${r(n)}</strong></td></tr>
            ${d}
          </table>
          ${e.product_url?`<a href="${e.product_url}" target="_blank" style="font-size:0.75rem;color:#b87333;">View on website →</a>`:""}
        </div>
        <div class="gvm-matches-panel">
          <div class="gvm-section-title">Seima Alternatives (${t.length})</div>
          ${a}
          <div class="gvm-search-add">
            <div class="gvm-search-add-label">Add Seima Product</div>
            <input type="text" class="gvm-search-add-input" placeholder="Search Seima by name, code or range…">
            <div class="gvm-search-results"></div>
          </div>
        </div>
      </div>
    `,this._wireValidatorModalActions(e,t,o)}_wireValidatorModalActions(e,t,o){var a;const s=(a=this._validatorModal)==null?void 0:a.modal;if(!s)return;s.querySelectorAll(".gvm-match-card").forEach(c=>{c.addEventListener("click",l=>{if(l.target.closest(".gvm-btn"))return;const d=c.dataset.seimaSku;d&&this._showSeimaDetailInModal(d)})}),s.querySelectorAll(".gvm-btn-verify, .gvm-btn-reject, .gvm-btn-undo").forEach(c=>{c.addEventListener("click",async l=>{l.stopPropagation();const d=c.dataset.sku,u=c.dataset.action,m=u==="verify"?"Verified":"Rejected";c.disabled=!0,c.textContent="…";try{await T.updateMatch(o,String(e.product_code),d,m);const h=t.find(p=>String(p.SeimaSKU)===d);h&&(h.Status=m),this._renderValidatorModal(e,t,o)}catch(h){console.error("Match update failed:",h),c.disabled=!1,c.textContent=u==="verify"?"✓ Verify":"✗ Reject"}})});const n=s.querySelector(".gvm-search-add-input"),i=s.querySelector(".gvm-search-results");if(!n||!i)return;let r;n.addEventListener("input",()=>{clearTimeout(r),r=setTimeout(()=>{this._renderValidatorSeimaSearch(n.value,i,e,t,o)},250)})}_renderValidatorSeimaSearch(e,t,o,s,n){if(!e||e.length<2){t.innerHTML="";return}const i=D.searchProducts(e,20),r=new Set(s.map(l=>String(l.SeimaSKU))),a=i.filter(l=>{const d=String(l.OrderCode||l.Code||"");return d&&!r.has(d)});if(a.length===0){t.innerHTML='<div class="gvm-no-matches">No Seima products found.</div>';return}const c=l=>x.sanitizeInput(l||"");t.innerHTML=a.slice(0,15).map(l=>{const d=l.OrderCode||l.Code||"",u=l.Description||l.ProductName||"",m=l.Image_URL||l.imageUrl||"",h=l.RRP_INCGST||l["RRP INC GST"]||"",p=h?`$${Number(h).toLocaleString("en-AU",{minimumFractionDigits:2})}`:"";return`<div class="gvm-search-result" data-seima-code="${c(d)}">
        ${m?`<img src="${c(m)}" alt="" class="gvm-match-img" onerror="this.outerHTML='<div class=\\'gvm-match-img-placeholder\\'>No img</div>'">`:'<div class="gvm-match-img-placeholder">No img</div>'}
        <div class="gvm-match-info">
          <div class="gvm-match-name">${c(u)}</div>
          <div class="gvm-match-sku">${c(d)}</div>
        </div>
        <div class="gvm-match-price">${p}</div>
        <button class="gvm-btn gvm-btn-verify" data-seima-code="${c(d)}">✓ Verify</button>
      </div>`}).join(""),t.querySelectorAll(".gvm-search-result").forEach(l=>{const d=l.querySelector(".gvm-btn-verify");d==null||d.addEventListener("click",async u=>{u.stopPropagation();const m=d.dataset.seimaCode;d.disabled=!0,d.textContent="…";try{const h=s.length+1;await T.addMatch(n,String(o.product_code),m,h,"Manual verification"),await T.updateMatch(n,String(o.product_code),m,"Verified"),s.push({CompetitorSKU:String(o.product_code),SeimaSKU:m,Rank:h,Confidence:"",MatchReason:"Manual verification",Status:"Verified"}),this._renderValidatorModal(o,s,n)}catch(h){console.error("Add match failed:",h),d.disabled=!1,d.textContent="✓ Verify"}})})}closeValidatorModal(e){this._validatorModal&&(this._closeSeimaDetailPanel(),this._validatorModal.overlay.remove(),this._validatorModal.modal.remove(),this._validatorModal.escHandler&&document.removeEventListener("keydown",this._validatorModal.escHandler),this._validatorModal=null,T._index=null,this.attachSeimaMatchSuggestions())}_showSeimaDetailInModal(e){this._closeSeimaDetailPanel();const t=D.findProductByCode(e);if(!t)return;const o=u=>x.sanitizeInput(u||""),s=t.Description||t.ProductName||e,n=t.Image_URL||t.imageUrl||"",i=t.Website_URL||"",a=[["Order Code",t.OrderCode||t.Code],["Description",t.Description],["Long Description",t.LongDescription||t["Long Description"]],["Range",t.Range],["Group",t.Group],["Sub Group",t.SubGroup||t["Sub Group"]],["RRP ex GST",t.RRP_EX||t["RRP EX GST"]],["RRP inc GST",t.RRP_INCGST||t["RRP INC GST"]],["Dimensions (W)",t.DimX||t["X Dimension (mm)"]],["Dimensions (D)",t.DimY||t["Y Dimension (mm)"]],["Dimensions (H)",t.DimZ||t["Z Dimension (mm)"]],["WELS Star",t.WELS_STAR||t["WELS Star"]],["WELS Consumption",t.WELS_CONSUMPTION||t["WELS Consumption"]]].filter(([,u])=>u&&String(u).trim()&&String(u).trim()!=="0").map(([u,m])=>{const h=u.startsWith("RRP")?`$${Number(m).toLocaleString("en-AU",{minimumFractionDigits:2})}`:o(m);return`<tr><td>${o(u)}</td><td>${h}</td></tr>`}).join(""),c=document.createElement("div");c.className="gvm-detail-overlay";const l=document.createElement("div");l.className="gvm-detail-panel",l.innerHTML=`
      <div class="gvm-detail-header">
        <div class="gvm-detail-title">${o(s)}</div>
        <button class="gvm-close">&times;</button>
      </div>
      <div class="gvm-detail-body">
        ${n?`<img src="${o(n)}" alt="${o(s)}" class="gvm-detail-img" onerror="this.style.display='none'">`:""}
        <table class="gvm-detail-table">${a}</table>
        ${i?`<a href="${o(i)}" target="_blank" style="display:inline-block;margin-top:10px;font-size:0.8rem;color:#b87333;">View on Seima website →</a>`:""}
      </div>
    `,document.body.appendChild(c),document.body.appendChild(l);const d=()=>this._closeSeimaDetailPanel();l.querySelector(".gvm-close").addEventListener("click",d),c.addEventListener("click",d),this._seimaDetailPanel={overlay:c,panel:l}}_closeSeimaDetailPanel(){this._seimaDetailPanel&&(this._seimaDetailPanel.overlay.remove(),this._seimaDetailPanel.panel.remove(),this._seimaDetailPanel=null)}_showProductDetailModal(e){const t=document.querySelector(".grid-product-modal-overlay");t&&t.remove();const o=M=>x.sanitizeInput(M||""),s=e.OrderCode||e.Code||"",n=s?String(parseInt(s,10)):"",i=e.Description||e.ProductName||e["Product Name"]||"",r=e.Image_URL||e.imageUrl||e.Image||"assets/no-image.png",a=e["Long Description"]||e.LongDescription||"",c=e.Range||"",l=e.Group||"",d=e.SubGroup||e.Subgroup||e["Sub Group"]||"",u=e.Finish||"",m=e.Colour||"",h=e.DimX||e["X Dimension (mm)"]||"",p=e.DimY||e["Y Dimension (mm)"]||"",y=e.DimZ||e["Z Dimension (mm)"]||"",f=h&&h!=="0"?`${h} × ${p||0} × ${y||0}mm`:"",v=e.WELS_STAR||e["WELS Star"]||e["WELS STAR"]||"",w=e.RRP_EX||e["RRP EX GST"]||e.RRP_EXGST||"",b=e.RRP_INCGST||e["RRP INC GST"]||"",S=[];c&&S.push(["Range",c]),l&&S.push(["Group",l]),d&&S.push(["Type",d]),u&&S.push(["Finish",u]),m&&m!==u&&S.push(["Colour",m]),f&&S.push(["Dimensions",f]),v&&S.push(["WELS",`${v} star`]);const C=w?`$${parseFloat(w).toLocaleString("en-AU",{minimumFractionDigits:2})} ex GST`:b?`$${parseFloat(b).toLocaleString("en-AU",{minimumFractionDigits:2})} inc GST`:"",P=e.Diagram_URL||e["Diagram URL"]||"",k=e.Datasheet_URL||e["Datasheet URL"]||"",R=e.Website_URL||e["Website URL"]||"",L=[];P&&L.push(`<a href="${o(P)}" target="_blank" rel="noopener" class="grid-pdm-link">Diagram</a>`),k&&L.push(`<a href="${o(k)}" target="_blank" rel="noopener" class="grid-pdm-link">Datasheet</a>`),R&&L.push(`<a href="${o(R)}" target="_blank" rel="noopener" class="grid-pdm-link">View on Website</a>`);const _=document.createElement("div");_.className="grid-product-modal-overlay",_.innerHTML=`
      <div class="grid-product-modal">
        <div class="grid-pdm-header">
          <button class="grid-pdm-close" title="Close">&times;</button>
        </div>
        <div class="grid-pdm-body">
          <img class="grid-pdm-img" src="${o(r)}" alt="${o(i)}" onerror="this.src='assets/no-image.png';">
          <h3 class="grid-pdm-title">${n?`<span class="grid-pdm-code">${o(n)}</span> `:""}${o(i)}</h3>
          ${S.length?`<dl class="grid-pdm-specs">${S.map(([M,Re])=>`<dt>${o(M)}</dt><dd>${o(Re)}</dd>`).join("")}</dl>`:""}
          ${a?`<div class="grid-pdm-desc">${o(a)}</div>`:""}
          ${C?`<div class="grid-pdm-price">${C}</div>`:""}
          ${L.length?`<div class="grid-pdm-links">${L.join("")}</div>`:""}
        </div>
      </div>
    `;const U=()=>{_.remove(),document.removeEventListener("keydown",re)};_.addEventListener("click",M=>{M.target===_&&U()}),_.querySelector(".grid-pdm-close").addEventListener("click",U);const re=M=>{M.key==="Escape"&&U()};document.addEventListener("keydown",re),document.body.appendChild(_)}renderRowHtml(e){const t=e.product,o=t&&(t.Image_URL||t.imageUrl||t.Image)||"assets/no-image.png",s=t&&(t.Description||t.ProductName||t["Product Name"])||"",n=t&&(t.OrderCode||t.Code)||"",i=n?String(parseInt(n,10)):"",r=e.price||t&&(t.RRP_EX||t["RRP EX GST"]||t.RRP_EX||t.rrpExGst||t.RRP_EXGST||t.RRP_INCGST||t["RRP INC GST"])||"",a=parseFloat((r||"").toString().replace(/,/g,""))||0,c=parseInt(e.quantity)||1,l=a*c,d=l>0?l.toLocaleString("en-AU",{minimumFractionDigits:2,maximumFractionDigits:2}):"";return`
      <div class="grid-row ${this.getRoomRowClass(e.room)}" data-row-id="${e.id}" data-room="${(e.room||"blank").toLowerCase()}">
        <div class="col-image grid-image-cell">
          ${t?`<img src="${o}" alt="Product" class="grid-product-image" onerror="this.src='assets/no-image.png';">`:""}
        </div>
        <div class="col-product grid-product-cell ${t&&!t._placeholder?"has-product":"empty-product"}">
          ${t&&!t._placeholder?`
            <div class="grid-product-display">
              <div class="grid-product-name">
                <strong>${x.sanitizeInput(i)}</strong> ${x.sanitizeInput(s)}
              </div>
            </div>
          `:`
            ${t!=null&&t._placeholder?`<div class="grid-placeholder-hint">${x.sanitizeInput(t.Description||"")}</div>`:""}
            <input type="text" 
                   class="grid-search-input" 
                   placeholder="${t!=null&&t._placeholder?"Search for Seima alternative...":"Search for a product..."}" 
                   value="">
            ${t!=null&&t._placeholder?`<div class="grid-seima-match-wrap" data-row-id="${e.id}"></div>`:""}
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
          <input type="text" class="grid-input" name="price" value="${r}" placeholder="0.00">
        </div>
        <div class="col-total">
          <div class="grid-total-display">${d}</div>
        </div>
        <div class="col-notes">
          <textarea class="grid-textarea" name="notes" placeholder="Notes..." rows="2">${x.sanitizeInput(e.notes)}</textarea>
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
    `}handleSortChange(){const e=document.getElementById("sort-by"),t=e?e.value:"room";this.sortGridRows(t),this.renderGrid()}sortGridRows(e){switch(e){case"room":this.gridRows.sort((t,o)=>{const s=t.room||"Blank",n=o.room||"Blank";return s.localeCompare(n)});break;case"product":this.gridRows.sort((t,o)=>{const s=t.product&&(t.product.Description||t.product.ProductName)||"",n=o.product&&(o.product.Description||o.product.ProductName)||"";return s.localeCompare(n)});break;case"code":this.gridRows.sort((t,o)=>{const s=t.product&&(t.product.OrderCode||t.product.Code)||"",n=o.product&&(o.product.OrderCode||o.product.Code)||"";return s.localeCompare(n)});break;default:this.gridRows.sort((t,o)=>{const s=t.room||"Blank",n=o.room||"Blank";return s.localeCompare(n)});break}}groupRowsByRoom(){const e=document.getElementById("sort-by");if((e?e.value:"room")!=="room")return{"All Products":this.gridRows};const o={};this.gridRows.forEach(r=>{const a=r.room||"Blank";o[a]||(o[a]=[]),o[a].push(r)});const s=Object.keys(o).filter(r=>r!=="Blank"),n=this.getSortedRoomNames(s),i={};return n.forEach(r=>{o[r]&&(i[r]=o[r])}),o.Blank&&(i.Blank=o.Blank),i}getSortedRoomNames(e){const t=this.customRoomOrder.filter(s=>e.includes(s)),o=e.filter(s=>!this.customRoomOrder.includes(s)).sort((s,n)=>s.localeCompare(n));return[...t,...o]}moveRoomInOrder(e,t,o){if(e==="Blank"||t==="Blank"||e===t)return;const s={};this.gridRows.forEach(c=>{const l=c.room||"Blank";s[l]||(s[l]=[])});const n=Object.keys(s).filter(c=>c!=="Blank"),r=this.getSortedRoomNames(n).filter(c=>c!==e);let a=r.indexOf(t);a===-1&&(a=r.length),o||a++,r.splice(a,0,e),this.customRoomOrder=r,this.saveCustomRoomOrder()}getRoomClass(e){return{Blank:"blank-room","Bath 1":"bath-room","Bath 2":"bath-room","Bath 3":"bath-room",Ensuite:"bath-room",Powder:"bath-room",Kitchen:"kitchen-room",Laundry:"laundry-room",Alfresco:"alfresco-room",Butlers:"butlers-room",Standard:"standard-room",Upgrade:"upgrade-room",Other:"other-room","All Products":"all-products"}[e]||""}getRoomRowClass(e){const t=(e||"Blank").toLowerCase();return t.includes("bath")||t.includes("ensuite")||t.includes("powder")?"bath-room-row":t.includes("kitchen")?"kitchen-room-row":t.includes("laundry")?"laundry-room-row":t.includes("alfresco")?"alfresco-room-row":t.includes("butler")?"butlers-room-row":""}getRoomOptions(e){let t=`<option value="Blank" ${e==="Blank"?"selected":""}>Blank</option>`;return N.get("rooms.predefined",[]).forEach(n=>{t+=`<option value="${n.name}" ${e===n.name?"selected":""}>${n.name}</option>`}),E.getCustomRooms().forEach(n=>{t+=`<option value="${n.name}" ${e===n.name?"selected":""}>${n.name}</option>`}),t+='<option value="__ADD_NEW_ROOM__" style="font-weight: bold; color: #2563eb;">➕ Add new room...</option>',t}updateAllRoomDropdowns(){document.querySelectorAll('.grid-select[name="room"]').forEach(o=>{o.value;const s=this.gridRows.find(n=>n.id===o.closest(".grid-row").dataset.rowId);s&&(o.innerHTML=this.getRoomOptions(s.room))});const t=document.getElementById("bulk-room-select");t&&(t.innerHTML=this.getRoomOptions("Blank"))}ensureAtLeastOneEmptyRow(){this.gridRows.length===0&&this.addEmptyRow()}updateTotals(){const e=document.getElementById("total-items"),t=document.getElementById("total-rooms"),o=document.getElementById("total-value");let s=0,n=0;const i=new Set;this.gridRows.forEach(r=>{if(r.product&&!r.product._placeholder){s+=r.quantity;const a=parseFloat(r.price)||0;n+=a*r.quantity,r.room&&r.room!=="Blank"&&r.room.trim()!==""&&i.add(r.room)}}),e&&(e.textContent=s),t&&(t.textContent=i.size),o&&(o.textContent=n>0?`$${n.toLocaleString("en-AU",{minimumFractionDigits:2,maximumFractionDigits:2})}`:"$0.00")}clearAll(e=!0){E.clearAllSelections(),localStorage.removeItem("pdfWizardSettings"),e&&(localStorage.removeItem("pdfFormSettings"),localStorage.removeItem("customerDetails"),this.currentSelectionId=null,this.currentSelectionName="New Selection",this.hasUnsavedChanges=!1,this.customRoomOrder=[],this.saveCustomRoomOrder()),this.gridRows=[],this.nextRowId=1,this.renderGrid(),this.updateTotals(),this.ensureAtLeastOneEmptyRow(),this.updateContextHeader()}showImportModal(){const e=document.getElementById("file-import-modal");e&&(e.style.display="flex")}syncGridToStorage(){const e=E.getSelectedProducts(),t=new Map(e.map(n=>[n.id,n])),o=[];for(const n of this.gridRows){if(!n.product||!n.storageId)continue;const i=t.get(n.storageId);if(!i)continue;i.product.UserEditedPrice=n.price;const r=n.product||{},a=r.RRP_EX||r["RRP EX GST"]||r.RRP_EX||r.RRP_EXGST||r.rrpExGst||r["PL1 - RRP EX GST"]||"";a&&a!=="0"&&(i.product.RRP_EX=a),i.quantity=Math.max(1,parseInt(n.quantity)||1),i.room=n.room||"Blank",i.notes=n.notes||"",o.push(i)}E.setSelectedProducts(o);const s=o.map(n=>({...n.product,Room:n.room,Notes:n.notes,Quantity:n.quantity}));localStorage.setItem("selection",JSON.stringify(s))}async showDownloadModal(){this.syncGridToStorage(),Y.requireAuth(async()=>{try{await vo.open({onComplete:(e,t)=>{console.log("📄 Wizard completed, generating PDF"),window.showPdfFormScreen?window.showPdfFormScreen(e,t):window.dispatchEvent(new CustomEvent("generatePdf",{detail:{...e,tipTailSettings:t}}))},onCancel:()=>{console.log("📄 Wizard cancelled")}})}catch(e){console.error("Failed to open PDF wizard, falling back to legacy modal:",e),this.showLegacyDownloadModal()}},"create PDF")}async showLegacyDownloadModal(){const e=document.getElementById("pdf-email-modal");if(e){e.style.display="flex";const t=document.getElementById("pdf-email-form");if(t){const o=x.getStorageItem("pdfFormSettings",{});t["user-name"]&&(t["user-name"].value=o.name||""),t["user-project"]&&(t["user-project"].value=o.project||""),t["user-address"]&&(t["user-address"].value=o.address||""),t["user-email"]&&(t["user-email"].value=o.email||""),t["user-telephone"]&&(t["user-telephone"].value=o.telephone||""),t["exclude-prices"]&&(t["exclude-prices"].checked=!!o.excludePrices),t["exclude-qty"]&&(t["exclude-qty"].checked=!!o.excludeQty),t["exclude-long-description"]&&(t["exclude-long-description"].checked=!!o.excludeLongDescription),t["include-gst"]&&(t["include-gst"].checked=!!o.includeGst)}this.loadCustomerLogoPreview(),this.setupCustomerLogoHandlers(),await this.populateTipTailDropdowns(),this.loadTipTailSelections(),this.setupTipTailHandlers()}}refreshUI(){this.init()}showSaveDialog(){Y.requireAuth(e=>{this._showSaveDialogInternal(e)})}_showSaveDialogInternal(e){const t=x.getStorageItem("pdfFormSettings",{}),o=!!this.currentSelectionId,s=t.name?`${t.name} - ${new Date().toLocaleDateString("en-AU")}`:this.currentSelectionName||`Selection - ${new Date().toLocaleDateString("en-AU")}`,n=`
      <div class="save-dialog-overlay" id="save-dialog">
        <div class="save-dialog">
          <h3>Save Selection</h3>
          <p>Save your current product selection for later use.</p>
          
          <div class="save-dialog-form">
            <label class="form-label" for="save-doc-name">Document Name</label>
            <input type="text" class="form-input" id="save-doc-name" 
                   value="${this.escapeHtml(s)}" maxlength="100"
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
    `;this.injectSaveDialogStyles(),document.body.insertAdjacentHTML("beforeend",n);const i=document.getElementById("save-dialog"),r=document.getElementById("save-doc-name"),a=document.getElementById("save-notes");r==null||r.focus(),r==null||r.select(),i.querySelectorAll("button[data-action]").forEach(l=>{l.addEventListener("click",async()=>{const d=l.dataset.action;if(d==="cancel"){i.remove();return}const u=(r==null?void 0:r.value.trim())||"Untitled Selection",m=(a==null?void 0:a.value.trim())||"";this.currentSelectionName=u;const h={...this.prepareSelectionData(),documentName:u,notes:m};i.querySelectorAll("button").forEach(p=>p.disabled=!0),l.textContent="Saving...";try{let p;d==="save-update"?p=await ge.updateSelection(this.currentSelectionId,h):(p=await ge.saveSelection(h),p.success&&p.id&&(this.currentSelectionId=p.id)),i.remove(),p.success?(this.hasUnsavedChanges=!1,this.lastSaveTime=new Date,this.updateContextHeader(),me.success(d==="save-update"?"Selection updated!":"Selection saved!")):me.error("Failed to save: "+(p.error||"Unknown error"))}catch(p){i.remove(),me.error("Failed to save: "+p.message)}})}),i.addEventListener("click",l=>{l.target===i&&i.remove()});const c=l=>{l.key==="Escape"&&(i.remove(),document.removeEventListener("keydown",c))};document.addEventListener("keydown",c)}injectSaveDialogStyles(){if(document.getElementById("save-dialog-styles"))return;document.head.insertAdjacentHTML("beforeend",`
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
    `)}showLoadPicker(){Y.requireAuth(e=>{this._showLoadPickerInternal(e)})}_showLoadPickerInternal(e){ft.show(t=>{console.log("✅ Selection loaded:",t),this.currentSelectionId=t.id||null,this.currentSelectionName=t.documentName||t.customerName||"Loaded Selection",this.hasUnsavedChanges=!1,this.loadExistingProducts(),this.updateTotals(),this.updateContextHeader(),t.roomOrder&&Array.isArray(t.roomOrder)&&(this.customRoomOrder=t.roomOrder,this.saveCustomRoomOrder()),me.success(`Loaded ${t.productCount||this.gridRows.length} products`)})}escapeHtml(e){const t=document.createElement("div");return t.textContent=e||"",t.innerHTML}}const Ve="onboardingCompleted",lt=2;class xo{constructor(){this.currentStep=0,this.overlay=null}shouldShow(){const e=localStorage.getItem(Ve);if(!e)return!0;try{return JSON.parse(e).version<lt}catch{return!0}}show(){this.shouldShow()&&this.showForced()}showForced(){const e=document.getElementById("onboarding-overlay");e&&e.remove(),this.currentStep=0,this.createOverlay(),this.renderStep()}createOverlay(){var e,t;this.overlay=document.createElement("div"),this.overlay.id="onboarding-overlay",this.overlay.innerHTML=`
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
    `,document.head.appendChild(e)}getSteps(){return[{icon:"logo",title:"Welcome to Product Presenter",text:"Create beautiful PDF presentations of Seima products for your clients in minutes.",features:[]},{icon:"📦",title:"Add Your Products",text:"There are three ways to get started:",features:[{icon:"📁",title:"Import a File",desc:"Upload CSV or Excel files with product codes"},{icon:"📂",title:"Load a Selection",desc:"Continue from a previous saved selection"},{icon:"🔍",title:"Search Products",desc:"Search and add products one by one"}]},{icon:"🏠",title:"Organise by Room",text:"Group products by room or area. Drag to reorder, and easily manage your selection.",features:[{icon:"🎨",title:"Colour-coded",desc:"Rooms are visually distinct for quick reference"},{icon:"📊",title:"Sort Options",desc:"Sort by Room/Group, Product Code, or Product Name"},{icon:"💾",title:"Auto-saves",desc:"Your work is automatically preserved"}]},{icon:"📄",title:"Create Your PDF",text:'Click "Create PDF" to customise and generate a professional presentation with your branding.',features:[{icon:"💰",title:"Pricing Options",desc:"Show RRP, add GST, or hide pricing entirely"},{icon:"📝",title:"Content Control",desc:"Include descriptions and custom notes"},{icon:"📑",title:"Cover Pages",desc:"Add branded cover and appendix pages"}]}]}renderStep(){const e=this.getSteps(),t=e[this.currentStep],o=document.getElementById("onboarding-content"),s=document.getElementById("onboarding-dots"),n=document.getElementById("onboarding-next");if(!o||!s)return;let i="";t.features.length>0&&(i=t.features.map(a=>`
        <div class="onboarding-feature">
          <span class="onboarding-feature-icon">${a.icon}</span>
          <div class="onboarding-feature-content">
            <div class="onboarding-feature-title">${a.title}</div>
            <div class="onboarding-feature-desc">${a.desc}</div>
          </div>
        </div>
      `).join(""));const r=t.icon==="logo"?'<img src="assets/seima-logo.png" alt="Seima" class="onboarding-logo">':`<div class="onboarding-icon">${t.icon}</div>`;o.innerHTML=`
      ${r}
      <h2 class="onboarding-title">${t.title}</h2>
      <p class="onboarding-text">${t.text}</p>
      ${i}
    `,s.innerHTML=e.map((a,c)=>`<div class="onboarding-dot ${c===this.currentStep?"active":""}"></div>`).join(""),n&&(n.textContent=this.currentStep===e.length-1?"Get Started":"Next")}nextStep(){const e=this.getSteps();this.currentStep<e.length-1?(this.currentStep++,this.renderStep()):this.complete()}complete(){localStorage.setItem(Ve,JSON.stringify({version:lt,completedAt:new Date().toISOString()})),this.overlay&&(this.overlay.style.animation="fadeIn 0.2s ease reverse",setTimeout(()=>{this.overlay.remove(),this.overlay=null},200))}reset(){localStorage.removeItem(Ve)}}const yt=new xo;class Eo{constructor(){this.panel=null,this.messagesContainer=null,this.input=null,this.sendBtn=null,this.isOpen=!1,this._lastUserMessage=null,this._conversationId=null,this._userEmail=null,this._historyOpen=!1}init(){this._createPanel(),this._bindEvents(),this._restoreMessages(),this._initUserEmail()}_createPanel(){const e=document.createElement("div");e.id="ai-chat-panel",e.className="ai-chat-panel",e.innerHTML=`
      <div class="ai-chat-header">
        <div class="ai-chat-header-left">
          <div class="ai-chat-avatar">AI</div>
          <div>
            <div class="ai-chat-title">Fred</div>
            <div class="ai-chat-subtitle">Product Assistant</div>
          </div>
        </div>
        <div class="ai-chat-header-actions">
          <button class="ai-chat-history-btn" title="Conversation history">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
          </button>
          <button class="ai-chat-clear-btn" title="New conversation">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          </button>
          <button class="ai-chat-close-btn" title="Close">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>
      <div class="ai-chat-messages" id="ai-chat-messages"></div>
      <div class="ai-chat-input-area">
        <div class="ai-chat-image-preview" id="ai-chat-image-preview" style="display:none;">
          <img id="ai-chat-image-thumb" alt="">
          <button class="ai-chat-image-remove" id="ai-chat-image-remove" title="Remove image">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        <div class="ai-chat-input-wrapper">
          <button class="ai-chat-image-btn" id="ai-chat-image-btn" title="Upload image for visual search">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              <circle cx="8.5" cy="8.5" r="1.5"></circle>
              <polyline points="21 15 16 10 5 21"></polyline>
            </svg>
          </button>
          <input type="file" id="ai-chat-image-input" accept="image/*" style="display:none;">
          <textarea
            id="ai-chat-input"
            class="ai-chat-input"
            placeholder="Ask Fred about Seima products..."
            rows="1"
          ></textarea>
          <button id="ai-chat-send" class="ai-chat-send-btn" disabled title="Send message">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          </button>
        </div>
        <div class="ai-chat-footer">Powered by Fred &amp; Jim - who often stuff things up, so dont trust anything!</div>
      </div>
    `;const t=document.createElement("div");t.className="ai-chat-history-panel",t.id="ai-chat-history-panel",t.innerHTML=`
      <div class="ai-chat-history-header">
        <h3>Conversations</h3>
        <button class="ai-chat-history-close" title="Close history">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
      <div class="ai-chat-history-list" id="ai-chat-history-list">
        <div class="ai-chat-history-empty">No previous conversations.</div>
      </div>
    `,e.appendChild(t),document.body.appendChild(e),this.panel=e,this.messagesContainer=e.querySelector("#ai-chat-messages"),this.input=e.querySelector("#ai-chat-input"),this.sendBtn=e.querySelector("#ai-chat-send"),this._showWelcome()}_bindEvents(){this.panel.querySelector(".ai-chat-close-btn").addEventListener("click",()=>this.close()),this.panel.querySelector(".ai-chat-clear-btn").addEventListener("click",()=>this._startNewConversation()),this.panel.querySelector(".ai-chat-history-btn").addEventListener("click",()=>this._toggleHistory()),this.panel.querySelector(".ai-chat-history-close").addEventListener("click",()=>this._toggleHistory(!1)),this.input.addEventListener("input",()=>{this.sendBtn.disabled=!this.input.value.trim(),this._autoResizeInput()}),this.input.addEventListener("keydown",o=>{o.key==="Enter"&&!o.shiftKey&&(o.preventDefault(),this._send())}),this.sendBtn.addEventListener("click",()=>this._send());const e=this.panel.querySelector("#ai-chat-image-btn"),t=this.panel.querySelector("#ai-chat-image-input");e.addEventListener("click",()=>t.click()),t.addEventListener("change",()=>{t.files.length&&this._handleImageSelect(t.files[0]),t.value=""}),this.panel.querySelector("#ai-chat-image-remove").addEventListener("click",()=>this._clearImagePreview()),document.addEventListener("keydown",o=>{o.key==="Escape"&&this.isOpen&&this.close()})}_showWelcome(){const e=[{prompt:"What matte black basin mixers do you have under $300?",label:"Matte black mixers"},{prompt:"Show me Seima wall-mounted basins",label:"Wall-mounted basins"},{prompt:"What tapware is available in brushed gold?",label:"Brushed gold tapware"},{prompt:"Summarise the products in my current selection",label:"Analyse my selection"}],t=document.createElement("div");t.className="ai-chat-welcome",t.innerHTML=`
      <div class="ai-chat-welcome-icon">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
      </div>
      <h3>Hi, I'm Fred!</h3>
      <p>Search the Seima product catalog using natural language.</p>
      <div class="ai-chat-suggestions"></div>
    `,this.messagesContainer.innerHTML="",this.messagesContainer.appendChild(t);const o=t.querySelector(".ai-chat-suggestions");this._renderSuggestions(o,e),this._fetchTopQuestions().then(s=>{if(s&&s.length>0){const n=s.slice(0,3);n.push(e[e.length-1]),o.innerHTML="",this._renderSuggestions(o,n)}})}_renderSuggestions(e,t){for(const o of t){const s=document.createElement("button");s.className="ai-suggestion-btn",s.dataset.prompt=o.prompt,s.textContent=o.label,s.addEventListener("click",()=>{this.input.value=o.prompt,this.sendBtn.disabled=!1,this._send()}),e.appendChild(s)}}async _fetchTopQuestions(){try{const e=sessionStorage.getItem("fredTopQuestions");if(e)return JSON.parse(e);const t=await fetch(`${O.PROXY_URL}/v1/top-questions`);if(!t.ok)return null;const s=((await t.json()).questions||[]).map(n=>({prompt:n.prompt,label:n.label||n.prompt}));return sessionStorage.setItem("fredTopQuestions",JSON.stringify(s)),s}catch{return null}}_handleImageSelect(e){if(!e.type.startsWith("image/"))return;const t=new FileReader;t.onload=()=>{this._pendingImage={dataUrl:t.result,mimeType:e.type,name:e.name};const o=this.panel.querySelector("#ai-chat-image-preview"),s=this.panel.querySelector("#ai-chat-image-thumb");s.src=t.result,o.style.display="flex",this.sendBtn.disabled=!1},t.readAsDataURL(e)}_clearImagePreview(){this._pendingImage=null;const e=this.panel.querySelector("#ai-chat-image-preview");e.style.display="none",this.sendBtn.disabled=!this.input.value.trim()}_autoResizeInput(){this.input.style.height="auto",this.input.style.height=Math.min(this.input.scrollHeight,120)+"px"}async _send(){const e=this.input.value.trim(),t=!!this._pendingImage;if(!e&&!t||pe.processing)return;const o=this.messagesContainer.querySelector(".ai-chat-welcome");o&&o.remove();const s=t?e||`[Image: ${this._pendingImage.name}]`:e;this._addMessage("user",s),this._trackQuestion(s);const n=this._pendingImage;this._clearImagePreview(),this.input.value="",this.input.style.height="auto",this.sendBtn.disabled=!0;let i;n&&(i=[],e&&i.push({type:"text",text:e}),i.push({type:"image_url",image_url:{url:n.dataUrl,detail:"low"}}),e||i.push({type:"text",text:"What Seima products would match this style or look similar to what's shown in this image?"}));const r=this._addThinking();try{const a=E.getSelectedProducts(),c=i||e;let l,d;const u=await pe.chat(c,D,a,h=>{d||(this._stopThinking(r),{wrapper:l,bubble:d}=this._createStreamingBubble()),d.textContent+=h,this._scrollToBottom()},h=>{r._serverStatus=!0;const p=r.querySelector(".ai-thinking-status");p&&(p.textContent=h),this._scrollToBottom()});this._stopThinking(r),l||({wrapper:l,bubble:d}=this._createStreamingBubble()),d.classList.remove("ai-msg-streaming"),d.dataset.rawContent=u.content,d.innerHTML=this._formatMarkdown(u.content),this._injectProductCards(d),this._collapseProductCards(d),this._attachProductButtons(d);const m=this._generateId();l.dataset.feedbackId=m,this._appendFeedbackRow(l,m,u.content),this._persistMessages(),this._saveConversation()}catch(a){this._stopThinking(r),this._addMessage("error",a.message||"Something went wrong. Please try again.")}this._scrollToBottom(),this.input.focus()}_addMessage(e,t,{skipPersist:o=!1,feedbackId:s=null}={}){const n=document.createElement("div");n.className=`ai-msg ai-msg-${e}`;const i=document.createElement("div");if(i.className="ai-msg-bubble",e==="user")i.textContent=t,this._lastUserMessage=t;else if(e==="assistant"){i.dataset.rawContent=t,i.innerHTML=this._formatMarkdown(t),this._injectProductCards(i),this._collapseProductCards(i),this._attachProductButtons(i);const r=s||this._generateId();n.dataset.feedbackId=r,n.appendChild(i),this._appendFeedbackRow(n,r,t)}else e==="error"&&(i.innerHTML=`<span class="ai-msg-error">${this._escapeHtml(t)}</span>`);return n.contains(i)||n.appendChild(i),this.messagesContainer.appendChild(n),this._scrollToBottom(),!o&&e!=="error"&&this._persistMessages(),n}_createStreamingBubble(){const e=document.createElement("div");e.className="ai-msg ai-msg-assistant";const t=document.createElement("div");return t.className="ai-msg-bubble ai-msg-streaming",e.appendChild(t),this.messagesContainer.appendChild(e),this._scrollToBottom(),{wrapper:e,bubble:t}}_addThinking(){const e=document.createElement("div");e.className="ai-msg ai-msg-assistant",e.innerHTML=`
      <div class="ai-msg-bubble ai-msg-thinking">
        <span class="ai-thinking-spinner"></span>
        <span class="ai-thinking-status"></span>
      </div>
    `,this.messagesContainer.appendChild(e),this._scrollToBottom();const t=e.querySelector(".ai-thinking-spinner"),o=e.querySelector(".ai-thinking-status"),s=["◜","◠","◝","◞","◡","◟"],n=["Checking behind the toilets...","This is harder than it looks...","Asking the tapware for directions...","Pretending to think really hard...","Rummaging through the basins...","Consulting the shower heads...","Hold on, dropped my wrench...","Almost there, just fixing a leak...","Flipping through the catalog...","Processing... or just staring at the screen...","Fred is on it. Probably.","Searching every shelf and drawer...","This is tricky, need to ask Jim for help.","I'll reach out to Michael for help?","When do I get a break from all these questions!","I need Bill to upgrade my memory"];let i=0,r=Math.floor(Math.random()*n.length);return e._serverStatus=!1,o.textContent=n[r],e._spinnerTimer=setInterval(()=>{i=(i+1)%s.length,t.textContent=s[i]},100),e._quipTimer=setInterval(()=>{e._serverStatus||(r=(r+1)%n.length,o.textContent=n[r])},3e3),e}_stopThinking(e){e._spinnerTimer&&clearInterval(e._spinnerTimer),e._quipTimer&&clearInterval(e._quipTimer),e.parentNode&&e.remove()}_formatMarkdown(e){let t=this._escapeHtml(e);return t=t.replace(/((?:^\|.+\|$\n?)+)/gm,o=>{const s=o.trim().split(`
`).filter(d=>d.trim());if(s.length<2)return o;const n=d=>d.split("|").slice(1,-1).map(u=>u.trim()),i=d=>/^\|[\s:|-]+\|$/.test(d.trim());let r=n(s[0]),a=1;s.length>1&&i(s[1])&&(a=2);let c="<thead><tr>"+r.map(d=>`<th>${d}</th>`).join("")+"</tr></thead>",l="<tbody>"+s.slice(a).filter(d=>!i(d)).map(d=>"<tr>"+n(d).map(u=>`<td>${u}</td>`).join("")+"</tr>").join("")+"</tbody>";return`<table class="ai-comparison-table">${c}${l}</table>`}),t=t.replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>"),t=t.replace(/`([^`]+)`/g,"<code>$1</code>"),t=t.replace(/^### (.+)$/gm,"<h4>$1</h4>"),t=t.replace(/^## (.+)$/gm,"<h3>$1</h3>"),t=t.replace(/^- (.+)$/gm,"<li>$1</li>"),t=t.replace(/(<li>.*<\/li>\n?)+/g,o=>`<ul>${o}</ul>`),t=t.replace(/^\d+\. (.+)$/gm,"<li>$1</li>"),t=t.replace(/\n\n/g,"</p><p>"),t=`<p>${t}</p>`,t=t.replace(/<p><\/p>/g,""),t=t.replace(/<p>(<h[34]>)/g,"$1"),t=t.replace(/(<\/h[34]>)<\/p>/g,"$1"),t=t.replace(/<p>(<ul>)/g,"$1"),t=t.replace(/(<\/ul>)<\/p>/g,"$1"),t=t.replace(/<p>(<table)/g,"$1"),t=t.replace(/(<\/table>)<\/p>/g,"$1"),t=t.replace(/\b(\d{6})\b/g,'<button class="ai-add-product-btn" data-code="$1" title="Add $1 to selection">$1 <span class="ai-add-icon">+</span></button>'),t}_getBasePath(){var e;return(((e=document.querySelector("base"))==null?void 0:e.href)||window.location.origin+"/").replace(/\/$/,"")}_getProductImage(e){return e.Image_URL||e.imageUrl||e.Image||`${this._getBasePath()}/assets/no-image.png`}_getProductName(e){return e.Description||e.ProductName||e["Product Name"]||""}_getProductMeta(e){const t=e.Finish||e.Colour||"",o=e.DimX||e["X Dimension (mm)"]||"",s=e.DimY||e["Y Dimension (mm)"]||"",n=e.DimZ||e["Z Dimension (mm)"]||"",i=o&&o!=="0"?`${o} × ${s||0} × ${n||0}mm`:"";return[t,i].filter(Boolean).join("  ·  ")}_getProductPrice(e){const t=e["RRP INC GST"]||e.RRP_INCGST||e["RRP EX GST"]||e.RRP_EXGST||"";return t?`$${parseFloat(t).toLocaleString("en-AU",{minimumFractionDigits:2})}`:""}_injectProductCards(e){const t=e.querySelectorAll(".ai-add-product-btn");if(!t.length)return;const o=this._getBasePath();t.forEach(s=>{const n=s.dataset.code,i=D.findProductByCode(n);if(!i)return;const r=s.closest("li");if(!(r||s.parentElement))return;const c=this._getProductImage(i),l=this._getProductName(i),d=this._getProductMeta(i),u=this._getProductPrice(i),m=document.createElement("div");if(m.className="ai-product-card",m.dataset.code=n,m.innerHTML=`
        <img class="ai-product-card-img" src="${this._escapeHtml(c)}" alt="" onerror="this.src='${o}/assets/no-image.png';">
        <div class="ai-product-card-info">
          <div class="ai-product-card-name">${this._escapeHtml(l)}</div>
          ${d?`<div class="ai-product-card-meta">${this._escapeHtml(d)}</div>`:""}
          <div class="ai-product-card-footer">
            <span class="ai-product-card-price">${u}</span>
            <button class="ai-card-add-btn" data-code="${n}" title="Add to selection">+ Add</button>
          </div>
        </div>
      `,m.addEventListener("click",h=>{h.target.closest(".ai-card-add-btn")||this._showProductModal(n)}),m.querySelector(".ai-card-add-btn").addEventListener("click",h=>{h.preventDefault(),h.stopPropagation(),this._addProductToGrid(n,h.currentTarget)}),r){const h=r.parentElement;r.replaceWith(m),this._removeTrailingProductDetail(h||m)}else s.replaceWith(m)})}_removeTrailingProductDetail(e){const t=/^[\u2013\u2014–—-]\s*(Dimensions|Description|Detail|Price)\b/;let o=e.nextSibling;for(;o;){const s=o.nextSibling;if(o.nodeType===Node.TEXT_NODE){if(t.test(o.textContent.trim())){o.remove(),o=s;continue}break}if(o.nodeType===Node.ELEMENT_NODE){const n=o.textContent.trim();if(o.tagName==="P"&&t.test(n)){o.remove(),o=s;continue}break}break}}_collapseProductCards(e,t=5){const o=e.querySelectorAll(".ai-product-card");if(o.length<=t)return;const s=[];o.forEach((r,a)=>{a>=t&&(r.style.display="none",s.push(r))});const n=document.createElement("button");n.className="ai-show-more-btn",n.textContent=`Show ${s.length} more product${s.length>1?"s":""}`,n.addEventListener("click",()=>{s.forEach(r=>{r.style.display=""}),n.remove(),this._scrollToBottom()});const i=o[t-1];i.parentNode.insertBefore(n,i.nextSibling)}_attachProductButtons(e){e.querySelectorAll(".ai-add-product-btn").forEach(t=>{t.addEventListener("click",o=>{o.preventDefault(),this._addProductToGrid(t.dataset.code,t)})})}_addProductToGrid(e,t){const o=D.findProductByCode(e);if(!o){t&&(t.classList.add("ai-add-error"),t.title="Product not found");return}E.addProductToSelection(o),window.productGridManager&&(window.productGridManager.loadExistingProducts(),window.productGridManager.updateTotals(),window.productGridManager.ensureAtLeastOneEmptyRow()),t&&(t.classList.add("added"),t.disabled=!0,t.textContent="Added ✓"),this._markCardAdded(e)}_markCardAdded(e){document.querySelectorAll(`.ai-card-add-btn[data-code="${e}"]`).forEach(o=>{o.classList.add("added"),o.disabled=!0,o.textContent="Added ✓"});const t=document.querySelector('.ai-product-modal-add[data-code="'+e+'"]');t&&(t.classList.add("added"),t.disabled=!0,t.textContent="Added to Selection ✓")}_showProductModal(e){const t=D.findProductByCode(e);if(!t)return;const o=document.querySelector(".ai-product-modal-overlay");o&&o.remove();const s=this._getBasePath(),n=this._getProductImage(t),i=this._getProductName(t),r=this._getProductPrice(t),a=t["Long Description"]||t.LongDescription||"",c=t.Range||"",l=t.Group||"",d=t.SubGroup||t.Subgroup||"",u=t.Finish||"",m=t.Colour||"",h=t.DimX||t["X Dimension (mm)"]||"",p=t.DimY||t["Y Dimension (mm)"]||"",y=t.DimZ||t["Z Dimension (mm)"]||"",f=h&&h!=="0"?`${h} × ${p||0} × ${y||0}mm`:"",v=t["WELS STAR"]||t.WELS_STAR||"",w=[];c&&w.push(["Range",c]),l&&w.push(["Group",l]),d&&w.push(["Type",d]),u&&w.push(["Finish",u]),m&&m!==u&&w.push(["Colour",m]),f&&w.push(["Dimensions",f]),v&&w.push(["WELS",`${v} star`]);const b=document.createElement("div");b.className="ai-product-modal-overlay",b.innerHTML=`
      <div class="ai-product-modal">
        <div class="ai-product-modal-header">
          <button class="ai-product-modal-close" title="Close">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        <div class="ai-product-modal-body">
          <img class="ai-product-modal-img" src="${this._escapeHtml(n)}" alt="" onerror="this.src='${s}/assets/no-image.png';">
          <h3 class="ai-product-modal-title">${this._escapeHtml(i)}</h3>
          ${w.length?`<dl class="ai-product-modal-specs">${w.map(([S,C])=>`<dt>${this._escapeHtml(S)}</dt><dd>${this._escapeHtml(C)}</dd>`).join("")}</dl>`:""}
          ${a?`<div class="ai-product-modal-desc">${this._escapeHtml(a)}</div>`:""}
          ${r?`<div class="ai-product-modal-price">${r}</div>`:""}
          <button class="ai-product-modal-add" data-code="${e}">Add to Selection</button>
        </div>
      </div>
    `,b.addEventListener("click",S=>{S.target===b&&b.remove()}),b.querySelector(".ai-product-modal-close").addEventListener("click",()=>b.remove()),b.querySelector(".ai-product-modal-add").addEventListener("click",S=>{this._addProductToGrid(e,null);const C=S.currentTarget;C.classList.add("added"),C.disabled=!0,C.textContent="Added to Selection ✓"}),document.addEventListener("keydown",function S(C){C.key==="Escape"&&(b.remove(),document.removeEventListener("keydown",S))}),document.body.appendChild(b)}_appendFeedbackRow(e,t,o){const s=document.createElement("div");s.className="ai-feedback-row";const n=this._getFeedbackEntry(t),i=(n==null?void 0:n.rating)||null;s.innerHTML=`
      <button class="ai-feedback-btn ai-feedback-up${i==="up"?" active":""}"
              data-rating="up" title="Helpful">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3H14z"></path>
          <path d="M7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
        </svg>
      </button>
      <button class="ai-feedback-btn ai-feedback-down${i==="down"?" active":""}"
              data-rating="down" title="Not helpful">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3H10z"></path>
          <path d="M17 2h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-3"></path>
        </svg>
      </button>
    `,s.querySelectorAll(".ai-feedback-btn").forEach(a=>{a.addEventListener("click",()=>{const c=a.dataset.rating;s.querySelectorAll(".ai-feedback-btn").forEach(l=>l.classList.remove("active")),a.classList.add("active"),this._saveFeedback(t,o,c)})});const r=e.querySelector(".ai-msg-bubble");r?e.insertBefore(s,r.nextSibling):e.appendChild(s)}async _saveFeedback(e,t,o){try{const s=await this._loadFeedback(),n=s.findIndex(a=>a.id===e),i={id:e,question:this._lastUserMessage||"",answer:(t||"").slice(0,500),rating:o,timestamp:Date.now(),synced:!1};n>=0?s[n]={...s[n],...i}:s.push(i);const{set:r}=await z(async()=>{const{set:a}=await import("./index-DwnyWBFG.js");return{set:a}},[]);await r(Ce,s)}catch{}}_getFeedbackEntry(e){return this._loadFeedback().then(t=>t.find(o=>o.id===e)||null)}async _loadFeedback(){try{const{get:e}=await z(async()=>{const{get:o}=await import("./index-DwnyWBFG.js");return{get:o}},[]),t=await e(Ce);return Array.isArray(t)?t:[]}catch{return[]}}_escapeHtml(e){const t=document.createElement("div");return t.textContent=e,t.innerHTML}_scrollToBottom(){requestAnimationFrame(()=>{this.messagesContainer.scrollTop=this.messagesContainer.scrollHeight})}async _persistMessages(){try{const e=[];this.messagesContainer.querySelectorAll(".ai-msg").forEach(o=>{var s,n;o.classList.contains("ai-msg-user")?e.push({role:"user",content:((s=o.querySelector(".ai-msg-bubble"))==null?void 0:s.textContent)||""}):o.classList.contains("ai-msg-assistant")&&!o.querySelector(".ai-msg-thinking")&&e.push({role:"assistant",content:((n=o.querySelector(".ai-msg-bubble"))==null?void 0:n.dataset.rawContent)||"",feedbackId:o.dataset.feedbackId||null})});const{set:t}=await z(async()=>{const{set:o}=await import("./index-DwnyWBFG.js");return{set:o}},[]);await t(Fe,e)}catch{}}async _restoreMessages(){try{localStorage.removeItem(Fe);const{get:e}=await z(async()=>{const{get:n}=await import("./index-DwnyWBFG.js");return{get:n}},[]),t=await e(Fe);if(!Array.isArray(t)||t.length===0)return;const o=this.messagesContainer.querySelector(".ai-chat-welcome");o&&o.remove();for(const n of t)n.role==="user"&&(this._lastUserMessage=n.content),this._addMessage(n.role,n.content,{skipPersist:!0,feedbackId:n.feedbackId||null});const s=document.createElement("div");s.className="ai-chat-restored",s.textContent="Previous conversation restored",this.messagesContainer.prepend(s)}catch{}}_generateId(){return Date.now().toString(36)+Math.random().toString(36).substr(2)}async _trackQuestion(e){try{const{get:t,set:o}=await z(async()=>{const{get:i,set:r}=await import("./index-DwnyWBFG.js");return{get:i,set:r}},[]),s=await t(xe)||{},n=e.trim();if(n.length<5)return;s[n]=(s[n]||0)+1,await o(xe,s)}catch{}}async _syncFeedback(){try{const{get:e,set:t,del:o}=await z(async()=>{const{get:a,set:c,del:l}=await import("./index-DwnyWBFG.js");return{get:a,set:c,del:l}},[]),s=await this._loadFeedback(),n=s.filter(a=>!a.synced),i=await e(xe)||null;if(n.length===0&&!i)return;if((await fetch(`${O.PROXY_URL}/v1/feedback`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${O.APP_SECRET}`},body:JSON.stringify({entries:n,questionLog:i})})).ok){for(const a of n)a.synced=!0;this._pruneFeedback(s),await t(Ce,s),await o(xe)}}catch{}}_pruneFeedback(e){const t=Date.now()-6048e5;for(let o=e.length-1;o>=0;o--)e[o].synced&&e[o].timestamp<t&&e.splice(o,1)}async _clearChat(){await pe.clearHistory();try{const{del:e}=await z(async()=>{const{del:t}=await import("./index-DwnyWBFG.js");return{del:t}},[]);await e(Ce),await e(xe)}catch{}localStorage.removeItem(Ce),localStorage.removeItem(xe),this._showWelcome()}async _initUserEmail(){var e;try{const{authService:t}=await z(async()=>{const{authService:s}=await import("./index-BnLAUsuI.js");return{authService:s}},__vite__mapDeps([0,1,2,3])),o=((e=t.getUser)==null?void 0:e.call(t))||{};this._userEmail=o.email||null}catch{}}async _saveConversation(){var s;if(!this._userEmail)return;const e=[];if(this.messagesContainer.querySelectorAll(".ai-msg").forEach(n=>{var i,r;n.classList.contains("ai-msg-user")?e.push({role:"user",content:((i=n.querySelector(".ai-msg-bubble"))==null?void 0:i.textContent)||""}):n.classList.contains("ai-msg-assistant")&&!n.querySelector(".ai-msg-thinking")&&e.push({role:"assistant",content:((r=n.querySelector(".ai-msg-bubble"))==null?void 0:r.dataset.rawContent)||""})}),e.length<2)return;this._conversationId||(this._conversationId=Date.now().toString(36)+Math.random().toString(36).slice(2,8));const t=((s=e.find(n=>n.role==="user"))==null?void 0:s.content)||"Untitled",o=t.length>50?t.slice(0,47)+"...":t;try{await fetch(`${O.PROXY_URL}/v1/conversations/${this._conversationId}`,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:`Bearer ${O.APP_SECRET}`},body:JSON.stringify({email:this._userEmail,title:o,messages:e})})}catch{}}_startNewConversation(){this._saveConversation(),this._conversationId=null,this._clearChat()}_toggleHistory(e){const t=this.panel.querySelector("#ai-chat-history-panel");this._historyOpen=e!==void 0?e:!this._historyOpen,t.classList.toggle("open",this._historyOpen),this._historyOpen&&this._loadConversationList()}async _loadConversationList(){if(!this._userEmail){this.panel.querySelector("#ai-chat-history-list").innerHTML='<div class="ai-chat-history-empty">Sign in to see conversation history.</div>';return}const e=this.panel.querySelector("#ai-chat-history-list");e.innerHTML='<div class="ai-chat-history-empty">Loading...</div>';try{const t=`${O.PROXY_URL}/v1/conversations?token=${encodeURIComponent(O.APP_SECRET)}&email=${encodeURIComponent(this._userEmail)}`,o=await fetch(t);if(!o.ok)throw new Error("Failed");const n=(await o.json()).conversations||[];if(n.length===0){e.innerHTML='<div class="ai-chat-history-empty">No previous conversations.</div>';return}e.innerHTML=n.map(i=>`
        <button class="ai-chat-history-item" data-id="${i.id}">
          <div class="ai-chat-history-title">${this._escapeHtml(i.title)}</div>
          <div class="ai-chat-history-meta">${i.messageCount||0} messages · ${this._formatHistoryTime(i.updatedAt)}</div>
        </button>
      `).join(""),e.querySelectorAll(".ai-chat-history-item").forEach(i=>{i.addEventListener("click",()=>this._loadConversation(i.dataset.id))})}catch{e.innerHTML='<div class="ai-chat-history-empty">Failed to load conversations.</div>'}}async _loadConversation(e){try{const t=`${O.PROXY_URL}/v1/conversations/${e}?token=${encodeURIComponent(O.APP_SECRET)}`,o=await fetch(t);if(!o.ok)throw new Error("Failed");const s=await o.json();this._conversationId=e,pe.clearHistory(),this.messagesContainer.innerHTML="";const n=this.messagesContainer.querySelector(".ai-chat-welcome");n&&n.remove();for(const r of s.messages||[])r.role==="user"&&(this._lastUserMessage=r.content),this._addMessage(r.role,r.content,{skipPersist:!0}),(r.role==="user"||r.role==="assistant")&&pe.conversationHistory.push(r);this._persistMessages(),this._toggleHistory(!1);const i=document.createElement("div");i.className="ai-chat-restored",i.textContent="Conversation restored",this.messagesContainer.prepend(i)}catch{console.error("Failed to load conversation")}}_formatHistoryTime(e){if(!e)return"";const t=new Date(e),s=new Date-t,n=Math.floor(s/864e5);return n===0?"Today":n===1?"Yesterday":n<7?`${n}d ago`:t.toLocaleDateString("en-AU",{day:"numeric",month:"short"})}open(){this.panel.classList.add("open"),this.isOpen=!0,setTimeout(()=>this.input.focus(),300),this._syncFeedback()}close(){this.panel.classList.remove("open"),this.isOpen=!1}toggle(){this.isOpen?this.close():this.open()}}const dt=new Eo;class Po{constructor(){this.navigationManager=null,this.fileImportManager=new po,this.productGridManager=new So,this.isInitialized=!1,J.log("SeimaScanner application starting",Q.INFO)}async init(){var e,t,o;try{J.log("Initializing application modules",Q.INFO),V.configure({googleSheetsUrl:(e=H.PRESENTATION_RECORDING)==null?void 0:e.GOOGLE_SHEETS_URL,email:H.EMAIL}),Y.configure({logoSrc:"assets/seima-logo.png",brandName:"Seima",appName:"Product Presenter"});const s=(t=H.PRESENTATION_RECORDING)==null?void 0:t.GOOGLE_SHEETS_URL;if(s&&Bt(s).catch(r=>{console.warn("Synonyms preload failed:",(r==null?void 0:r.message)||r)}),(o=H.CROSSHAIR)!=null&&o.ENABLED){const r=V.getCurrentUser();T.configure(H.CROSSHAIR,(r==null?void 0:r.email)||""),T.preload().catch(a=>{console.warn("Crosshair preload failed (user may not be logged in):",a.message)})}this.navigationManager=new Gt;const n=Se.getCompatibilityReport();J.log(`Browser compatibility: ${n.score}% (${n.browserName})`,Q.INFO),Se.shouldShowCompatibilityWarning()&&this.showCompatibilityWarning(),await this.navigationManager.init(),this.fileImportManager.init(),this.setupGlobalEventListeners(),this.productGridManager.init(),dt.init();const i=document.getElementById("ai-chat-trigger");return i&&i.addEventListener("click",()=>dt.toggle()),window.navigationManager=this.navigationManager,window.productGridManager=this.productGridManager,window.browserCompatibility=Se,window.downloadWithFallback=Xe,window.showPdfFormScreen=Ye,this.isInitialized=!0,J.log("Seima Scanner initialized successfully",Q.INFO),this._dismissLoadingOverlay(),setTimeout(()=>{yt.show()},500),!0}catch(s){return J.handleError({message:"Failed to initialize application",error:s,category:ke.UI,level:Q.CRITICAL,context:"app-init"}),this._dismissLoadingOverlay(),!1}}_dismissLoadingOverlay(){const e=document.getElementById("app-loading-overlay");e&&(e.classList.add("fade-out"),e.addEventListener("transitionend",()=>e.remove(),{once:!0}),setTimeout(()=>e.remove(),400))}showCompatibilityWarning(){const e=Se.getCompatibilityReport(),t=e.recommendations;if(t.length===0)return;const o=t.filter(i=>i.type==="critical"),s=e.score<N.get("compatibility.minCompatibilityScore",70);if(o.length===0&&!s)return;const n=document.createElement("div");n.style.cssText=`
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
    `,document.body.insertBefore(n,document.body.firstChild)}setupGlobalEventListeners(){window.addEventListener("generatePdf",e=>{const{tipTailSettings:t,...o}=e.detail;Ht(),Ye(o,t||null)}),window.addEventListener("beforeunload",()=>{}),Se.features.memoryAPI&&setInterval(()=>{const e=Se.memoryInfo;e.memoryPressure==="high"&&console.warn("High memory usage detected:",e)},6e4)}getSelectedProducts(){return E.getSelectedProducts()}clearSelection(){return E.clearAllSelections()}addProduct(e,{notes:t="",room:o="",quantity:s=1}={}){return E.addProductToSelection(e,{notes:t,room:o,quantity:s})}updateSelectionCount(){this.navigationManager&&this.navigationManager.updateSelectionCount()}showError(e){alert(e)}}document.addEventListener("DOMContentLoaded",()=>{window.seimaScanner=new Po,window.seimaScanner.init()});window.addEventListener("DOMContentLoaded",()=>{fetch("./version.txt").then(g=>g.text()).then(g=>{const e=g.trim().split(`
`);if(e.length>0){const o=e[0].split(" - ")[0].trim();window._appVersion=o;const s=document.getElementById("menu-version-footer");s&&(s.textContent=`Ver: ${o}`)}}),Co(),ko()});function Co(){const g=document.getElementById("help-btn");g&&g.addEventListener("click",()=>{Ro()});const e=document.getElementById("crosshair-btn");e&&e.addEventListener("click",()=>{window.location.href="screens/validator.html"});const t=document.getElementById("landscape-btn");t&&t.addEventListener("click",()=>{window.location.href="screens/landscape.html"});const o=document.getElementById("admin-btn");o&&o.addEventListener("click",()=>{window.location.href="screens/admin.html"});const s=document.getElementById("quick-start-btn");s&&s.addEventListener("click",()=>{yt.showForced()})}function ko(){const g=document.getElementById("user-menu-container"),e=document.getElementById("user-menu-trigger"),t=document.getElementById("user-menu-dropdown"),o=document.getElementById("sign-in-btn"),s=document.getElementById("user-avatar"),n=document.getElementById("user-name-display");function i(c){var l,d,u,m,h,p,y,f,v,w;if(c){(l=H.CROSSHAIR)!=null&&l.ENABLED&&(T.configure(H.CROSSHAIR,c.email||""),T.preload().catch(U=>{console.warn("Crosshair preload after login failed:",U)})),g&&(g.style.display="block"),o&&(o.style.display="none");const b=document.getElementById("crosshair-btn");b&&(b.style.display=(d=H.CROSSHAIR)!=null&&d.ENABLED&&V.isStaffMode()?"":"none");const S=document.getElementById("landscape-btn");S&&(S.style.display=(u=H.CROSSHAIR)!=null&&u.ENABLED&&V.isAdmin()?"":"none");const C=document.getElementById("admin-btn");C&&(C.style.display=V.isAdmin()?"":"none");const P=document.getElementById("staff-divider"),k=(b==null?void 0:b.style.display)!=="none"||(S==null?void 0:S.style.display)!=="none"||(C==null?void 0:C.style.display)!=="none";P&&(P.style.display=k?"":"none");const R=r(c.name);s&&(s.textContent=R),n&&(n.textContent=((m=c.name)==null?void 0:m.split(" ")[0])||"User");const L=(c.email||"").toLowerCase().endsWith("@seima.com.au")&&c.emailVerified===!1;let _=document.getElementById("verify-email-banner");if(L?(_||(_=document.createElement("div"),_.id="verify-email-banner",_.className="verify-email-banner",_.innerHTML=`
            <span>Verify your email to access staff features.</span>
            <button id="verify-email-btn" class="verify-email-btn">Verify now</button>
          `,document.body.insertBefore(_,document.body.firstChild),_.querySelector("#verify-email-btn").addEventListener("click",()=>{Y.showVerifyEmail(c.email,()=>{i(V.getCurrentUser()),_==null||_.remove()})})),_.style.display=""):_&&(_.style.display="none"),t){const U=L?`
            <button class="user-menu-item" id="menu-verify-email" style="color:var(--color-copper,#b87333);font-weight:600;">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              Verify Email (staff access)
            </button>`:"",re=window._appVersion?`Ver: ${window._appVersion}`:"Loading...";t.innerHTML=`
          <div class="user-menu-header">
            <div class="user-menu-name">${a(c.name||"User")}</div>
            <div class="user-menu-email">${a(c.email||"")}</div>
          </div>
          <div class="user-menu-items">
            ${U}
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
          <div class="user-menu-footer" id="menu-version-footer" title="Click to view what's new">${re}</div>
        `,(h=document.getElementById("menu-verify-email"))==null||h.addEventListener("click",()=>{t.style.display="none",Y.showVerifyEmail(c.email,()=>{var M;i(V.getCurrentUser()),(M=document.getElementById("verify-email-banner"))==null||M.remove()})}),(p=document.getElementById("menu-refresh"))==null||p.addEventListener("click",async()=>{t.style.display="none";try{const{del:M,keys:Re}=await z(async()=>{const{del:ae,keys:Ie}=await import("./index-DwnyWBFG.js");return{del:ae,keys:Ie}},[]),Qe=await Re(),Ke=["productCatalogCsv","customerLogo","fredChatHistory","fredChatMessages","fredFeedback","fredQuestionLog"];await Promise.all(Qe.filter(ae=>typeof ae=="string"&&(Ke.includes(ae)||ae.startsWith("crosshair_"))).map(ae=>M(ae)))}catch{}localStorage.removeItem("configPreferences"),localStorage.removeItem("pdfWizardSettings"),Object.keys(localStorage).filter(M=>M.startsWith("crosshair_")||M.startsWith("fred")).forEach(M=>localStorage.removeItem(M)),window.location.reload()}),(y=document.getElementById("menu-version-footer"))==null||y.addEventListener("click",()=>{t.style.display="none",_o()}),(f=document.getElementById("menu-profile"))==null||f.addEventListener("click",()=>{t.style.display="none",Y.showEditProfile(M=>{E.clearUserSettings(),i(M)})}),(v=document.getElementById("menu-password"))==null||v.addEventListener("click",()=>{t.style.display="none",Y.showChangePassword()}),(w=document.getElementById("menu-logout"))==null||w.addEventListener("click",()=>{t.style.display="none",E.clearUserSettings(),V.logout(),i(null)})}}else g&&(g.style.display="none"),o&&(o.style.display="block")}function r(c){if(!c)return"?";const l=c.trim().split(" ");return l.length>=2?(l[0][0]+l[l.length-1][0]).toUpperCase():c.substring(0,2).toUpperCase()}function a(c){const l=document.createElement("div");return l.textContent=c||"",l.innerHTML}e&&t&&(e.addEventListener("click",c=>{c.stopPropagation();const l=t.style.display!=="none";t.style.display=l?"none":"block"}),document.addEventListener("click",c=>{g!=null&&g.contains(c.target)||(t.style.display="none")})),o&&o.addEventListener("click",()=>{Y.showLogin(c=>{i(c)})}),V.onAuthChange=i,i(V.getCurrentUser())}function Ro(){const g=document.getElementById("user-guide-modal"),e=document.getElementById("user-guide-content");if(!g||!e)return;e.innerHTML=Io(),g.style.display="flex";const t=document.getElementById("user-guide-close");t&&(t.onclick=()=>{g.style.display="none"}),g.onclick=s=>{s.target===g&&(g.style.display="none")};const o=s=>{s.key==="Escape"&&(g.style.display="none",document.removeEventListener("keydown",o))};document.addEventListener("keydown",o)}function Io(){return`
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
  `}async function _o(){try{const g=document.getElementById("changelog-modal"),e=document.getElementById("changelog-content"),s=(await(await fetch("./version.txt")).text()).trim().split(`
`);if(s.length===0){e.innerHTML="<p>No changelog available.</p>",g.style.display="flex";return}let n="";s.forEach(i=>{if(i.trim()){const r=i.indexOf(" - ");if(r>0){const a=i.substring(0,r).trim(),c=i.substring(r+3).trim();n+=`
            <div style="margin-bottom: 30px; border-bottom: 1px solid #eee; padding-bottom: 20px;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                <h4 style="margin: 0; color: #a09484;">v${a}</h4>
              </div>
              <p style="margin: 10px 0; color: #555; line-height: 1.5;">${c}</p>
            </div>
          `}}}),e.innerHTML=n||"<p>No changelog available.</p>",g.style.display="flex"}catch(g){console.error("Error loading changelog:",g),document.getElementById("changelog-content").innerHTML='<p style="color: #999;">Error loading changelog.</p>',document.getElementById("changelog-modal").style.display="flex"}}document.addEventListener("DOMContentLoaded",()=>{const g=document.getElementById("changelog-close");g&&g.addEventListener("click",()=>{document.getElementById("changelog-modal").style.display="none"})});document.addEventListener("click",g=>{const e=document.getElementById("changelog-modal");g.target===e&&(e.style.display="none")});
