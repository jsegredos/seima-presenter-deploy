const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/js-rE7a4d5c.js","assets/rolldown-runtime-DK3Fl9T5.js","assets/vendor-fuse-CT6aDlEj.js","assets/js-DZxo49cr.css"])))=>i.map(i=>d[i]);
import{M as e,k as t}from"./js-rE7a4d5c.js";import{n,t as r}from"./preload-helper-MXaxqUEy.js";import{t as i}from"./competitor-service-cigbQjRW.js";import{i as a,n as o,r as s,t as c}from"./matching-engine-CgggdaKQ.js";function l(e){return{orderCode:String(e[`Order Code`]||e.OrderCode||``).trim(),name:e.Description||e[`Product Name`]||e.ProductName||``,longDescription:e.LongDescription||e[`Long Description`]||``,range:e.Range||``,group:e.Group||``,subGroup:e.SubGroup||e[`Sub Group`]||``,rrpExGst:e.RRP_EX||e[`RRP EX GST`]||``,rrpIncGst:e.RRP_INCGST||e[`RRP INC GST`]||``,imageUrl:e.Image_URL||e[`Image URL`]||``,websiteUrl:e.Website_URL||e[`Website URL`]||``,dimX:e.DimX||e[`X Dimension (mm)`]||``,dimY:e.DimY||e[`Y Dimension (mm)`]||``,dimZ:e.DimZ||e[`Z Dimension (mm)`]||``,welsStar:e.WELS_STAR||e[`WELS Star`]||e[`WELS STAR`]||``,welsConsumption:e.WELS_CONSUMPTION||e[`WELS Consumption`]||``}}function u(e){if(e==null||e===``)return NaN;let t=Number(String(e).replace(/,/g,``));return Number.isFinite(t)&&t>0?t:NaN}function d(e,t){let n=u(e);if(!Number.isNaN(n))return`$${n.toLocaleString(`en-AU`,{minimumFractionDigits:2,maximumFractionDigits:2})} ex GST`;let r=u(t);return Number.isNaN(r)?``:`$${r.toLocaleString(`en-AU`,{minimumFractionDigits:2,maximumFractionDigits:2})} inc GST`}function f(e){if(!e)return null;let n=u(e.rrp_ex_gst);return Number.isNaN(n)?t(e.rrp_inc_gst,4)??null:n}function p(e){let t=f(e);return t==null||Number.isNaN(t)?``:`$${t.toLocaleString(`en-AU`,{minimumFractionDigits:2,maximumFractionDigits:2})} ex GST`}function m(e){if(!e)return null;let n=u(e.rrpExGst);return Number.isNaN(n)?t(e.rrpIncGst,4)??null:n}function h(e){let t=m(e);return t==null||Number.isNaN(t)?``:`$${t.toLocaleString(`en-AU`,{minimumFractionDigits:2,maximumFractionDigits:2})} ex GST`}new class{constructor(){this.products=[],this.matches=[],this.productLookup={},this.seimaProducts=null,this.seimaByCode={},this.filtered=[],this.selectedCode=null,this.expandedCode=null,this.currentCompetitor=``,this.viewMode=`competitor`,this.seimaGrouped=[],this.seimaFiltered=[],this._productSearch=new e}async init(){let{authService:e}=await r(async()=>{let{authService:e}=await import(`./js-rE7a4d5c.js`).then(e=>e.t);return{authService:e}},__vite__mapDeps([0,1,2,3])),t=e.getCurrentUser();if(!t||!e.isStaffMode()){let e=document.querySelector(`.v-app`);e&&(e.innerHTML=`
          <div style="flex:1;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:16px;color:var(--text-muted);">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
            <div style="font-size:1.1rem;font-weight:600;">Staff access required</div>
            <div style="font-size:0.875rem;">You need Staff privileges to access Match Validator.</div>
            <a href="../index.html" style="color:var(--color-copper);font-size:0.875rem;">Back to Presenter</a>
          </div>`);return}i.isEnabled()||i.configure(n.CROSSHAIR,t.email||``),this._bind(),await this._loadCompetitorList(),await this._loadSeimaCatalog();let a=new URLSearchParams(window.location.search),o=a.get(`competitor`),s=a.get(`search`);if(o){let e=document.getElementById(`f-competitor`);if(e.value=o,s&&(document.getElementById(`f-search`).value=s),await this._loadCompetitor(o),s&&this.filtered.length>0){let e=this.filtered.find(e=>String(e.product_code)===s);if(!e){let t=s.toLowerCase().trim().split(/\s+/).filter(Boolean);if(t.length>0){let n=this.filtered[0],r=this._searchRelevance(n,t);for(let e=1;e<this.filtered.length;e++){let i=this._searchRelevance(this.filtered[e],t);i>r&&(r=i,n=this.filtered[e])}e=n}else e=this.filtered[0]}this.selectedCode=String(e.product_code),this._render(),requestAnimationFrame(()=>{let e=document.querySelector(`.v-item.active`);e&&e.scrollIntoView({behavior:`smooth`,block:`center`})})}}}async _loadCompetitorList(){let e=document.getElementById(`f-competitor`);try{let t=await i.getCompetitors(),n=e=>String(e).replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`),r=`<option value="">Select competitor...</option><option value="__all__">All Competitors</option>`;t.forEach(e=>{r+=`<option value="${n(e)}">${n(e)}</option>`}),e.innerHTML=r}catch{e.innerHTML=`<option value="">Failed to load</option>`}}async _loadSeimaCatalog(){try{let e=await(await fetch(n.CATALOG_URL)).text(),r=this._parseCSV(e);this._productSearch.buildIndex(r),this.seimaProducts=r.map(l);for(let e of this.seimaProducts){let n=u(e.rrpExGst);if(Number.isNaN(n)){let n=t(e.rrpIncGst,2);n!=null&&(e.rrpExGst=n)}e.orderCode&&/^\d+/.test(e.orderCode)&&(this.seimaByCode[e.orderCode]=e)}console.log(`Seima catalog: ${Object.keys(this.seimaByCode).length} products indexed`)}catch(e){console.error(`Failed to load Seima catalog:`,e),this.seimaProducts=[]}}async _loadCompetitor(e){if(!e){this.products=[],this.matches=[],this.productLookup={},this.selectedCode=null,this._showToolbarControls(!1),this._render(),this._clearDetail(),this._updatePanelHeaders();return}this._showLoading(`Loading products...`),this.currentCompetitor=e;try{if(e===`__all__`){let e=await i.getCompetitors(),t=[],n=[];await Promise.all(e.map(async e=>{let[r,a]=await Promise.all([i.getProducts(e),i.getMatches(e,!0)]);r.forEach(t=>{t._competitor=e}),a.forEach(t=>{t._competitor=e}),t.push(...r),n.push(...this._normalizeMatchRows(a))})),this.products=t,this.matches=n}else{let[t,n]=await Promise.all([i.getProducts(e),i.getMatches(e,!0)]);t.forEach(t=>{t._competitor=e}),n.forEach(t=>{t._competitor=e}),this.products=t,this.matches=this._normalizeMatchRows(n)}this._buildProductLookup(),this._populateCategories(),this._showToolbarControls(!0),this._updatePanelHeaders(),this._applyFilters()}catch(e){console.error(`Load failed:`,e),this._showLoading(`Failed to load data. Check console.`)}}_buildProductLookup(){this.productLookup={};for(let e of this.products){let t=`${e._competitor}:${e.product_code}`;this.productLookup[t]=e}let e=this.currentCompetitor===`__all__`?[...new Set(this.matches.map(e=>e._competitor).filter(Boolean))]:[this.currentCompetitor];for(let t of e){let e=i.getRawProducts(t);for(let n of e){let e=`${t}:${n.product_code}`;this.productLookup[e]||(n._competitor=t,this.productLookup[e]=n)}}}_findProduct(e,t){if(t){let n=this.productLookup[`${t}:${e}`];if(n)return n}for(let t in this.productLookup)if(t.endsWith(`:${e}`))return this.productLookup[t];return this.products.find(t=>String(t.product_code)===String(e))||null}_parseCSV(e){let t=[],n=[],r=``,i=!1;for(let a=0;a<e.length;a++){let o=e[a];i?o===`"`&&e[a+1]===`"`?(r+=`"`,a++):o===`"`?i=!1:r+=o:o===`"`?i=!0:o===`,`?(n.push(r.trim()),r=``):o===`
`||o===`\r`&&e[a+1]===`
`?(n.push(r.trim()),r=``,n.length>1&&t.push(n),n=[],o===`\r`&&a++):r+=o}if((r||n.length)&&(n.push(r.trim()),n.length>1&&t.push(n)),t.length<2)return[];let a=t[0].map(e=>String(e||``).replace(/[\r\n]+/g,` `).replace(/\s+/g,` `).trim());return t.slice(1).map(e=>{let t={};return a.forEach((n,r)=>{t[n]=e[r]||``}),t})}_populateCategories(){let e=document.getElementById(`f-category`),t;t=this.viewMode===`seima`?[...new Set((this.seimaProducts||[]).map(e=>e.range||e.group||``).filter(Boolean))].sort():[...new Set(this.products.map(e=>e.product_type||e.subcategory||``).filter(Boolean))].sort();let n=`<option value="">All Categories</option>`;t.forEach(e=>{n+=`<option value="${e}">${e}</option>`}),e.innerHTML=n}_applyFilters(){if(this.viewMode===`seima`){this._applySeimaFilters();return}let e=document.getElementById(`f-category`).value,t=this._getSelectedStatuses(),n=document.getElementById(`f-search`).value.toLowerCase().trim(),r=[...this.products];if(e&&(r=r.filter(t=>(t.product_type||t.subcategory)===e)),n){let e=n.split(/\s+/),t=e=>String(e||``).replace(/[.\-_\s/\\]+/g,``).toLowerCase(),i=e.map(t);r=r.filter(n=>{let r=String(n.product_code||``),a=t(r),o=[r,a===r.toLowerCase()?``:a,n.product_name,this._productName(n),n.collection,n.product_type,n.subcategory,n.finish,n.brand,n.features].filter(Boolean).join(` `).toLowerCase();return e.every((e,t)=>o.includes(e)||o.includes(i[t]))}),r.sort((t,n)=>this._searchRelevance(n,e)-this._searchRelevance(t,e))}if(t.length>0){let e=t.includes(`unmatched`),n=t.filter(e=>e!==`unmatched`);r=r.filter(t=>{let r=this._matchesFor(t);return!!(e&&r.length===0||n.length>0&&r.some(e=>{let t=e.Status===`Manual`?`Verified`:e.Status;return n.includes(t)}))})}this.filtered=r,this._render()}_matchesFor(e){let t=e._competitor,n=this.matches.filter(n=>String(n.CompetitorSKU)===String(e.product_code)&&(!t||!n._competitor||n._competitor===t)).sort((e,t)=>(e.Rank||99)-(t.Rank||99)),r={Verified:0,Manual:1,"Pending-User":2,"Pending-Dispute":3,Rejected:4,"AI-Suggested":5},i=new Map;for(let e of n){let t=String(e.SeimaSKU),n=i.get(t);(!n||(r[e.Status]??9)<(r[n.Status]??9))&&i.set(t,e)}return[...i.values()].sort((e,t)=>(e.Rank||99)-(t.Rank||99))}_productName(e){if(e.product_name)return e.product_name;if(e.product_url)try{let t=new URL(e.product_url).pathname.split(`/`).filter(Boolean).pop();if(t&&t.length>3)return t.replace(/-/g,` `).replace(/\b\w/g,e=>e.toUpperCase())}catch{}return[e.collection,e.product_type||e.subcategory].filter(Boolean).join(` `)||e.product_code}_showLoading(e){document.getElementById(`v-list`).innerHTML=`<div class="v-loading-spinner">${e}</div>`,document.getElementById(`v-count`).textContent=``,document.getElementById(`v-left-count`).textContent=``}_render(){let e=document.getElementById(`v-list`),t=this.filtered;if(document.getElementById(`v-count`).textContent=`${t.length} items`,document.getElementById(`v-left-count`).textContent=`${t.length} items`,this._updateStats(),this._updateProgress(),this._updateSummaryStrip(),t.length===0){e.innerHTML=`<div class="v-loading-spinner">No products match the current filters.</div>`,this._clearDetail();return}e.innerHTML=``;let n=document.createDocumentFragment();if(t.forEach(e=>{let t=this._matchesFor(e),r=String(e.product_code)===this.selectedCode,i=this._createListItem(e,t,r);n.appendChild(i)}),e.appendChild(n),this.selectedCode){let e=t.find(e=>String(e.product_code)===this.selectedCode);e&&this._showProductDetail(e)}}_createListItem(e,t,n){let r=document.createElement(`div`);r.className=`v-item${n?` active`:``}`,r.dataset.code=e.product_code;let i=this._productName(e),a=t.filter(e=>e.Status===`Verified`||e.Status===`Manual`).length,o=t.filter(e=>e.Status===`Pending-User`).length,s=t.filter(e=>e.Status===`Pending-Dispute`).length,c=t.length>0&&t.every(e=>e.Status===`Rejected`),l=[String(e.product_code||``)];e._competitor&&this.currentCompetitor===`__all__`&&l.push(e._competitor),e.finish&&l.push(e.finish);let u;u=a>0?`<span class="v-item-status verified"></span><span class="v-item-match-count">${a}</span>`:s>0?`<span class="v-item-status pending-dispute"></span>`:o>0?`<span class="v-item-status pending-user"></span><span class="v-item-match-count">${o}</span>`:c?`<span class="v-item-status rejected"></span>`:t.length>0?`<span class="v-item-match-count">${t.length}</span>`:``,r.innerHTML=`
      ${this._compImgUrl(e)?`<img src="${this._compImgUrl(e)}" alt="" class="v-item-thumb" loading="lazy" onerror="this.outerHTML='<div class=\\'v-item-thumb-placeholder\\'></div>'">`:`<div class="v-item-thumb-placeholder"></div>`}
      <div class="v-item-body">
        <div class="v-item-name">${this._esc(i)}</div>
        <div class="v-item-meta">${this._esc(l.join(` · `))}</div>
      </div>
      <div class="v-item-right">${u}</div>
    `;let d=document.getElementById(`v-list`);return r.addEventListener(`click`,()=>{this.selectedCode=String(e.product_code),d.querySelectorAll(`.v-item.active`).forEach(e=>e.classList.remove(`active`)),r.classList.add(`active`),this._showProductDetail(e)}),r}_showProductDetail(e){let t=document.getElementById(`v-detail-content`),n=document.getElementById(`v-detail-empty`),r=this._matchesFor(e);n.style.display=`none`,t.style.display=`block`,t.innerHTML=this._renderDetail(e,r),this._wireDetailActions(t,e),t.scrollTop=0}_clearDetail(){let e=document.getElementById(`v-detail-content`),t=document.getElementById(`v-detail-empty`);e&&(e.style.display=`none`,e.innerHTML=``),t&&(t.style.display=``)}_updateProgress(){}_renderDetail(e,t){let n=this._productName(e),r=p(e),i;i=t.length===0?`<div class="v-no-matches">No matches found. Run the matching script or add manually.</div>`:t.map(e=>this._renderMatchCard(e)).join(``),t.some(e=>e.Status===`Verified`);let a=t.filter(e=>e.Status!==`Verified`&&e.Status!==`Rejected`).length;return`
      <div class="v-detail-layout">
        <div class="v-comp-detail">
          ${this._compImgUrl(e)?`<img src="${this._compImgUrl(e)}" alt="${this._esc(n)}" class="v-comp-img" onerror="this.style.display='none'">`:``}
          <table class="v-comp-info-table">
            <tr><td>Name</td><td><strong>${this._esc(n)}</strong></td></tr>
            <tr><td>Code</td><td>${this._esc(e.product_code)}</td></tr>
            <tr><td>Brand</td><td>${this._esc(e.brand||e._competitor||this.currentCompetitor)}</td></tr>
            <tr><td>Category</td><td>${this._esc([e.product_type,e.subcategory].filter(Boolean).join(` / `))}</td></tr>
            <tr><td>Collection</td><td>${this._esc(e.collection||``)}</td></tr>
            <tr><td>Finish</td><td>${this._esc(e.finish||e.colour||``)}</td></tr>
            ${r?`<tr><td>RRP</td><td>${r}</td></tr>`:``}
            ${this._extractCompetitorDimensions(e)?`<tr><td>Dimensions</td><td>${this._esc(this._extractCompetitorDimensions(e))}</td></tr>`:``}
            ${e.material?`<tr><td>Material</td><td>${this._esc(e.material)}</td></tr>`:``}
            ${e.style?`<tr><td>Style</td><td>${this._esc(e.style)}</td></tr>`:``}
            ${e.wels_rating?`<tr><td>WELS</td><td>${this._esc(e.wels_rating)}</td></tr>`:``}
            ${e.features?`<tr><td>Features</td><td class="v-features-cell">${this._esc(e.features).replace(/;\s*/g,`<br>`)}</td></tr>`:``}
          </table>
          ${e.product_url?`<a href="${e.product_url}" target="_blank" class="v-comp-link">View on website &rarr;</a>`:``}
        </div>
        <div class="v-matches-panel">
          <div class="v-matches-title-bar">
            <div class="v-matches-title">Seima Alternatives (${t.length})</div>
            ${a>0?`<button class="v-btn v-btn-reject-all" data-comp-code="${this._esc(e.product_code)}">&#10007; Reject all non-verified (${a})</button>`:``}
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
    `}_renderMatchCard(e){let t=String(e.SeimaSKU||``).trim(),n=this.seimaByCode[t],r=Number(e.Confidence)||0,i=r>=70?`high`:r>=40?`med`:`low`,a=(e.Status||``).toLowerCase().replace(/[\s-]+/g,`-`),o=n?.name||e.SeimaSKU,s=n?h(n):``,c=this._renderStatusActions(e.Status);return`
      <div class="v-match-card clickable status-${a}" data-comp-sku="${e.CompetitorSKU}" data-seima-sku="${e.SeimaSKU}">
        <div class="v-match-rank">${e.Rank||`?`}</div>
        ${n?.imageUrl?`<img src="${n.imageUrl}" alt="" class="v-match-img" loading="lazy" onerror="this.outerHTML='<div class=\\'v-match-img-placeholder\\'>No img</div>'">`:`<div class="v-match-img-placeholder">No img</div>`}
        <div class="v-match-info">
          <div class="v-match-name">${this._esc(o)}</div>
          <div class="v-match-sku">${this._esc(e.SeimaSKU)} <span class="v-badge v-badge-conf-${i}">${r}%</span></div>
          ${e.MatchReason?`<div class="v-match-reason">${this._esc(e.MatchReason)}</div>`:``}
        </div>
        <div class="v-match-price">${s}</div>
        <div class="v-match-actions">${c}</div>
      </div>
    `}_setActionButtonPending(e,t=`verify`){e&&(e.dataset.originalText||(e.dataset.originalText=e.textContent||``),e.disabled=!0,e.classList.add(`v-btn-loading`),e.textContent=String(t||``).toLowerCase()===`reject`?`Rejecting...`:`Verifying...`)}_clearActionButtonPending(e){e&&(e.disabled=!1,e.classList.remove(`v-btn-loading`),e.textContent=e.dataset.originalText||e.textContent||`Verify`,delete e.dataset.originalText)}_renderStatusActions(e){return e===`Verified`||e===`Manual`?`
        <span class="v-status-label v-status-verified">✓ Verified</span>
        <button class="v-btn v-btn-undo" data-action="reject">reject</button>
      `:e===`Rejected`?`
        <span class="v-status-label v-status-rejected">✗ Rejected</span>
        <button class="v-btn v-btn-undo" data-action="verify">verify</button>
      `:e===`Pending-User`?`
        <span class="v-status-label v-status-pending-user">⏳ Pending</span>
        <button class="v-btn v-btn-verify" data-action="verify">✓ Approve</button>
        <button class="v-btn v-btn-reject" data-action="reject">✗ Reject</button>
      `:e===`Pending-Dispute`?`
        <span class="v-status-label v-status-pending-dispute">⚑ Disputed</span>
        <button class="v-btn v-btn-verify" data-action="verify">Uphold</button>
        <button class="v-btn v-btn-undo" data-action="reject">Dismiss</button>
      `:`
      <button class="v-btn v-btn-verify" data-action="verify">✓ Verify</button>
      <button class="v-btn v-btn-reject" data-action="reject">✗ Reject</button>
    `}_wireDetailActions(e,t){e.querySelectorAll(`.v-match-card.clickable`).forEach(e=>{e.addEventListener(`click`,n=>{if(n.target.closest(`.v-btn`)||n.target.closest(`.v-match-img, .v-match-img-placeholder`))return;let r=e.dataset.seimaSku,i=this.matches.find(e=>String(e.CompetitorSKU)===String(t.product_code)&&String(e.SeimaSKU)===String(r));this._showSeimaDetailPanel(r,i)})}),e.querySelectorAll(`.v-match-card .v-match-img, .v-match-card .v-match-img-placeholder`).forEach(e=>{e.addEventListener(`click`,n=>{n.stopPropagation();let r=e.closest(`.v-match-card`)?.dataset.seimaSku;if(!r)return;let i=this.matches.find(e=>String(e.CompetitorSKU)===String(t.product_code)&&String(e.SeimaSKU)===String(r));this._showProductPanel(`seima`,{sku:r,match:i})})}),e.querySelectorAll(`.v-btn-verify, .v-btn-reject, .v-btn-undo`).forEach(e=>{e.addEventListener(`click`,async n=>{n.stopPropagation();let r=e.closest(`.v-match-card`).dataset.seimaSku,a=e.dataset.action,o=a===`verify`?`Verified`:`Rejected`,s=t._competitor||this.currentCompetitor;this._setActionButtonPending(e,a);try{await i.updateMatch(s,String(t.product_code),r,o);let e=this.matches.find(e=>String(e.CompetitorSKU)===String(t.product_code)&&String(e.SeimaSKU)===String(r));e&&(e.Status=o),this._render()}catch(t){console.error(`Update failed:`,t),this._clearActionButtonPending(e),alert(`Failed to update. Check console.`)}})});let n=e.querySelector(`.v-btn-reject-all`);n&&n.addEventListener(`click`,async e=>{e.stopPropagation();let r=t._competitor||this.currentCompetitor,a=String(t.product_code),o=this.matches.filter(e=>String(e.CompetitorSKU)===a&&(!r||!e._competitor||e._competitor===r)&&e.Status!==`Verified`&&e.Status!==`Rejected`);if(o.length!==0){n.disabled=!0,n.textContent=`Rejecting ${o.length}...`;try{for(let e of o)await i.updateMatch(e._competitor||r,a,String(e.SeimaSKU),`Rejected`),e.Status=`Rejected`;this._render()}catch(e){console.error(`Bulk reject failed:`,e),alert(`Some rejections failed. Check console.`),this._render()}}}),e.querySelectorAll(`.v-quick-match .v-btn-verify`).forEach(e=>{e.addEventListener(`click`,async n=>{n.stopPropagation();let r=e.dataset.seimaCode;await this._addManualMatch(t,r,e)})}),e.querySelectorAll(`.v-quick-match .v-search-result-img, .v-quick-match .v-match-img-placeholder`).forEach(e=>{e.addEventListener(`click`,t=>{t.stopPropagation();let n=e.closest(`.v-quick-match`)?.dataset.seimaCode;n&&this._showProductPanel(`seima`,{sku:n})})});let r=e.querySelector(`.v-search-add-input`),a=e.querySelector(`.v-search-add-results`);if(!r||!a)return;let o;r.addEventListener(`click`,e=>e.stopPropagation()),r.addEventListener(`input`,()=>{clearTimeout(o),o=setTimeout(()=>{this._renderSeimaSearchResults(r.value,a,t)},250)})}_quickMatch(e,t=5){if(!this.seimaProducts||this.seimaProducts.length===0)return[];let n=this._matchesFor(e),r=new Set(n.map(e=>String(e.SeimaSKU)));return o(e,s(e,this.seimaProducts.filter(e=>e.orderCode&&/^\d+/.test(e.orderCode)&&!r.has(e.orderCode)).map(a),{totalTopK:Math.max(t,5)}),[]).slice(0,t).map(e=>({seima:this.seimaByCode[String(e.seimaSKU)]||null,score:e.confidence,textScore:0,finishScore:0,materialScore:0,priceScore:0,reason:e.reason})).filter(e=>!!e.seima)}_renderQuickMatch(e){let t=this._quickMatch(e);return t.length===0?``:`
      <div class="v-quick-match-section">
        <div class="v-search-add-label">Quick Match Suggestions</div>
        <div class="v-quick-match-results">${t.map((e,t)=>{let n=h(e.seima),r=e.reason?[e.reason]:[`quick candidate`];return`
        <div class="v-search-result v-quick-match" data-seima-code="${this._esc(e.seima.orderCode)}">
          <div class="v-match-rank">${t+1}</div>
          ${e.seima.imageUrl?`<img src="${e.seima.imageUrl}" alt="" class="v-search-result-img" loading="lazy" onerror="this.outerHTML='<div class=\\'v-match-img-placeholder\\'>No img</div>'">`:`<div class="v-match-img-placeholder">No img</div>`}
          <div class="v-search-result-info">
            <div class="v-match-name">${this._esc(e.seima.name)}</div>
            <div class="v-match-sku">${this._esc(e.seima.orderCode)}${e.seima.range?` · ${this._esc(e.seima.range)}`:``} <span class="v-badge v-badge-conf-${e.score>=50?`high`:e.score>=30?`med`:`low`}">${e.score}%</span></div>
            <div class="v-match-reason">${this._esc(r.join(`, `))}</div>
          </div>
          <div class="v-match-price">${n}</div>
          <button class="v-btn v-btn-verify" data-seima-code="${this._esc(e.seima.orderCode)}">&#10003; Verify</button>
        </div>
      `}).join(``)}</div>
      </div>
    `}_searchSeimaProducts(e,t=20){if(!e||e.length<2||!this.seimaProducts)return[];let n=this._matchesFor({product_code:this.selectedCode}),r=new Set(n.map(e=>String(e.SeimaSKU))),i=this._productSearch.search(e,t+r.size,{fuzzy:!1}),a=[];for(let e of i){let n=l(e);if(!(!n.orderCode||!/^\d+/.test(n.orderCode))&&!r.has(n.orderCode)&&(a.push(n),a.length>=t))break}return a}_renderSeimaSearchResults(e,t,n){if(!e||e.length<2){t.innerHTML=``;return}try{let r=this._searchSeimaProducts(e);if(r.length===0){t.innerHTML=`<div class="v-search-no-results">No Seima products found.</div>`;return}t.innerHTML=r.map(e=>{let t=h(e);return`
          <div class="v-search-result" data-seima-code="${this._esc(e.orderCode)}">
            ${e.imageUrl?`<img src="${e.imageUrl}" alt="" class="v-search-result-img" loading="lazy" onerror="this.outerHTML='<div class=\\'v-match-img-placeholder\\'>No img</div>'">`:`<div class="v-match-img-placeholder">No img</div>`}
            <div class="v-search-result-info">
              <div class="v-match-name">${this._esc(e.name)}</div>
              <div class="v-match-sku">${this._esc(e.orderCode)}${e.range?` · ${this._esc(e.range)}`:``}</div>
            </div>
            <div class="v-match-price">${t}</div>
            <button class="v-btn v-btn-verify" data-seima-code="${this._esc(e.orderCode)}">&#10003; Verify</button>
          </div>
        `}).join(``),t.querySelectorAll(`.v-search-result .v-search-result-img, .v-search-result .v-match-img-placeholder`).forEach(e=>{e.addEventListener(`click`,t=>{t.stopPropagation();let n=e.closest(`.v-search-result`)?.dataset.seimaCode;n&&this._showProductPanel(`seima`,{sku:n})})}),t.querySelectorAll(`.v-btn-verify`).forEach(e=>{e.addEventListener(`click`,async t=>{t.stopPropagation();let r=e.dataset.seimaCode;await this._addManualMatch(n,r,e)})})}catch(e){console.error(`Seima search error:`,e),t.innerHTML=`<div class="v-search-no-results">Search error — check console.</div>`}}async _addManualMatch(e,t,n=null){let r=this._matchesFor(e).length+1,a=e._competitor||this.currentCompetitor;try{this._setActionButtonPending(n,`verify`),await i.addMatch(a,String(e.product_code),t,r,`Manual verification`),await i.updateMatch(a,String(e.product_code),t,`Verified`),this.matches.push({CompetitorSKU:String(e.product_code),SeimaSKU:t,Rank:r,Confidence:``,MatchReason:`Manual verification`,Status:`Verified`,_competitor:a}),this.selectedCode=String(e.product_code),this._render()}catch(e){console.error(`Failed to add match:`,e),this._clearActionButtonPending(n),alert(`Failed to add match. Check console.`)}}async _autoRejectOthers(e,t,n){let r=this.matches.filter(r=>String(r.CompetitorSKU)===String(t)&&(!e||!r._competitor||r._competitor===e)&&String(r.SeimaSKU)!==String(n)&&r.Status!==`Verified`&&r.Status!==`Rejected`);r.length!==0&&await Promise.all(r.map(async t=>{try{await i.updateMatch(t._competitor||e,String(t.CompetitorSKU),String(t.SeimaSKU),`Rejected`),t.Status=`Rejected`}catch(e){console.warn(`Failed to auto-reject ${t.SeimaSKU}:`,e)}}))}_renderRowMatch(e){let t=e.find(e=>e.Status===`Verified`||e.Status===`Manual`);if(t){let e=String(t.SeimaSKU||``).trim(),n=this.seimaByCode[e],r=n?.name||e,i=n?.imageUrl||``,a=t.Status===`Verified`?`verified`:`manual`;return`
        <div class="v-row-seima-match">
          ${i?`<img src="${i}" alt="" class="v-row-seima-img" loading="lazy" onerror="this.style.display='none'">`:``}
          <div class="v-row-seima-info">
            <div class="v-row-seima-name">${this._esc(r)}</div>
            <div class="v-row-seima-sku">${this._esc(e)} <span class="v-dot-inline ${a}"></span></div>
          </div>
        </div>`}let n=e.filter(e=>e.Status===`AI-Suggested`).length;return n>0?`<div class="v-row-seima-match"><div class="v-row-seima-pending">${n} to review</div></div>`:`<div class="v-row-seima-match"><div class="v-row-seima-pending">No matches</div></div>`}_showSeimaDetailPanel(e,t){let n=this.seimaByCode[String(e).trim()];if(!n)return;this._closeSeimaDetailPanel();let r=n.name||e,i=n.imageUrl||``,a=Number(t?.Confidence)||0,o=a>=70?`high`:a>=40?`med`:`low`,s=t?.Status||``,c=[[`Order Code`,n.orderCode],[`Product Name`,n.name],[`Long Description`,n.longDescription],[`Range`,n.range],[`Group`,n.group],[`Sub Group`,n.subGroup],[`RRP ex GST`,n.rrpExGst],[`RRP inc GST`,n.rrpIncGst],[`Dimensions (W)`,n.dimX],[`Dimensions (D)`,n.dimY],[`Dimensions (H)`,n.dimZ],[`WELS Star`,n.welsStar],[`WELS Consumption`,n.welsConsumption],[`Website`,n.websiteUrl]].filter(([,e])=>e&&String(e).trim()&&String(e).trim()!==`0`).map(([e,t])=>{if(e===`Website`&&t)return`<tr><td>${this._esc(e)}</td><td><a href="${this._esc(t)}" target="_blank">View on website &rarr;</a></td></tr>`;let n;return n=e===`RRP ex GST`?d(t,``):e===`RRP inc GST`?d(``,t):this._esc(t),`<tr><td>${this._esc(e)}</td><td>${n}</td></tr>`}).join(``),l=document.createElement(`div`);l.className=`v-seima-overlay`,l.innerHTML=`
      <div class="v-seima-overlay-bg"></div>
      <div class="v-seima-overlay-right"></div>
    `;let u=document.createElement(`div`);u.className=`v-seima-panel`,u.innerHTML=`
      <div class="v-seima-panel-header">
        <div class="v-seima-panel-title">${this._esc(r)}</div>
        <button class="v-seima-panel-close">&times;</button>
      </div>
      <div class="v-seima-panel-body">
        ${i?`<img src="${i}" alt="${this._esc(r)}" class="v-seima-panel-img" onerror="this.style.display='none'">`:``}
        <div class="v-seima-panel-badges">
          ${t?`<span class="v-badge v-badge-conf-${o}">${a}% confidence</span>`:``}
          ${s?`<span class="v-badge ${s===`Verified`||s===`Manual`?`v-badge-verified`:s===`Rejected`?`v-badge-rejected`:s===`Pending-User`?`v-badge-pending-user`:s===`Pending-Dispute`?`v-badge-pending-dispute`:`v-badge-status`}">${this._esc(s===`Manual`?`Verified`:s===`Pending-User`?`Pending`:s===`Pending-Dispute`?`Disputed`:s)}</span>`:``}
        </div>
        ${t?.MatchReason?`<div style="font-size:12px; color:#666; font-style:italic; margin-bottom:14px;">${this._esc(t.MatchReason)}</div>`:``}
        <table class="v-seima-panel-table">
          ${c}
        </table>
      </div>
    `,document.body.appendChild(l),document.body.appendChild(u);let f=()=>this._closeSeimaDetailPanel();u.querySelector(`.v-seima-panel-close`).addEventListener(`click`,f),l.addEventListener(`click`,f);let p=e=>{e.key===`Escape`&&f()};document.addEventListener(`keydown`,p),this._seimaPanel={overlay:l,panel:u,escHandler:p}}_closeSeimaDetailPanel(){this._seimaPanel&&=(this._seimaPanel.overlay.remove(),this._seimaPanel.panel.remove(),this._seimaPanel.escHandler&&document.removeEventListener(`keydown`,this._seimaPanel.escHandler),null)}_showCompetitorDetailPanel(e,t){if(!e)return;this._closeSeimaDetailPanel();let n=this._productName(e),r=this._compImgUrl(e),i=t||e._competitor||this.currentCompetitor||``,a=f(e),o=a==null?``:`$${a.toLocaleString(`en-AU`,{minimumFractionDigits:2,maximumFractionDigits:2})} ex GST`,s=e.rrp_inc_gst?`$${Number(e.rrp_inc_gst).toLocaleString(`en-AU`,{minimumFractionDigits:2,maximumFractionDigits:2})} inc GST`:``,c=this._extractCompetitorDimensions(e),l=[[`Product Code`,e.product_code],[`Brand`,i],[`Category`,[e.product_type,e.subcategory].filter(Boolean).join(` / `)],[`Collection`,e.collection],[`Finish`,e.finish||e.colour],[`Dimensions`,c],[`Material`,e.material],[`Style`,e.style],[`WELS`,e.wels_rating],[`Price (ex GST)`,o],[`Price (inc GST)`,s],[`Description`,e.description||e.product_description],[`Features`,e.features]].filter(([,e])=>e&&String(e).trim()).map(([e,t])=>{let n=e===`Features`?this._esc(t).replace(/;\s*/g,`<br>`):this._esc(t);return`<tr><td>${this._esc(e)}</td><td>${n}</td></tr>`}).join(``),u=`brand-${i.toLowerCase()}`,d=document.createElement(`div`);d.className=`v-seima-overlay`,d.innerHTML=`
      <div class="v-seima-overlay-bg"></div>
      <div class="v-seima-overlay-right"></div>
    `;let p=document.createElement(`div`);p.className=`v-seima-panel`,p.innerHTML=`
      <div class="v-seima-panel-header">
        <div class="v-seima-panel-title">${this._esc(n)}</div>
        <button class="v-seima-panel-close">&times;</button>
      </div>
      <div class="v-seima-panel-body">
        ${r?`<img src="${r}" alt="${this._esc(n)}" class="v-seima-panel-img" onerror="this.style.display='none'">`:``}
        <div class="v-seima-panel-badges">
          ${i?`<span class="v-compare-brand ${u}">${this._esc(i)}</span>`:``}
        </div>
        <table class="v-seima-panel-table">
          ${l}
        </table>
        ${e.product_url?`<a href="${e.product_url}" target="_blank" style="display:inline-block;margin-top:12px;" class="v-comp-link">View on website &rarr;</a>`:``}
      </div>
    `,document.body.appendChild(d),document.body.appendChild(p);let m=()=>this._closeSeimaDetailPanel();p.querySelector(`.v-seima-panel-close`).addEventListener(`click`,m),d.addEventListener(`click`,m);let h=e=>{e.key===`Escape`&&m()};document.addEventListener(`keydown`,h),this._seimaPanel={overlay:d,panel:p,escHandler:h}}_showProductPanel(e,t){e===`seima`?this._showSeimaDetailPanel(t.sku,t.match||null):e===`competitor`&&this._showCompetitorDetailPanel(t.product,t.brand)}_buildSeimaGroups(){let e=new Map;for(let t of this.matches){let n=String(t.SeimaSKU||``).trim();if(!n||!this.seimaByCode[n])continue;e.has(n)||e.set(n,{seima:this.seimaByCode[n],sku:n,competitorMatches:[]});let r=t._competitor||this.currentCompetitor,i=this._findProduct(String(t.CompetitorSKU),r);e.get(n).competitorMatches.push({match:t,product:i||null,brand:r||i?._competitor||``})}for(let t of e.values()){let e={Verified:0,Manual:1,Rejected:2,"AI-Suggested":3};t.competitorMatches.sort((t,n)=>(e[t.match.Status]??9)-(e[n.match.Status]??9)||(t.match.Rank||99)-(n.match.Rank||99))}this.seimaGrouped=[...e.values()].sort((e,t)=>{let n=(e.seima.name||``).toLowerCase(),r=(t.seima.name||``).toLowerCase();return n.localeCompare(r)})}_applySeimaFilters(){this._buildSeimaGroups();let e=document.getElementById(`f-category`).value,t=this._getSelectedStatuses(),n=document.getElementById(`f-search`).value.toLowerCase().trim(),r=[...this.seimaGrouped];if(e&&(r=r.filter(t=>{let n=t.seima;return n.range===e||n.group===e||n.subGroup===e})),n){let e=n.split(/\s+/);r=r.filter(t=>{let n=t.seima,r=t.competitorMatches.map(e=>{let t=e.product;return[t?.product_code,t?.product_name,t?.collection,t?.product_type,t?.finish,e.brand].filter(Boolean).join(` `)}).join(` `),i=[n.orderCode,n.name,n.longDescription,n.range,n.group,n.subGroup,r].filter(Boolean).join(` `).toLowerCase();return e.every(e=>i.includes(e))}),r.sort((t,n)=>this._seimaSearchRelevance(n,e)-this._seimaSearchRelevance(t,e))}if(t.length>0){let e=t.filter(e=>e!==`unmatched`),n=t.includes(`unmatched`);e.length>0&&(r=r.map(t=>({...t,competitorMatches:t.competitorMatches.filter(t=>{let n=t.match.Status===`Manual`?`Verified`:t.match.Status;return e.includes(n)})}))),r=r.filter(t=>!!(n&&t.competitorMatches.length===0||e.length>0&&t.competitorMatches.length>0))}this.seimaFiltered=r,this._renderSeimaView()}_renderSeimaView(){let e=document.getElementById(`v-list`),t=this.seimaFiltered;if(document.getElementById(`v-count`).textContent=`${t.length} items`,document.getElementById(`v-left-count`).textContent=`${t.length} items`,this._updateStats(),this._updateProgress(),this._updateSummaryStrip(),t.length===0){e.innerHTML=`<div class="v-loading-spinner">No Seima products match the current filters.</div>`,this._clearDetail();return}e.innerHTML=``;let n=document.createDocumentFragment();if(t.forEach(e=>{let t=e.sku===this.selectedCode,r=this._createSeimaListItem(e,t);n.appendChild(r)}),e.appendChild(n),this.selectedCode){let e=t.find(e=>e.sku===this.selectedCode);e&&this._showSeimaGroupDetail(e)}}_createSeimaListItem(e,t){let n=document.createElement(`div`);n.className=`v-item${t?` active`:``}`,n.dataset.code=e.sku;let r=e.seima,i=r.name||e.sku,a=r.imageUrl||``,o=r.range||r.group||``,s=e.competitorMatches.length,c=e.competitorMatches.filter(e=>e.match.Status===`Verified`||e.match.Status===`Manual`).length,l=s>0&&e.competitorMatches.every(e=>e.match.Status===`Rejected`),u=[e.sku];o&&u.push(o);let d;d=c>0?`<span class="v-item-status verified"></span><span class="v-item-match-count">${c}</span>`:l?`<span class="v-item-status rejected"></span>`:s>0?`<span class="v-item-match-count">${s}</span>`:``,n.innerHTML=`
      ${a?`<img src="${a}" alt="" class="v-item-thumb" loading="lazy" onerror="this.outerHTML='<div class=\\'v-item-thumb-placeholder\\'></div>'">`:`<div class="v-item-thumb-placeholder"></div>`}
      <div class="v-item-body">
        <div class="v-item-name">${this._esc(i)}</div>
        <div class="v-item-meta">${this._esc(u.join(` · `))}</div>
      </div>
      <div class="v-item-right">${d}</div>
    `;let f=document.getElementById(`v-list`);return n.addEventListener(`click`,()=>{this.selectedCode=e.sku,this.expandedCode=e.sku,f.querySelectorAll(`.v-item.active`).forEach(e=>e.classList.remove(`active`)),n.classList.add(`active`),this._showSeimaGroupDetail(e)}),n}_showSeimaGroupDetail(e){let t=document.getElementById(`v-detail-content`),n=document.getElementById(`v-detail-empty`);n.style.display=`none`,t.style.display=`block`,t.innerHTML=this._renderSeimaDetail(e),this._wireSeimaDetailActions(t,e),t.scrollTop=0}_wireSeimaDetailActions(e,t){e.querySelectorAll(`.v-comp-card .v-comp-card-img, .v-comp-card .v-comp-card-img-placeholder`).forEach(e=>{e.addEventListener(`click`,t=>{t.stopPropagation();let n=e.closest(`.v-comp-card`),r=n?.dataset.compSku,i=n?.dataset.brand;if(!r)return;let a=this._findProduct(r,i);a&&this._showProductPanel(`competitor`,{product:a,brand:i})})});let n=e.querySelector(`.v-search-comp-input`),r=e.querySelector(`.v-search-comp-results`);if(n&&r){let e;n.addEventListener(`click`,e=>e.stopPropagation()),n.addEventListener(`input`,()=>{clearTimeout(e),e=setTimeout(()=>{this._renderCompSearchResults(n.value,r,t.sku)},250)})}e.querySelectorAll(`.v-btn-verify, .v-btn-reject, .v-btn-undo`).forEach(e=>{e.addEventListener(`click`,async t=>{t.stopPropagation();let n=e.closest(`.v-comp-card`),r=n.dataset.compSku,a=n.dataset.seimaSku,o=n.dataset.brand,s=e.dataset.action,c=s===`verify`?`Verified`:`Rejected`,l=o||this.currentCompetitor;this._setActionButtonPending(e,s);try{await i.updateMatch(l,r,a,c);let e=this.matches.find(e=>String(e.CompetitorSKU)===String(r)&&String(e.SeimaSKU)===String(a));e&&(e.Status=c),this._applyFilters()}catch(t){console.error(`Update failed:`,t),this._clearActionButtonPending(e),alert(`Failed to update. Check console.`)}})});let a=e.querySelector(`.v-btn-reject-all`);a&&a.addEventListener(`click`,async e=>{e.stopPropagation();let n=t.sku,r=this.matches.filter(e=>String(e.SeimaSKU)===String(n)&&e.Status!==`Verified`&&e.Status!==`Rejected`);if(r.length!==0){a.disabled=!0,a.textContent=`Rejecting ${r.length}...`;try{for(let e of r){let t=e._competitor||this.currentCompetitor;await i.updateMatch(t,String(e.CompetitorSKU),String(e.SeimaSKU),`Rejected`),e.Status=`Rejected`}this._applyFilters()}catch(e){console.error(`Bulk reject failed:`,e),alert(`Some rejections failed. Check console.`),this._applyFilters()}}})}_renderCompCardExpanded(e,t){let n=this._productName(e),r=this._compImgUrl(e),i=f(e),a=i==null?``:`$${i.toLocaleString(`en-AU`,{minimumFractionDigits:2,maximumFractionDigits:2})} ex GST`,o=e.rrp_inc_gst?`$${Number(e.rrp_inc_gst).toLocaleString(`en-AU`,{minimumFractionDigits:2,maximumFractionDigits:2})} inc GST`:``,s=this._extractCompetitorDimensions(e),c=[[`Name`,n],[`Code`,e.product_code],[`Brand`,t],[`Type`,e.product_type],[`Collection`,e.collection],[`Finish`,e.finish||e.colour],[`Dimensions`,s],[`Material`,e.material],[`Style`,e.style],[`WELS`,e.wels_rating],[`Price (ex)`,a],[`Price (inc)`,o],[`Description`,e.description||e.product_description],[`Features`,e.features]].filter(([,e])=>e&&String(e).trim()).map(([e,t])=>`<tr><td>${this._esc(e)}</td><td>${this._esc(t)}</td></tr>`).join(``);return`
      <div class="v-comp-expanded-inner" onclick="event.stopPropagation()">
        ${r?`<img src="${r}" alt="${this._esc(n)}" class="v-comp-expanded-img" onerror="this.style.display='none'">`:``}
        <table class="v-comp-info-table">${c}</table>
        ${e.product_url?`<a href="${e.product_url}" target="_blank" class="v-comp-link">View on website &rarr;</a>`:``}
      </div>
    `}_renderSeimaDetail(e){let t=e.seima,n=t.name||e.sku,r=t.imageUrl||``,i=m(t),a=[[`Order Code`,t.orderCode],[`Range`,t.range],[`Group`,t.group],[`Sub Group`,t.subGroup],[`Long Description`,t.longDescription],[`RRP ex GST`,t.rrpExGst],[`RRP inc GST`,t.rrpIncGst],[`Dimensions (W)`,t.dimX],[`Dimensions (D)`,t.dimY],[`Dimensions (H)`,t.dimZ]].filter(([,e])=>e&&String(e).trim()&&String(e).trim()!==`0`).map(([e,t])=>{let n;return n=e===`RRP ex GST`?d(t,``):e===`RRP inc GST`?d(``,t):this._esc(t),`<tr><td>${this._esc(e)}</td><td>${n}</td></tr>`}).join(``),o;o=e.competitorMatches.length===0?`<div class="v-no-matches">No competitor products matched.</div>`:e.competitorMatches.map(e=>this._renderCompCard(e,i)).join(``);let s=e.competitorMatches.filter(e=>e.match.Status!==`Verified`&&e.match.Status!==`Rejected`).length;return`
      <div class="v-detail-layout">
        <div class="v-comp-detail">
          ${r?`<img src="${r}" alt="${this._esc(n)}" class="v-seima-detail-img">`:``}
          <table class="v-comp-info-table">
            <tr><td>Product</td><td><strong>${this._esc(n)}</strong></td></tr>
            ${a}
          </table>
        </div>
        <div class="v-matches-panel">
          <div class="v-matches-title-bar">
            <div class="v-competitors-title">Competitor Products (${e.competitorMatches.length})</div>
            ${s>0?`<button class="v-btn v-btn-reject-all" data-seima-sku="${this._esc(e.sku)}">&#10007; Reject all non-verified (${s})</button>`:``}
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
    `}_searchCompetitorProducts(e,t,n=20){if(!e||e.length<2)return[];let r=e=>String(e||``).replace(/[.\-_\s/\\]+/g,``).toLowerCase(),i=e.toLowerCase().split(/\s+/),a=i.map(r),o=[],s=new Set(this.matches.filter(e=>String(e.SeimaSKU)===String(t)).map(e=>String(e.CompetitorSKU))),c=Object.values(this.productLookup);for(let e of c){if(s.has(String(e.product_code)))continue;let t=String(e.product_code||``),n=r(t),c=[t,n===t.toLowerCase()?``:n,e.product_name,this._productName(e),e.collection,e.product_type,e.subcategory,e.finish,e.brand,e._competitor,e.description,e.product_description].filter(Boolean).join(` `).toLowerCase();i.every((e,t)=>c.includes(e)||c.includes(a[t]))&&o.push({product:e,score:this._searchRelevance(e,i)})}return o.sort((e,t)=>t.score-e.score),o.slice(0,n).map(e=>e.product)}_renderCompSearchResults(e,t,n){if(!e||e.length<2){t.innerHTML=``;return}try{let r=this._searchCompetitorProducts(e,n);if(r.length===0){t.innerHTML=`<div class="v-search-no-results">No competitor products found.</div>`;return}t.innerHTML=r.map(e=>{let t=this._compImgUrl(e),n=this._productName(e),r=e._competitor||``,i=`brand-${r.toLowerCase()}`,a=p(e);return`
          <div class="v-search-result" data-comp-code="${this._esc(e.product_code)}" data-brand="${this._esc(r)}">
            ${r?`<span class="v-comp-card-brand ${i}" style="font-size:8px;padding:2px 4px;flex-shrink:0;">${this._esc(r)}</span>`:``}
            ${t?`<img src="${t}" alt="" class="v-search-result-img" loading="lazy" onerror="this.outerHTML='<div class=\\'v-match-img-placeholder\\'>No img</div>'">`:`<div class="v-match-img-placeholder">No img</div>`}
            <div class="v-search-result-info">
              <div class="v-match-name">${this._esc(n)}</div>
              <div class="v-match-sku">${this._esc(e.product_code)}${e.finish?` · ${this._esc(e.finish)}`:``}</div>
            </div>
            <div class="v-match-price">${a}</div>
            <button class="v-btn v-btn-verify" data-comp-code="${this._esc(e.product_code)}" data-brand="${this._esc(r)}">&#10003; Verify</button>
          </div>
        `}).join(``),t.querySelectorAll(`.v-search-result .v-search-result-img, .v-search-result .v-match-img-placeholder`).forEach(e=>{e.addEventListener(`click`,t=>{t.stopPropagation();let n=e.closest(`.v-search-result`),r=n?.dataset.compCode,i=n?.dataset.brand;if(!r)return;let a=this._findProduct(r,i);a&&this._showProductPanel(`competitor`,{product:a,brand:i})})}),t.querySelectorAll(`.v-btn-verify`).forEach(e=>{e.addEventListener(`click`,async t=>{t.stopPropagation();let r=e.dataset.compCode,i=e.dataset.brand;await this._addCompetitorMatch(n,r,i,e)})})}catch(e){console.error(`Competitor search error:`,e),t.innerHTML=`<div class="v-search-no-results">Search error — check console.</div>`}}async _addCompetitorMatch(e,t,n,r=null){let a=this.matches.filter(t=>String(t.SeimaSKU)===String(e)).length+1,o=n||this.currentCompetitor;try{this._setActionButtonPending(r,`verify`),await i.addMatch(o,t,e,a,`Manual verification`),await i.updateMatch(o,t,e,`Verified`),this.matches.push({CompetitorSKU:t,SeimaSKU:e,Rank:a,Confidence:``,MatchReason:`Manual verification`,Status:`Verified`,_competitor:o}),this._applyFilters()}catch(e){console.error(`Failed to add competitor match:`,e),this._clearActionButtonPending(r),alert(`Failed to add match. Check console.`)}}_compImgUrl(e){return e&&(e.image_url||e[`Image URL`]||e.image||e.Image)||``}_renderCompCard(e,t){let{match:n,product:r,brand:i}=e,a=r?this._productName(r):String(n.CompetitorSKU),o=this._compImgUrl(r),s=String(n.CompetitorSKU),c=r?.finish||r?.colour||``;(n.Status||``).toLowerCase().replace(/[\s-]+/g,`-`);let l=`brand-${i.toLowerCase()}`,u=``,d=``,m=r?f(r):null;if(m!=null&&(u=p(r),t!=null&&m>0)){let e=m-t,n=(e/t*100).toFixed(0);e>0?d=`<div class="v-comp-card-price-delta v-price-dearer">+${n}% dearer</div>`:e<0&&(d=`<div class="v-comp-card-price-delta v-price-cheaper">${n}% cheaper</div>`)}let h=Number(n.Confidence)||0,g=h>=70?`high`:h>=40?`med`:`low`;return`
      <div class="v-comp-card" data-comp-sku="${this._esc(s)}" data-seima-sku="${this._esc(n.SeimaSKU)}" data-brand="${this._esc(i)}">
        <div class="v-comp-card-brand ${l}">${this._esc(i)}</div>
        ${o?`<img src="${o}" alt="" class="v-comp-card-img" loading="lazy" onerror="this.outerHTML='<div class=\\'v-comp-card-img-placeholder\\'>No img</div>'">`:`<div class="v-comp-card-img-placeholder">No img</div>`}
        <div class="v-comp-card-info">
          <div class="v-comp-card-name">${this._esc(a)}</div>
          <div class="v-comp-card-meta">
            ${this._esc(s)}${c?` · ${this._esc(c)}`:``}
            <span class="v-badge v-badge-conf-${g}" style="margin-left:6px;">${h}%</span>
          </div>
          ${n.MatchReason?`<div class="v-comp-card-reason">${this._esc(n.MatchReason)}</div>`:``}
        </div>
        <div class="v-comp-card-price">
          ${u}
          ${d}
        </div>
        <div class="v-comp-card-actions">${this._renderStatusActions(n.Status)}</div>
        ${r?.product_url?`<a href="${r.product_url}" target="_blank" class="v-comp-card-link">View &rarr;</a>`:``}
      </div>
    `}_updateStats(){}_switchMode(e){if(e===this.viewMode)return;this.viewMode=e,this.selectedCode=null,this.expandedCode=null,this._clearDetail(),this._updatePerspectiveBar(),this._updatePanelHeaders(),this._populateCategories(),document.getElementById(`f-category`).value=``,document.querySelectorAll(`.v-filter-pill`).forEach(e=>e.classList.remove(`active`));let t=document.getElementById(`f-search`);t.value=``,t.placeholder=this.viewMode===`seima`?`Search Seima products...`:`Search competitor products...`,this._applyFilters()}_updatePerspectiveBar(){let e=document.getElementById(`v-perspective-bar`),t=document.getElementById(`v-perspective-source`),n=document.getElementById(`v-perspective-target`);e.dataset.mode=this.viewMode,this.viewMode===`seima`?(t.textContent=`Seima Products`,n.textContent=`Competitor Matches`):(t.textContent=`Competitor Products`,n.textContent=`Seima Alternatives`)}_updatePanelHeaders(){let e=document.getElementById(`v-left-title`),t=document.getElementById(`v-right-title`),n=this.currentCompetitor&&this.currentCompetitor!==`__all__`?this.currentCompetitor:`Competitor`;this.viewMode===`seima`?(e.textContent=`Seima Products`,t.textContent=`Competitor Matches`):(e.textContent=`${n} Products`,t.textContent=`Seima Alternatives`)}_showToolbarControls(e){let t=document.getElementById(`v-filters-wrap`),n=document.getElementById(`v-search-row`),r=document.getElementById(`v-toolbar-stats`),i=e?``:`none`;t.style.display=i,n.style.display=e?`flex`:`none`,r&&(r.style.display=i)}_updateSummaryStrip(){let e=document.getElementById(`v-summary-fill`),t=document.getElementById(`v-summary-pct`);if(!this.matches.length||!this.products.length){t&&(t.textContent=``);return}let n=this.products.length,r=new Set,i=0,a=0,o=0,s=0,c=0;for(let e of this.matches)e.Status===`Verified`||e.Status===`Manual`?(i++,r.add(String(e.CompetitorSKU))):e.Status===`Rejected`?(a++,r.add(String(e.CompetitorSKU))):e.Status===`AI-Suggested`?o++:e.Status===`Pending-User`?s++:e.Status===`Pending-Dispute`&&c++;let l=new Set(this.matches.map(e=>String(e.CompetitorSKU))),u=this.products.filter(e=>!l.has(String(e.product_code))).length,d=Math.round(r.size/n*100);e&&(e.style.width=`${d}%`),t&&(t.textContent=`${d}%`),document.getElementById(`pill-count-ai`).textContent=o||``,document.getElementById(`pill-count-verified`).textContent=i||``,document.getElementById(`pill-count-rejected`).textContent=a||``,document.getElementById(`pill-count-unmatched`).textContent=u||``;let f=document.getElementById(`pill-count-pending-user`),p=document.getElementById(`pill-count-pending-dispute`);f&&(f.textContent=s||``),p&&(p.textContent=c||``)}_normalizeMatchRows(e){return(e||[]).filter(e=>{let t=String(e.CompetitorSKU||``).trim(),n=String(e.SeimaSKU||``).trim();return t&&n})}async _showLiveMatchRowsAudit(){let e=this.currentCompetitor;if(!e||e===`__all__`){alert(`Select a single competitor to view live match rows.`);return}let t=[];try{let n=await i.getMatches(e,!0);t=this._normalizeMatchRows(n)}catch(e){console.error(`Live rows audit failed:`,e),alert(`Failed to load live match rows from API.`);return}let n={};for(let e of t){let t=String(e.Status||`(blank)`).trim()||`(blank)`;n[t]=(n[t]||0)+1}let r=t.filter(e=>e.Status===`Verified`||e.Status===`Manual`),a=document.createElement(`div`);a.className=`v-modal-overlay`,a.innerHTML=`
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
            <strong>Verified/Manual:</strong> ${r.length}
          </div>
          <div style="margin:0 0 12px;font-size:0.82rem;color:#666;">
            ${Object.entries(n).map(([e,t])=>`${this._esc(e)}: ${t}`).join(` · `)}
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
              ${t.map(e=>`
                <tr>
                  <td style="border-bottom:1px solid #f0f0f0;padding:6px;">${this._esc(e.CompetitorSKU)}</td>
                  <td style="border-bottom:1px solid #f0f0f0;padding:6px;">${this._esc(e.SeimaSKU)}</td>
                  <td style="border-bottom:1px solid #f0f0f0;padding:6px;">${this._esc(e.Status||``)}</td>
                  <td style="border-bottom:1px solid #f0f0f0;padding:6px;">${this._esc(e.VerifiedDate||``)}</td>
                </tr>
              `).join(``)}
            </tbody>
          </table>
        </div>
      </div>
    `,document.body.appendChild(a);let o=()=>a.remove();a.querySelector(`.v-modal-close`).addEventListener(`click`,o),a.addEventListener(`click`,e=>{e.target===a&&o()}),a.querySelector(`#v-copy-live-rows`)?.addEventListener(`click`,async()=>{let e=r.map(e=>`${e.CompetitorSKU}\t${e.SeimaSKU}\t${e.Status||``}\t${e.VerifiedDate||``}`).join(`
`);try{await navigator.clipboard.writeText(e),alert(`Verified/Manual rows copied to clipboard.`)}catch{alert(`Could not copy to clipboard.`)}})}_getSelectedStatuses(){return[...document.querySelectorAll(`.v-filter-pill.active`)].map(e=>e.dataset.value)}_searchRelevance(e,t){let n=String(e.product_name||this._productName(e)||``).toLowerCase(),r=String(e.product_code||``).toLowerCase(),i=r.replace(/[.\-_\s/\\]+/g,``),a=[e.collection,e.product_type,e.subcategory].filter(Boolean).join(` `).toLowerCase(),o=[e.finish,e.brand,e.features,e.description,e.product_description].filter(Boolean).join(` `).toLowerCase(),s=0;for(let e of t){let t=e.replace(/[.\-_\s/\\]+/g,``);r===e||i===t?s+=100:(r.includes(e)||i.includes(t))&&(s+=50),n.includes(e)&&(s+=40,n.split(/[\s,]+/).some(t=>t===e)&&(s+=20),n.startsWith(e)&&(s+=10)),a.includes(e)&&(s+=10),o.includes(e)&&(s+=3)}return s}_seimaSearchRelevance(e,t){let n=e.seima,r=String(n.name||``).toLowerCase(),i=String(n.orderCode||``).toLowerCase(),a=[n.range,n.group,n.subGroup].filter(Boolean).join(` `).toLowerCase(),o=(n.longDescription||``).toLowerCase(),s=0;for(let e of t)i===e?s+=100:i.includes(e)&&(s+=50),r.includes(e)&&(s+=40,r.split(/[\s,]+/).some(t=>t===e)&&(s+=20),r.startsWith(e)&&(s+=10)),a.includes(e)&&(s+=10),o.includes(e)&&(s+=3);return s}_extractCompetitorDimensions(e){if(!e)return``;if(e.dimensions_mm)return e.dimensions_mm;let t=0,n=0,r=0;for(let i of Object.keys(e)){let a=i.toLowerCase();a.includes(`width`)&&!t&&(t=parseFloat(e[i])||0),a.includes(`depth`)&&!n&&(n=parseFloat(e[i])||0),a.includes(`height`)&&!r&&(r=parseFloat(e[i])||0)}if(t>0||n>0||r>0){let e=[];return t&&e.push(t),n&&e.push(n),r&&e.push(r),e.join(` × `)+`mm`}return``}_esc(e){if(!e)return``;let t=document.createElement(`div`);return t.textContent=String(e),t.innerHTML}_dotClass(e){if(!e)return`ai`;let t=e.toLowerCase();return t.includes(`verified`)?`verified`:t.includes(`rejected`)?`rejected`:t.includes(`manual`)?`manual`:`ai`}_getExcludedCategories(){try{let e=localStorage.getItem(`crosshair_excluded_categories`);if(e)return JSON.parse(e)}catch{}return n.CROSSHAIR?.EXCLUDED_CATEGORIES||{}}_saveExcludedCategories(e){localStorage.setItem(`crosshair_excluded_categories`,JSON.stringify(e)),i.config&&(i.config.EXCLUDED_CATEGORIES=e),Object.keys(i.productsCache).forEach(e=>{delete i.productsCache[e]}),i._index=null}async _showSettings(){this._closeSettings();let e=document.createElement(`div`);e.className=`v-settings-overlay`;let t=document.createElement(`div`);t.className=`v-settings-panel`,t.innerHTML=`
      <div class="v-settings-header">
        <h2>Category Settings</h2>
        <button class="v-settings-close">&times;</button>
      </div>
      <div class="v-settings-body">
        <div style="padding:40px;text-align:center;color:#888;">Loading categories&hellip;</div>
      </div>
    `,document.body.appendChild(e),document.body.appendChild(t);let n=()=>this._closeSettings();t.querySelector(`.v-settings-close`).addEventListener(`click`,n),e.addEventListener(`click`,n),this._settingsPanel={overlay:e,panel:t};let r;try{r=await i.getCompetitors()}catch(e){console.error(`Settings: failed to load competitors`,e),t.querySelector(`.v-settings-body`).innerHTML=`<div style="padding:20px;color:#b91c1c;">Failed to load competitor list.</div>`;return}let a=this._getExcludedCategories(),o={};if(await Promise.all(r.map(async e=>{try{let t=(await i._apiGet(`getCompetitorProducts`,{competitor:e})).products||[];o[e]=[...new Set(t.map(e=>e.product_type||``).filter(Boolean))].sort()}catch(t){console.warn(`Settings: failed to load categories for ${e}`,t),o[e]=[]}})),Object.values(o).every(e=>e.length===0)){t.querySelector(`.v-settings-body`).innerHTML=`<div style="padding:20px;color:#b91c1c;">No category data available.</div>`;return}let s=``;for(let e of r){let t=o[e];if(t.length===0)continue;let n=a[e]||[];s+=`
        <div class="v-settings-section">
          <div class="v-settings-section-title">${this._esc(e)}</div>
          <div class="v-settings-cats">
            ${t.map(t=>{let r=n.includes(t);return`<label class="v-settings-cat${r?` excluded`:``}" data-competitor="${this._esc(e)}" data-category="${this._esc(t)}">
                <input type="checkbox" ${r?``:`checked`}>${this._esc(t)}
              </label>`}).join(``)}
          </div>
        </div>`}t.querySelector(`.v-settings-body`).innerHTML=`
      ${s}
      <div class="v-settings-note">
        Unchecked categories are excluded from matching and won't appear in the product list.
        Changes take effect after reloading the competitor data.
      </div>
    `,t.addEventListener(`change`,e=>{let t=e.target.closest(`.v-settings-cat`);if(!t)return;let n=t.dataset.competitor,r=t.dataset.category,i=e.target.checked,a=this._getExcludedCategories();a[n]||(a[n]=[]),i?(a[n]=a[n].filter(e=>e!==r),t.classList.remove(`excluded`)):(a[n].includes(r)||a[n].push(r),t.classList.add(`excluded`)),this._saveExcludedCategories(a)})}_closeSettings(){this._settingsPanel&&(this._settingsPanel.overlay.remove(),this._settingsPanel.panel.remove(),this._settingsPanel=null,this.currentCompetitor&&this._loadCompetitor(this.currentCompetitor))}_bind(){document.getElementById(`f-competitor`).addEventListener(`change`,e=>{this.selectedCode=null,this._clearDetail();let t=document.getElementById(`v-run-matching-btn`);t.disabled=!e.target.value||e.target.value===`__all__`,this._loadCompetitor(e.target.value)}),document.getElementById(`f-category`).addEventListener(`change`,()=>this._applyFilters()),document.getElementById(`f-status`).addEventListener(`click`,e=>{let t=e.target.closest(`.v-filter-pill`);t&&(t.classList.toggle(`active`),this._applyFilters())});let e;document.getElementById(`f-search`).addEventListener(`input`,()=>{clearTimeout(e),e=setTimeout(()=>this._applyFilters(),300)}),document.getElementById(`v-settings-btn`).addEventListener(`click`,()=>this._showSettings()),document.getElementById(`v-range-hints-btn`).addEventListener(`click`,()=>this._showRangeHints()),document.getElementById(`v-run-matching-btn`).addEventListener(`click`,()=>this._runMatching()),document.getElementById(`v-live-audit-btn`)?.addEventListener(`click`,()=>this._showLiveMatchRowsAudit()),document.getElementById(`v-perspective-flip`).addEventListener(`click`,()=>{this._switchMode(this.viewMode===`competitor`?`seima`:`competitor`)}),document.addEventListener(`keydown`,e=>{if(e.target.tagName===`INPUT`||e.target.tagName===`TEXTAREA`||e.target.tagName===`SELECT`)return;let t=this.viewMode===`seima`?this.seimaFiltered:this.filtered;if(!(!t||t.length===0)){if(e.key===`ArrowDown`||e.key===`ArrowUp`){e.preventDefault();let n=this.viewMode===`seima`?t.map(e=>e.sku):t.map(e=>String(e.product_code)),r=this.selectedCode?n.indexOf(this.selectedCode):-1,i;i=e.key===`ArrowDown`?r<n.length-1?r+1:r:r>0?r-1:0,this.selectedCode=n[i],this.viewMode===`seima`?(this.expandedCode=this.selectedCode,this._renderSeimaView()):this._render(),requestAnimationFrame(()=>{let e=document.querySelector(`.v-item.active`);e&&e.scrollIntoView({behavior:`smooth`,block:`nearest`})});return}if(this.selectedCode){if(e.key===`v`||e.key===`V`){let e=document.querySelector(`#v-detail-content .v-btn-verify`);e&&e.click()}else if(e.key===`x`||e.key===`X`){let e=document.querySelector(`#v-detail-content .v-btn-reject`);e&&e.click()}}}});let t=document.getElementById(`v-resize-handle`),n=document.querySelector(`.v-list-panel`);if(t&&n){let e,r,i=t=>{let i=r+(t.clientX-e),a=window.innerWidth*.6;n.style.width=`${Math.max(280,Math.min(a,i))}px`},a=()=>{t.classList.remove(`dragging`),document.removeEventListener(`mousemove`,i),document.removeEventListener(`mouseup`,a),document.body.style.cursor=``,document.body.style.userSelect=``};t.addEventListener(`mousedown`,o=>{o.preventDefault(),e=o.clientX,r=n.offsetWidth,t.classList.add(`dragging`),document.body.style.cursor=`col-resize`,document.body.style.userSelect=`none`,document.addEventListener(`mousemove`,i),document.addEventListener(`mouseup`,a)})}}async _runMatching(){let e=this.currentCompetitor;if(!e||e===`__all__`||!this.seimaProducts||this.seimaProducts.length===0||this.products.length===0)return;let t=document.createElement(`div`);t.className=`v-modal-overlay`,t.innerHTML=`
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
    `,document.body.appendChild(t);let r=()=>t.remove();t.querySelector(`#rm-close`).addEventListener(`click`,r),t.addEventListener(`click`,e=>{e.target===t&&!this._matchingRunning&&r()}),t.querySelector(`#rm-cancel`).addEventListener(`click`,r);let a=this.seimaProducts.filter(e=>e.orderCode&&/^\d+/.test(e.orderCode)).length;t.querySelector(`#rm-seima-count`).textContent=a.toLocaleString();let o=[];try{let t=`${n.CROSSHAIR.API_URL}?action=getRangeHints&competitor=${encodeURIComponent(e)}&staffEmail=${encodeURIComponent(i.staffEmail||``)}`,r=await(await fetch(t)).json();r.success&&r.hints&&(o=r.hints)}catch{}t.querySelector(`#rm-hint-count`).textContent=o.length;let s=t.querySelector(`#rm-hints-list`);o.length===0?s.innerHTML=`<span class="v-rm-no-hints">No range hints defined for this competitor. Matching will use text + attributes only.</span>`:s.innerHTML=o.map(e=>`
        <div class="v-rm-hint-chip">
          <span class="v-rm-hint-from">${this._esc(e.competitorRange)}</span>
          <span class="v-rm-hint-arrow">&rarr;</span>
          <span class="v-rm-hint-to">${this._esc(e.seimaRange)}</span>
        </div>
      `).join(``),t.querySelector(`#rm-start`).addEventListener(`click`,()=>{this._executeMatching(t,e,o)})}async _executeMatching(e,t,r){this._matchingRunning=!0;let l=e.querySelector(`#rm-footer`),u=e.querySelector(`#rm-progress-section`),d=e.querySelector(`#rm-result`),f=e.querySelector(`#rm-stage`),p=e.querySelector(`#rm-progress-fill`),m=e.querySelector(`#rm-progress-detail`),h=e.querySelector(`#rm-log`);l.innerHTML=`<button class="v-btn v-btn-reject" disabled>Matching in progress...</button>`,u.style.display=``;let g=e=>{let t=document.createElement(`div`);t.className=`v-rm-log-line`,t.textContent=e,h.appendChild(t),h.scrollTop=h.scrollHeight},_=(e,t,n)=>{p.style.width=`${e}%`,t&&(f.textContent=t),n&&(m.textContent=n)},v=document.getElementById(`v-run-matching-btn`);v.disabled=!0;try{_(0,`Preparing catalog...`,`Converting Seima products`),g(`Converting Seima catalog to matching format...`),await this._yieldUI();let u=this.seimaProducts.filter(e=>e.orderCode&&/^\d+/.test(e.orderCode)).map(a);g(`${u.length} Seima products indexed`);let f=n.CROSSHAIR.EXCLUDED_CATEGORIES?.[t]||[],p=this.products;f.length>0&&(p=p.filter(e=>{let t=e.product_type||``,n=e.subcategory||``;return!f.some(e=>t===e||n===e)}),g(`Excluded ${this.products.length-p.length} products in filtered categories`)),g(`${p.length} competitor products to match`),r.length>0&&g(`${r.length} range hints will be applied`),_(5,`Matching products...`,`0 / ${p.length}`),await this._yieldUI();let m=[],h=p.length,v=Date.now(),y=0;for(let e=0;e<h;e++){let t=p[e];if(e%10==0){let t=5+Math.round(e/h*80),n=((Date.now()-v)/1e3).toFixed(0);_(t,`Matching products...`,`${e+1} / ${h} (${n}s)`),await this._yieldUI()}let n=s(t,u,{totalTopK:c.BM25_TOP_K});if(n.length===0){y++;continue}let i=o(t,n,r);for(let e of i)e.confidence<c.MIN_CONFIDENCE||m.push({CompetitorSKU:String(t.product_code||``),SeimaSKU:e.seimaSKU,Rank:e.rank,Confidence:e.confidence,Decision:e.decision||``,MatchReason:e.reason||``})}let b=((Date.now()-v)/1e3).toFixed(1);g(`Matching complete: ${m.length} matches in ${b}s`),y>0&&g(`${y} products skipped (no text matches)`),_(88,`Uploading to Google Sheets...`,`Preparing upload`),await this._yieldUI();let x=Math.max(1,Math.ceil(m.length/500));for(let e=0;e<m.length;e+=500){let n=m.slice(e,e+500),r=Math.floor(e/500)+1,a=e===0;_(88+Math.round(r/x*10),`Uploading to Google Sheets...`,`Batch ${r} / ${x}`),g(`Uploading batch ${r}/${x} (${n.length} matches)...`),await this._apiPost({action:a?`bulkAddMatches`:`appendMatches`,competitor:t,matches:n,staffEmail:i.staffEmail||``}),e+500<m.length&&await new Promise(e=>setTimeout(e,500))}m.length===0&&(g(`No matches found — clearing existing AI-Suggested matches`),await this._apiPost({action:`bulkAddMatches`,competitor:t,matches:[],staffEmail:i.staffEmail||``})),_(100,`Complete`,``),g(`Upload complete. Refreshing data...`);let S=await i.getMatches(t,!0);S.forEach(e=>{e._competitor=t}),this.matches=this._normalizeMatchRows(S),this._applyFilters(),d.style.display=``,d.innerHTML=`
        <div class="v-rm-result-success">
          <div class="v-rm-result-icon">&#10003;</div>
          <div class="v-rm-result-text">
            <strong>${m.length.toLocaleString()}</strong> matches generated for <strong>${this._esc(t)}</strong> in <strong>${b}s</strong>
          </div>
        </div>
      `,l.innerHTML=`<button class="v-btn v-btn-verify" id="rm-done">Done</button>`,l.querySelector(`#rm-done`).addEventListener(`click`,()=>e.remove())}catch(t){console.error(`Run matching failed:`,t),_(0,`Error`,t.message),g(`ERROR: ${t.message}`),d.style.display=``,d.innerHTML=`
        <div class="v-rm-result-error">
          <div class="v-rm-result-icon">&#10007;</div>
          <div class="v-rm-result-text">Matching failed: ${this._esc(t.message)}</div>
        </div>
      `,l.innerHTML=`<button class="v-btn v-btn-reject" id="rm-close-err">Close</button>`,l.querySelector(`#rm-close-err`).addEventListener(`click`,()=>e.remove())}finally{this._matchingRunning=!1,v.disabled=!1}}_yieldUI(){return new Promise(e=>setTimeout(e,0))}async _showRangeHints(){let e=document.createElement(`div`);e.className=`v-modal-overlay`,e.innerHTML=`
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
    `,document.body.appendChild(e),e.querySelector(`.v-modal-close`).addEventListener(`click`,()=>e.remove()),e.addEventListener(`click`,t=>{t.target===e&&e.remove()});let t=e.querySelector(`#rh-competitor`);try{let e=await i.getCompetitors(),n=t.innerHTML;e.forEach(e=>{n+=`<option value="${e}">${e}</option>`}),t.innerHTML=n}catch{}e.querySelector(`#rh-add-btn`).addEventListener(`click`,async()=>{let n=t.value,r=e.querySelector(`#rh-comp-range`).value.trim(),a=e.querySelector(`#rh-seima-range`).value.trim(),o=e.querySelector(`#rh-notes`).value.trim();if(!n||!r||!a){alert(`Competitor, competitor range, and Seima range are all required.`);return}let s=e.querySelector(`#rh-add-btn`);s.disabled=!0,s.textContent=`...`;try{await this._apiPost({action:`addRangeHint`,competitor:n,competitorRange:r,seimaRange:a,notes:o,staffEmail:i.staffEmail||``}),e.querySelector(`#rh-comp-range`).value=``,e.querySelector(`#rh-seima-range`).value=``,e.querySelector(`#rh-notes`).value=``,await this._loadRangeHintsList(e.querySelector(`#rh-list`))}catch(e){alert(`Failed to add: `+e.message)}finally{s.disabled=!1,s.textContent=`+ Add`}}),await this._loadRangeHintsList(e.querySelector(`#rh-list`))}async _loadRangeHintsList(e){try{let t=`${n.CROSSHAIR.API_URL}?action=getRangeHints&staffEmail=${encodeURIComponent(i.staffEmail||``)}`,r=await(await fetch(t)).json();if(!r.success)throw Error(r.error);let a=r.hints||[];if(a.length===0){e.innerHTML=`<div class="v-range-hints-empty">No range hints defined yet. Add your first mapping above.</div>`;return}let o={};for(let e of a){let t=e.competitor||`(no competitor)`;o[t]||(o[t]=[]),o[t].push(e)}e.innerHTML=Object.entries(o).map(([e,t])=>`
        <div class="v-rh-group">
          <div class="v-rh-group-title">${this._esc(e)}</div>
          ${t.map(e=>`
            <div class="v-rh-row" data-row-index="${e.rowIndex}">
              <span class="v-rh-range">${this._esc(e.competitorRange)}</span>
              <span class="v-rh-arrow">&rarr;</span>
              <span class="v-rh-range v-rh-seima">${this._esc(e.seimaRange)}</span>
              ${e.notes?`<span class="v-rh-note">${this._esc(e.notes)}</span>`:``}
              <button class="v-btn v-btn-reject v-rh-remove" data-row-index="${e.rowIndex}">&times;</button>
            </div>
          `).join(``)}
        </div>
      `).join(``),e.querySelectorAll(`.v-rh-remove`).forEach(t=>{t.addEventListener(`click`,async()=>{let n=parseInt(t.dataset.rowIndex);t.disabled=!0,t.textContent=`...`;try{await this._apiPost({action:`removeRangeHint`,rowIndex:n,staffEmail:i.staffEmail||``}),await this._loadRangeHintsList(e)}catch(e){alert(`Failed to remove: `+e.message),t.disabled=!1,t.textContent=`×`}})})}catch(t){e.innerHTML=`<div class="v-range-hints-empty">Failed to load: ${this._esc(t.message)}</div>`}}async _apiPost(e){let t=n.CROSSHAIR,r=new URLSearchParams;r.append(`data`,JSON.stringify(e));let i=await fetch(t.API_URL,{method:`POST`,body:r,redirect:`follow`});if(!i.ok)throw Error(`API post failed: ${i.status}`);let a=await i.json();if(!a.success)throw Error(a.error||`API returned failure`);return a}}().init().catch(e=>console.error(`Validator init failed:`,e));