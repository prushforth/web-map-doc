"use strict";(self.webpackChunkmapml_viewer_doc=self.webpackChunkmapml_viewer_doc||[]).push([[2803],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),m=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=m(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=m(n),d=a,g=u["".concat(p,".").concat(d)]||u[d]||c[d]||o;return n?r.createElement(g,i(i({ref:t},s),{},{components:n})):r.createElement(g,i({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var m=2;m<o;m++)i[m]=n[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4145:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return m},toc:function(){return s},default:function(){return u}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={id:"geojson-api",title:"GeoJSON API",slug:"/api/geojson-api"},p=void 0,m={unversionedId:"api/geojson-api",id:"api/geojson-api",isDocsHomePage:!1,title:"GeoJSON API",description:"Introduction",source:"@site/docs/api/geojson-api.md",sourceDirName:"api",slug:"/api/geojson-api",permalink:"/web-map-doc/docs/api/geojson-api",tags:[],version:"current",frontMatter:{id:"geojson-api",title:"GeoJSON API",slug:"/api/geojson-api"}},s=[{value:"Introduction",id:"introduction",children:[{value:"Methods",id:"methods",children:[]}]}],c={toc:s};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"The proposed ",(0,o.kt)("strong",{parentName:"p"},"GeoJSON API")," described by this page is not implemented yet. This\npage will serve as specification and documentation, until development is complete."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"methods"},"Methods"),(0,o.kt)("h4",{id:"geojson2mapml---convert-a-geojson-feature-or-feature-collection-string-or-object--to-a-mapml-layer--element"},(0,o.kt)("inlineCode",{parentName:"h4"},"geojson2mapml")," - convert a GeoJSON feature or feature collection string or object  to a MapML ",(0,o.kt)("inlineCode",{parentName:"h4"},"<layer->")," element."),(0,o.kt)("h5",{id:"returns---a-htmllayerelement-node"},"Returns - a HTMLLayerElement node"),(0,o.kt)("h5",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"<String ","|"," Object> json"),(0,o.kt)("td",{parentName:"tr",align:null},"A GeoJSON string or object")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"<Function ","|"," String ","|"," HTMLElement> properties"),(0,o.kt)("td",{parentName:"tr",align:null},"A function that maps the GeoJSON features' properties member to an HTMLElement, or a string that will be parsed as an HTMLElement, or an HTMLElement. By default, properties will be mapped to an HTML table.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"<Function",">"," geometryFunction"),(0,o.kt)("td",{parentName:"tr",align:null},"Optional. A function you supply that can add classes, hyperlinks and spans to the created ",(0,o.kt)("inlineCode",{parentName:"td"},"<map-geometry>")," element. Plain ",(0,o.kt)("inlineCode",{parentName:"td"},"<map-geometry>")," element will be created by default.")))),(0,o.kt)("h6",{id:"design-notes"},"Design notes"),(0,o.kt)("p",null,"geometryFunction - a user supplied function that is handed the generated\n",(0,o.kt)("inlineCode",{parentName:"p"},"<map-geometry>")," element, and the input GeoJSON feature.  Such a function can\nperform custom markup on the geometry element:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"styling: tag ",(0,o.kt)("inlineCode",{parentName:"li"},"<map-geometry>")," elements with class names"),(0,o.kt)("li",{parentName:"ul"},"linking: add links and spans into geometry coordinates")),(0,o.kt)("h4",{id:"mapml2geojson---serialize-a-mapml-layer--or-map-feature-element-as-a-geojson-feature-collection-object"},(0,o.kt)("inlineCode",{parentName:"h4"},"mapml2geojson")," - serialize a MapML ",(0,o.kt)("inlineCode",{parentName:"h4"},"<layer->")," or ",(0,o.kt)("inlineCode",{parentName:"h4"},"<map-feature>")," element as a GeoJSON feature collection object"),(0,o.kt)("h5",{id:"returns---a-javascript-geojson-object"},"Returns - a JavaScript (GeoJSON) object"),(0,o.kt)("h5",{id:"parameters-1"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Default"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"<HTMLLayerElement",">"," element"),(0,o.kt)("td",{parentName:"tr",align:null},"n/a"),(0,o.kt)("td",{parentName:"tr",align:null},"A ",(0,o.kt)("inlineCode",{parentName:"td"},"<layer->")," element")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"<Function",">"," propertyFunction"),(0,o.kt)("td",{parentName:"tr",align:null},"n/a"),(0,o.kt)("td",{parentName:"tr",align:null},"A function that maps the features' ",(0,o.kt)("inlineCode",{parentName:"td"},"<map-properties>")," element to a ",(0,o.kt)("a",{parentName:"td",href:"https://datatracker.ietf.org/doc/html/rfc7946#section-3.2"},'GeoJSON "properties" member'),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"<Boolean",">"," transform"),(0,o.kt)("td",{parentName:"tr",align:null},"true"),(0,o.kt)("td",{parentName:"tr",align:null},"Transform coordinates to ",(0,o.kt)("inlineCode",{parentName:"td"},"gcrs")," values. Note that non-gcrs values don't conform to the GeoJSON recommendation.")))),(0,o.kt)("h6",{id:"notes"},"Notes"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"mapml2geojson"),", by default, will transform coordinates to ",(0,o.kt)("inlineCode",{parentName:"p"},"gcrs")," before serialization, if\nnecessary. Note that all geographic CRS are not equivalent, and the interpretation\nof such coordinates is not guaranteed to conform to WGS 84 / GPS coordinates,\nand therefore may not conform to ",(0,o.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/rfc7946#section-4"},"the GeoJSON recommendation"),",\nwhich requires longitude,latitude coordinates that\nare encoded as WGS 84.  The projection engine used to implement this conversion\nis not capable of transforming coordinates from one ellipsoid to another, and\nso the resulting JSON SHOULD (somehow, tbd) be tagged with the datum in use by the projection of\nthe layer."),(0,o.kt)("h6",{id:"design-notes-1"},"Design notes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"any other ideas, suggestions, corrections?")),(0,o.kt)("hr",null))}u.isMDXComponent=!0}}]);