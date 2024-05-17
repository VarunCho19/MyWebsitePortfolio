import{S as me,i as pe,s as he,y as L,z as P,A as M,g as b,d as I,B as q,k as D,a as V,q as H,l as E,m as C,c as y,h,r as J,n as w,b as B,D as $,v as K,f as R,u as $e,G as re,e as ne,F as _e,K as ve,J as be}from"../chunks/index.c588bb3f.js";import{g as xe,a as oe}from"../chunks/app.a0e0cf18.js";import{C as we}from"../chunks/Card.b1e2dec9.js";import{C as ke}from"../chunks/CardLogo.7beda8d6.js";import{C as De,a as Ee}from"../chunks/ChipIcon.d49ef756.js";import{g as O,U as Z}from"../chunks/UIcon.e3dcdc53.js";import{b as Q}from"../chunks/paths.33da64de.js";import{C as Ce}from"../chunks/Chip.9b4f71f8.js";import{S as Ie}from"../chunks/SearchPage.aec32788.js";import{t as Ve,i as X}from"../chunks/experience.c4af1896.js";import{i as ye}from"../chunks/index.e3d99064.js";function se(a,t,l){const e=a.slice();return e[6]=t[l],e}function ae(a,t,l){const e=a.slice();return e[9]=t[l],e}function Se(a){let t,l,e,r=a[9].label+"",s,c,f;return t=new Z({props:{icon:a[9].icon}}),{c(){L(t.$$.fragment),l=V(),e=D("span"),s=H(r),c=V(),this.h()},l(o){P(t.$$.fragment,o),l=y(o),e=E(o,"SPAN",{class:!0});var n=C(e);s=J(n,r),n.forEach(h),c=y(o),this.h()},h(){w(e,"class","m-l-1")},m(o,n){M(t,o,n),B(o,l,n),B(o,e,n),$(e,s),B(o,c,n),f=!0},p(o,n){const u={};n&2&&(u.icon=o[9].icon),t.$set(u),(!f||n&2)&&r!==(r=o[9].label+"")&&$e(s,r)},i(o){f||(b(t.$$.fragment,o),f=!0)},o(o){I(t.$$.fragment,o),f=!1},d(o){q(t,o),o&&h(l),o&&h(e),o&&h(c)}}}function ie(a){let t,l;return t=new Ce({props:{$$slots:{default:[Se]},$$scope:{ctx:a}}}),{c(){L(t.$$.fragment)},l(e){P(t.$$.fragment,e)},m(e,r){M(t,e,r),l=!0},p(e,r){const s={};r&4098&&(s.$$scope={dirty:r,ctx:e}),t.$set(s)},i(e){l||(b(t.$$.fragment,e),l=!0)},o(e){I(t.$$.fragment,e),l=!1},d(e){q(t,e)}}}function ce(a){let t,l;return t=new Ee({props:{logo:O(a[6].logo),name:a[6].name,href:`${Q}/skills/${a[6].slug}`}}),{c(){L(t.$$.fragment)},l(e){P(t.$$.fragment,e)},m(e,r){M(t,e,r),l=!0},p(e,r){const s={};r&1&&(s.logo=O(e[6].logo)),r&1&&(s.name=e[6].name),r&1&&(s.href=`${Q}/skills/${e[6].slug}`),t.$set(s)},i(e){l||(b(t.$$.fragment,e),l=!0)},o(e){I(t.$$.fragment,e),l=!1},d(e){q(t,e)}}}function Be(a){let t,l,e,r,s,c,f,o,n,u,x,A,k,v,S=a[0].shortDescription+"",N,W,U,G;l=new ke({props:{src:O(a[0].logo),alt:a[0].company,size:55}}),f=new De({props:{title:`${a[0].name}`}});let z=a[1],d=[];for(let i=0;i<z.length;i+=1)d[i]=ie(ae(a,z,i));const de=i=>I(d[i],1,1,()=>{d[i]=null});let T=a[0].skills,g=[];for(let i=0;i<T.length;i+=1)g[i]=ce(se(a,T,i));const ge=i=>I(g[i],1,1,()=>{g[i]=null});return{c(){t=D("div"),L(l.$$.fragment),e=V(),r=D("div"),s=D("div"),c=D("h3"),L(f.$$.fragment),o=V(),n=D("div");for(let i=0;i<d.length;i+=1)d[i].c();u=V(),x=D("div"),A=H(a[2]),k=V(),v=D("div"),N=H(S),W=V(),U=D("div");for(let i=0;i<g.length;i+=1)g[i].c();this.h()},l(i){t=E(i,"DIV",{class:!0});var p=C(t);P(l.$$.fragment,p),e=y(p),r=E(p,"DIV",{class:!0});var _=C(r);s=E(_,"DIV",{class:!0});var Y=C(s);c=E(Y,"H3",{class:!0});var m=C(c);P(f.$$.fragment,m),m.forEach(h),o=y(Y),n=E(Y,"DIV",{class:!0});var F=C(n);for(let j=0;j<d.length;j+=1)d[j].l(F);F.forEach(h),Y.forEach(h),u=y(_),x=E(_,"DIV",{class:!0});var ee=C(x);A=J(ee,a[2]),ee.forEach(h),k=y(_),v=E(_,"DIV",{class:!0});var te=C(v);N=J(te,S),te.forEach(h),W=y(_),U=E(_,"DIV",{class:!0});var le=C(U);for(let j=0;j<g.length;j+=1)g[j].l(le);le.forEach(h),_.forEach(h),p.forEach(h),this.h()},h(){w(c,"class","flex text-[0.9em] flex-col items-start sm:flex-row sm:items-center justify-between sm:gap-5 md:flex-col md:items-start md:gap-0 lg:flex-row lg:items-center"),w(n,"class","row flex-wrap items-start m-b-2 gap-1 text-0.9em font-300"),w(s,"class","col "),w(x,"class","text-[var(--text)] text-[0.9em] font-200"),w(v,"class","experience-description"),w(U,"class","flex flex-row flex-wrap mt-5"),w(r,"class","col ml-0 md:ml-[20px] gap-3 w-full"),w(t,"class","col md:flex-row items-start gap-5 md:gap-1")},m(i,p){B(i,t,p),M(l,t,null),$(t,e),$(t,r),$(r,s),$(s,c),M(f,c,null),$(s,o),$(s,n);for(let _=0;_<d.length;_+=1)d[_].m(n,null);$(r,u),$(r,x),$(x,A),$(r,k),$(r,v),$(v,N),$(r,W),$(r,U);for(let _=0;_<g.length;_+=1)g[_].m(U,null);G=!0},p(i,p){const _={};p&1&&(_.src=O(i[0].logo)),p&1&&(_.alt=i[0].company),l.$set(_);const Y={};if(p&1&&(Y.title=`${i[0].name}`),f.$set(Y),p&2){z=i[1];let m;for(m=0;m<z.length;m+=1){const F=ae(i,z,m);d[m]?(d[m].p(F,p),b(d[m],1)):(d[m]=ie(F),d[m].c(),b(d[m],1),d[m].m(n,null))}for(K(),m=z.length;m<d.length;m+=1)de(m);R()}if((!G||p&1)&&S!==(S=i[0].shortDescription+"")&&$e(N,S),p&1){T=i[0].skills;let m;for(m=0;m<T.length;m+=1){const F=se(i,T,m);g[m]?(g[m].p(F,p),b(g[m],1)):(g[m]=ce(F),g[m].c(),b(g[m],1),g[m].m(U,null))}for(K(),m=T.length;m<g.length;m+=1)ge(m);R()}},i(i){if(!G){b(l.$$.fragment,i),b(f.$$.fragment,i);for(let p=0;p<z.length;p+=1)b(d[p]);for(let p=0;p<T.length;p+=1)b(g[p]);G=!0}},o(i){I(l.$$.fragment,i),I(f.$$.fragment,i),d=d.filter(Boolean);for(let p=0;p<d.length;p+=1)I(d[p]);g=g.filter(Boolean);for(let p=0;p<g.length;p+=1)I(g[p]);G=!1},d(i){i&&h(t),q(l),q(f),re(d,i),re(g,i)}}}function Le(a){let t,l;return t=new we({props:{margin:"0px 0px 20px 0px",tiltDegree:2,href:`${Q}/experience/${a[0].slug}`,color:a[0].color,$$slots:{default:[Be]},$$scope:{ctx:a}}}),{c(){L(t.$$.fragment)},l(e){P(t.$$.fragment,e)},m(e,r){M(t,e,r),l=!0},p(e,[r]){const s={};r&1&&(s.href=`${Q}/experience/${e[0].slug}`),r&1&&(s.color=e[0].color),r&4099&&(s.$$scope={dirty:r,ctx:e}),t.$set(s)},i(e){l||(b(t.$$.fragment,e),l=!0)},o(e){I(t.$$.fragment,e),l=!1},d(e){q(t,e)}}}function Pe(a,t,l){let e,{experience:r}=t;const s=xe(r.period.from,r.period.to),c=`${oe(r.period.from.getMonth())} ${r.period.from.getFullYear()}`,f=r.period.to?`${oe(r.period.to.getMonth())} ${r.period.to.getFullYear()}`:"Present",o=`${c} - ${f} · ${s}`;return a.$$set=n=>{"experience"in n&&l(0,r=n.experience)},a.$$.update=()=>{a.$$.dirty&1&&l(1,e=[{label:r.company,icon:"i-carbon-building"},{label:r.location,icon:"i-carbon-location"},{label:r.contract,icon:"i-carbon-hourglass"}])},[r,e,o]}class Me extends me{constructor(t){super(),pe(this,t,Pe,Le,he,{experience:0})}}function fe(a,t,l){const e=a.slice();return e[2]=t[l],e[4]=l,e}function qe(a){let t,l,e=[],r=new Map,s,c,f=a[0];const o=n=>n[2].slug;for(let n=0;n<f.length;n+=1){let u=fe(a,f,n),x=o(u);r.set(x,e[n]=ue(x,u))}return{c(){t=D("div"),l=V();for(let n=0;n<e.length;n+=1)e[n].c();s=ne(),this.h()},l(n){t=E(n,"DIV",{class:!0}),C(t).forEach(h),l=y(n);for(let u=0;u<e.length;u+=1)e[u].l(n);s=ne(),this.h()},h(){w(t,"class","w-[0.5px] hidden lg:flex top-0 bottom-0 py-50px bg-[var(--border)] absolute rounded")},m(n,u){B(n,t,u),B(n,l,u);for(let x=0;x<e.length;x+=1)e[x].m(n,u);B(n,s,u),c=!0},p(n,u){u&1&&(f=n[0],K(),e=_e(e,u,o,1,n,f,r,s.parentNode,ve,ue,s,fe),R())},i(n){if(!c){for(let u=0;u<f.length;u+=1)b(e[u]);c=!0}},o(n){for(let u=0;u<e.length;u+=1)I(e[u]);c=!1},d(n){n&&h(t),n&&h(l);for(let u=0;u<e.length;u+=1)e[u].d(n);n&&h(s)}}}function Ae(a){let t,l,e,r,s,c;return l=new Z({props:{icon:"i-carbon-development",classes:"text-3.5em"}}),{c(){t=D("div"),L(l.$$.fragment),e=V(),r=D("p"),s=H("Could not find anything..."),this.h()},l(f){t=E(f,"DIV",{class:!0});var o=C(t);P(l.$$.fragment,o),e=y(o),r=E(o,"P",{class:!0});var n=C(r);s=J(n,"Could not find anything..."),n.forEach(h),o.forEach(h),this.h()},h(){w(r,"class","font-300"),w(t,"class","p-5 col-center gap-3 m-y-auto text-[var(--accent-text)] flex-1")},m(f,o){B(f,t,o),M(l,t,null),$(t,e),$(t,r),$(r,s),c=!0},p:be,i(f){c||(b(l.$$.fragment,f),c=!0)},o(f){I(l.$$.fragment,f),c=!1},d(f){f&&h(t),q(l)}}}function ue(a,t){let l,e,r,s,c,f,o,n,u,x,A;return c=new Z({props:{icon:"i-carbon-condition-point",classes:""}}),n=new Me({props:{experience:t[2]}}),{key:a,first:null,c(){l=D("div"),e=D("div"),r=V(),s=D("div"),L(c.$$.fragment),f=V(),o=D("div"),L(n.$$.fragment),u=V(),this.h()},l(k){l=E(k,"DIV",{class:!0});var v=C(l);e=E(v,"DIV",{class:!0}),C(e).forEach(h),r=y(v),s=E(v,"DIV",{class:!0});var S=C(s);P(c.$$.fragment,S),S.forEach(h),f=y(v),o=E(v,"DIV",{class:!0});var N=C(o);P(n.$$.fragment,N),N.forEach(h),u=y(v),v.forEach(h),this.h()},h(){w(e,"class","flex-1 hidden lg:flex"),w(s,"class","hidden lg:inline p-15px bg-[var(--main)] rounded"),w(o,"class","flex-1 col items-stretch"),w(l,"class",x=`flex ${t[4]%2!==0?"flex-row":"flex-row-reverse"} relative items-center w-full my-[10px]`),this.first=l},m(k,v){B(k,l,v),$(l,e),$(l,r),$(l,s),M(c,s,null),$(l,f),$(l,o),M(n,o,null),$(l,u),A=!0},p(k,v){t=k;const S={};v&1&&(S.experience=t[2]),n.$set(S),(!A||v&1&&x!==(x=`flex ${t[4]%2!==0?"flex-row":"flex-row-reverse"} relative items-center w-full my-[10px]`))&&w(l,"class",x)},i(k){A||(b(c.$$.fragment,k),b(n.$$.fragment,k),A=!0)},o(k){I(c.$$.fragment,k),I(n.$$.fragment,k),A=!1},d(k){k&&h(l),q(c),q(n)}}}function Fe(a){let t,l,e,r;const s=[Ae,qe],c=[];function f(o,n){return o[0].length===0?0:1}return l=f(a),e=c[l]=s[l](a),{c(){t=D("div"),e.c(),this.h()},l(o){t=E(o,"DIV",{class:!0});var n=C(t);e.l(n),n.forEach(h),this.h()},h(){w(t,"class","col items-center relative mt-10 flex-1")},m(o,n){B(o,t,n),c[l].m(t,null),r=!0},p(o,n){let u=l;l=f(o),l===u?c[l].p(o,n):(K(),I(c[u],1,1,()=>{c[u]=null}),R(),e=c[l],e?e.p(o,n):(e=c[l]=s[l](o),e.c()),b(e,1),e.m(t,null))},i(o){r||(b(e),r=!0)},o(o){I(e),r=!1},d(o){o&&h(t),c[l].d()}}}function Ne(a){let t,l;return t=new Ie({props:{title:Ve,$$slots:{default:[Fe]},$$scope:{ctx:a}}}),t.$on("search",a[1]),{c(){L(t.$$.fragment)},l(e){P(t.$$.fragment,e)},m(e,r){M(t,e,r),l=!0},p(e,[r]){const s={};r&33&&(s.$$scope={dirty:r,ctx:e}),t.$set(s)},i(e){l||(b(t.$$.fragment,e),l=!0)},o(e){I(t.$$.fragment,e),l=!1},d(e){q(t,e)}}}function Ue(a,t,l){let e=[...X];return[e,s=>{const c=s.detail.search;if(ye(c)){l(0,e=X);return}l(0,e=X.filter(f=>f.name.toLowerCase().includes(c)||f.company.toLowerCase().includes(c)||f.description.toLowerCase().includes(c)))}]}class We extends me{constructor(t){super(),pe(this,t,Ue,Ne,he,{})}}export{We as component};
