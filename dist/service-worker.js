if(!self.define){let e,s={};const n=(n,c)=>(n=new URL(n+".js",c).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(c,l)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let i={};const o=e=>n(e,r),d={module:{uri:r},exports:i,require:o};s[r]=Promise.all(c.map((e=>d[e]||o(e)))).then((e=>(l(...e),i)))}}define(["./workbox-5b385ed2"],(function(e){"use strict";e.setCacheNameDetails({prefix:"syncld"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/syncld/404.html",revision:"e743d3ed39e10cc0c23457a3f1cc685f"},{url:"/syncld/css/app.43de1703.css",revision:null},{url:"/syncld/css/chunk-vendors.ddaf4556.css",revision:null},{url:"/syncld/index.html",revision:"e49bd5eadcc5e75362f57e2c727ab68b"},{url:"/syncld/js/about.3faabdc9.js",revision:null},{url:"/syncld/js/app.523bbd0c.js",revision:null},{url:"/syncld/js/chunk-vendors.7271b779.js",revision:null},{url:"/syncld/manifest.json",revision:"bbc728e957acdfc01db2cfecffc249e5"},{url:"/syncld/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
