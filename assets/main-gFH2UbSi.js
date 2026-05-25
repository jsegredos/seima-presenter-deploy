const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/vendor-idb-BL1M7mAU.js","assets/rolldown-runtime-DK3Fl9T5.js","assets/data-layer-DZOqsMwP.js","assets/js-rE7a4d5c.js","assets/vendor-fuse-CT6aDlEj.js","assets/js-DZxo49cr.css","assets/product-synonyms-IWc1qXVC.js"])))=>i.map(i=>d[i]);
import{C as e,E as t,F as n,I as r,N as i,P as a,S as o,_ as s,a as c,b as l,c as u,d,f,g as p,h as m,i as h,j as g,k as _,l as v,n as y,o as b,p as x,r as S,s as C,u as w,v as T,w as E,x as D,y as O}from"./js-rE7a4d5c.js";import{a as k,i as A,o as j,r as M,s as N,t as P}from"./data-layer-DZOqsMwP.js";import{a as F,i as I}from"./product-synonyms-IWc1qXVC.js";import{n as L,t as R}from"./preload-helper-xcllxmk8.js";import{t as z}from"./competitor-service-CkO1jXJC.js";import"./matching-engine-CgggdaKQ.js";var ee=new class{constructor(){this.doc=null,this.pageWidth=210,this.pageHeight=297,this.margins={left:10,right:10,top:15,bottom:15},this.currentY=this.margins.top}async init(){try{return window.jsPDF||await this.loadJsPDF(),console.log(`✅ PDF Core initialized`),!0}catch(e){return console.error(`❌ Failed to initialize PDF Core:`,e),!1}}async loadJsPDF(){return new Promise((e,t)=>{if(window.jsPDF){e();return}let n=document.createElement(`script`);n.src=`https://cdn.jsdelivr.net/npm/jspdf@2.5.1/dist/jspdf.umd.min.js`,n.onload=e,n.onerror=t,document.head.appendChild(n)})}createDocument(){return this.doc=new window.jsPDF({orientation:`portrait`,unit:`mm`,format:`a4`}),this.currentY=this.margins.top,this.doc}addNewPage(){this.doc.addPage(),this.currentY=this.margins.top}checkPageSpace(e){let t=this.pageHeight-this.margins.bottom;return this.currentY+e>t?(this.addNewPage(),!0):!1}addText(e,t,n,r={}){let{fontSize:i=10,fontStyle:a=`normal`,align:o=`left`,maxWidth:s=null}=r;if(this.doc.setFontSize(i),this.doc.setFont(`helvetica`,a),s){let r=this.doc.splitTextToSize(e,s);return this.doc.text(r,t,n,{align:o}),r.length*(i*.35)}else return this.doc.text(e,t,n,{align:o}),i*.35}addLine(e,t,n,r,i=`#000000`,a=.1){this.doc.setDrawColor(i),this.doc.setLineWidth(a),this.doc.line(e,t,n,r)}addRect(e,t,n,r,i=`S`,a=`#000000`){this.doc.setDrawColor(a),this.doc.rect(e,t,n,r,i)}async addImage(e,t,n,r,i){return new Promise(a=>{if(!e||e===`N/A`){a({width:0,height:0});return}let o=new Image;o.crossOrigin=`anonymous`,o.onload=()=>{try{let e=document.createElement(`canvas`),s=e.getContext(`2d`),c=o.width/o.height,l=r,u=r/c;u>i&&(u=i,l=i*c),e.width=l,e.height=u,s.drawImage(o,0,0,l,u);let d=this.detectTechnicalImage(o),f=d?.8:.7,p=d?`PNG`:`JPEG`,m=e.toDataURL(`image/${p.toLowerCase()}`,f);this.doc.addImage(m,p,t,n,l,u,void 0,`FAST`),a({width:l,height:u})}catch(e){console.warn(`Failed to add image:`,e),a({width:0,height:0})}},o.onerror=()=>{console.warn(`Failed to load image:`,e),a({width:0,height:0})},o.src=e})}getContentWidth(){return this.pageWidth-this.margins.left-this.margins.right}getContentHeight(){return this.pageHeight-this.margins.top-this.margins.bottom}detectTechnicalImage(e){let t=document.createElement(`canvas`),n=t.getContext(`2d`),r=Math.min(50,Math.min(e.width,e.height));t.width=r,t.height=r,n.drawImage(e,0,0,r,r);let i=n.getImageData(0,0,r,r).data,a=new Set,o=0;for(let e=0;e<i.length;e+=4){let t=i[e],n=i[e+1],r=i[e+2];if(a.add(`${t},${n},${r}`),e>0&&e<i.length-4){let a=i[e-4],s=i[e-3],c=i[e-2];Math.abs(t-a)+Math.abs(n-s)+Math.abs(r-c)>50&&o++}}let s=a.size<500,c=o>r*r*.1,l=e.width<800&&e.height<800;return s||c||l}moveY(e){this.currentY+=e}getCurrentY(){return this.currentY}setCurrentY(e){this.currentY=e}getRemainingPageHeight(){return this.pageHeight-this.margins.bottom-this.currentY}isValidUrl(e){if(!e||typeof e!=`string`)return!1;try{return new URL(e),!0}catch{return!1}}formatPrice(e){if(!e||e===`N/A`)return``;let t=parseFloat(e.toString().replace(/[^0-9.]/g,``));return t>0?`$${t.toFixed(2)}`:``}formatText(e,t=50){return e?e.length>t?`${e.substring(0,t-3)}...`:e:``}async finalize(){if(!this.doc)throw Error(`No document created`);return this.doc.output(`blob`)}getDocument(){return this.doc}},te=new class{constructor(e){this.core=e||ee}async addHeader(e){this.core.getDocument();let t=this.core.pageWidth,n=this.core.margins;this.core.addText(`SEIMA`,n.left,25,{fontSize:20,fontStyle:`bold`}),this.core.addText(`Product Selection Report`,t/2,25,{fontSize:16,fontStyle:`bold`,align:`center`});let r=new Date().toLocaleDateString(`en-AU`);this.core.addText(r,t-n.right,25,{fontSize:10,align:`right`}),this.core.addLine(n.left,30,t-n.right,30,`#cccccc`),this.core.setCurrentY(35)}async addCustomerInfo(e){this.core.getDocument();let t=this.core.margins,n=this.core.getContentWidth();this.core.addText(`Customer Information`,t.left,this.core.getCurrentY(),{fontSize:14,fontStyle:`bold`}),this.core.moveY(8);let r=t.left,i=t.left+n/2,a=this.core.getCurrentY();if(e.name&&e.name.trim()&&(this.core.addText(`Customer: ${e.name.trim()}`,r,a,{fontSize:10}),a+=5),e.project&&e.project.trim()&&(this.core.addText(`Project: ${e.project.trim()}`,r,a,{fontSize:10}),a+=5),a=this.core.getCurrentY(),e.email&&e.email.trim()&&(this.core.addText(`Email: ${e.email.trim()}`,i,a,{fontSize:10}),a+=5),e.phone&&e.phone.trim()&&(this.core.addText(`Phone: ${e.phone.trim()}`,i,a,{fontSize:10}),a+=5),e.address&&e.address.trim()){this.core.setCurrentY(a+2);let t=this.core.addText(`Address: ${e.address.trim()}`,r,this.core.getCurrentY(),{fontSize:10,maxWidth:n-20});this.core.moveY(t)}this.core.moveY(10),this.core.addLine(t.left,this.core.getCurrentY(),this.core.pageWidth-t.right,this.core.getCurrentY(),`#eeeeee`),this.core.moveY(5)}async addSelectionSummary(e){let t=this.core.margins;this.core.addText(`Selection Summary`,t.left,this.core.getCurrentY(),{fontSize:14,fontStyle:`bold`}),this.core.moveY(8);let n=e.length,r=new Set(e.map(e=>e.room).filter(Boolean)).size||1,i=0;e.forEach(e=>{let t=parseFloat((e.product?.UserEditedPrice||e.product?.RRP_EX||`0`).toString().replace(/[^0-9.]/g,``))||0,n=e.quantity||1;i+=t*n}),this.core.addText(`Total Products: ${n}`,t.left,this.core.getCurrentY(),{fontSize:10}),this.core.moveY(5),this.core.addText(`Total Rooms: ${r}`,t.left,this.core.getCurrentY(),{fontSize:10}),this.core.moveY(5),i>0&&(this.core.addText(`Estimated Total Value: $${i.toFixed(2)} (inc GST)`,t.left,this.core.getCurrentY(),{fontSize:10,fontStyle:`bold`}),this.core.moveY(5)),this.core.moveY(10),this.core.addLine(t.left,this.core.getCurrentY(),this.core.pageWidth-t.right,this.core.getCurrentY(),`#eeeeee`),this.core.moveY(10)}async addProductTableHeader(){this.core.getDocument();let e=this.core.margins,t=this.core.getContentWidth();this.core.addText(`Product Details`,e.left,this.core.getCurrentY(),{fontSize:14,fontStyle:`bold`}),this.core.moveY(8);let n=this.core.getCurrentY(),r={image:25,code:35,description:70,price:25,qty:15,room:30},i=e.left;return this.core.addRect(e.left,n-2,t,8,`F`,`#f5f5f5`),this.core.addText(`Image`,i+2,n+3,{fontSize:9,fontStyle:`bold`}),i+=r.image,this.core.addText(`Code`,i+2,n+3,{fontSize:9,fontStyle:`bold`}),i+=r.code,this.core.addText(`Description`,i+2,n+3,{fontSize:9,fontStyle:`bold`}),i+=r.description,this.core.addText(`Price`,i+2,n+3,{fontSize:9,fontStyle:`bold`}),i+=r.price,this.core.addText(`Qty`,i+2,n+3,{fontSize:9,fontStyle:`bold`}),i+=r.qty,this.core.addText(`Room`,i+2,n+3,{fontSize:9,fontStyle:`bold`}),this.core.moveY(10),r}async addProductRow(e,t,n=!1,r=null){this.core.getDocument();let i=this.core.margins;this.core.checkPageSpace(25);let a=this.core.getCurrentY(),o=i.left;if(n&&this.core.addRect(i.left,a-1,this.core.getContentWidth(),22,`F`,`#fafafa`),e.product?.Image_URL&&this.core.isValidUrl(e.product.Image_URL))try{await this.core.addImage(e.product.Image_URL,o+2,a,20,15)}catch(e){console.warn(`Failed to add product image:`,e)}o+=t.image;let s=this.core.formatText(e.product?.OrderCode||``,15);this.core.addText(s,o+2,a+5,{fontSize:8}),o+=t.code;let c=this.core.formatText(e.product?.Description||``,45);this.core.addText(c,o+2,a+5,{fontSize:8,maxWidth:t.description-4}),o+=t.description;let l=0;l=e.product?.UserEditedPrice!==void 0&&e.product?.UserEditedPrice!==null&&e.product?.UserEditedPrice!==``?parseFloat(e.product.UserEditedPrice.toString().replace(/,/g,``))||0:parseFloat((e.product?.RRP_EX||`0`).toString().replace(/,/g,``))||0,l>0&&r?.includeGst&&(l*=1.1);let u=l>=0?`$${l.toLocaleString(`en-AU`,{minimumFractionDigits:2,maximumFractionDigits:2})}`:``;this.core.addText(u,o+2,a+5,{fontSize:8}),o+=t.price,this.core.addText((e.quantity||1).toString(),o+2,a+5,{fontSize:8}),o+=t.qty;let d=this.core.formatText(e.room||``,15);if(this.core.addText(d,o+2,a+5,{fontSize:8}),e.notes){let t=a+10;this.core.addText(`Notes: ${this.core.formatText(e.notes,60)}`,i.left+2,t,{fontSize:7,fontStyle:`italic`})}this.core.moveY(20)}async addFooter(e){let t=this.core.getDocument(),n=this.core.margins,r=this.core.pageWidth,i=this.core.pageHeight-20;this.core.addLine(n.left,i,r-n.right,i,`#cccccc`),this.core.addText(`Generated by Seima Product Scanner`,n.left,i+5,{fontSize:8,fontStyle:`italic`}),this.core.addText(`www.seima.com.au`,r-n.right,i+5,{fontSize:8,fontStyle:`italic`,align:`right`});let a=t.internal.getNumberOfPages();this.core.addText(`Page ${a}`,r/2,i+5,{fontSize:8,align:`center`})}async addQRSection(e){let t=this.core.margins;this.core.checkPageSpace(40),this.core.moveY(10),this.core.addText(`Quick Access Links`,t.left,this.core.getCurrentY(),{fontSize:12,fontStyle:`bold`}),this.core.moveY(8);let n=e.filter(e=>e.product?.Website_URL&&this.core.isValidUrl(e.product.Website_URL)).slice(0,5);n.forEach((e,n)=>{let r=`${e.product.OrderCode}: ${e.product.Website_URL}`;this.core.addText(this.core.formatText(r,80),t.left+5,this.core.getCurrentY(),{fontSize:8}),this.core.moveY(4)}),n.length===0&&(this.core.addText(`Visit www.seima.com.au for more product information`,t.left+5,this.core.getCurrentY(),{fontSize:8,fontStyle:`italic`}),this.core.moveY(4))}},ne=new class{constructor(){this.core=ee,this.layouts=te,this.isInitialized=!1}async init(){try{return await this.core.init(),this.isInitialized=!0,console.log(`✅ Unified PDF Generator initialized`),!0}catch(e){return console.error(`❌ Failed to initialize PDF Generator:`,e),!1}}async generatePDF(e){try{this.isInitialized||await this.init();let t=this.getSelectedProducts();if(!t.length)throw Error(`No products selected`);console.log(`📄 Generating PDF for ${t.length} products...`),this.core.createDocument(),await this.layouts.addHeader(e),await this.layouts.addCustomerInfo(e),await this.layouts.addSelectionSummary(t);let n=await this.layouts.addProductTableHeader();for(let r=0;r<t.length;r++){let i=t[r],a=r%2==0;await this.layouts.addProductRow(i,n,a,e)}await this.layouts.addQRSection(t),await this.layouts.addFooter(e);let r=await this.core.finalize();return console.log(`✅ PDF generated successfully`),r}catch(e){throw console.error(`❌ PDF generation failed:`,e),e}}async generateCSV(e){try{let e=this.getSelectedProducts();if(!e.length)throw Error(`No products selected`);console.log(`📊 Generating CSV for ${e.length} products...`);let t=[];t.push(`"Code","Description","WELS Star","Quantity","Price ea ex GST","Price Total ex GST","Notes","Room","Image URL","Diagram URL","Datasheet URL","Website URL","Plan Code"`),e.forEach(e=>{let n=this.cleanForCSV(e.product?.OrderCode||``),r=this.cleanForCSV(e.product?.Description||``),i=e.product?.[`WELS STAR`]||e.product?.WELS_STAR||e.product?.WELS_STAR||e.product?.WelsStar||``,a=this.cleanForCSV(i&&i.toString().trim()?i.toString().replace(/[^\d.]/g,``).trim():``),o=e.quantity||1,s=this.cleanForCSV(e.product?.UserEditedPrice||e.product?.RRP_EX||``),c=this.calculateTotalPrice(s,o),l=this.cleanForCSV(e.notes||``),u=this.cleanForCSV(e.room||``),d=this.cleanForCSV(e.planCode||``),f=this.cleanForCSV(e.product?.Image_URL||``),p=this.cleanForCSV(e.product?.Diagram_URL||``),m=this.cleanForCSV(e.product?.Datasheet_URL||``),h=this.cleanForCSV(e.product?.Website_URL||``);t.push(`"${n}","${r}","${a}","${o}","${s}","${c}","${l}","${u}","${f}","${p}","${m}","${h}","${d}"`)});let n=t.join(`
`),r=new Blob([n],{type:`text/csv;charset=utf-8`});return console.log(`✅ CSV generated successfully`),r}catch(e){throw console.error(`❌ CSV generation failed:`,e),e}}async generateBothFiles(e){try{let[t,n]=await Promise.all([this.generatePDF(e),this.generateCSV(e)]);return{pdfBlob:t,csvBlob:n}}catch(e){throw console.error(`❌ File generation failed:`,e),e}}getSelectedProducts(){let e=JSON.parse(localStorage.getItem(`selection`)||`[]`),t=JSON.parse(localStorage.getItem(L.STORAGE_KEYS.SELECTED_PRODUCTS)||`[]`);return t.length>0?t:e.map(e=>({product:e,room:e.Room||``,notes:e.Notes||``,quantity:e.Quantity||1}))}calculateTotalPrice(e,t){let n=(parseFloat(e.toString().replace(/[^0-9.]/g,``))||0)*(t||1);return n>0?n.toFixed(2):``}cleanForCSV(e){return e?e.toString().replace(/"/g,`""`).replace(/[\r\n]/g,` `):``}async generateQuotePDF(e){return await this.generatePDF(e)}async generateReportPDF(e){return await this.generatePDF(e)}generateFileName(e,t){let n=new Date,r=String(n.getDate()).padStart(2,`0`),i=String(n.getMonth()+1).padStart(2,`0`),a=String(n.getFullYear()).slice(-2),o=String(n.getHours()).padStart(2,`0`),s=String(n.getMinutes()).padStart(2,`0`);return`${(e.project||`seima-selection`).replace(/[^a-zA-Z0-9\s]/g,``)}-${r}${i}${a}.${o}${s}.${t}`}downloadFile(e,t){let n=URL.createObjectURL(e),r=document.createElement(`a`);r.href=n,r.download=t,document.body.appendChild(r),r.click(),document.body.removeChild(r),URL.revokeObjectURL(n)}getSelectionSummary(){let e=this.getSelectedProducts(),t=e.length,n=new Set(e.map(e=>e.room).filter(Boolean)).size||1,r=0;return e.forEach(e=>{let t=parseFloat((e.product?.UserEditedPrice||e.product?.RRP_EX||`0`).toString().replace(/[^0-9.]/g,``))||0,n=e.quantity||1;r+=t*n}),{totalProducts:t,totalRooms:n,totalValue:r,hasProducts:t>0}}},re={Utils:r},ie=A;new class{constructor(){this.modules={dataLayer:P,pdfGenerator:ne,pdfCore:ee,pdfLayouts:te,StorageManager:M,utils:re},this.isInitialized=!1,this.initStatus={}}async init(){try{console.log(`🚀 Initializing modular components...`);let e=await this.initModule(`dataLayer`,this.modules.dataLayer);return this.initStatus.dataLayer=e,this.initStatus.pdfGenerator=`deferred`,this.isInitialized=!0,console.log(`✅ Module initialization complete:`,this.initStatus),this.initStatus}catch(e){return console.error(`❌ Module coordinator initialization failed:`,e),!1}}async initModule(e,t){try{if(t&&typeof t.init==`function`){let n=await t.init();return console.log(`✅ ${e} initialized:`,n),n}else return console.log(`ℹ️ ${e} does not require initialization`),!0}catch(t){throw console.error(`❌ Failed to initialize ${e}:`,t),t}}async searchProducts(e,t=10){return this.modules.dataLayer.isLoaded||await this.modules.dataLayer.init(),this.modules.dataLayer.searchProducts(e,t)}async findProductByCode(e){return this.modules.dataLayer.isLoaded||await this.modules.dataLayer.init(),this.modules.dataLayer.findProductByCode(e)}async addProductToSelection(e,{room:t=``,notes:n=``,quantity:r=1}={}){return this.modules.dataLayer.addProductToSelection(e,{room:t,notes:n,quantity:r})}getSelectedProducts(){return this.modules.dataLayer.getSelectedProducts()}getSelectionSummary(){return this.modules.dataLayer.getSelectionSummary()}async generatePDF(e){return await this.modules.pdfGenerator.generatePDF(e)}async generateCSV(e){return await this.modules.pdfGenerator.generateCSV(e)}async generateBothFiles(e){return await this.modules.pdfGenerator.generateBothFiles(e)}async sendEmail(e,t){return await this.modules.emailService.sendEmailWithPDF(e,t)}clearSelection(){return this.modules.dataLayer.clearSelection()}getModuleStatus(){return{initialized:this.isInitialized,moduleStatus:this.initStatus,dataLayer:{loaded:this.modules.dataLayer.isLoaded,productCount:this.modules.dataLayer.products.length},selection:{count:this.getSelectedProducts().length,summary:this.getSelectionSummary()}}}async reinitializeModule(e){if(this.modules[e])try{return this.initStatus[e]=await this.initModule(e,this.modules[e]),this.initStatus[e]}catch(t){return console.error(`❌ Failed to reinitialize ${e}:`,t),!1}return!1}async batchAddProducts(e){let t=[];for(let{product:n,room:r,notes:i,quantity:a}of e)try{let e=await this.addProductToSelection(n,{room:r,notes:i,quantity:a});t.push({success:!0,result:e})}catch(e){t.push({success:!1,error:e.message,product:n})}return t}exportState(){return{moduleStatus:this.getModuleStatus(),config:ie,timestamp:new Date().toISOString()}}}().init().catch(e=>{console.error(`❌ Auto-initialization failed:`,e)});var ae=class{constructor(){this.currentScreen=`welcome`,this.currentSearchResults=[]}async init(){if(!P.isLoaded)try{await P.init()}catch(e){console.error(`Failed to load product catalog:`,e)}this.updateSelectionCount(),this.setVersion()}setVersion(){let e=document.getElementById(`version-number`);e&&(e.innerText=L.VERSION)}_formatProductPriceGstLabel(e){let t=e.RRP_EX||e[`RRP EX GST`]||e.RRP_EX||e.RRP_EXGST||e.rrpExGst||e[`PL1 - RRP EX GST`]||``,n=e.RRP_INCGST||e[`RRP INC GST`]||e.rrpIncGst||``,r=parseFloat(String(t).replace(/,/g,``));if(Number.isFinite(r)&&r>0)return`$${r.toFixed(2)} ex GST`;let i=parseFloat(String(n).replace(/,/g,``));return Number.isFinite(i)&&i>0?`$${i.toFixed(2)} inc GST`:`Price not available`}async showProductLookupScreen(){try{let e=await(await fetch(`./screens/product-grid.html`)).text();document.body.innerHTML=e,this.currentScreen=`product-grid`;let t=document.createElement(`script`);t.type=`module`,t.src=`js/app.js`,document.body.appendChild(t),setTimeout(()=>{document.querySelectorAll(`.back-btn`).forEach(e=>e.remove())},100),window.productGridManager&&window.productGridManager.init(),await this.loadVersion(),setTimeout(()=>this.loadVersion(),1e3)}catch(e){console.error(`Failed to load product grid screen:`,e)}}setupSplitInterface(){let e=document.getElementById(`back-to-home`);e&&(e.onclick=()=>location.reload());let t=document.getElementById(`download-btn`),n=document.getElementById(`clear-all-btn`);t&&(t.onclick=()=>this.showDownloadFormModal()),n&&(n.onclick=()=>this.showClearConfirmModal()),this.setupSplitProductSearch(),this.setupReviewTable(),this.renderReviewTable(),this.loadInitialSearchResults()}setupSplitProductSearch(){let e=document.getElementById(`product-search-input`),t=document.getElementById(`search-results-list`),n=document.getElementById(`search-loading`),i=document.getElementById(`search-no-results`);if(!e||!t)return;let a=[],o=r.debounce(e=>{this.performSplitProductSearch(e,t,a,n,i)},200);e.addEventListener(`input`,()=>{let t=e.value.trim();t?o(t):this.loadInitialSearchResults()}),t.addEventListener(`click`,e=>{let t=e.target.closest(`.result-item`);if(!t)return;let n=parseInt(t.getAttribute(`data-idx`),10),r=a.length>0?a:this.currentSearchResults||[];!isNaN(n)&&r[n]&&this.showSplitProductDetails(r[n])})}performSplitProductSearch(e,t,n,i,a){if(!P.isLoaded){i.style.display=`flex`,a.style.display=`none`,t.innerHTML=``;return}n.length=0,n.push(...P.searchProducts(e)),i.style.display=`none`,n.length===0?(a.style.display=`flex`,t.innerHTML=``):(a.style.display=`none`,t.innerHTML=n.map((e,t)=>`
          <div class="result-item" data-idx="${t}">
            <span class="result-code">${r.escapeHtml(String(e.OrderCode||e.Code||``))}</span> - ${r.escapeHtml(String(e.Description||e.ProductName||e[`Product Name`]||``))}
          </div>
        `).join(``))}async loadInitialSearchResults(){let e=document.getElementById(`search-results-list`),t=document.getElementById(`search-loading`),n=document.getElementById(`search-no-results`);if(!e)return;if(!P.isLoaded){t.style.display=`flex`,n.style.display=`none`,e.innerHTML=``,P.init().then(()=>this.loadInitialSearchResults()).catch(()=>{});return}let i=P.getAllProducts().slice(0,50);t.style.display=`none`,n.style.display=`none`,e.innerHTML=i.map((e,t)=>`
        <div class="result-item" data-idx="${t}">
          <span class="result-code">${r.escapeHtml(String(e.OrderCode||e.Code||``))}</span> - ${r.escapeHtml(String(e.Description||e.ProductName||e[`Product Name`]||``))}
        </div>
      `).join(``),this.currentSearchResults=i}showSplitProductDetails(e){let t=document.getElementById(`product-details`),n=document.getElementById(`product-image`),r=document.getElementById(`product-name`),i=document.getElementById(`product-code`),a=document.getElementById(`product-price`),o=document.getElementById(`product-room`),s=document.getElementById(`product-quantity`),c=document.getElementById(`product-notes`),l=document.getElementById(`add-product-btn`),u=document.getElementById(`close-details`);if(t){if(n){let t=String(e.Image||e.Image_URL||e.imageUrl||`assets/no-image.png`).trim();n.src=/^(https?:|data:image\/|assets\/)/i.test(t)?t:`assets/no-image.png`,n.alt=e.Description||e.ProductName||e[`Product Name`]||`Product Image`}r&&(r.textContent=e.Description||e.ProductName||e[`Product Name`]||``),i&&(i.textContent=e.OrderCode||e.Code||``),a&&(a.textContent=this._formatProductPriceGstLabel(e)),this.populateRoomSelect(o),s&&(s.value=1),c&&(c.value=``),u&&(u.onclick=()=>{t.style.display=`none`}),l&&(l.onclick=()=>{let n=o?o.value:`Blank`,r=s&&parseInt(s.value)||1,i=c?c.value.trim():``;this.addProductToSplitSelection(e,n,r,i),t.style.display=`none`}),t.style.display=`block`}}async showProductDetailsScreen(e,t={}){try{let n=await(await fetch(`./screens/product-details.html`)).text();document.body.innerHTML=n,this.currentScreen=`product-details`,this.populateProductDetails(e,t),this.setupProductDetailsHandlers(e)}catch(e){console.error(`Failed to load product details screen:`,e)}}populateProductDetails(e,t){let n=document.getElementById(`product-image`);n&&(n.src=e.Image_URL||`assets/no-image.png`,n.onerror=function(){this.src=`assets/no-image.png`}),document.getElementById(`product-name`).textContent=e.Description||``,document.getElementById(`product-code`).textContent=e.OrderCode?`Code: ${e.OrderCode}`:``;let r=this._formatProductPriceGstLabel(e);if(document.getElementById(`product-price-inline`).textContent=r===`Price not available`?`Price unavailable`:r,document.getElementById(`product-description`).textContent=e.LongDescription||``,this.setLink(`datasheet-link`,e.Datasheet_URL),this.setLink(`diagram-link`,e.Diagram_URL),this.setLink(`website-link`,e.Website_URL),[document.getElementById(`diagram-link`),document.getElementById(`datasheet-link`),document.getElementById(`website-link`)].forEach(e=>{e&&(e.setAttribute(`target`,`_blank`),e.setAttribute(`rel`,`noopener noreferrer`))}),this.setupVariantDropdown(e,t),this.populateRoomSelect(),this.setupQuantitySelect(),this.setupAnnotationField(),this.setupAnnotationCharacterCount(t),t.quantity){let e=document.getElementById(`product-quantity`);e&&(e.value=t.quantity)}t.scannedCode&&this.showScanFeedback(`Successfully scanned: ${t.scannedCode}`)}populateRoomSelect(e=null){let t=e||document.getElementById(`room-select`);if(!t)return;t.innerHTML=`<option value="Blank">Blank</option>`,A.get(`rooms.predefined`,[]).forEach(e=>{let n=document.createElement(`option`);n.value=e.name,n.textContent=e.name,t.appendChild(n)}),M.getCustomRooms().forEach(e=>{let n=document.createElement(`option`);n.value=e.name,n.textContent=e.name,t.appendChild(n)});let n=document.createElement(`option`);n.value=`__ADD_NEW_ROOM__`,n.textContent=`➕ Add new room...`,n.style.fontWeight=`bold`,n.style.color=`#2563eb`,t.appendChild(n),t.value=`Blank`,this._boundHandleRoomSelectChange||=this.handleRoomSelectChange.bind(this),t.removeEventListener(`change`,this._boundHandleRoomSelectChange),t.addEventListener(`change`,this._boundHandleRoomSelectChange)}setupQuantitySelect(){let e=document.getElementById(`product-quantity`);e&&(e.innerHTML=``,A.get(`ui.quantityOptions`,[1,2,3,4,5,6,7,8,9,10]).forEach(t=>{let n=document.createElement(`option`);n.value=t,n.textContent=t.toString(),e.appendChild(n)}))}setLink(e,t){let n=document.getElementById(e);t&&t!==`#`?(n.href=t,n.style.display=``):n.style.display=`none`}setupVariantDropdown(e,t){let n=document.getElementById(`variant-select-row`),i=document.getElementById(`variant-select`);if(n&&i){let a=e.ProductName||e[`Product Name`]||``;typeof a==`string`&&(a=a.trim());let o=[];a&&(o=P.getAllProducts().filter(e=>{let t=e.ProductName||e[`Product Name`]||``;return typeof t==`string`&&(t=t.trim()),t&&t===a})),o.length>1?(o.sort((e,t)=>(e.Description||``).localeCompare(t.Description||``)),n.style.display=``,i.innerHTML=o.map(t=>`<option value="${r.escapeHtml(String(t.OrderCode||``))}"${t.OrderCode===e.OrderCode?` selected`:``}>${r.escapeHtml(String(t.Description||``))}</option>`).join(``),i.onchange=()=>{let n=i.value,r=o.find(e=>e.OrderCode===n);if(r&&r.OrderCode!==e.OrderCode){let e=document.getElementById(`product-annotation`)?.value||t.notes||``,n=document.getElementById(`product-quantity`),i=1;n&&n.value?i=Math.max(1,parseInt(n.value,10)||1):t.quantity&&(i=t.quantity),this.showProductDetailsScreen(r,{notes:e,quantity:i})}}):n.style.display=`none`}}setupAnnotationCharacterCount(e){let t=document.getElementById(`product-annotation`),n=document.getElementById(`annotation-char-count`);t&&n&&(t.addEventListener(`input`,()=>{t.value=t.value.replace(/\r?\n|\r/g,` `),n.textContent=`${t.value.length}/140`}),t.addEventListener(`keydown`,e=>{e.key===`Enter`&&e.preventDefault()}),n.textContent=`${t.value.length}/140`,e.notes&&(t.value=e.notes))}setupAnnotationField(){}setupProductDetailsHandlers(e){let t=document.getElementById(`back-to-grid`),n=document.getElementById(`add-to-room-btn`);t&&(t.onclick=()=>this.showProductLookupScreen()),n&&(n.onclick=()=>this.addProductToSelection(e))}addProductToSelection(e){let t=document.getElementById(`room-select`),n=document.getElementById(`product-quantity`),r=document.getElementById(`product-annotation`),i=t?t.value:`Blank`,a=n?parseInt(n.value):1,o=r?r.value:``;M.addProductToSelection(e,{notes:o,room:i,quantity:a})?this.showProductLookupScreen():alert(`Failed to add product to selection`)}addProductToSplitSelection(e,t,n,r){M.addProductToSelection(e,{notes:r,room:t,quantity:n})?(this.renderReviewTable(),this.updateSelectionCount()):alert(`Failed to add product to selection`)}setupReviewTable(){let e=document.getElementById(`review-table-body`);e&&(e.addEventListener(`change`,e=>{e.target.classList.contains(`quantity-input`)?this.handleQuantityChange(e.target):e.target.classList.contains(`room-select`)&&this.handleRoomChange(e.target)}),e.addEventListener(`click`,e=>{e.target.classList.contains(`remove-btn`)&&this.handleRemoveProduct(e.target)}))}renderReviewTable(){let e=document.getElementById(`review-table`),t=document.getElementById(`review-table-empty`),n=document.getElementById(`review-table-body`),i=document.getElementById(`total-items`),a=document.getElementById(`total-value`);if(!e||!t||!n)return;let o=M.getSelectedProducts();if(o.length===0){e.style.display=`none`,t.style.display=`flex`,i&&(i.textContent=`0 items`),a&&(a.textContent=`$0.00`);return}t.style.display=`none`,e.style.display=`flex`;let s=0,c=0;o.forEach(e=>{s+=e.quantity;let t=0;t=e.product.UserEditedPrice!==void 0&&e.product.UserEditedPrice!==null&&e.product.UserEditedPrice!==``?parseFloat(e.product.UserEditedPrice.toString().replace(/,/g,``))||0:parseFloat((e.product.RRP_EX||e.product[`RRP EX GST`]||e.product.RRP_EX||e.product.RRP_EXGST||e.product[`PL1 - RRP EX GST`]||0).toString().replace(/,/g,``))||0,t>0&&(c+=t*e.quantity)}),i&&(i.textContent=s),a&&(a.textContent=c>0?`$${c.toLocaleString(`en-AU`,{minimumFractionDigits:2,maximumFractionDigits:2})}`:`$0.00`),n.innerHTML=o.map((e,t)=>{let n=e.product,i=0;i=n.UserEditedPrice!==void 0&&n.UserEditedPrice!==null&&n.UserEditedPrice!==``?parseFloat(n.UserEditedPrice.toString().replace(/,/g,``))||0:parseFloat((n.RRP_EX||n[`RRP EX GST`]||n.RRP_EX||n.RRP_EXGST||n[`PL1 - RRP EX GST`]||0).toString().replace(/,/g,``))||0;let a=i*e.quantity;return`
        <div class="table-row" data-index="${t}">
          <div class="col-image">
            <img class="table-product-image" src="${n.Image||n.Image_URL||n.imageUrl||`assets/no-image.png`}" alt="Product" onerror="this.src='assets/no-image.png';">
          </div>
          <div class="col-product">
            <div class="product-info">
              <div class="product-name">${r.escapeHtml(String(n.Description||n.ProductName||n[`Product Name`]||``))}</div>
              <div class="product-code">${r.escapeHtml(String(n.OrderCode||n.Code||``))}</div>
              ${e.notes?`<div class="product-notes">${r.escapeHtml(String(e.notes))}</div>`:``}
            </div>
          </div>
          <div class="col-room">
            <select class="room-select" data-index="${t}">
              ${this.getRoomOptions(e.room)}
            </select>
          </div>
          <div class="col-price-ea">
            <div class="price-display">${i?`$${i.toLocaleString(`en-AU`,{minimumFractionDigits:2,maximumFractionDigits:2})}`:`N/A`}</div>
          </div>
          <div class="col-qty">
            <input type="number" class="quantity-input" data-index="${t}" value="${e.quantity}" min="1" step="1">
          </div>
          <div class="col-total">
            <div class="price-display">${i?`$${a.toLocaleString(`en-AU`,{minimumFractionDigits:2,maximumFractionDigits:2})}`:`N/A`}</div>
          </div>
          <div class="col-actions">
            <button class="remove-btn" data-index="${t}" title="Remove">×</button>
          </div>
        </div>
      `}).join(``)}getRoomOptions(e){let t=`<option value="Blank"${e===`Blank`?` selected`:``}>Blank</option>`;return A.get(`rooms.predefined`,[]).forEach(n=>{t+=`<option value="${n.name}"${e===n.name?` selected`:``}>${n.name}</option>`}),M.getCustomRooms().forEach(n=>{t+=`<option value="${n.name}"${e===n.name?` selected`:``}>${n.name}</option>`}),t+=`<option value="__ADD_NEW_ROOM__" style="font-weight: bold; color: #2563eb;">➕ Add new room...</option>`,t}handleQuantityChange(e){let t=parseInt(e.getAttribute(`data-index`)),n=Math.max(1,parseInt(e.value)||1),r=M.getSelectedProducts();r[t]&&(r[t].quantity=n,M.setSelectedProducts(r),this.renderReviewTable(),this.updateSelectionCount())}handleRoomChange(e){let t=parseInt(e.getAttribute(`data-index`)),n=e.value;if(n===`__ADD_NEW_ROOM__`){let r=prompt(`Enter new room name:`);if(r&&r.trim()){let i=r.trim();if(M.addCustomRoom(i)){n=i,console.log(`✅ Added new room:`,i),this.renderReviewTable();return}else{alert(`Room name already exists or is invalid`);let n=M.getSelectedProducts();n[t]&&(e.value=n[t].room||`Blank`);return}}else{let n=M.getSelectedProducts();n[t]&&(e.value=n[t].room||`Blank`);return}}let r=M.getSelectedProducts();r[t]&&(r[t].room=n,M.setSelectedProducts(r),this.updateSelectionCount())}handleRemoveProduct(e){let t=parseInt(e.getAttribute(`data-index`)),n=M.getSelectedProducts();n[t]&&(n.splice(t,1),M.setSelectedProducts(n),this.renderReviewTable(),this.updateSelectionCount())}async showReviewScreen(){try{let e=await(await fetch(`./screens/review.html`)).text();document.body.innerHTML=e,this.currentScreen=`review`,this.setupReviewScreenHandlers(),this.renderReviewList()}catch(e){console.error(`Failed to load review screen:`,e)}}setupReviewScreenHandlers(){let e=document.getElementById(`back-to-grid`),t=document.getElementById(`add-more-btn`),n=document.getElementById(`quick-pdf-btn`);e&&(e.onclick=()=>this.showProductLookupScreen()),t&&(t.onclick=()=>this.showProductLookupScreen()),n&&(n.onclick=()=>this.showDownloadFormModal())}renderReviewList(){let e=document.getElementById(`review-list`),t=document.getElementById(`review-empty`);if(!e)return;let n=M.getSelectedProducts();if(n.length===0){e.innerHTML=``,t&&(t.style.display=`block`);return}t&&(t.style.display=`none`);let i={};n.forEach(e=>{let t=e.room||`Unassigned`;i[t]||(i[t]=[]),i[t].push(e)});let a=e=>{let t=String(e||``).trim();return/^(https?:|data:image\/|assets\/)/i.test(t)?r.escapeHtml(t):`assets/no-image.png`};e.innerHTML=Object.entries(i).map(([e,t])=>{let n=r.escapeHtml(String(e));return`
      <div class="review-room-group">
        <div class="review-room-header">${n} <span class="room-count">(${t.length})</span></div>
        ${t.map((e,t)=>{let i=e.product,o=i.Description||i.description||i.productName||i[`Product Name`]||`Product`,s=i.OrderCode||i.orderCode||``,c=i.Image_URL||i.imageUrl||`assets/no-image.png`,l=g(i.RRP_EX||i[`RRP EX GST`]||i.RRP_EX||i.rrpExGst||i.RRP_EXGST||i[`PL1 - RRP EX GST`]),u=Number.isNaN(l)?null:l;if(u==null){let e=_(i.RRP_INCGST||i[`RRP INC GST`]||i.rrpIncGst,2);e!=null&&(u=e)}return`
          <div class="review-product-card" style="display: flex; flex-direction: column; align-items: stretch;">
            <div style="display: flex; flex-direction: row; align-items: flex-start;">
              <div class="review-product-thumb-wrap">
                <img class="review-product-thumb" src="${a(c)}" alt="Product" onerror="this.src='assets/no-image.png';" onload="">
                <div class="review-qty-pill" data-room="${n}" data-idx="${t}">
                  <button class="review-qty-btn${(e.quantity||1)===1?` delete`:``}" data-action="decrement" title="${(e.quantity||1)===1?`Delete`:`Decrease`}">
                    ${(e.quantity||1)===1?`<svg viewBox='0 0 64 64' width='64' height='64'><rect x='10' y='8' width='44' height='6' rx='3' fill='black'/><polygon points='7,18 57,18 52,58 12,58' fill='none' stroke='black' stroke-width='7'/></svg>`:`–`}
                  </button>
                  <span class="review-qty-value">${e.quantity||1}</span>
                  <button class="review-qty-btn" data-action="increment" title="Increase">+</button>
                </div>
              </div>
              <div class="review-product-info">
                <div class="review-product-title">${r.escapeHtml(String(o))}</div>
                <div class="review-product-meta">
                  <span class="review-product-code">${s?`Code: ${r.escapeHtml(String(s))}`:``}</span>
                  <span class="review-product-price">${u==null?``:`$${Number(u).toFixed(2)} ea (EX GST)`}</span>
                </div>
                <div class="review-product-notes">${e.notes?`Notes: ${r.escapeHtml(String(e.notes))}`:``}</div>
              </div>
            </div>
          </div>
          `}).join(``)}
      </div>
    `}).join(``),this.setupOriginalQuantityControls(i)}groupProductsByRoom(e){return e.reduce((e,t)=>{let n=t.room||`Unassigned`;return e[n]||(e[n]=[]),e[n].push(t),e},{})}setupOriginalQuantityControls(e){document.querySelectorAll(`.review-qty-pill`).forEach(e=>{let t=e.getAttribute(`data-room`),n=parseInt(e.getAttribute(`data-idx`),10);e.querySelectorAll(`.review-qty-btn`).forEach(e=>{e.onclick=()=>{let r=e.getAttribute(`data-action`),i=M.getSelectedProducts(),a=-1,o=i.findIndex(e=>(e.room===t&&a++,e.room===t&&a===n));if(o!==-1){let e=i[o],t=parseInt(e.quantity,10)||1;r===`increment`?M.updateProductQuantity(e.id,t+1):r===`decrement`&&(t===1?M.removeProductFromSelection(e.id):M.updateProductQuantity(e.id,t-1)),this.renderReviewList(),this.updateSelectionCount()}}})})}showDownloadFormModal(){let e=document.getElementById(`pdf-email-modal`);if(e){e.style.display=`flex`;let t=document.getElementById(`pdf-email-form`),n=document.getElementById(`pdf-email-cancel`),i=document.getElementById(`pdf-email-send`);if(t){let e=r.getStorageItem(`pdfFormSettings`,{});t[`user-name`]&&(t[`user-name`].value=e.name||``),t[`user-project`]&&(t[`user-project`].value=e.project||``),t[`user-address`]&&(t[`user-address`].value=e.address||``),t[`user-email`]&&(t[`user-email`].value=e.email||``),t[`user-telephone`]&&(t[`user-telephone`].value=e.telephone||``),t[`exclude-prices`]&&(t[`exclude-prices`].checked=!!e.excludePrices),t[`exclude-qty`]&&(t[`exclude-qty`].checked=!!e.excludeQty),t[`exclude-long-description`]&&(t[`exclude-long-description`].checked=!!e.excludeLongDescription),t[`include-gst`]&&(t[`include-gst`].checked=!!e.includeGst)}let a=t.querySelector(`label[for="export-csv"]`)?.parentElement;a&&(a.style.display=`none`),i&&(i.textContent=`Download`),n&&(n.onclick=()=>{e.style.display=`none`}),t&&(t.onsubmit=t=>{t.preventDefault(),this.handleDownloadFormSubmit(),e.style.display=`none`})}}handleDownloadFormSubmit(){console.log(`🎯 handleDownloadFormSubmit called`);let e=document.getElementById(`pdf-email-form`);if(!e){console.error(`❌ Form not found!`);return}let t=new FormData(e),n={name:t.get(`user-name`),project:t.get(`user-project`),address:t.get(`user-address`),email:t.get(`user-email`),telephone:t.get(`user-telephone`),excludePrice:t.get(`exclude-price`)===`on`||t.get(`exclude-prices`)===`on`,excludeQty:t.get(`exclude-qty`)===`on`,excludeLongDescription:t.get(`exclude-long-description`)===`on`,includeGst:t.get(`include-gst`)===`on`,exportCsv:!0};window.dispatchEvent(new CustomEvent(`generatePdf`,{detail:n}))}showClearConfirmModal(){let e=document.getElementById(`clear-selection-modal`);if(e){e.style.display=`flex`;let t=document.getElementById(`modal-cancel-btn`),n=document.getElementById(`modal-confirm-btn`);t&&(t.onclick=()=>{e.style.display=`none`}),n&&(n.onclick=()=>{M.clearAllSelections(),e.style.display=`none`,this.updateSelectionCount(),this.currentScreen===`product-grid`&&window.productGridManager&&window.productGridManager.clearAll()})}}updateSelectionCount(){let e=document.getElementById(`selection-count`);e&&(e.textContent=M.getSelectionCount().toString())}handleRoomSelectChange(e){let t=e.target;if(t.value===`__ADD_NEW_ROOM__`){let e=prompt(`Enter new room name:`);if(e&&e.trim()){let n=e.trim();M.addCustomRoom(n)?(this.populateRoomSelect(t),t.value=n,console.log(`✅ Added new room:`,n)):(alert(`Room name already exists or is invalid`),t.value=`Blank`)}else t.value=`Blank`}}};async function oe(e,t,n=`file`){await me(e,t,n)}function se(t,n=null){let r=document.getElementById(`pdf-spinner`);r&&(r.style.display=`flex`),n&&(window._currentTipTailSettings=n),Ae();let i=document.createElement(`div`);i.id=`pdf-processing-notification`,i.style.cssText=`
      position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); z-index: 10001;
      background: #dbeafe; border: 1px solid #3b82f6; border-radius: 8px;
      padding: 20px; max-width: 400px; min-width: 320px; box-shadow: 0 8px 25px rgba(0,0,0,0.2);
      text-align: center;
    `;let g=t.emailCompatible;i.innerHTML=`
      <div style="display: flex; align-items: center; margin-bottom: 8px;">
        <span style="font-size: 18px; margin-right: 8px;">${g?`📧`:`📄`}</span>
        <strong style="color: #1e40af;">Creating your product selection files</strong>
      </div>
      <p style="margin: 0; color: #1e40af; font-size: 14px;">
        ${g?`Creating text-only PDF without images for optimal email delivery.`:`This may take a moment.`}
      </p>
    `,document.body.appendChild(i);let _=O();ce(D(`assets/seima-logo.png`),async(n,i,g)=>{let E=JSON.parse(localStorage.getItem(`selection`)||`[]`),O=JSON.parse(localStorage.getItem(L.STORAGE_KEYS.SELECTED_PRODUCTS)||`[]`),k=[];k=O.length>0?O.map(e=>{let t=e.product||{};return m({...t,Image_URL:t.Image_URL||t.imageUrl||t[`Image URL`]||``,Diagram_URL:t.Diagram_URL||t.diagramUrl||t[`Diagram URL`]||``,Datasheet_URL:t.Datasheet_URL||t.datasheetUrl||t[`Datasheet URL`]||``,Website_URL:t.Website_URL||t.websiteUrl||t[`Website URL`]||``,Room:e.room,Notes:e.notes,PlanCode:e.planCode||``,Quantity:e.quantity,Timestamp:new Date(e.timestamp).toISOString()})}):Array.isArray(E)?E.map(e=>m({...e})):E;let A=document.getElementById(`sort-by`),j=A?A.value:`room`;switch(j){case`code`:k.sort((e,t)=>{let n=e.OrderCode||e.Code||``,r=t.OrderCode||t.Code||``;return n.localeCompare(r)});break;case`product`:k.sort((e,t)=>{let n=e.Description||e.ProductName||``,r=t.Description||t.ProductName||``;return n.localeCompare(r)});break;case`imported`:break;case`category`:k.sort((e,t)=>{let n=String(e.Group||e.SubGroup||e[`Sub Group`]||``).trim()||`Blank`,r=String(t.Group||t.SubGroup||t[`Sub Group`]||``).trim()||`Blank`;return n===r?0:n===`Blank`?1:r===`Blank`?-1:n.localeCompare(r)});break;default:{let e=[];try{let t=localStorage.getItem(`customRoomOrder`);e=t?JSON.parse(t):[]}catch{e=[]}k.sort((t,n)=>{let r=t.Room||`Blank`,i=n.Room||`Blank`;if(r===i)return 0;if(r===`Blank`)return 1;if(i===`Blank`)return-1;let a=e.indexOf(r),o=e.indexOf(i);return a!==-1&&o!==-1?a-o:a===-1?o===-1?r.localeCompare(i):1:-1});break}}if(!k.length){alert(`No products selected.`),r&&(r.style.display=`none`);return}if(s()>0)console.log(`📷 Using ${s()} pre-cached images (skipping duplicate preload)`);else{let e=document.getElementById(`pdf-processing-notification`);if(e){let t=document.createElement(`span`);t.id=`preload-progress`,t.style.cssText=`display: block; font-size: 12px; margin-top: 8px; color: #1e40af;`,t.textContent=`Loading images: 0%`,e.appendChild(t)}console.log(`📷 Starting image preload for`,k.length,`products`),o(k).then(e=>{let t=document.getElementById(`preload-progress`);t&&(t.textContent=`✓ ${e} images ready`,t.style.color=`#059669`)}).catch(e=>{console.warn(`Image preloading error:`,e)})}let N={};j===`room`?k.forEach(e=>{let t=e.Room||`Blank`;N[t]||(N[t]=[]),N[t].push(e)}):j===`category`?k.forEach(e=>{let t=String(e.Group||e.SubGroup||e[`Sub Group`]||``).trim()||`Blank`;N[t]||(N[t]=[]),N[t].push(e)}):N.__all__=k,await _;let{jsPDF:P}=window.jspdf,F=new P({orientation:`landscape`,unit:`pt`,format:`a4`,compress:!0,putOnlyUsedFonts:!0,precision:16,userUnit:1,floatPrecision:16}),I=F.internal.pageSize.getWidth(),z=F.internal.pageSize.getHeight();ce(D(`assets/seima-logo.png`),async(n,i,o)=>{let s=a.getCurrentUser(),m=M.getUserSettings(),g=s?{name:s.name,email:s.email,phone:s.phone,position:s.position}:m,_=null;try{let{get:e}=await R(async()=>{let{get:e}=await import(`./vendor-idb-BL1M7mAU.js`).then(e=>e.t);return{get:e}},__vite__mapDeps([0,1]));_=await e(`customerLogo`)}catch{}S(F,{pageWidth:I,pageHeight:z,seimaLogoDataUrl:n,seimaLogoNaturalW:i,seimaLogoNaturalH:o,customerLogoDataUrl:_,userDetails:t,staffContact:g,footerHeight:x.footerHeight}),F.addPage(),ce(D(`assets/seima-logo-white.png`),(n,i,a)=>{let o=t.showRrp&&!t.excludePrice,s=!t.excludePrice,m=!t.excludeQty,{colX:g,colW:_,headers:S}=y(I,{leftMargin:32,rightMargin:32,showRrp:o,showPrice:s,showQty:m,showTotal:s&&m}),E=x.footerHeight;Ae();let D=(n,r,i,a,o,s,c)=>{if(!r||typeof r!=`string`){c&&c();return}let l=r.trim();if(l.startsWith(`//`)&&(l=`https:${l}`),e(l)){c&&c();return}if(V.totalImages++,t.emailCompatible){V.failedImages++,c&&c();return}let u=p(l);if(u&&u.dataUrl)try{let e=u.width/u.height,t=o,r=o/e;r>s&&(r=s,t=s*e),n.addImage(u.dataUrl,u.format,i,a,t,r,void 0,`FAST`),V.optimizedImages++,c&&c();return}catch{console.warn(`Failed to use cached image, falling back to direct load`)}let d=!1,f=T(l),m=0;function h(){if(d)return;if(m>=f.length){d=!0,console.warn(`All image fetch attempts failed, skipping:`,l.substring(0,70)),V.failedImages++,c&&c();return}let e=f[m];m+=1;let t=new Image;t.crossOrigin=`Anonymous`;let r=null;t.onload=function(){if(!d){r&&clearTimeout(r);try{let e=ye(0),r=e.imageMaxWidth,u=o,f=s;try{let o=document.createElement(`canvas`),s=o.getContext(`2d`),{width:p,height:m}=ve(t.width,t.height,r);o.width=p,o.height=m,s.imageSmoothingEnabled=!0,s.imageSmoothingQuality=`high`,s.drawImage(t,0,0,p,m);let h,g=`JPEG`,_=_e(o,s),v=ge(o,s);_||v?(h=o.toDataURL(`image/png`,e.imageQuality),g=`PNG`):(h=o.toDataURL(`image/jpeg`,e.imageQuality),g=`JPEG`);let y=`img_${ke(l)}`;n.addImage(h,g,i,a,u,f,y,`FAST`),d=!0,V.optimizedImages++,c&&c()}catch(e){console.warn(`Failed to optimize image: ${l}`,e);try{n.addImage(t,`JPEG`,i,a,u,f),d=!0,V.optimizedImages++,c&&c()}catch(e){console.error(`Fallback also failed for: ${l}`,e),setTimeout(h,150)}}}catch(e){console.warn(`Failed to add image to PDF:`,e),setTimeout(h,150)}}},t.onerror=function(){d||(r&&clearTimeout(r),console.warn(`Failed to load image attempt: ${e.substring(0,80)}`),setTimeout(h,150))},r=setTimeout(()=>{d||(t.src=``,t.onload=null,t.onerror=null,setTimeout(h,50))},3e3),t.src=e}h()},O=[];Object.keys(N).forEach((e,t)=>{let n=N[e];if(!n||!Array.isArray(n)){console.warn(`⚠️ Skipping invalid room items:`,e,n);return}n.forEach((r,i)=>{if(!r){console.warn(`⚠️ Skipping null item in room:`,e,`at index:`,i);return}O.push({item:r,room:e,rIdx:t,iIdx:i,isFirstInRoom:i===0,roomCount:n.length})})}),O.reduce((e,t)=>{if(!t||!t.item)return console.warn(`⚠️ Skipping null row in data analysis:`,t),e;let n=String(t.item.Description||``),r=String(t.item.LongDescription||``),i=String(t.item.Notes||``),a=String(t.item.OrderCode||``);return e+n.length+r.length+i.length+a.length},0);let k=0,A=0,M=Math.floor((z-80)/4),P=E+8;function L(){if(!O||!Array.isArray(O)){console.error(`❌ Critical error: rowsToDraw is not a valid array:`,O),Se(Error(`Invalid product data structure`),`generating PDF`,`unknown.pdf`);return}if(k>=O.length){let e=F.internal.getNumberOfPages()-1;for(let r=2;r<=e+1;r++){F.setPage(r);let o=(r-2)*4,s=Math.min(o+4,O.length),l=!1,u=!1;for(let e=o;e<s;e++){let t=O[e]&&O[e].item;if(t&&(!l&&d(t)&&(l=!0),!u&&String(t.PlanCode||``).trim()&&(u=!0),l&&u))break}c(F,{pageWidth:I,colX:g,colW:_,leftMargin:32,footerHeight:E,logoDataUrl:n,logoNaturalW:i,logoNaturalH:a,headers:S,userDetails:t,skipWelsHeader:!l,showRefAboveCode:u}),h(F,{pageWidth:I,pageHeight:z,leftMargin:32,footerHeight:E,pageNumber:r-1,totalPages:e})}let o=new Date,s=String(o.getDate()).padStart(2,`0`),l=String(o.getMonth()+1).padStart(2,`0`),u=String(o.getFullYear()).slice(-2),f=String(o.getHours()).padStart(2,`0`),p=String(o.getMinutes()).padStart(2,`0`),m=`${t.project.replace(/[^a-zA-Z0-9\s]/g,``)}-${s}${l}${u}.${f}${p}.pdf`,v=document.getElementById(`pdf-processing-notification`);v&&v.remove(),je(t.emailCompatible);try{let e=F.output(`blob`),n=F.output(`string`);n&&n.match(/\/Type\s*\/XObject/g),n&&n.match(/Tj\s/g),n&&n.match(/\/A\s*<</g),t.pdfSize=e.size;let r=xe(e,m);if(t.sendEmail&&e.size>15*1024*1024){console.warn(`❌ PDF too large for email (${(e.size/1024/1024).toFixed(1)}MB), offering email-compatible version`),Me(t,m);return}let i=be(e,r.settings);t.sendEmail&&t.email?t.exportCsv?ue(t,m.replace(/\.pdf$/,`.csv`)).then(e=>{window.dispatchEvent(new CustomEvent(`sendEmail`,{detail:{userDetails:t,pdfBlob:i,csvBlob:e}}))}).catch(e=>{console.error(`Async CSV generation for email failed:`,e),window.dispatchEvent(new CustomEvent(`sendEmail`,{detail:{userDetails:t,pdfBlob:i,csvBlob:null}}))}):window.dispatchEvent(new CustomEvent(`sendEmail`,{detail:{userDetails:t,pdfBlob:i,csvBlob:null}})):(async()=>{if(await oe(await Pe(i),m,`PDF`),t.exportCsv){let e=m.replace(/\.pdf$/,`.csv`);try{let n=await ue(t,e);n&&await oe(n,e,`CSV`)}catch(e){console.error(`CSV generation failed:`,e)}}})()}catch(e){console.error(`PDF generation failed:`,e),Se(e,`generating PDF`,m);let t=document.getElementById(`pdf-processing-notification`);t&&t.remove()}r&&(r.style.display=`none`);return}A>=4&&(F.addPage(),P=E+8,A=0);let e=O[k];if(!e||!e.item){console.warn(`⚠️  Skipping invalid row at index ${k}:`,e),k++,L();return}let o=P+M*A;e.isFirstInRoom&&(j===`room`||j===`category`)&&e.room!==`__all__`&&v(F,e.room,e.roomCount,32,o);let s=g[0],p=s+90+12;l(e.item),D(F,e.item.Image_URL||``,s,o+8+16,90,M-16,()=>{D(F,e.item.Diagram_URL||``,p,o+8+16,90,M-16,()=>{let n=o+28,r=g[1]+_[1]/2,i=String(e.item.PlanCode||``).trim(),a=n+10,s=a+12,c=s+25;i&&(F.setFontSize(10),F.setTextColor(f.headerBackground),F.setFont(`helvetica`,`bold`),F.text(i.toUpperCase(),r,a,{align:`center`}),F.setFont(`helvetica`,`normal`)),F.setFontSize(10),F.setTextColor(`#222`),F.text(String(e.item.OrderCode||``),r,s,{align:`center`}),C(F,e.item,r,c);let l=_[2]-10;b(F,e.item,g[2],n+10,l,t.excludeLongDescription);let d=S.indexOf(`WELS`)+1;if(d>0&&g[d]){let t=g[d]+_[d]/2;w(F,e.item,t,n+10)}u(F,e.item,g,_,S,n+10,{excludePrice:t.excludePrice,includeGst:t.includeGst}),k++,A++,L()})})}L()})})})}function ce(e,t){let n=new window.Image;n.crossOrigin=`Anonymous`,n.onload=function(){let e=document.createElement(`canvas`),r=e.getContext(`2d`),i=n.width,a=n.height;if(i>400||a>150){let e=400/i,t=150/a,n=Math.min(e,t);i=Math.round(i*n),a=Math.round(a*n)}e.width=i,e.height=a,r.imageSmoothingEnabled=!0,r.imageSmoothingQuality=`high`,r.drawImage(n,0,0,i,a),t(e.toDataURL(`image/png`,.9),i,a)},n.onerror=function(){console.error(`PDF brand image failed to load:`,e),t(null,0,0)},n.src=e}function le(){if(!document.getElementById(`pdf-spinner`)){let e=document.createElement(`div`);if(e.id=`pdf-spinner`,e.style.display=`none`,e.style.position=`fixed`,e.style.top=`0`,e.style.left=`0`,e.style.width=`100vw`,e.style.height=`100vh`,e.style.zIndex=`9999`,e.style.background=`rgba(255,255,255,0.7)`,e.style.alignItems=`center`,e.style.justifyContent=`center`,e.innerHTML=`<div style="border:6px solid #e0e0e0;border-top:6px solid #2563eb;border-radius:50%;width:54px;height:54px;animation:spin 1s linear infinite;"></div>`,document.body.appendChild(e),!document.getElementById(`pdf-spinner-style`)){let e=document.createElement(`style`);e.id=`pdf-spinner-style`,e.innerHTML=`@keyframes spin { 0% { transform: rotate(0deg);} 100% { transform: rotate(360deg);} }`,document.head.appendChild(e)}}}async function ue(e,t){return new Promise(async n=>{if(!window.Papa)try{await r.loadScript(`https://cdn.jsdelivr.net/npm/papaparse@5.4.1/papaparse.min.js`)}catch(e){console.error(`Failed to load PapaParse:`,e),n(null);return}let i=JSON.parse(localStorage.getItem(`selection`)||`[]`),a=JSON.parse(localStorage.getItem(L.STORAGE_KEYS.SELECTED_PRODUCTS)||`[]`),o=[];if(o=a.length>0?a.map(e=>{let t=e.product||{};return m({...t,Image_URL:t.Image_URL||t.imageUrl||t[`Image URL`]||``,Diagram_URL:t.Diagram_URL||t.diagramUrl||t[`Diagram URL`]||``,Datasheet_URL:t.Datasheet_URL||t.datasheetUrl||t[`Datasheet URL`]||``,Website_URL:t.Website_URL||t.websiteUrl||t[`Website URL`]||``,Room:e.room,Notes:e.notes,PlanCode:e.planCode||``,Quantity:e.quantity,Timestamp:new Date(e.timestamp).toISOString()})}):Array.isArray(i)?i.map(e=>m({...e})):i,!o.length){n(null);return}setTimeout(()=>{let r=o.map(t=>{let n,r,i,a,o=e.excludePrice,s=0;if(t.UserEditedPrice!==void 0&&t.UserEditedPrice!==null&&t.UserEditedPrice!==``)s=parseFloat(t.UserEditedPrice.toString().replace(/,/g,``));else{let e=t.RRP_EX||t[`RRP EX GST`]||t.RRP_EX||t.RRP_EXGST||``;s=parseFloat((e||`0`).toString().replace(/,/g,``))}n=s,i=`Price ea ex GST`,a=`Price Total ex GST`,r=!isNaN(n)&&n>=0?(n*(t.Quantity||1)).toFixed(2):``;let c=t[`WELS STAR`]||t.WELS_STAR||t.WELS_STAR||t.WelsStar||``,l=c&&c.toString().trim()?c.toString().replace(/[^\d.]/g,``).trim():``,u={Code:B(t.OrderCode||``),Description:B(t.Description||``),"WELS Star":B(l),Quantity:t.Quantity||1,Notes:B(t.Notes||``),Room:B(t.Room||``),"Image URL":B(t.Image_URL||``),"Diagram URL":B(t.Diagram_URL||``),"Datasheet URL":B(t.Datasheet_URL||``),"Website URL":B(t.Website_URL||``)};return u[i]=o?`0.00`:n>=0?n.toFixed(2):``,u[a]=o?`0.00`:r,u[`Plan Code`]=B(t.PlanCode||``),u});setTimeout(()=>{let i=window.Papa.unparse(r,{quotes:!0,quoteChar:`"`,delimiter:`,`,header:!0,newline:`\r
`,skipEmptyLines:!1,escapeChar:`"`,transform:{value(e,t){return typeof e==`string`?e.replace(/\0/g,``).replace(/[\x00-\x08\x0B\x0C\x0E-\x1F]/g,``):e}}});e.sendEmail?setTimeout(()=>{try{let e=btoa(unescape(encodeURIComponent(i)));n({name:t,data:e,contentType:`text/csv`,originalSize:i.length,base64Size:e.length})}catch(e){console.error(`CSV base64 encoding failed:`,e),n(new Blob([i],{type:`text/csv`}))}},0):n(new Blob([i],{type:`text/csv`}))},0)},0)})}function B(e){return typeof e!=`string`&&(e=String(e)),e=e.replace(/\0/g,``).replace(/[\x00-\x08\x0B\x0C\x0E-\x1F]/g,``).replace(/\r?\n|\r/g,` `).trim(),e}async function de(e,t,n=`file`){try{if(`showSaveFilePicker`in window){let r=await(await window.showSaveFilePicker({suggestedName:t,types:[{description:`${n} files`,accept:{[e.type]:[`.${t.split(`.`).pop()}`]}}]})).createWritable();return await r.write(e),await r.close(),!0}}catch(e){console.warn(`File System Access API failed:`,e)}return!1}function fe(e,t,n=`file`){try{if(e.size>2*1024*1024)return console.warn(`File too large for data URI method`),!1;let n=new FileReader;return n.onload=function(e){try{let n=document.createElement(`a`);n.href=e.target.result,n.download=t,n.style.display=`none`,document.body.appendChild(n),n.click(),document.body.removeChild(n)}catch(e){console.error(`Data URI download failed:`,e)}},n.readAsDataURL(e),!0}catch(e){return console.warn(`Data URI method failed:`,e),!1}}function pe(e,t,n=`file`){let r=URL.createObjectURL(e),i=document.createElement(`div`);i.style.cssText=`
    position: fixed; top: 0; left: 0; width: 100%; height: 100%; 
    background: rgba(0,0,0,0.8); z-index: 10001; display: flex; 
    align-items: center; justify-content: center; padding: 20px;
  `;let a=document.createElement(`div`);a.style.cssText=`
    background: white; border-radius: 8px; padding: 30px; max-width: 600px; 
    width: 100%; max-height: 80vh; overflow-y: auto;
  `,a.innerHTML=`
    <h3 style="color: #2563eb; margin: 0 0 20px 0; display: flex; align-items: center;">
      <span style="margin-right: 8px;">💾</span>
      Manual Download Required
    </h3>
    <p style="margin: 0 0 16px 0; color: #374151;">
      Automatic download failed. Please use one of these manual methods to save your ${n}:
    </p>
    
    <div style="background: #f3f4f6; padding: 16px; border-radius: 6px; margin: 16px 0;">
      <h4 style="margin: 0 0 12px 0; color: #1f2937;">Method 1: Right-click to save</h4>
      <p style="margin: 0 0 12px 0; color: #4b5563; font-size: 14px;">
        Right-click the button below and select "Save link as..." or "Download linked file":
      </p>
      <a href="${r}" download="${t}" style="
        display: inline-block; padding: 10px 20px; background: #2563eb; color: white; 
        text-decoration: none; border-radius: 4px; font-weight: bold;
      ">📄 ${t}</a>
    </div>
    
    <div style="background: #f3f4f6; padding: 16px; border-radius: 6px; margin: 16px 0;">
      <h4 style="margin: 0 0 12px 0; color: #1f2937;">Method 2: Copy download link</h4>
      <p style="margin: 0 0 12px 0; color: #4b5563; font-size: 14px;">
        Copy this link and paste it into a new browser tab:
      </p>
      <div style="display: flex; gap: 8px; align-items: center;">
        <input type="text" id="manual-download-url" value="${r}" readonly style="
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
  `,i.appendChild(a),document.body.appendChild(i),document.getElementById(`manual-download-close`).onclick=()=>{URL.revokeObjectURL(r),document.body.removeChild(i)},document.getElementById(`manual-download-retry`).onclick=()=>{URL.revokeObjectURL(r),document.body.removeChild(i),setTimeout(()=>{me(e,t,n)},1e3)},document.getElementById(`copy-url-btn`).onclick=()=>{let e=document.getElementById(`manual-download-url`);e.select(),e.setSelectionRange(0,99999);try{navigator.clipboard.writeText(r).then(()=>{let e=document.getElementById(`copy-url-btn`);e.textContent=`Copied!`,e.style.background=`#059669`,setTimeout(()=>{e.textContent=`Copy`,e.style.background=`#059669`},2e3)}).catch(()=>{document.execCommand(`copy`);let e=document.getElementById(`copy-url-btn`);e.textContent=`Copied!`,setTimeout(()=>e.textContent=`Copy`,2e3)})}catch{alert(`Copy failed. Please select the URL manually and copy it.`)}},i.onclick=e=>{e.target===i&&(URL.revokeObjectURL(r),document.body.removeChild(i))},setTimeout(()=>{i.parentElement&&(URL.revokeObjectURL(r),document.body.removeChild(i))},300*1e3)}async function me(e,t,n=`file`){try{if(await he(e,t))return}catch(e){console.warn(`Standard download failed:`,e)}await de(e,t,n)||fe(e,t,n)||pe(e,t,n)}function he(e,t){return new Promise(n=>{try{let r=URL.createObjectURL(e),i=document.createElement(`a`);i.href=r,i.download=t,i.style.display=`none`,document.body.appendChild(i);let a=setTimeout(()=>{o(),n(!1)},3e3),o=()=>{clearTimeout(a),i.parentElement&&document.body.removeChild(i),setTimeout(()=>URL.revokeObjectURL(r),1e3)};i.onclick=()=>{o(),n(!0)},i.click(),setTimeout(()=>{o(),n(!0)},500)}catch(e){console.error(`Standard download error:`,e),n(!1)}})}function ge(e){let t=document.createElement(`canvas`),n=t.getContext(`2d`);t.width=Math.min(100,e.width),t.height=Math.min(100,e.height),n.drawImage(e,0,0,t.width,t.height);let r=n.getImageData(0,0,t.width,t.height).data,i=new Set;for(let e=0;e<r.length;e+=4){let t=`${r[e]},${r[e+1]},${r[e+2]}`;i.add(t)}return i.size<1e3}function _e(e,t){let n=t.getImageData(0,0,e.width,e.height).data;for(let e=3;e<n.length;e+=4)if(n[e]<255)return!0;return!1}function ve(e,t,n){if(e<=n)return{width:e,height:t};let r=t/e;return{width:n,height:Math.round(n*r)}}function ye(e){return e>25*1024*1024?{compressionLevel:`aggressive`,imageQuality:.6,imageMaxWidth:300,removeImages:!1,usePNG:!0,message:`Aggressive compression - maintaining technical diagram clarity`}:e>20*1024*1024?{compressionLevel:`high`,imageQuality:.65,imageMaxWidth:350,removeImages:!1,usePNG:!0,message:`High compression - preserving technical diagram details`}:e>15*1024*1024?{compressionLevel:`medium`,imageQuality:.7,imageMaxWidth:400,removeImages:!1,usePNG:!0,message:`Medium compression - optimal for technical documentation`}:e>10*1024*1024?{compressionLevel:`light`,imageQuality:.75,imageMaxWidth:450,removeImages:!1,usePNG:!0,message:`Light compression - excellent technical diagram quality`}:{compressionLevel:`minimal`,imageQuality:.8,imageMaxWidth:500,removeImages:!1,usePNG:!0,message:`Minimal compression - maximum technical diagram quality`}}function be(e,t){return e}function xe(e,t){let n=(e.size/(1024*1024)).toFixed(2),r=ye(e.size);if(e.size>15*1024*1024){console.warn(`Large file detected (${n} MB) - exceeds typical email limit, may need email-compatible version`);let e=document.createElement(`div`);e.style.cssText=`
      position: fixed; top: 20px; right: 20px; z-index: 10001;
      background: #fef3c7; border: 1px solid #f59e0b; border-radius: 6px;
      padding: 16px; max-width: 300px; box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    `,e.innerHTML=`
      <div style="display: flex; align-items: center; margin-bottom: 8px;">
        <span style="font-size: 18px; margin-right: 8px;">📁</span>
        <strong style="color: #92400e;">Large Technical PDF</strong>
      </div>
      <p style="margin: 0; color: #a16207; font-size: 14px;">
        PDF is ${n} MB with quality technical images. May exceed some email limits.
      </p>
      <button onclick="this.parentElement.remove()" style="
        margin-top: 8px; padding: 4px 8px; border: none; background: #f59e0b;
        color: white; border-radius: 3px; cursor: pointer; font-size: 12px;
      ">OK</button>
    `,document.body.appendChild(e),setTimeout(()=>{e.parentElement&&e.remove()},8e3)}else e.size;return{size:e.size,sizeInMB:parseFloat(n),settings:r}}function Se(e,t=``,n=``){console.error(`Detailed error:`,e);let r={type:Ce(e),message:e.message||`Unknown error`,context:t,filename:n,timestamp:new Date().toISOString(),userAgent:navigator.userAgent},i=document.createElement(`div`);i.style.cssText=`
    position: fixed; top: 0; left: 0; width: 100%; height: 100%; 
    background: rgba(0,0,0,0.8); z-index: 10002; display: flex; 
    align-items: center; justify-content: center; padding: 20px;
  `;let a=document.createElement(`div`);return a.style.cssText=`
    background: white; border-radius: 8px; padding: 30px; max-width: 700px; 
    width: 100%; max-height: 80vh; overflow-y: auto;
  `,a.innerHTML=`
    <h3 style="color: #dc2626; margin: 0 0 20px 0; display: flex; align-items: center;">
      <span style="margin-right: 8px;">⚠️</span>
      ${we(r.type)}
    </h3>
    
    <div style="background: #fef2f2; border: 1px solid #fecaca; border-radius: 6px; padding: 16px; margin: 16px 0;">
      <p style="margin: 0; color: #b91c1c; font-weight: bold;">
        ${Te(r.type,t,n)}
      </p>
    </div>
    
    ${Ee(r.type)}
    
    <details style="margin: 20px 0; padding: 16px; background: #f9fafb; border-radius: 6px;">
      <summary style="cursor: pointer; font-weight: bold; color: #374151;">
        🔧 Technical Details (for support)
      </summary>
      <div style="margin-top: 12px; font-family: monospace; font-size: 12px; color: #6b7280;">
        <p><strong>Error Type:</strong> ${r.type}</p>
        <p><strong>Message:</strong> ${r.message}</p>
        <p><strong>Context:</strong> ${r.context}</p>
        <p><strong>File:</strong> ${r.filename}</p>
        <p><strong>Time:</strong> ${r.timestamp}</p>
        <p><strong>Browser:</strong> ${De()}</p>
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
  `,i.appendChild(a),document.body.appendChild(i),document.getElementById(`error-close`).onclick=()=>{document.body.removeChild(i)},document.getElementById(`error-retry`).onclick=()=>{document.body.removeChild(i),console.log(`Retry requested for:`,t)},document.getElementById(`error-report`).onclick=()=>{Oe(r),alert(`Error details copied to clipboard. Please send this to support.`)},i.onclick=e=>{e.target===i&&document.body.removeChild(i)},r}function Ce(e){let t=e.message?.toLowerCase()||``,n=e.stack?.toLowerCase()||``;return t.includes(`network`)||t.includes(`fetch`)?`network`:t.includes(`permission`)||t.includes(`denied`)?`permission`:t.includes(`memory`)||t.includes(`quota`)?`memory`:t.includes(`blob`)||t.includes(`url`)?`download`:t.includes(`canvas`)||t.includes(`image`)?`rendering`:n.includes(`jspdf`)||t.includes(`pdf`)?`pdf`:`unknown`}function we(e){return{network:`Network Connection Error`,permission:`Permission Required`,memory:`Insufficient Memory`,download:`Download Failed`,rendering:`Display Error`,pdf:`PDF Generation Error`,unknown:`Unexpected Error`}[e]||`Error Occurred`}function Te(e,t,n){return{network:`Unable to load required resources. Please check your internet connection and try again.`,permission:`Browser permission required to save ${n}. Please allow downloads and try again.`,memory:`Not enough memory to process this large file. Try closing other browser tabs or use fewer products.`,download:`Failed to download ${n}. This may be due to browser security settings or storage limitations.`,rendering:`Unable to display product images properly. Some images may be missing from the final output.`,pdf:`PDF generation failed while ${t}. The file may be too large or contain problematic data.`,unknown:`An unexpected error occurred while ${t}. Please try again or contact support.`}[e]||`An unknown error has occurred.`}function Ee(e){let t={network:`
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
      </div>`};return t[e]||t.unknown}function De(){let e=navigator.userAgent;return e.includes(`Chrome`)?`Chrome`:e.includes(`Firefox`)?`Firefox`:e.includes(`Safari`)?`Safari`:e.includes(`Edge`)?`Edge`:e.includes(`SamsungBrowser`)?`Samsung Internet`:`Unknown`}function Oe(e){let t=`
Seima Scanner Error Report
========================
Time: ${e.timestamp}
Error Type: ${e.type}
Message: ${e.message}
Context: ${e.context}
File: ${e.filename}
Browser: ${De()}
User Agent: ${e.userAgent}
========================
  `.trim();try{navigator.clipboard.writeText(t)}catch(e){console.error(`Failed to copy error report:`,e)}}var V={totalImages:0,optimizedImages:0,failedImages:0,totalSavings:0};function ke(e){let t=0;if(e.length===0)return t.toString();for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);t=(t<<5)-t+r,t&=t}return Math.abs(t).toString(36)}function Ae(){V={totalImages:0,optimizedImages:0,failedImages:0,totalSavings:0}}function je(e=!1){V.totalImages}function Me(e,t){let n=document.createElement(`div`);n.style.cssText=`
    position: fixed; top: 0; left: 0; width: 100%; height: 100%; 
    background: rgba(0,0,0,0.8); z-index: 10001; display: flex; 
    align-items: center; justify-content: center; padding: 20px;
  `;let r=document.createElement(`div`);r.style.cssText=`
    background: white; border-radius: 8px; padding: 30px; max-width: 500px; 
    width: 100%; max-height: 80vh; overflow-y: auto;
  `,r.innerHTML=`
    <h3 style="color: #2563eb; margin: 0 0 20px 0; display: flex; align-items: center;">
      <span style="margin-right: 8px;">📧</span>
      Email-Compatible Version Available
    </h3>
    <p style="margin: 0 0 16px 0; color: #374151;">
      Your PDF is large (${(e.pdfSize/1024/1024).toFixed(1)} MB). 
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
  `,n.appendChild(r),document.body.appendChild(n),document.getElementById(`email-regular-version`).onclick=()=>{n.remove();let r=new CustomEvent(`sendEmailRegular`,{detail:{userDetails:e,originalFilename:t}});window.dispatchEvent(r)},document.getElementById(`email-optimized-version`).onclick=()=>{n.remove(),e.emailCompatible=!0,se(e)}}var Ne=`tipTailSettings`;async function Pe(e){let t={};if(window._currentTipTailSettings)t=window._currentTipTailSettings,window._currentTipTailSettings=null;else try{t=JSON.parse(localStorage.getItem(Ne)||`{}`)}catch(e){console.warn(`Could not read tipTailSettings from localStorage:`,e)}let{tipAsset:n,tipUpload:r,tailAsset:i,tailUpload:a}=t;if(!n&&!r&&!i&&!a)return e;async function o(e,t,n=`file`){if(t&&e)try{let t=atob(e),n=new Uint8Array(t.length);for(let e=0;e<t.length;e++)n[e]=t.charCodeAt(e);return n.buffer}catch(e){return console.warn(`⚠️ Error converting base64 to ArrayBuffer for ${n}:`,e),null}if(e)try{let t=await fetch(e);return t.ok?await t.arrayBuffer():(console.warn(`⚠️ Failed to fetch ${n} file: ${e} (${t.status} ${t.statusText})`),null)}catch(t){return console.warn(`⚠️ Error fetching ${n} file: ${e}`,t),null}return null}async function s(e,t=`file`,n=`unknown`){if(!e)return null;try{return await PDFLib.PDFDocument.load(e)}catch(e){return console.warn(`⚠️ Failed to parse ${t} PDF: ${n}`,e),null}}try{let t=await e.arrayBuffer(),c=await PDFLib.PDFDocument.load(t),l=await PDFLib.PDFDocument.create(),[u]=await l.copyPages(c,[0]);l.addPage(u);let d=null,f=null;if(r){let e=await o(r,!0,`tip`);e?(d=await s(e,`tip`,`uploaded file`),d||(f=`The uploaded tip file is not a valid PDF or could not be loaded.`)):f=`Failed to process the uploaded tip file.`}else if(n){let e=await o(n,!1,`tip`);e?(d=await s(e,`tip`,n),d||(f=`The tip file "${n.split(`/`).pop()}" is not a valid PDF or could not be loaded.`)):f=`The tip file "${n.split(`/`).pop()}" could not be found or accessed.`}if(d){let e=Array.from({length:d.getPageCount()},(e,t)=>t);(await l.copyPages(d,e)).forEach(e=>l.addPage(e))}else f&&(console.warn(`⚠️ Tip file error: ${f}`),Fe(`Tip File Issue`,f));if(c.getPageCount()>1){let e=Array.from({length:c.getPageCount()-1},(e,t)=>t+1);(await l.copyPages(c,e)).forEach(e=>l.addPage(e))}let p=null,m=null;if(a){let e=await o(a,!0,`tail`);e?(p=await s(e,`tail`,`uploaded file`),p||(m=`The uploaded tail file is not a valid PDF or could not be loaded.`)):m=`Failed to process the uploaded tail file.`}else if(i){let e=await o(i,!1,`tail`);e?(p=await s(e,`tail`,i),p||(m=`The tail file "${i.split(`/`).pop()}" is not a valid PDF or could not be loaded.`)):m=`The tail file "${i.split(`/`).pop()}" could not be found or accessed.`}if(p){let e=Array.from({length:p.getPageCount()},(e,t)=>t);(await l.copyPages(p,e)).forEach(e=>l.addPage(e))}else m&&(console.warn(`⚠️ Tail file error: ${m}`),Fe(`Tail File Issue`,m));let h=await l.save({useObjectStreams:!0,addDefaultPage:!1,objectsPerTick:20});return new Blob([h],{type:`application/pdf`})}catch(t){return console.error(`❌ Error during PDF merging:`,t),Fe(`PDF Merging Error`,`An error occurred while merging the PDF files. The main PDF will be generated without tip/tail content.`),e}}function Fe(e,t){let n=document.createElement(`div`);n.style.cssText=`
    position: fixed; top: 20px; right: 20px; z-index: 10002;
    background: #fef3c7; border: 1px solid #f59e0b; border-radius: 8px;
    padding: 16px; max-width: 400px; box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  `,n.innerHTML=`
    <div style="display: flex; align-items: flex-start; gap: 12px;">
      <span style="font-size: 20px;">⚠️</span>
      <div style="flex: 1;">
        <div style="font-weight: 600; color: #92400e; margin-bottom: 4px;">${e}</div>
        <div style="color: #78350f; font-size: 14px; line-height: 1.4;">${t}</div>
        <div style="margin-top: 8px; font-size: 12px; color: #92400e;">
          The PDF will be generated without this content.
        </div>
      </div>
      <button onclick="this.parentElement.parentElement.remove()" style="
        background: none; border: none; color: #92400e; cursor: pointer;
        font-size: 18px; padding: 0; width: 20px; height: 20px;
      ">×</button>
    </div>
  `,document.body.appendChild(n),setTimeout(()=>{n.parentElement&&n.remove()},8e3)}var Ie=`fredChatHistory`,H=`fredChatMessages`,U=`fredFeedback`,W=`fredQuestionLog`,Le=16,G={PROXY_URL:`https://seima-ai-proxy.seima.workers.dev`,MODEL:`gpt-4o`,MAX_TOKENS:2e3,TEMPERATURE:.2,MAX_CATALOG_RESULTS:60},Re=[`code`,`planCode`,`name`,`quantity`,`finish`,`section`],ze=new Set([`high`,`medium`,`low`]);function Be(){return{"Content-Type":`application/json`,...a.getAuthHeaders()}}function Ve(e){let t=String(e||``).toLowerCase();return ze.has(t)?t:`medium`}function He(e){let t=e?.confidence&&typeof e.confidence==`object`?e.confidence:{};return Object.fromEntries(Re.map(e=>[e,Ve(t[e])]))}async function Ue(e){let t=new TextEncoder().encode(e),n=await crypto.subtle.digest(`SHA-256`,t);return[...new Uint8Array(n)].map(e=>e.toString(16).padStart(2,`0`)).join(``)}function K(e){return String(e||``).toLowerCase().replace(/[^a-z0-9]+/g,` `).trim()}var We=`You are a product specification parser for building/construction projects. Extract ALL product references from the provided text.

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

Return format: [{"code":"...","name":"...","brand":"...","category":"...","quantity":1,"finish":"...","section":"...","specCode":"...","style":"..."}]`,q=new class{constructor(){this.conversationHistory=[],this._historyReady=this._loadHistory(),this.isProcessing=!1,this._catalogChecked=!1,this._syncing=!1,this.lastCompetitorProducts=new Map}async chat(e,t,n=null,r=null,i=null){if(this.isProcessing)throw Error(`A request is already in progress`);this.isProcessing=!0,await this._historyReady,this._catalogChecked||(this._catalogChecked=!0,this._checkCatalogFreshness());try{let a=typeof e==`string`?e:e.find?.(e=>e.type===`text`)?.text||``,o;try{o=await this._agentChatStream(a,n,i,r)}catch(e){console.warn(`Agent chat failed, falling back to legacy flow:`,e.message),o=null}if(o||=await this._legacyChat(e,a,t,n,r),!o)throw Error(`No response from AI`);return this.conversationHistory.push({role:`user`,content:a||e},{role:`assistant`,content:o}),this.conversationHistory.length>Le&&(this.conversationHistory=this.conversationHistory.slice(-16)),await this._saveHistory(),{content:o,usage:null}}finally{this.isProcessing=!1}}async _agentChatStream(e,t,n,r){let i=new AbortController,o=setTimeout(()=>i.abort(),6e4);try{let o=this._deriveIntentProfile(e),s=await fetch(`${G.PROXY_URL}/v1/agent-chat`,{method:`POST`,headers:Be(),body:JSON.stringify({message:e,history:this.conversationHistory.slice(-12),model:G.MODEL,staffMode:a.isStaffMode(),powerUser:a.isPowerUser(),userEmail:a.getCurrentUser()?.email||``,intentProfile:o,selectedProducts:t?.length>0?t.map(e=>({OrderCode:e.OrderCode,ProductName:e.ProductName||e.Description,room:e.room})):void 0}),signal:i.signal});if(!s.ok){a.handleUnauthorizedResponse?.(s,`agent-chat`);let e=await s.json().catch(()=>({}));throw Error(e.details||e.error||`Request failed (${s.status})`)}if((s.headers.get(`content-type`)||``).includes(`application/json`)){let e=await s.json();return e.needsSync?(this._ensureCatalogSync(),null):e.content||null}let c=s.body.getReader(),l=new TextDecoder,u=``,d=``,f=``;for(this.lastCompetitorProducts.clear();;){let{done:e,value:t}=await c.read();if(e)break;d+=l.decode(t,{stream:!0});let i=d.split(`
`);d=i.pop();for(let e of i)if(e.startsWith(`event: `))f=e.slice(7).trim();else if(e.startsWith(`data: `)){try{let t=JSON.parse(e.slice(6));if(f===`status`&&n)n(t.text);else if(f===`token`)u+=t.text,r&&r(t.text);else if(f===`comp_products`)for(let e of t.products||[])e.code&&this.lastCompetitorProducts.set(e.code,e);else if(f===`error`)throw Error(t.message||`Agent chat failed`)}catch(e){if(e instanceof SyntaxError)continue;throw e}f=``}}return u||null}catch(e){throw e.name===`AbortError`?Error(`Request timed out.`):e}finally{clearTimeout(o)}}async _legacyChat(e,t,n,r,i){let a=[],o=await this._findRelevantProductsAI(t,n),s=this._deriveIntentProfile(t);if(o?a.push({role:`system`,content:`SEIMA PRODUCT DATA (${o.count} products):\n${o.text}\n\nIMPORTANT: The above is the COMPLETE list of matching Seima products. Do NOT reference any product whose OrderCode is not listed above.`}):a.push({role:`system`,content:`No matching Seima products were found in the catalogue for this query. Do NOT invent or recall products from memory. Let the user know honestly that no matching Seima products were found and suggest they refine their search.`}),a.push({role:`system`,content:`INTENT PROFILE:\n- intent: ${s.intent}\n- constraints: ${s.constraints.join(`, `)||`none specified`}\n- preferred categories: ${s.categories.join(`, `)||`not specified`}\n- preferred groups: ${s.groups.join(`, `)||`not specified`}\n\nUse this profile to prioritise relevant products and explain fit clearly.`}),r?.length>0){let e=r.map(e=>[e.OrderCode,e.ProductName||e.Description,e.room?`Room: ${e.room}`:null].filter(Boolean).join(` | `)).join(`
`);a.push({role:`system`,content:`USER'S CURRENT SELECTION (${r.length} products):\n${e}`})}a.push(...this.conversationHistory),a.push({role:`user`,content:e});let c={messages:a,model:G.MODEL,max_tokens:G.MAX_TOKENS,temperature:G.TEMPERATURE},l;return l=i?await this._callProxyStream(`/v1/chat/completions`,c,i):(await this._callProxy(`/v1/chat/completions`,c)).choices?.[0]?.message?.content,this._detectSearchFailure(t,n),l}async extractFromSpecText(e,t){let n=`--- Page Break ---`,r=e.split(n).map(e=>e.trim()).filter(Boolean),i=[];for(let e=0;e<r.length;e+=3)i.push(r.slice(e,e+3).join(`\n\n${n}\n\n`));console.log(`📄 Spec extraction: ${r.length} pages → ${i.length} chunk(s) (max 3 pages each)`);for(let e=0;e<i.length;e++)console.log(`  Chunk ${e+1}: ${i[e].length} chars`);let a=[],o={prompt_tokens:0,completion_tokens:0,total_tokens:0};for(let e=0;e<i.length;e++){t&&t(e,i.length);let n=await this._callProxy(`/v1/chat/completions`,{model:`gpt-4o-mini`,stream:!1,raw:!0,messages:[{role:`system`,content:We},{role:`user`,content:`Extract all product references from this specification document (part ${e+1} of ${i.length}):\n\n${i[e]}`}],max_tokens:16e3,temperature:.1},18e4),r=n.choices?.[0]?.finish_reason;r===`length`&&console.warn(`⚠️ Chunk ${e+1}/${i.length} was truncated (finish_reason=length). Some products may be missing.`);let s=n.choices?.[0]?.message?.content||`[]`,c;try{let e=s.replace(/^```json?\n?/i,``).replace(/\n?```$/i,``).trim();c=JSON.parse(e)}catch{console.warn(`Failed to parse extraction result for chunk ${e+1}:`,s.slice(0,500)),c=[]}console.log(`  Chunk ${e+1}/${i.length}: ${c.length} products (${r})`),a.push(...c),n.usage&&(o.prompt_tokens+=n.usage.prompt_tokens||0,o.completion_tokens+=n.usage.completion_tokens||0,o.total_tokens+=n.usage.total_tokens||0)}return console.log(`📄 Spec extraction complete: ${a.length} products total`),{products:a,usage:o}}async extractFromTender(e,t){let n=`--- Page Break ---`,r=e.split(n).map(e=>e.trim()).filter(Boolean),i=[],a=[],o=0,s=`\n\n${n}\n\n`.length,c=()=>{a.length!==0&&(i.push(a.join(`\n\n${n}\n\n`)),a=[],o=0)};for(let e of r){let t=o+(a.length>0?s:0)+e.length;a.length>0&&(a.length>=6||t>12e3)&&c(),a.push(e),o+=(a.length>1?s:0)+e.length}c();let l=[],u=[],d=null,f={prompt_tokens:0,completion_tokens:0,total_tokens:0};for(let e=0;e<i.length;e++){t&&t(e,i.length,{stage:`chunk-start`,chunkTextLength:i[e].length,productsSoFar:l.slice()});let n=await this._callProxy(`/v1/extract-tender`,{text:i[e],chunkIndex:e+1,totalChunks:i.length},18e4);n.project&&(d=d?{name:d.name||n.project.name,description:d.description||n.project.description,architect:d.architect||n.project.architect,builder:d.builder||n.project.builder,location:d.location||n.project.location,projectType:d.projectType||n.project.projectType}:{...n.project}),l.push(...n.products||[]),t&&t(e,i.length,{stage:`chunk-complete`,chunkTextLength:i[e].length,chunkProducts:n.products||[],productsSoFar:l.slice()}),Array.isArray(n.layoutAmbiguities)&&u.push(...n.layoutAmbiguities),n.usage&&(f.prompt_tokens+=n.usage.prompt_tokens||0,f.completion_tokens+=n.usage.completion_tokens||0,f.total_tokens+=n.usage.total_tokens||0)}let p=[],m=new Set;for(let e of l){let t=[String(e.planCode||``).toLowerCase(),String(e.specCode||``).toLowerCase(),String(e.code||``).toLowerCase(),String(e.brand||``).toLowerCase(),String(e.name||``).toLowerCase(),String(e.finish||``).toLowerCase()].join(`	`);m.has(t)||(m.add(t),p.push({...e,_sourceOrder:p.length,confidence:He(e)}))}return{products:p,project:d,layoutAmbiguities:u,usage:f}}async matchRerank(e,t){try{return(await this._callProxy(`/v1/match-rerank`,{competitorProduct:e,candidates:t},3e4)).matches||[]}catch(e){return console.warn(`LLM rerank failed, using original ranking:`,e.message),null}}async extractFromSpec(e,t){let n=await this._callProxy(`/v1/extract-products`,{content:e,mimeType:t},18e4);return{products:(n.products||[]).map((e,t)=>({...e,_sourceOrder:t,confidence:He(e)})),layoutAmbiguities:n.layoutAmbiguities||[],usage:n.usage}}async computeLayoutFingerprint({project:e=null,products:t=[],headers:n=[]}={}){return Ue([n.map(K).filter(Boolean).sort().join(`|`),[...new Set(t.map(e=>K(e.section)).filter(Boolean))].slice(0,20).sort().join(`|`),t.slice(0,25).map(e=>[e.planCode?`plan`:``,e.code?`code`:``,e.specCode?`spec`:``,e.quantity?`qty`:``,e.finish?`finish`:``].filter(Boolean).join(`+`)).join(`|`),[K(e?.architect),K(e?.builder),K(e?.projectType)].filter(Boolean).join(`|`)].join(`
`))}async lookupTenderLayout(e){return(await this._callProxy(`/v1/tender-layouts/lookup`,{fingerprint:e},3e4)).mapping||null}async saveTenderLayout({fingerprint:e,mapping:t,sampleHeaders:n=[]}){return(await this._callProxy(`/v1/tender-layouts/save`,{fingerprint:e,mapping:t,sampleHeaders:n},3e4)).mapping||null}async flagTenderLayout({fingerprint:e,reason:t}){return this._callProxy(`/v1/tender-layouts/flag`,{fingerprint:e,reason:t},3e4)}async listTenderLayouts(){return this._callProxy(`/v1/tender-layouts/list`,{},3e4,{method:`GET`})}async crossReferenceProducts(e,t,n=null,r={}){let i=r.includeAlternatives===!0;if(z.isEnabled()){n?.({stage:`crosshair-preload-start`,processed:0,total:e.length,results:[]});try{await z.preload()}catch{}n?.({stage:`crosshair-preload-complete`,processed:0,total:e.length,results:[]})}let a=[];for(let r=0;r<e.length;r++){let o=e[r];n?.({stage:`product-start`,processed:r,total:e.length,product:o,results:a.slice()});let s={...o,status:`unmatched`,seimaMatches:[],seimaProduct:null},c=(o.brand||``).toLowerCase();if(c===`seima`||c===`siema`){let r=null;if(o.code&&t&&(r=t.findProductByCode(o.code)),!r&&t&&o.name){let e=t.searchProducts(o.name,5);e.length>0&&(r=e[0])}if(!r&&t&&o.code){let e=t.searchProducts(o.code,3);e.length>0&&(r=e[0])}if(r){s.status=`seima-own`,s.seimaProduct=r,a.push(s),n?.({stage:`product-complete`,processed:a.length,total:e.length,product:o,result:s,results:a.slice()});continue}}if(o.code&&z.isEnabled())try{let r=await z.findSeimaMatches(o.code);if(r){let i=r.matches.map(e=>e.SeimaSKU);s.status=`verified`,s.seimaMatches=r.matches,t&&i.length>0&&(s.seimaProduct=t.findProductByCode(i[0])),a.push(s),n?.({stage:`product-complete`,processed:a.length,total:e.length,product:o,result:s,results:a.slice()});continue}}catch(e){console.debug(`[ai-service] crosshair lookup failed for`,o.code,e)}if(i&&z.isEnabled()){let r=o.brand&&o.code?`${o.brand} ${o.code}`.trim():``,i=[o.code,o.name,o.brand].filter(Boolean).join(` `),c=r&&r!==i?[r,i]:[i],l=[];for(let e of c)if(!(!e||e.length<2)){try{l=await z.findAlternatives(e,3)}catch(t){console.debug(`[ai-service] findAlternatives failed for query`,e,t),l=[]}if(l.length>0)break}if(l.length>0){s.status=`alternative`,s.seimaMatches=l.map(e=>e.match),t&&(s.seimaProduct=t.findProductByCode(l[0].seimaSKU)),a.push(s),n?.({stage:`product-complete`,processed:a.length,total:e.length,product:o,result:s,results:a.slice()});continue}}if(t){let e=this._findCatalogSuggestions(o,t,3);e.length>0&&(s.status=`catalog-suggestion`,s.seimaProduct=e[0],s.catalogSuggestions=e)}a.push(s),n?.({stage:`product-complete`,processed:a.length,total:e.length,product:o,result:s,results:a.slice()})}return a}_findCatalogSuggestions(e,t,n=3){let r=this._buildCatalogSuggestionQueries(e),i=new Map;for(let e of r){for(let n of t.searchProducts(e,12)){let e=n.OrderCode||n[`Order Code`];e&&!i.has(e)&&i.set(e,n)}if(typeof t.searchProductsFuzzy==`function`)for(let n of t.searchProductsFuzzy(e,8)){let e=n.OrderCode||n[`Order Code`];e&&!i.has(e)&&i.set(e,n)}}return[...i.values()].map(t=>({candidate:t,score:this._scoreTenderCatalogCandidate(e,t)})).filter(e=>e.score>0).sort((e,t)=>t.score-e.score).slice(0,n).map(e=>e.candidate)}_buildCatalogSuggestionQueries(e){let t=e.name||e.category||``,n=this._normaliseTenderProductPhrase(t),r=e.finish||``,i=e.brand||``,a=[[i,n,r],[n,r],[i,t,r],[t,r],[e.category,r],...this._expandTenderPhraseWithSynonyms(n).map(e=>[i,e,r])].map(e=>e.filter(Boolean).join(` `).trim()).filter(e=>e.length>=2);return[...new Set(a)]}_normaliseTenderProductPhrase(e){let t=String(e||``).toLowerCase().replace(/\bpull[\s-]?out\b/g,`pull down`).replace(/\bpullout\b/g,`pull down`).replace(/\bmixer\s+sink\b/g,`sink mixer`).replace(/\bmixer\s+basin\b/g,`basin mixer`).replace(/\bholder\s+toilet\s+paper\b/g,`toilet paper holder`).replace(/\bpaper\s+holder\s+toilet\b/g,`toilet paper holder`).replace(/\bholder\s+paper\s+toilet\b/g,`toilet paper holder`).replace(/\s+/g,` `).trim();return this._expandTenderPhraseWithSynonyms(t)[0]||t}_expandTenderPhraseWithSynonyms(e){let t=String(e||``).toLowerCase().replace(/\s+/g,` `).trim();if(!t)return[];let n=new Set([t]);for(let e of[`pull out`,`pull-out`,`pullout`,`pull down`,`pull-down`,`pulldown`,`sink mixer`,`mixer sink`,`basin mixer`,`mixer basin`,`toilet paper holder`,`paper holder toilet`,`holder toilet paper`])if(t.includes(e))for(let r of I(e))n.add(t.replaceAll(e,r.toLowerCase()));return t.split(/\s+/).filter(Boolean).forEach(e=>{I(e).forEach(r=>{r&&r!==e&&!r.includes(` `)&&n.add(t.replace(RegExp(`\\b${e.replace(/[.*+?^${}()|[\]\\]/g,`\\$&`)}\\b`,`g`),r.toLowerCase()))})}),[...n].map(e=>e.replace(/\s+/g,` `).trim()).filter(Boolean)}_tokeniseTenderPhrase(e){return this._normaliseTenderProductPhrase(e).replace(/[^a-z0-9]+/g,` `).split(/\s+/).filter(e=>e.length>=2&&![`and`,`with`,`for`,`the`,`qty`].includes(e))}_candidateSearchText(e){return[e.OrderCode,e.ProductName,e[`Product Name`],e.Description,e.Range,e.Group,e.SubGroup,e.Finish,e.Colour,e.Color,e.LongDescription,e[`Long Description`]].filter(Boolean).join(` `).toLowerCase()}_scoreTenderCatalogCandidate(e,t){let n=this._candidateSearchText(t),r=this._normaliseTenderProductPhrase(e.name||e.category||``),i=this._tokeniseTenderPhrase(r),a=new Set(i);i.forEach(e=>I(e).forEach(e=>{this._tokeniseTenderPhrase(e).forEach(e=>a.add(e))}));let o=0;for(let e of a)n.includes(e)&&(o+=10);let s=String(e.brand||``).toLowerCase().trim();s&&n.includes(s)&&(o+=25);let c=this._tokeniseTenderPhrase(e.finish||``);for(let e of c)n.includes(e)&&(o+=12);let l=r.includes(`sink mixer`)||i.includes(`sink`)&&i.includes(`mixer`),u=n.includes(`sink`)&&n.includes(`mixer`);l&&u&&(o+=45),l&&!u&&(o-=35);let d=r.includes(`pull down`),f=n.includes(`pull`)&&n.includes(`down`);d&&f&&(o+=35),d&&n.includes(`pull`)&&(o+=12);let p=r.includes(`basin mixer`)||i.includes(`basin`)&&i.includes(`mixer`),m=n.includes(`basin`)&&n.includes(`mixer`);return p&&m&&(o+=35),p&&!m&&(o-=25),o}async _callProxy(e,t,n=12e4,r={}){let i=new AbortController,o=setTimeout(()=>i.abort(),n),s=r.method||`POST`;try{let n=await fetch(`${G.PROXY_URL}${e}`,{method:s,headers:Be(),...s===`GET`?{}:{body:JSON.stringify(t)},signal:i.signal});if(!n.ok){a.handleUnauthorizedResponse?.(n,e);let t=await n.json().catch(()=>({}));throw Error(t.details||t.error||`Request failed (${n.status})`)}return n.json()}catch(e){throw e.name===`AbortError`?Error(`Request timed out. The file may be too large — try a shorter document or individual pages.`):e}finally{clearTimeout(o)}}async _callProxyStream(e,t,n,r=12e4){let i=new AbortController,o=setTimeout(()=>i.abort(),r);try{let r=await fetch(`${G.PROXY_URL}${e}`,{method:`POST`,headers:Be(),body:JSON.stringify(t),signal:i.signal});if(!r.ok){a.handleUnauthorizedResponse?.(r,`${e} (stream)`);let t=await r.json().catch(()=>({}));throw Error(t.details||t.error||`Request failed (${r.status})`)}let o=r.body.getReader(),s=new TextDecoder,c=``,l=``;for(;;){let{done:e,value:t}=await o.read();if(e)break;l+=s.decode(t,{stream:!0});let r=l.split(`
`);l=r.pop();for(let e of r){if(!e.startsWith(`data: `))continue;let t=e.slice(6);if(t!==`[DONE]`)try{let e=JSON.parse(t).choices?.[0]?.delta?.content;e&&(c+=e,n(e))}catch{}}}return c}catch(e){throw e.name===`AbortError`?Error(`Request timed out. The file may be too large — try a shorter document or individual pages.`):e}finally{clearTimeout(o)}}async _findRelevantProductsAI(e,t){if(!e||e.trim().length<2)return null;try{let n=await this._callProxy(`/v1/product-search`,{message:e,history:this.conversationHistory.slice(-6)},15e3);if(n.needsSync)return this._ensureCatalogSync(),this._findRelevantProductsFuse(e,t);if(n.products&&n.products.length>0){let t=this._rankProductsForFred(n.products,e).slice(0,G.MAX_CATALOG_RESULTS);return this._lastProductCodes=new Set(t.map(e=>e.OrderCode)),this._lastSearchMessage=e,{text:this._formatProducts(t),count:t.length}}}catch(e){console.warn(`Server-side product search failed, falling back to local Fuse.js:`,e.message)}return this._findRelevantProductsFuse(e,t)}async _findRelevantProductsFuse(e,t){if(!t||!t.products||t.products.length===0)return null;let n;try{n=(await this._callProxy(`/v1/generate-queries`,{messages:this.conversationHistory.slice(-6),currentMessage:e},1e4)).queries}catch{n=null}let r=new Map;if(n&&Array.isArray(n)&&n.length>0){for(let e of n)if(!(!e||typeof e!=`string`))for(let n of t.searchProductsFuzzy(e,25))n.OrderCode&&r.set(n.OrderCode,n)}else{let n=this._extractTerms(e.toLowerCase()),i=n.join(` `);if(i.length>=2)for(let e of t.searchProductsFuzzy(i,G.MAX_CATALOG_RESULTS))e.OrderCode&&r.set(e.OrderCode,e);for(let e of n)for(let n of t.searchProductsFuzzy(e,25))n.OrderCode&&r.set(n.OrderCode,n)}for(let n of t.searchProductsFuzzy(e,25))n.OrderCode&&r.set(n.OrderCode,n);this._lastProductCodes=new Set(r.keys()),this._lastSearchMessage=e;let i=this._rankProductsForFred([...r.values()],e).slice(0,G.MAX_CATALOG_RESULTS);return i.length===0?null:{text:this._formatProducts(i),count:i.length}}_checkCatalogFreshness(){this._callProxy(`/v1/catalog/status`,{},5e3).then(e=>{!e.synced||e.ageHours>24?(console.log(e.synced?`📦 Catalog embeddings are ${e.ageHours}h old — refreshing...`:`📦 No catalog embeddings found — syncing...`),this._ensureCatalogSync()):console.log(`✅ Catalog embeddings up to date (${e.count} products, ${e.ageHours}h old)`)}).catch(()=>{})}_ensureCatalogSync(){this._syncing||(this._syncing=!0,console.log(`🔄 Triggering catalog embedding sync...`),this._callProxy(`/v1/catalog/sync`,{},12e4).then(()=>console.log(`✅ Catalog embedding sync complete`)).catch(e=>console.warn(`⚠️ Catalog sync failed:`,e.message)).finally(()=>{this._syncing=!1}))}_detectSearchFailure(e,t){if(!this._lastProductCodes||!this._lastSearchMessage)return;let n=e.match(/\b(\d{6})\b/);if(!n)return;let r=n[1];if(this._lastProductCodes.has(r))return;let i=t?.findProductByCode?.(r);if(!i)return;let a=i.ProductName||i[`Product Name`]||i.Description||``;console.warn(`🔍 Search failure detected: "${this._lastSearchMessage}" missed product ${r} (${a})`),this._callProxy(`/v1/search-failures`,{originalQuery:this._lastSearchMessage,correctionCode:r,productName:a,timestamp:new Date().toISOString()},5e3).catch(()=>{})}_extractTerms(e){let t=new Set(`a.an.the.is.are.for.and.or.in.on.at.to.of.with.from.me.i.my.do.you.can.find.show.get.what.which.please.thanks.seima.want.need.looking.like.have.dont.any.some.got.something.interested.after.just.would.could.there.that.this.about.it.its.also.but.not.has.was.were.been.being.does.did.will.shall.should.may.might.must.how.much.many.very.really.tell.give.help.let.know.think.see`.split(`.`));return e.replace(/[^a-z0-9\s-]/g,` `).split(/\s+/).filter(e=>e.length>=2&&!t.has(e))}_deriveIntentProfile(e){let t=String(e||``).toLowerCase(),n=e=>e.some(e=>t.includes(e)),r=`browse`;n([`compare`,`difference`,`vs `,`versus`])?r=`compare`:n([`spec`,`compliance`,`wels`,`dimension`,`size`])?r=`spec-check`:n([`equivalent`,`alternative`,`replace`,`substitute`])?r=`substitute`:n([`package`,`bundle`,`full set`,`complete`])&&(r=`package`);let i=[];n([`matte black`,`brushed nickel`,`chrome`,`brushed brass`,`gun metal`,`white`])&&i.push(`finish/colour`),n([`budget`,`cheap`,`affordable`,`premium`,`price`])&&i.push(`budget`),n([`small`,`compact`,`large`,`dimension`,`mm`])&&i.push(`size/dimensions`),n([`bathroom`,`ensuite`,`kitchen`,`laundry`,`powder`])&&i.push(`room context`);let a=this._extractTerms(t),o=[],s=[];for(let e of a)[`basin`,`basins`,`tapware`,`toilet`,`bath`,`sink`,`waste`,`vanity`,`shower`,`accessory`,`accessories`].includes(e)&&o.push(e),[`above`,`counter`,`wall`,`hung`,`mixer`,`inset`,`undermount`,`floorstanding`,`rimless`].includes(e)&&s.push(e);return{intent:r,constraints:[...new Set(i)],categories:[...new Set(o)],groups:[...new Set(s)]}}_rankProductsForFred(e,t){let n=this._extractTerms(String(t||``).toLowerCase()),r=new Set(n),i=e.map((e,t)=>{let n=String(e.OrderCode||``).toLowerCase(),i=String(e.ProductName||e.Description||``).toLowerCase(),a=String(e.Description||``).toLowerCase(),o=String(e.SubGroup||e.Type||e[`Sub Group`]||``).toLowerCase(),s=String(e.Group||``).toLowerCase(),c=String(e.Range||``).toLowerCase(),l=String(e.Finish||``).toLowerCase(),u=String(e.Colour||``).toLowerCase(),d=0;for(let e of r)e&&(n===e?d+=120:n.includes(e)&&(d+=75),o===e?d+=45:o.includes(e)&&(d+=32),s===e?d+=35:s.includes(e)&&(d+=24),i.includes(e)&&(d+=20),c.includes(e)&&(d+=14),(l.includes(e)||u.includes(e))&&(d+=12),a.includes(e)&&(d+=8));return{p:e,score:d,idx:t}});return i.sort((e,t)=>t.score-e.score||e.idx-t.idx),i.map(e=>e.p)}_formatProducts(e){return JSON.stringify(e.map(e=>{let t={OrderCode:e.OrderCode};e.ProductName&&(t.ProductName=e.ProductName),e.Description&&(t.Description=e.Description);let n=e[`Long Description`]||e.LongDescription;n&&(t.Detail=n),e.Range&&(t.Range=e.Range);let r=e.SubGroup||e.Type||e[`Sub Group`];r&&(t.Category=r),e.Group&&(t.Group=e.Group),r&&e.Group&&(t.Taxonomy=`${r} > ${e.Group}`),r&&!t.Taxonomy&&(t.Taxonomy=r);let i=e.DimX||e[`X Dimension (mm)`],a=e.DimY||e[`Y Dimension (mm)`],o=e.DimZ||e[`Z Dimension (mm)`];i&&i!==`0`&&(t.Dimensions=`${i}x${a||0}x${o||0}mm`);let s=e[`RRP INC GST`]||e.RRP_INCGST||e[`RRP EX GST`]||e.RRP_EXGST||e.RRP_EX;s&&(t.Price=`$${s}`),e.Finish&&(t.Finish=e.Finish),e.Colour&&(t.Colour=e.Colour);let c=e.WELS_STAR||e[`WELS Star`];return c&&(t.WELS=`${c} star`),t}))}async clearHistory(){this.conversationHistory=[],await this._saveHistory();try{let{del:e}=await R(async()=>{let{del:e}=await import(`./vendor-idb-BL1M7mAU.js`).then(e=>e.t);return{del:e}},__vite__mapDeps([0,1]));await e(H)}catch{}}async _saveHistory(){try{let{set:e}=await R(async()=>{let{set:e}=await import(`./vendor-idb-BL1M7mAU.js`).then(e=>e.t);return{set:e}},__vite__mapDeps([0,1]));await e(Ie,this.conversationHistory)}catch{}}async _loadHistory(){try{localStorage.removeItem(Ie);let{get:e}=await R(async()=>{let{get:e}=await import(`./vendor-idb-BL1M7mAU.js`).then(e=>e.t);return{get:e}},__vite__mapDeps([0,1])),t=await e(Ie);if(!Array.isArray(t))return;this.conversationHistory=t.slice(-16)}catch{}}get processing(){return this.isProcessing}},Ge=[{key:`planCode`,label:`Plan Ref`},{key:`code`,label:`Supplier Code`},{key:`name`,label:`Product Name`},{key:`quantity`,label:`Quantity`},{key:`finish`,label:`Finish`},{key:`section`,label:`Room / Section`},{key:`brand`,label:`Brand`},{key:`notes`,label:`Notes`}],Ke=[``,`planCode`,`code`,`specCode`,`name`,`brand`,`category`,`quantity`,`finish`,`section`,`style`,`tier`];function J(e){return String(e??``).replace(/[&<>"']/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`})[e])}function qe(e){return[e.planCode?`Ref ${e.planCode}`:``,e.code?`SKU ${e.code}`:``,e.brand||``,e.name||e.category||``,e.quantity?`Qty ${e.quantity}`:``,e.finish||``].filter(Boolean).join(` · `)}var Je=new class{async open({products:e=[],ambiguities:t=[],suggestedMapping:n=null,sourceFields:r=Ke,targetFields:i=Ge,allowRemember:a=!0,rememberDefault:o=!1}={}){return new Promise(s=>{let c=document.createElement(`div`);c.className=`lmw-overlay`;let l=n||{planCode:`planCode`,code:`code`,name:`name`,quantity:`quantity`,finish:`finish`,section:`section`,brand:`brand`,notes:``};c.innerHTML=`
        <div class="lmw-modal" role="dialog" aria-modal="true" aria-label="Layout mapping wizard">
          <div class="lmw-header">
            <div>
              <h3>Review Tender Layout Mapping</h3>
              <p>Confirm which extracted fields should populate Presenter fields before importing.</p>
            </div>
            <button type="button" class="lmw-close" aria-label="Close">×</button>
          </div>
          <div class="lmw-body">
            <div class="lmw-panel">
              <h4>Detected Rows</h4>
              <div class="lmw-sample-list"></div>
            </div>
            <div class="lmw-panel">
              <h4>Presenter Field Mapping</h4>
              <div class="lmw-ambiguities"></div>
              <div class="lmw-fields">
                ${i.map(e=>`
                  <label class="lmw-field-row">
                    <span>${J(e.label)}</span>
                    <select data-target="${J(e.key)}">
                      ${r.map(t=>`<option value="${J(t)}"${l[e.key]===t?` selected`:``}>${t?J(t):`Do not map`}</option>`).join(``)}
                    </select>
                  </label>
                `).join(``)}
              </div>
              ${a?`
                <label class="lmw-remember">
                  <input type="checkbox" class="lmw-remember-check"${o?` checked`:``}>
                  <span>Remember this layout for the team</span>
                </label>
                <p class="lmw-remember-note">Only the field mapping and layout fingerprint are saved. Tender text and project/customer details are not stored.</p>
              `:``}
            </div>
          </div>
          <div class="lmw-actions">
            <button type="button" class="secondary-btn lmw-skip">Skip Review</button>
            <button type="button" class="primary-btn lmw-apply">Apply Mapping</button>
          </div>
        </div>
      `;let u=c.querySelector(`.lmw-sample-list`),d=e.slice(0,20);if(d.length===0){let e=document.createElement(`p`);e.className=`lmw-muted`,e.textContent=`No sample rows were returned.`,u.appendChild(e)}else d.forEach((e,t)=>{let n=document.createElement(`div`);n.className=`lmw-sample-item`;let r=document.createElement(`strong`);r.textContent=`Row ${t+1}`;let i=document.createElement(`span`);i.textContent=qe(e),n.append(r,i),u.appendChild(n)});let f=c.querySelector(`.lmw-ambiguities`);t.length>0&&t.slice(0,5).forEach(e=>{let t=document.createElement(`div`);t.className=`lmw-ambiguity`,t.textContent=[e.field,e.reason].filter(Boolean).join(`: `),f.appendChild(t)});let p=e=>{c.remove(),s(e)};c.querySelector(`.lmw-close`).addEventListener(`click`,()=>p(null)),c.querySelector(`.lmw-skip`).addEventListener(`click`,()=>p(null)),c.querySelector(`.lmw-apply`).addEventListener(`click`,()=>{let e={};c.querySelectorAll(`select[data-target]`).forEach(t=>{e[t.dataset.target]=t.value}),p({mapping:e,remember:!!c.querySelector(`.lmw-remember-check`)?.checked})}),document.body.appendChild(c)})}},Ye=class{constructor(){this.selectedFile=null,this.importMode=`append`,this.processedData=[],this.notFoundProducts=[],this.importedMetadata=null,this._specResults=null,this._projectMeta=null,this._layoutAmbiguities=[],this._layoutFingerprint=null,this._learnedLayout=null,this._rawExtractionProducts=[],this._currentLayoutMapping=this._defaultLayoutMapping()}init(){this.setupEventHandlers(),this._showTenderImportBanner(),console.log(`FileImportManager initialized`)}setupEventHandlers(){let e=document.getElementById(`import-file-btn`);e&&(e.onclick=()=>this.showImportModal());let t=document.getElementById(`file-drop-zone`),n=document.getElementById(`file-input`);t&&n&&(t.onclick=()=>n.click(),t.ondragover=e=>{e.preventDefault(),t.style.borderColor=`#059669`,t.style.background=`#f0fdf4`},t.ondragleave=e=>{e.preventDefault(),t.style.borderColor=`#ccc`,t.style.background=`#fafafa`},t.ondrop=e=>{e.preventDefault(),t.style.borderColor=`#ccc`,t.style.background=`#fafafa`;let n=e.dataTransfer.files;n.length>0&&this.handleFileSelection(n[0])},n.onchange=e=>{e.target.files.length>0&&this.handleFileSelection(e.target.files[0])});let r=document.getElementById(`import-cancel-btn`),i=document.getElementById(`import-next-btn`),a=document.getElementById(`import-back-btn`),o=document.getElementById(`import-process-btn`),s=document.getElementById(`import-close-btn`);r&&(r.onclick=()=>this.closeModal()),i&&(i.onclick=()=>this.showImportModeStep()),a&&(a.onclick=()=>this.showFileSelectionStep()),o&&(o.onclick=()=>this.processImport()),s&&(s.onclick=()=>this.closeModal()),document.querySelectorAll(`input[name="import-mode"]`).forEach(e=>{e.onchange=()=>{this.importMode=e.value;let t=document.getElementById(`override-warning`);t&&(t.style.display=this.importMode===`override`?`block`:`none`)}})}showImportModal(){if(!a.isPowerUser()){alert(`File import requires a Power User account. Please contact your administrator to upgrade your access.`);return}let e=document.getElementById(`file-import-modal`);e&&(e.style.display=`flex`,this.resetModal())}closeModal(){let e=document.getElementById(`file-import-modal`);e&&(e.style.display=`none`,this.resetModal())}resetModal(){this.selectedFile=null,this.importMode=`append`,this.processedData=[],this.notFoundProducts=[],this._specResults=null,this._projectMeta=null,this._layoutAmbiguities=[],this._layoutFingerprint=null,this._learnedLayout=null,this._rawExtractionProducts=[],this._currentLayoutMapping=this._defaultLayoutMapping();let e=document.querySelector(`#file-import-modal .modal-content`);e&&(e.classList.add(`modal-wide`),e.classList.remove(`modal-fullscreen`)),this.showFileSelectionStep();let t=document.getElementById(`file-input`);t&&(t.value=``);let n=document.getElementById(`selected-file-info`);n&&(n.style.display=`none`);let r=document.getElementById(`import-next-btn`);r&&(r.disabled=!0);let i=document.querySelector(`input[name="import-mode"][value="append"]`);i&&(i.checked=!0);let a=document.getElementById(`override-warning`);a&&(a.style.display=`none`)}showFileSelectionStep(){this.hideAllSteps();let e=document.getElementById(`file-selection-step`);e&&(e.style.display=`block`)}showImportModeStep(){this.hideAllSteps();let e=document.getElementById(`import-mode-step`);e&&(e.style.display=`block`)}showProcessingStep(){this.hideAllSteps();let e=document.getElementById(`import-processing-step`);e&&(e.style.display=`block`)}showResultsStep(){this.hideAllSteps();let e=document.getElementById(`import-results-step`);e&&(e.style.display=`block`)}showSpecResultsStep(){this.hideAllSteps();let e=document.getElementById(`import-spec-results-step`);e&&(e.style.display=`flex`);let t=document.querySelector(`#file-import-modal .modal-content`);t&&(t.classList.remove(`modal-wide`),t.classList.add(`modal-fullscreen`))}hideAllSteps(){[`file-selection-step`,`import-mode-step`,`import-processing-step`,`import-results-step`,`import-spec-results-step`].forEach(e=>{let t=document.getElementById(e);t&&(t.style.display=`none`)})}handleFileSelection(e){console.log(`File selected:`,e.name,e.type,e.size);let t=A.get(`import.acceptedTypes`,[`.csv`,`.xlsx`,`.xls`,`.json`,`.pdf`,`.jpg`,`.jpeg`,`.png`]),n=[`text/csv`,`application/vnd.ms-excel`,`application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`,`application/json`,`application/pdf`,`image/jpeg`,`image/png`],r=e.name.toLowerCase(),i=t.some(e=>r.endsWith(e.toLowerCase())),a=A.get(`import.maxFileSize`,15*1024*1024),o=r.endsWith(`.pdf`)?Math.max(a,50*1024*1024):a;if(e.size>o){let e=Math.round(o/(1024*1024));alert(`File is too large. Maximum size is ${e}MB.`);return}if(!n.includes(e.type)&&!i){alert(`Please select a valid file. Accepted formats: ${t.join(`, `)}`);return}this.selectedFile=e;let s=document.getElementById(`selected-file-info`),c=document.getElementById(`selected-file-name`),l=document.getElementById(`import-next-btn`);s&&c&&l&&(c.textContent=e.name,s.style.display=`block`,l.disabled=!1)}async processImport(){if(!this.selectedFile){alert(`No file selected`);return}console.log(`Starting import process with mode:`,this.importMode),this.showProcessingStep();try{let e=this.selectedFile.name.toLowerCase();if(this._isSpecFile(e)){await this._processSpecFile();return}let t;if(e.endsWith(`.csv`))t=await this.parseCSV(this.selectedFile);else if(e.endsWith(`.json`))t=await this.parseJSON(this.selectedFile);else if(e.endsWith(`.xlsx`)||e.endsWith(`.xls`))t=await this.parseExcel(this.selectedFile);else throw Error(`Unsupported file format`);console.log(`Parsed data:`,t),this.importMode===`override`&&(M.clearAllSelections(),console.log(`Cleared all existing data for override mode`)),await this.processDataChunked(t),this.showImportResults()}catch(e){console.error(`Import failed:`,e),alert(`Import failed: ${e.message}`),this.showFileSelectionStep()}}_isSpecFile(e){return/\.(pdf|jpg|jpeg|png)$/.test(e)}async _processSpecFile(){let e=document.querySelector(`#import-processing-step p`),t=Math.round(this.selectedFile.size/1024);try{let n,r=this.selectedFile.type===`application/pdf`||this.selectedFile.name.toLowerCase().endsWith(`.pdf`);if(r){e&&(e.innerHTML=`Reading PDF...<br><small style="color:#888">${this._escapeHtml(this.selectedFile.name)} (${t}KB)</small>`);let r=await this._extractPdfText(this.selectedFile);if(r&&r.length>100){let t={pdfTextLength:r.length,products:[],startedAt:Date.now(),status:`Starting tender analysis...`};e&&this._renderTenderAnalysisProgress(e,t);let i=e?setInterval(()=>this._renderTenderAnalysisProgress(e,t),5e3):null;try{n=await q.extractFromTender(r,(n,r,i={})=>{i.productsSoFar&&(t.products=i.productsSoFar);let a=r>1?`part ${n+1} of ${r}`:`document`;t.status=i.stage===`chunk-complete`?`Finished analysing ${a}`:`Analysing specification text (${a})...`,t.chunkIndex=n,t.totalChunks=r,e&&this._renderTenderAnalysisProgress(e,t)})}finally{i&&clearInterval(i)}}else{let t=this.selectedFile;if(this.selectedFile.size>5*1024*1024){e&&(e.innerHTML=`Compressing PDF for analysis...<br><small style="color:#888">Reducing ${(this.selectedFile.size/(1024*1024)).toFixed(1)}MB file for faster processing</small>`);try{if(t=await this._compressPdf(this.selectedFile,(t,n)=>{e&&(e.innerHTML=`Compressing PDF (page ${t} of ${n})...<br><small style="color:#888">Reducing file size for vision analysis</small>`)}),t!==this.selectedFile){let e=(this.selectedFile.size/(1024*1024)).toFixed(1),n=(t.size/(1024*1024)).toFixed(1);console.log(`Using compressed PDF: ${e}MB → ${n}MB`)}}catch(e){console.warn(`PDF compression failed, using original:`,e),t=this.selectedFile}}e&&(e.innerHTML=`Analysing PDF with vision AI...<br><small style="color:#888">Image-based PDF — this may take 1-2 minutes</small>`);let r=await this._fileToBase64(t);n=await q.extractFromSpec(r,`application/pdf`)}}else{e&&(e.innerHTML=`Analysing image...<br><small style="color:#888">${this._escapeHtml(this.selectedFile.name)} (${t}KB)</small>`);let r=await this._fileToBase64(this.selectedFile),i=this._normaliseSpecMimeType(this.selectedFile.type,this.selectedFile.name);n=await q.extractFromSpec(r,i)}if(!n.products||n.products.length===0){alert(`No products were found in this file. Try a clearer image or a different page.`),this.showFileSelectionStep();return}this._projectMeta=n.project||null,this._rawExtractionProducts=(n.products||[]).map(e=>({...e})),this._currentLayoutMapping=this._defaultLayoutMapping(),this._layoutAmbiguities=Array.isArray(n.layoutAmbiguities)?n.layoutAmbiguities:[],this._layoutFingerprint=await q.computeLayoutFingerprint({project:this._projectMeta,products:n.products});try{this._learnedLayout=await q.lookupTenderLayout(this._layoutFingerprint)}catch(e){console.debug(`[file-import] tender layout lookup skipped:`,e.message),this._learnedLayout=null}if(this._learnedLayout?.mapping&&(this._currentLayoutMapping=this._normaliseLayoutMapping(this._learnedLayout.mapping),n.products=this._applyLayoutMapping(n.products,this._learnedLayout.mapping)),this._shouldReviewLayout(n.products,this._layoutAmbiguities,{isPDF:r})){let e=await Je.open({products:n.products,ambiguities:this._layoutAmbiguities,suggestedMapping:this._currentLayoutMapping,rememberDefault:!1});if(e?.mapping){let t=this._normaliseLayoutMapping(e.mapping);if(this._currentLayoutMapping=t,n.products=this._applyLayoutMapping(n.products,t),e.remember)try{await q.saveTenderLayout({fingerprint:this._layoutFingerprint,mapping:t,sampleHeaders:[]})}catch(e){console.debug(`[file-import] tender layout save skipped:`,e.message)}}}this._projectMeta&&this._applyTenderProjectMetaToPdfSettings(this._projectMeta);let i=n.products.map(e=>({...e,status:`extracted`,seimaMatches:[],seimaProduct:null}));this._specResults=i,this._showSpecResults(i)}catch(e){console.error(`Spec processing failed:`,e),alert(`Spec processing failed: ${e.message}`),this.showFileSelectionStep()}}_renderTenderAnalysisProgress(e,t){if(!e)return;let n=Array.isArray(t.products)?t.products:[],r=t.startedAt?Math.max(1,Math.round((Date.now()-t.startedAt)/1e3)):0,i=n.slice(-6).reverse(),a=i.length>0?`<div style="margin-top:10px;text-align:left;max-height:120px;overflow:auto;border-top:1px solid #eee;padding-top:8px;">
          <strong style="font-size:12px;color:#555">Products identified so far (${n.length})</strong>
          <ul style="margin:6px 0 0 18px;padding:0;font-size:12px;color:#666;line-height:1.35">
            ${i.map(e=>{let t=[e.planCode,e.brand,e.name||e.category,e.code].filter(Boolean).join(` - `);return`<li>${this._escapeHtml(t||`Unnamed product`)}</li>`}).join(``)}
          </ul>
        </div>`:`<div style="margin-top:10px;font-size:12px;color:#777">Waiting for the first structured product results from the AI service...</div>`,o=t.totalChunks>1?`<br><small style="color:#888">Chunk ${(t.chunkIndex||0)+1} of ${t.totalChunks}</small>`:``;e.innerHTML=`${this._escapeHtml(t.status||`Analysing specification text...`)}${o}<br><small style="color:#888">Extracted ${Number(t.pdfTextLength||0).toLocaleString()} characters from PDF${r?` · ${r}s elapsed`:``}</small>${a}`}_crossReferenceStatusText(e){return{"crosshair-preload-start":`Loading verified Crosshair match data...`,"crosshair-preload-complete":`Crosshair match data loaded. Checking products...`,"product-start":`Checking extracted products against Seima catalogue...`,"product-complete":`Checking extracted products against Seima catalogue...`}[e]||`Cross-referencing with Seima catalogue...`}_renderTenderCrossReferenceProgress(e,t){if(!e)return;let n=t.startedAt?Math.max(1,Math.round((Date.now()-t.startedAt)/1e3)):0,r=Array.isArray(t.results)?t.results:[],i=r.filter(e=>this._isAutoImportableSpecResult(e)).length,a=r.length-i,o=t.currentProduct?[t.currentProduct.planCode,t.currentProduct.brand,t.currentProduct.name||t.currentProduct.category,t.currentProduct.code].filter(Boolean).join(` - `):``,s=r.length>0?`<div style="margin-top:10px;text-align:left;max-height:120px;overflow:auto;border-top:1px solid #eee;padding-top:8px;">
          <strong style="font-size:12px;color:#555">Checked so far (${r.length}/${t.total||r.length})</strong>
          <ul style="margin:6px 0 0 18px;padding:0;font-size:12px;color:#666;line-height:1.35">
            ${r.slice(-6).reverse().map(e=>{let t=[e.planCode,e.brand,e.name||e.category,e.code].filter(Boolean).join(` - `);return`<li>${this._escapeHtml(t||`Unnamed product`)} <span style="color:#999">(${this._escapeHtml(e.status||`unmatched`)})</span></li>`}).join(``)}
          </ul>
        </div>`:``;e.innerHTML=`${this._escapeHtml(t.status||`Cross-referencing with Seima catalogue...`)}<br><small style="color:#888">${Number(t.processed||0).toLocaleString()} of ${Number(t.total||0).toLocaleString()} products checked · ${i} verified · ${a} review · ${n}s elapsed${o?` · ${this._escapeHtml(o)}`:``}</small>${s}`}async _extractPdfText(e){try{if(!window.pdfjsLib){let e=document.createElement(`script`);e.src=`https://cdn.jsdelivr.net/npm/pdfjs-dist@4.9.155/build/pdf.min.mjs`,e.type=`module`;let t=document.createElement(`script`);t.type=`module`,t.textContent=`
          import * as pdfjsLib from 'https://cdn.jsdelivr.net/npm/pdfjs-dist@4.9.155/build/pdf.min.mjs';
          pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdn.jsdelivr.net/npm/pdfjs-dist@4.9.155/build/pdf.worker.min.mjs';
          window.pdfjsLib = pdfjsLib;
          window.dispatchEvent(new Event('pdfjsReady'));
        `,document.head.appendChild(t),await new Promise((e,t)=>{let n=setTimeout(()=>t(Error(`PDF.js load timeout`)),15e3);window.addEventListener(`pdfjsReady`,()=>{clearTimeout(n),e()},{once:!0})})}let t=await e.arrayBuffer(),n=await window.pdfjsLib.getDocument({data:t}).promise,r=[];for(let e=1;e<=n.numPages;e++){let t=(await(await n.getPage(e)).getTextContent()).items.map(e=>e.str).join(` `);console.log(`  Page ${e}/${n.numPages}: ${t.trim().length} chars${t.trim().length===0?` (EMPTY — may be image-only)`:``}`),t.trim()&&r.push(t.trim())}r.length<n.numPages&&console.warn(`⚠️ ${n.numPages-r.length} page(s) had no extractable text (image-only pages)`);let i=r.join(`

--- Page Break ---

`);return console.log(`PDF text extraction: ${n.numPages} pages, ${r.length} with text, ${i.length} chars total`),i}catch(e){return console.warn(`PDF text extraction failed, will use vision API:`,e),null}}_fileToBase64(e){return new Promise((t,n)=>{let r=new FileReader;r.onload=()=>t(r.result.split(`,`)[1]),r.onerror=()=>n(Error(`Failed to read file`)),r.readAsDataURL(e)})}_normaliseSpecMimeType(e,t=``){let n=String(t||``).toLowerCase(),r=String(e||``).toLowerCase().split(`;`)[0].trim();return r===`image/jpg`||r===`image/pjpeg`||r.endsWith(`/jpg`)||n.endsWith(`.jpg`)||n.endsWith(`.jpeg`)?`image/jpeg`:r===`image/x-png`?`image/png`:r||`image/jpeg`}async _compressPdf(e,t){if(!window.pdfjsLib)throw Error(`PDF.js must be loaded before compression`);if(!window.jspdf){let e=document.createElement(`script`);e.src=`https://cdn.jsdelivr.net/npm/jspdf@2.5.2/dist/jspdf.umd.min.js`,document.head.appendChild(e),await new Promise((t,n)=>{e.onload=t,e.onerror=()=>n(Error(`Failed to load jsPDF`)),setTimeout(()=>n(Error(`jsPDF load timeout`)),1e4)})}let n=await e.arrayBuffer(),r=await window.pdfjsLib.getDocument({data:n}).promise,{jsPDF:i}=window.jspdf,a=null;for(let e=1;e<=r.numPages;e++){t&&t(e,r.numPages);let n=await r.getPage(e),o=n.getViewport({scale:1.5}),s=document.createElement(`canvas`);s.width=o.width,s.height=o.height;let c=s.getContext(`2d`);await n.render({canvasContext:c,viewport:o}).promise;let l=s.toDataURL(`image/jpeg`,.65),u=o.width>o.height?`landscape`:`portrait`;e===1?a=new i({orientation:u,unit:`px`,format:[o.width,o.height]}):a.addPage([o.width,o.height],u),a.addImage(l,`JPEG`,0,0,o.width,o.height),s.width=0,s.height=0}let o=a.output(`blob`),s=new File([o],e.name,{type:`application/pdf`}),c=Math.round((1-s.size/e.size)*100);return console.log(`PDF compressed: ${(e.size/(1024*1024)).toFixed(1)}MB → ${(s.size/(1024*1024)).toFixed(1)}MB (${c}% reduction)`),s.size<e.size*.9?s:(console.log(`Compression did not significantly reduce size, using original`),e)}_showSpecResults(e){let t=e.filter(e=>this._isAutoImportableSpecResult(e)),n=e.filter(e=>!this._isAutoImportableSpecResult(e)),r=[...new Set(e.map(e=>e.section).filter(Boolean))],i=document.getElementById(`spec-results-content`);if(!i)return;let a=``;if(this._projectMeta){let e=this._projectMeta;if([e.name,e.description,e.architect,e.builder,e.location].filter(Boolean).length>0){let t=e.description?`<div style="margin-top:4px;color:#444;font-size:13px">${this._escapeHtml(e.description)}</div>`:``,n=[e.architect?`Architect: ${this._escapeHtml(e.architect)}`:``,e.builder?`Builder: ${this._escapeHtml(e.builder)}`:``,e.location?`Location: ${this._escapeHtml(e.location)}`:``].filter(Boolean).join(` · `);a=`<div class="spec-project-meta" style="margin-bottom:12px;padding:8px 12px;background:#f0f9ff;border-radius:6px;border:1px solid #bae6fd;">
          ${e.name?`<strong style="font-size:14px">${this._escapeHtml(e.name)}</strong>`:``}
          ${t}
          ${n?`<small style="display:block;margin-top:8px;color:#555">${n}</small>`:``}
        </div>`}}let o=e.filter(e=>e.orEquivalent===!0).length,s=e.filter(e=>this._hasLowConfidence(e)).length,c=this._layoutAmbiguities.length>0?`<div class="spec-ambiguity-box"><strong>Layout review recommended:</strong> ${this._escapeHtml(this._layoutAmbiguities.map(e=>e.reason||e.field).filter(Boolean).slice(0,3).join(` · `))}</div>`:``,l=this._learnedLayout?`<div class="spec-learned-layout"><strong>Recognised layout:</strong> A saved mapping was applied. Review the rows below before importing. <button type="button" id="spec-flag-layout-btn">This mapping was wrong</button></div>`:``,u=this._renderMappingSummary();i.innerHTML=`
      <h4 style="margin:0 0 12px">Specification Analysis — ${this._escapeHtml(this.selectedFile.name)}</h4>
      ${a}
      ${l}
      ${c}
      ${u}
      <div class="spec-summary-bar">
        <span class="spec-stat spec-stat-verified"><strong>${e.length}</strong> Products found</span>
        <span class="spec-stat spec-stat-alt"><strong>${t.length}</strong> Verified</span>
        <span class="spec-stat spec-stat-none"><strong>${n.length}</strong> To review in grid</span>
        ${s>0?`<span class="spec-stat spec-stat-review"><strong>${s}</strong> Review</span>`:``}
        ${r.length>1?`<span class="spec-stat"><strong>${r.length}</strong> Sections</span>`:``}
        ${o>0?`<span class="spec-stat" style="color:#b45309"><strong>${o}</strong> "Or equivalent"</span>`:``}
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
    `;let d=document.getElementById(`spec-add-all-btn`);d&&(d.style.display=``,d.textContent=`Import Selected to Grid (${e.length})`,d.disabled=e.length===0,d.onclick=()=>this._importSelectedToGrid());let f=document.getElementById(`spec-export-pdf-btn`);f&&(f.style.display=``,f.onclick=()=>this._exportSubstitutionPDF());let p=document.getElementById(`spec-done-btn`);p&&(p.onclick=()=>{this.closeModal(),window.location.reload()});let m=i.querySelector(`#spec-select-all`);m&&m.addEventListener(`change`,()=>{i.querySelectorAll(`.spec-row-check`).forEach(e=>{e.checked=m.checked}),this._updateImportCount()}),i.addEventListener(`change`,e=>{e.target.classList.contains(`spec-row-check`)&&this._updateImportCount()});let h=i.querySelector(`#spec-flag-layout-btn`);h&&h.addEventListener(`click`,async()=>{try{await q.flagTenderLayout({fingerprint:this._layoutFingerprint,reason:`User reported a learned tender layout mapping as wrong from Spec Results.`}),h.textContent=`Reported`,h.disabled=!0}catch(e){alert(`Could not report mapping: ${e.message}`)}});let g=i.querySelector(`#spec-edit-mapping-btn`);g&&g.addEventListener(`click`,()=>this._reviewCurrentSpecMapping()),this.showSpecResultsStep()}_renderSpecRows(e){let t=``,n=null;for(let r=0;r<e.length;r++){let i=e[r];i.section&&i.section!==n&&(n=i.section,t+=`<tr class="spec-section-header"><td colspan="4">${this._escapeHtml(i.section)}</td></tr>`),t+=this._renderSpecRow(i,r)}return t}_renderSpecRow(e,t){let n=e.planCode||e.specCode||``,r=n?`<strong>${this._escapeHtml(n)}</strong> `:``,i=e.name||e.category||``,a=e.brand||``,o=e.code||``,s=e.style||``,c=e.finish||``,l={"seima-own":`<span class="spec-badge spec-badge-seima">Seima Product</span>`,verified:`<span class="spec-badge spec-badge-verified">Verified Match</span>`,alternative:`<span class="spec-badge spec-badge-alt">Alternative</span>`,"catalog-suggestion":`<span class="spec-badge spec-badge-suggest">Suggestion</span>`,"ai-suggested":`<span class="spec-badge spec-badge-ai">AI Suggested</span>`,extracted:`<span class="spec-badge spec-badge-ai">Extracted</span>`,unmatched:`<span class="spec-badge spec-badge-none">No Match</span>`},u=``;if(e.status===`seima-own`&&e.seimaProduct){let t=e.seimaProduct;u=`<strong>${this._escapeHtml(t.OrderCode||t[`Order Code`]||``)}</strong>
        <br><small>${this._escapeHtml(t.Description||t.ProductName||``)}</small>`}else if([`verified`,`alternative`].includes(e.status)&&e.seimaMatches?.length>0){let t=e.seimaMatches[0].SeimaSKU||``,n=e.seimaProduct?.Description||e.seimaProduct?.ProductName||``;u=`<strong>${this._escapeHtml(t)}</strong>`,n&&(u+=`<br><small>${this._escapeHtml(n)}</small>`)}else if(e.status===`catalog-suggestion`&&e.seimaProduct){let t=e.seimaProduct;u=`<em>${this._escapeHtml(t.OrderCode||t[`Order Code`]||``)}</em>
        <br><small style="color:#737373">${this._escapeHtml(t.Description||t.ProductName||``)}</small>`}else u=`<span style="color:#aaa">—</span>`;let d=[a,s,o,c].filter(Boolean).map(e=>this._escapeHtml(e)),f=`spec-row spec-row-${e.status}`,p=e.orEquivalent?`<span style="display:inline-block;margin-top:2px;padding:1px 5px;font-size:10px;background:#fef3c7;color:#92400e;border-radius:3px;">or equivalent</span>`:``,m=e.tier?`<span style="display:inline-block;margin-top:2px;padding:1px 5px;font-size:10px;background:#e0e7ff;color:#3730a3;border-radius:3px;">${this._escapeHtml(e.tier)}</span>`:``,h=this._hasLowConfidence(e)?`<span class="spec-confidence-review" title="${this._escapeHtml(this._confidenceTitle(e))}">Review</span>`:``;return`
      <tr class="${f}" data-index="${t}">
        <td><input type="checkbox" class="spec-row-check" data-index="${t}" ${this._isSelectedByDefaultSpecResult(e)?`checked`:``}></td>
        <td>
          <div>${r}${this._escapeHtml(i)}</div>
          <small style="color:#737373">${d.join(` · `)}</small>
          ${p||m||h?`<div style="display:flex;gap:4px;flex-wrap:wrap">${p}${m}${h}</div>`:``}
        </td>
        <td>${l[e.status]||``}</td>
        <td>${u}</td>
      </tr>
    `}_hasLowConfidence(e){let t=e?.confidence||{};return[`code`,`planCode`,`quantity`].some(e=>t[e]===`low`)}_isAutoImportableSpecResult(e){return[`seima-own`,`verified`].includes(e?.status)&&!!e?.seimaProduct}_isSelectedByDefaultSpecResult(e){return e?.status===`extracted`||this._isAutoImportableSpecResult(e)}_confidenceTitle(e){let t=e?.confidence||{};return[`code`,`planCode`,`quantity`,`finish`,`section`].filter(e=>t[e]===`low`).map(e=>`${e}: low confidence`).join(`; `)||`Low confidence extraction`}_defaultLayoutMapping(){return{planCode:`planCode`,code:`code`,name:`name`,quantity:`quantity`,finish:`finish`,section:`section`,brand:`brand`,notes:``}}_normaliseLayoutMapping(e){return{...this._defaultLayoutMapping(),...e||{}}}_renderMappingSummary(){let e=this._normaliseLayoutMapping(this._currentLayoutMapping);return`<div class="spec-mapping-summary">
      <div class="spec-mapping-summary-text">
        <strong>Field mapping</strong>
        <div>${Object.entries({planCode:`Plan Ref`,code:`Supplier Code`,name:`Product Name`,quantity:`Quantity`,finish:`Finish`,section:`Room / Section`}).map(([t,n])=>{let r=e[t]||`not mapped`;return`<span class="spec-mapping-chip"><strong>${this._escapeHtml(n)}</strong> ← ${this._escapeHtml(r)}</span>`}).join(``)}</div>
      </div>
      <button type="button" class="secondary-btn" id="spec-edit-mapping-btn">Review / Edit Mapping</button>
    </div>`}async _reviewCurrentSpecMapping(){let e=await Je.open({products:this._rawExtractionProducts.length>0?this._rawExtractionProducts:this._specResults||[],ambiguities:this._layoutAmbiguities,suggestedMapping:this._currentLayoutMapping,rememberDefault:!1});if(!e?.mapping)return;let t=this._normaliseLayoutMapping(e.mapping);this._currentLayoutMapping=t;let n=this._applyLayoutMapping(this._rawExtractionProducts.length>0?this._rawExtractionProducts:this._specResults,t),r=document.getElementById(`spec-add-all-btn`);r&&(r.disabled=!0,r.textContent=`Applying mapping...`);let i=n.map(e=>({...e,status:e.status||`extracted`,seimaMatches:e.seimaMatches||[],seimaProduct:e.seimaProduct||null}));if(this._specResults=i,e.remember)try{await q.saveTenderLayout({fingerprint:this._layoutFingerprint,mapping:t,sampleHeaders:[]})}catch(e){console.debug(`[file-import] tender layout save skipped:`,e.message)}this._showSpecResults(i)}_shouldReviewLayout(e,t,{isPDF:n=!1}={}){return Array.isArray(t)&&t.length>0?!0:!n||!Array.isArray(e)||e.length===0?!1:e.filter(e=>this._hasLowConfidence(e)).length/e.length>=.3}_applyLayoutMapping(e,t){return e.map(e=>{let n={...e};for(let r of[`planCode`,`code`,`name`,`quantity`,`finish`,`section`,`brand`]){let i=t[r];i&&Object.prototype.hasOwnProperty.call(e,i)&&(n[r]=e[i])}return t.notes&&Object.prototype.hasOwnProperty.call(e,t.notes)&&(n.notes=e[t.notes]),n})}_updateImportCount(){let e=document.querySelectorAll(`.spec-row-check:checked`).length,t=document.getElementById(`spec-add-all-btn`);t&&(t.textContent=`Import Selected to Grid (${e})`,t.disabled=e===0)}_importSelectedToGrid(){if(!this._specResults)return;let e=document.querySelectorAll(`.spec-row-check:checked`);this.importMode===`override`&&(M.clearAllSelections(),console.log(`Cleared all existing data for override mode (spec import)`));let t=new Set;e.forEach(e=>{let n=parseInt(e.dataset.index),r=this._specResults[n];r?.section&&t.add(r.section)}),t.forEach(e=>M.addCustomRoom(e));let n=[];e.forEach(e=>{let t=parseInt(e.dataset.index),r=this._specResults[t];if(!r)return;let i=this._buildSpecNote(r),a=r.section||`Imported`,o=r.planCode||r.specCode||``;if(this._isAutoImportableSpecResult(r)){let e=r.seimaProduct.OrderCode||r.seimaProduct[`Order Code`]||r.seimaMatches?.[0]?.SeimaSKU,t=P.findProductByCode(e);if(t){n.push({product:t,notes:i,room:a,quantity:r.quantity||1,planCode:o});return}}let s=i;if(r.seimaProduct&&r.status!==`seima-own`&&r.status!==`verified`){let e=r.seimaProduct.OrderCode||``,t=r.seimaProduct.ProductName||r.seimaProduct.Description||``;s+=` | SEIMA SUGGESTION: ${e} ${t}`}n.push({product:{OrderCode:``,Description:i,_placeholder:!0},notes:s,room:a,quantity:r.quantity||1,planCode:o})});let r=M.addProductsBatch(n),i=r?n.length:0;r||alert(`Could not save all products — browser storage is full.
Try clearing old selections or using a different browser.`);let a=this._specResults.filter(e=>this._isAutoImportableSpecResult(e)).length,o=this._specResults.length;try{sessionStorage.setItem(`tenderImportBanner`,JSON.stringify({fileName:this.selectedFile?.name||`Specification`,total:o,matched:a,unmatched:o-a,project:this._projectMeta?.name||null,projectDescription:this._projectMeta?.description||null,timestamp:Date.now()}))}catch{}let s=document.getElementById(`spec-add-all-btn`);s&&(s.textContent=`Imported ${i} item${i===1?``:`s`}`,s.disabled=!0),e.forEach(e=>{e.disabled=!0})}_buildSpecNote(e){let t=[];return e.specCode&&e.specCode!==e.planCode&&t.push(e.specCode),e.name&&t.push(e.name),e.brand&&t.push(e.brand),e.style&&t.push(e.style),e.code&&t.push(`Code: ${e.code}`),e.finish&&t.push(e.finish),e.brand&&e.code&&t.push(`Match: ${e.brand} ${e.code}`),t.join(` | `)}_applyTenderProjectMetaToPdfSettings(e){if(!e)return;let t=e.name==null?``:String(e.name).trim(),n=e.description==null?``:String(e.description).trim(),i=e.architect==null?``:String(e.architect).trim(),a=e.builder==null?``:String(e.builder).trim(),o=e.location==null?``:String(e.location).trim(),s=e.projectType==null?``:String(e.projectType).trim();if(!t&&!n&&!i&&!a&&!o&&!s)return;let c=[n,i?`Architect: ${i}`:``,a?`Builder: ${a}`:``,o?`Location: ${o}`:``,s?`Project type: ${s}`:``].filter(Boolean),l=r.getStorageItem(`pdfFormSettings`,{}),u={...l,...t?{project:t}:{},...o&&!l.address?{address:o}:{},...c.length>0?{projectNotes:c.join(`
`)}:{}};r.setStorageItem(`pdfFormSettings`,u)}_showTenderImportBanner(){try{let e=sessionStorage.getItem(`tenderImportBanner`);if(!e)return;sessionStorage.removeItem(`tenderImportBanner`);let t=JSON.parse(e);if(Date.now()-t.timestamp>3e4)return;let n=document.getElementById(`tender-import-banner`);if(!n)return;let r=t.project||t.fileName,i=t.projectDescription?`<span style="opacity:0.9"> — ${this._escapeHtml(t.projectDescription)}</span>`:``;n.innerHTML=`
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="flex-shrink:0">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
        </svg>
        <span>Tender: <strong>${this._escapeHtml(r)}</strong>${i} — ${t.matched} matched · ${t.unmatched} unmatched</span>
        <button class="tender-banner-close" title="Dismiss">✕</button>
      `,n.style.display=`flex`,n.querySelector(`.tender-banner-close`)?.addEventListener(`click`,()=>{n.style.display=`none`}),setTimeout(()=>{n.style.display=`none`},15e3)}catch{}}async _exportSubstitutionPDF(){if(!this._specResults||this._specResults.length===0)return;let e=document.getElementById(`spec-export-pdf-btn`);e&&(e.disabled=!0,e.textContent=`Generating PDF...`);try{if(!window.jspdf){let e=document.createElement(`script`);e.src=`https://cdn.jsdelivr.net/npm/jspdf@2.5.2/dist/jspdf.umd.min.js`,document.head.appendChild(e),await new Promise((t,n)=>{e.onload=t,e.onerror=()=>n(Error(`Failed to load jsPDF`)),setTimeout(()=>n(Error(`jsPDF load timeout`)),1e4)})}let{jsPDF:e}=window.jspdf,t=new e({orientation:`portrait`,unit:`mm`,format:`a4`}),n=15;t.setFontSize(24),t.setFont(void 0,`bold`),t.text(`Product Substitution Schedule`,15,n+30),t.setFontSize(14),t.setFont(void 0,`normal`);let r=this._projectMeta,i=n+45;r?.name&&(t.text(r.name,15,i),i+=7),r?.description&&(t.text(r.description,15,i),i+=7),r?.architect&&(t.text(`Architect: ${r.architect}`,15,i),i+=7),r?.builder&&(t.text(`Builder: ${r.builder}`,15,i),i+=7),r?.location&&(t.text(`Location: ${r.location}`,15,i),i+=7),t.setFontSize(11),t.text(`Date: ${new Date().toLocaleDateString(`en-AU`)}`,15,i+3);let a=this._specResults.filter(e=>e.status!==`unmatched`).length,o=this._specResults.length,s=o>0?Math.round(a/o*100):0;t.text(`Coverage: ${a} of ${o} products matched (${s}%)`,15,i+13),t.setFontSize(9),t.setTextColor(120),t.text(`Prepared by Seima Product Presenter`,15,280),t.setTextColor(0),t.addPage(),n=15,t.setFontSize(16),t.setFont(void 0,`bold`),t.text(`Substitution Table`,15,n),n+=10;let c=[18,50,22,50,25,15],l=[`Spec`,`Specified Product`,`Brand`,`Seima Substitute`,`Code`,`Conf`];t.setFontSize(8),t.setFont(void 0,`bold`),t.setFillColor(240,240,240),t.rect(15,n,180,7,`F`);let u=15;l.forEach((e,r)=>{t.text(e,u+1,n+5),u+=c[r]}),n+=8,t.setFont(void 0,`normal`),t.setFontSize(7);let d=null;for(let e of this._specResults)n>270&&(t.addPage(),n=15),e.section&&e.section!==d&&(d=e.section,t.setFont(void 0,`bold`),t.setFillColor(245,245,245),t.rect(15,n,180,6,`F`),t.text(e.section,16,n+4),t.setFont(void 0,`normal`),n+=7),e.status===`unmatched`?(t.setFillColor(255,240,240),t.rect(15,n,180,6,`F`)):e.status===`ai-suggested`&&(t.setFillColor(255,248,230),t.rect(15,n,180,6,`F`)),u=15,[e.specCode||``,`${e.name||``} ${e.finish?`(${e.finish})`:``}`.trim(),e.brand||``,e.seimaProduct?.ProductName||e.seimaProduct?.Description||`-`,e.seimaProduct?.OrderCode||`-`,e.status===`unmatched`?`-`:e.aiConfidence||`Yes`].forEach((e,r)=>{let i=t.splitTextToSize(String(e),c[r]-2);t.text(i[0]||``,u+1,n+4),u+=c[r]}),n+=7;let f=r?.name?`substitution-schedule-${r.name.replace(/[^a-z0-9]/gi,`-`).toLowerCase()}.pdf`:`substitution-schedule-${Date.now()}.pdf`;t.save(f)}catch(e){console.error(`PDF export failed:`,e),alert(`PDF export failed: ${e.message}`)}finally{e&&(e.disabled=!1,e.textContent=`Export Substitution PDF`)}}_escapeHtml(e){let t=document.createElement(`div`);return t.textContent=e||``,t.innerHTML}async parseCSV(e){if(typeof Papa>`u`)try{await r.loadScript(`https://cdn.jsdelivr.net/npm/papaparse@5.4.1/papaparse.min.js`)}catch{throw Error(`Failed to load Papa Parse library`)}return new Promise((t,n)=>{if(typeof Papa>`u`){n(Error(`Papa Parse library not loaded`));return}this.doPapaParseCSV(e,t,n)})}doPapaParseCSV(e,t,n){Papa.parse(e,{header:!0,skipEmptyLines:!1,complete:e=>{console.log(`CSV parsing complete:`,e);let{data:n,metadata:r}=this.extractSeimaMetadata(e.data);r&&(console.log(`Extracted Seima Scanner metadata from CSV:`,r),this.importedMetadata=r,this.populateCustomerInfoFromMetadata(r)),t(n)},error:e=>{console.error(`CSV parsing error:`,e),n(e)}})}extractSeimaMetadata(e){if(!Array.isArray(e)||e.length===0)return{data:e,metadata:null};let t=-1;for(let n=e.length-1;n>=0;n--){let r=e[n];if(Object.values(r).some(e=>e&&e.toString().includes(`---METADATA---`))){t=n;break}}if(t===-1)return{data:e.filter(e=>this.isValidProductRow(e)),metadata:null};let n=e.slice(0,t).filter(e=>this.isValidProductRow(e)),r=null;if(t+1<e.length){let n=e[t+1],i=Object.values(n).filter(e=>e!=null&&e!==``);for(let e of i)if(e&&typeof e==`string`&&e.startsWith(`{`))try{r=JSON.parse(e),console.log(`Successfully parsed Seima metadata JSON from single cell`);break}catch{console.log(`Single cell JSON parse failed, trying to reconstruct from split cells...`)}if(!r&&i.length>0){let e=i.findIndex(e=>e&&typeof e==`string`&&(e.startsWith(`{`)||e.startsWith(`"{`)));if(e!==-1){let t=i.slice(e).join(`,`);t=t.replace(/^"|"$/g,``);try{r=JSON.parse(t),console.log(`Successfully parsed Seima metadata JSON from reconstructed cells`)}catch(e){console.warn(`Failed to parse reconstructed metadata JSON:`,e),console.log(`Reconstructed string was:`,t);let n=t.match(/\{[^{}]*("_metadata"|"customer"|"project")[^]*\}/);if(n)try{r=JSON.parse(n[0]),console.log(`Successfully parsed Seima metadata JSON using regex extraction`)}catch(e){console.warn(`Regex extraction also failed:`,e)}}}}}return{data:n,metadata:r}}isValidProductRow(e){if(!e)return!1;let t=Object.values(e);return!(t.every(e=>!e||e.toString().trim()===``)||t.some(e=>e&&e.toString().includes(`---METADATA---`))||t.some(e=>e&&e.toString().startsWith(`{"_metadata"`)))}populateCustomerInfoFromMetadata(e){if(!e)return;let t=r.getStorageItem(`pdfFormSettings`,{}),n={...t,name:e.customer?.name||t.name||``,email:e.customer?.email||t.email||``,telephone:e.customer?.phone||t.telephone||``,project:e.project?.name||t.project||``,address:e.project?.address||t.address||``,projectNotes:e.project?.notes||t.projectNotes||``};e.staff&&r.setStorageItem(`staffContact`,{name:e.staff.name||``,email:e.staff.email||``,mobile:e.staff.mobile||``}),r.setStorageItem(`pdfFormSettings`,n),console.log(`Customer information populated from Seima CSV metadata:`,n)}async parseExcel(e){try{typeof XLSX>`u`&&await r.loadScript(`https://cdn.jsdelivr.net/npm/xlsx@0.18.5/dist/xlsx.full.min.js`)}catch{throw Error(`Failed to load XLSX library`)}return new Promise((t,n)=>{if(typeof XLSX>`u`){n(Error(`XLSX library not loaded`));return}let r=new FileReader;r.onload=e=>{try{let r=new Uint8Array(e.target.result),i=XLSX.read(r,{type:`array`}),a=i.SheetNames[0],o=i.Sheets[a],s=XLSX.utils.sheet_to_json(o,{header:1,defval:``});if(s.length===0){n(Error(`Excel file is empty`));return}let c=s[0],l=s.slice(1).map(e=>{let t={};return c.forEach((n,r)=>{t[n]=e[r]||``}),t});console.log(`Excel parsing complete:`,l);let{data:u,metadata:d}=this.extractSeimaMetadata(l);d&&(console.log(`Extracted Seima Scanner metadata from Excel:`,d),this.importedMetadata=d,this.populateCustomerInfoFromMetadata(d)),t(u)}catch(e){console.error(`Excel parsing error:`,e),n(e)}},r.onerror=()=>{n(Error(`Failed to read Excel file`))},r.readAsArrayBuffer(e)})}async parseJSON(e){return new Promise((t,n)=>{let r=new FileReader;r.onload=e=>{try{let r=JSON.parse(e.target.result);console.log(`JSON parsing complete, raw data:`,r);let i=[];if(Array.isArray(r))if(r.length>0&&r[0].productsJson)for(let e of r){let t=this.extractProductsFromRecord(e);i.push(...t)}else i=r;else r&&typeof r==`object`&&(i=this.extractProductsFromRecord(r));if(i.length===0){n(Error(`No products found in JSON file. Expected Seima Scanner export format.`));return}let a=i.map(e=>({Code:e.orderCode||e.OrderCode||e.code||e.Code||``,Description:e.description||e.Description||e.productName||e[`Product Name`]||``,Quantity:e.quantity||e.Quantity||1,Room:e.room||e.Room||`Blank`,Notes:e.notes||e.Notes||``,"Price ea inc GST":e.priceIncGst||e.PriceIncGst||e.price||e.Price||``,_originalItem:e}));console.log(`Normalized JSON data:`,a),t(a)}catch(e){console.error(`JSON parsing error:`,e),n(Error(`Invalid JSON format: `+e.message))}},r.onerror=()=>{n(Error(`Failed to read JSON file`))},r.readAsText(e)})}extractProductsFromRecord(e){let t=e.productsJson||e.products||[];if(typeof t==`string`)try{t=JSON.parse(t)}catch(e){return console.warn(`Failed to parse productsJson string:`,e),[]}return Array.isArray(t)?t:[]}async processDataChunked(e){if(e.length===0)throw Error(`No data to process`);let t=this.detectColumns(e[0]);if(console.log(`Detected column mapping:`,t),t.productsJson){console.log(`Detected Seima Scanner selection record format with Products JSON column`),await this.processSeimaSelectionRecords(e,t);return}if(t.productCode||await this._reviewSpreadsheetLayout(e,t),!t.productCode)throw Error(`Could not find Product Code column. Please use the layout mapping wizard to map a supplier/order code column.`);this.processedData=[],this.notFoundProducts=[];for(let n=0;n<e.length;n+=50){let r=e.slice(n,n+50);await this.processChunk(r,t),await new Promise(e=>setTimeout(e,10))}console.log(`Processing complete. Processed:`,this.processedData.length,`Not found:`,this.notFoundProducts.length)}async _reviewSpreadsheetLayout(e,t){let n=Object.keys(e[0]||{}),r=await q.computeLayoutFingerprint({headers:n}),i=null;try{i=await q.lookupTenderLayout(r)}catch(e){console.debug(`[file-import] spreadsheet layout lookup skipped:`,e.message)}let a=e=>{e&&(e.planCode&&(t.planCode=e.planCode),e.code&&(t.productCode=e.code),e.name&&(t.productName=e.name),e.quantity&&(t.quantity=e.quantity),e.finish&&(t.notes=t.notes||e.finish),e.section&&(t.room=e.section),e.notes&&(t.notes=e.notes))};if(i?.mapping){a(i.mapping);return}let o=await Je.open({products:e.slice(0,20).map(e=>({planCode:e[t.planCode]||``,code:e[t.productCode]||``,name:e[t.productName]||Object.values(e).filter(Boolean).slice(0,3).join(` `),quantity:e[t.quantity]||``,finish:``,section:e[t.room]||``})),ambiguities:[{field:`code`,reason:`Could not confidently identify the supplier/order code column.`}],suggestedMapping:{planCode:t.planCode||``,code:t.productCode||``,name:t.productName||``,quantity:t.quantity||``,finish:``,section:t.room||``,brand:``,notes:t.notes||``},sourceFields:[``,...n],rememberDefault:!1});if(o?.mapping){let e=o.mapping;if(a(e),o.remember)try{await q.saveTenderLayout({fingerprint:r,mapping:e,sampleHeaders:n})}catch(e){console.debug(`[file-import] spreadsheet layout save skipped:`,e.message)}}}async processSeimaSelectionRecords(e,t){this.processedData=[],this.notFoundProducts=[],this.importedMetadata=null;for(let n of e){this.importedMetadata||(this.importedMetadata=this.extractMetadataFromRow(n,t),console.log(`Extracted metadata from selection record:`,this.importedMetadata),this.populateCustomerInfo(this.importedMetadata));let e=n[t.productsJson];if(!e){console.log(`Skipping row - no Products JSON data`);continue}let r=[];try{typeof e==`string`?r=JSON.parse(e):Array.isArray(e)&&(r=e)}catch(t){console.warn(`Failed to parse Products JSON:`,t,e);continue}if(!Array.isArray(r)||r.length===0){console.log(`Skipping row - Products JSON is empty or invalid`);continue}console.log(`Processing ${r.length} products from selection record`);for(let e of r)await this.processSeimaProduct(e)}console.log(`Seima Scanner import complete. Processed:`,this.processedData.length,`Not found:`,this.notFoundProducts.length)}extractMetadataFromRow(e,t){return{customerName:e[t.customerName]||``,customerEmail:e[t.customerEmail]||``,customerPhone:e[t.customerPhone]||``,customerAddress:e[t.customerAddress]||``,customerProject:e[t.customerProject]||``,customerType:e[t.customerType]||``,builderName:e[t.builderName]||``,merchantProjectName:e[t.merchantProjectName]||``,projectNotes:e[t.projectNotes]||``,staffName:e[t.staffName]||``,staffEmail:e[t.staffEmail]||``,date:e[t.date]||``,time:e[t.time]||``,roomsList:e[t.roomsList]||``,estimateValue:e[t.estimateValue]||``}}async processSeimaProduct(e){let t=String(e.orderCode||e.OrderCode||e.code||``).trim(),n=e.description||e.Description||e.productName||``,r=parseInt(e.quantity||e.Quantity)||1,i=String(e.room||e.Room||`Blank`).trim(),a=String(e.notes||e.Notes||``).trim(),o=String(e.planCode||e.PlanCode||``).trim(),s=e.priceIncGst||e.PriceIncGst||e.price||``;i&&i!==`Blank`&&this.ensureRoomExists(i);let c=this.validateProductCode(t);if(!c.isValid){console.log(`Excluding product:`,t,`-`,c.reason);return}let l=0,u=0;if(s){let e=String(s).replace(/[^\d.-]/g,``);l=parseFloat(e)||0,u=l/1.1}console.log(`Processing Seima product:`,{productCode:t,productName:n,quantity:r,priceIncGst:l,room:i,notes:a});let d=await this.findProductInCatalog(t,n),f=this.createProductObject({productCode:t,productName:n,priceExGst:u,priceIncGst:l,catalogProduct:d});d||this.notFoundProducts.push({orderCode:t,productName:n||`Unknown Product`,quantity:r,price:l>0?l.toFixed(2):`N/A`}),M.addProductToSelection(f,{notes:a,room:i,quantity:r,planCode:o}),this.processedData.push({...f,quantity:r,notes:a,room:i,planCode:o})}detectColumns(e){let t=Object.keys(e);console.log(`Available headers:`,t);let n=A.get(`import.columnPatterns`,{planCode:[`plan code`,`plancode`,`plan ref`,`drawing code`,`schedule code`,`fixture id`,`item no`,`item number`,`tag`,`mark`,`plan`],productCode:[`order code`,`ordercode`,`product code`,`productcode`,`part number`,`model number`,`sku`,`code`,`model`],productName:[`product name`,`description`,`name`],quantity:[`quantity`,`qty`,`min order quantity`,`orderquantity`],priceIncGst:[`price ea inc gst`,`price inc gst`,`priceincgst`,`rrp inc gst`],priceExGst:[`price per unit`,`price ex gst`,`rrp ex gst`],room:[`room`,`location`],group:[`group`,`product group`,`category`],subGroup:[`subgroup`,`sub group`,`type`,`sub category`,`subcategory`],notes:[`notes`,`note`,`comments`,`comment`],productsJson:[`products json`,`productsjson`],customerName:[`customer name`,`customername`],customerEmail:[`customer email`,`customeremail`],customerPhone:[`customer phone`,`customerphone`],customerAddress:[`customer address`,`customeraddress`],customerProject:[`customer project`,`customerproject`]}),r=this.findColumnByPatterns(t,n.productsJson||[`products json`,`productsjson`]);if(r)return console.log(`Detected Seima Scanner selection record format with Products JSON column`),{productsJson:r,date:this.findColumnByPatterns(t,[`date`]),time:this.findColumnByPatterns(t,[`time`]),staffName:this.findColumnByPatterns(t,[`staff name`,`staffname`]),staffEmail:this.findColumnByPatterns(t,[`staff email`,`staffemail`]),customerName:this.findColumnByPatterns(t,n.customerName||[`customer name`,`customername`]),customerEmail:this.findColumnByPatterns(t,n.customerEmail||[`customer email`,`customeremail`]),customerPhone:this.findColumnByPatterns(t,n.customerPhone||[`customer phone`,`customerphone`]),customerAddress:this.findColumnByPatterns(t,n.customerAddress||[`customer address`,`customeraddress`]),customerProject:this.findColumnByPatterns(t,n.customerProject||[`customer project`,`customerproject`]),customerType:this.findColumnByPatterns(t,[`customer type`,`customertype`]),builderName:this.findColumnByPatterns(t,[`builder name`,`buildername`]),merchantProjectName:this.findColumnByPatterns(t,[`merchant project name`,`merchantprojectname`]),projectNotes:this.findColumnByPatterns(t,[`project notes`,`projectnotes`,`about notes`]),roomsList:this.findColumnByPatterns(t,[`rooms list`,`roomslist`,`rooms`]),estimateValue:this.findColumnByPatterns(t,[`estimate value`,`estimatevalue`])};let i=t.some(e=>e.toLowerCase()===`code`)&&!t.some(e=>e.toLowerCase().includes(`ordercode`));console.log(`Detected Seima Scanner CSV format:`,i);let a=this.findColumnByPatterns(t,n.priceIncGst||[`price ea inc gst`,`price inc gst`,`priceincgst`,`rrp inc gst`]),o=this.findColumnByPatterns(t,n.priceExGst||[`price per unit`,`price ex gst`,`rrp ex gst`]),s=this.findColumnByPatterns(t,[`adjusted amount`,`adjustedamount`]),c=this._detectColumnRoles(t,n);return(c.planCode||c.productCode)&&console.log(`Detected role columns:`,{planCode:c.planCode||null,productCode:c.productCode||null,productName:c.productName||null,quantity:c.quantity||null,room:c.room||null}),{planCode:c.planCode||null,productCode:c.productCode||null,productName:c.productName||null,quantity:c.quantity||null,price:a||o,adjustedAmount:s,room:c.room||null,group:c.group||null,subGroup:c.subGroup||null,notes:c.notes||null,priceIncludesGst:i||!!a||t.some(e=>e.toLowerCase().includes(`inc gst`))}}_tokeniseHeader(e){return e==null?[]:String(e).replace(/([a-z])([A-Z])/g,`$1 $2`).toLowerCase().replace(/[^a-z0-9]+/g,` `).trim().split(/\s+/).filter(Boolean)}_scoreHeaderForRole(e,t){if(!e||!t||t.length===0)return 0;let n=this._tokeniseHeader(e);if(n.length===0)return 0;let r=n.join(` `),i=0;for(let e of t){let t=this._tokeniseHeader(e);if(t.length===0||!t.every(e=>n.includes(e)))continue;let a=r===t.join(` `)?100:10*t.length;a>i&&(i=a)}return i}_detectColumnRoles(e,t){let n=[`planCode`,`productCode`,`productName`,`quantity`,`room`,`group`,`subGroup`,`notes`],r=Object.fromEntries(n.map((e,t)=>[e,t])),i=[];for(let r of n){let n=t[r];if(n)for(let t of e){let e=this._scoreHeaderForRole(t,n);e>0&&i.push({header:t,role:r,score:e})}}i.sort((e,t)=>t.score===e.score?r[e.role]-r[t.role]:t.score-e.score);let a={},o=new Set;for(let{header:e,role:t}of i)a[t]||o.has(e)||(a[t]=e,o.add(e));return a}findColumnByPatterns(e,t){for(let n of t){let t=e.find(e=>e.toLowerCase().includes(n.toLowerCase()));if(t)return t}return null}async processChunk(e,t){for(let n of e)await this.processRow(n,t)}async processRow(e,t){let n=t.productCode?e[t.productCode]:``,r=t.productName?e[t.productName]:``,i=t.quantity?e[t.quantity]:`1`,a=t.price?e[t.price]:``,o=t.planCode?String(e[t.planCode]||``).trim():``,s=t.room?String(e[t.room]||``).trim():``,c=t.group?String(e[t.group]||``).trim():``,l=t.subGroup?String(e[t.subGroup]||``).trim():``,u=t.notes?String(e[t.notes]||``).trim():``,d=String(n).trim(),f=this.validateProductCode(d);if(!f.isValid){console.log(`Excluding row:`,d,`-`,f.reason);return}let p=Math.max(1,parseInt(i)||1),m=0,h=0;if(t.adjustedAmount&&p>0){let n=e[t.adjustedAmount];h=(parseFloat(String(n).replace(/[^\d.-]/g,``))||0)/p,m=h*1.1}else if(a){let e=String(a).replace(/[^\d.-]/g,``),n=parseFloat(e)||0;n>0&&(t.priceIncludesGst?(m=n,h=n/1.1):(h=n,m=n*1.1))}let g=s||c||l||`Blank`;console.log(`Processing product:`,{productCode:d,productName:r,quantity:p,priceIncGst:m,room:g,group:c,subGroup:l,notes:u});let _=await this.findProductInCatalog(d,r);g&&g!==`Blank`&&this.ensureRoomExists(g);let v=this.createProductObject({productCode:d,productName:r,priceExGst:h,priceIncGst:m,catalogProduct:_,group:c,subGroup:l});_?console.log(`Found product in catalog:`,d):(console.log(`Product not found in catalog:`,d),this.notFoundProducts.push({orderCode:d,productName:r||`Unknown Product`,quantity:p,price:m>0?m.toFixed(2):`N/A`})),M.addProductToSelection(v,{notes:u,room:g,quantity:p,planCode:o}),this.processedData.push({...v,quantity:p,notes:u,room:g,planCode:o})}async findProductInCatalog(e,t){let n=P.getAllProducts();if(e){let t=String(e).trim(),r=n.find(e=>[e.OrderCode,e.orderCode,e[`Order Code`],e.order_code].some(e=>e&&String(e).trim().toLowerCase()===t.toLowerCase()));if(r)return console.log(`Found product in catalog by code:`,t,r),r}if(t){let e=String(t).trim().toLowerCase(),r=n.find(t=>[t.productName,t[`Product Name`],t.description,t.Description,t.LongDescription].some(t=>t&&String(t).trim().toLowerCase()===e));if(r)return console.log(`Found product in catalog by name:`,t,r),r}if(e&&z.isEnabled())try{let t=await z.findSeimaMatches(e);if(t?.matches?.length>0){let r=t.matches[0],i=n.find(e=>String(e.OrderCode||``).trim()===String(r.SeimaSKU).trim());if(i)return console.log(`Crosshair: mapped ${e} (${t.competitor}) -> ${r.SeimaSKU}`),i}}catch(t){console.warn(`Crosshair lookup failed for`,e,t)}return console.log(`Product not found in catalog:`,{productCode:e,productName:t}),null}showImportResults(){this.showResultsStep();let e=document.getElementById(`import-summary`),t=document.getElementById(`not-found-products`),n=document.getElementById(`not-found-list`);if(e&&(e.innerHTML=`
        <p><strong>Total processed:</strong> ${this.processedData.length}</p>
        <p><strong>Products added:</strong> ${this.processedData.length}</p>
        <p style="color: #059669;"><strong>All products imported successfully!</strong></p>
      `),t&&n)if(this.notFoundProducts.length>0){let e=t.querySelector(`h5`);e&&(e.textContent=`Products added with placeholder information:`,e.style.color=`#2563eb`),n.innerHTML=`<ul>${this.notFoundProducts.map(e=>`<li><strong>${this._escapeHtml(e.orderCode)}</strong> - ${this._escapeHtml(e.productName)} (Qty: ${this._escapeHtml(e.quantity)}, Price: ${this._escapeHtml(e.price)})</li>`).join(``)}</ul>`,t.style.display=`block`,t.style.borderColor=`#2563eb`,t.style.backgroundColor=`#eff6ff`}else t.style.display=`none`;let r=document.getElementById(`import-close-btn`);r&&this.processedData.length>0&&(r.textContent=`View Products`,r.onclick=()=>{window.location.reload()}),console.log(`Import results displayed`)}populateCustomerInfo(e){if(!e)return;let t=r.getStorageItem(`pdfFormSettings`,{}),n={...t,name:e.customerName||t.name||``,project:e.customerProject||t.project||``,address:e.customerAddress||t.address||``,email:e.customerEmail||t.email||``,telephone:e.customerPhone||t.telephone||``};r.setStorageItem(`pdfFormSettings`,n),console.log(`Customer information populated from import:`,n)}validateProductCode(e){let t=String(e||``).trim();if(!t||t.toLowerCase()===`n/a`)return{isValid:!1,reason:`Empty or N/A code`};let n=A.get(`import.productCodeValidation`,{regex:`^\\d{6}$`,allowAnyNonEmpty:!1,skipValidation:!1});if(n.skipValidation)return{isValid:!0,reason:`Validation skipped`};try{if(new RegExp(n.regex).test(t))return{isValid:!0,reason:`Matches pattern`}}catch(e){console.warn(`Invalid product code regex pattern:`,n.regex,e)}return n.allowAnyNonEmpty?{isValid:!0,reason:`Non-empty code accepted`}:{isValid:!1,reason:`Does not match pattern: ${n.regex}`}}createProductObject({productCode:e,productName:t,priceExGst:n,priceIncGst:r,catalogProduct:i,group:a=``,subGroup:o=``}){let s=n>0?n.toFixed(2):``,c=r>0?r.toFixed(2):``,l=i&&(i.RRP_EX||i.RRP_EXGST||i.rrpExGst||i[`RRP EX GST`])||``,u=i&&(i.RRP_INCGST||i.rrpIncGst||i[`RRP INC GST`])||``,d={OrderCode:e,orderCode:e,productName:t||(i?i.productName:`Unknown Product`),"Product Name":t||(i?i[`Product Name`]:`Unknown Product`),Description:t||(i?i.Description:`Unknown Product`),description:t||(i?i.description:`Unknown Product`),LongDescription:i?i.LongDescription||i[`Long Description`]:``,"Long Description":i?i.LongDescription||i[`Long Description`]:``,price:s||l||`0.00`,Image_URL:i?i.Image_URL||i.imageUrl:`assets/no-image.png`,imageUrl:i?i.Image_URL||i.imageUrl:`assets/no-image.png`,Website_URL:i?i.Website_URL||i.websiteUrl:``,websiteUrl:i?i.Website_URL||i.websiteUrl:``,Diagram_URL:i?i.Diagram_URL||i.diagramUrl:``,diagramUrl:i?i.Diagram_URL||i.diagramUrl:``,Datasheet_URL:i?i.Datasheet_URL||i.datasheetUrl:``,datasheetUrl:i?i.Datasheet_URL||i.datasheetUrl:``,RRP_EX:s||l||`0.00`,RRP_EXGST:s||l||`0.00`,rrpExGst:s||l||`0.00`,RRP_INCGST:c||u||`0.00`,rrpIncGst:c||u||`0.00`,Group:a||(i?i.Group:``),SubGroup:o||(i?i.SubGroup||i[`Sub Group`]:``),"Sub Group":o||(i?i.SubGroup||i[`Sub Group`]:``)};return n>0&&(d.UserEditedPrice=s),d}ensureRoomExists(e){!e||e===`Blank`||A.get(`rooms.predefined`,[]).some(t=>t.name===e)||M.getCustomRooms().some(t=>t.name===e)||(console.log(`Adding imported room as custom room:`,e),M.addCustomRoom(e))}},Y=new class{constructor(){this.isEnabled=L.PRESENTATION_RECORDING?.ENABLED||!0,this.googleSheetsUrl=L.PRESENTATION_RECORDING?.GOOGLE_SHEETS_URL||null,this.retryAttempts=L.PRESENTATION_RECORDING?.RETRY_ATTEMPTS||3,this.retryDelay=L.PRESENTATION_RECORDING?.RETRY_DELAY||1e3,this.currentSelectionId=null}configure(e){this.googleSheetsUrl=e,console.log(`📊 Presentation recorder configured with Google Sheets URL`)}getStaffContact(){let e=a.getCurrentUser();if(e&&e.email)return{name:e.name||``,email:e.email,mobile:e.phone||``};console.warn(`⚠️ No authenticated user, falling back to settings`);try{let e=localStorage.getItem(`staffContact`);if(e)return JSON.parse(e)}catch(e){console.warn(`Could not load staff contact:`,e)}return{name:``,email:``,mobile:``}}async saveSelection(e){if(!this.isEnabled||!this.googleSheetsUrl)return console.log(`📊 Presentation recording disabled or not configured`),{success:!1,reason:`not_configured`};try{let t=this.prepareSelectionData(e);t.action=`savePresenterSelection`;let n=await this.sendToGoogleSheets(t);if(console.log(`📊 Google Sheets response:`,n),n.success)return console.log(`✅ Presentation saved successfully with ID:`,n.id),this.currentSelectionId=n.id,{success:!0,id:n.id,data:t};throw Error(n.error||`Failed to save presentation`)}catch(e){return console.error(`❌ Failed to save presentation:`,e),{success:!1,error:e.message}}}async updateSelection(e,t){if(!this.isEnabled||!this.googleSheetsUrl)return console.log(`📊 Presentation recording disabled or not configured`),{success:!1,reason:`not_configured`};if(!e)return{success:!1,error:`No selection ID provided for update`};try{let n=this.prepareSelectionData(t);n.action=`updatePresenterSelection`,n.id=e;let r=await this.sendToGoogleSheets(n);if(r.success)return console.log(`✅ Presentation updated successfully:`,e),{success:!0,id:e,updated:!0};throw Error(r.error||`Failed to update presentation`)}catch(e){return console.error(`❌ Failed to update presentation:`,e),{success:!1,error:e.message}}}prepareSelectionData(e){let t=new Date,n=this.getStaffContact(),r=a.getCurrentUser(),i=e.gridRows||M.getSelectedProducts()||[],o=i.filter(e=>e.product).length,s=i.reduce((e,t)=>e+(parseInt(t.quantity)||1),0),c=[...new Set(i.map(e=>e.room).filter(Boolean))],l=this.calculateEstimatedValue(i),u=[];try{let e=localStorage.getItem(`customRoomOrder`);e&&(u=JSON.parse(e))}catch(e){console.warn(`Could not load room order:`,e)}let d=e.pdfSettings||{};return{date:t.toLocaleDateString(`en-AU`),time:t.toLocaleTimeString(`en-AU`,{hour:`2-digit`,minute:`2-digit`,hour12:!1}),appVersion:L.VERSION,loggedInAs:r?.email||``,sessionToken:a.getSessionToken()||``,staffName:n.name||e.staffName||``,staffEmail:n.email||e.staffEmail||``,staffMobile:this.formatPhoneNumber(n.mobile||e.staffMobile),customerName:e.customerName||``,customerEmail:e.customerEmail||``,customerPhone:this.formatPhoneNumber(e.customerPhone),customerProject:e.customerProject||``,customerAddress:e.customerAddress||``,documentName:e.documentName||`${e.customerName||`Selection`} - ${t.toLocaleDateString(`en-AU`)}`,notes:e.notes||``,productsJson:JSON.stringify(i.map(e=>({id:e.id,product:e.product?{OrderCode:e.product.OrderCode||``,Description:e.product.Description||``,RRP_INCGST:e.product.RRP_INCGST||`0.00`,RRP_EX:e.product.RRP_EX||`0.00`,Image_URL:e.product.Image_URL||``,Diagram_URL:e.product.Diagram_URL||``,Website_URL:e.product.Website_URL||``,BARCODE:e.product.BARCODE||``,...e.product._placeholder?{_placeholder:!0}:{},...e.product._crossHintCache&&e.product._crossHintCache.v===1?{_crossHintCache:e.product._crossHintCache}:{}}:null,quantity:e.quantity||1,room:e.room||``,notes:e.notes||``,price:e.price||e.product?.RRP_EX||`0.00`}))),roomOrderJson:JSON.stringify(u),pdfSettingsJson:JSON.stringify(d),totalProducts:o,totalQuantity:s,totalRooms:c.length,roomsList:c.join(`, `),estimatedValue:l}}calculateEstimatedValue(e){let t=0;return e.forEach(e=>{if(!e.product)return;let n=parseInt(e.quantity)||1,r=e.price||e.product?.RRP_INCGST||e.product?.RRP_EX||`0`,i=parseFloat(r.toString().replace(/[^0-9.]/g,``))||0;t+=i*n}),t.toFixed(2)}formatPhoneNumber(e){if(!e)return``;let t=String(e).trim();return t.startsWith(`'`)&&(t=t.substring(1)),/^4\d{8}$/.test(t)&&(t=`0`+t),`'`+t}async sendToGoogleSheets(e,t=1){try{let t=new URLSearchParams;t.append(`data`,JSON.stringify(e)),console.log(`📊 Sending to Google Sheets:`,this.googleSheetsUrl);let n=await fetch(this.googleSheetsUrl,{method:`POST`,headers:{"Content-Type":`application/x-www-form-urlencoded`},body:t});if(console.log(`📊 Response status:`,n.status,n.statusText),!n.ok)throw Error(`HTTP ${n.status}: ${n.statusText}`);let r=await n.text();console.log(`📊 Raw response:`,r);try{return JSON.parse(r)}catch(e){return console.error(`📊 Failed to parse JSON response:`,e),{success:!1,error:`Invalid JSON response`,raw:r}}}catch(n){return console.error(`📊 Attempt ${t} failed:`,n),t<this.retryAttempts?(console.log(`📊 Retrying in ${this.retryDelay}ms... (attempt ${t+1}/${this.retryAttempts})`),await new Promise(e=>setTimeout(e,this.retryDelay)),this.sendToGoogleSheets(e,t+1)):{success:!1,error:n.message}}}async testConnection(){if(!this.googleSheetsUrl)return{success:!1,error:`No Google Sheets URL configured`};try{let e=new URL(this.googleSheetsUrl);e.searchParams.append(`action`,`getPresenterSelections`);let t=a.getSessionToken?.()||``,n=a.getCurrentUser?.()?.email||``;e.searchParams.append(`staffEmail`,n),t&&e.searchParams.append(`sessionToken`,t);let r=await fetch(e.toString(),{method:`GET`,headers:{Accept:`application/json`}});if(!r.ok)throw Error(`HTTP ${r.status}`);return{success:!0,message:`Connection successful`,result:await r.json()}}catch(e){return{success:!1,error:e.message}}}getCurrentSelectionId(){return this.currentSelectionId}setCurrentSelectionId(e){this.currentSelectionId=e}clearCurrentSelectionId(){this.currentSelectionId=null}hasLoadedSelection(){return this.currentSelectionId!==null}setEnabled(e){this.isEnabled=e,console.log(`📊 Presentation recording ${e?`enabled`:`disabled`}`)}},X=new class{constructor(){this.googleSheetsUrl=L.PRESENTATION_RECORDING?.GOOGLE_SHEETS_URL||null,this.cachedSelections=null,this.cacheTimestamp=null,this.cacheDuration=300*1e3}getStaffEmail(){let e=a.getCurrentUser();if(e&&e.email)return e.email;console.warn(`⚠️ No authenticated user for filtering`);try{let e=localStorage.getItem(`staffContact`);if(e)return JSON.parse(e).email||``}catch(e){console.warn(`Could not load staff email:`,e)}return``}clearCache(){this.cachedSelections=null,this.cacheTimestamp=null,console.log(`🗑️ Selections cache cleared`)}async fetchSelections(e=!1,t=!1){if(!this.googleSheetsUrl)return console.error(`❌ Google Sheets URL not configured`),[];if(!t&&!e&&this.cachedSelections&&this.cacheTimestamp&&Date.now()-this.cacheTimestamp<this.cacheDuration)return console.log(`📊 Using cached selections`),this.cachedSelections;try{let t=this.getStaffEmail();console.log(`📊 Fetching ${e?`deleted`:``} selections`);let n=new URL(this.googleSheetsUrl);n.searchParams.append(`action`,`getPresenterSelections`),n.searchParams.append(`staffEmail`,t);let r=a.getSessionToken();r&&n.searchParams.append(`sessionToken`,r),e&&n.searchParams.append(`deletedOnly`,`true`);let i=await fetch(n.toString(),{method:`GET`,headers:{Accept:`application/json`}});if(!i.ok)throw Error(`HTTP ${i.status}: ${i.statusText}`);let o=await i.json();if(o.success&&o.selections)return console.log(`✅ Fetched ${o.selections.length} selections`),e||(this.cachedSelections=o.selections,this.cacheTimestamp=Date.now()),o.selections;throw Error(o.error||`Failed to fetch selections`)}catch(e){return console.error(`❌ Error fetching selections:`,e),[]}}clearCache(){this.cachedSelections=null,this.cacheTimestamp=null}searchSelections(e,t){if(!t||t.trim()===``)return e;let n=t.toLowerCase().trim();return e.filter(e=>{let t=(e.customerName||``).toLowerCase(),r=(e.customerProject||``).toLowerCase(),i=(e.documentName||``).toLowerCase(),a=(e.date||``).toLowerCase();return t.includes(n)||r.includes(n)||i.includes(n)||a.includes(n)})}sortByDateDescending(e){return[...e].sort((e,t)=>{try{let n=this.parseDateValue(e.lastModified||e.date,e.time);return this.parseDateValue(t.lastModified||t.date,t.time)-n}catch{return 0}})}parseDateValue(e,t=``){if(!e)return new Date(0);if(e.includes(`T`))return new Date(e);let n=e.toString().split(`/`);if(n.length===3){let e=parseInt(n[0]),r=parseInt(n[1])-1,i=parseInt(n[2]);if(t){let n=t.replace(/[AP]M/i,``).trim().split(`:`),a=parseInt(n[0])||0,o=parseInt(n[1])||0,s=t.toUpperCase().includes(`PM`);return new Date(i,r,e,s&&a!==12?a+12:a,o)}return new Date(i,r,e)}return new Date(0)}async loadSelection(e,t=`replace`){try{console.log(`📊 Loading selection: ${e.id} (mode: ${t})`);let n=[];try{n=JSON.parse(e.productsJson||`[]`)}catch(e){return console.error(`Failed to parse products JSON:`,e),{success:!1,error:`Invalid products data`}}let r=[];try{r=JSON.parse(e.roomOrderJson||`[]`)}catch(e){console.warn(`Could not parse room order:`,e)}let i={};try{i=JSON.parse(e.pdfSettingsJson||`{}`)}catch(e){console.warn(`Could not parse PDF settings:`,e)}let a=await this.enrichProductsWithCatalog(n);if(t===`replace`){M.clearAllSelections();let t={name:e.customerName||``,email:e.customerEmail||``,phone:this.cleanPhoneNumber(e.customerPhone),project:e.customerProject||``,address:e.customerAddress||``};localStorage.setItem(`customerDetails`,JSON.stringify(t));let n={name:e.customerName||``,email:e.customerEmail||``,telephone:this.cleanPhoneNumber(e.customerPhone),project:e.customerProject||``,address:e.customerAddress||``};localStorage.setItem(`pdfFormSettings`,JSON.stringify(n)),r.length>0&&localStorage.setItem(`customRoomOrder`,JSON.stringify(r)),Object.keys(i).length>0&&localStorage.setItem(`pdfSettings`,JSON.stringify(i)),a.forEach(e=>{if(e.product){let t={...e.product};e.price&&(t.UserEditedPrice=e.price),M.addProductToSelection(t,{notes:e.notes||``,room:e.room||``,quantity:e.quantity||1})}})}else t===`merge`&&a.forEach(e=>{if(e.product&&!M.getSelectedProducts().some(t=>t.product?.OrderCode===e.product.OrderCode&&t.room===e.room)){let t={...e.product};e.price&&(t.UserEditedPrice=e.price),M.addProductToSelection(t,{notes:e.notes||``,room:e.room||``,quantity:e.quantity||1})}});return Y.setCurrentSelectionId(e.id),console.log(`✅ Loaded ${a.length} products`),{success:!0,id:e.id,documentName:e.documentName,customerName:e.customerName,customerProject:e.customerProject,productCount:a.length,roomOrder:r,customerDetails:{name:e.customerName,email:e.customerEmail,phone:this.cleanPhoneNumber(e.customerPhone),project:e.customerProject,address:e.customerAddress},mode:t}}catch(e){return console.error(`❌ Error loading selection:`,e),{success:!1,error:e.message}}}async enrichProductsWithCatalog(e){let t=[];for(let n of e){if(!n.product){t.push(n);continue}let e=n.product.OrderCode||n.product.orderCode;if(e){let r=P.findProductByCode(e);r?t.push({id:n.id||`row_${Date.now()}_${Math.random().toString(36).substr(2,9)}`,product:r,quantity:n.quantity||1,room:n.room||``,notes:n.notes||``,price:n.price||r.RRP_EX||`0.00`}):(console.warn(`Product ${e} not found in catalog, using saved data`),t.push({id:n.id||`row_${Date.now()}_${Math.random().toString(36).substr(2,9)}`,product:{OrderCode:e,Description:n.product.Description||n.product.description||`Unknown Product`,RRP_INCGST:n.product.RRP_INCGST||n.product.rrpIncGst||`0.00`,RRP_EX:n.product.RRP_EX||n.product.rrpEx||`0.00`,Image_URL:n.product.Image_URL||n.product.imageUrl||``,Diagram_URL:n.product.Diagram_URL||``,Website_URL:n.product.Website_URL||``,BARCODE:n.product.BARCODE||``,_notInCatalog:!0},quantity:n.quantity||1,room:n.room||``,notes:n.notes||``,price:n.price||n.product.RRP_EX||`0.00`}))}else t.push({id:n.id||`row_${Date.now()}_${Math.random().toString(36).substr(2,9)}`,product:{...n.product,_placeholder:n.product._placeholder!==!1},quantity:n.quantity||1,room:n.room||``,notes:n.notes||``,price:n.price||`0.00`})}return t}cleanPhoneNumber(e){if(!e)return``;let t=String(e).trim();return t.startsWith(`'`)&&(t=t.substring(1)),t}async deleteSelections(e){if(!this.googleSheetsUrl)return{success:!1,error:`Not configured`};try{let t=new URLSearchParams;t.append(`data`,JSON.stringify({action:`deletePresenterSelections`,ids:e,sessionToken:a.getSessionToken()}));let n=await(await fetch(this.googleSheetsUrl,{method:`POST`,headers:{"Content-Type":`application/x-www-form-urlencoded`},body:t})).json();return n.success&&this.clearCache(),n}catch(e){return{success:!1,error:e.message}}}async restoreSelections(e){if(!this.googleSheetsUrl)return{success:!1,error:`Not configured`};try{let t=new URLSearchParams;t.append(`data`,JSON.stringify({action:`restorePresenterSelections`,ids:e,sessionToken:a.getSessionToken()}));let n=await(await fetch(this.googleSheetsUrl,{method:`POST`,headers:{"Content-Type":`application/x-www-form-urlencoded`},body:t})).json();return n.success&&this.clearCache(),n}catch(e){return{success:!1,error:e.message}}}},Xe=new class{constructor(){this.isVisible=!1,this.allSelections=[],this.filteredSelections=[],this.currentSearchQuery=``,this.onLoadCallback=null,this.selectedItems=new Set,this.showDeletedMode=!1}async show(e){console.log(`📂 PresentationPicker.show() called`);try{this.onLoadCallback=e,this.selectedItems.clear(),this.showDeletedMode=!1,this.createModalHTML(),this.attachEventListeners(),this.isVisible=!0,console.log(`📂 Modal created, fetching selections...`),this.setLoadingState(!0),await this.fetchAndRenderSelections(),console.log(`📂 Picker ready`)}catch(e){throw console.error(`❌ PresentationPicker.show() error:`,e),e}}async fetchAndRenderSelections(){this.setLoadingState(!0),this.selectedItems.clear();try{this.allSelections=await X.fetchSelections(this.showDeletedMode,!0),this.allSelections=X.sortByDateDescending(this.allSelections),this.filterAndRender()}catch(e){console.error(`Error fetching selections:`,e),this.showError(`Failed to load selections. Please try again.`)}finally{this.setLoadingState(!1)}}hide(){let e=document.getElementById(`presentation-picker-modal`);e&&e.remove(),this.isVisible=!1}createModalHTML(){let e=document.getElementById(`presentation-picker-modal`);e&&e.remove();let t=`
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
              <input type="checkbox" id="picker-show-deleted" ${this.showDeletedMode?`checked`:``}>
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
    `;document.body.insertAdjacentHTML(`beforeend`,t),this.injectStyles()}injectStyles(){document.getElementById(`presentation-picker-styles`)||document.head.insertAdjacentHTML(`beforeend`,`
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
    `)}attachEventListeners(){let e=document.getElementById(`presentation-picker-modal`);e&&(document.getElementById(`picker-close-btn`)?.addEventListener(`click`,()=>this.hide()),e.addEventListener(`click`,t=>{t.target===e&&this.hide()}),document.getElementById(`picker-search`)?.addEventListener(`input`,e=>{this.currentSearchQuery=e.target.value,this.filterAndRender()}),document.getElementById(`picker-show-deleted`)?.addEventListener(`change`,e=>{this.showDeletedMode=e.target.checked,this.fetchAndRenderSelections()}),document.getElementById(`picker-refresh`)?.addEventListener(`click`,()=>{X.clearCache(),this.fetchAndRenderSelections()}),document.getElementById(`picker-retry-btn`)?.addEventListener(`click`,()=>{this.fetchAndRenderSelections()}),document.addEventListener(`keydown`,this.handleKeyDown.bind(this)))}handleKeyDown(e){e.key===`Escape`&&this.isVisible&&this.hide()}setLoadingState(e){let t=document.getElementById(`picker-loading`),n=document.getElementById(`picker-table`),r=document.getElementById(`picker-empty`),i=document.getElementById(`picker-error`);e?(t&&(t.style.display=`flex`),n&&(n.style.display=`none`),r&&(r.style.display=`none`),i&&(i.style.display=`none`)):t&&(t.style.display=`none`)}showError(e){let t=document.getElementById(`picker-error`),n=document.getElementById(`picker-error-message`),r=document.getElementById(`picker-table`),i=document.getElementById(`picker-empty`);n&&(n.textContent=e),t&&(t.style.display=`flex`),r&&(r.style.display=`none`),i&&(i.style.display=`none`)}filterAndRender(){this.filteredSelections=X.searchSelections(this.allSelections,this.currentSearchQuery),this.renderTable()}renderTable(){let e=document.getElementById(`picker-table`),t=document.getElementById(`picker-empty`),n=document.getElementById(`picker-footer`),r=document.getElementById(`picker-table-body`);if(!r)return;if(this.filteredSelections.length===0){e&&(e.style.display=`none`),t&&(t.style.display=`flex`),n&&(n.style.display=`none`);return}e&&(e.style.display=`table`),t&&(t.style.display=`none`),n&&(n.style.display=`flex`),r.innerHTML=this.filteredSelections.map((e,t)=>`
      <tr data-index="${t}" data-id="${e.id}">
        <td class="col-date">
          <div>${this.formatDate(e.date)}</div>
          <div style="font-size: 0.75rem; color: var(--text-tertiary, #9ca3af);">${this.formatTime(e.time)}</div>
        </td>
        <td class="col-customer">
          <div class="picker-customer-name">${this.escapeHtml(e.customerName||`Unknown`)}</div>
          <div class="picker-customer-email">${this.escapeHtml(e.customerEmail||``)}</div>
        </td>
        <td class="col-project">
          <div class="picker-project-name">${this.escapeHtml(e.customerProject||`-`)}</div>
          <div class="picker-document-name">${this.escapeHtml(e.documentName||``)}</div>
        </td>
        <td class="col-products" style="text-align: right;">
          ${e.totalProducts||0}
        </td>
        <td class="col-value" style="text-align: right;">
          $${this.formatValue(e.estimatedValue)}
        </td>
        <td class="col-actions">
          <button class="picker-load-btn" data-action="load" data-index="${t}">Load</button>
          ${this.showDeletedMode?`<button class="picker-delete-btn" data-action="restore" data-index="${t}" style="color: #059669; border-color: #059669;">Restore</button>`:`<button class="picker-delete-btn" data-action="delete" data-index="${t}">Delete</button>`}
        </td>
      </tr>
    `).join(``);let i=document.getElementById(`picker-selection-count`);i&&(i.textContent=`${this.filteredSelections.length} selection${this.filteredSelections.length===1?``:`s`}`),this.attachRowEventListeners()}attachRowEventListeners(){let e=document.getElementById(`picker-table-body`);e&&(e.querySelectorAll(`button[data-action]`).forEach(e=>{e.addEventListener(`click`,t=>{t.stopPropagation();let n=e.dataset.action,r=parseInt(e.dataset.index),i=this.filteredSelections[r];n===`load`?this.showLoadConfirmation(i):n===`delete`?this.confirmDelete(i):n===`restore`&&this.restoreSelection(i)})}),e.querySelectorAll(`tr`).forEach(e=>{e.addEventListener(`click`,t=>{if(t.target.closest(`button`))return;let n=parseInt(e.dataset.index),r=this.filteredSelections[n];this.showLoadConfirmation(r)})}))}showLoadConfirmation(e){let t=M.getSelectedProducts();if(!(t&&t.length>0)){this.loadSelection(e,`replace`);return}let n=`
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
    `;document.body.insertAdjacentHTML(`beforeend`,n);let r=document.getElementById(`picker-confirm-dialog`);r.querySelectorAll(`button[data-action]`).forEach(t=>{t.addEventListener(`click`,()=>{let n=t.dataset.action;r.remove(),n===`replace`?this.loadSelection(e,`replace`):n===`merge`&&this.loadSelection(e,`merge`)})}),r.addEventListener(`click`,e=>{e.target===r&&r.remove()})}async loadSelection(e,t){try{this.setLoadingState(!0);let n=await X.loadSelection(e,t);n.success?(this.hide(),this.showToast(`Loaded ${n.productCount} products (${t})`),this.onLoadCallback&&this.onLoadCallback(n)):this.showError(n.error||`Failed to load selection`)}catch(e){this.showError(e.message)}finally{this.setLoadingState(!1)}}async confirmDelete(e){if(confirm(`Delete selection for "${e.customerName||`Unknown`}"?\n\nThis can be restored later.`))try{let t=await X.deleteSelections([e.id]);t.success?(this.showToast(`Selection deleted`),this.fetchAndRenderSelections()):this.showError(t.error||`Failed to delete`)}catch(e){this.showError(e.message)}}async restoreSelection(e){try{let t=await X.restoreSelections([e.id]);t.success?(this.showToast(`Selection restored`),this.fetchAndRenderSelections()):this.showError(t.error||`Failed to restore`)}catch(e){this.showError(e.message)}}showToast(e){let t=document.createElement(`div`);t.style.cssText=`
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
    `,t.textContent=e,document.body.appendChild(t),setTimeout(()=>{t.style.animation=`toast-out 0.3s ease`,setTimeout(()=>t.remove(),300)},3e3)}formatDate(e){if(!e)return`-`;if(/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(e))return e;try{let t=new Date(e);if(!isNaN(t.getTime())&&t.getFullYear()>1900)return t.toLocaleDateString(`en-AU`)}catch{}return e}formatTime(e){if(!e)return``;let t=e.match(/(\d{1,2}):(\d{2})(?::\d{2})?\s*(AM|PM)?/i);if(t){let e=parseInt(t[1]),n=t[2],r=(t[3]||``).toUpperCase();return r===`PM`&&e!==12?e+=12:r===`AM`&&e===12&&(e=0),`${e.toString().padStart(2,`0`)}:${n}`}return e}formatValue(e){return(parseFloat(e)||0).toLocaleString(`en-AU`,{minimumFractionDigits:2,maximumFractionDigits:2})}escapeHtml(e){let t=document.createElement(`div`);return t.textContent=e||``,t.innerHTML}},Ze=`pdfWizardSettings`,Qe=`tipTailSettings`,Z=`customerLogo`,$e=new class{constructor(){this.wizardData=this.getDefaultData(),this.availableTipPdfs=[],this.availableTailPdfs=[],this.customTipPdf=null,this.customTailPdf=null,this.onComplete=null,this.onCancel=null}getDefaultData(){return{customer:{name:``,project:``,address:``,email:``,phone:``,logo:null},options:{showRrp:!1,includeGst:!1,noPricing:!1,noQty:!1,includeDescriptions:!0,includeNotes:!0},customise:{tipPdf:``,tailPdf:``}}}async open(e={}){this.onComplete=e.onComplete||null,this.onCancel=e.onCancel||null;try{let e=await(await fetch(`./screens/pdf-wizard.html`)).text(),t=document.createElement(`div`);t.id=`pdf-wizard-container`,t.innerHTML=e,document.body.appendChild(t),await this.loadSavedSettings(),await this.discoverAvailablePdfs(),this.setupEventHandlers(),this.populateForm(),console.log(`✅ PDF Wizard opened`),this.startImagePreloading()}catch(e){console.error(`Failed to open PDF wizard:`,e)}}close(){let e=document.getElementById(`pdf-wizard-container`);e&&e.remove(),this.onCancel&&this.onCancel()}startImagePreloading(){let e=M.getSelectedProducts();if(!e||e.length===0){console.log(`📷 No products to preload`);return}let t=e.map(e=>{let t=e.product||{};return m({...t,Image_URL:t.Image_URL||t.imageUrl||t[`Image URL`]||``,Diagram_URL:t.Diagram_URL||t.diagramUrl||t[`Diagram URL`]||``})});console.log(`📷 Starting background preload for ${t.length} products...`),o(t).then(e=>{console.log(`✅ Preloaded ${e} images - ready for PDF generation`)}).catch(e=>{console.warn(`Image preloading error:`,e)})}async loadSavedSettings(){let e=r.getStorageItem(Ze,null);if(e){let t=this.getDefaultData();this.wizardData={...t,...e,customer:{...t.customer,...e.customer||{}},options:{...t.options,...e.options||{}},customise:{...t.customise,...e.customise||{}}}}let t=r.getStorageItem(`pdfFormSettings`,{});t.name&&(this.wizardData.customer.name=t.name),t.project&&(this.wizardData.customer.project=t.project),t.address&&(this.wizardData.customer.address=t.address),t.email&&(this.wizardData.customer.email=t.email),t.telephone&&(this.wizardData.customer.phone=t.telephone);try{let{get:e}=await R(async()=>{let{get:e}=await import(`./vendor-idb-BL1M7mAU.js`).then(e=>e.t);return{get:e}},__vite__mapDeps([0,1])),t=await e(Z);t&&(this.wizardData.customer.logo=t)}catch{}localStorage.removeItem(Z);let n=r.getStorageItem(Qe,{});n.tipAsset&&(this.wizardData.customise.tipPdf=n.tipAsset),n.tailAsset&&(this.wizardData.customise.tailPdf=n.tailAsset)}async discoverAvailablePdfs(){try{let e=[];try{let t=await fetch(`./assets-list.json`);t.ok&&(e=await t.json())}catch{}e.length===0&&(e=[`tip-AandD.pdf`,`tip-Builder.pdf`,`tip-Merchant.pdf`,`tip-Volume Merchant.pdf`,`tail-generic.pdf`]),this.availableTipPdfs=e.filter(e=>e.toLowerCase().startsWith(`tip-`)),this.availableTailPdfs=e.filter(e=>e.toLowerCase().startsWith(`tail-`)),this.renderPdfOptions()}catch(e){console.error(`Failed to discover PDFs:`,e)}}renderPdfOptions(){let e=document.getElementById(`tip-pdf-grid`);if(e){let t=this.wizardData.customise.tipPdf||``,n=t&&t!==``&&t!==`__custom__`,r=`
        <label class="option-card${n?``:` selected`}" data-tip="none">
          <input type="radio" name="tipPdf" value="" ${n?``:`checked`} style="display: none;">
          <div class="option-card-icon">✕</div>
          <span class="option-card-title">None</span>
        </label>
      `;this.availableTipPdfs.forEach(e=>{let n=e.replace(`tip-`,``).replace(`.pdf`,``),i=t===`./assets/${e}`;r+=`
          <label class="option-card${i?` selected`:``}" data-tip="${e}">
            <input type="radio" name="tipPdf" value="./assets/${e}" ${i?`checked`:``} style="display: none;">
            <div class="option-card-icon">📄</div>
            <span class="option-card-title">${n}</span>
          </label>
        `}),e.innerHTML=r,e.querySelectorAll(`.option-card`).forEach(t=>{t.addEventListener(`click`,()=>{this.customTipPdf=null,document.getElementById(`tip-custom-preview`).style.display=`none`,document.getElementById(`tip-upload-link`).style.display=``,e.querySelectorAll(`.option-card`).forEach(e=>e.classList.remove(`selected`)),t.classList.add(`selected`);let n=t.querySelector(`input`);n&&(n.checked=!0),this.wizardData.customise.tipPdf=t.querySelector(`input`)?.value||``,this.saveSettings()})})}let t=document.getElementById(`tail-pdf-grid`);if(t){let e=this.wizardData.customise.tailPdf||``,n=e&&e!==``&&e!==`__custom__`,r=`
        <label class="option-card${n?``:` selected`}" data-tail="none">
          <input type="radio" name="tailPdf" value="" ${n?``:`checked`} style="display: none;">
          <div class="option-card-icon">✕</div>
          <span class="option-card-title">None</span>
        </label>
      `;this.availableTailPdfs.forEach(t=>{let n=t.replace(`tail-`,``).replace(`.pdf`,``),i=e===`./assets/${t}`;r+=`
          <label class="option-card${i?` selected`:``}" data-tail="${t}">
            <input type="radio" name="tailPdf" value="./assets/${t}" ${i?`checked`:``} style="display: none;">
            <div class="option-card-icon">📄</div>
            <span class="option-card-title">${n}</span>
          </label>
        `}),t.innerHTML=r,t.querySelectorAll(`.option-card`).forEach(e=>{e.addEventListener(`click`,()=>{this.customTailPdf=null,document.getElementById(`tail-custom-preview`).style.display=`none`,document.getElementById(`tail-upload-link`).style.display=``,t.querySelectorAll(`.option-card`).forEach(e=>e.classList.remove(`selected`)),e.classList.add(`selected`);let n=e.querySelector(`input`);n&&(n.checked=!0),this.wizardData.customise.tailPdf=e.querySelector(`input`)?.value||``,this.saveSettings()})})}}setupEventHandlers(){document.getElementById(`wizard-close`)?.addEventListener(`click`,()=>this.close()),document.getElementById(`wizard-cancel`)?.addEventListener(`click`,()=>this.close()),document.getElementById(`wizard-generate`)?.addEventListener(`click`,e=>{e.preventDefault(),this.generatePdf()}),this.setupFormHandlers(),this.setupOptionCardHandlers(),this.setupLogoUpload(),this.setupPdfUploads()}setupFormHandlers(){document.querySelectorAll(`#pdf-wizard input[type="text"], #pdf-wizard input[type="email"], #pdf-wizard input[type="tel"]`).forEach(e=>{e.addEventListener(`blur`,()=>{this.collectFormData(),this.saveSettings()})}),document.querySelectorAll(`#pdf-wizard .form-checkbox`).forEach(e=>{let t=e.querySelector(`input[type="checkbox"]`);t&&(e.addEventListener(`click`,e=>{e.target.tagName===`SPAN`&&(t.checked=!t.checked,t.dispatchEvent(new Event(`change`,{bubbles:!0})))}),t.addEventListener(`change`,()=>{this.collectFormData(),this.saveSettings()}))})}setupOptionCardHandlers(){let e=document.getElementById(`show-rrp`),t=document.getElementById(`include-gst`),n=document.getElementById(`no-pricing`),r=document.getElementById(`no-qty`);n&&n.addEventListener(`change`,()=>{let r=n.checked;this.wizardData.options.noPricing=r,r?(e&&(e.checked=!1,e.disabled=!0,e.parentElement.style.opacity=`0.5`,this.wizardData.options.showRrp=!1),t&&(t.checked=!1,t.disabled=!0,t.parentElement.style.opacity=`0.5`,this.wizardData.options.includeGst=!1)):(e&&(e.disabled=!1,e.parentElement.style.opacity=`1`),t&&(t.disabled=!1,t.parentElement.style.opacity=`1`)),this.saveSettings()}),e&&e.addEventListener(`change`,()=>{this.wizardData.options.showRrp=e.checked,this.saveSettings()}),t&&t.addEventListener(`change`,()=>{this.wizardData.options.includeGst=t.checked,this.saveSettings()}),r&&r.addEventListener(`change`,()=>{this.wizardData.options.noQty=r.checked,this.saveSettings()})}setupLogoUpload(){let e=document.getElementById(`logo-upload-zone`),t=document.getElementById(`customer-logo-input`),n=document.getElementById(`logo-preview-container`),r=document.getElementById(`logo-preview-img`),i=document.getElementById(`remove-logo-btn`);e&&t&&(e.onclick=()=>t.click(),e.ondragover=t=>{t.preventDefault(),e.style.borderColor=`var(--color-copper)`},e.ondragleave=()=>{e.style.borderColor=``},e.ondrop=t=>{t.preventDefault(),e.style.borderColor=``,t.dataTransfer.files.length>0&&this.handleLogoFile(t.dataTransfer.files[0])},t.onchange=e=>{e.target.files.length>0&&this.handleLogoFile(e.target.files[0])}),i&&(i.onclick=async()=>{this.wizardData.customer.logo=null;try{let{del:e}=await R(async()=>{let{del:e}=await import(`./vendor-idb-BL1M7mAU.js`).then(e=>e.t);return{del:e}},__vite__mapDeps([0,1]));await e(Z)}catch{}n&&(n.style.display=`none`),e&&(e.style.display=``)}),this.wizardData.customer.logo&&r&&n&&(r.src=this.wizardData.customer.logo,n.style.display=`block`,e&&(e.style.display=`none`))}handleLogoFile(e){if(!e.type.startsWith(`image/`)){alert(`Please select an image file`);return}if(e.size>2*1024*1024){alert(`File size must be less than 2MB`);return}let t=new FileReader;t.onload=async e=>{this.wizardData.customer.logo=e.target.result;try{let{set:t}=await R(async()=>{let{set:e}=await import(`./vendor-idb-BL1M7mAU.js`).then(e=>e.t);return{set:e}},__vite__mapDeps([0,1]));await t(Z,e.target.result)}catch{}let t=document.getElementById(`logo-preview-container`),n=document.getElementById(`logo-preview-img`),r=document.getElementById(`logo-upload-zone`);n&&(n.src=e.target.result),t&&(t.style.display=`block`),r&&(r.style.display=`none`)},t.readAsDataURL(e)}setupPdfUploads(){let e=document.getElementById(`tip-upload-link`),t=document.getElementById(`tip-pdf-input`),n=document.getElementById(`tip-custom-preview`),r=document.getElementById(`tip-custom-name`),i=document.getElementById(`remove-tip-btn`);e&&t&&(e.onclick=e=>{e.preventDefault(),t.click()},t.onchange=t=>{t.target.files.length>0&&(this.customTipPdf=t.target.files[0],r&&(r.textContent=this.customTipPdf.name),n&&(n.style.display=`flex`),e&&(e.style.display=`none`),document.querySelectorAll(`#tip-pdf-grid .option-card`).forEach(e=>e.classList.remove(`selected`)),this.wizardData.customise.tipPdf=`__custom__`)}),i&&(i.onclick=()=>{this.customTipPdf=null,n&&(n.style.display=`none`),t&&(t.value=``),e&&(e.style.display=``);let r=document.querySelector(`#tip-pdf-grid [data-tip="none"]`);if(r){document.querySelectorAll(`#tip-pdf-grid .option-card`).forEach(e=>e.classList.remove(`selected`)),r.classList.add(`selected`);let e=r.querySelector(`input`);e&&(e.checked=!0)}this.wizardData.customise.tipPdf=``});let a=document.getElementById(`tail-upload-link`),o=document.getElementById(`tail-pdf-input`),s=document.getElementById(`tail-custom-preview`),c=document.getElementById(`tail-custom-name`),l=document.getElementById(`remove-tail-btn`);a&&o&&(a.onclick=e=>{e.preventDefault(),o.click()},o.onchange=e=>{e.target.files.length>0&&(this.customTailPdf=e.target.files[0],c&&(c.textContent=this.customTailPdf.name),s&&(s.style.display=`flex`),a&&(a.style.display=`none`),document.querySelectorAll(`#tail-pdf-grid .option-card`).forEach(e=>e.classList.remove(`selected`)),this.wizardData.customise.tailPdf=`__custom__`)}),l&&(l.onclick=()=>{this.customTailPdf=null,s&&(s.style.display=`none`),o&&(o.value=``),a&&(a.style.display=``);let e=document.querySelector(`#tail-pdf-grid [data-tail="none"]`);if(e){document.querySelectorAll(`#tail-pdf-grid .option-card`).forEach(e=>e.classList.remove(`selected`)),e.classList.add(`selected`);let t=e.querySelector(`input`);t&&(t.checked=!0)}this.wizardData.customise.tailPdf=``})}collectFormData(){let e=[`customer-name`,`customer-project`,`customer-address`,`customer-email`,`customer-phone`],t=[`name`,`project`,`address`,`email`,`phone`];e.forEach((e,n)=>{let r=document.getElementById(e);r&&(this.wizardData.customer[t[n]]=r.value)}),Object.entries({"show-rrp":`showRrp`,"include-gst":`includeGst`,"no-pricing":`noPricing`,"no-qty":`noQty`}).forEach(([e,t])=>{let n=document.getElementById(e);n&&(this.wizardData.options[t]=n.checked)}),Object.entries({"include-descriptions":`includeDescriptions`,"include-notes":`includeNotes`}).forEach(([e,t])=>{let n=document.getElementById(e);n&&(this.wizardData.options[t]=n.checked)})}populateForm(){let e={"customer-name":this.wizardData.customer.name,"customer-project":this.wizardData.customer.project,"customer-address":this.wizardData.customer.address,"customer-email":this.wizardData.customer.email,"customer-phone":this.wizardData.customer.phone};Object.entries(e).forEach(([e,t])=>{let n=document.getElementById(e);n&&(n.value=t||``)});let t={"show-rrp":this.wizardData.options.showRrp,"include-gst":this.wizardData.options.includeGst,"no-pricing":this.wizardData.options.noPricing,"no-qty":this.wizardData.options.noQty};Object.entries(t).forEach(([e,t])=>{let n=document.getElementById(e);n&&(n.checked=!!t,this.wizardData.options.noPricing&&(e===`show-rrp`||e===`include-gst`)&&(n.disabled=!0,n.parentElement.style.opacity=`0.5`))});let n={"include-descriptions":this.wizardData.options.includeDescriptions,"include-notes":this.wizardData.options.includeNotes};Object.entries(n).forEach(([e,t])=>{let n=document.getElementById(e);n&&(n.checked=t)})}saveSettings(){try{r.setStorageItem(Ze,this.wizardData),r.setStorageItem(`pdfFormSettings`,{name:this.wizardData.customer.name,project:this.wizardData.customer.project,address:this.wizardData.customer.address,email:this.wizardData.customer.email,telephone:this.wizardData.customer.phone}),r.setStorageItem(Qe,{tipAsset:this.wizardData.customise.tipPdf===`__custom__`?``:this.wizardData.customise.tipPdf,tailAsset:this.wizardData.customise.tailPdf===`__custom__`?``:this.wizardData.customise.tailPdf})}catch(e){console.warn(`Could not save settings to localStorage:`,e.message)}}async generatePdf(){this.collectFormData(),this.saveSettings();let e={name:this.wizardData.customer.name,project:this.wizardData.customer.project,address:this.wizardData.customer.address,email:this.wizardData.customer.email,telephone:this.wizardData.customer.phone,showRrp:this.wizardData.options.showRrp,includeGst:this.wizardData.options.includeGst,excludePrice:this.wizardData.options.noPricing,excludeQty:this.wizardData.options.noQty,excludeLongDescription:!this.wizardData.options.includeDescriptions,exportCsv:!0},t={tipAsset:``,tipUpload:null,tailAsset:``,tailUpload:null};if(this.wizardData.customise.tipPdf&&this.wizardData.customise.tipPdf!==`__custom__`&&(t.tipAsset=this.wizardData.customise.tipPdf),this.wizardData.customise.tailPdf&&this.wizardData.customise.tailPdf!==`__custom__`&&(t.tailAsset=this.wizardData.customise.tailPdf),this.customTipPdf)try{t.tipUpload=(await this.fileToBase64(this.customTipPdf)).replace(/^data:application\/pdf;base64,/,``),console.log(`📄 Custom tip PDF converted to base64`)}catch(e){console.error(`Failed to convert tip PDF:`,e)}if(this.customTailPdf)try{t.tailUpload=(await this.fileToBase64(this.customTailPdf)).replace(/^data:application\/pdf;base64,/,``),console.log(`📄 Custom tail PDF converted to base64`)}catch(e){console.error(`Failed to convert tail PDF:`,e)}try{localStorage.setItem(`tipTailSettings`,JSON.stringify(t))}catch(e){console.warn(`Could not save tipTailSettings to localStorage (likely quota exceeded), using in-memory:`,e.message)}console.log(`📄 Generating PDF with settings:`,{...e,tipAsset:t.tipAsset||`(none)`,tipUpload:t.tipUpload?`(custom file)`:`(none)`,tailAsset:t.tailAsset||`(none)`,tailUpload:t.tailUpload?`(custom file)`:`(none)`});let n=document.getElementById(`pdf-wizard-container`);n&&n.remove(),this.onComplete?this.onComplete(e,t):window.dispatchEvent(new CustomEvent(`generatePdf`,{detail:{...e,tipTailSettings:t}}))}fileToBase64(e){return new Promise((t,n)=>{let r=new FileReader;r.onload=()=>t(r.result),r.onerror=n,r.readAsDataURL(e)})}showSaveDialog(){i.requireAuth(e=>{this._showSaveDialogInternal(e)})}_showSaveDialogInternal(e){this.collectFormData();let t=Y.hasLoadedSelection(),n=this.wizardData.customer.name?`${this.wizardData.customer.name} - ${new Date().toLocaleDateString(`en-AU`)}`:`Selection - ${new Date().toLocaleDateString(`en-AU`)}`,r=`
      <div class="save-dialog-overlay" id="save-dialog">
        <div class="save-dialog">
          <h3>Save Selection</h3>
          <p>Save your current product selection for later use.</p>
          
          <div class="save-dialog-form">
            <label class="form-label" for="save-doc-name">Document Name</label>
            <input type="text" class="form-input" id="save-doc-name" 
                   value="${this.escapeHtml(n)}" maxlength="100"
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
    `;this.injectSaveDialogStyles(),document.body.insertAdjacentHTML(`beforeend`,r);let i=document.getElementById(`save-dialog`),a=document.getElementById(`save-doc-name`),o=document.getElementById(`save-notes`);a?.focus(),a?.select(),i.querySelectorAll(`button[data-action]`).forEach(e=>{e.addEventListener(`click`,async()=>{let t=e.dataset.action;if(t===`cancel`){i.remove();return}let n=a?.value.trim()||`Untitled Selection`,r=o?.value.trim()||``,s={customerName:this.wizardData.customer.name,customerEmail:this.wizardData.customer.email,customerPhone:this.wizardData.customer.phone,customerProject:this.wizardData.customer.project,customerAddress:this.wizardData.customer.address,documentName:n,notes:r,pdfSettings:{showRrp:this.wizardData.options.showRrp,includeGst:this.wizardData.options.includeGst,noPricing:this.wizardData.options.noPricing,noQty:this.wizardData.options.noQty,includeDescriptions:this.wizardData.options.includeDescriptions,includeNotes:this.wizardData.options.includeNotes,tipPdf:this.wizardData.customise.tipPdf,tailPdf:this.wizardData.customise.tailPdf},gridRows:M.getSelectedProducts()};i.querySelectorAll(`button`).forEach(e=>e.disabled=!0),e.textContent=`Saving...`;try{let e;if(t===`save-update`){let t=Y.getCurrentSelectionId();e=await Y.updateSelection(t,s)}else e=await Y.saveSelection(s);i.remove(),e.success?this.showToast(t===`save-update`?`Selection updated!`:`Selection saved!`):this.showToast(`Failed to save: `+(e.error||`Unknown error`),`error`)}catch(e){i.remove(),this.showToast(`Failed to save: `+e.message,`error`)}})}),i.addEventListener(`click`,e=>{e.target===i&&i.remove()});let s=e=>{e.key===`Escape`&&(i.remove(),document.removeEventListener(`keydown`,s))};document.addEventListener(`keydown`,s)}injectSaveDialogStyles(){document.getElementById(`save-dialog-styles`)||document.head.insertAdjacentHTML(`beforeend`,`
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
    `)}showLoadPicker(){i.requireAuth(e=>{this._showLoadPickerInternal(e)})}_showLoadPickerInternal(e){console.log(`📂 Opening load picker...`);try{Xe.show(e=>{console.log(`✅ Selection loaded:`,e);try{let t=JSON.parse(localStorage.getItem(`customerDetails`)||`{}`);this.wizardData.customer.name=t.name||``,this.wizardData.customer.email=t.email||``,this.wizardData.customer.phone=t.phone||``,this.wizardData.customer.project=t.project||``,this.wizardData.customer.address=t.address||``;let n=JSON.parse(localStorage.getItem(`pdfSettings`)||`{}`);n.showRrp!==void 0&&(this.wizardData.options.showRrp=n.showRrp),n.includeGst!==void 0&&(this.wizardData.options.includeGst=n.includeGst),n.noPricing!==void 0&&(this.wizardData.options.noPricing=n.noPricing),n.noQty!==void 0&&(this.wizardData.options.noQty=n.noQty),n.includeDescriptions!==void 0&&(this.wizardData.options.includeDescriptions=n.includeDescriptions),n.includeNotes!==void 0&&(this.wizardData.options.includeNotes=n.includeNotes),n.tipPdf&&(this.wizardData.customise.tipPdf=n.tipPdf),n.tailPdf&&(this.wizardData.customise.tailPdf=n.tailPdf),this.populateForm(),this.showToast(`Loaded ${e.productCount} products`)}catch(e){console.warn(`Could not reload wizard data:`,e)}})}catch(e){console.error(`❌ Failed to open load picker:`,e),this.showToast(`Failed to open picker: `+e.message,`error`)}}showToast(e,t=`success`){let n=document.createElement(`div`);n.style.cssText=`
      position: fixed;
      bottom: 80px;
      left: 50%;
      transform: translateX(-50%);
      background: ${t===`error`?`#dc2626`:`#1f2937`};
      color: white;
      padding: 12px 24px;
      border-radius: 8px;
      font-size: 0.9rem;
      z-index: 100002;
      animation: toast-in 0.3s ease;
    `,n.textContent=e,document.body.appendChild(n),setTimeout(()=>{n.style.animation=`toast-out 0.3s ease`,setTimeout(()=>n.remove(),300)},3e3)}escapeHtml(e){let t=document.createElement(`div`);return t.textContent=e||``,t.innerHTML}},Q=new class{constructor(){this.container=null,this.toasts=new Map,this.nextId=1,this.init()}init(){document.getElementById(`toast-container`)?this.container=document.getElementById(`toast-container`):(this.container=document.createElement(`div`),this.container.id=`toast-container`,this.container.className=`toast-container`,document.body.appendChild(this.container))}show({message:e,type:t=`info`,duration:n=4e3,action:r=null}){let i=this.nextId++,a=document.createElement(`div`);a.className=`toast toast-${t}`,a.setAttribute(`role`,`alert`),a.setAttribute(`aria-live`,`polite`);let o={success:`✓`,error:`✕`,warning:`⚠`,info:`ℹ`};a.innerHTML=`
      <div class="toast-icon">${o[t]||o.info}</div>
      <div class="toast-content">
        <span class="toast-message">${e}</span>
        ${r?`<button class="toast-action" type="button">${r.label}</button>`:``}
      </div>
      <button class="toast-close" type="button" aria-label="Dismiss">×</button>
    `;let s=a.querySelector(`.toast-close`);if(s.onclick=()=>this.dismiss(i),r&&r.callback){let e=a.querySelector(`.toast-action`);e.onclick=()=>{r.callback(),this.dismiss(i)}}return this.container.appendChild(a),this.toasts.set(i,a),requestAnimationFrame(()=>{a.classList.add(`toast-enter`)}),n>0&&setTimeout(()=>this.dismiss(i),n),i}dismiss(e){let t=this.toasts.get(e);t&&(t.classList.add(`toast-exit`),t.addEventListener(`animationend`,()=>{t.remove(),this.toasts.delete(e)}))}dismissAll(){this.toasts.forEach((e,t)=>this.dismiss(t))}success(e,t={}){return this.show({message:e,type:`success`,...t})}error(e,t={}){return this.show({message:e,type:`error`,duration:6e3,...t})}warning(e,t={}){return this.show({message:e,type:`warning`,...t})}info(e,t={}){return this.show({message:e,type:`info`,...t})}withUndo(e,t,n=5e3){return this.show({message:e,type:`info`,duration:n,action:{label:`Undo`,callback:t}})}};window.toast=Q;var et=20,tt=0;function nt(e){return{orderCode:String(e[`Order Code`]||e.OrderCode||e.Code||``).trim(),name:e.Description||e[`Product Name`]||e.ProductName||``,longDescription:e.LongDescription||e[`Long Description`]||``,range:e.Range||``,group:e.Group||``,subGroup:e.SubGroup||e[`Sub Group`]||``,rrpExGst:e.RRP_EX||e[`RRP EX GST`]||``,rrpIncGst:e.RRP_INCGST||e[`RRP INC GST`]||``,imageUrl:e.Image_URL||e[`Image URL`]||e.imageUrl||``,dimX:e.DimX||e[`X Dimension (mm)`]||``,dimY:e.DimY||e[`Y Dimension (mm)`]||``,dimZ:e.DimZ||e[`Z Dimension (mm)`]||``,welsStar:e.WELS_STAR||e[`WELS Star`]||e[`WELS STAR`]||``,colour:e.Colour||e.Color||``,_raw:e}}function rt(e){if(e==null||e===``)return NaN;let t=Number(String(e).replace(/,/g,``));return Number.isFinite(t)&&t>0?t:NaN}function it(e){let t=rt(e?.rrpExGst);if(!Number.isNaN(t))return`$${t.toLocaleString(`en-AU`,{minimumFractionDigits:2,maximumFractionDigits:2})} ex GST`;let n=rt(e?.rrpIncGst);return Number.isNaN(n)?``:`$${n.toLocaleString(`en-AU`,{minimumFractionDigits:2,maximumFractionDigits:2})} inc GST`}var $=new class{constructor(){this._overlay=null,this._dataLayer=null,this._seimaProducts=null,this._seimaByCode={},this._seimaFormatted=[],this._currentCompetitor=null,this._currentCompetitorProduct=null,this._onProductSelected=null,this._expandedCard=null}async open(e,t){if(!this._overlay&&(this._onProductSelected=t||null,await this._ensureSeimaData(),this._render(),e)){let t=this._overlay.querySelector(`#uv-comp-search`);if(t){t.value=e;let n=await this._findExactPrefilledCompetitor(e);if(n){this._selectCompetitorProduct(n);return}this._onCompetitorSearch(e)}}}close(){this._overlay&&=(this._overlay.remove(),null),this._onProductSelected=null,this._expandedCard=null}async _ensureSeimaData(){if(!this._seimaProducts)try{let{dataLayer:e}=await R(async()=>{let{dataLayer:e}=await import(`./data-layer-DZOqsMwP.js`).then(e=>e.n);return{dataLayer:e}},__vite__mapDeps([2,1,3,4,5,0,6]));e.isLoaded||await e.init(),this._dataLayer=e;let t=e.products||[];this._seimaProducts=t,this._seimaByCode={},this._seimaFormatted=[];for(let e of t){let t=nt(e),n=t.orderCode;n&&(this._seimaByCode[n]=e),n&&/^\d+/.test(n)&&this._seimaFormatted.push(t)}}catch(e){console.error(`UserVerify: failed to load Seima catalog`,e),this._seimaProducts=[]}}_render(){let e=a.getCurrentUser(),t=document.createElement(`div`);t.className=`uv-overlay`,t.innerHTML=`
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
    `,t.addEventListener(`click`,e=>{e.target===t&&this.close()}),t.querySelector(`.uv-close`).addEventListener(`click`,()=>this.close());let n=e=>{e.key===`Escape`&&(this.close(),document.removeEventListener(`keydown`,n))};document.addEventListener(`keydown`,n),document.body.appendChild(t),this._overlay=t,e&&this._bindCompetitorSearch()}_loginPromptHtml(){return`
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
    `}_bindCompetitorSearch(){let e=this._overlay.querySelector(`#uv-comp-search`);if(!e)return;let t;e.addEventListener(`input`,()=>{clearTimeout(t),t=setTimeout(()=>this._onCompetitorSearch(e.value),250)}),e.addEventListener(`focus`,()=>{e.value.length>=2&&this._onCompetitorSearch(e.value)})}_normaliseCode(e){return String(e||``).toLowerCase().replace(/[.\-_\s/\\]+/g,``)}_extractPrefillCode(e){let t=String(e||``).trim();if(!t)return``;let n=t.indexOf(`:`);return(n>=0?t.slice(n+1):t).trim()}async _findExactPrefilledCompetitor(e){let t=this._extractPrefillCode(e);if(!t||t.length<3)return null;try{await z._ensureIndex();let e=await z.findCompetitorEntryByCode(t),n=e?.competitorProduct?.product_code||e?.matchedCode||``;return this._normaliseCode(n)===this._normaliseCode(t)?e:null}catch{return null}}async _onCompetitorSearch(e){let t=this._overlay.querySelector(`#uv-comp-results`);if(!t)return;if(!e||e.length<2){t.style.display=`none`;return}if(await z._ensureIndex(),!z._index){t.style.display=`none`;return}let n=this._extractPrefillCode(e),r=this._normaliseCode(n),i=await this._findExactPrefilledCompetitor(e),a=[],o=new Set;i&&(a.push(i),o.add(`${i.competitor}:${i.competitorProduct?.product_code||i.matchedCode||``}`));let s=e.toLowerCase().replace(/[:\-]/g,` `).split(/\s+/).filter(Boolean);for(let e of z._index.searchable){let t=String(e.product?.product_code||``),n=`${e.competitor}:${t}`;if(o.has(n))continue;let i=this._normaliseCode(t);if((r&&i===r||s.every(t=>e.searchText.includes(t)))&&(a.push(e),o.add(n),a.length>=15))break}if(a.length===0){t.innerHTML=`<div class="uv-empty">No competitor products found</div>`,t.style.display=`block`;return}t.innerHTML=a.map((e,t)=>{let n=e.product,r=n.image_url||``,i=n.product_code||``,a=n.product_name||n.collection||``,o=n.product_type||``;return`
        <div class="uv-search-item" data-comp-idx="${t}">
          ${r?`<img src="${this._esc(r)}" alt="" onerror="this.style.display='none'">`:``}
          <div class="uv-search-item-info">
            <span class="uv-search-item-code">${this._esc(z.getPublicCompetitorLabel(e.competitor))}: ${this._esc(i)}</span>
            <span class="uv-search-item-name">${this._esc(a)}</span>
            ${o?`<span class="uv-search-item-type">${this._esc(o)}</span>`:``}
          </div>
        </div>
      `}).join(``),t.style.display=`block`,t.querySelectorAll(`.uv-search-item`).forEach(e=>{e.addEventListener(`click`,()=>{let n=parseInt(e.dataset.compIdx);this._selectCompetitorProduct(a[n]),t.style.display=`none`})})}_selectCompetitorProduct(e){this._currentCompetitor=e.competitor,this._currentCompetitorProduct=e.product,this._expandedCard=null;let t=this._overlay.querySelector(`#uv-body`),n=this._overlay.querySelector(`.uv-header h2`),r=e.product;n.textContent=`${r.product_name||r.collection||r.product_code||``} — ${z.getPublicCompetitorLabel(e.competitor)}`,t.innerHTML=this._renderSplitView(r,e.competitor),this._wireSplitView()}_renderSplitView(e,t){return`
      <div class="uv-layout">
        ${this._renderCompetitorPanel(e,t)}
        ${this._renderMatchesPanel(e)}
      </div>
    `}_renderCompetitorPanel(e,t){let n=e.image_url||``,r=this._extractCompetitorDimensions(e),i=e.features||``,a=[[`Name`,e.product_name||e.collection||``],[`Code`,e.product_code],[`Brand`,e.brand&&String(e.brand).trim()||z.getPublicCompetitorLabel(t)],[`Category`,[e.product_type,e.subcategory].filter(Boolean).join(` / `)],[`Collection`,e.collection],[`Finish`,e.finish||e.colour],[`Material`,e.material],[`Dimensions`,r],[`Style`,e.style],[`WELS`,e.wels_rating]].filter(([,e])=>e&&String(e).trim()).map(([e,t])=>`<tr><td>${this._esc(e)}</td><td>${e===`Name`?`<strong>${this._esc(t)}</strong>`:this._esc(t)}</td></tr>`).join(``),o=i?`<tr><td>Features</td><td class="uv-features-cell">${this._esc(i).replace(/;\s*/g,`<br>`)}</td></tr>`:``;return`
      <div class="uv-product-detail">
        ${n?`<img src="${this._esc(n)}" alt="" class="uv-product-img" onerror="this.style.display='none'">`:`<div class="uv-product-img-placeholder">No image</div>`}
        <table class="uv-product-table">
          ${a}
          ${o}
        </table>
      </div>
    `}_renderMatchesPanel(e){let t=this._buildSearchPrefill(e),n=this._renderSuggestions(e);return`
      <div class="uv-matches-panel">
        <div class="uv-matches-heading">Which Seima product is the equivalent?</div>
        <div class="uv-search-wrap">
          <span class="uv-search-icon">&#128269;</span>
          <input type="text" class="uv-search-input uv-seima-search" id="uv-seima-search"
                 placeholder="Search Seima by name, code or range..." value="${this._esc(t)}">
        </div>
        <div class="uv-results-area" id="uv-results-area">
          ${n}
        </div>
        <div class="uv-suggestions-store" id="uv-suggestions-store" style="display:none;">
          ${n}
        </div>
        <div class="uv-no-equivalent">
          <button class="uv-no-equivalent-btn" id="uv-no-equivalent">No Seima equivalent exists</button>
        </div>
      </div>
    `}_buildSearchPrefill(e){let t=e.subcategory||``,n=e.product_type||``,r=e.finish||e.colour||``,i=e.product_name||``,a=t?t.split(`,`)[0].trim():n;if(!a&&i){let e=i.toLowerCase(),t=[`basin`,`sink`,`shower`,`bath`,`toilet`,`vanity`,`mixer`,`tap`].filter(t=>e.includes(t));t.length>0&&(a=t.join(` `))}let o=[];return a&&o.push(a),r&&o.push(r),o.join(` `).trim()}_renderSuggestions(e){let t=this._quickMatch(e);return t.length===0?`<div class="uv-empty">No suggestions available. Use the search above.</div>`:`
      <div class="uv-section-divider"></div>
      <div class="uv-section-title">Suggestions</div>
      ${t.map(e=>this._renderSeimaCard(e.seima,{score:e.score,reasons:this._buildReasons(e),isSuggestion:!0})).join(``)}
    `}_buildReasons(e){let t=[];return e.finishScore>=60&&t.push(`finish match`),e.materialScore>=80?t.push(`material match`):e.materialScore===0&&t.push(`material mismatch`),t.push(`text: ${e.textScore}%`),t.join(`, `)}_renderSeimaCard(e,t={}){let n=e.orderCode,r=e.name,i=e.range||``,a=e.group||``,o=e.subGroup||``,s=e.imageUrl||`assets/no-image.png`,c=this._seimaDimensions(e),l=it(e),u=e.longDescription||``,d=e.welsStar||``,f=this._extractFinishFromSeima(e),p=this._extractMaterialFromSeima(e),m=t.score==null?``:`<span class="uv-badge uv-badge-${t.score>=50?`high`:t.score>=30?`med`:`low`}">${t.score}%</span>`,h=[n,i,o||a].filter(Boolean).join(` · `),g=[f,p,c].filter(Boolean).join(` · `),_=u?u.length>120?u.slice(0,120)+`…`:u:``;return`
      <div class="uv-match-card" data-seima-code="${this._esc(n)}">
        <img src="${this._esc(s)}" alt="" class="uv-match-img"
             data-code="${this._esc(n)}"
             onerror="this.src='assets/no-image.png'" title="Click to expand">
        <div class="uv-match-body">
          <div class="uv-match-name">${this._esc(r)}</div>
          <div class="uv-match-meta">${this._esc(h)} ${m}</div>
          ${g?`<div class="uv-match-spec">${this._esc(g)}</div>`:``}
          ${_?`<div class="uv-match-desc-preview">${this._esc(_)}</div>`:``}
          ${t.reasons?`<div class="uv-match-reasons">${this._esc(t.reasons)}</div>`:``}
        </div>
        <div class="uv-match-right">
          <div class="uv-match-price">${this._esc(l)}</div>
          <button class="uv-btn-match" data-code="${this._esc(n)}">Link Product</button>
        </div>
        <div class="uv-match-expanded" data-expand-code="${this._esc(n)}" style="display:none;">
          <img src="${this._esc(s)}" alt="" class="uv-expanded-img" onerror="this.src='assets/no-image.png'">
          <div class="uv-expanded-details">
            <div class="uv-expanded-specs">
              ${i?`<div><span class="uv-expanded-label">Range</span> ${this._esc(i)}</div>`:``}
              ${a?`<div><span class="uv-expanded-label">Group</span> ${this._esc(a)}</div>`:``}
              ${o?`<div><span class="uv-expanded-label">Type</span> ${this._esc(o)}</div>`:``}
              ${f?`<div><span class="uv-expanded-label">Finish</span> ${this._esc(f)}</div>`:``}
              ${p?`<div><span class="uv-expanded-label">Material</span> ${this._esc(p)}</div>`:``}
              ${c?`<div><span class="uv-expanded-label">Dimensions</span> ${this._esc(c)}</div>`:``}
              ${d?`<div><span class="uv-expanded-label">WELS</span> ${this._esc(d)} star</div>`:``}
              ${l?`<div><span class="uv-expanded-label">RRP</span> ${this._esc(l)}</div>`:``}
            </div>
            ${u?`<div class="uv-expanded-desc">${this._esc(u)}</div>`:``}
            <button class="uv-btn-match uv-btn-match-expanded" data-code="${this._esc(n)}">Link Product</button>
          </div>
        </div>
      </div>
    `}_extractFinishFromSeima(e){let t=`${e.group||``} ${e.name||``}`,n=this._normalizeFinish(t);if(n&&n.length>2)return n.charAt(0).toUpperCase()+n.slice(1);if(e.colour){let t=this._normalizeFinish(e.colour);if(t&&t.length>2)return t.charAt(0).toUpperCase()+t.slice(1)}return``}_extractMaterialFromSeima(e){let t=(e.longDescription||``).toLowerCase();return t.includes(`solid brass`)||t.includes(`lead-free brass`)||t.includes(`lead free brass`)?`Solid Brass`:t.includes(`brass`)?`Brass`:t.includes(`vitreous china`)||t.includes(`ceramic`)?`Ceramic`:t.includes(`acrylic`)?`Acrylic`:t.includes(`stainless steel`)?`Stainless Steel`:t.includes(`stone`)?`Stone`:t.includes(`glass`)?`Glass`:``}_seimaDimensions(e){let t=e.dimX,n=e.dimY,r=e.dimZ;return t&&t!==`0`?`${t} × ${n||0} × ${r||0}mm`:``}_wireSplitView(){let e=this._overlay.querySelector(`#uv-seima-search`);if(!e)return;let t;e.addEventListener(`input`,()=>{clearTimeout(t),t=setTimeout(()=>this._onSeimaSearch(e.value),200)}),e.value.length>=2?this._onSeimaSearch(e.value):(this._wireCardActions(),this._autoExpandFirst()),this._overlay.querySelector(`#uv-no-equivalent`)?.addEventListener(`click`,()=>this._submitNoEquivalent())}_autoExpandFirst(){let e=this._overlay?.querySelector(`#uv-results-area`);if(!e)return;let t=e.querySelector(`.uv-match-card`);if(t){let e=t.dataset.seimaCode;e&&this._toggleExpand(e)}}_wireCardActions(){let e=this._overlay.querySelector(`#uv-results-area`);e&&(e.querySelectorAll(`.uv-match-img`).forEach(e=>{e.addEventListener(`click`,t=>{t.stopPropagation(),this._toggleExpand(e.dataset.code)})}),e.querySelectorAll(`.uv-btn-match`).forEach(e=>{e.addEventListener(`click`,t=>{t.stopPropagation(),this._showConfirmation(e.dataset.code)})}))}_onSeimaSearch(e){let t=this._overlay.querySelector(`#uv-results-area`);if(!t)return;if(!e||e.length<2){let e=this._overlay.querySelector(`#uv-suggestions-store`);t.innerHTML=e?e.innerHTML:``,this._wireCardActions(),this._autoExpandFirst();return}let n=this._dataLayer?this._dataLayer.searchProducts(e,15):[];if(n.length===0){let n=this._overlay.querySelector(`#uv-suggestions-store`);t.innerHTML=`<div class="uv-empty">No results for "`+this._esc(e)+`"</div>`+(n?n.innerHTML:``),this._wireCardActions(),this._autoExpandFirst();return}t.innerHTML=n.map(e=>{let t=nt(e);return this._renderSeimaCard(t,{})}).join(``),this._wireCardActions(),this._autoExpandFirst()}_toggleExpand(e){let t=this._overlay.querySelector(`#uv-results-area`);if(!t)return;if(this._expandedCard===e){let n=t.querySelector(`[data-expand-code="${e}"]`);n&&(n.style.display=`none`);let r=t.querySelector(`.uv-match-card[data-seima-code="${e}"]`);r&&r.classList.remove(`uv-card-expanded`),this._expandedCard=null;return}t.querySelectorAll(`.uv-match-expanded`).forEach(e=>e.style.display=`none`),t.querySelectorAll(`.uv-match-card`).forEach(e=>e.classList.remove(`uv-card-expanded`));let n=t.querySelector(`[data-expand-code="${e}"]`),r=t.querySelector(`.uv-match-card[data-seima-code="${e}"]`);n&&(n.style.display=`flex`,n.querySelectorAll(`.uv-btn-match`).forEach(e=>{e.addEventListener(`click`,t=>{t.stopPropagation(),this._showConfirmation(e.dataset.code)})})),r&&r.classList.add(`uv-card-expanded`),this._expandedCard=e}_showConfirmation(e){let t=this._overlay?.querySelector(`.uv-modal`);if(!t)return;let n=t.querySelector(`.uv-confirm-overlay`);n&&n.remove();let r=this._seimaFormatted.find(t=>t.orderCode===e),i=r?r.name:e,a=document.createElement(`div`);a.className=`uv-confirm-overlay`,a.innerHTML=`
      <div class="uv-confirm-box">
        <div class="uv-confirm-message">Your selection has been recorded and will be placed into your grid.</div>
        <div class="uv-confirm-product">${this._esc(i)}</div>
        <div class="uv-confirm-actions">
          <button class="uv-confirm-cancel">Cancel</button>
          <button class="uv-confirm-done">Done</button>
        </div>
      </div>
    `,a.querySelector(`.uv-confirm-cancel`).addEventListener(`click`,()=>a.remove()),a.querySelector(`.uv-confirm-done`).addEventListener(`click`,()=>{this._submitAndClose(e)}),a.addEventListener(`click`,e=>{e.target===a&&a.remove()}),t.appendChild(a)}async _submitAndClose(e){if(!this._currentCompetitor||!this._currentCompetitorProduct)return;let t=a.getCurrentUser();if(!t?.email){this._showToast(`Please sign in to submit.`,`error`);return}if(tt>=et){this._showToast(`Session limit reached. Thank you for your contributions!`,`error`);return}let n=this._currentCompetitor,r=String(this._currentCompetitorProduct.product_code||``),i=this._seimaByCode[e],o=this._onProductSelected;i&&o&&o(i),this.close(),this._showToast(`Thanks! Your suggestion has been submitted for review.`);try{await z.submitUserVerification(n,r,e,t.email,``),tt++}catch(e){console.error(`UserVerify: submit failed`,e),this._showToast(`Submission failed — please try again later.`,`error`)}}async _submitNoEquivalent(){if(!this._currentCompetitor||!this._currentCompetitorProduct)return;let e=a.getCurrentUser();if(!e?.email){this._showToast(`Please sign in to submit.`,`error`);return}if(tt>=et){this._showToast(`Session limit reached. Thank you for your contributions!`,`error`);return}let t=String(this._currentCompetitorProduct.product_code||``);try{await z.submitUserVerification(this._currentCompetitor,t,`NO_EQUIVALENT`,e.email,`User indicated no Seima equivalent exists`),tt++,this.close(),this._showToast(`Thanks! We've noted that this product has no Seima equivalent.`)}catch(e){console.error(`UserVerify: no-equivalent submit failed`,e),this._showToast(`Failed to submit. Please try again.`,`error`)}}_quickMatch(e,n=6){if(!this._seimaFormatted||this._seimaFormatted.length===0)return[];let r=(e.product_type||e.subcategory||``).toLowerCase(),i=this._normalizeFinish(e.finish||e.colour||``),a=g(e.rrp_ex_gst);Number.isNaN(a)&&(a=_(e.rrp_inc_gst,4)??0),a>0||(a=parseFloat(e.rrp||e.price)||0);let o=(e.material||``).toLowerCase(),s=this._tokenize(`${e.product_name||``} ${e.product_type||``} ${e.collection||``} ${e.finish||``} ${e.material||``}`),c=[t(e.product_name),r].filter(Boolean),l;for(let e of c)if(l=E[e.toLowerCase()],l)break;let u=[];for(let e of this._seimaFormatted){if(l){let t=`${e.subGroup} ${e.group} ${e.range} ${e.name}`.toUpperCase();if(!l.some(e=>t.includes(e)))continue}let t=[e.subGroup,e.group,e.range,e.name,e.longDescription].filter(Boolean).join(` `).toLowerCase(),n=this._tokenize(t),r=0;for(let e of s)n.includes(e)&&r++;let c=s.length>0?r/s.length*100:0,d=this._normalizeFinish(`${e.group||``} ${e.name||``}`),f=i&&d&&i===d?100:i&&d&&(i.includes(d)||d.includes(i))?60:0,p=50;if(o){let t=(e.longDescription||``).toLowerCase();p=t.includes(o)?100:o.split(/\s+/).some(e=>e.length>=4&&t.includes(e))?60:0}let m=parseFloat(e.rrpExGst)||0,h=50;if(a>0&&m>0){let e=Math.min(a,m)/Math.max(a,m);h=e>=.8?100:e>=.6?70:e>=.4?40:10}let g=Math.round(c*.35+f*.25+p*.2+h*.2);g<15||u.push({seima:e,score:g,textScore:Math.round(c),finishScore:f,materialScore:p,priceScore:h})}u.sort((e,t)=>t.score-e.score);let d=new Set,f=[];for(let e of u)if(!d.has(e.seima.orderCode)&&(d.add(e.seima.orderCode),f.push(e),f.length>=n))break;return f}_normalizeFinish(e){let t=(e||``).toLowerCase();for(let[e,n]of Object.entries({chrome:[`chrome`,` cr`,`,cr`,`cp`,`polished chrome`],"matte black":[`matte black`,`matt black`,` mb`,`,mb`,`mblk`,`black`],"brushed nickel":[`brushed nickel`,` bn`,`,bn`,`satin nickel`,`nickel`],"brushed brass":[`brushed brass`,` bb`,`,bb`,`brass`,`warm brass`],"brushed gold":[`brushed gold`,` bg`,`,bg`,`gold`,`light gold`],"gun metal":[`gun metal`,`gunmetal`,` gm`,`,gm`],white:[`white`,` wh`,`,wh`,`gloss white`],"stainless steel":[`stainless steel`,` ss`,`,ss`,`stainless`]}))if(n.some(e=>t.includes(e)))return e;return t.trim()}_tokenize(e){return(e||``).toLowerCase().replace(/[^a-z0-9\s]/g,` `).split(/\s+/).filter(e=>e.length>=2)}_showToast(e,t=`success`){let n=document.querySelector(`.uv-toast`);n&&n.remove();let r=document.createElement(`div`);r.className=`uv-toast uv-toast-${t}`,r.textContent=e,document.body.appendChild(r),setTimeout(()=>r.classList.add(`uv-toast-visible`),10),setTimeout(()=>{r.classList.remove(`uv-toast-visible`),setTimeout(()=>r.remove(),300)},3500)}_extractCompetitorDimensions(e){if(!e)return``;if(e.dimensions_mm)return e.dimensions_mm;let t=0,n=0,r=0;for(let i of Object.keys(e)){let a=i.toLowerCase();a.includes(`width`)&&!t&&(t=parseFloat(e[i])||0),a.includes(`depth`)&&!n&&(n=parseFloat(e[i])||0),a.includes(`height`)&&!r&&(r=parseFloat(e[i])||0)}if(t>0||n>0||r>0){let e=[];return t&&e.push(t),n&&e.push(n),r&&e.push(r),e.join(` × `)+`mm`}return``}_esc(e){let t=document.createElement(`div`);return t.textContent=e||``,t.innerHTML}};function at(e){if(e==null||e===``)return NaN;let t=Number(String(e).replace(/,/g,``));return Number.isFinite(t)&&t>0?t:NaN}function ot(e){let t=at(e?.RRP_EX||e?.[`RRP EX GST`]||e?.RRP_EXGST||e?.rrpExGst||e?.[`PL1 - RRP EX GST`]);if(!Number.isNaN(t))return`$${t.toLocaleString(`en-AU`,{minimumFractionDigits:2,maximumFractionDigits:2})} ex GST`;let n=at(e?.RRP_INCGST||e?.[`RRP INC GST`]||e?.rrpIncGst);return Number.isNaN(n)?``:`$${n.toLocaleString(`en-AU`,{minimumFractionDigits:2,maximumFractionDigits:2})} inc GST`}function st(e){let t=at(e?.rrp_ex_gst);if(Number.isNaN(t)){let n=_(e?.rrp_inc_gst,2);n!=null&&(t=n)}return Number.isNaN(t)?``:`$${t.toLocaleString(`en-AU`,{minimumFractionDigits:2,maximumFractionDigits:2})} ex GST`}var ct=class{constructor(){this.activeDropdown=null,this.updatePositionHandler=null,document.addEventListener(`click`,e=>{e.target.closest(`.global-search-dropdown`)||this.hideDropdown()})}showDropdown(e,t,n,i=!1){this.hideDropdown();let a=document.createElement(`ul`);a.className=`global-search-dropdown`;let o=e.getBoundingClientRect(),s=window.innerWidth;window.innerHeight;let c=o.width,l=o.left;l+c>s-8&&(l=s-c-8),l<8&&(l=8);let u={position:`fixed`,top:`0px`,left:`${l}px`,width:`${c}px`,minWidth:`${c}px`,maxWidth:`${c}px`,background:`#fff`,border:`1px solid #d1d5db`,borderRadius:`8px`,boxShadow:`0 10px 25px -5px rgba(0, 0, 0, 0.15), 0 8px 10px -6px rgba(0, 0, 0, 0.10)`,maxHeight:`300px`,overflowY:`auto`,overflowX:`hidden`,zIndex:`10010`,listStyle:`none`,margin:`0`,padding:`4px 0`,whiteSpace:`normal`,wordWrap:`break-word`,display:`block`,pointerEvents:`auto`,transform:`none`,contain:`none`,isolation:`isolate`,visibility:`hidden`};if(Object.keys(u).forEach(e=>{a.style.setProperty(e,u[e],`important`)}),a.maxDropdownHeight=300,t.length===0)a.innerHTML=`<li style="padding: 12px 16px; color: #6b7280; font-style: italic; background: #fff;">No products found</li>`;else{let e=e=>r.escapeHtml(String(e||``)),n=t=>{let n=String(t||``).trim();return/^(https?:|data:image\/|assets\/)/i.test(n)?e(n):``};a.innerHTML=t.map(t=>{if(t._crosshairValidate){let r=t._crosshairValidate,i=n(r.imageUrl),a=r.imageUrl?`<img src="${i}" alt="" style="width:32px; height:32px; object-fit:contain; border-radius:4px; margin-right:10px; vertical-align:middle; flex-shrink:0;">`:``,o=(r.validatorSearch||r.productCode||``).trim();return`<li data-validate-competitor="${e(r.competitor)}" data-validate-code="${e(r.productCode)}" data-validate-search="${e(o)}"
                       style="padding: 10px 16px; cursor: pointer; border-bottom: 1px solid #f3f4f6;
                              font-size: 13px; line-height: 1.4; display: flex; align-items: center;
                              background: #fffbeb !important; border-left: 3px solid #f59e0b;">
            ${a}
            <div style="flex:1; min-width:0;">
              <div style="font-weight: 600; color: #92400e;">${e(r.productName)}</div>
              <div style="color: #78716c; font-size: 11px;">${e(z.getPublicCompetitorLabel(r.competitor))} · #${e(r.productCode)}${r.finish?` · `+e(r.finish):``} · ${r.matchCount>0?r.matchCount+` suggested match`+(r.matchCount===1?``:`es`):`no Seima match yet`}</div>
            </div>
            <span style="color: #d97706; font-size: 11px; font-weight: 600; white-space: nowrap; margin-left: 8px;">Review →</span>
          </li>`}let r=t.OrderCode||t.Code||``,i=t.Description||t.ProductName||t[`Product Name`]||``,a=t.Image_URL||t.image_url||``,o=t._crosshairMatch,s=t._outsidePublicPricelist?`<abbr class="grid-search-ext-not-public" title="Not on the public price list — confirm with Seima before quoting.">*</abbr>`:``,c=o?`<span style="display: inline-block; background: ${o.status===`Verified`?`#e8f5e9`:`#e3f2fd`}; color: ${o.status===`Verified`?`#2e7d32`:`#1565c0`}; font-size: 10px; font-weight: 600; padding: 1px 6px; border-radius: 8px; margin-left: 8px;">↔ ${e(o.competitorLabel||z.getPublicCompetitorLabel(o.competitor))}</span>`:``,l=n(a),u=a?`<img src="${l}" alt="" style="width:36px; height:36px; object-fit:contain; border-radius:4px; margin-right:10px; flex-shrink:0;" onerror="this.style.display='none'">`:``,d=o?Object.fromEntries(Object.entries(t).filter(([e])=>e!==`_crosshairMatch`)):t;return`<li data-product='${JSON.stringify(d).replace(/'/g,`&apos;`)}'
                     style="padding: 8px 16px; cursor: pointer; border-bottom: 1px solid #f3f4f6; 
                            transition: background-color 0.15s ease; font-size: 14px; line-height: 1.5;
                            margin: 0; display: flex; align-items: center; width: 100%; 
                            white-space: normal; word-wrap: break-word; overflow: visible; background: ${o?`#f0f7ff`:`#fff`} !important;">
          ${u}
          <div style="flex:1; min-width:0;">
            <span style="font-weight: 600; color: #2563eb;">${e(r)}${s}</span>
            <span style="color: #6b7280; margin: 0 8px;">—</span>
            <span style="color: #374151;">${e(i)}</span>
            ${c}
          </div>
        </li>`}).join(``)}if(a.addEventListener(`mouseenter`,e=>{let t=e.target.closest(`li`);t&&(t.dataset.validateCompetitor?t.style.background=`#fef3c7`:t.dataset.product&&(a.querySelectorAll(`li.active`).forEach(e=>e.classList.remove(`active`)),t.classList.add(`hover`)))},!0),a.addEventListener(`mouseleave`,e=>{let t=e.target.closest(`li`);t&&(t.dataset.validateCompetitor?t.style.background=`#fffbeb`:t.dataset.product&&t.classList.remove(`hover`))},!0),a.addEventListener(`click`,e=>{let t=e.target.closest(`li`);if(t){if(t.dataset.validateCompetitor){let e=t.dataset.validateCompetitor,r=t.dataset.validateCode,i=(t.dataset.validateSearch||r||``).trim();z.isWriteEnabled()?window.location.href=`screens/validator.html?competitor=${encodeURIComponent(e)}&search=${encodeURIComponent(i)}`:(this.hideDropdown(),$.open(`${z.getPublicCompetitorLabel(e)}: ${r}`,e=>{n(e)}))}else if(t.dataset.product)try{n(JSON.parse(t.getAttribute(`data-product`))),this.hideDropdown()}catch(e){console.error(`Failed to parse product data:`,e)}}}),i){let e=a.querySelector(`li[data-product]`);e&&(e.classList.add(`active`),e.style.setProperty(`background`,`rgba(184,115,51,0.12)`,`important`))}document.body.appendChild(a),this.activeDropdown=a,this._positionDropdown(a,e),a.style.setProperty(`visibility`,`visible`,`important`),this.updatePositionHandler=()=>{this._positionDropdown(a,e)},window.addEventListener(`scroll`,this.updatePositionHandler,{passive:!0}),window.addEventListener(`resize`,this.updatePositionHandler,{passive:!0})}_positionDropdown(e,t){let n=t.getBoundingClientRect(),r=window.innerWidth,i=window.innerHeight,a=e.scrollHeight,o=e.maxDropdownHeight||300,s=Math.min(a,o),c=i-n.bottom,l=n.top,u=c<s&&l>c,d;d=u?Math.max(8,n.top-s-8):n.bottom+8;let f=n.left;f+n.width>r-8&&(f=r-n.width-8),f<8&&(f=8),e.style.setProperty(`top`,`${d}px`,`important`),e.style.setProperty(`left`,`${f}px`,`important`),e.style.setProperty(`width`,`${n.width}px`,`important`),e.style.setProperty(`min-width`,`${n.width}px`,`important`),e.style.setProperty(`max-width`,`${n.width}px`,`important`)}showLoadingDropdown(e){this.hideDropdown();let t=document.createElement(`ul`);t.className=`global-search-dropdown`;let n=e.getBoundingClientRect();Object.entries({position:`fixed`,left:`${n.left}px`,width:`${n.width}px`,background:`#fff`,border:`1px solid #d1d5db`,borderRadius:`8px`,boxShadow:`0 10px 25px -5px rgba(0, 0, 0, 0.15), 0 8px 10px -6px rgba(0, 0, 0, 0.10)`,zIndex:`10010`,listStyle:`none`,margin:`0`,padding:`0`,transform:`none`}).forEach(([e,n])=>t.style.setProperty(e,n,`important`)),t.maxDropdownHeight=80,t.innerHTML=`
      <li style="padding: 16px 20px; display: flex; align-items: center; gap: 12px; color: #6b7280; background: #fff;">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#b87333" stroke-width="2.5" style="flex-shrink:0;animation:spin 1s linear infinite">
          <path d="M12 2a10 10 0 0 1 10 10" stroke-linecap="round"/>
        </svg>
        <span style="font-size: 13px;">Loading product catalogue&hellip;</span>
      </li>`,document.body.appendChild(t),this.activeDropdown=t,this._positionDropdown(t,e)}hideDropdown(){this.activeDropdown&&(this.updatePositionHandler&&(window.removeEventListener(`scroll`,this.updatePositionHandler),window.removeEventListener(`resize`,this.updatePositionHandler)),this.activeDropdown.remove(),this.activeDropdown=null,this.updatePositionHandler=null)}},lt=`tipTailSettings`,ut=`customerLogo`,dt=class e{constructor(){this.gridRows=[],this.nextRowId=1,this._matchSuggestionsRunId=0,this.currentSearchRow=null,this.searchCache=new Map,this.searchTimeout=null,this.dropdownManager=new ct,this.lastUsedRoom=`Blank`,this.draggedRowId=null,this.draggedRoomName=null,this.customRoomOrder=this.loadCustomRoomOrder(),this.currentSelectionId=null,this.currentSelectionName=`New Selection`,this.hasUnsavedChanges=!1,this.autoSaveTimeout=null,this.lastSaveTime=null,this.guidedAssist={enabled:!1,category:``,group:``,query:``},this.guidedSearchTimeout=null}loadCustomRoomOrder(){try{let e=localStorage.getItem(`customRoomOrder`);return e?JSON.parse(e):[]}catch{return[]}}saveCustomRoomOrder(){try{localStorage.setItem(`customRoomOrder`,JSON.stringify(this.customRoomOrder))}catch(e){console.warn(`Failed to save room order:`,e)}}init(){let t=document.querySelector(`.grid-table`);t&&(t.style.removeProperty(`table-layout`),t.style.removeProperty(`overflow`),t.classList.remove(`has-open-dropdown`));let n=document.querySelector(`.global-search-dropdown`);n&&n.remove(),this.setupEventListeners(),this.updateAllRoomDropdowns(),this.loadExistingProducts(),this.updateTotals(),this.ensureAtLeastOneEmptyRow(),this.setupGuidedAssist(),this.handleSortChange(),this.initContextHeader(),this.checkForRecentSelection(),e._catalogListenerInstalled||(e._catalogListenerInstalled=!0,P.onCatalogUpdated(()=>{let e=window.productGridManager;e&&(e.searchCache.clear(),document.getElementById(`grid-body`)&&(e.renderGrid(),e.attachSeimaMatchSuggestions()))}))}initContextHeader(){this.updateContextHeader();let e=document.getElementById(`save-selection-btn`),t=document.getElementById(`load-selection-btn`);e&&e.addEventListener(`click`,()=>this.showSaveDialog()),t&&t.addEventListener(`click`,()=>this.showLoadPicker());let n=document.getElementById(`entry-import`),r=document.getElementById(`entry-load`),i=document.getElementById(`entry-new`),a=document.getElementById(`entry-continue`);n&&n.addEventListener(`click`,()=>this.showImportModal()),r&&r.addEventListener(`click`,()=>this.showLoadPicker()),i&&i.addEventListener(`click`,()=>this.addEmptyRow()),a&&a.addEventListener(`click`,()=>this.loadRecentSelection())}updateContextHeader(){let e=document.getElementById(`selection-name`),t=document.getElementById(`status-icon`),n=document.getElementById(`save-indicator`);e&&(e.textContent=this.currentSelectionName||`New Selection`),t&&(this.currentSelectionId?(t.textContent=`●`,t.classList.add(`saved`),t.classList.remove(`unsaved`)):(t.textContent=`○`,t.classList.remove(`saved`))),n&&(n.style.display=this.hasUnsavedChanges?`flex`:`none`)}markAsChanged(){this.hasUnsavedChanges=!0,this.updateContextHeader(),clearTimeout(this.autoSaveTimeout),this.autoSaveTimeout=setTimeout(()=>{this.hasUnsavedChanges&&this.currentSelectionId&&this.autoSave()},3e4)}async autoSave(){if(!(!this.currentSelectionId||!this.hasUnsavedChanges))try{let e=this.prepareSelectionData();(await Y.updateSelection(this.currentSelectionId,e)).success&&(this.hasUnsavedChanges=!1,this.lastSaveTime=new Date,this.updateContextHeader(),Q.success(`Auto-saved`))}catch(e){console.warn(`Auto-save failed:`,e)}}async checkForRecentSelection(){try{let e=M.getUserSettings(),t=a.getCurrentUser();if(!(e?.staffEmail||t?.email))return;let n=await X.fetchSelections();if(n.length>0){let e=n[0],t=document.getElementById(`entry-continue`),r=document.getElementById(`recent-selection-name`);t&&r&&(t.style.display=`flex`,r.textContent=`${e.documentName||e.customerName} • ${e.date}`,t.dataset.selectionId=e.id)}}catch(e){console.warn(`Could not check for recent selections:`,e)}}async loadRecentSelection(){if(!document.getElementById(`entry-continue`)?.dataset.selectionId){Q.warning(`No recent selection found`);return}this.showLoadPicker()}prepareSelectionData(){let e=r.getStorageItem(`pdfFormSettings`,{});return{customerName:e.name||``,customerEmail:e.email||``,customerPhone:e.telephone||``,customerProject:e.project||``,customerAddress:e.address||``,documentName:this.currentSelectionName,notes:``,pdfSettings:r.getStorageItem(`pdfWizardSettings`,{}),gridRows:M.getSelectedProducts(),roomOrder:this.customRoomOrder}}setupEventListeners(){let e=document.getElementById(`back-to-home`),t=document.getElementById(`import-file-btn`),n=document.getElementById(`download-btn`),i=document.getElementById(`clear-all-btn`),a=document.getElementById(`add-row-btn`);e&&(e.onclick=()=>location.reload()),t&&(t.onclick=()=>this.showImportModal()),n&&(n.onclick=()=>this.showDownloadModal()),i&&(i.onclick=()=>this.showClearAllModal()),a&&(a.onclick=()=>this.addEmptyRow());let o=document.getElementById(`clear-all-cancel`),s=document.getElementById(`clear-all-confirm`);o&&(o.onclick=()=>this.hideClearAllModal()),s&&(s.onclick=()=>{let e=document.getElementById(`clear-customer-details`)?.checked??!0;this.clearAll(e),this.hideClearAllModal()});let c=document.getElementById(`clear-all-modal`);c&&(c.onclick=e=>{e.target===c&&this.hideClearAllModal()});let l=document.getElementById(`sort-by`);l&&(l.onchange=()=>this.handleSortChange());let u=document.getElementById(`sort-refresh-btn`);u&&(u.onclick=()=>this.handleSortChange());let d=document.getElementById(`grid-body`);d&&(d.addEventListener(`input`,this.handleGridInput.bind(this)),d.addEventListener(`change`,this.handleGridChange.bind(this)),d.addEventListener(`click`,this.handleGridClick.bind(this)),d.addEventListener(`keydown`,this.handleGridKeydown.bind(this)),d.addEventListener(`focusin`,this.handleGridFocusIn.bind(this)),d.addEventListener(`focusout`,this.handleGridFocusOut.bind(this)),d.addEventListener(`dragstart`,this.handleDragStart.bind(this)),d.addEventListener(`dragover`,this.handleDragOver.bind(this)),d.addEventListener(`dragleave`,this.handleDragLeave.bind(this)),d.addEventListener(`drop`,this.handleDrop.bind(this)),d.addEventListener(`dragend`,this.handleDragEnd.bind(this))),document.addEventListener(`click`,e=>{!e.target.closest(`.grid-product-cell`)&&!e.target.closest(`.global-search-dropdown`)&&this.hideAllDropdowns()});let f=document.getElementById(`pdf-email-modal`),p=document.getElementById(`pdf-email-cancel`);p&&f&&(p.onclick=()=>{f.style.display=`none`});let m=`pdfFormSettings`,h=document.getElementById(`pdf-email-form`);f&&f.addEventListener(`show`,()=>{let e=r.getStorageItem(m,{});h&&(h[`user-name`].value=e.name||``,h[`user-project`].value=e.project||``,h[`user-address`].value=e.address||``,h[`user-email`].value=e.email||``,h[`user-telephone`].value=e.telephone||``,h[`exclude-prices`].checked=!!e.excludePrices,h[`exclude-qty`].checked=!!e.excludeQty,h[`exclude-long-description`].checked=!!e.excludeLongDescription,h[`include-gst`].checked=!!e.includeGst)}),h&&(h.addEventListener(`input`,()=>{r.setStorageItem(m,{name:h[`user-name`].value,project:h[`user-project`].value,address:h[`user-address`].value,email:h[`user-email`].value,telephone:h[`user-telephone`].value,excludePrices:h[`exclude-prices`].checked,excludeQty:h[`exclude-qty`].checked,excludeLongDescription:h[`exclude-long-description`].checked,includeGst:h[`include-gst`].checked})}),h.addEventListener(`change`,()=>{r.setStorageItem(m,{name:h[`user-name`].value,project:h[`user-project`].value,address:h[`user-address`].value,email:h[`user-email`].value,telephone:h[`user-telephone`].value,excludePrices:h[`exclude-prices`].checked,excludeQty:h[`exclude-qty`].checked,excludeLongDescription:h[`exclude-long-description`].checked,includeGst:h[`include-gst`].checked})}),h.onsubmit=e=>{e.preventDefault(),r.setStorageItem(m,{name:h[`user-name`].value,project:h[`user-project`].value,address:h[`user-address`].value,email:h[`user-email`].value,telephone:h[`user-telephone`].value,excludePrices:h[`exclude-prices`].checked,excludeQty:h[`exclude-qty`].checked,excludeLongDescription:h[`exclude-long-description`].checked,includeGst:h[`include-gst`].checked});let t={name:h[`user-name`]?.value||``,project:h[`user-project`]?.value||``,address:h[`user-address`]?.value||``,email:h[`user-email`]?.value||``,telephone:h[`user-telephone`]?.value||``,excludePrice:h[`exclude-qty`]?.checked?!0:h[`exclude-price`]?.checked||h[`exclude-prices`]?.checked||!1,excludeQty:h[`exclude-qty`]?.checked||!1,excludeLongDescription:h[`exclude-long-description`]?.checked||!1,includeGst:h[`include-gst`]?.checked||!1,exportCsv:!0};window.showPdfFormScreen?window.showPdfFormScreen(t):typeof showPdfFormScreen==`function`&&showPdfFormScreen(t),f&&(f.style.display=`none`)})}addEmptyRow(){let e=`row_${this.nextRowId++}`,t={id:e,product:null,room:`Blank`,quantity:1,price:`0.00`,notes:``};this.gridRows.push(t),this.renderGrid(),setTimeout(()=>{let t=document.querySelector(`[data-row-id="${e}"]`);t&&(t.scrollIntoView({behavior:`smooth`,block:`center`}),t.style.backgroundColor=`#dbeafe`,t.style.transition=`background-color 0.3s ease`,setTimeout(()=>{t.style.backgroundColor=``;let e=t.querySelector(`.grid-search-input`);e&&e.focus()},800))},100)}removeRow(e){let t=this.gridRows.findIndex(t=>t.id===e);if(t!==-1){let e=this.gridRows[t],n={...e,index:t,product:e.product?{...e.product}:null};if(e.product&&e.storageId&&M.removeProductFromSelection(e.storageId),this.gridRows.splice(t,1),this.renderGrid(),this.updateTotals(),n.product){let e=n.product.Description||n.product.ProductName||n.product.OrderCode||`Product`,t=e.length>30?e.substring(0,30)+`...`:e;Q.withUndo(`Removed "${t}"`,()=>{this.restoreRow(n)})}}this.ensureAtLeastOneEmptyRow()}restoreRow(e){let t={id:`row-${this.nextRowId++}`,product:e.product,qty:e.qty||1,notes:e.notes||``,room:e.room||`Blank`,price:e.price||null,storageId:null};t.product&&(t.storageId=M.addProductToSelection(t.product,{notes:t.notes,room:t.room,quantity:t.quantity}));let n=Math.min(e.index,this.gridRows.length);this.gridRows.splice(n,0,t),this.renderGrid(),this.updateTotals(),Q.success(`Product restored`)}moveRow(e,t){let n=this.gridRows.findIndex(t=>t.id===e);if(n===-1)return;let r;if(t===`up`?r=Math.max(0,n-1):t===`down`&&(r=Math.min(this.gridRows.length-1,n+1)),r===n)return;let i=this.gridRows.splice(n,1)[0];this.gridRows.splice(r,0,i),this.renderGrid(),this.updateTotals(),setTimeout(()=>{let t=document.querySelector(`[data-row-id="${e}"]`);t&&(t.style.backgroundColor=`#dbeafe`,setTimeout(()=>{t.style.backgroundColor=``},500))},100)}async handleProductSearch(e,t){if(!t||t.length<2){this.hideSearchDropdown(e);return}let n=t.toLowerCase();if(this.searchCache.has(n)){this.showSearchResults(e,this.searchCache.get(n),t);return}this.dropdownManager.showLoadingDropdown(e),clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(async()=>{try{let r=await this.searchProducts(t);this.searchCache.set(n,r),this.showSearchResults(e,r,t)}catch(t){console.error(`Product search failed:`,t),this.hideSearchDropdown(e)}},300)}_isSeimaCatalogOrderCode(e){let t=String(e??``).trim();return!!(t&&P.isLoaded&&P.findProductByCode(t))}async searchProducts(e){P.isLoaded||await new Promise(e=>{let t=()=>{P.isLoaded?e():setTimeout(t,100)};t()});let t=z.isEnabled();z.isWriteEnabled();let n=!!a.getCurrentUser(),r=null;if(t&&e.trim().length>=2&&!e.includes(` `))try{r=await z.findSeimaMatches(e.trim())}catch{}let[i,o,s]=await Promise.all([Promise.resolve(P.searchProducts(e,50)),t?z.findAlternatives(e).catch(e=>(console.warn(`Crosshair competitor lookup failed:`,e),[])):Promise.resolve([]),t&&n?z.findUnvalidatedProducts(e).catch(e=>(console.warn(`Crosshair unvalidated lookup failed:`,e),[])):Promise.resolve([])]),c=[...this.applyGuidedFilters(i)];if(r&&r.matches?.length>0){let e=String(r.matches[0].SeimaSKU),t=P.findProductByCode(e);if(t&&!c.some(t=>(t.OrderCode||t.Code)===e)){let e=r.competitorProduct,n=String(e?.product_code||r.matches[0].CompetitorSKU||``),i=e?.product_name||``,a=e?.finish||``,o=[z.getPublicCompetitorLabel(r.competitor)+`:`,n,i?`- `+i:``,a?`- `+a:``].filter(Boolean).join(` `);c.unshift({...t,_crosshairMatch:{competitor:r.competitor,competitorProduct:e,competitorLabel:o,confidence:r.matches[0].Confidence,reason:r.matches[0].MatchReason,status:r.matches[0].Status}})}}if(o.length>0){let e=new Set(c.map(e=>e.OrderCode));for(let t of o){let n=P.findProductByCode(t.seimaSKU);if(!n||e.has(n.OrderCode))continue;e.add(n.OrderCode);let r=t.competitorProduct,i=String(r?.product_code||t.match.CompetitorSKU||``),a=r?.product_name||``,o=r?.finish||``,s=[z.getPublicCompetitorLabel(t.competitor)+`:`,i,a?`- `+a:``,o?`- `+o:``].filter(Boolean).join(` `);c.unshift({...n,_crosshairMatch:{competitor:t.competitor,competitorProduct:r,competitorLabel:s,confidence:t.match.Confidence,reason:t.match.MatchReason,status:t.match.Status}})}}if(s.length>0)for(let e of s){let t=e.product,n=String(t.product_code||``);if(this._isSeimaCatalogOrderCode(n))continue;let r=(t.brand||``).trim();c.push({_crosshairValidate:{competitor:e.competitor,productCode:n,validatorSearch:r&&n?`${r} ${n}`.trim():n,productName:t.product_name||t.collection||n,matchCount:e.matchCount,imageUrl:t.image_url,finish:t.finish||``}})}if(c.length===0&&t&&e.trim().length>=3&&!e.includes(` `))try{let t=await z.findCompetitorEntryByCode(e.trim());if(t){let n=t.competitorProduct,r=String(n?.product_code||t.matchedCode||e.trim());if(!this._isSeimaCatalogOrderCode(r)){let e=(n?.brand||``).trim();c.push({_crosshairValidate:{competitor:t.competitor,productCode:r,validatorSearch:e&&r?`${e} ${r}`.trim():r,productName:n?.product_name||n?.collection||r,matchCount:0,imageUrl:n?.image_url||``,finish:n?.finish||``}})}}}catch{}return c}_publicCatalogOnly(e){return Array.isArray(e)?e.filter(e=>e&&e._outsidePublicPricelist!==!0):[]}setupGuidedAssist(){let e=document.getElementById(`guided-assist-toggle`),t=document.getElementById(`guided-assist-panel`),n=document.getElementById(`guided-category-select`),i=document.getElementById(`guided-group-select`),a=document.getElementById(`guided-range-search`),o=document.getElementById(`guided-ask-fred`),s=document.getElementById(`guided-clear-filters`),c=document.getElementById(`guided-suggestions-list`);if(!e||!t||!n||!i||!a||!o||!s||!c)return;let l=this._publicCatalogOnly(P.getAllProducts());n.innerHTML=[`<option value="">Any category</option>`,...[...new Set(l.map(e=>String(e.SubGroup||e.Subgroup||e[`Sub Group`]||``).trim()).filter(Boolean))].sort((e,t)=>e.localeCompare(t)).map(e=>`<option value="${r.escapeHtml(String(e||``))}">${r.escapeHtml(String(e||``))}</option>`)].join(``),e.addEventListener(`click`,()=>{this.guidedAssist.enabled=!this.guidedAssist.enabled,t.style.display=this.guidedAssist.enabled?`block`:`none`,e.setAttribute(`aria-expanded`,String(this.guidedAssist.enabled)),e.textContent=this.guidedAssist.enabled?`Hide range explorer`:`Browse full range`,this.renderGuidedSuggestions()}),n.addEventListener(`change`,()=>{this.guidedAssist.category=n.value,this.guidedAssist.group=``,this.refreshGuidedGroupOptions(),this.searchCache.clear(),this.renderGuidedSuggestions()}),i.addEventListener(`change`,()=>{this.guidedAssist.group=i.value,this.searchCache.clear(),this.renderGuidedSuggestions()}),a.addEventListener(`input`,()=>{clearTimeout(this.guidedSearchTimeout),this.guidedSearchTimeout=setTimeout(()=>{this.guidedAssist.query=String(a.value||``).trim(),this.renderGuidedSuggestions()},180)}),o.addEventListener(`click`,()=>{let e=document.getElementById(`ai-chat-trigger`);e&&e.click()}),s.addEventListener(`click`,()=>{this.guidedAssist.category=``,this.guidedAssist.group=``,this.guidedAssist.query=``,n.value=``,i.value=``,a.value=``,this.refreshGuidedGroupOptions(),this.searchCache.clear(),this.renderGuidedSuggestions()}),c.addEventListener(`click`,e=>{let t=e.target.closest(`.guided-suggestion-add`);if(t){let e=t.dataset.code;if(!e)return;let n=P.findProductByCode(e);if(!n)return;let r=this.gridRows.find(e=>!e.product)||null;if(r){let e=document.querySelector(`[data-row-id="${r.id}"] .grid-search-input`);if(e){this.selectProduct(e,n);return}}this.addEmptyRow(),setTimeout(()=>{let e=this.gridRows[this.gridRows.length-1],t=e?document.querySelector(`[data-row-id="${e.id}"] .grid-search-input`):null;t&&this.selectProduct(t,n)},80);return}let n=e.target.closest(`.guided-suggestion-item`);if(!n)return;let r=n.dataset.code;if(!r)return;let i=P.findProductByCode(r);i&&this._showProductDetailModal(i)}),this.refreshGuidedGroupOptions(),this.renderGuidedSuggestions()}refreshGuidedGroupOptions(){let e=document.getElementById(`guided-group-select`);if(!e)return;let t=this._publicCatalogOnly(P.getAllProducts());e.innerHTML=[`<option value="">Any group</option>`,...[...new Set(t.filter(e=>!this.guidedAssist.category||String(e.SubGroup||e.Subgroup||e[`Sub Group`]||``).trim()===this.guidedAssist.category).map(e=>String(e.Group||``).trim()).filter(Boolean))].sort((e,t)=>e.localeCompare(t)).map(e=>`<option value="${r.escapeHtml(String(e||``))}">${r.escapeHtml(String(e||``))}</option>`)].join(``)}applyGuidedFilters(e){if(!this.guidedAssist.enabled)return e;let{category:t,group:n}=this.guidedAssist;return!t&&!n?e:e.filter(e=>{let r=String(e.SubGroup||e.Subgroup||e[`Sub Group`]||``).trim(),i=String(e.Group||``).trim();return!(t&&r!==t||n&&i!==n)})}renderGuidedSuggestions(){let e=document.getElementById(`guided-suggestions-list`),t=document.getElementById(`guided-selection-hint`);if(!e||!t)return;if(!this.guidedAssist.enabled){e.innerHTML=``,t.textContent=`Open Range Explorer to browse the full catalog with images, filters, and smart search.`;return}let{category:n,group:i,query:a}=this.guidedAssist,o=a&&a.length>=2?P.searchProducts(a,300):P.getAllProducts(),s=this._publicCatalogOnly(o),c=this.applyGuidedFilters(s);if(c.length===0){e.innerHTML=``,t.textContent=a?`No products found for "${a}" with current filters.`:`No products found for the selected filters.`;return}t.textContent=`Showing ${c.length} products${n?` · ${n}`:``}${i?` / ${i}`:``}${a?` · "${a}"`:``}.`,e.innerHTML=c.map(e=>{let t=e=>r.escapeHtml(String(e||``)),n=e.OrderCode||``,i=e.Description||e.ProductName||e[`Product Name`]||``,a=e.SubGroup||e[`Sub Group`]||``,o=a?`<span class="guided-badge">Category: ${t(a)}</span>`:``,s=String(e.Image_URL||e.imageUrl||e.Image||`assets/no-image.png`).trim(),c=/^(https?:|data:image\/|assets\/)/i.test(s)?s:`assets/no-image.png`;return`
        <div class="guided-suggestion-item" data-code="${t(n)}">
          <img class="guided-suggestion-image" src="${t(c)}" alt="${t(i)}" onerror="this.src='assets/no-image.png';">
          <div class="guided-suggestion-main">
            <div class="guided-suggestion-title"><strong>${t(n)}</strong> ${t(i)}</div>
            <div class="guided-badges">${o}</div>
          </div>
          <div class="guided-suggestion-actions">
            <button type="button" class="guided-suggestion-add" data-code="${t(n)}">Add</button>
          </div>
        </div>
      `}).join(``)}showSearchResults(e,t,n){let r=!1;if(t.length>0&&n){let e=n.toUpperCase().trim(),i=t[0],a=(i.OrderCode||``).toString().toUpperCase().trim(),o=(i.BARCODE||i.Barcode||``).toString().toUpperCase().trim();(a===e||o===e)&&(r=!0)}this.dropdownManager.showDropdown(e,t,t=>this.selectProduct(e,t),r)}setupDropdownEvents(e,t){}hideSearchDropdown(e){this.hideGlobalDropdown()}hideGlobalDropdown(){this.dropdownManager.hideDropdown()}selectProduct(e,t){let n=e.closest(`.grid-row`),r=n.dataset.rowId,i=this.gridRows.find(e=>e.id===r);if(!i)return;let a=null;i.storageId&&i.product?._placeholder&&(a=M.getSelectedProducts().findIndex(e=>e.id===i.storageId),M.removeProductFromSelection(i.storageId),i.storageId=null),i.product=t;let o=t.RRP_EX||t[`RRP EX GST`]||t.RRP_EX||t.RRP_EXGST||t.rrpExGst||t[`PL1 - RRP EX GST`]||``;i.price=o;let s=n.querySelector(`input[name="price"]`);s&&(s.value=o),e.value=``,this.renderGrid(),this.saveRowToStorage(i,a),this.focusNextRowOrCreate(r)}saveRowToStorage(e,t=null){if(!e.product)return;let n={...e.product,OrderCode:e.product.OrderCode||e.product.Code||``,Description:e.product.Description||e.product.ProductName||e.product[`Product Name`]||``,UserEditedPrice:e.price,RRP_EX:e.product.RRP_EX||e.product[`RRP EX GST`]||e.product.RRP_EX||e.product.RRP_EXGST||e.product.rrpExGst||e.product[`PL1 - RRP EX GST`]||``,RRP_INCGST:e.product.RRP_INCGST||e.product[`RRP INC GST`]||e.product.rrpIncGst||``,Image_URL:e.product.Image_URL||e.product.imageUrl||e.product.Image||`assets/no-image.png`};if(e.storageId){M.updateSelectionProduct(e.storageId,n,{notes:e.notes,room:e.room,quantity:e.quantity,userPrice:e.price})&&this.updateTotals();return}let r;r=t!=null&&t>=0?M.addProductToSelectionAt(t,n,{notes:e.notes,room:e.room,quantity:e.quantity}):M.addProductToSelection(n,{notes:e.notes,room:e.room,quantity:e.quantity}),r&&(e.storageId=r,this.updateTotals())}focusNextRowOrCreate(e){let t=this.gridRows.findIndex(t=>t.id===e);if(t<this.gridRows.length-1){let e=this.gridRows[t+1];setTimeout(()=>{let t=document.querySelector(`[data-row-id="${e.id}"] .grid-search-input`);t&&!t.classList.contains(`populated`)&&t.focus()},100)}else this.addEmptyRow()}handleGridInput(e){let t=e.target;t.classList.contains(`grid-search-input`)&&!t.classList.contains(`populated`)?this.handleProductSearch(t,t.value):(t.classList.contains(`grid-input`)||t.classList.contains(`grid-textarea`)||t.classList.contains(`grid-select`))&&this.updateRowFromInput(t)}handleGridChange(e){let t=e.target;(t.classList.contains(`grid-select`)||t.classList.contains(`grid-input`)||t.classList.contains(`grid-textarea`))&&this.updateRowFromInput(t)}handleGridClick(e){let t=e.target;if(t.classList.contains(`grid-product-image`)){let e=t.closest(`.grid-row`)?.dataset?.rowId,n=this.gridRows.find(t=>t.id===e);n?.product&&!n.product._placeholder&&this._showProductDetailModal(n.product);return}let n=t.closest(`.grid-competitor-code-link`);if(n){e.preventDefault();let t=n.dataset.competitor,r=n.dataset.code,i=n.closest(`.grid-row`),a=i?.dataset?.rowId;if(t&&r)if(z.isWriteEnabled())this.openValidatorModal(t,r,a);else{let e=i?.querySelector(`.grid-search-input`);$.open(`${z.getPublicCompetitorLabel(t)}: ${r}`,t=>{let n=String(t?.OrderCode||t?.Code||``).trim();if(n&&a){this._applyVerifiedSeimaToRow(a,n);return}e&&this.selectProduct(e,t)})}return}let r=t.closest(`.grid-placeholder-hint`);if(r){let e=r.closest(`.grid-row`)?.dataset?.rowId;e&&this.openPlaceholderSearch(e).catch(e=>{console.warn(`Placeholder search open failed:`,e)});return}if(t.classList.contains(`grid-remove-btn`)){let e=t.closest(`.grid-row`).dataset.rowId;this.removeRow(e)}else if(t.classList.contains(`grid-move-btn`)){let e=t.closest(`.grid-row`).dataset.rowId,n=t.dataset.direction;this.moveRow(e,n)}else t.closest(`.grid-search-dropdown`)||document.querySelectorAll(`.grid-search-dropdown.visible`).forEach(e=>{e.classList.remove(`visible`)})}handleGridKeydown(e){if(e.target.classList.contains(`grid-search-input`)){let t=document.querySelector(`.global-search-dropdown`);t?this.handleDropdownKeyboard(e,t):e.key===`Enter`&&(e.preventDefault(),this.handleProductSearch(e.target,e.target.value))}}handleDropdownKeyboard(e,t){let n=document.querySelector(`.global-search-dropdown`);if(!n)return;let r=n.querySelectorAll(`li[data-product]`),i=n.querySelector(`li.active`),a=null,o=(e,t)=>{t?(e.dataset.origBg||(e.dataset.origBg=e.style.background||`#fff`),e.classList.add(`active`),e.style.setProperty(`background`,`rgba(184,115,51,0.12)`,`important`)):(e.classList.remove(`active`),e.style.setProperty(`background`,e.dataset.origBg||`#fff`,`important`))};switch(e.key){case`ArrowDown`:e.preventDefault(),i?(o(i,!1),a=r[(Array.from(r).indexOf(i)+1)%r.length]):a=r[0],a&&(o(a,!0),a.scrollIntoView({block:`nearest`}));break;case`ArrowUp`:if(e.preventDefault(),!i)a=r[r.length-1];else{o(i,!1);let e=Array.from(r).indexOf(i);a=r[e===0?r.length-1:e-1]}a&&(o(a,!0),a.scrollIntoView({block:`nearest`}));break;case`Enter`:e.preventDefault(),i&&i.click();break;case`Escape`:e.preventDefault(),this.hideGlobalDropdown();break}}handleGridFocusIn(e){}handleGridFocusOut(e){}handleDragStart(e){let t=e.target.closest(`.grid-row`);if(!t){e.preventDefault();return}if(t.classList.contains(`room-header-row`)){let n=t.dataset.roomName;if(n===`Blank`){e.preventDefault();return}if(this.draggedRoomName=n,this.draggedRowId=null,e.dataTransfer.effectAllowed=`move`,e.dataTransfer.setData(`text/plain`,`room:${n}`),t.classList.add(`dragging`),e.dataTransfer.setDragImage){let t=document.createElement(`div`);t.textContent=`📁 ${n}`,t.style.cssText=`
          position: absolute; top: -1000px; padding: 8px 16px;
          background: #374151; color: white; border-radius: 6px;
          font-weight: 600; font-size: 14px;
        `,document.body.appendChild(t),e.dataTransfer.setDragImage(t,0,15),setTimeout(()=>t.remove(),0)}return}if(!e.target.classList.contains(`grid-drag-handle`)){e.preventDefault();return}if(this.draggedRowId=t.dataset.rowId,this.draggedRoomName=null,e.dataTransfer.effectAllowed=`move`,e.dataTransfer.setData(`text/plain`,t.dataset.rowId),t.classList.add(`dragging`),e.dataTransfer.setDragImage){let n=t.cloneNode(!0);n.style.opacity=`0.8`,n.style.position=`absolute`,n.style.top=`-1000px`,n.style.width=t.offsetWidth+`px`,document.body.appendChild(n),e.dataTransfer.setDragImage(n,t.offsetWidth-10,20),setTimeout(()=>n.remove(),0)}}handleDragOver(e){e.preventDefault(),e.dataTransfer.dropEffect=`move`;let t=e.target.closest(`.grid-row`);if(!t||t.classList.contains(`dragging`))return;if(document.querySelectorAll(`.grid-row.drag-over-above, .grid-row.drag-over-below`).forEach(e=>{e.classList.remove(`drag-over-above`,`drag-over-below`)}),this.draggedRoomName){if(!t.classList.contains(`room-header-row`)||t.dataset.roomName===`Blank`||t.dataset.roomName===this.draggedRoomName)return;let n=t.getBoundingClientRect(),r=n.top+n.height/2;e.clientY<r?t.classList.add(`drag-over-above`):t.classList.add(`drag-over-below`);return}if(t.classList.contains(`room-header-row`))return;let n=t.getBoundingClientRect(),r=n.top+n.height/2;e.clientY<r?t.classList.add(`drag-over-above`):t.classList.add(`drag-over-below`)}handleDragLeave(e){let t=e.target.closest(`.grid-row`);if(t){let n=e.relatedTarget;t.contains(n)||t.classList.remove(`drag-over-above`,`drag-over-below`)}}handleDrop(e){e.preventDefault(),document.querySelectorAll(`.grid-row.drag-over-above, .grid-row.drag-over-below`).forEach(e=>{e.classList.remove(`drag-over-above`,`drag-over-below`)});let t=e.dataTransfer.getData(`text/plain`),n=e.target.closest(`.grid-row`);if(!n||!t)return;if(t.startsWith(`room:`)){let r=t.replace(`room:`,``);if(!n.classList.contains(`room-header-row`))return;let i=n.dataset.roomName;if(i===`Blank`||r===i)return;let a=n.getBoundingClientRect(),o=e.clientY<a.top+a.height/2;this.moveRoomInOrder(r,i,o),this.renderGrid();return}let r=t;if(n.classList.contains(`room-header-row`))return;let i=n.dataset.rowId;if(r===i)return;let a=n.getBoundingClientRect(),o=e.clientY<a.top+a.height/2,s=this.gridRows.findIndex(e=>e.id===r),c=this.gridRows.findIndex(e=>e.id===i);if(s===-1||c===-1)return;let l=this.gridRows[s],u=this.gridRows[c];l.room!==u.room&&(l.room=u.room,this.lastUsedRoom=u.room,l.product&&l.storageId&&M.updateProductRoom(l.storageId,l.room)),this.gridRows.splice(s,1);let d=this.gridRows.findIndex(e=>e.id===i);d!==-1&&(o||d++,this.gridRows.splice(d,0,l),this.renderGrid(),setTimeout(()=>{let e=document.querySelector(`[data-row-id="${r}"]`);e&&(e.style.backgroundColor=`#dbeafe`,e.style.transition=`background-color 0.3s ease`,setTimeout(()=>{e.style.backgroundColor=``},500))},50))}handleDragEnd(e){this.draggedRowId=null,this.draggedRoomName=null,document.querySelectorAll(`.grid-row.dragging`).forEach(e=>e.classList.remove(`dragging`)),document.querySelectorAll(`.grid-row.drag-over-above`).forEach(e=>e.classList.remove(`drag-over-above`)),document.querySelectorAll(`.grid-row.drag-over-below`).forEach(e=>e.classList.remove(`drag-over-below`))}hideAllDropdowns(){this.hideGlobalDropdown()}showClearAllModal(){let e=document.getElementById(`clear-all-modal`);e&&(e.style.display=`flex`)}hideClearAllModal(){let e=document.getElementById(`clear-all-modal`);e&&(e.style.display=`none`)}async showSettingsModal(){let e=document.getElementById(`settings-modal`);e&&(e.style.display=`flex`,setTimeout(async()=>{let e=M.getUserSettings(),t=a.getCurrentUser(),n=document.getElementById(`staff-name`),r=document.getElementById(`staff-position`),o=document.getElementById(`staff-email`),s=document.getElementById(`staff-telephone`),c=document.getElementById(`logged-in-profile-section`),l=document.getElementById(`profile-avatar`),u=document.getElementById(`profile-display-name`),d=document.getElementById(`profile-display-email`),f=document.getElementById(`edit-profile-btn`);if(e&&(e.staffName||e.staffEmail)?(n&&(n.value=e.staffName||``),r&&(r.value=e.staffPosition||``),o&&(o.value=e.staffEmail||``),s&&(s.value=e.staffPhone||``)):t&&(n&&t.name&&(n.value=t.name),r&&t.position&&(r.value=t.position),o&&t.email&&(o.value=t.email),s&&t.phone&&(s.value=t.phone)),t){c&&(c.style.display=`block`),u&&(u.textContent=t.name||``),d&&(d.textContent=t.email||``),l&&(l.textContent=this.getInitials(t.name)),f&&(f.onclick=()=>{i.showEditProfile(()=>{M.clearUserSettings(),this.showSettingsModal()})});let e=document.getElementById(`change-password-btn`);e&&(e.onclick=()=>{i.showChangePassword(()=>{console.log(`📱 Password changed`)})})}else c&&(c.style.display=`none`);let p=document.getElementById(`settings-version-info`);p&&(p.innerText=`v${L.VERSION}`,p.title=`App Version`);let m=document.getElementById(`refresh-catalog-btn`);m&&(m.onclick=async()=>{try{let{del:e,keys:t}=await R(async()=>{let{del:e,keys:t}=await import(`./vendor-idb-BL1M7mAU.js`).then(e=>e.t);return{del:e,keys:t}},__vite__mapDeps([0,1])),n=await t(),r=[`productCatalogCsv`,`customerLogo`,`fredChatHistory`,`fredChatMessages`,`fredFeedback`,`fredQuestionLog`];await Promise.all(n.filter(e=>typeof e==`string`&&(r.includes(e)||e.startsWith(`crosshair_`))).map(t=>e(t)))}catch{}localStorage.removeItem(`configPreferences`),localStorage.removeItem(`pdfWizardSettings`),Object.keys(localStorage).filter(e=>e.startsWith(`crosshair_`)||e.startsWith(`fred`)).forEach(e=>localStorage.removeItem(e)),window.location.reload()});let h=document.getElementById(`refresh-pdf-files-btn`);h&&(h.onclick=async()=>{await this.refreshPdfFileList();let e=h.textContent;h.textContent=`✅ Refreshed!`,h.style.background=`#dcfce7`,h.style.color=`#059669`,setTimeout(()=>{h.textContent=e,h.style.background=`#f3f4f6`,h.style.color=`#059669`},2e3)}),this.loadCustomerLogoPreview(),this.setupCustomerLogoHandlers(),await this.populateTipTailDropdowns(),this.loadTipTailSelections(),this.setupTipTailHandlers()},0))}getInitials(e){if(!e)return`?`;let t=e.trim().split(` `);return t.length>=2?(t[0][0]+t[t.length-1][0]).toUpperCase():t[0][0].toUpperCase()}async loadCustomerLogoPreview(){let e=document.getElementById(`customer-logo-preview`);try{let{get:t}=await R(async()=>{let{get:e}=await import(`./vendor-idb-BL1M7mAU.js`).then(e=>e.t);return{get:e}},__vite__mapDeps([0,1])),n=await t(ut);e&&(e.innerHTML=n?`<img src="${n}" style="max-height:100px;max-width:180px;width:auto;height:auto;object-fit:contain;">`:``)}catch{e&&(e.innerHTML=``)}localStorage.removeItem(ut)}setupCustomerLogoHandlers(){let e=document.getElementById(`customer-logo-upload`),t=document.getElementById(`customer-logo-clear`),n=document.getElementById(`customer-logo-preview`);e.onchange=e=>{let t=e.target.files[0];if(t){let e=new FileReader;e.onload=async e=>{try{let{set:t}=await R(async()=>{let{set:e}=await import(`./vendor-idb-BL1M7mAU.js`).then(e=>e.t);return{set:e}},__vite__mapDeps([0,1]));await t(ut,e.target.result)}catch{}n&&(n.innerHTML=`<img src="${e.target.result}" style="max-height:100px;max-width:180px;width:auto;height:auto;object-fit:contain;">`)},e.readAsDataURL(t)}},t.onclick=async()=>{try{let{del:e}=await R(async()=>{let{del:e}=await import(`./vendor-idb-BL1M7mAU.js`).then(e=>e.t);return{del:e}},__vite__mapDeps([0,1]));await e(ut)}catch{}n&&(n.innerHTML=``),e&&(e.value=``)}}async populateTipTailDropdowns(){console.log(`🔍 Discovering available PDF files...`);let e=(await this.detectAvailablePdfFiles()).map(e=>`./assets/${e}`),t=document.getElementById(`tip-pdf-select`),n=document.getElementById(`tail-pdf-select`);t&&n&&(t.innerHTML=`<option value="">(None)</option>`,n.innerHTML=`<option value="">(None)</option>`,e.forEach(e=>{let r=e.split(`/`).pop();t.innerHTML+=`<option value="${e}">${r}</option>`,n.innerHTML+=`<option value="${e}">${r}</option>`}))}async detectAvailablePdfFiles(){try{let e=await fetch(`./assets-list`);if(e.ok){let t=await e.json();return console.log(`✅ Server provided files:`,t),t}}catch{console.log(`ℹ️ Server endpoint not available, trying assets-list.json...`)}try{let e=await fetch(`./assets-list.json`);if(e.ok){let t=await e.json();return console.log(`✅ assets-list.json provided files:`,t),t}}catch{console.log(`ℹ️ assets-list.json not available, using fallback list...`)}let e=[`tip-AandD.pdf`,`tip-Builder.pdf`,`tip-Merchant.pdf`,`tip-Volume Merchant.pdf`,`tail.pdf`,`tail-generic.pdf`];console.log(`🔍 Testing individual file availability...`);let t=[];for(let n of e)try{let e=await fetch(`./assets/${n}`,{method:`HEAD`});e.ok?(t.push(n),console.log(`✅ Found: ${n}`)):console.log(`❌ Not found: ${n} (${e.status})`)}catch(e){console.log(`❌ Error checking ${n}:`,e.message)}return console.log(`🎯 Dynamically detected PDF files (${t.length} found):`,t),t}async refreshPdfFileList(){console.log(`🔄 Refreshing PDF file list...`),await this.populateTipTailDropdowns(),console.log(`✅ PDF file list refreshed`)}loadTipTailSelections(){let e=JSON.parse(localStorage.getItem(lt)||`{}`),t=document.getElementById(`tip-pdf-select`),n=document.getElementById(`tail-pdf-select`),r=document.getElementById(`tip-pdf-upload`),i=document.getElementById(`tail-pdf-upload`);t&&(e.tipUpload?(t.innerHTML=`<option value="">Custom file selected</option>`,t.value=``,r&&(r.style.fontWeight=`bold`,r.style.color=`#2563eb`)):e.tipAsset&&(t.value=e.tipAsset)),n&&(e.tailUpload?(n.innerHTML=`<option value="">Custom file selected</option>`,n.value=``,i&&(i.style.fontWeight=`bold`,i.style.color=`#2563eb`)):e.tailAsset&&(n.value=e.tailAsset))}setupTipTailHandlers(){let e=document.getElementById(`tip-pdf-select`),t=document.getElementById(`tail-pdf-select`),n=document.getElementById(`tip-pdf-upload`),r=document.getElementById(`tail-pdf-upload`),i=document.getElementById(`tip-pdf-clear`),a=document.getElementById(`tail-pdf-clear`),o=document.getElementById(`tip-pdf-selected`),s=document.getElementById(`tail-pdf-selected`);e.onchange=()=>{this.saveTipTailSettings({tipAsset:e.value,tipUpload:null,tipUploadName:``}),o&&(o.textContent=``)},t.onchange=()=>{this.saveTipTailSettings({tailAsset:t.value,tailUpload:null,tailUploadName:``}),s&&(s.textContent=``)},n.onchange=t=>{let r=t.target.files[0];if(r){let t=new FileReader;t.onload=t=>{let i=t.target.result,a=new Uint8Array(i),o=``;for(let e=0;e<a.length;e++)o+=String.fromCharCode(a[e]);let s=btoa(o);this.saveTipTailSettings({tipAsset:``,tipUpload:s,tipUploadName:r.name}),e&&(e.value=``,e.innerHTML=`<option value="">Custom file selected</option>`),n&&(n.style.fontWeight=`bold`,n.style.color=`#2563eb`)},t.readAsArrayBuffer(r)}},r.onchange=e=>{let n=e.target.files[0];if(n){let e=new FileReader;e.onload=e=>{let i=e.target.result,a=new Uint8Array(i),o=``;for(let e=0;e<a.length;e++)o+=String.fromCharCode(a[e]);let s=btoa(o);this.saveTipTailSettings({tailAsset:``,tailUpload:s,tailUploadName:n.name}),t&&(t.value=``,t.innerHTML=`<option value="">Custom file selected</option>`),r&&(r.style.fontWeight=`bold`,r.style.color=`#2563eb`)},e.readAsArrayBuffer(n)}},i.onclick=async()=>{this.saveTipTailSettings({tipAsset:``,tipUpload:null,tipUploadName:``}),e&&(e.value=``,e.innerHTML=`<option value="">(None)</option>`,(await this.detectAvailablePdfFiles()).forEach(t=>{e.innerHTML+=`<option value="assets/${t}">${t}</option>`})),n&&(n.value=``,n.style.fontWeight=`normal`,n.style.color=``)},a.onclick=async()=>{this.saveTipTailSettings({tailAsset:``,tailUpload:null,tailUploadName:``}),t&&(t.value=``,t.innerHTML=`<option value="">(None)</option>`,(await this.detectAvailablePdfFiles()).forEach(e=>{t.innerHTML+=`<option value="assets/${e}">${e}</option>`})),r&&(r.value=``,r.style.fontWeight=`normal`,r.style.color=``)}}saveTipTailSettings(e){let t={...JSON.parse(localStorage.getItem(lt)||`{}`),...e};localStorage.setItem(lt,JSON.stringify(t))}hideSettingsModal(){let e=document.getElementById(`settings-modal`);e&&(e.style.display=`none`)}saveSettings(){let e=document.getElementById(`staff-name`)?.value||``,t=document.getElementById(`staff-position`)?.value||``,n=document.getElementById(`staff-email`)?.value||``,r=document.getElementById(`staff-telephone`)?.value||``,i={staffName:e.trim(),staffPosition:t.trim(),staffEmail:n.trim(),staffPhone:r.trim()};M.saveUserSettings(i),this.hideSettingsModal(),console.log(`Settings saved successfully:`,i)}loadSettings(){let e=M.getUserSettings(),t=document.getElementById(`staff-name`),n=document.getElementById(`staff-position`),r=document.getElementById(`staff-email`),i=document.getElementById(`staff-telephone`);t&&(t.value=e.staffName||``),n&&(n.value=e.staffPosition||``),r&&(r.value=e.staffEmail||``),i&&(i.value=e.staffPhone||``)}updateRowFromInput(e){let t=e.closest(`.grid-row`),n=t.dataset.rowId,r=this.gridRows.find(e=>e.id===n);if(!r)return;let i=!1;if(e.classList.contains(`grid-select`)&&e.name===`room`)if(e.value===`__ADD_NEW_ROOM__`){let t=prompt(`Enter new room name:`);if(t&&t.trim()){let n=t.trim();if(M.addCustomRoom(n))r.room=n,this.lastUsedRoom=n,console.log(`✅ Added new room:`,n),this.updateAllRoomDropdowns(),e.value=n;else{alert(`Room name already exists or is invalid`),e.value=r.room||`Blank`;return}}else{e.value=r.room||`Blank`;return}}else r.room=e.value,this.lastUsedRoom=e.value;else if(e.classList.contains(`grid-input`)&&e.name===`quantity`)r.quantity=Math.max(1,parseInt(e.value)||1),e.value=r.quantity,i=!0;else if(e.classList.contains(`grid-input`)&&e.name===`price`)r.price=e.value,i=!0;else if(e.classList.contains(`grid-input`)&&e.name===`planCode`){let t=String(e.value||``).slice(0,32).toUpperCase();r.planCode=t,e.value!==t&&(e.value=t)}else e.classList.contains(`grid-textarea`)&&e.name===`notes`&&(r.notes=e.value);i&&this.updateRowTotal(t,r),r.product&&r.storageId&&(M.updateProductQuantity(r.storageId,r.quantity),M.updateProductRoom(r.storageId,r.room),M.updateProductNotes(r.storageId,r.notes),M.updateProductPlanCode(r.storageId,r.planCode||``),i&&e.name===`price`&&M.updateProductPrice(r.storageId,r.price),this.updateTotals())}updateRowTotal(e,t){let n=e.querySelector(`.grid-total-display`);if(n){let e=(parseFloat((t.price||``).toString().replace(/,/g,``))||0)*(parseInt(t.quantity)||1);n.textContent=e>0?e.toLocaleString(`en-AU`,{minimumFractionDigits:2,maximumFractionDigits:2}):``}}loadExistingProducts(){let e=M.getSelectedProducts(),t=P.getAllProducts();this.gridRows=[],this.nextRowId=1,e.forEach((e,n)=>{let r=`row_${this.nextRowId++}`;if(e.product&&t.length>0){let n=(e.product.OrderCode||e.product.orderCode||``).toString().trim().toLowerCase();if(n){let r=t.find(e=>[e.OrderCode,e.orderCode,e[`Order Code`]].some(e=>e&&String(e).trim().toLowerCase()===n));if(r){let t=r.RRP_EX||r[`RRP EX GST`]||r[`PL1 - RRP EX GST`]||``;t&&parseFloat(t)>0&&(e.product.RRP_EX=t,e.product[`RRP EX GST`]=t);let n=t=>{let n=e.product[t],i=r[t];i&&(!n||String(n).trim()===``)&&(e.product[t]=i)};n(`Image_URL`),n(`Diagram_URL`),n(`Datasheet_URL`),n(`Website_URL`)}}}let i=``;i=e.product?.UserEditedPrice!==void 0&&e.product?.UserEditedPrice!==null&&e.product?.UserEditedPrice!==``?e.product.UserEditedPrice:e.product?.RRP_EX||e.product?.[`RRP EX GST`]||e.product?.RRP_EX||e.product?.rrpExGst||e.product?.RRP_EXGST||e.product?.[`PL1 - RRP EX GST`]||``;let a={id:r,product:e.product,room:e.room||`Blank`,quantity:e.quantity||1,price:i,notes:e.notes||``,planCode:e.planCode||``,storageId:e.id,insertOrder:n,timestamp:e.timestamp||0};this.gridRows.push(a)}),this.renderGrid()}renderGrid(){let e=document.getElementById(`grid-body`),t=document.getElementById(`product-grid-empty`),n=document.getElementById(`product-grid-container`);if(!e)return;if(this.gridRows.length===0){n.style.display=`none`,t.style.display=`block`;return}t.style.display=`none`,n.style.display=`block`;let r=this.groupRowsByRoom(),i=[];Object.entries(r).forEach(([e,t])=>{let n=this.getRoomClass(e),r=e!==`Blank`,a=`
        <div class="grid-row room-header-row ${n}" 
             data-room-name="${e}"
             ${r?`draggable="true"`:``}>
          <div class="col-search room-header-cell" colspan="8">
            <div class="room-header-content">
              ${r?`<span class="room-drag-handle" title="Drag to reorder">⋮⋮</span>`:``}
              <span class="room-name">${e}</span>
              <span class="room-count">(${t.length})</span>
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
      `;i.push(a),t.forEach(e=>{i.push(this.renderRowHtml(e))})}),e.innerHTML=i.join(``),this.attachSeimaMatchSuggestions()}extractCandidateCodes(e){if(!e||typeof e!=`string`)return[];let t=new Set,n=[],r=/(?:Code|Part\s*(?:No\.?|Number)|P\/N|Order\s*Code|SKU|Item\s*(?:No\.?|Number)?|#)\s*:?\s*([A-Za-z0-9]{2,14}(?:[.\-][A-Za-z0-9]{1,10})*)/gi,i;for(;(i=r.exec(e))!==null;){let e=i[1].trim();e.replace(/[.\-]+/g,``).length>=4&&!t.has(e)&&(t.add(e),n.push(e))}let a=e.split(/\|/).map(e=>e.trim()),o=/^[A-Za-z0-9]{2,14}([.\-][A-Za-z0-9]{1,10})*$/,s=/\d/,c=new Set([`white`,`stainless`,`steel`,`black`,`grey`,`gray`,`chrome`,`brushed`,`matte`,`polished`]);for(let e of a){if(!o.test(e)||!s.test(e)||e.replace(/[.\-]+/g,``).length<4)continue;let r=e.toLowerCase();c.has(r)||t.has(e)||(t.add(e),n.push(e))}let l=/\b([A-Za-z0-9]{2,14}(?:[.\-][A-Za-z0-9]{1,10})*)\b/g,u=/[a-z]/i,d;for(;(d=l.exec(e))!==null;){let e=d[1].trim();if(!o.test(e)||!s.test(e))continue;let r=e.replace(/[.\-]+/g,``);if(r.length<4)continue;let i=e.toLowerCase();c.has(i)||!u.test(e)&&!/[.\-]/.test(e)&&r.length<8||t.has(e)||(t.add(e),n.push(e))}return n}escapeRegex(e){return String(e).replace(/[.*+?^${}()|[\]\\]/g,`\\$&`)}_isPlaceholderCrossHintFresh(e,t){let n=e?.product?._crossHintCache;if(!n||n.v!==1||typeof n.description!=`string`)return!1;let r=e.product.Description||``;if(n.description!==r)return!1;let i=`${t.join(`	`)}\n@s6`;return!(n.codesFingerprint!==i||!Array.isArray(n.codeEntries)||!n.verifiedMatch?.orderCode&&n.codeEntries.length>0)}_persistPlaceholderCrossHint(e,t,n,r,i,a){let o={v:1,description:t,codesFingerprint:`${n.join(`	`)}\n@s6`,codeEntries:r,verifiedMatch:i?{orderCode:String(i.OrderCode||i.Code||``).trim(),label:a||``}:null};if(e.product._crossHintCache=o,e.storageId)try{M.updateProductCrossHintCache(e.storageId,o)}catch(e){console.warn(`Could not persist cross-hint cache:`,e?.message||e)}}_applyPlaceholderCrossHintDom(e,t,n,r){let i=n.product.Description||``,a=e.closest(`.grid-product-cell`)?.querySelector(`.grid-placeholder-hint`);if(a&&r.codeEntries?.length>0&&(a.innerHTML=this.buildPlaceholderHintHtml(i,r.codeEntries)),!r.verifiedMatch?.orderCode||!P.isLoaded||e.querySelector(`.grid-seima-match-option`))return;let o=P.findProductByCode(String(r.verifiedMatch.orderCode).trim());if(!o)return;let s=document.createElement(`button`);s.type=`button`,s.className=`grid-seima-match-btn grid-seima-match-option`;let c=(o.Description||``).trim(),l=c.length>45?c.slice(0,45)+`…`:c;s.textContent=`Matched Seima: ${o.OrderCode||``} – ${l}`,s.title=r.verifiedMatch.label||``,s.addEventListener(`click`,()=>{this._applyVerifiedSeimaToRow(t,o.OrderCode||o.Code||``)}),e.appendChild(s)}buildPlaceholderHintHtml(e,t){if(!e)return``;let n=r.escapeHtml(String(e||``));if(t.length===0)return n;for(let{code:e,competitor:i,searchCode:a}of t){let t=this.escapeRegex(e),o=RegExp(`((?:(?:Code|Part\\s*(?:No\\.?|Number)|P\\/N|Order\\s*Code|SKU|Item\\s*(?:No\\.?|Number)?|#)\\s*:?\\s*)?`+t+`)`,`gi`),s=a??e,c=`<a href="#" class="grid-competitor-code-link" data-competitor="${r.escapeHtml(String(i||``))}" data-code="${r.escapeHtml(String(s||``))}" title="Review and link to a Seima product">$1</a>`;n=n.replace(o,c)}return n}async attachSeimaMatchSuggestions(){if(!a.isPowerUser())return;let e=++this._matchSuggestionsRunId,t=document.querySelectorAll(`.grid-seima-match-wrap`);t.forEach(e=>{e.querySelectorAll(`.grid-seima-match-btn, .grid-seima-match-option`).forEach(e=>e.remove())});let n=[...t].filter(e=>this.gridRows.find(t=>t.id===e.dataset.rowId)?.product?._placeholder);if(n.length===0)return;let r=document.getElementById(`tender-import-banner`),i=0;if(r&&(r.innerHTML=`
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="flex-shrink:0;animation:spin 1s linear infinite">
          <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"></path>
        </svg>
        <span>Cross-referencing ${n.length} products...</span>
      `,r.style.display=`flex`),!z.isEnabled())try{await z.preload()}catch{}if(e!==this._matchSuggestionsRunId)return;let o=z.isEnabled();!o&&r&&(r.innerHTML=`
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="flex-shrink:0;animation:spin 1s linear infinite">
          <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"></path>
        </svg>
        <span>Competitor data unavailable — checking Seima catalogue for order codes…</span>
      `,r.style.display=`flex`);for(let a of t){if(e!==this._matchSuggestionsRunId)return;let t=a.dataset.rowId,s=this.gridRows.find(e=>e.id===t);if(!s?.product?._placeholder)continue;let c=s.product.Description||``,l=this.extractCandidateCodes(c),u=a.closest(`.grid-product-cell`)?.querySelector(`.grid-placeholder-hint`);if(this._isPlaceholderCrossHintFresh(s,l)){if(this._applyPlaceholderCrossHintDom(a,t,s,s.product._crossHintCache),r){i++;let e=Math.round(i/n.length*100),t=r.querySelector(`span`);t&&(t.textContent=`Cross-referencing ${i}/${n.length} products (${e}%)…`)}continue}let d=null,f=``;if(P.isLoaded)for(let e of l){let t=P.findProductByCode(e);if(t){d=t,f=`Seima catalogue: ${e}`;break}}let p=[];if(o){for(let n of l)if(!(P.isLoaded&&P.findProductByCode(n)))try{let r=await z.findCompetitorEntryByCode(n);if(e!==this._matchSuggestionsRunId)return;if(r){let e=r.matchedCode??r.competitorProduct?.product_code??n;p.push({code:n,competitor:r.competitor,searchCode:e})}else P.isLoaded&&P.findProductByCode(n)||console.log(`Crosshair: no competitor match for code "${n}" (row ${t})`)}catch{}}if(u&&p.length>0&&(u.innerHTML=this.buildPlaceholderHintHtml(c,p)),o&&!d&&P.isLoaded)for(let t of l)try{let n=await z.findSeimaMatches(t);if(e!==this._matchSuggestionsRunId)return;if(n?.matches?.length>0){let e=String(n.matches[0].SeimaSKU).trim(),r=P.findProductByCode(e);if(r){d=r;let i=(n.competitorProduct||{}).product_name||r.Description||``;f=`${z.getPublicCompetitorLabel(n.competitor)}: ${t} → ${e}${i?` – `+i:``}`;break}}}catch{}if(!d&&P.isLoaded){let e=this._findPlaceholderCatalogueSuggestion(c,l);e&&(d=e.product,f=`Seima catalogue search: ${e.query}`)}if(this._persistPlaceholderCrossHint(s,c,l,p,d,f),s?.product?._placeholder&&r){i++;let e=Math.round(i/n.length*100),t=r.querySelector(`span`);t&&(t.textContent=`Cross-referencing ${i}/${n.length} products (${e}%)...`)}if(!d||a.querySelector(`.grid-seima-match-option`))continue;let m=document.createElement(`button`);m.type=`button`,m.className=`grid-seima-match-btn grid-seima-match-option`;let h=(d.Description||``).trim(),g=h.length>45?h.slice(0,45)+`…`:h;m.textContent=`Matched Seima: ${d.OrderCode||``} – ${g}`,m.title=f,m.addEventListener(`click`,()=>{this._applyVerifiedSeimaToRow(t,d.OrderCode||d.Code||``)}),a.appendChild(m)}if(e===this._matchSuggestionsRunId&&r){let e=document.querySelectorAll(`.grid-seima-match-option`).length;r.innerHTML=`
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="flex-shrink:0">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
        <span>Cross-reference complete — ${e} verified match${e===1?``:`es`} found</span>
        <button class="tender-banner-close" title="Dismiss" onclick="this.parentElement.style.display='none'">✕</button>
      `,setTimeout(()=>{r&&(r.style.display=`none`)},1e4)}}async openValidatorModal(e,t,n){this.closeValidatorModal();let i=document.createElement(`div`);i.className=`grid-validator-overlay`;let a=document.createElement(`div`);a.className=`grid-validator-modal`,a.innerHTML=`
      <div class="gvm-header">
        <div class="gvm-title">Loading…</div>
        <button class="gvm-close">&times;</button>
      </div>
      <div class="gvm-body"><div class="gvm-no-matches">Loading competitor data…</div></div>
    `,document.body.appendChild(i),document.body.appendChild(a);let o=()=>this.closeValidatorModal(n);a.querySelector(`.gvm-close`).addEventListener(`click`,o),i.addEventListener(`click`,o);let s=e=>{e.key===`Escape`&&o()};document.addEventListener(`keydown`,s),this._validatorModal={overlay:i,modal:a,escHandler:s,competitor:e,productCode:t,rowId:n};try{await z._ensureIndex();let n=await z.getMatches(e,!0),i=(await z.getProducts(e)).find(e=>String(e.product_code)===String(t));if(!i){a.querySelector(`.gvm-body`).innerHTML=`<div class="gvm-no-matches">Product ${r.escapeHtml(String(t||``))} not found in ${r.escapeHtml(String(z.getPublicCompetitorLabel(e)||``))} data.</div>`;return}let o=n.filter(e=>String(e.CompetitorSKU)===String(t)).sort((e,t)=>(e.Rank||99)-(t.Rank||99)),s={Verified:0,Manual:1,Rejected:2,"AI-Suggested":3},c=new Map;for(let e of o){let t=String(e.SeimaSKU),n=c.get(t);(!n||(s[e.Status]??9)<(s[n.Status]??9))&&c.set(t,e)}let l=[...c.values()].sort((e,t)=>(e.Rank||99)-(t.Rank||99));this._renderValidatorModal(i,l,e)}catch(e){console.error(`Validator modal load failed:`,e),a.querySelector(`.gvm-body`).innerHTML=`<div class="gvm-no-matches">Failed to load data. Check console.</div>`}}_renderValidatorModal(e,t,n){let i=this._validatorModal?.modal;if(!i)return;let a=e.product_name||e.product_code,o=e.image_url||e.Image||``,s=e=>r.escapeHtml(e||``),c=z.getPublicCompetitorLabel(n);i.querySelector(`.gvm-title`).textContent=`${a} — ${c}`;let l;l=t.length===0?`<div class="gvm-no-matches">No Seima matches found. Use the search below to add one.</div>`:t.map(e=>{let t=String(e.SeimaSKU||``).trim(),n=P.findProductByCode(t),r=n?.Description||n?.ProductName||t,i=n?.Image_URL||n?.imageUrl||``,a=n?ot(n):``,o=Number(e.Confidence)||0,c=o>=70?`high`:o>=40?`med`:`low`,l=(e.Status||``).toLowerCase().replace(/[\s-]+/g,`-`),u;return u=e.Status===`Verified`||e.Status===`Manual`?`<span class="gvm-status-label gvm-status-verified">✓ Verified</span>
            <button class="gvm-btn gvm-btn-undo" data-action="reject" data-sku="${s(t)}">reject</button>`:e.Status===`Rejected`?`<span class="gvm-status-label gvm-status-rejected">✗ Rejected</span>
            <button class="gvm-btn gvm-btn-undo" data-action="verify" data-sku="${s(t)}">verify</button>`:`<button class="gvm-btn gvm-btn-verify" data-action="verify" data-sku="${s(t)}">✓ Verify</button>
            <button class="gvm-btn gvm-btn-reject" data-action="reject" data-sku="${s(t)}">✗ Reject</button>`,`<div class="gvm-match-card status-${l}" data-seima-sku="${s(t)}" style="cursor:pointer;">
          ${i?`<img src="${s(i)}" alt="" class="gvm-match-img" onerror="this.outerHTML='<div class=\\'gvm-match-img-placeholder\\'>No img</div>'">`:`<div class="gvm-match-img-placeholder">No img</div>`}
          <div class="gvm-match-info">
            <div class="gvm-match-name">${s(r)}</div>
            <div class="gvm-match-sku">${s(t)} <span class="gvm-badge gvm-badge-${c}">${o}%</span></div>
            ${e.MatchReason?`<div class="gvm-match-reason">${s(e.MatchReason)}</div>`:``}
          </div>
          <div class="gvm-match-price">${a}</div>
          <div class="gvm-match-actions">${u}</div>
        </div>`}).join(``);let u=st(e),d=[[`Code`,e.product_code],[`Brand`,e.brand||c],[`Category`,[e.product_type,e.subcategory].filter(Boolean).join(` / `)],[`Collection`,e.collection],[`Finish`,e.finish||e.colour],[`RRP`,u]].filter(([,e])=>e&&String(e).trim()).map(([e,t])=>`<tr><td>${s(e)}</td><td>${s(t)}</td></tr>`).join(``);i.querySelector(`.gvm-body`).innerHTML=`
      <div class="gvm-layout">
        <div class="gvm-product-detail">
          ${o?`<img src="${s(o)}" alt="${s(a)}" class="gvm-product-img" onerror="this.style.display='none'">`:``}
          <table class="gvm-product-table">
            <tr><td>Name</td><td><strong>${s(a)}</strong></td></tr>
            ${d}
          </table>
          ${e.product_url&&/^https?:\/\//i.test(e.product_url)?`<a href="${s(e.product_url)}" target="_blank" rel="noopener noreferrer" style="font-size:0.75rem;color:#b87333;">View on website →</a>`:``}
        </div>
        <div class="gvm-matches-panel">
          <div class="gvm-section-title">Seima Alternatives (${t.length})</div>
          ${l}
          <div class="gvm-search-add">
            <div class="gvm-search-add-label">Add Seima Product</div>
            <input type="text" class="gvm-search-add-input" placeholder="Search Seima by name, code or range…">
            <div class="gvm-search-results"></div>
          </div>
        </div>
      </div>
    `,this._wireValidatorModalActions(e,t,n)}_wireValidatorModalActions(e,t,n){let r=this._validatorModal?.modal;if(!r)return;r.querySelectorAll(`.gvm-match-card`).forEach(e=>{e.addEventListener(`click`,t=>{if(t.target.closest(`.gvm-btn`))return;let n=e.dataset.seimaSku;n&&this._showSeimaDetailInModal(n)})}),r.querySelectorAll(`.gvm-btn-verify, .gvm-btn-reject, .gvm-btn-undo`).forEach(r=>{r.addEventListener(`click`,async i=>{i.stopPropagation();let a=r.dataset.sku,o=r.dataset.action,s=o===`verify`?`Verified`:`Rejected`;r.disabled=!0,r.textContent=`…`;try{if(s===`Verified`&&this._validatorModal?.rowId){let t=this._validatorModal.rowId;this._applyVerifiedSeimaToRow(t,a),this.closeValidatorModal(t),Q.success(`Product applied. Saving verification...`),z.updateMatch(n,String(e.product_code),a,s).then(()=>Q.success(`Verification saved`)).catch(e=>{console.error(`Match update failed:`,e),Q.error(`Product applied, but verification save failed.`)});return}await z.updateMatch(n,String(e.product_code),a,s);let r=t.find(e=>String(e.SeimaSKU)===a);r&&(r.Status=s),this._renderValidatorModal(e,t,n)}catch(e){console.error(`Match update failed:`,e),r.disabled=!1,r.textContent=o===`verify`?`✓ Verify`:`✗ Reject`}})});let i=r.querySelector(`.gvm-search-add-input`),a=r.querySelector(`.gvm-search-results`);if(!i||!a)return;let o;i.addEventListener(`input`,()=>{clearTimeout(o),o=setTimeout(()=>{this._renderValidatorSeimaSearch(i.value,a,e,t,n)},250)})}_renderValidatorSeimaSearch(e,t,n,i,a){if(!e||e.length<2){t.innerHTML=``;return}let o=P.searchProducts(e,20),s=new Set(i.map(e=>String(e.SeimaSKU))),c=o.filter(e=>{let t=String(e.OrderCode||e.Code||``);return t&&!s.has(t)});if(c.length===0){t.innerHTML=`<div class="gvm-no-matches">No Seima products found.</div>`;return}let l=e=>r.escapeHtml(String(e||``));t.innerHTML=c.slice(0,15).map(e=>{let t=e.OrderCode||e.Code||``,n=e.Description||e.ProductName||``,r=e.Image_URL||e.imageUrl||``,i=ot(e);return`<div class="gvm-search-result" data-seima-code="${l(t)}">
        ${r?`<img src="${l(r)}" alt="" class="gvm-match-img" onerror="this.outerHTML='<div class=\\'gvm-match-img-placeholder\\'>No img</div>'">`:`<div class="gvm-match-img-placeholder">No img</div>`}
        <div class="gvm-match-info">
          <div class="gvm-match-name">${l(n)}</div>
          <div class="gvm-match-sku">${l(t)}</div>
        </div>
        <div class="gvm-match-price">${i}</div>
        <button class="gvm-btn gvm-btn-verify" data-seima-code="${l(t)}">✓ Verify</button>
      </div>`}).join(``),t.querySelectorAll(`.gvm-search-result`).forEach(e=>{let t=e.querySelector(`.gvm-btn-verify`),r=async(e,r=t)=>{r&&(r.disabled=!0,r.textContent=`…`);try{let t=i.length+1;if(this._validatorModal?.rowId){let r=this._validatorModal.rowId;this._applyVerifiedSeimaToRow(r,e),this.closeValidatorModal(r),Q.success(`Product applied. Saving verification...`),z.addMatch(a,String(n.product_code),e,t,`Manual verification`).then(()=>z.updateMatch(a,String(n.product_code),e,`Verified`)).then(()=>Q.success(`Verification saved`)).catch(e=>{console.error(`Add match failed:`,e),Q.error(`Product applied, but verification save failed.`)});return}if(await z.addMatch(a,String(n.product_code),e,t,`Manual verification`),await z.updateMatch(a,String(n.product_code),e,`Verified`),i.push({CompetitorSKU:String(n.product_code),SeimaSKU:e,Rank:t,Confidence:``,MatchReason:`Manual verification`,Status:`Verified`}),this._validatorModal?.rowId){this._applyVerifiedSeimaToRow(this._validatorModal.rowId,e),this.closeValidatorModal(this._validatorModal.rowId);return}this._renderValidatorModal(n,i,a)}catch(e){console.error(`Add match failed:`,e),r&&(r.disabled=!1,r.textContent=`✓ Verify`)}};e.addEventListener(`click`,t=>{if(t.target.closest(`.gvm-btn`))return;let n=e.dataset.seimaCode;n&&this._showSeimaDetailInModal(n,{actionLabel:`Verify this product`,onAction:()=>r(n)})}),t?.addEventListener(`click`,async e=>{e.stopPropagation();let n=t.dataset.seimaCode;await r(n,t)})})}closeValidatorModal(e){if(this._validatorModal){this._closeSeimaDetailPanel(),this._validatorModal.overlay.remove(),this._validatorModal.modal.remove(),this._validatorModal.escHandler&&document.removeEventListener(`keydown`,this._validatorModal.escHandler),this._validatorModal=null,z._index=null;try{for(let e of this.gridRows){if(!e?.product?._placeholder)continue;let t=e.product._crossHintCache;if(!(!t||t.v!==1)&&!t.verifiedMatch?.orderCode&&(delete e.product._crossHintCache,e.storageId))try{M.updateProductCrossHintCache(e.storageId,null)}catch{}}}catch(e){console.warn(`Could not invalidate placeholder cross-hint caches:`,e?.message||e)}this.attachSeimaMatchSuggestions()}}async openPlaceholderSearch(e){let t=this.gridRows.find(t=>t.id===e);if(!t?.product?._placeholder)return;let n=String(t.product.Description||``),r=this.extractCandidateCodes(n);P.isLoaded||await new Promise(e=>{let t=Date.now(),n=()=>{if(P.isLoaded||Date.now()-t>8e3)return e();setTimeout(n,80)};n()});let i=[];if(P.isLoaded&&r.length>0)for(let e of r){let t=P.findProductByCode(e);if(!t)continue;let n=String(t.OrderCode||t.Code||``).trim();n&&!i.includes(n)&&i.push(n)}if(i.length===1){this._applyVerifiedSeimaToRow(e,i[0]);return}if(z.isEnabled()&&r.length>0)try{await z.preload()}catch{}if(z.isEnabled()){for(let t of r)if(!(P.isLoaded&&P.findProductByCode(t)))try{let n=await z.findCompetitorEntryByCode(t);if(!n)continue;let r=n.matchedCode??n.competitorProduct?.product_code??t;z.isWriteEnabled()?await this.openValidatorModal(n.competitor,String(r),e):$.open(`${z.getPublicCompetitorLabel(n.competitor)}: ${r}`,t=>{let n=t?.OrderCode||t?.Code||``;n&&this._applyVerifiedSeimaToRow(e,n)});return}catch{}}let a=[...i];if(z.isEnabled()){for(let e of r.slice(0,3))if(!(P.isLoaded&&P.findProductByCode(e)))try{let t=await z.findSeimaMatches(e);if(t?.matches?.length)for(let e of t.matches){let t=String(e.SeimaSKU||``).trim();t&&!a.includes(t)&&a.push(t)}}catch{}}this.openSeimaSearchModal(e,n,a,r)}openSeimaSearchModal(e,t,n=[],i=[]){this.closeSeimaSearchModal();let a=e=>r.escapeHtml(String(e||``)),o=this._derivePlaceholderSearchQuery(t),s=this._summariseImportedPlaceholder(t),c=document.createElement(`div`);c.className=`grid-validator-overlay`;let l=document.createElement(`div`);l.className=`grid-validator-modal gvm-seima-picker-modal`;let u=n.map(e=>{let t=P.findProductByCode(e);if(!t)return``;let n=t.Description||t.ProductName||e,r=t.Image_URL||t.imageUrl||t.Image||`assets/no-image.png`,i=ot(t);return`
          <button type="button" class="gvm-search-result gvm-search-result-pick gvm-product-card" data-seima-code="${a(e)}">
            <img src="${a(r)}" alt="" class="gvm-match-img" onerror="this.outerHTML='<div class=\\'gvm-match-img-placeholder\\'>No img</div>'">
            <div class="gvm-match-info">
              <div class="gvm-match-name">${a(n)}</div>
              <div class="gvm-match-sku">${a(e)}${i?` · ${i}`:``}</div>
            </div>
          </button>
        `}).filter(Boolean).join(``);l.innerHTML=`
      <div class="gvm-header">
        <div>
          <div class="gvm-title">Find Seima Alternative</div>
          <div class="gvm-subtitle">Review the imported item, then search or filter the Seima catalogue.</div>
        </div>
        <button class="gvm-close">&times;</button>
      </div>
      <div class="gvm-body">
        <div class="gvm-imported-context">
          <div>
            <div class="gvm-context-label">Imported Item</div>
            <div class="gvm-context-title">${a(s.title||`Imported product`)}</div>
            <div class="gvm-context-meta">${a(s.meta||t)}</div>
          </div>
          <button type="button" class="gvm-btn gvm-context-action" data-action="web-image-search">Web image search</button>
        </div>
        <div class="gvm-matches-panel">
          ${u?`
            <section class="gvm-panel-section">
              <div class="gvm-section-title">Matched Seima Options</div>
              <div class="gvm-card-grid">${u}</div>
            </section>
          `:``}
          <section class="gvm-panel-section gvm-search-panel">
            <div class="gvm-search-panel-header">
              <div>
                <div class="gvm-search-add-label">Search Seima Catalogue</div>
                <div class="gvm-search-help">Use broad terms like "shower arm", "basin mixer", or filter by category/group.</div>
              </div>
            </div>
            <input type="text" class="gvm-search-add-input" placeholder="Search Seima by name, code or range..." value="${a(o)}">
            <div class="gvm-filter-row">
              <select class="gvm-explorer-category">
                <option value="">Any category</option>
              </select>
              <select class="gvm-explorer-group">
                <option value="">Any group</option>
              </select>
            </div>
            <div class="gvm-result-count"></div>
            <div class="gvm-search-results gvm-card-grid"></div>
          </section>
        </div>
      </div>
    `,document.body.appendChild(c),document.body.appendChild(l);let d=()=>this.closeSeimaSearchModal();l.querySelector(`.gvm-close`)?.addEventListener(`click`,d),c.addEventListener(`click`,d);let f=e=>{e.key===`Escape`&&d()};document.addEventListener(`keydown`,f),this._seimaSearchModal={overlay:c,modal:l,escHandler:f,rowId:e},l.querySelectorAll(`.gvm-search-result-pick`).forEach(n=>{n.addEventListener(`click`,()=>{let r=n.dataset.seimaCode||``;r&&this._showSeimaDetailForSelection(r,e,t,i)})});let p=l.querySelector(`.gvm-search-add-input`),m=l.querySelector(`.gvm-search-panel .gvm-search-results`);if(!p||!m)return;l.querySelector(`[data-action="web-image-search"]`)?.addEventListener(`click`,()=>{this._openExternalImageSearch(o||t||``)});let h,g=l.querySelector(`.gvm-explorer-category`),_=l.querySelector(`.gvm-explorer-group`),v={query:o||``,category:``,group:``};this._populateModalCategoryOptions(g),this._populateModalGroupOptions(_,``),g?.addEventListener(`change`,()=>{v.category=g.value,v.group=``,_&&(_.value=``),this._populateModalGroupOptions(_,v.category),this._renderStandaloneSeimaSearch(v,m,e,t,i)}),_?.addEventListener(`change`,()=>{v.group=_.value,this._renderStandaloneSeimaSearch(v,m,e,t,i)}),p.addEventListener(`input`,()=>{clearTimeout(h),h=setTimeout(()=>{v.query=p.value,this._renderStandaloneSeimaSearch(v,m,e,t,i)},200)}),this._renderStandaloneSeimaSearch(v,m,e,t,i),p.focus()}_renderStandaloneSeimaSearch(e,t,n,i=``,a=[]){let o=String(e?.query||``).trim(),s=String(e?.category||``).trim(),c=String(e?.group||``).trim(),l=(o.length>=2?P.searchProducts(o,300):P.getAllProducts()).filter(e=>{let t=String(e.SubGroup||e.Subgroup||e[`Sub Group`]||``).trim(),n=String(e.Group||``).trim();return!(s&&t!==s||c&&n!==c)}),u=t.closest(`.gvm-search-panel`)?.querySelector(`.gvm-result-count`);if(u&&(u.textContent=l.length>0?`${Math.min(l.length,24)} shown from ${l.length} result${l.length===1?``:`s`}`:`No matching Seima products`),l.length===0){t.innerHTML=`
        <div class="gvm-no-matches">
          No Seima products found.
          <br>
          Try <strong>Web image search</strong> above, or broaden your category/group filters.
        </div>`;return}let d=e=>r.escapeHtml(String(e||``));t.innerHTML=l.slice(0,24).map(e=>{let t=e.OrderCode||e.Code||``,n=e.Description||e.ProductName||``,r=e.SubGroup||e.Subgroup||e[`Sub Group`]||``,i=e.Group||``,a=e.Image_URL||e.imageUrl||e.Image||`assets/no-image.png`,o=ot(e);return`
        <button type="button" class="gvm-search-result gvm-search-result-pick gvm-product-card" data-seima-code="${d(t)}">
          <img src="${d(a)}" alt="" class="gvm-match-img" onerror="this.outerHTML='<div class=\\'gvm-match-img-placeholder\\'>No img</div>'">
          <div class="gvm-match-info">
            <div class="gvm-match-name">${d(n)}</div>
            <div class="gvm-match-sku">${d(t)}${r?` · ${d(r)}`:``}${i?` / ${d(i)}`:``}</div>
          </div>
          ${o?`<div class="gvm-match-price">${o}</div>`:``}
        </button>
      `}).join(``),t.querySelectorAll(`.gvm-search-result-pick`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.seimaCode||``;t&&this._showSeimaDetailForSelection(t,n,i,a)})})}async _openVerificationFlowFromPlaceholder(e,t,n=[],r=``){let i=Array.isArray(n)&&n.length>0?n:this.extractCandidateCodes(t||``);if(!z.isEnabled())return;try{await z.preload()}catch{}for(let t of i.slice(0,3))try{let n=await z.findCompetitorEntryByCode(t);if(!n)continue;let i=n.matchedCode??n.competitorProduct?.product_code??t;z.isWriteEnabled()?await this.openValidatorModal(n.competitor,String(i),e):$.open(`${z.getPublicCompetitorLabel(n.competitor)}: ${i}`,t=>{let n=t?.OrderCode||t?.Code||r||``;n&&this._applyVerifiedSeimaToRow(e,n)});return}catch{}let a=t||r||``;$.open(a,t=>{let n=t?.OrderCode||t?.Code||r||``;n&&this._applyVerifiedSeimaToRow(e,n)})}_populateModalCategoryOptions(e){e&&(e.innerHTML=[`<option value="">Any category</option>`,...[...new Set(P.getAllProducts().map(e=>String(e.SubGroup||e.Subgroup||e[`Sub Group`]||``).trim()).filter(Boolean))].sort((e,t)=>e.localeCompare(t)).map(e=>`<option value="${r.escapeHtml(String(e||``))}">${r.escapeHtml(String(e||``))}</option>`)].join(``))}_populateModalGroupOptions(e,t){e&&(e.innerHTML=[`<option value="">Any group</option>`,...[...new Set(P.getAllProducts().filter(e=>t?String(e.SubGroup||e.Subgroup||e[`Sub Group`]||``).trim()===t:!0).map(e=>String(e.Group||``).trim()).filter(Boolean))].sort((e,t)=>e.localeCompare(t)).map(e=>`<option value="${r.escapeHtml(String(e||``))}">${r.escapeHtml(String(e||``))}</option>`)].join(``))}_openExternalImageSearch(e){let t=String(e||``).trim();if(!t)return;let n=encodeURIComponent(`${t} bathroom product`);window.open(`https://www.google.com/search?tbm=isch&q=${n}`,`_blank`,`noopener,noreferrer`)}_summariseImportedPlaceholder(e){let t=String(e||``).split(`|`).map(e=>e.trim()).filter(Boolean);return{title:t.filter(e=>!/^(code|sku|match)\s*:/i.test(e)&&!/^\d+$/.test(e)).slice(0,3).join(` - `)||t.slice(0,2).join(` - `),meta:t.filter(e=>/^(code|sku|match)\s*:/i.test(e)||/chrome|black|white|steel|brushed/i.test(e)).join(` - `)}}_findPlaceholderCatalogueSuggestion(e,t=[]){if(!P.isLoaded)return null;for(let e of t){let t=P.findProductByCode(e);if(t)return{product:t,query:e}}for(let t of this._buildPlaceholderCatalogueQueries(e)){let e=P.searchProducts(t,1);if(e.length>0)return{product:e[0],query:t};if(typeof P.searchProductsFuzzy==`function`){let e=P.searchProductsFuzzy(t,1);if(e.length>0)return{product:e[0],query:t}}}return null}_buildPlaceholderCatalogueQueries(e){let t=String(e||``),n=t.split(`|`).map(e=>e.trim()).filter(Boolean).filter(e=>!/^(code|sku|match)\s*:/i.test(e)),r=e=>String(e||``).toLowerCase().replace(/\bmixer\s+sink\b/g,`sink mixer`).replace(/\bmixer\s+basin\b/g,`basin mixer`).replace(/\bpull[\s-]?out\b/g,`pull down`).replace(/\bpop[\s-]?out\b/g,`pop up`).replace(/\bl\s+black\b/g,`black`).replace(/[^a-z0-9\s]/g,` `).replace(/\s+/g,` `).trim(),i=r(t),a=i.replace(/\bpull down\b/g,``).replace(/\s+/g,` `).trim(),o=[`sink mixer`,`basin mixer`,`pop up waste`,`bottle trap`,`toilet roll holder`,`toilet`,`basin`,`sink`].find(e=>i.includes(e)),s=[...n.slice(0,3),this._derivePlaceholderSearchQuery(t),t,a,o].map(r).filter(e=>e.length>=3);return[...new Set(s)]}_derivePlaceholderSearchQuery(e){let t=String(e||``);if(!t)return``;let n=t.toLowerCase(),r=`toilet roll holder.toilet paper holder.robe hook.shower arm.shower mixer.shower rail.shower rose.basin mixer.sink mixer.wall mixer.towel rail.towel ring.laundry tub.floor waste.pop up waste.cutlery insert.bottle trap.soap dish.soap holder.bath spout.bath mixer.vanity.toilet.basin.sink.mirror.tapware`.split(`.`),i=[`chrome`,`brushed nickel`,`brushed brass`,`brushed gunmetal`,`gunmetal`,`matte black`,`black`,`white`,`stainless steel`],a=r.find(e=>n.includes(e)),o=i.find(e=>n.includes(e));return a?[a,o].filter(Boolean).join(` `):t.replace(/\b(?:Code|SKU|Part\s*(?:No\.?|Number)|Order\s*Code)\s*:?\s*[A-Za-z0-9.\-_/]+\b/gi,` `).replace(/\b(?:match|matched|phoenix|caroma|abey|posh|hafele|parisi|reece|fienza|clark|argent|franke)\b/gi,` `).replace(/\b[A-Z]{1,4}[-.]?\d+[A-Z0-9.\-_/]*\b/g,` `).replace(/\b\d{2,}\b/g,` `).replace(/\|/g,` `).replace(/\s+/g,` `).trim().split(` `).slice(0,8).join(` `)}closeSeimaSearchModal(){this._seimaSearchModal&&=(this._closeSeimaDetailPanel(),this._seimaSearchModal.overlay.remove(),this._seimaSearchModal.modal.remove(),this._seimaSearchModal.escHandler&&document.removeEventListener(`keydown`,this._seimaSearchModal.escHandler),null)}_applyVerifiedSeimaToRow(e,t){let n=this.gridRows.find(t=>t.id===e);if(!n)return!1;let r=P.findProductByCode(String(t||``).trim());if(!r)return!1;n.product=r,delete n.product._crossHintCache,n.price=r.RRP_EX||r[`RRP EX GST`]||r.RRP_EX||r.RRP_EXGST||r.rrpExGst||r[`PL1 - RRP EX GST`]||r.RRP_INCGST||r.RRP_INCGST||r[`RRP INC GST`]||r.rrpIncGst||``,this.renderGrid();let i={...r,UserEditedPrice:n.price};return n.storageId?(M.updateSelectionProduct(n.storageId,i,{notes:n.notes,room:n.room,quantity:n.quantity,userPrice:n.price}),this.updateTotals()):this.saveRowToStorage(n),!0}_showSeimaDetailInModal(e,t={}){this._closeSeimaDetailPanel();let n=P.findProductByCode(e);if(!n)return;let i=e=>r.escapeHtml(String(e||``)),a=n.Description||n.ProductName||e,o=n.Image_URL||n.imageUrl||``,s=n.Website_URL||``,c=[[`Order Code`,n.OrderCode||n.Code],[`Description`,n.Description],[`Long Description`,n.LongDescription||n[`Long Description`]],[`Range`,n.Range],[`Group`,n.Group],[`Sub Group`,n.SubGroup||n[`Sub Group`]],[`RRP ex GST`,n.RRP_EX||n[`RRP EX GST`]],[`RRP inc GST`,n.RRP_INCGST||n[`RRP INC GST`]],[`Dimensions (W)`,n.DimX||n[`X Dimension (mm)`]],[`Dimensions (D)`,n.DimY||n[`Y Dimension (mm)`]],[`Dimensions (H)`,n.DimZ||n[`Z Dimension (mm)`]],[`WELS Star`,n.WELS_STAR||n[`WELS Star`]],[`WELS Consumption`,n.WELS_CONSUMPTION||n[`WELS Consumption`]]].filter(([,e])=>e&&String(e).trim()&&String(e).trim()!==`0`).map(([e,t])=>{let n=e.startsWith(`RRP`)?`$${Number(t).toLocaleString(`en-AU`,{minimumFractionDigits:2})}`:i(t);return`<tr><td>${i(e)}</td><td>${n}</td></tr>`}).join(``),l=t.actionLabel?`<button type="button" class="gvm-detail-action gvm-btn gvm-btn-verify">${i(t.actionLabel)}</button>`:``,u=/^https?:\/\//i.test(String(s||``))?s:``,d=document.createElement(`div`);d.className=`gvm-detail-overlay`;let f=document.createElement(`div`);f.className=`gvm-detail-panel`,f.innerHTML=`
      <div class="gvm-detail-header">
        <div class="gvm-detail-title">${i(a)}</div>
        <button class="gvm-close">&times;</button>
      </div>
      <div class="gvm-detail-body">
        ${o?`<img src="${i(o)}" alt="${i(a)}" class="gvm-detail-img" onerror="this.style.display='none'">`:``}
        <table class="gvm-detail-table">${c}</table>
        ${u?`<a href="${i(u)}" target="_blank" rel="noopener noreferrer" style="display:inline-block;margin-top:10px;font-size:0.8rem;color:#b87333;">View on Seima website →</a>`:``}
        ${l?`<div style="margin-top:16px;">${l}</div>`:``}
      </div>
    `,document.body.appendChild(d),document.body.appendChild(f);let p=()=>this._closeSeimaDetailPanel();f.querySelector(`.gvm-close`).addEventListener(`click`,p),d.addEventListener(`click`,p),f.querySelector(`.gvm-detail-action`)?.addEventListener(`click`,async()=>{typeof t.onAction==`function`&&await t.onAction()}),this._seimaDetailPanel={overlay:d,panel:f}}_showSeimaDetailForSelection(e,t,n,r=[]){this._showSeimaDetailInModal(e,{actionLabel:`Use this product`,onAction:async()=>{this._applyVerifiedSeimaToRow(t,e)&&(this.closeSeimaSearchModal(),await this._openVerificationFlowFromPlaceholder(t,n,r,e))}})}_closeSeimaDetailPanel(){this._seimaDetailPanel&&=(this._seimaDetailPanel.overlay.remove(),this._seimaDetailPanel.panel.remove(),null)}_showProductDetailModal(e){let t=document.querySelector(`.grid-product-modal-overlay`);t&&t.remove();let n=e=>r.escapeHtml(String(e||``)),i=e.OrderCode||e.Code||``,a=i?String(parseInt(i,10)):``,o=e.Description||e.ProductName||e[`Product Name`]||``,s=e.Image_URL||e.imageUrl||e.Image||`assets/no-image.png`,c=e[`Long Description`]||e.LongDescription||``,l=e.Range||``,u=e.SubGroup||e.Subgroup||e[`Sub Group`]||``,d=e.Finish||``,f=e.Colour||``,p=e.DimX||e[`X Dimension (mm)`]||``,m=e.DimY||e[`Y Dimension (mm)`]||``,h=e.DimZ||e[`Z Dimension (mm)`]||``,g=p&&p!==`0`?`${p} × ${m||0} × ${h||0}mm`:``,_=e.WELS_STAR||e[`WELS Star`]||e[`WELS STAR`]||``,v=e.RRP_EX||e[`RRP EX GST`]||e.RRP_EXGST||``,y=e.RRP_INCGST||e[`RRP INC GST`]||``,b=[];a&&b.push([`Order code`,a]),l&&b.push([`Range`,l]),u&&b.push([`Type`,u]),g&&b.push([`Dimensions`,g]),d&&b.push([`Finish`,d]),f&&f!==d&&b.push([`Colour`,f]),_&&b.push([`WELS`,`${_} star`]);let x=v?`$${parseFloat(v).toLocaleString(`en-AU`,{minimumFractionDigits:2})} ex GST`:y?`$${parseFloat(y).toLocaleString(`en-AU`,{minimumFractionDigits:2})} inc GST`:``,S=e.Diagram_URL||e[`Diagram URL`]||``,C=e.Datasheet_URL||e[`Datasheet URL`]||``,w=e.Website_URL||e[`Website URL`]||``,T=[];S&&T.push(`<a href="${n(S)}" target="_blank" rel="noopener" class="grid-pdm-link">Diagram</a>`),C&&T.push(`<a href="${n(C)}" target="_blank" rel="noopener" class="grid-pdm-link">Datasheet</a>`),w&&T.push(`<a href="${n(w)}" target="_blank" rel="noopener" class="grid-pdm-link">View on Website</a>`);let E=document.createElement(`div`);E.className=`grid-product-modal-overlay`,E.innerHTML=`
      <div class="grid-product-modal">
        <div class="grid-pdm-header">
          <button class="grid-pdm-close" title="Close">&times;</button>
        </div>
        <div class="grid-pdm-body">
          <img class="grid-pdm-img" src="${n(s)}" alt="${n(o)}" onerror="this.src='assets/no-image.png';">
          <h3 class="grid-pdm-title">${n(o)}</h3>
          ${b.length?`<dl class="grid-pdm-specs grid-pdm-specs-compact">${b.map(([e,t])=>`<dt>${n(e)}</dt><dd>${n(t)}</dd>`).join(``)}</dl>`:``}
          ${c?`<div class="grid-pdm-desc">${n(c)}</div>`:``}
          ${x?`<div class="grid-pdm-price">${x}</div>`:``}
          ${T.length?`<div class="grid-pdm-links">${T.join(``)}</div>`:``}
        </div>
      </div>
    `;let D=()=>{E.remove(),document.removeEventListener(`keydown`,O)};E.addEventListener(`click`,e=>{e.target===E&&D()}),E.querySelector(`.grid-pdm-close`).addEventListener(`click`,D);let O=e=>{e.key===`Escape`&&D()};document.addEventListener(`keydown`,O),document.body.appendChild(E)}renderRowHtml(e){let t=e.product,n=t&&(t.Image_URL||t.imageUrl||t.Image)||`assets/no-image.png`,i=t&&(t.Description||t.ProductName||t[`Product Name`])||``,a=t&&(t.OrderCode||t.Code)||``,o=a?String(parseInt(a,10)):``,s=!!(t&&t._outsidePublicPricelist),c=s?`<abbr class="grid-part-ext-not-public" title="Not on the public price list. Confirm availability and pricing with Seima before treating as a standard stocked item.">*</abbr>`:``,l=s?`<span class="grid-non-public-pill" title="Outside the public price list — validate with Seima">Special order</span>`:``,u=e=>r.escapeHtml(String(e||``)),d=e=>{let t=String(e||``).trim();return/^(https?:|data:image\/|assets\/)/i.test(t)?u(t):``},f=e.planCode?u(e.planCode):``,p=e.price||t&&(t.RRP_EX||t[`RRP EX GST`]||t.RRP_EX||t.rrpExGst||t.RRP_EXGST||t[`PL1 - RRP EX GST`])||``,m=(parseFloat((p||``).toString().replace(/,/g,``))||0)*(parseInt(e.quantity)||1),h=m>0?m.toLocaleString(`en-AU`,{minimumFractionDigits:2,maximumFractionDigits:2}):``;return`
      <div class="grid-row ${this.getRoomRowClass(e.room)}" data-row-id="${u(e.id)}" data-room="${u((e.room||`blank`).toLowerCase())}">
        <div class="col-image grid-image-cell">
          ${t?`<img src="${d(n)}" alt="Product" class="grid-product-image" onerror="this.src='assets/no-image.png';">`:``}
        </div>
        <div class="col-ref">
          <input type="text" class="grid-input" name="planCode" value="${f}" maxlength="32" placeholder="—" title="Builder/architect plan reference (e.g. SW01S, FX-01)" autocomplete="off" spellcheck="false">
        </div>
        <div class="col-product grid-product-cell ${t&&!t._placeholder?`has-product`:`empty-product`}">
          ${t&&!t._placeholder?`
            <div class="grid-product-display">
              <div class="grid-product-name">
                <span class="grid-product-code-line">
                  <strong>${u(o)}</strong>${c}
                  ${l}
                </span>
                <span class="grid-product-title-line">${u(i)}</span>
              </div>
            </div>
          `:`
            ${t?._placeholder?`<div class="grid-placeholder-hint grid-placeholder-clickable" title="Click to find a Seima alternative">${u(t.Description||``)}</div>`:`<input type="text" class="grid-search-input" placeholder="Search for a product..." value="">`}
            ${t?._placeholder?`<div class="grid-seima-match-wrap" data-row-id="${u(e.id)}"></div>`:``}
          `}
        </div>
        <div class="col-room">
          <select class="grid-select" name="room">
            ${this.getRoomOptions(e.room)}
          </select>
        </div>
        <div class="col-qty">
          <input type="number" class="grid-input" name="quantity" value="${u(e.quantity)}" min="1" step="1">
        </div>
        <div class="col-price">
          <input type="text" class="grid-input" name="price" value="${u(p)}" placeholder="0.00">
        </div>
        <div class="col-total">
          <div class="grid-total-display">${h}</div>
        </div>
        <div class="col-notes">
          <textarea class="grid-textarea" name="notes" placeholder="Notes..." rows="2">${u(e.notes)}</textarea>
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
    `}handleSortChange(){let e=document.getElementById(`sort-by`),t=e?e.value:`room`;this.sortGridRows(t),this.renderGrid()}sortGridRows(e){switch(e){case`room`:this.gridRows.sort((e,t)=>{let n=e.room||`Blank`,r=t.room||`Blank`;return n.localeCompare(r)});break;case`category`:this.gridRows.sort((e,t)=>{let n=this._rowCategory(e),r=this._rowCategory(t);return n===r?(typeof e.insertOrder==`number`?e.insertOrder:0)-(typeof t.insertOrder==`number`?t.insertOrder:0):n===`Blank`?1:r===`Blank`?-1:n.localeCompare(r)});break;case`product`:this.gridRows.sort((e,t)=>{let n=e.product&&(e.product.Description||e.product.ProductName)||``,r=t.product&&(t.product.Description||t.product.ProductName)||``;return n.localeCompare(r)});break;case`code`:this.gridRows.sort((e,t)=>{let n=e.product&&(e.product.OrderCode||e.product.Code)||``,r=t.product&&(t.product.OrderCode||t.product.Code)||``;return n.localeCompare(r)});break;case`imported`:this.gridRows.sort((e,t)=>(typeof e.insertOrder==`number`?e.insertOrder:2**53-1)-(typeof t.insertOrder==`number`?t.insertOrder:2**53-1));break;default:this.gridRows.sort((e,t)=>{let n=e.room||`Blank`,r=t.room||`Blank`;return n.localeCompare(r)});break}}_rowCategory(e){let t=e?.product;if(!t)return`Blank`;let n=t.Group||t.SubGroup||t[`Sub Group`]||``;return String(n).trim()||`Blank`}groupRowsByRoom(){let e=document.getElementById(`sort-by`),t=e?e.value:`room`;if(t===`category`){let e={};this.gridRows.forEach(t=>{let n=this._rowCategory(t);e[n]||(e[n]=[]),e[n].push(t)});let t=Object.keys(e).filter(e=>e!==`Blank`).sort((e,t)=>e.localeCompare(t)),n={};return t.forEach(t=>{n[t]=e[t]}),e.Blank&&(n.Blank=e.Blank),n}if(t!==`room`)return{"All Products":this.gridRows};let n={};this.gridRows.forEach(e=>{let t=e.room||`Blank`;n[t]||(n[t]=[]),n[t].push(e)});let r=Object.keys(n).filter(e=>e!==`Blank`),i=this.getSortedRoomNames(r),a={};return i.forEach(e=>{n[e]&&(a[e]=n[e])}),n.Blank&&(a.Blank=n.Blank),a}getSortedRoomNames(e){let t=this.customRoomOrder.filter(t=>e.includes(t)),n=e.filter(e=>!this.customRoomOrder.includes(e)).sort((e,t)=>e.localeCompare(t));return[...t,...n]}moveRoomInOrder(e,t,n){if(e===`Blank`||t===`Blank`||e===t)return;let r={};this.gridRows.forEach(e=>{let t=e.room||`Blank`;r[t]||(r[t]=[])});let i=Object.keys(r).filter(e=>e!==`Blank`),a=this.getSortedRoomNames(i).filter(t=>t!==e),o=a.indexOf(t);o===-1&&(o=a.length),n||o++,a.splice(o,0,e),this.customRoomOrder=a,this.saveCustomRoomOrder()}getRoomClass(e){return{Blank:`blank-room`,"Bath 1":`bath-room`,"Bath 2":`bath-room`,"Bath 3":`bath-room`,Ensuite:`bath-room`,Powder:`bath-room`,Kitchen:`kitchen-room`,Laundry:`laundry-room`,Alfresco:`alfresco-room`,Butlers:`butlers-room`,Standard:`standard-room`,Upgrade:`upgrade-room`,Other:`other-room`,"All Products":`all-products`}[e]||``}getRoomRowClass(e){let t=(e||`Blank`).toLowerCase();return t.includes(`bath`)||t.includes(`ensuite`)||t.includes(`powder`)?`bath-room-row`:t.includes(`kitchen`)?`kitchen-room-row`:t.includes(`laundry`)?`laundry-room-row`:t.includes(`alfresco`)?`alfresco-room-row`:t.includes(`butler`)?`butlers-room-row`:``}getRoomOptions(e){let t=`<option value="Blank" ${e===`Blank`?`selected`:``}>Blank</option>`;return A.get(`rooms.predefined`,[]).forEach(n=>{t+=`<option value="${n.name}" ${e===n.name?`selected`:``}>${n.name}</option>`}),M.getCustomRooms().forEach(n=>{t+=`<option value="${n.name}" ${e===n.name?`selected`:``}>${n.name}</option>`}),t+=`<option value="__ADD_NEW_ROOM__" style="font-weight: bold; color: #2563eb;">➕ Add new room...</option>`,t}updateAllRoomDropdowns(){document.querySelectorAll(`.grid-select[name="room"]`).forEach(e=>{e.value;let t=this.gridRows.find(t=>t.id===e.closest(`.grid-row`).dataset.rowId);t&&(e.innerHTML=this.getRoomOptions(t.room))});let e=document.getElementById(`bulk-room-select`);e&&(e.innerHTML=this.getRoomOptions(`Blank`))}ensureAtLeastOneEmptyRow(){this.gridRows.length===0&&this.addEmptyRow()}updateTotals(){let e=document.getElementById(`total-items`),t=document.getElementById(`total-rooms`),n=document.getElementById(`total-value`),r=0,i=0,a=new Set;this.gridRows.forEach(e=>{if(e.product&&!e.product._placeholder){r+=1;let t=parseFloat(e.price)||0;i+=t*e.quantity,e.room&&e.room!==`Blank`&&e.room.trim()!==``&&a.add(e.room)}}),e&&(e.textContent=r),t&&(t.textContent=a.size),n&&(n.textContent=i>0?`$${i.toLocaleString(`en-AU`,{minimumFractionDigits:2,maximumFractionDigits:2})}`:`$0.00`)}clearAll(e=!0){M.clearAllSelections(),localStorage.removeItem(`pdfWizardSettings`),e&&(localStorage.removeItem(`pdfFormSettings`),localStorage.removeItem(`customerDetails`),this.currentSelectionId=null,this.currentSelectionName=`New Selection`,this.hasUnsavedChanges=!1,this.customRoomOrder=[],this.saveCustomRoomOrder()),this.gridRows=[],this.nextRowId=1,this.renderGrid(),this.updateTotals(),this.ensureAtLeastOneEmptyRow(),this.updateContextHeader()}showImportModal(){let e=document.getElementById(`file-import-modal`);e&&(e.style.display=`flex`)}syncGridToStorage(){let e=M.getSelectedProducts(),t=new Map(e.map(e=>[e.id,e])),n=[];for(let e of this.gridRows){if(!e.product||!e.storageId)continue;let r=t.get(e.storageId);if(!r)continue;r.product.UserEditedPrice=e.price;let i=e.product||{},a=i.RRP_EX||i[`RRP EX GST`]||i.RRP_EX||i.RRP_EXGST||i.rrpExGst||i[`PL1 - RRP EX GST`]||``;a&&a!==`0`&&(r.product.RRP_EX=a),r.quantity=Math.max(1,parseInt(e.quantity)||1),r.room=e.room||`Blank`,r.notes=e.notes||``,e.planCode!==void 0&&(r.planCode=e.planCode||``),i._crossHintCache&&i._crossHintCache.v===1?r.product._crossHintCache=i._crossHintCache:delete r.product._crossHintCache,n.push(r)}M.setSelectedProducts(n);let r=n.map(e=>({...e.product,Room:e.room,Notes:e.notes,PlanCode:e.planCode||``,Quantity:e.quantity}));localStorage.setItem(`selection`,JSON.stringify(r))}async showDownloadModal(){this.syncGridToStorage(),i.requireAuth(async()=>{try{await $e.open({onComplete:(e,t)=>{console.log(`📄 Wizard completed, generating PDF`),window.showPdfFormScreen?window.showPdfFormScreen(e,t):window.dispatchEvent(new CustomEvent(`generatePdf`,{detail:{...e,tipTailSettings:t}}))},onCancel:()=>{console.log(`📄 Wizard cancelled`)}})}catch(e){console.error(`Failed to open PDF wizard, falling back to legacy modal:`,e),this.showLegacyDownloadModal()}},`create PDF`)}async showLegacyDownloadModal(){let e=document.getElementById(`pdf-email-modal`);if(e){e.style.display=`flex`;let t=document.getElementById(`pdf-email-form`);if(t){let e=r.getStorageItem(`pdfFormSettings`,{});t[`user-name`]&&(t[`user-name`].value=e.name||``),t[`user-project`]&&(t[`user-project`].value=e.project||``),t[`user-address`]&&(t[`user-address`].value=e.address||``),t[`user-email`]&&(t[`user-email`].value=e.email||``),t[`user-telephone`]&&(t[`user-telephone`].value=e.telephone||``),t[`exclude-prices`]&&(t[`exclude-prices`].checked=!!e.excludePrices),t[`exclude-qty`]&&(t[`exclude-qty`].checked=!!e.excludeQty),t[`exclude-long-description`]&&(t[`exclude-long-description`].checked=!!e.excludeLongDescription),t[`include-gst`]&&(t[`include-gst`].checked=!!e.includeGst)}this.loadCustomerLogoPreview(),this.setupCustomerLogoHandlers(),await this.populateTipTailDropdowns(),this.loadTipTailSelections(),this.setupTipTailHandlers()}}refreshUI(){this.init()}showSaveDialog(){i.requireAuth(e=>{this._showSaveDialogInternal(e)})}_showSaveDialogInternal(e){let t=r.getStorageItem(`pdfFormSettings`,{}),n=!!this.currentSelectionId,i=t.name?`${t.name} - ${new Date().toLocaleDateString(`en-AU`)}`:this.currentSelectionName||`Selection - ${new Date().toLocaleDateString(`en-AU`)}`,a=`
      <div class="save-dialog-overlay" id="save-dialog">
        <div class="save-dialog">
          <h3>Save Selection</h3>
          <p>Save your current product selection for later use.</p>
          
          <div class="save-dialog-form">
            <label class="form-label" for="save-doc-name">Document Name</label>
            <input type="text" class="form-input" id="save-doc-name" 
                   value="${this.escapeHtml(i)}" maxlength="100"
                   placeholder="Enter a name for this selection">
            
            <label class="form-label" for="save-notes" style="margin-top: 12px;">Notes (optional)</label>
            <textarea class="form-input" id="save-notes" rows="2" maxlength="500"
                      placeholder="Add any notes about this selection"></textarea>
          </div>
          
          <div class="save-dialog-actions">
            <button class="btn btn-secondary" data-action="cancel">Cancel</button>
            ${n?`
              <button class="btn btn-outline" data-action="save-new">Save as New</button>
              <button class="btn btn-accent" data-action="save-update">Update</button>
            `:`
              <button class="btn btn-accent" data-action="save-new">Save</button>
            `}
          </div>
        </div>
      </div>
    `;this.injectSaveDialogStyles(),document.body.insertAdjacentHTML(`beforeend`,a);let o=document.getElementById(`save-dialog`),s=document.getElementById(`save-doc-name`),c=document.getElementById(`save-notes`);s?.focus(),s?.select(),o.querySelectorAll(`button[data-action]`).forEach(e=>{e.addEventListener(`click`,async()=>{let t=e.dataset.action;if(t===`cancel`){o.remove();return}let n=s?.value.trim()||`Untitled Selection`,r=c?.value.trim()||``;this.currentSelectionName=n;let i={...this.prepareSelectionData(),documentName:n,notes:r};o.querySelectorAll(`button`).forEach(e=>e.disabled=!0),e.textContent=`Saving...`;try{let e;t===`save-update`?e=await Y.updateSelection(this.currentSelectionId,i):(e=await Y.saveSelection(i),e.success&&e.id&&(this.currentSelectionId=e.id)),o.remove(),e.success?(this.hasUnsavedChanges=!1,this.lastSaveTime=new Date,this.updateContextHeader(),Q.success(t===`save-update`?`Selection updated!`:`Selection saved!`)):Q.error(`Failed to save: `+(e.error||`Unknown error`))}catch(e){o.remove(),Q.error(`Failed to save: `+e.message)}})}),o.addEventListener(`click`,e=>{e.target===o&&o.remove()});let l=e=>{e.key===`Escape`&&(o.remove(),document.removeEventListener(`keydown`,l))};document.addEventListener(`keydown`,l)}injectSaveDialogStyles(){document.getElementById(`save-dialog-styles`)||document.head.insertAdjacentHTML(`beforeend`,`
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
    `)}showLoadPicker(){i.requireAuth(e=>{this._showLoadPickerInternal(e)})}_showLoadPickerInternal(e){Xe.show(e=>{console.log(`✅ Selection loaded:`,e),this.currentSelectionId=e.id||null,this.currentSelectionName=e.documentName||e.customerName||`Loaded Selection`,this.hasUnsavedChanges=!1,this.loadExistingProducts(),this.updateTotals(),this.updateContextHeader(),e.roomOrder&&Array.isArray(e.roomOrder)&&(this.customRoomOrder=e.roomOrder,this.saveCustomRoomOrder()),Q.success(`Loaded ${e.productCount||this.gridRows.length} products`)})}escapeHtml(e){let t=document.createElement(`div`);return t.textContent=e||``,t.innerHTML}},ft=`onboardingCompleted`,pt=2,mt=new class{constructor(){this.currentStep=0,this.overlay=null}shouldShow(){let e=localStorage.getItem(ft);if(!e)return!0;try{return JSON.parse(e).version<pt}catch{return!0}}show(){this.shouldShow()&&this.showForced()}showForced(){let e=document.getElementById(`onboarding-overlay`);e&&e.remove(),this.currentStep=0,this.createOverlay(),this.renderStep()}createOverlay(){this.overlay=document.createElement(`div`),this.overlay.id=`onboarding-overlay`,this.overlay.innerHTML=`
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
    `,this.injectStyles(),document.body.appendChild(this.overlay),document.getElementById(`onboarding-skip`)?.addEventListener(`click`,()=>this.complete()),document.getElementById(`onboarding-next`)?.addEventListener(`click`,()=>this.nextStep())}injectStyles(){if(document.getElementById(`onboarding-styles`))return;let e=document.createElement(`style`);e.id=`onboarding-styles`,e.textContent=`
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
    `,document.head.appendChild(e)}getSteps(){return[{icon:`logo`,title:`Welcome to Product Presenter`,text:`Create beautiful PDF presentations of Seima products for your clients in minutes.`,features:[]},{icon:`📦`,title:`Add Your Products`,text:`There are three ways to get started:`,features:[{icon:`📁`,title:`Import a File`,desc:`Upload CSV or Excel files with product codes`},{icon:`📂`,title:`Load a Selection`,desc:`Continue from a previous saved selection`},{icon:`🔍`,title:`Search Products`,desc:`Search and add products one by one`}]},{icon:`🏠`,title:`Organise by Room`,text:`Group products by room or area. Drag to reorder, and easily manage your selection.`,features:[{icon:`🎨`,title:`Colour-coded`,desc:`Rooms are visually distinct for quick reference`},{icon:`📊`,title:`Sort Options`,desc:`Sort by Room/Group, Product Code, or Product Name`},{icon:`💾`,title:`Auto-saves`,desc:`Your work is automatically preserved`}]},{icon:`📄`,title:`Create Your PDF`,text:`Click "Create PDF" to customise and generate a professional presentation with your branding.`,features:[{icon:`💰`,title:`Pricing Options`,desc:`Show RRP, add GST, or hide pricing entirely`},{icon:`📝`,title:`Content Control`,desc:`Include descriptions and custom notes`},{icon:`📑`,title:`Cover Pages`,desc:`Add branded cover and appendix pages`}]}]}renderStep(){let e=this.getSteps(),t=e[this.currentStep],n=document.getElementById(`onboarding-content`),r=document.getElementById(`onboarding-dots`),i=document.getElementById(`onboarding-next`);if(!n||!r)return;let a=``;t.features.length>0&&(a=t.features.map(e=>`
        <div class="onboarding-feature">
          <span class="onboarding-feature-icon">${e.icon}</span>
          <div class="onboarding-feature-content">
            <div class="onboarding-feature-title">${e.title}</div>
            <div class="onboarding-feature-desc">${e.desc}</div>
          </div>
        </div>
      `).join(``)),n.innerHTML=`
      ${t.icon===`logo`?`<img src="assets/seima-logo.png" alt="Seima" class="onboarding-logo">`:`<div class="onboarding-icon">${t.icon}</div>`}
      <h2 class="onboarding-title">${t.title}</h2>
      <p class="onboarding-text">${t.text}</p>
      ${a}
    `,r.innerHTML=e.map((e,t)=>`<div class="onboarding-dot ${t===this.currentStep?`active`:``}"></div>`).join(``),i&&(i.textContent=this.currentStep===e.length-1?`Get Started`:`Next`)}nextStep(){let e=this.getSteps();this.currentStep<e.length-1?(this.currentStep++,this.renderStep()):this.complete()}complete(){localStorage.setItem(ft,JSON.stringify({version:pt,completedAt:new Date().toISOString()})),this.overlay&&(this.overlay.style.animation=`fadeIn 0.2s ease reverse`,setTimeout(()=>{this.overlay.remove(),this.overlay=null},200))}reset(){localStorage.removeItem(ft)}},ht=new class{constructor(){this.panel=null,this.messagesContainer=null,this.input=null,this.sendBtn=null,this.isOpen=!1,this._lastUserMessage=null,this._conversationId=null,this._userEmail=null,this._historyOpen=!1}init(){this._createPanel(),this._bindEvents(),this._restoreMessages(),this._initUserEmail()}_createPanel(){let e=document.createElement(`div`);e.id=`ai-chat-panel`,e.className=`ai-chat-panel`,e.innerHTML=`
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
    `;let t=document.createElement(`div`);t.className=`ai-chat-history-panel`,t.id=`ai-chat-history-panel`,t.innerHTML=`
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
    `,e.appendChild(t);let n=document.createElement(`div`);n.className=`ai-chat-resize-handle`,e.insertBefore(n,e.firstChild),document.body.appendChild(e),this.panel=e,this.messagesContainer=e.querySelector(`#ai-chat-messages`),this.input=e.querySelector(`#ai-chat-input`),this.sendBtn=e.querySelector(`#ai-chat-send`);let r=localStorage.getItem(`fredPanelWidth`);if(r){let t=parseInt(r,10);t>=380&&t<=window.innerWidth*.9&&(e.style.width=t+`px`,e.style.right=-(t+20)+`px`)}this._showWelcome()}_bindEvents(){this.panel.querySelector(`.ai-chat-close-btn`).addEventListener(`click`,()=>this.close()),this.panel.querySelector(`.ai-chat-clear-btn`).addEventListener(`click`,()=>this._startNewConversation()),this.panel.querySelector(`.ai-chat-history-btn`).addEventListener(`click`,()=>this._toggleHistory()),this.panel.querySelector(`.ai-chat-history-close`).addEventListener(`click`,()=>this._toggleHistory(!1)),this.input.addEventListener(`input`,()=>{this.sendBtn.disabled=!this.input.value.trim(),this._autoResizeInput()}),this.input.addEventListener(`keydown`,e=>{e.key===`Enter`&&!e.shiftKey&&(e.preventDefault(),this._send())}),this.sendBtn.addEventListener(`click`,()=>this._send());let e=this.panel.querySelector(`#ai-chat-image-btn`),t=this.panel.querySelector(`#ai-chat-image-input`);e.addEventListener(`click`,()=>t.click()),t.addEventListener(`change`,()=>{t.files.length&&this._handleImageSelect(t.files[0]),t.value=``}),this.panel.querySelector(`#ai-chat-image-remove`).addEventListener(`click`,()=>this._clearImagePreview()),document.addEventListener(`keydown`,e=>{e.key===`Escape`&&this.isOpen&&this.close()});let n=this.panel.querySelector(`.ai-chat-resize-handle`),r=!1;n.addEventListener(`mousedown`,e=>{e.preventDefault(),r=!0,n.classList.add(`active`),this.panel.style.transition=`none`}),document.addEventListener(`mousemove`,e=>{if(!r)return;let t=window.innerWidth*.9,n=Math.min(t,Math.max(380,window.innerWidth-e.clientX));this.panel.style.width=n+`px`}),document.addEventListener(`mouseup`,()=>{if(!r)return;r=!1,n.classList.remove(`active`),this.panel.style.transition=``;let e=parseInt(this.panel.style.width,10);e>=380&&localStorage.setItem(`fredPanelWidth`,e)}),document.addEventListener(`mousedown`,e=>{this.isOpen&&(r||this.panel.contains(e.target)||e.target.closest(`#ai-chat-trigger`)||e.target.closest(`.ai-product-modal-overlay`)||e.target.closest(`.ai-comp-modal-overlay`)||this.close())})}_showWelcome(){let e=[{prompt:`What matte black basin mixers do you have under $300?`,label:`Matte black mixers`},{prompt:`Show me Seima wall-mounted basins`,label:`Wall-mounted basins`},{prompt:`What tapware is available in brushed gold?`,label:`Brushed gold tapware`},{prompt:`Summarise the products in my current selection`,label:`Analyse my selection`}],t=document.createElement(`div`);t.className=`ai-chat-welcome`,t.innerHTML=`
      <div class="ai-chat-welcome-icon">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
      </div>
      <h3>Hi, I'm Fred!</h3>
      <p>Search the Seima product catalogue using natural language.</p>
      <div class="ai-chat-suggestions"></div>
    `,this.messagesContainer.innerHTML=``,this.messagesContainer.appendChild(t);let n=t.querySelector(`.ai-chat-suggestions`);this._renderSuggestions(n,e),this._fetchTopQuestions().then(t=>{if(t&&t.length>0){let r=t.slice(0,3);r.push(e[e.length-1]),n.innerHTML=``,this._renderSuggestions(n,r)}})}_renderSuggestions(e,t){for(let n of t){let t=document.createElement(`button`);t.className=`ai-suggestion-btn`,t.dataset.prompt=n.prompt,t.textContent=n.label,t.addEventListener(`click`,()=>{this.input.value=n.prompt,this.sendBtn.disabled=!1,this._send()}),e.appendChild(t)}}async _fetchTopQuestions(){let e=`fredTopQuestions`;try{let t=sessionStorage.getItem(e);if(t)try{let e=JSON.parse(t);if(e&&typeof e.expires==`number`&&e.expires>Date.now()&&Array.isArray(e.questions))return e.questions}catch{}let n=await fetch(`${G.PROXY_URL}/v1/top-questions`);if(!n.ok)return null;let r=((await n.json()).questions||[]).map(e=>({prompt:e.prompt,label:e.label||e.prompt}));return sessionStorage.setItem(e,JSON.stringify({questions:r,expires:Date.now()+6e5})),r}catch{return null}}_handleImageSelect(e){if(!e.type.startsWith(`image/`))return;let t=new FileReader;t.onload=()=>{this._pendingImage={dataUrl:t.result,mimeType:e.type,name:e.name};let n=this.panel.querySelector(`#ai-chat-image-preview`),r=this.panel.querySelector(`#ai-chat-image-thumb`);r.src=t.result,n.style.display=`flex`,this.sendBtn.disabled=!1},t.readAsDataURL(e)}_clearImagePreview(){this._pendingImage=null;let e=this.panel.querySelector(`#ai-chat-image-preview`);e.style.display=`none`,this.sendBtn.disabled=!this.input.value.trim()}_autoResizeInput(){this.input.style.height=`auto`,this.input.style.height=Math.min(this.input.scrollHeight,120)+`px`}async _send(){let e=this.input.value.trim(),t=!!this._pendingImage;if(!e&&!t||q.processing)return;let n=this.messagesContainer.querySelector(`.ai-chat-welcome`);n&&n.remove();let r=t?e||`[Image: ${this._pendingImage.name}]`:e;this._addMessage(`user`,r),this._trackQuestion(r);let i=this._pendingImage;this._clearImagePreview(),this.input.value=``,this.input.style.height=`auto`,this.sendBtn.disabled=!0;let a;i&&(a=[],e&&a.push({type:`text`,text:e}),a.push({type:`image_url`,image_url:{url:i.dataUrl,detail:`low`}}),e||a.push({type:`text`,text:`What Seima products would match this style or look similar to what's shown in this image?`}));let o=this._addThinking();try{let t=M.getSelectedProducts(),n=a||e,r,i,s=``,c=!1,l=()=>{s&&i&&(i.textContent+=s,s=``,this._scrollToBottom()),c=!1},u=await q.chat(n,P,t,e=>{i||(this._stopThinking(o),{wrapper:r,bubble:i}=this._createStreamingBubble()),s+=e,c||(c=!0,requestAnimationFrame(l))},e=>{o._serverStatus=!0;let t=o.querySelector(`.ai-thinking-status`);t&&(t.textContent=e),this._scrollToBottom()});l(),this._stopThinking(o),r||({wrapper:r,bubble:i}=this._createStreamingBubble()),i.classList.remove(`ai-msg-streaming`),i.dataset.rawContent=u.content,i.innerHTML=this._formatMarkdown(u.content),this._enrichResponseBubble(i);let d=this._generateId();r.dataset.feedbackId=d,this._appendFeedbackRow(r,d,u.content),this._persistMessages(),this._saveConversation()}catch(e){this._stopThinking(o),this._addMessage(`error`,e.message||`Something went wrong. Please try again.`)}this._scrollToBottom(),this.input.focus()}_addMessage(e,t,{skipPersist:n=!1,feedbackId:r=null}={}){let i=document.createElement(`div`);i.className=`ai-msg ai-msg-${e}`;let o=document.createElement(`div`);if(o.className=`ai-msg-bubble`,e===`user`)o.textContent=t,this._lastUserMessage=t;else if(e===`assistant`){o.dataset.rawContent=t,o.innerHTML=this._formatMarkdown(t),this._injectProductCards(o),a.isPowerUser()&&(this._enrichTableProducts(o),this._injectCompetitorCards(o)),this._cleanupCardOrphans(o),this._collapseProductCards(o),this._attachProductButtons(o);let e=r||this._generateId();i.dataset.feedbackId=e,i.appendChild(o),this._appendFeedbackRow(i,e,t)}else e===`error`&&(o.innerHTML=`<span class="ai-msg-error">${this._escapeHtml(t)}</span>`);return i.contains(o)||i.appendChild(o),this.messagesContainer.appendChild(i),this._scrollToBottom(),!n&&e!==`error`&&this._persistMessages(),i}_createStreamingBubble(){let e=document.createElement(`div`);e.className=`ai-msg ai-msg-assistant`;let t=document.createElement(`div`);return t.className=`ai-msg-bubble ai-msg-streaming`,e.appendChild(t),this.messagesContainer.appendChild(e),this._scrollToBottom(),{wrapper:e,bubble:t}}_addThinking(){let e=document.createElement(`div`);e.className=`ai-msg ai-msg-assistant`,e.innerHTML=`
      <div class="ai-msg-bubble ai-msg-thinking">
        <span class="ai-thinking-spinner"></span>
        <span class="ai-thinking-status"></span>
      </div>
    `,this.messagesContainer.appendChild(e),this._scrollToBottom();let t=e.querySelector(`.ai-thinking-spinner`),n=e.querySelector(`.ai-thinking-status`),r=[`◜`,`◠`,`◝`,`◞`,`◡`,`◟`],i=[`Checking behind the toilets...`,`This is harder than it looks...`,`Asking the tapware for directions...`,`Pretending to think really hard...`,`Rummaging through the basins...`,`Consulting the shower heads...`,`Hold on, dropped my wrench...`,`Almost there, just fixing a leak...`,`Flipping through the catalogue...`,`Processing... or just staring at the screen...`,`Fred is on it. Probably.`,`Searching every shelf and drawer...`,`This is tricky, need to ask Jim for help.`,`I'll reach out to Michael for help?`,`When do I get a break from all these questions!`,`I need Bill to upgrade my memory`],a=0,o=Math.floor(Math.random()*i.length);return e._serverStatus=!1,n.textContent=i[o],e._spinnerTimer=setInterval(()=>{a=(a+1)%r.length,t.textContent=r[a]},100),e._quipTimer=setInterval(()=>{e._serverStatus||(o=(o+1)%i.length,n.textContent=i[o])},3e3),e}_stopThinking(e){e._spinnerTimer&&clearInterval(e._spinnerTimer),e._quipTimer&&clearInterval(e._quipTimer),e.parentNode&&e.remove()}_formatMarkdown(e){let t=this._escapeHtml(e);return t=t.replace(/((?:^\|.+\|$\n?)+)/gm,e=>{let t=e.trim().split(`
`).filter(e=>e.trim());if(t.length<2)return e;let n=e=>e.split(`|`).slice(1,-1).map(e=>e.trim()),r=e=>/^\|[\s:|-]+\|$/.test(e.trim()),i=n(t[0]),a=1;return t.length>1&&r(t[1])&&(a=2),`<table class="ai-comparison-table">${`<thead><tr>`+i.map(e=>`<th>${e}</th>`).join(``)+`</tr></thead>`}${`<tbody>`+t.slice(a).filter(e=>!r(e)).map(e=>`<tr>`+n(e).map(e=>`<td>${e}</td>`).join(``)+`</tr>`).join(``)+`</tbody>`}</table>`}),t=t.replace(/\*\*(.*?)\*\*/g,`<strong>$1</strong>`),t=t.replace(/`([^`]+)`/g,`<code>$1</code>`),t=t.replace(/^### (.+)$/gm,`<h4>$1</h4>`),t=t.replace(/^## (.+)$/gm,`<h3>$1</h3>`),t=t.replace(/^- (.+)$/gm,`<li>$1</li>`),t=t.replace(/(<li>.*<\/li>\n?)+/g,e=>`<ul>${e}</ul>`),t=t.replace(/^\d+\. (.+)$/gm,`<li>$1</li>`),t=t.replace(/\n\n/g,`</p><p>`),t=`<p>${t}</p>`,t=t.replace(/<p><\/p>/g,``),t=t.replace(/<p>(<h[34]>)/g,`$1`),t=t.replace(/(<\/h[34]>)<\/p>/g,`$1`),t=t.replace(/<p>(<ul>)/g,`$1`),t=t.replace(/(<\/ul>)<\/p>/g,`$1`),t=t.replace(/<p>(<table)/g,`$1`),t=t.replace(/(<\/table>)<\/p>/g,`$1`),t=t.replace(/\b(\d{6})\b/g,`<button class="ai-add-product-btn" data-code="$1" title="Add $1 to selection">$1 <span class="ai-add-icon">+</span></button>`),t}_getBasePath(){return(document.querySelector(`base`)?.href||window.location.origin+`/`).replace(/\/$/,``)}_getProductImage(e){return e.Image_URL||e.imageUrl||e.Image||`${this._getBasePath()}/assets/no-image.png`}_getProductName(e){return e.Description||e.ProductName||e[`Product Name`]||``}_getProductMeta(e){let t=e.Finish||e.Colour||``,n=e.DimX||e[`X Dimension (mm)`]||``,r=e.DimY||e[`Y Dimension (mm)`]||``,i=e.DimZ||e[`Z Dimension (mm)`]||``;return[t,n&&n!==`0`?`${n} × ${r||0} × ${i||0}mm`:``].filter(Boolean).join(`  ·  `)}_getProductPrice(e){let t=e[`RRP INC GST`]||e.RRP_INCGST||e[`RRP EX GST`]||e.RRP_EXGST||``;return t?`$${parseFloat(t).toLocaleString(`en-AU`,{minimumFractionDigits:2})}`:``}_enrichTableProducts(e){let t=this._getBasePath(),n=q.lastCompetitorProducts;e.querySelectorAll(`.ai-comparison-table`).forEach(e=>{let r=e.querySelector(`thead`),i=e.querySelector(`tbody`);if(!r||!i)return;let a=r.querySelectorAll(`th`).length;if(a<2)return;let o=Array(a).fill(null);if(i.querySelectorAll(`tr`).forEach(e=>{e.querySelectorAll(`td`).forEach((e,t)=>{if(o[t])return;let r=e.querySelector(`strong`),i=(r?r.textContent:e.textContent).trim();if(i){if(/^\d{6}$/.test(i)){let e=P.findProductByCode(i);e&&(o[t]={src:this._getProductImage(e),click:()=>this._showProductModal(i)})}else if(n)for(let[e,r]of n){let n=String(e);if(n===i||i.includes(n)||n.includes(i)){o[t]={src:r.imageUrl||``,click:()=>this._showCompetitorModal(r.brand,e)};break}}}})}),!o.some(Boolean))return;let s=document.createElement(`tr`);s.className=`ai-table-image-row`;for(let e=0;e<a;e++){let n=document.createElement(`td`),r=o[e];if(r&&r.src){let e=document.createElement(`img`);e.className=`ai-table-product-img`,e.src=r.src,e.alt=``,e.onerror=()=>{e.src=`${t}/assets/no-image.png`},n.appendChild(e),r.click&&(n.style.cursor=`pointer`,n.addEventListener(`click`,r.click))}s.appendChild(n)}i.insertBefore(s,i.firstChild)})}_injectProductCards(e){e.querySelectorAll(`table .ai-add-product-btn`).forEach(e=>{let t=document.createElement(`strong`);t.textContent=e.dataset.code,e.replaceWith(t)});let t=e.querySelectorAll(`.ai-add-product-btn`);if(!t.length)return;let n=this._getBasePath();t.forEach(e=>{let t=e.dataset.code,r=P.findProductByCode(t);if(!r)return;let i=e.closest(`li`);if(!(i||e.parentElement))return;let a=this._getProductImage(r),o=this._getProductName(r),s=this._getProductMeta(r),c=this._getProductPrice(r),l=document.createElement(`div`);if(l.className=`ai-product-card`,l.dataset.code=t,l.innerHTML=`
        <img class="ai-product-card-img" src="${this._escapeHtml(a)}" alt="" onerror="this.src='${n}/assets/no-image.png';">
        <div class="ai-product-card-info">
          <div class="ai-product-card-name">${this._escapeHtml(o)}</div>
          ${s?`<div class="ai-product-card-meta">${this._escapeHtml(s)}</div>`:``}
          <div class="ai-product-card-footer">
            <span class="ai-product-card-price">${c}</span>
            <button class="ai-card-add-btn" data-code="${t}" title="Add to selection">+ Add</button>
          </div>
        </div>
      `,l.addEventListener(`click`,e=>{e.target.closest(`.ai-card-add-btn`)||this._showProductModal(t)}),l.querySelector(`.ai-card-add-btn`).addEventListener(`click`,e=>{e.preventDefault(),e.stopPropagation(),this._addProductToGrid(t,e.currentTarget)}),i){let e=i.parentElement;i.replaceWith(l),this._removeTrailingProductDetail(e||l)}else e.replaceWith(l)})}_removeTrailingProductDetail(e){let t=/^[\u2013\u2014–—-]\s*(Dimensions|Description|Detail|Price)\b/,n=e.nextSibling;for(;n;){let e=n.nextSibling;if(n.nodeType===Node.TEXT_NODE){if(t.test(n.textContent.trim())){n.remove(),n=e;continue}break}if(n.nodeType===Node.ELEMENT_NODE){let r=n.textContent.trim();if(n.tagName===`P`&&t.test(r)){n.remove(),n=e;continue}break}break}}_cleanupCardOrphans(e){let t=e.querySelectorAll(`.ai-product-card`);for(let e of t){let t=e.nextSibling;for(;t;){let e=t.nextSibling;if(t.nodeType===Node.TEXT_NODE){let n=t.textContent.trim();if(!n||/^[\u2013\u2014–—-]\s*/.test(n)){t.remove(),t=e;continue}if(/^[A-Z][\w\s,]+\s*[\u2013\u2014–—-]\s*\$?\d/.test(n)){t.remove(),t=e;continue}break}if(t.nodeType===Node.ELEMENT_NODE){let n=t.textContent.trim();if(t.tagName===`P`&&/^[A-Z][\w\s,]+\s*[\u2013\u2014–—-]\s*\$?\d/.test(n)){t.remove(),t=e;continue}if(t.tagName===`P`&&/^[\u2013\u2014–—-]\s*$/.test(n)){t.remove(),t=e;continue}break}break}}}_injectCompetitorCards(e){if(!a.isStaffMode())return;let t=q.lastCompetitorProducts;if(!t||t.size===0)return;let n=this._getBasePath(),r=e=>String(e).replace(/[.\-_\s/\\]+/g,``).toLowerCase(),i=e.querySelectorAll(`li`);for(let e of i){if(e.closest(`table`))continue;let i=e.textContent||``,a=null;for(let[e,n]of t)if(i.includes(e)||i.includes(r(e))){a=n;break}if(!a){let e=r(i);for(let[n,i]of t)if(e.includes(r(n))){a=i;break}}if(!a)continue;let o=a.imageUrl||`${n}/assets/no-image.png`,s=a.name||a.code,c=a.price?`$${parseFloat(a.price).toLocaleString(`en-AU`,{minimumFractionDigits:2})}`:``,l=a.finish||``,u=a.brand||``,d=document.createElement(`div`);d.className=`ai-product-card ai-comp-card`,d.dataset.brand=u,d.dataset.code=a.code,d.innerHTML=`
        <img class="ai-product-card-img" src="${this._escapeHtml(o)}" alt="" onerror="this.src='${n}/assets/no-image.png';">
        <div class="ai-product-card-info">
          <div class="ai-comp-card-badge">${this._escapeHtml(u)}</div>
          <div class="ai-product-card-name">${this._escapeHtml(s)}</div>
          ${l?`<div class="ai-product-card-meta">${this._escapeHtml(l)}</div>`:``}
          <div class="ai-product-card-footer">
            <span class="ai-product-card-price">${c}</span>
            <span class="ai-comp-card-code">${this._escapeHtml(a.code)}</span>
          </div>
        </div>
      `,d.addEventListener(`click`,()=>{this._showCompetitorModal(u,a.code)});let f=e.parentElement;e.replaceWith(d),this._removeTrailingProductDetail(f||d)}}_showCompetitorModal(e,t){if(!a.isStaffMode())return;let n=document.querySelector(`.ai-product-modal-overlay`);n&&n.remove();let r=this._getBasePath(),i=this.messagesContainer.querySelector(`.ai-comp-card[data-brand="${e}"][data-code="${t}"]`),o=i?.querySelector(`.ai-product-card-name`)?.textContent||t,s=i?.querySelector(`.ai-product-card-img`)?.src||``,c=i?.querySelector(`.ai-product-card-meta`)?.textContent||``,l=i?.querySelector(`.ai-product-card-price`)?.textContent||``,u=document.createElement(`div`);u.className=`ai-product-modal-overlay`,u.innerHTML=`
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
          <img class="ai-product-modal-img" src="${this._escapeHtml(s||`${r}/assets/no-image.png`)}" alt="" onerror="this.src='${r}/assets/no-image.png';">
          <h3 class="ai-product-modal-title">${this._escapeHtml(o)}</h3>
          <dl class="ai-product-modal-specs">
            <dt>Product Code</dt><dd>${this._escapeHtml(t)}</dd>
            <dt>Brand</dt><dd>${this._escapeHtml(e)}</dd>
            ${c?`<dt>Finish</dt><dd>${this._escapeHtml(c)}</dd>`:``}
          </dl>
          ${l?`<div class="ai-product-modal-price ai-comp-modal-price">${this._escapeHtml(l)} <small>(Competitor RRP)</small></div>`:``}
          <div class="ai-comp-modal-loading">Loading full details...</div>
        </div>
      </div>
    `,u.addEventListener(`click`,e=>{e.target===u&&u.remove()}),u.querySelector(`.ai-product-modal-close`).addEventListener(`click`,()=>u.remove()),document.addEventListener(`keydown`,function e(t){t.key===`Escape`&&(u.remove(),document.removeEventListener(`keydown`,e))}),document.body.appendChild(u),this._enrichCompetitorModal(u,e,t,r)}async _enrichCompetitorModal(e,t,n,r){let i=e.querySelector(`.ai-product-modal-body`),a=i?.querySelector(`.ai-comp-modal-loading`);try{let e=await z.findCompetitorEntryByCode(n);if(!e?.competitorProduct){a&&a.remove();return}let o=e.competitorProduct,s=o.image_url||o.Image_URL||`${r}/assets/no-image.png`,c=o.product_name||o.ProductName||n,l=o.description||o.product_description||o.features||``,u=o.rrp_ex_gst||o.rrp||o.price||o.rrp_inc_gst||``,d=u?`$${parseFloat(u).toLocaleString(`en-AU`,{minimumFractionDigits:2})}`:``,f=o.product_url||``,p=[];o.product_code&&p.push([`Product Code`,o.product_code]),o.collection&&p.push([`Collection`,o.collection]),o.product_type&&p.push([`Category`,o.product_type]),o.subcategory&&p.push([`Subcategory`,o.subcategory]),(o.finish||o.colour)&&p.push([`Finish`,o.finish||o.colour]),o.material&&p.push([`Material`,o.material]),o.dimensions_mm&&p.push([`Dimensions`,o.dimensions_mm]),o.wels_rating&&p.push([`WELS`,o.wels_rating]),i.innerHTML=`
        <img class="ai-product-modal-img" src="${this._escapeHtml(s)}" alt="" onerror="this.src='${r}/assets/no-image.png';">
        <h3 class="ai-product-modal-title">${this._escapeHtml(c)}</h3>
        ${p.length?`<dl class="ai-product-modal-specs">${p.map(([e,t])=>`<dt>${this._escapeHtml(e)}</dt><dd>${this._escapeHtml(t)}</dd>`).join(``)}</dl>`:``}
        ${l?`<div class="ai-product-modal-desc">${this._escapeHtml(l)}</div>`:``}
        ${d?`<div class="ai-product-modal-price ai-comp-modal-price">${d} <small>(Competitor RRP)</small></div>`:``}
        ${f?`<a class="ai-comp-modal-link" href="${this._escapeHtml(f)}" target="_blank" rel="noopener">View on ${this._escapeHtml(t)} website</a>`:``}
      `}catch{a&&a.remove()}}_collapseProductCards(e,t=5){let n=e.querySelectorAll(`.ai-product-card`);if(n.length<=t)return;let r=[];n.forEach((e,n)=>{n>=t&&(e.style.display=`none`,r.push(e))});let i=document.createElement(`button`);i.className=`ai-show-more-btn`,i.textContent=`Show ${r.length} more product${r.length>1?`s`:``}`,i.addEventListener(`click`,()=>{r.forEach(e=>{e.style.display=``}),i.remove(),this._scrollToBottom()});let a=n[t-1];a.parentNode.insertBefore(i,a.nextSibling)}_attachProductButtons(e){e.querySelectorAll(`.ai-add-product-btn`).forEach(e=>{e.addEventListener(`click`,t=>{t.preventDefault(),this._addProductToGrid(e.dataset.code,e)})})}_addProductToGrid(e,t){let n=P.findProductByCode(e);if(!n){t&&(t.classList.add(`ai-add-error`),t.title=`Product not found`);return}M.addProductToSelection(n),window.productGridManager&&(window.productGridManager.loadExistingProducts(),window.productGridManager.updateTotals(),window.productGridManager.ensureAtLeastOneEmptyRow()),t&&(t.classList.add(`added`),t.disabled=!0,t.textContent=`Added ✓`),this._markCardAdded(e)}_markCardAdded(e){document.querySelectorAll(`.ai-card-add-btn[data-code="${e}"]`).forEach(e=>{e.classList.add(`added`),e.disabled=!0,e.textContent=`Added ✓`});let t=document.querySelector(`.ai-product-modal-add[data-code="`+e+`"]`);t&&(t.classList.add(`added`),t.disabled=!0,t.textContent=`Added to Selection ✓`)}_showProductModal(e){let t=P.findProductByCode(e);if(!t)return;let n=document.querySelector(`.ai-product-modal-overlay`);n&&n.remove();let r=this._getBasePath(),i=this._getProductImage(t),a=this._getProductName(t),o=this._getProductPrice(t),s=t[`Long Description`]||t.LongDescription||``,c=t.Range||``,l=t.Group||``,u=t.SubGroup||t.Subgroup||``,d=t.Finish||``,f=t.Colour||``,p=t.DimX||t[`X Dimension (mm)`]||``,m=t.DimY||t[`Y Dimension (mm)`]||``,h=t.DimZ||t[`Z Dimension (mm)`]||``,g=p&&p!==`0`?`${p} × ${m||0} × ${h||0}mm`:``,_=t[`WELS STAR`]||t.WELS_STAR||``,v=[];c&&v.push([`Range`,c]),l&&v.push([`Group`,l]),u&&v.push([`Type`,u]),d&&v.push([`Finish`,d]),f&&f!==d&&v.push([`Colour`,f]),g&&v.push([`Dimensions`,g]),_&&v.push([`WELS`,`${_} star`]);let y=document.createElement(`div`);y.className=`ai-product-modal-overlay`,y.innerHTML=`
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
          <img class="ai-product-modal-img" src="${this._escapeHtml(i)}" alt="" onerror="this.src='${r}/assets/no-image.png';">
          <h3 class="ai-product-modal-title">${this._escapeHtml(a)}</h3>
          ${v.length?`<dl class="ai-product-modal-specs">${v.map(([e,t])=>`<dt>${this._escapeHtml(e)}</dt><dd>${this._escapeHtml(t)}</dd>`).join(``)}</dl>`:``}
          ${s?`<div class="ai-product-modal-desc">${this._escapeHtml(s)}</div>`:``}
          ${o?`<div class="ai-product-modal-price">${o}</div>`:``}
          <button class="ai-product-modal-add" data-code="${e}">Add to Selection</button>
        </div>
      </div>
    `,y.addEventListener(`click`,e=>{e.target===y&&y.remove()}),y.querySelector(`.ai-product-modal-close`).addEventListener(`click`,()=>y.remove()),y.querySelector(`.ai-product-modal-add`).addEventListener(`click`,t=>{this._addProductToGrid(e,null);let n=t.currentTarget;n.classList.add(`added`),n.disabled=!0,n.textContent=`Added to Selection ✓`}),document.addEventListener(`keydown`,function e(t){t.key===`Escape`&&(y.remove(),document.removeEventListener(`keydown`,e))}),document.body.appendChild(y)}_appendFeedbackRow(e,t,n){let r=document.createElement(`div`);r.className=`ai-feedback-row`;let i=this._getFeedbackEntry(t)?.rating||null;r.innerHTML=`
      <button class="ai-feedback-btn ai-feedback-up${i===`up`?` active`:``}"
              data-rating="up" title="Helpful">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3H14z"></path>
          <path d="M7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
        </svg>
      </button>
      <button class="ai-feedback-btn ai-feedback-down${i===`down`?` active`:``}"
              data-rating="down" title="Not helpful">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3H10z"></path>
          <path d="M17 2h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-3"></path>
        </svg>
      </button>
    `,r.querySelectorAll(`.ai-feedback-btn`).forEach(e=>{e.addEventListener(`click`,()=>{let i=e.dataset.rating;r.querySelectorAll(`.ai-feedback-btn`).forEach(e=>e.classList.remove(`active`)),e.classList.add(`active`),this._saveFeedback(t,n,i)})});let a=e.querySelector(`.ai-msg-bubble`);a?e.insertBefore(r,a.nextSibling):e.appendChild(r)}async _saveFeedback(e,t,n){try{let r=await this._loadFeedback(),i=r.findIndex(t=>t.id===e),a={id:e,question:this._lastUserMessage||``,answer:(t||``).slice(0,500),rating:n,timestamp:Date.now(),synced:!1};i>=0?r[i]={...r[i],...a}:r.push(a);let{set:o}=await R(async()=>{let{set:e}=await import(`./vendor-idb-BL1M7mAU.js`).then(e=>e.t);return{set:e}},__vite__mapDeps([0,1]));await o(U,r)}catch{}}_getFeedbackEntry(e){return this._loadFeedback().then(t=>t.find(t=>t.id===e)||null)}async _loadFeedback(){try{let{get:e}=await R(async()=>{let{get:e}=await import(`./vendor-idb-BL1M7mAU.js`).then(e=>e.t);return{get:e}},__vite__mapDeps([0,1])),t=await e(U);return Array.isArray(t)?t:[]}catch{return[]}}_escapeHtml(e){let t=document.createElement(`div`);return t.textContent=e,t.innerHTML}_scrollToBottom(){requestAnimationFrame(()=>{this.messagesContainer.scrollTop=this.messagesContainer.scrollHeight})}_enrichResponseBubble(e){this._injectProductCards(e),a.isPowerUser()&&(this._enrichTableProducts(e),this._injectCompetitorCards(e)),this._cleanupCardOrphans(e),this._collapseProductCards(e),this._attachProductButtons(e)}_persistMessages(){clearTimeout(this._persistTimer),this._persistTimer=setTimeout(()=>this._doPersistMessages(),500)}async _doPersistMessages(){try{let e=[];this.messagesContainer.querySelectorAll(`.ai-msg`).forEach(t=>{t.classList.contains(`ai-msg-user`)?e.push({role:`user`,content:t.querySelector(`.ai-msg-bubble`)?.textContent||``}):t.classList.contains(`ai-msg-assistant`)&&!t.querySelector(`.ai-msg-thinking`)&&e.push({role:`assistant`,content:t.querySelector(`.ai-msg-bubble`)?.dataset.rawContent||``,feedbackId:t.dataset.feedbackId||null})});let{set:t}=await R(async()=>{let{set:e}=await import(`./vendor-idb-BL1M7mAU.js`).then(e=>e.t);return{set:e}},__vite__mapDeps([0,1]));await t(H,e)}catch{}}async _restoreMessages(){try{localStorage.removeItem(H);let{get:e}=await R(async()=>{let{get:e}=await import(`./vendor-idb-BL1M7mAU.js`).then(e=>e.t);return{get:e}},__vite__mapDeps([0,1])),t=await e(H);if(!Array.isArray(t)||t.length===0)return;let n=this.messagesContainer.querySelector(`.ai-chat-welcome`);n&&n.remove();for(let e of t)e.role===`user`&&(this._lastUserMessage=e.content),this._addMessage(e.role,e.content,{skipPersist:!0,feedbackId:e.feedbackId||null});let r=document.createElement(`div`);r.className=`ai-chat-restored`,r.textContent=`Previous conversation restored`,this.messagesContainer.prepend(r)}catch{}}_generateId(){return Date.now().toString(36)+Math.random().toString(36).substr(2)}async _trackQuestion(e){try{let{get:t,set:n}=await R(async()=>{let{get:e,set:t}=await import(`./vendor-idb-BL1M7mAU.js`).then(e=>e.t);return{get:e,set:t}},__vite__mapDeps([0,1])),r=await t(`fredQuestionLog`)||{},i=e.trim();if(i.length<5)return;r[i]=(r[i]||0)+1,await n(W,r)}catch{}}async _syncFeedback(){try{let{get:e,set:t,del:n}=await R(async()=>{let{get:e,set:t,del:n}=await import(`./vendor-idb-BL1M7mAU.js`).then(e=>e.t);return{get:e,set:t,del:n}},__vite__mapDeps([0,1])),r=await this._loadFeedback(),i=r.filter(e=>!e.synced),o=await e(`fredQuestionLog`)||null;if(i.length===0&&!o)return;if((await fetch(`${G.PROXY_URL}/v1/feedback`,{method:`POST`,headers:{"Content-Type":`application/json`,...a.getAuthHeaders()},body:JSON.stringify({entries:i,questionLog:o})})).ok){for(let e of i)e.synced=!0;this._pruneFeedback(r),await t(U,r),await n(W)}}catch{}}_pruneFeedback(e){let t=Date.now()-10080*60*1e3;for(let n=e.length-1;n>=0;n--)e[n].synced&&e[n].timestamp<t&&e.splice(n,1)}async _clearChat(){await q.clearHistory();try{let{del:e}=await R(async()=>{let{del:e}=await import(`./vendor-idb-BL1M7mAU.js`).then(e=>e.t);return{del:e}},__vite__mapDeps([0,1]));await e(U),await e(W)}catch{}localStorage.removeItem(U),localStorage.removeItem(W),this._showWelcome()}async _initUserEmail(){try{let e=a.getCurrentUser();this._userEmail=e?.email||null}catch{}}async _saveConversation(){if(!this._userEmail)return;let e=[];if(this.messagesContainer.querySelectorAll(`.ai-msg`).forEach(t=>{t.classList.contains(`ai-msg-user`)?e.push({role:`user`,content:t.querySelector(`.ai-msg-bubble`)?.textContent||``}):t.classList.contains(`ai-msg-assistant`)&&!t.querySelector(`.ai-msg-thinking`)&&e.push({role:`assistant`,content:t.querySelector(`.ai-msg-bubble`)?.dataset.rawContent||``})}),e.length<2)return;this._conversationId||=Date.now().toString(36)+Math.random().toString(36).slice(2,8);let t=e.find(e=>e.role===`user`)?.content||`Untitled`,n=t.length>50?t.slice(0,47)+`...`:t;try{await fetch(`${G.PROXY_URL}/v1/conversations/${this._conversationId}`,{method:`PUT`,headers:{"Content-Type":`application/json`,...a.getAuthHeaders()},body:JSON.stringify({email:this._userEmail,title:n,messages:e})})}catch{}}_startNewConversation(){this._saveConversation(),this._conversationId=null,this._clearChat()}_toggleHistory(e){let t=this.panel.querySelector(`#ai-chat-history-panel`);this._historyOpen=e===void 0?!this._historyOpen:e,t.classList.toggle(`open`,this._historyOpen),this._historyOpen&&this._loadConversationList()}async _loadConversationList(){if(!this._userEmail){this.panel.querySelector(`#ai-chat-history-list`).innerHTML=`<div class="ai-chat-history-empty">Sign in to see conversation history.</div>`;return}let e=this.panel.querySelector(`#ai-chat-history-list`);e.innerHTML=`<div class="ai-chat-history-empty">Loading...</div>`;try{let t=`${G.PROXY_URL}/v1/conversations?email=${encodeURIComponent(this._userEmail)}`,n=await fetch(t,{headers:a.getAuthHeaders()});if(!n.ok)throw Error(`Failed`);let r=(await n.json()).conversations||[];if(r.length===0){e.innerHTML=`<div class="ai-chat-history-empty">No previous conversations.</div>`;return}e.innerHTML=r.map(e=>`
        <button class="ai-chat-history-item" data-id="${e.id}">
          <div class="ai-chat-history-title">${this._escapeHtml(e.title)}</div>
          <div class="ai-chat-history-meta">${e.messageCount||0} messages · ${this._formatHistoryTime(e.updatedAt)}</div>
        </button>
      `).join(``),e.querySelectorAll(`.ai-chat-history-item`).forEach(e=>{e.addEventListener(`click`,()=>this._loadConversation(e.dataset.id))})}catch{e.innerHTML=`<div class="ai-chat-history-empty">Failed to load conversations.</div>`}}async _loadConversation(e){try{let t=`${G.PROXY_URL}/v1/conversations/${e}`,n=await fetch(t,{headers:a.getAuthHeaders()});if(!n.ok)throw Error(`Failed`);let r=await n.json();this._conversationId=e,q.clearHistory(),this.messagesContainer.innerHTML=``;let i=this.messagesContainer.querySelector(`.ai-chat-welcome`);i&&i.remove();for(let e of r.messages||[])e.role===`user`&&(this._lastUserMessage=e.content),this._addMessage(e.role,e.content,{skipPersist:!0}),(e.role===`user`||e.role===`assistant`)&&q.conversationHistory.push(e);this._persistMessages(),this._toggleHistory(!1);let o=document.createElement(`div`);o.className=`ai-chat-restored`,o.textContent=`Conversation restored`,this.messagesContainer.prepend(o)}catch{console.error(`Failed to load conversation`)}}_formatHistoryTime(e){if(!e)return``;let t=new Date(e),n=new Date-t,r=Math.floor(n/864e5);return r===0?`Today`:r===1?`Yesterday`:r<7?`${r}d ago`:t.toLocaleDateString(`en-AU`,{day:`numeric`,month:`short`})}open(){this.panel&&(this.panel.style.right=``,this.panel.classList.add(`open`),this.isOpen=!0,setTimeout(()=>this.input?.focus(),300),this._syncFeedback())}close(){if(!this.panel){this.isOpen=!1;return}let e=this.panel.offsetWidth||620;this.panel.style.right=-(e+20)+`px`,this.panel.classList.remove(`open`),this.isOpen=!1}toggle(){this.isOpen?this.close():this.open()}},gt=class{constructor(){this.navigationManager=null,this.fileImportManager=new Ye,this.productGridManager=new dt,this.isInitialized=!1,N.log(`SeimaScanner application starting`,j.INFO)}async init(){try{N.log(`Initializing application modules`,j.INFO),a.configure({googleSheetsUrl:L.PRESENTATION_RECORDING?.GOOGLE_SHEETS_URL,email:L.EMAIL}),i.configure({logoSrc:`assets/seima-logo.png`,brandName:`Seima`,appName:`Product Presenter`});let e=L.PRESENTATION_RECORDING?.GOOGLE_SHEETS_URL;if(e&&F(e).catch(e=>{console.warn(`Synonyms preload failed:`,e?.message||e)}),L.CROSSHAIR?.ENABLED){let e=a.getCurrentUser();z.configure(L.CROSSHAIR,e?.email||``),z.preload().catch(e=>{console.warn(`Crosshair preload failed (user may not be logged in):`,e.message)})}this.navigationManager=new ae;let t=n.getCompatibilityReport();N.log(`Browser compatibility: ${t.score}% (${t.browserName})`,j.INFO),n.shouldShowCompatibilityWarning()&&this.showCompatibilityWarning(),await this.navigationManager.init(),this.fileImportManager.init(),this.setupGlobalEventListeners(),this.productGridManager.init(),ht.init();let r=document.getElementById(`ai-chat-trigger`);return r&&r.addEventListener(`click`,()=>ht.toggle()),window.navigationManager=this.navigationManager,window.productGridManager=this.productGridManager,window.browserCompatibility=n,window.downloadWithFallback=oe,window.showPdfFormScreen=se,this.isInitialized=!0,N.log(`Seima Scanner initialized successfully`,j.INFO),this._dismissLoadingOverlay(),setTimeout(()=>{mt.show()},500),!0}catch(e){return N.handleError({message:`Failed to initialize application`,error:e,category:k.UI,level:j.CRITICAL,context:`app-init`}),this._dismissLoadingOverlay(),!1}}_dismissLoadingOverlay(){let e=document.getElementById(`app-loading-overlay`);e&&(e.classList.add(`fade-out`),e.addEventListener(`transitionend`,()=>e.remove(),{once:!0}),setTimeout(()=>e.remove(),400))}showCompatibilityWarning(){let e=n.getCompatibilityReport(),t=e.recommendations;if(t.length===0)return;let r=t.filter(e=>e.type===`critical`),i=e.score<A.get(`compatibility.minCompatibilityScore`,70);if(r.length===0&&!i)return;let a=document.createElement(`div`);a.style.cssText=`
      position: fixed; top: 0; left: 0; right: 0; z-index: 9998;
      background: linear-gradient(135deg, #fef3c7 0%, #fed7aa 100%);
      border-bottom: 2px solid #f59e0b; padding: 12px 16px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
      font-size: 14px; line-height: 1.4;
    `,a.innerHTML=`
      <div style="display: flex; align-items: center; justify-content: space-between;">
        <div style="display: flex; align-items: center;">
          <span style="font-size: 18px; margin-right: 8px;">⚠️</span>
          <div>
            <strong style="color: #92400e;">Browser Compatibility Notice</strong>
            <div style="color: #a16207; font-size: 13px; margin-top: 2px;">
              ${r.length>0?r[0].message:`Some features may not work optimally`}
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
    `,document.body.insertBefore(a,document.body.firstChild)}setupGlobalEventListeners(){window.addEventListener(`generatePdf`,e=>{let{tipTailSettings:t,...n}=e.detail;le(),se(n,t||null)}),window.addEventListener(`beforeunload`,()=>{}),n.features.memoryAPI&&setInterval(()=>{let e=n.memoryInfo;e.memoryPressure===`high`&&console.warn(`High memory usage detected:`,e)},6e4)}getSelectedProducts(){return M.getSelectedProducts()}clearSelection(){return M.clearAllSelections()}addProduct(e,{notes:t=``,room:n=``,quantity:r=1}={}){return M.addProductToSelection(e,{notes:t,room:n,quantity:r})}updateSelectionCount(){this.navigationManager&&this.navigationManager.updateSelectionCount()}showError(e){alert(e)}};document.addEventListener(`DOMContentLoaded`,async()=>{window.seimaScanner=new gt,await window.seimaScanner.init(),window._appVersion=L.VERSION;let e=document.getElementById(`menu-version-footer`);e&&(e.textContent=`Ver: ${L.VERSION}`),_t(),vt();let t=document.getElementById(`changelog-close`);t&&t.addEventListener(`click`,()=>{document.getElementById(`changelog-modal`).style.display=`none`})});function _t(){let e=document.getElementById(`help-btn`);e&&e.addEventListener(`click`,()=>{yt()});let t=document.getElementById(`crosshair-btn`);t&&t.addEventListener(`click`,()=>{window.location.href=`screens/validator.html`});let n=document.getElementById(`pending-btn`);n&&n.addEventListener(`click`,()=>{window.location.href=`screens/admin-pending.html`});let r=document.getElementById(`landscape-btn`);r&&r.addEventListener(`click`,()=>{window.location.href=`screens/landscape.html`});let i=document.getElementById(`admin-btn`);i&&i.addEventListener(`click`,()=>{window.location.href=`screens/admin.html`});let a=document.getElementById(`quick-start-btn`);a&&a.addEventListener(`click`,()=>{mt.showForced()})}function vt(){let e=document.getElementById(`user-menu-container`),t=document.getElementById(`user-menu-trigger`),n=document.getElementById(`user-menu-dropdown`),r=document.getElementById(`sign-in-btn`),o=document.getElementById(`user-avatar`),s=document.getElementById(`user-name-display`);function c(t){if(t){L.CROSSHAIR?.ENABLED&&(z.configure(L.CROSSHAIR,t.email||``),z.preload().catch(e=>{console.warn(`Crosshair preload after login failed:`,e)})),e&&(e.style.display=`block`),r&&(r.style.display=`none`);let d=document.getElementById(`crosshair-btn`),f=document.getElementById(`pending-btn`),p=a.isStaffMode(),m=a.isPowerUser(),h=a.isAdmin();d&&(d.style.display=L.CROSSHAIR?.ENABLED&&p?``:`none`),f&&(f.style.display=p?``:`none`);let g=document.getElementById(`landscape-btn`);g&&(g.style.display=L.CROSSHAIR?.ENABLED&&p?``:`none`);let _=document.getElementById(`admin-btn`);_&&(_.style.display=h?``:`none`);let v=document.getElementById(`staff-divider`),y=d?.style.display!==`none`||f?.style.display!==`none`||g?.style.display!==`none`||_?.style.display!==`none`;v&&(v.style.display=y?``:`none`),document.querySelectorAll(`#import-file-btn, #entry-import`).forEach(e=>{e&&(e.style.display=m?``:`none`)});let b=document.getElementById(`ai-chat-trigger`);b&&(b.style.display=``);let x=document.getElementById(`guided-ask-fred`);x&&(x.style.display=``);let S=l(t.name);o&&(o.textContent=S),s&&(s.textContent=t.name?.split(` `)[0]||`User`);let C=(t.email||``).toLowerCase().endsWith(`@seima.com.au`)&&t.emailVerified===!1,w=document.getElementById(`verify-email-banner`);if(C?(w||(w=document.createElement(`div`),w.id=`verify-email-banner`,w.className=`verify-email-banner`,w.innerHTML=`
            <span>Verify your email to access staff features.</span>
            <button id="verify-email-btn" class="verify-email-btn">Verify now</button>
          `,document.body.insertBefore(w,document.body.firstChild),w.querySelector(`#verify-email-btn`).addEventListener(`click`,()=>{i.showVerifyEmail(t.email,()=>{c(a.getCurrentUser()),w?.remove()})})),w.style.display=``):w&&(w.style.display=`none`),n){let e=C?`
            <button class="user-menu-item" id="menu-verify-email" style="color:var(--color-copper,#b87333);font-weight:600;">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              Verify Email (staff access)
            </button>`:``,r=window._appVersion?`Ver: ${window._appVersion}`:`Loading...`;n.innerHTML=`
          <div class="user-menu-header">
            <div class="user-menu-name">${u(t.name||`User`)}</div>
            <div class="user-menu-email">${u(t.email||``)}</div>
          </div>
          <div class="user-menu-items">
            ${e}
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
          <div class="user-menu-footer" id="menu-version-footer" title="Click to view what's new">${r}</div>
        `,document.getElementById(`menu-verify-email`)?.addEventListener(`click`,()=>{n.style.display=`none`,i.showVerifyEmail(t.email,()=>{c(a.getCurrentUser()),document.getElementById(`verify-email-banner`)?.remove()})}),document.getElementById(`menu-refresh`)?.addEventListener(`click`,async()=>{n.style.display=`none`;try{let{del:e,keys:t}=await R(async()=>{let{del:e,keys:t}=await import(`./vendor-idb-BL1M7mAU.js`).then(e=>e.t);return{del:e,keys:t}},__vite__mapDeps([0,1])),n=await t(),r=[`productCatalogCsv`,`customerLogo`,`fredChatHistory`,`fredChatMessages`,`fredFeedback`,`fredQuestionLog`];await Promise.all(n.filter(e=>typeof e==`string`&&(r.includes(e)||e.startsWith(`crosshair_`))).map(t=>e(t)))}catch{}localStorage.removeItem(`configPreferences`),localStorage.removeItem(`pdfWizardSettings`),Object.keys(localStorage).filter(e=>e.startsWith(`crosshair_`)||e.startsWith(`fred`)).forEach(e=>localStorage.removeItem(e)),window.location.reload()}),document.getElementById(`menu-version-footer`)?.addEventListener(`click`,()=>{n.style.display=`none`,xt()}),document.getElementById(`menu-profile`)?.addEventListener(`click`,()=>{n.style.display=`none`,i.showEditProfile(e=>{M.clearUserSettings(),c(e)})}),document.getElementById(`menu-password`)?.addEventListener(`click`,()=>{n.style.display=`none`,i.showChangePassword()}),document.getElementById(`menu-logout`)?.addEventListener(`click`,()=>{n.style.display=`none`,M.clearUserSettings(),z.clearAllCaches(),window.productGridManager?.searchCache&&window.productGridManager.searchCache.clear(),a.logout(),c(null)})}}else{e&&(e.style.display=`none`),r&&(r.style.display=`block`),document.querySelectorAll(`#import-file-btn, #entry-import`).forEach(e=>{e&&(e.style.display=`none`)});let t=document.getElementById(`ai-chat-trigger`);t&&(t.style.display=`none`);let n=document.getElementById(`guided-ask-fred`);n&&(n.style.display=`none`),ht.close();let i=document.getElementById(`crosshair-btn`);i&&(i.style.display=`none`);let a=document.getElementById(`pending-btn`);a&&(a.style.display=`none`);let o=document.getElementById(`landscape-btn`);o&&(o.style.display=`none`);let s=document.getElementById(`admin-btn`);s&&(s.style.display=`none`);let c=document.getElementById(`staff-divider`);c&&(c.style.display=`none`)}typeof P?.refreshCatalogAccessForRole==`function`&&P.refreshCatalogAccessForRole().catch(e=>{console.warn(`Catalog access refresh failed:`,e?.message||e)})}function l(e){if(!e)return`?`;let t=e.trim().split(` `);return t.length>=2?(t[0][0]+t[t.length-1][0]).toUpperCase():e.substring(0,2).toUpperCase()}function u(e){let t=document.createElement(`div`);return t.textContent=e||``,t.innerHTML}t&&n&&(t.addEventListener(`click`,e=>{e.stopPropagation();let t=n.style.display!==`none`;n.style.display=t?`none`:`block`}),document.addEventListener(`click`,t=>{e?.contains(t.target)||(n.style.display=`none`)})),r&&r.addEventListener(`click`,()=>{i.showLogin(e=>{c(e)})}),a.onAuthChange=c,c(a.getCurrentUser())}function yt(){let e=document.getElementById(`user-guide-modal`),t=document.getElementById(`user-guide-content`);if(!e||!t)return;t.innerHTML=bt(),e.style.display=`flex`;let n=document.getElementById(`user-guide-close`);n&&(n.onclick=()=>{e.style.display=`none`}),e.onclick=t=>{t.target===e&&(e.style.display=`none`)};let r=t=>{t.key===`Escape`&&(e.style.display=`none`,document.removeEventListener(`keydown`,r))};document.addEventListener(`keydown`,r)}function bt(){return`
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
  `}async function xt(){try{let e=document.getElementById(`changelog-modal`),t=document.getElementById(`changelog-content`),n=(await(await fetch(`./version.txt`)).text()).trim().split(`
`);if(n.length===0){t.innerHTML=`<p>No changelog available.</p>`,e.style.display=`flex`;return}let r=e=>String(e).replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`),i=``;n.forEach(e=>{if(e.trim()){let t=e.indexOf(` - `);if(t>0){let n=e.substring(0,t).trim(),a=e.substring(t+3).trim();i+=`
            <div style="margin-bottom: 30px; border-bottom: 1px solid #eee; padding-bottom: 20px;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                <h4 style="margin: 0; color: #a09484;">v${r(n)}</h4>
              </div>
              <p style="margin: 10px 0; color: #555; line-height: 1.5;">${r(a)}</p>
            </div>
          `}}}),t.innerHTML=i||`<p>No changelog available.</p>`,e.style.display=`flex`}catch(e){console.error(`Error loading changelog:`,e),document.getElementById(`changelog-content`).innerHTML=`<p style="color: #999;">Error loading changelog.</p>`,document.getElementById(`changelog-modal`).style.display=`flex`}}document.addEventListener(`click`,e=>{let t=document.getElementById(`changelog-modal`);e.target===t&&(t.style.display=`none`)});