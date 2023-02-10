"use strict";(self.webpackChunkmapml_viewer_doc=self.webpackChunkmapml_viewer_doc||[]).push([[5943],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>c});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),m=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=m(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=m(a),c=r,k=d["".concat(i,".").concat(c)]||d[c]||u[c]||l;return a?n.createElement(k,o(o({ref:t},s),{},{components:a})):n.createElement(k,o({ref:t},s))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var m=2;m<l;m++)o[m]=a[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7294),r=a(6010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(7462),r=a(7294),l=a(6010),o=a(2389),p=a(7392),i=a(7094),m=a(2466);const s="tabList__CuJ",u="tabItem_LNqP";function d(e){const{lazy:t,block:a,defaultValue:o,values:d,groupId:c,className:k}=e,g=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=d??g.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),N=(0,p.l)(h,((e,t)=>e.value===t.value));if(N.length>0)throw new Error(`Docusaurus error: Duplicate values "${N.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===o?o:o??g.find((e=>e.props.default))?.props.value??g[0].props.value;if(null!==b&&!h.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:f,setTabGroupChoices:y}=(0,i.U)(),[v,w]=(0,r.useState)(b),j=[],{blockElementScrollPositionUntilNextRender:T}=(0,m.o5)();if(null!=c){const e=f[c];null!=e&&e!==v&&h.some((t=>t.value===e))&&w(e)}const M=e=>{const t=e.currentTarget,a=j.indexOf(t),n=h[a].value;n!==v&&(T(t),w(n),null!=c&&y(c,String(n)))},S=e=>{let t=null;switch(e.key){case"Enter":M(e);break;case"ArrowRight":{const a=j.indexOf(e.currentTarget)+1;t=j[a]??j[0];break}case"ArrowLeft":{const a=j.indexOf(e.currentTarget)-1;t=j[a]??j[j.length-1];break}}t?.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",s)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},k)},h.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,key:t,ref:e=>j.push(e),onKeyDown:S,onClick:M},o,{className:(0,l.Z)("tabs__item",u,o?.className,{"tabs__item--active":v===t})}),a??t)}))),t?(0,r.cloneElement)(g.filter((e=>e.props.value===v))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==v})))))}function c(e){const t=(0,o.Z)();return r.createElement(d,(0,n.Z)({key:String(t)},e))}},8808:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>p,metadata:()=>m,toc:()=>u});var n=a(7462),r=(a(7294),a(3905)),l=a(5488),o=a(5162);const p={id:"mapml-viewer-api",title:"HTMLMapmlViewerElement",slug:"/api/mapml-viewer-api"},i="HTMLMapmlViewerElement",m={unversionedId:"api/mapml-viewer-api",id:"api/mapml-viewer-api",title:"HTMLMapmlViewerElement",description:"The HTMLMapmlViewerElement interface represents the `` element.",source:"@site/docs/api/mapml-viewer-api.mdx",sourceDirName:"api",slug:"/api/mapml-viewer-api",permalink:"/web-map-doc/docs/api/mapml-viewer-api",draft:!1,tags:[],version:"current",frontMatter:{id:"mapml-viewer-api",title:"HTMLMapmlViewerElement",slug:"/api/mapml-viewer-api"},sidebar:"sidebar",previous:{title:"<map-style>",permalink:"/web-map-doc/docs/elements/style/"},next:{title:"HTMLLayerElement",permalink:"/web-map-doc/docs/api/layer-api"}},s={},u=[{value:"Properties",id:"properties",level:2},{value:"controls",id:"controls",level:3},{value:"controlslist",id:"controlslist",level:3},{value:"extent",id:"extent",level:3},{value:"lat",id:"lat",level:3},{value:"lon",id:"lon",level:3},{value:"projection",id:"projection",level:3},{value:"zoom",id:"zoom",level:3},{value:"Methods",id:"methods",level:2},{value:"back()",id:"back",level:3},{value:"forward()",id:"forward",level:3},{value:"reload()",id:"reload",level:3},{value:"toggleDebug()",id:"toggledebug",level:3},{value:"viewSource()",id:"viewsource",level:3},{value:"zoomTo(lat, lon, zoom)",id:"zoomtolat-lon-zoom",level:3},{value:"geojson2mapml(json, options)",id:"geojson2mapmljson-options",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Options",id:"options",level:4},{value:"Events",id:"events",level:2},{value:"Examples",id:"examples",level:2},{value:"geojson2mapml",id:"geojson2mapml",level:3},{value:"Basic options usage",id:"basic-options-usage",level:4},{value:"Options string",id:"options-string",level:4},{value:"Options function",id:"options-function",level:4},{value:"Default options",id:"default-options",level:4}],d={toc:u};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"htmlmapmlviewerelement"},"HTMLMapmlViewerElement"),(0,r.kt)("p",null,"The HTMLMapmlViewerElement interface represents the ",(0,r.kt)("inlineCode",{parentName:"p"},"<mapml-viewer>")," element."),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#controls"},"controls")),(0,r.kt)("td",{parentName:"tr",align:null},"Turns native map controls on or off. Reflects the controls attribute.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#controlslist"},"controlslist")),(0,r.kt)("td",{parentName:"tr",align:null},"Allows to change the set of native controls. Reflects the controlslist attribute.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#extent"},"extent")),(0,r.kt)("td",{parentName:"tr",align:null},"Returns the extent of the current map view. Read only.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#lat"},"lat")),(0,r.kt)("td",{parentName:"tr",align:null},"Get the map's latitude. Reflects the lat attribute. Read only.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#lon"},"lon")),(0,r.kt)("td",{parentName:"tr",align:null},"Get the map's longitude. Reflects the lon attribute. Read only.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#projection"},"projection")),(0,r.kt)("td",{parentName:"tr",align:null},"The map's projection. Reflects the projection attribute.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#zoom"},"zoom")),(0,r.kt)("td",{parentName:"tr",align:null},"The map's zoom level. Reflects the zoom attribute.")))),(0,r.kt)("h3",{id:"controls"},"controls"),(0,r.kt)("p",null,"To add controls to the map:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"let map = document.querySelector('mapml-viewer');\nmap.controls = true; // or false to remove controls\n")),(0,r.kt)("p",null,"To check whether the map has controls toggled on or off:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"let map = document.querySelector('mapml-viewer');\nlet controlsAdded = map.controls;\n")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"controlslist"},"controlslist"),(0,r.kt)("p",null,"To set the controlslist attribute:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"let map = document.querySelector('mapml-viewer');\nmap.controlslist = \"noreload\"; // values can be noreload | nofullscreen | nozoom | nolayer\n")),(0,r.kt)("p",null,"To get the value of the controlslist:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"let map = document.querySelector('mapml-viewer');\nlet controlsList = map.controlslist;\n")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"extent"},"extent"),(0,r.kt)("p",null,"To get the map's extent:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"let map = document.querySelector('mapml-viewer');\nlet extent = map.extent;\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"View Sample Extent"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'/**\n*extent = \n*  {\n*    {\n*      "topLeft": {\n*        "tcrs": [\n*          {\n*            "horizontal": 906.7586206896551,\n*            "vertical": 981.7241379310345\n*          },\n*          ...\n*        ],\n*        "tilematrix": [\n*          {\n*            "horizontal": 3.5420258620689653,\n*            "vertical": 3.8348599137931036\n*          },\n*          ...\n*        ],\n*        "gcrs": {\n*          "horizontal": -93.05456518322721,\n*          "vertical": 63.783997873304855\n*        },\n*        "pcrs": {\n*          "horizontal": 131686.24163915217,\n*          "vertical": 1646487.1729743406\n*        }\n*      },\n*      "bottomRight": {\n*        "tcrs": [\n*          {\n*            "horizontal": 914.9655172413793,\n*            "vertical": 1015.5172413793102\n*          },\n*          ...\n*        ],\n*        "tilematrix": [\n*          {\n*            "horizontal": 3.574084051724138,\n*            "vertical": 3.9668642241379306\n*          },\n*          ...\n*        ],\n*        "gcrs": {\n*          "horizontal": -85.62509797700041,\n*          "vertical": 52.14641630380798\n*        },\n*        "pcrs": {\n*          "horizontal": 446541.0380154103,\n*          "vertical": 350026.2467191592\n*        }\n*      },\n*      "projection": "CBMTILE",\n*      "zoom": {\n*        "minZoom": 0,\n*        "maxZoom": 25\n*      }\n*    }\n*  }\n*/\n'))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"lat"},"lat"),(0,r.kt)("p",null,"To set the latitude:"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/Maps4HTML/Web-Map-Custom-Element/issues/588"},"Needs to be implemented"),", currently doesn't pan the map on changes")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"let map = document.querySelector('mapml-viewer');\nmap.lat = 21.4; // if it's an invalid value, nothing happens\n")),(0,r.kt)("p",null,"To get the latitude:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"let map = document.querySelector('mapml-viewer');\nlet latitude = map.lat;\n")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"lon"},"lon"),(0,r.kt)("p",null,"To set the longitude:"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/Maps4HTML/Web-Map-Custom-Element/issues/588"},"Needs to be implemented"),", currently doesn't pan the map on changes")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"let map = document.querySelector('mapml-viewer');\nmap.lon = 21.4; // if it's an invalid value, nothing happens\n")),(0,r.kt)("p",null,"To get the longitude:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"let map = document.querySelector('mapml-viewer');\nlet longitude = map.lon;\n")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"projection"},"projection"),(0,r.kt)("p",null,"To set/update the projection:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"let map = document.querySelector('mapml-viewer');\nmap.projection = \"CBMTILE\"; // if it's an invalid/undefined projection, nothing happens\n")),(0,r.kt)("p",null,"To get the projection:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"let map = document.querySelector('mapml-viewer');\nlet projection = map.projection;\n")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"zoom"},"zoom"),(0,r.kt)("p",null,"To set the zoom:"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/Maps4HTML/Web-Map-Custom-Element/issues/588"},"Needs to be implemented"),", currently doesn't zoom the map on changes")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"let map = document.querySelector('mapml-viewer');\nmap.zoom = 3; // if it's an invalid value, nothing happens\n")),(0,r.kt)("p",null,"To get the longitude:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"let map = document.querySelector('mapml-viewer');\nlet zoom = map.zoom;\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Method"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#back"},"back()")),(0,r.kt)("td",{parentName:"tr",align:null},"Navigates back one state in the map's movement history.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#forward"},"forward()")),(0,r.kt)("td",{parentName:"tr",align:null},"Navigates forward in the map's panning history.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#reload"},"reload()")),(0,r.kt)("td",{parentName:"tr",align:null},"Clear the map's panning history and return to the starting location.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#toggledebug"},"toggleDebug()")),(0,r.kt)("td",{parentName:"tr",align:null},"Toggle the debug functionality of the map.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#viewsource"},"viewSource()")),(0,r.kt)("td",{parentName:"tr",align:null},"View the source of the map.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"../api/custom-projections"},"defineCustomProjection()")),(0,r.kt)("td",{parentName:"tr",align:null},"Define a ",(0,r.kt)("a",{parentName:"td",href:"../api/custom-projections"},"custom projection")," for use by the page.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#zoomtolat-lon-zoom"},"zoomTo(lat, lon, zoom)")),(0,r.kt)("td",{parentName:"tr",align:null},"Fly or pan the map to a (new) location and zoom level.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#zoomtolat-lon-zoom"},"geojson2mapml(json, options)")),(0,r.kt)("td",{parentName:"tr",align:null},"Add a GeoJSON Layer to the map.")))),(0,r.kt)("h3",{id:"back"},"back()"),(0,r.kt)("p",null,"To go back in the map's history:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"let map = document.querySelector('mapml-viewer');\nmap.back();\n")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"forward"},"forward()"),(0,r.kt)("p",null,"To go forward in the map's history:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"let map = document.querySelector('mapml-viewer');\nmap.forward();\n")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"reload"},"reload()"),(0,r.kt)("p",null,"To clear the map's history and return to the initial location:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"let map = document.querySelector('mapml-viewer');\nmap.reload();\n")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"toggledebug"},"toggleDebug()"),(0,r.kt)("p",null,"To toggle the map's debug mode:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"let map = document.querySelector('mapml-viewer');\nmap.toggleDebug();\n")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"viewsource"},"viewSource()"),(0,r.kt)("p",null,"To view the map's view source:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"let map = document.querySelector('mapml-viewer');\nmap.viewSource();\n")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"zoomtolat-lon-zoom"},"zoomTo(lat, lon, zoom)"),(0,r.kt)("p",null,"To change the map's center location and zoom level:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"var options = {\n  enableHighAccuracy: true,\n  timeout: 5000,\n  maximumAge: 0\n};\n\nfunction success(pos) {\n  var crd = pos.coords;\n\n  let map = document.querySelector('mapml-viewer');\n  map.zoomTo(crd.latitude,crd.longitude, 17); // hard-coded zoom\n  // could calculate a zoom based on accuracy of position\n  console.log(`More or less ${crd.accuracy} meters.`);\n}\n\nfunction error(err) {\n  console.warn(`ERROR(${err.code}): ${err.message}`);\n}\n\nnavigator.geolocation.getCurrentPosition(success, error, options);\n")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"geojson2mapmljson-options"},"geojson2mapml(json, options)"),(0,r.kt)("p",null,"Convert a GeoJSON feature or feature collection string or object to MapML ",(0,r.kt)("a",{parentName:"p",href:"/web-map-doc/docs/layers/layer/"},(0,r.kt)("inlineCode",{parentName:"a"},"<layer->"))," containing one or more ",(0,r.kt)("a",{parentName:"p",href:"/web-map-doc/docs/elements/feature/"},(0,r.kt)("inlineCode",{parentName:"a"},"<map-feature>"))," elements. Returns and adds the converted layer element to the map."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Check out ",(0,r.kt)("a",{parentName:"p",href:"https://maps4html.org/experiments/api/custom-map-ui/geoname-search-ui.html"},"this application")," using the geojson2mapml API!")),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"<String","\xa0","|","\xa0","Object>","\xa0","json"),(0,r.kt)("td",{parentName:"tr",align:null},"A GeoJSON string or object.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"<","Object",">"," options"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional. A set of key/value pairs that customize the output MapML layer. All options are optional and described below.")))),(0,r.kt)("h4",{id:"options"},"Options"),(0,r.kt)("p",null,"<","Object",">"," A set of key/value pairs that customize the output MapML layer. All options are optional and detailed below."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Option"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"label")),(0,r.kt)("td",{parentName:"tr",align:null},"<String",">"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"json.name"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"json.title"),' or "Layer"'),(0,r.kt)("td",{parentName:"tr",align:null},"Sets the output layer's ",(0,r.kt)("a",{parentName:"td",href:"/web-map-doc/docs/layers/layer/#label"},"label"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"projection")),(0,r.kt)("td",{parentName:"tr",align:null},"<String",">"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"map"),".",(0,r.kt)("a",{parentName:"td",href:"/web-map-doc/docs/elements/mapml-viewer/#projection"},"projection")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"OSMTILE")),(0,r.kt)("td",{parentName:"tr",align:null},"Sets the output layer's ",(0,r.kt)("a",{parentName:"td",href:"/web-map-doc/docs/elements/mapml-viewer/#projection"},"projection"),". Defined values include: ",(0,r.kt)("inlineCode",{parentName:"td"},"OSMTILE"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"CBMTILE"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"WGS84"),", and ",(0,r.kt)("inlineCode",{parentName:"td"},"APSTILE"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"caption")),(0,r.kt)("td",{parentName:"tr",align:null},"<String","\xa0","|","\xa0","Function",">"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"json.features[i].id")," or the ",(0,r.kt)("inlineCode",{parentName:"td"},"label")," value"),(0,r.kt)("td",{parentName:"tr",align:null},"A function that accepts the feature JSON and returns a string, OR a string that is the name of a property to be mapped to the ",(0,r.kt)("a",{parentName:"td",href:"/web-map-doc/docs/elements/feature/#map-featurecaption"},"featurecaption"),". If a matching property is not found, the string provided will be used as the feature caption value. See ",(0,r.kt)("a",{parentName:"td",href:"#basic-options-usage"},"basic options usage")," for an example.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{id:"option-properties"},(0,r.kt)("inlineCode",{parentName:"td"},"properties"))),(0,r.kt)("td",{parentName:"tr",align:null},"<Function","\xa0","|","\xa0","String","\xa0","|","\xa0","HTMLElement",">"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"Properties will be mapped to an HTML ",(0,r.kt)("a",{parentName:"em",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table"},"table"),".")),(0,r.kt)("td",{parentName:"tr",align:null},"Specifies how the properties are mapped. <Function",">"," - A function that accepts one argument - the GeoJSON feature object - and which must return an HTMLElement that becomes the single child element of the <properties",">"," element. <String",">"," - A string that will be parsed and used as the single child element of the ",(0,r.kt)("inlineCode",{parentName:"td"},"<properties>")," element for all features. <HTMLElement",">"," - an element that will be used as the single child element of ",(0,r.kt)("inlineCode",{parentName:"td"},"<properties>")," element for all features. See ",(0,r.kt)("a",{parentName:"td",href:"#basic-options-usage"},"basic options usage")," for an example.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"geometryFunction")),(0,r.kt)("td",{parentName:"tr",align:null},"<Function",">"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"MapML geometry will mirror the GeoJSON geometry value")),(0,r.kt)("td",{parentName:"tr",align:null},"<Function",">"," A function to modify the generated ",(0,r.kt)("a",{parentName:"td",href:"/web-map-doc/docs/elements/geometry/#child-elements"},"descendants")," of ",(0,r.kt)("inlineCode",{parentName:"td"},"<map-geometry>")," which can add classes, ",(0,r.kt)("a",{parentName:"td",href:"/web-map-doc/docs/other-elements/map-a/"},"hyperlinks")," and ",(0,r.kt)("a",{parentName:"td",href:"/web-map-doc/docs/other-elements/span/"},"span's")," to the instance. Plain ",(0,r.kt)("inlineCode",{parentName:"td"},"<map-geometry>")," element will be created by default. The function accepts two arguments: The generated ",(0,r.kt)("a",{parentName:"td",href:"/web-map-doc/docs/elements/geometry/#child-elements"},"child element")," of ",(0,r.kt)("inlineCode",{parentName:"td"},"<map-geometry>")," and the ",(0,r.kt)("a",{parentName:"td",href:"https://www.rfc-editor.org/rfc/rfc7946#section-3.2"},"feature json object")," to return a modified child element of the ",(0,r.kt)("inlineCode",{parentName:"td"},"<map-geometry>")," element. See ",(0,r.kt)("a",{parentName:"td",href:"#basic-options-usage"},"basic options usage")," for an example.")))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"events"},"Events"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Event name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"layerchange"),(0,r.kt)("td",{parentName:"tr",align:null},"Fired when a layer changes src, usually by the user following a link.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"load"),(0,r.kt)("td",{parentName:"tr",align:null},"Fired when all layers have finished loading content")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"click"),(0,r.kt)("td",{parentName:"tr",align:null},"Fired when the map receives both mousedown and mouseup events")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dblclick"),(0,r.kt)("td",{parentName:"tr",align:null},"Fired when the user double clicks or taps the map")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mousemove"),(0,r.kt)("td",{parentName:"tr",align:null},"Fired repeatedly as the mouse cursor traverses the map")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mouseover"),(0,r.kt)("td",{parentName:"tr",align:null},"Fired once as the mouse cursor enters the map")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mouseout"),(0,r.kt)("td",{parentName:"tr",align:null},"Fired once as the mouse cursor exits the map")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mousedown"),(0,r.kt)("td",{parentName:"tr",align:null},"Fired when the mouse's primary key is pressed down with cursor over the map")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mouseup"),(0,r.kt)("td",{parentName:"tr",align:null},"Fired when the mouse's primary key is released with cursor over the map")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"movestart"),(0,r.kt)("td",{parentName:"tr",align:null},"Fired before the map starts to move / viewport changes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"move"),(0,r.kt)("td",{parentName:"tr",align:null},"Fired repeatedly as the map moves.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"moveend"),(0,r.kt)("td",{parentName:"tr",align:null},"Fired after the map stops moving")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"zoomstart"),(0,r.kt)("td",{parentName:"tr",align:null},"Fired before the map changes zoom level")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"zoom"),(0,r.kt)("td",{parentName:"tr",align:null},"Fired repeatedly as the map changes zoom")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"zoomend"),(0,r.kt)("td",{parentName:"tr",align:null},"Fired after the map has changed zoom level")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"preclick"),(0,r.kt)("td",{parentName:"tr",align:null},"Fired before a click on the map is triggered.  May not be a primitive.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"contextmenu"),(0,r.kt)("td",{parentName:"tr",align:null},"Fired when user right-clicks or long presses on map. May not be a primitive.")))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("h3",{id:"geojson2mapml"},"geojson2mapml"),(0,r.kt)("h4",{id:"basic-options-usage"},"Basic options usage"),(0,r.kt)("p",null,"Showcasing how use each option."),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"label",label:"label",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="geojson2mapml label option"',title:'"geojson2mapml',label:!0,'option"':!0},'geojson2mapml(json, {label: "Downtown Ottawa"});\n'))),(0,r.kt)(o.Z,{value:"projection",label:"projection",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="geojson2mapml projection option"',title:'"geojson2mapml',projection:!0,'option"':!0},'geojson2mapml(json, {projection: "CBMTILE"});\n'))),(0,r.kt)(o.Z,{value:"caption",label:"caption",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="geojson2mapml caption option - function-valued"',title:'"geojson2mapml',caption:!0,option:!0,"-":!0,'function-valued"':!0},'// caption function\ngeojson2mapml(json, {caption: function(feature) {\n    return feature.properties.desc + ", not a Polygon";\n    }\n});\n// caption option string value referencing a property name\ngeojson2mapml(json, {caption: "desc"});\n'))),(0,r.kt)(o.Z,{value:"properties",label:"properties",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="geojson2mapml properties option - function-valued"',title:'"geojson2mapml',properties:!0,option:!0,"-":!0,'function-valued"':!0},'// properties function\ngeojson2mapml(json, {properties: function(feature) {\n    let parser = new DOMParser();\n    return parser.parseFromString("<h1>" + feature.properties.desc + "\'s property</h1>", "text/html").body.firstChild;\n    }\n});\n// properties option - string valued - make sure you sanitize user-supplied strings\ngeojson2mapml(json, {properties: "<p>This property was inserted using a properties string</p>"});\n'))),(0,r.kt)(o.Z,{value:"geometryFunction",label:"geometryFunction",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="geojson2mapml geometryFunction option"',title:'"geojson2mapml',geometryFunction:!0,'option"':!0},'let options = {\n                geometryFunction: function (g, f) {\n                  g.setAttribute("class", f.properties.class);\n                  return g;}\n              };\ngeojson2mapml(json, options);\n')))),(0,r.kt)("h4",{id:"options-string"},"Options string"),(0,r.kt)("p",null,"An example showcasing how strings can be used to set ",(0,r.kt)("inlineCode",{parentName:"p"},"label"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"projection"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"caption")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"properties")," options."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'let map = document.querySelector(\'mapml-viewer\');\nlet json = {\n    "name": "Default Name",\n    "type": "Feature",\n    "geometry": {\n        "type": "Point",\n        "coordinates": [-75.6916809,45.4186964]\n    },\n    "properties": {"desc": "This is a Point"}\n};\n\n// GeoJSON To MapML\nlet output = map.geojson2mapml(json, {label: "Example 1", projection: "CBMTILE", caption: "desc", properties: "<h3>This is a property heading</h3>"});\n')),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Click to view the output HTMLElement"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<layer- label="Example 1" checked="">\n   <map-meta name="projection" content="CBMTILE"></map-meta>\n   <map-meta name="cs" content="gcrs"></map-meta>\n   <map-feature>\n      <map-featurecaption>This is a Point</map-featurecaption>\n      <map-geometry>\n         <map-point>\n            <map-coordinates>-75.6916809 45.4186964</map-coordinates>\n         </map-point>\n      </map-geometry>\n      <map-properties>\n         <h3>This is a property heading</h3>\n      </map-properties>\n   </map-feature>\n</layer->\n'))),(0,r.kt)("h4",{id:"options-function"},"Options function"),(0,r.kt)("p",null,"An example showcasing how functions can be used to set ",(0,r.kt)("inlineCode",{parentName:"p"},"caption")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"properties")," options."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'let map = document.querySelector(\'mapml-viewer\');\nlet json = {\n    "name": "Default Name",\n    "type": "Feature",\n    "geometry": {\n        "type": "Point",\n        "coordinates": [-75.6916809,45.4186964]\n    },\n    "properties": {"desc": "This is a Point"}\n};\n\n// function to set caption\nlet cap = function c(j) {\n  let str = "This point is located at: (" + j.geometry.coordinates[0] + ", " + j.geometry.coordinates[1] + ").";\n  return str;\n}\n\n// function to set properties\nlet prop = function f(p) {\n  let parser = new DOMParser();\n  return parser.parseFromString("<h1>" + p.properties.desc + "\'s property</h1>", "text/html").body.firstChild;\n}\n\n// GeoJSON To MapML\nlet output = map.geojson2mapml(json, {label: "Example 2", caption: cap, properties: prop});\n')),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Click to view the output HTMLElement"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<layer- label="Example 2" checked="">\n   <map-meta name="projection" content="OSMTILE"></map-meta>\n   <map-meta name="cs" content="gcrs"></map-meta>\n   <map-feature>\n      <map-featurecaption>This point is located at: (-75.6916809, 45.4186964).</map-featurecaption>\n      <map-geometry>\n         <map-point>\n            <map-coordinates>-75.6916809 45.4186964</map-coordinates>\n         </map-point>\n      </map-geometry>\n      <map-properties>\n         <h1>This is a Point\'s property</h1>\n      </map-properties>\n   </map-feature>\n</layer->\n'))),(0,r.kt)("h4",{id:"default-options"},"Default options"),(0,r.kt)("p",null,"An example showcasing default output when no options are provided."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'let map = document.querySelector(\'mapml-viewer\');\nlet json = {\n "title": "Point Geometry",\n "bbox": [-75.916809, 45.886964, -75.516809, 45.26964],\n "type": "FeatureCollection",\n "features": [{\n     "type": "Feature",\n     "geometry": {\n         "type": "Point",\n         "coordinates": [-75.6916809, 45.4186964]\n     },\n     "properties": {\n         "prop0": "This is a Point"\n     }\n }]\n};\n\n// GeoJSON To MapML\nlet output = map.geojson2mapml(json);\n')),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Click to view the output HTMLElement"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<layer- label="Point Geometry" checked="">\n   <map-meta name="extent" content="top-left-longitude=-75.916809, top-left-latitude=45.886964, bottom-right-longitude=-75.516809,bottom-right-latitude=45.26964"></map-meta>\n   <map-meta name="projection" content="OSMTILE"></map-meta>\n   <map-meta name="cs" content="gcrs"></map-meta>\n   <map-feature>\n      <map-featurecaption>Point Geometry</map-featurecaption>\n      <map-geometry>\n         <map-point>\n            <map-coordinates>-75.6916809 45.4186964</map-coordinates>\n         </map-point>\n      </map-geometry>\n      <map-properties>\n         <table>\n            <thead>\n               <tr>\n                  <th role="columnheader" scope="col">Property name</th>\n                  <th role="columnheader" scope="col">Property value</th>\n               </tr>\n            </thead>\n            <tbody>\n               <tr>\n                  <th scope="row">prop0</th>\n                  <td itemprop="prop0">This is a Point</td>\n               </tr>\n            </tbody>\n         </table>\n      </map-properties>\n   </map-feature>\n</layer->\n'))),(0,r.kt)("hr",null))}c.isMDXComponent=!0}}]);