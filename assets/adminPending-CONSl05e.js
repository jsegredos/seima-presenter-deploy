const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-w0KIoKaQ.js","assets/auth-ui-Duo2mTTr.js","assets/auth-ui-in-MCC0p.css","assets/product-search-CeYNHdfP.js","assets/vendor-fuse-Ch1WBRTM.js","assets/gst-pricing-D2t-RruI.js","assets/product-matching-BMKbQ43r.js","assets/pdf-core-BGfPcMgu.js","assets/pdf-layouts-BC7kqHBV.js","assets/data-layer-DC57zMzV.js","assets/product-synonyms-CeNdtqLO.js","assets/vendor-idb-DwnyWBFG.js"])))=>i.map(i=>d[i]);
import"./auth-ui-Duo2mTTr.js";import{_ as w,C as I}from"./config-DZMV7g4u.js";import{c as u}from"./competitor-service-Bh_TUtJB.js";import"./gst-pricing-D2t-RruI.js";class V{constructor(){this._pending=[],this._filter="all",this._competitorFilter="",this._seimaByCode={}}async init(){const{authService:t}=await w(async()=>{const{authService:e}=await import("./index-w0KIoKaQ.js");return{authService:e}},__vite__mapDeps([0,1,2,3,4,5,6,7,8])),a=t.getCurrentUser();if(!(!!a&&t.isStaffMode())){document.getElementById("ap-content").style.display="none",document.getElementById("ap-forbidden").style.display="";return}u.isEnabled()||u.configure(I.CROSSHAIR,a.email),await this._loadSeimaData(),await u.preload().catch(()=>{}),await this._loadPending(),this._render()}async _loadSeimaData(){try{const{dataLayer:t}=await w(async()=>{const{dataLayer:s}=await import("./data-layer-DC57zMzV.js").then(e=>e.a);return{dataLayer:s}},__vite__mapDeps([9,1,2,3,4,7,10,11]));t.isLoaded||await t.init();const a=t.products||[];for(const s of a){const e=String(s.OrderCode||s["Order Code"]||s.Code||"").trim();e&&(this._seimaByCode[e]=s)}}catch(t){console.error("AdminPending: failed to load Seima catalog",t)}}_normalizePendingItem(t){if(!t||typeof t!="object")return t;const a=(e,i)=>{for(const n of i){if(e[n]===void 0||e[n]===null)continue;const o=String(e[n]).trim();if(o)return o}return""},s={...t};return s.CompetitorSKU=a(t,["CompetitorSKU","Competitor SKU","CompetitorSku","competitorSKU"]),s.SeimaSKU=a(t,["SeimaSKU","Seima SKU","Seima Sku","seimaSKU","SeimaCode","Seima Code"]),s.Status||(s.Status=a(t,["Status","status"])),(s.MatchReason===void 0||s.MatchReason==="")&&(s.MatchReason=t.MatchReason??t["Match Reason"]??""),(s.VerifiedBy===void 0||s.VerifiedBy==="")&&(s.VerifiedBy=t.VerifiedBy??t["Verified By"]??""),(s.VerifiedDate===void 0||s.VerifiedDate==="")&&(s.VerifiedDate=t.VerifiedDate??t["Verified Date"]??""),s}async _loadPending(){try{const a=(await u.getPendingVerifications()).pending||[];this._pending=a.map(s=>this._normalizePendingItem(s))}catch(t){console.error("AdminPending: failed to load pending",t),this._pending=[]}}_render(){const t=document.getElementById("ap-content"),a=this._getFilteredItems(),s=this._pending.filter(o=>o.Status==="Pending-User"),e=this._pending.filter(o=>o.Status==="Pending-Dispute"),i=[...new Set(this._pending.map(o=>o.competitor))];let n="";if(n+=`
      <div class="ap-stats">
        <div class="ap-stat"><span class="ap-stat-dot ap-stat-dot-amber"></span> Total Pending: <span class="ap-stat-count">${this._pending.length}</span></div>
        <div class="ap-stat"><span class="ap-stat-dot ap-stat-dot-amber"></span> Suggestions: <span class="ap-stat-count">${s.length}</span></div>
        <div class="ap-stat"><span class="ap-stat-dot ap-stat-dot-red"></span> Disputes: <span class="ap-stat-count">${e.length}</span></div>
        <div class="ap-stat"><span class="ap-stat-dot ap-stat-dot-gray"></span> Competitors: <span class="ap-stat-count">${i.length}</span></div>
      </div>
    `,n+=`
      <div class="ap-filters">
        <button class="ap-tab ${this._filter==="all"?"active":""}" data-filter="all">All (${this._pending.length})</button>
        <button class="ap-tab ${this._filter==="suggestions"?"active":""}" data-filter="suggestions">Suggestions (${s.length})</button>
        <button class="ap-tab ${this._filter==="disputes"?"active":""}" data-filter="disputes">Disputes (${e.length})</button>
        <select class="ap-select" id="ap-competitor-filter">
          <option value="">Competitor: All</option>
          ${i.map(o=>`<option value="${this._esc(o)}" ${this._competitorFilter===o?"selected":""}>${this._esc(o)}</option>`).join("")}
        </select>
      </div>
    `,a.length===0)n+='<div class="ap-empty">No pending verifications to review.</div>';else{const o=this._groupByCompetitor(a);for(const[c,r]of Object.entries(o)){n+=`<div class="ap-group-header">${this._esc(c)} <span class="ap-group-count">${r.length} pending</span></div>`;const g={};for(const _ of r){const p=_.CompetitorSKU;g[p]||(g[p]=[]),g[p].push(_)}for(const[_,p]of Object.entries(g)){const h=p.filter(m=>m.Status==="Pending-User"),l=p.filter(m=>m.Status==="Pending-Dispute"),v=[...new Set(h.map(m=>m.SeimaSKU))].length>1;for(const m of l)n+=this._renderDisputeCard(m,c);if(v)n+=this._renderConflictGroup(_,h,c);else for(const m of h)n+=this._renderSuggestionCard(m,c)}}}t.innerHTML=n,this._bindActions(t)}_renderSuggestionCard(t,a){const s=this._findCompetitorProduct(a,t.CompetitorSKU),e=this._seimaByCode[t.SeimaSKU],i=(s==null?void 0:s.image_url)||"",n=(e==null?void 0:e.Image_URL)||(e==null?void 0:e.imageUrl)||"",o=(e==null?void 0:e.Description)||(e==null?void 0:e.ProductName)||t.SeimaSKU,c=(e==null?void 0:e.OrderCode)||t.SeimaSKU,r=c?String(parseInt(c,10)):t.SeimaSKU,g=(t.MatchReason||"").replace(/^Alternative to [^:]+:\s*/i,""),_=t.VerifiedDate?new Date(t.VerifiedDate).toLocaleDateString("en-AU"):"",p=[s==null?void 0:s.product_type,s==null?void 0:s.subcategory].filter(Boolean).join(" - "),h=[e==null?void 0:e.Range,e==null?void 0:e.Group,(e==null?void 0:e.SubGroup)||(e==null?void 0:e.Subgroup)].filter(Boolean).join(" / ");return`
      <div class="ap-card ap-card-suggestion" id="ap-card-${this._cardId(t)}">
        <div class="ap-card-type ap-type-suggestion">New Suggestion</div>
        <div class="ap-card-match">
          <div class="ap-card-product">
            <img class="ap-thumb ap-thumb-comp" src="${this._esc(i||"assets/no-image.png")}" alt=""
                 data-competitor="${this._esc(a)}" data-comp-sku="${this._esc(t.CompetitorSKU)}"
                 onerror="this.src='assets/no-image.png'" title="Click to view details">
            <div class="ap-card-product-info">
              <div class="ap-card-product-code">${this._esc(a)}: ${this._esc(t.CompetitorSKU)}</div>
              <div class="ap-card-product-name">${this._esc((s==null?void 0:s.product_name)||(s==null?void 0:s.collection)||"")}</div>
              ${p?`<div class="ap-card-product-type">${this._esc(p)}</div>`:""}
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
        <div class="ap-card-meta">Submitted by: ${this._esc(t.VerifiedBy||"Unknown")} | ${_}</div>
        ${g?`<div class="ap-card-reason">"${this._esc(g)}"</div>`:""}
        <div class="ap-card-actions">
          <button class="ap-btn ap-btn-approve" data-action="approve" data-competitor="${this._esc(a)}" data-csku="${this._esc(t.CompetitorSKU)}" data-ssku="${this._esc(t.SeimaSKU)}">✓ Approve</button>
          <button class="ap-btn ap-btn-reject" data-action="reject" data-competitor="${this._esc(a)}" data-csku="${this._esc(t.CompetitorSKU)}" data-ssku="${this._esc(t.SeimaSKU)}">✗ Reject</button>
        </div>
      </div>
    `}_renderDisputeCard(t,a){const s=this._findCompetitorProduct(a,t.CompetitorSKU),e=this._seimaByCode[t.SeimaSKU],i=(s==null?void 0:s.image_url)||"",n=(e==null?void 0:e.Image_URL)||(e==null?void 0:e.imageUrl)||"",o=(e==null?void 0:e.Description)||(e==null?void 0:e.ProductName)||t.SeimaSKU,c=(e==null?void 0:e.OrderCode)||t.SeimaSKU,r=c?String(parseInt(c,10)):t.SeimaSKU,g=(t.MatchReason||"").replace(/^DISPUTE:\s*/i,""),_=t.VerifiedDate?new Date(t.VerifiedDate).toLocaleDateString("en-AU"):"",p=[s==null?void 0:s.product_type,s==null?void 0:s.subcategory].filter(Boolean).join(" - "),h=[e==null?void 0:e.Range,e==null?void 0:e.Group,(e==null?void 0:e.SubGroup)||(e==null?void 0:e.Subgroup)].filter(Boolean).join(" / "),l=this._pending.find(S=>S.Status==="Pending-User"&&S.competitor===a&&S.CompetitorSKU===t.CompetitorSKU&&S.VerifiedBy===t.VerifiedBy&&(S.MatchReason||"").includes("Alternative to")),d=l?this._seimaByCode[l.SeimaSKU]:null,v=(d==null?void 0:d.OrderCode)||(l==null?void 0:l.SeimaSKU)||"",m=v?String(parseInt(v,10)):"";return`
      <div class="ap-card ap-card-dispute" id="ap-card-${this._cardId(t)}">
        <div class="ap-card-type ap-type-dispute">&#9873; Dispute</div>
        <div class="ap-card-match">
          <div class="ap-card-product">
            <img class="ap-thumb ap-thumb-comp" src="${this._esc(i||"assets/no-image.png")}" alt=""
                 data-competitor="${this._esc(a)}" data-comp-sku="${this._esc(t.CompetitorSKU)}"
                 onerror="this.src='assets/no-image.png'" title="Click to view details">
            <div class="ap-card-product-info">
              <div class="ap-card-product-code">${this._esc(a)}: ${this._esc(t.CompetitorSKU)}</div>
              <div class="ap-card-product-name">${this._esc((s==null?void 0:s.product_name)||(s==null?void 0:s.collection)||"")}</div>
              ${p?`<div class="ap-card-product-type">${this._esc(p)}</div>`:""}
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
        <div class="ap-card-meta">Disputed by: ${this._esc(t.VerifiedBy||"Unknown")} | ${_}</div>
        ${g?`<div class="ap-card-reason ap-card-reason-dispute">"${this._esc(g)}"</div>`:""}
        ${l?`
          <div class="ap-card-alt">
            <img class="ap-thumb ap-thumb-seima" src="${this._esc((d==null?void 0:d.Image_URL)||(d==null?void 0:d.imageUrl)||"assets/no-image.png")}" alt=""
                 data-seima-sku="${this._esc(v)}"
                 onerror="this.src='assets/no-image.png'" title="Click to view details"
                 style="width:36px;height:36px;object-fit:contain;border-radius:4px;cursor:pointer;">
            <span>Suggested alternative: <strong>${this._esc(m)}</strong> - ${this._esc((d==null?void 0:d.Description)||(d==null?void 0:d.ProductName)||"")}</span>
            <span class="ap-card-alt-badge">Suggested</span>
          </div>
        `:""}
        <div class="ap-card-actions">
          <button class="ap-btn ap-btn-approve" data-action="uphold" data-competitor="${this._esc(a)}" data-csku="${this._esc(t.CompetitorSKU)}" data-ssku="${this._esc(t.SeimaSKU)}" ${l?`data-alt-ssku="${this._esc(l.SeimaSKU)}"`:""}>Uphold Dispute</button>
          ${l?`<button class="ap-btn ap-btn-approve" data-action="approve-alt" data-competitor="${this._esc(a)}" data-csku="${this._esc(t.CompetitorSKU)}" data-ssku="${this._esc(l.SeimaSKU)}" data-disputed-ssku="${this._esc(t.SeimaSKU)}">Approve Alternative</button>`:""}
          <button class="ap-btn ap-btn-dismiss" data-action="dismiss" data-competitor="${this._esc(a)}" data-csku="${this._esc(t.CompetitorSKU)}" data-ssku="${this._esc(t.SeimaSKU)}">Dismiss</button>
        </div>
      </div>
    `}_renderConflictGroup(t,a,s){const e=this._findCompetitorProduct(s,t),i=(e==null?void 0:e.image_url)||"",n=[e==null?void 0:e.product_type,e==null?void 0:e.subcategory].filter(Boolean).join(" - ");let o='<div class="ap-card ap-card-conflict">';o+='<div class="ap-card-type ap-type-conflict">&#9888; Conflicting Suggestions</div>',o+=`
      <div class="ap-card-product" style="margin-bottom:0.75rem;">
        <img class="ap-thumb ap-thumb-comp" src="${this._esc(i||"assets/no-image.png")}" alt=""
             data-competitor="${this._esc(s)}" data-comp-sku="${this._esc(t)}"
             onerror="this.src='assets/no-image.png'" title="Click to view details">
        <div class="ap-card-product-info">
          <div class="ap-card-product-code">${this._esc(s)}: ${this._esc(t)}</div>
          <div class="ap-card-product-name">${this._esc((e==null?void 0:e.product_name)||(e==null?void 0:e.collection)||"")}</div>
          ${n?`<div class="ap-card-product-type">${this._esc(n)}</div>`:""}
        </div>
      </div>
    `;for(const c of a){const r=this._seimaByCode[c.SeimaSKU],g=(r==null?void 0:r.Image_URL)||(r==null?void 0:r.imageUrl)||"",_=(r==null?void 0:r.Description)||(r==null?void 0:r.ProductName)||c.SeimaSKU,p=(r==null?void 0:r.OrderCode)||c.SeimaSKU,h=p?String(parseInt(p,10)):c.SeimaSKU,l=[r==null?void 0:r.Range,r==null?void 0:r.Group].filter(Boolean).join(" / "),d=(c.MatchReason||"").replace(/^Alternative to [^:]+:\s*/i,""),v=c.VerifiedDate?new Date(c.VerifiedDate).toLocaleDateString("en-AU"):"";o+=`
        <div style="display:flex;align-items:center;gap:0.5rem;padding:0.5rem;border:1px solid #e5e7eb;border-radius:6px;margin-bottom:0.4rem;background:#fff;">
          <img class="ap-thumb ap-thumb-seima" src="${this._esc(g||"assets/no-image.png")}" alt=""
               data-seima-sku="${this._esc(p)}"
               onerror="this.src='assets/no-image.png'" title="Click to view details"
               style="width:40px;height:40px;object-fit:contain;border-radius:4px;cursor:pointer;border:1px solid #e5e7eb;">
          <div style="flex:1;font-size:0.85rem;">
            <strong>${this._esc(h)}</strong> - ${this._esc(_)}
            ${l?`<div style="font-size:0.75rem;color:#6b7280;">${this._esc(l)}</div>`:""}
            <div style="font-size:0.75rem;color:#9ca3af;">by ${this._esc(c.VerifiedBy||"")} | ${v}</div>
            ${d?`<div style="font-size:0.75rem;color:#6b7280;font-style:italic;">${this._esc(d)}</div>`:""}
          </div>
          <div style="display:flex;gap:0.3rem;">
            <button class="ap-btn ap-btn-approve" data-action="approve" data-competitor="${this._esc(s)}" data-csku="${this._esc(c.CompetitorSKU)}" data-ssku="${this._esc(c.SeimaSKU)}">✓</button>
            <button class="ap-btn ap-btn-reject" data-action="reject" data-competitor="${this._esc(s)}" data-csku="${this._esc(c.CompetitorSKU)}" data-ssku="${this._esc(c.SeimaSKU)}">✗</button>
          </div>
        </div>
      `}return o+="</div>",o}_bindActions(t){t.querySelectorAll(".ap-tab").forEach(s=>{s.addEventListener("click",()=>{this._filter=s.dataset.filter,this._render()})});const a=t.querySelector("#ap-competitor-filter");a==null||a.addEventListener("change",()=>{this._competitorFilter=a.value,this._render()}),t.querySelectorAll("[data-action]").forEach(s=>{s.addEventListener("click",()=>this._handleAction(s))}),t.querySelectorAll(".ap-thumb").forEach(s=>{s.addEventListener("click",()=>{const e=s.closest(".ap-card")||s.closest("[style]"),i=e==null?void 0:e.querySelector(".ap-thumb-comp"),n=e==null?void 0:e.querySelector(".ap-thumb-seima"),o=(i==null?void 0:i.dataset.competitor)||"",c=(i==null?void 0:i.dataset.compSku)||"",r=(n==null?void 0:n.dataset.seimaSku)||"";o&&c&&r&&this._openComparisonModal(o,c,r)})})}async _handleAction(t){const a=t.dataset.action,s=String(t.dataset.competitor||"").trim(),e=String(t.dataset.csku||"").trim(),i=String(t.dataset.ssku||"").trim();t.disabled=!0,t.textContent="...";try{if(!s||!e||!i)throw new Error("Missing competitor, competitor SKU, or Seima SKU on this button. Check Matches sheet headers (CompetitorSKU / SeimaSKU).");if(a==="approve")await u.resolvePendingVerification(s,e,i,"approve");else if(a==="reject")await u.resolvePendingVerification(s,e,i,"reject");else if(a==="dismiss")await u.resolvePendingVerification(s,e,i,"dismiss");else if(a==="uphold"){const n=t.dataset.altSsku;await u.resolvePendingVerification(s,e,i,"approve",{upholdDispute:!0,disputedSeimaSKU:i})}else if(a==="approve-alt"){const n=String(t.dataset.disputedSsku||"").trim();if(!n)throw new Error("Missing disputed Seima SKU.");await u.resolvePendingVerification(s,e,i,"approve",{upholdDispute:!0,disputedSeimaSKU:n}),await u.resolvePendingVerification(s,e,n,"dismiss")}this._pending=this._pending.filter(n=>!(n.competitor===s&&n.CompetitorSKU===e&&n.SeimaSKU===i)),this._render()}catch(n){console.error("AdminPending: action failed",n),t.disabled=!1,t.textContent="Error"}}_getFilteredItems(){let t=this._pending;return this._filter==="suggestions"&&(t=t.filter(a=>a.Status==="Pending-User")),this._filter==="disputes"&&(t=t.filter(a=>a.Status==="Pending-Dispute")),this._competitorFilter&&(t=t.filter(a=>a.competitor===this._competitorFilter)),t}_groupByCompetitor(t){const a={};for(const s of t)a[s.competitor]||(a[s.competitor]=[]),a[s.competitor].push(s);return a}_findCompetitorProduct(t,a){return(u.productsCache[t]||[]).find(e=>String(e.product_code)===String(a))}_extractCompetitorDimensions(t){if(!t)return"";if(t.dimensions_mm)return t.dimensions_mm;let a=0,s=0,e=0;for(const i of Object.keys(t)){const n=i.toLowerCase();n.includes("width")&&!a&&(a=parseFloat(t[i])||0),n.includes("depth")&&!s&&(s=parseFloat(t[i])||0),n.includes("height")&&!e&&(e=parseFloat(t[i])||0)}if(a>0||s>0||e>0){const i=[];return a&&i.push(a),s&&i.push(s),e&&i.push(e),i.join(" × ")+"mm"}return""}_cardId(t){return`${t.competitor}-${t.CompetitorSKU}-${t.SeimaSKU}`.replace(/[^a-zA-Z0-9-]/g,"_")}_openComparisonModal(t,a,s){const e=this._findCompetitorProduct(t,a),i=this._seimaByCode[s],n=document.querySelector(".ap-compare-overlay");n&&n.remove();const o=$=>this._esc($||""),c=(e==null?void 0:e.image_url)||"../assets/no-image.png",r=(e==null?void 0:e.product_name)||(e==null?void 0:e.collection)||a,g=this._extractCompetitorDimensions(e),_=e?[["Product Code",e.product_code],["Brand",t],["Category",[e.product_type,e.subcategory].filter(Boolean).join(" / ")],["Collection",e.collection],["Finish",e.finish||e.colour],["Dimensions",g],["Material",e.material],["Style",e.style],["WELS",e.wels_rating],["Price",e.rrp_ex_gst?`$${Number(e.rrp_ex_gst).toLocaleString("en-AU",{minimumFractionDigits:2})} ex GST`:""],["Description",e.description||e.product_description]]:[["Product Code",a],["Brand",t]],p=(i==null?void 0:i.Image_URL)||(i==null?void 0:i.imageUrl)||"../assets/no-image.png",h=(i==null?void 0:i.OrderCode)||s,l=h?String(parseInt(h,10)):s,d=(i==null?void 0:i.Description)||(i==null?void 0:i.ProductName)||(i==null?void 0:i["Product Name"])||s,v=(i==null?void 0:i.DimX)||(i==null?void 0:i["X Dimension (mm)"])||"",m=(i==null?void 0:i.DimY)||(i==null?void 0:i["Y Dimension (mm)"])||"",S=(i==null?void 0:i.DimZ)||(i==null?void 0:i["Z Dimension (mm)"])||"",L=v&&v!=="0"?`${v} × ${m||0} × ${S||0}mm`:"",C=(i==null?void 0:i.RRP_EX)||(i==null?void 0:i["RRP EX GST"])||"",R=i?[["Order Code",l],["Range",i.Range],["Group",i.Group],["Type",i.SubGroup||i.Subgroup||i["Sub Group"]],["Dimensions",L],["WELS",i.WELS_STAR||i["WELS Star"]?`${i.WELS_STAR||i["WELS Star"]} star`:""],["Price",C?`$${parseFloat(C).toLocaleString("en-AU",{minimumFractionDigits:2})} ex GST`:""],["Description",i["Long Description"]||i.LongDescription]]:[["Order Code",s]],U=$=>$.filter(([,y])=>y&&String(y).trim()).map(([y,E])=>`<tr><td style="font-weight:500;color:#6b7280;padding:3px 8px 3px 0;white-space:nowrap;font-size:0.8rem;">${o(y)}</td><td style="padding:3px 0;font-size:0.8rem;">${o(E)}</td></tr>`).join(""),k=(i==null?void 0:i.Website_URL)||(i==null?void 0:i["Website URL"])||"",D=(e==null?void 0:e.product_url)||"",f=document.createElement("div");f.className="ap-compare-overlay",f.innerHTML=`
      <div class="ap-compare-modal">
        <div class="ap-compare-header">
          <h3>Product Comparison</h3>
          <button class="ap-compare-close">&times;</button>
        </div>
        <div class="ap-compare-body">
          <div class="ap-compare-col">
            <div class="ap-compare-label ap-compare-label-comp">Competitor</div>
            <img src="${o(c)}" alt="" onerror="this.src='../assets/no-image.png'">
            <h4>${o(t)}: ${o(a)}</h4>
            <p class="ap-compare-name">${o(r)}</p>
            <table class="ap-compare-specs">${U(_)}</table>
            ${D?`<a href="${o(D)}" target="_blank" rel="noopener" class="ap-compare-link">View on Website &rarr;</a>`:""}
          </div>
          <div class="ap-compare-divider"></div>
          <div class="ap-compare-col">
            <div class="ap-compare-label ap-compare-label-seima">Seima</div>
            <img src="${o(p)}" alt="" onerror="this.src='../assets/no-image.png'">
            <h4>${o(l)}</h4>
            <p class="ap-compare-name">${o(d)}</p>
            <table class="ap-compare-specs">${U(R)}</table>
            ${k?`<a href="${o(k)}" target="_blank" rel="noopener" class="ap-compare-link">View on Website &rarr;</a>`:""}
          </div>
        </div>
      </div>
    `;const b=()=>{f.remove(),document.removeEventListener("keydown",K)};f.addEventListener("click",$=>{$.target===f&&b()}),f.querySelector(".ap-compare-close").addEventListener("click",b);const K=$=>{$.key==="Escape"&&b()};document.addEventListener("keydown",K),document.body.appendChild(f)}_esc(t){const a=document.createElement("div");return a.textContent=t||"",a.innerHTML}}const A=new V;A.init();
