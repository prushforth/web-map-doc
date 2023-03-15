"use strict";(self.webpackChunkmapml_viewer_doc=self.webpackChunkmapml_viewer_doc||[]).push([[3628],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||s;return n?a.createElement(f,i(i({ref:t},u),{},{components:n})):a.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var c=2;c<s;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9569:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const s={id:"features",title:"Fonctionnalit\xe9s de l'extension",slug:"/extension/features"},i=void 0,o={unversionedId:"extension/features",id:"extension/features",title:"Fonctionnalit\xe9s de l'extension",description:"L\u2019extension r\xe9pond \xe0 plusieurs autres exigences.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/extension/features.md",sourceDirName:"extension",slug:"/extension/features",permalink:"/web-map-doc/fr/docs/extension/features",draft:!1,tags:[],version:"current",frontMatter:{id:"features",title:"Fonctionnalit\xe9s de l'extension",slug:"/extension/features"},sidebar:"sidebar",previous:{title:"Installation de l'extension",permalink:"/web-map-doc/fr/docs/extension/installation"},next:{title:"Mode d\xe9bogage",permalink:"/web-map-doc/fr/docs/resources/debug-mode"}},l={},c=[{value:"Localisation",id:"localisation",level:3},{value:"Indexation d\u2019entit\xe9s",id:"indexation-dentit\xe9s",level:3},{value:"Annonce du niveau de zoom",id:"annonce-du-niveau-de-zoom",level:3},{value:"Rendu des ressources en MapML",id:"rendu-des-ressources-en-mapml",level:3},{value:"D\xe9finir un syst\xe8me de coordonn\xe9es pour les op\xe9rations de copie",id:"d\xe9finir-un-syst\xe8me-de-coordonn\xe9es-pour-les-op\xe9rations-de-copie",level:3},{value:"Exigences",id:"exigences",level:2}],u={toc:c};function d(e){let{components:t,...s}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"L\u2019extension r\xe9pond \xe0 plusieurs autres exigences."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Fen\xeatre contextuelle d\u2019extension",src:n(4794).Z,width:"302",height:"425"})),(0,r.kt)("h3",{id:"localisation"},"Localisation"),(0,r.kt)("p",null,"Par d\xe9faut, l\u2019extension utilise les param\xe8tres de lieu du navigateur pour afficher une interface utilisateur ",(0,r.kt)("inlineCode",{parentName:"p"},"<mapml-viewer>")," dans les param\xe8tres de lieu de l\u2019utilisateur. Notez que si la langue de l\u2019interface utilisateur ne correspond pas \xe0 celle de votre navigateur, il est probable que les cha\xeenes de l\u2019interface utilisateur ne soient actuellement pas traduites pour vos param\xe8tres de lieu. Les contributions en mati\xe8re de localisation sont les bienvenues. Au moment de la r\xe9daction du pr\xe9sent document, les langues disponibles sont l\u2019anglais, le fran\xe7ais et le su\xe9dois."),(0,r.kt)("h3",{id:"indexation-dentit\xe9s"},"Indexation d\u2019entit\xe9s"),(0,r.kt)("p",null,"Lorsque cette fonction est activ\xe9e au moyen de l\u2019extension, elle affiche un carr\xe9 au centre de la carte afin d\u2019ouvrir le menu de l\u2019index des entit\xe9s situ\xe9es dans le carr\xe9, lequel menu est accessible par le clavier."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Exemple d\u2019index des entit\xe9s",src:n(5175).Z,width:"1278",height:"1277"})),(0,r.kt)("h3",{id:"annonce-du-niveau-de-zoom"},"Annonce du niveau de zoom"),(0,r.kt)("p",null,"L'activation de cette fonction dans l\u2019extension permet d'annoncer le niveau de zoom dans la carte au moyen de lecteurs d\u2019\xe9cran (cette option est activ\xe9e par d\xe9faut)."),(0,r.kt)("h3",{id:"rendu-des-ressources-en-mapml"},"Rendu des ressources en MapML"),(0,r.kt)("p",null,"L'activation de cette fonction dans la fen\xeatre contextuelle d'extension (elle est activ\xe9e par d\xe9faut comme le montre l'image ci-dessus, mais elle peut \xeatre d\xe9sactiv\xe9e) permet d'afficher des documents cartographiques qui n'ont pas de document h\xf4te, tout comme les navigateurs peuvent pr\xe9senter des ressources d'image  (image/*) qui n'ont pas de document h\xf4te en synth\xe9tisant un document h\xf4te au moment de l'ex\xe9cution. Cette fonctionnalit\xe9 reconna\xeetra les documents qui sont servis \xe0 un onglet de navigateur (ou contexte de navigation g\xe9n\xe9ral) ou qui sont servis avec l'en-t\xeate  \"text/mapml\" ou \"application/xml\" Content-Type. Dans le dernier cas, l'extension recherchera un \xe9l\xe9ment racine ",(0,r.kt)("inlineCode",{parentName:"p"},'<mapml- xmlns="http://www.w3.org/1999/xhtml">'),"."),(0,r.kt)("h3",{id:"d\xe9finir-un-syst\xe8me-de-coordonn\xe9es-pour-les-op\xe9rations-de-copie"},"D\xe9finir un syst\xe8me de coordonn\xe9es pour les op\xe9rations de copie"),(0,r.kt)("p",null,"Par d\xe9faut, le syst\xe8me de coordonn\xe9es (cs) pour copier l'\xe9tendue de la carte \xe0\nl'aide du menu contextuel de la carte est celui des coordonn\xe9es projet\xe9es (PCRS),\net celui pour copier les endroits est par d\xe9faut g\xe9od\xe9sique (GCRS). Lorsqu'il est\nchang\xe9 par l'interface utilisateur de l'extension, le syst\xe8me de coordonn\xe9es\ns\xe9lectionn\xe9 sera utilis\xe9 pour les op\xe9rations de copie ult\xe9rieures."),(0,r.kt)("h2",{id:"exigences"},"Exigences"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Maps4HTML/HTML-Map-Element-UseCases-Requirements/issues/new?title=-SUMMARIZE+THE+PROBLEM-&body=-DESCRIBE+THE+PROBLEM-"},"Signaler les probl\xe8mes li\xe9s \xe0 ces exigences sur GitHub")),(0,r.kt)("p",null,(0,r.kt)("b",null,(0,r.kt)("span",{class:"requirement"},"exigence"),(0,r.kt)("span",{class:"enhancement"},"am\xe9lioration"),(0,r.kt)("span",{class:"impractical"},"peu pratique"),(0,r.kt)("span",{class:"undecided"},"ind\xe9cis"),(0,r.kt)("span",{class:"discussion"},"en cours de discussion"))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"}),(0,r.kt)("th",{parentName:"tr",align:"center"},"Sp\xe9c."),(0,r.kt)("th",{parentName:"tr",align:"center"},"Visualiseur"),(0,r.kt)("th",{parentName:"tr",align:"center"},"API"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/Maps4HTML/HTML-Map-Element-UseCases-Requirements/issues/172"},(0,r.kt)("strong",{parentName:"a"},"Le GeoWeb \u2013 Mod\xe8le Epic propos\xe9"))),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("div",{class:"discussion"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/Maps4HTML/HTML-Map-Element-UseCases-Requirements/issues/19"},"Permettre la f\xe9d\xe9ration au moyen de liens"))),(0,r.kt)("td",{parentName:"tr",align:"center"},"complet"),(0,r.kt)("td",{parentName:"tr",align:"center"},"complet"),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://maps4html.org/HTML-Map-Element-UseCases-Requirements/#client-apis"},(0,r.kt)("strong",{parentName:"a"},"Capacit\xe9s de cartographie de l'API c\xf4t\xe9 client (6.0)"))),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("div",{class:"discussion"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/Maps4HTML/HTML-Map-Element-UseCases-Requirements/issues/259"},"Cr\xe9er, initialiser et afficher une carte \xe0 partir d'une ressource d'un document de carte"))),(0,r.kt)("td",{parentName:"tr",align:"center"},"complet"),(0,r.kt)("td",{parentName:"tr",align:"center"},"complet"),(0,r.kt)("td",{parentName:"tr",align:"center"})))),(0,r.kt)("hr",null),(0,r.kt)("blockquote",null,(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/Maps4HTML/web-map-doc/edit/main/docs/extension/features.md"},"Modifier cette page sur ",(0,r.kt)("strong",{parentName:"a"},"Github"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://gitter.im/Maps4HTML/chat"},"Discutez avec nous sur ",(0,r.kt)("strong",{parentName:"a"},"Gitter"))))))}d.isMDXComponent=!0},5175:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/feature-index-9aab6d59cd3afda76f7b1e7a4e7c39fe.png"},4794:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/render-mapml-dede5f5b3e908191ab914eb47fb97b1b.png"}}]);