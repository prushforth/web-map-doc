"use strict";(self.webpackChunkmapml_viewer_doc=self.webpackChunkmapml_viewer_doc||[]).push([[9563],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,h=m["".concat(l,".").concat(d)]||m[d]||u[d]||i;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7145:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={id:"custom-projections",title:"Custom Projections API",slug:"/api/custom-projections"},o=void 0,s={unversionedId:"api/custom-projections",id:"api/custom-projections",title:"Custom Projections API",description:"Introduction",source:"@site/docs/api/custom-projections.md",sourceDirName:"api",slug:"/api/custom-projections",permalink:"/web-map-doc/docs/api/custom-projections",draft:!1,tags:[],version:"current",frontMatter:{id:"custom-projections",title:"Custom Projections API",slug:"/api/custom-projections"},sidebar:"sidebar",previous:{title:"HTMLFeatureElement",permalink:"/web-map-doc/docs/api/map-feature-api"},next:{title:"Custom Rendering API",permalink:"/web-map-doc/docs/api/custom-rendering"}},l={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Properties",id:"properties",level:2},{value:"Methods",id:"methods",level:2},{value:"defineCustomProjection",id:"definecustomprojection",level:3},{value:"Specifications",id:"specifications",level:2},{value:"Requirements",id:"requirements",level:2}],c={toc:p},m="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"MapML defines a few built-in tiled CRS projections, including Web Mercator (OSMTILE), pseudo-plate carr\xe9e (WGS84), and  Canada's base map tile grid (CBMTILE). "),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"<mapml-viewer>")," custom element provides the custom projections API, which gives you the ability to create custom projections and use them in the ",(0,r.kt)("inlineCode",{parentName:"p"},"<mapml-viewer>"),' element, defined using extended JSON-based "proj4" syntax, supported by the proj4js library.'),(0,r.kt)("p",null,"For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<!doctype html>\n<html lang="en">\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1">\n  <title>Example Custom Projection</title>\n  <script type="module" src="web-map/mapml-viewer.js"><\/script>\n  <script type="module">\n    let customProjectionDefinition = `{\n      "projection": "ATLAS_POLAR_MAP",\n      "proj4string" : "+proj=aeqd +lat_0=90 +lon_0=-90 +x_0=0 +y_0=0 +ellps=sphere +units=m +no_defs +type=crs",\n      "origin" : [-20015200,20015200],\n      "resolutions" :  [33073,16536.5,8268.246,4134.123,2067.061,1033.531,516.765],\n      "bounds" : [[4979939,-4846977],[-5139071,3980038]],\n      "tilesize" : 256\n      }`;\n    let map = document.querySelector("mapml-viewer");\n    let cProjection = map.defineCustomProjection(customProjectionDefinition);    \n    map.projection = cProjection;\n  <\/script>\n</head>\n<body>\n  <mapml-viewer projection="ATLAS_POLAR_MAP" zoom="2" lat="83.48919" lon="-87.7687" controls>\n    <layer- label="Atlas of Canada Polar Wall Map" checked>\n    <map-link rel="license" title="Canadian Federal Geospatial Platform" href="https://geoappext.nrcan.gc.ca/arcgis/rest/services/FGP/NCR_RCN/MapServer/"></map-link>\n      <map-extent units="ATLAS_POLAR_MAP">\n        <map-input type="zoom" name="z" min="0" max="6" value="6" ></map-input>\n        <map-input type="location" name="x" axis="column" units="tilematrix" min="116" max="186"></map-input>\n        <map-input type="location" name="y" axis="row" units="tilematrix" min="125" max="184"></map-input>\n        <map-link rel="tile" tref="https://geoappext.nrcan.gc.ca/arcgis/rest/services/FGP/NCR_RCN/MapServer/tile/{z}/{y}/{x}/"></map-link>\n        <map-link rel="tile" tref="https://geoappext.nrcan.gc.ca/arcgis/rest/services/FGP/NCR_RCN_A/MapServer/tile/{z}/{y}/{x}/"></map-link>\n      </map-extent>\n    </layer->\n  </mapml-viewer>\n</body>\n</html>\n')),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("p",null,"None"),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h3",{id:"definecustomprojection"},"defineCustomProjection"),(0,r.kt)("p",null,"We won't discuss the actual ",(0,r.kt)("inlineCode",{parentName:"p"},"<mapml-viewer>")," element here, except to say that the map ",(0,r.kt)("inlineCode",{parentName:"p"},"projection")," attribute should have the exact same value of the ",(0,r.kt)("inlineCode",{parentName:"p"},"projection")," member of the JSON object you pass to the custom projections API's ",(0,r.kt)("inlineCode",{parentName:"p"},"defineCustomProjection")," method, and every ",(0,r.kt)("inlineCode",{parentName:"p"},"<layer->")," element in the map must declare and be encoded in that coordinate system, in order to display correctly."),(0,r.kt)("p",null,"The custom projections API is provided by the ",(0,r.kt)("inlineCode",{parentName:"p"},"<mapml-viewer>")," element.  In a browser implementation, the API might be defined on the window object, but because of the ES6 modules used by custom elements, it is convenient to locate it on the mapping element which uses it."),(0,r.kt)("p",null,"To successfully call the ",(0,r.kt)("inlineCode",{parentName:"p"},"defineCustomProjection")," method, you need to encode the projection method and parameters as members of a JSON string.  The process of doing this is not always simple, but is helped by resources such as ",(0,r.kt)("a",{parentName:"p",href:"https://spatialreference.org"},"https://spatialreference.org"),", where you can obtain the proj4 version of virtually any CRS definition. "),(0,r.kt)("p",null,'Remember to enclose member names in quotes followed by a colon: e.g. "projection": "MY_PROJECTION_NAME".  String values are also enclosed in quotes, and numbers and arrays following normal ',(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON"},"JSON syntax"),"."),(0,r.kt)("p",null,"There are several required members to a custom projection definition:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"projection"),' - this is a string name you give to your projection. We recommend using UPPERCASE to make projection names stand out. Colon ":" characters in the name are not permitted, because these names should not be confused with EPSG: or ogc: URI code lists, because what is being defined here is a CRS that has Web mapping specific parameters, discussed below.'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"proj4string")," - This string is processed by ",(0,r.kt)("a",{parentName:"li",href:"http://proj4js.org/"},"proj4js"),", so needs to provide parameters of a projection method supported by that library, in the format that it supports."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"origin"),' - an array of two numbers representing the origin of the tile grid in coordinates of the projected coordinate system, typically meters.  The origin is always at the upper left of the tile grid space, and the column and row numbers increase to the right and down, respectively, following the WMTS standard.  If your tile source is configured according to the "TMS" community standard, you'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"resolutions"),' - an array of numbers, sorted in descending order of size in meters, of the "real-world" dimensions of a square pixel. The resolution is calculated using a nominal pixel size of 0.28mm, defined by the WMTS standard. NOTE THIS IS NOT TYPICALLY THE SAME VALUE THAT IS USED BY ESRI TILE SERVICES, WHICH USE 96 DPI AS THE NOMINAL SIZE (settable). Because scale varies over the extent of any projected coordinate system, the pixel resolution is usually valid only in limited locations, for example in Web Mercator, along the equator. The locations where pixel resolution is valid depend on the projection method and parameters.  The set of resolutions must match the set of resolutions of tiles in a cache, if you intend to use your custom projection with an existing tile service.'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"bounds")," - an array of two arrays of coordinate pairs, defining a bounding box around part of the projected coordinate system, in meters typically. Requests should be valid and latitude / longitude are defined within these bounds.  Requests for maps, tiles and coordinate transformations that fall completely outside these bounds will not execute, preventing redundant traffic and errors.  "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"tilesize")," - tiles are always square, and usually 256 pixels on a side.  You can specify another size here as an integer value.  Values of 256, 512, 1024, 2048 or 4096 should work.")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"specifications"},"Specifications"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/Maps4HTML/MapML/issues/249"},"Not yet specified"))))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"requirements"},"Requirements"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Maps4HTML/HTML-Map-Element-UseCases-Requirements/issues/new?title=-SUMMARIZE+THE+PROBLEM-&body=-DESCRIBE+THE+PROBLEM-"},"Report problems with these requirements on GitHub")),(0,r.kt)("p",null,(0,r.kt)("b",null,(0,r.kt)("span",{class:"requirement"},"requirement"),(0,r.kt)("span",{class:"enhancement"},"enhancement"),(0,r.kt)("span",{class:"impractical"},"impractical"),(0,r.kt)("span",{class:"undecided"},"undecided"),(0,r.kt)("span",{class:"discussion"},"under discussion"))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"}),(0,r.kt)("th",{parentName:"tr",align:"center"},"Spec"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Viewer"),(0,r.kt)("th",{parentName:"tr",align:"center"},"API"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"#properties"},(0,r.kt)("strong",{parentName:"a"},"Properties"))),(0,r.kt)("td",{parentName:"tr",align:"center"},"none *"),(0,r.kt)("td",{parentName:"tr",align:"center"},"n/a"),(0,r.kt)("td",{parentName:"tr",align:"center"},"n/a")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"#methods"},(0,r.kt)("strong",{parentName:"a"},"Methods"))),(0,r.kt)("td",{parentName:"tr",align:"center"},"none *"),(0,r.kt)("td",{parentName:"tr",align:"center"},"full"),(0,r.kt)("td",{parentName:"tr",align:"center"},"full")))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Exceptions *"),(0,r.kt)("ol",null,(0,r.kt)("li",null,"The custom projections API is ",(0,r.kt)("a",{href:"https://github.com/Maps4HTML/MapML/issues/249"},"not yet specified")),(0,r.kt)("li",null,"The custom projections API is under discussion"))),(0,r.kt)("hr",null),(0,r.kt)("blockquote",null,(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/Maps4HTML/web-map-doc/edit/main/docs/api/custom-projections.md"},"Edit this page on ",(0,r.kt)("strong",{parentName:"a"},"Github"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://gitter.im/Maps4HTML/chat"},"Chat with us on ",(0,r.kt)("strong",{parentName:"a"},"Gitter"))))))}u.isMDXComponent=!0}}]);