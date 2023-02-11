"use strict";(self.webpackChunkmapml_viewer_doc=self.webpackChunkmapml_viewer_doc||[]).push([[4988],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var l=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=l.createContext({}),s=function(e){var t=l.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=s(e.components);return l.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},d=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=s(n),u=a,f=d["".concat(p,".").concat(u)]||d[u]||c[u]||r;return n?l.createElement(f,i(i({ref:t},m),{},{components:n})):l.createElement(f,i({ref:t},m))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<r;s++)i[s]=n[s];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4557:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var l=n(7462),a=(n(7294),n(3905));const r={id:"select",title:"<map-select>",slug:"/elements/select/"},i=void 0,o={unversionedId:"elements/select",id:"elements/select",title:"<map-select>",description:"L\u2019\xe9l\xe9ment ` est une extension de l\u2019\xe9l\xe9ment HTML . Il est utilis\xe9 comme enfant de l\u2019\xe9l\xe9ment . L\u2019\xe9l\xe9ment  d\xe9clare une variable avec des \xe9l\xe9ments pr\xe9d\xe9finis \u2019s`, lesquels sont s\xe9lectionn\xe9s dans le contr\xf4le des couches et utilis\xe9s par le polyfill.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/elements/select.md",sourceDirName:"elements",slug:"/elements/select/",permalink:"/web-map-doc/fr/docs/elements/select/",draft:!1,tags:[],version:"current",frontMatter:{id:"select",title:"<map-select>",slug:"/elements/select/"},sidebar:"sidebar",previous:{title:"<map-datalist>",permalink:"/web-map-doc/fr/docs/elements/datalist/"},next:{title:"<map-link>",permalink:"/web-map-doc/fr/docs/elements/link/"}},p={},s=[{value:"Attributs",id:"attributs",level:2},{value:"<code>name</code>",id:"name",level:3},{value:"<code>id</code>",id:"id",level:3},{value:"\xc9l\xe9ments enfants",id:"\xe9l\xe9ments-enfants",level:2},{value:"<code>&lt;map-option&gt;</code>",id:"map-option",level:3},{value:"Sp\xe9cifications",id:"sp\xe9cifications",level:2}],m={toc:s};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,l.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"L\u2019\xe9l\xe9ment ",(0,a.kt)("inlineCode",{parentName:"p"},"<map-select>")," est une extension de l\u2019\xe9l\xe9ment HTML ",(0,a.kt)("inlineCode",{parentName:"p"},"<select>"),". Il est utilis\xe9 comme enfant de l\u2019\xe9l\xe9ment ",(0,a.kt)("inlineCode",{parentName:"p"},"<map-extent>"),". L\u2019\xe9l\xe9ment ",(0,a.kt)("inlineCode",{parentName:"p"},"<map-select>")," d\xe9clare une variable avec des \xe9l\xe9ments pr\xe9d\xe9finis ",(0,a.kt)("inlineCode",{parentName:"p"},"<map-option>\u2019s"),", lesquels sont s\xe9lectionn\xe9s dans le contr\xf4le des couches et utilis\xe9s par le polyfill."),(0,a.kt)("p",null,"L\u2019\xe9l\xe9ment ",(0,a.kt)("inlineCode",{parentName:"p"},"<map-select>")," contient un ou plusieurs \xe9l\xe9ments ",(0,a.kt)("inlineCode",{parentName:"p"},"<map-option>"),"."),(0,a.kt)("iframe",{src:"../../../demo/map-select-demo/",title:"D\xe9mo en MapML",height:"410",width:"100%",scrolling:"no",frameBorder:"0"}),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Pour visualiser les donn\xe9es selon diff\xe9rents horodatages, modifiez l\u2019option ",(0,a.kt)("inlineCode",{parentName:"p"},"<map-select>")," dans le contr\xf4le des couches.")),(0,a.kt)("h2",{id:"attributs"},"Attributs"),(0,a.kt)("h3",{id:"name"},(0,a.kt)("inlineCode",{parentName:"h3"},"name")),(0,a.kt)("p",null,"D\xe9finit le nom de la variable cr\xe9\xe9e par l\u2019entr\xe9e. La variable peut ensuite \xeatre r\xe9f\xe9renc\xe9e par le mod\xe8le URL ",(0,a.kt)("inlineCode",{parentName:"p"},"<map-link>")," ",(0,a.kt)("a",{parentName:"p",href:"../link#tref"},"tref attribute"),", \xe0 l\u2019aide de la notation de r\xe9f\xe9rence de la variable ",(0,a.kt)("inlineCode",{parentName:"p"},"{name}"),". "),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"id"},(0,a.kt)("inlineCode",{parentName:"h3"},"id")),(0,a.kt)("p",null,"D\xe9finit l\u2019ID de l\u2019\xe9l\xe9ment ",(0,a.kt)("inlineCode",{parentName:"p"},"<map-select>"),", lequel indique l\u2019\xe9l\xe9ment s\xe9lectionn\xe9 dans le document actuel."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"\xe9l\xe9ments-enfants"},"\xc9l\xe9ments enfants"),(0,a.kt)("h3",{id:"map-option"},(0,a.kt)("inlineCode",{parentName:"h3"},"<map-option>")),(0,a.kt)("p",null,"Cet \xe9l\xe9ment contient les options de l\u2019\xe9l\xe9ment ",(0,a.kt)("inlineCode",{parentName:"p"},"<map-select>"),". Un \xe9l\xe9ment ",(0,a.kt)("inlineCode",{parentName:"p"},"<map-select>")," peut contenir un ou plusieurs \xe9l\xe9ments ",(0,a.kt)("inlineCode",{parentName:"p"},"<map-option>"),"."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"sp\xe9cifications"},"Sp\xe9cifications"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Sp\xe9cification"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://maps4html.org/MapML/spec/#the-select-element-0"},"\xc9l\xe9ment MapML \xab style \xbb"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://html.spec.whatwg.org/multipage/form-elements.html#the-select-element"},"\xc9l\xe9ment HTML \xab style \xbb"))))),(0,a.kt)("hr",null),(0,a.kt)("blockquote",null,(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/Maps4HTML/web-map-doc/edit/main/docs/elements/select.md"},"Modifier cette page sur ",(0,a.kt)("strong",{parentName:"a"},"Github"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://gitter.im/Maps4HTML/chat"},"Discutez avec nous sur ",(0,a.kt)("strong",{parentName:"a"},"Gitter"))))))}c.isMDXComponent=!0}}]);