import{M as ke,S as xe,i as Ie,s as _e,k as _,q,a as D,l as v,m as k,r as M,h as u,c as P,n as f,b as j,C as n,N as ve,f as G,t as R,d as ge,u as K,L as Ee,K as oe,e as ae,g as be,B as He,O as Q,P as ie,Q as ne,R as ce}from"../../../chunks/index-ab5bf9d5.js";import{w as we}from"../../../chunks/index-7dab8ef4.js";function Se(l){const e=l-1;return e*e*e+1}function ue(l,{delay:e=0,duration:o=400,easing:a=ke}={}){const r=+getComputedStyle(l).opacity;return{delay:e,duration:o,easing:a,css:t=>`opacity: ${t*r}`}}function fe(l,{delay:e=0,duration:o=400,easing:a=Se,x:r=0,y:t=0,opacity:s=0}={}){const m=getComputedStyle(l),b=+m.opacity,I=m.transform==="none"?"":m.transform,S=b*(1-s);return{delay:e,duration:o,easing:a,css:(x,h)=>`
			transform: ${I} translate(${(1-x)*r}px, ${(1-x)*t}px);
			opacity: ${b-S*h}`}}const Z=[{name:"Vertig",image:"vertigo.png",description:"Lorem Ipsum"},{name:"Rion",image:"rion.jpg",description:"Lorem Ipsum"},{name:"Virus",image:"birus.jpg",description:"Lorem Ipsum"},{name:"HB",image:"hb.png",description:"Lorem Ipsum"},{name:"Heatwave",image:"heatwave.jpg",description:"Lorem Ipsum"},{name:"Zang",image:"zang.png",description:"Lorem Ipsum"},{name:"Inked",image:"inked.jpg",description:"Lorem Ipsum"}];let F=-1,ye=we(),J=we(-1);J.subscribe(l=>F=l);function Ve(){F!=-1&&ye.set(Z[F])}function de(l,e,o){const a=l.slice();return a[3]=e[o],a[5]=o,a}function me(l){let e=l[0],o,a,r=he(l);return{c(){r.c(),o=ae()},l(t){r.l(t),o=ae()},m(t,s){r.m(t,s),j(t,o,s),a=!0},p(t,s){s&1&&_e(e,e=t[0])?(be(),R(r,1,1,He),ge(),r=he(t),r.c(),G(r,1),r.m(o.parentNode,o)):r.p(t,s)},i(t){a||(G(r),a=!0)},o(t){R(r),a=!1},d(t){t&&u(o),r.d(t)}}}function he(l){let e,o,a,r,t,s,m,b=l[0].name+"",I,S,x,h=l[0].description+"",V,E,d,w;return{c(){e=_("img"),t=D(),s=_("div"),m=_("h1"),I=q(b),S=D(),x=_("p"),V=q(h),this.h()},l(c){e=v(c,"IMG",{src:!0,class:!0,alt:!0}),t=P(c),s=v(c,"DIV",{class:!0});var y=k(s);m=v(y,"H1",{class:!0});var C=k(m);I=M(C,b),C.forEach(u),S=P(y),x=v(y,"P",{class:!0});var T=k(x);V=M(T,h),T.forEach(u),y.forEach(u),this.h()},h(){Q(e.src,o="images/ow/"+l[0].image)||f(e,"src",o),f(e,"class","h-96 grow w-1/2 object-contain"),f(e,"alt","selected hero"),f(m,"class","text-6xl font-bignoodle"),f(x,"class","text-xl font-montserrat"),f(s,"class","grow w-2/4")},m(c,y){j(c,e,y),j(c,t,y),j(c,s,y),n(s,m),n(m,I),n(s,S),n(s,x),n(x,V),w=!0},p(c,y){(!w||y&1&&!Q(e.src,o="images/ow/"+c[0].image))&&f(e,"src",o),(!w||y&1)&&b!==(b=c[0].name+"")&&K(I,b),(!w||y&1)&&h!==(h=c[0].description+"")&&K(V,h)},i(c){w||(ie(()=>{r&&r.end(1),a=ne(e,fe,{x:-100,duration:1e3}),a.start()}),ie(()=>{d&&d.end(1),E=ne(s,fe,{x:100,duration:1e3}),E.start()}),w=!0)},o(c){a&&a.invalidate(),r=ce(e,ue,{duration:0}),E&&E.invalidate(),d=ce(s,ue,{duration:0}),w=!1},d(c){c&&u(e),c&&r&&r.end(),c&&u(t),c&&u(s),c&&d&&d.end()}}}function pe(l){let e,o,a,r,t,s,m,b=l[3].name+"",I,S,x,h;function V(){return l[2](l[5])}return{c(){e=_("button"),o=_("button"),a=_("img"),s=D(),m=_("p"),I=q(b),S=D(),this.h()},l(E){e=v(E,"BUTTON",{class:!0});var d=k(e);o=v(d,"BUTTON",{class:!0});var w=k(o);a=v(w,"IMG",{class:!0,src:!0,alt:!0}),w.forEach(u),s=P(d),m=v(d,"P",{class:!0});var c=k(m);I=M(c,b),c.forEach(u),S=P(d),d.forEach(u),this.h()},h(){f(a,"class","w-full h-full object-cover"),Q(a.src,r="images/ow/"+l[3].image)||f(a,"src",r),f(a,"alt",l[3].name),f(o,"class",t=(l[1]===l[5]?"grayscale-0  border-yellow-500 shadow-yellow-600 shadow-xl":"")+" w-24 h-24 grayscale hover:grayscale-0 border-4 hover:border-yellow-500 -skew-x-12"),f(m,"class","grow-0 font-bignoodle text-3xl -skew-x-6 text-left -ml-3"),f(e,"class","flex flex-col flex-wrap hover:scale-110")},m(E,d){j(E,e,d),n(e,o),n(o,a),n(e,s),n(e,m),n(m,I),n(e,S),x||(h=ve(e,"click",V),x=!0)},p(E,d){l=E,d&2&&t!==(t=(l[1]===l[5]?"grayscale-0  border-yellow-500 shadow-yellow-600 shadow-xl":"")+" w-24 h-24 grayscale hover:grayscale-0 border-4 hover:border-yellow-500 -skew-x-12")&&f(o,"class",t)},d(E){E&&u(e),x=!1,h()}}}function Le(l){let e,o,a,r,t,s,m,b,I=l[0]?"Selected hero: "+l[0].name:"Please select your hero",S,x,h,V,E,d,w,c,y,C,T,N,W,U,z,X,p=l[0]&&me(l),B=Z,H=[];for(let i=0;i<B.length;i+=1)H[i]=pe(de(l,B,i));return{c(){e=_("h1"),o=q("OW Style Hero Picker"),a=D(),r=_("section"),t=_("div"),s=_("div"),p&&p.c(),m=D(),b=_("h3"),S=q(I),x=D(),h=_("section"),V=_("div"),E=D(),d=_("div"),w=_("div");for(let i=0;i<H.length;i+=1)H[i].c();c=D(),y=_("div"),C=D(),T=_("div"),N=_("button"),W=q("Select"),this.h()},l(i){e=v(i,"H1",{class:!0});var L=k(e);o=M(L,"OW Style Hero Picker"),L.forEach(u),a=P(i),r=v(i,"SECTION",{});var g=k(r);t=v(g,"DIV",{class:!0});var O=k(t);s=v(O,"DIV",{class:!0});var Y=k(s);p&&p.l(Y),Y.forEach(u),m=P(O),b=v(O,"H3",{class:!0});var ee=k(b);S=M(ee,I),ee.forEach(u),x=P(O),h=v(O,"SECTION",{class:!0});var $=k(h);V=v($,"DIV",{id:!0}),k(V).forEach(u),E=P($),d=v($,"DIV",{id:!0});var te=k(d);w=v(te,"DIV",{class:!0});var le=k(w);for(let A=0;A<H.length;A+=1)H[A].l(le);le.forEach(u),te.forEach(u),c=P($),y=v($,"DIV",{id:!0}),k(y).forEach(u),$.forEach(u),C=P(O),T=v(O,"DIV",{});var se=k(T);N=v(se,"BUTTON",{class:!0});var re=k(N);W=M(re,"Select"),re.forEach(u),se.forEach(u),O.forEach(u),g.forEach(u),this.h()},h(){f(e,"class","text-xl px-10 font-mono"),f(s,"class","flex flex-row h-96 w-3/5 gap-10"),f(b,"class","text-4xl font-bignoodle my-5"),f(V,"id","tanks"),f(w,"class","flex flex-row flex-wrap gap-3 px-6 md:px-0"),f(d,"id","dps"),f(y,"id","supports"),f(h,"class","flex flex-row flex-wrap gap-2"),f(N,"class","bg-orange-500 text-2xl p-1 w-32 font-bignoodle mt-5"),f(t,"class","flex grow flex-col justify-center items-center")},m(i,L){j(i,e,L),n(e,o),j(i,a,L),j(i,r,L),n(r,t),n(t,s),p&&p.m(s,null),n(t,m),n(t,b),n(b,S),n(t,x),n(t,h),n(h,V),n(h,E),n(h,d),n(d,w);for(let g=0;g<H.length;g+=1)H[g].m(w,null);n(h,c),n(h,y),n(t,C),n(t,T),n(T,N),n(N,W),U=!0,z||(X=ve(N,"click",Ve),z=!0)},p(i,[L]){if(i[0]?p?(p.p(i,L),L&1&&G(p,1)):(p=me(i),p.c(),G(p,1),p.m(s,null)):p&&(be(),R(p,1,1,()=>{p=null}),ge()),(!U||L&1)&&I!==(I=i[0]?"Selected hero: "+i[0].name:"Please select your hero")&&K(S,I),L&2){B=Z;let g;for(g=0;g<B.length;g+=1){const O=de(i,B,g);H[g]?H[g].p(O,L):(H[g]=pe(O),H[g].c(),H[g].m(w,null))}for(;g<H.length;g+=1)H[g].d(1);H.length=B.length}},i(i){U||(G(p),U=!0)},o(i){R(p),U=!1},d(i){i&&u(e),i&&u(a),i&&u(r),p&&p.d(),Ee(H,i),z=!1,X()}}}function Oe(l,e,o){let a,r;return oe(l,ye,s=>o(0,a=s)),oe(l,J,s=>o(1,r=s)),[a,r,s=>J.set(s)]}class Te extends xe{constructor(e){super(),Ie(this,e,Oe,Le,_e,{})}}export{Te as default};