"use strict";(self.webpackChunkmapml_viewer_doc=self.webpackChunkmapml_viewer_doc||[]).push([[7360],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>c});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),s=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),d=s(n),c=r,g=d["".concat(i,".").concat(c)]||d[c]||u[c]||o;return n?a.createElement(g,l(l({ref:t},m),{},{components:n})):a.createElement(g,l({ref:t},m))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294),r=n(6010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(7462),r=n(7294),o=n(6010),l=n(2389),p=n(7392),i=n(7094),s=n(2466);const m="tabList__CuJ",u="tabItem_LNqP";function d(e){const{lazy:t,block:n,defaultValue:l,values:d,groupId:c,className:g}=e,k=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),N=d??k.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),h=(0,p.l)(N,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===l?l:l??k.find((e=>e.props.default))?.props.value??k[0].props.value;if(null!==f&&!N.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${N.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:y}=(0,i.U)(),[v,j]=(0,r.useState)(f),C=[],{blockElementScrollPositionUntilNextRender:O}=(0,s.o5)();if(null!=c){const e=b[c];null!=e&&e!==v&&N.some((t=>t.value===e))&&j(e)}const q=e=>{const t=e.currentTarget,n=C.indexOf(t),a=N[n].value;a!==v&&(O(t),j(a),null!=c&&y(c,String(a)))},w=e=>{let t=null;switch(e.key){case"Enter":q(e);break;case"ArrowRight":{const n=C.indexOf(e.currentTarget)+1;t=C[n]??C[0];break}case"ArrowLeft":{const n=C.indexOf(e.currentTarget)-1;t=C[n]??C[C.length-1];break}}t?.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",m)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},g)},N.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,key:t,ref:e=>C.push(e),onKeyDown:w,onClick:q},l,{className:(0,o.Z)("tabs__item",u,l?.className,{"tabs__item--active":v===t})}),n??t)}))),t?(0,r.cloneElement)(k.filter((e=>e.props.value===v))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==v})))))}function c(e){const t=(0,l.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},6569:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>c,frontMatter:()=>p,metadata:()=>s,toc:()=>u});var a=n(7462),r=(n(7294),n(3905)),o=n(5488),l=n(5162);const p={id:"geojson-api",title:"API GeoJSON",slug:"/api/geojson-api",toc_max_heading_level:4},i=void 0,s={unversionedId:"api/geojson-api",id:"api/geojson-api",title:"API GeoJSON",description:"Introduction",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/api/geojson-api.mdx",sourceDirName:"api",slug:"/api/geojson-api",permalink:"/web-map-doc/fr/docs/api/geojson-api",draft:!1,tags:[],version:"current",frontMatter:{id:"geojson-api",title:"API GeoJSON",slug:"/api/geojson-api",toc_max_heading_level:4}},m={},u=[{value:"Introduction",id:"introduction",level:2},{value:"GeoJSON \xe0 MapML",id:"geojson-\xe0-mapml",level:2},{value:"Param\xe8tres",id:"param\xe8tres",level:3},{value:"Options",id:"options",level:3},{value:"Exemples",id:"exemples",level:3},{value:"Utilisation des options de base",id:"utilisation-des-options-de-base",level:4},{value:"Cha\xeene d\u2019options",id:"cha\xeene-doptions",level:4},{value:"Fonction d\u2019options",id:"fonction-doptions",level:4},{value:"Options par d\xe9faut",id:"options-par-d\xe9faut",level:4},{value:"MapML \xe0 GeoJSON",id:"mapml-\xe0-geojson",level:2},{value:"Param\xe8tres",id:"param\xe8tres-1",level:3},{value:"Options",id:"options-1",level:3},{value:"Remarques",id:"remarques",level:6},{value:"Exemples",id:"exemples-1",level:3},{value:"Options par d\xe9faut",id:"options-par-d\xe9faut-1",level:4}],d={toc:u};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"L\u2019",(0,r.kt)("strong",{parentName:"p"},"interface de programmation d\u2019applications (API) GeoJSON")," est fournie sous forme de biblioth\xe8que pour convertir MapML en GeoJSON et vice versa. L\u2019API GeoJSON peut \xeatre ajout\xe9e \xe0 n\u2019importe quel document, \xe0 condition qu\u2019elle soit pr\xe9c\xe9d\xe9e du module mampl-viewer, comme suit :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<!doctype html>\n<html lang="en">\n    <head>\n        <script type="module" src="mapml-viewer.js"><\/script>\n        <script src="lib/geojson.js"><\/script>\n    </head>\n    <body>\n        ...\n    </body>\n</html>    \n')),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"geojson-\xe0-mapml"},"GeoJSON \xe0 MapML"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Fonction"),(0,r.kt)("th",{parentName:"tr",align:null},"Retours"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"geojson2mapml(<Object","\xa0","|","\xa0","String",">","\xa0","json,","\xa0","<Object",">","\xa0","options)")),(0,r.kt)("td",{parentName:"tr",align:null},"\xc9l\xe9ment  MapML ",(0,r.kt)("inlineCode",{parentName:"td"},"<layer->"),"."),(0,r.kt)("td",{parentName:"tr",align:null},"Convertit une caract\xe9ristique GeoJSON ou une cha\xeene ou un objet de collection de caract\xe9ristiques en \xe9l\xe9ment MapML ",(0,r.kt)("inlineCode",{parentName:"td"},"<layer->")," contenant un ou plusieurs \xe9l\xe9ments ",(0,r.kt)("inlineCode",{parentName:"td"},"<map-feature>"),".")))),(0,r.kt)("p",null,":::Conseil"),(0,r.kt)("p",null,"Jetez un coup d\u2019\u0153il \xe0 ",(0,r.kt)("a",{parentName:"p",href:"https://maps4html.org/experiments/api/custom-map-ui/geoname-search-ui.html"},"cette application")," au moyen de l\u2019API geojson2mapml!"),(0,r.kt)("p",null,":::"),(0,r.kt)("h3",{id:"param\xe8tres"},"Param\xe8tres"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param\xe8tre"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"<String","\xa0","|","\xa0","Object>","\xa0","json"),(0,r.kt)("td",{parentName:"tr",align:null},"Cha\xeene ou objet GeoJSON")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Options ","<","Object",">"),(0,r.kt)("td",{parentName:"tr",align:null},"Ensemble de paires de cl\xe9s ou de valeurs qui personnalise la couche de sortie MapML. Toutes les options sont facultatives et d\xe9crites ci-apr\xe8s.")))),(0,r.kt)("h3",{id:"options"},"Options"),(0,r.kt)("p",null,"<","Object",">"," Ensemble de paires de cl\xe9s ou de valeurs qui personnalise la couche de sortie MapML. Toutes les options sont facultatives et d\xe9crites ci-apr\xe8s."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Option"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"label")),(0,r.kt)("td",{parentName:"tr",align:null},"<String",">"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"json.name"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"json.title"),' ou "Layer"'),(0,r.kt)("td",{parentName:"tr",align:null},"D\xe9finit la ",(0,r.kt)("a",{parentName:"td",href:"https://maps4html.org/web-map-doc/docs/layers/layer/#label"},"label")," de la couche de sortie.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"projection")),(0,r.kt)("td",{parentName:"tr",align:null},"<String",">"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"OSMTILE")),(0,r.kt)("td",{parentName:"tr",align:null},"D\xe9finit la ","[projection]","  (",(0,r.kt)("a",{parentName:"td",href:"https://maps4html.org/web-map-doc/docs/elements/mapml-viewer/#projection"},"https://maps4html.org/web-map-doc/docs/elements/mapml-viewer/#projection"),") de la couche de sortie. Les valeurs d\xe9finies incluent : ",(0,r.kt)("inlineCode",{parentName:"td"},"OSMTILE"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"CBMTILE"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"WGS84"),", and ",(0,r.kt)("inlineCode",{parentName:"td"},"APSTILE"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"caption")),(0,r.kt)("td",{parentName:"tr",align:null},"<String","\xa0","|","\xa0","Function",">"),(0,r.kt)("td",{parentName:"tr",align:null},"Utilise la valeur ",(0,r.kt)("inlineCode",{parentName:"td"},"label")),(0,r.kt)("td",{parentName:"tr",align:null},"Fonction qui accepte la caract\xe9ristique JSON et retourne une cha\xeene, OU une cha\xeene qui est le nom d\u2019une propri\xe9t\xe9 \xe0 mapper sur ",(0,r.kt)("a",{parentName:"td",href:"https://maps4html.org/web-map-doc/docs/elements/feature/#map-featurecaption"},"featurecaption"),". Si aucune propri\xe9t\xe9 associ\xe9e n\u2019est trouv\xe9e, la cha\xeene fournie sert de valeur de la l\xe9gende de la caract\xe9ristique. Voir la section ",(0,r.kt)("a",{parentName:"td",href:"#basic-options-usage"},"Utilisation des options de base")," pour un exemple.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{id:"option-properties"},(0,r.kt)("inlineCode",{parentName:"td"},"properties"))),(0,r.kt)("td",{parentName:"tr",align:null},"<Function","\xa0","|","\xa0","String","\xa0","|","\xa0","HTMLElement",">"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"Les propri\xe9t\xe9s seront mapp\xe9es \xe0 un ",(0,r.kt)("a",{parentName:"em",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table"},"table")," HTML.")),(0,r.kt)("td",{parentName:"tr",align:null},"Pr\xe9cise la fa\xe7on dont les propri\xe9t\xe9s sont mapp\xe9es. <Function",">"," - Fonction qui accepte un argument \u2013 l\u2019objet GeoJSON feature \u2013 et qui doit retourner un HTMLElement qui devient l\u2019unique \xe9l\xe9ment-enfant de <properties",">",". <String",">"," - Cha\xeene qui sera analys\xe9e syntaxiquement et utilis\xe9e comme unique \xe9l\xe9ment-enfant de ",(0,r.kt)("inlineCode",{parentName:"td"},"<properties>")," avec toutes les caract\xe9ristiques. <HTMLElement",">"," - \xc9l\xe9ment qui servira d\u2019unique \xe9l\xe9ment- enfant de ",(0,r.kt)("inlineCode",{parentName:"td"},"<properties>")," avec toutes les caract\xe9ristiques. Voir la section ",(0,r.kt)("a",{parentName:"td",href:"#basic-options-usage"},"utilisation des options de base")," pour un exemple.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"geometryFunction")),(0,r.kt)("td",{parentName:"tr",align:null},"<Function",">"),(0,r.kt)("td",{parentName:"tr",align:null},"La g\xe9om\xe9trie ",(0,r.kt)("em",{parentName:"td"},"MapML reproduit la valeur g\xe9om\xe9trique GeoJSON")),(0,r.kt)("td",{parentName:"tr",align:null},"<Function",">"," Fonction pour modifier les ","[descendants]"," g\xe9n\xe9r\xe9s (",(0,r.kt)("a",{parentName:"td",href:"https://maps4html.org/web-map-doc/docs/elements/geometry/#child-elements"},"https://maps4html.org/web-map-doc/docs/elements/geometry/#child-elements"),") de ",(0,r.kt)("inlineCode",{parentName:"td"},"<map-geometry>")," qui peut ajouter des classes, ",(0,r.kt)("a",{parentName:"td",href:"https://maps4html.org/web-map-doc/docs/other-elements/map-a/"},"hyperlinks")," et des ",(0,r.kt)("a",{parentName:"td",href:"https://maps4html.org/web-map-doc/docs/other-elements/span/"},"spans")," \xe0 l\u2019instance. Un \xe9l\xe9ment ",(0,r.kt)("inlineCode",{parentName:"td"},"<map-geometry>")," simple est cr\xe9\xe9 par d\xe9faut. La fonction accepte deux arguments : l\u2019","[\xe9l\xe9ment-enfant]"," g\xe9n\xe9r\xe9 (",(0,r.kt)("a",{parentName:"td",href:"https://maps4html.org/web-map-doc/docs/elements/geometry/#child-elements"},"https://maps4html.org/web-map-doc/docs/elements/geometry/#child-elements"),") de ",(0,r.kt)("inlineCode",{parentName:"td"},"<map-geometry>")," et ",(0,r.kt)("a",{parentName:"td",href:"https://www.rfc-editor.org/rfc/rfc7946#section-3.2"},"l\u2019objet de la caract\xe9ristique JSON")," pour retourner un \xe9l\xe9ment-enfant modifi\xe9 de ",(0,r.kt)("inlineCode",{parentName:"td"},"<map-geometry>"),". Voir la section ",(0,r.kt)("a",{parentName:"td",href:"#basic-options-usage"},"Utilisation des options de base")," pour un exemple.")))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"exemples"},"Exemples"),(0,r.kt)("h4",{id:"utilisation-des-options-de-base"},"Utilisation des options de base"),(0,r.kt)("p",null,"Utilisation de chaque option en contexte"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"label",label:"label",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="option d\u2019\xe9tiquette geojson2mapml"',title:'"option',"d\u2019\xe9tiquette":!0,'geojson2mapml"':!0},'geojson2mapml(json, {label: "Centre-ville d\u2019Ottawa"});\n'))),(0,r.kt)(l.Z,{value:"projection",label:"projection",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="geojson2mapml projection option"',title:'"geojson2mapml',projection:!0,'option"':!0},'geojson2mapml(json, {projection: "CBMTILE"});\n'))),(0,r.kt)(l.Z,{value:"caption",label:"caption",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="option de l\xe9gende geojson2mapml \u2013 valeur contenant une fonction"',title:'"option',de:!0,"l\xe9gende":!0,geojson2mapml:!0,"\u2013":!0,valeur:!0,contenant:!0,une:!0,'fonction"':!0},'// fonction de l\xe9gende\ngeojson2mapml(json, {caption: function(feature) {\n    return feature.properties.desc + ", not a Polygon";\n    }\n});\n// valeur de la cha\xeene de l\u2019option de l\xe9gende qui renvoie \xe0 un nom de propri\xe9t\xe9\ngeojson2mapml(json, {caption: "desc"});\n'))),(0,r.kt)(l.Z,{value:"properties",label:"properties",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="geojson2mapml properties option - function-valued"',title:'"geojson2mapml',properties:!0,option:!0,"-":!0,'function-valued"':!0},'// fonction de propri\xe9t\xe9s\ngeojson2mapml(json, {properties: function(feature) {\n    let parser = new DOMParser();\n    return parser.parseFromString("<h1>" + feature.properties.desc + "propri\xe9t\xe9 de</h1>", "text/html").body.firstChild;\n    }\n});\n// option de propri\xe9t\xe9s \u2013 valeur contenant une cha\xeene \u2013 assurez-vous de nettoyer les cha\xeenes fournies par les utilisateurs\ngeojson2mapml(json, {properties: "<p>Cette propri\xe9t\xe9 a \xe9t\xe9 ajout\xe9e \xe0 l\u2019aide d\u2019une cha\xeene de propri\xe9t\xe9s </p>"});\n'))),(0,r.kt)(l.Z,{value:"geometryFunction",label:"geometryFunction",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="geojson2mapml geometryFunction option"',title:'"geojson2mapml',geometryFunction:!0,'option"':!0},'let options = {\n                geometryFunction: function (g, f) {\n                  g.setAttribute("class", f.properties.class);\n                  return g;}\n              };\ngeojson2mapml(json, options);\n')))),(0,r.kt)("h4",{id:"cha\xeene-doptions"},"Cha\xeene d\u2019options"),(0,r.kt)("p",null,"Exemple montrant comment utiliser des cha\xeenes pour d\xe9finir les options ",(0,r.kt)("inlineCode",{parentName:"p"},"label"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"projection"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"caption")," et ",(0,r.kt)("inlineCode",{parentName:"p"},"properties"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'let json = {\n    "name": "Nom par d\xe9faut",\n    "type": "Feature",\n    "geometry": {\n        "type": "Point",\n        "coordinates": [-75.6916809,45.4186964]\n    },\n    "properties": {"desc": "Ceci est un point"}\n};\n\n// GeoJSON \xe0 MapML\nlet output = geojson2mapml(json, {label: "Exemple 1", projection: "CBMTILE", caption: "desc", properties: "<h3>Ceci est un en-t\xeate de propri\xe9t\xe9</h3>"});\n')),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Cliquez pour afficher la sortie HTMLElement"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<layer- label="Example 1" checked="">\n   <map-meta name="projection" content="CBMTILE"></map-meta>\n   <map-meta name="cs" content="gcrs"></map-meta>\n   <map-feature>\n      <map-featurecaption>Ceci est un point</map-featurecaption>\n      <map-geometry>\n         <map-point>\n            <map-coordinates>-75.6916809 45.4186964</map-coordinates>\n         </map-point>\n      </map-geometry>\n      <map-properties>\n         <h3>Ceci est un en-t\xeate de propri\xe9t\xe9</h3>\n      </map-properties>\n   </map-feature>\n</layer->\n'))),(0,r.kt)("h4",{id:"fonction-doptions"},"Fonction d\u2019options"),(0,r.kt)("p",null,"Exemple montrant comment les fonctions peuvent servir \xe0 d\xe9finir les options ",(0,r.kt)("inlineCode",{parentName:"p"},"caption")," et ",(0,r.kt)("inlineCode",{parentName:"p"},"properties"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'let json = {\n    "name": "Nom par d\xe9faut",\n    "type": "Feature",\n    "geometry": {\n        "type": "Point",\n        "coordinates": [-75.6916809,45.4186964]\n    },\n    "properties": {"desc": "Ceci est un point"}\n};\n\n// function to set caption\nlet cap = function c(j) {\n  let str = "Ce point se trouve \xe0 : (" + j.geometry.coordinates[0] + ", " + j.geometry.coordinates[1] + ").";\n  return str;\n}\n\n// fonction pour d\xe9finir des propri\xe9t\xe9s\nlet prop = function f(p) {\n  let parser = new DOMParser();\n  return parser.parseFromString("<h1>" + p.properties.desc + "\'s property</h1>", "text/html").body.firstChild;\n}\n\n// GeoJSON \xe0 MapML\nlet output = geojson2mapml(json, {label: "Exemple 2", caption: cap, properties: prop});\n')),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Cliquez pour afficher la sortie HTMLElement"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<layer- label="Example 2" checked="">\n   <map-meta name="projection" content="OSMTILE"></map-meta>\n   <map-meta name="cs" content="gcrs"></map-meta>\n   <map-feature>\n      <map-featurecaption>Ce point se trouve \xe0 : (-75.6916809, 45.4186964).</map-featurecaption>\n      <map-geometry>\n         <map-point>\n            <map-coordinates>-75.6916809 45.4186964</map-coordinates>\n         </map-point>\n      </map-geometry>\n      <map-properties>\n         <h1>Ceci est une propri\xe9t\xe9 du point</h1>\n      </map-properties>\n   </map-feature>\n</layer->\n'))),(0,r.kt)("h4",{id:"options-par-d\xe9faut"},"Options par d\xe9faut"),(0,r.kt)("p",null,"Exemple montrant la sortie par d\xe9faut lorsqu\u2019aucune option n\u2019est fournie."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'let json = {\n "title": "G\xe9om\xe9trie du point",\n "bbox": [-75.916809, 45.886964, -75.516809, 45.26964],\n "type": "FeatureCollection",\n "features": [{\n     "type": "Feature",\n     "geometry": {\n         "type": "Point",\n         "coordinates": [-75.6916809, 45.4186964]\n     },\n     "properties": {\n         "prop0": "Ceci est un point"\n     }\n }]\n};\n\n// GeoJSON \xe0 MapML\nlet output = geojson2mapml(json);\n')),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Cliquez pour afficher la sortie HTMLElement"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<layer- label="G\xe9om\xe9trie du point" checked="">\n   <map-meta name="extent" content="top-left-longitude=-75.916809, top-left-latitude=45.886964, bottom-right-longitude=-75.516809,bottom-right-latitude=45.26964"></map-meta>\n   <map-meta name="projection" content="OSMTILE"></map-meta>\n   <map-meta name="cs" content="gcrs"></map-meta>\n   <map-feature>\n      <map-featurecaption>G\xe9om\xe9trie du point</map-featurecaption>\n      <map-geometry>\n         <map-point>\n            <map-coordinates>-75.6916809 45.4186964</map-coordinates>\n         </map-point>\n      </map-geometry>\n      <map-properties>\n         <table>\n            <thead>\n               <tr>\n                  <th role="columnheader" scope="col">Property name</th>\n                  <th role="columnheader" scope="col">Property value</th>\n               </tr>\n            </thead>\n            <tbody>\n               <tr>\n                  <th scope="row">prop0</th>\n                  <td itemprop="prop0">This is a Point</td>\n               </tr>\n            </tbody>\n         </table>\n      </map-properties>\n   </map-feature>\n</layer->\n'))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"mapml-\xe0-geojson"},"MapML \xe0 GeoJSON"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Fonction"),(0,r.kt)("th",{parentName:"tr",align:null},"Retours"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"mapml2geojson(<HTMLLayerElement",">","\xa0","element,","\xa0","<Object",">","\xa0","options)")),(0,r.kt)("td",{parentName:"tr",align:null},"Objet de collection de caract\xe9ristiques JavaScript (GeoJSON)"),(0,r.kt)("td",{parentName:"tr",align:null},"Cette fonction transforme l\u2019\xe9l\xe9ment- enfant ",(0,r.kt)("inlineCode",{parentName:"td"},"<feature>")," d\u2019un \xe9l\xe9ment ",(0,r.kt)("inlineCode",{parentName:"td"},"<layer->")," en un objet GeoJSON FeatureCollection. Vous fournissez les ",(0,r.kt)("a",{parentName:"td",href:"#options-1"},"options")," pour contr\xf4ler la transformation. Cette fonction doit servir dans un \xe9v\xe9nement windows.onload.")))),(0,r.kt)("p",null,":::Mise en garde"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"mapml2geojson")," doit \xeatre appel\xe9 dans un \xe9v\xe9nement windows.onload pour fonctionner correctement, comme suit :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"window.onload = (event) => {\n  mapml2geojson(json);\n};\n")),(0,r.kt)("p",null,":::"),(0,r.kt)("h3",{id:"param\xe8tres-1"},"Param\xe8tres"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param\xe8tre"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\xc9l\xe9ment <HTMLLayerElement",">"),(0,r.kt)("td",{parentName:"tr",align:null},"\xc9l\xe9ment ",(0,r.kt)("inlineCode",{parentName:"td"},"<layer->"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"<Object",">","\xa0","options"),(0,r.kt)("td",{parentName:"tr",align:null},"Vous fournissez des param\xe8tres au moyen d\u2019un objet d\u2019options avec des  ",(0,r.kt)("a",{parentName:"td",href:"#options-1"},"noms d\u2019option pr\xe9d\xe9finis"),".")))),(0,r.kt)("h3",{id:"options-1"},"Options"),(0,r.kt)("p",null,"<Object",">"," Ensemble de paires de cl\xe9s ou de valeurs qui personnalise l\u2019objet de sortie GeoJSON. Toutes les options sont facultatives et d\xe9crites ci-apr\xe8s."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Option"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"D\xe9faut"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"propertyFunction")),(0,r.kt)("td",{parentName:"tr",align:null},"<Function",">"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"n/a")),(0,r.kt)("td",{parentName:"tr",align:null},"Fonction que vous fournissez et qui mappe l\u2019\xe9l\xe9ment ",(0,r.kt)("inlineCode",{parentName:"td"},"<map-properties>")," de la caract\xe9ristique \xe0 un ",(0,r.kt)("a",{parentName:"td",href:"https://datatracker.ietf.org/doc/html/rfc7946#section-3.2"},'membre GeoJSON "properties"'),", puisque qu\u2019il n\u2019y a que vous qui conna\xeet la conception du balisage dans votre valeur ",(0,r.kt)("inlineCode",{parentName:"td"},"<map-properties>"),". Si vous ne fournissez pas cette option, une fonction par d\xe9faut essaiera de renverser un \xe9l\xe9ment-enfant ",(0,r.kt)("inlineCode",{parentName:"td"},"<table>")," de ",(0,r.kt)("inlineCode",{parentName:"td"},"<map-properties>"),", comme si ce tableau \xe9tait g\xe9n\xe9r\xe9 par la ",(0,r.kt)("a",{parentName:"td",href:"#option-properties"},"fonction d\u2019option de propri\xe9t\xe9s par d\xe9faut de geojson2mapml"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"transform")),(0,r.kt)("td",{parentName:"tr",align:null},"<Boolean",">"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:null},"Transforme des valeurs ",(0,r.kt)("inlineCode",{parentName:"td"},"<map-coordinates>")," en valeurs ",(0,r.kt)("inlineCode",{parentName:"td"},"gcrs")," (longitude, latitude), si elles ne le sont pas d\xe9j\xe0. GeoJSON ",(0,r.kt)("a",{parentName:"td",href:"https://www.rfc-editor.org/rfc/rfc7946.html#section-4"},"recommande")," d\u2019utiliser les coordonn\xe9es de longitude et de latitude WGS 84, il s\u2019agit donc l\xe0 du comportement par d\xe9faut.")))),(0,r.kt)("h6",{id:"remarques"},"Remarques"),(0,r.kt)("p",null,"Au besoin, ",(0,r.kt)("inlineCode",{parentName:"p"},"mapml2geojson")," transforme des coordonn\xe9es en ",(0,r.kt)("inlineCode",{parentName:"p"},"gcrs")," par d\xe9faut avant la s\xe9rialisation. Prenez note que toutes les projections g\xe9ographiques CRS (syst\xe8me de r\xe9f\xe9rence des coordonn\xe9es) ne sont pas \xe9quivalentes, et que l\u2019interpr\xe9tation de telles coordonn\xe9es n\u2019est pas garantie conforme aux coordonn\xe9es WGS 84 ou GPS, et que, par cons\xe9quent, elles ne suivent pas n\xe9cessairement la ",(0,r.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/rfc7946#section-4"},"recommandation GeoJSON"),", qui requiert des coordonn\xe9es de longitude et de latitude cod\xe9es conform\xe9ment au syst\xe8me g\xe9od\xe9sique WGS 84. Le moteur de projection utilis\xe9 pour mettre en \u0153uvre cette conversion est incapable de transformer des coordonn\xe9es d\u2019un ellipso\xefde \xe0 un autre. Par cons\xe9quent, le JSON r\xe9sultant DOIT (d\u2019une mani\xe8re qui reste \xe0 d\xe9terminer) \xeatre \xe9tiquet\xe9 avec la donn\xe9e qu\u2019utilise la projection de la couche."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"exemples-1"},"Exemples"),(0,r.kt)("h4",{id:"options-par-d\xe9faut-1"},"Options par d\xe9faut"),(0,r.kt)("p",null,"Exemple montrant la sortie GeoJSON par d\xe9faut lorsqu\u2019aucune option n\u2019est fournie. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<layer- label="G\xe9ometrie du point" checked="">\n   <map-meta name="extent" content="top-left-longitude=-75.916809, top-left-latitude=45.886964, bottom-right-longitude=-75.516809,bottom-right-latitude=45.26964"></map-meta>\n   <map-meta name="projection" content="OSMTILE"></map-meta>\n   <map-meta name="cs" content="gcrs"></map-meta>\n   <map-feature>\n      <map-featurecaption>G\xe9ometrie du point</map-featurecaption>\n      <map-geometry>\n         <map-point>\n            <map-coordinates>-75.6916809 45.4186964</map-coordinates>\n         </map-point>\n      </map-geometry>\n      <map-properties>\n         <table>\n            <thead>\n               <tr>\n                  <th role="columnheader" scope="col">Nom de la propri\xe9t\xe9 </th>\n                  <th role="columnheader" scope="col">Nom de la propri\xe9t\xe9</th>\n               </tr>\n            </thead>\n            <tbody>\n               <tr>\n                  <th scope="row">prop0</th>\n                  <td itemprop="prop0">Ceci est un point</td>\n               </tr>\n            </tbody>\n         </table>\n      </map-properties>\n   </map-feature>\n</layer->\n<script>\nwindow.onload = (event) => {\n   let output = mapml2geojson(document.querySelector(\'layer-\'))\n};\n<\/script>\n')),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Cliquez pour afficher la sortie GeoJSON"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'{\n "title": "G\xe9om\xe9trie du point",\n "bbox": [-75.916809, 45.886964, -75.516809, 45.26964],\n "type": "FeatureCollection",\n "features": [{\n     "type": "Feature",\n     "geometry": {\n         "type": "Point",\n         "coordinates": [-75.6916809, 45.4186964]\n     },\n     "properties": {\n         "prop0": "Ceci est un point"\n     }\n }]\n}\n'))))}c.isMDXComponent=!0}}]);