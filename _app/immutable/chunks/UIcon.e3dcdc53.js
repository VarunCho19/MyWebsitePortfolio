import{w as k,b as w}from"./paths.33da64de.js";import{S as J,i as A,s as x,k as _,l as N,m as j,h as u,n as d,b as T,J as f}from"./index.c588bb3f.js";const h="@riadh-adrani-theme",C=e=>{localStorage.setItem(h,JSON.stringify(e))},m=k(!1),p=e=>m.update(t=>{var n;const a=typeof e=="boolean"?e:!t;return C(a),(n=document.querySelector(":root"))==null||n.setAttribute("data-theme",a?"dark":"light"),a}),M=()=>{const e=localStorage.getItem(h);e?p(JSON.parse(e)):window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?p(!0):p(!1)},v=e=>`${w}/logos/${e}`,s=(e,t)=>t?{dark:v(t),light:v(e)}:v(e),U={AWS:s("aws.svg"),Bootstrap:s("bootstrap.svg"),C:s("c.svg"),Cpp:s("cpp.svg"),Celery:s("celery.svg"),Django:s("django.svg"),FastApi:s("fastapi"),Flask:s("flask.svg"),Go:s("go.svg"),Kafka:s("kafka.svg"),Neo4j:s("neo4j.svg"),Nginx:s("nginx.svg"),Numpy:s("numpy.svg"),Pandas:s("pandas.svg"),RabbitMQ:s("rabbitmq.svg"),Rust:s("rust.svg","rust-dark.png"),Scrapy:s("scrapy.png"),Selenium:s("selenium.svg"),Docker:s("docker.svg"),Kubernetes:s("kubernetes.svg"),Csharp:s("csharp.svg"),Xamarin:s("xamarin.svg"),TypeScript:s("ts.png"),VueJs:s("vue.png"),ReactJs:s("react.svg"),Dart:s("dart.png"),Kotlin:s("kotlin.png"),Python:s("python.png"),NodeJs:s("node.png"),Deno:s("deno.png","deno-dark.png"),Svelte:s("svelte.png"),ExpressJs:s("express.png"),JavaScript:s("js.png"),Fastify:s("fastify.svg","fastify-dark.png"),NestJs:s("nest.svg"),Quasar:s("quasar.svg"),SolidJs:s("solid.svg"),Electron:s("electron.png"),Flutter:s("flutter.svg"),Java:s("java.png"),AdonisJs:s("adonis.png"),Android:s("android.png"),Angular:s("angular.png"),PostgreSQL:s("postgres.png"),Firebase:s("firebase.png"),Sass:s("sass.png"),Unknown:s("no-img.svg"),MongoDB:s("mongodb.svg"),Redis:s("redis.svg"),Tailwind:s("tailwind.svg"),HTML:s("html.svg"),Premiere:s("premiere.svg"),Photoshop:s("photoshop.svg"),CSS:s("css.svg"),AfterEffects:s("after-effects.svg"),Illustrator:s("illustrator.svg"),Nuxt:s("nuxt.png"),Vite:s("vite.png"),Vitest:s("vitest.svg"),Jest:s("jest.png"),Unocss:s("unocss.svg"),Ruvy:s("ruvy.svg"),Postcss:s("postcss.svg")};let y;m.subscribe(e=>y=e);const q=e=>typeof e=="string"?e:y?e.dark:e.light;globalThis&&globalThis.__awaiter;function R(e){let t,a;return{c(){t=_("i"),this.h()},l(n){t=N(n,"I",{class:!0}),j(t).forEach(u),this.h()},h(){d(t,"class",a=`${e[0]} ${e[1]}`)},m(n,r){T(n,t,r)},p(n,[r]){r&3&&a!==(a=`${n[0]} ${n[1]}`)&&d(t,"class",a)},i:f,o:f,d(n){n&&u(t)}}}function D(e,t,a){let{icon:n=void 0}=t,{classes:r=""}=t;return e.$$set=o=>{"icon"in o&&a(0,n=o.icon),"classes"in o&&a(1,r=o.classes)},[n,r]}class E extends J{constructor(t){super(),A(this,t,D,R,x,{icon:0,classes:1})}}export{U as A,E as U,p as a,q as g,M as o,m as t};
