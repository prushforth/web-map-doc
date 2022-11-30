"use strict";(self.webpackChunkmapml_viewer_doc=self.webpackChunkmapml_viewer_doc||[]).push([[8030],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),d=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(n),m=r,f=p["".concat(s,".").concat(m)]||p[m]||u[m]||i;return n?o.createElement(f,a(a({ref:t},c),{},{components:n})):o.createElement(f,a({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var d=2;d<i;d++)a[d]=n[d];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9208:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var o=n(7462),r=(n(7294),n(3905));const i={id:"installation",title:"Extension Installation",slug:"/extension/installation"},a=void 0,l={unversionedId:"extension/installation",id:"extension/installation",title:"Extension Installation",description:"The MapML browser extension is used to add additional features to chromium browsers. It can be installed from the Maps4HTML Github Repository:",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/extension/installation.md",sourceDirName:"extension",slug:"/extension/installation",permalink:"/web-map-doc/fr/docs/extension/installation",draft:!1,tags:[],version:"current",frontMatter:{id:"installation",title:"Extension Installation",slug:"/extension/installation"},sidebar:"sidebar",previous:{title:"About Extension",permalink:"/web-map-doc/fr/docs/extension/about"},next:{title:"Extension Features",permalink:"/web-map-doc/fr/docs/extension/features"}},s={},d=[{value:"Loading Extension to Browser",id:"loading-extension-to-browser",level:2},{value:"Google Chrome",id:"google-chrome",level:3},{value:"Microsoft Edge",id:"microsoft-edge",level:3}],c={toc:d};function u(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The MapML browser extension is used to add additional features to chromium browsers. It can be installed from the Maps4HTML Github Repository:"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Maps4HTML/mapml-extension"},"https://github.com/Maps4HTML/mapml-extension")),(0,r.kt)("p",null,"The source code can be downloaded by clicking Code -> Download ZIP. "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Downloading Source Code",src:n(688).Z,width:"600",height:"338"})),(0,r.kt)("p",null,"Once the source code is downloaded and extracted, it can be loaded as an extension through chromium browsers:"),(0,r.kt)("h2",{id:"loading-extension-to-browser"},"Loading Extension to Browser"),(0,r.kt)("p",null,"Since the extension has not yet been released to web stores, it can currently be loaded in the following browsers by loading the downloaded extension to the broweser."),(0,r.kt)("h3",{id:"google-chrome"},"Google Chrome"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Open Chrome and go to ",(0,r.kt)("inlineCode",{parentName:"li"},"chrome://extensions/")),(0,r.kt)("li",{parentName:"ul"},"Turn on Developer Mode"),(0,r.kt)("li",{parentName:"ul"},"Click the ",(0,r.kt)("inlineCode",{parentName:"li"},"Load unpacked")," button, and navigate to the ",(0,r.kt)("inlineCode",{parentName:"li"},"/src")," folder found in the root of the downloaded source code")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Loading Extension on Google Chrome",src:n(7960).Z,width:"600",height:"338"})),(0,r.kt)("h3",{id:"microsoft-edge"},"Microsoft Edge"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Open Edge and go to ",(0,r.kt)("inlineCode",{parentName:"li"},"edge://extensions/")),(0,r.kt)("li",{parentName:"ul"},"Turn on Developer Mode"),(0,r.kt)("li",{parentName:"ul"},"Click the ",(0,r.kt)("inlineCode",{parentName:"li"},"Load unpacked")," button, and navigate to the ",(0,r.kt)("inlineCode",{parentName:"li"},"/src")," folder found in the root of the downloaded source code")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Loading Extension on Edge",src:n(6833).Z,width:"600",height:"338"})))}u.isMDXComponent=!0},7960:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Load-Chrome-0badb4a446ac0b608ed828ac2c8335e2.gif"},6833:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Load-Edge-a890522a45d748b5876cd41e3a4494f9.gif"},688:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/download-extension-7769cecff30693ded6809035e62490ec.gif"}}]);