import{a as h}from"./auth-ui-CKph4Agv.js";/* empty css                      *//* empty css                    */const c="https://seima-ai-proxy.seima.workers.dev";function l(){return h.getAuthHeaders()}let u=[],d="all";async function g(){document.getElementById("fr-refresh-btn").addEventListener("click",f),document.querySelectorAll(".fr-filter-btn").forEach(n=>{n.addEventListener("click",()=>{document.querySelectorAll(".fr-filter-btn").forEach(t=>t.classList.remove("active")),n.classList.add("active"),d=n.dataset.filter,m()})}),await f()}async function f(){var t;const n=document.getElementById("fr-loading");n.classList.remove("hidden");try{const e=`${c}/v1/feedback/dashboard`,a=await fetch(e,{headers:l()});if(!a.ok)throw new Error(`Failed to load (${a.status})`);const s=await a.json();u=s.recentFeedback||[],v(s.summary||{}),y(((t=s.summary)==null?void 0:t.recentDown)||[]),x(s.topQuestions||[]),m()}catch(e){console.error("Failed to load dashboard:",e),document.getElementById("fr-total-up").textContent="!",document.getElementById("fr-total-down").textContent="!",document.getElementById("fr-rate").textContent="Error",document.getElementById("fr-total-feedback").textContent=e.message}finally{n.classList.add("hidden")}}function v(n){const t=n.totalUp||0,e=n.totalDown||0,a=t+e,s=a>0?Math.round(t/a*100):0;document.getElementById("fr-total-up").textContent=t,document.getElementById("fr-total-down").textContent=e,document.getElementById("fr-rate").textContent=a>0?`${s}%`:"--",document.getElementById("fr-total-feedback").textContent=a}function y(n){const t=document.getElementById("fr-down-list"),e=document.getElementById("fr-down-count");if(!n.length){t.innerHTML='<div class="fr-empty">No thumbs-down responses yet. Good news!</div>',e.textContent="";return}e.textContent=`${n.length} entries`,t.innerHTML=n.map((a,s)=>`
    <div class="fr-item">
      <div class="fr-item-header">
        <span class="fr-item-rating fr-item-rating--down">Thumbs Down</span>
        <span class="fr-item-time">${p(a.timestamp)}</span>
      </div>
      <div class="fr-item-question">${r(a.question||"Unknown question")}</div>
      <div class="fr-item-answer">${r(a.answer||"No answer recorded")}</div>
      <div class="fr-item-actions">
        <button class="fr-action-btn" data-action="add-test" data-idx="${s}" title="Add this Q&A to the evaluation test suite">+ Add to Tests</button>
        <button class="fr-action-btn" data-action="add-rule" data-idx="${s}" title="Create a new rule based on this failure">+ Add Rule</button>
      </div>
    </div>
  `).join(""),t.querySelectorAll(".fr-action-btn").forEach(a=>{a.addEventListener("click",()=>{const s=parseInt(a.dataset.idx),o=n[s];o&&(a.dataset.action==="add-test"?w(o,a):a.dataset.action==="add-rule"&&$(o,a))})})}async function w(n,t){t.disabled=!0,t.textContent="Adding...";try{const e=`${c}/v1/eval/test-cases`,o=(await(await fetch(e,{headers:l()})).json()).testCases||[];o.push({id:Date.now().toString(36)+Math.random().toString(36).slice(2,6),question:n.question||"",expectedCodes:[],expectedBehavior:`User was unhappy with this response: "${(n.answer||"").slice(0,200)}"`}),await fetch(`${c}/v1/eval/test-cases`,{method:"PUT",headers:{"Content-Type":"application/json",...l()},body:JSON.stringify({testCases:o})}),t.textContent="Added ✓",t.style.color="var(--color-sage, #7c9082)"}catch(e){console.error("Failed to add test case:",e),t.textContent="Failed",t.disabled=!1}}async function $(n,t){const e=prompt("Enter a new rule for Fred based on this failure:",`When asked "${(n.question||"").slice(0,80)}", Fred should...`);if(e){t.disabled=!0,t.textContent="Adding...";try{const a=`${c}/v1/fred-config`,o=await(await fetch(a,{headers:l()})).json(),i=o.rules||[];i.push(e),await fetch(`${c}/v1/fred-config`,{method:"PUT",headers:{"Content-Type":"application/json",...l()},body:JSON.stringify({...o,rules:i})}),t.textContent="Added ✓",t.style.color="var(--color-sage, #7c9082)"}catch(a){console.error("Failed to add rule:",a),t.textContent="Failed",t.disabled=!1}}}function x(n){const t=document.getElementById("fr-questions-list");if(!n.length){t.innerHTML='<div class="fr-empty">No question data yet. Questions are tracked as users interact with Fred.</div>';return}t.innerHTML=n.map(e=>`
    <div class="fr-question-item">
      <span class="fr-question-text" title="${r(e.prompt)}">${r(e.prompt)}</span>
      <span class="fr-question-count">${e.count}x</span>
    </div>
  `).join("")}function m(){const n=document.getElementById("fr-all-list"),t=d==="all"?u:u.filter(e=>e.rating===d);if(!t.length){const e=d==="all"?"No feedback entries yet.":`No "${d}" feedback entries.`;n.innerHTML=`<div class="fr-empty">${e}</div>`;return}n.innerHTML=t.map(e=>{const a=e.rating==="up"?"fr-item-rating--up":"fr-item-rating--down",s=e.rating==="up"?"Helpful":"Not Helpful";return`
      <div class="fr-item">
        <div class="fr-item-header">
          <span class="fr-item-rating ${a}">${s}</span>
          <span class="fr-item-time">${p(e.timestamp)}</span>
        </div>
        <div class="fr-item-question">${r(e.question||"Unknown")}</div>
        <div class="fr-item-answer">${r(e.answer||"")}</div>
      </div>
    `}).join("")}function p(n){if(!n)return"";const t=new Date(n),a=new Date-t,s=Math.floor(a/6e4),o=Math.floor(a/36e5),i=Math.floor(a/864e5);return s<1?"just now":s<60?`${s}m ago`:o<24?`${o}h ago`:i<7?`${i}d ago`:t.toLocaleDateString("en-AU",{day:"numeric",month:"short"})}function r(n){const t=document.createElement("div");return t.textContent=n,t.innerHTML}document.addEventListener("DOMContentLoaded",g);
