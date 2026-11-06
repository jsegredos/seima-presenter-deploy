const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/js-CFqp5rIj.js","assets/rolldown-runtime-DK3Fl9T5.js","assets/vendor-fuse-CT6aDlEj.js","assets/js-DZxo49cr.css","assets/data-layer-Dd_IacXO.js","assets/vendor-idb-BL1M7mAU.js","assets/product-synonyms-IWc1qXVC.js"])))=>i.map(i=>d[i]);
import{I as e}from"./js-CFqp5rIj.js";import{n as t,t as n}from"./preload-helper-sqWa5rq_.js";import{t as r}from"./competitor-service-D2WJeeWS.js";new class{constructor(){this._pending=[],this._filter=`all`,this._competitorFilter=``,this._seimaByCode={}}async init(){let{authService:e}=await n(async()=>{let{authService:e}=await import(`./js-CFqp5rIj.js`).then(e=>e.t);return{authService:e}},__vite__mapDeps([0,1,2,3])),i=e.getCurrentUser();if(!(i&&e.isStaffMode())){document.getElementById(`ap-content`).style.display=`none`,document.getElementById(`ap-forbidden`).style.display=``;return}r.isEnabled()||r.configure(t.CROSSHAIR,i.email),await this._loadSeimaData(),await r.preload().catch(()=>{}),await this._loadPending(),this._render()}async _loadSeimaData(){try{let{dataLayer:e}=await n(async()=>{let{dataLayer:e}=await import(`./data-layer-Dd_IacXO.js`).then(e=>e.n);return{dataLayer:e}},__vite__mapDeps([4,1,0,2,3,5,6]));e.isLoaded||await e.init();let t=e.products||[];for(let e of t){let t=String(e.OrderCode||e[`Order Code`]||e.Code||``).trim();t&&(this._seimaByCode[t]=e)}}catch(e){console.error(`AdminPending: failed to load Seima catalog`,e)}}_normalizePendingItem(e){if(!e||typeof e!=`object`)return e;let t=(e,t)=>{for(let n of t){if(e[n]===void 0||e[n]===null)continue;let t=String(e[n]).trim();if(t)return t}return``},n={...e};return n.CompetitorSKU=t(e,[`CompetitorSKU`,`Competitor SKU`,`CompetitorSku`,`competitorSKU`]),n.SeimaSKU=t(e,[`SeimaSKU`,`Seima SKU`,`Seima Sku`,`seimaSKU`,`SeimaCode`,`Seima Code`]),n.Status||=t(e,[`Status`,`status`]),(n.MatchReason===void 0||n.MatchReason===``)&&(n.MatchReason=e.MatchReason??e[`Match Reason`]??``),(n.VerifiedBy===void 0||n.VerifiedBy===``)&&(n.VerifiedBy=e.VerifiedBy??e[`Verified By`]??``),(n.VerifiedDate===void 0||n.VerifiedDate===``)&&(n.VerifiedDate=e.VerifiedDate??e[`Verified Date`]??``),n}async _loadPending(){try{let e=(await r.getPendingVerifications()).pending||[];this._pending=e.map(e=>this._normalizePendingItem(e))}catch(e){console.error(`AdminPending: failed to load pending`,e),this._pending=[]}}_render(){let e=document.getElementById(`ap-content`),t=this._getFilteredItems(),n=this._pending.filter(e=>e.Status===`Pending-User`),r=this._pending.filter(e=>e.Status===`Pending-Dispute`),i=[...new Set(this._pending.map(e=>e.competitor))],a=``;if(a+=`
      <div class="ap-stats">
        <div class="ap-stat"><span class="ap-stat-dot ap-stat-dot-amber"></span> Total Pending: <span class="ap-stat-count">${this._pending.length}</span></div>
        <div class="ap-stat"><span class="ap-stat-dot ap-stat-dot-amber"></span> Suggestions: <span class="ap-stat-count">${n.length}</span></div>
        <div class="ap-stat"><span class="ap-stat-dot ap-stat-dot-red"></span> Disputes: <span class="ap-stat-count">${r.length}</span></div>
        <div class="ap-stat"><span class="ap-stat-dot ap-stat-dot-gray"></span> Competitors: <span class="ap-stat-count">${i.length}</span></div>
      </div>
    `,a+=`
      <div class="ap-filters">
        <button class="ap-tab ${this._filter===`all`?`active`:``}" data-filter="all">All (${this._pending.length})</button>
        <button class="ap-tab ${this._filter===`suggestions`?`active`:``}" data-filter="suggestions">Suggestions (${n.length})</button>
        <button class="ap-tab ${this._filter===`disputes`?`active`:``}" data-filter="disputes">Disputes (${r.length})</button>
        <select class="ap-select" id="ap-competitor-filter">
          <option value="">Competitor: All</option>
          ${i.map(e=>`<option value="${this._esc(e)}" ${this._competitorFilter===e?`selected`:``}>${this._esc(e)}</option>`).join(``)}
        </select>
      </div>
    `,t.length===0)a+=`<div class="ap-empty">No pending verifications to review.</div>`;else{let e=this._groupByCompetitor(t);for(let[t,n]of Object.entries(e)){a+=`<div class="ap-group-header">${this._esc(t)} <span class="ap-group-count">${n.length} pending</span></div>`;let e={};for(let t of n){let n=t.CompetitorSKU;e[n]||(e[n]=[]),e[n].push(t)}for(let[n,r]of Object.entries(e)){let e=r.filter(e=>e.Status===`Pending-User`),i=r.filter(e=>e.Status===`Pending-Dispute`),o=[...new Set(e.map(e=>e.SeimaSKU))].length>1;for(let e of i)a+=this._renderDisputeCard(e,t);if(o)a+=this._renderConflictGroup(n,e,t);else for(let n of e)a+=this._renderSuggestionCard(n,t)}}}e.innerHTML=a,this._bindActions(e)}_renderSuggestionCard(e,t){let n=this._findCompetitorProduct(t,e.CompetitorSKU),r=this._seimaByCode[e.SeimaSKU],i=n?.image_url||``,a=r?.Image_URL||r?.imageUrl||``,o=r?.Description||r?.ProductName||e.SeimaSKU,s=r?.OrderCode||e.SeimaSKU,c=s?String(parseInt(s,10)):e.SeimaSKU,l=(e.MatchReason||``).replace(/^Alternative to [^:]+:\s*/i,``),u=e.VerifiedDate?new Date(e.VerifiedDate).toLocaleDateString(`en-AU`):``,d=[n?.product_type,n?.subcategory].filter(Boolean).join(` - `),f=[r?.Range,r?.Group,r?.SubGroup||r?.Subgroup].filter(Boolean).join(` / `);return`
      <div class="ap-card ap-card-suggestion" id="ap-card-${this._cardId(e)}">
        <div class="ap-card-type ap-type-suggestion">New Suggestion</div>
        <div class="ap-card-match">
          <div class="ap-card-product">
            <img class="ap-thumb ap-thumb-comp" src="${this._esc(i||`assets/no-image.png`)}" alt=""
                 data-competitor="${this._esc(t)}" data-comp-sku="${this._esc(e.CompetitorSKU)}"
                 onerror="this.src='assets/no-image.png'" title="Click to view details">
            <div class="ap-card-product-info">
              <div class="ap-card-product-code">${this._esc(t)}: ${this._esc(e.CompetitorSKU)}</div>
              <div class="ap-card-product-name">${this._esc(n?.product_name||n?.collection||``)}</div>
              ${d?`<div class="ap-card-product-type">${this._esc(d)}</div>`:``}
            </div>
          </div>
          <span class="ap-card-arrow">→</span>
          <div class="ap-card-product">
            <img class="ap-thumb ap-thumb-seima" src="${this._esc(a||`assets/no-image.png`)}" alt=""
                 data-seima-sku="${this._esc(s)}"
                 onerror="this.src='assets/no-image.png'" title="Click to view details">
            <div class="ap-card-product-info">
              <div class="ap-card-product-code">${this._esc(c)}</div>
              <div class="ap-card-product-name">${this._esc(o)}</div>
              ${f?`<div class="ap-card-product-type">${this._esc(f)}</div>`:``}
            </div>
          </div>
        </div>
        <div class="ap-card-meta">Submitted by: ${this._esc(e.VerifiedBy||`Unknown`)} | ${u}</div>
        ${l?`<div class="ap-card-reason">"${this._esc(l)}"</div>`:``}
        <div class="ap-card-actions">
          <button class="ap-btn ap-btn-approve" data-action="approve" data-competitor="${this._esc(t)}" data-csku="${this._esc(e.CompetitorSKU)}" data-ssku="${this._esc(e.SeimaSKU)}">✓ Approve</button>
          <button class="ap-btn ap-btn-reject" data-action="reject" data-competitor="${this._esc(t)}" data-csku="${this._esc(e.CompetitorSKU)}" data-ssku="${this._esc(e.SeimaSKU)}">✗ Reject</button>
        </div>
      </div>
    `}_renderDisputeCard(e,t){let n=this._findCompetitorProduct(t,e.CompetitorSKU),r=this._seimaByCode[e.SeimaSKU],i=n?.image_url||``,a=r?.Image_URL||r?.imageUrl||``,o=r?.Description||r?.ProductName||e.SeimaSKU,s=r?.OrderCode||e.SeimaSKU,c=s?String(parseInt(s,10)):e.SeimaSKU,l=(e.MatchReason||``).replace(/^DISPUTE:\s*/i,``),u=e.VerifiedDate?new Date(e.VerifiedDate).toLocaleDateString(`en-AU`):``,d=[n?.product_type,n?.subcategory].filter(Boolean).join(` - `),f=[r?.Range,r?.Group,r?.SubGroup||r?.Subgroup].filter(Boolean).join(` / `),p=this._pending.find(n=>n.Status===`Pending-User`&&n.competitor===t&&n.CompetitorSKU===e.CompetitorSKU&&n.VerifiedBy===e.VerifiedBy&&(n.MatchReason||``).includes(`Alternative to`)),m=p?this._seimaByCode[p.SeimaSKU]:null,h=m?.OrderCode||p?.SeimaSKU||``,g=h?String(parseInt(h,10)):``;return`
      <div class="ap-card ap-card-dispute" id="ap-card-${this._cardId(e)}">
        <div class="ap-card-type ap-type-dispute">&#9873; Dispute</div>
        <div class="ap-card-match">
          <div class="ap-card-product">
            <img class="ap-thumb ap-thumb-comp" src="${this._esc(i||`assets/no-image.png`)}" alt=""
                 data-competitor="${this._esc(t)}" data-comp-sku="${this._esc(e.CompetitorSKU)}"
                 onerror="this.src='assets/no-image.png'" title="Click to view details">
            <div class="ap-card-product-info">
              <div class="ap-card-product-code">${this._esc(t)}: ${this._esc(e.CompetitorSKU)}</div>
              <div class="ap-card-product-name">${this._esc(n?.product_name||n?.collection||``)}</div>
              ${d?`<div class="ap-card-product-type">${this._esc(d)}</div>`:``}
            </div>
          </div>
          <span class="ap-card-arrow ap-arrow-dispute">&#8800;</span>
          <div class="ap-card-product">
            <img class="ap-thumb ap-thumb-seima" src="${this._esc(a||`assets/no-image.png`)}" alt=""
                 data-seima-sku="${this._esc(s)}"
                 onerror="this.src='assets/no-image.png'" title="Click to view details">
            <div class="ap-card-product-info">
              <div class="ap-card-product-code">${this._esc(c)}</div>
              <div class="ap-card-product-name">${this._esc(o)}</div>
              ${f?`<div class="ap-card-product-type">${this._esc(f)}</div>`:``}
              <span class="ap-badge-verified">Currently Verified</span>
            </div>
          </div>
        </div>
        <div class="ap-card-meta">Disputed by: ${this._esc(e.VerifiedBy||`Unknown`)} | ${u}</div>
        ${l?`<div class="ap-card-reason ap-card-reason-dispute">"${this._esc(l)}"</div>`:``}
        ${p?`
          <div class="ap-card-alt">
            <img class="ap-thumb ap-thumb-seima" src="${this._esc(m?.Image_URL||m?.imageUrl||`assets/no-image.png`)}" alt=""
                 data-seima-sku="${this._esc(h)}"
                 onerror="this.src='assets/no-image.png'" title="Click to view details"
                 style="width:36px;height:36px;object-fit:contain;border-radius:4px;cursor:pointer;">
            <span>Suggested alternative: <strong>${this._esc(g)}</strong> - ${this._esc(m?.Description||m?.ProductName||``)}</span>
            <span class="ap-card-alt-badge">Suggested</span>
          </div>
        `:``}
        <div class="ap-card-actions">
          <button class="ap-btn ap-btn-approve" data-action="uphold" data-competitor="${this._esc(t)}" data-csku="${this._esc(e.CompetitorSKU)}" data-ssku="${this._esc(e.SeimaSKU)}" ${p?`data-alt-ssku="${this._esc(p.SeimaSKU)}"`:``}>Uphold Dispute</button>
          ${p?`<button class="ap-btn ap-btn-approve" data-action="approve-alt" data-competitor="${this._esc(t)}" data-csku="${this._esc(e.CompetitorSKU)}" data-ssku="${this._esc(p.SeimaSKU)}" data-disputed-ssku="${this._esc(e.SeimaSKU)}">Approve Alternative</button>`:``}
          <button class="ap-btn ap-btn-dismiss" data-action="dismiss" data-competitor="${this._esc(t)}" data-csku="${this._esc(e.CompetitorSKU)}" data-ssku="${this._esc(e.SeimaSKU)}">Dismiss</button>
        </div>
      </div>
    `}_renderConflictGroup(e,t,n){let r=this._findCompetitorProduct(n,e),i=r?.image_url||``,a=[r?.product_type,r?.subcategory].filter(Boolean).join(` - `),o=`<div class="ap-card ap-card-conflict">`;o+=`<div class="ap-card-type ap-type-conflict">&#9888; Conflicting Suggestions</div>`,o+=`
      <div class="ap-card-product" style="margin-bottom:0.75rem;">
        <img class="ap-thumb ap-thumb-comp" src="${this._esc(i||`assets/no-image.png`)}" alt=""
             data-competitor="${this._esc(n)}" data-comp-sku="${this._esc(e)}"
             onerror="this.src='assets/no-image.png'" title="Click to view details">
        <div class="ap-card-product-info">
          <div class="ap-card-product-code">${this._esc(n)}: ${this._esc(e)}</div>
          <div class="ap-card-product-name">${this._esc(r?.product_name||r?.collection||``)}</div>
          ${a?`<div class="ap-card-product-type">${this._esc(a)}</div>`:``}
        </div>
      </div>
    `;for(let e of t){let t=this._seimaByCode[e.SeimaSKU],r=t?.Image_URL||t?.imageUrl||``,i=t?.Description||t?.ProductName||e.SeimaSKU,a=t?.OrderCode||e.SeimaSKU,s=a?String(parseInt(a,10)):e.SeimaSKU,c=[t?.Range,t?.Group].filter(Boolean).join(` / `),l=(e.MatchReason||``).replace(/^Alternative to [^:]+:\s*/i,``),u=e.VerifiedDate?new Date(e.VerifiedDate).toLocaleDateString(`en-AU`):``;o+=`
        <div style="display:flex;align-items:center;gap:0.5rem;padding:0.5rem;border:1px solid #e5e7eb;border-radius:6px;margin-bottom:0.4rem;background:#fff;">
          <img class="ap-thumb ap-thumb-seima" src="${this._esc(r||`assets/no-image.png`)}" alt=""
               data-seima-sku="${this._esc(a)}"
               onerror="this.src='assets/no-image.png'" title="Click to view details"
               style="width:40px;height:40px;object-fit:contain;border-radius:4px;cursor:pointer;border:1px solid #e5e7eb;">
          <div style="flex:1;font-size:0.85rem;">
            <strong>${this._esc(s)}</strong> - ${this._esc(i)}
            ${c?`<div style="font-size:0.75rem;color:#6b7280;">${this._esc(c)}</div>`:``}
            <div style="font-size:0.75rem;color:#9ca3af;">by ${this._esc(e.VerifiedBy||``)} | ${u}</div>
            ${l?`<div style="font-size:0.75rem;color:#6b7280;font-style:italic;">${this._esc(l)}</div>`:``}
          </div>
          <div style="display:flex;gap:0.3rem;">
            <button class="ap-btn ap-btn-approve" data-action="approve" data-competitor="${this._esc(n)}" data-csku="${this._esc(e.CompetitorSKU)}" data-ssku="${this._esc(e.SeimaSKU)}">✓</button>
            <button class="ap-btn ap-btn-reject" data-action="reject" data-competitor="${this._esc(n)}" data-csku="${this._esc(e.CompetitorSKU)}" data-ssku="${this._esc(e.SeimaSKU)}">✗</button>
          </div>
        </div>
      `}return o+=`</div>`,o}_bindActions(e){e.querySelectorAll(`.ap-tab`).forEach(e=>{e.addEventListener(`click`,()=>{this._filter=e.dataset.filter,this._render()})});let t=e.querySelector(`#ap-competitor-filter`);t?.addEventListener(`change`,()=>{this._competitorFilter=t.value,this._render()}),e.querySelectorAll(`[data-action]`).forEach(e=>{e.addEventListener(`click`,()=>this._handleAction(e))}),e.querySelectorAll(`.ap-thumb`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.closest(`.ap-card`)||e.closest(`[style]`),n=t?.querySelector(`.ap-thumb-comp`),r=t?.querySelector(`.ap-thumb-seima`),i=n?.dataset.competitor||``,a=n?.dataset.compSku||``,o=r?.dataset.seimaSku||``;i&&a&&o&&this._openComparisonModal(i,a,o)})})}async _handleAction(e){let t=e.dataset.action,n=String(e.dataset.competitor||``).trim(),i=String(e.dataset.csku||``).trim(),a=String(e.dataset.ssku||``).trim();e.disabled=!0,e.textContent=`...`;try{if(!n||!i||!a)throw Error(`Missing competitor, competitor SKU, or Seima SKU on this button. Check Matches sheet headers (CompetitorSKU / SeimaSKU).`);if(t===`approve`)await r.resolvePendingVerification(n,i,a,`approve`);else if(t===`reject`)await r.resolvePendingVerification(n,i,a,`reject`);else if(t===`dismiss`)await r.resolvePendingVerification(n,i,a,`dismiss`);else if(t===`uphold`)e.dataset.altSsku,await r.resolvePendingVerification(n,i,a,`approve`,{upholdDispute:!0,disputedSeimaSKU:a});else if(t===`approve-alt`){let t=String(e.dataset.disputedSsku||``).trim();if(!t)throw Error(`Missing disputed Seima SKU.`);await r.resolvePendingVerification(n,i,a,`approve`,{upholdDispute:!0,disputedSeimaSKU:t}),await r.resolvePendingVerification(n,i,t,`dismiss`)}this._pending=this._pending.filter(e=>!(e.competitor===n&&e.CompetitorSKU===i&&e.SeimaSKU===a)),this._render()}catch(t){console.error(`AdminPending: action failed`,t),e.disabled=!1,e.textContent=`Error`}}_getFilteredItems(){let e=this._pending;return this._filter===`suggestions`&&(e=e.filter(e=>e.Status===`Pending-User`)),this._filter===`disputes`&&(e=e.filter(e=>e.Status===`Pending-Dispute`)),this._competitorFilter&&(e=e.filter(e=>e.competitor===this._competitorFilter)),e}_groupByCompetitor(e){let t={};for(let n of e)t[n.competitor]||(t[n.competitor]=[]),t[n.competitor].push(n);return t}_findCompetitorProduct(e,t){return(r.productsCache[e]||[]).find(e=>String(e.product_code)===String(t))}_extractCompetitorDimensions(e){if(!e)return``;if(e.dimensions_mm)return e.dimensions_mm;let t=0,n=0,r=0;for(let i of Object.keys(e)){let a=i.toLowerCase();a.includes(`width`)&&!t&&(t=parseFloat(e[i])||0),a.includes(`depth`)&&!n&&(n=parseFloat(e[i])||0),a.includes(`height`)&&!r&&(r=parseFloat(e[i])||0)}if(t>0||n>0||r>0){let e=[];return t&&e.push(t),n&&e.push(n),r&&e.push(r),e.join(` × `)+`mm`}return``}_cardId(e){return`${e.competitor}-${e.CompetitorSKU}-${e.SeimaSKU}`.replace(/[^a-zA-Z0-9-]/g,`_`)}_openComparisonModal(t,n,r){let i=this._findCompetitorProduct(t,n),a=this._seimaByCode[r],o=document.querySelector(`.ap-compare-overlay`);o&&o.remove();let s=e=>this._esc(e||``),c=i?.image_url||`../assets/no-image.png`,l=i?.product_name||i?.collection||n,u=this._extractCompetitorDimensions(i),d=i?[[`Product Code`,i.product_code],[`Brand`,t],[`Category`,[i.product_type,i.subcategory].filter(Boolean).join(` / `)],[`Collection`,i.collection],[`Finish`,i.finish||i.colour],[`Dimensions`,u],[`Material`,i.material],[`Style`,i.style],[`WELS`,i.wels_rating],[`Price`,i.rrp_ex_gst?`$${Number(i.rrp_ex_gst).toLocaleString(`en-AU`,{minimumFractionDigits:2})} ex GST`:``],[`Description`,i.description||i.product_description]]:[[`Product Code`,n],[`Brand`,t]],f=a?.Image_URL||a?.imageUrl||`../assets/no-image.png`,p=a?.OrderCode||r,m=p?String(parseInt(p,10)):r,h=a?.Description||a?.ProductName||a?.[`Product Name`]||r,g=a?.DimX||a?.[`X Dimension (mm)`]||``,_=a?.DimY||a?.[`Y Dimension (mm)`]||``,v=a?.DimZ||a?.[`Z Dimension (mm)`]||``,y=g&&g!==`0`?`${g} × ${_||0} × ${v||0}mm`:``,b=a?.RRP_EX||a?.[`RRP EX GST`]||``,x=a?[[`Order Code`,m],[`Range`,a.Range],[`Group`,a.Group],[`Type`,a.SubGroup||a.Subgroup||a[`Sub Group`]],[`Dimensions`,y],[`WELS`,a.WELS_STAR||a[`WELS Star`]?`${a.WELS_STAR||a[`WELS Star`]} star`:``],[`Price`,b?`$${parseFloat(b).toLocaleString(`en-AU`,{minimumFractionDigits:2})} ex GST`:``],[`Description`,a[`Long Description`]||a.LongDescription]]:[[`Order Code`,r]],S=e=>e.filter(([,e])=>e&&String(e).trim()).map(([e,t])=>`<tr><td style="font-weight:500;color:#6b7280;padding:3px 8px 3px 0;white-space:nowrap;font-size:0.8rem;">${s(e)}</td><td style="padding:3px 0;font-size:0.8rem;">${s(t)}</td></tr>`).join(``),C=a?.Website_URL||a?.[`Website URL`]||``,w=i?.product_url||``,T=document.createElement(`div`);T.className=`ap-compare-overlay`,T.innerHTML=`
      <div class="ap-compare-modal">
        <div class="ap-compare-header">
          <h3>Product Comparison</h3>
          <button class="ap-compare-close">&times;</button>
        </div>
        <div class="ap-compare-body">
          <div class="ap-compare-col">
            <div class="ap-compare-label ap-compare-label-comp">Competitor</div>
            <img src="${s(c)}" alt="" onerror="this.src='../assets/no-image.png'">
            <h4>${s(t)}: ${s(n)}</h4>
            <p class="ap-compare-name">${s(l)}</p>
            <table class="ap-compare-specs">${S(d)}</table>
            ${e.httpUrl(w)?`<a href="${s(e.httpUrl(w))}" target="_blank" rel="noopener" class="ap-compare-link">View on Website &rarr;</a>`:``}
          </div>
          <div class="ap-compare-divider"></div>
          <div class="ap-compare-col">
            <div class="ap-compare-label ap-compare-label-seima">Seima</div>
            <img src="${s(f)}" alt="" onerror="this.src='../assets/no-image.png'">
            <h4>${s(m)}</h4>
            <p class="ap-compare-name">${s(h)}</p>
            <table class="ap-compare-specs">${S(x)}</table>
            ${e.httpUrl(C)?`<a href="${s(e.httpUrl(C))}" target="_blank" rel="noopener" class="ap-compare-link">View on Website &rarr;</a>`:``}
          </div>
        </div>
      </div>
    `;let E=()=>{T.remove(),document.removeEventListener(`keydown`,D)};T.addEventListener(`click`,e=>{e.target===T&&E()}),T.querySelector(`.ap-compare-close`).addEventListener(`click`,E);let D=e=>{e.key===`Escape`&&E()};document.addEventListener(`keydown`,D),document.body.appendChild(T)}_esc(e){let t=document.createElement(`div`);return t.textContent=e||``,t.innerHTML}}().init();