import{f as $,s as E,_ as S}from"../js/app.js";function g(t=""){return String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function N(t){try{if(!t)return new Date;if(typeof t=="string"){const i=new Date(t);if(!isNaN(i.getTime()))return i;const n=Number(t);return isNaN(n)?new Date:new Date(n)}if(typeof t=="number")return t>1e12?new Date(t):t>1e9?new Date(t):new Date(t*1e3);if(t instanceof Date)return t;if(t&&typeof t.toDate=="function")try{return t.toDate()}catch{}const a=new Date(t);if(!isNaN(a.getTime()))return a}catch{}return new Date}function U(t){if(!t)return!1;try{return new URL(t,location.href).origin===location.origin}catch{return!1}}async function I(t,a=160){if(!t)return null;try{if(window.QRCode){const n=window.QRCode;if(typeof n.toDataURL=="function")return await new Promise((r,l)=>n.toDataURL(t,{width:a},(e,o)=>e?l(e):r(o)));if(typeof n.toCanvas=="function")return await new Promise((r,l)=>{try{const e=document.createElement("canvas");n.toCanvas(e,t,{width:a},o=>o?l(o):r(e.toDataURL("image/png")))}catch(e){l(e)}})}const i=await S(()=>import("./browser-BXdiCFWD.js").then(n=>n.b),[]).catch(()=>null);if(i){const n=i.toDataURL||i.default&&i.default.toDataURL;if(typeof n=="function")return await n(t,{width:a})}}catch(i){console.warn("[QR] génération échouée:",i)}return null}function L(t,a){var w,u,D;const n=(t.createdAt instanceof Date?t.createdAt:new Date).toLocaleString("fr-FR",{day:"2-digit",month:"long",year:"numeric",hour:"2-digit",minute:"2-digit"}),r=Array.isArray(t.items)&&t.items.length?t.items.map(p=>{const x=p.quantity||1,b=p.title||p.id||"Produit",v=typeof p.price=="object"?Number(p.price.amount||0):Number(p.price||0),C=typeof p.price=="object"?p.price.currency||t.currency||"":t.currency||"",R=(v*x).toFixed(2);return`<div style="display:flex;justify-content:space-between;margin:6px 0;font-size:14px;line-height:1.2">
                    <div style="max-width:65%;overflow-wrap:break-word">${g(`${x} × ${b}`)}</div>
                    <div style="white-space:nowrap">${g(R)} ${g(C)}</div>
                  </div>`}).join(""):'<div style="font-size:14px;color:var(--text-muted-color, #6b7280)">Aucun item disponible</div>',l=(typeof t.total=="object"?Number(t.total.amount||0):Number(t.total||0)).toFixed(2),e=(typeof t.total=="object"?t.total.currency:t.currency)||"",o=((w=t.store)==null?void 0:w.logoUrl)||null,d=o&&U(o),c=t.store&&t.store.name&&String(t.store.name).trim().charAt(0)||"B",f=`
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
  `,m=d?`<img class="logo-img" src="${g(o)}" alt="${g(((u=t.store)==null?void 0:u.name)||"")}">`:`<div class="logo-sq" aria-hidden="true">${g(c)}</div>`,y=a?`<img src="${a}" alt="QR" style="width:120px;height:120px;object-fit:contain"/>`:'<div style="font-size:12px;color:var(--text-muted-color)">QR indisponible</div>',h=g(((D=t.store)==null?void 0:D.name)||"Boutique");return`<!doctype html>
<html>
<head>
  <meta charset="utf-8"/>
  <meta name="viewport" content="width=device-width,initial-scale=1"/>
  <script>${s}<\/script>
  <style>${f}</style>
</head>
<body>
  <div class="receipt" id="receipt-root" role="document" aria-label="Récapitulatif de commande">
    <div class="header">
      ${m}
      <h2 style="margin:0 0 6px 0;font-size:20px">Récapitulatif de commande</h2>
      <div style="font-size:12px;color:var(--text-muted-color)">${h}</div>
    </div>

    <div class="meta">
      <div>
        <div style="font-size:12px;color:var(--text-muted-color)">Commande N°</div>
        <div style="font-weight:700">${displayId}</div>
      </div>
      <div style="text-align:right">
        <div style="font-size:12px;color:var(--text-muted-color)">Date</div>
        <div>${g(n)}</div>
      </div>
    </div>

    <div class="items">${r}</div>

    <div class="footer">
      <div style="text-align:left">
        <div style="font-size:12px;color:var(--text-muted-color)">Total</div>
        <div style="font-weight:700;font-size:18px">${g(l)} ${g(e)}</div>
      </div>
      <div class="qrbox">${y}</div>
    </div>
  </div>
</body>
</html>`}async function q(t,a={}){const{timeoutMs:i=15e3,html2canvasCdn:n="https://cdn.jsdelivr.net/npm/html2canvas@1.4.1/dist/html2canvas.min.js"}=a;return new Promise((r,l)=>{const e=document.createElement("iframe");e.style.position="fixed",e.style.left="-9999px",e.style.top="0",e.style.width="900px",e.style.height="900px",e.setAttribute("aria-hidden","true"),document.body.appendChild(e);let o=!1;const d=()=>{try{e&&e.parentNode&&e.parentNode.removeChild(e)}catch{}o=!0},c=setTimeout(()=>{o||(d(),l(new Error("Timeout: génération du récapitulatif trop longue.")))},i),f=t.replace("</body>",`<script src="${n}"><\/script></body>`);e.srcdoc=f,e.onload=async()=>{if(!o)try{const s=e.contentWindow,m=e.contentDocument,y=Date.now(),h=100;await new Promise((x,b)=>{const v=setInterval(()=>{if(o)return clearInterval(v),b(new Error("Aborted"));if(s.html2canvas)return clearInterval(v),x();if(Date.now()-y>Math.min(i,8e3))return clearInterval(v),b(new Error("html2canvas not loaded in iframe"))},h)});const u=m.getElementById("receipt-root")||m.body;if(!u)return d(),clearTimeout(c),l(new Error("No receipt node inside iframe"));const p=(await s.html2canvas(u,{backgroundColor:"#ffffff"})).toDataURL("image/png");d(),clearTimeout(c),r(p)}catch(s){d(),clearTimeout(c),l(s)}}})}function A(t,a){const i=t.readableId||t.id||"",n=document.getElementById("order-id");n&&(n.textContent=i);const r=document.getElementById("qrcode-container");r&&(r.innerHTML="",(async()=>{if(!t.id||!a){console.error("[QR] orderId ou storeId manquant pour la génération du QR code."),r.textContent="Erreur QR";return}const l=`zflex-order://${a}/${t.id}`,e=await I(l,160);if(e){const o=document.createElement("img");o.src=e,o.alt="QR Code de la commande",o.style.width="160px",o.style.height="160px",r.appendChild(o)}else{const o=document.createElement("span");o.textContent="QR indisponible",o.style.fontSize="12px",o.style.color="var(--text-muted-color, #6b7280)",r.appendChild(o)}})())}async function B(){const t=document.getElementById("loading-state"),a=document.getElementById("success-state"),i=document.getElementById("error-state"),n=document.getElementById("error-message");try{const l=new URLSearchParams(window.location.search).get("id");if(!l)throw new Error("ID de commande manquant dans l'URL.");const e=document.getElementById("zflex-data")||document.querySelector(".zflex-fragment-data");if(!e)throw new Error("Tunnel de data introuvable.");const d=JSON.parse(e.textContent||"{}").storeId;if(!d)throw new Error("ID du store introuvable dans les données de la page.");const c=await $(l,d);if(!(c!=null&&c.valid)||!(c!=null&&c.order))throw new Error((c==null?void 0:c.message)||"Commande invalide ou déjà traitée.");const f=c.order;f.createdAt=N(f.createdAt),A(f,d);const s=document.getElementById("download-receipt-btn");s&&s.addEventListener("click",async()=>{s.disabled=!0,s.textContent="Génération...";try{const m=`zflex-order://${d}/${f.id}`,y=await I(m,300),h=L(f,y),w=await q(h),u=document.createElement("a");u.href=w,u.download=`recap-commande-${f.id}.png`,document.body.appendChild(u),u.click(),u.remove()}catch(m){console.error("Erreur génération du récapitulatif:",m),E("Erreur",(m==null?void 0:m.message)||"Impossible de générer le récapitulatif.","error")}finally{s.disabled=!1,s.textContent="Télécharger le récapitulatif"}}),t&&(t.style.display="none"),a&&a.classList.remove("hidden")}catch(r){console.error("[OrderSuccess] Erreur:",r),n&&(n.textContent=(r==null?void 0:r.message)||"Impossible de récupérer la commande."),t&&(t.style.display="none"),i&&i.classList.remove("hidden"),E("Erreur de commande",(r==null?void 0:r.message)||"Impossible de récupérer les détails.","error")}}export{B as initOrderSuccess};
