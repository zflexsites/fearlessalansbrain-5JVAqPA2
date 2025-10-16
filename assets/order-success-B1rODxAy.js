import{b as R,s as I,_ as S}from"../js/app.js";function u(t=""){return String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function L(t){if(!t)return!1;try{return new URL(t,location.href).origin===location.origin}catch{return!1}}async function C(t,c=160){if(!t)return null;try{if(window.QRCode){const o=window.QRCode;if(typeof o.toDataURL=="function")return await new Promise((n,a)=>o.toDataURL(t,{width:c},(e,l)=>e?a(e):n(l)));if(typeof o.toCanvas=="function")return await new Promise((n,a)=>{try{const e=document.createElement("canvas");o.toCanvas(e,t,{width:c},l=>l?a(l):n(e.toDataURL("image/png")))}catch(e){a(e)}})}const r=await S(()=>import("./browser-BXdiCFWD.js").then(o=>o.b),[]).catch(()=>null);if(r){const o=r.toDataURL||r.default&&r.default.toDataURL;if(typeof o=="function")return await o(t,{width:c})}}catch(r){console.warn("[QR] génération échouée:",r)}return null}function U(t,c){var h,y,g;const o=(t.createdAt instanceof Date?t.createdAt:new Date).toLocaleString("fr-FR",{day:"2-digit",month:"long",year:"numeric",hour:"2-digit",minute:"2-digit"}),n=Array.isArray(t.items)&&t.items.length?t.items.map(f=>{const b=f.quantity||1,E=f.title||f.id||"Produit",w=typeof f.price=="object"?Number(f.price.amount||0):Number(f.price||0),D=typeof f.price=="object"?f.price.currency||t.currency||"":t.currency||"",$=(w*b).toFixed(2);return`<div style="display:flex;justify-content:space-between;margin:6px 0;font-size:14px;line-height:1.2">
                    <div style="max-width:65%;overflow-wrap:break-word">${u(`${b} × ${E}`)}</div>
                    <div style="white-space:nowrap">${u($)} ${u(D)}</div>
                  </div>`}).join(""):'<div style="font-size:14px;color:var(--text-muted-color, #6b7280)">Aucun item disponible</div>',a=(typeof t.total=="object"?Number(t.total.amount||0):Number(t.total||0)).toFixed(2),e=(typeof t.total=="object"?t.total.currency:t.currency)||"",l=((h=t.store)==null?void 0:h.logoUrl)||null,d=l&&L(l),i=t.store&&t.store.name&&String(t.store.name).trim().charAt(0)||"B",x=`
    :root{
      --bg-color: #ffffff;
      --text-color: #111827;
      --primary-color: #000000;
      --secondary-color: #6B7280;
      --card-bg-color: #ffffff;
      --card-border-color: #E5E7EB;
      --text-muted-color: #6B7280;
      --font-family: Inter, Arial, Helvetica, sans-serif;
    }
    html,body{margin:0;padding:0;font-family:var(--font-family);background:var(--bg-color);color:var(--text-color)}
    .receipt{box-sizing:border-box;width:600px;padding:28px;background:var(--card-bg-color);color:var(--text-color);border:1px solid var(--card-border-color);border-radius:8px}
    .header{text-align:center;margin-bottom:8px}
    .meta{display:flex;justify-content:space-between;margin:18px 0;color:var(--text-muted-color)}
    .items{margin-bottom:18px}
    .footer{display:flex;justify-content:space-between;align-items:center}
    .qrbox{width:140px;height:140px;display:flex;align-items:center;justify-content:center;border:1px solid var(--card-border-color);border-radius:8px;background:var(--card-bg-color)}
    .logo-sq{display:inline-flex;align-items:center;justify-content:center;width:56px;height:56px;border-radius:8px;font-weight:700;color:var(--card-bg-color);background:var(--primary-color);font-size:22px;margin-bottom:4px}
    .logo-img{max-height:40px;object-fit:contain;margin-bottom:4px}
    .items .title{font-size:14px}
  `,s=`
    (function() {
      try {
        // list of vars we care about (extendable)
        const vars = [
          '--bg-color',
          '--text-color',
          '--primary-color',
          '--secondary-color',
          '--card-bg-color',
          '--card-border-color',
          '--text-muted-color',
          '--font-family'
        ];
        const parentStyle = window.parent && window.parent.getComputedStyle
          ? window.parent.getComputedStyle(window.parent.document.documentElement)
          : null;
        if (!parentStyle) return;
        vars.forEach(k => {
          const v = parentStyle.getPropertyValue(k);
          if (v) document.documentElement.style.setProperty(k, v.trim());
        });
      } catch (e) {
        // ignore cross-origin or other issues
      }
    })();
  `,m=d?`<img class="logo-img" src="${u(l)}" alt="${u(((y=t.store)==null?void 0:y.name)||"")}">`:`<div class="logo-sq" aria-hidden="true">${u(i)}</div>`,p=c?`<img src="${c}" alt="QR" style="width:120px;height:120px;object-fit:contain"/>`:'<div style="font-size:12px;color:var(--text-muted-color)">QR indisponible</div>',v=u(((g=t.store)==null?void 0:g.name)||"Boutique");return`<!doctype html>
<html>
<head>
  <meta charset="utf-8"/>
  <meta name="viewport" content="width=device-width,initial-scale=1"/>
  <script>${s}<\/script>
  <style>${x}</style>
</head>
<body>
  <div class="receipt" id="receipt-root" role="document" aria-label="Récapitulatif de commande">
    <div class="header">
      ${m}
      <h2 style="margin:0 0 6px 0;font-size:20px">Récapitulatif de commande</h2>
      <div style="font-size:12px;color:var(--text-muted-color)">${v}</div>
    </div>

    <div class="meta">
      <div>
        <div style="font-size:12px;color:var(--text-muted-color)">Commande N°</div>
        <div style="font-weight:700">${u(t.id||"")}</div>
      </div>
      <div style="text-align:right">
        <div style="font-size:12px;color:var(--text-muted-color)">Date</div>
        <div>${u(o)}</div>
      </div>
    </div>

    <div class="items">${n}</div>

    <div class="footer">
      <div style="text-align:left">
        <div style="font-size:12px;color:var(--text-muted-color)">Total</div>
        <div style="font-weight:700;font-size:18px">${u(a)} ${u(e)}</div>
      </div>
      <div class="qrbox">${p}</div>
    </div>
  </div>
</body>
</html>`}async function z(t,c={}){const{timeoutMs:r=15e3,html2canvasCdn:o="https://cdn.jsdelivr.net/npm/html2canvas@1.4.1/dist/html2canvas.min.js"}=c;return new Promise((n,a)=>{const e=document.createElement("iframe");e.style.position="fixed",e.style.left="-9999px",e.style.top="0",e.style.width="900px",e.style.height="900px",e.setAttribute("aria-hidden","true"),document.body.appendChild(e);let l=!1;const d=()=>{try{e&&e.parentNode&&e.parentNode.removeChild(e)}catch{}l=!0},i=setTimeout(()=>{l||(d(),a(new Error("Timeout: génération du récapitulatif trop longue.")))},r),x=t.replace("</body>",`<script src="${o}"><\/script></body>`);e.srcdoc=x,e.onload=async()=>{if(!l)try{const s=e.contentWindow,m=e.contentDocument,p=Date.now(),v=100;await new Promise((b,E)=>{const w=setInterval(()=>{if(l)return clearInterval(w),E(new Error("Aborted"));if(s.html2canvas)return clearInterval(w),b();if(Date.now()-p>Math.min(r,8e3))return clearInterval(w),E(new Error("html2canvas not loaded in iframe"))},v)});const y=m.getElementById("receipt-root")||m.body;if(!y)return d(),clearTimeout(i),a(new Error("No receipt node inside iframe"));const f=(await s.html2canvas(y,{backgroundColor:"#ffffff"})).toDataURL("image/png");d(),clearTimeout(i),n(f)}catch(s){d(),clearTimeout(i),a(s)}}})}function q(t,c){const r=document.getElementById("order-id");r&&(r.textContent=t.id||"");const o=document.getElementById("qrcode-container");o&&(o.innerHTML="",(async()=>{const n=`zflex-order://${c}/${t.id}`,a=await C(n,160);if(a){const e=document.createElement("img");e.src=a,e.alt="QR Code de la commande",e.style.width="160px",e.style.height="160px",o.appendChild(e)}else{const e=document.createElement("span");e.textContent="QR indisponible",e.style.fontSize="12px",e.style.color="var(--text-muted-color, #6b7280)",o.appendChild(e)}})())}async function A(){const t=document.getElementById("loading-state"),c=document.getElementById("success-state"),r=document.getElementById("error-state"),o=document.getElementById("error-message");try{const a=new URLSearchParams(window.location.search).get("id");if(!a)throw new Error("ID de commande manquant dans l'URL.");const e=document.getElementById("zflex-data")||document.querySelector(".zflex-fragment-data");if(!e)throw new Error("Tunnel de data introuvable.");const d=JSON.parse(e.textContent||"{}").storeId;if(!d)throw new Error("ID du store introuvable dans les données de la page.");const i=await R(a,d);if(!(i!=null&&i.valid)||!(i!=null&&i.order))throw new Error((i==null?void 0:i.message)||"Commande invalide ou déjà traitée.");const x=i.order,s={};q(s,d);const m=document.getElementById("download-receipt-btn");m&&m.addEventListener("click",async()=>{m.disabled=!0,m.textContent="Génération...";try{const p=`zflex-order://${d}/${s.id}`,v=await C(p,300),h=U(s,v),y=await z(h),g=document.createElement("a");g.href=y,g.download=`recap-commande-${s.id}.png`,document.body.appendChild(g),g.click(),g.remove()}catch(p){console.error("Erreur génération du récapitulatif:",p),I("Erreur",(p==null?void 0:p.message)||"Impossible de générer le récapitulatif.","error")}finally{m.disabled=!1,m.textContent="Télécharger le récapitulatif"}}),t&&(t.style.display="none"),c&&c.classList.remove("hidden")}catch(n){console.error("[OrderSuccess] Erreur:",n),o&&(o.textContent=(n==null?void 0:n.message)||"Impossible de récupérer la commande."),t&&(t.style.display="none"),r&&r.classList.remove("hidden"),I("Erreur de commande",(n==null?void 0:n.message)||"Impossible de récupérer les détails de la commande.","error")}}export{A as initOrderSuccess};
