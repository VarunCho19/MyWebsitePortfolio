import{A as s}from"./UIcon.400aad08.js";const m=`# Svelte

---

[\`Svelte\`](https://svelte.dev/) is a free and open-source front end component framework or language created by Rich Harris and maintained by the Svelte core team members. Svelte is not a monolithic JavaScript library imported by applications: instead, Svelte compiles HTML templates to specialized code that manipulates the DOM directly, which may reduce the size of transferred files and give better client performance. Application code is also processed by the compiler, inserting calls to automatically recompute data and re-render UI elements when the data they depend on is modified. This also avoids the overhead associated with runtime intermediate representations, such as virtual DOM, unlike traditional frameworks (such as React and Vue) which carry out the bulk of their work at runtime, i.e. in the browser.

The compiler itself is written in TypeScript. Its source code is licensed under MIT License and hosted on GitHub.

<br/>

Svelte is :

- compiled : Svelte shifts as much work as possible out of the browser and into your build step. No more manual optimisations — just faster, more efficient apps.
- compact : Write breathtakingly concise components using languages you already know — HTML, CSS and JavaScript. Oh, and your application bundles will be tiny as well.
- complete : Built-in scoped styling, state management, motion primitives, form bindings and more — don't waste time trawling npm for the bare essentials. It's all here.

<br/>

## Example

\`\`\`ts
<script>
    let count = 1;
    $: doubled = count * 2;
<\/script>

<p>{count} * 2 = {doubled}</p>

<button on:click={() => count = count + 1}>Count</button>
\`\`\`

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6

> Svelte is a free and open-source front end component framework or language created by Rich Harris and maintained by the Svelte core team members.
`;function d(e,...a){const n=Object.assign({},e);return Object.keys(n).forEach(i=>{a.includes(i)&&delete n[i]}),n}const t=e=>e,g=[t({name:"Programming Languages",slug:"pro-lang"}),t({name:"Frameworks",slug:"framework"}),t({name:"Libraries",slug:"library"}),t({name:"Langauges",slug:"lang"}),t({name:"Databases",slug:"db"}),t({name:"ORMs",slug:"orm"}),t({name:"DevOps",slug:"devops"}),t({name:"Testing",slug:"test"}),t({name:"Dev Tools",slug:"devtools"}),t({name:"Markup & Style",slug:"markup-style"}),t({name:"Design",slug:"design"}),t({name:"Soft Skills",slug:"soft"})],o=e=>{const a=d(e,"category");return e.category&&(a.category=g.find(n=>n.slug===e.category)),a},c=[o({slug:"js",color:"yellow",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.",logo:s.JavaScript,name:"Javascript",category:"pro-lang"}),o({slug:"c#",color:"blue",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.",logo:s.C,name:"C++/C#",category:"pro-lang"}),o({slug:"py",color:"blue",description:"Used in all my data science projects",logo:s.Python,name:"Python",category:"pro-lang"}),o({slug:"css",color:"blue",description:"Front-End Development",logo:s.CSS,name:"CSS",category:"markup-style"}),o({slug:"html",color:"orange",description:"Front-End Development",logo:s.HTML,name:"HTML",category:"markup-style"}),o({slug:"db",color:"pink",description:"Used in my internship at Texas Capital Bank and my projects",logo:s.PostgreSQL,name:"PostgreSQL",category:"Databases"}),o({slug:"reactjs",color:"cyan",description:"Used in this website Portfolio",logo:s.ReactJs,name:"React Js",category:"library"}),o({slug:"svelte",color:"orange",description:m,logo:s.Svelte,name:"Svelte",category:"library"}),o({slug:"pandas",color:"orange",description:"Used in my Data Science Projects",logo:s.Pandas,name:"Pandas",category:"library"})],h="Skills",y=(...e)=>c.filter(a=>e.includes(a.slug)),b=e=>{const a=[],n=[];return c.forEach(i=>{if(e.trim()&&!i.name.toLowerCase().includes(e.trim().toLowerCase()))return;if(!i.category){console.log(i.category),n.push(i);return}let r=a.find(u=>{var l;return u.category.slug===((l=i.category)==null?void 0:l.slug)});r||(r={items:[],category:i.category},a.push(r)),r.items.push(i)}),n.length!==0&&a.push({category:{name:"Others",slug:"others"},items:n}),a};export{b as a,y as g,c as i,h as t};
