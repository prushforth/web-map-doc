"use strict";(self.webpackChunkmapml_viewer_doc=self.webpackChunkmapml_viewer_doc||[]).push([[691],{1466:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>l,metadata:()=>r,toc:()=>d});var i=n(4848),s=n(8453);const l={id:"extent",title:"<map-extent>",slug:"/elements/extent/"},a=void 0,r={id:"elements/extent",title:"<map-extent>",description:"L\u2019\xe9l\xe9ment ` est un contr\xf4le hypertexte associ\xe9 au rectangle de la fen\xeatre d\u2019affichage de la carte, rectangle qu\u2019il repr\xe9sente aux yeux de l\u2019utilisateur. Les auteurs de cartes l\u2019utilisent pour r\xe9diger des requ\xeates destin\xe9es aux serveurs dans le but d\u2019obtenir le contenu d\u2019une couche. Les requ\xeates sont cr\xe9\xe9es au moyen de mod\xe8les d\u2019adresse URL que traite le navigateur alors que la carte bouge et a besoin d\u2019un nouveau contenu \xe0 afficher. Les mod\xe8les d\u2019adresse URL contiennent chacun une ou plusieurs r\xe9f\xe9rences de variable, chacune \xe9tant indiqu\xe9e par le nom de la variable entre accolades {}`.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/elements/extent.md",sourceDirName:"elements",slug:"/elements/extent/",permalink:"/web-map-doc/fr/docs/elements/extent/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"extent",title:"<map-extent>",slug:"/elements/extent/"},sidebar:"sidebar",previous:{title:"<mapml->",permalink:"/web-map-doc/fr/docs/elements/mapml/"},next:{title:"<map-input>",permalink:"/web-map-doc/fr/docs/elements/input/"}},c={},d=[{value:"Attributes",id:"attributes",level:2},{value:"<code>units</code>",id:"units",level:3},{value:"<code>label</code>",id:"label",level:3},{value:"<code>checked</code>",id:"checked",level:3},{value:"<code>hidden</code>",id:"hidden",level:3},{value:"<code>opacity</code>",id:"opacity",level:3},{value:"Exemples",id:"exemples",level:2},{value:"\xc9tendues multiples",id:"\xe9tendues-multiples",level:3},{value:"WMS Request",id:"wms-request",level:3},{value:"Sp\xe9cifications",id:"sp\xe9cifications",level:2},{value:"Exigences",id:"exigences",level:2}];function o(e){const t={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["L\u2019\xe9l\xe9ment ",(0,i.jsx)(t.code,{children:"<map-extent>"})," est un contr\xf4le hypertexte associ\xe9 au rectangle de la fen\xeatre d\u2019affichage de la carte, rectangle qu\u2019il repr\xe9sente aux yeux de l\u2019utilisateur. Les auteurs de cartes l\u2019utilisent pour r\xe9diger des requ\xeates destin\xe9es aux serveurs dans le but d\u2019obtenir le contenu d\u2019une couche. Les requ\xeates sont cr\xe9\xe9es au moyen de mod\xe8les d\u2019adresse URL que traite le navigateur alors que la carte bouge et a besoin d\u2019un nouveau contenu \xe0 afficher. Les mod\xe8les d\u2019adresse URL contiennent chacun une ou plusieurs r\xe9f\xe9rences de variable, chacune \xe9tant indiqu\xe9e par le nom de la variable entre accolades ",(0,i.jsx)(t.code,{children:"{}"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["Les variables sont cr\xe9\xe9es par l\u2019auteur de la carte au moyen de l\u2019\xe9l\xe9ment ",(0,i.jsx)(t.code,{children:"<map-input>"}),". Il dispose de plusieurs types d\u2019\xe9l\xe9ments ",(0,i.jsx)(t.code,{children:"<map-input>"}),", ce qui lui permet de r\xe9f\xe9rencer les coins, la largeur, la hauteur et le niveau de zoom de l\u2019\xe9tendue."]}),"\n",(0,i.jsxs)(t.p,{children:["Exemple d\u2019un \xe9l\xe9ment ",(0,i.jsx)(t.code,{children:"<map-extent>"})," servant \xe0 charger des pav\xe9s d\u2019images avec un seul mod\xe8le d\u2019adresse URL."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-html",children:'<mapml-viewer projection="OSMTILE" lat="10" lon="0" zoom="1">\n  <layer- label="OpenStreetMap" checked>\n    <map-extent units="OSMTILE" checked hidden>\n      <map-input name="z" type="zoom" value="18" min="0" max="18"></map-input>\n      <map-input name="x" type="location" units="tilematrix" axis="column" min="0" max="262144"></map-input>\n      <map-input name="y" type="location" units="tilematrix" axis="row" min="0" max="262144"></map-input>\n      <map-link rel="tile" tref="https://tile.openstreetmap.org/{z}/{x}/{y}.png"></map-link>\n    </map-extent>\n  </layer->\n</mapml-viewer>\n'})}),"\n",(0,i.jsx)("iframe",{src:"../../../demo/extent-demo/",title:"MapML Demo",height:"410",width:"100%",scrolling:"no",frameBorder:"0"}),"\n",(0,i.jsx)(t.h2,{id:"attributes",children:"Attributes"}),"\n",(0,i.jsx)(t.h3,{id:"units",children:(0,i.jsx)(t.code,{children:"units"})}),"\n",(0,i.jsxs)(t.p,{children:["Sp\xe9cifie la projection des tuiles et autres contenus attendus du serveur.  Si la\nvaleur de ",(0,i.jsx)(t.code,{children:"units"})," est une correspondance insensible \xe0 la casse de l'attribut\n",(0,i.jsx)(t.code,{children:"projection"})," de ",(0,i.jsx)(t.code,{children:"<mapml-viewer>"}),", l'\xe9tendue sera d\xe9sactiv\xe9e dans le contr\xf4le de\ncouche, et ne sera pas affich\xe9e sur la carte, ni le contenu r\xe9cup\xe9r\xe9 du serveur."]}),"\n",(0,i.jsxs)(t.p,{children:["Les valeurs d\u2019",(0,i.jsx)(t.code,{children:"units"})," d\xe9finies comprennent :"]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Projection"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"OSMTILE"}),(0,i.jsx)(t.td,{children:"Web Mercator, avec des pav\xe9s de 256 pixels par 256 pixels, d\xe9finis de fa\xe7on r\xe9cursive et d\xe9limit\xe9s dans un carr\xe9 \xe0 un niveau de zoom = 0"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"WGS84"}),(0,i.jsx)(t.td,{children:"Pseudo-plate carr\xe9e, avec des pav\xe9s de 256 pixels par 256 pixels. Un niveau de zoom \xe9gal \xe0 0 contient deux pav\xe9s dans deux colonnes, avec vcmme origine -180,90. Les valeurs fictives d\u2019abscisse et d\u2019ordonn\xe9e (pcrs) \xe0 l\u2019int\xe9rieur des limites de la projection correspondent respectivement \xe0 la longitude et \xe0 la latitude."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"CBMTILE"}),(0,i.jsx)(t.td,{children:"Conique conforme de Lambert, avec des pav\xe9s de 256 pixels par 256 pixels. Les niveaux de zoom \xe9tant choisis par le d\xe9nominateur d\u2019\xe9chelle, les pav\xe9s ne sont pas imbriqu\xe9s."})]})]})]}),"\n",(0,i.jsxs)(t.p,{children:["L\u2019auteur peut d\xe9finir la valeur d\u2019",(0,i.jsx)(t.code,{children:"units"})," \xe0 l\u2019aide de l\u2019",(0,i.jsx)(t.a,{href:"../../api/mapml-viewer-api/#definecustomprojectionoptions",children:"Custom projections API"})]}),"\n",(0,i.jsxs)(t.p,{children:["L'attribut ",(0,i.jsx)(t.code,{children:"units"})," est obligatoire et ne peut \xeatre modifi\xe9."]}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h3,{id:"label",children:(0,i.jsx)(t.code,{children:"label"})}),"\n",(0,i.jsxs)(t.p,{children:["Sp\xe9cifie un label pour une \xe9tendue qui est affich\xe9e dans le contr\xf4le de couche.\nSi aucune valeur ",(0,i.jsx)(t.code,{children:"label"})," n'est fournie, la valeur ",(0,i.jsx)(t.code,{children:"label"})," prend par d\xe9faut la\nvaleur 'Sous-couche' dans le contr\xf4le de couche."]}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h3,{id:"checked",children:(0,i.jsx)(t.code,{children:"checked"})}),"\n",(0,i.jsxs)(t.p,{children:["L'attribut et la propri\xe9t\xe9 ",(0,i.jsx)(t.code,{children:"checked"})," sont des bool\xe9ens. Lorsqu'il est pr\xe9sent, la valeur de la propri\xe9t\xe9 ",(0,i.jsx)(t.code,{children:"checked"}),' est "true" ; lorsqu\'il n\'est pas pr\xe9sent, la valeur de la propri\xe9t\xe9 est "false". Le contenu du ',(0,i.jsx)(t.code,{children:"map-extent"})," sera r\xe9cup\xe9r\xe9 et rendu en fonction de l'\xe9tat ",(0,i.jsx)(t.code,{children:"checked"}),". Attention, c'est la ",(0,i.jsx)(t.em,{children:"pr\xe9sence"})," de l'attribut qui fait qu'il est vrai, et non la valeur de l'attribut. Par exemple, l'attribut ",(0,i.jsx)(t.code,{children:'checked="false"'})," s'av\xe8re en fait \xeatre check\xe9, ",(0,i.jsx)(t.a,{href:"https://developer.mozilla.org/fr/docs/Web/HTML/Attributes#attributs_bool%C3%A9ens",children:"comme d\xe9crit par les docs Web du MDN"}),"."]}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h3,{id:"hidden",children:(0,i.jsx)(t.code,{children:"hidden"})}),"\n",(0,i.jsxs)(t.p,{children:["L'attribut et la propri\xe9t\xe9 ",(0,i.jsx)(t.code,{children:"hidden"})," est un bool\xe9en. Lorsqu'il est pr\xe9sent,\nl'\xe9tendue est cach\xe9e (non pr\xe9sente) dans le contr\xf4le de couche.  Ind\xe9pendamment\nde l'\xe9tat ",(0,i.jsx)(t.code,{children:"hidden"}),", la couche est rendue ou non en fonction de l'\xe9tat de\nl'attribut ",(0,i.jsx)(t.code,{children:"checked"}),"."]}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h3,{id:"opacity",children:(0,i.jsx)(t.code,{children:"opacity"})}),"\n",(0,i.jsxs)(t.p,{children:["L'attribut ",(0,i.jsx)(t.code,{children:"opacity"})," est utilis\xe9 pour d\xe9finir l'opacit\xe9 initiale de l'\xe9l\xe9ment ",(0,i.jsx)(t.code,{children:"<map-extent>"}),'.\nLes valeurs d\'opacit\xe9 valides vont de "0.0" \xe0 "1.0" avec strictement une d\xe9cimale et sont refl\xe9t\xe9es dans les param\xe8tres d\'\xe9tendue.\nopacity input slider control. Lorsque l\'attribut ',(0,i.jsx)(t.code,{children:"opacity"})," n'est pas pr\xe9sent, l'opacit\xe9 est fix\xe9e \xe0 \"1.0\" par d\xe9faut."]}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h2,{id:"exemples",children:"Exemples"}),"\n",(0,i.jsx)(t.h3,{id:"\xe9tendues-multiples",children:"\xc9tendues multiples"}),"\n",(0,i.jsxs)(t.p,{children:["L\u2019exemple ci-dessous montre plusieurs \xe9l\xe9ments ",(0,i.jsx)(t.code,{children:"<map-extent>"})," dans un couche. Chacun d\u2019eux peut \xeatre s\xe9lectionn\xe9 en cliquant sur les points de suspension (\u2026) du menu de la couche de la carte de base."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-html",children:'<mapml-viewer projection="OSMTILE" zoom="2" lat="53.331" lon="-91.667" controls>\n  <!\u2014Modifier la carte de base en cliquant sur les points de suspension (\u2026) de la couche de la carte de base --\x3e\n  <layer- label="Carte de base" checked="">\n    <!\u2014Cette \xe9tendue est masqu\xe9e au niveau du contr\xf4le de la couche, puisqu\u2019aucune \xe9tiquette n\u2019est fournie --\x3e\n    <map-extent units="OSMTILE" checked>\n      <map-input name="TileMatrix" type="zoom" value="18" min="0" max="18"></map-input>\n      <map-input name="TileCol" type="location" units="tilematrix" axis="column" min="0" max="262144"></map-input>\n      <map-input name="TileRow" type="location" units="tilematrix" axis="row" min="0" max="262144"></map-input>\n      <map-link rel="tile" tref="https://server.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/WMTS/tile/1.0.0/World_Imagery/default/default028mm/{TileMatrix}/{TileRow}/{TileCol}.jpg"></map-link>\n    </map-extent>\n      <map-extent label="Nat Geo" units="OSMTILE" checked>\n      <map-input name="TileMatrix" type="zoom" value="18" min="0" max="18"></map-input>\n      <map-input name="TileCol" type="location" units="tilematrix" axis="column" min="0" max="262144"></map-input>\n      <map-input name="TileRow" type="location" units="tilematrix" axis="row" min="0" max="262144"></map-input>\n      <map-link rel="tile" tref="https://server.arcgisonline.com/arcgis/rest/services/NatGeo_World_Map/MapServer/WMTS/tile/1.0.0/NatGeo_World_Map/default/default028mm/{TileMatrix}/{TileRow}/{TileCol}.jpg"></map-link>\n    </map-extent>\n    <map-extent label="Imagery" units="OSMTILE" checked>\n      <map-input name="TileMatrix" type="zoom" value="18" min="0" max="18"></map-input>\n      <map-input name="TileCol" type="location" units="tilematrix" axis="column" min="0" max="262144"></map-input>\n      <map-input name="TileRow" type="location" units="tilematrix" axis="row" min="0" max="262144"></map-input>\n      <map-link rel="tile" tref="https://server.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/WMTS/tile/1.0.0/World_Imagery/default/default028mm/{TileMatrix}/{TileRow}/{TileCol}.jpg"></map-link>\n      <map-link rel="tile" tref="https://services.arcgisonline.com/arcgis/rest/services/Reference/World_Boundaries_and_Places/MapServer/WMTS/tile/1.0.0/Reference_World_Boundaries_and_Places/default/default028mm/{TileMatrix}/{TileRow}/{TileCol}.png"></map-link>\n    </map-extent>\n  </layer->\n</mapml-viewer>\n'})}),"\n",(0,i.jsx)(t.h3,{id:"wms-request",children:"WMS Request"}),"\n",(0,i.jsxs)(t.p,{children:["L\u2019exemple ci-dessous montre une demande de service de carte en ligne utilisant l\u2019\xe9l\xe9ment ",(0,i.jsx)(t.code,{children:"<map-link>"})," pour demander des images de la carte."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-html",children:'<mapml-viewer projection="OSMTILE" zoom="4" lat="53.331" lon="-91.667" controls>\n  <layer- label="Toporama" checked="">\n    <map-extent xmlns="http://www.w3.org/1999/xhtml" units="OSMTILE" checked>\n      <!\u2014Param\xe8tres URL de la demande de service de carte en ligne --\x3e\n      <map-input name="z" type="zoom" value="18" min="4" max="18"></map-input>\n      <map-input name="w" type="width"></map-input>\n      <map-input name="h" type="height"></map-input>\n      <map-input name="xmin" type="location" units="pcrs" position="top-left" axis="easting" min="-2.003750834E7" max="2.003750834E7"></map-input>\n      <map-input name="ymin" type="location" units="pcrs" position="bottom-left" axis="northing" min="-2.003750834E7" max="2.003750834E7"></map-input>\n      <map-input name="xmax" type="location" units="pcrs" position="top-right" axis="easting" min="-2.003750834E7" max="2.003750834E7"></map-input>\n      <map-input name="ymax" type="location" units="pcrs" position="top-left" axis="northing" min="-2.003750834E7" max="2.003750834E7"></map-input>\n      \x3c!-- Web Map Service requesting image --\x3e\n      <map-link rel="image" tref="http://wms.ess-ws.nrcan.gc.ca/wms/toporama_en?SERVICE=WMS&amp;REQUEST=GetMap&amp;FORMAT=image/jpeg&amp;TRANSPARENT=FALSE&amp;STYLES=&amp;VERSION=1.3.0&amp;LAYERS=WMS-Toporama&amp;WIDTH={w}&amp;HEIGHT={h}&amp;CRS=EPSG:3857&amp;BBOX={xmin},{ymin},{xmax},{ymax}&amp;m4h=t"></map-link>\n    </map-extent>\n  </layer->\n</mapml-viewer>\n'})}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h2,{id:"sp\xe9cifications",children:"Sp\xe9cifications"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsx)(t.tr,{children:(0,i.jsx)(t.th,{children:"Sp\xe9cification"})})}),(0,i.jsx)(t.tbody,{children:(0,i.jsx)(t.tr,{children:(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"https://maps4html.org/MapML-Specification/spec/#the-extent-element-0",children:"\xc9l\xe9ment extent de MapML"})})})})]}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h2,{id:"exigences",children:"Exigences"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://github.com/Maps4HTML/HTML-Map-Element-UseCases-Requirements/issues/new?title=-SUMMARIZE+THE+PROBLEM-&body=-DESCRIBE+THE+PROBLEM-",children:"Signalez tout probl\xe8me avec ces exigences sur GitHub"})}),"\n",(0,i.jsx)("p",{children:(0,i.jsxs)("b",{children:[(0,i.jsx)("span",{class:"requirement",children:"exigence"}),"\n",(0,i.jsx)("span",{class:"enhancement",children:"am\xe9lioration"}),"\n",(0,i.jsx)("span",{class:"impractical",children:"inefficace"}),"\n",(0,i.jsx)("span",{class:"undecided",children:"incertain"}),"\n",(0,i.jsx)("span",{class:"discussion",children:"en discussion"})]})}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"left"}}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Sp\xe9c"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Visionneuse"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"API"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.a,{href:"https://maps4html.org/HTML-Map-Element-UseCases-Requirements/#map-viewers-capabilities-rendering",children:(0,i.jsx)(t.strong,{children:"Rendu des couches de base (5.1)"})})}),(0,i.jsx)(t.td,{style:{textAlign:"center"}}),(0,i.jsx)(t.td,{style:{textAlign:"center"}}),(0,i.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)("div",{class:"requirement",children:"Afficher une carte avec les donn\xe9es de pav\xe9s obtenues du service de carte en ligne pr\xe9cis\xe9 par l\u2019auteur (5.1.4)"})}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"full"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"full"}),(0,i.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.a,{href:"https://maps4html.org/HTML-Map-Element-UseCases-Requirements/#map-viewers-capabilities-user-navigation",children:(0,i.jsx)(t.strong,{children:"Navigation de l\u2019utilisateur (panoramique et zoom) (5.4)"})})}),(0,i.jsx)(t.td,{style:{textAlign:"center"}}),(0,i.jsx)(t.td,{style:{textAlign:"center"}}),(0,i.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)("div",{class:"undecided",children:"Charger d\u2019autres pav\xe9s de carte pour que le mouvement panoramique les affiche (5.4.3)"})}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"full"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"full"}),(0,i.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)("div",{class:"discussion",children:"Charger dynamiquement des pav\xe9s de carte \xe0 diff\xe9rentes r\xe9solutions lorsqu\u2019on effectue un zoom (5.4.6)"})}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"full"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"full"}),(0,i.jsx)(t.td,{style:{textAlign:"center"}})]})]})]}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsxs)(t.a,{href:"https://github.com/Maps4HTML/web-map-doc/edit/main/i18n/fr/docusaurus-plugin-content-docs/current/elements/extent.md",children:["Modifiez le contenu de cette page sur ",(0,i.jsx)(t.strong,{children:"Github"})]})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsxs)(t.a,{href:"https://gitter.im/Maps4HTML/chat",children:["Clavardez avec nous sur ",(0,i.jsx)(t.strong,{children:"Gitter"})]})}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>r});var i=n(6540);const s={},l=i.createContext(s);function a(e){const t=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(l.Provider,{value:t},e.children)}}}]);