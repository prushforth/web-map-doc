"use strict";(self.webpackChunkmapml_viewer_doc=self.webpackChunkmapml_viewer_doc||[]).push([[8441],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=a.createContext({}),o=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=o(e.components);return a.createElement(p.Provider,{value:t},e.children)},h="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,p=e.parentName,m=r(e,["components","mdxType","originalType","parentName"]),h=o(n),u=l,d=h["".concat(p,".").concat(u)]||h[u]||c[u]||i;return n?a.createElement(d,s(s({ref:t},m),{},{components:n})):a.createElement(d,s({ref:t},m))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,s=new Array(i);s[0]=u;var r={};for(var p in t)hasOwnProperty.call(t,p)&&(r[p]=t[p]);r.originalType=e,r[h]="string"==typeof e?e:l,s[1]=r;for(var o=2;o<i;o++)s[o]=n[o];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3152:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>r,toc:()=>o});var a=n(7462),l=(n(7294),n(3905));const i={id:"using-styles",title:"Using mvt styles",slug:"/tutorials/using-styles"},s=void 0,r={unversionedId:"tutorials/using-styles",id:"tutorials/using-styles",title:"Using mvt styles",description:"The developer-user interface to use mvt styling in the MapML polyfill is similar to (one of the ways) how CSS stylesheets are imported into",source:"@site/docs/tutorials/using-styles.md",sourceDirName:"tutorials",slug:"/tutorials/using-styles",permalink:"/web-map-doc/docs/tutorials/using-styles",draft:!1,tags:[],version:"current",frontMatter:{id:"using-styles",title:"Using mvt styles",slug:"/tutorials/using-styles"},sidebar:"sidebar",previous:{title:"Creating custom mvt styles",permalink:"/web-map-doc/docs/tutorials/creating-styles"},next:{title:"About Extension",permalink:"/web-map-doc/docs/extension/about"}},p={},o=[],m={toc:o},h="wrapper";function c(e){let{components:t,...n}=e;return(0,l.kt)(h,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The developer-user interface to use mvt styling in the MapML polyfill is similar to (one of the ways) how CSS stylesheets are imported into\nan HTML document, by using the ","<","map-link",">"," element:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'...\n<map-extent units="OSMTILE" checked="checked" hidden="hidden">\n  <map-link rel="stylesheet" type="application/pmtiles+stylesheet" href="lightTheme.js"></map-link>\n  <map-link rel="tile" type="application/pmtiles" \n    tref="https://maps4html.org/experiments/vector-tiles/pmtiles/spearfish.pmtiles?theme=light"></map-link>\n</map-extent>\n...\n')),(0,l.kt)("p",null,"The stylesheet resource above, ",(0,l.kt)("inlineCode",{parentName:"p"},"lightTheme.js")," (can be any name) must be ",(0,l.kt)("strong",{parentName:"p"},"structured")," for consumption by the polyfill as described\nin ",(0,l.kt)("a",{parentName:"p",href:"creating-styles"},"the previous section"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"const pmtilesRules = new Map();\npmtilesRules.set(\n  'https://maps4html.org/experiments/vector-tiles/pmtiles/spearfish.pmtiles?theme=light',\n  { theme: { theme: 'light' } }\n);\nexport { pmtilesRules };\n")),(0,l.kt)("p",null,"The module ",(0,l.kt)("strong",{parentName:"p"},"must")," define an export named ",(0,l.kt)("inlineCode",{parentName:"p"},"pmtilesRules")," which ",(0,l.kt)("strong",{parentName:"p"},"must")," be of\n",(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map"},"type Map"),". Each entry in the Map must be the\n",(0,l.kt)("strong",{parentName:"p"},"exact")," URL template string ",(0,l.kt)("inlineCode",{parentName:"p"},"tref")," value of the resource(s) from which mvt tiles will be obtained.  "),(0,l.kt)("p",null,"The reason that the Map key must be the exact string value of the ",(0,l.kt)("inlineCode",{parentName:"p"},"tref")," URL template is because the polyfill will use the URL template\nfound in the ",(0,l.kt)("inlineCode",{parentName:"p"},'<map-link rel="tile" type="application/pmtiles" tref="https://maps4html.org/experiments/vector-tiles/pmtiles/spearfish.pmtiles?theme=light">')," to ",(0,l.kt)("strong",{parentName:"p"},"look up"),"\nthe style rules in the ",(0,l.kt)("inlineCode",{parentName:"p"},"pmtilesRules")," Map that should be applied to the content. "),(0,l.kt)("p",null,"Each ",(0,l.kt)("inlineCode",{parentName:"p"},'<map-link rel="tile" type="application/pmtiles">')," or ",(0,l.kt)("inlineCode",{parentName:"p"},'<map-link rel="tile" type="application/vnd.mapbox-vector-tile">'),"\nyou create should have an associated set of style rules or a theme.  The subject of how to encode style rules and themes was discussed in the previous\nsection. "),(0,l.kt)("p",null,"The styles for a given ",(0,l.kt)("inlineCode",{parentName:"p"},"<map-link>"),"'s URL template ",(0,l.kt)("inlineCode",{parentName:"p"},"tref")," must be found via an associated ",(0,l.kt)("inlineCode",{parentName:"p"},"<map-link rel=stylesheet>"),".  The MapML\npolyfill looks for the associated ",(0,l.kt)("inlineCode",{parentName:"p"},"<map-link rel=stylesheet>")," upward in the ",(0,l.kt)("inlineCode",{parentName:"p"},"<map-link>"),' element\'s "ancestry", stopping at the\nenclosing ',(0,l.kt)("inlineCode",{parentName:"p"},"<layer->")," element. The associated stylesheet link ",(0,l.kt)("inlineCode",{parentName:"p"},'<map-link rel="stylesheet" type="application/pmtiles+stylesheet"...>'),"\nmay be located within the enclosing ",(0,l.kt)("inlineCode",{parentName:"p"},"<map-extent>"),", as a sibling of the to-be-styled ",(0,l.kt)("inlineCode",{parentName:"p"},'<map-link rel="tile" tref="...">')," resource, or\nwithin the ",(0,l.kt)("inlineCode",{parentName:"p"},"<map-head>")," (when used in remote MapML content) or ",(0,l.kt)("inlineCode",{parentName:"p"},"<layer->")," element (when used in local MapML content).  Only the\n",(0,l.kt)("strong",{parentName:"p"},"first")," ",(0,l.kt)("inlineCode",{parentName:"p"},"<map-link rel=stylesheet>")," in document order found will be associated; if no style rules or theme for the\n",(0,l.kt)("inlineCode",{parentName:"p"},"tref")," URL template is found, console error messages may help clarify."),(0,l.kt)("p",null,"Example of where linked stylesheets are sought by the polyfill, remote content:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<mapml- xmlns="http://www.w3.org/1999/xhtml">\n  <map-head>\n    <map-title>pmtiles</map-title>\n\n    <map-link data-testid="operative-light" rel="stylesheet" type="application/pmtiles+stylesheet" href="lightTheme.js"></map-link>\n\n    \x3c!-- only the first stylesheet in document order within the container search path is used... --\x3e\n    <map-link data-testid="inoperative-dark" rel="stylesheet" type="application/pmtiles+stylesheet" href="darkTheme.js"></map-link>\n\n    <map-link rel="license" title="\xa9 OpenStreetMap contributors CC BY-SA" href="https://www.openstreetmap.org/copyright"></map-link>\n  </map-head>\n  <map-body>\n    <map-extent data-testid="light-me" label="light" units="OSMTILE" >\n\n      \x3c!-- this guy should use the operative-light stylesheet in the map-head --\x3e\n      <map-link rel="tile" type="application/pmtiles" tref="spearfish.pmtiles?theme=light"></map-link>\n\n    </map-extent>\n    <map-extent data-testid="dark-me" label="dark" units="OSMTILE" checked="checked" >\n\n      <map-link data-testid="operative-dark" rel="stylesheet" type="application/pmtiles+stylesheet" href="darkTheme.js"></map-link>\n      <map-link data-testid="inoperative-light" rel="stylesheet" type="application/pmtiles+stylesheet" href="lightTheme.js"></map-link>\n      \n      \x3c!-- this guy should use the preceding sibling operative-dark stylesheet (first in doc order in search path) --\x3e\n      <map-link rel="tile" type="application/pmtiles" tref="spearfish.pmtiles?theme=dark"></map-link>\n\n    </map-extent>\n  </map-body>\n</mapml->\n')),(0,l.kt)("p",null,"Example of where linked stylesheets are sought by the polyfill, local content:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'...\n<mapml-viewer data-testid="viewer" projection="OSMTILE" zoom="0" lat="0" lon="0" width="400" height="400">\n  <layer- data-testid="dark">\n    <map-title>PMTiles test dark</map-title>\n    <map-link rel="license" title="\xa9 OpenStreetMap contributors CC BY-SA" href="https://www.openstreetmap.org/copyright"></map-link>\n    <map-extent units="OSMTILE" checked>\n      \x3c!-- linked stylesheet is a sibling child of map-extent --\x3e\n      <map-link rel="stylesheet" type="application/pmtiles+stylesheet" href="pmtilesRulesModule.js"></map-link>\n      <map-link rel="tile" type="application/pmtiles" tref="spearfish.pmtiles?theme=dark"></map-link>\n    </map-extent>\n  </layer->\n  <layer- checked data-testid="light">\n    <map-title>{z}/{x}/{y}.mvt test</map-title>\n    \x3c!-- no map-head available, layer- element children are searched for linked stylesheets --\x3e\n    <map-link rel="stylesheet" type="application/pmtiles+stylesheet" href="pmtilesRulesModule.js"></map-link>\n    <map-extent units="OSMTILE" checked="checked">\n      <map-input name="beans" type="zoom" value="18" min="0" max="2"></map-input>\n      <map-input name="foo" type="location" units="tilematrix" axis="column" min="0" max="262144"></map-input>\n      <map-input name="bar" type="location" units="tilematrix" axis="row" min="0" max="262144"></map-input>\n      <map-link rel="tile" type="application/vnd.mapbox-vector-tile" tref="tiles/osmtile/{beans}/{foo}/{bar}.mvt?theme=light"></map-link>\n    </map-extent>\n  </layer->\n</mapml-viewer>\n')))}c.isMDXComponent=!0}}]);