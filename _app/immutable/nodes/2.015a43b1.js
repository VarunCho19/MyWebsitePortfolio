import{S as Z,i as F,s as Y,k as w,y as U,a as x,l as A,m as k,z as j,h as d,c as V,n as m,b as H,D as b,A as G,E,g as y,d as T,B as q,G as f1,H as v1,o as d1,q as P,r as R,Q,u as p1,L as B,w as m1,R as K,T as W,J as N,U as z1,f as _1,v as g1}from"../chunks/index.c588bb3f.js";import{U as X,g as I}from"../chunks/UIcon.e3dcdc53.js";import{P as $}from"../chunks/types.1ebf2f37.js";import{u as e1,M as C1,t as t1}from"../chunks/app.a0e0cf18.js";import{s as M1,a as l1,n as r1,l as a1,t as s1,d as n1}from"../chunks/home.a714230b.js";import{i as b1}from"../chunks/skills.d8980751.js";import{i as L1}from"../chunks/index.e3d99064.js";function o1(e,t,l){const a=e.slice();return a[16]=t[l],a}function i1(e){let t,l,a,s,r,n,u=e[16].name+"",f,L;return{c(){t=w("div"),l=w("img"),r=x(),n=w("span"),f=P(u),L=x(),this.h()},l(p){t=A(p,"DIV",{class:!0});var C=k(t);l=A(C,"IMG",{class:!0,src:!0,alt:!0}),r=V(C),n=A(C,"SPAN",{class:!0});var M=k(n);f=R(M,u),M.forEach(d),L=V(C),C.forEach(d),this.h()},h(){m(l,"class","w-120px h-120px aspect-square"),Q(l.src,a=I(e[16].logo))||m(l,"src",a),m(l,"alt",s=e[16].name),m(n,"class","text-center m-t-20px"),m(t,"class","box-content w-150px p-15px col-center")},m(p,C){H(p,t,C),b(t,l),b(t,r),b(t,n),b(n,f),b(t,L)},p(p,C){C&1&&!Q(l.src,a=I(p[16].logo))&&m(l,"src",a),C&1&&s!==(s=p[16].name)&&m(l,"alt",s),C&1&&u!==(u=p[16].name+"")&&p1(f,u)},d(p){p&&d(t)}}}function k1(e){let t,l,a,s,r,n,u,f,L,p,C;a=new X({props:{icon:"i-carbon-chevron-left"}});let M=e[0],v=[];for(let h=0;h<M.length;h+=1)v[h]=i1(o1(e,M,h));return f=new X({props:{icon:"i-carbon-chevron-right"}}),{c(){t=w("div"),l=w("button"),U(a.$$.fragment),s=x(),r=w("div");for(let h=0;h<v.length;h+=1)v[h].c();n=x(),u=w("button"),U(f.$$.fragment),this.h()},l(h){t=A(h,"DIV",{class:!0});var i=k(t);l=A(i,"BUTTON",{class:!0});var z=k(l);j(a.$$.fragment,z),z.forEach(d),s=V(i),r=A(i,"DIV",{class:!0});var o=k(r);for(let c=0;c<v.length;c+=1)v[c].l(o);o.forEach(d),n=V(i),u=A(i,"BUTTON",{class:!0});var _=k(u);j(f.$$.fragment,_),_.forEach(d),i.forEach(d),this.h()},h(){m(l,"class","row-center font-500 p-5px m-y-0px m-x-10px cursor-pointer border-1px border-solid border-[var(--border)] bg-transparent rounded-[50%] hover:border-[var(--border-hover)]"),m(r,"class","row overflow-hidden box-content w-150px"),m(u,"class","row-center font-500 p-5px m-y-0px m-x-10px cursor-pointer border-1px border-solid border-[var(--border)] bg-transparent rounded-[50%] hover:border-[var(--border-hover)]"),m(t,"class","carrousel flex-[0.5] row-center")},m(h,i){H(h,t,i),b(t,l),G(a,l,null),b(t,s),b(t,r);for(let z=0;z<v.length;z+=1)v[z].m(r,null);e[11](r),b(t,n),b(t,u),G(f,u,null),L=!0,p||(C=[E(l,"click",e[2]),E(l,"keyup",e[8]),E(l,"keydown",e[9]),E(l,"keypress",e[10]),E(u,"click",e[3]),E(u,"keyup",e[5]),E(u,"keydown",e[6]),E(u,"keypress",e[7])],p=!0)},p(h,[i]){if(i&1){M=h[0];let z;for(z=0;z<M.length;z+=1){const o=o1(h,M,z);v[z]?v[z].p(o,i):(v[z]=i1(o),v[z].c(),v[z].m(r,null))}for(;z<v.length;z+=1)v[z].d(1);v.length=M.length}},i(h){L||(y(a.$$.fragment,h),y(f.$$.fragment,h),L=!0)},o(h){T(a.$$.fragment,h),T(f.$$.fragment,h),L=!1},d(h){h&&d(t),q(a),f1(v,h),e[11](null),q(f),p=!1,v1(C)}}}const w1=2e3;function A1(e,t,l){let{items:a=[]}=t,s,r,n=0,u=!0;const f=c=>{c?n<a.length-1?l(4,n=n+1):(l(4,n=n-1),u=!1):n>0?l(4,n=n-1):(l(4,n=n+1),u=!0)},L=c=>{clearTimeout(r),r=setTimeout(()=>{f(c),L(u)},w1)},p=()=>{clearTimeout(r),u=!1,f(!1),L(u)},C=()=>{clearTimeout(r),u=!0,f(!0),L(u)};d1(()=>{L(!0)});function M(c){B.call(this,e,c)}function v(c){B.call(this,e,c)}function h(c){B.call(this,e,c)}function i(c){B.call(this,e,c)}function z(c){B.call(this,e,c)}function o(c){B.call(this,e,c)}function _(c){m1[c?"unshift":"push"](()=>{s=c,l(1,s)})}return e.$$set=c=>{"items"in c&&l(0,a=c.items)},e.$$.update=()=>{e.$$.dirty&18&&s&&s.scroll({left:n*150,behavior:"smooth"})},[a,s,p,C,n,M,v,h,i,z,o,_]}class x1 extends Z{constructor(t){super(),F(this,t,A1,k1,Y,{items:0})}}var S=(e=>(e.Code="M5.854 4.854a.5.5 0 1 0-.708-.708l-3.5 3.5a.5.5 0 0 0 0 .708l3.5 3.5a.5.5 0 0 0 .708-.708L2.707 8l3.147-3.146zm4.292 0a.5.5 0 0 1 .708-.708l3.5 3.5a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 0 1-.708-.708L13.293 8l-3.147-3.146z",e.Search="M14.56 12.44L11.3 9.18a5.51 5.51 0 10-2.12 2.12l3.26 3.26a1.5 1.5 0 102.12-2.12zM3 6.5A3.5 3.5 0 116.5 10 3.5 3.5 0 013 6.5z",e.Email="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10h5v-2h-5c-4.34 0-8-3.66-8-8s3.66-8 8-8 8 3.66 8 8v1.43c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57V12c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5c1.38 0 2.64-.56 3.54-1.47.65.89 1.77 1.47 2.96 1.47 1.97 0 3.5-1.6 3.5-3.57V12c0-5.52-4.48-10-10-10zm0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z",e.Skills="M19 5a3 3 0 00-3-3H5v20l7-6.29L19 22z",e.GitHub="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z",e.StackOverflow="m17.12 21.857h-14.977v-6.428h-2.143v8.571h19.259v-8.571h-2.139zm-12.616-7.018.442-2.102 10.486 2.21-.442 2.09zm1.379-5.009.898-1.955 9.71 4.54-.898 1.942zm2.692-4.768 1.366-1.647 8.218 6.87-1.366 1.647zm5.313-5.062 6.388 8.585-1.716 1.286-6.386-8.585zm-9.616 19.701v-2.13h10.714v2.13z",e.LinkedIn="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z",e.Twitter="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z",e.Home="M23 9v2h-2v7a3 3 0 01-3 3h-4v-6h-4v6H6a3 3 0 01-3-3v-7H1V9l11-7 5 3.18V2h3v5.09z",e.Projects="M3 3h4v4H3zm7 4h4V3h-4zm7-4v4h4V3zM3 14h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4zM3 21h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4z",e.Job="M17 6V5a3 3 0 00-3-3h-4a3 3 0 00-3 3v1H2v4a3 3 0 003 3h14a3 3 0 003-3V6zM9 5a1 1 0 011-1h4a1 1 0 011 1v1H9zm10 9a4 4 0 003-1.38V17a3 3 0 01-3 3H5a3 3 0 01-3-3v-4.38A4 4 0 005 14z",e.Academic="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z",e.Resume="M3 3v15a3 3 0 003 3h9v-6h6V3zm9 8H6v-1h6zm6-3H6V7h12zm-2 8h5l-5 5z",e.RightArrow="M9.4,18.4l-0.7-0.7l5.6-5.6L8.6,6.4l0.7-0.7l6.4,6.4L9.4,18.4z",e.LeftArrow="M14.6,18.4L8.3,12l6.4-6.4l0.7,0.7L9.7,12l5.6,5.6L14.6,18.4z",e.Youtube="M365.257,67.393H95.744C42.866,67.393,0,110.259,0,163.137v134.728 c0,52.878,42.866,95.744,95.744,95.744h269.513c52.878,0,95.744-42.866,95.744-95.744V163.137 C461.001,110.259,418.135,67.393,365.257,67.393z M300.506,237.056l-126.06,60.123c-3.359,1.602-7.239-0.847-7.239-4.568V168.607 c0-3.774,3.982-6.22,7.348-4.514l126.06,63.881C304.363,229.873,304.298,235.248,300.506,237.056z",e.Link="M19.83 4.17a4 4 0 00-5.66 0l-2 2A4 4 0 0011 9a4 4 0 00.56 2l-.54.54a4 4 0 00-4.85.63l-2 2a4 4 0 005.66 5.66l2-2A4 4 0 0013 15a4 4 0 00-.56-2l.54-.54a4 4 0 004.85-.63l2-2a4 4 0 000-5.66zM11 15a2 2 0 01-.59 1.41l-2 2a2 2 0 11-3-2.6l.22-.22 2-2A2 2 0 019 13a2.24 2.24 0 01.51.07l-1.22 1.22a1 1 0 000 1.41 1 1 0 001.41 0l1.22-1.22A2.24 2.24 0 0111 15zm7.41-6.59l-2 2A2 2 0 0115 11a2.24 2.24 0 01-.51-.07l1.22-1.22A1 1 0 0016 9a1 1 0 00-.29-.7A1 1 0 0015 8a1 1 0 00-.7.29l-1.23 1.22A2.24 2.24 0 0113 9a2 2 0 01.59-1.41l2-2a2 2 0 013 2.6z",e.Sun="M108.5 24C108.5 27.5902136 105.590214 30.5 102 30.5 98.4097864 30.5 95.5 27.5902136 95.5 24 95.5 20.4097864 98.4097864 17.5 102 17.5 105.590214 17.5 108.5 20.4097864 108.5 24zM107 24C107 21.2382136 104.761786 19 102 19 99.2382136 19 97 21.2382136 97 24 97 26.7617864 99.2382136 29 102 29 104.761786 29 107 26.7617864 107 24zM101 12.75L101 14.75C101 15.1642136 101.335786 15.5 101.75 15.5 102.164214 15.5 102.5 15.1642136 102.5 14.75L102.5 12.75C102.5 12.3357864 102.164214 12 101.75 12 101.335786 12 101 12.3357864 101 12.75zM95.7255165 14.6323616L96.7485165 16.4038616C96.9556573 16.7625614 97.4143618 16.8854243 97.7730616 16.6782835 98.1317614 16.4711427 98.2546243 16.0124382 98.0474835 15.6537384L97.0244835 13.8822384C96.8173427 13.5235386 96.3586382 13.4006757 95.9999384 13.6078165 95.6412386 13.8149573 95.5183757 14.2736618 95.7255165 14.6323616zM91.8822384 19.0244835L93.6537384 20.0474835C94.0124382 20.2546243 94.4711427 20.1317614 94.6782835 19.7730616 94.8854243 19.4143618 94.7625614 18.9556573 94.4038616 18.7485165L92.6323616 17.7255165C92.2736618 17.5183757 91.8149573 17.6412386 91.6078165 17.9999384 91.4006757 18.3586382 91.5235386 18.8173427 91.8822384 19.0244835zM90.75 25L92.75 25C93.1642136 25 93.5 24.6642136 93.5 24.25 93.5 23.8357864 93.1642136 23.5 92.75 23.5L90.75 23.5C90.3357864 23.5 90 23.8357864 90 24.25 90 24.6642136 90.3357864 25 90.75 25zM92.6323616 30.2744835L94.4038616 29.2514835C94.7625614 29.0443427 94.8854243 28.5856382 94.6782835 28.2269384 94.4711427 27.8682386 94.0124382 27.7453757 93.6537384 27.9525165L91.8822384 28.9755165C91.5235386 29.1826573 91.4006757 29.6413618 91.6078165 30.0000616 91.8149573 30.3587614 92.2736618 30.4816243 92.6323616 30.2744835zM97.0244835 34.1177616L98.0474835 32.3462616C98.2546243 31.9875618 98.1317614 31.5288573 97.7730616 31.3217165 97.4143618 31.1145757 96.9556573 31.2374386 96.7485165 31.5961384L95.7255165 33.3676384C95.5183757 33.7263382 95.6412386 34.1850427 95.9999384 34.3921835 96.3586382 34.5993243 96.8173427 34.4764614 97.0244835 34.1177616zM103 35.25L103 33.25C103 32.8357864 102.664214 32.5 102.25 32.5 101.835786 32.5 101.5 32.8357864 101.5 33.25L101.5 35.25C101.5 35.6642136 101.835786 36 102.25 36 102.664214 36 103 35.6642136 103 35.25zM108.274483 33.3676384L107.251483 31.5961384C107.044343 31.2374386 106.585638 31.1145757 106.226938 31.3217165 105.868239 31.5288573 105.745376 31.9875618 105.952517 32.3462616L106.975517 34.1177616C107.182657 34.4764614 107.641362 34.5993243 108.000062 34.3921835 108.358761 34.1850427 108.481624 33.7263382 108.274483 33.3676384zM112.117762 28.9755165L110.346262 27.9525165C109.987562 27.7453757 109.528857 27.8682386 109.321717 28.2269384 109.114576 28.5856382 109.237439 29.0443427 109.596138 29.2514835L111.367638 30.2744835C111.726338 30.4816243 112.185043 30.3587614 112.392183 30.0000616 112.599324 29.6413618 112.476461 29.1826573 112.117762 28.9755165zM113.25 23L111.25 23C110.835786 23 110.5 23.3357864 110.5 23.75 110.5 24.1642136 110.835786 24.5 111.25 24.5L113.25 24.5C113.664214 24.5 114 24.1642136 114 23.75 114 23.3357864 113.664214 23 113.25 23zM111.367638 17.7255165L109.596138 18.7485165C109.237439 18.9556573 109.114576 19.4143618 109.321717 19.7730616 109.528857 20.1317614 109.987562 20.2546243 110.346262 20.0474835L112.117762 19.0244835C112.476461 18.8173427 112.599324 18.3586382 112.392183 17.9999384 112.185043 17.6412386 111.726338 17.5183757 111.367638 17.7255165zM106.975517 13.8822384L105.952517 15.6537384C105.745376 16.0124382 105.868239 16.4711427 106.226938 16.6782835 106.585638 16.8854243 107.044343 16.7625614 107.251483 16.4038616L108.274483 14.6323616C108.481624 14.2736618 108.358761 13.8149573 108.000062 13.6078165 107.641362 13.4006757 107.182657 13.5235386 106.975517 13.8822384z",e.Moon="M102,21 C102,18.1017141 103.307179,15.4198295 105.51735,13.6246624 C106.001939,13.2310647 105.821611,12.4522936 105.21334,12.3117518 C104.322006,12.1058078 103.414758,12 102.5,12 C95.8722864,12 90.5,17.3722864 90.5,24 C90.5,30.6277136 95.8722864,36 102.5,36 C106.090868,36 109.423902,34.4109093 111.690274,31.7128995 C112.091837,31.2348572 111.767653,30.5041211 111.143759,30.4810139 C106.047479,30.2922628 102,26.1097349 102,21 Z M102.5,34.5 C96.7007136,34.5 92,29.7992864 92,24 C92,18.2007136 96.7007136,13.5 102.5,13.5 C102.807386,13.5 103.113925,13.5136793 103.419249,13.5407785 C101.566047,15.5446378 100.5,18.185162 100.5,21 C100.5,26.3198526 104.287549,30.7714322 109.339814,31.7756638 L109.516565,31.8092927 C107.615276,33.5209452 105.138081,34.5 102.5,34.5 Z",e.Facebook="M353.701,0H55.087C24.665,0,0.002,24.662,0.002,55.085v298.616c0,30.423,24.662,55.085,55.085,55.085 h147.275l0.251-146.078h-37.951c-4.932,0-8.935-3.988-8.954-8.92l-0.182-47.087c-0.019-4.959,3.996-8.989,8.955-8.989h37.882 v-45.498c0-52.8,32.247-81.55,79.348-81.55h38.65c4.945,0,8.955,4.009,8.955,8.955v39.704c0,4.944-4.007,8.952-8.95,8.955 l-23.719,0.011c-25.615,0-30.575,12.172-30.575,30.035v39.389h56.285c5.363,0,9.524,4.683,8.892,10.009l-5.581,47.087 c-0.534,4.506-4.355,7.901-8.892,7.901h-50.453l-0.251,146.078h87.631c30.422,0,55.084-24.662,55.084-55.084V55.085 C408.786,24.662,384.124,0,353.701,0z",e))(S||{});const V1=e=>{switch(e){case $.GitHub:return"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z";case $.Linkedin:return"M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z";case $.StackOverflow:return"m17.12 21.857h-14.977v-6.428h-2.143v8.571h19.259v-8.571h-2.139zm-12.616-7.018.442-2.102 10.486 2.21-.442 2.09zm1.379-5.009.898-1.955 9.71 4.54-.898 1.942zm2.692-4.768 1.366-1.647 8.218 6.87-1.366 1.647zm5.313-5.062 6.388 8.585-1.716 1.286-6.386-8.585zm-9.616 19.701v-2.13h10.714v2.13z";case $.Facebook:return"M353.701,0H55.087C24.665,0,0.002,24.662,0.002,55.085v298.616c0,30.423,24.662,55.085,55.085,55.085 h147.275l0.251-146.078h-37.951c-4.932,0-8.935-3.988-8.954-8.92l-0.182-47.087c-0.019-4.959,3.996-8.989,8.955-8.989h37.882 v-45.498c0-52.8,32.247-81.55,79.348-81.55h38.65c4.945,0,8.955,4.009,8.955,8.955v39.704c0,4.944-4.007,8.952-8.95,8.955 l-23.719,0.011c-25.615,0-30.575,12.172-30.575,30.035v39.389h56.285c5.363,0,9.524,4.683,8.892,10.009l-5.581,47.087 c-0.534,4.506-4.355,7.901-8.892,7.901h-50.453l-0.251,146.078h87.631c30.422,0,55.084-24.662,55.084-55.084V55.085 C408.786,24.662,384.124,0,353.701,0z";case $.Email:return"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10h5v-2h-5c-4.34 0-8-3.66-8-8s3.66-8 8-8 8 3.66 8 8v1.43c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57V12c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5c1.38 0 2.64-.56 3.54-1.47.65.89 1.77 1.47 2.96 1.47 1.97 0 3.5-1.6 3.5-3.57V12c0-5.52-4.48-10-10-10zm0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z";case $.Twitter:return"M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z";case $.Youtube:return"M365.257,67.393H95.744C42.866,67.393,0,110.259,0,163.137v134.728 c0,52.878,42.866,95.744,95.744,95.744h269.513c52.878,0,95.744-42.866,95.744-95.744V163.137 C461.001,110.259,418.135,67.393,365.257,67.393z M300.506,237.056l-126.06,60.123c-3.359,1.602-7.239-0.847-7.239-4.568V168.607 c0-3.774,3.982-6.22,7.348-4.514l126.06,63.881C304.363,229.873,304.298,235.248,300.506,237.056z"}},c1=e=>e===S.Youtube?"0 0 461.001 461.001":e===S.Facebook?"0 0 408.788 408.788":[S.GitHub,S.Search,S.Code].includes(e)?"0 0 16 16":"0 0 24 24";function H1(e){let t,l,a;return{c(){t=K("svg"),l=K("path"),this.h()},l(s){t=W(s,"svg",{class:!0,viewBox:!0,fill:!0,height:!0,width:!0});var r=k(t);l=W(r,"path",{d:!0}),k(l).forEach(d),r.forEach(d),this.h()},h(){m(l,"d",e[2]),m(t,"class","inline-block"),m(t,"viewBox",a=c1(e[2])),m(t,"fill",e[1]),m(t,"height",e[0]),m(t,"width",e[0])},m(s,r){H(s,t,r),b(t,l),e[4](t)},p(s,[r]){r&4&&m(l,"d",s[2]),r&4&&a!==(a=c1(s[2]))&&m(t,"viewBox",a),r&2&&m(t,"fill",s[1]),r&1&&m(t,"height",s[0]),r&1&&m(t,"width",s[0])},i:N,o:N,d(s){s&&d(t),e[4](null)}}}function E1(e,t,l){let a,{size:s="30px"}=t,{color:r="var(--main-text)"}=t,{icon:n}=t;function u(f){m1[f?"unshift":"push"](()=>{a=f,l(3,a)})}return e.$$set=f=>{"size"in f&&l(0,s=f.size),"color"in f&&l(1,r=f.color),"icon"in f&&l(2,n=f.icon)},[s,r,n,a,u]}class y1 extends Z{constructor(t){super(),F(this,t,E1,H1,Y,{size:0,color:1,icon:2})}}function h1(e,t,l){const a=e.slice();return a[1]=t[l],a}function $1(e){let t,l,a,s;return{c(){t=P(r1),l=x(),a=P(a1),s=P(",")},l(r){t=R(r,r1),l=V(r),a=R(r,a1),s=R(r,",")},m(r,n){H(r,t,n),H(r,l,n),H(r,a,n),H(r,s,n)},p:N,d(r){r&&d(t),r&&d(l),r&&d(a),r&&d(s)}}}function u1(e){let t,l,a,s;return l=new y1({props:{icon:V1(e[1].platform),color:"var(--accent-text)",size:"20px"}}),{c(){t=w("a"),U(l.$$.fragment),a=x(),this.h()},l(r){t=A(r,"A",{class:!0,href:!0,target:!0,rel:!0});var n=k(t);j(l.$$.fragment,n),a=V(n),n.forEach(d),this.h()},h(){m(t,"class","decoration-none"),m(t,"href",`${e[0](e[1].link)?"mailto:":""}${e[1].link}`),m(t,"target","_blank"),m(t,"rel","noreferrer")},m(r,n){H(r,t,n),G(l,t,null),b(t,a),s=!0},p:N,i(r){s||(y(l.$$.fragment,r),s=!0)},o(r){T(l.$$.fragment,r),s=!1},d(r){r&&d(t),q(l)}}}function T1(e){let t,l,a,s,r,n,u,f,L,p,C,M,v;document.title=t=e1(s1,t1),r=new C1({props:{classes:"md:text-left ",$$slots:{default:[$1]},$$scope:{ctx:e}}});let h=l1,i=[];for(let o=0;o<h.length;o+=1)i[o]=u1(h1(e,h,o));const z=o=>T(i[o],1,1,()=>{i[o]=null});return M=new x1({props:{items:M1??b1}}),{c(){l=x(),a=w("div"),s=w("div"),U(r.$$.fragment),n=x(),u=w("p"),f=P(n1),L=x(),p=w("div");for(let o=0;o<i.length;o+=1)i[o].c();C=x(),U(M.$$.fragment),this.h()},l(o){z1("svelte-1tippc1",document.head).forEach(d),l=V(o),a=A(o,"DIV",{class:!0});var c=k(a);s=A(c,"DIV",{class:!0});var g=k(s);j(r.$$.fragment,g),n=V(g),u=A(g,"P",{class:!0});var D=k(u);f=R(D,n1),D.forEach(d),L=V(g),p=A(g,"DIV",{class:!0});var J=k(p);for(let O=0;O<i.length;O+=1)i[O].l(J);J.forEach(d),g.forEach(d),C=V(c),j(M.$$.fragment,c),c.forEach(d),this.h()},h(){m(u,"class","text-[var(--tertiary-text)] text-center md:text-left text-[1.2em] font-extralight"),m(p,"class","row justify-center md:justify-start p-y-15px p-x-0px gap-2"),m(s,"class","md:flex-1 gap-10px"),m(a,"class","col self-center flex-1 md:flex-row md:slef-stretch justify-center lg:justify-between items-center p-y-0px p-x-10px")},m(o,_){H(o,l,_),H(o,a,_),b(a,s),G(r,s,null),b(s,n),b(s,u),b(u,f),b(s,L),b(s,p);for(let c=0;c<i.length;c+=1)i[c].m(p,null);b(a,C),G(M,a,null),v=!0},p(o,[_]){(!v||_&0)&&t!==(t=e1(s1,t1))&&(document.title=t);const c={};if(_&16&&(c.$$scope={dirty:_,ctx:o}),r.$set(c),_&1){h=l1;let g;for(g=0;g<h.length;g+=1){const D=h1(o,h,g);i[g]?(i[g].p(D,_),y(i[g],1)):(i[g]=u1(D),i[g].c(),y(i[g],1),i[g].m(p,null))}for(g1(),g=h.length;g<i.length;g+=1)z(g);_1()}},i(o){if(!v){y(r.$$.fragment,o);for(let _=0;_<h.length;_+=1)y(i[_]);y(M.$$.fragment,o),v=!0}},o(o){T(r.$$.fragment,o),i=i.filter(Boolean);for(let _=0;_<i.length;_+=1)T(i[_]);T(M.$$.fragment,o),v=!1},d(o){o&&d(l),o&&d(a),q(r),f1(i,o),q(M)}}}function B1(e){return[l=>{const a=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return!L1(l)&&a.test(l)}]}class q1 extends Z{constructor(t){super(),F(this,t,B1,T1,Y,{})}}export{q1 as component};
