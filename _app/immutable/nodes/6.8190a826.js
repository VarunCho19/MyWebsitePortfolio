import{S as pe,i as _e,s as he,k as P,y,l as V,m as q,z as L,h as m,n as D,b as k,A as B,g as p,d,B as M,a as z,q as X,c as A,r as Z,D as U,v as ee,f as te,u as le,G as ce,o as Ue,e as be,J as ze}from"../chunks/index.c588bb3f.js";import{t as Ae,i as ke}from"../chunks/projects.587e92b9.js";import{i as Fe}from"../chunks/skills.d8980751.js";import{C as ge}from"../chunks/Chip.9b4f71f8.js";import{c as Ne,g as Re,a as we}from"../chunks/app.a0e0cf18.js";import{C as Te}from"../chunks/Card.b1e2dec9.js";import{C as Ye,a as Ge}from"../chunks/ChipIcon.d49ef756.js";import{U as Le,g as ue}from"../chunks/UIcon.e3dcdc53.js";import{C as Ce}from"../chunks/CardDivider.a3bdedab.js";import{C as Je}from"../chunks/CardLogo.7beda8d6.js";import{b as me}from"../chunks/paths.33da64de.js";import{S as He}from"../chunks/SearchPage.aec32788.js";function Ke(o){let t,r,e;return r=new Le({props:{icon:"i-carbon-link",classes:"text-[var(--secondary-text)]"}}),{c(){t=P("a"),y(r.$$.fragment),this.h()},l(l){t=V(l,"A",{class:!0,href:!0,title:!0,target:!0,rel:!0,"data-help":!0});var s=q(t);L(r.$$.fragment,s),s.forEach(m),this.h()},h(){D(t,"class","card-link row-center relative m-x-2.5px border-1px border-solid border-[var(--border)] p-5px rounded-10px text-inherit svelte-18qy750"),D(t,"href",o[1]),D(t,"title",o[0]),D(t,"target","_blank"),D(t,"rel","noreferrer"),D(t,"data-help",o[0])},m(l,s){k(l,t,s),B(r,t,null),e=!0},p(l,[s]){(!e||s&2)&&D(t,"href",l[1]),(!e||s&1)&&D(t,"title",l[0]),(!e||s&1)&&D(t,"data-help",l[0])},i(l){e||(p(r.$$.fragment,l),e=!0)},o(l){d(r.$$.fragment,l),e=!1},d(l){l&&m(t),M(r)}}}function Oe(o,t,r){let{label:e}=t,{to:l}=t;return o.$$set=s=>{"label"in s&&r(0,e=s.label),"to"in s&&r(1,l=s.to)},[e,l]}class Qe extends pe{constructor(t){super(),_e(this,t,Oe,Ke,he,{label:0,to:1})}}function De(o,t,r){const e=o.slice();return e[5]=t[r],e}function je(o,t,r){const e=o.slice();return e[8]=t[r],e}function Se(o){let t,r;return t=new Qe({props:{label:o[8].label??"",to:o[8].to}}),{c(){y(t.$$.fragment)},l(e){L(t.$$.fragment,e)},m(e,l){B(t,e,l),r=!0},p(e,l){const s={};l&1&&(s.label=e[8].label??""),l&1&&(s.to=e[8].to),t.$set(s)},i(e){r||(p(t.$$.fragment,e),r=!0)},o(e){d(t.$$.fragment,e),r=!1},d(e){M(t,e)}}}function We(o){let t;return{c(){t=X(o[2])},l(r){t=Z(r,o[2])},m(r,e){k(r,t,e)},p(r,e){e&4&&le(t,r[2])},d(r){r&&m(t)}}}function Ee(o){let t,r;return t=new ge({props:{$$slots:{default:[Xe]},$$scope:{ctx:o}}}),{c(){y(t.$$.fragment)},l(e){L(t.$$.fragment,e)},m(e,l){B(t,e,l),r=!0},p(e,l){const s={};l&2050&&(s.$$scope={dirty:l,ctx:e}),t.$set(s)},i(e){r||(p(t.$$.fragment,e),r=!0)},o(e){d(t.$$.fragment,e),r=!1},d(e){M(t,e)}}}function Xe(o){let t;return{c(){t=X(o[1])},l(r){t=Z(r,o[1])},m(r,e){k(r,t,e)},p(r,e){e&2&&le(t,r[1])},d(r){r&&m(t)}}}function Ie(o){let t,r;return t=new Ge({props:{logo:ue(o[5].logo),name:o[5].name,href:`${me}/skills/${o[5].slug}`}}),{c(){y(t.$$.fragment)},l(e){L(t.$$.fragment,e)},m(e,l){B(t,e,l),r=!0},p(e,l){const s={};l&1&&(s.logo=ue(e[5].logo)),l&1&&(s.name=e[5].name),l&1&&(s.href=`${me}/skills/${e[5].slug}`),t.$set(s)},i(e){r||(p(t.$$.fragment,e),r=!0)},o(e){d(t.$$.fragment,e),r=!1},d(e){M(t,e)}}}function Ze(o){let t,r,e,l,s,i,u,a,E,h,g,S=o[0].type+"",c,_,j,w,Y,G,x,re=o[0].shortDescription+"",oe,se,F,N,$e,ae,J,ie,R,H;t=new Je({props:{alt:o[0].name,src:ue(o[0].logo),size:40,radius:"0"}}),l=new Ye({props:{title:o[0].name}});let K=o[0].links,v=[];for(let n=0;n<K.length;n+=1)v[n]=Se(je(o,K,n));const Be=n=>d(v[n],1,1,()=>{v[n]=null});a=new Ce({}),N=new ge({props:{$$slots:{default:[We]},$$scope:{ctx:o}}});let C=o[2]!==o[1]&&Ee(o);J=new Ce({});let O=o[0].skills,b=[];for(let n=0;n<O.length;n+=1)b[n]=Ie(De(o,O,n));const Me=n=>d(b[n],1,1,()=>{b[n]=null});return{c(){y(t.$$.fragment),r=z(),e=P("div"),y(l.$$.fragment),s=z(),i=P("div");for(let n=0;n<v.length;n+=1)v[n].c();u=z(),y(a.$$.fragment),E=z(),h=P("div"),g=P("p"),c=X(S),_=z(),j=P("p"),w=X(o[3]),Y=z(),G=P("div"),x=P("p"),oe=X(re),se=z(),F=P("div"),y(N.$$.fragment),$e=z(),C&&C.c(),ae=z(),y(J.$$.fragment),ie=z(),R=P("div");for(let n=0;n<b.length;n+=1)b[n].c();this.h()},l(n){L(t.$$.fragment,n),r=A(n),e=V(n,"DIV",{class:!0});var f=q(e);L(l.$$.fragment,f),s=A(f),i=V(f,"DIV",{class:!0});var I=q(i);for(let W=0;W<v.length;W+=1)v[W].l(I);I.forEach(m),f.forEach(m),u=A(n),L(a.$$.fragment,n),E=A(n),h=V(n,"DIV",{class:!0});var Q=q(h);g=V(Q,"P",{});var ne=q(g);c=Z(ne,S),ne.forEach(m),_=A(Q),j=V(Q,"P",{});var $=q(j);w=Z($,o[3]),$.forEach(m),Q.forEach(m),Y=A(n),G=V(n,"DIV",{class:!0});var T=q(G);x=V(T,"P",{class:!0});var de=q(x);oe=Z(de,re),de.forEach(m),T.forEach(m),se=A(n),F=V(n,"DIV",{class:!0});var fe=q(F);L(N.$$.fragment,fe),$e=A(fe),C&&C.l(fe),fe.forEach(m),ae=A(n),L(J.$$.fragment,n),ie=A(n),R=V(n,"DIV",{class:!0});var ve=q(R);for(let W=0;W<b.length;W+=1)b[W].l(ve);ve.forEach(m),this.h()},h(){D(i,"class","row"),D(e,"class","m-t-20px row justify-between items-center"),D(h,"class","row m-b-15px justify-between text-[var(--secondary-text)] text-0.9em font-italic font-300"),D(x,"class","text-[0.95em] text-[var(--secondary-text)] font-300 m-t-20px m-b-40px flex-1 line-clamp-3"),D(G,"class","col sm:h-100px md:h-160px"),D(F,"class","row justify-between text-0.8em font-400"),D(R,"class","row flex-wrap")},m(n,f){B(t,n,f),k(n,r,f),k(n,e,f),B(l,e,null),U(e,s),U(e,i);for(let I=0;I<v.length;I+=1)v[I].m(i,null);k(n,u,f),B(a,n,f),k(n,E,f),k(n,h,f),U(h,g),U(g,c),U(h,_),U(h,j),U(j,w),k(n,Y,f),k(n,G,f),U(G,x),U(x,oe),k(n,se,f),k(n,F,f),B(N,F,null),U(F,$e),C&&C.m(F,null),k(n,ae,f),B(J,n,f),k(n,ie,f),k(n,R,f);for(let I=0;I<b.length;I+=1)b[I].m(R,null);H=!0},p(n,f){const I={};f&1&&(I.alt=n[0].name),f&1&&(I.src=ue(n[0].logo)),t.$set(I);const Q={};if(f&1&&(Q.title=n[0].name),l.$set(Q),f&1){K=n[0].links;let $;for($=0;$<K.length;$+=1){const T=je(n,K,$);v[$]?(v[$].p(T,f),p(v[$],1)):(v[$]=Se(T),v[$].c(),p(v[$],1),v[$].m(i,null))}for(ee(),$=K.length;$<v.length;$+=1)Be($);te()}(!H||f&1)&&S!==(S=n[0].type+"")&&le(c,S),(!H||f&8)&&le(w,n[3]),(!H||f&1)&&re!==(re=n[0].shortDescription+"")&&le(oe,re);const ne={};if(f&2052&&(ne.$$scope={dirty:f,ctx:n}),N.$set(ne),n[2]!==n[1]?C?(C.p(n,f),f&6&&p(C,1)):(C=Ee(n),C.c(),p(C,1),C.m(F,null)):C&&(ee(),d(C,1,1,()=>{C=null}),te()),f&1){O=n[0].skills;let $;for($=0;$<O.length;$+=1){const T=De(n,O,$);b[$]?(b[$].p(T,f),p(b[$],1)):(b[$]=Ie(T),b[$].c(),p(b[$],1),b[$].m(R,null))}for(ee(),$=O.length;$<b.length;$+=1)Me($);te()}},i(n){if(!H){p(t.$$.fragment,n),p(l.$$.fragment,n);for(let f=0;f<K.length;f+=1)p(v[f]);p(a.$$.fragment,n),p(N.$$.fragment,n),p(C),p(J.$$.fragment,n);for(let f=0;f<O.length;f+=1)p(b[f]);H=!0}},o(n){d(t.$$.fragment,n),d(l.$$.fragment,n),v=v.filter(Boolean);for(let f=0;f<v.length;f+=1)d(v[f]);d(a.$$.fragment,n),d(N.$$.fragment,n),d(C),d(J.$$.fragment,n),b=b.filter(Boolean);for(let f=0;f<b.length;f+=1)d(b[f]);H=!1},d(n){M(t,n),n&&m(r),n&&m(e),M(l),ce(v,n),n&&m(u),M(a,n),n&&m(E),n&&m(h),n&&m(Y),n&&m(G),n&&m(se),n&&m(F),M(N),C&&C.d(),n&&m(ae),M(J,n),n&&m(ie),n&&m(R),ce(b,n)}}}function xe(o){let t,r;return t=new Te({props:{color:o[0].color,href:`${me}/projects/${o[0].slug}`,$$slots:{default:[Ze]},$$scope:{ctx:o}}}),{c(){y(t.$$.fragment)},l(e){L(t.$$.fragment,e)},m(e,l){B(t,e,l),r=!0},p(e,[l]){const s={};l&1&&(s.color=e[0].color),l&1&&(s.href=`${me}/projects/${e[0].slug}`),l&2063&&(s.$$scope={dirty:l,ctx:e}),t.$set(s)},i(e){r||(p(t.$$.fragment,e),r=!0)},o(e){d(t.$$.fragment,e),r=!1},d(e){M(t,e)}}}function et(o,t,r){let e,l,s,{project:i}=t;return o.$$set=u=>{"project"in u&&r(0,i=u.project)},o.$$.update=()=>{o.$$.dirty&1&&Ne(i.period.from,i.period.to),o.$$.dirty&1&&r(3,e=`${Re(i.period.from,i.period.to??new Date(Date.now()+1e3*60*60*24))}`),o.$$.dirty&1&&r(2,l=`${we(i.period.from.getMonth())} ${i.period.from.getFullYear()}`),o.$$.dirty&1&&r(1,s=i.period.to?`${we(i.period.to.getMonth())} ${i.period.to.getFullYear()}`:"now")},[i,s,l,e]}class tt extends pe{constructor(t){super(),_e(this,t,et,xe,he,{project:0})}}function Pe(o,t,r){const e=o.slice();return e[7]=t[r],e}function Ve(o,t,r){const e=o.slice();return e[10]=t[r],e}function lt(o){let t=o[10].name+"",r;return{c(){r=X(t)},l(e){r=Z(e,t)},m(e,l){k(e,r,l)},p(e,l){l&1&&t!==(t=e[10].name+"")&&le(r,t)},d(e){e&&m(r)}}}function qe(o){let t,r;function e(){return o[5](o[10])}return t=new ge({props:{active:o[10].isSelected,classes:"text-0.8em",$$slots:{default:[lt]},$$scope:{ctx:o}}}),t.$on("click",e),{c(){y(t.$$.fragment)},l(l){L(t.$$.fragment,l)},m(l,s){B(t,l,s),r=!0},p(l,s){o=l;const i={};s&1&&(i.active=o[10].isSelected),s&8193&&(i.$$scope={dirty:s,ctx:o}),t.$set(i)},i(l){r||(p(t.$$.fragment,l),r=!0)},o(l){d(t.$$.fragment,l),r=!1},d(l){M(t,l)}}}function rt(o){let t,r,e=o[1],l=[];for(let i=0;i<e.length;i+=1)l[i]=ye(Pe(o,e,i));const s=i=>d(l[i],1,1,()=>{l[i]=null});return{c(){t=P("div");for(let i=0;i<l.length;i+=1)l[i].c();this.h()},l(i){t=V(i,"DIV",{class:!0});var u=q(t);for(let a=0;a<l.length;a+=1)l[a].l(u);u.forEach(m),this.h()},h(){D(t,"class","projects-list mt-5 svelte-f4z73x")},m(i,u){k(i,t,u);for(let a=0;a<l.length;a+=1)l[a].m(t,null);r=!0},p(i,u){if(u&2){e=i[1];let a;for(a=0;a<e.length;a+=1){const E=Pe(i,e,a);l[a]?(l[a].p(E,u),p(l[a],1)):(l[a]=ye(E),l[a].c(),p(l[a],1),l[a].m(t,null))}for(ee(),a=e.length;a<l.length;a+=1)s(a);te()}},i(i){if(!r){for(let u=0;u<e.length;u+=1)p(l[u]);r=!0}},o(i){l=l.filter(Boolean);for(let u=0;u<l.length;u+=1)d(l[u]);r=!1},d(i){i&&m(t),ce(l,i)}}}function nt(o){let t,r,e,l,s,i;return r=new Le({props:{icon:"i-carbon-cube",classes:"text-3.5em"}}),{c(){t=P("div"),y(r.$$.fragment),e=z(),l=P("p"),s=X("Could not find anything..."),this.h()},l(u){t=V(u,"DIV",{class:!0});var a=q(t);L(r.$$.fragment,a),e=A(a),l=V(a,"P",{class:!0});var E=q(l);s=Z(E,"Could not find anything..."),E.forEach(m),a.forEach(m),this.h()},h(){D(l,"class","font-300"),D(t,"class","p-5 col-center gap-3 m-y-auto text-[var(--accent-text)] flex-1")},m(u,a){k(u,t,a),B(r,t,null),U(t,e),U(t,l),U(l,s),i=!0},p:ze,i(u){i||(p(r.$$.fragment,u),i=!0)},o(u){d(r.$$.fragment,u),i=!1},d(u){u&&m(t),M(r)}}}function ye(o){let t,r;return t=new tt({props:{project:o[7]}}),{c(){y(t.$$.fragment)},l(e){L(t.$$.fragment,e)},m(e,l){B(t,e,l),r=!0},p(e,l){const s={};l&2&&(s.project=e[7]),t.$set(s)},i(e){r||(p(t.$$.fragment,e),r=!0)},o(e){d(t.$$.fragment,e),r=!1},d(e){M(t,e)}}}function ot(o){let t,r,e,l,s,i,u=o[0],a=[];for(let c=0;c<u.length;c+=1)a[c]=qe(Ve(o,u,c));const E=c=>d(a[c],1,1,()=>{a[c]=null}),h=[nt,rt],g=[];function S(c,_){return c[1].length===0?0:1}return e=S(o),l=g[e]=h[e](o),{c(){t=P("div");for(let c=0;c<a.length;c+=1)a[c].c();r=z(),l.c(),s=be(),this.h()},l(c){t=V(c,"DIV",{class:!0});var _=q(t);for(let j=0;j<a.length;j+=1)a[j].l(_);_.forEach(m),r=A(c),l.l(c),s=be(),this.h()},h(){D(t,"class","projects-filters")},m(c,_){k(c,t,_);for(let j=0;j<a.length;j+=1)a[j].m(t,null);k(c,r,_),g[e].m(c,_),k(c,s,_),i=!0},p(c,_){if(_&5){u=c[0];let w;for(w=0;w<u.length;w+=1){const Y=Ve(c,u,w);a[w]?(a[w].p(Y,_),p(a[w],1)):(a[w]=qe(Y),a[w].c(),p(a[w],1),a[w].m(t,null))}for(ee(),w=u.length;w<a.length;w+=1)E(w);te()}let j=e;e=S(c),e===j?g[e].p(c,_):(ee(),d(g[j],1,1,()=>{g[j]=null}),te(),l=g[e],l?l.p(c,_):(l=g[e]=h[e](c),l.c()),p(l,1),l.m(s.parentNode,s))},i(c){if(!i){for(let _=0;_<u.length;_+=1)p(a[_]);p(l),i=!0}},o(c){a=a.filter(Boolean);for(let _=0;_<a.length;_+=1)d(a[_]);d(l),i=!1},d(c){c&&m(t),ce(a,c),c&&m(r),g[e].d(c),c&&m(s)}}}function st(o){let t,r;return t=new He({props:{title:Ae,$$slots:{default:[ot]},$$scope:{ctx:o}}}),t.$on("search",o[3]),{c(){y(t.$$.fragment)},l(e){L(t.$$.fragment,e)},m(e,l){B(t,e,l),r=!0},p(e,[l]){const s={};l&8195&&(s.$$scope={dirty:l,ctx:e}),t.$set(s)},i(e){r||(p(t.$$.fragment,e),r=!0)},o(e){d(t.$$.fragment,e),r=!1},d(e){M(t,e)}}}function at(o,t,r){let e=Fe.filter(h=>ke.some(g=>g.skills.some(S=>S.slug===h.slug))),l="",s=[];const i=h=>e.some(g=>g.slug===h&&g.isSelected),u=h=>{r(0,e=e.map(g=>(g.slug===h&&(g.isSelected=!i(h)),g)))},a=h=>{r(4,l=h.detail.search)};Ue(()=>{if(location.search){const S=new URLSearchParams(location.search).get("item");S&&r(4,l=S)}});const E=h=>u(h.slug);return o.$$.update=()=>{o.$$.dirty&17&&r(1,s=ke.filter(h=>{const g=e.every(c=>!c.isSelected)||h.skills.some(c=>e.some(_=>_.isSelected&&_.slug===c.slug)),S=l.trim().length===0||h.name.trim().toLowerCase().includes(l.trim().toLowerCase());return g&&S}))},[e,s,u,a,l,E]}class bt extends pe{constructor(t){super(),_e(this,t,at,st,he,{})}}export{bt as component};
