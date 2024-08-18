import{i as ve,t as le}from"../chunks/projects.bdbf4138.js";import{S as de,i as pe,s as _e,e as re,b as T,J as R,h,k as w,q as O,a as N,l as E,m as j,r as G,c as S,n as k,D as m,E as B,$ as $e,u as K,H as he,L as q,y as z,z as A,A as L,d as P,f as Q,g as C,B as U,v as W,G as Z}from"../chunks/index.c588bb3f.js";import{b as ne}from"../chunks/paths.54ef4466.js";import{g as X,U as Y}from"../chunks/UIcon.dc971d46.js";import{C as be}from"../chunks/CardLogo.7beda8d6.js";import{M as ke}from"../chunks/app.7488977a.js";import{B as ye,M as we}from"../chunks/Banner.9a3c7b49.js";import{T as Ee}from"../chunks/TabTitle.0577ac6d.js";import{C as me}from"../chunks/Chip.9b4f71f8.js";import{C as ge}from"../chunks/CardDivider.a3bdedab.js";function je({params:n}){if(n.slug)return{project:ve.find(l=>l.slug===n.slug)}}const Ze=Object.freeze(Object.defineProperty({__proto__:null,load:je},Symbol.toStringTag,{value:"Module"}));function se(n){var v;let e,l,t,r,o=((v=n[0])==null?void 0:v.label)+"",a,s,i,c,p,y,f;return{c(){e=w("div"),l=w("div"),t=w("div"),r=w("p"),a=O(o),i=N(),c=w("p"),p=O("Click outside the frame to close"),this.h()},l(d){e=E(d,"DIV",{class:!0});var $=j(e);l=E($,"DIV",{class:!0});var D=j(l);t=E(D,"DIV",{class:!0,style:!0});var b=j(t);r=E(b,"P",{class:!0});var F=j(r);a=G(F,o),F.forEach(h),b.forEach(h),i=S(D),c=E(D,"P",{class:!0});var M=j(c);p=G(M,"Click outside the frame to close"),M.forEach(h),D.forEach(h),$.forEach(h),this.h()},h(){var d;k(r,"class","font-italic m-t-auto m-x-auto m-b-5 inline-flex bg-[var(--main-60)] border-solid border-1px border-[var(--border)] p-x-5 p-2 rounded-xl"),k(t,"class","aspect-video col bg-contain w-100% rounded-xl bg-no-repeat bg-contains bg-center"),k(t,"style",s=`background-image: url(${(d=n[0])==null?void 0:d.src});`),k(c,"class","text-[var(--accent-text)] text-0.7em"),k(l,"class","w-full w-100% md:w-80% lg:w-70% col text-center gap-5 bg-[var(--main)] border-solid border-1px border-[var(--border)] p-5 rounded-xl"),k(e,"class","fixed inset-0px top-51px bg-[#000000dd] col-center p-50px")},m(d,$){T(d,e,$),m(e,l),m(l,t),m(t,r),m(r,a),m(l,i),m(l,c),m(c,p),y||(f=[B(l,"click",Ie),B(l,"keydown",n[7]),B(l,"keypress",n[8]),B(l,"keyup",n[9]),B(l,"keyup",n[10]),B(e,"click",function(){$e(n[1])&&n[1].apply(this,arguments)}),B(e,"click",Ve),B(e,"keydown",n[3]),B(e,"keypress",n[4]),B(e,"keyup",n[5]),B(e,"keyup",n[6])],y=!0)},p(d,$){var D,b;n=d,$&1&&o!==(o=((D=n[0])==null?void 0:D.label)+"")&&K(a,o),$&1&&s!==(s=`background-image: url(${(b=n[0])==null?void 0:b.src});`)&&k(t,"style",s)},d(d){d&&h(e),y=!1,he(f)}}}function De(n){let e,l=n[2]&&se(n);return{c(){l&&l.c(),e=re()},l(t){l&&l.l(t),e=re()},m(t,r){l&&l.m(t,r),T(t,e,r)},p(t,[r]){t[2]?l?l.p(t,r):(l=se(t),l.c(),l.m(e.parentNode,e)):l&&(l.d(1),l=null)},i:R,o:R,d(t){l&&l.d(t),t&&h(e)}}}const Ie=n=>n.stopPropagation(),Ve=n=>n.stopPropagation();function Ce(n,e,l){let t,{screenshot:r=void 0}=e,{onClose:o=()=>{l(0,r=void 0)}}=e;function a(d){q.call(this,n,d)}function s(d){q.call(this,n,d)}function i(d){q.call(this,n,d)}function c(d){q.call(this,n,d)}function p(d){q.call(this,n,d)}function y(d){q.call(this,n,d)}function f(d){q.call(this,n,d)}function v(d){q.call(this,n,d)}return n.$$set=d=>{"screenshot"in d&&l(0,r=d.screenshot),"onClose"in d&&l(1,o=d.onClose)},n.$$.update=()=>{n.$$.dirty&1&&l(2,t=typeof r<"u")},[r,o,t,a,s,i,c,p,y,f,v]}class Pe extends de{constructor(e){super(),pe(this,e,Ce,De,_e,{screenshot:0,onClose:1})}}function oe(n,e,l){const t=n.slice();return t[11]=e[l],t[13]=l,t}function ae(n,e,l){const t=n.slice();return t[11]=e[l],t}function ie(n,e,l){const t=n.slice();return t[11]=e[l],t}function xe(n){let e,l,t,r,o,a,s,i,c,p,y,f,v,d;l=new ye({props:{img:X(n[0].project.logo),$$slots:{default:[Me]},$$scope:{ctx:n}}});const $=[Ae,ze],D=[];function b(V,u){return V[0].project.description?0:1}a=b(n),s=D[a]=$[a](n),p=new ge({});const F=[Ue,Le],M=[];function I(V,u){return V[4].length>0?0:1}return f=I(n),v=M[f]=F[f](n),{c(){e=w("div"),z(l.$$.fragment),t=N(),r=w("div"),o=w("div"),s.c(),i=N(),c=w("div"),z(p.$$.fragment),y=N(),v.c(),this.h()},l(V){e=E(V,"DIV",{class:!0});var u=j(e);A(l.$$.fragment,u),t=S(u),r=E(u,"DIV",{class:!0});var _=j(r);o=E(_,"DIV",{class:!0});var x=j(o);s.l(x),x.forEach(h),i=S(_),c=E(_,"DIV",{class:!0});var g=j(c);A(p.$$.fragment,g),g.forEach(h),y=S(_),v.l(_),_.forEach(h),u.forEach(h),this.h()},h(){k(o,"class","px-10px m-y-5"),k(c,"class","w-100% m-t-8"),k(r,"class","pt-3 pb-1 overflow-x-hidden w-full"),k(e,"class","flex flex-col items-center overflow-x-hidden")},m(V,u){T(V,e,u),L(l,e,null),m(e,t),m(e,r),m(r,o),D[a].m(o,null),m(r,i),m(r,c),L(p,c,null),m(r,y),M[f].m(r,null),d=!0},p(V,u){const _={};u&1&&(_.img=X(V[0].project.logo)),u&262145&&(_.$$scope={dirty:u,ctx:V}),l.$set(_);let x=a;a=b(V),a===x?D[a].p(V,u):(W(),P(D[x],1,1,()=>{D[x]=null}),Q(),s=D[a],s?s.p(V,u):(s=D[a]=$[a](V),s.c()),C(s,1),s.m(o,null)),v.p(V,u)},i(V){d||(C(l.$$.fragment,V),C(s),C(p.$$.fragment,V),C(v),d=!0)},o(V){P(l.$$.fragment,V),P(s),P(p.$$.fragment,V),P(v),d=!1},d(V){V&&h(e),U(l),D[a].d(),U(p),M[f].d()}}}function Ne(n){let e,l,t,r,o,a;return l=new Y({props:{icon:"i-carbon-cube",classes:"text-3.5em"}}),{c(){e=w("div"),z(l.$$.fragment),t=N(),r=w("p"),o=O("Could not load project data..."),this.h()},l(s){e=E(s,"DIV",{class:!0});var i=j(e);A(l.$$.fragment,i),t=S(i),r=E(i,"P",{class:!0});var c=j(r);o=G(c,"Could not load project data..."),c.forEach(h),i.forEach(h),this.h()},h(){k(r,"class","font-300"),k(e,"class","p-5 col-center gap-3 m-y-auto text-[var(--accent-text)]")},m(s,i){T(s,e,i),L(l,e,null),m(e,t),m(e,r),m(r,o),a=!0},p:R,i(s){a||(C(l.$$.fragment,s),a=!0)},o(s){P(l.$$.fragment,s),a=!1},d(s){s&&h(e),U(l)}}}function Se(n){let e=n[0].project.name+"",l;return{c(){l=O(e)},l(t){l=G(t,e)},m(t,r){T(t,l,r)},p(t,r){r&1&&e!==(e=t[0].project.name+"")&&K(l,e)},d(t){t&&h(l)}}}function Te(n){let e,l,t,r,o=n[11].label+"",a,s,i;return l=new Y({props:{icon:"i-carbon-link"}}),{c(){e=w("div"),z(l.$$.fragment),t=N(),r=w("span"),a=O(o),s=N(),this.h()},l(c){e=E(c,"DIV",{class:!0});var p=j(e);A(l.$$.fragment,p),t=S(p),r=E(p,"SPAN",{});var y=j(r);a=G(y,o),y.forEach(h),p.forEach(h),s=S(c),this.h()},h(){k(e,"class","row-center gap-2")},m(c,p){T(c,e,p),L(l,e,null),m(e,t),m(e,r),m(r,a),T(c,s,p),i=!0},p(c,p){(!i||p&1)&&o!==(o=c[11].label+"")&&K(a,o)},i(c){i||(C(l.$$.fragment,c),i=!0)},o(c){P(l.$$.fragment,c),i=!1},d(c){c&&h(e),U(l),c&&h(s)}}}function ce(n){let e,l;return e=new me({props:{href:n[11].to,$$slots:{default:[Te]},$$scope:{ctx:n}}}),{c(){z(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,r){L(e,t,r),l=!0},p(t,r){const o={};r&1&&(o.href=t[11].to),r&262145&&(o.$$scope={dirty:r,ctx:t}),e.$set(o)},i(t){l||(C(e.$$.fragment,t),l=!0)},o(t){P(e.$$.fragment,t),l=!1},d(t){U(e,t)}}}function Be(n){let e,l,t,r=n[11].name+"",o,a,s;return e=new be({props:{src:X(n[11].logo),alt:n[11].name,radius:"0px",size:15,classes:"mr-2"}}),{c(){z(e.$$.fragment),l=N(),t=w("span"),o=O(r),a=N(),this.h()},l(i){A(e.$$.fragment,i),l=S(i),t=E(i,"SPAN",{class:!0});var c=j(t);o=G(c,r),c.forEach(h),a=S(i),this.h()},h(){k(t,"class","text-[0.9em]")},m(i,c){L(e,i,c),T(i,l,c),T(i,t,c),m(t,o),T(i,a,c),s=!0},p(i,c){const p={};c&1&&(p.src=X(i[11].logo)),c&1&&(p.alt=i[11].name),e.$set(p),(!s||c&1)&&r!==(r=i[11].name+"")&&K(o,r)},i(i){s||(C(e.$$.fragment,i),s=!0)},o(i){P(e.$$.fragment,i),s=!1},d(i){U(e,i),i&&h(l),i&&h(t),i&&h(a)}}}function fe(n){let e,l;return e=new me({props:{classes:"inline-flex flex-row items-center justify-center",href:`${ne}/skills/${n[11].slug}`,$$slots:{default:[Be]},$$scope:{ctx:n}}}),{c(){z(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,r){L(e,t,r),l=!0},p(t,r){const o={};r&1&&(o.href=`${ne}/skills/${t[11].slug}`),r&262145&&(o.$$scope={dirty:r,ctx:t}),e.$set(o)},i(t){l||(C(e.$$.fragment,t),l=!0)},o(t){P(e.$$.fragment,t),l=!1},d(t){U(e,t)}}}function Me(n){let e,l,t,r,o,a=n[0].project.type+"",s,i,c,p,y,f,v,d,$;t=new ke({props:{$$slots:{default:[Se]},$$scope:{ctx:n}}}),p=new ge({});let D=n[0].project.links,b=[];for(let u=0;u<D.length;u+=1)b[u]=ce(ie(n,D,u));const F=u=>P(b[u],1,1,()=>{b[u]=null});let M=n[0].project.skills,I=[];for(let u=0;u<M.length;u+=1)I[u]=fe(ae(n,M,u));const V=u=>P(I[u],1,1,()=>{I[u]=null});return{c(){e=w("div"),l=w("div"),z(t.$$.fragment),r=N(),o=w("p"),s=O(a),i=N(),c=w("div"),z(p.$$.fragment),y=N(),f=w("div");for(let u=0;u<b.length;u+=1)b[u].c();v=N(),d=w("div");for(let u=0;u<I.length;u+=1)I[u].c();this.h()},l(u){e=E(u,"DIV",{class:!0});var _=j(e);l=E(_,"DIV",{class:!0});var x=j(l);A(t.$$.fragment,x),x.forEach(h),r=S(_),o=E(_,"P",{class:!0});var g=j(o);s=G(g,a),g.forEach(h),i=S(_),c=E(_,"DIV",{class:!0});var H=j(c);A(p.$$.fragment,H),H.forEach(h),y=S(_),f=E(_,"DIV",{class:!0});var ee=j(f);for(let J=0;J<b.length;J+=1)b[J].l(ee);ee.forEach(h),v=S(_),d=E(_,"DIV",{class:!0});var te=j(d);for(let J=0;J<I.length;J+=1)I[J].l(te);te.forEach(h),_.forEach(h),this.h()},h(){k(l,"class","text-0.9em"),k(o,"class","font-300 text-center text-[var(--tertiary-text)] m-y-2"),k(c,"class","w-75%"),k(f,"class","row-center flex-wrap text-[0.9em] text-[var(--tertiary-text)] m-b-2"),k(d,"class","row-center flex-wrap m-b-2"),k(e,"class","col-center p-y-20")},m(u,_){T(u,e,_),m(e,l),L(t,l,null),m(e,r),m(e,o),m(o,s),m(e,i),m(e,c),L(p,c,null),m(e,y),m(e,f);for(let x=0;x<b.length;x+=1)b[x].m(f,null);m(e,v),m(e,d);for(let x=0;x<I.length;x+=1)I[x].m(d,null);$=!0},p(u,_){const x={};if(_&262145&&(x.$$scope={dirty:_,ctx:u}),t.$set(x),(!$||_&1)&&a!==(a=u[0].project.type+"")&&K(s,a),_&1){D=u[0].project.links;let g;for(g=0;g<D.length;g+=1){const H=ie(u,D,g);b[g]?(b[g].p(H,_),C(b[g],1)):(b[g]=ce(H),b[g].c(),C(b[g],1),b[g].m(f,null))}for(W(),g=D.length;g<b.length;g+=1)F(g);Q()}if(_&1){M=u[0].project.skills;let g;for(g=0;g<M.length;g+=1){const H=ae(u,M,g);I[g]?(I[g].p(H,_),C(I[g],1)):(I[g]=fe(H),I[g].c(),C(I[g],1),I[g].m(d,null))}for(W(),g=M.length;g<I.length;g+=1)V(g);Q()}},i(u){if(!$){C(t.$$.fragment,u),C(p.$$.fragment,u);for(let _=0;_<D.length;_+=1)C(b[_]);for(let _=0;_<M.length;_+=1)C(I[_]);$=!0}},o(u){P(t.$$.fragment,u),P(p.$$.fragment,u),b=b.filter(Boolean);for(let _=0;_<b.length;_+=1)P(b[_]);I=I.filter(Boolean);for(let _=0;_<I.length;_+=1)P(I[_]);$=!1},d(u){u&&h(e),U(t),U(p),Z(b,u),Z(I,u)}}}function ze(n){let e,l,t,r,o,a;return l=new Y({props:{icon:"i-carbon-text-font",classes:"text-3.5em"}}),{c(){e=w("div"),z(l.$$.fragment),t=N(),r=w("p"),o=O("No description"),this.h()},l(s){e=E(s,"DIV",{class:!0});var i=j(e);A(l.$$.fragment,i),t=S(i),r=E(i,"P",{class:!0});var c=j(r);o=G(c,"No description"),c.forEach(h),i.forEach(h),this.h()},h(){k(r,"class","font-300"),k(e,"class","p-5 col-center gap-3 m-y-auto text-[var(--border)]")},m(s,i){T(s,e,i),L(l,e,null),m(e,t),m(e,r),m(r,o),a=!0},p:R,i(s){a||(C(l.$$.fragment,s),a=!0)},o(s){P(l.$$.fragment,s),a=!1},d(s){s&&h(e),U(l)}}}function Ae(n){let e,l;return e=new we({props:{content:n[0].project.description}}),{c(){z(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,r){L(e,t,r),l=!0},p(t,r){const o={};r&1&&(o.content=t[0].project.description),e.$set(o)},i(t){l||(C(e.$$.fragment,t),l=!0)},o(t){P(e.$$.fragment,t),l=!1},d(t){U(e,t)}}}function Le(n){let e,l,t,r,o,a;return l=new Y({props:{icon:"i-carbon-image",classes:"text-3.5em"}}),{c(){e=w("div"),z(l.$$.fragment),t=N(),r=w("p"),o=O("No screenshots"),this.h()},l(s){e=E(s,"DIV",{class:!0});var i=j(e);A(l.$$.fragment,i),t=S(i),r=E(i,"P",{class:!0});var c=j(r);o=G(c,"No screenshots"),c.forEach(h),i.forEach(h),this.h()},h(){k(r,"class","font-300"),k(e,"class","p-5 col-center gap-3 m-y-auto text-[var(--border)]")},m(s,i){T(s,e,i),L(l,e,null),m(e,t),m(e,r),m(r,o),a=!0},p:R,i(s){a||(C(l.$$.fragment,s),a=!0)},o(s){P(l.$$.fragment,s),a=!1},d(s){s&&h(e),U(l)}}}function Ue(n){let e,l=n[4],t=[];for(let r=0;r<l.length;r+=1)t[r]=ue(oe(n,l,r));return{c(){e=w("div");for(let r=0;r<t.length;r+=1)t[r].c();this.h()},l(r){e=E(r,"DIV",{class:!0});var o=j(e);for(let a=0;a<t.length;a+=1)t[a].l(o);o.forEach(h),this.h()},h(){k(e,"class","px-10px grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 m-t-10 ")},m(r,o){T(r,e,o);for(let a=0;a<t.length;a+=1)t[a].m(e,null)},p(r,o){if(o&18){l=r[4];let a;for(a=0;a<l.length;a+=1){const s=oe(r,l,a);t[a]?t[a].p(s,o):(t[a]=ue(s),t[a].c(),t[a].m(e,null))}for(;a<t.length;a+=1)t[a].d(1);t.length=l.length}},i:R,o:R,d(r){r&&h(e),Z(t,r)}}}function ue(n){let e,l,t,r,o=n[11].label+"",a,s,i,c;function p(){return n[9](n[13])}return{c(){e=w("div"),l=w("div"),t=N(),r=w("p"),a=O(o),s=N(),this.h()},l(y){e=E(y,"DIV",{class:!0});var f=j(e);l=E(f,"DIV",{class:!0,style:!0}),j(l).forEach(h),t=S(f),r=E(f,"P",{class:!0});var v=j(r);a=G(v,o),v.forEach(h),s=S(f),f.forEach(h),this.h()},h(){k(l,"class","screenshot aspect-video bg-contain w-100% cursor-pointer svelte-o4z7e5"),k(l,"style",`background-image: url(${n[11].src});`),k(r,"class","text-[var(--tertiary-text)] font-300"),k(e,"class","col-center gap-3 overflow-hidden w-100% h-100% rounded-10px")},m(y,f){T(y,e,f),m(e,l),m(e,t),m(e,r),m(r,a),m(e,s),i||(c=[B(e,"click",p),B(e,"keydown",n[5]),B(e,"keypress",n[6]),B(e,"keyup",n[7]),B(e,"keyup",n[8])],i=!0)},p(y,f){n=y},d(y){y&&h(e),i=!1,he(c)}}}function qe(n){let e,l,t,r,o,a,s,i;e=new Ee({props:{title:n[2]}});const c=[Ne,xe],p=[];function y(f,v){return f[0].project===void 0?0:1}return r=y(n),o=p[r]=c[r](n),s=new Pe({props:{screenshot:n[3],onClose:n[10]}}),{c(){z(e.$$.fragment),l=N(),t=w("div"),o.c(),a=N(),z(s.$$.fragment),this.h()},l(f){A(e.$$.fragment,f),l=S(f),t=E(f,"DIV",{class:!0});var v=j(t);o.l(v),v.forEach(h),a=S(f),A(s.$$.fragment,f),this.h()},h(){k(t,"class","pb-10 overflow-x-hidden col flex-1")},m(f,v){L(e,f,v),T(f,l,v),T(f,t,v),p[r].m(t,null),T(f,a,v),L(s,f,v),i=!0},p(f,[v]){const d={};v&4&&(d.title=f[2]),e.$set(d);let $=r;r=y(f),r===$?p[r].p(f,v):(W(),P(p[$],1,1,()=>{p[$]=null}),Q(),o=p[r],o?o.p(f,v):(o=p[r]=c[r](f),o.c()),C(o,1),o.m(t,null));const D={};v&8&&(D.screenshot=f[3]),v&2&&(D.onClose=f[10]),s.$set(D)},i(f){i||(C(e.$$.fragment,f),C(o),C(s.$$.fragment,f),i=!0)},o(f){P(e.$$.fragment,f),P(o),P(s.$$.fragment,f),i=!1},d(f){U(e,f),f&&h(l),f&&h(t),p[r].d(),f&&h(a),U(s,f)}}}function Oe(n,e,l){var d;let t,r,{data:o}=e;const a=((d=o.project)==null?void 0:d.screenshots)??[];let s;function i($){q.call(this,n,$)}function c($){q.call(this,n,$)}function p($){q.call(this,n,$)}function y($){q.call(this,n,$)}const f=$=>l(1,s=$),v=()=>l(1,s=void 0);return n.$$set=$=>{"data"in $&&l(0,o=$.data)},n.$$.update=()=>{n.$$.dirty&2&&l(3,t=typeof s<"u"&&a[s]?a[s]:void 0),n.$$.dirty&1&&l(2,r=o.project?`${o.project.name} - ${le}`:le)},[o,s,r,t,a,i,c,p,y,f,v]}class et extends de{constructor(e){super(),pe(this,e,Oe,qe,_e,{data:0})}}export{et as component,Ze as universal};