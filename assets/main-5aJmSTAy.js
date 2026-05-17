const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/data-layer-DQlRTHNz.js","assets/auth-ui-Duo2mTTr.js","assets/auth-ui-in-MCC0p.css","assets/product-search-CeYNHdfP.js","assets/vendor-fuse-Ch1WBRTM.js","assets/pdf-core-BGfPcMgu.js","assets/product-synonyms-CeNdtqLO.js","assets/vendor-idb-DwnyWBFG.js"])))=>i.map(i=>d[i]);
import{U as x,a as L,b as Z,c as _e}from"./auth-ui-Duo2mTTr.js";import{C as F,_ as M}from"./config-CYj5JI-8.js";import{c as A,e as X,L as Y,E as xe,d as _}from"./data-layer-DQlRTHNz.js";import{p as Pt,e as ct}from"./gst-pricing-D2t-RruI.js";import{l as Ft,p as Je,e as Te,g as pt,a as _t,P as ht,b as Nt,s as Mt,c as Ut,d as Ot}from"./pdf-core-BGfPcMgu.js";import{d as Gt,c as zt,h as Ht,a as jt,b as qt,e as Wt,f as Vt,g as Xt,i as Yt,j as Jt}from"./pdf-layouts-BC7kqHBV.js";import{c as P}from"./competitor-service-CJx7iaIC.js";import{i as Qt,C as Kt}from"./product-matching-BMKbQ43r.js";import"./matching-engine-BTjUky3p.js";import{l as Zt}from"./product-synonyms-CeNdtqLO.js";import"./product-search-CeYNHdfP.js";import"./vendor-fuse-Ch1WBRTM.js";import"./vendor-idb-DwnyWBFG.js";class C{static getCustomRooms(){return x.getStorageItem(A.get("storage.keys.customRooms"),[])}static setCustomRooms(e){return x.setStorageItem(A.get("storage.keys.customRooms"),e)}static addCustomRoom(e){const t=this.getCustomRooms(),o=x.sanitizeInput(e,50);return!o||[...A.get("rooms.predefined",[]).map(n=>n.name),...t.map(n=>n.name)].includes(o)?!1:(t.push({name:o}),this.setCustomRooms(t))}static removeCustomRoom(e){const t=this.getCustomRooms();return e>=0&&e<t.length?(t.splice(e,1),this.setCustomRooms(t)):!1}static getSelectedProducts(){return x.getStorageItem(A.get("storage.keys.selectedProducts"),[])}static setSelectedProducts(e){return x.setStorageItem(A.get("storage.keys.selectedProducts"),e)}static _freeStorageSpace(){const e=["fredChatHistory","fredChatMessages","fredFeedback","fredQuestionLog","landscape_canvas_groups"];let t=0;for(const o of e)try{const s=localStorage.getItem(o);s&&(t+=s.length*2,localStorage.removeItem(o))}catch{}return console.log(`Freed ~${Math.round(t/1024)}KB from localStorage cache`),t}static _slimProduct(e){if(!e)return e;const t={OrderCode:e.OrderCode||e.orderCode||e.Code||"",Description:e.Description||e.ProductName||e["Product Name"]||e.description||"",LongDescription:e.LongDescription||e["Long Description"]||e.longDescription||"",RRP_EX:e.RRP_EX||e["RRP EX GST"]||e.RRP_EXGST||e.rrpExGst||e["PL1 - RRP EX GST"]||"",RRP_INCGST:e.RRP_INCGST||e["RRP INC GST"]||e.rrpIncGst||"",Image_URL:e.Image_URL||e.imageUrl||e.Image||e["Image URL"]||e.X_WEB_IMAGE||e.X_IMAGE_WEB||"",Website_URL:e.Website_URL||e.websiteUrl||e["Website URL"]||e.product_url||e.productUrl||e["Product URL"]||e.Product_URL||e["Web URL"]||e.URL||"",Diagram_URL:e.Diagram_URL||e.diagramUrl||e["Diagram URL"]||e.X_WEB_DIAG||e.X_WEB_DIAG||"",Datasheet_URL:e.Datasheet_URL||e.datasheetUrl||e["Datasheet URL"]||e.X_WEB_DSHEET||e.X_WEB_DSHEET||"",BARCODE:e.BARCODE||"",Range:e.Range||"",Group:e.Group||"",SubGroup:e.SubGroup||e.Subgroup||e["Sub Group"]||"",Finish:e.Finish||"",Colour:e.Colour||"",WELS_STAR:e.WELS_STAR||e["WELS STAR"]||e["WELS Star"]||e.WelsStar||""};return e.UserEditedPrice!==void 0&&e.UserEditedPrice!==null&&(t.UserEditedPrice=e.UserEditedPrice),e._placeholder&&(t._placeholder=!0),e._outsidePublicPricelist&&(t._outsidePublicPricelist=!0),e._crossHintCache&&typeof e._crossHintCache=="object"&&e._crossHintCache.v===1&&(t._crossHintCache=e._crossHintCache),t}static updateProductCrossHintCache(e,t){const o=this.getSelectedProducts(),s=o.findIndex(i=>i.id===e);return s===-1?!1:(t==null?delete o[s].product._crossHintCache:o[s].product._crossHintCache=t,this.setSelectedProducts(o))}static addProductToSelection(e,{notes:t="",room:o="",quantity:s=1}={}){try{const i=this.getSelectedProducts(),n=A.get("ui.annotationMaxLength",140),r={id:x.generateId(),product:this._slimProduct(e),notes:x.sanitizeInput(t,n),room:x.sanitizeInput(o,50),quantity:Math.max(1,parseInt(s,10)||1),timestamp:Date.now()};i.push(r);let a=this.setSelectedProducts(i);return a||this._freeStorageSpace()>0&&(a=this.setSelectedProducts(i)),a?(X.log(`Product added to selection: ${e.OrderCode}`,Y.DEBUG),r.id):(X.handleError({message:"Failed to save product to selection — storage is full",category:xe.STORAGE,level:Y.WARN}),!1)}catch(i){return X.handleError({message:"Error adding product to selection",error:i,category:xe.STORAGE,level:Y.ERROR}),!1}}static addProductToSelectionAt(e,t,{notes:o="",room:s="",quantity:i=1}={}){try{const n=this.getSelectedProducts(),r=A.get("ui.annotationMaxLength",140),a={id:x.generateId(),product:this._slimProduct(t),notes:x.sanitizeInput(o,r),room:x.sanitizeInput(s,50),quantity:Math.max(1,parseInt(i,10)||1),timestamp:Date.now()},c=Math.max(0,Math.min(Math.floor(e),n.length));n.splice(c,0,a);let l=this.setSelectedProducts(n);return l||this._freeStorageSpace()>0&&(l=this.setSelectedProducts(n)),l?(X.log(`Product inserted in selection at ${c}: ${t.OrderCode}`,Y.DEBUG),a.id):(n.splice(c,1),X.handleError({message:"Failed to insert product — storage is full",category:xe.STORAGE,level:Y.WARN}),!1)}catch(n){return X.handleError({message:"Error inserting product into selection",error:n,category:xe.STORAGE,level:Y.ERROR}),!1}}static updateSelectionProduct(e,t,o={}){const s=this.getSelectedProducts(),i=s.findIndex(a=>a.id===e);if(i===-1)return!1;const n=A.get("ui.annotationMaxLength",140),r={...t};return o.userPrice!==void 0&&o.userPrice!==null&&o.userPrice!==""&&(r.UserEditedPrice=o.userPrice),s[i].product=this._slimProduct(r),o.notes!==void 0&&(s[i].notes=x.sanitizeInput(o.notes,n)),o.room!==void 0&&(s[i].room=x.sanitizeInput(o.room,50)),o.quantity!==void 0&&(s[i].quantity=Math.max(1,parseInt(o.quantity,10)||1)),this.setSelectedProducts(s)}static addProductsBatch(e){if(!e||e.length===0)return!0;try{const t=this.getSelectedProducts(),o=A.get("ui.annotationMaxLength",140);for(const{product:i,notes:n,room:r,quantity:a}of e)t.push({id:x.generateId(),product:this._slimProduct(i),notes:x.sanitizeInput(n||"",o),room:x.sanitizeInput(r||"",50),quantity:Math.max(1,parseInt(a,10)||1),timestamp:Date.now()});let s=this.setSelectedProducts(t);if(!s){const i=this._freeStorageSpace();i>0&&(X.log(`Retrying batch save after freeing ~${Math.round(i/1024)}KB`,Y.DEBUG),s=this.setSelectedProducts(t))}return s?X.log(`Batch added ${e.length} products to selection`,Y.DEBUG):X.handleError({message:`Batch save failed for ${e.length} products — storage is full`,category:xe.STORAGE,level:Y.WARN}),s}catch(t){return X.handleError({message:`Error batch adding ${e.length} products`,error:t,category:xe.STORAGE,level:Y.ERROR}),!1}}static updateProductQuantity(e,t){const o=this.getSelectedProducts(),s=o.findIndex(i=>i.id===e);return s!==-1?(o[s].quantity=Math.max(1,parseInt(t,10)||1),this.setSelectedProducts(o)):!1}static updateProductRoom(e,t){const o=this.getSelectedProducts(),s=o.findIndex(i=>i.id===e);return s!==-1?(o[s].room=x.sanitizeInput(t,50),this.setSelectedProducts(o)):!1}static updateProductNotes(e,t){const o=this.getSelectedProducts(),s=o.findIndex(i=>i.id===e);return s!==-1?(o[s].notes=x.sanitizeInput(t,A.get("ui.annotationMaxLength",140)),this.setSelectedProducts(o)):!1}static updateProductPrice(e,t){const o=this.getSelectedProducts(),s=o.findIndex(i=>i.id===e);return s!==-1?(o[s].product.UserEditedPrice=t,this.setSelectedProducts(o)):!1}static removeProductFromSelection(e){const o=this.getSelectedProducts().filter(s=>s.id!==e);return this.setSelectedProducts(o)}static clearAllSelections(){return this.setSelectedProducts([])&&this.setCustomRooms([])}static getSelectionCount(){return this.getSelectedProducts().length}static getUserSettings(){return x.getStorageItem(A.get("storage.keys.userPreferences"),{})}static saveUserSettings(e){return x.setStorageItem(A.get("storage.keys.userPreferences"),e)}static clearUserSettings(){try{return localStorage.removeItem(A.get("storage.keys.userPreferences")),!0}catch(e){return console.error("Error clearing user settings:",e),!1}}}class eo{constructor(){this.doc=null,this.pageWidth=210,this.pageHeight=297,this.margins={left:10,right:10,top:15,bottom:15},this.currentY=this.margins.top}async init(){try{return window.jsPDF||await this.loadJsPDF(),console.log("✅ PDF Core initialized"),!0}catch(e){return console.error("❌ Failed to initialize PDF Core:",e),!1}}async loadJsPDF(){return new Promise((e,t)=>{if(window.jsPDF){e();return}const o=document.createElement("script");o.src="https://cdn.jsdelivr.net/npm/jspdf@2.5.1/dist/jspdf.umd.min.js",o.onload=e,o.onerror=t,document.head.appendChild(o)})}createDocument(){return this.doc=new window.jsPDF({orientation:"portrait",unit:"mm",format:"a4"}),this.currentY=this.margins.top,this.doc}addNewPage(){this.doc.addPage(),this.currentY=this.margins.top}checkPageSpace(e){const t=this.pageHeight-this.margins.bottom;return this.currentY+e>t?(this.addNewPage(),!0):!1}addText(e,t,o,s={}){const{fontSize:i=10,fontStyle:n="normal",align:r="left",maxWidth:a=null}=s;if(this.doc.setFontSize(i),this.doc.setFont("helvetica",n),a){const c=this.doc.splitTextToSize(e,a);return this.doc.text(c,t,o,{align:r}),c.length*(i*.35)}else return this.doc.text(e,t,o,{align:r}),i*.35}addLine(e,t,o,s,i="#000000",n=.1){this.doc.setDrawColor(i),this.doc.setLineWidth(n),this.doc.line(e,t,o,s)}addRect(e,t,o,s,i="S",n="#000000"){this.doc.setDrawColor(n),this.doc.rect(e,t,o,s,i)}async addImage(e,t,o,s,i){return new Promise(n=>{if(!e||e==="N/A"){n({width:0,height:0});return}const r=new Image;r.crossOrigin="anonymous",r.onload=()=>{try{const a=document.createElement("canvas"),c=a.getContext("2d"),l=r.width/r.height;let d=s,u=s/l;u>i&&(u=i,d=i*l),a.width=d,a.height=u,c.drawImage(r,0,0,d,u);const m=this.detectTechnicalImage(r),p=m?.8:.7,h=m?"PNG":"JPEG",y=a.toDataURL(`image/${h.toLowerCase()}`,p);this.doc.addImage(y,h,t,o,d,u,void 0,"FAST"),n({width:d,height:u})}catch(a){console.warn("Failed to add image:",a),n({width:0,height:0})}},r.onerror=()=>{console.warn("Failed to load image:",e),n({width:0,height:0})},r.src=e})}getContentWidth(){return this.pageWidth-this.margins.left-this.margins.right}getContentHeight(){return this.pageHeight-this.margins.top-this.margins.bottom}detectTechnicalImage(e){const t=document.createElement("canvas"),o=t.getContext("2d"),s=Math.min(50,Math.min(e.width,e.height));t.width=s,t.height=s,o.drawImage(e,0,0,s,s);const n=o.getImageData(0,0,s,s).data,r=new Set;let a=0;for(let u=0;u<n.length;u+=4){const m=n[u],p=n[u+1],h=n[u+2];if(r.add(`${m},${p},${h}`),u>0&&u<n.length-4){const y=n[u-4],f=n[u-3],S=n[u-2];Math.abs(m-y)+Math.abs(p-f)+Math.abs(h-S)>50&&a++}}const c=r.size<500,l=a>s*s*.1,d=e.width<800&&e.height<800;return c||l||d}moveY(e){this.currentY+=e}getCurrentY(){return this.currentY}setCurrentY(e){this.currentY=e}getRemainingPageHeight(){return this.pageHeight-this.margins.bottom-this.currentY}isValidUrl(e){if(!e||typeof e!="string")return!1;try{return new URL(e),!0}catch{return!1}}formatPrice(e){if(!e||e==="N/A")return"";const t=parseFloat(e.toString().replace(/[^0-9.]/g,""));return t>0?`$${t.toFixed(2)}`:""}formatText(e,t=50){return e?e.length>t?`${e.substring(0,t-3)}...`:e:""}async finalize(){if(!this.doc)throw new Error("No document created");return this.doc.output("blob")}getDocument(){return this.doc}}const dt=new eo;class to{constructor(e){this.core=e||dt}async addHeader(e){this.core.getDocument();const t=this.core.pageWidth,o=this.core.margins;this.core.addText("SEIMA",o.left,25,{fontSize:20,fontStyle:"bold"}),this.core.addText("Product Selection Report",t/2,25,{fontSize:16,fontStyle:"bold",align:"center"});const s=new Date().toLocaleDateString("en-AU");this.core.addText(s,t-o.right,25,{fontSize:10,align:"right"}),this.core.addLine(o.left,30,t-o.right,30,"#cccccc"),this.core.setCurrentY(35)}async addCustomerInfo(e){this.core.getDocument();const t=this.core.margins,o=this.core.getContentWidth();this.core.addText("Customer Information",t.left,this.core.getCurrentY(),{fontSize:14,fontStyle:"bold"}),this.core.moveY(8);const s=t.left,i=t.left+o/2;let n=this.core.getCurrentY();if(e.name&&e.name.trim()&&(this.core.addText(`Customer: ${e.name.trim()}`,s,n,{fontSize:10}),n+=5),e.project&&e.project.trim()&&(this.core.addText(`Project: ${e.project.trim()}`,s,n,{fontSize:10}),n+=5),n=this.core.getCurrentY(),e.email&&e.email.trim()&&(this.core.addText(`Email: ${e.email.trim()}`,i,n,{fontSize:10}),n+=5),e.phone&&e.phone.trim()&&(this.core.addText(`Phone: ${e.phone.trim()}`,i,n,{fontSize:10}),n+=5),e.address&&e.address.trim()){this.core.setCurrentY(n+2);const r=this.core.addText(`Address: ${e.address.trim()}`,s,this.core.getCurrentY(),{fontSize:10,maxWidth:o-20});this.core.moveY(r)}this.core.moveY(10),this.core.addLine(t.left,this.core.getCurrentY(),this.core.pageWidth-t.right,this.core.getCurrentY(),"#eeeeee"),this.core.moveY(5)}async addSelectionSummary(e){const t=this.core.margins;this.core.addText("Selection Summary",t.left,this.core.getCurrentY(),{fontSize:14,fontStyle:"bold"}),this.core.moveY(8);const o=e.length,i=new Set(e.map(r=>r.room).filter(Boolean)).size||1;let n=0;e.forEach(r=>{var l,d;const a=parseFloat((((l=r.product)==null?void 0:l.UserEditedPrice)||((d=r.product)==null?void 0:d.RRP_EX)||"0").toString().replace(/[^0-9.]/g,""))||0,c=r.quantity||1;n+=a*c}),this.core.addText(`Total Products: ${o}`,t.left,this.core.getCurrentY(),{fontSize:10}),this.core.moveY(5),this.core.addText(`Total Rooms: ${i}`,t.left,this.core.getCurrentY(),{fontSize:10}),this.core.moveY(5),n>0&&(this.core.addText(`Estimated Total Value: $${n.toFixed(2)} (inc GST)`,t.left,this.core.getCurrentY(),{fontSize:10,fontStyle:"bold"}),this.core.moveY(5)),this.core.moveY(10),this.core.addLine(t.left,this.core.getCurrentY(),this.core.pageWidth-t.right,this.core.getCurrentY(),"#eeeeee"),this.core.moveY(10)}async addProductTableHeader(){this.core.getDocument();const e=this.core.margins,t=this.core.getContentWidth();this.core.addText("Product Details",e.left,this.core.getCurrentY(),{fontSize:14,fontStyle:"bold"}),this.core.moveY(8);const o=this.core.getCurrentY(),s={image:25,code:35,description:70,price:25,qty:15,room:30};let i=e.left;return this.core.addRect(e.left,o-2,t,8,"F","#f5f5f5"),this.core.addText("Image",i+2,o+3,{fontSize:9,fontStyle:"bold"}),i+=s.image,this.core.addText("Code",i+2,o+3,{fontSize:9,fontStyle:"bold"}),i+=s.code,this.core.addText("Description",i+2,o+3,{fontSize:9,fontStyle:"bold"}),i+=s.description,this.core.addText("Price",i+2,o+3,{fontSize:9,fontStyle:"bold"}),i+=s.price,this.core.addText("Qty",i+2,o+3,{fontSize:9,fontStyle:"bold"}),i+=s.qty,this.core.addText("Room",i+2,o+3,{fontSize:9,fontStyle:"bold"}),this.core.moveY(10),s}async addProductRow(e,t,o=!1,s=null){var p,h,y,f,S,w,v;this.core.getDocument();const i=this.core.margins,n=20;this.core.checkPageSpace(n+5);const r=this.core.getCurrentY();let a=i.left;if(o&&this.core.addRect(i.left,r-1,this.core.getContentWidth(),n+2,"F","#fafafa"),(p=e.product)!=null&&p.Image_URL&&this.core.isValidUrl(e.product.Image_URL))try{await this.core.addImage(e.product.Image_URL,a+2,r,20,15)}catch(b){console.warn("Failed to add product image:",b)}a+=t.image;const c=this.core.formatText(((h=e.product)==null?void 0:h.OrderCode)||"",15);this.core.addText(c,a+2,r+5,{fontSize:8}),a+=t.code;const l=this.core.formatText(((y=e.product)==null?void 0:y.Description)||"",45);this.core.addText(l,a+2,r+5,{fontSize:8,maxWidth:t.description-4}),a+=t.description;let d=0;((f=e.product)==null?void 0:f.UserEditedPrice)!==void 0&&((S=e.product)==null?void 0:S.UserEditedPrice)!==null&&((w=e.product)==null?void 0:w.UserEditedPrice)!==""?d=parseFloat(e.product.UserEditedPrice.toString().replace(/,/g,""))||0:d=parseFloat((((v=e.product)==null?void 0:v.RRP_EX)||"0").toString().replace(/,/g,""))||0,d>0&&(s!=null&&s.includeGst)&&(d=d*1.1);const u=d>=0?`$${d.toLocaleString("en-AU",{minimumFractionDigits:2,maximumFractionDigits:2})}`:"";this.core.addText(u,a+2,r+5,{fontSize:8}),a+=t.price,this.core.addText((e.quantity||1).toString(),a+2,r+5,{fontSize:8}),a+=t.qty;const m=this.core.formatText(e.room||"",15);if(this.core.addText(m,a+2,r+5,{fontSize:8}),e.notes){const b=r+10;this.core.addText(`Notes: ${this.core.formatText(e.notes,60)}`,i.left+2,b,{fontSize:7,fontStyle:"italic"})}this.core.moveY(n)}async addFooter(e){const t=this.core.getDocument(),o=this.core.margins,s=this.core.pageWidth,n=this.core.pageHeight-20;this.core.addLine(o.left,n,s-o.right,n,"#cccccc"),this.core.addText("Generated by Seima Product Scanner",o.left,n+5,{fontSize:8,fontStyle:"italic"}),this.core.addText("www.seima.com.au",s-o.right,n+5,{fontSize:8,fontStyle:"italic",align:"right"});const r=t.internal.getNumberOfPages();this.core.addText(`Page ${r}`,s/2,n+5,{fontSize:8,align:"center"})}async addQRSection(e){const t=this.core.margins;this.core.checkPageSpace(40),this.core.moveY(10),this.core.addText("Quick Access Links",t.left,this.core.getCurrentY(),{fontSize:12,fontStyle:"bold"}),this.core.moveY(8);const o=e.filter(s=>{var i;return((i=s.product)==null?void 0:i.Website_URL)&&this.core.isValidUrl(s.product.Website_URL)}).slice(0,5);o.forEach((s,i)=>{const n=`${s.product.OrderCode}: ${s.product.Website_URL}`;this.core.addText(this.core.formatText(n,80),t.left+5,this.core.getCurrentY(),{fontSize:8}),this.core.moveY(4)}),o.length===0&&(this.core.addText("Visit www.seima.com.au for more product information",t.left+5,this.core.getCurrentY(),{fontSize:8,fontStyle:"italic"}),this.core.moveY(4))}}const kt=new to;class oo{constructor(){this.core=dt,this.layouts=kt,this.isInitialized=!1}async init(){try{return await this.core.init(),this.isInitialized=!0,console.log("✅ Unified PDF Generator initialized"),!0}catch(e){return console.error("❌ Failed to initialize PDF Generator:",e),!1}}async generatePDF(e){try{this.isInitialized||await this.init();const t=this.getSelectedProducts();if(!t.length)throw new Error("No products selected");console.log(`📄 Generating PDF for ${t.length} products...`),this.core.createDocument(),await this.layouts.addHeader(e),await this.layouts.addCustomerInfo(e),await this.layouts.addSelectionSummary(t);const o=await this.layouts.addProductTableHeader();for(let i=0;i<t.length;i++){const n=t[i],r=i%2===0;await this.layouts.addProductRow(n,o,r,e)}await this.layouts.addQRSection(t),await this.layouts.addFooter(e);const s=await this.core.finalize();return console.log("✅ PDF generated successfully"),s}catch(t){throw console.error("❌ PDF generation failed:",t),t}}async generateCSV(e){try{const t=this.getSelectedProducts();if(!t.length)throw new Error("No products selected");console.log(`📊 Generating CSV for ${t.length} products...`);const o=[];o.push('"Code","Description","WELS Star","Quantity","Price ea ex GST","Price Total ex GST","Notes","Room","Image URL","Diagram URL","Datasheet URL","Website URL"'),t.forEach(n=>{var v,b,E,k,R,I,T,B,U,H,fe,Ee;const r=this.cleanForCSV(((v=n.product)==null?void 0:v.OrderCode)||""),a=this.cleanForCSV(((b=n.product)==null?void 0:b.Description)||""),c=((E=n.product)==null?void 0:E["WELS STAR"])||((k=n.product)==null?void 0:k.WELS_STAR)||((R=n.product)==null?void 0:R.WELS_STAR)||((I=n.product)==null?void 0:I.WelsStar)||"",l=this.cleanForCSV(c&&c.toString().trim()?c.toString().replace(/[^\d.]/g,"").trim():""),d=n.quantity||1,u=this.cleanForCSV(((T=n.product)==null?void 0:T.UserEditedPrice)||((B=n.product)==null?void 0:B.RRP_EX)||""),m=this.calculateTotalPrice(u,d),p=this.cleanForCSV(n.notes||""),h=this.cleanForCSV(n.room||""),y=this.cleanForCSV(((U=n.product)==null?void 0:U.Image_URL)||""),f=this.cleanForCSV(((H=n.product)==null?void 0:H.Diagram_URL)||""),S=this.cleanForCSV(((fe=n.product)==null?void 0:fe.Datasheet_URL)||""),w=this.cleanForCSV(((Ee=n.product)==null?void 0:Ee.Website_URL)||"");o.push(`"${r}","${a}","${l}","${d}","${u}","${m}","${p}","${h}","${y}","${f}","${S}","${w}"`)});const s=o.join(`
`),i=new Blob([s],{type:"text/csv;charset=utf-8"});return console.log("✅ CSV generated successfully"),i}catch(t){throw console.error("❌ CSV generation failed:",t),t}}async generateBothFiles(e){try{const[t,o]=await Promise.all([this.generatePDF(e),this.generateCSV(e)]);return{pdfBlob:t,csvBlob:o}}catch(t){throw console.error("❌ File generation failed:",t),t}}getSelectedProducts(){const e=JSON.parse(localStorage.getItem("selection")||"[]"),t=JSON.parse(localStorage.getItem(F.STORAGE_KEYS.SELECTED_PRODUCTS)||"[]");return t.length>0?t:e.map(o=>({product:o,room:o.Room||"",notes:o.Notes||"",quantity:o.Quantity||1}))}calculateTotalPrice(e,t){const s=(parseFloat(e.toString().replace(/[^0-9.]/g,""))||0)*(t||1);return s>0?s.toFixed(2):""}cleanForCSV(e){return e?e.toString().replace(/"/g,'""').replace(/[\r\n]/g," "):""}async generateQuotePDF(e){return await this.generatePDF(e)}async generateReportPDF(e){return await this.generatePDF(e)}generateFileName(e,t){const o=new Date,s=String(o.getDate()).padStart(2,"0"),i=String(o.getMonth()+1).padStart(2,"0"),n=String(o.getFullYear()).slice(-2),r=String(o.getHours()).padStart(2,"0"),a=String(o.getMinutes()).padStart(2,"0");return`${(e.project||"seima-selection").replace(/[^a-zA-Z0-9\s]/g,"")}-${s}${i}${n}.${r}${a}.${t}`}downloadFile(e,t){const o=URL.createObjectURL(e),s=document.createElement("a");s.href=o,s.download=t,document.body.appendChild(s),s.click(),document.body.removeChild(s),URL.revokeObjectURL(o)}getSelectionSummary(){const e=this.getSelectedProducts(),t=e.length,s=new Set(e.map(n=>n.room).filter(Boolean)).size||1;let i=0;return e.forEach(n=>{var c,l;const r=parseFloat((((c=n.product)==null?void 0:c.UserEditedPrice)||((l=n.product)==null?void 0:l.RRP_EX)||"0").toString().replace(/[^0-9.]/g,""))||0,a=n.quantity||1;i+=r*a}),{totalProducts:t,totalRooms:s,totalValue:i,hasProducts:t>0}}}const so=new oo,io={Utils:x},no=A;class ro{constructor(){this.modules={dataLayer:_,pdfGenerator:so,pdfCore:dt,pdfLayouts:kt,StorageManager:C,utils:io},this.isInitialized=!1,this.initStatus={}}async init(){try{console.log("🚀 Initializing modular components...");const e=await this.initModule("dataLayer",this.modules.dataLayer);return this.initStatus.dataLayer=e,this.initStatus.pdfGenerator="deferred",this.isInitialized=!0,console.log("✅ Module initialization complete:",this.initStatus),this.initStatus}catch(e){return console.error("❌ Module coordinator initialization failed:",e),!1}}async initModule(e,t){try{if(t&&typeof t.init=="function"){const o=await t.init();return console.log(`✅ ${e} initialized:`,o),o}else return console.log(`ℹ️ ${e} does not require initialization`),!0}catch(o){throw console.error(`❌ Failed to initialize ${e}:`,o),o}}async searchProducts(e,t=10){return this.modules.dataLayer.isLoaded||await this.modules.dataLayer.init(),this.modules.dataLayer.searchProducts(e,t)}async findProductByCode(e){return this.modules.dataLayer.isLoaded||await this.modules.dataLayer.init(),this.modules.dataLayer.findProductByCode(e)}async addProductToSelection(e,{room:t="",notes:o="",quantity:s=1}={}){return this.modules.dataLayer.addProductToSelection(e,{room:t,notes:o,quantity:s})}getSelectedProducts(){return this.modules.dataLayer.getSelectedProducts()}getSelectionSummary(){return this.modules.dataLayer.getSelectionSummary()}async generatePDF(e){return await this.modules.pdfGenerator.generatePDF(e)}async generateCSV(e){return await this.modules.pdfGenerator.generateCSV(e)}async generateBothFiles(e){return await this.modules.pdfGenerator.generateBothFiles(e)}async sendEmail(e,t){return await this.modules.emailService.sendEmailWithPDF(e,t)}clearSelection(){return this.modules.dataLayer.clearSelection()}getModuleStatus(){return{initialized:this.isInitialized,moduleStatus:this.initStatus,dataLayer:{loaded:this.modules.dataLayer.isLoaded,productCount:this.modules.dataLayer.products.length},selection:{count:this.getSelectedProducts().length,summary:this.getSelectionSummary()}}}async reinitializeModule(e){if(this.modules[e])try{return this.initStatus[e]=await this.initModule(e,this.modules[e]),this.initStatus[e]}catch(t){return console.error(`❌ Failed to reinitialize ${e}:`,t),!1}return!1}async batchAddProducts(e){const t=[];for(const{product:o,room:s,notes:i,quantity:n}of e)try{const r=await this.addProductToSelection(o,{room:s,notes:i,quantity:n});t.push({success:!0,result:r})}catch(r){t.push({success:!1,error:r.message,product:o})}return t}exportState(){return{moduleStatus:this.getModuleStatus(),config:no,timestamp:new Date().toISOString()}}}const ao=new ro;ao.init().catch(g=>{console.error("❌ Auto-initialization failed:",g)});class co{constructor(){this.currentScreen="welcome",this.currentSearchResults=[]}async init(){if(!_.isLoaded)try{await _.init()}catch(e){console.error("Failed to load product catalog:",e)}this.updateSelectionCount(),this.setVersion()}setVersion(){const e=document.getElementById("version-number");e&&(e.innerText=F.VERSION)}_formatProductPriceGstLabel(e){const t=e.RRP_EX||e["RRP EX GST"]||e.RRP_EX||e.RRP_EXGST||e.rrpExGst||e["PL1 - RRP EX GST"]||"",o=e.RRP_INCGST||e["RRP INC GST"]||e.rrpIncGst||"",s=parseFloat(String(t).replace(/,/g,""));if(Number.isFinite(s)&&s>0)return`$${s.toFixed(2)} ex GST`;const i=parseFloat(String(o).replace(/,/g,""));return Number.isFinite(i)&&i>0?`$${i.toFixed(2)} inc GST`:"Price not available"}async showProductLookupScreen(){try{const t=await(await fetch("./screens/product-grid.html")).text();document.body.innerHTML=t,this.currentScreen="product-grid";const o=document.createElement("script");o.type="module",o.src="js/app.js",document.body.appendChild(o),setTimeout(()=>{document.querySelectorAll(".back-btn").forEach(s=>s.remove())},100),window.productGridManager&&window.productGridManager.init(),await this.loadVersion(),setTimeout(()=>this.loadVersion(),1e3)}catch(e){console.error("Failed to load product grid screen:",e)}}setupSplitInterface(){const e=document.getElementById("back-to-home");e&&(e.onclick=()=>location.reload());const t=document.getElementById("download-btn"),o=document.getElementById("clear-all-btn");t&&(t.onclick=()=>this.showDownloadFormModal()),o&&(o.onclick=()=>this.showClearConfirmModal()),this.setupSplitProductSearch(),this.setupReviewTable(),this.renderReviewTable(),this.loadInitialSearchResults()}setupSplitProductSearch(){const e=document.getElementById("product-search-input"),t=document.getElementById("search-results-list"),o=document.getElementById("search-loading"),s=document.getElementById("search-no-results");if(!e||!t)return;const i=[],n=x.debounce(r=>{this.performSplitProductSearch(r,t,i,o,s)},200);e.addEventListener("input",()=>{const r=e.value.trim();r?n(r):this.loadInitialSearchResults()}),t.addEventListener("click",r=>{const a=r.target.closest(".result-item");if(!a)return;const c=parseInt(a.getAttribute("data-idx"),10),l=i.length>0?i:this.currentSearchResults||[];!isNaN(c)&&l[c]&&this.showSplitProductDetails(l[c])})}performSplitProductSearch(e,t,o,s,i){if(!_.isLoaded){s.style.display="flex",i.style.display="none",t.innerHTML="";return}o.length=0,o.push(..._.searchProducts(e)),s.style.display="none",o.length===0?(i.style.display="flex",t.innerHTML=""):(i.style.display="none",t.innerHTML=o.map((n,r)=>`
          <div class="result-item" data-idx="${r}">
            <span class="result-code">${x.sanitizeInput(n.OrderCode||n.Code||"")}</span> - ${x.sanitizeInput(n.Description||n.ProductName||n["Product Name"]||"")}
          </div>
        `).join(""))}async loadInitialSearchResults(){const e=document.getElementById("search-results-list"),t=document.getElementById("search-loading"),o=document.getElementById("search-no-results");if(!e)return;if(!_.isLoaded){t.style.display="flex",o.style.display="none",e.innerHTML="",_.init().then(()=>this.loadInitialSearchResults()).catch(()=>{});return}const s=_.getAllProducts().slice(0,50);t.style.display="none",o.style.display="none",e.innerHTML=s.map((i,n)=>`
        <div class="result-item" data-idx="${n}">
          <span class="result-code">${x.sanitizeInput(i.OrderCode||i.Code||"")}</span> - ${x.sanitizeInput(i.Description||i.ProductName||i["Product Name"]||"")}
        </div>
      `).join(""),this.currentSearchResults=s}showSplitProductDetails(e){const t=document.getElementById("product-details"),o=document.getElementById("product-image"),s=document.getElementById("product-name"),i=document.getElementById("product-code"),n=document.getElementById("product-price"),r=document.getElementById("product-room"),a=document.getElementById("product-quantity"),c=document.getElementById("product-notes"),l=document.getElementById("add-product-btn"),d=document.getElementById("close-details");if(t){if(o){const u=e.Image||e.Image_URL||e.imageUrl||"assets/no-image.png";o.src=u,o.alt=e.Description||e.ProductName||e["Product Name"]||"Product Image"}s&&(s.textContent=e.Description||e.ProductName||e["Product Name"]||""),i&&(i.textContent=e.OrderCode||e.Code||""),n&&(n.textContent=this._formatProductPriceGstLabel(e)),this.populateRoomSelect(r),a&&(a.value=1),c&&(c.value=""),d&&(d.onclick=()=>{t.style.display="none"}),l&&(l.onclick=()=>{const u=r?r.value:"Blank",m=a&&parseInt(a.value)||1,p=c?c.value.trim():"";this.addProductToSplitSelection(e,u,m,p),t.style.display="none"}),t.style.display="block"}}async showProductDetailsScreen(e,t={}){try{const s=await(await fetch("./screens/product-details.html")).text();document.body.innerHTML=s,this.currentScreen="product-details",this.populateProductDetails(e,t),this.setupProductDetailsHandlers(e)}catch(o){console.error("Failed to load product details screen:",o)}}populateProductDetails(e,t){const o=document.getElementById("product-image");o&&(o.src=e.Image_URL||"assets/no-image.png",o.onerror=function(){this.src="assets/no-image.png"}),document.getElementById("product-name").textContent=e.Description||"",document.getElementById("product-code").textContent=e.OrderCode?`Code: ${e.OrderCode}`:"";const s=this._formatProductPriceGstLabel(e);document.getElementById("product-price-inline").textContent=s==="Price not available"?"Price unavailable":s,document.getElementById("product-description").textContent=e.LongDescription||"",this.setLink("datasheet-link",e.Datasheet_URL),this.setLink("diagram-link",e.Diagram_URL),this.setLink("website-link",e.Website_URL);const i=document.getElementById("diagram-link"),n=document.getElementById("datasheet-link"),r=document.getElementById("website-link");if([i,n,r].forEach(a=>{a&&(a.setAttribute("target","_blank"),a.setAttribute("rel","noopener noreferrer"))}),this.setupVariantDropdown(e,t),this.populateRoomSelect(),this.setupQuantitySelect(),this.setupAnnotationField(),this.setupAnnotationCharacterCount(t),t.quantity){const a=document.getElementById("product-quantity");a&&(a.value=t.quantity)}t.scannedCode&&this.showScanFeedback(`Successfully scanned: ${t.scannedCode}`)}populateRoomSelect(e=null){const t=e||document.getElementById("room-select");if(!t)return;t.innerHTML='<option value="Blank">Blank</option>',A.get("rooms.predefined",[]).forEach(n=>{const r=document.createElement("option");r.value=n.name,r.textContent=n.name,t.appendChild(r)}),C.getCustomRooms().forEach(n=>{const r=document.createElement("option");r.value=n.name,r.textContent=n.name,t.appendChild(r)});const i=document.createElement("option");i.value="__ADD_NEW_ROOM__",i.textContent="➕ Add new room...",i.style.fontWeight="bold",i.style.color="#2563eb",t.appendChild(i),t.value="Blank",this._boundHandleRoomSelectChange||(this._boundHandleRoomSelectChange=this.handleRoomSelectChange.bind(this)),t.removeEventListener("change",this._boundHandleRoomSelectChange),t.addEventListener("change",this._boundHandleRoomSelectChange)}setupQuantitySelect(){const e=document.getElementById("product-quantity");if(!e)return;e.innerHTML="",A.get("ui.quantityOptions",[1,2,3,4,5,6,7,8,9,10]).forEach(o=>{const s=document.createElement("option");s.value=o,s.textContent=o.toString(),e.appendChild(s)})}setLink(e,t){const o=document.getElementById(e);t&&t!=="#"?(o.href=t,o.style.display=""):o.style.display="none"}setupVariantDropdown(e,t){const o=document.getElementById("variant-select-row"),s=document.getElementById("variant-select");if(o&&s){let i=e.ProductName||e["Product Name"]||"";typeof i=="string"&&(i=i.trim());let n=[];i&&(n=_.getAllProducts().filter(r=>{let a=r.ProductName||r["Product Name"]||"";return typeof a=="string"&&(a=a.trim()),a&&a===i})),n.length>1?(n.sort((r,a)=>(r.Description||"").localeCompare(a.Description||"")),o.style.display="",s.innerHTML=n.map(r=>`<option value="${r.OrderCode}"${r.OrderCode===e.OrderCode?" selected":""}>${r.Description}</option>`).join(""),s.onchange=()=>{var c;const r=s.value,a=n.find(l=>l.OrderCode===r);if(a&&a.OrderCode!==e.OrderCode){const l=((c=document.getElementById("product-annotation"))==null?void 0:c.value)||t.notes||"",d=document.getElementById("product-quantity");let u=1;d&&d.value?u=Math.max(1,parseInt(d.value,10)||1):t.quantity&&(u=t.quantity),this.showProductDetailsScreen(a,{notes:l,quantity:u})}}):o.style.display="none"}}setupAnnotationCharacterCount(e){const t=document.getElementById("product-annotation"),o=document.getElementById("annotation-char-count");t&&o&&(t.addEventListener("input",()=>{t.value=t.value.replace(/\r?\n|\r/g," "),o.textContent=`${t.value.length}/140`}),t.addEventListener("keydown",s=>{s.key==="Enter"&&s.preventDefault()}),o.textContent=`${t.value.length}/140`,e.notes&&(t.value=e.notes))}setupAnnotationField(){}setupProductDetailsHandlers(e){const t=document.getElementById("back-to-grid"),o=document.getElementById("add-to-room-btn");t&&(t.onclick=()=>this.showProductLookupScreen()),o&&(o.onclick=()=>this.addProductToSelection(e))}addProductToSelection(e){const t=document.getElementById("room-select"),o=document.getElementById("product-quantity"),s=document.getElementById("product-annotation"),i=t?t.value:"Blank",n=o?parseInt(o.value):1,r=s?s.value:"";C.addProductToSelection(e,{notes:r,room:i,quantity:n})?this.showProductLookupScreen():alert("Failed to add product to selection")}addProductToSplitSelection(e,t,o,s){C.addProductToSelection(e,{notes:s,room:t,quantity:o})?(this.renderReviewTable(),this.updateSelectionCount()):alert("Failed to add product to selection")}setupReviewTable(){const e=document.getElementById("review-table-body");e&&(e.addEventListener("change",t=>{t.target.classList.contains("quantity-input")?this.handleQuantityChange(t.target):t.target.classList.contains("room-select")&&this.handleRoomChange(t.target)}),e.addEventListener("click",t=>{t.target.classList.contains("remove-btn")&&this.handleRemoveProduct(t.target)}))}renderReviewTable(){const e=document.getElementById("review-table"),t=document.getElementById("review-table-empty"),o=document.getElementById("review-table-body"),s=document.getElementById("total-items"),i=document.getElementById("total-value");if(!e||!t||!o)return;const n=C.getSelectedProducts();if(n.length===0){e.style.display="none",t.style.display="flex",s&&(s.textContent="0 items"),i&&(i.textContent="$0.00");return}t.style.display="none",e.style.display="flex";let r=0,a=0;n.forEach(c=>{r+=c.quantity;let l=0;c.product.UserEditedPrice!==void 0&&c.product.UserEditedPrice!==null&&c.product.UserEditedPrice!==""?l=parseFloat(c.product.UserEditedPrice.toString().replace(/,/g,""))||0:l=parseFloat((c.product.RRP_EX||c.product["RRP EX GST"]||c.product.RRP_EX||c.product.RRP_EXGST||c.product["PL1 - RRP EX GST"]||0).toString().replace(/,/g,""))||0,l>0&&(a+=l*c.quantity)}),s&&(s.textContent=r),i&&(i.textContent=a>0?`$${a.toLocaleString("en-AU",{minimumFractionDigits:2,maximumFractionDigits:2})}`:"$0.00"),o.innerHTML=n.map((c,l)=>{const d=c.product;let u=0;d.UserEditedPrice!==void 0&&d.UserEditedPrice!==null&&d.UserEditedPrice!==""?u=parseFloat(d.UserEditedPrice.toString().replace(/,/g,""))||0:u=parseFloat((d.RRP_EX||d["RRP EX GST"]||d.RRP_EX||d.RRP_EXGST||d["PL1 - RRP EX GST"]||0).toString().replace(/,/g,""))||0;const m=u*c.quantity,p=d.Image||d.Image_URL||d.imageUrl||"assets/no-image.png";return`
        <div class="table-row" data-index="${l}">
          <div class="col-image">
            <img class="table-product-image" src="${p}" alt="Product" onerror="this.src='assets/no-image.png';">
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
      `}).join("")}getRoomOptions(e){let t=`<option value="Blank"${e==="Blank"?" selected":""}>Blank</option>`;return A.get("rooms.predefined",[]).forEach(i=>{t+=`<option value="${i.name}"${e===i.name?" selected":""}>${i.name}</option>`}),C.getCustomRooms().forEach(i=>{t+=`<option value="${i.name}"${e===i.name?" selected":""}>${i.name}</option>`}),t+='<option value="__ADD_NEW_ROOM__" style="font-weight: bold; color: #2563eb;">➕ Add new room...</option>',t}handleQuantityChange(e){const t=parseInt(e.getAttribute("data-index")),o=Math.max(1,parseInt(e.value)||1),s=C.getSelectedProducts();s[t]&&(s[t].quantity=o,C.setSelectedProducts(s),this.renderReviewTable(),this.updateSelectionCount())}handleRoomChange(e){const t=parseInt(e.getAttribute("data-index"));let o=e.value;if(o==="__ADD_NEW_ROOM__"){const i=prompt("Enter new room name:");if(i&&i.trim()){const n=i.trim();if(C.addCustomRoom(n)){o=n,console.log("✅ Added new room:",n),this.renderReviewTable();return}else{alert("Room name already exists or is invalid");const r=C.getSelectedProducts();r[t]&&(e.value=r[t].room||"Blank");return}}else{const n=C.getSelectedProducts();n[t]&&(e.value=n[t].room||"Blank");return}}const s=C.getSelectedProducts();s[t]&&(s[t].room=o,C.setSelectedProducts(s),this.updateSelectionCount())}handleRemoveProduct(e){const t=parseInt(e.getAttribute("data-index")),o=C.getSelectedProducts();o[t]&&(o.splice(t,1),C.setSelectedProducts(o),this.renderReviewTable(),this.updateSelectionCount())}async showReviewScreen(){try{const t=await(await fetch("./screens/review.html")).text();document.body.innerHTML=t,this.currentScreen="review",this.setupReviewScreenHandlers(),this.renderReviewList()}catch(e){console.error("Failed to load review screen:",e)}}setupReviewScreenHandlers(){const e=document.getElementById("back-to-grid"),t=document.getElementById("add-more-btn"),o=document.getElementById("quick-pdf-btn");e&&(e.onclick=()=>this.showProductLookupScreen()),t&&(t.onclick=()=>this.showProductLookupScreen()),o&&(o.onclick=()=>this.showDownloadFormModal())}renderReviewList(){const e=document.getElementById("review-list"),t=document.getElementById("review-empty");if(!e)return;const o=C.getSelectedProducts();if(o.length===0){e.innerHTML="",t&&(t.style.display="block");return}t&&(t.style.display="none");const s={};o.forEach(i=>{const n=i.room||"Unassigned";s[n]||(s[n]=[]),s[n].push(i)}),e.innerHTML=Object.entries(s).map(([i,n])=>`
      <div class="review-room-group">
        <div class="review-room-header">${i} <span class="room-count">(${n.length})</span></div>
        ${n.map((r,a)=>{const c=r.product,l=c.Description||c.description||c.productName||c["Product Name"]||"Product",d=c.OrderCode||c.orderCode||"",u=c.Image_URL||c.imageUrl||"assets/no-image.png",m=Pt(c.RRP_EX||c["RRP EX GST"]||c.RRP_EX||c.rrpExGst||c.RRP_EXGST||c["PL1 - RRP EX GST"]);let p=Number.isNaN(m)?null:m;if(p==null){const h=ct(c.RRP_INCGST||c["RRP INC GST"]||c.rrpIncGst,2);h!=null&&(p=h)}return`
          <div class="review-product-card" style="display: flex; flex-direction: column; align-items: stretch;">
            <div style="display: flex; flex-direction: row; align-items: flex-start;">
              <div class="review-product-thumb-wrap">
                <img class="review-product-thumb" src="${u}" alt="Product" onerror="this.src='assets/no-image.png';" onload="">
                <div class="review-qty-pill" data-room="${i}" data-idx="${a}">
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
                  <span class="review-product-price">${p!=null?`$${Number(p).toFixed(2)} ea (EX GST)`:""}</span>
                </div>
                <div class="review-product-notes">${r.notes?`Notes: ${r.notes}`:""}</div>
              </div>
            </div>
          </div>
          `}).join("")}
      </div>
    `).join(""),this.setupOriginalQuantityControls(s)}groupProductsByRoom(e){return e.reduce((t,o)=>{const s=o.room||"Unassigned";return t[s]||(t[s]=[]),t[s].push(o),t},{})}setupOriginalQuantityControls(e){document.querySelectorAll(".review-qty-pill").forEach(t=>{const o=t.getAttribute("data-room"),s=parseInt(t.getAttribute("data-idx"),10);t.querySelectorAll(".review-qty-btn").forEach(i=>{i.onclick=()=>{const n=i.getAttribute("data-action"),r=C.getSelectedProducts();let a=-1;const c=r.findIndex(l=>(l.room===o&&a++,l.room===o&&a===s));if(c!==-1){const l=r[c],d=parseInt(l.quantity,10)||1;n==="increment"?C.updateProductQuantity(l.id,d+1):n==="decrement"&&(d===1?C.removeProductFromSelection(l.id):C.updateProductQuantity(l.id,d-1)),this.renderReviewList(),this.updateSelectionCount()}}})})}showDownloadFormModal(){var t;const e=document.getElementById("pdf-email-modal");if(e){e.style.display="flex";const o=document.getElementById("pdf-email-form"),s=document.getElementById("pdf-email-cancel"),i=document.getElementById("pdf-email-send");if(o){const r=x.getStorageItem("pdfFormSettings",{});o["user-name"]&&(o["user-name"].value=r.name||""),o["user-project"]&&(o["user-project"].value=r.project||""),o["user-address"]&&(o["user-address"].value=r.address||""),o["user-email"]&&(o["user-email"].value=r.email||""),o["user-telephone"]&&(o["user-telephone"].value=r.telephone||""),o["exclude-prices"]&&(o["exclude-prices"].checked=!!r.excludePrices),o["exclude-qty"]&&(o["exclude-qty"].checked=!!r.excludeQty),o["exclude-long-description"]&&(o["exclude-long-description"].checked=!!r.excludeLongDescription),o["include-gst"]&&(o["include-gst"].checked=!!r.includeGst)}const n=(t=o.querySelector('label[for="export-csv"]'))==null?void 0:t.parentElement;n&&(n.style.display="none"),i&&(i.textContent="Download"),s&&(s.onclick=()=>{e.style.display="none"}),o&&(o.onsubmit=r=>{r.preventDefault(),this.handleDownloadFormSubmit(),e.style.display="none"})}}handleDownloadFormSubmit(){console.log("🎯 handleDownloadFormSubmit called");const e=document.getElementById("pdf-email-form");if(!e){console.error("❌ Form not found!");return}const t=new FormData(e),o={name:t.get("user-name"),project:t.get("user-project"),address:t.get("user-address"),email:t.get("user-email"),telephone:t.get("user-telephone"),excludePrice:t.get("exclude-price")==="on"||t.get("exclude-prices")==="on",excludeQty:t.get("exclude-qty")==="on",excludeLongDescription:t.get("exclude-long-description")==="on",includeGst:t.get("include-gst")==="on",exportCsv:!0};console.log("📝 Navigation userDetails created:",o),window.dispatchEvent(new CustomEvent("generatePdf",{detail:o}))}showClearConfirmModal(){const e=document.getElementById("clear-selection-modal");if(e){e.style.display="flex";const t=document.getElementById("modal-cancel-btn"),o=document.getElementById("modal-confirm-btn");t&&(t.onclick=()=>{e.style.display="none"}),o&&(o.onclick=()=>{C.clearAllSelections(),e.style.display="none",this.updateSelectionCount(),this.currentScreen==="product-grid"&&window.productGridManager&&window.productGridManager.clearAll()})}}updateSelectionCount(){const e=document.getElementById("selection-count");e&&(e.textContent=C.getSelectionCount().toString())}handleRoomSelectChange(e){const t=e.target;if(t.value==="__ADD_NEW_ROOM__"){const s=prompt("Enter new room name:");if(s&&s.trim()){const i=s.trim();C.addCustomRoom(i)?(this.populateRoomSelect(t),t.value=i,console.log("✅ Added new room:",i)):(alert("Room name already exists or is invalid"),t.value="Blank")}else t.value="Blank"}}}async function it(g,e,t="file"){await Rt(g,e,t)}function nt(g,e=null){const t=document.getElementById("pdf-spinner");t&&(t.style.display="flex"),e&&(window._currentTipTailSettings=e),yt();const o=document.createElement("div");o.id="pdf-processing-notification",o.style.cssText=`
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
    `,document.body.appendChild(o);const i=Ft();Qe(Je("assets/seima-logo.png"),async(n,r,a)=>{const c=JSON.parse(localStorage.getItem("selection")||"[]"),l=JSON.parse(localStorage.getItem(F.STORAGE_KEYS.SELECTED_PRODUCTS)||"[]");let d=[];l.length>0?d=l.map(v=>{const b=v.product||{};return Te({...b,Image_URL:b.Image_URL||b.imageUrl||b["Image URL"]||"",Diagram_URL:b.Diagram_URL||b.diagramUrl||b["Diagram URL"]||"",Datasheet_URL:b.Datasheet_URL||b.datasheetUrl||b["Datasheet URL"]||"",Website_URL:b.Website_URL||b.websiteUrl||b["Website URL"]||"",Room:v.room,Notes:v.notes,Quantity:v.quantity,Timestamp:new Date(v.timestamp).toISOString()})}):d=Array.isArray(c)?c.map(v=>Te({...v})):c;const u=document.getElementById("sort-by"),m=u?u.value:"room";switch(m){case"code":d.sort((v,b)=>{const E=v.OrderCode||v.Code||"",k=b.OrderCode||b.Code||"";return E.localeCompare(k)});break;case"product":d.sort((v,b)=>{const E=v.Description||v.ProductName||"",k=b.Description||b.ProductName||"";return E.localeCompare(k)});break;case"imported":break;case"category":d.sort((v,b)=>{const E=String(v.Group||v.SubGroup||v["Sub Group"]||"").trim()||"Blank",k=String(b.Group||b.SubGroup||b["Sub Group"]||"").trim()||"Blank";return E===k?0:E==="Blank"?1:k==="Blank"?-1:E.localeCompare(k)});break;case"room":default:{let v=[];try{const b=localStorage.getItem("customRoomOrder");v=b?JSON.parse(b):[]}catch{v=[]}d.sort((b,E)=>{const k=b.Room||"Blank",R=E.Room||"Blank";if(k===R)return 0;if(k==="Blank")return 1;if(R==="Blank")return-1;const I=v.indexOf(k),T=v.indexOf(R);return I!==-1&&T!==-1?I-T:I!==-1?-1:T!==-1?1:k.localeCompare(R)});break}}if(!d.length){alert("No products selected."),t&&(t.style.display="none");return}if(pt()>0)console.log(`📷 Using ${pt()} pre-cached images (skipping duplicate preload)`);else{const v=document.getElementById("pdf-processing-notification");if(v){const b=document.createElement("span");b.id="preload-progress",b.style.cssText="display: block; font-size: 12px; margin-top: 8px; color: #1e40af;",b.textContent="Loading images: 0%",v.appendChild(b)}console.log("📷 Starting image preload for",d.length,"products"),_t(d).then(b=>{const E=document.getElementById("preload-progress");E&&(E.textContent=`✓ ${b} images ready`,E.style.color="#059669")}).catch(b=>{console.warn("Image preloading error:",b)})}const h={};m==="room"?d.forEach(v=>{const b=v.Room||"Blank";h[b]||(h[b]=[]),h[b].push(v)}):m==="category"?d.forEach(v=>{const b=String(v.Group||v.SubGroup||v["Sub Group"]||"").trim()||"Blank";h[b]||(h[b]=[]),h[b].push(v)}):h.__all__=d,await i;const{jsPDF:y}=window.jspdf,f=new y({orientation:"landscape",unit:"pt",format:"a4",compress:!0,putOnlyUsedFonts:!0,precision:16,userUnit:1,floatPrecision:16}),S=f.internal.pageSize.getWidth(),w=f.internal.pageSize.getHeight();Qe(Je("assets/seima-logo.png"),async(v,b,E)=>{const k=L.getCurrentUser(),R=C.getUserSettings(),I=k?{name:k.name,email:k.email,phone:k.phone,position:k.position}:R;let T=null;try{const{get:B}=await M(async()=>{const{get:U}=await import("./vendor-idb-DwnyWBFG.js");return{get:U}},[]);T=await B("customerLogo")}catch{}Gt(f,{pageWidth:S,pageHeight:w,seimaLogoDataUrl:v,seimaLogoNaturalW:b,seimaLogoNaturalH:E,customerLogoDataUrl:T,userDetails:g,staffContact:I,footerHeight:ht.footerHeight}),f.addPage(),Qe(Je("assets/seima-logo-white.png"),(B,U,H)=>{const q=g.showRrp&&!g.excludePrice,ce=!g.excludePrice,De=!g.excludeQty,qe=zt(S,{leftMargin:32,rightMargin:32,showRrp:q,showPrice:ce,showQty:De,showTotal:ce&&De}),{colX:de,colW:Se,headers:te}=qe,Ce=ht.footerHeight;yt();const ut=($,O,Q,ne,G,V,z)=>{if(!O||typeof O!="string"){z&&z();return}let j=O.trim();if(j.startsWith("//")&&(j=`https:${j}`),Mt(j)){z&&z();return}if(ve.totalImages++,g.emailCompatible){ve.failedImages++,z&&z();return}const re=Ut(j);if(re&&re.dataUrl)try{const ue=re.width/re.height;let D=G,N=G/ue;N>V&&(N=V,D=V*ue),$.addImage(re.dataUrl,re.format,Q,ne,D,N,void 0,"FAST"),ve.optimizedImages++,z&&z();return}catch{console.warn("Failed to use cached image, falling back to direct load")}let le=!1;const Fe=Ot(j);let Ne=0;function ee(){if(le)return;if(Ne>=Fe.length){le=!0,console.warn("All image fetch attempts failed, skipping:",j.substring(0,70)),ve.failedImages++,z&&z();return}const ue=Fe[Ne];Ne+=1;const D=new Image;D.crossOrigin="Anonymous";let N=null;D.onload=function(){if(!le){N&&clearTimeout(N);try{const me=It(0),Me=me.imageMaxWidth,Pe=G,ae=V;try{const K=document.createElement("canvas"),se=K.getContext("2d"),{width:pe,height:we}=yo(D.width,D.height,Me);K.width=pe,K.height=we,se.imageSmoothingEnabled=!0,se.imageSmoothingQuality="high",se.drawImage(D,0,0,pe,we);let Xe,Ye="JPEG";const $t=fo(K,se),Bt=go(K,se);$t||Bt?(Xe=K.toDataURL("image/png",me.imageQuality),Ye="PNG"):(Xe=K.toDataURL("image/jpeg",me.imageQuality),Ye="JPEG");const At=`img_${Po(j)}`;$.addImage(Xe,Ye,Q,ne,Pe,ae,At,"FAST"),le=!0,ve.optimizedImages++,z&&z()}catch(K){console.warn(`Failed to optimize image: ${j}`,K);try{$.addImage(D,"JPEG",Q,ne,Pe,ae),le=!0,ve.optimizedImages++,z&&z()}catch(se){console.error(`Fallback also failed for: ${j}`,se),setTimeout(ee,150)}}}catch(me){console.warn("Failed to add image to PDF:",me),setTimeout(ee,150)}}},D.onerror=function(){le||(N&&clearTimeout(N),console.warn(`Failed to load image attempt: ${ue.substring(0,80)}`),setTimeout(ee,150))},N=setTimeout(()=>{le||(D.src="",D.onload=null,D.onerror=null,setTimeout(ee,50))},3e3),D.src=ue}ee()},oe=[];Object.keys(h).forEach(($,O)=>{const Q=h[$];if(!Q||!Array.isArray(Q)){console.warn("⚠️ Skipping invalid room items:",$,Q);return}Q.forEach((ne,G)=>{if(!ne){console.warn("⚠️ Skipping null item in room:",$,"at index:",G);return}oe.push({item:ne,room:$,rIdx:O,iIdx:G,isFirstInRoom:G===0,roomCount:Q.length})})}),oe.reduce(($,O)=>{if(!O||!O.item)return console.warn("⚠️ Skipping null row in data analysis:",O),$;const Q=String(O.item.Description||""),ne=String(O.item.LongDescription||""),G=String(O.item.Notes||""),V=String(O.item.OrderCode||"");return $+Q.length+ne.length+G.length+V.length},0);let Re=0,$e=0;const Be=4,Ae=8,We=Math.floor((w-80)/Be);let mt=Ce+8;function Ve(){if(!oe||!Array.isArray(oe)){console.error("❌ Critical error: rowsToDraw is not a valid array:",oe),ft(new Error("Invalid product data structure"),"generating PDF","unknown.pdf");return}if(Re>=oe.length){const G=f.internal.getNumberOfPages()-1;for(let D=2;D<=G+1;D++){f.setPage(D);const me=(D-2)*Be,Me=Math.min(me+Be,oe.length);let Pe=!1;for(let ae=me;ae<Me;ae++)if(oe[ae]&&oe[ae].item&&Ht(oe[ae].item)){Pe=!0;break}jt(f,{pageWidth:S,colX:de,colW:Se,leftMargin:32,footerHeight:Ce,logoDataUrl:B,logoNaturalW:U,logoNaturalH:H,headers:te,userDetails:g,skipWelsHeader:!Pe}),qt(f,{pageWidth:S,pageHeight:w,leftMargin:32,footerHeight:Ce,pageNumber:D-1,totalPages:G})}const V=new Date,z=String(V.getDate()).padStart(2,"0"),j=String(V.getMonth()+1).padStart(2,"0"),re=String(V.getFullYear()).slice(-2),le=String(V.getHours()).padStart(2,"0"),Fe=String(V.getMinutes()).padStart(2,"0"),ee=`${g.project.replace(/[^a-zA-Z0-9\s]/g,"")}-${z}${j}${re}.${le}${Fe}.pdf`,ue=document.getElementById("pdf-processing-notification");ue&&ue.remove(),_o(g.emailCompatible);try{const D=f.output("blob"),N=f.output("string"),me=N?N.match(/\/Type\s*\/XObject/g):null,Me=N?N.match(/Tj\s/g):null,Pe=N?N.match(/\/A\s*<</g):null;g.pdfSize=D.size;const ae=bo(D,ee);if(g.sendEmail&&D.size>15*1024*1024){console.warn(`❌ PDF too large for email (${(D.size/1024/1024).toFixed(1)}MB), offering email-compatible version`),ko(g,ee);return}const K=vo(D,ae.settings);if(g.sendEmail&&g.email)if(g.exportCsv){const se=ee.replace(/\.pdf$/,".csv");gt(g,se).then(pe=>{window.dispatchEvent(new CustomEvent("sendEmail",{detail:{userDetails:g,pdfBlob:K,csvBlob:pe}}))}).catch(pe=>{console.error("Async CSV generation for email failed:",pe),window.dispatchEvent(new CustomEvent("sendEmail",{detail:{userDetails:g,pdfBlob:K,csvBlob:null}}))})}else window.dispatchEvent(new CustomEvent("sendEmail",{detail:{userDetails:g,pdfBlob:K,csvBlob:null}}));else(async()=>{const se=await Io(K);if(await it(se,ee,"PDF"),g.exportCsv){const pe=ee.replace(/\.pdf$/,".csv");try{const we=await gt(g,pe);we&&await it(we,pe,"CSV")}catch(we){console.error("CSV generation failed:",we)}}})()}catch(D){console.error("PDF generation failed:",D),ft(D,"generating PDF",ee);const N=document.getElementById("pdf-processing-notification");N&&N.remove()}t&&(t.style.display="none");return}$e>=Be&&(f.addPage(),mt=Ce+8,$e=0);const $=oe[Re];if(!$||!$.item){console.warn(`⚠️  Skipping invalid row at index ${Re}:`,$),Re++,Ve();return}const O=mt+We*$e;$.isFirstInRoom&&(m==="room"||m==="category")&&$.room!=="__all__"&&Wt(f,$.room,$.roomCount,32,O);const Q=de[0],ne=Q+90+12;Nt($.item),ut(f,$.item.Image_URL||"",Q,O+Ae+16,90,We-Ae*2,()=>{ut(f,$.item.Diagram_URL||"",ne,O+Ae+16,90,We-Ae*2,()=>{const G=O+28,V=de[1]+Se[1]/2;f.setFontSize(10),f.setTextColor("#222"),f.text(String($.item.OrderCode||""),V,G+10,{align:"center"}),Vt(f,$.item,V,G+35);const z=Se[2]-10;Xt(f,$.item,de[2],G+10,z,g.excludeLongDescription);const j=te.indexOf("WELS")+1;if(j>0&&de[j]){const re=de[j]+Se[j]/2;Yt(f,$.item,re,G+10)}Jt(f,$.item,de,Se,te,G+10,{excludePrice:g.excludePrice,includeGst:g.includeGst}),Re++,$e++,Ve()})})}Ve()})})})}function Qe(g,e){const t=new window.Image;t.crossOrigin="Anonymous",t.onload=function(){const o=document.createElement("canvas"),s=o.getContext("2d"),i=400,n=150;let r=t.width,a=t.height;if(r>i||a>n){const l=i/r,d=n/a,u=Math.min(l,d);r=Math.round(r*u),a=Math.round(a*u)}o.width=r,o.height=a,s.imageSmoothingEnabled=!0,s.imageSmoothingQuality="high",s.drawImage(t,0,0,r,a);const c=o.toDataURL("image/png",.9);e(c,r,a)},t.onerror=function(){console.error("PDF brand image failed to load:",g),e(null,0,0)},t.src=g}function lo(){if(!document.getElementById("pdf-spinner")){const g=document.createElement("div");if(g.id="pdf-spinner",g.style.display="none",g.style.position="fixed",g.style.top="0",g.style.left="0",g.style.width="100vw",g.style.height="100vh",g.style.zIndex="9999",g.style.background="rgba(255,255,255,0.7)",g.style.alignItems="center",g.style.justifyContent="center",g.innerHTML='<div style="border:6px solid #e0e0e0;border-top:6px solid #2563eb;border-radius:50%;width:54px;height:54px;animation:spin 1s linear infinite;"></div>',document.body.appendChild(g),!document.getElementById("pdf-spinner-style")){const e=document.createElement("style");e.id="pdf-spinner-style",e.innerHTML="@keyframes spin { 0% { transform: rotate(0deg);} 100% { transform: rotate(360deg);} }",document.head.appendChild(e)}}}async function gt(g,e){return new Promise(async t=>{if(!window.Papa)try{await x.loadScript("https://cdn.jsdelivr.net/npm/papaparse@5.4.1/papaparse.min.js")}catch(n){console.error("Failed to load PapaParse:",n),t(null);return}const o=JSON.parse(localStorage.getItem("selection")||"[]"),s=JSON.parse(localStorage.getItem(F.STORAGE_KEYS.SELECTED_PRODUCTS)||"[]");let i=[];if(s.length>0?i=s.map(n=>{const r=n.product||{};return Te({...r,Image_URL:r.Image_URL||r.imageUrl||r["Image URL"]||"",Diagram_URL:r.Diagram_URL||r.diagramUrl||r["Diagram URL"]||"",Datasheet_URL:r.Datasheet_URL||r.datasheetUrl||r["Datasheet URL"]||"",Website_URL:r.Website_URL||r.websiteUrl||r["Website URL"]||"",Room:n.room,Notes:n.notes,Quantity:n.quantity,Timestamp:new Date(n.timestamp).toISOString()})}):i=Array.isArray(o)?o.map(n=>Te({...n})):o,!i.length){t(null);return}setTimeout(()=>{const n=i.map(r=>{let a,c,l,d;const u=g.excludePrice;let m=0;if(r.UserEditedPrice!==void 0&&r.UserEditedPrice!==null&&r.UserEditedPrice!=="")m=parseFloat(r.UserEditedPrice.toString().replace(/,/g,""));else{const f=r.RRP_EX||r["RRP EX GST"]||r.RRP_EX||r.RRP_EXGST||"";m=parseFloat((f||"0").toString().replace(/,/g,""))}a=m,l="Price ea ex GST",d="Price Total ex GST",c=!isNaN(a)&&a>=0?(a*(r.Quantity||1)).toFixed(2):"";const p=r["WELS STAR"]||r.WELS_STAR||r.WELS_STAR||r.WelsStar||"",h=p&&p.toString().trim()?p.toString().replace(/[^\d.]/g,"").trim():"",y={Code:he(r.OrderCode||""),Description:he(r.Description||""),"WELS Star":he(h),Quantity:r.Quantity||1,Notes:he(r.Notes||""),Room:he(r.Room||""),"Image URL":he(r.Image_URL||""),"Diagram URL":he(r.Diagram_URL||""),"Datasheet URL":he(r.Datasheet_URL||""),"Website URL":he(r.Website_URL||"")};return y[l]=u?"0.00":a>=0?a.toFixed(2):"",y[d]=u?"0.00":c,y});setTimeout(()=>{const r=window.Papa.unparse(n,{quotes:!0,quoteChar:'"',delimiter:",",header:!0,newline:`\r
`,skipEmptyLines:!1,escapeChar:'"',transform:{value(a,c){return typeof a=="string"?a.replace(/\0/g,"").replace(/[\x00-\x08\x0B\x0C\x0E-\x1F]/g,""):a}}});g.sendEmail?setTimeout(()=>{try{const a=btoa(unescape(encodeURIComponent(r)));t({name:e,data:a,contentType:"text/csv",originalSize:r.length,base64Size:a.length})}catch(a){console.error("CSV base64 encoding failed:",a),t(new Blob([r],{type:"text/csv"}))}},0):t(new Blob([r],{type:"text/csv"}))},0)},0)})}function he(g){return typeof g!="string"&&(g=String(g)),g=g.replace(/\0/g,"").replace(/[\x00-\x08\x0B\x0C\x0E-\x1F]/g,"").replace(/\r?\n|\r/g," ").trim(),g}async function uo(g,e,t="file"){try{if("showSaveFilePicker"in window){const s=await(await window.showSaveFilePicker({suggestedName:e,types:[{description:`${t} files`,accept:{[g.type]:[`.${e.split(".").pop()}`]}}]})).createWritable();return await s.write(g),await s.close(),!0}}catch(o){console.warn("File System Access API failed:",o)}return!1}function mo(g,e,t="file"){try{if(g.size>2*1024*1024)return console.warn("File too large for data URI method"),!1;const o=new FileReader;return o.onload=function(s){try{const i=document.createElement("a");i.href=s.target.result,i.download=e,i.style.display="none",document.body.appendChild(i),i.click(),document.body.removeChild(i)}catch(i){console.error("Data URI download failed:",i)}},o.readAsDataURL(g),!0}catch(o){return console.warn("Data URI method failed:",o),!1}}function po(g,e,t="file"){const o=URL.createObjectURL(g),s=document.createElement("div");s.style.cssText=`
    position: fixed; top: 0; left: 0; width: 100%; height: 100%; 
    background: rgba(0,0,0,0.8); z-index: 10001; display: flex; 
    align-items: center; justify-content: center; padding: 20px;
  `;const i=document.createElement("div");i.style.cssText=`
    background: white; border-radius: 8px; padding: 30px; max-width: 600px; 
    width: 100%; max-height: 80vh; overflow-y: auto;
  `,i.innerHTML=`
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
  `,s.appendChild(i),document.body.appendChild(s),document.getElementById("manual-download-close").onclick=()=>{URL.revokeObjectURL(o),document.body.removeChild(s)},document.getElementById("manual-download-retry").onclick=()=>{URL.revokeObjectURL(o),document.body.removeChild(s),setTimeout(()=>{Rt(g,e,t)},1e3)},document.getElementById("copy-url-btn").onclick=()=>{const n=document.getElementById("manual-download-url");n.select(),n.setSelectionRange(0,99999);try{navigator.clipboard.writeText(o).then(()=>{const r=document.getElementById("copy-url-btn");r.textContent="Copied!",r.style.background="#059669",setTimeout(()=>{r.textContent="Copy",r.style.background="#059669"},2e3)}).catch(()=>{document.execCommand("copy");const r=document.getElementById("copy-url-btn");r.textContent="Copied!",setTimeout(()=>r.textContent="Copy",2e3)})}catch{alert("Copy failed. Please select the URL manually and copy it.")}},s.onclick=n=>{n.target===s&&(URL.revokeObjectURL(o),document.body.removeChild(s))},setTimeout(()=>{s.parentElement&&(URL.revokeObjectURL(o),document.body.removeChild(s))},5*60*1e3)}async function Rt(g,e,t="file"){try{if(await ho(g,e))return}catch(o){console.warn("Standard download failed:",o)}await uo(g,e,t)||mo(g,e,t)||po(g,e,t)}function ho(g,e){return new Promise(t=>{try{const o=URL.createObjectURL(g),s=document.createElement("a");s.href=o,s.download=e,s.style.display="none",document.body.appendChild(s);const i=setTimeout(()=>{n(),t(!1)},3e3),n=()=>{clearTimeout(i),s.parentElement&&document.body.removeChild(s),setTimeout(()=>URL.revokeObjectURL(o),1e3)};s.onclick=()=>{n(),t(!0)},s.click(),setTimeout(()=>{n(),t(!0)},500)}catch(o){console.error("Standard download error:",o),t(!1)}})}function go(g){const e=document.createElement("canvas"),t=e.getContext("2d");e.width=Math.min(100,g.width),e.height=Math.min(100,g.height),t.drawImage(g,0,0,e.width,e.height);const s=t.getImageData(0,0,e.width,e.height).data,i=new Set;for(let n=0;n<s.length;n+=4){const r=`${s[n]},${s[n+1]},${s[n+2]}`;i.add(r)}return i.size<1e3}function fo(g,e){const o=e.getImageData(0,0,g.width,g.height).data;for(let s=3;s<o.length;s+=4)if(o[s]<255)return!0;return!1}function yo(g,e,t){if(g<=t)return{width:g,height:e};const o=e/g;return{width:t,height:Math.round(t*o)}}function It(g){return g>25*1024*1024?{compressionLevel:"aggressive",imageQuality:.6,imageMaxWidth:300,removeImages:!1,usePNG:!0,message:"Aggressive compression - maintaining technical diagram clarity"}:g>20*1024*1024?{compressionLevel:"high",imageQuality:.65,imageMaxWidth:350,removeImages:!1,usePNG:!0,message:"High compression - preserving technical diagram details"}:g>15*1024*1024?{compressionLevel:"medium",imageQuality:.7,imageMaxWidth:400,removeImages:!1,usePNG:!0,message:"Medium compression - optimal for technical documentation"}:g>10*1024*1024?{compressionLevel:"light",imageQuality:.75,imageMaxWidth:450,removeImages:!1,usePNG:!0,message:"Light compression - excellent technical diagram quality"}:{compressionLevel:"minimal",imageQuality:.8,imageMaxWidth:500,removeImages:!1,usePNG:!0,message:"Minimal compression - maximum technical diagram quality"}}function vo(g,e){return g}function bo(g,e){const t=(g.size/1048576).toFixed(2),o=It(g.size);if(g.size>15*1024*1024){console.warn(`Large file detected (${t} MB) - exceeds typical email limit, may need email-compatible version`);const s=document.createElement("div");s.style.cssText=`
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
    `,document.body.appendChild(s),setTimeout(()=>{s.parentElement&&s.remove()},8e3)}else g.size>3*1024*1024;return{size:g.size,sizeInMB:parseFloat(t),settings:o}}function ft(g,e="",t=""){console.error("Detailed error:",g);const o={type:So(g),message:g.message||"Unknown error",context:e,filename:t,timestamp:new Date().toISOString(),userAgent:navigator.userAgent},s=document.createElement("div");s.style.cssText=`
    position: fixed; top: 0; left: 0; width: 100%; height: 100%; 
    background: rgba(0,0,0,0.8); z-index: 10002; display: flex; 
    align-items: center; justify-content: center; padding: 20px;
  `;const i=document.createElement("div");return i.style.cssText=`
    background: white; border-radius: 8px; padding: 30px; max-width: 700px; 
    width: 100%; max-height: 80vh; overflow-y: auto;
  `,i.innerHTML=`
    <h3 style="color: #dc2626; margin: 0 0 20px 0; display: flex; align-items: center;">
      <span style="margin-right: 8px;">⚠️</span>
      ${wo(o.type)}
    </h3>
    
    <div style="background: #fef2f2; border: 1px solid #fecaca; border-radius: 6px; padding: 16px; margin: 16px 0;">
      <p style="margin: 0; color: #b91c1c; font-weight: bold;">
        ${xo(o.type,e,t)}
      </p>
    </div>
    
    ${Eo(o.type)}
    
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
        <p><strong>Browser:</strong> ${Lt()}</p>
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
  `,s.appendChild(i),document.body.appendChild(s),document.getElementById("error-close").onclick=()=>{document.body.removeChild(s)},document.getElementById("error-retry").onclick=()=>{document.body.removeChild(s),console.log("Retry requested for:",e)},document.getElementById("error-report").onclick=()=>{Co(o),alert("Error details copied to clipboard. Please send this to support.")},s.onclick=n=>{n.target===s&&document.body.removeChild(s)},o}function So(g){var o,s;const e=((o=g.message)==null?void 0:o.toLowerCase())||"",t=((s=g.stack)==null?void 0:s.toLowerCase())||"";return e.includes("network")||e.includes("fetch")?"network":e.includes("permission")||e.includes("denied")?"permission":e.includes("memory")||e.includes("quota")?"memory":e.includes("blob")||e.includes("url")?"download":e.includes("canvas")||e.includes("image")?"rendering":t.includes("jspdf")||e.includes("pdf")?"pdf":"unknown"}function wo(g){return{network:"Network Connection Error",permission:"Permission Required",memory:"Insufficient Memory",download:"Download Failed",rendering:"Display Error",pdf:"PDF Generation Error",unknown:"Unexpected Error"}[g]||"Error Occurred"}function xo(g,e,t){return{network:"Unable to load required resources. Please check your internet connection and try again.",permission:`Browser permission required to save ${t}. Please allow downloads and try again.`,memory:"Not enough memory to process this large file. Try closing other browser tabs or use fewer products.",download:`Failed to download ${t}. This may be due to browser security settings or storage limitations.`,rendering:"Unable to display product images properly. Some images may be missing from the final output.",pdf:`PDF generation failed while ${e}. The file may be too large or contain problematic data.`,unknown:`An unexpected error occurred while ${e}. Please try again or contact support.`}[g]||"An unknown error has occurred."}function Eo(g){const e={network:`
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
      </div>`};return e[g]||e.unknown}function Lt(){const g=navigator.userAgent;return g.includes("Chrome")?"Chrome":g.includes("Firefox")?"Firefox":g.includes("Safari")?"Safari":g.includes("Edge")?"Edge":g.includes("SamsungBrowser")?"Samsung Internet":"Unknown"}function Co(g){const e=`
Seima Scanner Error Report
========================
Time: ${g.timestamp}
Error Type: ${g.type}
Message: ${g.message}
Context: ${g.context}
File: ${g.filename}
Browser: ${Lt()}
User Agent: ${g.userAgent}
========================
  `.trim();try{navigator.clipboard.writeText(e)}catch(t){console.error("Failed to copy error report:",t)}}let ve={totalImages:0,optimizedImages:0,failedImages:0,totalSavings:0};function Po(g){let e=0;if(g.length===0)return e.toString();for(let t=0;t<g.length;t++){const o=g.charCodeAt(t);e=(e<<5)-e+o,e=e&e}return Math.abs(e).toString(36)}function yt(){ve={totalImages:0,optimizedImages:0,failedImages:0,totalSavings:0}}function _o(g=!1){ve.totalImages>0}function ko(g,e){const t=document.createElement("div");t.style.cssText=`
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
  `,t.appendChild(o),document.body.appendChild(t),document.getElementById("email-regular-version").onclick=()=>{t.remove();const s=new CustomEvent("sendEmailRegular",{detail:{userDetails:g,originalFilename:e}});window.dispatchEvent(s)},document.getElementById("email-optimized-version").onclick=()=>{t.remove(),g.emailCompatible=!0,nt(g)}}const Ro="tipTailSettings";async function Io(g){let e={};if(window._currentTipTailSettings)e=window._currentTipTailSettings,window._currentTipTailSettings=null;else try{e=JSON.parse(localStorage.getItem(Ro)||"{}")}catch(a){console.warn("Could not read tipTailSettings from localStorage:",a)}const{tipAsset:t,tipUpload:o,tailAsset:s,tailUpload:i}=e;if(!t&&!o&&!s&&!i)return g;async function n(a,c,l="file"){if(c&&a)try{const d=atob(a),u=new Uint8Array(d.length);for(let m=0;m<d.length;m++)u[m]=d.charCodeAt(m);return u.buffer}catch(d){return console.warn(`⚠️ Error converting base64 to ArrayBuffer for ${l}:`,d),null}if(a)try{const d=await fetch(a);return d.ok?await d.arrayBuffer():(console.warn(`⚠️ Failed to fetch ${l} file: ${a} (${d.status} ${d.statusText})`),null)}catch(d){return console.warn(`⚠️ Error fetching ${l} file: ${a}`,d),null}return null}async function r(a,c="file",l="unknown"){if(!a)return null;try{return await PDFLib.PDFDocument.load(a)}catch(d){return console.warn(`⚠️ Failed to parse ${c} PDF: ${l}`,d),null}}try{const a=await g.arrayBuffer(),c=await PDFLib.PDFDocument.load(a),l=await PDFLib.PDFDocument.create(),[d]=await l.copyPages(c,[0]);l.addPage(d);let u=null,m=null;if(o){const f=await n(o,!0,"tip");f?(u=await r(f,"tip","uploaded file"),u||(m="The uploaded tip file is not a valid PDF or could not be loaded.")):m="Failed to process the uploaded tip file."}else if(t){const f=await n(t,!1,"tip");f?(u=await r(f,"tip",t),u||(m=`The tip file "${t.split("/").pop()}" is not a valid PDF or could not be loaded.`)):m=`The tip file "${t.split("/").pop()}" could not be found or accessed.`}if(u){const f=Array.from({length:u.getPageCount()},(w,v)=>v);(await l.copyPages(u,f)).forEach(w=>l.addPage(w))}else m&&(console.warn(`⚠️ Tip file error: ${m}`),Ke("Tip File Issue",m));if(c.getPageCount()>1){const f=Array.from({length:c.getPageCount()-1},(w,v)=>v+1);(await l.copyPages(c,f)).forEach(w=>l.addPage(w))}let p=null,h=null;if(i){const f=await n(i,!0,"tail");f?(p=await r(f,"tail","uploaded file"),p||(h="The uploaded tail file is not a valid PDF or could not be loaded.")):h="Failed to process the uploaded tail file."}else if(s){const f=await n(s,!1,"tail");f?(p=await r(f,"tail",s),p||(h=`The tail file "${s.split("/").pop()}" is not a valid PDF or could not be loaded.`)):h=`The tail file "${s.split("/").pop()}" could not be found or accessed.`}if(p){const f=Array.from({length:p.getPageCount()},(w,v)=>v);(await l.copyPages(p,f)).forEach(w=>l.addPage(w))}else h&&(console.warn(`⚠️ Tail file error: ${h}`),Ke("Tail File Issue",h));const y=await l.save({useObjectStreams:!0,addDefaultPage:!1,objectsPerTick:20});return new Blob([y],{type:"application/pdf"})}catch(a){return console.error("❌ Error during PDF merging:",a),Ke("PDF Merging Error","An error occurred while merging the PDF files. The main PDF will be generated without tip/tail content."),g}}function Ke(g,e){const t=document.createElement("div");t.style.cssText=`
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
  `,document.body.appendChild(t),setTimeout(()=>{t.parentElement&&t.remove()},8e3)}const Ze="fredChatHistory",ze="fredChatMessages",Ie="fredFeedback",ke="fredQuestionLog",et=16,J={PROXY_URL:"https://seima-ai-proxy.seima.workers.dev",MODEL:"gpt-4o",MAX_TOKENS:2e3,TEMPERATURE:.2,MAX_CATALOG_RESULTS:60};function tt(){return{"Content-Type":"application/json",...L.getAuthHeaders()}}const Lo=`You are a product specification parser for building/construction projects. Extract ALL product references from the provided text.

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

Return format: [{"code":"...","name":"...","brand":"...","category":"...","quantity":1,"finish":"...","section":"...","specCode":"...","style":"..."}]`;class To{constructor(){this.conversationHistory=[],this._historyReady=this._loadHistory(),this.isProcessing=!1,this._catalogChecked=!1,this._syncing=!1,this.lastCompetitorProducts=new Map}async chat(e,t,o=null,s=null,i=null){var n,r;if(this.isProcessing)throw new Error("A request is already in progress");this.isProcessing=!0,await this._historyReady,this._catalogChecked||(this._catalogChecked=!0,this._checkCatalogFreshness());try{const a=typeof e=="string"?e:((r=(n=e.find)==null?void 0:n.call(e,l=>l.type==="text"))==null?void 0:r.text)||"";let c;try{c=await this._agentChatStream(a,o,i,s)}catch(l){console.warn("Agent chat failed, falling back to legacy flow:",l.message),c=null}if(c||(c=await this._legacyChat(e,a,t,o,s)),!c)throw new Error("No response from AI");return this.conversationHistory.push({role:"user",content:a||e},{role:"assistant",content:c}),this.conversationHistory.length>et&&(this.conversationHistory=this.conversationHistory.slice(-et)),await this._saveHistory(),{content:c,usage:null}}finally{this.isProcessing=!1}}async _agentChatStream(e,t,o,s){var r,a,c;const i=new AbortController,n=setTimeout(()=>i.abort(),6e4);try{const l=this._deriveIntentProfile(e),d=await fetch(`${J.PROXY_URL}/v1/agent-chat`,{method:"POST",headers:tt(),body:JSON.stringify({message:e,history:this.conversationHistory.slice(-12),model:J.MODEL,staffMode:L.isStaffMode(),powerUser:L.isPowerUser(),userEmail:((r=L.getCurrentUser())==null?void 0:r.email)||"",intentProfile:l,selectedProducts:(t==null?void 0:t.length)>0?t.map(S=>({OrderCode:S.OrderCode,ProductName:S.ProductName||S.Description,room:S.room})):void 0}),signal:i.signal});if(!d.ok){(c=(a=L).handleUnauthorizedResponse)==null||c.call(a,d,"agent-chat");const S=await d.json().catch(()=>({}));throw new Error(S.details||S.error||`Request failed (${d.status})`)}if((d.headers.get("content-type")||"").includes("application/json")){const S=await d.json();return S.needsSync?(this._ensureCatalogSync(),null):S.content||null}const m=d.body.getReader(),p=new TextDecoder;let h="",y="",f="";for(this.lastCompetitorProducts.clear();;){const{done:S,value:w}=await m.read();if(S)break;y+=p.decode(w,{stream:!0});const v=y.split(`
`);y=v.pop();for(const b of v)if(b.startsWith("event: "))f=b.slice(7).trim();else if(b.startsWith("data: ")){try{const E=JSON.parse(b.slice(6));if(f==="status"&&o)o(E.text);else if(f==="token")h+=E.text,s&&s(E.text);else if(f==="comp_products")for(const k of E.products||[])k.code&&this.lastCompetitorProducts.set(k.code,k);else if(f==="error")throw new Error(E.message||"Agent chat failed")}catch(E){if(E instanceof SyntaxError)continue;throw E}f=""}}return h||null}catch(l){throw l.name==="AbortError"?new Error("Request timed out."):l}finally{clearTimeout(n)}}async _legacyChat(e,t,o,s,i){var d,u,m;const n=[],r=await this._findRelevantProductsAI(t,o),a=this._deriveIntentProfile(t);if(r?n.push({role:"system",content:`SEIMA PRODUCT DATA (${r.count} products):
${r.text}

IMPORTANT: The above is the COMPLETE list of matching Seima products. Do NOT reference any product whose OrderCode is not listed above.`}):n.push({role:"system",content:"No matching Seima products were found in the catalogue for this query. Do NOT invent or recall products from memory. Let the user know honestly that no matching Seima products were found and suggest they refine their search."}),n.push({role:"system",content:`INTENT PROFILE:
- intent: ${a.intent}
- constraints: ${a.constraints.join(", ")||"none specified"}
- preferred categories: ${a.categories.join(", ")||"not specified"}
- preferred groups: ${a.groups.join(", ")||"not specified"}

Use this profile to prioritise relevant products and explain fit clearly.`}),(s==null?void 0:s.length)>0){const p=s.map(h=>[h.OrderCode,h.ProductName||h.Description,h.room?`Room: ${h.room}`:null].filter(Boolean).join(" | ")).join(`
`);n.push({role:"system",content:`USER'S CURRENT SELECTION (${s.length} products):
${p}`})}n.push(...this.conversationHistory),n.push({role:"user",content:e});const c={messages:n,model:J.MODEL,max_tokens:J.MAX_TOKENS,temperature:J.TEMPERATURE};let l;return i?l=await this._callProxyStream("/v1/chat/completions",c,i):l=(m=(u=(d=(await this._callProxy("/v1/chat/completions",c)).choices)==null?void 0:d[0])==null?void 0:u.message)==null?void 0:m.content,this._detectSearchFailure(t,o),l}async extractFromSpecText(e,t){var c,l,d,u,m;const o="--- Page Break ---",s=e.split(o).map(p=>p.trim()).filter(Boolean),i=3,n=[];for(let p=0;p<s.length;p+=i)n.push(s.slice(p,p+i).join(`

${o}

`));console.log(`📄 Spec extraction: ${s.length} pages → ${n.length} chunk(s) (max ${i} pages each)`);for(let p=0;p<n.length;p++)console.log(`  Chunk ${p+1}: ${n[p].length} chars`);const r=[];let a={prompt_tokens:0,completion_tokens:0,total_tokens:0};for(let p=0;p<n.length;p++){t&&t(p,n.length);const h=await this._callProxy("/v1/chat/completions",{model:"gpt-4o-mini",stream:!1,raw:!0,messages:[{role:"system",content:Lo},{role:"user",content:`Extract all product references from this specification document (part ${p+1} of ${n.length}):

${n[p]}`}],max_tokens:16e3,temperature:.1},18e4),y=(l=(c=h.choices)==null?void 0:c[0])==null?void 0:l.finish_reason;y==="length"&&console.warn(`⚠️ Chunk ${p+1}/${n.length} was truncated (finish_reason=length). Some products may be missing.`);const f=((m=(u=(d=h.choices)==null?void 0:d[0])==null?void 0:u.message)==null?void 0:m.content)||"[]";let S;try{const w=f.replace(/^```json?\n?/i,"").replace(/\n?```$/i,"").trim();S=JSON.parse(w)}catch{console.warn(`Failed to parse extraction result for chunk ${p+1}:`,f.slice(0,500)),S=[]}console.log(`  Chunk ${p+1}/${n.length}: ${S.length} products (${y})`),r.push(...S),h.usage&&(a.prompt_tokens+=h.usage.prompt_tokens||0,a.completion_tokens+=h.usage.completion_tokens||0,a.total_tokens+=h.usage.total_tokens||0)}return console.log(`📄 Spec extraction complete: ${r.length} products total`),{products:r,usage:a}}async extractFromTender(e,t){const o="--- Page Break ---",s=e.split(o).map(u=>u.trim()).filter(Boolean),i=3,n=[];for(let u=0;u<s.length;u+=i)n.push(s.slice(u,u+i).join(`

${o}

`));const r=[];let a=null,c={prompt_tokens:0,completion_tokens:0,total_tokens:0};for(let u=0;u<n.length;u++){t&&t(u,n.length);const m=await this._callProxy("/v1/extract-tender",{text:n[u],chunkIndex:u+1,totalChunks:n.length},18e4);m.project&&(a=a?{name:a.name||m.project.name,description:a.description||m.project.description,architect:a.architect||m.project.architect,builder:a.builder||m.project.builder,location:a.location||m.project.location,projectType:a.projectType||m.project.projectType}:{...m.project}),r.push(...m.products||[]),m.usage&&(c.prompt_tokens+=m.usage.prompt_tokens||0,c.completion_tokens+=m.usage.completion_tokens||0,c.total_tokens+=m.usage.total_tokens||0)}const l=[],d=new Set;for(const u of r){const m=[String(u.specCode||"").toLowerCase(),String(u.code||"").toLowerCase(),String(u.brand||"").toLowerCase(),String(u.name||"").toLowerCase(),String(u.finish||"").toLowerCase()].join("	");d.has(m)||(d.add(m),l.push(u))}return{products:l,project:a,usage:c}}async matchRerank(e,t){try{return(await this._callProxy("/v1/match-rerank",{competitorProduct:e,candidates:t},3e4)).matches||[]}catch(o){return console.warn("LLM rerank failed, using original ranking:",o.message),null}}async extractFromSpec(e,t){const o=await this._callProxy("/v1/extract-products",{content:e,mimeType:t},18e4);return{products:o.products||[],usage:o.usage}}async crossReferenceProducts(e,t){if(!P.isEnabled())try{await P.preload()}catch{}const o=[];for(const s of e){const i={...s,status:"unmatched",seimaMatches:[],seimaProduct:null},n=(s.brand||"").toLowerCase();if(n==="seima"||n==="siema"){let r=null;if(s.code&&t&&(r=t.findProductByCode(s.code)),!r&&t&&s.name){const a=t.searchProducts(s.name,5);a.length>0&&(r=a[0])}if(!r&&t&&s.code){const a=t.searchProducts(s.code,3);a.length>0&&(r=a[0])}if(r){i.status="seima-own",i.seimaProduct=r,o.push(i);continue}}if(s.code&&P.isEnabled())try{const r=await P.findSeimaMatches(s.code);if(r){const a=r.matches.map(c=>c.SeimaSKU);i.status="verified",i.seimaMatches=r.matches,t&&a.length>0&&(i.seimaProduct=t.findProductByCode(a[0])),o.push(i);continue}}catch(r){console.debug("[ai-service] crosshair lookup failed for",s.code,r)}if(P.isEnabled()){const r=s.brand&&s.code?`${s.brand} ${s.code}`.trim():"",a=[s.code,s.name,s.brand].filter(Boolean).join(" "),c=r&&r!==a?[r,a]:[a];let l=[];for(const d of c)if(!(!d||d.length<2)){try{l=await P.findAlternatives(d,3)}catch(u){console.debug("[ai-service] findAlternatives failed for query",d,u),l=[]}if(l.length>0)break}if(l.length>0){i.status="alternative",i.seimaMatches=l.map(d=>d.match),t&&(i.seimaProduct=t.findProductByCode(l[0].seimaSKU)),o.push(i);continue}}if(t){let r=[];if(s.name&&(r=t.searchProducts(s.name,3)),r.length===0&&s.category){const a=[s.category,s.finish].filter(Boolean).join(" ");r=t.searchProducts(a,3)}r.length>0&&(i.status="catalog-suggestion",i.seimaProduct=r[0],i.catalogSuggestions=r)}o.push(i)}return o}async _callProxy(e,t,o=12e4){var n,r;const s=new AbortController,i=setTimeout(()=>s.abort(),o);try{const a=await fetch(`${J.PROXY_URL}${e}`,{method:"POST",headers:tt(),body:JSON.stringify(t),signal:s.signal});if(!a.ok){(r=(n=L).handleUnauthorizedResponse)==null||r.call(n,a,e);const c=await a.json().catch(()=>({}));throw new Error(c.details||c.error||`Request failed (${a.status})`)}return a.json()}catch(a){throw a.name==="AbortError"?new Error("Request timed out. The file may be too large — try a shorter document or individual pages."):a}finally{clearTimeout(i)}}async _callProxyStream(e,t,o,s=12e4){var r,a,c,l,d;const i=new AbortController,n=setTimeout(()=>i.abort(),s);try{const u=await fetch(`${J.PROXY_URL}${e}`,{method:"POST",headers:tt(),body:JSON.stringify(t),signal:i.signal});if(!u.ok){(a=(r=L).handleUnauthorizedResponse)==null||a.call(r,u,`${e} (stream)`);const f=await u.json().catch(()=>({}));throw new Error(f.details||f.error||`Request failed (${u.status})`)}const m=u.body.getReader(),p=new TextDecoder;let h="",y="";for(;;){const{done:f,value:S}=await m.read();if(f)break;y+=p.decode(S,{stream:!0});const w=y.split(`
`);y=w.pop();for(const v of w){if(!v.startsWith("data: "))continue;const b=v.slice(6);if(b!=="[DONE]")try{const k=(d=(l=(c=JSON.parse(b).choices)==null?void 0:c[0])==null?void 0:l.delta)==null?void 0:d.content;k&&(h+=k,o(k))}catch{}}}return h}catch(u){throw u.name==="AbortError"?new Error("Request timed out. The file may be too large — try a shorter document or individual pages."):u}finally{clearTimeout(n)}}async _findRelevantProductsAI(e,t){if(!e||e.trim().length<2)return null;try{const o=await this._callProxy("/v1/product-search",{message:e,history:this.conversationHistory.slice(-6)},15e3);if(o.needsSync)return this._ensureCatalogSync(),this._findRelevantProductsFuse(e,t);if(o.products&&o.products.length>0){const i=this._rankProductsForFred(o.products,e).slice(0,J.MAX_CATALOG_RESULTS);return this._lastProductCodes=new Set(i.map(n=>n.OrderCode)),this._lastSearchMessage=e,{text:this._formatProducts(i),count:i.length}}}catch(o){console.warn("Server-side product search failed, falling back to local Fuse.js:",o.message)}return this._findRelevantProductsFuse(e,t)}async _findRelevantProductsFuse(e,t){if(!t||!t.products||t.products.length===0)return null;let o;try{o=(await this._callProxy("/v1/generate-queries",{messages:this.conversationHistory.slice(-6),currentMessage:e},1e4)).queries}catch{o=null}const s=new Map;if(o&&Array.isArray(o)&&o.length>0){for(const r of o)if(!(!r||typeof r!="string"))for(const a of t.searchProductsFuzzy(r,25))a.OrderCode&&s.set(a.OrderCode,a)}else{const r=this._extractTerms(e.toLowerCase()),a=r.join(" ");if(a.length>=2)for(const c of t.searchProductsFuzzy(a,J.MAX_CATALOG_RESULTS))c.OrderCode&&s.set(c.OrderCode,c);for(const c of r)for(const l of t.searchProductsFuzzy(c,25))l.OrderCode&&s.set(l.OrderCode,l)}for(const r of t.searchProductsFuzzy(e,25))r.OrderCode&&s.set(r.OrderCode,r);this._lastProductCodes=new Set(s.keys()),this._lastSearchMessage=e;const n=this._rankProductsForFred([...s.values()],e).slice(0,J.MAX_CATALOG_RESULTS);return n.length===0?null:{text:this._formatProducts(n),count:n.length}}_checkCatalogFreshness(){this._callProxy("/v1/catalog/status",{},5e3).then(e=>{!e.synced||e.ageHours>24?(console.log(e.synced?`📦 Catalog embeddings are ${e.ageHours}h old — refreshing...`:"📦 No catalog embeddings found — syncing..."),this._ensureCatalogSync()):console.log(`✅ Catalog embeddings up to date (${e.count} products, ${e.ageHours}h old)`)}).catch(()=>{})}_ensureCatalogSync(){this._syncing||(this._syncing=!0,console.log("🔄 Triggering catalog embedding sync..."),this._callProxy("/v1/catalog/sync",{},12e4).then(()=>console.log("✅ Catalog embedding sync complete")).catch(e=>console.warn("⚠️ Catalog sync failed:",e.message)).finally(()=>{this._syncing=!1}))}_detectSearchFailure(e,t){var r;if(!this._lastProductCodes||!this._lastSearchMessage)return;const o=e.match(/\b(\d{6})\b/);if(!o)return;const s=o[1];if(this._lastProductCodes.has(s))return;const i=(r=t==null?void 0:t.findProductByCode)==null?void 0:r.call(t,s);if(!i)return;const n=i.ProductName||i["Product Name"]||i.Description||"";console.warn(`🔍 Search failure detected: "${this._lastSearchMessage}" missed product ${s} (${n})`),this._callProxy("/v1/search-failures",{originalQuery:this._lastSearchMessage,correctionCode:s,productName:n,timestamp:new Date().toISOString()},5e3).catch(()=>{})}_extractTerms(e){const t=new Set(["a","an","the","is","are","for","and","or","in","on","at","to","of","with","from","me","i","my","do","you","can","find","show","get","what","which","please","thanks","seima","want","need","looking","like","have","dont","any","some","got","something","interested","after","just","would","could","there","that","this","about","it","its","also","but","not","has","was","were","been","being","does","did","will","shall","should","may","might","must","how","much","many","very","really","tell","give","help","let","know","think","see"]);return e.replace(/[^a-z0-9\s-]/g," ").split(/\s+/).filter(o=>o.length>=2&&!t.has(o))}_deriveIntentProfile(e){const t=String(e||"").toLowerCase(),o=c=>c.some(l=>t.includes(l));let s="browse";o(["compare","difference","vs ","versus"])?s="compare":o(["spec","compliance","wels","dimension","size"])?s="spec-check":o(["equivalent","alternative","replace","substitute"])?s="substitute":o(["package","bundle","full set","complete"])&&(s="package");const i=[];o(["matte black","brushed nickel","chrome","brushed brass","gun metal","white"])&&i.push("finish/colour"),o(["budget","cheap","affordable","premium","price"])&&i.push("budget"),o(["small","compact","large","dimension","mm"])&&i.push("size/dimensions"),o(["bathroom","ensuite","kitchen","laundry","powder"])&&i.push("room context");const n=this._extractTerms(t),r=[],a=[];for(const c of n)["basin","basins","tapware","toilet","bath","sink","waste","vanity","shower","accessory","accessories"].includes(c)&&r.push(c),["above","counter","wall","hung","mixer","inset","undermount","floorstanding","rimless"].includes(c)&&a.push(c);return{intent:s,constraints:[...new Set(i)],categories:[...new Set(r)],groups:[...new Set(a)]}}_rankProductsForFred(e,t){const o=this._extractTerms(String(t||"").toLowerCase()),s=new Set(o),i=e.map((n,r)=>{const a=String(n.OrderCode||"").toLowerCase(),c=String(n.ProductName||n.Description||"").toLowerCase(),l=String(n.Description||"").toLowerCase(),d=String(n.SubGroup||n.Type||n["Sub Group"]||"").toLowerCase(),u=String(n.Group||"").toLowerCase(),m=String(n.Range||"").toLowerCase(),p=String(n.Finish||"").toLowerCase(),h=String(n.Colour||"").toLowerCase();let y=0;for(const f of s)f&&(a===f?y+=120:a.includes(f)&&(y+=75),d===f?y+=45:d.includes(f)&&(y+=32),u===f?y+=35:u.includes(f)&&(y+=24),c.includes(f)&&(y+=20),m.includes(f)&&(y+=14),(p.includes(f)||h.includes(f))&&(y+=12),l.includes(f)&&(y+=8));return{p:n,score:y,idx:r}});return i.sort((n,r)=>r.score-n.score||n.idx-r.idx),i.map(n=>n.p)}_formatProducts(e){return JSON.stringify(e.map(t=>{const o={OrderCode:t.OrderCode};t.ProductName&&(o.ProductName=t.ProductName),t.Description&&(o.Description=t.Description);const s=t["Long Description"]||t.LongDescription;s&&(o.Detail=s),t.Range&&(o.Range=t.Range);const i=t.SubGroup||t.Type||t["Sub Group"];i&&(o.Category=i),t.Group&&(o.Group=t.Group),i&&t.Group&&(o.Taxonomy=`${i} > ${t.Group}`),i&&!o.Taxonomy&&(o.Taxonomy=i);const n=t.DimX||t["X Dimension (mm)"],r=t.DimY||t["Y Dimension (mm)"],a=t.DimZ||t["Z Dimension (mm)"];n&&n!=="0"&&(o.Dimensions=`${n}x${r||0}x${a||0}mm`);const c=t["RRP INC GST"]||t.RRP_INCGST||t["RRP EX GST"]||t.RRP_EXGST||t.RRP_EX;c&&(o.Price=`$${c}`),t.Finish&&(o.Finish=t.Finish),t.Colour&&(o.Colour=t.Colour);const l=t.WELS_STAR||t["WELS Star"];return l&&(o.WELS=`${l} star`),o}))}async clearHistory(){this.conversationHistory=[],await this._saveHistory();try{const{del:e}=await M(async()=>{const{del:t}=await import("./vendor-idb-DwnyWBFG.js");return{del:t}},[]);await e(ze)}catch{}}async _saveHistory(){try{const{set:e}=await M(async()=>{const{set:t}=await import("./vendor-idb-DwnyWBFG.js");return{set:t}},[]);await e(Ze,this.conversationHistory)}catch{}}async _loadHistory(){try{localStorage.removeItem(Ze);const{get:e}=await M(async()=>{const{get:o}=await import("./vendor-idb-DwnyWBFG.js");return{get:o}},[]),t=await e(Ze);if(!Array.isArray(t))return;this.conversationHistory=t.slice(-et)}catch{}}get processing(){return this.isProcessing}}const ie=new To;class Do{constructor(){this.selectedFile=null,this.importMode="append",this.processedData=[],this.notFoundProducts=[],this.importedMetadata=null,this._specResults=null,this._projectMeta=null}init(){this.setupEventHandlers(),this._showTenderImportBanner(),console.log("FileImportManager initialized")}setupEventHandlers(){const e=document.getElementById("import-file-btn");e&&(e.onclick=()=>this.showImportModal());const t=document.getElementById("file-drop-zone"),o=document.getElementById("file-input");t&&o&&(t.onclick=()=>o.click(),t.ondragover=l=>{l.preventDefault(),t.style.borderColor="#059669",t.style.background="#f0fdf4"},t.ondragleave=l=>{l.preventDefault(),t.style.borderColor="#ccc",t.style.background="#fafafa"},t.ondrop=l=>{l.preventDefault(),t.style.borderColor="#ccc",t.style.background="#fafafa";const d=l.dataTransfer.files;d.length>0&&this.handleFileSelection(d[0])},o.onchange=l=>{l.target.files.length>0&&this.handleFileSelection(l.target.files[0])});const s=document.getElementById("import-cancel-btn"),i=document.getElementById("import-next-btn"),n=document.getElementById("import-back-btn"),r=document.getElementById("import-process-btn"),a=document.getElementById("import-close-btn");s&&(s.onclick=()=>this.closeModal()),i&&(i.onclick=()=>this.showImportModeStep()),n&&(n.onclick=()=>this.showFileSelectionStep()),r&&(r.onclick=()=>this.processImport()),a&&(a.onclick=()=>this.closeModal()),document.querySelectorAll('input[name="import-mode"]').forEach(l=>{l.onchange=()=>{this.importMode=l.value;const d=document.getElementById("override-warning");d&&(d.style.display=this.importMode==="override"?"block":"none")}})}showImportModal(){if(!L.isPowerUser()){alert("File import requires a Power User account. Please contact your administrator to upgrade your access.");return}const e=document.getElementById("file-import-modal");e&&(e.style.display="flex",this.resetModal())}closeModal(){const e=document.getElementById("file-import-modal");e&&(e.style.display="none",this.resetModal())}resetModal(){this.selectedFile=null,this.importMode="append",this.processedData=[],this.notFoundProducts=[],this._specResults=null,this._projectMeta=null;const e=document.querySelector("#file-import-modal .modal-content");e&&(e.classList.add("modal-wide"),e.classList.remove("modal-fullscreen")),this.showFileSelectionStep();const t=document.getElementById("file-input");t&&(t.value="");const o=document.getElementById("selected-file-info");o&&(o.style.display="none");const s=document.getElementById("import-next-btn");s&&(s.disabled=!0);const i=document.querySelector('input[name="import-mode"][value="append"]');i&&(i.checked=!0);const n=document.getElementById("override-warning");n&&(n.style.display="none")}showFileSelectionStep(){this.hideAllSteps();const e=document.getElementById("file-selection-step");e&&(e.style.display="block")}showImportModeStep(){this.hideAllSteps();const e=document.getElementById("import-mode-step");e&&(e.style.display="block")}showProcessingStep(){this.hideAllSteps();const e=document.getElementById("import-processing-step");e&&(e.style.display="block")}showResultsStep(){this.hideAllSteps();const e=document.getElementById("import-results-step");e&&(e.style.display="block")}showSpecResultsStep(){this.hideAllSteps();const e=document.getElementById("import-spec-results-step");e&&(e.style.display="flex");const t=document.querySelector("#file-import-modal .modal-content");t&&(t.classList.remove("modal-wide"),t.classList.add("modal-fullscreen"))}hideAllSteps(){["file-selection-step","import-mode-step","import-processing-step","import-results-step","import-spec-results-step"].forEach(t=>{const o=document.getElementById(t);o&&(o.style.display="none")})}handleFileSelection(e){console.log("File selected:",e.name,e.type,e.size);const t=A.get("import.acceptedTypes",[".csv",".xlsx",".xls",".json",".pdf",".jpg",".jpeg",".png"]),o=["text/csv","application/vnd.ms-excel","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","application/json","application/pdf","image/jpeg","image/png"],s=e.name.toLowerCase(),i=t.some(u=>s.endsWith(u.toLowerCase())),n=A.get("import.maxFileSize",15*1024*1024),a=s.endsWith(".pdf")?Math.max(n,50*1024*1024):n;if(e.size>a){const u=Math.round(a/1048576);alert(`File is too large. Maximum size is ${u}MB.`);return}if(!o.includes(e.type)&&!i){alert(`Please select a valid file. Accepted formats: ${t.join(", ")}`);return}this.selectedFile=e;const c=document.getElementById("selected-file-info"),l=document.getElementById("selected-file-name"),d=document.getElementById("import-next-btn");c&&l&&d&&(l.textContent=e.name,c.style.display="block",d.disabled=!1)}async processImport(){if(!this.selectedFile){alert("No file selected");return}console.log("Starting import process with mode:",this.importMode),this.showProcessingStep();try{const e=this.selectedFile.name.toLowerCase();if(this._isSpecFile(e)){await this._processSpecFile();return}let t;if(e.endsWith(".csv"))t=await this.parseCSV(this.selectedFile);else if(e.endsWith(".json"))t=await this.parseJSON(this.selectedFile);else if(e.endsWith(".xlsx")||e.endsWith(".xls"))t=await this.parseExcel(this.selectedFile);else throw new Error("Unsupported file format");console.log("Parsed data:",t),this.importMode==="override"&&(C.clearAllSelections(),console.log("Cleared all existing data for override mode")),await this.processDataChunked(t),this.showImportResults()}catch(e){console.error("Import failed:",e),alert(`Import failed: ${e.message}`),this.showFileSelectionStep()}}_isSpecFile(e){return/\.(pdf|jpg|jpeg|png)$/.test(e)}async _processSpecFile(){const e=document.querySelector("#import-processing-step p"),t=Math.round(this.selectedFile.size/1024);try{let o;if(this.selectedFile.type==="application/pdf"||this.selectedFile.name.toLowerCase().endsWith(".pdf")){e&&(e.innerHTML=`Reading PDF...<br><small style="color:#888">${this._escapeHtml(this.selectedFile.name)} (${t}KB)</small>`);const n=await this._extractPdfText(this.selectedFile);if(n&&n.length>100)e&&(e.innerHTML=`Analysing specification text...<br><small style="color:#888">Extracted ${n.length.toLocaleString()} characters from PDF</small>`),o=await ie.extractFromTender(n,(r,a)=>{e&&a>1&&(e.innerHTML=`Analysing specification text (part ${r+1} of ${a})...<br><small style="color:#888">Extracted ${n.length.toLocaleString()} characters from PDF</small>`)});else{let r=this.selectedFile;const a=5*1024*1024;if(this.selectedFile.size>a){e&&(e.innerHTML=`Compressing PDF for analysis...<br><small style="color:#888">Reducing ${(this.selectedFile.size/(1024*1024)).toFixed(1)}MB file for faster processing</small>`);try{if(r=await this._compressPdf(this.selectedFile,(l,d)=>{e&&(e.innerHTML=`Compressing PDF (page ${l} of ${d})...<br><small style="color:#888">Reducing file size for vision analysis</small>`)}),r!==this.selectedFile){const l=(this.selectedFile.size/1048576).toFixed(1),d=(r.size/(1024*1024)).toFixed(1);console.log(`Using compressed PDF: ${l}MB → ${d}MB`)}}catch(l){console.warn("PDF compression failed, using original:",l),r=this.selectedFile}}e&&(e.innerHTML='Analysing PDF with vision AI...<br><small style="color:#888">Image-based PDF — this may take 1-2 minutes</small>');const c=await this._fileToBase64(r);o=await ie.extractFromSpec(c,"application/pdf")}}else{e&&(e.innerHTML=`Analysing image...<br><small style="color:#888">${this._escapeHtml(this.selectedFile.name)} (${t}KB)</small>`);const n=await this._fileToBase64(this.selectedFile),r=this.selectedFile.type||"image/jpeg";o=await ie.extractFromSpec(n,r)}if(!o.products||o.products.length===0){alert("No products were found in this file. Try a clearer image or a different page."),this.showFileSelectionStep();return}this._projectMeta=o.project||null,this._projectMeta&&this._applyTenderProjectMetaToPdfSettings(this._projectMeta),e&&(e.textContent=`Found ${o.products.length} products. Cross-referencing with Seima catalogue...`);const i=await ie.crossReferenceProducts(o.products,_);this._specResults=i,this._showSpecResults(i)}catch(o){console.error("Spec processing failed:",o),alert(`Spec processing failed: ${o.message}`),this.showFileSelectionStep()}}async _extractPdfText(e){try{if(!window.pdfjsLib){const n=document.createElement("script");n.src="https://cdn.jsdelivr.net/npm/pdfjs-dist@4.9.155/build/pdf.min.mjs",n.type="module";const r=document.createElement("script");r.type="module",r.textContent=`
          import * as pdfjsLib from 'https://cdn.jsdelivr.net/npm/pdfjs-dist@4.9.155/build/pdf.min.mjs';
          pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdn.jsdelivr.net/npm/pdfjs-dist@4.9.155/build/pdf.worker.min.mjs';
          window.pdfjsLib = pdfjsLib;
          window.dispatchEvent(new Event('pdfjsReady'));
        `,document.head.appendChild(r),await new Promise((a,c)=>{const l=setTimeout(()=>c(new Error("PDF.js load timeout")),15e3);window.addEventListener("pdfjsReady",()=>{clearTimeout(l),a()},{once:!0})})}const t=await e.arrayBuffer(),o=await window.pdfjsLib.getDocument({data:t}).promise,s=[];for(let n=1;n<=o.numPages;n++){const c=(await(await o.getPage(n)).getTextContent()).items.map(l=>l.str).join(" ");console.log(`  Page ${n}/${o.numPages}: ${c.trim().length} chars${c.trim().length===0?" (EMPTY — may be image-only)":""}`),c.trim()&&s.push(c.trim())}s.length<o.numPages&&console.warn(`⚠️ ${o.numPages-s.length} page(s) had no extractable text (image-only pages)`);const i=s.join(`

--- Page Break ---

`);return console.log(`PDF text extraction: ${o.numPages} pages, ${s.length} with text, ${i.length} chars total`),i}catch(t){return console.warn("PDF text extraction failed, will use vision API:",t),null}}_fileToBase64(e){return new Promise((t,o)=>{const s=new FileReader;s.onload=()=>t(s.result.split(",")[1]),s.onerror=()=>o(new Error("Failed to read file")),s.readAsDataURL(e)})}async _compressPdf(e,t){if(!window.pdfjsLib)throw new Error("PDF.js must be loaded before compression");if(!window.jspdf){const u=document.createElement("script");u.src="https://cdn.jsdelivr.net/npm/jspdf@2.5.2/dist/jspdf.umd.min.js",document.head.appendChild(u),await new Promise((m,p)=>{u.onload=m,u.onerror=()=>p(new Error("Failed to load jsPDF")),setTimeout(()=>p(new Error("jsPDF load timeout")),1e4)})}const o=await e.arrayBuffer(),s=await window.pdfjsLib.getDocument({data:o}).promise,{jsPDF:i}=window.jspdf,n=1.5,r=.65;let a=null;for(let u=1;u<=s.numPages;u++){t&&t(u,s.numPages);const m=await s.getPage(u),p=m.getViewport({scale:n}),h=document.createElement("canvas");h.width=p.width,h.height=p.height;const y=h.getContext("2d");await m.render({canvasContext:y,viewport:p}).promise;const f=h.toDataURL("image/jpeg",r),S=p.width>p.height?"landscape":"portrait";u===1?a=new i({orientation:S,unit:"px",format:[p.width,p.height]}):a.addPage([p.width,p.height],S),a.addImage(f,"JPEG",0,0,p.width,p.height),h.width=0,h.height=0}const c=a.output("blob"),l=new File([c],e.name,{type:"application/pdf"}),d=Math.round((1-l.size/e.size)*100);return console.log(`PDF compressed: ${(e.size/(1024*1024)).toFixed(1)}MB → ${(l.size/(1024*1024)).toFixed(1)}MB (${d}% reduction)`),l.size<e.size*.9?l:(console.log("Compression did not significantly reduce size, using original"),e)}_showSpecResults(e){const t=e.filter(u=>["verified","seima-own","alternative","catalog-suggestion"].includes(u.status)),o=e.filter(u=>u.status==="unmatched"||u.status==="ai-suggested"),s=[...new Set(e.map(u=>u.section).filter(Boolean))],i=document.getElementById("spec-results-content");if(!i)return;let n="";if(this._projectMeta){const u=this._projectMeta;if([u.name,u.description,u.architect,u.builder,u.location].filter(Boolean).length>0){const p=u.description?`<div style="margin-top:4px;color:#444;font-size:13px">${this._escapeHtml(u.description)}</div>`:"",h=[u.architect?`Architect: ${this._escapeHtml(u.architect)}`:"",u.builder?`Builder: ${this._escapeHtml(u.builder)}`:"",u.location?`Location: ${this._escapeHtml(u.location)}`:""].filter(Boolean).join(" · ");n=`<div class="spec-project-meta" style="margin-bottom:12px;padding:8px 12px;background:#f0f9ff;border-radius:6px;border:1px solid #bae6fd;">
          ${u.name?`<strong style="font-size:14px">${this._escapeHtml(u.name)}</strong>`:""}
          ${p}
          ${h?`<small style="display:block;margin-top:8px;color:#555">${h}</small>`:""}
        </div>`}}const r=e.filter(u=>u.orEquivalent===!0).length;i.innerHTML=`
      <h4 style="margin:0 0 12px">Specification Analysis — ${this._escapeHtml(this.selectedFile.name)}</h4>
      ${n}
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
    `;const a=document.getElementById("spec-add-all-btn");a&&(a.style.display="",a.textContent=`Import Selected to Grid (${e.length})`,a.onclick=()=>this._importSelectedToGrid());const c=document.getElementById("spec-export-pdf-btn");c&&(c.style.display="",c.onclick=()=>this._exportSubstitutionPDF());const l=document.getElementById("spec-done-btn");l&&(l.onclick=()=>{this.closeModal(),window.location.reload()});const d=i.querySelector("#spec-select-all");d&&d.addEventListener("change",()=>{i.querySelectorAll(".spec-row-check").forEach(u=>{u.checked=d.checked}),this._updateImportCount()}),i.addEventListener("change",u=>{u.target.classList.contains("spec-row-check")&&this._updateImportCount()}),this.showSpecResultsStep()}_renderSpecRows(e){let t="",o=null;for(let s=0;s<e.length;s++){const i=e[s];i.section&&i.section!==o&&(o=i.section,t+=`<tr class="spec-section-header"><td colspan="4">${this._escapeHtml(i.section)}</td></tr>`),t+=this._renderSpecRow(i,s)}return t}_renderSpecRow(e,t){var h,y,f;const o=e.specCode?`<strong>${this._escapeHtml(e.specCode)}</strong> `:"",s=e.name||e.category||"",i=e.brand||"",n=e.code||"",r=e.style||"",a=e.finish||"",c={"seima-own":'<span class="spec-badge spec-badge-seima">Seima Product</span>',verified:'<span class="spec-badge spec-badge-verified">Verified Match</span>',alternative:'<span class="spec-badge spec-badge-alt">Alternative</span>',"catalog-suggestion":'<span class="spec-badge spec-badge-suggest">Suggestion</span>',"ai-suggested":'<span class="spec-badge spec-badge-ai">AI Suggested</span>',unmatched:'<span class="spec-badge spec-badge-none">No Match</span>'};let l="";if(e.status==="seima-own"&&e.seimaProduct){const S=e.seimaProduct;l=`<strong>${this._escapeHtml(S.OrderCode||S["Order Code"]||"")}</strong>
        <br><small>${this._escapeHtml(S.Description||S.ProductName||"")}</small>`}else if(["verified","alternative"].includes(e.status)&&((h=e.seimaMatches)==null?void 0:h.length)>0){const S=e.seimaMatches[0].SeimaSKU||"",w=((y=e.seimaProduct)==null?void 0:y.Description)||((f=e.seimaProduct)==null?void 0:f.ProductName)||"";l=`<strong>${this._escapeHtml(S)}</strong>`,w&&(l+=`<br><small>${this._escapeHtml(w)}</small>`)}else if(e.status==="catalog-suggestion"&&e.seimaProduct){const S=e.seimaProduct;l=`<em>${this._escapeHtml(S.OrderCode||S["Order Code"]||"")}</em>
        <br><small style="color:#737373">${this._escapeHtml(S.Description||S.ProductName||"")}</small>`}else l='<span style="color:#aaa">—</span>';const d=[i,r,n,a].filter(Boolean).map(S=>this._escapeHtml(S)),u=`spec-row spec-row-${e.status}`,m=e.orEquivalent?'<span style="display:inline-block;margin-top:2px;padding:1px 5px;font-size:10px;background:#fef3c7;color:#92400e;border-radius:3px;">or equivalent</span>':"",p=e.tier?`<span style="display:inline-block;margin-top:2px;padding:1px 5px;font-size:10px;background:#e0e7ff;color:#3730a3;border-radius:3px;">${this._escapeHtml(e.tier)}</span>`:"";return`
      <tr class="${u}" data-index="${t}">
        <td><input type="checkbox" class="spec-row-check" data-index="${t}" checked></td>
        <td>
          <div>${o}${this._escapeHtml(s)}</div>
          <small style="color:#737373">${d.join(" · ")}</small>
          ${m||p?`<div style="display:flex;gap:4px;flex-wrap:wrap">${m}${p}</div>`:""}
        </td>
        <td>${c[e.status]||""}</td>
        <td>${l}</td>
      </tr>
    `}_updateImportCount(){const e=document.querySelectorAll(".spec-row-check:checked").length,t=document.getElementById("spec-add-all-btn");t&&(t.textContent=`Import Selected to Grid (${e})`,t.disabled=e===0)}_importSelectedToGrid(){var c,l,d;if(!this._specResults)return;const e=document.querySelectorAll(".spec-row-check:checked");this.importMode==="override"&&(C.clearAllSelections(),console.log("Cleared all existing data for override mode (spec import)"));const t=new Set;e.forEach(u=>{const m=parseInt(u.dataset.index),p=this._specResults[m];p!=null&&p.section&&t.add(p.section)}),t.forEach(u=>C.addCustomRoom(u));const o=[];e.forEach(u=>{var S,w;const m=parseInt(u.dataset.index),p=this._specResults[m];if(!p)return;const h=this._buildSpecNote(p),y=p.section||"Imported";if((p.status==="seima-own"||p.status==="verified")&&p.seimaProduct){const v=p.seimaProduct.OrderCode||p.seimaProduct["Order Code"]||((w=(S=p.seimaMatches)==null?void 0:S[0])==null?void 0:w.SeimaSKU),b=_.findProductByCode(v);if(b){o.push({product:b,notes:h,room:y,quantity:p.quantity||1});return}}let f=h;if(p.seimaProduct&&p.status!=="seima-own"&&p.status!=="verified"){const v=p.seimaProduct.OrderCode||"",b=p.seimaProduct.ProductName||p.seimaProduct.Description||"";f+=` | SEIMA SUGGESTION: ${v} ${b}`}o.push({product:{OrderCode:"",Description:h,_placeholder:!0},notes:f,room:y,quantity:p.quantity||1})});const s=C.addProductsBatch(o),i=s?o.length:0;s||alert(`Could not save all products — browser storage is full.
Try clearing old selections or using a different browser.`);const n=this._specResults.filter(u=>u.status==="seima-own"||u.status==="verified").length,r=this._specResults.length;try{sessionStorage.setItem("tenderImportBanner",JSON.stringify({fileName:((c=this.selectedFile)==null?void 0:c.name)||"Specification",total:r,matched:n,unmatched:r-n,project:((l=this._projectMeta)==null?void 0:l.name)||null,projectDescription:((d=this._projectMeta)==null?void 0:d.description)||null,timestamp:Date.now()}))}catch{}const a=document.getElementById("spec-add-all-btn");a&&(a.textContent=`Imported ${i} item${i!==1?"s":""}`,a.disabled=!0),e.forEach(u=>{u.disabled=!0})}_buildSpecNote(e){const t=[];return e.specCode&&t.push(e.specCode),e.name&&t.push(e.name),e.brand&&t.push(e.brand),e.style&&t.push(e.style),e.code&&t.push(`Code: ${e.code}`),e.finish&&t.push(e.finish),e.brand&&e.code&&t.push(`Match: ${e.brand} ${e.code}`),t.join(" | ")}_applyTenderProjectMetaToPdfSettings(e){if(!e)return;const t=e.name!=null?String(e.name).trim():"",o=e.description!=null?String(e.description).trim():"";if(!t&&!o)return;const i={...x.getStorageItem("pdfFormSettings",{}),...t?{project:t}:{},...o?{projectNotes:o}:{}};x.setStorageItem("pdfFormSettings",i)}_showTenderImportBanner(){var e;try{const t=sessionStorage.getItem("tenderImportBanner");if(!t)return;sessionStorage.removeItem("tenderImportBanner");const o=JSON.parse(t);if(Date.now()-o.timestamp>3e4)return;const s=document.getElementById("tender-import-banner");if(!s)return;const i=o.project||o.fileName,n=o.projectDescription?`<span style="opacity:0.9"> — ${this._escapeHtml(o.projectDescription)}</span>`:"";s.innerHTML=`
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="flex-shrink:0">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
        </svg>
        <span>Tender: <strong>${this._escapeHtml(i)}</strong>${n} — ${o.matched} matched · ${o.unmatched} unmatched</span>
        <button class="tender-banner-close" title="Dismiss">✕</button>
      `,s.style.display="flex",(e=s.querySelector(".tender-banner-close"))==null||e.addEventListener("click",()=>{s.style.display="none"}),setTimeout(()=>{s.style.display="none"},15e3)}catch{}}async _exportSubstitutionPDF(){var t,o,s;if(!this._specResults||this._specResults.length===0)return;const e=document.getElementById("spec-export-pdf-btn");e&&(e.disabled=!0,e.textContent="Generating PDF...");try{if(!window.jspdf){const v=document.createElement("script");v.src="https://cdn.jsdelivr.net/npm/jspdf@2.5.2/dist/jspdf.umd.min.js",document.head.appendChild(v),await new Promise((b,E)=>{v.onload=b,v.onerror=()=>E(new Error("Failed to load jsPDF")),setTimeout(()=>E(new Error("jsPDF load timeout")),1e4)})}const{jsPDF:i}=window.jspdf,n=new i({orientation:"portrait",unit:"mm",format:"a4"}),r=15,a=210-r*2;let c=r;n.setFontSize(24),n.setFont(void 0,"bold"),n.text("Product Substitution Schedule",r,c+30),n.setFontSize(14),n.setFont(void 0,"normal");const l=this._projectMeta;let d=c+45;l!=null&&l.name&&(n.text(l.name,r,d),d+=7),l!=null&&l.description&&(n.text(l.description,r,d),d+=7),l!=null&&l.architect&&(n.text(`Architect: ${l.architect}`,r,d),d+=7),l!=null&&l.builder&&(n.text(`Builder: ${l.builder}`,r,d),d+=7),l!=null&&l.location&&(n.text(`Location: ${l.location}`,r,d),d+=7),n.setFontSize(11),n.text(`Date: ${new Date().toLocaleDateString("en-AU")}`,r,d+3);const u=this._specResults.filter(v=>v.status!=="unmatched").length,m=this._specResults.length,p=m>0?Math.round(u/m*100):0;n.text(`Coverage: ${u} of ${m} products matched (${p}%)`,r,d+13),n.setFontSize(9),n.setTextColor(120),n.text("Prepared by Seima Product Presenter",r,280),n.setTextColor(0),n.addPage(),c=r,n.setFontSize(16),n.setFont(void 0,"bold"),n.text("Substitution Table",r,c),c+=10;const h=[18,50,22,50,25,15],y=["Spec","Specified Product","Brand","Seima Substitute","Code","Conf"];n.setFontSize(8),n.setFont(void 0,"bold"),n.setFillColor(240,240,240),n.rect(r,c,a,7,"F");let f=r;y.forEach((v,b)=>{n.text(v,f+1,c+5),f+=h[b]}),c+=8,n.setFont(void 0,"normal"),n.setFontSize(7);let S=null;for(const v of this._specResults)c>270&&(n.addPage(),c=r),v.section&&v.section!==S&&(S=v.section,n.setFont(void 0,"bold"),n.setFillColor(245,245,245),n.rect(r,c,a,6,"F"),n.text(v.section,r+1,c+4),n.setFont(void 0,"normal"),c+=7),v.status==="unmatched"?(n.setFillColor(255,240,240),n.rect(r,c,a,6,"F")):v.status==="ai-suggested"&&(n.setFillColor(255,248,230),n.rect(r,c,a,6,"F")),f=r,[v.specCode||"",`${v.name||""} ${v.finish?`(${v.finish})`:""}`.trim(),v.brand||"",((t=v.seimaProduct)==null?void 0:t.ProductName)||((o=v.seimaProduct)==null?void 0:o.Description)||"-",((s=v.seimaProduct)==null?void 0:s.OrderCode)||"-",v.status!=="unmatched"?v.aiConfidence||"Yes":"-"].forEach((E,k)=>{const R=n.splitTextToSize(String(E),h[k]-2);n.text(R[0]||"",f+1,c+4),f+=h[k]}),c+=7;const w=l!=null&&l.name?`substitution-schedule-${l.name.replace(/[^a-z0-9]/gi,"-").toLowerCase()}.pdf`:`substitution-schedule-${Date.now()}.pdf`;n.save(w)}catch(i){console.error("PDF export failed:",i),alert(`PDF export failed: ${i.message}`)}finally{e&&(e.disabled=!1,e.textContent="Export Substitution PDF")}}_escapeHtml(e){const t=document.createElement("div");return t.textContent=e||"",t.innerHTML}async parseCSV(e){if(typeof Papa>"u")try{await x.loadScript("https://cdn.jsdelivr.net/npm/papaparse@5.4.1/papaparse.min.js")}catch{throw new Error("Failed to load Papa Parse library")}return new Promise((t,o)=>{if(typeof Papa>"u"){o(new Error("Papa Parse library not loaded"));return}this.doPapaParseCSV(e,t,o)})}doPapaParseCSV(e,t,o){Papa.parse(e,{header:!0,skipEmptyLines:!1,complete:s=>{console.log("CSV parsing complete:",s);const{data:i,metadata:n}=this.extractSeimaMetadata(s.data);n&&(console.log("Extracted Seima Scanner metadata from CSV:",n),this.importedMetadata=n,this.populateCustomerInfoFromMetadata(n)),t(i)},error:s=>{console.error("CSV parsing error:",s),o(s)}})}extractSeimaMetadata(e){if(!Array.isArray(e)||e.length===0)return{data:e,metadata:null};let t=-1;for(let i=e.length-1;i>=0;i--){const n=e[i];if(Object.values(n).some(a=>a&&a.toString().includes("---METADATA---"))){t=i;break}}if(t===-1)return{data:e.filter(i=>this.isValidProductRow(i)),metadata:null};const o=e.slice(0,t).filter(i=>this.isValidProductRow(i));let s=null;if(t+1<e.length){const i=e[t+1],n=Object.values(i).filter(r=>r!=null&&r!=="");for(const r of n)if(r&&typeof r=="string"&&r.startsWith("{"))try{s=JSON.parse(r),console.log("Successfully parsed Seima metadata JSON from single cell");break}catch{console.log("Single cell JSON parse failed, trying to reconstruct from split cells...")}if(!s&&n.length>0){let r=n.findIndex(a=>a&&typeof a=="string"&&(a.startsWith("{")||a.startsWith('"{')));if(r!==-1){let a=n.slice(r).join(",");a=a.replace(/^"|"$/g,"");try{s=JSON.parse(a),console.log("Successfully parsed Seima metadata JSON from reconstructed cells")}catch(c){console.warn("Failed to parse reconstructed metadata JSON:",c),console.log("Reconstructed string was:",a);const l=a.match(/\{[^{}]*("_metadata"|"customer"|"project")[^]*\}/);if(l)try{s=JSON.parse(l[0]),console.log("Successfully parsed Seima metadata JSON using regex extraction")}catch(d){console.warn("Regex extraction also failed:",d)}}}}}return{data:o,metadata:s}}isValidProductRow(e){if(!e)return!1;const t=Object.values(e);return!(t.every(o=>!o||o.toString().trim()==="")||t.some(o=>o&&o.toString().includes("---METADATA---"))||t.some(o=>o&&o.toString().startsWith('{"_metadata"')))}populateCustomerInfoFromMetadata(e){var s,i,n,r,a,c;if(!e)return;const t=x.getStorageItem("pdfFormSettings",{}),o={...t,name:((s=e.customer)==null?void 0:s.name)||t.name||"",email:((i=e.customer)==null?void 0:i.email)||t.email||"",telephone:((n=e.customer)==null?void 0:n.phone)||t.telephone||"",project:((r=e.project)==null?void 0:r.name)||t.project||"",address:((a=e.project)==null?void 0:a.address)||t.address||"",projectNotes:((c=e.project)==null?void 0:c.notes)||t.projectNotes||""};e.staff&&x.setStorageItem("staffContact",{name:e.staff.name||"",email:e.staff.email||"",mobile:e.staff.mobile||""}),x.setStorageItem("pdfFormSettings",o),console.log("Customer information populated from Seima CSV metadata:",o)}async parseExcel(e){try{typeof XLSX>"u"&&await x.loadScript("https://cdn.jsdelivr.net/npm/xlsx@0.18.5/dist/xlsx.full.min.js")}catch{throw new Error("Failed to load XLSX library")}return new Promise((t,o)=>{if(typeof XLSX>"u"){o(new Error("XLSX library not loaded"));return}const s=new FileReader;s.onload=i=>{try{const n=new Uint8Array(i.target.result),r=XLSX.read(n,{type:"array"}),a=r.SheetNames[0],c=r.Sheets[a],l=XLSX.utils.sheet_to_json(c,{header:1,defval:""});if(l.length===0){o(new Error("Excel file is empty"));return}const d=l[0],m=l.slice(1).map(y=>{const f={};return d.forEach((S,w)=>{f[S]=y[w]||""}),f});console.log("Excel parsing complete:",m);const{data:p,metadata:h}=this.extractSeimaMetadata(m);h&&(console.log("Extracted Seima Scanner metadata from Excel:",h),this.importedMetadata=h,this.populateCustomerInfoFromMetadata(h)),t(p)}catch(n){console.error("Excel parsing error:",n),o(n)}},s.onerror=()=>{o(new Error("Failed to read Excel file"))},s.readAsArrayBuffer(e)})}async parseJSON(e){return new Promise((t,o)=>{const s=new FileReader;s.onload=i=>{try{let n=JSON.parse(i.target.result);console.log("JSON parsing complete, raw data:",n);let r=[];if(Array.isArray(n))if(n.length>0&&n[0].productsJson)for(const c of n){const l=this.extractProductsFromRecord(c);r.push(...l)}else r=n;else n&&typeof n=="object"&&(r=this.extractProductsFromRecord(n));if(r.length===0){o(new Error("No products found in JSON file. Expected Seima Scanner export format."));return}const a=r.map(c=>({Code:c.orderCode||c.OrderCode||c.code||c.Code||"",Description:c.description||c.Description||c.productName||c["Product Name"]||"",Quantity:c.quantity||c.Quantity||1,Room:c.room||c.Room||"Blank",Notes:c.notes||c.Notes||"","Price ea inc GST":c.priceIncGst||c.PriceIncGst||c.price||c.Price||"",_originalItem:c}));console.log("Normalized JSON data:",a),t(a)}catch(n){console.error("JSON parsing error:",n),o(new Error("Invalid JSON format: "+n.message))}},s.onerror=()=>{o(new Error("Failed to read JSON file"))},s.readAsText(e)})}extractProductsFromRecord(e){let t=e.productsJson||e.products||[];if(typeof t=="string")try{t=JSON.parse(t)}catch(o){return console.warn("Failed to parse productsJson string:",o),[]}return Array.isArray(t)?t:[]}async processDataChunked(e){if(e.length===0)throw new Error("No data to process");const t=this.detectColumns(e[0]);if(console.log("Detected column mapping:",t),t.productsJson){console.log("Detected Seima Scanner selection record format with Products JSON column"),await this.processSeimaSelectionRecords(e,t);return}if(!t.productCode)throw new Error('Could not find Product Code column. Please ensure your file has a column named like "Order Code", "Product Code", "SKU", or a "Products JSON" column for Seima Scanner exports.');this.processedData=[],this.notFoundProducts=[];const o=50;for(let s=0;s<e.length;s+=o){const i=e.slice(s,s+o);await this.processChunk(i,t),await new Promise(n=>setTimeout(n,10))}console.log("Processing complete. Processed:",this.processedData.length,"Not found:",this.notFoundProducts.length)}async processSeimaSelectionRecords(e,t){this.processedData=[],this.notFoundProducts=[],this.importedMetadata=null;for(const o of e){this.importedMetadata||(this.importedMetadata=this.extractMetadataFromRow(o,t),console.log("Extracted metadata from selection record:",this.importedMetadata),this.populateCustomerInfo(this.importedMetadata));const s=o[t.productsJson];if(!s){console.log("Skipping row - no Products JSON data");continue}let i=[];try{typeof s=="string"?i=JSON.parse(s):Array.isArray(s)&&(i=s)}catch(n){console.warn("Failed to parse Products JSON:",n,s);continue}if(!Array.isArray(i)||i.length===0){console.log("Skipping row - Products JSON is empty or invalid");continue}console.log(`Processing ${i.length} products from selection record`);for(const n of i)await this.processSeimaProduct(n)}console.log("Seima Scanner import complete. Processed:",this.processedData.length,"Not found:",this.notFoundProducts.length)}extractMetadataFromRow(e,t){return{customerName:e[t.customerName]||"",customerEmail:e[t.customerEmail]||"",customerPhone:e[t.customerPhone]||"",customerAddress:e[t.customerAddress]||"",customerProject:e[t.customerProject]||"",customerType:e[t.customerType]||"",builderName:e[t.builderName]||"",merchantProjectName:e[t.merchantProjectName]||"",projectNotes:e[t.projectNotes]||"",staffName:e[t.staffName]||"",staffEmail:e[t.staffEmail]||"",date:e[t.date]||"",time:e[t.time]||"",roomsList:e[t.roomsList]||"",estimateValue:e[t.estimateValue]||""}}async processSeimaProduct(e){const t=String(e.orderCode||e.OrderCode||e.code||"").trim(),o=e.description||e.Description||e.productName||"",s=parseInt(e.quantity||e.Quantity)||1,i=String(e.room||e.Room||"Blank").trim(),n=String(e.notes||e.Notes||"").trim(),r=e.priceIncGst||e.PriceIncGst||e.price||"";i&&i!=="Blank"&&this.ensureRoomExists(i);const a=this.validateProductCode(t);if(!a.isValid){console.log("Excluding product:",t,"-",a.reason);return}let c=0,l=0;if(r){const m=String(r).replace(/[^\d.-]/g,"");c=parseFloat(m)||0,l=c/1.1}console.log("Processing Seima product:",{productCode:t,productName:o,quantity:s,priceIncGst:c,room:i,notes:n});const d=await this.findProductInCatalog(t,o),u=this.createProductObject({productCode:t,productName:o,priceExGst:l,priceIncGst:c,catalogProduct:d});d||this.notFoundProducts.push({orderCode:t,productName:o||"Unknown Product",quantity:s,price:c>0?c.toFixed(2):"N/A"}),C.addProductToSelection(u,{notes:n,room:i,quantity:s}),this.processedData.push({...u,quantity:s,notes:n,room:i})}detectColumns(e){const t=Object.keys(e);console.log("Available headers:",t);const o=A.get("import.columnPatterns",{productCode:["code","ordercode","productcode","sku","order code","product code"],productName:["product name","description","name"],quantity:["quantity","qty","min order quantity","orderquantity"],priceIncGst:["price ea inc gst","price inc gst","priceincgst","rrp inc gst"],priceExGst:["price per unit","price ex gst","rrp ex gst"],room:["room","location"],group:["group","product group","category"],subGroup:["subgroup","sub group","type","sub category","subcategory"],notes:["notes","note","comments","comment"],productsJson:["products json","productsjson"],customerName:["customer name","customername"],customerEmail:["customer email","customeremail"],customerPhone:["customer phone","customerphone"],customerAddress:["customer address","customeraddress"],customerProject:["customer project","customerproject"]}),s=this.findColumnByPatterns(t,o.productsJson||["products json","productsjson"]);if(s)return console.log("Detected Seima Scanner selection record format with Products JSON column"),{productsJson:s,date:this.findColumnByPatterns(t,["date"]),time:this.findColumnByPatterns(t,["time"]),staffName:this.findColumnByPatterns(t,["staff name","staffname"]),staffEmail:this.findColumnByPatterns(t,["staff email","staffemail"]),customerName:this.findColumnByPatterns(t,o.customerName||["customer name","customername"]),customerEmail:this.findColumnByPatterns(t,o.customerEmail||["customer email","customeremail"]),customerPhone:this.findColumnByPatterns(t,o.customerPhone||["customer phone","customerphone"]),customerAddress:this.findColumnByPatterns(t,o.customerAddress||["customer address","customeraddress"]),customerProject:this.findColumnByPatterns(t,o.customerProject||["customer project","customerproject"]),customerType:this.findColumnByPatterns(t,["customer type","customertype"]),builderName:this.findColumnByPatterns(t,["builder name","buildername"]),merchantProjectName:this.findColumnByPatterns(t,["merchant project name","merchantprojectname"]),projectNotes:this.findColumnByPatterns(t,["project notes","projectnotes","about notes"]),roomsList:this.findColumnByPatterns(t,["rooms list","roomslist","rooms"]),estimateValue:this.findColumnByPatterns(t,["estimate value","estimatevalue"])};const i=t.some(c=>c.toLowerCase()==="code")&&!t.some(c=>c.toLowerCase().includes("ordercode"));console.log("Detected Seima Scanner CSV format:",i);const n=this.findColumnByPatterns(t,o.priceIncGst||["price ea inc gst","price inc gst","priceincgst","rrp inc gst"]),r=this.findColumnByPatterns(t,o.priceExGst||["price per unit","price ex gst","rrp ex gst"]),a=this.findColumnByPatterns(t,["adjusted amount","adjustedamount"]);return{productCode:this.findColumnByPatterns(t,o.productCode||["code","ordercode","productcode","sku"]),productName:this.findColumnByPatterns(t,o.productName||["product name","description","name"]),quantity:this.findColumnByPatterns(t,o.quantity||["quantity","qty"]),price:n||r,adjustedAmount:a,room:this.findColumnByPatterns(t,o.room||["room","location"]),group:this.findColumnByPatterns(t,o.group||["group","product group","category"]),subGroup:this.findColumnByPatterns(t,o.subGroup||["subgroup","sub group","type"]),notes:this.findColumnByPatterns(t,o.notes||["notes","note","comments"]),priceIncludesGst:i||!!n||t.some(c=>c.toLowerCase().includes("inc gst"))}}findColumnByPatterns(e,t){for(const o of t){const s=e.find(i=>i.toLowerCase().includes(o.toLowerCase()));if(s)return s}return null}async processChunk(e,t){for(const o of e)await this.processRow(o,t)}async processRow(e,t){const o=t.productCode?e[t.productCode]:"",s=t.productName?e[t.productName]:"",i=t.quantity?e[t.quantity]:"1",n=t.price?e[t.price]:"",r=t.room?String(e[t.room]||"").trim():"",a=t.group?String(e[t.group]||"").trim():"",c=t.subGroup?String(e[t.subGroup]||"").trim():"",l=t.notes?String(e[t.notes]||"").trim():"",d=String(o).trim(),u=this.validateProductCode(d);if(!u.isValid){console.log("Excluding row:",d,"-",u.reason);return}const m=Math.max(1,parseInt(i)||1);let p=0,h=0;if(t.adjustedAmount&&m>0){const w=e[t.adjustedAmount];h=(parseFloat(String(w).replace(/[^\d.-]/g,""))||0)/m,p=h*1.1}else if(n){const w=String(n).replace(/[^\d.-]/g,""),v=parseFloat(w)||0;v>0&&(t.priceIncludesGst?(p=v,h=v/1.1):(h=v,p=v*1.1))}const y=r||a||c||"Blank";console.log("Processing product:",{productCode:d,productName:s,quantity:m,priceIncGst:p,room:y,group:a,subGroup:c,notes:l});const f=await this.findProductInCatalog(d,s);y!=="Blank"&&this.ensureRoomExists(y);const S=this.createProductObject({productCode:d,productName:s,priceExGst:h,priceIncGst:p,catalogProduct:f,group:a,subGroup:c});f?console.log("Found product in catalog:",d):(console.log("Product not found in catalog:",d),this.notFoundProducts.push({orderCode:d,productName:s||"Unknown Product",quantity:m,price:p>0?p.toFixed(2):"N/A"})),C.addProductToSelection(S,{notes:l,room:y,quantity:m}),this.processedData.push({...S,quantity:m,notes:l,room:y})}async findProductInCatalog(e,t){var s;const o=_.getAllProducts();if(e){const i=String(e).trim(),n=o.find(r=>[r.OrderCode,r.orderCode,r["Order Code"],r.order_code].some(c=>c&&String(c).trim().toLowerCase()===i.toLowerCase()));if(n)return console.log("Found product in catalog by code:",i,n),n}if(t){const i=String(t).trim().toLowerCase(),n=o.find(r=>[r.productName,r["Product Name"],r.description,r.Description,r.LongDescription].some(c=>c&&String(c).trim().toLowerCase()===i));if(n)return console.log("Found product in catalog by name:",t,n),n}if(e&&P.isEnabled())try{const i=await P.findSeimaMatches(e);if(((s=i==null?void 0:i.matches)==null?void 0:s.length)>0){const n=i.matches[0],r=o.find(a=>String(a.OrderCode||"").trim()===String(n.SeimaSKU).trim());if(r)return console.log(`Crosshair: mapped ${e} (${i.competitor}) -> ${n.SeimaSKU}`),r}}catch(i){console.warn("Crosshair lookup failed for",e,i)}return console.log("Product not found in catalog:",{productCode:e,productName:t}),null}showImportResults(){this.showResultsStep();const e=document.getElementById("import-summary"),t=document.getElementById("not-found-products"),o=document.getElementById("not-found-list");if(e&&(e.innerHTML=`
        <p><strong>Total processed:</strong> ${this.processedData.length}</p>
        <p><strong>Products added:</strong> ${this.processedData.length}</p>
        <p style="color: #059669;"><strong>All products imported successfully!</strong></p>
      `),t&&o)if(this.notFoundProducts.length>0){const i=t.querySelector("h5");i&&(i.textContent="Products added with placeholder information:",i.style.color="#2563eb");const n=this.notFoundProducts.map(r=>`<li><strong>${r.orderCode}</strong> - ${r.productName} (Qty: ${r.quantity}, Price: ${r.price})</li>`).join("");o.innerHTML=`<ul>${n}</ul>`,t.style.display="block",t.style.borderColor="#2563eb",t.style.backgroundColor="#eff6ff"}else t.style.display="none";const s=document.getElementById("import-close-btn");s&&this.processedData.length>0&&(s.textContent="View Products",s.onclick=()=>{window.location.reload()}),console.log("Import results displayed")}populateCustomerInfo(e){if(!e)return;const t=x.getStorageItem("pdfFormSettings",{}),o={...t,name:e.customerName||t.name||"",project:e.customerProject||t.project||"",address:e.customerAddress||t.address||"",email:e.customerEmail||t.email||"",telephone:e.customerPhone||t.telephone||""};x.setStorageItem("pdfFormSettings",o),console.log("Customer information populated from import:",o)}validateProductCode(e){const t=String(e||"").trim();if(!t||t.toLowerCase()==="n/a")return{isValid:!1,reason:"Empty or N/A code"};const o=A.get("import.productCodeValidation",{regex:"^\\d{6}$",allowAnyNonEmpty:!1,skipValidation:!1});if(o.skipValidation)return{isValid:!0,reason:"Validation skipped"};try{if(new RegExp(o.regex).test(t))return{isValid:!0,reason:"Matches pattern"}}catch(s){console.warn("Invalid product code regex pattern:",o.regex,s)}return o.allowAnyNonEmpty?{isValid:!0,reason:"Non-empty code accepted"}:{isValid:!1,reason:`Does not match pattern: ${o.regex}`}}createProductObject({productCode:e,productName:t,priceExGst:o,priceIncGst:s,catalogProduct:i,group:n="",subGroup:r=""}){const a=o>0?o.toFixed(2):"",c=s>0?s.toFixed(2):"",l=i&&(i.RRP_EX||i.RRP_EXGST||i.rrpExGst||i["RRP EX GST"])||"",d=i&&(i.RRP_INCGST||i.rrpIncGst||i["RRP INC GST"])||"",u={OrderCode:e,orderCode:e,productName:t||(i?i.productName:"Unknown Product"),"Product Name":t||(i?i["Product Name"]:"Unknown Product"),Description:t||(i?i.Description:"Unknown Product"),description:t||(i?i.description:"Unknown Product"),LongDescription:i?i.LongDescription||i["Long Description"]:"","Long Description":i?i.LongDescription||i["Long Description"]:"",price:a||l||"0.00",Image_URL:i?i.Image_URL||i.imageUrl:"assets/no-image.png",imageUrl:i?i.Image_URL||i.imageUrl:"assets/no-image.png",Website_URL:i?i.Website_URL||i.websiteUrl:"",websiteUrl:i?i.Website_URL||i.websiteUrl:"",Diagram_URL:i?i.Diagram_URL||i.diagramUrl:"",diagramUrl:i?i.Diagram_URL||i.diagramUrl:"",Datasheet_URL:i?i.Datasheet_URL||i.datasheetUrl:"",datasheetUrl:i?i.Datasheet_URL||i.datasheetUrl:"",RRP_EX:a||l||"0.00",RRP_EXGST:a||l||"0.00",rrpExGst:a||l||"0.00",RRP_INCGST:c||d||"0.00",rrpIncGst:c||d||"0.00",Group:n||(i?i.Group:""),SubGroup:r||(i?i.SubGroup||i["Sub Group"]:""),"Sub Group":r||(i?i.SubGroup||i["Sub Group"]:"")};return o>0&&(u.UserEditedPrice=a),u}ensureRoomExists(e){!e||e==="Blank"||A.get("rooms.predefined",[]).some(n=>n.name===e)||C.getCustomRooms().some(n=>n.name===e)||(console.log("Adding imported room as custom room:",e),C.addCustomRoom(e))}}class $o{constructor(){var e,t,o,s;this.isEnabled=(e=F.PRESENTATION_RECORDING)==null?void 0:e.ENABLED,this.googleSheetsUrl=(t=F.PRESENTATION_RECORDING)==null?void 0:t.GOOGLE_SHEETS_URL,this.retryAttempts=(o=F.PRESENTATION_RECORDING)==null?void 0:o.RETRY_ATTEMPTS,this.retryDelay=(s=F.PRESENTATION_RECORDING)==null?void 0:s.RETRY_DELAY,this.currentSelectionId=null}configure(e){this.googleSheetsUrl=e,console.log("📊 Presentation recorder configured with Google Sheets URL")}getStaffContact(){const e=L.getCurrentUser();if(console.log("🔐 Auth user for save:",e),e&&e.email)return console.log("✅ Using authenticated user email:",e.email),{name:e.name||"",email:e.email,mobile:e.phone||""};console.warn("⚠️ No authenticated user, falling back to settings");try{const t=localStorage.getItem("staffContact");if(t){const o=JSON.parse(t);return console.log("📋 Using settings email:",o.email),o}}catch(t){console.warn("Could not load staff contact:",t)}return{name:"",email:"",mobile:""}}async saveSelection(e){if(!this.isEnabled||!this.googleSheetsUrl)return console.log("📊 Presentation recording disabled or not configured"),{success:!1,reason:"not_configured"};try{const t=this.prepareSelectionData(e);t.action="savePresenterSelection",console.log("📧 Saving with staff email:",t.staffEmail);const o=await this.sendToGoogleSheets(t);if(console.log("📊 Google Sheets response:",o),o.success)return console.log("✅ Presentation saved successfully with ID:",o.id),this.currentSelectionId=o.id,{success:!0,id:o.id,data:t};throw new Error(o.error||"Failed to save presentation")}catch(t){return console.error("❌ Failed to save presentation:",t),{success:!1,error:t.message}}}async updateSelection(e,t){if(!this.isEnabled||!this.googleSheetsUrl)return console.log("📊 Presentation recording disabled or not configured"),{success:!1,reason:"not_configured"};if(!e)return{success:!1,error:"No selection ID provided for update"};try{const o=this.prepareSelectionData(t);o.action="updatePresenterSelection",o.id=e;const s=await this.sendToGoogleSheets(o);if(s.success)return console.log("✅ Presentation updated successfully:",e),{success:!0,id:e,updated:!0};throw new Error(s.error||"Failed to update presentation")}catch(o){return console.error("❌ Failed to update presentation:",o),{success:!1,error:o.message}}}prepareSelectionData(e){const t=new Date,o=this.getStaffContact(),s=e.gridRows||C.getSelectedProducts()||[],i=s.filter(d=>d.product).length,n=s.reduce((d,u)=>d+(parseInt(u.quantity)||1),0),r=[...new Set(s.map(d=>d.room).filter(Boolean))],a=this.calculateEstimatedValue(s);let c=[];try{const d=localStorage.getItem("customRoomOrder");d&&(c=JSON.parse(d))}catch(d){console.warn("Could not load room order:",d)}const l=e.pdfSettings||{};return{date:t.toLocaleDateString("en-AU"),time:t.toLocaleTimeString("en-AU",{hour:"2-digit",minute:"2-digit",hour12:!1}),appVersion:F.VERSION,staffName:o.name||e.staffName||"",staffEmail:o.email||e.staffEmail||"",staffMobile:this.formatPhoneNumber(o.mobile||e.staffMobile),customerName:e.customerName||"",customerEmail:e.customerEmail||"",customerPhone:this.formatPhoneNumber(e.customerPhone),customerProject:e.customerProject||"",customerAddress:e.customerAddress||"",documentName:e.documentName||`${e.customerName||"Selection"} - ${t.toLocaleDateString("en-AU")}`,notes:e.notes||"",productsJson:JSON.stringify(s.map(d=>{var u;return{id:d.id,product:d.product?{OrderCode:d.product.OrderCode||"",Description:d.product.Description||"",RRP_INCGST:d.product.RRP_INCGST||"0.00",RRP_EX:d.product.RRP_EX||"0.00",Image_URL:d.product.Image_URL||"",Diagram_URL:d.product.Diagram_URL||"",Website_URL:d.product.Website_URL||"",BARCODE:d.product.BARCODE||"",...d.product._placeholder?{_placeholder:!0}:{},...d.product._crossHintCache&&d.product._crossHintCache.v===1?{_crossHintCache:d.product._crossHintCache}:{}}:null,quantity:d.quantity||1,room:d.room||"",notes:d.notes||"",price:d.price||((u=d.product)==null?void 0:u.RRP_EX)||"0.00"}})),roomOrderJson:JSON.stringify(c),pdfSettingsJson:JSON.stringify(l),totalProducts:i,totalQuantity:n,totalRooms:r.length,roomsList:r.join(", "),estimatedValue:a}}calculateEstimatedValue(e){let t=0;return e.forEach(o=>{var r,a;if(!o.product)return;const s=parseInt(o.quantity)||1,i=o.price||((r=o.product)==null?void 0:r.RRP_INCGST)||((a=o.product)==null?void 0:a.RRP_EX)||"0",n=parseFloat(i.toString().replace(/[^0-9.]/g,""))||0;t+=n*s}),t.toFixed(2)}formatPhoneNumber(e){if(!e)return"";let t=String(e).trim();return t.startsWith("'")&&(t=t.substring(1)),/^4\d{8}$/.test(t)&&(t="0"+t),"'"+t}async sendToGoogleSheets(e,t=1){try{const o=new URLSearchParams;o.append("data",JSON.stringify(e)),console.log("📊 Sending to Google Sheets:",this.googleSheetsUrl);const s=await fetch(this.googleSheetsUrl,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:o});if(console.log("📊 Response status:",s.status,s.statusText),!s.ok)throw new Error(`HTTP ${s.status}: ${s.statusText}`);const i=await s.text();console.log("📊 Raw response:",i);try{return JSON.parse(i)}catch(n){return console.error("📊 Failed to parse JSON response:",n),{success:!1,error:"Invalid JSON response",raw:i}}}catch(o){return console.error(`📊 Attempt ${t} failed:`,o),t<this.retryAttempts?(console.log(`📊 Retrying in ${this.retryDelay}ms... (attempt ${t+1}/${this.retryAttempts})`),await new Promise(s=>setTimeout(s,this.retryDelay)),this.sendToGoogleSheets(e,t+1)):{success:!1,error:o.message}}}async testConnection(){if(!this.googleSheetsUrl)return{success:!1,error:"No Google Sheets URL configured"};try{const e=new URL(this.googleSheetsUrl);e.searchParams.append("action","getPresenterSelections"),e.searchParams.append("staffEmail","");const t=await fetch(e.toString(),{method:"GET",headers:{Accept:"application/json"}});if(!t.ok)throw new Error(`HTTP ${t.status}`);return{success:!0,message:"Connection successful",result:await t.json()}}catch(e){return{success:!1,error:e.message}}}getCurrentSelectionId(){return this.currentSelectionId}setCurrentSelectionId(e){this.currentSelectionId=e}clearCurrentSelectionId(){this.currentSelectionId=null}hasLoadedSelection(){return this.currentSelectionId!==null}setEnabled(e){this.isEnabled=e,console.log(`📊 Presentation recording ${e?"enabled":"disabled"}`)}}const be=new $o;class Bo{constructor(){var e;this.googleSheetsUrl=(e=F.PRESENTATION_RECORDING)==null?void 0:e.GOOGLE_SHEETS_URL,this.cachedSelections=null,this.cacheTimestamp=null,this.cacheDuration=5*60*1e3}getStaffEmail(){const e=L.getCurrentUser();if(console.log("🔐 Auth user for load:",e),e&&e.email)return console.log("✅ Filtering by authenticated user email:",e.email),e.email;console.warn("⚠️ No authenticated user for filtering");try{const t=localStorage.getItem("staffContact");if(t){const o=JSON.parse(t);return console.log("📋 Fallback to settings email:",o.email),o.email||""}}catch(t){console.warn("Could not load staff email:",t)}return""}clearCache(){this.cachedSelections=null,this.cacheTimestamp=null,console.log("🗑️ Selections cache cleared")}async fetchSelections(e=!1,t=!1){if(!this.googleSheetsUrl)return console.error("❌ Google Sheets URL not configured"),[];if(!t&&!e&&this.cachedSelections&&this.cacheTimestamp&&Date.now()-this.cacheTimestamp<this.cacheDuration)return console.log("📊 Using cached selections"),this.cachedSelections;try{const o=this.getStaffEmail();console.log(`📊 Fetching ${e?"deleted":""} selections for: ${o||"all users"}`);const s=new URL(this.googleSheetsUrl);s.searchParams.append("action","getPresenterSelections"),s.searchParams.append("staffEmail",o),e&&s.searchParams.append("deletedOnly","true");const i=await fetch(s.toString(),{method:"GET",headers:{Accept:"application/json"}});if(!i.ok)throw new Error(`HTTP ${i.status}: ${i.statusText}`);const n=await i.json();if(n.success&&n.selections)return console.log(`✅ Fetched ${n.selections.length} selections`),e||(this.cachedSelections=n.selections,this.cacheTimestamp=Date.now()),n.selections;throw new Error(n.error||"Failed to fetch selections")}catch(o){return console.error("❌ Error fetching selections:",o),[]}}clearCache(){this.cachedSelections=null,this.cacheTimestamp=null}searchSelections(e,t){if(!t||t.trim()==="")return e;const o=t.toLowerCase().trim();return e.filter(s=>{const i=(s.customerName||"").toLowerCase(),n=(s.customerProject||"").toLowerCase(),r=(s.documentName||"").toLowerCase(),a=(s.date||"").toLowerCase();return i.includes(o)||n.includes(o)||r.includes(o)||a.includes(o)})}sortByDateDescending(e){return[...e].sort((t,o)=>{try{const s=this.parseDateValue(t.lastModified||t.date,t.time);return this.parseDateValue(o.lastModified||o.date,o.time)-s}catch{return 0}})}parseDateValue(e,t=""){if(!e)return new Date(0);if(e.includes("T"))return new Date(e);const o=e.toString().split("/");if(o.length===3){const s=parseInt(o[0]),i=parseInt(o[1])-1,n=parseInt(o[2]);if(t){const r=t.replace(/[AP]M/i,"").trim().split(":"),a=parseInt(r[0])||0,c=parseInt(r[1])||0,l=t.toUpperCase().includes("PM");return new Date(n,i,s,l&&a!==12?a+12:a,c)}return new Date(n,i,s)}return new Date(0)}async loadSelection(e,t="replace"){try{console.log(`📊 Loading selection: ${e.id} (mode: ${t})`);let o=[];try{o=JSON.parse(e.productsJson||"[]")}catch(r){return console.error("Failed to parse products JSON:",r),{success:!1,error:"Invalid products data"}}let s=[];try{s=JSON.parse(e.roomOrderJson||"[]")}catch(r){console.warn("Could not parse room order:",r)}let i={};try{i=JSON.parse(e.pdfSettingsJson||"{}")}catch(r){console.warn("Could not parse PDF settings:",r)}const n=await this.enrichProductsWithCatalog(o);if(t==="replace"){C.clearAllSelections();const r={name:e.customerName||"",email:e.customerEmail||"",phone:this.cleanPhoneNumber(e.customerPhone),project:e.customerProject||"",address:e.customerAddress||""};localStorage.setItem("customerDetails",JSON.stringify(r));const a={name:e.customerName||"",email:e.customerEmail||"",telephone:this.cleanPhoneNumber(e.customerPhone),project:e.customerProject||"",address:e.customerAddress||""};localStorage.setItem("pdfFormSettings",JSON.stringify(a)),s.length>0&&localStorage.setItem("customRoomOrder",JSON.stringify(s)),Object.keys(i).length>0&&localStorage.setItem("pdfSettings",JSON.stringify(i)),n.forEach(c=>{if(c.product){const l={...c.product};c.price&&(l.UserEditedPrice=c.price),C.addProductToSelection(l,{notes:c.notes||"",room:c.room||"",quantity:c.quantity||1})}})}else t==="merge"&&n.forEach(r=>{if(r.product&&!C.getSelectedProducts().some(l=>{var d;return((d=l.product)==null?void 0:d.OrderCode)===r.product.OrderCode&&l.room===r.room})){const l={...r.product};r.price&&(l.UserEditedPrice=r.price),C.addProductToSelection(l,{notes:r.notes||"",room:r.room||"",quantity:r.quantity||1})}});return be.setCurrentSelectionId(e.id),console.log(`✅ Loaded ${n.length} products`),{success:!0,id:e.id,documentName:e.documentName,customerName:e.customerName,customerProject:e.customerProject,productCount:n.length,roomOrder:s,customerDetails:{name:e.customerName,email:e.customerEmail,phone:this.cleanPhoneNumber(e.customerPhone),project:e.customerProject,address:e.customerAddress},mode:t}}catch(o){return console.error("❌ Error loading selection:",o),{success:!1,error:o.message}}}async enrichProductsWithCatalog(e){const t=[];for(const o of e){if(!o.product){t.push(o);continue}const s=o.product.OrderCode||o.product.orderCode;if(s){const i=_.findProductByCode(s);i?t.push({id:o.id||`row_${Date.now()}_${Math.random().toString(36).substr(2,9)}`,product:i,quantity:o.quantity||1,room:o.room||"",notes:o.notes||"",price:o.price||i.RRP_EX||"0.00"}):(console.warn(`Product ${s} not found in catalog, using saved data`),t.push({id:o.id||`row_${Date.now()}_${Math.random().toString(36).substr(2,9)}`,product:{OrderCode:s,Description:o.product.Description||o.product.description||"Unknown Product",RRP_INCGST:o.product.RRP_INCGST||o.product.rrpIncGst||"0.00",RRP_EX:o.product.RRP_EX||o.product.rrpEx||"0.00",Image_URL:o.product.Image_URL||o.product.imageUrl||"",Diagram_URL:o.product.Diagram_URL||"",Website_URL:o.product.Website_URL||"",BARCODE:o.product.BARCODE||"",_notInCatalog:!0},quantity:o.quantity||1,room:o.room||"",notes:o.notes||"",price:o.price||o.product.RRP_EX||"0.00"}))}else t.push({id:o.id||`row_${Date.now()}_${Math.random().toString(36).substr(2,9)}`,product:{...o.product,_placeholder:o.product._placeholder!==!1},quantity:o.quantity||1,room:o.room||"",notes:o.notes||"",price:o.price||"0.00"})}return t}cleanPhoneNumber(e){if(!e)return"";let t=String(e).trim();return t.startsWith("'")&&(t=t.substring(1)),t}async deleteSelections(e){if(!this.googleSheetsUrl)return{success:!1,error:"Not configured"};try{const t=new URLSearchParams;t.append("data",JSON.stringify({action:"deletePresenterSelections",ids:e}));const s=await(await fetch(this.googleSheetsUrl,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:t})).json();return s.success&&this.clearCache(),s}catch(t){return{success:!1,error:t.message}}}async restoreSelections(e){if(!this.googleSheetsUrl)return{success:!1,error:"Not configured"};try{const t=new URLSearchParams;t.append("data",JSON.stringify({action:"restorePresenterSelections",ids:e}));const s=await(await fetch(this.googleSheetsUrl,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:t})).json();return s.success&&this.clearCache(),s}catch(t){return{success:!1,error:t.message}}}}const ye=new Bo;class Ao{constructor(){this.isVisible=!1,this.allSelections=[],this.filteredSelections=[],this.currentSearchQuery="",this.onLoadCallback=null,this.selectedItems=new Set,this.showDeletedMode=!1}async show(e){console.log("📂 PresentationPicker.show() called");try{this.onLoadCallback=e,this.selectedItems.clear(),this.showDeletedMode=!1,this.createModalHTML(),this.attachEventListeners(),this.isVisible=!0,console.log("📂 Modal created, fetching selections..."),this.setLoadingState(!0),await this.fetchAndRenderSelections(),console.log("📂 Picker ready")}catch(t){throw console.error("❌ PresentationPicker.show() error:",t),t}}async fetchAndRenderSelections(){this.setLoadingState(!0),this.selectedItems.clear();try{this.allSelections=await ye.fetchSelections(this.showDeletedMode,!0),this.allSelections=ye.sortByDateDescending(this.allSelections),this.filterAndRender()}catch(e){console.error("Error fetching selections:",e),this.showError("Failed to load selections. Please try again.")}finally{this.setLoadingState(!1)}}hide(){const e=document.getElementById("presentation-picker-modal");e&&e.remove(),this.isVisible=!1}createModalHTML(){const e=document.getElementById("presentation-picker-modal");e&&e.remove();const t=`
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
    `)}attachEventListeners(){var t,o,s,i,n;const e=document.getElementById("presentation-picker-modal");e&&((t=document.getElementById("picker-close-btn"))==null||t.addEventListener("click",()=>this.hide()),e.addEventListener("click",r=>{r.target===e&&this.hide()}),(o=document.getElementById("picker-search"))==null||o.addEventListener("input",r=>{this.currentSearchQuery=r.target.value,this.filterAndRender()}),(s=document.getElementById("picker-show-deleted"))==null||s.addEventListener("change",r=>{this.showDeletedMode=r.target.checked,this.fetchAndRenderSelections()}),(i=document.getElementById("picker-refresh"))==null||i.addEventListener("click",()=>{ye.clearCache(),this.fetchAndRenderSelections()}),(n=document.getElementById("picker-retry-btn"))==null||n.addEventListener("click",()=>{this.fetchAndRenderSelections()}),document.addEventListener("keydown",this.handleKeyDown.bind(this)))}handleKeyDown(e){e.key==="Escape"&&this.isVisible&&this.hide()}setLoadingState(e){const t=document.getElementById("picker-loading"),o=document.getElementById("picker-table"),s=document.getElementById("picker-empty"),i=document.getElementById("picker-error");e?(t&&(t.style.display="flex"),o&&(o.style.display="none"),s&&(s.style.display="none"),i&&(i.style.display="none")):t&&(t.style.display="none")}showError(e){const t=document.getElementById("picker-error"),o=document.getElementById("picker-error-message"),s=document.getElementById("picker-table"),i=document.getElementById("picker-empty");o&&(o.textContent=e),t&&(t.style.display="flex"),s&&(s.style.display="none"),i&&(i.style.display="none")}filterAndRender(){this.filteredSelections=ye.searchSelections(this.allSelections,this.currentSearchQuery),this.renderTable()}renderTable(){const e=document.getElementById("picker-table"),t=document.getElementById("picker-empty"),o=document.getElementById("picker-footer"),s=document.getElementById("picker-table-body");if(!s)return;if(this.filteredSelections.length===0){e&&(e.style.display="none"),t&&(t.style.display="flex"),o&&(o.style.display="none");return}e&&(e.style.display="table"),t&&(t.style.display="none"),o&&(o.style.display="flex"),s.innerHTML=this.filteredSelections.map((n,r)=>`
      <tr data-index="${r}" data-id="${n.id}">
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
          <button class="picker-load-btn" data-action="load" data-index="${r}">Load</button>
          ${this.showDeletedMode?`<button class="picker-delete-btn" data-action="restore" data-index="${r}" style="color: #059669; border-color: #059669;">Restore</button>`:`<button class="picker-delete-btn" data-action="delete" data-index="${r}">Delete</button>`}
        </td>
      </tr>
    `).join("");const i=document.getElementById("picker-selection-count");i&&(i.textContent=`${this.filteredSelections.length} selection${this.filteredSelections.length!==1?"s":""}`),this.attachRowEventListeners()}attachRowEventListeners(){const e=document.getElementById("picker-table-body");e&&(e.querySelectorAll("button[data-action]").forEach(t=>{t.addEventListener("click",o=>{o.stopPropagation();const s=t.dataset.action,i=parseInt(t.dataset.index),n=this.filteredSelections[i];s==="load"?this.showLoadConfirmation(n):s==="delete"?this.confirmDelete(n):s==="restore"&&this.restoreSelection(n)})}),e.querySelectorAll("tr").forEach(t=>{t.addEventListener("click",o=>{if(o.target.closest("button"))return;const s=parseInt(t.dataset.index),i=this.filteredSelections[s];this.showLoadConfirmation(i)})}))}showLoadConfirmation(e){const t=C.getSelectedProducts();if(!(t&&t.length>0)){this.loadSelection(e,"replace");return}const s=`
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
    `;document.body.insertAdjacentHTML("beforeend",s);const i=document.getElementById("picker-confirm-dialog");i.querySelectorAll("button[data-action]").forEach(n=>{n.addEventListener("click",()=>{const r=n.dataset.action;i.remove(),r==="replace"?this.loadSelection(e,"replace"):r==="merge"&&this.loadSelection(e,"merge")})}),i.addEventListener("click",n=>{n.target===i&&i.remove()})}async loadSelection(e,t){try{this.setLoadingState(!0);const o=await ye.loadSelection(e,t);o.success?(this.hide(),this.showToast(`Loaded ${o.productCount} products (${t})`),this.onLoadCallback&&this.onLoadCallback(o)):this.showError(o.error||"Failed to load selection")}catch(o){this.showError(o.message)}finally{this.setLoadingState(!1)}}async confirmDelete(e){if(confirm(`Delete selection for "${e.customerName||"Unknown"}"?

This can be restored later.`))try{const t=await ye.deleteSelections([e.id]);t.success?(this.showToast("Selection deleted"),this.fetchAndRenderSelections()):this.showError(t.error||"Failed to delete")}catch(t){this.showError(t.message)}}async restoreSelection(e){try{const t=await ye.restoreSelections([e.id]);t.success?(this.showToast("Selection restored"),this.fetchAndRenderSelections()):this.showError(t.error||"Failed to restore")}catch(t){this.showError(t.message)}}showToast(e){const t=document.createElement("div");t.style.cssText=`
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
    `,t.textContent=e,document.body.appendChild(t),setTimeout(()=>{t.style.animation="toast-out 0.3s ease",setTimeout(()=>t.remove(),300)},3e3)}formatDate(e){if(!e)return"-";if(/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(e))return e;try{const t=new Date(e);if(!isNaN(t.getTime())&&t.getFullYear()>1900)return t.toLocaleDateString("en-AU")}catch{}return e}formatTime(e){if(!e)return"";const t=e.match(/(\d{1,2}):(\d{2})(?::\d{2})?\s*(AM|PM)?/i);if(t){let o=parseInt(t[1]);const s=t[2],i=(t[3]||"").toUpperCase();return i==="PM"&&o!==12?o+=12:i==="AM"&&o===12&&(o=0),`${o.toString().padStart(2,"0")}:${s}`}return e}formatValue(e){return(parseFloat(e)||0).toLocaleString("en-AU",{minimumFractionDigits:2,maximumFractionDigits:2})}escapeHtml(e){const t=document.createElement("div");return t.textContent=e||"",t.innerHTML}}const Tt=new Ao,vt="pdfWizardSettings",bt="tipTailSettings",Ue="customerLogo";class Fo{constructor(){this.wizardData=this.getDefaultData(),this.availableTipPdfs=[],this.availableTailPdfs=[],this.customTipPdf=null,this.customTailPdf=null,this.onComplete=null,this.onCancel=null}getDefaultData(){return{customer:{name:"",project:"",address:"",email:"",phone:"",logo:null},options:{showRrp:!1,includeGst:!1,noPricing:!1,noQty:!1,includeDescriptions:!0,includeNotes:!0},customise:{tipPdf:"",tailPdf:""}}}async open(e={}){this.onComplete=e.onComplete||null,this.onCancel=e.onCancel||null;try{const o=await(await fetch("./screens/pdf-wizard.html")).text(),s=document.createElement("div");s.id="pdf-wizard-container",s.innerHTML=o,document.body.appendChild(s),await this.loadSavedSettings(),await this.discoverAvailablePdfs(),this.setupEventHandlers(),this.populateForm(),console.log("✅ PDF Wizard opened"),this.startImagePreloading()}catch(t){console.error("Failed to open PDF wizard:",t)}}close(){const e=document.getElementById("pdf-wizard-container");e&&e.remove(),this.onCancel&&this.onCancel()}startImagePreloading(){const e=C.getSelectedProducts();if(!e||e.length===0){console.log("📷 No products to preload");return}const t=e.map(o=>{const s=o.product||{};return Te({...s,Image_URL:s.Image_URL||s.imageUrl||s["Image URL"]||"",Diagram_URL:s.Diagram_URL||s.diagramUrl||s["Diagram URL"]||""})});console.log(`📷 Starting background preload for ${t.length} products...`),_t(t).then(o=>{console.log(`✅ Preloaded ${o} images - ready for PDF generation`)}).catch(o=>{console.warn("Image preloading error:",o)})}async loadSavedSettings(){const e=x.getStorageItem(vt,null);if(e){const s=this.getDefaultData();this.wizardData={...s,...e,customer:{...s.customer,...e.customer||{}},options:{...s.options,...e.options||{}},customise:{...s.customise,...e.customise||{}}}}const t=x.getStorageItem("pdfFormSettings",{});t.name&&(this.wizardData.customer.name=t.name),t.project&&(this.wizardData.customer.project=t.project),t.address&&(this.wizardData.customer.address=t.address),t.email&&(this.wizardData.customer.email=t.email),t.telephone&&(this.wizardData.customer.phone=t.telephone);try{const{get:s}=await M(async()=>{const{get:n}=await import("./vendor-idb-DwnyWBFG.js");return{get:n}},[]),i=await s(Ue);i&&(this.wizardData.customer.logo=i)}catch{}localStorage.removeItem(Ue);const o=x.getStorageItem(bt,{});o.tipAsset&&(this.wizardData.customise.tipPdf=o.tipAsset),o.tailAsset&&(this.wizardData.customise.tailPdf=o.tailAsset)}async discoverAvailablePdfs(){try{let e=[];try{const t=await fetch("./assets-list.json");t.ok&&(e=await t.json())}catch{}e.length===0&&(e=["tip-AandD.pdf","tip-Builder.pdf","tip-Merchant.pdf","tip-Volume Merchant.pdf","tail-generic.pdf"]),this.availableTipPdfs=e.filter(t=>t.toLowerCase().startsWith("tip-")),this.availableTailPdfs=e.filter(t=>t.toLowerCase().startsWith("tail-")),this.renderPdfOptions()}catch(e){console.error("Failed to discover PDFs:",e)}}renderPdfOptions(){const e=document.getElementById("tip-pdf-grid");if(e){const o=this.wizardData.customise.tipPdf||"",s=o&&o!==""&&o!=="__custom__";let i=`
        <label class="option-card${s?"":" selected"}" data-tip="none">
          <input type="radio" name="tipPdf" value="" ${s?"":"checked"} style="display: none;">
          <div class="option-card-icon">✕</div>
          <span class="option-card-title">None</span>
        </label>
      `;this.availableTipPdfs.forEach(n=>{const r=n.replace("tip-","").replace(".pdf",""),a=o===`./assets/${n}`;i+=`
          <label class="option-card${a?" selected":""}" data-tip="${n}">
            <input type="radio" name="tipPdf" value="./assets/${n}" ${a?"checked":""} style="display: none;">
            <div class="option-card-icon">📄</div>
            <span class="option-card-title">${r}</span>
          </label>
        `}),e.innerHTML=i,e.querySelectorAll(".option-card").forEach(n=>{n.addEventListener("click",()=>{var a;this.customTipPdf=null,document.getElementById("tip-custom-preview").style.display="none",document.getElementById("tip-upload-link").style.display="",e.querySelectorAll(".option-card").forEach(c=>c.classList.remove("selected")),n.classList.add("selected");const r=n.querySelector("input");r&&(r.checked=!0),this.wizardData.customise.tipPdf=((a=n.querySelector("input"))==null?void 0:a.value)||"",this.saveSettings()})})}const t=document.getElementById("tail-pdf-grid");if(t){const o=this.wizardData.customise.tailPdf||"",s=o&&o!==""&&o!=="__custom__";let i=`
        <label class="option-card${s?"":" selected"}" data-tail="none">
          <input type="radio" name="tailPdf" value="" ${s?"":"checked"} style="display: none;">
          <div class="option-card-icon">✕</div>
          <span class="option-card-title">None</span>
        </label>
      `;this.availableTailPdfs.forEach(n=>{const r=n.replace("tail-","").replace(".pdf",""),a=o===`./assets/${n}`;i+=`
          <label class="option-card${a?" selected":""}" data-tail="${n}">
            <input type="radio" name="tailPdf" value="./assets/${n}" ${a?"checked":""} style="display: none;">
            <div class="option-card-icon">📄</div>
            <span class="option-card-title">${r}</span>
          </label>
        `}),t.innerHTML=i,t.querySelectorAll(".option-card").forEach(n=>{n.addEventListener("click",()=>{var a;this.customTailPdf=null,document.getElementById("tail-custom-preview").style.display="none",document.getElementById("tail-upload-link").style.display="",t.querySelectorAll(".option-card").forEach(c=>c.classList.remove("selected")),n.classList.add("selected");const r=n.querySelector("input");r&&(r.checked=!0),this.wizardData.customise.tailPdf=((a=n.querySelector("input"))==null?void 0:a.value)||"",this.saveSettings()})})}}setupEventHandlers(){var e,t,o;(e=document.getElementById("wizard-close"))==null||e.addEventListener("click",()=>this.close()),(t=document.getElementById("wizard-cancel"))==null||t.addEventListener("click",()=>this.close()),(o=document.getElementById("wizard-generate"))==null||o.addEventListener("click",s=>{s.preventDefault(),this.generatePdf()}),this.setupFormHandlers(),this.setupOptionCardHandlers(),this.setupLogoUpload(),this.setupPdfUploads()}setupFormHandlers(){document.querySelectorAll('#pdf-wizard input[type="text"], #pdf-wizard input[type="email"], #pdf-wizard input[type="tel"]').forEach(o=>{o.addEventListener("blur",()=>{this.collectFormData(),this.saveSettings()})}),document.querySelectorAll("#pdf-wizard .form-checkbox").forEach(o=>{const s=o.querySelector('input[type="checkbox"]');s&&(o.addEventListener("click",i=>{i.target.tagName==="SPAN"&&(s.checked=!s.checked,s.dispatchEvent(new Event("change",{bubbles:!0})))}),s.addEventListener("change",()=>{this.collectFormData(),this.saveSettings()}))})}setupOptionCardHandlers(){const e=document.getElementById("show-rrp"),t=document.getElementById("include-gst"),o=document.getElementById("no-pricing"),s=document.getElementById("no-qty");o&&o.addEventListener("change",()=>{const i=o.checked;this.wizardData.options.noPricing=i,i?(e&&(e.checked=!1,e.disabled=!0,e.parentElement.style.opacity="0.5",this.wizardData.options.showRrp=!1),t&&(t.checked=!1,t.disabled=!0,t.parentElement.style.opacity="0.5",this.wizardData.options.includeGst=!1)):(e&&(e.disabled=!1,e.parentElement.style.opacity="1"),t&&(t.disabled=!1,t.parentElement.style.opacity="1")),this.saveSettings()}),e&&e.addEventListener("change",()=>{this.wizardData.options.showRrp=e.checked,this.saveSettings()}),t&&t.addEventListener("change",()=>{this.wizardData.options.includeGst=t.checked,this.saveSettings()}),s&&s.addEventListener("change",()=>{this.wizardData.options.noQty=s.checked,this.saveSettings()})}setupLogoUpload(){const e=document.getElementById("logo-upload-zone"),t=document.getElementById("customer-logo-input"),o=document.getElementById("logo-preview-container"),s=document.getElementById("logo-preview-img"),i=document.getElementById("remove-logo-btn");e&&t&&(e.onclick=()=>t.click(),e.ondragover=n=>{n.preventDefault(),e.style.borderColor="var(--color-copper)"},e.ondragleave=()=>{e.style.borderColor=""},e.ondrop=n=>{n.preventDefault(),e.style.borderColor="",n.dataTransfer.files.length>0&&this.handleLogoFile(n.dataTransfer.files[0])},t.onchange=n=>{n.target.files.length>0&&this.handleLogoFile(n.target.files[0])}),i&&(i.onclick=async()=>{this.wizardData.customer.logo=null;try{const{del:n}=await M(async()=>{const{del:r}=await import("./vendor-idb-DwnyWBFG.js");return{del:r}},[]);await n(Ue)}catch{}o&&(o.style.display="none"),e&&(e.style.display="")}),this.wizardData.customer.logo&&s&&o&&(s.src=this.wizardData.customer.logo,o.style.display="block",e&&(e.style.display="none"))}handleLogoFile(e){if(!e.type.startsWith("image/")){alert("Please select an image file");return}if(e.size>2*1024*1024){alert("File size must be less than 2MB");return}const t=new FileReader;t.onload=async o=>{this.wizardData.customer.logo=o.target.result;try{const{set:r}=await M(async()=>{const{set:a}=await import("./vendor-idb-DwnyWBFG.js");return{set:a}},[]);await r(Ue,o.target.result)}catch{}const s=document.getElementById("logo-preview-container"),i=document.getElementById("logo-preview-img"),n=document.getElementById("logo-upload-zone");i&&(i.src=o.target.result),s&&(s.style.display="block"),n&&(n.style.display="none")},t.readAsDataURL(e)}setupPdfUploads(){const e=document.getElementById("tip-upload-link"),t=document.getElementById("tip-pdf-input"),o=document.getElementById("tip-custom-preview"),s=document.getElementById("tip-custom-name"),i=document.getElementById("remove-tip-btn");e&&t&&(e.onclick=d=>{d.preventDefault(),t.click()},t.onchange=d=>{d.target.files.length>0&&(this.customTipPdf=d.target.files[0],s&&(s.textContent=this.customTipPdf.name),o&&(o.style.display="flex"),e&&(e.style.display="none"),document.querySelectorAll("#tip-pdf-grid .option-card").forEach(u=>u.classList.remove("selected")),this.wizardData.customise.tipPdf="__custom__")}),i&&(i.onclick=()=>{this.customTipPdf=null,o&&(o.style.display="none"),t&&(t.value=""),e&&(e.style.display="");const d=document.querySelector('#tip-pdf-grid [data-tip="none"]');if(d){document.querySelectorAll("#tip-pdf-grid .option-card").forEach(m=>m.classList.remove("selected")),d.classList.add("selected");const u=d.querySelector("input");u&&(u.checked=!0)}this.wizardData.customise.tipPdf=""});const n=document.getElementById("tail-upload-link"),r=document.getElementById("tail-pdf-input"),a=document.getElementById("tail-custom-preview"),c=document.getElementById("tail-custom-name"),l=document.getElementById("remove-tail-btn");n&&r&&(n.onclick=d=>{d.preventDefault(),r.click()},r.onchange=d=>{d.target.files.length>0&&(this.customTailPdf=d.target.files[0],c&&(c.textContent=this.customTailPdf.name),a&&(a.style.display="flex"),n&&(n.style.display="none"),document.querySelectorAll("#tail-pdf-grid .option-card").forEach(u=>u.classList.remove("selected")),this.wizardData.customise.tailPdf="__custom__")}),l&&(l.onclick=()=>{this.customTailPdf=null,a&&(a.style.display="none"),r&&(r.value=""),n&&(n.style.display="");const d=document.querySelector('#tail-pdf-grid [data-tail="none"]');if(d){document.querySelectorAll("#tail-pdf-grid .option-card").forEach(m=>m.classList.remove("selected")),d.classList.add("selected");const u=d.querySelector("input");u&&(u.checked=!0)}this.wizardData.customise.tailPdf=""})}collectFormData(){const e=["customer-name","customer-project","customer-address","customer-email","customer-phone"],t=["name","project","address","email","phone"];e.forEach((i,n)=>{const r=document.getElementById(i);r&&(this.wizardData.customer[t[n]]=r.value)}),Object.entries({"show-rrp":"showRrp","include-gst":"includeGst","no-pricing":"noPricing","no-qty":"noQty"}).forEach(([i,n])=>{const r=document.getElementById(i);r&&(this.wizardData.options[n]=r.checked)}),Object.entries({"include-descriptions":"includeDescriptions","include-notes":"includeNotes"}).forEach(([i,n])=>{const r=document.getElementById(i);r&&(this.wizardData.options[n]=r.checked)})}populateForm(){const e={"customer-name":this.wizardData.customer.name,"customer-project":this.wizardData.customer.project,"customer-address":this.wizardData.customer.address,"customer-email":this.wizardData.customer.email,"customer-phone":this.wizardData.customer.phone};Object.entries(e).forEach(([s,i])=>{const n=document.getElementById(s);n&&(n.value=i||"")});const t={"show-rrp":this.wizardData.options.showRrp,"include-gst":this.wizardData.options.includeGst,"no-pricing":this.wizardData.options.noPricing,"no-qty":this.wizardData.options.noQty};Object.entries(t).forEach(([s,i])=>{const n=document.getElementById(s);n&&(n.checked=!!i,this.wizardData.options.noPricing&&(s==="show-rrp"||s==="include-gst")&&(n.disabled=!0,n.parentElement.style.opacity="0.5"))});const o={"include-descriptions":this.wizardData.options.includeDescriptions,"include-notes":this.wizardData.options.includeNotes};Object.entries(o).forEach(([s,i])=>{const n=document.getElementById(s);n&&(n.checked=i)})}saveSettings(){try{x.setStorageItem(vt,this.wizardData),x.setStorageItem("pdfFormSettings",{name:this.wizardData.customer.name,project:this.wizardData.customer.project,address:this.wizardData.customer.address,email:this.wizardData.customer.email,telephone:this.wizardData.customer.phone}),x.setStorageItem(bt,{tipAsset:this.wizardData.customise.tipPdf!=="__custom__"?this.wizardData.customise.tipPdf:"",tailAsset:this.wizardData.customise.tailPdf!=="__custom__"?this.wizardData.customise.tailPdf:""})}catch(e){console.warn("Could not save settings to localStorage:",e.message)}}async generatePdf(){this.collectFormData(),this.saveSettings();const e={name:this.wizardData.customer.name,project:this.wizardData.customer.project,address:this.wizardData.customer.address,email:this.wizardData.customer.email,telephone:this.wizardData.customer.phone,showRrp:this.wizardData.options.showRrp,includeGst:this.wizardData.options.includeGst,excludePrice:this.wizardData.options.noPricing,excludeQty:this.wizardData.options.noQty,excludeLongDescription:!this.wizardData.options.includeDescriptions,exportCsv:!0},t={tipAsset:"",tipUpload:null,tailAsset:"",tailUpload:null};if(this.wizardData.customise.tipPdf&&this.wizardData.customise.tipPdf!=="__custom__"&&(t.tipAsset=this.wizardData.customise.tipPdf),this.wizardData.customise.tailPdf&&this.wizardData.customise.tailPdf!=="__custom__"&&(t.tailAsset=this.wizardData.customise.tailPdf),this.customTipPdf)try{const s=await this.fileToBase64(this.customTipPdf);t.tipUpload=s.replace(/^data:application\/pdf;base64,/,""),console.log("📄 Custom tip PDF converted to base64")}catch(s){console.error("Failed to convert tip PDF:",s)}if(this.customTailPdf)try{const s=await this.fileToBase64(this.customTailPdf);t.tailUpload=s.replace(/^data:application\/pdf;base64,/,""),console.log("📄 Custom tail PDF converted to base64")}catch(s){console.error("Failed to convert tail PDF:",s)}try{localStorage.setItem("tipTailSettings",JSON.stringify(t))}catch(s){console.warn("Could not save tipTailSettings to localStorage (likely quota exceeded), using in-memory:",s.message)}console.log("📄 Generating PDF with settings:",{...e,tipAsset:t.tipAsset||"(none)",tipUpload:t.tipUpload?"(custom file)":"(none)",tailAsset:t.tailAsset||"(none)",tailUpload:t.tailUpload?"(custom file)":"(none)"});const o=document.getElementById("pdf-wizard-container");o&&o.remove(),this.onComplete?this.onComplete(e,t):window.dispatchEvent(new CustomEvent("generatePdf",{detail:{...e,tipTailSettings:t}}))}fileToBase64(e){return new Promise((t,o)=>{const s=new FileReader;s.onload=()=>t(s.result),s.onerror=o,s.readAsDataURL(e)})}showSaveDialog(){Z.requireAuth(e=>{this._showSaveDialogInternal(e)})}_showSaveDialogInternal(e){this.collectFormData();const t=be.hasLoadedSelection(),o=this.wizardData.customer.name?`${this.wizardData.customer.name} - ${new Date().toLocaleDateString("en-AU")}`:`Selection - ${new Date().toLocaleDateString("en-AU")}`,s=`
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
    `;this.injectSaveDialogStyles(),document.body.insertAdjacentHTML("beforeend",s);const i=document.getElementById("save-dialog"),n=document.getElementById("save-doc-name"),r=document.getElementById("save-notes");n==null||n.focus(),n==null||n.select(),i.querySelectorAll("button[data-action]").forEach(c=>{c.addEventListener("click",async()=>{const l=c.dataset.action;if(l==="cancel"){i.remove();return}const d=(n==null?void 0:n.value.trim())||"Untitled Selection",u=(r==null?void 0:r.value.trim())||"",m={customerName:this.wizardData.customer.name,customerEmail:this.wizardData.customer.email,customerPhone:this.wizardData.customer.phone,customerProject:this.wizardData.customer.project,customerAddress:this.wizardData.customer.address,documentName:d,notes:u,pdfSettings:{showRrp:this.wizardData.options.showRrp,includeGst:this.wizardData.options.includeGst,noPricing:this.wizardData.options.noPricing,noQty:this.wizardData.options.noQty,includeDescriptions:this.wizardData.options.includeDescriptions,includeNotes:this.wizardData.options.includeNotes,tipPdf:this.wizardData.customise.tipPdf,tailPdf:this.wizardData.customise.tailPdf},gridRows:C.getSelectedProducts()};i.querySelectorAll("button").forEach(p=>p.disabled=!0),c.textContent="Saving...";try{let p;if(l==="save-update"){const h=be.getCurrentSelectionId();p=await be.updateSelection(h,m)}else p=await be.saveSelection(m);i.remove(),p.success?this.showToast(l==="save-update"?"Selection updated!":"Selection saved!"):this.showToast("Failed to save: "+(p.error||"Unknown error"),"error")}catch(p){i.remove(),this.showToast("Failed to save: "+p.message,"error")}})}),i.addEventListener("click",c=>{c.target===i&&i.remove()});const a=c=>{c.key==="Escape"&&(i.remove(),document.removeEventListener("keydown",a))};document.addEventListener("keydown",a)}injectSaveDialogStyles(){if(document.getElementById("save-dialog-styles"))return;document.head.insertAdjacentHTML("beforeend",`
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
    `)}showLoadPicker(){Z.requireAuth(e=>{this._showLoadPickerInternal(e)})}_showLoadPickerInternal(e){console.log("📂 Opening load picker...");try{Tt.show(t=>{console.log("✅ Selection loaded:",t);try{const o=JSON.parse(localStorage.getItem("customerDetails")||"{}");this.wizardData.customer.name=o.name||"",this.wizardData.customer.email=o.email||"",this.wizardData.customer.phone=o.phone||"",this.wizardData.customer.project=o.project||"",this.wizardData.customer.address=o.address||"";const s=JSON.parse(localStorage.getItem("pdfSettings")||"{}");s.showRrp!==void 0&&(this.wizardData.options.showRrp=s.showRrp),s.includeGst!==void 0&&(this.wizardData.options.includeGst=s.includeGst),s.noPricing!==void 0&&(this.wizardData.options.noPricing=s.noPricing),s.noQty!==void 0&&(this.wizardData.options.noQty=s.noQty),s.includeDescriptions!==void 0&&(this.wizardData.options.includeDescriptions=s.includeDescriptions),s.includeNotes!==void 0&&(this.wizardData.options.includeNotes=s.includeNotes),s.tipPdf&&(this.wizardData.customise.tipPdf=s.tipPdf),s.tailPdf&&(this.wizardData.customise.tailPdf=s.tailPdf),this.populateForm(),this.showToast(`Loaded ${t.productCount} products`)}catch(o){console.warn("Could not reload wizard data:",o)}})}catch(t){console.error("❌ Failed to open load picker:",t),this.showToast("Failed to open picker: "+t.message,"error")}}showToast(e,t="success"){const o=document.createElement("div");o.style.cssText=`
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
    `,o.textContent=e,document.body.appendChild(o),setTimeout(()=>{o.style.animation="toast-out 0.3s ease",setTimeout(()=>o.remove(),300)},3e3)}escapeHtml(e){const t=document.createElement("div");return t.textContent=e||"",t.innerHTML}}const No=new Fo;class Mo{constructor(){this.container=null,this.toasts=new Map,this.nextId=1,this.init()}init(){document.getElementById("toast-container")?this.container=document.getElementById("toast-container"):(this.container=document.createElement("div"),this.container.id="toast-container",this.container.className="toast-container",document.body.appendChild(this.container))}show({message:e,type:t="info",duration:o=4e3,action:s=null}){const i=this.nextId++,n=document.createElement("div");n.className=`toast toast-${t}`,n.setAttribute("role","alert"),n.setAttribute("aria-live","polite");const r={success:"✓",error:"✕",warning:"⚠",info:"ℹ"};n.innerHTML=`
      <div class="toast-icon">${r[t]||r.info}</div>
      <div class="toast-content">
        <span class="toast-message">${e}</span>
        ${s?`<button class="toast-action" type="button">${s.label}</button>`:""}
      </div>
      <button class="toast-close" type="button" aria-label="Dismiss">×</button>
    `;const a=n.querySelector(".toast-close");if(a.onclick=()=>this.dismiss(i),s&&s.callback){const c=n.querySelector(".toast-action");c.onclick=()=>{s.callback(),this.dismiss(i)}}return this.container.appendChild(n),this.toasts.set(i,n),requestAnimationFrame(()=>{n.classList.add("toast-enter")}),o>0&&setTimeout(()=>this.dismiss(i),o),i}dismiss(e){const t=this.toasts.get(e);t&&(t.classList.add("toast-exit"),t.addEventListener("animationend",()=>{t.remove(),this.toasts.delete(e)}))}dismissAll(){this.toasts.forEach((e,t)=>this.dismiss(t))}success(e,t={}){return this.show({message:e,type:"success",...t})}error(e,t={}){return this.show({message:e,type:"error",duration:6e3,...t})}warning(e,t={}){return this.show({message:e,type:"warning",...t})}info(e,t={}){return this.show({message:e,type:"info",...t})}withUndo(e,t,o=5e3){return this.show({message:e,type:"info",duration:o,action:{label:"Undo",callback:t}})}}const ge=new Mo;window.toast=ge;const St=20;let Oe=0;function wt(g){return{orderCode:String(g["Order Code"]||g.OrderCode||g.Code||"").trim(),name:g.Description||g["Product Name"]||g.ProductName||"",longDescription:g.LongDescription||g["Long Description"]||"",range:g.Range||"",group:g.Group||"",subGroup:g.SubGroup||g["Sub Group"]||"",rrpExGst:g.RRP_EX||g["RRP EX GST"]||"",rrpIncGst:g.RRP_INCGST||g["RRP INC GST"]||"",imageUrl:g.Image_URL||g["Image URL"]||g.imageUrl||"",dimX:g.DimX||g["X Dimension (mm)"]||"",dimY:g.DimY||g["Y Dimension (mm)"]||"",dimZ:g.DimZ||g["Z Dimension (mm)"]||"",welsStar:g.WELS_STAR||g["WELS Star"]||g["WELS STAR"]||"",colour:g.Colour||g.Color||"",_raw:g}}function xt(g){if(g==null||g==="")return NaN;const e=Number(String(g).replace(/,/g,""));return Number.isFinite(e)&&e>0?e:NaN}function Uo(g){const e=xt(g==null?void 0:g.rrpExGst);if(!Number.isNaN(e))return`$${e.toLocaleString("en-AU",{minimumFractionDigits:2,maximumFractionDigits:2})} ex GST`;const t=xt(g==null?void 0:g.rrpIncGst);return Number.isNaN(t)?"":`$${t.toLocaleString("en-AU",{minimumFractionDigits:2,maximumFractionDigits:2})} inc GST`}class Oo{constructor(){this._overlay=null,this._dataLayer=null,this._seimaProducts=null,this._seimaByCode={},this._seimaFormatted=[],this._currentCompetitor=null,this._currentCompetitorProduct=null,this._onProductSelected=null,this._expandedCard=null}async open(e,t){if(!this._overlay&&(this._onProductSelected=t||null,await this._ensureSeimaData(),this._render(),e)){const o=this._overlay.querySelector("#uv-comp-search");o&&(o.value=e,this._onCompetitorSearch(e))}}close(){this._overlay&&(this._overlay.remove(),this._overlay=null),this._onProductSelected=null,this._expandedCard=null}async _ensureSeimaData(){if(!this._seimaProducts)try{const{dataLayer:e}=await M(async()=>{const{dataLayer:o}=await import("./data-layer-DQlRTHNz.js").then(s=>s.a);return{dataLayer:o}},__vite__mapDeps([0,1,2,3,4,5,6,7]));e.isLoaded||await e.init(),this._dataLayer=e;const t=e.products||[];this._seimaProducts=t,this._seimaByCode={},this._seimaFormatted=[];for(const o of t){const s=wt(o),i=s.orderCode;i&&(this._seimaByCode[i]=o),i&&/^\d+/.test(i)&&this._seimaFormatted.push(s)}}catch(e){console.error("UserVerify: failed to load Seima catalog",e),this._seimaProducts=[]}}_render(){const e=L.getCurrentUser(),t=document.createElement("div");t.className="uv-overlay",t.innerHTML=`
      <div class="uv-modal">
        <div class="uv-header">
          <h2>Match This Product</h2>
          <button class="uv-close" title="Close">&times;</button>
        </div>
        <div class="uv-body" id="uv-body">
          ${e?this._searchPromptHtml():this._loginPromptHtml()}
        </div>
        <div class="uv-footer">
          <div class="uv-notice">
            <span class="uv-notice-icon">&#9201;</span>
            Your suggestion will be reviewed by our team before being published
          </div>
        </div>
      </div>
    `,t.addEventListener("click",s=>{s.target===t&&this.close()}),t.querySelector(".uv-close").addEventListener("click",()=>this.close());const o=s=>{s.key==="Escape"&&(this.close(),document.removeEventListener("keydown",o))};document.addEventListener("keydown",o),document.body.appendChild(t),this._overlay=t,e&&this._bindCompetitorSearch()}_loginPromptHtml(){return`
      <div class="uv-login-prompt">
        <p>Sign in to help match products</p>
        <button class="uv-login-btn" id="uv-login-btn">Sign In</button>
      </div>
    `}_searchPromptHtml(){return`
      <div class="uv-search-prompt">
        <div class="uv-search-prompt-label">Find the competitor product to match</div>
        <div class="uv-search-wrap">
          <span class="uv-search-icon">&#128269;</span>
          <input type="text" class="uv-search-input" id="uv-comp-search"
                 placeholder="Type a competitor product code or name..." autofocus>
        </div>
        <div class="uv-search-results" id="uv-comp-results" style="display:none;"></div>
      </div>
    `}_bindCompetitorSearch(){const e=this._overlay.querySelector("#uv-comp-search");if(!e)return;let t;e.addEventListener("input",()=>{clearTimeout(t),t=setTimeout(()=>this._onCompetitorSearch(e.value),250)}),e.addEventListener("focus",()=>{e.value.length>=2&&this._onCompetitorSearch(e.value)})}async _onCompetitorSearch(e){const t=this._overlay.querySelector("#uv-comp-results");if(!t)return;if(!e||e.length<2){t.style.display="none";return}if(await P._ensureIndex(),!P._index){t.style.display="none";return}const o=e.toLowerCase().replace(/[:\-]/g," ").split(/\s+/).filter(Boolean),s=[];for(const i of P._index.searchable)if(o.every(n=>i.searchText.includes(n))&&(s.push(i),s.length>=15))break;if(s.length===0){t.innerHTML='<div class="uv-empty">No competitor products found</div>',t.style.display="block";return}t.innerHTML=s.map((i,n)=>{const r=i.product,a=r.image_url||"",c=r.product_code||"",l=r.product_name||r.collection||"",d=r.product_type||"";return`
        <div class="uv-search-item" data-comp-idx="${n}">
          ${a?`<img src="${this._esc(a)}" alt="" onerror="this.style.display='none'">`:""}
          <div class="uv-search-item-info">
            <span class="uv-search-item-code">${this._esc(P.getPublicCompetitorLabel(i.competitor))}: ${this._esc(c)}</span>
            <span class="uv-search-item-name">${this._esc(l)}</span>
            ${d?`<span class="uv-search-item-type">${this._esc(d)}</span>`:""}
          </div>
        </div>
      `}).join(""),t.style.display="block",t.querySelectorAll(".uv-search-item").forEach(i=>{i.addEventListener("click",()=>{const n=parseInt(i.dataset.compIdx);this._selectCompetitorProduct(s[n]),t.style.display="none"})})}_selectCompetitorProduct(e){this._currentCompetitor=e.competitor,this._currentCompetitorProduct=e.product,this._expandedCard=null;const t=this._overlay.querySelector("#uv-body"),o=this._overlay.querySelector(".uv-header h2"),s=e.product,i=s.product_name||s.collection||s.product_code||"";o.textContent=`${i} — ${P.getPublicCompetitorLabel(e.competitor)}`,t.innerHTML=this._renderSplitView(s,e.competitor),this._wireSplitView()}_renderSplitView(e,t){return`
      <div class="uv-layout">
        ${this._renderCompetitorPanel(e,t)}
        ${this._renderMatchesPanel(e)}
      </div>
    `}_renderCompetitorPanel(e,t){const o=e.image_url||"",s=this._extractCompetitorDimensions(e),i=e.features||"",r=[["Name",e.product_name||e.collection||""],["Code",e.product_code],["Brand",e.brand&&String(e.brand).trim()||P.getPublicCompetitorLabel(t)],["Category",[e.product_type,e.subcategory].filter(Boolean).join(" / ")],["Collection",e.collection],["Finish",e.finish||e.colour],["Material",e.material],["Dimensions",s],["Style",e.style],["WELS",e.wels_rating]].filter(([,c])=>c&&String(c).trim()).map(([c,l])=>`<tr><td>${this._esc(c)}</td><td>${c==="Name"?`<strong>${this._esc(l)}</strong>`:this._esc(l)}</td></tr>`).join(""),a=i?`<tr><td>Features</td><td class="uv-features-cell">${this._esc(i).replace(/;\s*/g,"<br>")}</td></tr>`:"";return`
      <div class="uv-product-detail">
        ${o?`<img src="${this._esc(o)}" alt="" class="uv-product-img" onerror="this.style.display='none'">`:'<div class="uv-product-img-placeholder">No image</div>'}
        <table class="uv-product-table">
          ${r}
          ${a}
        </table>
      </div>
    `}_renderMatchesPanel(e){const t=this._buildSearchPrefill(e),o=this._renderSuggestions(e);return`
      <div class="uv-matches-panel">
        <div class="uv-matches-heading">Which Seima product is the equivalent?</div>
        <div class="uv-search-wrap">
          <span class="uv-search-icon">&#128269;</span>
          <input type="text" class="uv-search-input uv-seima-search" id="uv-seima-search"
                 placeholder="Search Seima by name, code or range..." value="${this._esc(t)}">
        </div>
        <div class="uv-results-area" id="uv-results-area">
          ${o}
        </div>
        <div class="uv-suggestions-store" id="uv-suggestions-store" style="display:none;">
          ${o}
        </div>
        <div class="uv-no-equivalent">
          <button class="uv-no-equivalent-btn" id="uv-no-equivalent">No Seima equivalent exists</button>
        </div>
      </div>
    `}_buildSearchPrefill(e){const t=e.subcategory||"",o=e.product_type||"",s=e.finish||e.colour||"",i=e.product_name||"";let n=t?t.split(",")[0].trim():o;if(!n&&i){const a=i.toLowerCase(),l=["basin","sink","shower","bath","toilet","vanity","mixer","tap"].filter(d=>a.includes(d));l.length>0&&(n=l.join(" "))}const r=[];return n&&r.push(n),s&&r.push(s),r.join(" ").trim()}_renderSuggestions(e){const t=this._quickMatch(e);return t.length===0?'<div class="uv-empty">No suggestions available. Use the search above.</div>':`
      <div class="uv-section-divider"></div>
      <div class="uv-section-title">Suggestions</div>
      ${t.map(s=>this._renderSeimaCard(s.seima,{score:s.score,reasons:this._buildReasons(s),isSuggestion:!0})).join("")}
    `}_buildReasons(e){const t=[];return e.finishScore>=60&&t.push("finish match"),e.materialScore>=80?t.push("material match"):e.materialScore===0&&t.push("material mismatch"),t.push(`text: ${e.textScore}%`),t.join(", ")}_renderSeimaCard(e,t={}){const o=e.orderCode,s=e.name,i=e.range||"",n=e.group||"",r=e.subGroup||"",a=e.imageUrl||"assets/no-image.png",c=this._seimaDimensions(e),l=Uo(e),d=e.longDescription||"",u=e.welsStar||"",m=this._extractFinishFromSeima(e),p=this._extractMaterialFromSeima(e),h=t.score!=null?`<span class="uv-badge uv-badge-${t.score>=50?"high":t.score>=30?"med":"low"}">${t.score}%</span>`:"",y=[o,i,r||n].filter(Boolean).join(" · "),S=[m,p,c].filter(Boolean).join(" · "),w=d?d.length>120?d.slice(0,120)+"…":d:"";return`
      <div class="uv-match-card" data-seima-code="${this._esc(o)}">
        <img src="${this._esc(a)}" alt="" class="uv-match-img"
             data-code="${this._esc(o)}"
             onerror="this.src='assets/no-image.png'" title="Click to expand">
        <div class="uv-match-body">
          <div class="uv-match-name">${this._esc(s)}</div>
          <div class="uv-match-meta">${this._esc(y)} ${h}</div>
          ${S?`<div class="uv-match-spec">${this._esc(S)}</div>`:""}
          ${w?`<div class="uv-match-desc-preview">${this._esc(w)}</div>`:""}
          ${t.reasons?`<div class="uv-match-reasons">${this._esc(t.reasons)}</div>`:""}
        </div>
        <div class="uv-match-right">
          <div class="uv-match-price">${this._esc(l)}</div>
          <button class="uv-btn-match" data-code="${this._esc(o)}">Link Product</button>
        </div>
        <div class="uv-match-expanded" data-expand-code="${this._esc(o)}" style="display:none;">
          <img src="${this._esc(a)}" alt="" class="uv-expanded-img" onerror="this.src='assets/no-image.png'">
          <div class="uv-expanded-details">
            <div class="uv-expanded-specs">
              ${i?`<div><span class="uv-expanded-label">Range</span> ${this._esc(i)}</div>`:""}
              ${n?`<div><span class="uv-expanded-label">Group</span> ${this._esc(n)}</div>`:""}
              ${r?`<div><span class="uv-expanded-label">Type</span> ${this._esc(r)}</div>`:""}
              ${m?`<div><span class="uv-expanded-label">Finish</span> ${this._esc(m)}</div>`:""}
              ${p?`<div><span class="uv-expanded-label">Material</span> ${this._esc(p)}</div>`:""}
              ${c?`<div><span class="uv-expanded-label">Dimensions</span> ${this._esc(c)}</div>`:""}
              ${u?`<div><span class="uv-expanded-label">WELS</span> ${this._esc(u)} star</div>`:""}
              ${l?`<div><span class="uv-expanded-label">RRP</span> ${this._esc(l)}</div>`:""}
            </div>
            ${d?`<div class="uv-expanded-desc">${this._esc(d)}</div>`:""}
            <button class="uv-btn-match uv-btn-match-expanded" data-code="${this._esc(o)}">Link Product</button>
          </div>
        </div>
      </div>
    `}_extractFinishFromSeima(e){const t=`${e.group||""} ${e.name||""}`,o=this._normalizeFinish(t);if(o&&o.length>2)return o.charAt(0).toUpperCase()+o.slice(1);if(e.colour){const s=this._normalizeFinish(e.colour);if(s&&s.length>2)return s.charAt(0).toUpperCase()+s.slice(1)}return""}_extractMaterialFromSeima(e){const t=(e.longDescription||"").toLowerCase();return t.includes("solid brass")||t.includes("lead-free brass")||t.includes("lead free brass")?"Solid Brass":t.includes("brass")?"Brass":t.includes("vitreous china")||t.includes("ceramic")?"Ceramic":t.includes("acrylic")?"Acrylic":t.includes("stainless steel")?"Stainless Steel":t.includes("stone")?"Stone":t.includes("glass")?"Glass":""}_seimaDimensions(e){const t=e.dimX,o=e.dimY,s=e.dimZ;return t&&t!=="0"?`${t} × ${o||0} × ${s||0}mm`:""}_wireSplitView(){const e=this._overlay.querySelector("#uv-seima-search");if(!e)return;let t;e.addEventListener("input",()=>{clearTimeout(t),t=setTimeout(()=>this._onSeimaSearch(e.value),200)}),e.value.length>=2?this._onSeimaSearch(e.value):(this._wireCardActions(),this._autoExpandFirst());const o=this._overlay.querySelector("#uv-no-equivalent");o==null||o.addEventListener("click",()=>this._submitNoEquivalent())}_autoExpandFirst(){var o;const e=(o=this._overlay)==null?void 0:o.querySelector("#uv-results-area");if(!e)return;const t=e.querySelector(".uv-match-card");if(t){const s=t.dataset.seimaCode;s&&this._toggleExpand(s)}}_wireCardActions(){const e=this._overlay.querySelector("#uv-results-area");e&&(e.querySelectorAll(".uv-match-img").forEach(t=>{t.addEventListener("click",o=>{o.stopPropagation(),this._toggleExpand(t.dataset.code)})}),e.querySelectorAll(".uv-btn-match").forEach(t=>{t.addEventListener("click",o=>{o.stopPropagation(),this._showConfirmation(t.dataset.code)})}))}_onSeimaSearch(e){const t=this._overlay.querySelector("#uv-results-area");if(!t)return;if(!e||e.length<2){const i=this._overlay.querySelector("#uv-suggestions-store");t.innerHTML=i?i.innerHTML:"",this._wireCardActions(),this._autoExpandFirst();return}const o=this._dataLayer?this._dataLayer.searchProducts(e,15):[];if(o.length===0){const i=this._overlay.querySelector("#uv-suggestions-store");t.innerHTML='<div class="uv-empty">No results for "'+this._esc(e)+'"</div>'+(i?i.innerHTML:""),this._wireCardActions(),this._autoExpandFirst();return}const s=o.map(i=>{const n=wt(i);return this._renderSeimaCard(n,{})}).join("");t.innerHTML=s,this._wireCardActions(),this._autoExpandFirst()}_toggleExpand(e){const t=this._overlay.querySelector("#uv-results-area");if(!t)return;if(this._expandedCard===e){const i=t.querySelector(`[data-expand-code="${e}"]`);i&&(i.style.display="none");const n=t.querySelector(`.uv-match-card[data-seima-code="${e}"]`);n&&n.classList.remove("uv-card-expanded"),this._expandedCard=null;return}t.querySelectorAll(".uv-match-expanded").forEach(i=>i.style.display="none"),t.querySelectorAll(".uv-match-card").forEach(i=>i.classList.remove("uv-card-expanded"));const o=t.querySelector(`[data-expand-code="${e}"]`),s=t.querySelector(`.uv-match-card[data-seima-code="${e}"]`);o&&(o.style.display="flex",o.querySelectorAll(".uv-btn-match").forEach(i=>{i.addEventListener("click",n=>{n.stopPropagation(),this._showConfirmation(i.dataset.code)})})),s&&s.classList.add("uv-card-expanded"),this._expandedCard=e}_showConfirmation(e){var r;const t=(r=this._overlay)==null?void 0:r.querySelector(".uv-modal");if(!t)return;const o=t.querySelector(".uv-confirm-overlay");o&&o.remove();const s=this._seimaFormatted.find(a=>a.orderCode===e),i=s?s.name:e,n=document.createElement("div");n.className="uv-confirm-overlay",n.innerHTML=`
      <div class="uv-confirm-box">
        <div class="uv-confirm-message">Your selection has been recorded and will be placed into your grid.</div>
        <div class="uv-confirm-product">${this._esc(i)}</div>
        <div class="uv-confirm-actions">
          <button class="uv-confirm-cancel">Cancel</button>
          <button class="uv-confirm-done">Done</button>
        </div>
      </div>
    `,n.querySelector(".uv-confirm-cancel").addEventListener("click",()=>n.remove()),n.querySelector(".uv-confirm-done").addEventListener("click",()=>{this._submitAndClose(e)}),n.addEventListener("click",a=>{a.target===n&&n.remove()}),t.appendChild(n)}async _submitAndClose(e){if(!this._currentCompetitor||!this._currentCompetitorProduct)return;const t=L.getCurrentUser();if(!(t!=null&&t.email)){this._showToast("Please sign in to submit.","error");return}if(Oe>=St){this._showToast("Session limit reached. Thank you for your contributions!","error");return}const o=this._currentCompetitor,s=String(this._currentCompetitorProduct.product_code||""),i=this._seimaByCode[e],n=this._onProductSelected;i&&n&&n(i),this.close(),this._showToast("Thanks! Your suggestion has been submitted for review.");try{await P.submitUserVerification(o,s,e,t.email,""),Oe++}catch(r){console.error("UserVerify: submit failed",r),this._showToast("Submission failed — please try again later.","error")}}async _submitNoEquivalent(){if(!this._currentCompetitor||!this._currentCompetitorProduct)return;const e=L.getCurrentUser();if(!(e!=null&&e.email)){this._showToast("Please sign in to submit.","error");return}if(Oe>=St){this._showToast("Session limit reached. Thank you for your contributions!","error");return}const t=String(this._currentCompetitorProduct.product_code||"");try{await P.submitUserVerification(this._currentCompetitor,t,"NO_EQUIVALENT",e.email,"User indicated no Seima equivalent exists"),Oe++,this.close(),this._showToast("Thanks! We've noted that this product has no Seima equivalent.")}catch(o){console.error("UserVerify: no-equivalent submit failed",o),this._showToast("Failed to submit. Please try again.","error")}}_quickMatch(e,t=6){if(!this._seimaFormatted||this._seimaFormatted.length===0)return[];const o=(e.product_type||e.subcategory||"").toLowerCase(),s=this._normalizeFinish(e.finish||e.colour||"");let i=Pt(e.rrp_ex_gst);if(Number.isNaN(i)){const m=ct(e.rrp_inc_gst,4);i=m??0}i>0||(i=parseFloat(e.rrp||e.price)||0);const n=(e.material||"").toLowerCase(),r=this._tokenize(`${e.product_name||""} ${e.product_type||""} ${e.collection||""} ${e.finish||""} ${e.material||""}`),a=[Qt(e.product_name),o].filter(Boolean);let c;for(const m of a)if(c=Kt[m.toLowerCase()],c)break;const l=[];for(const m of this._seimaFormatted){if(c){const R=`${m.subGroup} ${m.group} ${m.range} ${m.name}`.toUpperCase();if(!c.some(I=>R.includes(I)))continue}const p=[m.subGroup,m.group,m.range,m.name,m.longDescription].filter(Boolean).join(" ").toLowerCase(),h=this._tokenize(p);let y=0;for(const R of r)h.includes(R)&&y++;const f=r.length>0?y/r.length*100:0,S=this._normalizeFinish(`${m.group||""} ${m.name||""}`),w=s&&S&&s===S?100:s&&S&&(s.includes(S)||S.includes(s))?60:0;let v=50;if(n){const R=(m.longDescription||"").toLowerCase();R.includes(n)?v=100:n.split(/\s+/).some(I=>I.length>=4&&R.includes(I))?v=60:v=0}const b=parseFloat(m.rrpExGst)||0;let E=50;if(i>0&&b>0){const R=Math.min(i,b)/Math.max(i,b);E=R>=.8?100:R>=.6?70:R>=.4?40:10}const k=Math.round(f*.35+w*.25+v*.2+E*.2);k<15||l.push({seima:m,score:k,textScore:Math.round(f),finishScore:w,materialScore:v,priceScore:E})}l.sort((m,p)=>p.score-m.score);const d=new Set,u=[];for(const m of l)if(!d.has(m.seima.orderCode)&&(d.add(m.seima.orderCode),u.push(m),u.length>=t))break;return u}_normalizeFinish(e){const t=(e||"").toLowerCase(),o={chrome:["chrome"," cr",",cr","cp","polished chrome"],"matte black":["matte black","matt black"," mb",",mb","mblk","black"],"brushed nickel":["brushed nickel"," bn",",bn","satin nickel","nickel"],"brushed brass":["brushed brass"," bb",",bb","brass","warm brass"],"brushed gold":["brushed gold"," bg",",bg","gold","light gold"],"gun metal":["gun metal","gunmetal"," gm",",gm"],white:["white"," wh",",wh","gloss white"],"stainless steel":["stainless steel"," ss",",ss","stainless"]};for(const[s,i]of Object.entries(o))if(i.some(n=>t.includes(n)))return s;return t.trim()}_tokenize(e){return(e||"").toLowerCase().replace(/[^a-z0-9\s]/g," ").split(/\s+/).filter(t=>t.length>=2)}_showToast(e,t="success"){const o=document.querySelector(".uv-toast");o&&o.remove();const s=document.createElement("div");s.className=`uv-toast uv-toast-${t}`,s.textContent=e,document.body.appendChild(s),setTimeout(()=>s.classList.add("uv-toast-visible"),10),setTimeout(()=>{s.classList.remove("uv-toast-visible"),setTimeout(()=>s.remove(),300)},3500)}_extractCompetitorDimensions(e){if(!e)return"";if(e.dimensions_mm)return e.dimensions_mm;let t=0,o=0,s=0;for(const i of Object.keys(e)){const n=i.toLowerCase();n.includes("width")&&!t&&(t=parseFloat(e[i])||0),n.includes("depth")&&!o&&(o=parseFloat(e[i])||0),n.includes("height")&&!s&&(s=parseFloat(e[i])||0)}if(t>0||o>0||s>0){const i=[];return t&&i.push(t),o&&i.push(o),s&&i.push(s),i.join(" × ")+"mm"}return""}_esc(e){const t=document.createElement("div");return t.textContent=e||"",t.innerHTML}}const Le=new Oo;function rt(g){if(g==null||g==="")return NaN;const e=Number(String(g).replace(/,/g,""));return Number.isFinite(e)&&e>0?e:NaN}function Et(g){const e=rt((g==null?void 0:g.RRP_EX)||(g==null?void 0:g["RRP EX GST"])||(g==null?void 0:g.RRP_EXGST)||(g==null?void 0:g.rrpExGst)||(g==null?void 0:g["PL1 - RRP EX GST"]));if(!Number.isNaN(e))return`$${e.toLocaleString("en-AU",{minimumFractionDigits:2,maximumFractionDigits:2})} ex GST`;const t=rt((g==null?void 0:g.RRP_INCGST)||(g==null?void 0:g["RRP INC GST"])||(g==null?void 0:g.rrpIncGst));return Number.isNaN(t)?"":`$${t.toLocaleString("en-AU",{minimumFractionDigits:2,maximumFractionDigits:2})} inc GST`}function Go(g){let e=rt(g==null?void 0:g.rrp_ex_gst);if(Number.isNaN(e)){const t=ct(g==null?void 0:g.rrp_inc_gst,2);t!=null&&(e=t)}return Number.isNaN(e)?"":`$${e.toLocaleString("en-AU",{minimumFractionDigits:2,maximumFractionDigits:2})} ex GST`}class zo{constructor(){this.activeDropdown=null,this.updatePositionHandler=null,document.addEventListener("click",e=>{e.target.closest(".global-search-dropdown")||this.hideDropdown()})}showDropdown(e,t,o,s=!1){this.hideDropdown();const i=document.createElement("ul");i.className="global-search-dropdown";const n=300,r=e.getBoundingClientRect(),a=window.innerWidth,c=r.width;let l=r.left;l+c>a-8&&(l=a-c-8),l<8&&(l=8);const d={position:"fixed",top:"0px",left:`${l}px`,width:`${c}px`,minWidth:`${c}px`,maxWidth:`${c}px`,background:"#fff",border:"1px solid #d1d5db",borderRadius:"8px",boxShadow:"0 10px 25px -5px rgba(0, 0, 0, 0.15), 0 8px 10px -6px rgba(0, 0, 0, 0.10)",maxHeight:`${n}px`,overflowY:"auto",overflowX:"hidden",zIndex:"10010",listStyle:"none",margin:"0",padding:"4px 0",whiteSpace:"normal",wordWrap:"break-word",display:"block",pointerEvents:"auto",transform:"none",contain:"none",isolation:"isolate",visibility:"hidden"};if(Object.keys(d).forEach(u=>{i.style.setProperty(u,d[u],"important")}),i.maxDropdownHeight=n,t.length===0?i.innerHTML='<li style="padding: 12px 16px; color: #6b7280; font-style: italic; background: #fff;">No products found</li>':i.innerHTML=t.map(u=>{if(u._crosshairValidate){const b=u._crosshairValidate,E=b.imageUrl?`<img src="${x.sanitizeInput(b.imageUrl)}" alt="" style="width:32px; height:32px; object-fit:contain; border-radius:4px; margin-right:10px; vertical-align:middle; flex-shrink:0;">`:"",k=(b.validatorSearch||b.productCode||"").trim();return`<li data-validate-competitor="${x.sanitizeInput(b.competitor)}" data-validate-code="${x.sanitizeInput(b.productCode)}" data-validate-search="${x.sanitizeInput(k)}"
                       style="padding: 10px 16px; cursor: pointer; border-bottom: 1px solid #f3f4f6;
                              font-size: 13px; line-height: 1.4; display: flex; align-items: center;
                              background: #fffbeb !important; border-left: 3px solid #f59e0b;">
            ${E}
            <div style="flex:1; min-width:0;">
              <div style="font-weight: 600; color: #92400e;">${x.sanitizeInput(b.productName)}</div>
              <div style="color: #78716c; font-size: 11px;">${x.sanitizeInput(P.getPublicCompetitorLabel(b.competitor))} · #${x.sanitizeInput(b.productCode)}${b.finish?" · "+x.sanitizeInput(b.finish):""} · ${b.matchCount>0?b.matchCount+" suggested match"+(b.matchCount!==1?"es":""):"no Seima match yet"}</div>
            </div>
            <span style="color: #d97706; font-size: 11px; font-weight: 600; white-space: nowrap; margin-left: 8px;">Review →</span>
          </li>`}const m=u.OrderCode||u.Code||"",p=u.Description||u.ProductName||u["Product Name"]||"",h=u.Image_URL||u.image_url||"",y=u._crosshairMatch,f=u._outsidePublicPricelist?'<abbr class="grid-search-ext-not-public" title="Not on the public price list — confirm with Seima before quoting.">*</abbr>':"",S=y?`<span style="display: inline-block; background: ${y.status==="Verified"?"#e8f5e9":"#e3f2fd"}; color: ${y.status==="Verified"?"#2e7d32":"#1565c0"}; font-size: 10px; font-weight: 600; padding: 1px 6px; border-radius: 8px; margin-left: 8px;">↔ ${x.sanitizeInput(y.competitorLabel||P.getPublicCompetitorLabel(y.competitor))}</span>`:"",w=h?`<img src="${x.sanitizeInput(h)}" alt="" style="width:36px; height:36px; object-fit:contain; border-radius:4px; margin-right:10px; flex-shrink:0;" onerror="this.style.display='none'">`:"",v=y?Object.fromEntries(Object.entries(u).filter(([b])=>b!=="_crosshairMatch")):u;return`<li data-product='${JSON.stringify(v).replace(/'/g,"&apos;")}'
                     style="padding: 8px 16px; cursor: pointer; border-bottom: 1px solid #f3f4f6; 
                            transition: background-color 0.15s ease; font-size: 14px; line-height: 1.5;
                            margin: 0; display: flex; align-items: center; width: 100%; 
                            white-space: normal; word-wrap: break-word; overflow: visible; background: ${y?"#f0f7ff":"#fff"} !important;">
          ${w}
          <div style="flex:1; min-width:0;">
            <span style="font-weight: 600; color: #2563eb;">${x.sanitizeInput(m)}${f}</span>
            <span style="color: #6b7280; margin: 0 8px;">—</span>
            <span style="color: #374151;">${x.sanitizeInput(p)}</span>
            ${S}
          </div>
        </li>`}).join(""),i.addEventListener("mouseenter",u=>{const m=u.target.closest("li");m&&(m.dataset.validateCompetitor?m.style.background="#fef3c7":m.dataset.product&&(i.querySelectorAll("li.active").forEach(p=>p.classList.remove("active")),m.classList.add("hover")))},!0),i.addEventListener("mouseleave",u=>{const m=u.target.closest("li");m&&(m.dataset.validateCompetitor?m.style.background="#fffbeb":m.dataset.product&&m.classList.remove("hover"))},!0),i.addEventListener("click",u=>{const m=u.target.closest("li");if(m){if(m.dataset.validateCompetitor){const p=m.dataset.validateCompetitor,h=m.dataset.validateCode,y=(m.dataset.validateSearch||h||"").trim();P.isWriteEnabled()?window.location.href=`screens/validator.html?competitor=${encodeURIComponent(p)}&search=${encodeURIComponent(y)}`:(this.hideDropdown(),Le.open(`${P.getPublicCompetitorLabel(p)}: ${h}`,f=>{o(f)}))}else if(m.dataset.product)try{const p=JSON.parse(m.getAttribute("data-product"));o(p),this.hideDropdown()}catch(p){console.error("Failed to parse product data:",p)}}}),s){const u=i.querySelector("li[data-product]");u&&(u.classList.add("active"),u.style.setProperty("background","rgba(184,115,51,0.12)","important"))}document.body.appendChild(i),this.activeDropdown=i,this._positionDropdown(i,e),i.style.setProperty("visibility","visible","important"),this.updatePositionHandler=()=>{this._positionDropdown(i,e)},window.addEventListener("scroll",this.updatePositionHandler,{passive:!0}),window.addEventListener("resize",this.updatePositionHandler,{passive:!0})}_positionDropdown(e,t){const o=t.getBoundingClientRect(),s=window.innerWidth,i=window.innerHeight,n=e.scrollHeight,r=e.maxDropdownHeight||300,a=Math.min(n,r),c=i-o.bottom,l=o.top,d=c<a&&l>c;let u;d?u=Math.max(8,o.top-a-8):u=o.bottom+8;let m=o.left;m+o.width>s-8&&(m=s-o.width-8),m<8&&(m=8),e.style.setProperty("top",`${u}px`,"important"),e.style.setProperty("left",`${m}px`,"important"),e.style.setProperty("width",`${o.width}px`,"important"),e.style.setProperty("min-width",`${o.width}px`,"important"),e.style.setProperty("max-width",`${o.width}px`,"important")}showLoadingDropdown(e){this.hideDropdown();const t=document.createElement("ul");t.className="global-search-dropdown";const o=e.getBoundingClientRect();Object.entries({position:"fixed",left:`${o.left}px`,width:`${o.width}px`,background:"#fff",border:"1px solid #d1d5db",borderRadius:"8px",boxShadow:"0 10px 25px -5px rgba(0, 0, 0, 0.15), 0 8px 10px -6px rgba(0, 0, 0, 0.10)",zIndex:"10010",listStyle:"none",margin:"0",padding:"0",transform:"none"}).forEach(([s,i])=>t.style.setProperty(s,i,"important")),t.maxDropdownHeight=80,t.innerHTML=`
      <li style="padding: 16px 20px; display: flex; align-items: center; gap: 12px; color: #6b7280; background: #fff;">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#b87333" stroke-width="2.5" style="flex-shrink:0;animation:spin 1s linear infinite">
          <path d="M12 2a10 10 0 0 1 10 10" stroke-linecap="round"/>
        </svg>
        <span style="font-size: 13px;">Loading product catalogue&hellip;</span>
      </li>`,document.body.appendChild(t),this.activeDropdown=t,this._positionDropdown(t,e)}hideDropdown(){this.activeDropdown&&(this.updatePositionHandler&&(window.removeEventListener("scroll",this.updatePositionHandler),window.removeEventListener("resize",this.updatePositionHandler)),this.activeDropdown.remove(),this.activeDropdown=null,this.updatePositionHandler=null)}}const ot="tipTailSettings",Ge="customerLogo";class He{constructor(){this.gridRows=[],this.nextRowId=1,this._matchSuggestionsRunId=0,this.currentSearchRow=null,this.searchCache=new Map,this.searchTimeout=null,this.dropdownManager=new zo,this.lastUsedRoom="Blank",this.draggedRowId=null,this.draggedRoomName=null,this.customRoomOrder=this.loadCustomRoomOrder(),this.currentSelectionId=null,this.currentSelectionName="New Selection",this.hasUnsavedChanges=!1,this.autoSaveTimeout=null,this.lastSaveTime=null,this.guidedAssist={enabled:!1,category:"",group:"",query:""},this.guidedSearchTimeout=null}loadCustomRoomOrder(){try{const e=localStorage.getItem("customRoomOrder");return e?JSON.parse(e):[]}catch{return[]}}saveCustomRoomOrder(){try{localStorage.setItem("customRoomOrder",JSON.stringify(this.customRoomOrder))}catch(e){console.warn("Failed to save room order:",e)}}init(){const e=document.querySelector(".grid-table");e&&(e.style.removeProperty("table-layout"),e.style.removeProperty("overflow"),e.classList.remove("has-open-dropdown"));const t=document.querySelector(".global-search-dropdown");t&&t.remove(),this.setupEventListeners(),this.updateAllRoomDropdowns(),this.loadExistingProducts(),this.updateTotals(),this.ensureAtLeastOneEmptyRow(),this.setupGuidedAssist(),this.handleSortChange(),this.initContextHeader(),this.checkForRecentSelection(),He._catalogListenerInstalled||(He._catalogListenerInstalled=!0,_.onCatalogUpdated(()=>{const o=window.productGridManager;o&&(o.searchCache.clear(),document.getElementById("grid-body")&&(o.renderGrid(),o.attachSeimaMatchSuggestions()))}))}initContextHeader(){this.updateContextHeader();const e=document.getElementById("save-selection-btn"),t=document.getElementById("load-selection-btn");e&&e.addEventListener("click",()=>this.showSaveDialog()),t&&t.addEventListener("click",()=>this.showLoadPicker());const o=document.getElementById("entry-import"),s=document.getElementById("entry-load"),i=document.getElementById("entry-new"),n=document.getElementById("entry-continue");o&&o.addEventListener("click",()=>this.showImportModal()),s&&s.addEventListener("click",()=>this.showLoadPicker()),i&&i.addEventListener("click",()=>this.addEmptyRow()),n&&n.addEventListener("click",()=>this.loadRecentSelection())}updateContextHeader(){const e=document.getElementById("selection-name"),t=document.getElementById("status-icon"),o=document.getElementById("save-indicator");e&&(e.textContent=this.currentSelectionName||"New Selection"),t&&(this.currentSelectionId?(t.textContent="●",t.classList.add("saved"),t.classList.remove("unsaved")):(t.textContent="○",t.classList.remove("saved"))),o&&(o.style.display=this.hasUnsavedChanges?"flex":"none")}markAsChanged(){this.hasUnsavedChanges=!0,this.updateContextHeader(),clearTimeout(this.autoSaveTimeout),this.autoSaveTimeout=setTimeout(()=>{this.hasUnsavedChanges&&this.currentSelectionId&&this.autoSave()},3e4)}async autoSave(){if(!(!this.currentSelectionId||!this.hasUnsavedChanges))try{const e=this.prepareSelectionData();(await be.updateSelection(this.currentSelectionId,e)).success&&(this.hasUnsavedChanges=!1,this.lastSaveTime=new Date,this.updateContextHeader(),ge.success("Auto-saved"))}catch(e){console.warn("Auto-save failed:",e)}}async checkForRecentSelection(){try{const e=C.getUserSettings(),t=L.getCurrentUser();if(!((e==null?void 0:e.staffEmail)||(t==null?void 0:t.email)||""))return;const s=await ye.fetchSelections();if(s.length>0){const i=s[0],n=document.getElementById("entry-continue"),r=document.getElementById("recent-selection-name");n&&r&&(n.style.display="flex",r.textContent=`${i.documentName||i.customerName} • ${i.date}`,n.dataset.selectionId=i.id)}}catch(e){console.warn("Could not check for recent selections:",e)}}async loadRecentSelection(){const e=document.getElementById("entry-continue");if(!(e==null?void 0:e.dataset.selectionId)){ge.warning("No recent selection found");return}this.showLoadPicker()}prepareSelectionData(){const e=x.getStorageItem("pdfFormSettings",{});return{customerName:e.name||"",customerEmail:e.email||"",customerPhone:e.telephone||"",customerProject:e.project||"",customerAddress:e.address||"",documentName:this.currentSelectionName,notes:"",pdfSettings:x.getStorageItem("pdfWizardSettings",{}),gridRows:C.getSelectedProducts(),roomOrder:this.customRoomOrder}}setupEventListeners(){const e=document.getElementById("back-to-home"),t=document.getElementById("import-file-btn"),o=document.getElementById("download-btn"),s=document.getElementById("clear-all-btn"),i=document.getElementById("add-row-btn");e&&(e.onclick=()=>location.reload()),t&&(t.onclick=()=>this.showImportModal()),o&&(o.onclick=()=>this.showDownloadModal()),s&&(s.onclick=()=>this.showClearAllModal()),i&&(i.onclick=()=>this.addEmptyRow());const n=document.getElementById("clear-all-cancel"),r=document.getElementById("clear-all-confirm");n&&(n.onclick=()=>this.hideClearAllModal()),r&&(r.onclick=()=>{var f;const y=((f=document.getElementById("clear-customer-details"))==null?void 0:f.checked)??!0;this.clearAll(y),this.hideClearAllModal()});const a=document.getElementById("clear-all-modal");a&&(a.onclick=y=>{y.target===a&&this.hideClearAllModal()});const c=document.getElementById("sort-by");c&&(c.onchange=()=>this.handleSortChange());const l=document.getElementById("sort-refresh-btn");l&&(l.onclick=()=>this.handleSortChange());const d=document.getElementById("grid-body");d&&(d.addEventListener("input",this.handleGridInput.bind(this)),d.addEventListener("change",this.handleGridChange.bind(this)),d.addEventListener("click",this.handleGridClick.bind(this)),d.addEventListener("keydown",this.handleGridKeydown.bind(this)),d.addEventListener("focusin",this.handleGridFocusIn.bind(this)),d.addEventListener("focusout",this.handleGridFocusOut.bind(this)),d.addEventListener("dragstart",this.handleDragStart.bind(this)),d.addEventListener("dragover",this.handleDragOver.bind(this)),d.addEventListener("dragleave",this.handleDragLeave.bind(this)),d.addEventListener("drop",this.handleDrop.bind(this)),d.addEventListener("dragend",this.handleDragEnd.bind(this))),document.addEventListener("click",y=>{!y.target.closest(".grid-product-cell")&&!y.target.closest(".global-search-dropdown")&&this.hideAllDropdowns()});const u=document.getElementById("pdf-email-modal"),m=document.getElementById("pdf-email-cancel");m&&u&&(m.onclick=()=>{u.style.display="none"});const p="pdfFormSettings",h=document.getElementById("pdf-email-form");u&&u.addEventListener("show",()=>{const y=x.getStorageItem(p,{});h&&(h["user-name"].value=y.name||"",h["user-project"].value=y.project||"",h["user-address"].value=y.address||"",h["user-email"].value=y.email||"",h["user-telephone"].value=y.telephone||"",h["exclude-prices"].checked=!!y.excludePrices,h["exclude-qty"].checked=!!y.excludeQty,h["exclude-long-description"].checked=!!y.excludeLongDescription,h["include-gst"].checked=!!y.includeGst)}),h&&(h.addEventListener("input",()=>{x.setStorageItem(p,{name:h["user-name"].value,project:h["user-project"].value,address:h["user-address"].value,email:h["user-email"].value,telephone:h["user-telephone"].value,excludePrices:h["exclude-prices"].checked,excludeQty:h["exclude-qty"].checked,excludeLongDescription:h["exclude-long-description"].checked,includeGst:h["include-gst"].checked})}),h.addEventListener("change",()=>{x.setStorageItem(p,{name:h["user-name"].value,project:h["user-project"].value,address:h["user-address"].value,email:h["user-email"].value,telephone:h["user-telephone"].value,excludePrices:h["exclude-prices"].checked,excludeQty:h["exclude-qty"].checked,excludeLongDescription:h["exclude-long-description"].checked,includeGst:h["include-gst"].checked})}),h.onsubmit=y=>{var S,w,v,b,E,k,R,I,T,B,U;y.preventDefault(),x.setStorageItem(p,{name:h["user-name"].value,project:h["user-project"].value,address:h["user-address"].value,email:h["user-email"].value,telephone:h["user-telephone"].value,excludePrices:h["exclude-prices"].checked,excludeQty:h["exclude-qty"].checked,excludeLongDescription:h["exclude-long-description"].checked,includeGst:h["include-gst"].checked});const f={name:((S=h["user-name"])==null?void 0:S.value)||"",project:((w=h["user-project"])==null?void 0:w.value)||"",address:((v=h["user-address"])==null?void 0:v.value)||"",email:((b=h["user-email"])==null?void 0:b.value)||"",telephone:((E=h["user-telephone"])==null?void 0:E.value)||"",excludePrice:(k=h["exclude-qty"])!=null&&k.checked?!0:((R=h["exclude-price"])==null?void 0:R.checked)||((I=h["exclude-prices"])==null?void 0:I.checked)||!1,excludeQty:((T=h["exclude-qty"])==null?void 0:T.checked)||!1,excludeLongDescription:((B=h["exclude-long-description"])==null?void 0:B.checked)||!1,includeGst:((U=h["include-gst"])==null?void 0:U.checked)||!1,exportCsv:!0};console.log("DEBUG: userDetails created for PDF:",f),window.showPdfFormScreen?window.showPdfFormScreen(f):typeof showPdfFormScreen=="function"&&showPdfFormScreen(f),u&&(u.style.display="none")})}addEmptyRow(){const e=`row_${this.nextRowId++}`,t={id:e,product:null,room:"Blank",quantity:1,price:"0.00",notes:""};this.gridRows.push(t),this.renderGrid(),setTimeout(()=>{const o=document.querySelector(`[data-row-id="${e}"]`);o&&(o.scrollIntoView({behavior:"smooth",block:"center"}),o.style.backgroundColor="#dbeafe",o.style.transition="background-color 0.3s ease",setTimeout(()=>{o.style.backgroundColor="";const s=o.querySelector(".grid-search-input");s&&s.focus()},800))},100)}removeRow(e){const t=this.gridRows.findIndex(o=>o.id===e);if(t!==-1){const o=this.gridRows[t],s={...o,index:t,product:o.product?{...o.product}:null};if(o.product&&o.storageId&&C.removeProductFromSelection(o.storageId),this.gridRows.splice(t,1),this.renderGrid(),this.updateTotals(),s.product){const i=s.product.Description||s.product.ProductName||s.product.OrderCode||"Product",n=i.length>30?i.substring(0,30)+"...":i;ge.withUndo(`Removed "${n}"`,()=>{this.restoreRow(s)})}}this.ensureAtLeastOneEmptyRow()}restoreRow(e){const t={id:`row-${this.nextRowId++}`,product:e.product,qty:e.qty||1,notes:e.notes||"",room:e.room||"Blank",price:e.price||null,storageId:null};t.product&&(t.storageId=C.addProductToSelection(t.product,{notes:t.notes,room:t.room,quantity:t.quantity}));const o=Math.min(e.index,this.gridRows.length);this.gridRows.splice(o,0,t),this.renderGrid(),this.updateTotals(),ge.success("Product restored")}moveRow(e,t){const o=this.gridRows.findIndex(n=>n.id===e);if(o===-1)return;let s;if(t==="up"?s=Math.max(0,o-1):t==="down"&&(s=Math.min(this.gridRows.length-1,o+1)),s===o)return;const i=this.gridRows.splice(o,1)[0];this.gridRows.splice(s,0,i),this.renderGrid(),this.updateTotals(),setTimeout(()=>{const n=document.querySelector(`[data-row-id="${e}"]`);n&&(n.style.backgroundColor="#dbeafe",setTimeout(()=>{n.style.backgroundColor=""},500))},100)}async handleProductSearch(e,t){if(!t||t.length<2){this.hideSearchDropdown(e);return}const o=t.toLowerCase();if(this.searchCache.has(o)){this.showSearchResults(e,this.searchCache.get(o),t);return}this.dropdownManager.showLoadingDropdown(e),clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(async()=>{try{const s=await this.searchProducts(t);this.searchCache.set(o,s),this.showSearchResults(e,s,t)}catch(s){console.error("Product search failed:",s),this.hideSearchDropdown(e)}},300)}_isSeimaCatalogOrderCode(e){const t=String(e??"").trim();return!!(t&&_.isLoaded&&_.findProductByCode(t))}async searchProducts(e){var l;_.isLoaded||await new Promise(d=>{const u=()=>{_.isLoaded?d():setTimeout(u,100)};u()});const t=P.isEnabled();P.isWriteEnabled();const o=!!L.getCurrentUser();let s=null;if(t&&e.trim().length>=2&&!e.includes(" "))try{s=await P.findSeimaMatches(e.trim())}catch{}const[i,n,r]=await Promise.all([Promise.resolve(_.searchProducts(e,50)),t?P.findAlternatives(e).catch(d=>(console.warn("Crosshair competitor lookup failed:",d),[])):Promise.resolve([]),t&&o?P.findUnvalidatedProducts(e).catch(d=>(console.warn("Crosshair unvalidated lookup failed:",d),[])):Promise.resolve([])]),c=[...this.applyGuidedFilters(i)];if(s&&((l=s.matches)==null?void 0:l.length)>0){const d=String(s.matches[0].SeimaSKU),u=_.findProductByCode(d);if(u&&!c.some(m=>(m.OrderCode||m.Code)===d)){const m=s.competitorProduct,p=String((m==null?void 0:m.product_code)||s.matches[0].CompetitorSKU||""),h=(m==null?void 0:m.product_name)||"",y=(m==null?void 0:m.finish)||"",f=[P.getPublicCompetitorLabel(s.competitor)+":",p,h?"- "+h:"",y?"- "+y:""].filter(Boolean).join(" ");c.unshift({...u,_crosshairMatch:{competitor:s.competitor,competitorProduct:m,competitorLabel:f,confidence:s.matches[0].Confidence,reason:s.matches[0].MatchReason,status:s.matches[0].Status}})}}if(n.length>0){const d=new Set(c.map(u=>u.OrderCode));for(const u of n){const m=_.findProductByCode(u.seimaSKU);if(!m||d.has(m.OrderCode))continue;d.add(m.OrderCode);const p=u.competitorProduct,h=String((p==null?void 0:p.product_code)||u.match.CompetitorSKU||""),y=(p==null?void 0:p.product_name)||"",f=(p==null?void 0:p.finish)||"",S=[P.getPublicCompetitorLabel(u.competitor)+":",h,y?"- "+y:"",f?"- "+f:""].filter(Boolean).join(" ");c.unshift({...m,_crosshairMatch:{competitor:u.competitor,competitorProduct:p,competitorLabel:S,confidence:u.match.Confidence,reason:u.match.MatchReason,status:u.match.Status}})}}if(r.length>0)for(const d of r){const u=d.product,m=String(u.product_code||"");if(this._isSeimaCatalogOrderCode(m))continue;const p=(u.brand||"").trim();c.push({_crosshairValidate:{competitor:d.competitor,productCode:m,validatorSearch:p&&m?`${p} ${m}`.trim():m,productName:u.product_name||u.collection||m,matchCount:d.matchCount,imageUrl:u.image_url,finish:u.finish||""}})}if(c.length===0&&t&&e.trim().length>=3&&!e.includes(" "))try{const d=await P.findCompetitorEntryByCode(e.trim());if(d){const u=d.competitorProduct,m=String((u==null?void 0:u.product_code)||d.matchedCode||e.trim());if(!this._isSeimaCatalogOrderCode(m)){const p=((u==null?void 0:u.brand)||"").trim();c.push({_crosshairValidate:{competitor:d.competitor,productCode:m,validatorSearch:p&&m?`${p} ${m}`.trim():m,productName:(u==null?void 0:u.product_name)||(u==null?void 0:u.collection)||m,matchCount:0,imageUrl:(u==null?void 0:u.image_url)||"",finish:(u==null?void 0:u.finish)||""}})}}}catch{}return c}_publicCatalogOnly(e){return Array.isArray(e)?e.filter(t=>t&&t._outsidePublicPricelist!==!0):[]}setupGuidedAssist(){const e=document.getElementById("guided-assist-toggle"),t=document.getElementById("guided-assist-panel"),o=document.getElementById("guided-category-select"),s=document.getElementById("guided-group-select"),i=document.getElementById("guided-range-search"),n=document.getElementById("guided-ask-fred"),r=document.getElementById("guided-clear-filters"),a=document.getElementById("guided-suggestions-list");if(!e||!t||!o||!s||!i||!n||!r||!a)return;const c=this._publicCatalogOnly(_.getAllProducts()),l=[...new Set(c.map(d=>String(d.SubGroup||d.Subgroup||d["Sub Group"]||"").trim()).filter(Boolean))].sort((d,u)=>d.localeCompare(u));o.innerHTML=['<option value="">Any category</option>',...l.map(d=>`<option value="${x.escapeHtml(d)}">${x.sanitizeInput(d)}</option>`)].join(""),e.addEventListener("click",()=>{this.guidedAssist.enabled=!this.guidedAssist.enabled,t.style.display=this.guidedAssist.enabled?"block":"none",e.setAttribute("aria-expanded",String(this.guidedAssist.enabled)),e.textContent=this.guidedAssist.enabled?"Hide range explorer":"Browse full range",this.renderGuidedSuggestions()}),o.addEventListener("change",()=>{this.guidedAssist.category=o.value,this.guidedAssist.group="",this.refreshGuidedGroupOptions(),this.searchCache.clear(),this.renderGuidedSuggestions()}),s.addEventListener("change",()=>{this.guidedAssist.group=s.value,this.searchCache.clear(),this.renderGuidedSuggestions()}),i.addEventListener("input",()=>{clearTimeout(this.guidedSearchTimeout),this.guidedSearchTimeout=setTimeout(()=>{this.guidedAssist.query=String(i.value||"").trim(),this.renderGuidedSuggestions()},180)}),n.addEventListener("click",()=>{const d=document.getElementById("ai-chat-trigger");d&&d.click()}),r.addEventListener("click",()=>{this.guidedAssist.category="",this.guidedAssist.group="",this.guidedAssist.query="",o.value="",s.value="",i.value="",this.refreshGuidedGroupOptions(),this.searchCache.clear(),this.renderGuidedSuggestions()}),a.addEventListener("click",d=>{const u=d.target.closest(".guided-suggestion-add");if(u){const y=u.dataset.code;if(!y)return;const f=_.findProductByCode(y);if(!f)return;const S=this.gridRows.find(w=>!w.product)||null;if(S){const w=document.querySelector(`[data-row-id="${S.id}"] .grid-search-input`);if(w){this.selectProduct(w,f);return}}this.addEmptyRow(),setTimeout(()=>{const w=this.gridRows[this.gridRows.length-1],v=w?document.querySelector(`[data-row-id="${w.id}"] .grid-search-input`):null;v&&this.selectProduct(v,f)},80);return}const m=d.target.closest(".guided-suggestion-item");if(!m)return;const p=m.dataset.code;if(!p)return;const h=_.findProductByCode(p);h&&this._showProductDetailModal(h)}),this.refreshGuidedGroupOptions(),this.renderGuidedSuggestions()}refreshGuidedGroupOptions(){const e=document.getElementById("guided-group-select");if(!e)return;const t=this._publicCatalogOnly(_.getAllProducts()),o=[...new Set(t.filter(s=>!this.guidedAssist.category||String(s.SubGroup||s.Subgroup||s["Sub Group"]||"").trim()===this.guidedAssist.category).map(s=>String(s.Group||"").trim()).filter(Boolean))].sort((s,i)=>s.localeCompare(i));e.innerHTML=['<option value="">Any group</option>',...o.map(s=>`<option value="${x.escapeHtml(s)}">${x.sanitizeInput(s)}</option>`)].join("")}applyGuidedFilters(e){if(!this.guidedAssist.enabled)return e;const{category:t,group:o}=this.guidedAssist;return!t&&!o?e:e.filter(s=>{const i=String(s.SubGroup||s.Subgroup||s["Sub Group"]||"").trim(),n=String(s.Group||"").trim();return!(t&&i!==t||o&&n!==o)})}renderGuidedSuggestions(){const e=document.getElementById("guided-suggestions-list"),t=document.getElementById("guided-selection-hint");if(!e||!t)return;if(!this.guidedAssist.enabled){e.innerHTML="",t.textContent="Open Range Explorer to browse the full catalog with images, filters, and smart search.";return}const{category:o,group:s,query:i}=this.guidedAssist,n=i&&i.length>=2?_.searchProducts(i,300):_.getAllProducts(),r=this._publicCatalogOnly(n),a=this.applyGuidedFilters(r);if(a.length===0){e.innerHTML="",t.textContent=i?`No products found for "${i}" with current filters.`:"No products found for the selected filters.";return}t.textContent=`Showing ${a.length} products${o?` · ${o}`:""}${s?` / ${s}`:""}${i?` · "${i}"`:""}.`,e.innerHTML=a.map(c=>{const l=c.OrderCode||"",d=c.Description||c.ProductName||c["Product Name"]||"",u=c.SubGroup||c["Sub Group"]||"",m=u?`<span class="guided-badge">Category: ${x.sanitizeInput(u)}</span>`:"",p=c.Image_URL||c.imageUrl||c.Image||"assets/no-image.png";return`
        <div class="guided-suggestion-item" data-code="${x.sanitizeInput(l)}">
          <img class="guided-suggestion-image" src="${x.sanitizeInput(p)}" alt="${x.sanitizeInput(d)}" onerror="this.src='assets/no-image.png';">
          <div class="guided-suggestion-main">
            <div class="guided-suggestion-title"><strong>${x.sanitizeInput(l)}</strong> ${x.sanitizeInput(d)}</div>
            <div class="guided-badges">${m}</div>
          </div>
          <div class="guided-suggestion-actions">
            <button type="button" class="guided-suggestion-add" data-code="${x.sanitizeInput(l)}">Add</button>
          </div>
        </div>
      `}).join("")}showSearchResults(e,t,o){let s=!1;if(t.length>0&&o){const i=o.toUpperCase().trim(),n=t[0],r=(n.OrderCode||"").toString().toUpperCase().trim(),a=(n.BARCODE||n.Barcode||"").toString().toUpperCase().trim();(r===i||a===i)&&(s=!0)}this.dropdownManager.showDropdown(e,t,i=>this.selectProduct(e,i),s)}setupDropdownEvents(e,t){}hideSearchDropdown(e){this.hideGlobalDropdown()}hideGlobalDropdown(){this.dropdownManager.hideDropdown()}selectProduct(e,t){var c;const o=e.closest(".grid-row"),s=o.dataset.rowId,i=this.gridRows.find(l=>l.id===s);if(!i)return;let n=null;i.storageId&&((c=i.product)!=null&&c._placeholder)&&(n=C.getSelectedProducts().findIndex(d=>d.id===i.storageId),C.removeProductFromSelection(i.storageId),i.storageId=null),i.product=t;const r=t.RRP_EX||t["RRP EX GST"]||t.RRP_EX||t.RRP_EXGST||t.rrpExGst||t["PL1 - RRP EX GST"]||"";i.price=r;const a=o.querySelector('input[name="price"]');a&&(a.value=r),e.value="",this.renderGrid(),this.saveRowToStorage(i,n),this.focusNextRowOrCreate(s)}saveRowToStorage(e,t=null){if(!e.product)return;const o={...e.product,OrderCode:e.product.OrderCode||e.product.Code||"",Description:e.product.Description||e.product.ProductName||e.product["Product Name"]||"",UserEditedPrice:e.price,RRP_EX:e.product.RRP_EX||e.product["RRP EX GST"]||e.product.RRP_EX||e.product.RRP_EXGST||e.product.rrpExGst||e.product["PL1 - RRP EX GST"]||"",RRP_INCGST:e.product.RRP_INCGST||e.product["RRP INC GST"]||e.product.rrpIncGst||"",Image_URL:e.product.Image_URL||e.product.imageUrl||e.product.Image||"assets/no-image.png"};if(e.storageId){C.updateSelectionProduct(e.storageId,o,{notes:e.notes,room:e.room,quantity:e.quantity,userPrice:e.price})&&this.updateTotals();return}let s;t!=null&&t>=0?s=C.addProductToSelectionAt(t,o,{notes:e.notes,room:e.room,quantity:e.quantity}):s=C.addProductToSelection(o,{notes:e.notes,room:e.room,quantity:e.quantity}),s&&(e.storageId=s,this.updateTotals())}focusNextRowOrCreate(e){const t=this.gridRows.findIndex(o=>o.id===e);if(t<this.gridRows.length-1){const o=this.gridRows[t+1];setTimeout(()=>{const s=document.querySelector(`[data-row-id="${o.id}"] .grid-search-input`);s&&!s.classList.contains("populated")&&s.focus()},100)}else this.addEmptyRow()}handleGridInput(e){const t=e.target;t.classList.contains("grid-search-input")&&!t.classList.contains("populated")?this.handleProductSearch(t,t.value):(t.classList.contains("grid-input")||t.classList.contains("grid-textarea")||t.classList.contains("grid-select"))&&this.updateRowFromInput(t)}handleGridChange(e){const t=e.target;(t.classList.contains("grid-select")||t.classList.contains("grid-input")||t.classList.contains("grid-textarea"))&&this.updateRowFromInput(t)}handleGridClick(e){var i,n,r;const t=e.target;if(t.classList.contains("grid-product-image")){const a=t.closest(".grid-row"),c=(i=a==null?void 0:a.dataset)==null?void 0:i.rowId,l=this.gridRows.find(d=>d.id===c);l!=null&&l.product&&!l.product._placeholder&&this._showProductDetailModal(l.product);return}const o=t.closest(".grid-competitor-code-link");if(o){e.preventDefault();const a=o.dataset.competitor,c=o.dataset.code,l=o.closest(".grid-row"),d=(n=l==null?void 0:l.dataset)==null?void 0:n.rowId;if(a&&c)if(P.isWriteEnabled())this.openValidatorModal(a,c,d);else{const u=l==null?void 0:l.querySelector(".grid-search-input");Le.open(`${P.getPublicCompetitorLabel(a)}: ${c}`,m=>{const p=String((m==null?void 0:m.OrderCode)||(m==null?void 0:m.Code)||"").trim();if(p&&d){this._applyVerifiedSeimaToRow(d,p);return}u&&this.selectProduct(u,m)})}return}const s=t.closest(".grid-placeholder-hint");if(s){const a=s.closest(".grid-row"),c=(r=a==null?void 0:a.dataset)==null?void 0:r.rowId;c&&this.openPlaceholderSearch(c).catch(l=>{console.warn("Placeholder search open failed:",l)});return}if(t.classList.contains("grid-remove-btn")){const c=t.closest(".grid-row").dataset.rowId;this.removeRow(c)}else if(t.classList.contains("grid-move-btn")){const c=t.closest(".grid-row").dataset.rowId,l=t.dataset.direction;this.moveRow(c,l)}else t.closest(".grid-search-dropdown")||document.querySelectorAll(".grid-search-dropdown.visible").forEach(a=>{a.classList.remove("visible")})}handleGridKeydown(e){if(e.target.classList.contains("grid-search-input")){const t=document.querySelector(".global-search-dropdown");t?this.handleDropdownKeyboard(e,t):e.key==="Enter"&&(e.preventDefault(),this.handleProductSearch(e.target,e.target.value))}}handleDropdownKeyboard(e,t){const o=document.querySelector(".global-search-dropdown");if(!o)return;const s=o.querySelectorAll("li[data-product]"),i=o.querySelector("li.active");let n=null;const r=(a,c)=>{c?(a.dataset.origBg||(a.dataset.origBg=a.style.background||"#fff"),a.classList.add("active"),a.style.setProperty("background","rgba(184,115,51,0.12)","important")):(a.classList.remove("active"),a.style.setProperty("background",a.dataset.origBg||"#fff","important"))};switch(e.key){case"ArrowDown":if(e.preventDefault(),!i)n=s[0];else{r(i,!1);const c=(Array.from(s).indexOf(i)+1)%s.length;n=s[c]}n&&(r(n,!0),n.scrollIntoView({block:"nearest"}));break;case"ArrowUp":if(e.preventDefault(),!i)n=s[s.length-1];else{r(i,!1);const a=Array.from(s).indexOf(i),c=a===0?s.length-1:a-1;n=s[c]}n&&(r(n,!0),n.scrollIntoView({block:"nearest"}));break;case"Enter":e.preventDefault(),i&&i.click();break;case"Escape":e.preventDefault(),this.hideGlobalDropdown();break}}handleGridFocusIn(e){}handleGridFocusOut(e){}handleDragStart(e){const t=e.target.closest(".grid-row");if(!t){e.preventDefault();return}if(t.classList.contains("room-header-row")){const o=t.dataset.roomName;if(o==="Blank"){e.preventDefault();return}if(this.draggedRoomName=o,this.draggedRowId=null,e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("text/plain",`room:${o}`),t.classList.add("dragging"),e.dataTransfer.setDragImage){const s=document.createElement("div");s.textContent=`📁 ${o}`,s.style.cssText=`
          position: absolute; top: -1000px; padding: 8px 16px;
          background: #374151; color: white; border-radius: 6px;
          font-weight: 600; font-size: 14px;
        `,document.body.appendChild(s),e.dataTransfer.setDragImage(s,0,15),setTimeout(()=>s.remove(),0)}return}if(!e.target.classList.contains("grid-drag-handle")){e.preventDefault();return}if(this.draggedRowId=t.dataset.rowId,this.draggedRoomName=null,e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("text/plain",t.dataset.rowId),t.classList.add("dragging"),e.dataTransfer.setDragImage){const o=t.cloneNode(!0);o.style.opacity="0.8",o.style.position="absolute",o.style.top="-1000px",o.style.width=t.offsetWidth+"px",document.body.appendChild(o),e.dataTransfer.setDragImage(o,t.offsetWidth-10,20),setTimeout(()=>o.remove(),0)}}handleDragOver(e){e.preventDefault(),e.dataTransfer.dropEffect="move";const t=e.target.closest(".grid-row");if(!t||t.classList.contains("dragging"))return;if(document.querySelectorAll(".grid-row.drag-over-above, .grid-row.drag-over-below").forEach(i=>{i.classList.remove("drag-over-above","drag-over-below")}),this.draggedRoomName){if(!t.classList.contains("room-header-row")||t.dataset.roomName==="Blank"||t.dataset.roomName===this.draggedRoomName)return;const i=t.getBoundingClientRect(),n=i.top+i.height/2;e.clientY<n?t.classList.add("drag-over-above"):t.classList.add("drag-over-below");return}if(t.classList.contains("room-header-row"))return;const o=t.getBoundingClientRect(),s=o.top+o.height/2;e.clientY<s?t.classList.add("drag-over-above"):t.classList.add("drag-over-below")}handleDragLeave(e){const t=e.target.closest(".grid-row");if(t){const o=e.relatedTarget;t.contains(o)||t.classList.remove("drag-over-above","drag-over-below")}}handleDrop(e){e.preventDefault(),document.querySelectorAll(".grid-row.drag-over-above, .grid-row.drag-over-below").forEach(m=>{m.classList.remove("drag-over-above","drag-over-below")});const t=e.dataTransfer.getData("text/plain"),o=e.target.closest(".grid-row");if(!o||!t)return;if(t.startsWith("room:")){const m=t.replace("room:","");if(!o.classList.contains("room-header-row"))return;const p=o.dataset.roomName;if(p==="Blank"||m===p)return;const h=o.getBoundingClientRect(),y=e.clientY<h.top+h.height/2;this.moveRoomInOrder(m,p,y),this.renderGrid();return}const s=t;if(o.classList.contains("room-header-row"))return;const i=o.dataset.rowId;if(s===i)return;const n=o.getBoundingClientRect(),r=e.clientY<n.top+n.height/2,a=this.gridRows.findIndex(m=>m.id===s),c=this.gridRows.findIndex(m=>m.id===i);if(a===-1||c===-1)return;const l=this.gridRows[a],d=this.gridRows[c];l.room!==d.room&&(l.room=d.room,this.lastUsedRoom=d.room,l.product&&l.storageId&&C.updateProductRoom(l.storageId,l.room)),this.gridRows.splice(a,1);let u=this.gridRows.findIndex(m=>m.id===i);u!==-1&&(r||u++,this.gridRows.splice(u,0,l),this.renderGrid(),setTimeout(()=>{const m=document.querySelector(`[data-row-id="${s}"]`);m&&(m.style.backgroundColor="#dbeafe",m.style.transition="background-color 0.3s ease",setTimeout(()=>{m.style.backgroundColor=""},500))},50))}handleDragEnd(e){this.draggedRowId=null,this.draggedRoomName=null,document.querySelectorAll(".grid-row.dragging").forEach(t=>t.classList.remove("dragging")),document.querySelectorAll(".grid-row.drag-over-above").forEach(t=>t.classList.remove("drag-over-above")),document.querySelectorAll(".grid-row.drag-over-below").forEach(t=>t.classList.remove("drag-over-below"))}hideAllDropdowns(){this.hideGlobalDropdown()}showClearAllModal(){const e=document.getElementById("clear-all-modal");e&&(e.style.display="flex")}hideClearAllModal(){const e=document.getElementById("clear-all-modal");e&&(e.style.display="none")}async showSettingsModal(){const e=document.getElementById("settings-modal");e&&(e.style.display="flex",setTimeout(async()=>{const t=C.getUserSettings(),o=L.getCurrentUser(),s=document.getElementById("staff-name"),i=document.getElementById("staff-position"),n=document.getElementById("staff-email"),r=document.getElementById("staff-telephone"),a=document.getElementById("logged-in-profile-section"),c=document.getElementById("profile-avatar"),l=document.getElementById("profile-display-name"),d=document.getElementById("profile-display-email"),u=document.getElementById("edit-profile-btn");if(t&&(t.staffName||t.staffEmail)?(s&&(s.value=t.staffName||""),i&&(i.value=t.staffPosition||""),n&&(n.value=t.staffEmail||""),r&&(r.value=t.staffPhone||"")):o&&(s&&o.name&&(s.value=o.name),i&&o.position&&(i.value=o.position),n&&o.email&&(n.value=o.email),r&&o.phone&&(r.value=o.phone)),o){a&&(a.style.display="block"),l&&(l.textContent=o.name||""),d&&(d.textContent=o.email||""),c&&(c.textContent=this.getInitials(o.name)),u&&(u.onclick=()=>{Z.showEditProfile(S=>{console.log("📱 Profile updated:",S),C.clearUserSettings(),this.showSettingsModal()})});const f=document.getElementById("change-password-btn");f&&(f.onclick=()=>{Z.showChangePassword(()=>{console.log("📱 Password changed")})})}else a&&(a.style.display="none");const p=document.getElementById("settings-version-info");p&&(p.innerText=`v${F.VERSION}`,p.title="App Version");const h=document.getElementById("refresh-catalog-btn");h&&(h.onclick=async()=>{try{const{del:f,keys:S}=await M(async()=>{const{del:b,keys:E}=await import("./vendor-idb-DwnyWBFG.js");return{del:b,keys:E}},[]),w=await S(),v=["productCatalogCsv","customerLogo","fredChatHistory","fredChatMessages","fredFeedback","fredQuestionLog"];await Promise.all(w.filter(b=>typeof b=="string"&&(v.includes(b)||b.startsWith("crosshair_"))).map(b=>f(b)))}catch{}localStorage.removeItem("configPreferences"),localStorage.removeItem("pdfWizardSettings"),Object.keys(localStorage).filter(f=>f.startsWith("crosshair_")||f.startsWith("fred")).forEach(f=>localStorage.removeItem(f)),window.location.reload()});const y=document.getElementById("refresh-pdf-files-btn");y&&(y.onclick=async()=>{await this.refreshPdfFileList();const f=y.textContent;y.textContent="✅ Refreshed!",y.style.background="#dcfce7",y.style.color="#059669",setTimeout(()=>{y.textContent=f,y.style.background="#f3f4f6",y.style.color="#059669"},2e3)}),this.loadCustomerLogoPreview(),this.setupCustomerLogoHandlers(),await this.populateTipTailDropdowns(),this.loadTipTailSelections(),this.setupTipTailHandlers()},0))}getInitials(e){if(!e)return"?";const t=e.trim().split(" ");return t.length>=2?(t[0][0]+t[t.length-1][0]).toUpperCase():t[0][0].toUpperCase()}async loadCustomerLogoPreview(){const e=document.getElementById("customer-logo-preview");try{const{get:t}=await M(async()=>{const{get:s}=await import("./vendor-idb-DwnyWBFG.js");return{get:s}},[]),o=await t(Ge);e&&(e.innerHTML=o?`<img src="${o}" style="max-height:100px;max-width:180px;width:auto;height:auto;object-fit:contain;">`:"")}catch{e&&(e.innerHTML="")}localStorage.removeItem(Ge)}setupCustomerLogoHandlers(){const e=document.getElementById("customer-logo-upload"),t=document.getElementById("customer-logo-clear"),o=document.getElementById("customer-logo-preview");e.onchange=s=>{const i=s.target.files[0];if(i){const n=new FileReader;n.onload=async r=>{try{const{set:a}=await M(async()=>{const{set:c}=await import("./vendor-idb-DwnyWBFG.js");return{set:c}},[]);await a(Ge,r.target.result)}catch{}o&&(o.innerHTML=`<img src="${r.target.result}" style="max-height:100px;max-width:180px;width:auto;height:auto;object-fit:contain;">`)},n.readAsDataURL(i)}},t.onclick=async()=>{try{const{del:s}=await M(async()=>{const{del:i}=await import("./vendor-idb-DwnyWBFG.js");return{del:i}},[]);await s(Ge)}catch{}o&&(o.innerHTML=""),e&&(e.value="")}}async populateTipTailDropdowns(){console.log("🔍 Discovering available PDF files...");const t=(await this.detectAvailablePdfFiles()).map(i=>`./assets/${i}`),o=document.getElementById("tip-pdf-select"),s=document.getElementById("tail-pdf-select");o&&s&&(o.innerHTML='<option value="">(None)</option>',s.innerHTML='<option value="">(None)</option>',t.forEach(i=>{const n=i.split("/").pop();o.innerHTML+=`<option value="${i}">${n}</option>`,s.innerHTML+=`<option value="${i}">${n}</option>`}))}async detectAvailablePdfFiles(){try{const o=await fetch("./assets-list");if(o.ok){const s=await o.json();return console.log("✅ Server provided files:",s),s}}catch{console.log("ℹ️ Server endpoint not available, trying assets-list.json...")}try{const o=await fetch("./assets-list.json");if(o.ok){const s=await o.json();return console.log("✅ assets-list.json provided files:",s),s}}catch{console.log("ℹ️ assets-list.json not available, using fallback list...")}const e=["tip-AandD.pdf","tip-Builder.pdf","tip-Merchant.pdf","tip-Volume Merchant.pdf","tail.pdf","tail-generic.pdf"];console.log("🔍 Testing individual file availability...");const t=[];for(const o of e)try{const s=await fetch(`./assets/${o}`,{method:"HEAD"});s.ok?(t.push(o),console.log(`✅ Found: ${o}`)):console.log(`❌ Not found: ${o} (${s.status})`)}catch(s){console.log(`❌ Error checking ${o}:`,s.message)}return console.log(`🎯 Dynamically detected PDF files (${t.length} found):`,t),t}async refreshPdfFileList(){console.log("🔄 Refreshing PDF file list..."),await this.populateTipTailDropdowns(),console.log("✅ PDF file list refreshed")}loadTipTailSelections(){const e=JSON.parse(localStorage.getItem(ot)||"{}"),t=document.getElementById("tip-pdf-select"),o=document.getElementById("tail-pdf-select"),s=document.getElementById("tip-pdf-upload"),i=document.getElementById("tail-pdf-upload");t&&(e.tipUpload?(t.innerHTML='<option value="">Custom file selected</option>',t.value="",s&&(s.style.fontWeight="bold",s.style.color="#2563eb")):e.tipAsset&&(t.value=e.tipAsset)),o&&(e.tailUpload?(o.innerHTML='<option value="">Custom file selected</option>',o.value="",i&&(i.style.fontWeight="bold",i.style.color="#2563eb")):e.tailAsset&&(o.value=e.tailAsset))}setupTipTailHandlers(){const e=document.getElementById("tip-pdf-select"),t=document.getElementById("tail-pdf-select"),o=document.getElementById("tip-pdf-upload"),s=document.getElementById("tail-pdf-upload"),i=document.getElementById("tip-pdf-clear"),n=document.getElementById("tail-pdf-clear"),r=document.getElementById("tip-pdf-selected"),a=document.getElementById("tail-pdf-selected");e.onchange=()=>{this.saveTipTailSettings({tipAsset:e.value,tipUpload:null,tipUploadName:""}),r&&(r.textContent="")},t.onchange=()=>{this.saveTipTailSettings({tailAsset:t.value,tailUpload:null,tailUploadName:""}),a&&(a.textContent="")},o.onchange=c=>{const l=c.target.files[0];if(l){const d=new FileReader;d.onload=u=>{const m=u.target.result,p=new Uint8Array(m);let h="";for(let f=0;f<p.length;f++)h+=String.fromCharCode(p[f]);const y=btoa(h);this.saveTipTailSettings({tipAsset:"",tipUpload:y,tipUploadName:l.name}),e&&(e.value="",e.innerHTML='<option value="">Custom file selected</option>'),o&&(o.style.fontWeight="bold",o.style.color="#2563eb")},d.readAsArrayBuffer(l)}},s.onchange=c=>{const l=c.target.files[0];if(l){const d=new FileReader;d.onload=u=>{const m=u.target.result,p=new Uint8Array(m);let h="";for(let f=0;f<p.length;f++)h+=String.fromCharCode(p[f]);const y=btoa(h);this.saveTipTailSettings({tailAsset:"",tailUpload:y,tailUploadName:l.name}),t&&(t.value="",t.innerHTML='<option value="">Custom file selected</option>'),s&&(s.style.fontWeight="bold",s.style.color="#2563eb")},d.readAsArrayBuffer(l)}},i.onclick=async()=>{this.saveTipTailSettings({tipAsset:"",tipUpload:null,tipUploadName:""}),e&&(e.value="",e.innerHTML='<option value="">(None)</option>',(await this.detectAvailablePdfFiles()).forEach(l=>{e.innerHTML+=`<option value="assets/${l}">${l}</option>`})),o&&(o.value="",o.style.fontWeight="normal",o.style.color="")},n.onclick=async()=>{this.saveTipTailSettings({tailAsset:"",tailUpload:null,tailUploadName:""}),t&&(t.value="",t.innerHTML='<option value="">(None)</option>',(await this.detectAvailablePdfFiles()).forEach(l=>{t.innerHTML+=`<option value="assets/${l}">${l}</option>`})),s&&(s.value="",s.style.fontWeight="normal",s.style.color="")}}saveTipTailSettings(e){const o={...JSON.parse(localStorage.getItem(ot)||"{}"),...e};localStorage.setItem(ot,JSON.stringify(o))}hideSettingsModal(){const e=document.getElementById("settings-modal");e&&(e.style.display="none")}saveSettings(){var n,r,a,c;const e=((n=document.getElementById("staff-name"))==null?void 0:n.value)||"",t=((r=document.getElementById("staff-position"))==null?void 0:r.value)||"",o=((a=document.getElementById("staff-email"))==null?void 0:a.value)||"",s=((c=document.getElementById("staff-telephone"))==null?void 0:c.value)||"",i={staffName:e.trim(),staffPosition:t.trim(),staffEmail:o.trim(),staffPhone:s.trim()};C.saveUserSettings(i),this.hideSettingsModal(),console.log("Settings saved successfully:",i)}loadSettings(){const e=C.getUserSettings(),t=document.getElementById("staff-name"),o=document.getElementById("staff-position"),s=document.getElementById("staff-email"),i=document.getElementById("staff-telephone");t&&(t.value=e.staffName||""),o&&(o.value=e.staffPosition||""),s&&(s.value=e.staffEmail||""),i&&(i.value=e.staffPhone||"")}updateRowFromInput(e){const t=e.closest(".grid-row"),o=t.dataset.rowId,s=this.gridRows.find(n=>n.id===o);if(!s)return;let i=!1;if(e.classList.contains("grid-select")&&e.name==="room")if(e.value==="__ADD_NEW_ROOM__"){const n=prompt("Enter new room name:");if(n&&n.trim()){const r=n.trim();if(C.addCustomRoom(r))s.room=r,this.lastUsedRoom=r,console.log("✅ Added new room:",r),this.updateAllRoomDropdowns(),e.value=r;else{alert("Room name already exists or is invalid"),e.value=s.room||"Blank";return}}else{e.value=s.room||"Blank";return}}else s.room=e.value,this.lastUsedRoom=e.value;else e.classList.contains("grid-input")&&e.name==="quantity"?(s.quantity=Math.max(1,parseInt(e.value)||1),e.value=s.quantity,i=!0):e.classList.contains("grid-input")&&e.name==="price"?(s.price=e.value,i=!0):e.classList.contains("grid-textarea")&&e.name==="notes"&&(s.notes=e.value);i&&this.updateRowTotal(t,s),s.product&&s.storageId&&(C.updateProductQuantity(s.storageId,s.quantity),C.updateProductRoom(s.storageId,s.room),C.updateProductNotes(s.storageId,s.notes),i&&e.name==="price"&&C.updateProductPrice(s.storageId,s.price),this.updateTotals())}updateRowTotal(e,t){const o=e.querySelector(".grid-total-display");if(o){const s=parseFloat((t.price||"").toString().replace(/,/g,""))||0,i=parseInt(t.quantity)||1,n=s*i;o.textContent=n>0?n.toLocaleString("en-AU",{minimumFractionDigits:2,maximumFractionDigits:2}):""}}loadExistingProducts(){const e=C.getSelectedProducts(),t=_.getAllProducts();this.gridRows=[],this.nextRowId=1,e.forEach((o,s)=>{var a,c,l,d,u,m,p,h,y;const i=`row_${this.nextRowId++}`;if(o.product&&t.length>0){const f=(o.product.OrderCode||o.product.orderCode||"").toString().trim().toLowerCase();if(f){const S=t.find(w=>[w.OrderCode,w.orderCode,w["Order Code"]].some(v=>v&&String(v).trim().toLowerCase()===f));if(S){const w=S.RRP_EX||S["RRP EX GST"]||S["PL1 - RRP EX GST"]||"";w&&parseFloat(w)>0&&(o.product.RRP_EX=w,o.product["RRP EX GST"]=w);const v=b=>{const E=o.product[b],k=S[b];k&&(!E||String(E).trim()==="")&&(o.product[b]=k)};v("Image_URL"),v("Diagram_URL"),v("Datasheet_URL"),v("Website_URL")}}}let n="";((a=o.product)==null?void 0:a.UserEditedPrice)!==void 0&&((c=o.product)==null?void 0:c.UserEditedPrice)!==null&&((l=o.product)==null?void 0:l.UserEditedPrice)!==""?n=o.product.UserEditedPrice:n=((d=o.product)==null?void 0:d.RRP_EX)||((u=o.product)==null?void 0:u["RRP EX GST"])||((m=o.product)==null?void 0:m.RRP_EX)||((p=o.product)==null?void 0:p.rrpExGst)||((h=o.product)==null?void 0:h.RRP_EXGST)||((y=o.product)==null?void 0:y["PL1 - RRP EX GST"])||"";const r={id:i,product:o.product,room:o.room||"Blank",quantity:o.quantity||1,price:n,notes:o.notes||"",storageId:o.id,insertOrder:s,timestamp:o.timestamp||0};this.gridRows.push(r)}),this.renderGrid()}renderGrid(){const e=document.getElementById("grid-body"),t=document.getElementById("product-grid-empty"),o=document.getElementById("product-grid-container");if(!e)return;if(this.gridRows.length===0){o.style.display="none",t.style.display="block";return}t.style.display="none",o.style.display="block";const s=this.groupRowsByRoom(),i=[];Object.entries(s).forEach(([n,r])=>{const a=this.getRoomClass(n),l=!(n==="Blank"),d=`
        <div class="grid-row room-header-row ${a}" 
             data-room-name="${n}"
             ${l?'draggable="true"':""}>
          <div class="col-search room-header-cell" colspan="8">
            <div class="room-header-content">
              ${l?'<span class="room-drag-handle" title="Drag to reorder">⋮⋮</span>':""}
              <span class="room-name">${n}</span>
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
      `;i.push(d),r.forEach(u=>{i.push(this.renderRowHtml(u))})}),e.innerHTML=i.join(""),this.attachSeimaMatchSuggestions()}extractCandidateCodes(e){if(!e||typeof e!="string")return[];const t=new Set,o=[],s=/(?:Code|Part\s*(?:No\.?|Number)|P\/N|Order\s*Code|SKU|Item\s*(?:No\.?|Number)?|#)\s*:?\s*([A-Za-z0-9]{2,14}(?:[.\-][A-Za-z0-9]{1,10})*)/gi;let i;for(;(i=s.exec(e))!==null;){const m=i[1].trim();m.replace(/[.\-]+/g,"").length>=4&&!t.has(m)&&(t.add(m),o.push(m))}const n=e.split(/\|/).map(m=>m.trim()),r=/^[A-Za-z0-9]{2,14}([.\-][A-Za-z0-9]{1,10})*$/,a=/\d/,c=new Set(["white","stainless","steel","black","grey","gray","chrome","brushed","matte","polished"]);for(const m of n){if(!r.test(m)||!a.test(m)||m.replace(/[.\-]+/g,"").length<4)continue;const h=m.toLowerCase();c.has(h)||t.has(m)||(t.add(m),o.push(m))}const l=/\b([A-Za-z0-9]{2,14}(?:[.\-][A-Za-z0-9]{1,10})*)\b/g,d=/[a-z]/i;let u;for(;(u=l.exec(e))!==null;){const m=u[1].trim();if(!r.test(m)||!a.test(m))continue;const p=m.replace(/[.\-]+/g,"");if(p.length<4)continue;const h=m.toLowerCase();c.has(h)||!d.test(m)&&!/[.\-]/.test(m)&&p.length<8||t.has(m)||(t.add(m),o.push(m))}return o}escapeRegex(e){return String(e).replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}_isPlaceholderCrossHintFresh(e,t){var n;const o=(n=e==null?void 0:e.product)==null?void 0:n._crossHintCache;if(!o||o.v!==1||typeof o.description!="string")return!1;const s=e.product.Description||"";if(o.description!==s)return!1;const i=`${t.join("	")}
@s4`;return o.codesFingerprint!==i?!1:Array.isArray(o.codeEntries)}_persistPlaceholderCrossHint(e,t,o,s,i,n){const r={v:1,description:t,codesFingerprint:`${o.join("	")}
@s4`,codeEntries:s,verifiedMatch:i?{orderCode:String(i.OrderCode||i.Code||"").trim(),label:n||""}:null};if(e.product._crossHintCache=r,e.storageId)try{C.updateProductCrossHintCache(e.storageId,r)}catch(a){console.warn("Could not persist cross-hint cache:",(a==null?void 0:a.message)||a)}}_applyPlaceholderCrossHintDom(e,t,o,s){var u,m;const i=o.product.Description||"",n=e.closest(".grid-product-cell"),r=n==null?void 0:n.querySelector(".grid-placeholder-hint");if(r&&((u=s.codeEntries)==null?void 0:u.length)>0&&(r.innerHTML=this.buildPlaceholderHintHtml(i,s.codeEntries)),!((m=s.verifiedMatch)!=null&&m.orderCode)||!_.isLoaded||e.querySelector(".grid-seima-match-option"))return;const a=_.findProductByCode(String(s.verifiedMatch.orderCode).trim());if(!a)return;const c=document.createElement("button");c.type="button",c.className="grid-seima-match-btn grid-seima-match-option";const l=(a.Description||"").trim(),d=l.length>45?l.slice(0,45)+"…":l;c.textContent=`Matched Seima: ${a.OrderCode||""} – ${d}`,c.title=s.verifiedMatch.label||"",c.addEventListener("click",()=>{this._applyVerifiedSeimaToRow(t,a.OrderCode||a.Code||"")}),e.appendChild(c)}buildPlaceholderHintHtml(e,t){if(!e)return"";let o=x.sanitizeInput(e);if(t.length===0)return o;for(const{code:s,competitor:i,searchCode:n}of t){const r=this.escapeRegex(s),a="(?:(?:Code|Part\\s*(?:No\\.?|Number)|P\\/N|Order\\s*Code|SKU|Item\\s*(?:No\\.?|Number)?|#)\\s*:?\\s*)?",c=new RegExp("("+a+r+")","gi"),l=n??s,d=`<a href="#" class="grid-competitor-code-link" data-competitor="${x.sanitizeInput(i)}" data-code="${x.sanitizeInput(l)}" title="Review and link to a Seima product">$1</a>`;o=o.replace(c,d)}return o}async attachSeimaMatchSuggestions(){var r,a,c,l;if(!L.isPowerUser())return;const e=++this._matchSuggestionsRunId,t=document.querySelectorAll(".grid-seima-match-wrap");t.forEach(d=>{d.querySelectorAll(".grid-seima-match-btn, .grid-seima-match-option").forEach(u=>u.remove())});const o=[...t].filter(d=>{var m;const u=this.gridRows.find(p=>p.id===d.dataset.rowId);return(m=u==null?void 0:u.product)==null?void 0:m._placeholder});if(o.length===0)return;const s=document.getElementById("tender-import-banner");let i=0;if(s&&(s.innerHTML=`
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="flex-shrink:0;animation:spin 1s linear infinite">
          <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"></path>
        </svg>
        <span>Cross-referencing ${o.length} products...</span>
      `,s.style.display="flex"),!P.isEnabled())try{await P.preload()}catch{}if(e!==this._matchSuggestionsRunId)return;const n=P.isEnabled();!n&&s&&(s.innerHTML=`
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="flex-shrink:0;animation:spin 1s linear infinite">
          <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"></path>
        </svg>
        <span>Competitor data unavailable — checking Seima catalogue for order codes…</span>
      `,s.style.display="flex");for(const d of t){if(e!==this._matchSuggestionsRunId)return;const u=d.dataset.rowId,m=this.gridRows.find(R=>R.id===u);if(!((r=m==null?void 0:m.product)!=null&&r._placeholder))continue;const p=m.product.Description||"",h=this.extractCandidateCodes(p);if(h.length===0)continue;const y=d.closest(".grid-product-cell"),f=y==null?void 0:y.querySelector(".grid-placeholder-hint");if(this._isPlaceholderCrossHintFresh(m,h)){if(this._applyPlaceholderCrossHintDom(d,u,m,m.product._crossHintCache),s){i++;const R=Math.round(i/o.length*100),I=s.querySelector("span");I&&(I.textContent=`Cross-referencing ${i}/${o.length} products (${R}%)…`)}continue}let S=null,w="";if(_.isLoaded)for(const R of h){const I=_.findProductByCode(R);if(I){S=I,w=`Seima catalogue: ${R}`;break}}const v=[];if(n){for(const R of h)if(!(_.isLoaded&&_.findProductByCode(R)))try{const I=await P.findCompetitorEntryByCode(R);if(e!==this._matchSuggestionsRunId)return;if(I){const T=I.matchedCode??((a=I.competitorProduct)==null?void 0:a.product_code)??R;v.push({code:R,competitor:I.competitor,searchCode:T})}else _.isLoaded&&_.findProductByCode(R)||console.log(`Crosshair: no competitor match for code "${R}" (row ${u})`)}catch{}}if(f&&v.length>0&&(f.innerHTML=this.buildPlaceholderHintHtml(p,v)),n&&!S&&_.isLoaded)for(const R of h)try{const I=await P.findSeimaMatches(R);if(e!==this._matchSuggestionsRunId)return;if(((c=I==null?void 0:I.matches)==null?void 0:c.length)>0){const T=String(I.matches[0].SeimaSKU).trim(),B=_.findProductByCode(T);if(B){S=B;const H=(I.competitorProduct||{}).product_name||B.Description||"";w=`${P.getPublicCompetitorLabel(I.competitor)}: ${R} → ${T}${H?" – "+H:""}`;break}}}catch{}if(this._persistPlaceholderCrossHint(m,p,h,v,S,w),(l=m==null?void 0:m.product)!=null&&l._placeholder&&s){i++;const R=Math.round(i/o.length*100),I=s.querySelector("span");I&&(I.textContent=`Cross-referencing ${i}/${o.length} products (${R}%)...`)}if(!S||d.querySelector(".grid-seima-match-option"))continue;const b=document.createElement("button");b.type="button",b.className="grid-seima-match-btn grid-seima-match-option";const E=(S.Description||"").trim(),k=E.length>45?E.slice(0,45)+"…":E;b.textContent=`Matched Seima: ${S.OrderCode||""} – ${k}`,b.title=w,b.addEventListener("click",()=>{this._applyVerifiedSeimaToRow(u,S.OrderCode||S.Code||"")}),d.appendChild(b)}if(e===this._matchSuggestionsRunId&&s){const d=document.querySelectorAll(".grid-seima-match-option").length;s.innerHTML=`
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="flex-shrink:0">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
        <span>Cross-reference complete — ${d} verified match${d!==1?"es":""} found</span>
        <button class="tender-banner-close" title="Dismiss" onclick="this.parentElement.style.display='none'">✕</button>
      `,setTimeout(()=>{s&&(s.style.display="none")},1e4)}}async openValidatorModal(e,t,o){this.closeValidatorModal();const s=document.createElement("div");s.className="grid-validator-overlay";const i=document.createElement("div");i.className="grid-validator-modal",i.innerHTML=`
      <div class="gvm-header">
        <div class="gvm-title">Loading…</div>
        <button class="gvm-close">&times;</button>
      </div>
      <div class="gvm-body"><div class="gvm-no-matches">Loading competitor data…</div></div>
    `,document.body.appendChild(s),document.body.appendChild(i);const n=()=>this.closeValidatorModal(o);i.querySelector(".gvm-close").addEventListener("click",n),s.addEventListener("click",n);const r=a=>{a.key==="Escape"&&n()};document.addEventListener("keydown",r),this._validatorModal={overlay:s,modal:i,escHandler:r,competitor:e,productCode:t,rowId:o};try{await P._ensureIndex();const a=await P.getMatches(e,!0),l=(await P.getProducts(e)).find(h=>String(h.product_code)===String(t));if(!l){i.querySelector(".gvm-body").innerHTML=`<div class="gvm-no-matches">Product ${x.sanitizeInput(t)} not found in ${x.sanitizeInput(P.getPublicCompetitorLabel(e))} data.</div>`;return}const d=a.filter(h=>String(h.CompetitorSKU)===String(t)).sort((h,y)=>(h.Rank||99)-(y.Rank||99)),u={Verified:0,Manual:1,Rejected:2,"AI-Suggested":3},m=new Map;for(const h of d){const y=String(h.SeimaSKU),f=m.get(y);(!f||(u[h.Status]??9)<(u[f.Status]??9))&&m.set(y,h)}const p=[...m.values()].sort((h,y)=>(h.Rank||99)-(y.Rank||99));this._renderValidatorModal(l,p,e)}catch(a){console.error("Validator modal load failed:",a),i.querySelector(".gvm-body").innerHTML='<div class="gvm-no-matches">Failed to load data. Check console.</div>'}}_renderValidatorModal(e,t,o){var m;const s=(m=this._validatorModal)==null?void 0:m.modal;if(!s)return;const i=e.product_name||e.product_code,n=e.image_url||e.Image||"",r=p=>x.escapeHtml(p||""),a=P.getPublicCompetitorLabel(o);s.querySelector(".gvm-title").textContent=`${i} — ${a}`;let c;t.length===0?c='<div class="gvm-no-matches">No Seima matches found. Use the search below to add one.</div>':c=t.map(p=>{const h=String(p.SeimaSKU||"").trim(),y=_.findProductByCode(h),f=(y==null?void 0:y.Description)||(y==null?void 0:y.ProductName)||h,S=(y==null?void 0:y.Image_URL)||(y==null?void 0:y.imageUrl)||"",w=y?Et(y):"",v=Number(p.Confidence)||0,b=v>=70?"high":v>=40?"med":"low",E=(p.Status||"").toLowerCase().replace(/[\s-]+/g,"-");let k;return p.Status==="Verified"||p.Status==="Manual"?k=`<span class="gvm-status-label gvm-status-verified">✓ Verified</span>
            <button class="gvm-btn gvm-btn-undo" data-action="reject" data-sku="${r(h)}">reject</button>`:p.Status==="Rejected"?k=`<span class="gvm-status-label gvm-status-rejected">✗ Rejected</span>
            <button class="gvm-btn gvm-btn-undo" data-action="verify" data-sku="${r(h)}">verify</button>`:k=`<button class="gvm-btn gvm-btn-verify" data-action="verify" data-sku="${r(h)}">✓ Verify</button>
            <button class="gvm-btn gvm-btn-reject" data-action="reject" data-sku="${r(h)}">✗ Reject</button>`,`<div class="gvm-match-card status-${E}" data-seima-sku="${r(h)}" style="cursor:pointer;">
          ${S?`<img src="${r(S)}" alt="" class="gvm-match-img" onerror="this.outerHTML='<div class=\\'gvm-match-img-placeholder\\'>No img</div>'">`:'<div class="gvm-match-img-placeholder">No img</div>'}
          <div class="gvm-match-info">
            <div class="gvm-match-name">${r(f)}</div>
            <div class="gvm-match-sku">${r(h)} <span class="gvm-badge gvm-badge-${b}">${v}%</span></div>
            ${p.MatchReason?`<div class="gvm-match-reason">${r(p.MatchReason)}</div>`:""}
          </div>
          <div class="gvm-match-price">${w}</div>
          <div class="gvm-match-actions">${k}</div>
        </div>`}).join("");const l=Go(e),u=[["Code",e.product_code],["Brand",e.brand||a],["Category",[e.product_type,e.subcategory].filter(Boolean).join(" / ")],["Collection",e.collection],["Finish",e.finish||e.colour],["RRP",l]].filter(([,p])=>p&&String(p).trim()).map(([p,h])=>`<tr><td>${r(p)}</td><td>${r(h)}</td></tr>`).join("");s.querySelector(".gvm-body").innerHTML=`
      <div class="gvm-layout">
        <div class="gvm-product-detail">
          ${n?`<img src="${r(n)}" alt="${r(i)}" class="gvm-product-img" onerror="this.style.display='none'">`:""}
          <table class="gvm-product-table">
            <tr><td>Name</td><td><strong>${r(i)}</strong></td></tr>
            ${u}
          </table>
          ${e.product_url&&/^https?:\/\//i.test(e.product_url)?`<a href="${r(e.product_url)}" target="_blank" rel="noopener noreferrer" style="font-size:0.75rem;color:#b87333;">View on website →</a>`:""}
        </div>
        <div class="gvm-matches-panel">
          <div class="gvm-section-title">Seima Alternatives (${t.length})</div>
          ${c}
          <div class="gvm-search-add">
            <div class="gvm-search-add-label">Add Seima Product</div>
            <input type="text" class="gvm-search-add-input" placeholder="Search Seima by name, code or range…">
            <div class="gvm-search-results"></div>
          </div>
        </div>
      </div>
    `,this._wireValidatorModalActions(e,t,o)}_wireValidatorModalActions(e,t,o){var a;const s=(a=this._validatorModal)==null?void 0:a.modal;if(!s)return;s.querySelectorAll(".gvm-match-card").forEach(c=>{c.addEventListener("click",l=>{if(l.target.closest(".gvm-btn"))return;const d=c.dataset.seimaSku;d&&this._showSeimaDetailInModal(d)})}),s.querySelectorAll(".gvm-btn-verify, .gvm-btn-reject, .gvm-btn-undo").forEach(c=>{c.addEventListener("click",async l=>{var p;l.stopPropagation();const d=c.dataset.sku,u=c.dataset.action,m=u==="verify"?"Verified":"Rejected";c.disabled=!0,c.textContent="…";try{await P.updateMatch(o,String(e.product_code),d,m);const h=t.find(y=>String(y.SeimaSKU)===d);if(h&&(h.Status=m),m==="Verified"&&((p=this._validatorModal)!=null&&p.rowId)){this._applyVerifiedSeimaToRow(this._validatorModal.rowId,d),this.closeValidatorModal(this._validatorModal.rowId);return}this._renderValidatorModal(e,t,o)}catch(h){console.error("Match update failed:",h),c.disabled=!1,c.textContent=u==="verify"?"✓ Verify":"✗ Reject"}})});const i=s.querySelector(".gvm-search-add-input"),n=s.querySelector(".gvm-search-results");if(!i||!n)return;let r;i.addEventListener("input",()=>{clearTimeout(r),r=setTimeout(()=>{this._renderValidatorSeimaSearch(i.value,n,e,t,o)},250)})}_renderValidatorSeimaSearch(e,t,o,s,i){if(!e||e.length<2){t.innerHTML="";return}const n=_.searchProducts(e,20),r=new Set(s.map(l=>String(l.SeimaSKU))),a=n.filter(l=>{const d=String(l.OrderCode||l.Code||"");return d&&!r.has(d)});if(a.length===0){t.innerHTML='<div class="gvm-no-matches">No Seima products found.</div>';return}const c=l=>x.sanitizeInput(l||"");t.innerHTML=a.slice(0,15).map(l=>{const d=l.OrderCode||l.Code||"",u=l.Description||l.ProductName||"",m=l.Image_URL||l.imageUrl||"",p=Et(l);return`<div class="gvm-search-result" data-seima-code="${c(d)}">
        ${m?`<img src="${c(m)}" alt="" class="gvm-match-img" onerror="this.outerHTML='<div class=\\'gvm-match-img-placeholder\\'>No img</div>'">`:'<div class="gvm-match-img-placeholder">No img</div>'}
        <div class="gvm-match-info">
          <div class="gvm-match-name">${c(u)}</div>
          <div class="gvm-match-sku">${c(d)}</div>
        </div>
        <div class="gvm-match-price">${p}</div>
        <button class="gvm-btn gvm-btn-verify" data-seima-code="${c(d)}">✓ Verify</button>
      </div>`}).join(""),t.querySelectorAll(".gvm-search-result").forEach(l=>{const d=l.querySelector(".gvm-btn-verify");d==null||d.addEventListener("click",async u=>{var p;u.stopPropagation();const m=d.dataset.seimaCode;d.disabled=!0,d.textContent="…";try{const h=s.length+1;if(await P.addMatch(i,String(o.product_code),m,h,"Manual verification"),await P.updateMatch(i,String(o.product_code),m,"Verified"),s.push({CompetitorSKU:String(o.product_code),SeimaSKU:m,Rank:h,Confidence:"",MatchReason:"Manual verification",Status:"Verified"}),(p=this._validatorModal)!=null&&p.rowId){this._applyVerifiedSeimaToRow(this._validatorModal.rowId,m),this.closeValidatorModal(this._validatorModal.rowId);return}this._renderValidatorModal(o,s,i)}catch(h){console.error("Add match failed:",h),d.disabled=!1,d.textContent="✓ Verify"}})})}closeValidatorModal(e){this._validatorModal&&(this._closeSeimaDetailPanel(),this._validatorModal.overlay.remove(),this._validatorModal.modal.remove(),this._validatorModal.escHandler&&document.removeEventListener("keydown",this._validatorModal.escHandler),this._validatorModal=null,P._index=null,this.attachSeimaMatchSuggestions())}async openPlaceholderSearch(e){var r,a,c;const t=this.gridRows.find(l=>l.id===e);if(!((r=t==null?void 0:t.product)!=null&&r._placeholder))return;const o=String(t.product.Description||""),s=this.extractCandidateCodes(o);_.isLoaded||await new Promise(l=>{const d=Date.now(),u=()=>{if(_.isLoaded||Date.now()-d>8e3)return l();setTimeout(u,80)};u()});const i=[];if(_.isLoaded&&s.length>0)for(const l of s){const d=_.findProductByCode(l);if(!d)continue;const u=String(d.OrderCode||d.Code||"").trim();u&&!i.includes(u)&&i.push(u)}if(i.length===1){this._applyVerifiedSeimaToRow(e,i[0]);return}if(P.isEnabled()&&s.length>0)try{await P.preload()}catch{}if(P.isEnabled()){for(const l of s)if(!(_.isLoaded&&_.findProductByCode(l)))try{const d=await P.findCompetitorEntryByCode(l);if(!d)continue;const u=d.matchedCode??((a=d.competitorProduct)==null?void 0:a.product_code)??l;P.isWriteEnabled()?await this.openValidatorModal(d.competitor,String(u),e):Le.open(`${P.getPublicCompetitorLabel(d.competitor)}: ${u}`,m=>{const p=(m==null?void 0:m.OrderCode)||(m==null?void 0:m.Code)||"";p&&this._applyVerifiedSeimaToRow(e,p)});return}catch{}}const n=[...i];if(P.isEnabled()){for(const l of s.slice(0,3))if(!(_.isLoaded&&_.findProductByCode(l)))try{const d=await P.findSeimaMatches(l);if((c=d==null?void 0:d.matches)!=null&&c.length)for(const u of d.matches){const m=String(u.SeimaSKU||"").trim();m&&!n.includes(m)&&n.push(m)}}catch{}}this.openSeimaSearchModal(e,o,n,s)}openSeimaSearchModal(e,t,o=[],s=[]){var S,w;this.closeSeimaSearchModal();const i=v=>x.sanitizeInput(v||""),n=this._derivePlaceholderSearchQuery(t),r=document.createElement("div");r.className="grid-validator-overlay";const a=document.createElement("div");a.className="grid-validator-modal";const c=o.map(v=>{const b=_.findProductByCode(v);if(!b)return"";const E=b.Description||b.ProductName||v;return`
          <button type="button" class="gvm-search-result gvm-search-result-pick" data-seima-code="${i(v)}">
            <div class="gvm-match-info">
              <div class="gvm-match-name">${i(E)}</div>
              <div class="gvm-match-sku">${i(v)}</div>
            </div>
          </button>
        `}).filter(Boolean).join("");a.innerHTML=`
      <div class="gvm-header">
        <div class="gvm-title">Find Seima Alternative</div>
        <button class="gvm-close">&times;</button>
      </div>
      <div class="gvm-body">
        <div class="gvm-product-detail">
          <table class="gvm-product-table">
            <tr><td>Imported product</td><td><strong>${i(t)}</strong></td></tr>
          </table>
        </div>
        <div class="gvm-matches-panel">
          ${c?`
            <div class="gvm-section-title">Matched Seima Options</div>
            <div class="gvm-search-results">${c}</div>
          `:""}
          <div class="gvm-search-add" style="margin-top:12px;">
            <div class="gvm-search-add-label">Need more context first?</div>
            <div style="display:flex; gap:8px; flex-wrap:wrap;">
              <button type="button" class="gvm-btn gvm-btn-verify" data-action="web-image-search">Web image search</button>
            </div>
            <div style="margin-top:6px; font-size:0.75rem; color:#777;">
              Use web image search to identify the competitor item, then browse Seima visuals below.
            </div>
          </div>
          <div class="gvm-search-add" style="margin-top:12px;">
            <div class="gvm-search-add-label">Search Seima Catalogue (Explorer View)</div>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:8px;">
              <select class="gvm-explorer-category">
                <option value="">Any category</option>
              </select>
              <select class="gvm-explorer-group">
                <option value="">Any group</option>
              </select>
            </div>
            <input type="text" class="gvm-search-add-input" placeholder="Search Seima by name, code or range…" value="${i(n)}">
            <div class="gvm-search-results"></div>
          </div>
        </div>
      </div>
    `,document.body.appendChild(r),document.body.appendChild(a);const l=()=>this.closeSeimaSearchModal();(S=a.querySelector(".gvm-close"))==null||S.addEventListener("click",l),r.addEventListener("click",l);const d=v=>{v.key==="Escape"&&l()};document.addEventListener("keydown",d),this._seimaSearchModal={overlay:r,modal:a,escHandler:d,rowId:e},a.querySelectorAll(".gvm-search-result-pick").forEach(v=>{v.addEventListener("click",async()=>{const b=v.dataset.seimaCode||"";b&&this._applyVerifiedSeimaToRow(e,b)&&(this.closeSeimaSearchModal(),await this._openVerificationFlowFromPlaceholder(e,t,s,b))})});const u=a.querySelector(".gvm-search-add-input"),m=a.querySelector(".gvm-search-add .gvm-search-results");if(!u||!m)return;(w=a.querySelector('[data-action="web-image-search"]'))==null||w.addEventListener("click",()=>{this._openExternalImageSearch(n||t||"")});let p;const h=a.querySelector(".gvm-explorer-category"),y=a.querySelector(".gvm-explorer-group"),f={query:n||"",category:"",group:""};this._populateModalCategoryOptions(h),this._populateModalGroupOptions(y,""),h==null||h.addEventListener("change",()=>{f.category=h.value,f.group="",y&&(y.value=""),this._populateModalGroupOptions(y,f.category),this._renderStandaloneSeimaSearch(f,m,e,t,s)}),y==null||y.addEventListener("change",()=>{f.group=y.value,this._renderStandaloneSeimaSearch(f,m,e,t,s)}),u.addEventListener("input",()=>{clearTimeout(p),p=setTimeout(()=>{f.query=u.value,this._renderStandaloneSeimaSearch(f,m,e,t,s)},200)}),this._renderStandaloneSeimaSearch(f,m,e,t,s),u.focus()}_renderStandaloneSeimaSearch(e,t,o,s="",i=[]){const n=String((e==null?void 0:e.query)||"").trim(),r=String((e==null?void 0:e.category)||"").trim(),a=String((e==null?void 0:e.group)||"").trim(),l=(n.length>=2?_.searchProducts(n,300):_.getAllProducts()).filter(u=>{const m=String(u.SubGroup||u.Subgroup||u["Sub Group"]||"").trim(),p=String(u.Group||"").trim();return!(r&&m!==r||a&&p!==a)});if(l.length===0){t.innerHTML=`
        <div class="gvm-no-matches">
          No Seima products found.
          <br>
          Try <strong>Web image search</strong> above, or broaden your category/group filters.
        </div>`;return}const d=u=>x.sanitizeInput(u||"");t.innerHTML=l.slice(0,24).map(u=>{const m=u.OrderCode||u.Code||"",p=u.Description||u.ProductName||"",h=u.SubGroup||u.Subgroup||u["Sub Group"]||"",y=u.Group||"",f=u.Image_URL||u.imageUrl||u.Image||"assets/no-image.png";return`
        <button type="button" class="gvm-search-result gvm-search-result-pick" data-seima-code="${d(m)}">
          <img src="${d(f)}" alt="" class="gvm-match-img" onerror="this.outerHTML='<div class=\\'gvm-match-img-placeholder\\'>No img</div>'">
          <div class="gvm-match-info">
            <div class="gvm-match-name">${d(p)}</div>
            <div class="gvm-match-sku">${d(m)}${h?` · ${d(h)}`:""}${y?` / ${d(y)}`:""}</div>
          </div>
        </button>
      `}).join(""),t.querySelectorAll(".gvm-search-result-pick").forEach(u=>{u.addEventListener("click",async()=>{const m=u.dataset.seimaCode||"";m&&this._applyVerifiedSeimaToRow(o,m)&&(this.closeSeimaSearchModal(),await this._openVerificationFlowFromPlaceholder(o,s,i,m))})})}async _openVerificationFlowFromPlaceholder(e,t,o=[],s=""){var r;const i=Array.isArray(o)&&o.length>0?o:this.extractCandidateCodes(t||"");if(!P.isEnabled())return;try{await P.preload()}catch{}for(const a of i.slice(0,3))try{const c=await P.findCompetitorEntryByCode(a);if(!c)continue;const l=c.matchedCode??((r=c.competitorProduct)==null?void 0:r.product_code)??a;P.isWriteEnabled()?await this.openValidatorModal(c.competitor,String(l),e):Le.open(`${P.getPublicCompetitorLabel(c.competitor)}: ${l}`,d=>{const u=(d==null?void 0:d.OrderCode)||(d==null?void 0:d.Code)||s||"";u&&this._applyVerifiedSeimaToRow(e,u)});return}catch{}const n=t||s||"";Le.open(n,a=>{const c=(a==null?void 0:a.OrderCode)||(a==null?void 0:a.Code)||s||"";c&&this._applyVerifiedSeimaToRow(e,c)})}_populateModalCategoryOptions(e){if(!e)return;const t=[...new Set(_.getAllProducts().map(o=>String(o.SubGroup||o.Subgroup||o["Sub Group"]||"").trim()).filter(Boolean))].sort((o,s)=>o.localeCompare(s));e.innerHTML=['<option value="">Any category</option>',...t.map(o=>`<option value="${x.escapeHtml(o)}">${x.sanitizeInput(o)}</option>`)].join("")}_populateModalGroupOptions(e,t){if(!e)return;const o=[...new Set(_.getAllProducts().filter(s=>t?String(s.SubGroup||s.Subgroup||s["Sub Group"]||"").trim()===t:!0).map(s=>String(s.Group||"").trim()).filter(Boolean))].sort((s,i)=>s.localeCompare(i));e.innerHTML=['<option value="">Any group</option>',...o.map(s=>`<option value="${x.escapeHtml(s)}">${x.sanitizeInput(s)}</option>`)].join("")}_openExternalImageSearch(e){const t=String(e||"").trim();if(!t)return;const o=encodeURIComponent(`${t} bathroom product`);window.open(`https://www.google.com/search?tbm=isch&q=${o}`,"_blank","noopener,noreferrer")}_derivePlaceholderSearchQuery(e){const t=String(e||"");return t?t.replace(/\b(?:Code|SKU|Part\s*(?:No\.?|Number)|Order\s*Code)\s*:?\s*[A-Za-z0-9.\-_/]+\b/gi," ").replace(/\|/g," ").replace(/\s+/g," ").trim().split(" ").slice(0,8).join(" "):""}closeSeimaSearchModal(){this._seimaSearchModal&&(this._seimaSearchModal.overlay.remove(),this._seimaSearchModal.modal.remove(),this._seimaSearchModal.escHandler&&document.removeEventListener("keydown",this._seimaSearchModal.escHandler),this._seimaSearchModal=null)}_applyVerifiedSeimaToRow(e,t){const o=this.gridRows.find(n=>n.id===e);if(!o)return!1;const s=_.findProductByCode(String(t||"").trim());if(!s)return!1;o.product=s,delete o.product._crossHintCache,o.price=s.RRP_EX||s["RRP EX GST"]||s.RRP_EX||s.RRP_EXGST||s.rrpExGst||s["PL1 - RRP EX GST"]||s.RRP_INCGST||s.RRP_INCGST||s["RRP INC GST"]||s.rrpIncGst||"",this.renderGrid();const i={...s,UserEditedPrice:o.price};return o.storageId?(C.updateSelectionProduct(o.storageId,i,{notes:o.notes,room:o.room,quantity:o.quantity,userPrice:o.price}),this.updateTotals()):this.saveRowToStorage(o),!0}_showSeimaDetailInModal(e){this._closeSeimaDetailPanel();const t=_.findProductByCode(e);if(!t)return;const o=u=>x.sanitizeInput(u||""),s=t.Description||t.ProductName||e,i=t.Image_URL||t.imageUrl||"",n=t.Website_URL||"",a=[["Order Code",t.OrderCode||t.Code],["Description",t.Description],["Long Description",t.LongDescription||t["Long Description"]],["Range",t.Range],["Group",t.Group],["Sub Group",t.SubGroup||t["Sub Group"]],["RRP ex GST",t.RRP_EX||t["RRP EX GST"]],["RRP inc GST",t.RRP_INCGST||t["RRP INC GST"]],["Dimensions (W)",t.DimX||t["X Dimension (mm)"]],["Dimensions (D)",t.DimY||t["Y Dimension (mm)"]],["Dimensions (H)",t.DimZ||t["Z Dimension (mm)"]],["WELS Star",t.WELS_STAR||t["WELS Star"]],["WELS Consumption",t.WELS_CONSUMPTION||t["WELS Consumption"]]].filter(([,u])=>u&&String(u).trim()&&String(u).trim()!=="0").map(([u,m])=>{const p=u.startsWith("RRP")?`$${Number(m).toLocaleString("en-AU",{minimumFractionDigits:2})}`:o(m);return`<tr><td>${o(u)}</td><td>${p}</td></tr>`}).join(""),c=document.createElement("div");c.className="gvm-detail-overlay";const l=document.createElement("div");l.className="gvm-detail-panel",l.innerHTML=`
      <div class="gvm-detail-header">
        <div class="gvm-detail-title">${o(s)}</div>
        <button class="gvm-close">&times;</button>
      </div>
      <div class="gvm-detail-body">
        ${i?`<img src="${o(i)}" alt="${o(s)}" class="gvm-detail-img" onerror="this.style.display='none'">`:""}
        <table class="gvm-detail-table">${a}</table>
        ${n?`<a href="${o(n)}" target="_blank" style="display:inline-block;margin-top:10px;font-size:0.8rem;color:#b87333;">View on Seima website →</a>`:""}
      </div>
    `,document.body.appendChild(c),document.body.appendChild(l);const d=()=>this._closeSeimaDetailPanel();l.querySelector(".gvm-close").addEventListener("click",d),c.addEventListener("click",d),this._seimaDetailPanel={overlay:c,panel:l}}_closeSeimaDetailPanel(){this._seimaDetailPanel&&(this._seimaDetailPanel.overlay.remove(),this._seimaDetailPanel.panel.remove(),this._seimaDetailPanel=null)}_showProductDetailModal(e){const t=document.querySelector(".grid-product-modal-overlay");t&&t.remove();const o=H=>x.sanitizeInput(H||""),s=e.OrderCode||e.Code||"",i=s?String(parseInt(s,10)):"",n=e.Description||e.ProductName||e["Product Name"]||"",r=e.Image_URL||e.imageUrl||e.Image||"assets/no-image.png",a=e["Long Description"]||e.LongDescription||"",c=e.Range||"",l=e.SubGroup||e.Subgroup||e["Sub Group"]||"",d=e.Finish||"",u=e.Colour||"",m=e.DimX||e["X Dimension (mm)"]||"",p=e.DimY||e["Y Dimension (mm)"]||"",h=e.DimZ||e["Z Dimension (mm)"]||"",y=m&&m!=="0"?`${m} × ${p||0} × ${h||0}mm`:"",f=e.WELS_STAR||e["WELS Star"]||e["WELS STAR"]||"",S=e.RRP_EX||e["RRP EX GST"]||e.RRP_EXGST||"",w=e.RRP_INCGST||e["RRP INC GST"]||"",v=[];i&&v.push(["Order code",i]),c&&v.push(["Range",c]),l&&v.push(["Type",l]),y&&v.push(["Dimensions",y]),d&&v.push(["Finish",d]),u&&u!==d&&v.push(["Colour",u]),f&&v.push(["WELS",`${f} star`]);const b=S?`$${parseFloat(S).toLocaleString("en-AU",{minimumFractionDigits:2})} ex GST`:w?`$${parseFloat(w).toLocaleString("en-AU",{minimumFractionDigits:2})} inc GST`:"",E=e.Diagram_URL||e["Diagram URL"]||"",k=e.Datasheet_URL||e["Datasheet URL"]||"",R=e.Website_URL||e["Website URL"]||"",I=[];E&&I.push(`<a href="${o(E)}" target="_blank" rel="noopener" class="grid-pdm-link">Diagram</a>`),k&&I.push(`<a href="${o(k)}" target="_blank" rel="noopener" class="grid-pdm-link">Datasheet</a>`),R&&I.push(`<a href="${o(R)}" target="_blank" rel="noopener" class="grid-pdm-link">View on Website</a>`);const T=document.createElement("div");T.className="grid-product-modal-overlay",T.innerHTML=`
      <div class="grid-product-modal">
        <div class="grid-pdm-header">
          <button class="grid-pdm-close" title="Close">&times;</button>
        </div>
        <div class="grid-pdm-body">
          <img class="grid-pdm-img" src="${o(r)}" alt="${o(n)}" onerror="this.src='assets/no-image.png';">
          <h3 class="grid-pdm-title">${o(n)}</h3>
          ${v.length?`<dl class="grid-pdm-specs grid-pdm-specs-compact">${v.map(([H,fe])=>`<dt>${o(H)}</dt><dd>${o(fe)}</dd>`).join("")}</dl>`:""}
          ${a?`<div class="grid-pdm-desc">${o(a)}</div>`:""}
          ${b?`<div class="grid-pdm-price">${b}</div>`:""}
          ${I.length?`<div class="grid-pdm-links">${I.join("")}</div>`:""}
        </div>
      </div>
    `;const B=()=>{T.remove(),document.removeEventListener("keydown",U)};T.addEventListener("click",H=>{H.target===T&&B()}),T.querySelector(".grid-pdm-close").addEventListener("click",B);const U=H=>{H.key==="Escape"&&B()};document.addEventListener("keydown",U),document.body.appendChild(T)}renderRowHtml(e){const t=e.product,o=t&&(t.Image_URL||t.imageUrl||t.Image)||"assets/no-image.png",s=t&&(t.Description||t.ProductName||t["Product Name"])||"",i=t&&(t.OrderCode||t.Code)||"",n=i?String(parseInt(i,10)):"",r=!!(t&&t._outsidePublicPricelist),a=r?'<abbr class="grid-part-ext-not-public" title="Not on the public price list. Confirm availability and pricing with Seima before treating as a standard stocked item.">*</abbr>':"",c=r?'<span class="grid-non-public-pill" title="Outside the public price list — validate with Seima">Special order</span>':"",l=e.price||t&&(t.RRP_EX||t["RRP EX GST"]||t.RRP_EX||t.rrpExGst||t.RRP_EXGST||t["PL1 - RRP EX GST"])||"",d=parseFloat((l||"").toString().replace(/,/g,""))||0,u=parseInt(e.quantity)||1,m=d*u,p=m>0?m.toLocaleString("en-AU",{minimumFractionDigits:2,maximumFractionDigits:2}):"";return`
      <div class="grid-row ${this.getRoomRowClass(e.room)}" data-row-id="${e.id}" data-room="${(e.room||"blank").toLowerCase()}">
        <div class="col-image grid-image-cell">
          ${t?`<img src="${o}" alt="Product" class="grid-product-image" onerror="this.src='assets/no-image.png';">`:""}
        </div>
        <div class="col-product grid-product-cell ${t&&!t._placeholder?"has-product":"empty-product"}">
          ${t&&!t._placeholder?`
            <div class="grid-product-display">
              <div class="grid-product-name">
                <span class="grid-product-code-line">
                  <strong>${x.sanitizeInput(n)}</strong>${a}
                  ${c}
                </span>
                <span class="grid-product-title-line">${x.sanitizeInput(s)}</span>
              </div>
            </div>
          `:`
            ${t!=null&&t._placeholder?`<div class="grid-placeholder-hint grid-placeholder-clickable" title="Click to find a Seima alternative">${x.sanitizeInput(t.Description||"")}</div>`:'<input type="text" class="grid-search-input" placeholder="Search for a product..." value="">'}
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
          <input type="text" class="grid-input" name="price" value="${l}" placeholder="0.00">
        </div>
        <div class="col-total">
          <div class="grid-total-display">${p}</div>
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
    `}handleSortChange(){const e=document.getElementById("sort-by"),t=e?e.value:"room";this.sortGridRows(t),this.renderGrid()}sortGridRows(e){switch(e){case"room":this.gridRows.sort((t,o)=>{const s=t.room||"Blank",i=o.room||"Blank";return s.localeCompare(i)});break;case"category":this.gridRows.sort((t,o)=>{const s=this._rowCategory(t),i=this._rowCategory(o);if(s===i){const n=typeof t.insertOrder=="number"?t.insertOrder:0,r=typeof o.insertOrder=="number"?o.insertOrder:0;return n-r}return s==="Blank"?1:i==="Blank"?-1:s.localeCompare(i)});break;case"product":this.gridRows.sort((t,o)=>{const s=t.product&&(t.product.Description||t.product.ProductName)||"",i=o.product&&(o.product.Description||o.product.ProductName)||"";return s.localeCompare(i)});break;case"code":this.gridRows.sort((t,o)=>{const s=t.product&&(t.product.OrderCode||t.product.Code)||"",i=o.product&&(o.product.OrderCode||o.product.Code)||"";return s.localeCompare(i)});break;case"imported":this.gridRows.sort((t,o)=>{const s=typeof t.insertOrder=="number"?t.insertOrder:Number.MAX_SAFE_INTEGER,i=typeof o.insertOrder=="number"?o.insertOrder:Number.MAX_SAFE_INTEGER;return s-i});break;default:this.gridRows.sort((t,o)=>{const s=t.room||"Blank",i=o.room||"Blank";return s.localeCompare(i)});break}}_rowCategory(e){const t=e==null?void 0:e.product;if(!t)return"Blank";const o=t.Group||t.SubGroup||t["Sub Group"]||"";return String(o).trim()||"Blank"}groupRowsByRoom(){const e=document.getElementById("sort-by"),t=e?e.value:"room";if(t==="category"){const r={};this.gridRows.forEach(l=>{const d=this._rowCategory(l);r[d]||(r[d]=[]),r[d].push(l)});const a=Object.keys(r).filter(l=>l!=="Blank").sort((l,d)=>l.localeCompare(d)),c={};return a.forEach(l=>{c[l]=r[l]}),r.Blank&&(c.Blank=r.Blank),c}if(t!=="room")return{"All Products":this.gridRows};const o={};this.gridRows.forEach(r=>{const a=r.room||"Blank";o[a]||(o[a]=[]),o[a].push(r)});const s=Object.keys(o).filter(r=>r!=="Blank"),i=this.getSortedRoomNames(s),n={};return i.forEach(r=>{o[r]&&(n[r]=o[r])}),o.Blank&&(n.Blank=o.Blank),n}getSortedRoomNames(e){const t=this.customRoomOrder.filter(s=>e.includes(s)),o=e.filter(s=>!this.customRoomOrder.includes(s)).sort((s,i)=>s.localeCompare(i));return[...t,...o]}moveRoomInOrder(e,t,o){if(e==="Blank"||t==="Blank"||e===t)return;const s={};this.gridRows.forEach(c=>{const l=c.room||"Blank";s[l]||(s[l]=[])});const i=Object.keys(s).filter(c=>c!=="Blank"),r=this.getSortedRoomNames(i).filter(c=>c!==e);let a=r.indexOf(t);a===-1&&(a=r.length),o||a++,r.splice(a,0,e),this.customRoomOrder=r,this.saveCustomRoomOrder()}getRoomClass(e){return{Blank:"blank-room","Bath 1":"bath-room","Bath 2":"bath-room","Bath 3":"bath-room",Ensuite:"bath-room",Powder:"bath-room",Kitchen:"kitchen-room",Laundry:"laundry-room",Alfresco:"alfresco-room",Butlers:"butlers-room",Standard:"standard-room",Upgrade:"upgrade-room",Other:"other-room","All Products":"all-products"}[e]||""}getRoomRowClass(e){const t=(e||"Blank").toLowerCase();return t.includes("bath")||t.includes("ensuite")||t.includes("powder")?"bath-room-row":t.includes("kitchen")?"kitchen-room-row":t.includes("laundry")?"laundry-room-row":t.includes("alfresco")?"alfresco-room-row":t.includes("butler")?"butlers-room-row":""}getRoomOptions(e){let t=`<option value="Blank" ${e==="Blank"?"selected":""}>Blank</option>`;return A.get("rooms.predefined",[]).forEach(i=>{t+=`<option value="${i.name}" ${e===i.name?"selected":""}>${i.name}</option>`}),C.getCustomRooms().forEach(i=>{t+=`<option value="${i.name}" ${e===i.name?"selected":""}>${i.name}</option>`}),t+='<option value="__ADD_NEW_ROOM__" style="font-weight: bold; color: #2563eb;">➕ Add new room...</option>',t}updateAllRoomDropdowns(){document.querySelectorAll('.grid-select[name="room"]').forEach(o=>{o.value;const s=this.gridRows.find(i=>i.id===o.closest(".grid-row").dataset.rowId);s&&(o.innerHTML=this.getRoomOptions(s.room))});const t=document.getElementById("bulk-room-select");t&&(t.innerHTML=this.getRoomOptions("Blank"))}ensureAtLeastOneEmptyRow(){this.gridRows.length===0&&this.addEmptyRow()}updateTotals(){const e=document.getElementById("total-items"),t=document.getElementById("total-rooms"),o=document.getElementById("total-value");let s=0,i=0;const n=new Set;this.gridRows.forEach(r=>{if(r.product&&!r.product._placeholder){s+=1;const a=parseFloat(r.price)||0;i+=a*r.quantity,r.room&&r.room!=="Blank"&&r.room.trim()!==""&&n.add(r.room)}}),e&&(e.textContent=s),t&&(t.textContent=n.size),o&&(o.textContent=i>0?`$${i.toLocaleString("en-AU",{minimumFractionDigits:2,maximumFractionDigits:2})}`:"$0.00")}clearAll(e=!0){C.clearAllSelections(),localStorage.removeItem("pdfWizardSettings"),e&&(localStorage.removeItem("pdfFormSettings"),localStorage.removeItem("customerDetails"),this.currentSelectionId=null,this.currentSelectionName="New Selection",this.hasUnsavedChanges=!1,this.customRoomOrder=[],this.saveCustomRoomOrder()),this.gridRows=[],this.nextRowId=1,this.renderGrid(),this.updateTotals(),this.ensureAtLeastOneEmptyRow(),this.updateContextHeader()}showImportModal(){const e=document.getElementById("file-import-modal");e&&(e.style.display="flex")}syncGridToStorage(){const e=C.getSelectedProducts(),t=new Map(e.map(i=>[i.id,i])),o=[];for(const i of this.gridRows){if(!i.product||!i.storageId)continue;const n=t.get(i.storageId);if(!n)continue;n.product.UserEditedPrice=i.price;const r=i.product||{},a=r.RRP_EX||r["RRP EX GST"]||r.RRP_EX||r.RRP_EXGST||r.rrpExGst||r["PL1 - RRP EX GST"]||"";a&&a!=="0"&&(n.product.RRP_EX=a),n.quantity=Math.max(1,parseInt(i.quantity)||1),n.room=i.room||"Blank",n.notes=i.notes||"",r._crossHintCache&&r._crossHintCache.v===1?n.product._crossHintCache=r._crossHintCache:delete n.product._crossHintCache,o.push(n)}C.setSelectedProducts(o);const s=o.map(i=>({...i.product,Room:i.room,Notes:i.notes,Quantity:i.quantity}));localStorage.setItem("selection",JSON.stringify(s))}async showDownloadModal(){this.syncGridToStorage(),Z.requireAuth(async()=>{try{await No.open({onComplete:(e,t)=>{console.log("📄 Wizard completed, generating PDF"),window.showPdfFormScreen?window.showPdfFormScreen(e,t):window.dispatchEvent(new CustomEvent("generatePdf",{detail:{...e,tipTailSettings:t}}))},onCancel:()=>{console.log("📄 Wizard cancelled")}})}catch(e){console.error("Failed to open PDF wizard, falling back to legacy modal:",e),this.showLegacyDownloadModal()}},"create PDF")}async showLegacyDownloadModal(){const e=document.getElementById("pdf-email-modal");if(e){e.style.display="flex";const t=document.getElementById("pdf-email-form");if(t){const o=x.getStorageItem("pdfFormSettings",{});t["user-name"]&&(t["user-name"].value=o.name||""),t["user-project"]&&(t["user-project"].value=o.project||""),t["user-address"]&&(t["user-address"].value=o.address||""),t["user-email"]&&(t["user-email"].value=o.email||""),t["user-telephone"]&&(t["user-telephone"].value=o.telephone||""),t["exclude-prices"]&&(t["exclude-prices"].checked=!!o.excludePrices),t["exclude-qty"]&&(t["exclude-qty"].checked=!!o.excludeQty),t["exclude-long-description"]&&(t["exclude-long-description"].checked=!!o.excludeLongDescription),t["include-gst"]&&(t["include-gst"].checked=!!o.includeGst)}this.loadCustomerLogoPreview(),this.setupCustomerLogoHandlers(),await this.populateTipTailDropdowns(),this.loadTipTailSelections(),this.setupTipTailHandlers()}}refreshUI(){this.init()}showSaveDialog(){Z.requireAuth(e=>{this._showSaveDialogInternal(e)})}_showSaveDialogInternal(e){const t=x.getStorageItem("pdfFormSettings",{}),o=!!this.currentSelectionId,s=t.name?`${t.name} - ${new Date().toLocaleDateString("en-AU")}`:this.currentSelectionName||`Selection - ${new Date().toLocaleDateString("en-AU")}`,i=`
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
    `;this.injectSaveDialogStyles(),document.body.insertAdjacentHTML("beforeend",i);const n=document.getElementById("save-dialog"),r=document.getElementById("save-doc-name"),a=document.getElementById("save-notes");r==null||r.focus(),r==null||r.select(),n.querySelectorAll("button[data-action]").forEach(l=>{l.addEventListener("click",async()=>{const d=l.dataset.action;if(d==="cancel"){n.remove();return}const u=(r==null?void 0:r.value.trim())||"Untitled Selection",m=(a==null?void 0:a.value.trim())||"";this.currentSelectionName=u;const p={...this.prepareSelectionData(),documentName:u,notes:m};n.querySelectorAll("button").forEach(h=>h.disabled=!0),l.textContent="Saving...";try{let h;d==="save-update"?h=await be.updateSelection(this.currentSelectionId,p):(h=await be.saveSelection(p),h.success&&h.id&&(this.currentSelectionId=h.id)),n.remove(),h.success?(this.hasUnsavedChanges=!1,this.lastSaveTime=new Date,this.updateContextHeader(),ge.success(d==="save-update"?"Selection updated!":"Selection saved!")):ge.error("Failed to save: "+(h.error||"Unknown error"))}catch(h){n.remove(),ge.error("Failed to save: "+h.message)}})}),n.addEventListener("click",l=>{l.target===n&&n.remove()});const c=l=>{l.key==="Escape"&&(n.remove(),document.removeEventListener("keydown",c))};document.addEventListener("keydown",c)}injectSaveDialogStyles(){if(document.getElementById("save-dialog-styles"))return;document.head.insertAdjacentHTML("beforeend",`
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
    `)}showLoadPicker(){Z.requireAuth(e=>{this._showLoadPickerInternal(e)})}_showLoadPickerInternal(e){Tt.show(t=>{console.log("✅ Selection loaded:",t),this.currentSelectionId=t.id||null,this.currentSelectionName=t.documentName||t.customerName||"Loaded Selection",this.hasUnsavedChanges=!1,this.loadExistingProducts(),this.updateTotals(),this.updateContextHeader(),t.roomOrder&&Array.isArray(t.roomOrder)&&(this.customRoomOrder=t.roomOrder,this.saveCustomRoomOrder()),ge.success(`Loaded ${t.productCount||this.gridRows.length} products`)})}escapeHtml(e){const t=document.createElement("div");return t.textContent=e||"",t.innerHTML}}const st="onboardingCompleted",Ct=2;class Ho{constructor(){this.currentStep=0,this.overlay=null}shouldShow(){const e=localStorage.getItem(st);if(!e)return!0;try{return JSON.parse(e).version<Ct}catch{return!0}}show(){this.shouldShow()&&this.showForced()}showForced(){const e=document.getElementById("onboarding-overlay");e&&e.remove(),this.currentStep=0,this.createOverlay(),this.renderStep()}createOverlay(){var e,t;this.overlay=document.createElement("div"),this.overlay.id="onboarding-overlay",this.overlay.innerHTML=`
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
    `,document.head.appendChild(e)}getSteps(){return[{icon:"logo",title:"Welcome to Product Presenter",text:"Create beautiful PDF presentations of Seima products for your clients in minutes.",features:[]},{icon:"📦",title:"Add Your Products",text:"There are three ways to get started:",features:[{icon:"📁",title:"Import a File",desc:"Upload CSV or Excel files with product codes"},{icon:"📂",title:"Load a Selection",desc:"Continue from a previous saved selection"},{icon:"🔍",title:"Search Products",desc:"Search and add products one by one"}]},{icon:"🏠",title:"Organise by Room",text:"Group products by room or area. Drag to reorder, and easily manage your selection.",features:[{icon:"🎨",title:"Colour-coded",desc:"Rooms are visually distinct for quick reference"},{icon:"📊",title:"Sort Options",desc:"Sort by Room/Group, Product Code, or Product Name"},{icon:"💾",title:"Auto-saves",desc:"Your work is automatically preserved"}]},{icon:"📄",title:"Create Your PDF",text:'Click "Create PDF" to customise and generate a professional presentation with your branding.',features:[{icon:"💰",title:"Pricing Options",desc:"Show RRP, add GST, or hide pricing entirely"},{icon:"📝",title:"Content Control",desc:"Include descriptions and custom notes"},{icon:"📑",title:"Cover Pages",desc:"Add branded cover and appendix pages"}]}]}renderStep(){const e=this.getSteps(),t=e[this.currentStep],o=document.getElementById("onboarding-content"),s=document.getElementById("onboarding-dots"),i=document.getElementById("onboarding-next");if(!o||!s)return;let n="";t.features.length>0&&(n=t.features.map(a=>`
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
      ${n}
    `,s.innerHTML=e.map((a,c)=>`<div class="onboarding-dot ${c===this.currentStep?"active":""}"></div>`).join(""),i&&(i.textContent=this.currentStep===e.length-1?"Get Started":"Next")}nextStep(){const e=this.getSteps();this.currentStep<e.length-1?(this.currentStep++,this.renderStep()):this.complete()}complete(){localStorage.setItem(st,JSON.stringify({version:Ct,completedAt:new Date().toISOString()})),this.overlay&&(this.overlay.style.animation="fadeIn 0.2s ease reverse",setTimeout(()=>{this.overlay.remove(),this.overlay=null},200))}reset(){localStorage.removeItem(st)}}const Dt=new Ho;class jo{constructor(){this.panel=null,this.messagesContainer=null,this.input=null,this.sendBtn=null,this.isOpen=!1,this._lastUserMessage=null,this._conversationId=null,this._userEmail=null,this._historyOpen=!1}init(){this._createPanel(),this._bindEvents(),this._restoreMessages(),this._initUserEmail()}_createPanel(){const e=document.createElement("div");e.id="ai-chat-panel",e.className="ai-chat-panel",e.innerHTML=`
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
    `,e.appendChild(t);const o=document.createElement("div");o.className="ai-chat-resize-handle",e.insertBefore(o,e.firstChild),document.body.appendChild(e),this.panel=e,this.messagesContainer=e.querySelector("#ai-chat-messages"),this.input=e.querySelector("#ai-chat-input"),this.sendBtn=e.querySelector("#ai-chat-send");const s=localStorage.getItem("fredPanelWidth");if(s){const i=parseInt(s,10);i>=380&&i<=window.innerWidth*.9&&(e.style.width=i+"px",e.style.right=-(i+20)+"px")}this._showWelcome()}_bindEvents(){this.panel.querySelector(".ai-chat-close-btn").addEventListener("click",()=>this.close()),this.panel.querySelector(".ai-chat-clear-btn").addEventListener("click",()=>this._startNewConversation()),this.panel.querySelector(".ai-chat-history-btn").addEventListener("click",()=>this._toggleHistory()),this.panel.querySelector(".ai-chat-history-close").addEventListener("click",()=>this._toggleHistory(!1)),this.input.addEventListener("input",()=>{this.sendBtn.disabled=!this.input.value.trim(),this._autoResizeInput()}),this.input.addEventListener("keydown",i=>{i.key==="Enter"&&!i.shiftKey&&(i.preventDefault(),this._send())}),this.sendBtn.addEventListener("click",()=>this._send());const e=this.panel.querySelector("#ai-chat-image-btn"),t=this.panel.querySelector("#ai-chat-image-input");e.addEventListener("click",()=>t.click()),t.addEventListener("change",()=>{t.files.length&&this._handleImageSelect(t.files[0]),t.value=""}),this.panel.querySelector("#ai-chat-image-remove").addEventListener("click",()=>this._clearImagePreview()),document.addEventListener("keydown",i=>{i.key==="Escape"&&this.isOpen&&this.close()});const o=this.panel.querySelector(".ai-chat-resize-handle");let s=!1;o.addEventListener("mousedown",i=>{i.preventDefault(),s=!0,o.classList.add("active"),this.panel.style.transition="none"}),document.addEventListener("mousemove",i=>{if(!s)return;const n=window.innerWidth*.9,r=Math.min(n,Math.max(380,window.innerWidth-i.clientX));this.panel.style.width=r+"px"}),document.addEventListener("mouseup",()=>{if(!s)return;s=!1,o.classList.remove("active"),this.panel.style.transition="";const i=parseInt(this.panel.style.width,10);i>=380&&localStorage.setItem("fredPanelWidth",i)}),document.addEventListener("mousedown",i=>{this.isOpen&&(s||this.panel.contains(i.target)||i.target.closest("#ai-chat-trigger")||i.target.closest(".ai-product-modal-overlay")||i.target.closest(".ai-comp-modal-overlay")||this.close())})}_showWelcome(){const e=[{prompt:"What matte black basin mixers do you have under $300?",label:"Matte black mixers"},{prompt:"Show me Seima wall-mounted basins",label:"Wall-mounted basins"},{prompt:"What tapware is available in brushed gold?",label:"Brushed gold tapware"},{prompt:"Summarise the products in my current selection",label:"Analyse my selection"}],t=document.createElement("div");t.className="ai-chat-welcome",t.innerHTML=`
      <div class="ai-chat-welcome-icon">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
      </div>
      <h3>Hi, I'm Fred!</h3>
      <p>Search the Seima product catalogue using natural language.</p>
      <div class="ai-chat-suggestions"></div>
    `,this.messagesContainer.innerHTML="",this.messagesContainer.appendChild(t);const o=t.querySelector(".ai-chat-suggestions");this._renderSuggestions(o,e),this._fetchTopQuestions().then(s=>{if(s&&s.length>0){const i=s.slice(0,3);i.push(e[e.length-1]),o.innerHTML="",this._renderSuggestions(o,i)}})}_renderSuggestions(e,t){for(const o of t){const s=document.createElement("button");s.className="ai-suggestion-btn",s.dataset.prompt=o.prompt,s.textContent=o.label,s.addEventListener("click",()=>{this.input.value=o.prompt,this.sendBtn.disabled=!1,this._send()}),e.appendChild(s)}}async _fetchTopQuestions(){const e="fredTopQuestions";try{const o=sessionStorage.getItem(e);if(o)try{const r=JSON.parse(o);if(r&&typeof r.expires=="number"&&r.expires>Date.now()&&Array.isArray(r.questions))return r.questions}catch{}const s=await fetch(`${J.PROXY_URL}/v1/top-questions`);if(!s.ok)return null;const n=((await s.json()).questions||[]).map(r=>({prompt:r.prompt,label:r.label||r.prompt}));return sessionStorage.setItem(e,JSON.stringify({questions:n,expires:Date.now()+6e5})),n}catch{return null}}_handleImageSelect(e){if(!e.type.startsWith("image/"))return;const t=new FileReader;t.onload=()=>{this._pendingImage={dataUrl:t.result,mimeType:e.type,name:e.name};const o=this.panel.querySelector("#ai-chat-image-preview"),s=this.panel.querySelector("#ai-chat-image-thumb");s.src=t.result,o.style.display="flex",this.sendBtn.disabled=!1},t.readAsDataURL(e)}_clearImagePreview(){this._pendingImage=null;const e=this.panel.querySelector("#ai-chat-image-preview");e.style.display="none",this.sendBtn.disabled=!this.input.value.trim()}_autoResizeInput(){this.input.style.height="auto",this.input.style.height=Math.min(this.input.scrollHeight,120)+"px"}async _send(){const e=this.input.value.trim(),t=!!this._pendingImage;if(!e&&!t||ie.processing)return;const o=this.messagesContainer.querySelector(".ai-chat-welcome");o&&o.remove();const s=t?e||`[Image: ${this._pendingImage.name}]`:e;this._addMessage("user",s),this._trackQuestion(s);const i=this._pendingImage;this._clearImagePreview(),this.input.value="",this.input.style.height="auto",this.sendBtn.disabled=!0;let n;i&&(n=[],e&&n.push({type:"text",text:e}),n.push({type:"image_url",image_url:{url:i.dataUrl,detail:"low"}}),e||n.push({type:"text",text:"What Seima products would match this style or look similar to what's shown in this image?"}));const r=this._addThinking();try{const a=C.getSelectedProducts(),c=n||e;let l,d,u="",m=!1;const p=()=>{u&&d&&(d.textContent+=u,u="",this._scrollToBottom()),m=!1},h=await ie.chat(c,_,a,f=>{d||(this._stopThinking(r),{wrapper:l,bubble:d}=this._createStreamingBubble()),u+=f,m||(m=!0,requestAnimationFrame(p))},f=>{r._serverStatus=!0;const S=r.querySelector(".ai-thinking-status");S&&(S.textContent=f),this._scrollToBottom()});p(),this._stopThinking(r),l||({wrapper:l,bubble:d}=this._createStreamingBubble()),d.classList.remove("ai-msg-streaming"),d.dataset.rawContent=h.content,d.innerHTML=this._formatMarkdown(h.content),this._enrichResponseBubble(d);const y=this._generateId();l.dataset.feedbackId=y,this._appendFeedbackRow(l,y,h.content),this._persistMessages(),this._saveConversation()}catch(a){this._stopThinking(r),this._addMessage("error",a.message||"Something went wrong. Please try again.")}this._scrollToBottom(),this.input.focus()}_addMessage(e,t,{skipPersist:o=!1,feedbackId:s=null}={}){const i=document.createElement("div");i.className=`ai-msg ai-msg-${e}`;const n=document.createElement("div");if(n.className="ai-msg-bubble",e==="user")n.textContent=t,this._lastUserMessage=t;else if(e==="assistant"){n.dataset.rawContent=t,n.innerHTML=this._formatMarkdown(t),this._injectProductCards(n),L.isPowerUser()&&(this._enrichTableProducts(n),this._injectCompetitorCards(n)),this._cleanupCardOrphans(n),this._collapseProductCards(n),this._attachProductButtons(n);const r=s||this._generateId();i.dataset.feedbackId=r,i.appendChild(n),this._appendFeedbackRow(i,r,t)}else e==="error"&&(n.innerHTML=`<span class="ai-msg-error">${this._escapeHtml(t)}</span>`);return i.contains(n)||i.appendChild(n),this.messagesContainer.appendChild(i),this._scrollToBottom(),!o&&e!=="error"&&this._persistMessages(),i}_createStreamingBubble(){const e=document.createElement("div");e.className="ai-msg ai-msg-assistant";const t=document.createElement("div");return t.className="ai-msg-bubble ai-msg-streaming",e.appendChild(t),this.messagesContainer.appendChild(e),this._scrollToBottom(),{wrapper:e,bubble:t}}_addThinking(){const e=document.createElement("div");e.className="ai-msg ai-msg-assistant",e.innerHTML=`
      <div class="ai-msg-bubble ai-msg-thinking">
        <span class="ai-thinking-spinner"></span>
        <span class="ai-thinking-status"></span>
      </div>
    `,this.messagesContainer.appendChild(e),this._scrollToBottom();const t=e.querySelector(".ai-thinking-spinner"),o=e.querySelector(".ai-thinking-status"),s=["◜","◠","◝","◞","◡","◟"],i=["Checking behind the toilets...","This is harder than it looks...","Asking the tapware for directions...","Pretending to think really hard...","Rummaging through the basins...","Consulting the shower heads...","Hold on, dropped my wrench...","Almost there, just fixing a leak...","Flipping through the catalogue...","Processing... or just staring at the screen...","Fred is on it. Probably.","Searching every shelf and drawer...","This is tricky, need to ask Jim for help.","I'll reach out to Michael for help?","When do I get a break from all these questions!","I need Bill to upgrade my memory"];let n=0,r=Math.floor(Math.random()*i.length);return e._serverStatus=!1,o.textContent=i[r],e._spinnerTimer=setInterval(()=>{n=(n+1)%s.length,t.textContent=s[n]},100),e._quipTimer=setInterval(()=>{e._serverStatus||(r=(r+1)%i.length,o.textContent=i[r])},3e3),e}_stopThinking(e){e._spinnerTimer&&clearInterval(e._spinnerTimer),e._quipTimer&&clearInterval(e._quipTimer),e.parentNode&&e.remove()}_formatMarkdown(e){let t=this._escapeHtml(e);return t=t.replace(/((?:^\|.+\|$\n?)+)/gm,o=>{const s=o.trim().split(`
`).filter(d=>d.trim());if(s.length<2)return o;const i=d=>d.split("|").slice(1,-1).map(u=>u.trim()),n=d=>/^\|[\s:|-]+\|$/.test(d.trim());let r=i(s[0]),a=1;s.length>1&&n(s[1])&&(a=2);let c="<thead><tr>"+r.map(d=>`<th>${d}</th>`).join("")+"</tr></thead>",l="<tbody>"+s.slice(a).filter(d=>!n(d)).map(d=>"<tr>"+i(d).map(u=>`<td>${u}</td>`).join("")+"</tr>").join("")+"</tbody>";return`<table class="ai-comparison-table">${c}${l}</table>`}),t=t.replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>"),t=t.replace(/`([^`]+)`/g,"<code>$1</code>"),t=t.replace(/^### (.+)$/gm,"<h4>$1</h4>"),t=t.replace(/^## (.+)$/gm,"<h3>$1</h3>"),t=t.replace(/^- (.+)$/gm,"<li>$1</li>"),t=t.replace(/(<li>.*<\/li>\n?)+/g,o=>`<ul>${o}</ul>`),t=t.replace(/^\d+\. (.+)$/gm,"<li>$1</li>"),t=t.replace(/\n\n/g,"</p><p>"),t=`<p>${t}</p>`,t=t.replace(/<p><\/p>/g,""),t=t.replace(/<p>(<h[34]>)/g,"$1"),t=t.replace(/(<\/h[34]>)<\/p>/g,"$1"),t=t.replace(/<p>(<ul>)/g,"$1"),t=t.replace(/(<\/ul>)<\/p>/g,"$1"),t=t.replace(/<p>(<table)/g,"$1"),t=t.replace(/(<\/table>)<\/p>/g,"$1"),t=t.replace(/\b(\d{6})\b/g,'<button class="ai-add-product-btn" data-code="$1" title="Add $1 to selection">$1 <span class="ai-add-icon">+</span></button>'),t}_getBasePath(){var e;return(((e=document.querySelector("base"))==null?void 0:e.href)||window.location.origin+"/").replace(/\/$/,"")}_getProductImage(e){return e.Image_URL||e.imageUrl||e.Image||`${this._getBasePath()}/assets/no-image.png`}_getProductName(e){return e.Description||e.ProductName||e["Product Name"]||""}_getProductMeta(e){const t=e.Finish||e.Colour||"",o=e.DimX||e["X Dimension (mm)"]||"",s=e.DimY||e["Y Dimension (mm)"]||"",i=e.DimZ||e["Z Dimension (mm)"]||"",n=o&&o!=="0"?`${o} × ${s||0} × ${i||0}mm`:"";return[t,n].filter(Boolean).join("  ·  ")}_getProductPrice(e){const t=e["RRP INC GST"]||e.RRP_INCGST||e["RRP EX GST"]||e.RRP_EXGST||"";return t?`$${parseFloat(t).toLocaleString("en-AU",{minimumFractionDigits:2})}`:""}_enrichTableProducts(e){const t=this._getBasePath(),o=ie.lastCompetitorProducts;e.querySelectorAll(".ai-comparison-table").forEach(s=>{const i=s.querySelector("thead"),n=s.querySelector("tbody");if(!i||!n)return;const a=i.querySelectorAll("th").length;if(a<2)return;const c=new Array(a).fill(null);if(n.querySelectorAll("tr").forEach(d=>{d.querySelectorAll("td").forEach((m,p)=>{if(c[p])return;const h=m.querySelector("strong"),y=(h?h.textContent:m.textContent).trim();if(y){if(/^\d{6}$/.test(y)){const f=_.findProductByCode(y);f&&(c[p]={src:this._getProductImage(f),click:()=>this._showProductModal(y)})}else if(o)for(const[f,S]of o){const w=String(f);if(w===y||y.includes(w)||w.includes(y)){c[p]={src:S.imageUrl||"",click:()=>this._showCompetitorModal(S.brand,f)};break}}}})}),!c.some(Boolean))return;const l=document.createElement("tr");l.className="ai-table-image-row";for(let d=0;d<a;d++){const u=document.createElement("td"),m=c[d];if(m&&m.src){const p=document.createElement("img");p.className="ai-table-product-img",p.src=m.src,p.alt="",p.onerror=()=>{p.src=`${t}/assets/no-image.png`},u.appendChild(p),m.click&&(u.style.cursor="pointer",u.addEventListener("click",m.click))}l.appendChild(u)}n.insertBefore(l,n.firstChild)})}_injectProductCards(e){e.querySelectorAll("table .ai-add-product-btn").forEach(s=>{const i=document.createElement("strong");i.textContent=s.dataset.code,s.replaceWith(i)});const t=e.querySelectorAll(".ai-add-product-btn");if(!t.length)return;const o=this._getBasePath();t.forEach(s=>{const i=s.dataset.code,n=_.findProductByCode(i);if(!n)return;const r=s.closest("li");if(!(r||s.parentElement))return;const c=this._getProductImage(n),l=this._getProductName(n),d=this._getProductMeta(n),u=this._getProductPrice(n),m=document.createElement("div");if(m.className="ai-product-card",m.dataset.code=i,m.innerHTML=`
        <img class="ai-product-card-img" src="${this._escapeHtml(c)}" alt="" onerror="this.src='${o}/assets/no-image.png';">
        <div class="ai-product-card-info">
          <div class="ai-product-card-name">${this._escapeHtml(l)}</div>
          ${d?`<div class="ai-product-card-meta">${this._escapeHtml(d)}</div>`:""}
          <div class="ai-product-card-footer">
            <span class="ai-product-card-price">${u}</span>
            <button class="ai-card-add-btn" data-code="${i}" title="Add to selection">+ Add</button>
          </div>
        </div>
      `,m.addEventListener("click",p=>{p.target.closest(".ai-card-add-btn")||this._showProductModal(i)}),m.querySelector(".ai-card-add-btn").addEventListener("click",p=>{p.preventDefault(),p.stopPropagation(),this._addProductToGrid(i,p.currentTarget)}),r){const p=r.parentElement;r.replaceWith(m),this._removeTrailingProductDetail(p||m)}else s.replaceWith(m)})}_removeTrailingProductDetail(e){const t=/^[\u2013\u2014–—-]\s*(Dimensions|Description|Detail|Price)\b/;let o=e.nextSibling;for(;o;){const s=o.nextSibling;if(o.nodeType===Node.TEXT_NODE){if(t.test(o.textContent.trim())){o.remove(),o=s;continue}break}if(o.nodeType===Node.ELEMENT_NODE){const i=o.textContent.trim();if(o.tagName==="P"&&t.test(i)){o.remove(),o=s;continue}break}break}}_cleanupCardOrphans(e){const t=e.querySelectorAll(".ai-product-card");for(const o of t){let s=o.nextSibling;for(;s;){const i=s.nextSibling;if(s.nodeType===Node.TEXT_NODE){const n=s.textContent.trim();if(!n||/^[\u2013\u2014–—-]\s*/.test(n)){s.remove(),s=i;continue}if(/^[A-Z][\w\s,]+\s*[\u2013\u2014–—-]\s*\$?\d/.test(n)){s.remove(),s=i;continue}break}if(s.nodeType===Node.ELEMENT_NODE){const n=s.textContent.trim();if(s.tagName==="P"&&/^[A-Z][\w\s,]+\s*[\u2013\u2014–—-]\s*\$?\d/.test(n)){s.remove(),s=i;continue}if(s.tagName==="P"&&/^[\u2013\u2014–—-]\s*$/.test(n)){s.remove(),s=i;continue}break}break}}}_injectCompetitorCards(e){if(!L.isStaffMode())return;const t=ie.lastCompetitorProducts;if(!t||t.size===0)return;const o=this._getBasePath(),s=n=>String(n).replace(/[.\-_\s/\\]+/g,"").toLowerCase(),i=e.querySelectorAll("li");for(const n of i){if(n.closest("table"))continue;const r=n.textContent||"";let a=null;for(const[y,f]of t)if(r.includes(y)||r.includes(s(y))){a=f;break}if(!a){const y=s(r);for(const[f,S]of t)if(y.includes(s(f))){a=S;break}}if(!a)continue;const c=a.imageUrl||`${o}/assets/no-image.png`,l=a.name||a.code,d=a.price?`$${parseFloat(a.price).toLocaleString("en-AU",{minimumFractionDigits:2})}`:"",u=a.finish||"",m=a.brand||"",p=document.createElement("div");p.className="ai-product-card ai-comp-card",p.dataset.brand=m,p.dataset.code=a.code,p.innerHTML=`
        <img class="ai-product-card-img" src="${this._escapeHtml(c)}" alt="" onerror="this.src='${o}/assets/no-image.png';">
        <div class="ai-product-card-info">
          <div class="ai-comp-card-badge">${this._escapeHtml(m)}</div>
          <div class="ai-product-card-name">${this._escapeHtml(l)}</div>
          ${u?`<div class="ai-product-card-meta">${this._escapeHtml(u)}</div>`:""}
          <div class="ai-product-card-footer">
            <span class="ai-product-card-price">${d}</span>
            <span class="ai-comp-card-code">${this._escapeHtml(a.code)}</span>
          </div>
        </div>
      `,p.addEventListener("click",()=>{this._showCompetitorModal(m,a.code)});const h=n.parentElement;n.replaceWith(p),this._removeTrailingProductDetail(h||p)}}_showCompetitorModal(e,t){var d,u,m,p;if(!L.isStaffMode())return;const o=document.querySelector(".ai-product-modal-overlay");o&&o.remove();const s=this._getBasePath(),i=this.messagesContainer.querySelector(`.ai-comp-card[data-brand="${e}"][data-code="${t}"]`),n=((d=i==null?void 0:i.querySelector(".ai-product-card-name"))==null?void 0:d.textContent)||t,r=((u=i==null?void 0:i.querySelector(".ai-product-card-img"))==null?void 0:u.src)||"",a=((m=i==null?void 0:i.querySelector(".ai-product-card-meta"))==null?void 0:m.textContent)||"",c=((p=i==null?void 0:i.querySelector(".ai-product-card-price"))==null?void 0:p.textContent)||"",l=document.createElement("div");l.className="ai-product-modal-overlay",l.innerHTML=`
      <div class="ai-product-modal ai-comp-modal">
        <div class="ai-product-modal-header">
          <span class="ai-comp-modal-badge">${this._escapeHtml(e)} — Competitor</span>
          <button class="ai-product-modal-close" title="Close">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        <div class="ai-product-modal-body">
          <img class="ai-product-modal-img" src="${this._escapeHtml(r||`${s}/assets/no-image.png`)}" alt="" onerror="this.src='${s}/assets/no-image.png';">
          <h3 class="ai-product-modal-title">${this._escapeHtml(n)}</h3>
          <dl class="ai-product-modal-specs">
            <dt>Product Code</dt><dd>${this._escapeHtml(t)}</dd>
            <dt>Brand</dt><dd>${this._escapeHtml(e)}</dd>
            ${a?`<dt>Finish</dt><dd>${this._escapeHtml(a)}</dd>`:""}
          </dl>
          ${c?`<div class="ai-product-modal-price ai-comp-modal-price">${this._escapeHtml(c)} <small>(Competitor RRP)</small></div>`:""}
          <div class="ai-comp-modal-loading">Loading full details...</div>
        </div>
      </div>
    `,l.addEventListener("click",h=>{h.target===l&&l.remove()}),l.querySelector(".ai-product-modal-close").addEventListener("click",()=>l.remove()),document.addEventListener("keydown",function h(y){y.key==="Escape"&&(l.remove(),document.removeEventListener("keydown",h))}),document.body.appendChild(l),this._enrichCompetitorModal(l,e,t,s)}async _enrichCompetitorModal(e,t,o,s){const i=e.querySelector(".ai-product-modal-body"),n=i==null?void 0:i.querySelector(".ai-comp-modal-loading");try{const r=await P.findCompetitorEntryByCode(o);if(!(r!=null&&r.competitorProduct)){n&&n.remove();return}const a=r.competitorProduct,c=a.image_url||a.Image_URL||`${s}/assets/no-image.png`,l=a.product_name||a.ProductName||o,d=a.description||a.product_description||a.features||"",u=a.rrp_ex_gst||a.rrp||a.price||a.rrp_inc_gst||"",m=u?`$${parseFloat(u).toLocaleString("en-AU",{minimumFractionDigits:2})}`:"",p=a.product_url||"",h=[];a.product_code&&h.push(["Product Code",a.product_code]),a.collection&&h.push(["Collection",a.collection]),a.product_type&&h.push(["Category",a.product_type]),a.subcategory&&h.push(["Subcategory",a.subcategory]),(a.finish||a.colour)&&h.push(["Finish",a.finish||a.colour]),a.material&&h.push(["Material",a.material]),a.dimensions_mm&&h.push(["Dimensions",a.dimensions_mm]),a.wels_rating&&h.push(["WELS",a.wels_rating]),i.innerHTML=`
        <img class="ai-product-modal-img" src="${this._escapeHtml(c)}" alt="" onerror="this.src='${s}/assets/no-image.png';">
        <h3 class="ai-product-modal-title">${this._escapeHtml(l)}</h3>
        ${h.length?`<dl class="ai-product-modal-specs">${h.map(([y,f])=>`<dt>${this._escapeHtml(y)}</dt><dd>${this._escapeHtml(f)}</dd>`).join("")}</dl>`:""}
        ${d?`<div class="ai-product-modal-desc">${this._escapeHtml(d)}</div>`:""}
        ${m?`<div class="ai-product-modal-price ai-comp-modal-price">${m} <small>(Competitor RRP)</small></div>`:""}
        ${p?`<a class="ai-comp-modal-link" href="${this._escapeHtml(p)}" target="_blank" rel="noopener">View on ${this._escapeHtml(t)} website</a>`:""}
      `}catch{n&&n.remove()}}_collapseProductCards(e,t=5){const o=e.querySelectorAll(".ai-product-card");if(o.length<=t)return;const s=[];o.forEach((r,a)=>{a>=t&&(r.style.display="none",s.push(r))});const i=document.createElement("button");i.className="ai-show-more-btn",i.textContent=`Show ${s.length} more product${s.length>1?"s":""}`,i.addEventListener("click",()=>{s.forEach(r=>{r.style.display=""}),i.remove(),this._scrollToBottom()});const n=o[t-1];n.parentNode.insertBefore(i,n.nextSibling)}_attachProductButtons(e){e.querySelectorAll(".ai-add-product-btn").forEach(t=>{t.addEventListener("click",o=>{o.preventDefault(),this._addProductToGrid(t.dataset.code,t)})})}_addProductToGrid(e,t){const o=_.findProductByCode(e);if(!o){t&&(t.classList.add("ai-add-error"),t.title="Product not found");return}C.addProductToSelection(o),window.productGridManager&&(window.productGridManager.loadExistingProducts(),window.productGridManager.updateTotals(),window.productGridManager.ensureAtLeastOneEmptyRow()),t&&(t.classList.add("added"),t.disabled=!0,t.textContent="Added ✓"),this._markCardAdded(e)}_markCardAdded(e){document.querySelectorAll(`.ai-card-add-btn[data-code="${e}"]`).forEach(o=>{o.classList.add("added"),o.disabled=!0,o.textContent="Added ✓"});const t=document.querySelector('.ai-product-modal-add[data-code="'+e+'"]');t&&(t.classList.add("added"),t.disabled=!0,t.textContent="Added to Selection ✓")}_showProductModal(e){const t=_.findProductByCode(e);if(!t)return;const o=document.querySelector(".ai-product-modal-overlay");o&&o.remove();const s=this._getBasePath(),i=this._getProductImage(t),n=this._getProductName(t),r=this._getProductPrice(t),a=t["Long Description"]||t.LongDescription||"",c=t.Range||"",l=t.Group||"",d=t.SubGroup||t.Subgroup||"",u=t.Finish||"",m=t.Colour||"",p=t.DimX||t["X Dimension (mm)"]||"",h=t.DimY||t["Y Dimension (mm)"]||"",y=t.DimZ||t["Z Dimension (mm)"]||"",f=p&&p!=="0"?`${p} × ${h||0} × ${y||0}mm`:"",S=t["WELS STAR"]||t.WELS_STAR||"",w=[];c&&w.push(["Range",c]),l&&w.push(["Group",l]),d&&w.push(["Type",d]),u&&w.push(["Finish",u]),m&&m!==u&&w.push(["Colour",m]),f&&w.push(["Dimensions",f]),S&&w.push(["WELS",`${S} star`]);const v=document.createElement("div");v.className="ai-product-modal-overlay",v.innerHTML=`
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
          <img class="ai-product-modal-img" src="${this._escapeHtml(i)}" alt="" onerror="this.src='${s}/assets/no-image.png';">
          <h3 class="ai-product-modal-title">${this._escapeHtml(n)}</h3>
          ${w.length?`<dl class="ai-product-modal-specs">${w.map(([b,E])=>`<dt>${this._escapeHtml(b)}</dt><dd>${this._escapeHtml(E)}</dd>`).join("")}</dl>`:""}
          ${a?`<div class="ai-product-modal-desc">${this._escapeHtml(a)}</div>`:""}
          ${r?`<div class="ai-product-modal-price">${r}</div>`:""}
          <button class="ai-product-modal-add" data-code="${e}">Add to Selection</button>
        </div>
      </div>
    `,v.addEventListener("click",b=>{b.target===v&&v.remove()}),v.querySelector(".ai-product-modal-close").addEventListener("click",()=>v.remove()),v.querySelector(".ai-product-modal-add").addEventListener("click",b=>{this._addProductToGrid(e,null);const E=b.currentTarget;E.classList.add("added"),E.disabled=!0,E.textContent="Added to Selection ✓"}),document.addEventListener("keydown",function b(E){E.key==="Escape"&&(v.remove(),document.removeEventListener("keydown",b))}),document.body.appendChild(v)}_appendFeedbackRow(e,t,o){const s=document.createElement("div");s.className="ai-feedback-row";const i=this._getFeedbackEntry(t),n=(i==null?void 0:i.rating)||null;s.innerHTML=`
      <button class="ai-feedback-btn ai-feedback-up${n==="up"?" active":""}"
              data-rating="up" title="Helpful">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3H14z"></path>
          <path d="M7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
        </svg>
      </button>
      <button class="ai-feedback-btn ai-feedback-down${n==="down"?" active":""}"
              data-rating="down" title="Not helpful">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3H10z"></path>
          <path d="M17 2h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-3"></path>
        </svg>
      </button>
    `,s.querySelectorAll(".ai-feedback-btn").forEach(a=>{a.addEventListener("click",()=>{const c=a.dataset.rating;s.querySelectorAll(".ai-feedback-btn").forEach(l=>l.classList.remove("active")),a.classList.add("active"),this._saveFeedback(t,o,c)})});const r=e.querySelector(".ai-msg-bubble");r?e.insertBefore(s,r.nextSibling):e.appendChild(s)}async _saveFeedback(e,t,o){try{const s=await this._loadFeedback(),i=s.findIndex(a=>a.id===e),n={id:e,question:this._lastUserMessage||"",answer:(t||"").slice(0,500),rating:o,timestamp:Date.now(),synced:!1};i>=0?s[i]={...s[i],...n}:s.push(n);const{set:r}=await M(async()=>{const{set:a}=await import("./vendor-idb-DwnyWBFG.js");return{set:a}},[]);await r(Ie,s)}catch{}}_getFeedbackEntry(e){return this._loadFeedback().then(t=>t.find(o=>o.id===e)||null)}async _loadFeedback(){try{const{get:e}=await M(async()=>{const{get:o}=await import("./vendor-idb-DwnyWBFG.js");return{get:o}},[]),t=await e(Ie);return Array.isArray(t)?t:[]}catch{return[]}}_escapeHtml(e){const t=document.createElement("div");return t.textContent=e,t.innerHTML}_scrollToBottom(){requestAnimationFrame(()=>{this.messagesContainer.scrollTop=this.messagesContainer.scrollHeight})}_enrichResponseBubble(e){this._injectProductCards(e),L.isPowerUser()&&(this._enrichTableProducts(e),this._injectCompetitorCards(e)),this._cleanupCardOrphans(e),this._collapseProductCards(e),this._attachProductButtons(e)}_persistMessages(){clearTimeout(this._persistTimer),this._persistTimer=setTimeout(()=>this._doPersistMessages(),500)}async _doPersistMessages(){try{const e=[];this.messagesContainer.querySelectorAll(".ai-msg").forEach(o=>{var s,i;o.classList.contains("ai-msg-user")?e.push({role:"user",content:((s=o.querySelector(".ai-msg-bubble"))==null?void 0:s.textContent)||""}):o.classList.contains("ai-msg-assistant")&&!o.querySelector(".ai-msg-thinking")&&e.push({role:"assistant",content:((i=o.querySelector(".ai-msg-bubble"))==null?void 0:i.dataset.rawContent)||"",feedbackId:o.dataset.feedbackId||null})});const{set:t}=await M(async()=>{const{set:o}=await import("./vendor-idb-DwnyWBFG.js");return{set:o}},[]);await t(ze,e)}catch{}}async _restoreMessages(){try{localStorage.removeItem(ze);const{get:e}=await M(async()=>{const{get:i}=await import("./vendor-idb-DwnyWBFG.js");return{get:i}},[]),t=await e(ze);if(!Array.isArray(t)||t.length===0)return;const o=this.messagesContainer.querySelector(".ai-chat-welcome");o&&o.remove();for(const i of t)i.role==="user"&&(this._lastUserMessage=i.content),this._addMessage(i.role,i.content,{skipPersist:!0,feedbackId:i.feedbackId||null});const s=document.createElement("div");s.className="ai-chat-restored",s.textContent="Previous conversation restored",this.messagesContainer.prepend(s)}catch{}}_generateId(){return Date.now().toString(36)+Math.random().toString(36).substr(2)}async _trackQuestion(e){try{const{get:t,set:o}=await M(async()=>{const{get:n,set:r}=await import("./vendor-idb-DwnyWBFG.js");return{get:n,set:r}},[]),s=await t(ke)||{},i=e.trim();if(i.length<5)return;s[i]=(s[i]||0)+1,await o(ke,s)}catch{}}async _syncFeedback(){try{const{get:e,set:t,del:o}=await M(async()=>{const{get:a,set:c,del:l}=await import("./vendor-idb-DwnyWBFG.js");return{get:a,set:c,del:l}},[]),s=await this._loadFeedback(),i=s.filter(a=>!a.synced),n=await e(ke)||null;if(i.length===0&&!n)return;if((await fetch(`${J.PROXY_URL}/v1/feedback`,{method:"POST",headers:{"Content-Type":"application/json",...L.getAuthHeaders()},body:JSON.stringify({entries:i,questionLog:n})})).ok){for(const a of i)a.synced=!0;this._pruneFeedback(s),await t(Ie,s),await o(ke)}}catch{}}_pruneFeedback(e){const t=Date.now()-6048e5;for(let o=e.length-1;o>=0;o--)e[o].synced&&e[o].timestamp<t&&e.splice(o,1)}async _clearChat(){await ie.clearHistory();try{const{del:e}=await M(async()=>{const{del:t}=await import("./vendor-idb-DwnyWBFG.js");return{del:t}},[]);await e(Ie),await e(ke)}catch{}localStorage.removeItem(Ie),localStorage.removeItem(ke),this._showWelcome()}async _initUserEmail(){try{const e=L.getCurrentUser();this._userEmail=(e==null?void 0:e.email)||null}catch{}}async _saveConversation(){var s;if(!this._userEmail)return;const e=[];if(this.messagesContainer.querySelectorAll(".ai-msg").forEach(i=>{var n,r;i.classList.contains("ai-msg-user")?e.push({role:"user",content:((n=i.querySelector(".ai-msg-bubble"))==null?void 0:n.textContent)||""}):i.classList.contains("ai-msg-assistant")&&!i.querySelector(".ai-msg-thinking")&&e.push({role:"assistant",content:((r=i.querySelector(".ai-msg-bubble"))==null?void 0:r.dataset.rawContent)||""})}),e.length<2)return;this._conversationId||(this._conversationId=Date.now().toString(36)+Math.random().toString(36).slice(2,8));const t=((s=e.find(i=>i.role==="user"))==null?void 0:s.content)||"Untitled",o=t.length>50?t.slice(0,47)+"...":t;try{await fetch(`${J.PROXY_URL}/v1/conversations/${this._conversationId}`,{method:"PUT",headers:{"Content-Type":"application/json",...L.getAuthHeaders()},body:JSON.stringify({email:this._userEmail,title:o,messages:e})})}catch{}}_startNewConversation(){this._saveConversation(),this._conversationId=null,this._clearChat()}_toggleHistory(e){const t=this.panel.querySelector("#ai-chat-history-panel");this._historyOpen=e!==void 0?e:!this._historyOpen,t.classList.toggle("open",this._historyOpen),this._historyOpen&&this._loadConversationList()}async _loadConversationList(){if(!this._userEmail){this.panel.querySelector("#ai-chat-history-list").innerHTML='<div class="ai-chat-history-empty">Sign in to see conversation history.</div>';return}const e=this.panel.querySelector("#ai-chat-history-list");e.innerHTML='<div class="ai-chat-history-empty">Loading...</div>';try{const t=`${J.PROXY_URL}/v1/conversations?email=${encodeURIComponent(this._userEmail)}`,o=await fetch(t,{headers:L.getAuthHeaders()});if(!o.ok)throw new Error("Failed");const i=(await o.json()).conversations||[];if(i.length===0){e.innerHTML='<div class="ai-chat-history-empty">No previous conversations.</div>';return}e.innerHTML=i.map(n=>`
        <button class="ai-chat-history-item" data-id="${n.id}">
          <div class="ai-chat-history-title">${this._escapeHtml(n.title)}</div>
          <div class="ai-chat-history-meta">${n.messageCount||0} messages · ${this._formatHistoryTime(n.updatedAt)}</div>
        </button>
      `).join(""),e.querySelectorAll(".ai-chat-history-item").forEach(n=>{n.addEventListener("click",()=>this._loadConversation(n.dataset.id))})}catch{e.innerHTML='<div class="ai-chat-history-empty">Failed to load conversations.</div>'}}async _loadConversation(e){try{const t=`${J.PROXY_URL}/v1/conversations/${e}`,o=await fetch(t,{headers:L.getAuthHeaders()});if(!o.ok)throw new Error("Failed");const s=await o.json();this._conversationId=e,ie.clearHistory(),this.messagesContainer.innerHTML="";const i=this.messagesContainer.querySelector(".ai-chat-welcome");i&&i.remove();for(const r of s.messages||[])r.role==="user"&&(this._lastUserMessage=r.content),this._addMessage(r.role,r.content,{skipPersist:!0}),(r.role==="user"||r.role==="assistant")&&ie.conversationHistory.push(r);this._persistMessages(),this._toggleHistory(!1);const n=document.createElement("div");n.className="ai-chat-restored",n.textContent="Conversation restored",this.messagesContainer.prepend(n)}catch{console.error("Failed to load conversation")}}_formatHistoryTime(e){if(!e)return"";const t=new Date(e),s=new Date-t,i=Math.floor(s/864e5);return i===0?"Today":i===1?"Yesterday":i<7?`${i}d ago`:t.toLocaleDateString("en-AU",{day:"numeric",month:"short"})}open(){this.panel&&(this.panel.style.right="",this.panel.classList.add("open"),this.isOpen=!0,setTimeout(()=>{var e;return(e=this.input)==null?void 0:e.focus()},300),this._syncFeedback())}close(){if(!this.panel){this.isOpen=!1;return}const e=this.panel.offsetWidth||620;this.panel.style.right=-(e+20)+"px",this.panel.classList.remove("open"),this.isOpen=!1}toggle(){this.isOpen?this.close():this.open()}}const at=new jo;class qo{constructor(){this.navigationManager=null,this.fileImportManager=new Do,this.productGridManager=new He,this.isInitialized=!1,X.log("SeimaScanner application starting",Y.INFO)}async init(){var e,t,o;try{X.log("Initializing application modules",Y.INFO),L.configure({googleSheetsUrl:(e=F.PRESENTATION_RECORDING)==null?void 0:e.GOOGLE_SHEETS_URL,email:F.EMAIL}),Z.configure({logoSrc:"assets/seima-logo.png",brandName:"Seima",appName:"Product Presenter"});const s=(t=F.PRESENTATION_RECORDING)==null?void 0:t.GOOGLE_SHEETS_URL;if(s&&Zt(s).catch(r=>{console.warn("Synonyms preload failed:",(r==null?void 0:r.message)||r)}),(o=F.CROSSHAIR)!=null&&o.ENABLED){const r=L.getCurrentUser();P.configure(F.CROSSHAIR,(r==null?void 0:r.email)||""),P.preload().catch(a=>{console.warn("Crosshair preload failed (user may not be logged in):",a.message)})}this.navigationManager=new co;const i=_e.getCompatibilityReport();X.log(`Browser compatibility: ${i.score}% (${i.browserName})`,Y.INFO),_e.shouldShowCompatibilityWarning()&&this.showCompatibilityWarning(),await this.navigationManager.init(),this.fileImportManager.init(),this.setupGlobalEventListeners(),this.productGridManager.init(),at.init();const n=document.getElementById("ai-chat-trigger");return n&&n.addEventListener("click",()=>at.toggle()),window.navigationManager=this.navigationManager,window.productGridManager=this.productGridManager,window.browserCompatibility=_e,window.downloadWithFallback=it,window.showPdfFormScreen=nt,this.isInitialized=!0,X.log("Seima Scanner initialized successfully",Y.INFO),this._dismissLoadingOverlay(),setTimeout(()=>{Dt.show()},500),!0}catch(s){return X.handleError({message:"Failed to initialize application",error:s,category:xe.UI,level:Y.CRITICAL,context:"app-init"}),this._dismissLoadingOverlay(),!1}}_dismissLoadingOverlay(){const e=document.getElementById("app-loading-overlay");e&&(e.classList.add("fade-out"),e.addEventListener("transitionend",()=>e.remove(),{once:!0}),setTimeout(()=>e.remove(),400))}showCompatibilityWarning(){const e=_e.getCompatibilityReport(),t=e.recommendations;if(t.length===0)return;const o=t.filter(n=>n.type==="critical"),s=e.score<A.get("compatibility.minCompatibilityScore",70);if(o.length===0&&!s)return;const i=document.createElement("div");i.style.cssText=`
      position: fixed; top: 0; left: 0; right: 0; z-index: 9998;
      background: linear-gradient(135deg, #fef3c7 0%, #fed7aa 100%);
      border-bottom: 2px solid #f59e0b; padding: 12px 16px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
      font-size: 14px; line-height: 1.4;
    `,i.innerHTML=`
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
    `,document.body.insertBefore(i,document.body.firstChild)}setupGlobalEventListeners(){window.addEventListener("generatePdf",e=>{const{tipTailSettings:t,...o}=e.detail;lo(),nt(o,t||null)}),window.addEventListener("beforeunload",()=>{}),_e.features.memoryAPI&&setInterval(()=>{const e=_e.memoryInfo;e.memoryPressure==="high"&&console.warn("High memory usage detected:",e)},6e4)}getSelectedProducts(){return C.getSelectedProducts()}clearSelection(){return C.clearAllSelections()}addProduct(e,{notes:t="",room:o="",quantity:s=1}={}){return C.addProductToSelection(e,{notes:t,room:o,quantity:s})}updateSelectionCount(){this.navigationManager&&this.navigationManager.updateSelectionCount()}showError(e){alert(e)}}document.addEventListener("DOMContentLoaded",async()=>{window.seimaScanner=new qo,await window.seimaScanner.init(),window._appVersion=F.VERSION;const g=document.getElementById("menu-version-footer");g&&(g.textContent=`Ver: ${F.VERSION}`),Wo(),Vo();const e=document.getElementById("changelog-close");e&&e.addEventListener("click",()=>{document.getElementById("changelog-modal").style.display="none"})});function Wo(){const g=document.getElementById("help-btn");g&&g.addEventListener("click",()=>{Xo()});const e=document.getElementById("crosshair-btn");e&&e.addEventListener("click",()=>{window.location.href="screens/validator.html"});const t=document.getElementById("pending-btn");t&&t.addEventListener("click",()=>{window.location.href="screens/admin-pending.html"});const o=document.getElementById("landscape-btn");o&&o.addEventListener("click",()=>{window.location.href="screens/landscape.html"});const s=document.getElementById("admin-btn");s&&s.addEventListener("click",()=>{window.location.href="screens/admin.html"});const i=document.getElementById("quick-start-btn");i&&i.addEventListener("click",()=>{Dt.showForced()})}function Vo(){const g=document.getElementById("user-menu-container"),e=document.getElementById("user-menu-trigger"),t=document.getElementById("user-menu-dropdown"),o=document.getElementById("sign-in-btn"),s=document.getElementById("user-avatar"),i=document.getElementById("user-name-display");function n(c){var l,d,u,m,p,h,y,f,S,w,v;if(c){(l=F.CROSSHAIR)!=null&&l.ENABLED&&(P.configure(F.CROSSHAIR,c.email||""),P.preload().catch(ce=>{console.warn("Crosshair preload after login failed:",ce)})),g&&(g.style.display="block"),o&&(o.style.display="none");const b=document.getElementById("crosshair-btn"),E=document.getElementById("pending-btn"),k=L.isStaffMode(),R=L.isPowerUser(),I=L.isAdmin();b&&(b.style.display=(d=F.CROSSHAIR)!=null&&d.ENABLED&&k?"":"none"),E&&(E.style.display=k?"":"none");const T=document.getElementById("landscape-btn");T&&(T.style.display=(u=F.CROSSHAIR)!=null&&u.ENABLED&&k?"":"none");const B=document.getElementById("admin-btn");B&&(B.style.display=I?"":"none");const U=document.getElementById("staff-divider"),H=(b==null?void 0:b.style.display)!=="none"||(E==null?void 0:E.style.display)!=="none"||(T==null?void 0:T.style.display)!=="none"||(B==null?void 0:B.style.display)!=="none";U&&(U.style.display=H?"":"none"),document.querySelectorAll("#import-file-btn, #entry-import").forEach(ce=>{ce&&(ce.style.display=R?"":"none")});const fe=document.getElementById("ai-chat-trigger");fe&&(fe.style.display="");const Ee=document.getElementById("guided-ask-fred");Ee&&(Ee.style.display="");const lt=r(c.name);s&&(s.textContent=lt),i&&(i.textContent=((m=c.name)==null?void 0:m.split(" ")[0])||"User");const je=(c.email||"").toLowerCase().endsWith("@seima.com.au")&&c.emailVerified===!1;let q=document.getElementById("verify-email-banner");if(je?(q||(q=document.createElement("div"),q.id="verify-email-banner",q.className="verify-email-banner",q.innerHTML=`
            <span>Verify your email to access staff features.</span>
            <button id="verify-email-btn" class="verify-email-btn">Verify now</button>
          `,document.body.insertBefore(q,document.body.firstChild),q.querySelector("#verify-email-btn").addEventListener("click",()=>{Z.showVerifyEmail(c.email,()=>{n(L.getCurrentUser()),q==null||q.remove()})})),q.style.display=""):q&&(q.style.display="none"),t){const ce=je?`
            <button class="user-menu-item" id="menu-verify-email" style="color:var(--color-copper,#b87333);font-weight:600;">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              Verify Email (staff access)
            </button>`:"",De=window._appVersion?`Ver: ${window._appVersion}`:"Loading...";t.innerHTML=`
          <div class="user-menu-header">
            <div class="user-menu-name">${a(c.name||"User")}</div>
            <div class="user-menu-email">${a(c.email||"")}</div>
          </div>
          <div class="user-menu-items">
            ${ce}
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
          <div class="user-menu-footer" id="menu-version-footer" title="Click to view what's new">${De}</div>
        `,(p=document.getElementById("menu-verify-email"))==null||p.addEventListener("click",()=>{t.style.display="none",Z.showVerifyEmail(c.email,()=>{var W;n(L.getCurrentUser()),(W=document.getElementById("verify-email-banner"))==null||W.remove()})}),(h=document.getElementById("menu-refresh"))==null||h.addEventListener("click",async()=>{t.style.display="none";try{const{del:W,keys:qe}=await M(async()=>{const{del:te,keys:Ce}=await import("./vendor-idb-DwnyWBFG.js");return{del:te,keys:Ce}},[]),de=await qe(),Se=["productCatalogCsv","customerLogo","fredChatHistory","fredChatMessages","fredFeedback","fredQuestionLog"];await Promise.all(de.filter(te=>typeof te=="string"&&(Se.includes(te)||te.startsWith("crosshair_"))).map(te=>W(te)))}catch{}localStorage.removeItem("configPreferences"),localStorage.removeItem("pdfWizardSettings"),Object.keys(localStorage).filter(W=>W.startsWith("crosshair_")||W.startsWith("fred")).forEach(W=>localStorage.removeItem(W)),window.location.reload()}),(y=document.getElementById("menu-version-footer"))==null||y.addEventListener("click",()=>{t.style.display="none",Jo()}),(f=document.getElementById("menu-profile"))==null||f.addEventListener("click",()=>{t.style.display="none",Z.showEditProfile(W=>{C.clearUserSettings(),n(W)})}),(S=document.getElementById("menu-password"))==null||S.addEventListener("click",()=>{t.style.display="none",Z.showChangePassword()}),(w=document.getElementById("menu-logout"))==null||w.addEventListener("click",()=>{var W;t.style.display="none",C.clearUserSettings(),P.clearAllCaches(),(W=window.productGridManager)!=null&&W.searchCache&&window.productGridManager.searchCache.clear(),L.logout(),n(null)})}}else{g&&(g.style.display="none"),o&&(o.style.display="block"),document.querySelectorAll("#import-file-btn, #entry-import").forEach(U=>{U&&(U.style.display="none")});const b=document.getElementById("ai-chat-trigger");b&&(b.style.display="none");const E=document.getElementById("guided-ask-fred");E&&(E.style.display="none"),at.close();const k=document.getElementById("crosshair-btn");k&&(k.style.display="none");const R=document.getElementById("pending-btn");R&&(R.style.display="none");const I=document.getElementById("landscape-btn");I&&(I.style.display="none");const T=document.getElementById("admin-btn");T&&(T.style.display="none");const B=document.getElementById("staff-divider");B&&(B.style.display="none")}typeof((v=_)==null?void 0:v.refreshCatalogAccessForRole)=="function"&&_.refreshCatalogAccessForRole().catch(b=>{console.warn("Catalog access refresh failed:",(b==null?void 0:b.message)||b)})}function r(c){if(!c)return"?";const l=c.trim().split(" ");return l.length>=2?(l[0][0]+l[l.length-1][0]).toUpperCase():c.substring(0,2).toUpperCase()}function a(c){const l=document.createElement("div");return l.textContent=c||"",l.innerHTML}e&&t&&(e.addEventListener("click",c=>{c.stopPropagation();const l=t.style.display!=="none";t.style.display=l?"none":"block"}),document.addEventListener("click",c=>{g!=null&&g.contains(c.target)||(t.style.display="none")})),o&&o.addEventListener("click",()=>{Z.showLogin(c=>{n(c)})}),L.onAuthChange=n,n(L.getCurrentUser())}function Xo(){const g=document.getElementById("user-guide-modal"),e=document.getElementById("user-guide-content");if(!g||!e)return;e.innerHTML=Yo(),g.style.display="flex";const t=document.getElementById("user-guide-close");t&&(t.onclick=()=>{g.style.display="none"}),g.onclick=s=>{s.target===g&&(g.style.display="none")};const o=s=>{s.key==="Escape"&&(g.style.display="none",document.removeEventListener("keydown",o))};document.addEventListener("keydown",o)}function Yo(){return`
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
  `}async function Jo(){try{const g=document.getElementById("changelog-modal"),e=document.getElementById("changelog-content"),s=(await(await fetch("./version.txt")).text()).trim().split(`
`);if(s.length===0){e.innerHTML="<p>No changelog available.</p>",g.style.display="flex";return}const i=r=>String(r).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");let n="";s.forEach(r=>{if(r.trim()){const a=r.indexOf(" - ");if(a>0){const c=r.substring(0,a).trim(),l=r.substring(a+3).trim();n+=`
            <div style="margin-bottom: 30px; border-bottom: 1px solid #eee; padding-bottom: 20px;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                <h4 style="margin: 0; color: #a09484;">v${i(c)}</h4>
              </div>
              <p style="margin: 10px 0; color: #555; line-height: 1.5;">${i(l)}</p>
            </div>
          `}}}),e.innerHTML=n||"<p>No changelog available.</p>",g.style.display="flex"}catch(g){console.error("Error loading changelog:",g),document.getElementById("changelog-content").innerHTML='<p style="color: #999;">Error loading changelog.</p>',document.getElementById("changelog-modal").style.display="flex"}}document.addEventListener("click",g=>{const e=document.getElementById("changelog-modal");g.target===e&&(e.style.display="none")});
