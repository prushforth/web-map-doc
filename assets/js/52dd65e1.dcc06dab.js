"use strict";(self.webpackChunkmapml_viewer_doc=self.webpackChunkmapml_viewer_doc||[]).push([[613],{3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return u}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),m=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=m(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=m(a),u=r,k=c["".concat(p,".").concat(u)]||c[u]||d[u]||l;return a?n.createElement(k,i(i({ref:t},s),{},{components:a})):n.createElement(k,i({ref:t},s))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var m=2;m<l;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},8060:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return m},toc:function(){return s},default:function(){return c}});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),i=["components"],o={id:"mapml-viewer",title:"<mapml-viewer>",slug:"/elements/mapml-viewer/"},p=void 0,m={unversionedId:"elements/mapml-viewer",id:"elements/mapml-viewer",title:"<mapml-viewer>",description:"The `` element is the main element you can use to put a custom Web map on your page.  To create a (really) simple Web map, you might use it like this:",source:"@site/docs/elements/mapml-viewer.md",sourceDirName:"elements",slug:"/elements/mapml-viewer/",permalink:"/web-map-doc/docs/elements/mapml-viewer/",tags:[],version:"current",frontMatter:{id:"mapml-viewer",title:"<mapml-viewer>",slug:"/elements/mapml-viewer/"},sidebar:"sidebar",previous:{title:"Building from source",permalink:"/web-map-doc/docs/building"},next:{title:"<layer->",permalink:"/web-map-doc/docs/layers/layer/"}},s=[{value:"Attributes",id:"attributes",children:[{value:"<code>projection</code>",id:"projection",children:[],level:3},{value:"<code>zoom</code>",id:"zoom",children:[],level:3},{value:"<code>lat</code>",id:"lat",children:[],level:3},{value:"<code>lon</code>",id:"lon",children:[],level:3},{value:"<code>controls</code>",id:"controls",children:[],level:3},{value:"<code>controlslist</code>",id:"controlslist",children:[],level:3}],level:2},{value:"Specifications",id:"specifications",children:[],level:2},{value:"Requirements",id:"requirements",children:[],level:2}],d={toc:s};function c(e){var t=e.components,a=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"<mapml-viewer>")," element is the main element you can use to put a custom Web map on your page.  To create a (really) simple Web map, you might use it like this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<!doctype html>\n<html lang="en">\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1">\n  <title>A Simple Web Map[tm]</title>\n  <script type="module" src="web-map/mapml-viewer.js"><\/script>\n  <style>\n    html, body {\n    height: 100%; /* These styles are required if you wish to use a % based\n                     height value on the mapml-viewer element. */\n    }\n  </style>\n</head>\n<body>\n  <mapml-viewer projection="OSMTILE" zoom="0" lat="0.0" lon="0.0" controls>\n    <layer- label="OpenStreetMap" src="https://geogratis.gc.ca/mapml/en/osmtile/osm/" checked></layer->\n  </mapml-viewer>\n</body>\n</html>    \n')),(0,l.kt)("iframe",{src:"../../../demo/mapml-viewer-demo/",title:"MapML Demo",height:"410",width:"100%",scrolling:"no",frameBorder:"0"}),(0,l.kt)("p",null,"Note that for the above example to run properly on your own site, you need to get a built copy of the ",(0,l.kt)("inlineCode",{parentName:"p"},"<mapml-viewer>")," project in your site's folder. In the example, the ",(0,l.kt)("inlineCode",{parentName:"p"},"<mapml-viewer>"),' files are copied into the folder named "web-map" in your site root folder. Your own site\'s path to these files will depend on how you structure your folders.'),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"<mapml-viewer>"),' is an "',(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements"},"autonomous custom element"),'" in HTML.  You can distinguish an autonomous custom element from a "native" HTML element by the "-" anywhere in the element name. Autonomous custom elements are supported by all modern browsers, but don\'t work in old browsers (e.g. Internet Explorer and old Edge).'),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"<mapml-viewer>")," element has several attributes to control the presentation and initial location of the map.  "),(0,l.kt)("h2",{id:"attributes"},"Attributes"),(0,l.kt)("h3",{id:"projection"},(0,l.kt)("inlineCode",{parentName:"h3"},"projection")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"projection"),' - an enumerated attribute. Case-sensitive values are: "',(0,l.kt)("inlineCode",{parentName:"p"},"OSMTILE"),'", "',(0,l.kt)("inlineCode",{parentName:"p"},"WGS84"),'", "',(0,l.kt)("inlineCode",{parentName:"p"},"CBMTILE"),'" and "',(0,l.kt)("inlineCode",{parentName:"p"},"APSTILE"),'".',(0,l.kt)("br",{parentName:"p"}),"\n","The default projection is ",(0,l.kt)("inlineCode",{parentName:"p"},"OSMTILE"),"."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"OSMTILE"),' corresponds to the widely-used "Web Mercator" projected coordinate reference system, implying a "tile pyramid" zoom range from 0 to 23 (minimum tile size ~2.4m).')),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"WGS84"),' provides an implementation of the "pseudo plate carr\xe9e" projected coordinate reference system, wherein the easting and northing axis units are decimal degrees (not meters). In ',(0,l.kt)("inlineCode",{parentName:"p"},"WGS84"),", zoom level 0 contains two tiles that each cover a hemisphere of Earth's surface. ",(0,l.kt)("inlineCode",{parentName:"p"},"WGS84")," is defined with 21 zoom levels (0 to 20).  ")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"CBMTILE")," is the de facto standard grid layout for the Canadian Geospatial Data Infrastructure (CGDI), defined by Natural Resources Canada, and is based on the Lambert Conformal Conic projection (EPSG:3978). Zoom levels are based on a numeric map scale denominator (e.g. 10000 corresponding to a map scale of 1:10,000), with a particular pixel resolution selected, and as a result, successive zoom levels' tiles do not nest exactly (as they do in ",(0,l.kt)("inlineCode",{parentName:"p"},"OSMTILE"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"WGS84")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"APSTILE"),"). ")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"APSTILE")," is based on the Alaska Polar Stereographic (EPSG:5936) projected coordinate reference system, and has 20 zoom levels (0 to 19).")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"other projections are possible, using the ",(0,l.kt)("a",{parentName:"p",href:"../../api/custom-projections"},"Custom Projections API"),"."))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"zoom"},(0,l.kt)("inlineCode",{parentName:"h3"},"zoom")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"zoom")," - a non-negative integer.  The value establishes the initial zoom level of the map.  For a small scale view of the world, use a lower value.  Use larger values for larger scales (smaller area maps). The maximum value depends on the particular ",(0,l.kt)("inlineCode",{parentName:"p"},"projection")," and data source. Many map data sources have limited zoom levels available."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"lat"},(0,l.kt)("inlineCode",{parentName:"h3"},"lat")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"lat")," - a real number latitude. The value establishes the initial latitude of the of the center of the map. Latitudes on Earth range from -90.0 (south) to 90.0 (north).  Many projections are not able to display all latitudes, and most projections have a limited range of locations where distortion is controlled or limited. In particular, OSMTILE (Web Mercator) can only display content between the latitude range -84 to 84."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"lon"},(0,l.kt)("inlineCode",{parentName:"h3"},"lon")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"lon"),' - a real number longitude. The value establishes the initial longitude of the of the center of the map.Longitudes on Earth range from -180.0 (west) to 180.0 (east). Similar comments related to distortion apply to those for latitude. Be careful, this attribute is named "lon" NOT "long", and if you use "long" your map won\'t work properly.'),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"controls"},(0,l.kt)("inlineCode",{parentName:"h3"},"controls")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"controls"),' - a "boolean" attribute. Turns map controls on (if present) or off (if omitted). In HTML "boolean" attributes don\'t have values of "true" or "false" per se - they have the implied value of "true" if the attribute exists, and an implied value of "false" if the attribute is not present.  Sometimes the default map controls may not be useful for your map, so you may turn them off and design your own.'),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"controlslist"},(0,l.kt)("inlineCode",{parentName:"h3"},"controlslist")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"controlslist"),' - an enumerated attribute, possible values are: "',(0,l.kt)("inlineCode",{parentName:"p"},"nofullscreen"),'", "',(0,l.kt)("inlineCode",{parentName:"p"},"nolayer"),'", "',(0,l.kt)("inlineCode",{parentName:"p"},"noreload"),'" and "',(0,l.kt)("inlineCode",{parentName:"p"},"nozoom"),'".  Occasionally, you may not want your users to have access to a particular control, so you may prune the set of controls automatically presented (when you have used the ',(0,l.kt)("inlineCode",{parentName:"p"},"controls")," boolean attribute)."),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"specifications"},"Specifications"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://maps4html.org/MapML/spec/#the-map-element-0"},"MapML map element"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://html.spec.whatwg.org/multipage/image-maps.html#the-map-element"},"HTML map element"))))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"requirements"},"Requirements"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/Maps4HTML/HTML-Map-Element-UseCases-Requirements/issues/new?title=-SUMMARIZE+THE+PROBLEM-&body=-DESCRIBE+THE+PROBLEM-"},"Report problems with these requirements on GitHub")),(0,l.kt)("p",null,(0,l.kt)("b",null,(0,l.kt)("span",{class:"requirement"},"requirement"),(0,l.kt)("span",{class:"enhancement"},"enhancement"),(0,l.kt)("span",{class:"impractical"},"impractical"),(0,l.kt)("span",{class:"undecided"},"undecided"),(0,l.kt)("span",{class:"discussion"},"under discussion"))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"}),(0,l.kt)("th",{parentName:"tr",align:"center"},"Spec"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Viewer"),(0,l.kt)("th",{parentName:"tr",align:"center"},"API"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://maps4html.org/HTML-Map-Element-UseCases-Requirements/#map-viewers-capabilities-rendering"},(0,l.kt)("strong",{parentName:"a"},"Rendering base layers (5.1)"))),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("div",{class:"requirement"},"Embed an interactive map viewer, using HTML markup\xa0(5.1.1)")),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("a",{parentName:"td",href:"https://maps4html.org/MapML/spec/#the-map-element-0"},"full")),(0,l.kt)("td",{parentName:"tr",align:"center"},"full"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("a",{parentName:"td",href:"https://maps4html.org/MapML/spec/#webidl-1442763376"},"full"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("div",{class:"enhancement"},"Generate a default map for a given area\xa0(5.1.2)")),(0,l.kt)("td",{parentName:"tr",align:"center"},"Not Planned"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Not Planned"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Not Planned")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("div",{class:"requirement"},"Display a basic map without JavaScript\xa0(5.1.5)")),(0,l.kt)("td",{parentName:"tr",align:"center"},"full"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("a",{parentName:"td",href:"http://maps4html.org/experiments/progressive-enhancement/"},"limited")),(0,l.kt)("td",{parentName:"tr",align:"center"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("div",{class:"requirement"},"Display map content in a users preferred language\xa0(5.1.6)")),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/Maps4HTML/HTML-Map-Element-UseCases-Requirements/issues/136"},"full")),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/Maps4HTML/mapml-extension"},"full")),(0,l.kt)("td",{parentName:"tr",align:"center"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://maps4html.org/HTML-Map-Element-UseCases-Requirements/#map-viewers-capabilities-locations"},(0,l.kt)("strong",{parentName:"a"},"Interpreting locations and map positions (5.3)"))),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("div",{class:"requirement"},"Select map view from latitude and longitude point\xa0(5.3.1)")),(0,l.kt)("td",{parentName:"tr",align:"center"},"full"),(0,l.kt)("td",{parentName:"tr",align:"center"},"full"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("a",{parentName:"td",href:"https://maps4html.org/web-map-doc/docs/api/mapml-viewer-api#zoomtolat-lon-zoom"},"full"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("div",{class:"undecided"},"Display map tiles defined in various common coordinate systems\xa0(5.3.3)")),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/Maps4HTML/HTML-Map-Element-UseCases-Requirements/issues/14"},"full")),(0,l.kt)("td",{parentName:"tr",align:"center"},"full"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("a",{parentName:"td",href:"https://maps4html.org/web-map-doc/docs/api/custom-projections"},"full"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("div",{class:"undecided"},"Reproject map tile data into a new projection or globe view\xa0(5.3.4)")),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/Maps4HTML/HTML-Map-Element-UseCases-Requirements/issues/3"},"under discussion")),(0,l.kt)("td",{parentName:"tr",align:"center"},"none"),(0,l.kt)("td",{parentName:"tr",align:"center"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("div",{class:"undecided"},"Save the location or export to other application\xa0(5.3.5)")),(0,l.kt)("td",{parentName:"tr",align:"center"},"limited"),(0,l.kt)("td",{parentName:"tr",align:"center"},"limited"),(0,l.kt)("td",{parentName:"tr",align:"center"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://maps4html.org/HTML-Map-Element-UseCases-Requirements/#map-viewers-capabilities-user-navigation"},(0,l.kt)("strong",{parentName:"a"},"User navigation (pan and zoom) (5.4)"))),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("div",{class:"requirement"},"Zoom the map independently from the rest of the page (5.4.1)")),(0,l.kt)("td",{parentName:"tr",align:"center"},"full"),(0,l.kt)("td",{parentName:"tr",align:"center"},"full"),(0,l.kt)("td",{parentName:"tr",align:"center"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("div",{class:"requirement"},"Pan the map display (5.4.2)")),(0,l.kt)("td",{parentName:"tr",align:"center"},"full"),(0,l.kt)("td",{parentName:"tr",align:"center"},"full"),(0,l.kt)("td",{parentName:"tr",align:"center"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("div",{class:"undecided"},"Wrap/duplicate data tiles when panning around the globe (5.4.4)")),(0,l.kt)("td",{parentName:"tr",align:"center"},"none"),(0,l.kt)("td",{parentName:"tr",align:"center"},"partial"),(0,l.kt)("td",{parentName:"tr",align:"center"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://maps4html.org/HTML-Map-Element-UseCases-Requirements/#map-viewers-capabilities-custom-styling"},(0,l.kt)("strong",{parentName:"a"},"Custom styling (5.5)"))),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("div",{class:"undecided"},"Apply custom styling to map controls\xa0(5.5.2)")),(0,l.kt)("td",{parentName:"tr",align:"center"},"none"),(0,l.kt)("td",{parentName:"tr",align:"center"},"none"),(0,l.kt)("td",{parentName:"tr",align:"center"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("div",{class:"undecided"},"Toggle whether default controls are displayed\xa0(5.5.3)")),(0,l.kt)("td",{parentName:"tr",align:"center"},"full"),(0,l.kt)("td",{parentName:"tr",align:"center"},"full"),(0,l.kt)("td",{parentName:"tr",align:"center"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://maps4html.org/HTML-Map-Element-UseCases-Requirements/#client-apis-map-viewport"},(0,l.kt)("strong",{parentName:"a"},"Controlling the displayed map view and responding to user actions\xa0(6.2)"))),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("div",{class:"requirement"},"Subscribe to notifications of map events\xa0(6.2.3)")),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("a",{parentName:"td",href:"https://maps4html.org/web-map-doc/docs/api/mapml-viewer-api#events"},"pending")),(0,l.kt)("td",{parentName:"tr",align:"center"},"limited"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("a",{parentName:"td",href:"https://maps4html.org/web-map-doc/docs/api/mapml-viewer-api#events"},"full"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("div",{class:"requirement"},"Move the map to display a given location\xa0(6.2.5)")),(0,l.kt)("td",{parentName:"tr",align:"center"},"full"),(0,l.kt)("td",{parentName:"tr",align:"center"},"full"),(0,l.kt)("td",{parentName:"tr",align:"center"})))),(0,l.kt)("hr",null),(0,l.kt)("blockquote",null,(0,l.kt)("ul",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/Maps4HTML/web-map-doc/edit/main/docs/elements/mapml-viewer.md"},"Edit this page on ",(0,l.kt)("strong",{parentName:"a"},"Github"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://gitter.im/Maps4HTML/chat"},"Chat with us on ",(0,l.kt)("strong",{parentName:"a"},"Gitter"))))))}c.isMDXComponent=!0}}]);