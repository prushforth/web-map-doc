"use strict";(self.webpackChunkmapml_viewer_doc=self.webpackChunkmapml_viewer_doc||[]).push([[3054],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),m=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=m(e.components);return a.createElement(s.Provider,{value:t},e.children)},o={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=m(n),d=r,k=c["".concat(s,".").concat(d)]||c[d]||o[d]||l;return n?a.createElement(k,i(i({ref:t},u),{},{components:n})):a.createElement(k,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var m=2;m<l;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9313:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>o,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var a=n(7462),r=(n(7294),n(3905));const l={id:"extent",title:"<map-extent>",slug:"/elements/extent/"},i=void 0,p={unversionedId:"elements/extent",id:"elements/extent",title:"<map-extent>",description:"L\u2019\xe9l\xe9ment ` est un contr\xf4le hypertexte associ\xe9 au rectangle de la fen\xeatre d\u2019affichage de la carte, rectangle qu\u2019il repr\xe9sente aux yeux de l\u2019utilisateur. Les auteurs de cartes l\u2019utilisent pour r\xe9diger des requ\xeates destin\xe9es aux serveurs dans le but d\u2019obtenir le contenu d\u2019une couche. Les requ\xeates sont cr\xe9\xe9es au moyen de mod\xe8les d\u2019adresse URL que traite le navigateur alors que la carte bouge et a besoin d\u2019un nouveau contenu \xe0 afficher. Les mod\xe8les d\u2019adresse URL contiennent chacun une ou plusieurs r\xe9f\xe9rences de variable, chacune \xe9tant indiqu\xe9e par le nom de la variable entre accolades {}`.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/elements/extent.md",sourceDirName:"elements",slug:"/elements/extent/",permalink:"/web-map-doc/fr/docs/elements/extent/",draft:!1,tags:[],version:"current",frontMatter:{id:"extent",title:"<map-extent>",slug:"/elements/extent/"},sidebar:"sidebar",previous:{title:"<mapml->",permalink:"/web-map-doc/fr/docs/elements/mapml/"},next:{title:"<map-input>",permalink:"/web-map-doc/fr/docs/elements/input/"}},s={},m=[{value:"Attributes",id:"attributes",level:2},{value:"<code>units</code>",id:"units",level:3},{value:"<code>label</code>",id:"label",level:3},{value:"\xc9v\xe9nements",id:"\xe9v\xe9nements",level:2},{value:"Exemples",id:"exemples",level:2},{value:"\xc9tendues multiples",id:"\xe9tendues-multiples",level:3},{value:"WMS Request",id:"wms-request",level:3},{value:"Sp\xe9cifications",id:"sp\xe9cifications",level:2},{value:"Exigences",id:"exigences",level:2}],u={toc:m};function o(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"L\u2019\xe9l\xe9ment ",(0,r.kt)("inlineCode",{parentName:"p"},"<map-extent>")," est un contr\xf4le hypertexte associ\xe9 au rectangle de la fen\xeatre d\u2019affichage de la carte, rectangle qu\u2019il repr\xe9sente aux yeux de l\u2019utilisateur. Les auteurs de cartes l\u2019utilisent pour r\xe9diger des requ\xeates destin\xe9es aux serveurs dans le but d\u2019obtenir le contenu d\u2019une couche. Les requ\xeates sont cr\xe9\xe9es au moyen de mod\xe8les d\u2019adresse URL que traite le navigateur alors que la carte bouge et a besoin d\u2019un nouveau contenu \xe0 afficher. Les mod\xe8les d\u2019adresse URL contiennent chacun une ou plusieurs r\xe9f\xe9rences de variable, chacune \xe9tant indiqu\xe9e par le nom de la variable entre accolades ",(0,r.kt)("inlineCode",{parentName:"p"},"{}"),"."),(0,r.kt)("p",null,"Les variables sont cr\xe9\xe9es par l\u2019auteur de la carte au moyen de l\u2019\xe9l\xe9ment ",(0,r.kt)("inlineCode",{parentName:"p"},"<map-input>"),". Il dispose de plusieurs types d\u2019\xe9l\xe9ments ",(0,r.kt)("inlineCode",{parentName:"p"},"<map-input>"),", ce qui lui permet de r\xe9f\xe9rencer les coins, la largeur, la hauteur et le niveau de zoom de l\u2019\xe9tendue."),(0,r.kt)("p",null,"Exemple d\u2019un \xe9l\xe9ment ",(0,r.kt)("inlineCode",{parentName:"p"},"<map-extent>")," servant \xe0 charger des pav\xe9s d\u2019images avec un seul mod\xe8le d\u2019adresse URL."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<mapml-viewer projection="OSMTILE" lat="10" lon="0" zoom="1">\n  <layer- label="OpenStreetMap" checked>\n    <map-extent units="OSMTILE">\n      <map-input name="z" type="zoom" value="18" min="0" max="18"></map-input>\n      <map-input name="x" type="location" units="tilematrix" axis="column" min="0" max="262144"></map-input>\n      <map-input name="y" type="location" units="tilematrix" axis="row" min="0" max="262144"></map-input>\n      <map-link rel="tile" tref="https://tile.openstreetmap.org/{z}/{x}/{y}.png"></map-link>\n    </map-extent>\n  </layer->\n</mapml-viewer>\n')),(0,r.kt)("iframe",{src:"../../../demo/extent-demo/",title:"MapML Demo",height:"410",width:"100%",scrolling:"no",frameBorder:"0"}),(0,r.kt)("h2",{id:"attributes"},"Attributes"),(0,r.kt)("h3",{id:"units"},(0,r.kt)("inlineCode",{parentName:"h3"},"units")),(0,r.kt)("p",null,"Pr\xe9cise la projection des pav\xe9s et tout autre contenu que le serveur doit fournir. Si la valeur de la projection ne correspond pas lettre pour lettre en majuscules et minuscules \xe0 celle de l\u2019attribut ",(0,r.kt)("inlineCode",{parentName:"p"},"projection")," de l\u2019\xe9l\xe9ment ",(0,r.kt)("inlineCode",{parentName:"p"},"<mapml-viewer>"),", la couche est d\xe9sactiv\xe9e au niveau de son contr\xf4le et ne s\u2019affiche pas sur la carte, et le contenu n\u2019est pas r\xe9cup\xe9r\xe9 dans le serveur."),(0,r.kt)("p",null,"Les valeurs d\u2019",(0,r.kt)("inlineCode",{parentName:"p"},"units")," d\xe9finies comprennent :"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Projection"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"OSMTILE"),(0,r.kt)("td",{parentName:"tr",align:null},"Web Mercator, avec des pav\xe9s de 256 pixels par 256 pixels, d\xe9finis de fa\xe7on r\xe9cursive et d\xe9limit\xe9s dans un carr\xe9 \xe0 un niveau de zoom = 0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"WGS84"),(0,r.kt)("td",{parentName:"tr",align:null},"Pseudo-plate carr\xe9e, avec des pav\xe9s de 256 pixels par 256 pixels. Un niveau de zoom \xe9gal \xe0 0 contient deux pav\xe9s dans deux colonnes, avec vcmme origine -180,90. Les valeurs fictives d\u2019abscisse et d\u2019ordonn\xe9e (pcrs) \xe0 l\u2019int\xe9rieur des limites de la projection correspondent respectivement \xe0 la longitude et \xe0 la latitude.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CBMTILE"),(0,r.kt)("td",{parentName:"tr",align:null},"Conique conforme de Lambert, avec des pav\xe9s de 256 pixels par 256 pixels. Les niveaux de zoom \xe9tant choisis par le d\xe9nominateur d\u2019\xe9chelle, les pav\xe9s ne sont pas imbriqu\xe9s.")))),(0,r.kt)("p",null,"L\u2019auteur peut d\xe9finir la valeur d\u2019",(0,r.kt)("inlineCode",{parentName:"p"},"units")," \xe0 l\u2019aide de l\u2019",(0,r.kt)("a",{parentName:"p",href:"../../api/custom-projections/"},"Custom projections API")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"label"},(0,r.kt)("inlineCode",{parentName:"h3"},"label")),(0,r.kt)("p",null,"Pr\xe9cise l\u2019\xe9tiquette d\u2019une \xe9tendue affich\xe9e au niveau du contr\xf4le de la couche. Si aucune ",(0,r.kt)("inlineCode",{parentName:"p"},"label")," n\u2019est fournie, l\u2019\xe9tendue est masqu\xe9e par d\xe9faut au niveau du contr\xf4le de la couche."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"\xe9v\xe9nements"},"\xc9v\xe9nements"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Nom de l\u2019\xe9v\xe9nement"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"extentload"),(0,r.kt)("td",{parentName:"tr",align:null},"D\xe9clench\xe9 lorsque l\u2019\xe9tendue d\u2019une couche est charg\xe9e et analys\xe9e. L\u2019intention est que cet \xe9v\xe9nement soit analogue \xe0 l\u2019\xe9v\xe9nement ",(0,r.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/loadedmetadata_event"},"loadedmetadata de l\u2019\xe9l\xe9ment m\xe9dia"),", mais avec les couches d\u2019une carte.")))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"exemples"},"Exemples"),(0,r.kt)("h3",{id:"\xe9tendues-multiples"},"\xc9tendues multiples"),(0,r.kt)("p",null,"L\u2019exemple ci-dessous montre plusieurs \xe9l\xe9ments ",(0,r.kt)("inlineCode",{parentName:"p"},"<map-extent>")," dans un couche. Chacun d\u2019eux peut \xeatre s\xe9lectionn\xe9 en cliquant sur les points de suspension (\u2026) du menu de la couche de la carte de base."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<mapml-viewer projection="OSMTILE" zoom="2" lat="53.331" lon="-91.667" controls>\n  <!\u2014Modifier la carte de base en cliquant sur les points de suspension (\u2026) de la couche de la carte de base --\x3e\n  <layer- label="Carte de base" checked="">\n    <!\u2014Cette \xe9tendue est masqu\xe9e au niveau du contr\xf4le de la couche, puisqu\u2019aucune \xe9tiquette n\u2019est fournie --\x3e\n    <map-extent units="OSMTILE">\n      <map-input name="TileMatrix" type="zoom" value="18" min="0" max="18"></map-input>\n      <map-input name="TileCol" type="location" units="tilematrix" axis="column" min="0" max="262144"></map-input>\n      <map-input name="TileRow" type="location" units="tilematrix" axis="row" min="0" max="262144"></map-input>\n      <map-link rel="tile" tref="https://server.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/WMTS/tile/1.0.0/World_Imagery/default/default028mm/{TileMatrix}/{TileRow}/{TileCol}.jpg"></map-link>\n    </map-extent>\n      <map-extent label="Nat Geo" units="OSMTILE">\n      <map-input name="TileMatrix" type="zoom" value="18" min="0" max="18"></map-input>\n      <map-input name="TileCol" type="location" units="tilematrix" axis="column" min="0" max="262144"></map-input>\n      <map-input name="TileRow" type="location" units="tilematrix" axis="row" min="0" max="262144"></map-input>\n      <map-link rel="tile" tref="https://server.arcgisonline.com/arcgis/rest/services/NatGeo_World_Map/MapServer/WMTS/tile/1.0.0/NatGeo_World_Map/default/default028mm/{TileMatrix}/{TileRow}/{TileCol}.jpg"></map-link>\n    </map-extent>\n    <map-extent label="Imagery" units="OSMTILE">\n      <map-input name="TileMatrix" type="zoom" value="18" min="0" max="18"></map-input>\n      <map-input name="TileCol" type="location" units="tilematrix" axis="column" min="0" max="262144"></map-input>\n      <map-input name="TileRow" type="location" units="tilematrix" axis="row" min="0" max="262144"></map-input>\n      <map-link rel="tile" tref="https://server.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/WMTS/tile/1.0.0/World_Imagery/default/default028mm/{TileMatrix}/{TileRow}/{TileCol}.jpg"></map-link>\n      <map-link rel="tile" tref="https://services.arcgisonline.com/arcgis/rest/services/Reference/World_Boundaries_and_Places/MapServer/WMTS/tile/1.0.0/Reference_World_Boundaries_and_Places/default/default028mm/{TileMatrix}/{TileRow}/{TileCol}.png"></map-link>\n    </map-extent>\n  </layer->\n</mapml-viewer>\n')),(0,r.kt)("h3",{id:"wms-request"},"WMS Request"),(0,r.kt)("p",null,"L\u2019exemple ci-dessous montre une demande de service de carte en ligne utilisant l\u2019\xe9l\xe9ment ",(0,r.kt)("inlineCode",{parentName:"p"},"<map-link>")," pour demander des images de la carte."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<mapml-viewer projection="OSMTILE" zoom="4" lat="53.331" lon="-91.667" controls>\n  <layer- label="Toporama" checked="">\n    <map-extent xmlns="http://www.w3.org/1999/xhtml" units="OSMTILE">\n      <!\u2014Param\xe8tres URL de la demande de service de carte en ligne --\x3e\n      <map-input name="z" type="zoom" value="18" min="4" max="18"></map-input>\n      <map-input name="w" type="width"></map-input>\n      <map-input name="h" type="height"></map-input>\n      <map-input name="xmin" type="location" units="pcrs" position="top-left" axis="easting" min="-2.003750834E7" max="2.003750834E7"></map-input>\n      <map-input name="ymin" type="location" units="pcrs" position="bottom-left" axis="northing" min="-2.003750834E7" max="2.003750834E7"></map-input>\n      <map-input name="xmax" type="location" units="pcrs" position="top-right" axis="easting" min="-2.003750834E7" max="2.003750834E7"></map-input>\n      <map-input name="ymax" type="location" units="pcrs" position="top-left" axis="northing" min="-2.003750834E7" max="2.003750834E7"></map-input>\n      \x3c!-- Web Map Service requesting image --\x3e\n      <map-link rel="image" tref="http://wms.ess-ws.nrcan.gc.ca/wms/toporama_en?SERVICE=WMS&amp;REQUEST=GetMap&amp;FORMAT=image/jpeg&amp;TRANSPARENT=FALSE&amp;STYLES=&amp;VERSION=1.3.0&amp;LAYERS=WMS-Toporama&amp;WIDTH={w}&amp;HEIGHT={h}&amp;CRS=EPSG:3857&amp;BBOX={xmin},{ymin},{xmax},{ymax}&amp;m4h=t"></map-link>\n    </map-extent>\n  </layer->\n</mapml-viewer>\n')),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"sp\xe9cifications"},"Sp\xe9cifications"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Sp\xe9cification"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://maps4html.org/MapML/spec/#the-extent-element-0"},"\xc9l\xe9ment extent de MapML"))))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"exigences"},"Exigences"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Maps4HTML/HTML-Map-Element-UseCases-Requirements/issues/new?title=-SUMMARIZE+THE+PROBLEM-&body=-DESCRIBE+THE+PROBLEM-"},"Signalez tout probl\xe8me avec ces exigences sur GitHub")),(0,r.kt)("p",null,(0,r.kt)("b",null,(0,r.kt)("span",{class:"requirement"},"exigence"),(0,r.kt)("span",{class:"enhancement"},"am\xe9lioration"),(0,r.kt)("span",{class:"impractical"},"inefficace"),(0,r.kt)("span",{class:"undecided"},"incertain"),(0,r.kt)("span",{class:"discussion"},"en discussion"))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"}),(0,r.kt)("th",{parentName:"tr",align:"center"},"Sp\xe9c"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Visionneuse"),(0,r.kt)("th",{parentName:"tr",align:"center"},"API"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://maps4html.org/HTML-Map-Element-UseCases-Requirements/#map-viewers-capabilities-rendering"},(0,r.kt)("strong",{parentName:"a"},"Rendu des couches de base (5.1)"))),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("div",{class:"requirement"},"Afficher une carte avec les donn\xe9es de pav\xe9s obtenues du service de carte en ligne pr\xe9cis\xe9 par l\u2019auteur (5.1.4)")),(0,r.kt)("td",{parentName:"tr",align:"center"},"full"),(0,r.kt)("td",{parentName:"tr",align:"center"},"full"),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://maps4html.org/HTML-Map-Element-UseCases-Requirements/#map-viewers-capabilities-user-navigation"},(0,r.kt)("strong",{parentName:"a"},"Navigation de l\u2019utilisateur (panoramique et zoom) (5.4)"))),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("div",{class:"undecided"},"Charger d\u2019autres pav\xe9s de carte pour que le mouvement panoramique les affiche (5.4.3)")),(0,r.kt)("td",{parentName:"tr",align:"center"},"full"),(0,r.kt)("td",{parentName:"tr",align:"center"},"full"),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("div",{class:"discussion"},"Charger dynamiquement des pav\xe9s de carte \xe0 diff\xe9rentes r\xe9solutions lorsqu\u2019on effectue un zoom (5.4.6)")),(0,r.kt)("td",{parentName:"tr",align:"center"},"full"),(0,r.kt)("td",{parentName:"tr",align:"center"},"full"),(0,r.kt)("td",{parentName:"tr",align:"center"})))),(0,r.kt)("hr",null),(0,r.kt)("blockquote",null,(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/Maps4HTML/web-map-doc/edit/main/docs/elements/feature.md"},"Modifiez le contenu de cette page sur ",(0,r.kt)("strong",{parentName:"a"},"Github"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://gitter.im/Maps4HTML/chat"},"Clavardez avec nous sur ",(0,r.kt)("strong",{parentName:"a"},"Gitter"))))))}o.isMDXComponent=!0}}]);