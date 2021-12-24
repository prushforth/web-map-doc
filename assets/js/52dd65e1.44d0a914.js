"use strict";(self.webpackChunkmapml_viewer_doc=self.webpackChunkmapml_viewer_doc||[]).push([[613],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return c}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var m=a.createContext({}),p=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(m.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,m=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),c=o,h=d["".concat(m,".").concat(c)]||d[c]||u[c]||r;return n?a.createElement(h,i(i({ref:t},s),{},{components:n})):a.createElement(h,i({ref:t},s))}));function c(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8060:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return m},metadata:function(){return p},toc:function(){return s},default:function(){return d}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),i=["components"],l={id:"mapml-viewer",title:"<mapml-viewer>: The Map element",slug:"/elements/mapml-viewer/"},m=void 0,p={unversionedId:"elements/mapml-viewer",id:"elements/mapml-viewer",isDocsHomePage:!1,title:"<mapml-viewer>: The Map element",description:"The `` element is the main element you can use to put a custom Web map on your page.  To create a (really) simple Web map, you might use it like this:",source:"@site/docs/elements/mapml-viewer.md",sourceDirName:"elements",slug:"/elements/mapml-viewer/",permalink:"/web-map-doc/docs/elements/mapml-viewer/",tags:[],version:"current",frontMatter:{id:"mapml-viewer",title:"<mapml-viewer>: The Map element",slug:"/elements/mapml-viewer/"},sidebar:"sidebar",previous:{title:"Building from source",permalink:"/web-map-doc/docs/building"},next:{title:"<layer->: The Layer element",permalink:"/web-map-doc/docs/layers/layer/"}},s=[{value:"Attributes",id:"attributes",children:[{value:"<code>projection</code>",id:"projection",children:[]},{value:"<code>zoom</code>",id:"zoom",children:[]},{value:"<code>lat</code>",id:"lat",children:[]},{value:"<code>lon</code>",id:"lon",children:[]},{value:"<code>controls</code>",id:"controls",children:[]},{value:"<code>controlslist</code>",id:"controlslist",children:[]}]}],u={toc:s};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"<mapml-viewer>")," element is the main element you can use to put a custom Web map on your page.  To create a (really) simple Web map, you might use it like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<!doctype html>\n<html lang="en">\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1">\n  <title>A Simple Web Map[tm]</title>\n  <script type="module" src="web-map/mapml-viewer.js"><\/script>\n  <style>\n    html, body {\n    height: 100%; /* These styles are required if you wish to use a % based\n                     height value on the mapml-viewer element. */\n    }\n  </style>\n</head>\n<body>\n  <mapml-viewer projection="OSMTILE" zoom="0" lat="0.0" lon="0.0" controls>\n    <layer- label="OpenStreetMap" src="https://geogratis.gc.ca/mapml/en/osmtile/osm/" checked></layer->\n  </mapml-viewer>\n</body>\n</html>    \n')),(0,r.kt)("iframe",{src:"../../../demo/mapml-viewer-demo.html",title:"MapML Demo",height:"410",width:"100%",scrolling:"no",frameBorder:"0"}),(0,r.kt)("p",null,"Note that for the above example to run properly on your own site, you need to get a built copy of the ",(0,r.kt)("inlineCode",{parentName:"p"},"<mapml-viewer>")," project in your site's folder. In the example, the ",(0,r.kt)("inlineCode",{parentName:"p"},"<mapml-viewer>"),' files are copied into the folder named "web-map" in your site root folder. Your own site\'s path to these files will depend on how you structure your folders.'),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"<mapml-viewer>"),' is an "',(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements"},"autonomous custom element"),'" in HTML.  You can distinguish an autonomous custom element from a "native" HTML element by the "-" anywhere in the element name. Autonomous custom elements are supported by all modern browsers, but don\'t work in old browsers (e.g. Internet Explorer and old Edge).'),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"<mapml-viewer>")," element has several attributes to control the presentation and initial location of the map.  "),(0,r.kt)("h2",{id:"attributes"},"Attributes"),(0,r.kt)("h3",{id:"projection"},(0,r.kt)("inlineCode",{parentName:"h3"},"projection")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"projection"),' - an enumerated attribute. Case-sensitive values are: "',(0,r.kt)("inlineCode",{parentName:"p"},"OSMTILE"),'", "',(0,r.kt)("inlineCode",{parentName:"p"},"WGS84"),'", "',(0,r.kt)("inlineCode",{parentName:"p"},"CBMTILE"),'" and "',(0,r.kt)("inlineCode",{parentName:"p"},"APSTILE"),'".',(0,r.kt)("br",{parentName:"p"}),"\n","The default projection is ",(0,r.kt)("inlineCode",{parentName:"p"},"OSMTILE"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"OSMTILE"),' corresponds to the widely-used "Web Mercator" projected coordinate reference system, implying a "tile pyramid" zoom range from 0 to 23 (minimum tile size ~2.4m).')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"WGS84"),' provides an implementation of the "pseudo plate carr\xe9e" projected coordinate reference system, wherein the easting and northing axis units are decimal degrees (not meters). In ',(0,r.kt)("inlineCode",{parentName:"p"},"WGS84"),", zoom level 0 contains two tiles that each cover a hemisphere of Earth's surface. ",(0,r.kt)("inlineCode",{parentName:"p"},"WGS84")," is defined with 21 zoom levels (0 to 20).  ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"CBMTILE")," is the de facto standard grid layout for the Canadian Geospatial Data Infrastructure (CGDI), defined by Natural Resources Canada, and is based on the Lambert Conformal Conic projection (EPSG:3978). Zoom levels are based on a numeric map scale denominator (e.g. 10000 corresponding to a map scale of 1:10,000), with a particular pixel resolution selected, and as a result, successive zoom levels' tiles do not nest exactly (as they do in ",(0,r.kt)("inlineCode",{parentName:"p"},"OSMTILE"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"WGS84")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"APSTILE"),"). ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"APSTILE")," is based on the Alaska Polar Stereographic (EPSG:5936) projected coordinate reference system, and has 20 zoom levels (0 to 19).")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"other projections are possible, using the ",(0,r.kt)("a",{parentName:"p",href:"../../api/custom-projections"},"Custom Projections API"),"."))),(0,r.kt)("h3",{id:"zoom"},(0,r.kt)("inlineCode",{parentName:"h3"},"zoom")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"zoom")," - a non-negative integer.  The value establishes the initial zoom level of the map.  For a small scale view of the world, use a lower value.  Use larger values for larger scales (smaller area maps). The maximum value depends on the particular ",(0,r.kt)("inlineCode",{parentName:"p"},"projection")," and data source. Many map data sources have limited zoom levels available."),(0,r.kt)("h3",{id:"lat"},(0,r.kt)("inlineCode",{parentName:"h3"},"lat")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"lat")," - a real number latitude. The value establishes the initial latitude of the of the center of the map. Latitudes on Earth range from -90.0 (south) to 90.0 (north).  Many projections are not able to display all latitudes, and most projections have a limited range of locations where distortion is controlled or limited. In particular, OSMTILE (Web Mercator) can only display content between the latitude range -84 to 84."),(0,r.kt)("h3",{id:"lon"},(0,r.kt)("inlineCode",{parentName:"h3"},"lon")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"lon"),' - a real number longitude. The value establishes the initial longitude of the of the center of the map.Longitudes on Earth range from -180.0 (west) to 180.0 (east). Similar comments related to distortion apply to those for latitude. Be careful, this attribute is named "lon" NOT "long", and if you use "long" your map won\'t work properly.'),(0,r.kt)("h3",{id:"controls"},(0,r.kt)("inlineCode",{parentName:"h3"},"controls")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"controls"),' - a "boolean" attribute. Turns map controls on (if present) or off (if omitted). In HTML "boolean" attributes don\'t have values of "true" or "false" per se - they have the implied value of "true" if the attribute exists, and an implied value of "false" if the attribute is not present.  Sometimes the default map controls may not be useful for your map, so you may turn them off and design your own.'),(0,r.kt)("h3",{id:"controlslist"},(0,r.kt)("inlineCode",{parentName:"h3"},"controlslist")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"controlslist"),' - an enumerated attribute, possible values are: "',(0,r.kt)("inlineCode",{parentName:"p"},"nofullscreen"),'", "',(0,r.kt)("inlineCode",{parentName:"p"},"nolayer"),'", "',(0,r.kt)("inlineCode",{parentName:"p"},"noreload"),'" and "',(0,r.kt)("inlineCode",{parentName:"p"},"nozoom"),'".  Occasionally, you may not want your users to have access to a particular control, so you may prune the set of controls automatically presented (when you have used the ',(0,r.kt)("inlineCode",{parentName:"p"},"controls")," boolean attribute)."))}d.isMDXComponent=!0}}]);