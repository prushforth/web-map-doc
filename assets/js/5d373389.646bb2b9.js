"use strict";(self.webpackChunkmapml_viewer_doc=self.webpackChunkmapml_viewer_doc||[]).push([[9976],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var l=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},i=Object.keys(e);for(l=0;l<i.length;l++)a=i[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)a=i[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var m=l.createContext({}),c=function(e){var t=l.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=c(e.components);return l.createElement(m.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},u=l.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,m=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(a),d=n,h=u["".concat(m,".").concat(d)]||u[d]||s[d]||i;return a?l.createElement(h,r(r({ref:t},p),{},{components:a})):l.createElement(h,r({ref:t},p))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,r=new Array(i);r[0]=u;var o={};for(var m in t)hasOwnProperty.call(t,m)&&(o[m]=t[m]);o.originalType=e,o.mdxType="string"==typeof e?e:n,r[1]=o;for(var c=2;c<i;c++)r[c]=a[c];return l.createElement.apply(null,r)}return l.createElement.apply(null,a)}u.displayName="MDXCreateElement"},760:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>r,default:()=>s,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var l=a(7462),n=(a(7294),a(3905));const i={id:"static-tiles",title:"Static Tiles Layer",slug:"/layers/static-tiles"},r=void 0,o={unversionedId:"layers/static-tiles",id:"layers/static-tiles",title:"Static Tiles Layer",description:"In this section, we will learn about creating a static tile layer. A static tile is a single image that occupies an entry on the map grid. You can specify the column, row and zoom",source:"@site/docs/layers/static-tiles.md",sourceDirName:"layers",slug:"/layers/static-tiles",permalink:"/web-map-doc/docs/layers/static-tiles",draft:!1,tags:[],version:"current",frontMatter:{id:"static-tiles",title:"Static Tiles Layer",slug:"/layers/static-tiles"}},m={},c=[{value:"Adding a single tile",id:"adding-a-single-tile",level:2},{value:"Associated Elements",id:"associated-elements",level:2},{value:"<code>&lt;map-tile&gt;</code>",id:"map-tile",level:3},{value:"Attributes",id:"attributes",level:4},{value:"Additional Context",id:"additional-context",level:2},{value:"<code>&lt;map-link rel=&quot;license&quot;&gt;</code>",id:"map-link-rellicense",level:3},{value:"<code>&lt;map-meta name=&quot;zoom&quot;&gt;</code>",id:"map-meta-namezoom",level:3},{value:"<code>&lt;map-meta name=&quot;projection&quot;&gt;</code>",id:"map-meta-nameprojection",level:3},{value:"Full Examples",id:"full-examples",level:2}],p={toc:c};function s(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,l.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"In this section, we will learn about creating a static tile layer. A static tile is a single image that occupies an entry on the map grid. You can specify the column, row and zoom\nto present an image at that location on the map."),(0,n.kt)("h2",{id:"adding-a-single-tile"},"Adding a single tile"),(0,n.kt)("p",null,"Add an image file to your project directory. Now you can access this image in MapML."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-html"},'<layer- label="My Static Tile Layer" checked>\n  <map-tile zoom="0" row="1" col="1" src="my-tile.png"></map-tile>\n</layer->\n\n')),(0,n.kt)("h2",{id:"associated-elements"},"Associated Elements"),(0,n.kt)("h3",{id:"map-tile"},(0,n.kt)("inlineCode",{parentName:"h3"},"<map-tile>")),(0,n.kt)("h4",{id:"attributes"},"Attributes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"col"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"The col attribute allows you to set the column value of the static tile."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"row"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"The row attribute allows you to set the row value of the static tile."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"src"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"The src attribute lets you set the path to the image source of the static tile."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"zoom"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"This allows you to set the zoom level the tile is rendered at. The zoom value should fall within the range of 0 to the maximum zoom level of a ",(0,n.kt)("a",{parentName:"li",href:"http://example.org/"},"projection"),".")))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"additional-context"},"Additional Context"),(0,n.kt)("p",null,"You can also provide a set of elements to further define the static tile layer. This is the list of available additions with examples."),(0,n.kt)("h3",{id:"map-link-rellicense"},(0,n.kt)("inlineCode",{parentName:"h3"},'<map-link rel="license">')),(0,n.kt)("p",null,"Sets the attribution link of the layer. Example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-html"},'<map-link rel="license" href="https://www.nrcan.gc.ca/earth-sciences/geography/topographic-information/free-data-geogratis/licence/17285" title="Canada Base Map \xa9 Natural Resources Canada"></map-link>\n')),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"map-meta-namezoom"},(0,n.kt)("inlineCode",{parentName:"h3"},'<map-meta name="zoom">')),(0,n.kt)("p",null,"Sets the native minimum and maximum ",(0,n.kt)("a",{parentName:"p",href:"http://example.org/"},"native zoom"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-html"},'<map-meta name="zoom" content="min=1,max=4"></map-meta>\n')),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"map-meta-nameprojection"},(0,n.kt)("inlineCode",{parentName:"h3"},'<map-meta name="projection">')),(0,n.kt)("p",null,"Sets the ",(0,n.kt)("a",{parentName:"p",href:"http://example.org/"},"projection")," of the layer. "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-html"},'<map-meta name="projection" content="CBMTILE"></map-meta>\n')),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"full-examples"},"Full Examples"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-html"},'<mapml-viewer projection="CBMTILE" zoom="2" lat="59" lon="-53" width="900" height="400" controls>\n  <layer- label="Static MapML with tiles" checked>\n    <map-meta name="zoom" content="min=1,max=4"></map-meta>\n    <map-meta name="projection" content="CBMTILE"></map-meta>\n    <map-link rel="license"\n      href="https://www.nrcan.gc.ca/earth-sciences/geography/topographic-information/free-data-geogratis/licence/17285"\n              title="Canada Base Map \xa9 Natural Resources Canada"></map-link>\n    <map-tile zoom="3" row="18" col="17" src="data/cbmt/3/c17_r18.png"></map-tile>\n    <map-tile zoom="2" row="10" col="11" src="data/cbmt/2/c11_r10.png"></map-tile>\n    <map-tile zoom="2" row="10" col="9" src="data/cbmt/2/c9_r10.png"></map-tile>\n    <map-tile zoom="2" row="11" col="9" src="data/cbmt/2/c9_r11.png"></map-tile>\n  </layer->\n</mapml-viewer>\n')),(0,n.kt)("p",null,"[ADD MAP HERE]"))}s.isMDXComponent=!0}}]);