(this["webpackJsonphar-to-sw"]=this["webpackJsonphar-to-sw"]||[]).push([[0],{12:function(e,n,t){e.exports=t(24)},17:function(e,n,t){},21:function(e,n,t){},22:function(e,n,t){},24:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),c=t(6),o=t.n(c),l=(t(17),t(3)),s=t(7),i=t.n(s),u=t(8),d=t(10),p=(t(21),function(e){var n=e.onRead,t=Object(r.useState)(null),c=Object(l.a)(t,2),o=c[0],s=c[1],i=Object(r.useCallback)((function(e){var t=new FileReader;t.onload=function(e){var t=e.target.result;try{var r=JSON.parse(t);n(r)}catch(o){s(o)}},t.readAsText(e[0])}),[n]),u=Object(d.a)({onDrop:i}),p=u.getRootProps,h=u.getInputProps,f=u.isDragActive;return a.a.createElement("div",Object.assign({className:"drop-container"+(f?" dragging":"")},p()),a.a.createElement("input",h()),o&&a.a.createElement("p",null,"Please enter a valid HAR file"),f?a.a.createElement("p",null,"Drop the files here ..."):a.a.createElement("p",null,"Drag 'n' drop a HAR file here, or click to select file a HAR file"))}),h=(t(22),t(11)),f=function(e){var n,t,r="base64"===e.response.content.encoding?3*Math.ceil(e.response.content.text.length/4):null!==(n=null===(t=e.response.content.text)||void 0===t?void 0:t.length)&&void 0!==n?n:0;return r>=Math.pow(2,30)?(r/Math.pow(2,30)).toFixed(2)+" Gb":r>=Math.pow(2,20)?(r/Math.pow(2,20)).toFixed(2)+" Mb":r>=Math.pow(2,10)?(r/Math.pow(2,10)).toFixed(2)+" Kb":r>1?r+" Bytes":1===r?"1 Byte":r?void 0:"Empty response"},v=function(e,n){for(var t={},r={label:"<All>",value:"/",children:[]},c=function(n){var a,c=e.log.entries[n],o=new URL(c.request.url);if("/sw-replay-get-version"===o.pathname)return"continue";if("\n// DO-NOTE-REMOVE-THIS-LINE-SW-IGNORE-ME\n"===(null===(a=c.response.content.text)||void 0===a?void 0:a.slice(0,42)))return"continue";t[o.host]||(t[o.host]={label:o.host,value:o.host,children:[]},r.children.push(t[o.host]));var l=t[o.host];if(o.pathname.slice(1)){var s=!0,i=!1,u=void 0;try{for(var d,p=function(){var e=d.value,n=l.children.find((function(n){return n.value===e}));n||(n={label:e,value:e,children:[]},l.children.push(n)),l=n},h=o.pathname.slice(1).split("/")[Symbol.iterator]();!(s=(d=h.next()).done);s=!0)p()}catch(w){i=!0,u=w}finally{try{s||null==h.return||h.return()}finally{if(i)throw u}}}if(o.search){var f=l.children.find((function(e){return e.value===o.search}));f||(f={label:o.search,value:o.search,children:[]},l.children.push(f)),l=f}var v=l.children.length;l.children.push({label:"#".concat(v),value:"".concat(n)})},o=0;o<e.log.entries.length;o++)c(o);return function e(n){if(n.children)for(var t=0;t<n.children.length;t++){var r;if(1===(null===(r=n.children[t].children)||void 0===r?void 0:r.length)){var a=!n.children[t].children[0].children,c="".concat(n.children[t].label);a||(c+="/".concat(n.children[t].children[0].label)),n.children[t]=Object(h.a)({},n.children[t].children[0],{label:c}),e(n)}e(n.children[t])}}(r),function(e,n,t){!function n(r){if(r.children){var c=!0,o=!1,l=void 0;try{for(var s,i=r.children[Symbol.iterator]();!(c=(s=i.next()).done);c=!0){var u=s.value;n(u)}}catch(g){o=!0,l=g}finally{try{c||null==i.return||i.return()}finally{if(o)throw l}}}else{var d,p=e.log.entries[r.value],h=p.response.content.text;try{var v,w=JSON.parse(null!==(v=p.response.content.text)&&void 0!==v?v:"");h=JSON.stringify(w,null,2)}catch(b){}r.label=a.a.createElement("span",{className:"leaf"},a.a.createElement("span",{className:"label",title:null===(d=r.label)||void 0===d?void 0:d.toString()},r.label),a.a.createElement("span",{className:"size",title:h},f(p)),a.a.createElement("label",{className:"full"},a.a.createElement("input",{type:"checkbox",onClick:function(e){return t(r.value,e.target.checked)}}),"FULL"))}}(n)}(e,r,n),r},w=t(2),g=t.n(w),b=function(){var e,n,t,r,a,c,o,l,s,i,u,d,p,h,f,v;return g.a.async((function(w){for(;;)switch(w.prev=w.next){case 0:if(e="undefined"!==typeof ServiceWorkerGlobalScope,n="",t=function(e){return new Promise((function(n){return setTimeout(n,e)}))},r=function(){var e,t;return g.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,g.a.awrap(fetch("/sw-replay-get-version"));case 2:return e=r.sent,r.next=5,g.a.awrap(e.text());case 5:return t=r.sent,r.abrupt("return",t===n);case 7:case"end":return r.stop()}}))},e){w.next=52;break}return w.next=7,g.a.awrap(r());case 7:if(w.sent){w.next=52;break}return window.stop(),w.next=11,g.a.awrap(navigator.serviceWorker.getRegistrations());case 11:a=w.sent,c=!0,o=!1,l=void 0,w.prev=15,s=a[Symbol.iterator]();case 17:if(c=(i=s.next()).done){w.next=24;break}return u=i.value,w.next=21,g.a.awrap(u.unregister());case 21:c=!0,w.next=17;break;case 24:w.next=30;break;case 26:w.prev=26,w.t0=w.catch(15),o=!0,l=w.t0;case 30:w.prev=30,w.prev=31,c||null==s.return||s.return();case 33:if(w.prev=33,!o){w.next=36;break}throw l;case 36:return w.finish(33);case 37:return w.finish(30);case 38:return w.next=40,g.a.awrap(navigator.serviceWorker.register(currentScriptSrc+"?"+Math.random()));case 40:return console.log("checking if sw is active..."),w.next=44,g.a.awrap(r());case 44:if(!w.sent){w.next=48;break}return location.reload(),w.next=48,g.a.awrap(new Promise((function(){})));case 48:return w.next=50,g.a.awrap(t(100));case 50:w.next=40;break;case 52:d={},p=function(){var e,n,t,r;return g.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.t0=Set,a.next=3,g.a.awrap(self.clients.matchAll());case 3:for(a.t1=function(e){return e.id},a.t2=a.sent.map(a.t1),e=new a.t0(a.t2),n=0,t=Object.keys(d);n<t.length;n++)r=t[n],e.has(r)||delete d[r];case 7:case"end":return a.stop()}}))},h=function(e,n){for(var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:512,r=atob(e),a=[],c=0;c<r.length;c+=t){for(var o=r.slice(c,c+t),l=new Array(o.length),s=0;s<o.length;s++)l[s]=o.charCodeAt(s);var i=new Uint8Array(l);a.push(i)}var u=new Blob(a,{type:n});return u},f=function(e,n){var t=n.find((function(e){return"content-type"===e.name.toLowerCase()}));return t=t&&t.value,n=new Headers(n.map((function(e){return[e.name,e.value]}))),new Response(h(e,t),{headers:n})},v=function(e,n){return n=new Headers(n.map((function(e){return[e.name,e.value]}))),new Response(e,{headers:n})},self.addEventListener("install",(function(e){self.skipWaiting()})),self.addEventListener("activate",(function(e){e.waitUntil(self.clients.claim())})),self.addEventListener("fetch",(function(e){var t,r,a,c,o,l;return g.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:if(t=new URL(e.request.url),"/sw-replay-get-version"!==t.pathname){s.next=5;break}return p(),e.respondWith(v(n,[])),s.abrupt("return");case 5:r=e.resultingClientId||e.clientId,a=e.request.method+" "+e.request.url,(c=responses[a])&&(d[r]||(d[r]={}),(o=d[r])[a]||(o[a]=0),l=c[o[a]],c.length>o[a]+1&&o[a]++,"base64"===l.response.content.encoding?e.respondWith(f(l.response.content.text,l.response.headers)):e.respondWith(v(l.response.content.text,l.response.headers)));case 9:case"end":return s.stop()}}))}));case 60:case"end":return w.stop()}}),null,null,[[15,26,30,38],[31,,33,37]])}.toString().split("\n").slice(2,-2).join("\n").replace("const serviceWorkerId = ``;","const serviceWorkerId = 'sw-replay ".concat((new Date).toUTCString()," ").concat(Math.random(),"';")),m=function(){var e=Object(u.a)({har:void 0,checked:[],expanded:[],full:{}}),n=Object(l.a)(e,2),t=n[0],c=n[1],o=Object(r.useCallback)((function(e){null!==e&&e.expandAllNodes()}),[]);if(t.har){var s=v(t.har,(function(e,n){c((function(t){t.full[e]=n}))}));return a.a.createElement("div",null,a.a.createElement("button",{disabled:0===t.checked.length,onClick:function(){var e=t.checked.map((function(e){return{entry:t.har.log.entries[e],full:!!t.full[e]}}));console.log(e),function(e){e=JSON.parse(JSON.stringify(e));for(var n=0;n<e.length;n++){var t=e[n];if(t.entry.request.cookies=[],t.entry.response.cookies=[],!t.full){var r={request:t.entry.request,response:t.entry.response};r.request.headers=[],r.response.headers=r.response.headers.filter((function(e){return"content-type"===e.name.toLowerCase()})),e[n].entry=r}}var a={},c=!0,o=!1,l=void 0;try{for(var s,i=e[Symbol.iterator]();!(c=(s=i.next()).done);c=!0){var u=s.value,d="".concat(u.entry.request.method," ").concat(u.entry.request.url);a[d]||(a[d]=[]),a[d].push(u.entry)}}catch(h){o=!0,l=h}finally{try{c||null==i.return||i.return()}finally{if(o)throw l}}var p="\n// DO-NOTE-REMOVE-THIS-LINE-SW-IGNORE-ME\n(async () => {\nconsole.warn(\n  'SERVICE WORKER SERVING RESOURCES to remove see https://developers.google.com/web/ilt/pwa/tools-for-pwa-developers#chrome_7',\n);\nconst currentScriptSrc = typeof document !== 'undefined' && document.currentScript.src;\nconst responses = "+JSON.stringify(a,null,2).replace(/^(\s*"text": )"(.*)"(,?)$/gm,(function(e,n,t,r){return"          //#region response content\n"+n+"`"+JSON.parse('"'+t+'"').replace(/\\/g,"\\\\").replace(/\$/g,"\\$").replace(/`/g,"\\`")+"`"+r+"\n          //#endregion"}))+"\n".concat(b,"\n})})();");console.log(p),window.sw=p}(e)}},"Download service worker"),a.a.createElement(i.a,{ref:o,nodes:[s],checked:t.checked,expanded:t.expanded,icons:{expandClose:"\u25b6",expandOpen:"\u25bc"},showNodeIcon:!1,nativeCheckboxes:!0,onCheck:function(e){return c((function(n){n.checked=e}))},onExpand:function(e){return c((function(n){n.expanded=e}))}}))}return a.a.createElement("div",null,a.a.createElement(p,{onRead:function(e){return c((function(n){n.har=e}))}}))};o.a.render(a.a.createElement(m,null),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.79614f6e.chunk.js.map