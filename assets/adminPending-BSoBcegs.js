const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-BJ3nAvPT.js","assets/auth-ui-Duo2mTTr.js","assets/auth-ui-in-MCC0p.css","assets/product-search-CeYNHdfP.js","assets/vendor-fuse-Ch1WBRTM.js","assets/product-matching-CsGMOakR.js","assets/pdf-layouts-DG64mula.js","assets/data-layer-Bzo1l0w6.js","assets/product-synonyms-CeNdtqLO.js","assets/vendor-idb-DwnyWBFG.js"])))=>i.map(i=>d[i]);
import"./auth-ui-Duo2mTTr.js";import{_ as K,C as I}from"./config-Dggw6e3l.js";import{c as u}from"./competitor-service-m5DFbsRJ.js";class R{constructor(){this._pending=[],this._filter="all",this._competitorFilter="",this._seimaByCode={}}async init(){const{authService:t}=await K(async()=>{const{authService:e}=await import("./index-BJ3nAvPT.js");return{authService:e}},__vite__mapDeps([0,1,2,3,4,5,6])),i=t.getCurrentUser();if(!(!!i&&t.isStaffMode())){document.getElementById("ap-content").style.display="none",document.getElementById("ap-forbidden").style.display="";return}u.isEnabled()||u.configure(I.CROSSHAIR,i.email),await this._loadSeimaData(),await u.preload().catch(()=>{}),await this._loadPending(),this._render()}async _loadSeimaData(){try{const{dataLayer:t}=await K(async()=>{const{dataLayer:a}=await import("./data-layer-Bzo1l0w6.js").then(e=>e.a);return{dataLayer:a}},__vite__mapDeps([7,1,2,3,4,8,9]));t.isLoaded||await t.init();const i=t.products||[];for(const a of i){const e=String(a.OrderCode||a["Order Code"]||a.Code||"").trim();e&&(this._seimaByCode[e]=a)}}catch(t){console.error("AdminPending: failed to load Seima catalog",t)}}async _loadPending(){try{const t=await u.getPendingVerifications();this._pending=t.pending||[]}catch(t){console.error("AdminPending: failed to load pending",t),this._pending=[]}}_render(){const t=document.getElementById("ap-content"),i=this._getFilteredItems(),a=this._pending.filter(o=>o.Status==="Pending-User"),e=this._pending.filter(o=>o.Status==="Pending-Dispute"),s=[...new Set(this._pending.map(o=>o.competitor))];let n="";if(n+=`
      <div class="ap-stats">
        <div class="ap-stat"><span class="ap-stat-dot ap-stat-dot-amber"></span> Total Pending: <span class="ap-stat-count">${this._pending.length}</span></div>
        <div class="ap-stat"><span class="ap-stat-dot ap-stat-dot-amber"></span> Suggestions: <span class="ap-stat-count">${a.length}</span></div>
        <div class="ap-stat"><span class="ap-stat-dot ap-stat-dot-red"></span> Disputes: <span class="ap-stat-count">${e.length}</span></div>
        <div class="ap-stat"><span class="ap-stat-dot ap-stat-dot-gray"></span> Competitors: <span class="ap-stat-count">${s.length}</span></div>
      </div>
    `,n+=`
      <div class="ap-filters">
        <button class="ap-tab ${this._filter==="all"?"active":""}" data-filter="all">All (${this._pending.length})</button>
        <button class="ap-tab ${this._filter==="suggestions"?"active":""}" data-filter="suggestions">Suggestions (${a.length})</button>
        <button class="ap-tab ${this._filter==="disputes"?"active":""}" data-filter="disputes">Disputes (${e.length})</button>
        <select class="ap-select" id="ap-competitor-filter">
          <option value="">Competitor: All</option>
          ${s.map(o=>`<option value="${this._esc(o)}" ${this._competitorFilter===o?"selected":""}>${this._esc(o)}</option>`).join("")}
        </select>
      </div>
    `,i.length===0)n+='<div class="ap-empty">No pending verifications to review.</div>';else{const o=this._groupByCompetitor(i);for(const[c,r]of Object.entries(o)){n+=`<div class="ap-group-header">${this._esc(c)} <span class="ap-group-count">${r.length} pending</span></div>`;const g={};for(const v of r){const d=v.CompetitorSKU;g[d]||(g[d]=[]),g[d].push(v)}for(const[v,d]of Object.entries(g)){const h=d.filter(m=>m.Status==="Pending-User"),l=d.filter(m=>m.Status==="Pending-Dispute"),_=[...new Set(h.map(m=>m.SeimaSKU))].length>1;for(const m of l)n+=this._renderDisputeCard(m,c);if(_)n+=this._renderConflictGroup(v,h,c);else for(const m of h)n+=this._renderSuggestionCard(m,c)}}}t.innerHTML=n,this._bindActions(t)}_renderSuggestionCard(t,i){const a=this._findCompetitorProduct(i,t.CompetitorSKU),e=this._seimaByCode[t.SeimaSKU],s=(a==null?void 0:a.image_url)||"",n=(e==null?void 0:e.Image_URL)||(e==null?void 0:e.imageUrl)||"",o=(e==null?void 0:e.Description)||(e==null?void 0:e.ProductName)||t.SeimaSKU,c=(e==null?void 0:e.OrderCode)||t.SeimaSKU,r=c?String(parseInt(c,10)):t.SeimaSKU,g=(t.MatchReason||"").replace(/^Alternative to [^:]+:\s*/i,""),v=t.VerifiedDate?new Date(t.VerifiedDate).toLocaleDateString("en-AU"):"",d=[a==null?void 0:a.product_type,a==null?void 0:a.subcategory].filter(Boolean).join(" - "),h=[e==null?void 0:e.Range,e==null?void 0:e.Group,(e==null?void 0:e.SubGroup)||(e==null?void 0:e.Subgroup)].filter(Boolean).join(" / ");return`
      <div class="ap-card ap-card-suggestion" id="ap-card-${this._cardId(t)}">
        <div class="ap-card-type ap-type-suggestion">New Suggestion</div>
        <div class="ap-card-match">
          <div class="ap-card-product">
            <img class="ap-thumb ap-thumb-comp" src="${this._esc(s||"assets/no-image.png")}" alt=""
                 data-competitor="${this._esc(i)}" data-comp-sku="${this._esc(t.CompetitorSKU)}"
                 onerror="this.src='assets/no-image.png'" title="Click to view details">
            <div class="ap-card-product-info">
              <div class="ap-card-product-code">${this._esc(i)}: ${this._esc(t.CompetitorSKU)}</div>
              <div class="ap-card-product-name">${this._esc((a==null?void 0:a.product_name)||(a==null?void 0:a.collection)||"")}</div>
              ${d?`<div class="ap-card-product-type">${this._esc(d)}</div>`:""}
            </div>
          </div>
          <span class="ap-card-arrow">→</span>
          <div class="ap-card-product">
            <img class="ap-thumb ap-thumb-seima" src="${this._esc(n||"assets/no-image.png")}" alt=""
                 data-seima-sku="${this._esc(c)}"
                 onerror="this.src='assets/no-image.png'" title="Click to view details">
            <div class="ap-card-product-info">
              <div class="ap-card-product-code">${this._esc(r)}</div>
              <div class="ap-card-product-name">${this._esc(o)}</div>
              ${h?`<div class="ap-card-product-type">${this._esc(h)}</div>`:""}
            </div>
          </div>
        </div>
        <div class="ap-card-meta">Submitted by: ${this._esc(t.VerifiedBy||"Unknown")} | ${v}</div>
        ${g?`<div class="ap-card-reason">"${this._esc(g)}"</div>`:""}
        <div class="ap-card-actions">
          <button class="ap-btn ap-btn-approve" data-action="approve" data-competitor="${this._esc(i)}" data-csku="${this._esc(t.CompetitorSKU)}" data-ssku="${this._esc(t.SeimaSKU)}">✓ Approve</button>
          <button class="ap-btn ap-btn-reject" data-action="reject" data-competitor="${this._esc(i)}" data-csku="${this._esc(t.CompetitorSKU)}" data-ssku="${this._esc(t.SeimaSKU)}">✗ Reject</button>
        </div>
      </div>
    `}_renderDisputeCard(t,i){const a=this._findCompetitorProduct(i,t.CompetitorSKU),e=this._seimaByCode[t.SeimaSKU],s=(a==null?void 0:a.image_url)||"",n=(e==null?void 0:e.Image_URL)||(e==null?void 0:e.imageUrl)||"",o=(e==null?void 0:e.Description)||(e==null?void 0:e.ProductName)||t.SeimaSKU,c=(e==null?void 0:e.OrderCode)||t.SeimaSKU,r=c?String(parseInt(c,10)):t.SeimaSKU,g=(t.MatchReason||"").replace(/^DISPUTE:\s*/i,""),v=t.VerifiedDate?new Date(t.VerifiedDate).toLocaleDateString("en-AU"):"",d=[a==null?void 0:a.product_type,a==null?void 0:a.subcategory].filter(Boolean).join(" - "),h=[e==null?void 0:e.Range,e==null?void 0:e.Group,(e==null?void 0:e.SubGroup)||(e==null?void 0:e.Subgroup)].filter(Boolean).join(" / "),l=this._pending.find(S=>S.Status==="Pending-User"&&S.competitor===i&&S.CompetitorSKU===t.CompetitorSKU&&S.VerifiedBy===t.VerifiedBy&&(S.MatchReason||"").includes("Alternative to")),p=l?this._seimaByCode[l.SeimaSKU]:null,_=(p==null?void 0:p.OrderCode)||(l==null?void 0:l.SeimaSKU)||"",m=_?String(parseInt(_,10)):"";return`
      <div class="ap-card ap-card-dispute" id="ap-card-${this._cardId(t)}">
        <div class="ap-card-type ap-type-dispute">&#9873; Dispute</div>
        <div class="ap-card-match">
          <div class="ap-card-product">
            <img class="ap-thumb ap-thumb-comp" src="${this._esc(s||"assets/no-image.png")}" alt=""
                 data-competitor="${this._esc(i)}" data-comp-sku="${this._esc(t.CompetitorSKU)}"
                 onerror="this.src='assets/no-image.png'" title="Click to view details">
            <div class="ap-card-product-info">
              <div class="ap-card-product-code">${this._esc(i)}: ${this._esc(t.CompetitorSKU)}</div>
              <div class="ap-card-product-name">${this._esc((a==null?void 0:a.product_name)||(a==null?void 0:a.collection)||"")}</div>
              ${d?`<div class="ap-card-product-type">${this._esc(d)}</div>`:""}
            </div>
          </div>
          <span class="ap-card-arrow ap-arrow-dispute">&#8800;</span>
          <div class="ap-card-product">
            <img class="ap-thumb ap-thumb-seima" src="${this._esc(n||"assets/no-image.png")}" alt=""
                 data-seima-sku="${this._esc(c)}"
                 onerror="this.src='assets/no-image.png'" title="Click to view details">
            <div class="ap-card-product-info">
              <div class="ap-card-product-code">${this._esc(r)}</div>
              <div class="ap-card-product-name">${this._esc(o)}</div>
              ${h?`<div class="ap-card-product-type">${this._esc(h)}</div>`:""}
              <span class="ap-badge-verified">Currently Verified</span>
            </div>
          </div>
        </div>
        <div class="ap-card-meta">Disputed by: ${this._esc(t.VerifiedBy||"Unknown")} | ${v}</div>
        ${g?`<div class="ap-card-reason ap-card-reason-dispute">"${this._esc(g)}"</div>`:""}
        ${l?`
          <div class="ap-card-alt">
            <img class="ap-thumb ap-thumb-seima" src="${this._esc((p==null?void 0:p.Image_URL)||(p==null?void 0:p.imageUrl)||"assets/no-image.png")}" alt=""
                 data-seima-sku="${this._esc(_)}"
                 onerror="this.src='assets/no-image.png'" title="Click to view details"
                 style="width:36px;height:36px;object-fit:contain;border-radius:4px;cursor:pointer;">
            <span>Suggested alternative: <strong>${this._esc(m)}</strong> - ${this._esc((p==null?void 0:p.Description)||(p==null?void 0:p.ProductName)||"")}</span>
            <span class="ap-card-alt-badge">Suggested</span>
          </div>
        `:""}
        <div class="ap-card-actions">
          <button class="ap-btn ap-btn-approve" data-action="uphold" data-competitor="${this._esc(i)}" data-csku="${this._esc(t.CompetitorSKU)}" data-ssku="${this._esc(t.SeimaSKU)}" ${l?`data-alt-ssku="${this._esc(l.SeimaSKU)}"`:""}>Uphold Dispute</button>
          ${l?`<button class="ap-btn ap-btn-approve" data-action="approve-alt" data-competitor="${this._esc(i)}" data-csku="${this._esc(t.CompetitorSKU)}" data-ssku="${this._esc(l.SeimaSKU)}" data-disputed-ssku="${this._esc(t.SeimaSKU)}">Approve Alternative</button>`:""}
          <button class="ap-btn ap-btn-dismiss" data-action="dismiss" data-competitor="${this._esc(i)}" data-csku="${this._esc(t.CompetitorSKU)}" data-ssku="${this._esc(t.SeimaSKU)}">Dismiss</button>
        </div>
      </div>
    `}_renderConflictGroup(t,i,a){const e=this._findCompetitorProduct(a,t),s=(e==null?void 0:e.image_url)||"",n=[e==null?void 0:e.product_type,e==null?void 0:e.subcategory].filter(Boolean).join(" - ");let o='<div class="ap-card ap-card-conflict">';o+='<div class="ap-card-type ap-type-conflict">&#9888; Conflicting Suggestions</div>',o+=`
      <div class="ap-card-product" style="margin-bottom:0.75rem;">
        <img class="ap-thumb ap-thumb-comp" src="${this._esc(s||"assets/no-image.png")}" alt=""
             data-competitor="${this._esc(a)}" data-comp-sku="${this._esc(t)}"
             onerror="this.src='assets/no-image.png'" title="Click to view details">
        <div class="ap-card-product-info">
          <div class="ap-card-product-code">${this._esc(a)}: ${this._esc(t)}</div>
          <div class="ap-card-product-name">${this._esc((e==null?void 0:e.product_name)||(e==null?void 0:e.collection)||"")}</div>
          ${n?`<div class="ap-card-product-type">${this._esc(n)}</div>`:""}
        </div>
      </div>
    `;for(const c of i){const r=this._seimaByCode[c.SeimaSKU],g=(r==null?void 0:r.Image_URL)||(r==null?void 0:r.imageUrl)||"",v=(r==null?void 0:r.Description)||(r==null?void 0:r.ProductName)||c.SeimaSKU,d=(r==null?void 0:r.OrderCode)||c.SeimaSKU,h=d?String(parseInt(d,10)):c.SeimaSKU,l=[r==null?void 0:r.Range,r==null?void 0:r.Group].filter(Boolean).join(" / "),p=(c.MatchReason||"").replace(/^Alternative to [^:]+:\s*/i,""),_=c.VerifiedDate?new Date(c.VerifiedDate).toLocaleDateString("en-AU"):"";o+=`
        <div style="display:flex;align-items:center;gap:0.5rem;padding:0.5rem;border:1px solid #e5e7eb;border-radius:6px;margin-bottom:0.4rem;background:#fff;">
          <img class="ap-thumb ap-thumb-seima" src="${this._esc(g||"assets/no-image.png")}" alt=""
               data-seima-sku="${this._esc(d)}"
               onerror="this.src='assets/no-image.png'" title="Click to view details"
               style="width:40px;height:40px;object-fit:contain;border-radius:4px;cursor:pointer;border:1px solid #e5e7eb;">
          <div style="flex:1;font-size:0.85rem;">
            <strong>${this._esc(h)}</strong> - ${this._esc(v)}
            ${l?`<div style="font-size:0.75rem;color:#6b7280;">${this._esc(l)}</div>`:""}
            <div style="font-size:0.75rem;color:#9ca3af;">by ${this._esc(c.VerifiedBy||"")} | ${_}</div>
            ${p?`<div style="font-size:0.75rem;color:#6b7280;font-style:italic;">${this._esc(p)}</div>`:""}
          </div>
          <div style="display:flex;gap:0.3rem;">
            <button class="ap-btn ap-btn-approve" data-action="approve" data-competitor="${this._esc(a)}" data-csku="${this._esc(c.CompetitorSKU)}" data-ssku="${this._esc(c.SeimaSKU)}">✓</button>
            <button class="ap-btn ap-btn-reject" data-action="reject" data-competitor="${this._esc(a)}" data-csku="${this._esc(c.CompetitorSKU)}" data-ssku="${this._esc(c.SeimaSKU)}">✗</button>
          </div>
        </div>
      `}return o+="</div>",o}_bindActions(t){t.querySelectorAll(".ap-tab").forEach(a=>{a.addEventListener("click",()=>{this._filter=a.dataset.filter,this._render()})});const i=t.querySelector("#ap-competitor-filter");i==null||i.addEventListener("change",()=>{this._competitorFilter=i.value,this._render()}),t.querySelectorAll("[data-action]").forEach(a=>{a.addEventListener("click",()=>this._handleAction(a))}),t.querySelectorAll(".ap-thumb").forEach(a=>{a.addEventListener("click",()=>{const e=a.closest(".ap-card")||a.closest("[style]"),s=e==null?void 0:e.querySelector(".ap-thumb-comp"),n=e==null?void 0:e.querySelector(".ap-thumb-seima"),o=(s==null?void 0:s.dataset.competitor)||"",c=(s==null?void 0:s.dataset.compSku)||"",r=(n==null?void 0:n.dataset.seimaSku)||"";o&&c&&r&&this._openComparisonModal(o,c,r)})})}async _handleAction(t){const i=t.dataset.action,a=t.dataset.competitor,e=t.dataset.csku,s=t.dataset.ssku;t.disabled=!0,t.textContent="...";try{if(i==="approve")await u.resolvePendingVerification(a,e,s,"approve");else if(i==="reject")await u.resolvePendingVerification(a,e,s,"reject");else if(i==="dismiss")await u.resolvePendingVerification(a,e,s,"dismiss");else if(i==="uphold"){const n=t.dataset.altSsku;await u.resolvePendingVerification(a,e,s,"approve",{upholdDispute:!0,disputedSeimaSKU:s})}else if(i==="approve-alt"){const n=t.dataset.disputedSsku;await u.resolvePendingVerification(a,e,s,"approve",{upholdDispute:!0,disputedSeimaSKU:n}),await u.resolvePendingVerification(a,e,n,"dismiss")}this._pending=this._pending.filter(n=>!(n.competitor===a&&n.CompetitorSKU===e&&n.SeimaSKU===s)),this._render()}catch(n){console.error("AdminPending: action failed",n),t.disabled=!1,t.textContent="Error"}}_getFilteredItems(){let t=this._pending;return this._filter==="suggestions"&&(t=t.filter(i=>i.Status==="Pending-User")),this._filter==="disputes"&&(t=t.filter(i=>i.Status==="Pending-Dispute")),this._competitorFilter&&(t=t.filter(i=>i.competitor===this._competitorFilter)),t}_groupByCompetitor(t){const i={};for(const a of t)i[a.competitor]||(i[a.competitor]=[]),i[a.competitor].push(a);return i}_findCompetitorProduct(t,i){return(u.productsCache[t]||[]).find(e=>String(e.product_code)===String(i))}_extractCompetitorDimensions(t){if(!t)return"";if(t.dimensions_mm)return t.dimensions_mm;let i=0,a=0,e=0;for(const s of Object.keys(t)){const n=s.toLowerCase();n.includes("width")&&!i&&(i=parseFloat(t[s])||0),n.includes("depth")&&!a&&(a=parseFloat(t[s])||0),n.includes("height")&&!e&&(e=parseFloat(t[s])||0)}if(i>0||a>0||e>0){const s=[];return i&&s.push(i),a&&s.push(a),e&&s.push(e),s.join(" × ")+"mm"}return""}_cardId(t){return`${t.competitor}-${t.CompetitorSKU}-${t.SeimaSKU}`.replace(/[^a-zA-Z0-9-]/g,"_")}_openComparisonModal(t,i,a){const e=this._findCompetitorProduct(t,i),s=this._seimaByCode[a],n=document.querySelector(".ap-compare-overlay");n&&n.remove();const o=$=>this._esc($||""),c=(e==null?void 0:e.image_url)||"../assets/no-image.png",r=(e==null?void 0:e.product_name)||(e==null?void 0:e.collection)||i,g=this._extractCompetitorDimensions(e),v=e?[["Product Code",e.product_code],["Brand",t],["Category",[e.product_type,e.subcategory].filter(Boolean).join(" / ")],["Collection",e.collection],["Finish",e.finish||e.colour],["Dimensions",g],["Material",e.material],["Style",e.style],["WELS",e.wels_rating],["Price",e.rrp_ex_gst?`$${Number(e.rrp_ex_gst).toLocaleString("en-AU",{minimumFractionDigits:2})} ex GST`:""],["Description",e.description||e.product_description]]:[["Product Code",i],["Brand",t]],d=(s==null?void 0:s.Image_URL)||(s==null?void 0:s.imageUrl)||"../assets/no-image.png",h=(s==null?void 0:s.OrderCode)||a,l=h?String(parseInt(h,10)):a,p=(s==null?void 0:s.Description)||(s==null?void 0:s.ProductName)||(s==null?void 0:s["Product Name"])||a,_=(s==null?void 0:s.DimX)||(s==null?void 0:s["X Dimension (mm)"])||"",m=(s==null?void 0:s.DimY)||(s==null?void 0:s["Y Dimension (mm)"])||"",S=(s==null?void 0:s.DimZ)||(s==null?void 0:s["Z Dimension (mm)"])||"",L=_&&_!=="0"?`${_} × ${m||0} × ${S||0}mm`:"",C=(s==null?void 0:s.RRP_EX)||(s==null?void 0:s["RRP EX GST"])||"",E=s?[["Order Code",l],["Range",s.Range],["Group",s.Group],["Type",s.SubGroup||s.Subgroup||s["Sub Group"]],["Dimensions",L],["WELS",s.WELS_STAR||s["WELS Star"]?`${s.WELS_STAR||s["WELS Star"]} star`:""],["Price",C?`$${parseFloat(C).toLocaleString("en-AU",{minimumFractionDigits:2})} ex GST`:""],["Description",s["Long Description"]||s.LongDescription]]:[["Order Code",a]],U=$=>$.filter(([,b])=>b&&String(b).trim()).map(([b,A])=>`<tr><td style="font-weight:500;color:#6b7280;padding:3px 8px 3px 0;white-space:nowrap;font-size:0.8rem;">${o(b)}</td><td style="padding:3px 0;font-size:0.8rem;">${o(A)}</td></tr>`).join(""),k=(s==null?void 0:s.Website_URL)||(s==null?void 0:s["Website URL"])||"",D=(e==null?void 0:e.product_url)||"",f=document.createElement("div");f.className="ap-compare-overlay",f.innerHTML=`
      <div class="ap-compare-modal">
        <div class="ap-compare-header">
          <h3>Product Comparison</h3>
          <button class="ap-compare-close">&times;</button>
        </div>
        <div class="ap-compare-body">
          <div class="ap-compare-col">
            <div class="ap-compare-label ap-compare-label-comp">Competitor</div>
            <img src="${o(c)}" alt="" onerror="this.src='../assets/no-image.png'">
            <h4>${o(t)}: ${o(i)}</h4>
            <p class="ap-compare-name">${o(r)}</p>
            <table class="ap-compare-specs">${U(v)}</table>
            ${D?`<a href="${o(D)}" target="_blank" rel="noopener" class="ap-compare-link">View on Website &rarr;</a>`:""}
          </div>
          <div class="ap-compare-divider"></div>
          <div class="ap-compare-col">
            <div class="ap-compare-label ap-compare-label-seima">Seima</div>
            <img src="${o(d)}" alt="" onerror="this.src='../assets/no-image.png'">
            <h4>${o(l)}</h4>
            <p class="ap-compare-name">${o(p)}</p>
            <table class="ap-compare-specs">${U(E)}</table>
            ${k?`<a href="${o(k)}" target="_blank" rel="noopener" class="ap-compare-link">View on Website &rarr;</a>`:""}
          </div>
        </div>
      </div>
    `;const y=()=>{f.remove(),document.removeEventListener("keydown",w)};f.addEventListener("click",$=>{$.target===f&&y()}),f.querySelector(".ap-compare-close").addEventListener("click",y);const w=$=>{$.key==="Escape"&&y()};document.addEventListener("keydown",w),document.body.appendChild(f)}_esc(t){const i=document.createElement("div");return i.textContent=t||"",i.innerHTML}}const x=new R;x.init();
