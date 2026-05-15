const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-w0KIoKaQ.js","assets/auth-ui-Duo2mTTr.js","assets/auth-ui-in-MCC0p.css","assets/product-search-CeYNHdfP.js","assets/vendor-fuse-Ch1WBRTM.js","assets/gst-pricing-D2t-RruI.js","assets/product-matching-BMKbQ43r.js","assets/pdf-core-BGfPcMgu.js","assets/pdf-layouts-BC7kqHBV.js"])))=>i.map(i=>d[i]);
import"./auth-ui-Duo2mTTr.js";import{_ as O,C as w}from"./config-DdRVajoj.js";import{c as g}from"./competitor-service-xVqaodKT.js";import{t as H,s as A,r as F,M as q}from"./matching-engine-B2ZvBhln.js";import{P as z}from"./product-search-CeYNHdfP.js";import{e as D}from"./gst-pricing-D2t-RruI.js";import"./product-matching-BMKbQ43r.js";import"./vendor-fuse-Ch1WBRTM.js";function G(u){return{orderCode:String(u["Order Code"]||u.OrderCode||"").trim(),name:u.Description||u["Product Name"]||u.ProductName||"",longDescription:u.LongDescription||u["Long Description"]||"",range:u.Range||"",group:u.Group||"",subGroup:u.SubGroup||u["Sub Group"]||"",rrpExGst:u.RRP_EX||u["RRP EX GST"]||"",rrpIncGst:u.RRP_INCGST||u["RRP INC GST"]||"",imageUrl:u.Image_URL||u["Image URL"]||"",websiteUrl:u.Website_URL||u["Website URL"]||"",dimX:u.DimX||u["X Dimension (mm)"]||"",dimY:u.DimY||u["Y Dimension (mm)"]||"",dimZ:u.DimZ||u["Z Dimension (mm)"]||"",welsStar:u.WELS_STAR||u["WELS Star"]||u["WELS STAR"]||"",welsConsumption:u.WELS_CONSUMPTION||u["WELS Consumption"]||""}}function x(u){if(u==null||u==="")return NaN;const e=Number(String(u).replace(/,/g,""));return Number.isFinite(e)&&e>0?e:NaN}function k(u,e){const t=x(u);if(!Number.isNaN(t))return`$${t.toLocaleString("en-AU",{minimumFractionDigits:2,maximumFractionDigits:2})} ex GST`;const a=x(e);return Number.isNaN(a)?"":`$${a.toLocaleString("en-AU",{minimumFractionDigits:2,maximumFractionDigits:2})} inc GST`}function R(u){if(!u)return null;const e=x(u.rrp_ex_gst);if(!Number.isNaN(e))return e;const t=D(u.rrp_inc_gst,4);return t??null}function I(u){const e=R(u);return e==null||Number.isNaN(e)?"":`$${e.toLocaleString("en-AU",{minimumFractionDigits:2,maximumFractionDigits:2})} ex GST`}function K(u){if(!u)return null;const e=x(u.rrpExGst);if(!Number.isNaN(e))return e;const t=D(u.rrpIncGst,4);return t??null}function T(u){const e=K(u);return e==null||Number.isNaN(e)?"":`$${e.toLocaleString("en-AU",{minimumFractionDigits:2,maximumFractionDigits:2})} ex GST`}class W{constructor(){this.products=[],this.matches=[],this.productLookup={},this.seimaProducts=null,this.seimaByCode={},this.filtered=[],this.selectedCode=null,this.expandedCode=null,this.currentCompetitor="",this.viewMode="competitor",this.seimaGrouped=[],this.seimaFiltered=[],this._productSearch=new z}async init(){const{authService:e}=await O(async()=>{const{authService:r}=await import("./index-w0KIoKaQ.js");return{authService:r}},__vite__mapDeps([0,1,2,3,4,5,6,7,8])),t=e.getCurrentUser();if(!t||!e.isStaffMode()){const r=document.querySelector(".v-app");r&&(r.innerHTML=`
          <div style="flex:1;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:16px;color:var(--text-muted);">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
            <div style="font-size:1.1rem;font-weight:600;">Staff access required</div>
            <div style="font-size:0.875rem;">You need Staff privileges to access Match Validator.</div>
            <a href="../index.html" style="color:var(--color-copper);font-size:0.875rem;">Back to Presenter</a>
          </div>`);return}g.isEnabled()||g.configure(w.CROSSHAIR,t.email||""),this._bind(),await this._loadCompetitorList(),await this._loadSeimaCatalog();const a=new URLSearchParams(window.location.search),s=a.get("competitor"),i=a.get("search");if(s){const r=document.getElementById("f-competitor");if(r.value=s,i&&(document.getElementById("f-search").value=i),await this._loadCompetitor(s),i&&this.filtered.length>0){let o=this.filtered.find(c=>String(c.product_code)===i);if(!o){const c=i.toLowerCase().trim().split(/\s+/).filter(Boolean);if(c.length>0){let l=this.filtered[0],d=this._searchRelevance(l,c);for(let m=1;m<this.filtered.length;m++){const h=this._searchRelevance(this.filtered[m],c);h>d&&(d=h,l=this.filtered[m])}o=l}else o=this.filtered[0]}this.selectedCode=String(o.product_code),this._render(),requestAnimationFrame(()=>{const c=document.querySelector(".v-item.active");c&&c.scrollIntoView({behavior:"smooth",block:"center"})})}}}async _loadCompetitorList(){const e=document.getElementById("f-competitor");try{const t=await g.getCompetitors(),a=i=>String(i).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");let s='<option value="">Select competitor...</option><option value="__all__">All Competitors</option>';t.forEach(i=>{s+=`<option value="${a(i)}">${a(i)}</option>`}),e.innerHTML=s}catch{e.innerHTML='<option value="">Failed to load</option>'}}async _loadSeimaCatalog(){try{const t=await(await fetch(w.CATALOG_URL)).text(),a=this._parseCSV(t);this._productSearch.buildIndex(a),this.seimaProducts=a.map(G);for(const s of this.seimaProducts){const i=x(s.rrpExGst);if(Number.isNaN(i)){const r=D(s.rrpIncGst,2);r!=null&&(s.rrpExGst=r)}s.orderCode&&/^\d+/.test(s.orderCode)&&(this.seimaByCode[s.orderCode]=s)}console.log(`Seima catalog: ${Object.keys(this.seimaByCode).length} products indexed`)}catch(e){console.error("Failed to load Seima catalog:",e),this.seimaProducts=[]}}async _loadCompetitor(e){if(!e){this.products=[],this.matches=[],this.productLookup={},this.selectedCode=null,this._showToolbarControls(!1),this._render(),this._clearDetail(),this._updatePanelHeaders();return}this._showLoading("Loading products..."),this.currentCompetitor=e;try{if(e==="__all__"){const t=await g.getCompetitors(),a=[],s=[];await Promise.all(t.map(async i=>{const[r,n]=await Promise.all([g.getProducts(i),g.getMatches(i,!0)]);r.forEach(o=>{o._competitor=i}),n.forEach(o=>{o._competitor=i}),a.push(...r),s.push(...this._normalizeMatchRows(n))})),this.products=a,this.matches=s}else{const[t,a]=await Promise.all([g.getProducts(e),g.getMatches(e,!0)]);t.forEach(s=>{s._competitor=e}),a.forEach(s=>{s._competitor=e}),this.products=t,this.matches=this._normalizeMatchRows(a)}this._buildProductLookup(),this._populateCategories(),this._showToolbarControls(!0),this._updatePanelHeaders(),this._applyFilters()}catch(t){console.error("Load failed:",t),this._showLoading("Failed to load data. Check console.")}}_buildProductLookup(){this.productLookup={};for(const t of this.products){const a=`${t._competitor}:${t.product_code}`;this.productLookup[a]=t}const e=this.currentCompetitor==="__all__"?[...new Set(this.matches.map(t=>t._competitor).filter(Boolean))]:[this.currentCompetitor];for(const t of e){const a=g.getRawProducts(t);for(const s of a){const i=`${t}:${s.product_code}`;this.productLookup[i]||(s._competitor=t,this.productLookup[i]=s)}}}_findProduct(e,t){if(t){const a=this.productLookup[`${t}:${e}`];if(a)return a}for(const a in this.productLookup)if(a.endsWith(`:${e}`))return this.productLookup[a];return this.products.find(a=>String(a.product_code)===String(e))||null}_parseCSV(e){const t=[];let a=[],s="",i=!1;for(let n=0;n<e.length;n++){const o=e[n];i?o==='"'&&e[n+1]==='"'?(s+='"',n++):o==='"'?i=!1:s+=o:o==='"'?i=!0:o===","?(a.push(s.trim()),s=""):o===`
`||o==="\r"&&e[n+1]===`
`?(a.push(s.trim()),s="",a.length>1&&t.push(a),a=[],o==="\r"&&n++):s+=o}if((s||a.length)&&(a.push(s.trim()),a.length>1&&t.push(a)),t.length<2)return[];const r=t[0].map(n=>String(n||"").replace(/[\r\n]+/g," ").replace(/\s+/g," ").trim());return t.slice(1).map(n=>{const o={};return r.forEach((c,l)=>{o[c]=n[l]||""}),o})}_populateCategories(){const e=document.getElementById("f-category");let t;this.viewMode==="seima"?t=[...new Set((this.seimaProducts||[]).map(s=>s.range||s.group||"").filter(Boolean))].sort():t=[...new Set(this.products.map(s=>s.product_type||s.subcategory||"").filter(Boolean))].sort();let a='<option value="">All Categories</option>';t.forEach(s=>{a+=`<option value="${s}">${s}</option>`}),e.innerHTML=a}_applyFilters(){if(this.viewMode==="seima"){this._applySeimaFilters();return}const e=document.getElementById("f-category").value,t=this._getSelectedStatuses(),a=document.getElementById("f-search").value.toLowerCase().trim();let s=[...this.products];if(e&&(s=s.filter(i=>(i.product_type||i.subcategory)===e)),a){const i=a.split(/\s+/),r=o=>String(o||"").replace(/[.\-_\s/\\]+/g,"").toLowerCase(),n=i.map(r);s=s.filter(o=>{const c=String(o.product_code||""),l=r(c),d=[c,l!==c.toLowerCase()?l:"",o.product_name,this._productName(o),o.collection,o.product_type,o.subcategory,o.finish,o.brand,o.features].filter(Boolean).join(" ").toLowerCase();return i.every((m,h)=>d.includes(m)||d.includes(n[h]))}),s.sort((o,c)=>this._searchRelevance(c,i)-this._searchRelevance(o,i))}if(t.length>0){const i=t.includes("unmatched"),r=t.filter(n=>n!=="unmatched");s=s.filter(n=>{const o=this._matchesFor(n);return!!(i&&o.length===0||r.length>0&&o.some(c=>{const l=c.Status==="Manual"?"Verified":c.Status;return r.includes(l)}))})}this.filtered=s,this._render()}_matchesFor(e){const t=e._competitor,a=this.matches.filter(r=>String(r.CompetitorSKU)===String(e.product_code)&&(!t||!r._competitor||r._competitor===t)).sort((r,n)=>(r.Rank||99)-(n.Rank||99)),s={Verified:0,Manual:1,"Pending-User":2,"Pending-Dispute":3,Rejected:4,"AI-Suggested":5},i=new Map;for(const r of a){const n=String(r.SeimaSKU),o=i.get(n);(!o||(s[r.Status]??9)<(s[o.Status]??9))&&i.set(n,r)}return[...i.values()].sort((r,n)=>(r.Rank||99)-(n.Rank||99))}_productName(e){if(e.product_name)return e.product_name;if(e.product_url)try{const t=new URL(e.product_url).pathname.split("/").filter(Boolean).pop();if(t&&t.length>3)return t.replace(/-/g," ").replace(/\b\w/g,a=>a.toUpperCase())}catch{}return[e.collection,e.product_type||e.subcategory].filter(Boolean).join(" ")||e.product_code}_showLoading(e){document.getElementById("v-list").innerHTML=`<div class="v-loading-spinner">${e}</div>`,document.getElementById("v-count").textContent="",document.getElementById("v-left-count").textContent=""}_render(){const e=document.getElementById("v-list"),t=this.filtered;if(document.getElementById("v-count").textContent=`${t.length} items`,document.getElementById("v-left-count").textContent=`${t.length} items`,this._updateStats(),this._updateProgress(),this._updateSummaryStrip(),t.length===0){e.innerHTML='<div class="v-loading-spinner">No products match the current filters.</div>',this._clearDetail();return}e.innerHTML="";const a=document.createDocumentFragment();if(t.forEach(s=>{const i=this._matchesFor(s),r=String(s.product_code)===this.selectedCode,n=this._createListItem(s,i,r);a.appendChild(n)}),e.appendChild(a),this.selectedCode){const s=t.find(i=>String(i.product_code)===this.selectedCode);s&&this._showProductDetail(s)}}_createListItem(e,t,a){const s=document.createElement("div");s.className=`v-item${a?" active":""}`,s.dataset.code=e.product_code;const i=this._productName(e),r=t.filter(h=>h.Status==="Verified"||h.Status==="Manual").length,n=t.filter(h=>h.Status==="Pending-User").length,o=t.filter(h=>h.Status==="Pending-Dispute").length,c=t.length>0&&t.every(h=>h.Status==="Rejected"),l=[String(e.product_code||"")];e._competitor&&this.currentCompetitor==="__all__"&&l.push(e._competitor),e.finish&&l.push(e.finish);let d;r>0?d=`<span class="v-item-status verified"></span><span class="v-item-match-count">${r}</span>`:o>0?d='<span class="v-item-status pending-dispute"></span>':n>0?d=`<span class="v-item-status pending-user"></span><span class="v-item-match-count">${n}</span>`:c?d='<span class="v-item-status rejected"></span>':t.length>0?d=`<span class="v-item-match-count">${t.length}</span>`:d="",s.innerHTML=`
      ${this._compImgUrl(e)?`<img src="${this._compImgUrl(e)}" alt="" class="v-item-thumb" loading="lazy" onerror="this.outerHTML='<div class=\\'v-item-thumb-placeholder\\'></div>'">`:'<div class="v-item-thumb-placeholder"></div>'}
      <div class="v-item-body">
        <div class="v-item-name">${this._esc(i)}</div>
        <div class="v-item-meta">${this._esc(l.join(" · "))}</div>
      </div>
      <div class="v-item-right">${d}</div>
    `;const m=document.getElementById("v-list");return s.addEventListener("click",()=>{this.selectedCode=String(e.product_code),m.querySelectorAll(".v-item.active").forEach(h=>h.classList.remove("active")),s.classList.add("active"),this._showProductDetail(e)}),s}_showProductDetail(e){const t=document.getElementById("v-detail-content"),a=document.getElementById("v-detail-empty"),s=this._matchesFor(e);a.style.display="none",t.style.display="block",t.innerHTML=this._renderDetail(e,s),this._wireDetailActions(t,e),t.scrollTop=0}_clearDetail(){const e=document.getElementById("v-detail-content"),t=document.getElementById("v-detail-empty");e&&(e.style.display="none",e.innerHTML=""),t&&(t.style.display="")}_updateProgress(){}_renderDetail(e,t){const a=this._productName(e),s=I(e);let i;t.length===0?i='<div class="v-no-matches">No matches found. Run the matching script or add manually.</div>':i=t.map(n=>this._renderMatchCard(n)).join(""),t.some(n=>n.Status==="Verified");const r=t.filter(n=>n.Status!=="Verified"&&n.Status!=="Rejected").length;return`
      <div class="v-detail-layout">
        <div class="v-comp-detail">
          ${this._compImgUrl(e)?`<img src="${this._compImgUrl(e)}" alt="${this._esc(a)}" class="v-comp-img" onerror="this.style.display='none'">`:""}
          <table class="v-comp-info-table">
            <tr><td>Name</td><td><strong>${this._esc(a)}</strong></td></tr>
            <tr><td>Code</td><td>${this._esc(e.product_code)}</td></tr>
            <tr><td>Brand</td><td>${this._esc(e.brand||e._competitor||this.currentCompetitor)}</td></tr>
            <tr><td>Category</td><td>${this._esc([e.product_type,e.subcategory].filter(Boolean).join(" / "))}</td></tr>
            <tr><td>Collection</td><td>${this._esc(e.collection||"")}</td></tr>
            <tr><td>Finish</td><td>${this._esc(e.finish||e.colour||"")}</td></tr>
            ${s?`<tr><td>RRP</td><td>${s}</td></tr>`:""}
            ${this._extractCompetitorDimensions(e)?`<tr><td>Dimensions</td><td>${this._esc(this._extractCompetitorDimensions(e))}</td></tr>`:""}
            ${e.material?`<tr><td>Material</td><td>${this._esc(e.material)}</td></tr>`:""}
            ${e.style?`<tr><td>Style</td><td>${this._esc(e.style)}</td></tr>`:""}
            ${e.wels_rating?`<tr><td>WELS</td><td>${this._esc(e.wels_rating)}</td></tr>`:""}
            ${e.features?`<tr><td>Features</td><td class="v-features-cell">${this._esc(e.features).replace(/;\s*/g,"<br>")}</td></tr>`:""}
          </table>
          ${e.product_url?`<a href="${e.product_url}" target="_blank" class="v-comp-link">View on website &rarr;</a>`:""}
        </div>
        <div class="v-matches-panel">
          <div class="v-matches-title-bar">
            <div class="v-matches-title">Seima Alternatives (${t.length})</div>
            ${r>0?`<button class="v-btn v-btn-reject-all" data-comp-code="${this._esc(e.product_code)}">&#10007; Reject all non-verified (${r})</button>`:""}
          </div>
          ${i}
          ${this._renderQuickMatch(e)}
          <div class="v-search-add">
            <div class="v-search-add-label">Add Seima Product</div>
            <input type="text" class="v-search-add-input" placeholder="Search Seima by name, code or range..." data-comp-code="${this._esc(e.product_code)}">
            <div class="v-search-add-results"></div>
          </div>
        </div>
      </div>
    `}_renderMatchCard(e){const t=String(e.SeimaSKU||"").trim(),a=this.seimaByCode[t],s=Number(e.Confidence)||0,i=s>=70?"high":s>=40?"med":"low",r=(e.Status||"").toLowerCase().replace(/[\s-]+/g,"-"),n=(a==null?void 0:a.name)||e.SeimaSKU,o=a?T(a):"",c=this._renderStatusActions(e.Status);return`
      <div class="v-match-card clickable status-${r}" data-comp-sku="${e.CompetitorSKU}" data-seima-sku="${e.SeimaSKU}">
        <div class="v-match-rank">${e.Rank||"?"}</div>
        ${a!=null&&a.imageUrl?`<img src="${a.imageUrl}" alt="" class="v-match-img" loading="lazy" onerror="this.outerHTML='<div class=\\'v-match-img-placeholder\\'>No img</div>'">`:'<div class="v-match-img-placeholder">No img</div>'}
        <div class="v-match-info">
          <div class="v-match-name">${this._esc(n)}</div>
          <div class="v-match-sku">${this._esc(e.SeimaSKU)} <span class="v-badge v-badge-conf-${i}">${s}%</span></div>
          ${e.MatchReason?`<div class="v-match-reason">${this._esc(e.MatchReason)}</div>`:""}
        </div>
        <div class="v-match-price">${o}</div>
        <div class="v-match-actions">${c}</div>
      </div>
    `}_renderStatusActions(e){return e==="Verified"||e==="Manual"?`
        <span class="v-status-label v-status-verified">✓ Verified</span>
        <button class="v-btn v-btn-undo" data-action="reject">reject</button>
      `:e==="Rejected"?`
        <span class="v-status-label v-status-rejected">✗ Rejected</span>
        <button class="v-btn v-btn-undo" data-action="verify">verify</button>
      `:e==="Pending-User"?`
        <span class="v-status-label v-status-pending-user">⏳ Pending</span>
        <button class="v-btn v-btn-verify" data-action="verify">✓ Approve</button>
        <button class="v-btn v-btn-reject" data-action="reject">✗ Reject</button>
      `:e==="Pending-Dispute"?`
        <span class="v-status-label v-status-pending-dispute">⚑ Disputed</span>
        <button class="v-btn v-btn-verify" data-action="verify">Uphold</button>
        <button class="v-btn v-btn-undo" data-action="reject">Dismiss</button>
      `:`
      <button class="v-btn v-btn-verify" data-action="verify">✓ Verify</button>
      <button class="v-btn v-btn-reject" data-action="reject">✗ Reject</button>
    `}_wireDetailActions(e,t){e.querySelectorAll(".v-match-card.clickable").forEach(n=>{n.addEventListener("click",o=>{if(o.target.closest(".v-btn")||o.target.closest(".v-match-img, .v-match-img-placeholder"))return;const c=n.dataset.seimaSku,l=this.matches.find(d=>String(d.CompetitorSKU)===String(t.product_code)&&String(d.SeimaSKU)===String(c));this._showSeimaDetailPanel(c,l)})}),e.querySelectorAll(".v-match-card .v-match-img, .v-match-card .v-match-img-placeholder").forEach(n=>{n.addEventListener("click",o=>{o.stopPropagation();const c=n.closest(".v-match-card"),l=c==null?void 0:c.dataset.seimaSku;if(!l)return;const d=this.matches.find(m=>String(m.CompetitorSKU)===String(t.product_code)&&String(m.SeimaSKU)===String(l));this._showProductPanel("seima",{sku:l,match:d})})}),e.querySelectorAll(".v-btn-verify, .v-btn-reject, .v-btn-undo").forEach(n=>{n.addEventListener("click",async o=>{o.stopPropagation();const l=n.closest(".v-match-card").dataset.seimaSku,d=n.dataset.action,m=d==="verify"?"Verified":"Rejected",h=t._competitor||this.currentCompetitor;n.disabled=!0,n.textContent="...";try{await g.updateMatch(h,String(t.product_code),l,m);const p=this.matches.find(v=>String(v.CompetitorSKU)===String(t.product_code)&&String(v.SeimaSKU)===String(l));p&&(p.Status=m),this._render()}catch(p){console.error("Update failed:",p),n.disabled=!1,n.textContent=d==="verify"?"✓ Verify":"✗ Reject",alert("Failed to update. Check console.")}})});const a=e.querySelector(".v-btn-reject-all");a&&a.addEventListener("click",async n=>{n.stopPropagation();const o=t._competitor||this.currentCompetitor,c=String(t.product_code),l=this.matches.filter(d=>String(d.CompetitorSKU)===c&&(!o||!d._competitor||d._competitor===o)&&d.Status!=="Verified"&&d.Status!=="Rejected");if(l.length!==0){a.disabled=!0,a.textContent=`Rejecting ${l.length}...`;try{for(const d of l)await g.updateMatch(d._competitor||o,c,String(d.SeimaSKU),"Rejected"),d.Status="Rejected";this._render()}catch(d){console.error("Bulk reject failed:",d),alert("Some rejections failed. Check console."),this._render()}}}),e.querySelectorAll(".v-quick-match .v-btn-verify").forEach(n=>{n.addEventListener("click",async o=>{o.stopPropagation();const c=n.dataset.seimaCode;await this._addManualMatch(t,c)})}),e.querySelectorAll(".v-quick-match .v-search-result-img, .v-quick-match .v-match-img-placeholder").forEach(n=>{n.addEventListener("click",o=>{o.stopPropagation();const c=n.closest(".v-quick-match"),l=c==null?void 0:c.dataset.seimaCode;l&&this._showProductPanel("seima",{sku:l})})});const s=e.querySelector(".v-search-add-input"),i=e.querySelector(".v-search-add-results");if(!s||!i)return;let r;s.addEventListener("click",n=>n.stopPropagation()),s.addEventListener("input",()=>{clearTimeout(r),r=setTimeout(()=>{this._renderSeimaSearchResults(s.value,i,t)},250)})}_quickMatch(e,t=5){if(!this.seimaProducts||this.seimaProducts.length===0)return[];const a=this._matchesFor(e),s=new Set(a.map(o=>String(o.SeimaSKU))),i=this.seimaProducts.filter(o=>o.orderCode&&/^\d+/.test(o.orderCode)&&!s.has(o.orderCode)).map(H),r=A(e,i,{totalTopK:Math.max(t,5)});return F(e,r,[]).slice(0,t).map(o=>({seima:this.seimaByCode[String(o.seimaSKU)]||null,score:o.confidence,textScore:0,finishScore:0,materialScore:0,priceScore:0,reason:o.reason})).filter(o=>!!o.seima)}_renderQuickMatch(e){const t=this._quickMatch(e);return t.length===0?"":`
      <div class="v-quick-match-section">
        <div class="v-search-add-label">Quick Match Suggestions</div>
        <div class="v-quick-match-results">${t.map((s,i)=>{const r=T(s.seima),n=s.reason?[s.reason]:["quick candidate"];return`
        <div class="v-search-result v-quick-match" data-seima-code="${this._esc(s.seima.orderCode)}">
          <div class="v-match-rank">${i+1}</div>
          ${s.seima.imageUrl?`<img src="${s.seima.imageUrl}" alt="" class="v-search-result-img" loading="lazy" onerror="this.outerHTML='<div class=\\'v-match-img-placeholder\\'>No img</div>'">`:'<div class="v-match-img-placeholder">No img</div>'}
          <div class="v-search-result-info">
            <div class="v-match-name">${this._esc(s.seima.name)}</div>
            <div class="v-match-sku">${this._esc(s.seima.orderCode)}${s.seima.range?` · ${this._esc(s.seima.range)}`:""} <span class="v-badge v-badge-conf-${s.score>=50?"high":s.score>=30?"med":"low"}">${s.score}%</span></div>
            <div class="v-match-reason">${this._esc(n.join(", "))}</div>
          </div>
          <div class="v-match-price">${r}</div>
          <button class="v-btn v-btn-verify" data-seima-code="${this._esc(s.seima.orderCode)}">&#10003; Verify</button>
        </div>
      `}).join("")}</div>
      </div>
    `}_searchSeimaProducts(e,t=20){if(!e||e.length<2||!this.seimaProducts)return[];const a=this._matchesFor({product_code:this.selectedCode}),s=new Set(a.map(n=>String(n.SeimaSKU))),i=this._productSearch.search(e,t+s.size,{fuzzy:!1}),r=[];for(const n of i){const o=G(n);if(!(!o.orderCode||!/^\d+/.test(o.orderCode))&&!s.has(o.orderCode)&&(r.push(o),r.length>=t))break}return r}_renderSeimaSearchResults(e,t,a){if(!e||e.length<2){t.innerHTML="";return}try{const s=this._searchSeimaProducts(e);if(s.length===0){t.innerHTML='<div class="v-search-no-results">No Seima products found.</div>';return}t.innerHTML=s.map(i=>{const r=T(i);return`
          <div class="v-search-result" data-seima-code="${this._esc(i.orderCode)}">
            ${i.imageUrl?`<img src="${i.imageUrl}" alt="" class="v-search-result-img" loading="lazy" onerror="this.outerHTML='<div class=\\'v-match-img-placeholder\\'>No img</div>'">`:'<div class="v-match-img-placeholder">No img</div>'}
            <div class="v-search-result-info">
              <div class="v-match-name">${this._esc(i.name)}</div>
              <div class="v-match-sku">${this._esc(i.orderCode)}${i.range?` · ${this._esc(i.range)}`:""}</div>
            </div>
            <div class="v-match-price">${r}</div>
            <button class="v-btn v-btn-verify" data-seima-code="${this._esc(i.orderCode)}">&#10003; Verify</button>
          </div>
        `}).join(""),t.querySelectorAll(".v-search-result .v-search-result-img, .v-search-result .v-match-img-placeholder").forEach(i=>{i.addEventListener("click",r=>{r.stopPropagation();const n=i.closest(".v-search-result"),o=n==null?void 0:n.dataset.seimaCode;o&&this._showProductPanel("seima",{sku:o})})}),t.querySelectorAll(".v-btn-verify").forEach(i=>{i.addEventListener("click",async r=>{r.stopPropagation();const n=i.dataset.seimaCode;await this._addManualMatch(a,n)})})}catch(s){console.error("Seima search error:",s),t.innerHTML='<div class="v-search-no-results">Search error — check console.</div>'}}async _addManualMatch(e,t){const s=this._matchesFor(e).length+1,i=e._competitor||this.currentCompetitor;try{await g.addMatch(i,String(e.product_code),t,s,"Manual verification"),await g.updateMatch(i,String(e.product_code),t,"Verified"),this.matches.push({CompetitorSKU:String(e.product_code),SeimaSKU:t,Rank:s,Confidence:"",MatchReason:"Manual verification",Status:"Verified",_competitor:i}),this.selectedCode=String(e.product_code),this._render()}catch(r){console.error("Failed to add match:",r),alert("Failed to add match. Check console.")}}async _autoRejectOthers(e,t,a){const s=this.matches.filter(i=>String(i.CompetitorSKU)===String(t)&&(!e||!i._competitor||i._competitor===e)&&String(i.SeimaSKU)!==String(a)&&i.Status!=="Verified"&&i.Status!=="Rejected");s.length!==0&&await Promise.all(s.map(async i=>{try{await g.updateMatch(i._competitor||e,String(i.CompetitorSKU),String(i.SeimaSKU),"Rejected"),i.Status="Rejected"}catch(r){console.warn(`Failed to auto-reject ${i.SeimaSKU}:`,r)}}))}_renderRowMatch(e){const t=e.find(s=>s.Status==="Verified"||s.Status==="Manual");if(t){const s=String(t.SeimaSKU||"").trim(),i=this.seimaByCode[s],r=(i==null?void 0:i.name)||s,n=(i==null?void 0:i.imageUrl)||"",o=t.Status==="Verified"?"verified":"manual";return`
        <div class="v-row-seima-match">
          ${n?`<img src="${n}" alt="" class="v-row-seima-img" loading="lazy" onerror="this.style.display='none'">`:""}
          <div class="v-row-seima-info">
            <div class="v-row-seima-name">${this._esc(r)}</div>
            <div class="v-row-seima-sku">${this._esc(s)} <span class="v-dot-inline ${o}"></span></div>
          </div>
        </div>`}const a=e.filter(s=>s.Status==="AI-Suggested").length;return a>0?`<div class="v-row-seima-match"><div class="v-row-seima-pending">${a} to review</div></div>`:'<div class="v-row-seima-match"><div class="v-row-seima-pending">No matches</div></div>'}_showSeimaDetailPanel(e,t){const a=this.seimaByCode[String(e).trim()];if(!a)return;this._closeSeimaDetailPanel();const s=a.name||e,i=a.imageUrl||"",r=Number(t==null?void 0:t.Confidence)||0,n=r>=70?"high":r>=40?"med":"low",o=(t==null?void 0:t.Status)||"",l=[["Order Code",a.orderCode],["Product Name",a.name],["Long Description",a.longDescription],["Range",a.range],["Group",a.group],["Sub Group",a.subGroup],["RRP ex GST",a.rrpExGst],["RRP inc GST",a.rrpIncGst],["Dimensions (W)",a.dimX],["Dimensions (D)",a.dimY],["Dimensions (H)",a.dimZ],["WELS Star",a.welsStar],["WELS Consumption",a.welsConsumption],["Website",a.websiteUrl]].filter(([,v])=>v&&String(v).trim()&&String(v).trim()!=="0").map(([v,S])=>{if(v==="Website"&&S)return`<tr><td>${this._esc(v)}</td><td><a href="${this._esc(S)}" target="_blank">View on website &rarr;</a></td></tr>`;let f;return v==="RRP ex GST"?f=k(S,""):v==="RRP inc GST"?f=k("",S):f=this._esc(S),`<tr><td>${this._esc(v)}</td><td>${f}</td></tr>`}).join(""),d=document.createElement("div");d.className="v-seima-overlay",d.innerHTML=`
      <div class="v-seima-overlay-bg"></div>
      <div class="v-seima-overlay-right"></div>
    `;const m=document.createElement("div");m.className="v-seima-panel",m.innerHTML=`
      <div class="v-seima-panel-header">
        <div class="v-seima-panel-title">${this._esc(s)}</div>
        <button class="v-seima-panel-close">&times;</button>
      </div>
      <div class="v-seima-panel-body">
        ${i?`<img src="${i}" alt="${this._esc(s)}" class="v-seima-panel-img" onerror="this.style.display='none'">`:""}
        <div class="v-seima-panel-badges">
          ${t?`<span class="v-badge v-badge-conf-${n}">${r}% confidence</span>`:""}
          ${o?`<span class="v-badge ${o==="Verified"||o==="Manual"?"v-badge-verified":o==="Rejected"?"v-badge-rejected":o==="Pending-User"?"v-badge-pending-user":o==="Pending-Dispute"?"v-badge-pending-dispute":"v-badge-status"}">${this._esc(o==="Manual"?"Verified":o==="Pending-User"?"Pending":o==="Pending-Dispute"?"Disputed":o)}</span>`:""}
        </div>
        ${t!=null&&t.MatchReason?`<div style="font-size:12px; color:#666; font-style:italic; margin-bottom:14px;">${this._esc(t.MatchReason)}</div>`:""}
        <table class="v-seima-panel-table">
          ${l}
        </table>
      </div>
    `,document.body.appendChild(d),document.body.appendChild(m);const h=()=>this._closeSeimaDetailPanel();m.querySelector(".v-seima-panel-close").addEventListener("click",h),d.addEventListener("click",h);const p=v=>{v.key==="Escape"&&h()};document.addEventListener("keydown",p),this._seimaPanel={overlay:d,panel:m,escHandler:p}}_closeSeimaDetailPanel(){this._seimaPanel&&(this._seimaPanel.overlay.remove(),this._seimaPanel.panel.remove(),this._seimaPanel.escHandler&&document.removeEventListener("keydown",this._seimaPanel.escHandler),this._seimaPanel=null)}_showCompetitorDetailPanel(e,t){if(!e)return;this._closeSeimaDetailPanel();const a=this._productName(e),s=this._compImgUrl(e),i=t||e._competitor||this.currentCompetitor||"",r=R(e),n=r!=null?`$${r.toLocaleString("en-AU",{minimumFractionDigits:2,maximumFractionDigits:2})} ex GST`:"",o=e.rrp_inc_gst?`$${Number(e.rrp_inc_gst).toLocaleString("en-AU",{minimumFractionDigits:2,maximumFractionDigits:2})} inc GST`:"",c=this._extractCompetitorDimensions(e),d=[["Product Code",e.product_code],["Brand",i],["Category",[e.product_type,e.subcategory].filter(Boolean).join(" / ")],["Collection",e.collection],["Finish",e.finish||e.colour],["Dimensions",c],["Material",e.material],["Style",e.style],["WELS",e.wels_rating],["Price (ex GST)",n],["Price (inc GST)",o],["Description",e.description||e.product_description],["Features",e.features]].filter(([,f])=>f&&String(f).trim()).map(([f,y])=>{const E=f==="Features"?this._esc(y).replace(/;\s*/g,"<br>"):this._esc(y);return`<tr><td>${this._esc(f)}</td><td>${E}</td></tr>`}).join(""),m=`brand-${i.toLowerCase()}`,h=document.createElement("div");h.className="v-seima-overlay",h.innerHTML=`
      <div class="v-seima-overlay-bg"></div>
      <div class="v-seima-overlay-right"></div>
    `;const p=document.createElement("div");p.className="v-seima-panel",p.innerHTML=`
      <div class="v-seima-panel-header">
        <div class="v-seima-panel-title">${this._esc(a)}</div>
        <button class="v-seima-panel-close">&times;</button>
      </div>
      <div class="v-seima-panel-body">
        ${s?`<img src="${s}" alt="${this._esc(a)}" class="v-seima-panel-img" onerror="this.style.display='none'">`:""}
        <div class="v-seima-panel-badges">
          ${i?`<span class="v-compare-brand ${m}">${this._esc(i)}</span>`:""}
        </div>
        <table class="v-seima-panel-table">
          ${d}
        </table>
        ${e.product_url?`<a href="${e.product_url}" target="_blank" style="display:inline-block;margin-top:12px;" class="v-comp-link">View on website &rarr;</a>`:""}
      </div>
    `,document.body.appendChild(h),document.body.appendChild(p);const v=()=>this._closeSeimaDetailPanel();p.querySelector(".v-seima-panel-close").addEventListener("click",v),h.addEventListener("click",v);const S=f=>{f.key==="Escape"&&v()};document.addEventListener("keydown",S),this._seimaPanel={overlay:h,panel:p,escHandler:S}}_showProductPanel(e,t){e==="seima"?this._showSeimaDetailPanel(t.sku,t.match||null):e==="competitor"&&this._showCompetitorDetailPanel(t.product,t.brand)}_buildSeimaGroups(){const e=new Map;for(const t of this.matches){const a=String(t.SeimaSKU||"").trim();if(!a||!this.seimaByCode[a])continue;e.has(a)||e.set(a,{seima:this.seimaByCode[a],sku:a,competitorMatches:[]});const s=t._competitor||this.currentCompetitor,i=this._findProduct(String(t.CompetitorSKU),s);e.get(a).competitorMatches.push({match:t,product:i||null,brand:s||(i==null?void 0:i._competitor)||""})}for(const t of e.values()){const a={Verified:0,Manual:1,Rejected:2,"AI-Suggested":3};t.competitorMatches.sort((s,i)=>(a[s.match.Status]??9)-(a[i.match.Status]??9)||(s.match.Rank||99)-(i.match.Rank||99))}this.seimaGrouped=[...e.values()].sort((t,a)=>{const s=(t.seima.name||"").toLowerCase(),i=(a.seima.name||"").toLowerCase();return s.localeCompare(i)})}_applySeimaFilters(){this._buildSeimaGroups();const e=document.getElementById("f-category").value,t=this._getSelectedStatuses(),a=document.getElementById("f-search").value.toLowerCase().trim();let s=[...this.seimaGrouped];if(e&&(s=s.filter(i=>{const r=i.seima;return r.range===e||r.group===e||r.subGroup===e})),a){const i=a.split(/\s+/);s=s.filter(r=>{const n=r.seima,o=r.competitorMatches.map(l=>{const d=l.product;return[d==null?void 0:d.product_code,d==null?void 0:d.product_name,d==null?void 0:d.collection,d==null?void 0:d.product_type,d==null?void 0:d.finish,l.brand].filter(Boolean).join(" ")}).join(" "),c=[n.orderCode,n.name,n.longDescription,n.range,n.group,n.subGroup,o].filter(Boolean).join(" ").toLowerCase();return i.every(l=>c.includes(l))}),s.sort((r,n)=>this._seimaSearchRelevance(n,i)-this._seimaSearchRelevance(r,i))}if(t.length>0){const i=t.filter(n=>n!=="unmatched"),r=t.includes("unmatched");i.length>0&&(s=s.map(n=>({...n,competitorMatches:n.competitorMatches.filter(o=>{const c=o.match.Status==="Manual"?"Verified":o.match.Status;return i.includes(c)})}))),s=s.filter(n=>!!(r&&n.competitorMatches.length===0||i.length>0&&n.competitorMatches.length>0))}this.seimaFiltered=s,this._renderSeimaView()}_renderSeimaView(){const e=document.getElementById("v-list"),t=this.seimaFiltered;if(document.getElementById("v-count").textContent=`${t.length} items`,document.getElementById("v-left-count").textContent=`${t.length} items`,this._updateStats(),this._updateProgress(),this._updateSummaryStrip(),t.length===0){e.innerHTML='<div class="v-loading-spinner">No Seima products match the current filters.</div>',this._clearDetail();return}e.innerHTML="";const a=document.createDocumentFragment();if(t.forEach(s=>{const i=s.sku===this.selectedCode,r=this._createSeimaListItem(s,i);a.appendChild(r)}),e.appendChild(a),this.selectedCode){const s=t.find(i=>i.sku===this.selectedCode);s&&this._showSeimaGroupDetail(s)}}_createSeimaListItem(e,t){const a=document.createElement("div");a.className=`v-item${t?" active":""}`,a.dataset.code=e.sku;const s=e.seima,i=s.name||e.sku,r=s.imageUrl||"",n=s.range||s.group||"",o=e.competitorMatches.length,c=e.competitorMatches.filter(p=>p.match.Status==="Verified"||p.match.Status==="Manual").length,l=o>0&&e.competitorMatches.every(p=>p.match.Status==="Rejected"),d=[e.sku];n&&d.push(n);let m;c>0?m=`<span class="v-item-status verified"></span><span class="v-item-match-count">${c}</span>`:l?m='<span class="v-item-status rejected"></span>':o>0?m=`<span class="v-item-match-count">${o}</span>`:m="",a.innerHTML=`
      ${r?`<img src="${r}" alt="" class="v-item-thumb" loading="lazy" onerror="this.outerHTML='<div class=\\'v-item-thumb-placeholder\\'></div>'">`:'<div class="v-item-thumb-placeholder"></div>'}
      <div class="v-item-body">
        <div class="v-item-name">${this._esc(i)}</div>
        <div class="v-item-meta">${this._esc(d.join(" · "))}</div>
      </div>
      <div class="v-item-right">${m}</div>
    `;const h=document.getElementById("v-list");return a.addEventListener("click",()=>{this.selectedCode=e.sku,this.expandedCode=e.sku,h.querySelectorAll(".v-item.active").forEach(p=>p.classList.remove("active")),a.classList.add("active"),this._showSeimaGroupDetail(e)}),a}_showSeimaGroupDetail(e){const t=document.getElementById("v-detail-content"),a=document.getElementById("v-detail-empty");a.style.display="none",t.style.display="block",t.innerHTML=this._renderSeimaDetail(e),this._wireSeimaDetailActions(t,e),t.scrollTop=0}_wireSeimaDetailActions(e,t){e.querySelectorAll(".v-comp-card .v-comp-card-img, .v-comp-card .v-comp-card-img-placeholder").forEach(r=>{r.addEventListener("click",n=>{n.stopPropagation();const o=r.closest(".v-comp-card"),c=o==null?void 0:o.dataset.compSku,l=o==null?void 0:o.dataset.brand;if(!c)return;const d=this._findProduct(c,l);d&&this._showProductPanel("competitor",{product:d,brand:l})})});const a=e.querySelector(".v-search-comp-input"),s=e.querySelector(".v-search-comp-results");if(a&&s){let r;a.addEventListener("click",n=>n.stopPropagation()),a.addEventListener("input",()=>{clearTimeout(r),r=setTimeout(()=>{this._renderCompSearchResults(a.value,s,t.sku)},250)})}e.querySelectorAll(".v-btn-verify, .v-btn-reject, .v-btn-undo").forEach(r=>{r.addEventListener("click",async n=>{n.stopPropagation();const o=r.closest(".v-comp-card"),c=o.dataset.compSku,l=o.dataset.seimaSku,d=o.dataset.brand,m=r.dataset.action,h=m==="verify"?"Verified":"Rejected",p=d||this.currentCompetitor;r.disabled=!0,r.textContent="...";try{await g.updateMatch(p,c,l,h);const v=this.matches.find(S=>String(S.CompetitorSKU)===String(c)&&String(S.SeimaSKU)===String(l));v&&(v.Status=h),this._applyFilters()}catch(v){console.error("Update failed:",v),r.disabled=!1,r.textContent=m==="verify"?"✓ Verify":"✗ Reject",alert("Failed to update. Check console.")}})});const i=e.querySelector(".v-btn-reject-all");i&&i.addEventListener("click",async r=>{r.stopPropagation();const n=t.sku,o=this.matches.filter(c=>String(c.SeimaSKU)===String(n)&&c.Status!=="Verified"&&c.Status!=="Rejected");if(o.length!==0){i.disabled=!0,i.textContent=`Rejecting ${o.length}...`;try{for(const c of o){const l=c._competitor||this.currentCompetitor;await g.updateMatch(l,String(c.CompetitorSKU),String(c.SeimaSKU),"Rejected"),c.Status="Rejected"}this._applyFilters()}catch(c){console.error("Bulk reject failed:",c),alert("Some rejections failed. Check console."),this._applyFilters()}}})}_renderCompCardExpanded(e,t){const a=this._productName(e),s=this._compImgUrl(e),i=R(e),r=i!=null?`$${i.toLocaleString("en-AU",{minimumFractionDigits:2,maximumFractionDigits:2})} ex GST`:"",n=e.rrp_inc_gst?`$${Number(e.rrp_inc_gst).toLocaleString("en-AU",{minimumFractionDigits:2,maximumFractionDigits:2})} inc GST`:"",o=this._extractCompetitorDimensions(e),l=[["Name",a],["Code",e.product_code],["Brand",t],["Type",e.product_type],["Collection",e.collection],["Finish",e.finish||e.colour],["Dimensions",o],["Material",e.material],["Style",e.style],["WELS",e.wels_rating],["Price (ex)",r],["Price (inc)",n],["Description",e.description||e.product_description],["Features",e.features]].filter(([,d])=>d&&String(d).trim()).map(([d,m])=>`<tr><td>${this._esc(d)}</td><td>${this._esc(m)}</td></tr>`).join("");return`
      <div class="v-comp-expanded-inner" onclick="event.stopPropagation()">
        ${s?`<img src="${s}" alt="${this._esc(a)}" class="v-comp-expanded-img" onerror="this.style.display='none'">`:""}
        <table class="v-comp-info-table">${l}</table>
        ${e.product_url?`<a href="${e.product_url}" target="_blank" class="v-comp-link">View on website &rarr;</a>`:""}
      </div>
    `}_renderSeimaDetail(e){const t=e.seima,a=t.name||e.sku,s=t.imageUrl||"",i=K(t),n=[["Order Code",t.orderCode],["Range",t.range],["Group",t.group],["Sub Group",t.subGroup],["Long Description",t.longDescription],["RRP ex GST",t.rrpExGst],["RRP inc GST",t.rrpIncGst],["Dimensions (W)",t.dimX],["Dimensions (D)",t.dimY],["Dimensions (H)",t.dimZ]].filter(([,l])=>l&&String(l).trim()&&String(l).trim()!=="0").map(([l,d])=>{let m;return l==="RRP ex GST"?m=k(d,""):l==="RRP inc GST"?m=k("",d):m=this._esc(d),`<tr><td>${this._esc(l)}</td><td>${m}</td></tr>`}).join("");let o;e.competitorMatches.length===0?o='<div class="v-no-matches">No competitor products matched.</div>':o=e.competitorMatches.map(l=>this._renderCompCard(l,i)).join("");const c=e.competitorMatches.filter(l=>l.match.Status!=="Verified"&&l.match.Status!=="Rejected").length;return`
      <div class="v-detail-layout">
        <div class="v-comp-detail">
          ${s?`<img src="${s}" alt="${this._esc(a)}" class="v-seima-detail-img">`:""}
          <table class="v-comp-info-table">
            <tr><td>Product</td><td><strong>${this._esc(a)}</strong></td></tr>
            ${n}
          </table>
        </div>
        <div class="v-matches-panel">
          <div class="v-matches-title-bar">
            <div class="v-competitors-title">Competitor Products (${e.competitorMatches.length})</div>
            ${c>0?`<button class="v-btn v-btn-reject-all" data-seima-sku="${this._esc(e.sku)}">&#10007; Reject all non-verified (${c})</button>`:""}
          </div>
          <div class="v-competitors-panel">
            ${o}
          </div>
          <div class="v-search-add">
            <div class="v-search-add-label">Add Competitor Product</div>
            <input type="text" class="v-search-add-input v-search-comp-input" placeholder="Search competitor products by name, code or brand..." data-seima-sku="${this._esc(e.sku)}">
            <div class="v-search-add-results v-search-comp-results"></div>
          </div>
        </div>
      </div>
    `}_searchCompetitorProducts(e,t,a=20){if(!e||e.length<2)return[];const s=l=>String(l||"").replace(/[.\-_\s/\\]+/g,"").toLowerCase(),i=e.toLowerCase().split(/\s+/),r=i.map(s),n=[],o=new Set(this.matches.filter(l=>String(l.SeimaSKU)===String(t)).map(l=>String(l.CompetitorSKU))),c=Object.values(this.productLookup);for(const l of c){if(o.has(String(l.product_code)))continue;const d=String(l.product_code||""),m=s(d),h=[d,m!==d.toLowerCase()?m:"",l.product_name,this._productName(l),l.collection,l.product_type,l.subcategory,l.finish,l.brand,l._competitor,l.description,l.product_description].filter(Boolean).join(" ").toLowerCase();i.every((p,v)=>h.includes(p)||h.includes(r[v]))&&n.push({product:l,score:this._searchRelevance(l,i)})}return n.sort((l,d)=>d.score-l.score),n.slice(0,a).map(l=>l.product)}_renderCompSearchResults(e,t,a){if(!e||e.length<2){t.innerHTML="";return}try{const s=this._searchCompetitorProducts(e,a);if(s.length===0){t.innerHTML='<div class="v-search-no-results">No competitor products found.</div>';return}t.innerHTML=s.map(i=>{const r=this._compImgUrl(i),n=this._productName(i),o=i._competitor||"",c=`brand-${o.toLowerCase()}`,l=I(i);return`
          <div class="v-search-result" data-comp-code="${this._esc(i.product_code)}" data-brand="${this._esc(o)}">
            ${o?`<span class="v-comp-card-brand ${c}" style="font-size:8px;padding:2px 4px;flex-shrink:0;">${this._esc(o)}</span>`:""}
            ${r?`<img src="${r}" alt="" class="v-search-result-img" loading="lazy" onerror="this.outerHTML='<div class=\\'v-match-img-placeholder\\'>No img</div>'">`:'<div class="v-match-img-placeholder">No img</div>'}
            <div class="v-search-result-info">
              <div class="v-match-name">${this._esc(n)}</div>
              <div class="v-match-sku">${this._esc(i.product_code)}${i.finish?` · ${this._esc(i.finish)}`:""}</div>
            </div>
            <div class="v-match-price">${l}</div>
            <button class="v-btn v-btn-verify" data-comp-code="${this._esc(i.product_code)}" data-brand="${this._esc(o)}">&#10003; Verify</button>
          </div>
        `}).join(""),t.querySelectorAll(".v-search-result .v-search-result-img, .v-search-result .v-match-img-placeholder").forEach(i=>{i.addEventListener("click",r=>{r.stopPropagation();const n=i.closest(".v-search-result"),o=n==null?void 0:n.dataset.compCode,c=n==null?void 0:n.dataset.brand;if(!o)return;const l=this._findProduct(o,c);l&&this._showProductPanel("competitor",{product:l,brand:c})})}),t.querySelectorAll(".v-btn-verify").forEach(i=>{i.addEventListener("click",async r=>{r.stopPropagation();const n=i.dataset.compCode,o=i.dataset.brand;await this._addCompetitorMatch(a,n,o)})})}catch(s){console.error("Competitor search error:",s),t.innerHTML='<div class="v-search-no-results">Search error — check console.</div>'}}async _addCompetitorMatch(e,t,a){const i=this.matches.filter(n=>String(n.SeimaSKU)===String(e)).length+1,r=a||this.currentCompetitor;try{await g.addMatch(r,t,e,i,"Manual verification"),await g.updateMatch(r,t,e,"Verified"),this.matches.push({CompetitorSKU:t,SeimaSKU:e,Rank:i,Confidence:"",MatchReason:"Manual verification",Status:"Verified",_competitor:r}),this._applyFilters()}catch(n){console.error("Failed to add competitor match:",n),alert("Failed to add match. Check console.")}}_compImgUrl(e){return e&&(e.image_url||e["Image URL"]||e.image||e.Image)||""}_renderCompCard(e,t){const{match:a,product:s,brand:i}=e,r=s?this._productName(s):String(a.CompetitorSKU),n=this._compImgUrl(s),o=String(a.CompetitorSKU),c=(s==null?void 0:s.finish)||(s==null?void 0:s.colour)||"";(a.Status||"").toLowerCase().replace(/[\s-]+/g,"-");const l=`brand-${i.toLowerCase()}`;let d="",m="";const h=s?R(s):null;if(h!=null&&(d=I(s),t!=null&&h>0)){const S=h-t,f=(S/t*100).toFixed(0);S>0?m=`<div class="v-comp-card-price-delta v-price-dearer">+${f}% dearer</div>`:S<0&&(m=`<div class="v-comp-card-price-delta v-price-cheaper">${f}% cheaper</div>`)}const p=Number(a.Confidence)||0,v=p>=70?"high":p>=40?"med":"low";return`
      <div class="v-comp-card" data-comp-sku="${this._esc(o)}" data-seima-sku="${this._esc(a.SeimaSKU)}" data-brand="${this._esc(i)}">
        <div class="v-comp-card-brand ${l}">${this._esc(i)}</div>
        ${n?`<img src="${n}" alt="" class="v-comp-card-img" loading="lazy" onerror="this.outerHTML='<div class=\\'v-comp-card-img-placeholder\\'>No img</div>'">`:'<div class="v-comp-card-img-placeholder">No img</div>'}
        <div class="v-comp-card-info">
          <div class="v-comp-card-name">${this._esc(r)}</div>
          <div class="v-comp-card-meta">
            ${this._esc(o)}${c?` · ${this._esc(c)}`:""}
            <span class="v-badge v-badge-conf-${v}" style="margin-left:6px;">${p}%</span>
          </div>
          ${a.MatchReason?`<div class="v-comp-card-reason">${this._esc(a.MatchReason)}</div>`:""}
        </div>
        <div class="v-comp-card-price">
          ${d}
          ${m}
        </div>
        <div class="v-comp-card-actions">${this._renderStatusActions(a.Status)}</div>
        ${s!=null&&s.product_url?`<a href="${s.product_url}" target="_blank" class="v-comp-card-link">View &rarr;</a>`:""}
      </div>
    `}_updateStats(){}_switchMode(e){if(e===this.viewMode)return;this.viewMode=e,this.selectedCode=null,this.expandedCode=null,this._clearDetail(),this._updatePerspectiveBar(),this._updatePanelHeaders(),this._populateCategories(),document.getElementById("f-category").value="",document.querySelectorAll(".v-filter-pill").forEach(a=>a.classList.remove("active"));const t=document.getElementById("f-search");t.value="",t.placeholder=this.viewMode==="seima"?"Search Seima products...":"Search competitor products...",this._applyFilters()}_updatePerspectiveBar(){const e=document.getElementById("v-perspective-bar"),t=document.getElementById("v-perspective-source"),a=document.getElementById("v-perspective-target");e.dataset.mode=this.viewMode,this.viewMode==="seima"?(t.textContent="Seima Products",a.textContent="Competitor Matches"):(t.textContent="Competitor Products",a.textContent="Seima Alternatives")}_updatePanelHeaders(){const e=document.getElementById("v-left-title"),t=document.getElementById("v-right-title"),a=this.currentCompetitor&&this.currentCompetitor!=="__all__"?this.currentCompetitor:"Competitor";this.viewMode==="seima"?(e.textContent="Seima Products",t.textContent="Competitor Matches"):(e.textContent=`${a} Products`,t.textContent="Seima Alternatives")}_showToolbarControls(e){const t=document.getElementById("v-filters-wrap"),a=document.getElementById("v-search-row"),s=document.getElementById("v-toolbar-stats"),i=e?"":"none";t.style.display=i,a.style.display=e?"flex":"none",s&&(s.style.display=i)}_updateSummaryStrip(){const e=document.getElementById("v-summary-fill"),t=document.getElementById("v-summary-pct");if(!this.matches.length||!this.products.length){t&&(t.textContent="");return}const a=this.products.length,s=new Set;let i=0,r=0,n=0,o=0,c=0;for(const v of this.matches)v.Status==="Verified"||v.Status==="Manual"?(i++,s.add(String(v.CompetitorSKU))):v.Status==="Rejected"?(r++,s.add(String(v.CompetitorSKU))):v.Status==="AI-Suggested"?n++:v.Status==="Pending-User"?o++:v.Status==="Pending-Dispute"&&c++;const l=new Set(this.matches.map(v=>String(v.CompetitorSKU))),d=this.products.filter(v=>!l.has(String(v.product_code))).length,m=Math.round(s.size/a*100);e&&(e.style.width=`${m}%`),t&&(t.textContent=`${m}%`),document.getElementById("pill-count-ai").textContent=n||"",document.getElementById("pill-count-verified").textContent=i||"",document.getElementById("pill-count-rejected").textContent=r||"",document.getElementById("pill-count-unmatched").textContent=d||"";const h=document.getElementById("pill-count-pending-user"),p=document.getElementById("pill-count-pending-dispute");h&&(h.textContent=o||""),p&&(p.textContent=c||"")}_normalizeMatchRows(e){return(e||[]).filter(t=>{const a=String(t.CompetitorSKU||"").trim(),s=String(t.SeimaSKU||"").trim();return a&&s})}async _showLiveMatchRowsAudit(){var n;const e=this.currentCompetitor;if(!e||e==="__all__"){alert("Select a single competitor to view live match rows.");return}let t=[];try{const o=await g.getMatches(e,!0);t=this._normalizeMatchRows(o)}catch(o){console.error("Live rows audit failed:",o),alert("Failed to load live match rows from API.");return}const a={};for(const o of t){const c=String(o.Status||"(blank)").trim()||"(blank)";a[c]=(a[c]||0)+1}const s=t.filter(o=>o.Status==="Verified"||o.Status==="Manual"),i=document.createElement("div");i.className="v-modal-overlay",i.innerHTML=`
      <div class="v-modal" style="max-width:980px;">
        <div class="v-modal-header">
          <h3>Live Match Rows — ${this._esc(e)}</h3>
          <button class="v-modal-close">&times;</button>
        </div>
        <div class="v-modal-body" style="max-height:70vh;overflow:auto;">
          <p style="margin:0 0 10px;color:#555;">
            These rows are the live API payload used by Validator (sheet tab: <strong>${this._esc(e)} Matches</strong>).
          </p>
          <div style="margin:0 0 10px;font-size:0.9rem;">
            <strong>Total live rows:</strong> ${t.length} &nbsp;·&nbsp;
            <strong>Verified/Manual:</strong> ${s.length}
          </div>
          <div style="margin:0 0 12px;font-size:0.82rem;color:#666;">
            ${Object.entries(a).map(([o,c])=>`${this._esc(o)}: ${c}`).join(" · ")}
          </div>
          <div style="margin-bottom:12px;">
            <button class="v-btn v-btn-verify" id="v-copy-live-rows">Copy Verified/Manual SKUs</button>
          </div>
          <table style="width:100%;border-collapse:collapse;font-size:0.82rem;">
            <thead>
              <tr>
                <th style="text-align:left;border-bottom:1px solid #ddd;padding:6px;">CompetitorSKU</th>
                <th style="text-align:left;border-bottom:1px solid #ddd;padding:6px;">SeimaSKU</th>
                <th style="text-align:left;border-bottom:1px solid #ddd;padding:6px;">Status</th>
                <th style="text-align:left;border-bottom:1px solid #ddd;padding:6px;">VerifiedDate</th>
              </tr>
            </thead>
            <tbody>
              ${t.map(o=>`
                <tr>
                  <td style="border-bottom:1px solid #f0f0f0;padding:6px;">${this._esc(o.CompetitorSKU)}</td>
                  <td style="border-bottom:1px solid #f0f0f0;padding:6px;">${this._esc(o.SeimaSKU)}</td>
                  <td style="border-bottom:1px solid #f0f0f0;padding:6px;">${this._esc(o.Status||"")}</td>
                  <td style="border-bottom:1px solid #f0f0f0;padding:6px;">${this._esc(o.VerifiedDate||"")}</td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      </div>
    `,document.body.appendChild(i);const r=()=>i.remove();i.querySelector(".v-modal-close").addEventListener("click",r),i.addEventListener("click",o=>{o.target===i&&r()}),(n=i.querySelector("#v-copy-live-rows"))==null||n.addEventListener("click",async()=>{const o=s.map(c=>`${c.CompetitorSKU}	${c.SeimaSKU}	${c.Status||""}	${c.VerifiedDate||""}`).join(`
`);try{await navigator.clipboard.writeText(o),alert("Verified/Manual rows copied to clipboard.")}catch{alert("Could not copy to clipboard.")}})}_getSelectedStatuses(){return[...document.querySelectorAll(".v-filter-pill.active")].map(t=>t.dataset.value)}_searchRelevance(e,t){const a=String(e.product_name||this._productName(e)||"").toLowerCase(),s=String(e.product_code||"").toLowerCase(),i=s.replace(/[.\-_\s/\\]+/g,""),r=[e.collection,e.product_type,e.subcategory].filter(Boolean).join(" ").toLowerCase(),n=[e.finish,e.brand,e.features,e.description,e.product_description].filter(Boolean).join(" ").toLowerCase();let o=0;for(const c of t){const l=c.replace(/[.\-_\s/\\]+/g,"");s===c||i===l?o+=100:(s.includes(c)||i.includes(l))&&(o+=50),a.includes(c)&&(o+=40,a.split(/[\s,]+/).some(m=>m===c)&&(o+=20),a.startsWith(c)&&(o+=10)),r.includes(c)&&(o+=10),n.includes(c)&&(o+=3)}return o}_seimaSearchRelevance(e,t){const a=e.seima,s=String(a.name||"").toLowerCase(),i=String(a.orderCode||"").toLowerCase(),r=[a.range,a.group,a.subGroup].filter(Boolean).join(" ").toLowerCase(),n=(a.longDescription||"").toLowerCase();let o=0;for(const c of t)i===c?o+=100:i.includes(c)&&(o+=50),s.includes(c)&&(o+=40,s.split(/[\s,]+/).some(d=>d===c)&&(o+=20),s.startsWith(c)&&(o+=10)),r.includes(c)&&(o+=10),n.includes(c)&&(o+=3);return o}_extractCompetitorDimensions(e){if(!e)return"";if(e.dimensions_mm)return e.dimensions_mm;let t=0,a=0,s=0;for(const i of Object.keys(e)){const r=i.toLowerCase();r.includes("width")&&!t&&(t=parseFloat(e[i])||0),r.includes("depth")&&!a&&(a=parseFloat(e[i])||0),r.includes("height")&&!s&&(s=parseFloat(e[i])||0)}if(t>0||a>0||s>0){const i=[];return t&&i.push(t),a&&i.push(a),s&&i.push(s),i.join(" × ")+"mm"}return""}_esc(e){if(!e)return"";const t=document.createElement("div");return t.textContent=String(e),t.innerHTML}_dotClass(e){if(!e)return"ai";const t=e.toLowerCase();return t.includes("verified")?"verified":t.includes("rejected")?"rejected":t.includes("manual")?"manual":"ai"}_getExcludedCategories(){var e;try{const t=localStorage.getItem("crosshair_excluded_categories");if(t)return JSON.parse(t)}catch{}return((e=w.CROSSHAIR)==null?void 0:e.EXCLUDED_CATEGORIES)||{}}_saveExcludedCategories(e){localStorage.setItem("crosshair_excluded_categories",JSON.stringify(e)),g.config&&(g.config.EXCLUDED_CATEGORIES=e),Object.keys(g.productsCache).forEach(t=>{delete g.productsCache[t]}),g._index=null}async _showSettings(){this._closeSettings();const e=document.createElement("div");e.className="v-settings-overlay";const t=document.createElement("div");t.className="v-settings-panel",t.innerHTML=`
      <div class="v-settings-header">
        <h2>Category Settings</h2>
        <button class="v-settings-close">&times;</button>
      </div>
      <div class="v-settings-body">
        <div style="padding:40px;text-align:center;color:#888;">Loading categories&hellip;</div>
      </div>
    `,document.body.appendChild(e),document.body.appendChild(t);const a=()=>this._closeSettings();t.querySelector(".v-settings-close").addEventListener("click",a),e.addEventListener("click",a),this._settingsPanel={overlay:e,panel:t};let s;try{s=await g.getCompetitors()}catch(o){console.error("Settings: failed to load competitors",o),t.querySelector(".v-settings-body").innerHTML='<div style="padding:20px;color:#b91c1c;">Failed to load competitor list.</div>';return}const i=this._getExcludedCategories(),r={};if(await Promise.all(s.map(async o=>{try{const l=(await g._apiGet("getCompetitorProducts",{competitor:o})).products||[];r[o]=[...new Set(l.map(d=>d.product_type||"").filter(Boolean))].sort()}catch(c){console.warn(`Settings: failed to load categories for ${o}`,c),r[o]=[]}})),Object.values(r).every(o=>o.length===0)){t.querySelector(".v-settings-body").innerHTML='<div style="padding:20px;color:#b91c1c;">No category data available.</div>';return}let n="";for(const o of s){const c=r[o];if(c.length===0)continue;const l=i[o]||[];n+=`
        <div class="v-settings-section">
          <div class="v-settings-section-title">${this._esc(o)}</div>
          <div class="v-settings-cats">
            ${c.map(d=>{const m=l.includes(d);return`<label class="v-settings-cat${m?" excluded":""}" data-competitor="${this._esc(o)}" data-category="${this._esc(d)}">
                <input type="checkbox" ${m?"":"checked"}>${this._esc(d)}
              </label>`}).join("")}
          </div>
        </div>`}t.querySelector(".v-settings-body").innerHTML=`
      ${n}
      <div class="v-settings-note">
        Unchecked categories are excluded from matching and won't appear in the product list.
        Changes take effect after reloading the competitor data.
      </div>
    `,t.addEventListener("change",o=>{const c=o.target.closest(".v-settings-cat");if(!c)return;const l=c.dataset.competitor,d=c.dataset.category,m=o.target.checked,h=this._getExcludedCategories();h[l]||(h[l]=[]),m?(h[l]=h[l].filter(p=>p!==d),c.classList.remove("excluded")):(h[l].includes(d)||h[l].push(d),c.classList.add("excluded")),this._saveExcludedCategories(h)})}_closeSettings(){this._settingsPanel&&(this._settingsPanel.overlay.remove(),this._settingsPanel.panel.remove(),this._settingsPanel=null,this.currentCompetitor&&this._loadCompetitor(this.currentCompetitor))}_bind(){var s;document.getElementById("f-competitor").addEventListener("change",i=>{this.selectedCode=null,this._clearDetail();const r=document.getElementById("v-run-matching-btn");r.disabled=!i.target.value||i.target.value==="__all__",this._loadCompetitor(i.target.value)}),document.getElementById("f-category").addEventListener("change",()=>this._applyFilters()),document.getElementById("f-status").addEventListener("click",i=>{const r=i.target.closest(".v-filter-pill");r&&(r.classList.toggle("active"),this._applyFilters())});let e;document.getElementById("f-search").addEventListener("input",()=>{clearTimeout(e),e=setTimeout(()=>this._applyFilters(),300)}),document.getElementById("v-settings-btn").addEventListener("click",()=>this._showSettings()),document.getElementById("v-range-hints-btn").addEventListener("click",()=>this._showRangeHints()),document.getElementById("v-run-matching-btn").addEventListener("click",()=>this._runMatching()),(s=document.getElementById("v-live-audit-btn"))==null||s.addEventListener("click",()=>this._showLiveMatchRowsAudit()),document.getElementById("v-perspective-flip").addEventListener("click",()=>{this._switchMode(this.viewMode==="competitor"?"seima":"competitor")}),document.addEventListener("keydown",i=>{if(i.target.tagName==="INPUT"||i.target.tagName==="TEXTAREA"||i.target.tagName==="SELECT")return;const r=this.viewMode==="seima"?this.seimaFiltered:this.filtered;if(!(!r||r.length===0)){if(i.key==="ArrowDown"||i.key==="ArrowUp"){i.preventDefault();const n=this.viewMode==="seima"?r.map(l=>l.sku):r.map(l=>String(l.product_code)),o=this.selectedCode?n.indexOf(this.selectedCode):-1;let c;i.key==="ArrowDown"?c=o<n.length-1?o+1:o:c=o>0?o-1:0,this.selectedCode=n[c],this.viewMode==="seima"?(this.expandedCode=this.selectedCode,this._renderSeimaView()):this._render(),requestAnimationFrame(()=>{const l=document.querySelector(".v-item.active");l&&l.scrollIntoView({behavior:"smooth",block:"nearest"})});return}if(this.selectedCode){if(i.key==="v"||i.key==="V"){const n=document.querySelector("#v-detail-content .v-btn-verify");n&&n.click()}else if(i.key==="x"||i.key==="X"){const n=document.querySelector("#v-detail-content .v-btn-reject");n&&n.click()}}}});const t=document.getElementById("v-resize-handle"),a=document.querySelector(".v-list-panel");if(t&&a){let i,r;const n=c=>{const l=r+(c.clientX-i),d=280,m=window.innerWidth*.6;a.style.width=`${Math.max(d,Math.min(m,l))}px`},o=()=>{t.classList.remove("dragging"),document.removeEventListener("mousemove",n),document.removeEventListener("mouseup",o),document.body.style.cursor="",document.body.style.userSelect=""};t.addEventListener("mousedown",c=>{c.preventDefault(),i=c.clientX,r=a.offsetWidth,t.classList.add("dragging"),document.body.style.cursor="col-resize",document.body.style.userSelect="none",document.addEventListener("mousemove",n),document.addEventListener("mouseup",o)})}}async _runMatching(){const e=this.currentCompetitor;if(!e||e==="__all__"||!this.seimaProducts||this.seimaProducts.length===0||this.products.length===0)return;const t=document.createElement("div");t.className="v-modal-overlay",t.innerHTML=`
      <div class="v-modal v-run-modal">
        <div class="v-modal-header">
          <h3>Run Matching &mdash; ${this._esc(e)}</h3>
          <button class="v-modal-close" id="rm-close">&times;</button>
        </div>
        <div class="v-modal-body">
          <div class="v-rm-summary">
            <div class="v-rm-stat"><span class="v-rm-stat-val">${this.products.length}</span><span class="v-rm-stat-label">Competitor products</span></div>
            <div class="v-rm-stat"><span class="v-rm-stat-val" id="rm-seima-count">--</span><span class="v-rm-stat-label">Seima catalog</span></div>
            <div class="v-rm-stat"><span class="v-rm-stat-val" id="rm-hint-count">--</span><span class="v-rm-stat-label">Range hints</span></div>
          </div>

          <div class="v-rm-hints-section" id="rm-hints-section">
            <div class="v-rm-section-title">Range Hints</div>
            <div class="v-rm-hints-list" id="rm-hints-list">
              <span class="v-rm-loading">Loading...</span>
            </div>
          </div>

          <div class="v-rm-info">
            <p>This will match all ${this._esc(e)} products against the Seima catalog using text search + attribute scoring.</p>
            <p><strong>AI-Suggested</strong> matches will be replaced. <strong>Verified</strong> and <strong>Manual</strong> matches are not affected.</p>
            <p>Runs entirely in your browser at zero cost.</p>
          </div>

          <div class="v-rm-progress-section" id="rm-progress-section" style="display:none;">
            <div class="v-rm-section-title" id="rm-stage">Preparing...</div>
            <div class="v-rm-progress-bar">
              <div class="v-rm-progress-fill" id="rm-progress-fill"></div>
            </div>
            <div class="v-rm-progress-detail" id="rm-progress-detail"></div>
            <div class="v-rm-log" id="rm-log"></div>
          </div>

          <div class="v-rm-result" id="rm-result" style="display:none;"></div>
        </div>
        <div class="v-rm-footer" id="rm-footer">
          <button class="v-btn v-btn-reject" id="rm-cancel">Cancel</button>
          <button class="v-btn v-btn-verify" id="rm-start">Start Matching</button>
        </div>
      </div>
    `,document.body.appendChild(t);const a=()=>t.remove();t.querySelector("#rm-close").addEventListener("click",a),t.addEventListener("click",n=>{n.target===t&&!this._matchingRunning&&a()}),t.querySelector("#rm-cancel").addEventListener("click",a);const s=this.seimaProducts.filter(n=>n.orderCode&&/^\d+/.test(n.orderCode)).length;t.querySelector("#rm-seima-count").textContent=s.toLocaleString();let i=[];try{const o=`${w.CROSSHAIR.API_URL}?action=getRangeHints&competitor=${encodeURIComponent(e)}&staffEmail=${encodeURIComponent(g.staffEmail||"")}`,l=await(await fetch(o)).json();l.success&&l.hints&&(i=l.hints)}catch{}t.querySelector("#rm-hint-count").textContent=i.length;const r=t.querySelector("#rm-hints-list");i.length===0?r.innerHTML='<span class="v-rm-no-hints">No range hints defined for this competitor. Matching will use text + attributes only.</span>':r.innerHTML=i.map(n=>`
        <div class="v-rm-hint-chip">
          <span class="v-rm-hint-from">${this._esc(n.competitorRange)}</span>
          <span class="v-rm-hint-arrow">&rarr;</span>
          <span class="v-rm-hint-to">${this._esc(n.seimaRange)}</span>
        </div>
      `).join(""),t.querySelector("#rm-start").addEventListener("click",()=>{this._executeMatching(t,e,i)})}async _executeMatching(e,t,a){var p;this._matchingRunning=!0;const s=e.querySelector("#rm-footer"),i=e.querySelector("#rm-progress-section"),r=e.querySelector("#rm-result"),n=e.querySelector("#rm-stage"),o=e.querySelector("#rm-progress-fill"),c=e.querySelector("#rm-progress-detail"),l=e.querySelector("#rm-log");s.innerHTML='<button class="v-btn v-btn-reject" disabled>Matching in progress...</button>',i.style.display="";const d=v=>{const S=document.createElement("div");S.className="v-rm-log-line",S.textContent=v,l.appendChild(S),l.scrollTop=l.scrollHeight},m=(v,S,f)=>{o.style.width=`${v}%`,S&&(n.textContent=S),f&&(c.textContent=f)},h=document.getElementById("v-run-matching-btn");h.disabled=!0;try{m(0,"Preparing catalog...","Converting Seima products"),d("Converting Seima catalog to matching format..."),await this._yieldUI();const v=this.seimaProducts.filter(_=>_.orderCode&&/^\d+/.test(_.orderCode)).map(H);d(`${v.length} Seima products indexed`);const S=((p=w.CROSSHAIR.EXCLUDED_CATEGORIES)==null?void 0:p[t])||[];let f=this.products;S.length>0&&(f=f.filter(_=>{const C=_.product_type||"",$=_.subcategory||"";return!S.some(L=>C===L||$===L)}),d(`Excluded ${this.products.length-f.length} products in filtered categories`)),d(`${f.length} competitor products to match`),a.length>0&&d(`${a.length} range hints will be applied`),m(5,"Matching products...",`0 / ${f.length}`),await this._yieldUI();const y=[],E=f.length,j=Date.now();let P=0;for(let _=0;_<E;_++){const C=f[_];if(_%10===0){const b=5+Math.round(_/E*80),V=((Date.now()-j)/1e3).toFixed(0);m(b,"Matching products...",`${_+1} / ${E} (${V}s)`),await this._yieldUI()}const $=A(C,v,{totalTopK:q.BM25_TOP_K});if($.length===0){P++;continue}const L=F(C,$,a);for(const b of L)b.confidence<q.MIN_CONFIDENCE||y.push({CompetitorSKU:String(C.product_code||""),SeimaSKU:b.seimaSKU,Rank:b.rank,Confidence:b.confidence,Decision:b.decision||"",MatchReason:b.reason||""})}const N=((Date.now()-j)/1e3).toFixed(1);d(`Matching complete: ${y.length} matches in ${N}s`),P>0&&d(`${P} products skipped (no text matches)`),m(88,"Uploading to Google Sheets...","Preparing upload"),await this._yieldUI();const M=500,U=Math.max(1,Math.ceil(y.length/M));for(let _=0;_<y.length;_+=M){const C=y.slice(_,_+M),$=Math.floor(_/M)+1,L=_===0;m(88+Math.round($/U*10),"Uploading to Google Sheets...",`Batch ${$} / ${U}`),d(`Uploading batch ${$}/${U} (${C.length} matches)...`),await this._apiPost({action:L?"bulkAddMatches":"appendMatches",competitor:t,matches:C,staffEmail:g.staffEmail||""}),_+M<y.length&&await new Promise(b=>setTimeout(b,500))}y.length===0&&(d("No matches found — clearing existing AI-Suggested matches"),await this._apiPost({action:"bulkAddMatches",competitor:t,matches:[],staffEmail:g.staffEmail||""})),m(100,"Complete",""),d("Upload complete. Refreshing data...");const B=await g.getMatches(t,!0);B.forEach(_=>{_._competitor=t}),this.matches=this._normalizeMatchRows(B),this._applyFilters(),r.style.display="",r.innerHTML=`
        <div class="v-rm-result-success">
          <div class="v-rm-result-icon">&#10003;</div>
          <div class="v-rm-result-text">
            <strong>${y.length.toLocaleString()}</strong> matches generated for <strong>${this._esc(t)}</strong> in <strong>${N}s</strong>
          </div>
        </div>
      `,s.innerHTML='<button class="v-btn v-btn-verify" id="rm-done">Done</button>',s.querySelector("#rm-done").addEventListener("click",()=>e.remove())}catch(v){console.error("Run matching failed:",v),m(0,"Error",v.message),d(`ERROR: ${v.message}`),r.style.display="",r.innerHTML=`
        <div class="v-rm-result-error">
          <div class="v-rm-result-icon">&#10007;</div>
          <div class="v-rm-result-text">Matching failed: ${this._esc(v.message)}</div>
        </div>
      `,s.innerHTML='<button class="v-btn v-btn-reject" id="rm-close-err">Close</button>',s.querySelector("#rm-close-err").addEventListener("click",()=>e.remove())}finally{this._matchingRunning=!1,h.disabled=!1}}_yieldUI(){return new Promise(e=>setTimeout(e,0))}async _showRangeHints(){const e=document.createElement("div");e.className="v-modal-overlay",e.innerHTML=`
      <div class="v-modal v-range-hints-modal">
        <div class="v-modal-header">
          <h3>Range Hints</h3>
          <button class="v-modal-close">&times;</button>
        </div>
        <div class="v-modal-body">
          <p class="v-range-hints-desc">Map competitor ranges/collections to Seima ranges. When matching runs, products in mapped ranges get a score boost, improving match accuracy.</p>
          <div class="v-range-hints-add">
            <select class="v-select v-rh-competitor" id="rh-competitor">
              <option value="">Competitor...</option>
            </select>
            <input type="text" class="v-rh-input" id="rh-comp-range" placeholder="Competitor range (e.g. Liano II)">
            <span class="v-rh-arrow">&rarr;</span>
            <input type="text" class="v-rh-input" id="rh-seima-range" placeholder="Seima range (e.g. Galiano)">
            <input type="text" class="v-rh-input v-rh-notes" id="rh-notes" placeholder="Notes (optional)">
            <button class="v-btn v-btn-verify" id="rh-add-btn">+ Add</button>
          </div>
          <div class="v-range-hints-list" id="rh-list">
            <div class="v-range-hints-loading">Loading...</div>
          </div>
        </div>
      </div>
    `,document.body.appendChild(e),e.querySelector(".v-modal-close").addEventListener("click",()=>e.remove()),e.addEventListener("click",a=>{a.target===e&&e.remove()});const t=e.querySelector("#rh-competitor");try{const a=await g.getCompetitors();let s=t.innerHTML;a.forEach(i=>{s+=`<option value="${i}">${i}</option>`}),t.innerHTML=s}catch{}e.querySelector("#rh-add-btn").addEventListener("click",async()=>{const a=t.value,s=e.querySelector("#rh-comp-range").value.trim(),i=e.querySelector("#rh-seima-range").value.trim(),r=e.querySelector("#rh-notes").value.trim();if(!a||!s||!i){alert("Competitor, competitor range, and Seima range are all required.");return}const n=e.querySelector("#rh-add-btn");n.disabled=!0,n.textContent="...";try{await this._apiPost({action:"addRangeHint",competitor:a,competitorRange:s,seimaRange:i,notes:r,staffEmail:g.staffEmail||""}),e.querySelector("#rh-comp-range").value="",e.querySelector("#rh-seima-range").value="",e.querySelector("#rh-notes").value="",await this._loadRangeHintsList(e.querySelector("#rh-list"))}catch(o){alert("Failed to add: "+o.message)}finally{n.disabled=!1,n.textContent="+ Add"}}),await this._loadRangeHintsList(e.querySelector("#rh-list"))}async _loadRangeHintsList(e){try{const a=`${w.CROSSHAIR.API_URL}?action=getRangeHints&staffEmail=${encodeURIComponent(g.staffEmail||"")}`,i=await(await fetch(a)).json();if(!i.success)throw new Error(i.error);const r=i.hints||[];if(r.length===0){e.innerHTML='<div class="v-range-hints-empty">No range hints defined yet. Add your first mapping above.</div>';return}const n={};for(const o of r){const c=o.competitor||"(no competitor)";n[c]||(n[c]=[]),n[c].push(o)}e.innerHTML=Object.entries(n).map(([o,c])=>`
        <div class="v-rh-group">
          <div class="v-rh-group-title">${this._esc(o)}</div>
          ${c.map(l=>`
            <div class="v-rh-row" data-row-index="${l.rowIndex}">
              <span class="v-rh-range">${this._esc(l.competitorRange)}</span>
              <span class="v-rh-arrow">&rarr;</span>
              <span class="v-rh-range v-rh-seima">${this._esc(l.seimaRange)}</span>
              ${l.notes?`<span class="v-rh-note">${this._esc(l.notes)}</span>`:""}
              <button class="v-btn v-btn-reject v-rh-remove" data-row-index="${l.rowIndex}">&times;</button>
            </div>
          `).join("")}
        </div>
      `).join(""),e.querySelectorAll(".v-rh-remove").forEach(o=>{o.addEventListener("click",async()=>{const c=parseInt(o.dataset.rowIndex);o.disabled=!0,o.textContent="...";try{await this._apiPost({action:"removeRangeHint",rowIndex:c,staffEmail:g.staffEmail||""}),await this._loadRangeHintsList(e)}catch(l){alert("Failed to remove: "+l.message),o.disabled=!1,o.textContent="×"}})})}catch(t){e.innerHTML=`<div class="v-range-hints-empty">Failed to load: ${this._esc(t.message)}</div>`}}async _apiPost(e){const t=w.CROSSHAIR,a=new URLSearchParams;a.append("data",JSON.stringify(e));const s=await fetch(t.API_URL,{method:"POST",body:a,redirect:"follow"});if(!s.ok)throw new Error(`API post failed: ${s.status}`);const i=await s.json();if(!i.success)throw new Error(i.error||"API returned failure");return i}}const X=new W;X.init().catch(u=>console.error("Validator init failed:",u));
