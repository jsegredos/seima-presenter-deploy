import"./modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      *//* empty css                    */const u="https://seima-ai-proxy.seima.workers.dev",p="sk-proj-KRCnI_ABkeaV18bpU1dTOpXWxpKtucw";let i=[],a="all";async function g(){document.getElementById("fr-refresh-btn").addEventListener("click",l),document.querySelectorAll(".fr-filter-btn").forEach(e=>{e.addEventListener("click",()=>{document.querySelectorAll(".fr-filter-btn").forEach(n=>n.classList.remove("active")),e.classList.add("active"),a=e.dataset.filter,f()})}),await l()}async function l(){var n;const e=document.getElementById("fr-loading");e.classList.remove("hidden");try{const t=`${u}/v1/feedback/dashboard?token=${encodeURIComponent(p)}`,o=await fetch(t);if(!o.ok)throw new Error(`Failed to load (${o.status})`);const r=await o.json();i=r.recentFeedback||[],v(r.summary||{}),w(((n=r.summary)==null?void 0:n.recentDown)||[]),y(r.topQuestions||[]),f()}catch(t){console.error("Failed to load dashboard:",t),document.getElementById("fr-total-up").textContent="!",document.getElementById("fr-total-down").textContent="!",document.getElementById("fr-rate").textContent="Error",document.getElementById("fr-total-feedback").textContent=t.message}finally{e.classList.add("hidden")}}function v(e){const n=e.totalUp||0,t=e.totalDown||0,o=n+t,r=o>0?Math.round(n/o*100):0;document.getElementById("fr-total-up").textContent=n,document.getElementById("fr-total-down").textContent=t,document.getElementById("fr-rate").textContent=o>0?`${r}%`:"--",document.getElementById("fr-total-feedback").textContent=o}function w(e){const n=document.getElementById("fr-down-list"),t=document.getElementById("fr-down-count");if(!e.length){n.innerHTML='<div class="fr-empty">No thumbs-down responses yet. Good news!</div>',t.textContent="";return}t.textContent=`${e.length} entries`,n.innerHTML=e.map(o=>`
    <div class="fr-item">
      <div class="fr-item-header">
        <span class="fr-item-rating fr-item-rating--down">Thumbs Down</span>
        <span class="fr-item-time">${m(o.timestamp)}</span>
      </div>
      <div class="fr-item-question">${s(o.question||"Unknown question")}</div>
      <div class="fr-item-answer">${s(o.answer||"No answer recorded")}</div>
    </div>
  `).join("")}function y(e){const n=document.getElementById("fr-questions-list");if(!e.length){n.innerHTML='<div class="fr-empty">No question data yet. Questions are tracked as users interact with Fred.</div>';return}n.innerHTML=e.map(t=>`
    <div class="fr-question-item">
      <span class="fr-question-text" title="${s(t.prompt)}">${s(t.prompt)}</span>
      <span class="fr-question-count">${t.count}x</span>
    </div>
  `).join("")}function f(){const e=document.getElementById("fr-all-list"),n=a==="all"?i:i.filter(t=>t.rating===a);if(!n.length){const t=a==="all"?"No feedback entries yet.":`No "${a}" feedback entries.`;e.innerHTML=`<div class="fr-empty">${t}</div>`;return}e.innerHTML=n.map(t=>{const o=t.rating==="up"?"fr-item-rating--up":"fr-item-rating--down",r=t.rating==="up"?"Helpful":"Not Helpful";return`
      <div class="fr-item">
        <div class="fr-item-header">
          <span class="fr-item-rating ${o}">${r}</span>
          <span class="fr-item-time">${m(t.timestamp)}</span>
        </div>
        <div class="fr-item-question">${s(t.question||"Unknown")}</div>
        <div class="fr-item-answer">${s(t.answer||"")}</div>
      </div>
    `}).join("")}function m(e){if(!e)return"";const n=new Date(e),o=new Date-n,r=Math.floor(o/6e4),d=Math.floor(o/36e5),c=Math.floor(o/864e5);return r<1?"just now":r<60?`${r}m ago`:d<24?`${d}h ago`:c<7?`${c}d ago`:n.toLocaleDateString("en-AU",{day:"numeric",month:"short"})}function s(e){const n=document.createElement("div");return n.textContent=e,n.innerHTML}document.addEventListener("DOMContentLoaded",g);
