"use strict";(self.webpackChunkmapml_viewer_doc=self.webpackChunkmapml_viewer_doc||[]).push([[5340],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>v});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,v=m["".concat(o,".").concat(d)]||m[d]||u[d]||l;return n?r.createElement(v,i(i({ref:t},c),{},{components:n})):r.createElement(v,i({ref:t},c))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[m]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6433:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const l={id:"installation",title:"Installation"},i=void 0,s={unversionedId:"installation",id:"installation",title:"Installation",description:"Installer les \xe9l\xe9ments personnalis\xe9s ``.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/installation.md",sourceDirName:".",slug:"/installation",permalink:"/web-map-doc/fr/docs/installation",draft:!1,tags:[],version:"current",frontMatter:{id:"installation",title:"Installation"},sidebar:"sidebar",previous:{title:"Introduction",permalink:"/web-map-doc/fr/docs/"},next:{title:"Construire \xe0 partir de la source",permalink:"/web-map-doc/fr/docs/building"}},o={},p=[{value:"Installer les \xe9l\xe9ments personnalis\xe9s <code>&lt;mapml-viewer&gt;</code>.",id:"installer-les-\xe9l\xe9ments-personnalis\xe9s-mapml-viewer",level:2},{value:"Exigences",id:"exigences",level:3},{value:"Ajouter le script \xe0 une page Web",id:"ajouter-le-script-\xe0-une-page-web",level:4}],c={toc:p},m="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"installer-les-\xe9l\xe9ments-personnalis\xe9s-mapml-viewer"},"Installer les \xe9l\xe9ments personnalis\xe9s ",(0,a.kt)("inlineCode",{parentName:"h2"},"<mapml-viewer>"),"."),(0,a.kt)("h3",{id:"exigences"},"Exigences"),(0,a.kt)("p",null,"Pour installer les \xe9l\xe9ments ",(0,a.kt)("inlineCode",{parentName:"p"},"<mapml-viewer>")," dans votre projet de site Web, vous devez utiliser Node Package Manager (npm). Pour ce faire, vous devez installer ",(0,a.kt)("a",{parentName:"p",href:"https://nodejs.org/en/download/"},"node.js"),". Le gestionnaire npm devrait \xeatre install\xe9 par les installateurs li\xe9s. Vous pouvez maintenant obtenir la version la plus r\xe9cente des \xe9l\xe9ments personnalis\xe9s ",(0,a.kt)("inlineCode",{parentName:"p"},"<mapml-viewer>"),", en les installant dans le r\xe9pertoire node_modules du r\xe9pertoire de votre site Web \xe0 l\u2019aide des commandes suivantes :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ cd ../test\n\n$ npm install @maps4html/web-map-custom-element\n\n+ @maps4html/web-map-custom-element@0.8.3\nadded 1 package from 2 contributors and audited 1 package in 1.605s\nfound 0 vulnerabilities\n\n$\n")),(0,a.kt)("p",null,"Une fois l\u2019installation termin\xe9e, le sous-r\xe9pertoire node_modules/@maps4html/web-map-custom-element sera cr\xe9\xe9, lequel contient un dossier ",(0,a.kt)("inlineCode",{parentName:"p"},"dist")," avec les fichiers JavaScript, CSS et HTML requis pour prendre en charge les \xe9l\xe9ments ",(0,a.kt)("inlineCode",{parentName:"p"},"<mapml-viewer>"),"."),(0,a.kt)("h4",{id:"ajouter-le-script-\xe0-une-page-web"},"Ajouter le script \xe0 une page Web"),(0,a.kt)("p",null,"Ajoutez ce qui suit \xe0 l\u2019\xe9l\xe9ment ",(0,a.kt)("inlineCode",{parentName:"p"},"<head>")," de votre code HTML :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<script type="module" src="./node_modules/@maps4html/web-map-custom-element/dist/mapml-viewer.js"><\/script>\n')),(0,a.kt)("p",null,"Vous pouvez maintenant utiliser dans vos pages Web les \xe9l\xe9ments ",(0,a.kt)("inlineCode",{parentName:"p"},"<mapml-viewer>")," et ",(0,a.kt)("inlineCode",{parentName:"p"},"<layer->")," ainsi que les autres \xe9l\xe9ments d\xe9crits dans le pr\xe9sent document."))}u.isMDXComponent=!0}}]);