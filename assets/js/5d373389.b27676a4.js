"use strict";(self.webpackChunkmapml_viewer_doc=self.webpackChunkmapml_viewer_doc||[]).push([[9976],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return d}});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var c=n.createContext({}),m=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=m(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=m(a),d=l,h=u["".concat(c,".").concat(d)]||u[d]||s[d]||r;return a?n.createElement(h,i(i({ref:t},p),{},{components:a})):n.createElement(h,i({ref:t},p))}));function d(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var m=2;m<r;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},760:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return m},toc:function(){return p},default:function(){return u}});var n=a(7462),l=a(3366),r=(a(7294),a(3905)),i=["components"],o={id:"static-tiles",title:"Static Tiles Layer",slug:"/layers/static-tiles"},c=void 0,m={unversionedId:"layers/static-tiles",id:"layers/static-tiles",isDocsHomePage:!1,title:"Static Tiles Layer",description:"In this section, we will learn about creating a static tile layer. A static tile is a single image that occupies an entry on the map grid. You can specify the column, row and zoom",source:"@site/docs/layers/static-tiles.md",sourceDirName:"layers",slug:"/layers/static-tiles",permalink:"/web-map-doc/docs/layers/static-tiles",tags:[],version:"current",frontMatter:{id:"static-tiles",title:"Static Tiles Layer",slug:"/layers/static-tiles"}},p=[{value:"Adding a single tile",id:"adding-a-single-tile",children:[]},{value:"Associated Elements",id:"associated-elements",children:[{value:"<code>&lt;map-tile&gt;</code>",id:"map-tile",children:[]}]},{value:"Additional Context",id:"additional-context",children:[{value:"<code>&lt;map-link rel=&quot;license&quot;&gt;</code>",id:"map-link-rellicense",children:[]},{value:"<code>&lt;map-meta name=&quot;zoom&quot;&gt;</code>",id:"map-meta-namezoom",children:[]},{value:"<code>&lt;map-meta name=&quot;projection&quot;&gt;</code>",id:"map-meta-nameprojection",children:[]}]},{value:"Full Examples",id:"full-examples",children:[]}],s={toc:p};function u(e){var t=e.components,a=(0,l.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In this section, we will learn about creating a static tile layer. A static tile is a single image that occupies an entry on the map grid. You can specify the column, row and zoom\nto present an image at that location on the map."),(0,r.kt)("h2",{id:"adding-a-single-tile"},"Adding a single tile"),(0,r.kt)("p",null,"Add an image file to your project directory. Now you can access this image in MapML."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<layer- label="My Static Tile Layer" checked>\n  <map-tile zoom="0" row="1" col="1" src="my-tile.png"></map-tile>\n</layer->\n\n')),(0,r.kt)("h2",{id:"associated-elements"},"Associated Elements"),(0,r.kt)("h3",{id:"map-tile"},(0,r.kt)("inlineCode",{parentName:"h3"},"<map-tile>")),(0,r.kt)("h4",{id:"attributes"},"Attributes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"col"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The col attribute allows you to set the column value of the static tile."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"row"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The row attribute allows you to set the row value of the static tile."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"src"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The src attribute lets you set the path to the image source of the static tile."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"zoom"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"This allows you to set the zoom level the tile is rendered at. The zoom value should fall within the range of 0 to the maximum zoom level of a ",(0,r.kt)("a",{parentName:"li",href:"http://example.org/"},"projection"),".")))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"additional-context"},"Additional Context"),(0,r.kt)("p",null,"You can also provide a set of elements to further define the static tile layer. This is the list of available additions with examples."),(0,r.kt)("h3",{id:"map-link-rellicense"},(0,r.kt)("inlineCode",{parentName:"h3"},'<map-link rel="license">')),(0,r.kt)("p",null,"Sets the attribution link of the layer. Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<map-link rel="license" href="https://www.nrcan.gc.ca/earth-sciences/geography/topographic-information/free-data-geogratis/licence/17285" title="Canada Base Map \xa9 Natural Resources Canada"></map-link>\n')),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"map-meta-namezoom"},(0,r.kt)("inlineCode",{parentName:"h3"},'<map-meta name="zoom">')),(0,r.kt)("p",null,"Sets the native minimum and maximum ",(0,r.kt)("a",{parentName:"p",href:"http://example.org/"},"native zoom"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<map-meta name="zoom" content="min=1,max=4"></map-meta>\n')),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"map-meta-nameprojection"},(0,r.kt)("inlineCode",{parentName:"h3"},'<map-meta name="projection">')),(0,r.kt)("p",null,"Sets the ",(0,r.kt)("a",{parentName:"p",href:"http://example.org/"},"projection")," of the layer. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<map-meta name="projection" content="CBMTILE"></map-meta>\n')),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"full-examples"},"Full Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<mapml-viewer projection="CBMTILE" zoom="2" lat="59" lon="-53" width="900" height="400" controls>\n  <layer- label="Static MapML with tiles" checked>\n    <map-meta name="zoom" content="min=1,max=4"></map-meta>\n    <map-meta name="projection" content="CBMTILE"></map-meta>\n    <map-link rel="license"\n      href="https://www.nrcan.gc.ca/earth-sciences/geography/topographic-information/free-data-geogratis/licence/17285"\n              title="Canada Base Map \xa9 Natural Resources Canada"></map-link>\n    <map-tile zoom="3" row="18" col="17" src="data/cbmt/3/c17_r18.png"></map-tile>\n    <map-tile zoom="2" row="10" col="11" src="data/cbmt/2/c11_r10.png"></map-tile>\n    <map-tile zoom="2" row="10" col="9" src="data/cbmt/2/c9_r10.png"></map-tile>\n    <map-tile zoom="2" row="11" col="9" src="data/cbmt/2/c9_r11.png"></map-tile>\n  </layer->\n</mapml-viewer>\n')),(0,r.kt)("p",null,"[ADD MAP HERE]"))}u.isMDXComponent=!0}}]);