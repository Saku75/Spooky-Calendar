if(!self.define){let s,e={};const i=(i,c)=>(i=new URL(i+".js",c).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(c,a)=>{const o=s||("document"in self?document.currentScript.src:"")||location.href;if(e[o])return;let r={};const d=s=>i(s,o),n={module:{uri:o},exports:r,require:d};e[o]=Promise.all(c.map((s=>n[s]||d(s)))).then((s=>(a(...s),r)))}}define(["./workbox-89778050"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"assets/css/base.css",revision:"f7d8ad3ed24dcc877ce6506655dbcc2d"},{url:"assets/css/layout.css",revision:"096b6982344e190512f0e8391055b176"},{url:"assets/css/main.css",revision:"6cb672028c757090a7b87daedf7206b9"},{url:"assets/css/modules/pageCalendar.css",revision:"c38dc2e1fb8b28debecc596cbca328ca"},{url:"assets/css/modules/pageFooter.css",revision:"0b429732987b549d7c1e3d88d7f99e9d"},{url:"assets/css/modules/pageHeader.css",revision:"83d618c535cdd8e28c1015c46d1130e3"},{url:"assets/css/modules/pageText.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"assets/css/variables.css",revision:"fc71e50f2e4a29f84c31009d511b8758"},{url:"assets/img/door-bats.png",revision:"a40cf54882ebece51e025c1d8cc98f44"},{url:"assets/img/door-cat.png",revision:"fca077c1c605210161ac1c6299c12f1b"},{url:"assets/img/door-pumpkin.png",revision:"20631a7a5824d9ae63c09aa518a376ce"},{url:"assets/img/ico/128x128.png",revision:"db1312bfcb9ad21d3fc22dc4ca911a16"},{url:"assets/img/ico/192x192.png",revision:"6ad45bf938559857b12e13baa8064554"},{url:"assets/img/ico/384x384.png",revision:"2bb01c0a0a764be9aeabe0e5d417a037"},{url:"assets/img/ico/48x48.png",revision:"5a86a3cb9fc45234bcc994ee627954a1"},{url:"assets/img/ico/512x512.png",revision:"dc6eb2a17537a243a9460285712cf292"},{url:"assets/img/ico/72x72.png",revision:"4fccb81e22e1aee4ec7bf0d76c603eef"},{url:"assets/img/ico/96x96.png",revision:"f26e1459aa0c953eb6270110b6df8780"},{url:"assets/img/ico/apple-touch-icon.png",revision:"859723f6f1a285223ea1b881630dc43a"},{url:"assets/img/ico/favicon-16x16.png",revision:"9cd66d2a331ece739c06da7a384ac074"},{url:"assets/img/ico/favicon-32x32.png",revision:"bee8d3fe82862a39d0d449544b40d198"},{url:"assets/img/ico/favicon.ico",revision:"eb9bffa420bd1b39a2dff71573583dfe"},{url:"assets/img/ico/original.png",revision:"05da8ca123fbd5afd7c3886e86d3848b"},{url:"assets/img/logo-pumpkin.png",revision:"de94890bd4d27ebde6b65681a1c5bb3d"},{url:"assets/js/main.js",revision:"3a4879061f3bea98d51cdf7a7f612156"},{url:"index.html",revision:"258a121bd00c8247776c90e86289d83e"},{url:"manifest.json",revision:"72df6b34f9ad6e33032b38f1e24143ed"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map
