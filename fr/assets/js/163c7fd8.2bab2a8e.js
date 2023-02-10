"use strict";(self.webpackChunkmapml_viewer_doc=self.webpackChunkmapml_viewer_doc||[]).push([[9686],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var a=r(7294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,l=function(e,t){if(null==e)return{};var r,a,l={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var o=a.createContext({}),i=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},s=function(e){var t=i(e.components);return a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,l=e.mdxType,n=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=i(r),m=l,y=p["".concat(o,".").concat(m)]||p[m]||d[m]||n;return r?a.createElement(y,u(u({ref:t},s),{},{components:r})):a.createElement(y,u({ref:t},s))}));function m(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=r.length,u=new Array(n);u[0]=p;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:l,u[1]=c;for(var i=2;i<n;i++)u[i]=r[i];return a.createElement.apply(null,u)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},2179:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>u,default:()=>d,frontMatter:()=>n,metadata:()=>c,toc:()=>i});var a=r(7462),l=(r(7294),r(3905));const n={id:"layer-api",title:"HTMLLayerElement",slug:"/api/layer-api"},u="HTMLLayerElement",c={unversionedId:"api/layer-api",id:"api/layer-api",title:"HTMLLayerElement",description:"Propri\xe9t\xe9s",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/api/layer-api.md",sourceDirName:"api",slug:"/api/layer-api",permalink:"/web-map-doc/fr/docs/api/layer-api",draft:!1,tags:[],version:"current",frontMatter:{id:"layer-api",title:"HTMLLayerElement",slug:"/api/layer-api"},sidebar:"sidebar",previous:{title:"HTMLMapmlViewerElement",permalink:"/web-map-doc/fr/docs/api/mapml-viewer-api"},next:{title:"API de projections personnalis\xe9es",permalink:"/web-map-doc/fr/docs/api/custom-projections"}},o={},i=[{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2},{value:"checked",id:"checked",level:3},{value:"hidden",id:"hidden",level:3},{value:"disabled",id:"disabled",level:3},{value:"src",id:"src",level:3},{value:"opacity",id:"opacity",level:3},{value:"M\xe9thodes",id:"m\xe9thodes",level:2},{value:"focus()",id:"focus",level:3},{value:"\xc9v\xe9nements",id:"\xe9v\xe9nements",level:2}],s={toc:i};function d(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"htmllayerelement"},"HTMLLayerElement"),(0,l.kt)("h2",{id:"propri\xe9t\xe9s"},"Propri\xe9t\xe9s"),(0,l.kt)("h3",{id:"checked"},"checked"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"HTMLLayerElement.checked")," est une valeur bool\xe9enne de lecteur et d\u2019\xe9criture qui active ou d\xe9sactive la couche et reproduit l\u2019attribut v\xe9rifi\xe9 (checked). L\u2019\xe9tat v\xe9rifi\xe9 est reproduit dans l\u2019interface utilisateur du contr\xf4le de la couche sous la forme d\u2019une case \xe0 cocher \xe0 c\xf4t\xe9 du nom de cette derni\xe8re. La propri\xe9t\xe9 v\xe9rifi\xe9e peut servir \xe0 effectuer un changement programmatique de l\u2019\xe9tat v\xe9rifi\xe9 de la couche.\nLa propri\xe9t\xe9 v\xe9rifi\xe9e ne peut \xeatre modifi\xe9e si l\u2019\xe9tat de la propri\xe9t\xe9 est \xab d\xe9sactiv\xe9e \xbb)."),(0,l.kt)("p",null,"Pour activer l\u2019\xe9tat v\xe9rifi\xe9 d\u2019une couche activ\xe9e :"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"let layer = document.querySelector('layer-');\nlayer.checked = true; // les valeurs valides sont true | false\n")),(0,l.kt)("p",null,"Pour lire l\u2019\xe9tat v\xe9rifi\xe9 de la couche :"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"let layer = document.querySelector('layer-');\nlet isChecked = layer.checked;\n")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"hidden"},"hidden"),(0,l.kt)("p",null,"HTMLLayerElement.hidden est une valeur bool\xe9enne de lecture et d\u2019\xe9criture qui ne masque ou n\u2019affiche la couche qu\u2019au niveau du contr\xf4le de la couche. Masquer la couche n\u2019a aucune incidence sur la pr\xe9sence de son contenu sur la carte, seulement sur le contr\xf4le de la pr\xe9sence de la couche.\nCela peut \xeatre utile pour g\xe9rer les couches de courte dur\xe9e dans la carte, comme les r\xe9sultats d\u2019une recherche, sans que l\u2019utilisateur soit oblig\xe9 de g\xe9rer l\u2019\xe9tat de la couche, ce dont se charge votre application.\nCela est \xe9galement pratique pour g\xe9rer une couche permanente sans surcharger l\u2019interface utilisateur."),(0,l.kt)("p",null,"Pour d\xe9finir que la couche est masqu\xe9e ou la mettre \xe0 jour avec cet \xe9tat :"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"let layer = document.querySelector('layer-');\nlayer.hidden = true; // les valeurs valides sont true | false\n")),(0,l.kt)("p",null,"Pour obtenir la valeur hidden de ",(0,l.kt)("inlineCode",{parentName:"p"},"<layer->")," :"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"let layer = document.querySelector('layer-');\nlet isHidden = layer.hidden;\n")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"disabled"},"disabled"),(0,l.kt)("p",null,"HTMLLayerElement.disabled donne un acc\xe8s en lecture seule \xe0 l\u2019\xe9tat d\xe9sactiv\xe9 de la couche. Une couche est d\xe9sactiv\xe9e si son contenu n\u2019est pas rendu, soit parce qu\u2019il sort compl\xe8tement de l\u2019\xe9tendue de la carte affich\xe9e ou parce qu\u2019une erreur est associ\xe9e au traitement de la couche, par exemple lorsque celle-ci se trouve dans un projection incompatible avec celle de la carte. Lorsqu\u2019une couche est d\xe9sactiv\xe9e, l\u2019utilisateur ne peut interagir avec elle au niveau du contr\xf4le de la couche, et elle n\u2019est pas visible dans la fen\xeatre d\u2019affichage de la carte. Si la couche devient activ\xe9e, par exemple \xe0 la suite d\u2019une manipulation de la carte, l\u2019utilisateur peut interagir avec elle au niveau du contr\xf4le de la couche, et elle est visible dans la fen\xeatre d\u2019affichage de la carte."),(0,l.kt)("hr",null),(0,l.kt)("p",null,"HTMLLayerElement.label donne un acc\xe8s en lecture et en \xe9criture \xe0 l\u2019\xe9tiquette utilis\xe9e au niveau du contr\xf4le de la couche."),(0,l.kt)("p",null,"Pour d\xe9finir la label de ",(0,l.kt)("inlineCode",{parentName:"p"},"<layer->")," ou mettre \xe0 jour celle-ci :"),(0,l.kt)("p",null,":::Mise en garde\nCette fonction n\u2019est pas encore mise en \u0153uvre. Ne met pas \xe0 jour l\u2019\xe9tiquette au niveau du contr\xf4le de la couche \xe0 l\u2019heure actuelle.\n:::"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"let layer = document.querySelector('layer-');\nlayer.label = \"Nouveau titre\";\n")),(0,l.kt)("p",null,"Pour obtenir la valeur de la label de ",(0,l.kt)("inlineCode",{parentName:"p"},"<layer->")," :"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"let layer = document.querySelector('layer-');\nlet label = layer.label;\n")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"src"},"src"),(0,l.kt)("p",null,"HTMLLayerElement.src reproduit l\u2019attribut HTML src et pr\xe9cise l\u2019adresse URL du document MapML de la couche. La propri\xe9t\xe9 src peut ne pas \xeatre d\xe9finie si la couche contient du contenu en ligne. Si la propri\xe9t\xe9 src retourne une valeur, tout contenu en ligne est omis.\nPour d\xe9finir ou mettre \xe0 jour la src de ",(0,l.kt)("inlineCode",{parentName:"p"},"<layer->")," :"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"let layer = document.querySelector('layer-');\nlayer.src = \"https://example.org\";\n")),(0,l.kt)("p",null,"Pour obtenir la valeur (adresse URL) de la src de ",(0,l.kt)("inlineCode",{parentName:"p"},"<layer->")," :"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"let layer = document.querySelector('layer-');\nlet url = layer.src;\n")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"opacity"},"opacity"),(0,l.kt)("p",null,"HTMLLayerElement.opacity donne acc\xe8s en lecture ou en \xe9criture au pourcentage (%) d\u2019opacit\xe9, qui correspond \xe0 la position du curseur dans le contr\xf4le de la couche."),(0,l.kt)("p",null,"Pour d\xe9finir ou mettre \xe0 jour l\u2019opacit\xe9 de ",(0,l.kt)("inlineCode",{parentName:"p"},"<layer->")," :"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"let layer = document.querySelector('layer-');\nlayer.opacity = 0.5; // les valeurs valides vont de 0 \xe0 1\n")),(0,l.kt)("p",null,"Pour obtenir la valeur de l\u2019opacit\xe9 de ",(0,l.kt)("inlineCode",{parentName:"p"},"<layer->")," :"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"let layer = document.querySelector('layer-');\nlet opacity = layer.opacity;\n")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"m\xe9thodes"},"M\xe9thodes"),(0,l.kt)("h3",{id:"focus"},"focus()"),(0,l.kt)("p",null,"HTMLLayerElement.focus() effectue un zoom sur l\u2019\xe9tendue de la couche. Remarque : le nom de cette m\xe9thode est erron\xe9 et sera corrig\xe9, conform\xe9ment \xe0 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/Maps4HTML/Web-Map-Custom-Element/issues/587"},"ce probl\xe8me"),"."),(0,l.kt)("p",null,"Pour que l\u2019\xe9tendue de la couche corresponde le plus possible \xe0 celle de la carte :"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"let layer = document.querySelector('layer-');\nlayer.focus();\n")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"\xe9v\xe9nements"},"\xc9v\xe9nements"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Nom de l\u2019\xe9v\xe9nement"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"changestyle"),(0,l.kt)("td",{parentName:"tr",align:null},"D\xe9clench\xe9 avant que la couche ne change de src parce que l\u2019utilisateur a s\xe9lectionn\xe9 un autre style au niveau du contr\xf4le de la couche")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"changeprojection"),(0,l.kt)("td",{parentName:"tr",align:null},"D\xe9clench\xe9 avant que la couche ne change de projection parce que la projection d\xe9clar\xe9e n\u2019est pas \xe9gale \xe0 celle de la carte")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"extentload"),(0,l.kt)("td",{parentName:"tr",align:null},"D\xe9clench\xe9 lorsque les m\xe9tadonn\xe9es d\u2019une couche ont \xe9t\xe9 charg\xe9es, mais avant le chargement des pav\xe9s, des caract\xe9ristiques et de tout autre contenu")))),(0,l.kt)("hr",null))}d.isMDXComponent=!0}}]);