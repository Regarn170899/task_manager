(function(){"use strict";var t={3507:function(t,e,n){n.d(e,{Z:function(){return l}});var r=function(){var t=this,e=t._self._c;return e("div",[t.tasks.length?e("div",t._l(t.tasks,(function(n,r){return e("div",{key:n.id,staticClass:"row"},[e("div",{staticClass:"col s6 offset-s3"},[e("div",{staticClass:"card indigo darken-1"},[e("div",{staticClass:"white-text"},[e("span",{staticClass:"card-title"},[t._v(t._s(n.title))]),e("p",[t._v(t._s(new Date(n.date).toLocaleDateString()))]),e("div",{staticClass:"card-action"},[t._v(t._s(n.description))])]),e("div",{staticClass:"card-action"},[e("router-link",{staticClass:"btn-small",attrs:{tag:"button",to:"/task/"+n.id}},[t._v("Отредактировать")]),e("button",{staticClass:"btn-small red accent-4",on:{click:function(e){return t.delTask(n)}}},[t._v("Удалить")])],1)])])])})),0):e("h3",[t._v("Нет задач")])])},o=[],s={computed:{tasks(){return this.$store.getters.tasks}},methods:{delTask(t){this.$store.dispatch("delTask",t)}}},a=s,i=n(1001),c=(0,i.Z)(a,r,o,!1,null,"0546edb1",null),l=c.exports},9221:function(t,e,n){var r=n(7195),o=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("Navbar"),e("div",{staticClass:"contsiner"},[e("router-view")],1)],1)},s=[],a=function(){var t=this,e=t._self._c;return e("nav",{staticClass:"indigo darken-1"},[e("div",{staticClass:"nav-wrapper"},[e("router-link",{staticClass:"brand-logo center active",attrs:{to:"/"}},[t._v("Главная")]),e("ul",{staticClass:"left hide-on-med-and-down"},[e("router-link",{attrs:{tag:"li",to:"/list"}},[e("a",{attrs:{href:"#"}},[t._v(" Список ваших задач")])])],1)],1)])},i=[],c=n(1001),l={},u=(0,c.Z)(l,a,i,!1,null,"7ab2f688",null),d=u.exports,f={components:{Navbar:d}},v=f,p=(0,c.Z)(v,o,s,!1,null,null,null),k=p.exports,m=n(4337);(0,m.z)("/task_manager/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(t){console.error("Error during service worker registration:",t)}});var g=n(2241),h=function(){var t=this,e=t._self._c;return e("div",{staticClass:"row"},[e("router-link",{staticClass:"btn center col s4 offset-s4",staticStyle:{"margin-top":"3rem"},attrs:{tag:"button",to:"/list"}},[t._v("Нажми для начала)")])],1)},b=[],w={name:"HomeView",components:{}},_=w,y=(0,c.Z)(_,h,b,!1,null,null,null),C=y.exports;r.ZP.use(g.ZP);const O=[{path:"/",name:"home",component:C},{path:"/list",name:"list",component:()=>n.e(606).then(n.bind(n,2606))},{path:"/task/:id",name:"task",component:()=>n.e(896).then(n.bind(n,896))}],S=new g.ZP({mode:"hash",base:"/task_manager/",routes:O});var T=S,P=(n(295),n(7658),n(408));n(3507);r.ZP.use(P.ZP);var j=new P.ZP.Store({state:{tasks:JSON.parse(localStorage.getItem("tasks")||"[]")},getters:{tasks:t=>t.tasks,taskId:t=>e=>t.tasks.find((t=>t.id===e))},mutations:{createTask(t,e){t.tasks.push(e),localStorage.setItem("tasks",JSON.stringify(t.tasks))},delTask(t,e){t.tasks=t.tasks.filter((t=>t!==e)),localStorage.setItem("tasks",JSON.stringify(t.tasks))},taskCorrection(t,e){const n=t.tasks.concat(),r=n.findIndex((t=>t.id===e.id));n[r]={...e},t.tasks=n,localStorage.setItem("tasks",JSON.stringify(t.tasks))}},actions:{createTask({commit:t},e){t("createTask",e)},delTask({commit:t},e){t("delTask",e)},taskCorrection({commit:t},e){t("taskCorrection",e)}},modules:{}});r.ZP.config.productionTip=!1,new r.ZP({router:T,store:j,render:t=>t(k)}).$mount("#app")}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var s=e[r]={exports:{}};return t[r].call(s.exports,s,s.exports,n),s.exports}n.m=t,function(){var t=[];n.O=function(e,r,o,s){if(!r){var a=1/0;for(u=0;u<t.length;u++){r=t[u][0],o=t[u][1],s=t[u][2];for(var i=!0,c=0;c<r.length;c++)(!1&s||a>=s)&&Object.keys(n.O).every((function(t){return n.O[t](r[c])}))?r.splice(c--,1):(i=!1,s<a&&(a=s));if(i){t.splice(u--,1);var l=o();void 0!==l&&(e=l)}}return e}s=s||0;for(var u=t.length;u>0&&t[u-1][2]>s;u--)t[u]=t[u-1];t[u]=[r,o,s]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,r){return n.f[r](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/"+t+"."+{606:"f2531a8c",896:"6f50409c"}[t]+".js"}}(),function(){n.miniCssF=function(t){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="task-manager:";n.l=function(r,o,s,a){if(t[r])t[r].push(o);else{var i,c;if(void 0!==s)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var d=l[u];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==e+s){i=d;break}}i||(c=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,n.nc&&i.setAttribute("nonce",n.nc),i.setAttribute("data-webpack",e+s),i.src=r),t[r]=[o];var f=function(e,n){i.onerror=i.onload=null,clearTimeout(v);var o=t[r];if(delete t[r],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((function(t){return t(n)})),e)return e(n)},v=setTimeout(f.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=f.bind(null,i.onerror),i.onload=f.bind(null,i.onload),c&&document.head.appendChild(i)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/task_manager/"}(),function(){var t={143:0};n.f.j=function(e,r){var o=n.o(t,e)?t[e]:void 0;if(0!==o)if(o)r.push(o[2]);else{var s=new Promise((function(n,r){o=t[e]=[n,r]}));r.push(o[2]=s);var a=n.p+n.u(e),i=new Error,c=function(r){if(n.o(t,e)&&(o=t[e],0!==o&&(t[e]=void 0),o)){var s=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;i.message="Loading chunk "+e+" failed.\n("+s+": "+a+")",i.name="ChunkLoadError",i.type=s,i.request=a,o[1](i)}};n.l(a,c,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,r){var o,s,a=r[0],i=r[1],c=r[2],l=0;if(a.some((function(e){return 0!==t[e]}))){for(o in i)n.o(i,o)&&(n.m[o]=i[o]);if(c)var u=c(n)}for(e&&e(r);l<a.length;l++)s=a[l],n.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return n.O(u)},r=self["webpackChunktask_manager"]=self["webpackChunktask_manager"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(9221)}));r=n.O(r)})();
//# sourceMappingURL=app.290709c5.js.map