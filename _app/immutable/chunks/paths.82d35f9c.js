import{J as b,s as p}from"./index.c588bb3f.js";const e=[];function k(o,l=b){let n;const i=new Set;function r(t){if(p(o,t)&&(o=t,n)){const c=!e.length;for(const s of i)s[1](),e.push(s,o);if(c){for(let s=0;s<e.length;s+=2)e[s][0](e[s+1]);e.length=0}}}function a(t){r(t(o))}function _(t,c=b){const s=[t,c];return i.add(s),i.size===1&&(n=l(r)||b),t(o),()=>{i.delete(s),i.size===0&&(n(),n=null)}}return{set:r,update:a,subscribe:_}}var u;const h=((u=globalThis.__sveltekit_xk2tue)==null?void 0:u.base)??"/slick-portfolio-svelte";var f;const d=((f=globalThis.__sveltekit_xk2tue)==null?void 0:f.assets)??h;export{d as a,h as b,k as w};
