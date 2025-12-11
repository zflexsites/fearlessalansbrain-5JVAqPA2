import{f as S,s as E,_ as N}from"../js/app.js";function g(t=""){return String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function U(t){try{if(!t)return new Date;if(typeof t=="string"){const i=new Date(t);if(!isNaN(i.getTime()))return i;const r=Number(t);return isNaN(r)?new Date:new Date(r)}if(typeof t=="number")return t>1e12?new Date(t):t>1e9?new Date(t):new Date(t*1e3);if(t instanceof Date)return t;if(t&&typeof t.toDate=="function")try{return t.toDate()}catch{}const a=new Date(t);if(!isNaN(a.getTime()))return a}catch{}return new Date}function A(t){if(!t)return!1;try{return new URL(t,location.href).origin===location.origin}catch{return!1}}async function I(t,a=160){if(!t)return null;try{if(window.QRCode){const r=window.QRCode;if(typeof r.toDataURL=="function")return await new Promise((n,l)=>r.toDataURL(t,{width:a},(e,o)=>e?l(e):n(o)));if(typeof r.toCanvas=="function")return await new Promise((n,l)=>{try{const e=document.createElement("canvas");r.toCanvas(e,t,{width:a},o=>o?l(o):n(e.toDataURL("image/png")))}catch(e){l(e)}})}const i=await N(()=>import("./browser-BXdiCFWD.js").then(r=>r.b),[]).catch(()=>null);if(i){const r=i.toDataURL||i.default&&i.default.toDataURL;if(typeof r=="function")return await r(t,{width:a})}}catch(i){console.warn("[QR] génération échouée:",i)}return null}function L(t,a){var u,D,b;const i=t.readableId||t.id||"N/A",n=(t.createdAt instanceof Date?t.createdAt:new Date).toLocaleString("fr-FR",{day:"2-digit",month:"long",year:"numeric",hour:"2-digit",minute:"2-digit"}),l=Array.isArray(t.items)&&t.items.length?t.items.map(p=>{const w=p.quantity||1,v=p.title||p.id||"Produit",C=typeof p.price=="object"?Number(p.price.amount||0):Number(p.price||0),R=typeof p.price=="object"?p.price.currency||t.currency||"":t.currency||"",$=(C*w).toFixed(2);return`<div style="display:flex;justify-content:space-between;margin:6px 0;font-size:14px;line-height:1.2">
                    <div style="max-width:65%;overflow-wrap:break-word">${g(`${w} × ${v}`)}</div>
                    <div style="white-space:nowrap">${g($)} ${g(R)}</div>
                  </div>`}).join(""):'<div style="font-size:14px;color:var(--text-muted-color, #6b7280)">Aucun item disponible</div>',e=(typeof t.total=="object"?Number(t.total.amount||0):Number(t.total||0)).toFixed(2),o=(typeof t.total=="object"?t.total.currency:t.currency)||"",d=((u=t.store)==null?void 0:u.logoUrl)||null,c=d&&A(d),f=t.store&&t.store.name&&String(t.store.name).trim().charAt(0)||"B",s=`
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
  `,m=`
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
  `,y=c?`<img class="logo-img" src="${g(d)}" alt="${g(((D=t.store)==null?void 0:D.name)||"")}">`:`<div class="logo-sq" aria-hidden="true">${g(f)}</div>`,h=a?`<img src="${a}" alt="QR" style="width:120px;height:120px;object-fit:contain"/>`:'<div style="font-size:12px;color:var(--text-muted-color)">QR indisponible</div>',x=g(((b=t.store)==null?void 0:b.name)||"Boutique");return`<!doctype html>
<html>
<head>
  <meta charset="utf-8"/>
  <meta name="viewport" content="width=device-width,initial-scale=1"/>
  <script>${m}<\/script>
  <style>${s}</style>
</head>
<body>
  <div class="receipt" id="receipt-root" role="document" aria-label="Récapitulatif de commande">
    <div class="header">
      ${y}
      <h2 style="margin:0 0 6px 0;font-size:20px">Récapitulatif de commande</h2>
      <div style="font-size:12px;color:var(--text-muted-color)">${x}</div>
    </div>

    <div class="meta">
      <div>
        <div style="font-size:12px;color:var(--text-muted-color)">Commande N°</div>
        <div style="font-weight:700">${i}</div>
      </div>
      <div style="text-align:right">
        <div style="font-size:12px;color:var(--text-muted-color)">Date</div>
        <div>${g(n)}</div>
      </div>
    </div>

    <div class="items">${l}</div>

    <div class="footer">
      <div style="text-align:left">
        <div style="font-size:12px;color:var(--text-muted-color)">Total</div>
        <div style="font-weight:700;font-size:18px">${g(e)} ${g(o)}</div>
      </div>
      <div class="qrbox">${h}</div>
    </div>
  </div>
</body>
</html>`}async function q(t,a={}){const{timeoutMs:i=15e3,html2canvasCdn:r="https://cdn.jsdelivr.net/npm/html2canvas@1.4.1/dist/html2canvas.min.js"}=a;return new Promise((n,l)=>{const e=document.createElement("iframe");e.style.position="fixed",e.style.left="-9999px",e.style.top="0",e.style.width="900px",e.style.height="900px",e.setAttribute("aria-hidden","true"),document.body.appendChild(e);let o=!1;const d=()=>{try{e&&e.parentNode&&e.parentNode.removeChild(e)}catch{}o=!0},c=setTimeout(()=>{o||(d(),l(new Error("Timeout: génération du récapitulatif trop longue.")))},i),f=t.replace("</body>",`<script src="${r}"><\/script></body>`);e.srcdoc=f,e.onload=async()=>{if(!o)try{const s=e.contentWindow,m=e.contentDocument,y=Date.now(),h=100;await new Promise((p,w)=>{const v=setInterval(()=>{if(o)return clearInterval(v),w(new Error("Aborted"));if(s.html2canvas)return clearInterval(v),p();if(Date.now()-y>Math.min(i,8e3))return clearInterval(v),w(new Error("html2canvas not loaded in iframe"))},h)});const u=m.getElementById("receipt-root")||m.body;if(!u)return d(),clearTimeout(c),l(new Error("No receipt node inside iframe"));const b=(await s.html2canvas(u,{backgroundColor:"#ffffff"})).toDataURL("image/png");d(),clearTimeout(c),n(b)}catch(s){d(),clearTimeout(c),l(s)}}})}function z(t,a){const i=t.readableId||t.id||"",r=document.getElementById("order-id");r&&(r.textContent=i);const n=document.getElementById("qrcode-container");n&&(n.innerHTML="",(async()=>{if(!t.id||!a){console.error("[QR] orderId ou storeId manquant pour la génération du QR code."),n.textContent="Erreur QR";return}const l=`zflex-order://${a}/${t.id}`,e=await I(l,160);if(e){const o=document.createElement("img");o.src=e,o.alt="QR Code de la commande",o.style.width="160px",o.style.height="160px",n.appendChild(o)}else{const o=document.createElement("span");o.textContent="QR indisponible",o.style.fontSize="12px",o.style.color="var(--text-muted-color, #6b7280)",n.appendChild(o)}})())}async function T(){const t=document.getElementById("loading-state"),a=document.getElementById("success-state"),i=document.getElementById("error-state"),r=document.getElementById("error-message");try{const l=new URLSearchParams(window.location.search).get("id");if(!l)throw new Error("ID de commande manquant dans l'URL.");const e=document.getElementById("zflex-data")||document.querySelector(".zflex-fragment-data");if(!e)throw new Error("Tunnel de data introuvable.");const d=JSON.parse(e.textContent||"{}").storeId;if(!d)throw new Error("ID du store introuvable dans les données de la page.");const c=await S(l,d);if(!(c!=null&&c.valid)||!(c!=null&&c.order))throw new Error((c==null?void 0:c.message)||"Commande invalide ou déjà traitée.");const f=c.order;f.createdAt=U(f.createdAt),z(f,d);const s=document.getElementById("download-receipt-btn");s&&s.addEventListener("click",async()=>{s.disabled=!0,s.textContent="Génération...";try{const m=`zflex-order://${d}/${f.id}`,y=await I(m,300),h=L(f,y),x=await q(h),u=document.createElement("a");u.href=x,u.download=`recap-commande-${f.id}.png`,document.body.appendChild(u),u.click(),u.remove()}catch(m){console.error("Erreur génération du récapitulatif:",m),E("Erreur",(m==null?void 0:m.message)||"Impossible de générer le récapitulatif.","error")}finally{s.disabled=!1,s.textContent="Télécharger le récapitulatif"}}),t&&(t.style.display="none"),a&&a.classList.remove("hidden")}catch(n){console.error("[OrderSuccess] Erreur:",n),r&&(r.textContent=(n==null?void 0:n.message)||"Impossible de récupérer la commande."),t&&(t.style.display="none"),i&&i.classList.remove("hidden"),E("Erreur de commande",(n==null?void 0:n.message)||"Impossible de récupérer les détails.","error")}}export{T as initOrderSuccess};
