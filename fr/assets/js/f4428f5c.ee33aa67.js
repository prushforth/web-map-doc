"use strict";(self.webpackChunkmapml_viewer_doc=self.webpackChunkmapml_viewer_doc||[]).push([[8477],{5311:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>o,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var l=t(4848),s=t(8453);const i={id:"mapml",title:"<mapml->",slug:"/elements/mapml/"},r=void 0,a={id:"elements/mapml",title:"<mapml->",description:"L\u2019\xe9l\xe9ment ` est la racine d\u2019un document MapML (avec une extension de fichier .mapml) et il repr\xe9sente une couche. Un document MapML peut \xeatre extrait comme ressource distante \xe0 partir de l\u2019URL de l\u2019attribut source ` :",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/elements/mapml.md",sourceDirName:"elements",slug:"/elements/mapml/",permalink:"/web-map-doc/fr/docs/elements/mapml/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"mapml",title:"<mapml->",slug:"/elements/mapml/"},sidebar:"sidebar",previous:{title:"<layer->",permalink:"/web-map-doc/fr/docs/layers/layer/"},next:{title:"<map-extent>",permalink:"/web-map-doc/fr/docs/elements/extent/"}},d={},c=[{value:"Attributes",id:"attributes",level:2},{value:"<code>lang</code>",id:"lang",level:3},{value:"<code>xmlns</code>",id:"xmlns",level:3},{value:"\xc9l\xe9ments enfants",id:"\xe9l\xe9ments-enfants",level:2},{value:"<code>&lt;map-head&gt;</code>",id:"map-head",level:3},{value:"\xc9l\xe9ments enfants",id:"\xe9l\xe9ments-enfants-1",level:4},{value:"<code>&lt;map-body&gt;</code>",id:"map-body",level:3},{value:"Sp\xe9cifications",id:"sp\xe9cifications",level:2}];function m(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.p,{children:["L\u2019\xe9l\xe9ment ",(0,l.jsx)(n.code,{children:"<mapml->"})," est la racine d\u2019un document MapML (avec une extension de fichier .mapml) et il repr\xe9sente une couche. Un document MapML peut \xeatre extrait comme ressource distante \xe0 partir de l\u2019URL de l\u2019attribut source ",(0,l.jsx)(n.code,{children:'<layer- src="..."></layer->'})," :"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-html",children:'<layer- label="Ma couche" src="https://example.org/mapml/mylayer" checked></layer->\n'})}),"\n",(0,l.jsxs)(n.p,{children:["Un \xe9l\xe9ment ",(0,l.jsx)(n.code,{children:"<mapml->"})," indique que le document se trouve dans l\u2019espace de noms xhtml, et\nil doit contenir un \xe9l\xe9ment ",(0,l.jsx)(n.code,{children:"<map-head>"}),", suivi d\u2019un \xe9l\xe9ment ",(0,l.jsx)(n.code,{children:"<map-body>"}),"."]}),"\n",(0,l.jsx)("iframe",{src:"../../../demo/mapml-demo/",title:"D\xe9mo en MapML",height:"410",width:"100%",scrolling:"no",frameBorder:"0"}),"\n",(0,l.jsxs)(t,{children:[(0,l.jsx)("summary",{children:"Cliquez pour voir le contenu de \xab ../data/osm.mapml \xbb dans la d\xe9monstration au-dessus de "}),(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-html",children:'<mapml- xmlns="http://www.w3.org/1999/xhtml">\n  <map-head>\n    <map-title>OpenStreetMap</map-title>\n    <meta http-equiv="Content-Type" content="text/mapml;projection=OSMTILE"/>\n    <meta charset="utf-8"/>\n    <map-link rel="license" href="https://www.openstreetmap.org/copyright" title="\xa9 OpenStreetMap contributors CC BY-SA"></map-link>\n  </map-head>\n  <map-body>\n    \x3c!-- Lorsque des attributs bool\xe9ens tels que "checked" ou "hidden" sont utilis\xe9s dans un fichier mapml, ils doivent avoir une valeur de type cha\xeene de caract\xe8res, par exemple "checked="checked"". --\x3e\n    <map-extent units="OSMTILE" checked="checked" hidden="hidden">\n      <map-input name="z" type="zoom"  value="18" min="0" max="18"></map-input>\n      <map-input name="x" type="location" units="tilematrix" axis="column" min="0"  max="262144" ></map-input>\n      <map-input name="y" type="location" units="tilematrix" axis="row" min="0"  max="262144" ></map-input>\n      <map-link rel="tile" tref="https://tile.openstreetmap.org/{z}/{x}/{y}.png" ></map-link>\n    </map-extent>\n  </map-body>\n</mapml->\n'})})]}),"\n",(0,l.jsx)(n.h2,{id:"attributes",children:"Attributes"}),"\n",(0,l.jsx)(n.h3,{id:"lang",children:(0,l.jsx)(n.code,{children:"lang"})}),"\n",(0,l.jsxs)(n.p,{children:["L\u2019attribut ",(0,l.jsx)(n.code,{children:"lang"})," d\xe9finit le langage principal du document MapML, comme le d\xe9finit l'\xe9l\xe9ment HTML ",(0,l.jsx)(n.a,{href:"https://html.spec.whatwg.org/multipage/dom.html#attr-lang",children:"ici"}),"."]}),"\n",(0,l.jsx)(n.h3,{id:"xmlns",children:(0,l.jsx)(n.code,{children:"xmlns"})}),"\n",(0,l.jsxs)(n.p,{children:["L\u2019attribut ",(0,l.jsx)(n.code,{children:"xmlns"})," est ",(0,l.jsx)(n.strong,{children:"requis"}),", et il doit avoir la valeur ",(0,l.jsx)(n.code,{children:'"http://www.w3.org/1999/xhtml"'}),"."]}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h2,{id:"\xe9l\xe9ments-enfants",children:"\xc9l\xe9ments enfants"}),"\n",(0,l.jsx)(n.h3,{id:"map-head",children:(0,l.jsx)(n.code,{children:"<map-head>"})}),"\n",(0,l.jsxs)(n.p,{children:["L\u2019\xe9l\xe9ment ",(0,l.jsx)(n.code,{children:"<map-head>"})," est le premier \xe9l\xe9ment enfant de l\u2019\xe9l\xe9ment ",(0,l.jsx)(n.code,{children:"<mapml->"}),". Il contient les m\xe9tadonn\xe9es du document MapML."]}),"\n",(0,l.jsx)(n.h4,{id:"\xe9l\xe9ments-enfants-1",children:"\xc9l\xe9ments enfants"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"<map-title>"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"L\u2019\xe9l\xe9ment titre devrait constituer le seul et unique \xe9l\xe9ment de titre compris dans l\u2019\xe9l\xe9ment de t\xeate. Il devrait contenir une cha\xeene de texte fournissant une description du document. Il peut \xeatre utilis\xe9 comme titre de signet."}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"<map-base>"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"L\u2019\xe9l\xe9ment \xab base \xbb sert \xe0 d\xe9terminer l\u2019URL qui servira d\u2019URL de base afin de r\xe9soudre les URL relatives plus loin dans le document."}),"\n",(0,l.jsxs)(n.li,{children:["Un document MapML doit contenir un seul \xe9l\xe9ment ",(0,l.jsx)(n.code,{children:"<map-base>"}),"  et celui-ci doit \xeatre inclus dans le contenu de l\u2019\xe9l\xe9ment ",(0,l.jsx)(n.code,{children:"<map-head>"})," avant tout \xe9l\xe9ment MapML susceptible de porter une URL aux fins de r\xe9solution, notamment l\u2019\xe9l\xe9ment ",(0,l.jsx)(n.code,{children:"<map-link>"}),"."]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"<map-meta>"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["L\u2019\xe9l\xe9ment \xab meta \xbb d\xe9crit les m\xe9tadonn\xe9es comprises dans un document MapML. Vous trouverez plus de d\xe9tails sur l\u2019\xe9l\xe9ment \xab meta \xbb et sa syntaxe ",(0,l.jsx)(n.a,{href:"../meta/",children:"ici"}),"."]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"<map-link>"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["L'\xe9l\xe9ment \xab link \xbb d\xe9crit les liens de m\xe9tadonn\xe9es dans un document MapML. Vous trouverez plus de d\xe9tails sur l\u2019\xe9l\xe9ment \xab link \xbb et sa syntaxe ",(0,l.jsx)(n.a,{href:"../link/",children:"ici"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"map-body",children:(0,l.jsx)(n.code,{children:"<map-body>"})}),"\n",(0,l.jsxs)(n.p,{children:["L\u2019\xe9l\xe9ment ",(0,l.jsx)(n.code,{children:"<map-body>"})," est le deuxi\xe8me enfant de l\u2019\xe9l\xe9ment ",(0,l.jsx)(n.code,{children:"<mapml->"}),". Il repr\xe9sente le contenu de l\u2019\xe9l\xe9ment MapML. Cet \xe9l\xe9ment contient les ",(0,l.jsx)(n.a,{href:"../feature/",children:"entit\xe9s"})," et les m\xe9tadonn\xe9es du document MapML."]}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h2,{id:"sp\xe9cifications",children:"Sp\xe9cifications"}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsx)(n.tr,{children:(0,l.jsx)(n.th,{children:"Sp\xe9cification"})})}),(0,l.jsx)(n.tbody,{children:(0,l.jsx)(n.tr,{children:(0,l.jsx)(n.td,{children:(0,l.jsx)(n.a,{href:"https://maps4html.org/MapML-Specification/spec/#the-mapml-element-0",children:"\xc9l\xe9ment MapML \xab mapml \xbb"})})})})]}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsxs)(n.a,{href:"https://github.com/Maps4HTML/web-map-doc/edit/main/i18n/fr/docusaurus-plugin-content-docs/current/elements/mapml.md",children:["Modifier cette page sur ",(0,l.jsx)(n.strong,{children:"Github"})]})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsxs)(n.a,{href:"https://gitter.im/Maps4HTML/chat",children:["Discutez avec nous sur ",(0,l.jsx)(n.strong,{children:"Gitter"})]})}),"\n"]}),"\n"]})]})}function o(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(m,{...e})}):m(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var l=t(6540);const s={},i=l.createContext(s);function r(e){const n=l.useContext(i);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),l.createElement(i.Provider,{value:n},e.children)}}}]);