function x(){}const K=t=>t;function _t(t,e){for(const n in e)t[n]=e[n];return t}function Q(t){return t()}function G(){return Object.create(null)}function b(t){t.forEach(Q)}function O(t){return typeof t=="function"}function Rt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let k;function qt(t,e){return k||(k=document.createElement("a")),k.href=e,t===k.href}function dt(t){return Object.keys(t).length===0}function ht(t,...e){if(t==null)return x;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function zt(t,e,n){t.$$.on_destroy.push(ht(e,n))}function Bt(t,e,n,r){if(t){const i=W(t,e,n,r);return t[0](i)}}function W(t,e,n,r){return t[1]&&r?_t(n.ctx.slice(),t[1](r(e))):n.ctx}function Ht(t,e,n,r){if(t[2]&&r){const i=t[2](r(n));if(e.dirty===void 0)return i;if(typeof i=="object"){const o=[],s=Math.max(e.dirty.length,i.length);for(let u=0;u<s;u+=1)o[u]=e.dirty[u]|i[u];return o}return e.dirty|i}return e.dirty}function Lt(t,e,n,r,i,o){if(i){const s=W(e,n,r,o);t.p(s,i)}}function Ft(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let r=0;r<n;r++)e[r]=-1;return e}return-1}const U=typeof window<"u";let V=U?()=>window.performance.now():()=>Date.now(),H=U?t=>requestAnimationFrame(t):x;const $=new Set;function X(t){$.forEach(e=>{e.c(t)||($.delete(e),e.f())}),$.size!==0&&H(X)}function Y(t){let e;return $.size===0&&H(X),{promise:new Promise(n=>{$.add(e={c:t,f:n})}),abort(){$.delete(e)}}}let P=!1;function mt(){P=!0}function pt(){P=!1}function yt(t,e,n,r){for(;t<e;){const i=t+(e-t>>1);n(i)<=r?t=i+1:e=i}return t}function gt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let c=0;c<e.length;c++){const f=e[c];f.claim_order!==void 0&&l.push(f)}e=l}const n=new Int32Array(e.length+1),r=new Int32Array(e.length);n[0]=-1;let i=0;for(let l=0;l<e.length;l++){const c=e[l].claim_order,f=(i>0&&e[n[i]].claim_order<=c?i+1:yt(1,i,_=>e[n[_]].claim_order,c))-1;r[l]=n[f]+1;const a=f+1;n[a]=l,i=Math.max(a,i)}const o=[],s=[];let u=e.length-1;for(let l=n[i]+1;l!=0;l=r[l-1]){for(o.push(e[l-1]);u>=l;u--)s.push(e[u]);u--}for(;u>=0;u--)s.push(e[u]);o.reverse(),s.sort((l,c)=>l.claim_order-c.claim_order);for(let l=0,c=0;l<s.length;l++){for(;c<o.length&&s[l].claim_order>=o[c].claim_order;)c++;const f=c<o.length?o[c]:null;t.insertBefore(s[l],f)}}function xt(t,e){t.appendChild(e)}function Z(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function $t(t){const e=et("style");return bt(Z(t),e),e.sheet}function bt(t,e){return xt(t.head||t,e),e.sheet}function wt(t,e){if(P){for(gt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Gt(t,e,n){P&&!n?wt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function tt(t){t.parentNode&&t.parentNode.removeChild(t)}function It(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function et(t){return document.createElement(t)}function vt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function L(t){return document.createTextNode(t)}function Jt(){return L(" ")}function Kt(){return L("")}function Qt(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function Wt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Et(t){return Array.from(t.childNodes)}function Nt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function nt(t,e,n,r,i=!1){Nt(t);const o=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const u=t[s];if(e(u)){const l=n(u);return l===void 0?t.splice(s,1):t[s]=l,i||(t.claim_info.last_index=s),u}}for(let s=t.claim_info.last_index-1;s>=0;s--){const u=t[s];if(e(u)){const l=n(u);return l===void 0?t.splice(s,1):t[s]=l,i?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,u}}return r()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function it(t,e,n,r){return nt(t,i=>i.nodeName===e,i=>{const o=[];for(let s=0;s<i.attributes.length;s++){const u=i.attributes[s];n[u.name]||o.push(u.name)}o.forEach(s=>i.removeAttribute(s))},()=>r(e))}function Ut(t,e,n){return it(t,e,n,et)}function Vt(t,e,n){return it(t,e,n,vt)}function At(t,e){return nt(t,n=>n.nodeType===3,n=>{const r=""+e;if(n.data.startsWith(r)){if(n.data.length!==r.length)return n.splitText(r.length)}else n.data=r},()=>L(e),!0)}function Xt(t){return At(t," ")}function Yt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Zt(t,e,n,r){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,r?"important":"")}function kt(t,e,{bubbles:n=!1,cancelable:r=!1}={}){const i=document.createEvent("CustomEvent");return i.initCustomEvent(t,n,r,e),i}function te(t,e){const n=[];let r=0;for(const i of e.childNodes)if(i.nodeType===8){const o=i.textContent.trim();o===`HEAD_${t}_END`?(r-=1,n.push(i)):o===`HEAD_${t}_START`&&(r+=1,n.push(i))}else r>0&&n.push(i);return n}function ee(t,e){return new t(e)}const D=new Map;let M=0;function St(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Ct(t,e){const n={stylesheet:$t(e),rules:{}};return D.set(t,n),n}function rt(t,e,n,r,i,o,s,u=0){const l=16.666/r;let c=`{
`;for(let m=0;m<=1;m+=l){const p=e+(n-e)*o(m);c+=m*100+`%{${s(p,1-p)}}
`}const f=c+`100% {${s(n,1-n)}}
}`,a=`__svelte_${St(f)}_${u}`,_=Z(t),{stylesheet:d,rules:h}=D.get(_)||Ct(_,t);h[a]||(h[a]=!0,d.insertRule(`@keyframes ${a} ${f}`,d.cssRules.length));const y=t.style.animation||"";return t.style.animation=`${y?`${y}, `:""}${a} ${r}ms linear ${i}ms 1 both`,M+=1,a}function z(t,e){const n=(t.style.animation||"").split(", "),r=n.filter(e?o=>o.indexOf(e)<0:o=>o.indexOf("__svelte")===-1),i=n.length-r.length;i&&(t.style.animation=r.join(", "),M-=i,M||jt())}function jt(){H(()=>{M||(D.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&tt(e)}),D.clear())})}let N;function E(t){N=t}function st(){if(!N)throw new Error("Function called outside component initialization");return N}function ne(t){st().$$.on_mount.push(t)}function ie(t){st().$$.after_update.push(t)}const v=[],I=[],C=[],J=[],ot=Promise.resolve();let B=!1;function ct(){B||(B=!0,ot.then(lt))}function re(){return ct(),ot}function A(t){C.push(t)}const q=new Set;let S=0;function lt(){const t=N;do{for(;S<v.length;){const e=v[S];S++,E(e),Dt(e.$$)}for(E(null),v.length=0,S=0;I.length;)I.pop()();for(let e=0;e<C.length;e+=1){const n=C[e];q.has(n)||(q.add(n),n())}C.length=0}while(v.length);for(;J.length;)J.pop()();B=!1,q.clear(),E(t)}function Dt(t){if(t.fragment!==null){t.update(),b(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(A)}}let w;function ut(){return w||(w=Promise.resolve(),w.then(()=>{w=null})),w}function T(t,e,n){t.dispatchEvent(kt(`${e?"intro":"outro"}${n}`))}const j=new Set;let g;function se(){g={r:0,c:[],p:g}}function oe(){g.r||b(g.c),g=g.p}function Mt(t,e){t&&t.i&&(j.delete(t),t.i(e))}function ce(t,e,n,r){if(t&&t.o){if(j.has(t))return;j.add(t),g.c.push(()=>{j.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}else r&&r()}const at={duration:0};function le(t,e,n){const r={direction:"in"};let i=e(t,n,r),o=!1,s,u,l=0;function c(){s&&z(t,s)}function f(){const{delay:_=0,duration:d=300,easing:h=K,tick:y=x,css:m}=i||at;m&&(s=rt(t,0,1,d,_,h,m,l++)),y(0,1);const p=V()+_,ft=p+d;u&&u.abort(),o=!0,A(()=>T(t,!0,"start")),u=Y(R=>{if(o){if(R>=ft)return y(1,0),T(t,!0,"end"),c(),o=!1;if(R>=p){const F=h((R-p)/d);y(F,1-F)}}return o})}let a=!1;return{start(){a||(a=!0,z(t),O(i)?(i=i(r),ut().then(f)):f())},invalidate(){a=!1},end(){o&&(c(),o=!1)}}}function ue(t,e,n){const r={direction:"out"};let i=e(t,n,r),o=!0,s;const u=g;u.r+=1;function l(){const{delay:c=0,duration:f=300,easing:a=K,tick:_=x,css:d}=i||at;d&&(s=rt(t,1,0,f,c,a,d));const h=V()+c,y=h+f;A(()=>T(t,!1,"start")),Y(m=>{if(o){if(m>=y)return _(0,1),T(t,!1,"end"),--u.r||b(u.c),!1;if(m>=h){const p=a((m-h)/f);_(1-p,p)}}return o})}return O(i)?ut().then(()=>{i=i(r),l()}):l(),{end(c){c&&i.tick&&i.tick(1,0),o&&(s&&z(t,s),o=!1)}}}function ae(t){t&&t.c()}function fe(t,e){t&&t.l(e)}function Tt(t,e,n,r){const{fragment:i,after_update:o}=t.$$;i&&i.m(e,n),r||A(()=>{const s=t.$$.on_mount.map(Q).filter(O);t.$$.on_destroy?t.$$.on_destroy.push(...s):b(s),t.$$.on_mount=[]}),o.forEach(A)}function Ot(t,e){const n=t.$$;n.fragment!==null&&(b(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Pt(t,e){t.$$.dirty[0]===-1&&(v.push(t),ct(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function _e(t,e,n,r,i,o,s,u=[-1]){const l=N;E(t);const c=t.$$={fragment:null,ctx:[],props:o,update:x,not_equal:i,bound:G(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:G(),dirty:u,skip_bound:!1,root:e.target||l.$$.root};s&&s(c.root);let f=!1;if(c.ctx=n?n(t,e.props||{},(a,_,...d)=>{const h=d.length?d[0]:_;return c.ctx&&i(c.ctx[a],c.ctx[a]=h)&&(!c.skip_bound&&c.bound[a]&&c.bound[a](h),f&&Pt(t,a)),_}):[],c.update(),f=!0,b(c.before_update),c.fragment=r?r(c.ctx):!1,e.target){if(e.hydrate){mt();const a=Et(e.target);c.fragment&&c.fragment.l(a),a.forEach(tt)}else c.fragment&&c.fragment.c();e.intro&&Mt(t.$$.fragment),Tt(t,e.target,e.anchor,e.customElement),pt(),lt()}E(l)}class de{$destroy(){Ot(this,1),this.$destroy=x}$on(e,n){if(!O(n))return x;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const i=r.indexOf(n);i!==-1&&r.splice(i,1)}}$set(e){this.$$set&&!dt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{re as A,x as B,wt as C,vt as D,Vt as E,Bt as F,te as G,Lt as H,Ft as I,Ht as J,zt as K,It as L,K as M,Qt as N,qt as O,A as P,le as Q,ue as R,de as S,Jt as a,Gt as b,Xt as c,oe as d,Kt as e,Mt as f,se as g,tt as h,_e as i,ie as j,et as k,Ut as l,Et as m,Wt as n,ne as o,Zt as p,L as q,At as r,Rt as s,ce as t,Yt as u,ee as v,ae as w,fe as x,Tt as y,Ot as z};
