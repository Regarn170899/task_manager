if(!self.define){let e,s={};const n=(n,r)=>(n=new URL(n+".js",r).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,a)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let t={};const o=e=>n(e,i),l={module:{uri:i},exports:t,require:o};s[i]=Promise.all(r.map((e=>l[e]||o(e)))).then((e=>(a(...e),t)))}}define(["./workbox-5b385ed2"],(function(e){"use strict";e.setCacheNameDetails({prefix:"task-manager"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/task_manager/css/app.8e3f2310.css",revision:null},{url:"/task_manager/css/chunk-vendors.ee8ae858.css",revision:null},{url:"/task_manager/index.html",revision:"b3ba04a1875cd9ba0ad5b919b11f3303"},{url:"/task_manager/js/606.f2531a8c.js",revision:null},{url:"/task_manager/js/896.6f50409c.js",revision:null},{url:"/task_manager/js/app.290709c5.js",revision:null},{url:"/task_manager/js/chunk-vendors.bbc2cf29.js",revision:null},{url:"/task_manager/manifest.json",revision:"20e5c2643ed929075b92f6e80c282815"},{url:"/task_manager/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map