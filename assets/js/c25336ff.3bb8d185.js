(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{103:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return s}));var a=n(3),o=n(7),r=(n(0),n(116)),i={id:"mapml-viewer",title:"<mapml-viewer>",slug:"/maps/mapml-viewer"},l={unversionedId:"maps/mapml-viewer",id:"maps/mapml-viewer",isDocsHomePage:!1,title:"<mapml-viewer>",description:"The `` element is the main element you can use to put a custom Web map on your page.  To create a (really) simple Web map, you might use it like this:",source:"@site/docs/maps/mapml-viewer.md",slug:"/maps/mapml-viewer",permalink:"/web-map-doc/docs/maps/mapml-viewer",version:"current",sidebar:"sidebar",previous:{title:"Installation",permalink:"/web-map-doc/docs/installation"},next:{title:'<map is="web-map">',permalink:"/web-map-doc/docs/maps/web-map"}},p=[{value:"Attributes",id:"attributes",children:[{value:"<code>projection</code>",id:"projection",children:[]},{value:"<code>zoom</code>",id:"zoom",children:[]},{value:"<code>lat</code>",id:"lat",children:[]},{value:"<code>lon</code>",id:"lon",children:[]},{value:"<code>controls</code>",id:"controls",children:[]},{value:"<code>controlslist</code>",id:"controlslist",children:[]}]},{value:"API",id:"api",children:[]}],c={toc:p};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"<mapml-viewer>")," element is the main element you can use to put a custom Web map on your page.  To create a (really) simple Web map, you might use it like this:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-html"},'<!doctype html>\n<html lang="en">\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1">\n  <title>A Simple Web Map[tm]</title>\n  <script type="module" src="web-map/mapml-viewer.js"><\/script>\n  <style>\n    html, body {\n    height: 100%; /* These styles are required if you wish to use a % based\n                     height value on the mapml-viewer element. */\n    }\n  </style>\n</head>\n<body>\n  <mapml-viewer projection="OSMTILE" zoom="0" lat="0.0" lon="0.0" controls>\n    <layer- label="OpenStreetMap" src="https://geogratis.gc.ca/mapml/en/osmtile/osm/" checked></layer->\n  </mapml-viewer>\n</body>\n</html>    \n')),Object(r.b)("p",null,"Note that for the above example to run properly on your own site, you need to get a built copy of the ",Object(r.b)("inlineCode",{parentName:"p"},"<mapml-viewer>")," project in your site's folder. In the example, the ",Object(r.b)("inlineCode",{parentName:"p"},"<mapml-viewer>"),' files are copied into the folder named "web-map" in your site root folder. Your own site\'s path to these files will depend on how you structure your folders.'),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"<mapml-viewer>"),' is an "',Object(r.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements"},"autonomous custom element"),'" in HTML.  You can distinguish a custom element of any category from a "native" HTML element by the "-" anywhere in the element name. Autonomous custom elements are supported by all modern browsers, but don\'t work in old browsers (e.g. Internet Explorer and old Edge).'),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"<mapml-viewer>")," element has several attributes to control the presentation and initial location of the map.  "),Object(r.b)("h2",{id:"attributes"},"Attributes"),Object(r.b)("h3",{id:"projection"},Object(r.b)("inlineCode",{parentName:"h3"},"projection")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"projection"),' - an enumerated attribute. Case-sensitive values are: "',Object(r.b)("inlineCode",{parentName:"p"},"OSMTILE"),'", "',Object(r.b)("inlineCode",{parentName:"p"},"WGS84"),'", "',Object(r.b)("inlineCode",{parentName:"p"},"CBMTILE"),'" and "',Object(r.b)("inlineCode",{parentName:"p"},"APSTILE"),'".',Object(r.b)("br",{parentName:"p"}),"\n","The default projection is ",Object(r.b)("inlineCode",{parentName:"p"},"OSMTILE"),"."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"OSMTILE"),' corresponds to the widely-used "Web Mercator" projected coordinate reference system, implying a "tile pyramid" zoom range from 0 to 23 (minimum tile size ~2.4m).')),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"WGS84"),' provides an implementation of the "pseudo plate carr\xe9e" projected coordinate reference system, wherein the easting and northing axis units are decimal degrees (not meters). In ',Object(r.b)("inlineCode",{parentName:"p"},"WGS84"),", zoom level 0 contains two tiles that each cover a hemisphere of Earth's surface. ",Object(r.b)("inlineCode",{parentName:"p"},"WGS84")," is defined with 21 zoom levels (0 to 20).  ")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"CBMTILE")," is the de facto standard grid layout for the Canadian Geospatial Data Infrastructure (CGDI), defined by Natural Resources Canada, and is based on the Lambert Conformal Conic projection (EPSG:3978). Zoom levels are based on a numeric map scale denominator (e.g. 10000 corresponding to a map scale of 1:10,000), with a particular pixel resolution selected, and as a result, successive zoom levels' tiles do not nest exactly (as they do in ",Object(r.b)("inlineCode",{parentName:"p"},"OSMTILE"),", ",Object(r.b)("inlineCode",{parentName:"p"},"WGS84")," and ",Object(r.b)("inlineCode",{parentName:"p"},"APSTILE"),"). ")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"APSTILE")," is based on the Alaska Polar Stereographic (EPSG:5936) projected coordinate reference system, and has 20 zoom levels (0 to 19).")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"other projections are possible, using the ",Object(r.b)("a",{parentName:"p",href:"../api/custom-projections"},"Custom Projections API"),"."))),Object(r.b)("h3",{id:"zoom"},Object(r.b)("inlineCode",{parentName:"h3"},"zoom")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"zoom")," - a non-negative integer.  The value establishes the initial zoom level of the map.  For a small scale view of the world, use a lower value.  Use larger values for larger scales (smaller area maps). The maximum value depends on the particular ",Object(r.b)("inlineCode",{parentName:"p"},"projection")," and data source. Many map data sources have limited zoom levels available."),Object(r.b)("h3",{id:"lat"},Object(r.b)("inlineCode",{parentName:"h3"},"lat")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"lat")," - a real number latitude. The value establishes the initial latitude of the of the center of the map. Latitudes on Earth range from -90.0 (south) to 90.0 (north).  Many projections are not able to display all latitudes, and most projections have a limited range of locations where distortion is controlled or limited. In particular, OSMTILE (Web Mercator) can only display content between the latitude range -84 to 84."),Object(r.b)("h3",{id:"lon"},Object(r.b)("inlineCode",{parentName:"h3"},"lon")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"lon"),' - a real number longitude. The value establishes the initial longitude of the of the center of the map.Longitudes on Earth range from -180.0 (west) to 180.0 (east). Similar comments related to distortion apply to those for latitude. Be careful, this attribute is named "lon" NOT "long", and if you use "long" your map won\'t work properly.'),Object(r.b)("h3",{id:"controls"},Object(r.b)("inlineCode",{parentName:"h3"},"controls")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"controls"),' - a "boolean" attribute. Turns map controls on (if present) or off (if omitted). In HTML "boolean" attributes don\'t have values of "true" or "false" per se - they have the implied value of "true" if the attribute exists, and an implied value of "false" if the attribute is not present.  Sometimes the default map controls may not be useful for your map, so you may turn them off and design your own.'),Object(r.b)("h3",{id:"controlslist"},Object(r.b)("inlineCode",{parentName:"h3"},"controlslist")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"controlslist"),' - an enumerated attribute, possible values are: "',Object(r.b)("inlineCode",{parentName:"p"},"nofullscreen"),'", "',Object(r.b)("inlineCode",{parentName:"p"},"nolayer"),'", "',Object(r.b)("inlineCode",{parentName:"p"},"noreload"),'" and "',Object(r.b)("inlineCode",{parentName:"p"},"nozoom"),'".  Occasionally, you may not want your users to have access to a particular control, so you may prune the set of controls automatically presented (when you have used the ',Object(r.b)("inlineCode",{parentName:"p"},"controls")," boolean attribute)."),Object(r.b)("h2",{id:"api"},"API"),Object(r.b)("p",null,"A ",Object(r.b)("a",{parentName:"p",href:"/web-map-doc/docs/api/mapml-viewer-api"},Object(r.b)("inlineCode",{parentName:"a"},"<mapml-viewer> API"))," is available."))}s.isMDXComponent=!0},116:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return u}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),s=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=s(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,u=m["".concat(i,".").concat(d)]||m[d]||b[d]||r;return n?o.a.createElement(u,l(l({ref:t},c),{},{components:n})):o.a.createElement(u,l({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);