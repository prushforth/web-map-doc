"use strict";(self.webpackChunkmapml_viewer_doc=self.webpackChunkmapml_viewer_doc||[]).push([[5584],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=p(a),h=i,c=u["".concat(s,".").concat(h)]||u[h]||m[h]||r;return a?n.createElement(c,l(l({ref:t},d),{},{components:a})):n.createElement(c,l({ref:t},d))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<r;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},974:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var n=a(7462),i=(a(7294),a(3905));const r={id:"input",title:"<map-input>",slug:"/elements/input/"},l=void 0,o={unversionedId:"elements/input",id:"elements/input",title:"<map-input>",description:"The ` element is an extended HTML input by type` for use in Web",source:"@site/docs/elements/input.md",sourceDirName:"elements",slug:"/elements/input/",permalink:"/web-map-doc/docs/elements/input/",draft:!1,tags:[],version:"current",frontMatter:{id:"input",title:"<map-input>",slug:"/elements/input/"},sidebar:"sidebar",previous:{title:"<map-extent>",permalink:"/web-map-doc/docs/elements/extent/"},next:{title:"<map-datalist>",permalink:"/web-map-doc/docs/elements/datalist/"}},s={},p=[{value:"Attributes",id:"attributes",level:2},{value:"<code>name</code>",id:"name",level:3},{value:"<code>type</code>",id:"type",level:3},{value:"<code>value</code>",id:"value",level:3},{value:"<code>axis</code>",id:"axis",level:3},{value:"<code>units</code>",id:"units",level:3},{value:"<code>position</code>",id:"position",level:3},{value:"<code>rel</code>",id:"rel",level:3},{value:"<code>min</code>",id:"min",level:3},{value:"<code>max</code>",id:"max",level:3},{value:"<code>step</code>",id:"step",level:3},{value:"<code>shard</code>",id:"shard",level:3},{value:"<code>list</code>",id:"list",level:3},{value:"Examples",id:"examples",level:2},{value:"Input step",id:"input-step",level:3},{value:"Input rel=tile to generate WMS requests for tiles",id:"input-reltile-to-generate-wms-requests-for-tiles",level:3},{value:"Specifications",id:"specifications",level:2}],d={toc:p};function m(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"<map-input>")," element is an extended HTML ",(0,i.kt)("inlineCode",{parentName:"p"},"input")," by ",(0,i.kt)("inlineCode",{parentName:"p"},"type")," for use in Web\nmap ",(0,i.kt)("inlineCode",{parentName:"p"},"<map-extent>")," elements.  The attributes that apply to the input depend on\nthe ",(0,i.kt)("inlineCode",{parentName:"p"},"type")," attribute.  There are several types of ",(0,i.kt)("inlineCode",{parentName:"p"},"<map-input>")," that can be used."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"<map-input>")," declares a variable that will be set and used by the polyfill\naccording to its attributes, as the map changes viewport extent in response to\nuser gestures."),(0,i.kt)("iframe",{src:"../../../demo/map-input-demo/",title:"MapML Demo",height:"410",width:"100%",scrolling:"no",frameBorder:"0"}),(0,i.kt)("h2",{id:"attributes"},"Attributes"),(0,i.kt)("h3",{id:"name"},(0,i.kt)("inlineCode",{parentName:"h3"},"name")),(0,i.kt)("p",null,"Sets the name of the variable created by the input. The variable can then be\nreferenced by the URL template ",(0,i.kt)("inlineCode",{parentName:"p"},"<map-link>")," ",(0,i.kt)("a",{parentName:"p",href:"../link#tref"},"tref attribute"),",\nusing the ",(0,i.kt)("inlineCode",{parentName:"p"},"{name}")," variable reference notation."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"type"},(0,i.kt)("inlineCode",{parentName:"h3"},"type")),(0,i.kt)("p",null,"  Sets the ",(0,i.kt)("strong",{parentName:"p"},"type")," of the input."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"zoom"),(0,i.kt)("td",{parentName:"tr",align:null},"Integer value that ranges from 0 to some fixed number of values, depending on the projection, less than or equal to 25.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"location"),(0,i.kt)("td",{parentName:"tr",align:null},"A location input captures ",(0,i.kt)("strong",{parentName:"td"},"one")," ",(0,i.kt)("inlineCode",{parentName:"td"},"axis")," value of a two-dimensional point ( represented by a coordinate pair) from the map extent, e.g. ",(0,i.kt)("inlineCode",{parentName:"td"},"top-right"),", or, for server queries, the location in the map where the user clicks or touches.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"width"),(0,i.kt)("td",{parentName:"tr",align:null},"A width input captures the width of the map viewport's extent in standardized pixels")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"height"),(0,i.kt)("td",{parentName:"tr",align:null},"A height input captures the height of the map viewport's extent in standardized pixels")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"hidden"),(0,i.kt)("td",{parentName:"tr",align:null},"Establishes a variable that may be used to pass a fixed or ",(0,i.kt)("a",{parentName:"td",href:"#shard"},"fixed domain of values")," to the server when requesting map resources.")))),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"value"},(0,i.kt)("inlineCode",{parentName:"h3"},"value")),(0,i.kt)("p",null,"In general, the ",(0,i.kt)("inlineCode",{parentName:"p"},"value")," is set and used by the polyfill when generating URLs from\n",(0,i.kt)("a",{parentName:"p",href:"../link#tref"},"URL templates"),", for fetching server resources such as tiles, images\nand map documents."),(0,i.kt)("p",null,"In particular, ",(0,i.kt)("inlineCode",{parentName:"p"},"value")," is used by authors  to specify values for inputs of\n",(0,i.kt)("inlineCode",{parentName:"p"},'type="zoom"'),". In the case of ",(0,i.kt)("inlineCode",{parentName:"p"},'type="zoom"'),", ",(0,i.kt)("inlineCode",{parentName:"p"},"value")," defines the zoom level of\n",(0,i.kt)("em",{parentName:"p"},"associated")," ",(0,i.kt)("strong",{parentName:"p"},"sibling")," ",(0,i.kt)("inlineCode",{parentName:"p"},'<map-input type="location">')," elements' ",(0,i.kt)("inlineCode",{parentName:"p"},"min")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"max"),"\nattribute values.  Allows authors to establish native / server resource bounds,\non a per-",(0,i.kt)("inlineCode",{parentName:"p"},'<map-link tref="...">')," basis."),(0,i.kt)("p",null,"Inputs are ",(0,i.kt)("em",{parentName:"p"},"associated")," by their variables being referenced by a\n",(0,i.kt)("inlineCode",{parentName:"p"},'<map-link tref="https://example.org/{z}/{col}/{row}/" ...>')," value.  The ",(0,i.kt)("inlineCode",{parentName:"p"},"{z}"),",\n",(0,i.kt)("inlineCode",{parentName:"p"},"{row}"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"{col}")," variable references in the above example associate the\nvariables (",(0,i.kt)("inlineCode",{parentName:"p"},"<map-input>"),"'s) named ",(0,i.kt)("strong",{parentName:"p"},"z"),", ",(0,i.kt)("strong",{parentName:"p"},"row")," and ",(0,i.kt)("strong",{parentName:"p"},"col"),"."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"axis"},(0,i.kt)("inlineCode",{parentName:"h3"},"axis")),(0,i.kt)("p",null,"This attribute applies only to inputs of ",(0,i.kt)("inlineCode",{parentName:"p"},'type="location"'),". It establishes the axis\nof the coordinate to be serialized as ",(0,i.kt)("a",{parentName:"p",href:"#"},"a named variable"),". This value also\nidentifies the axis that the ",(0,i.kt)("inlineCode",{parentName:"p"},"min")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"max")," attributes apply to, so that the\npolyfill will not make requests for spatial resources (tiles etc) outside the\nnative axis bounds. Possible values of ",(0,i.kt)("inlineCode",{parentName:"p"},"axis")," are:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Axis name"),(0,i.kt)("th",{parentName:"tr",align:null},"CRS"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"row")),(0,i.kt)("td",{parentName:"tr",align:null},"tilematrix"),(0,i.kt)("td",{parentName:"tr",align:null},"Vertical axis, positive down the screen. The origin is at the upper left. Units are tiles. Each zoom level is a distinct tilematrix crs, so coordinate values apply only to that zoom level.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"column")),(0,i.kt)("td",{parentName:"tr",align:null},"tilematrix"),(0,i.kt)("td",{parentName:"tr",align:null},"Horizontal axis, positive to the right. The origin is at the upper left. Units are tiles. Each zoom level is a distinct tilematrix crs, so coordinate values apply only to that zoom level.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"easting")),(0,i.kt)("td",{parentName:"tr",align:null},"pcrs"),(0,i.kt)("td",{parentName:"tr",align:null},"Horizontal axis, positive to the right. The origin is defined a geographic location. Units are ususally meters, although for some projections (specifically WGS84), the transformation from geographic CRS, i.e. from longitude to easting is the ",(0,i.kt)("a",{parentName:"td",href:"https://www.thefreedictionary.com/Identity+transformation"},"identity transformation"),", in which case the easting values could be ",(0,i.kt)("em",{parentName:"td"},"said")," to be in decimal degrees. ",(0,i.kt)("strong",{parentName:"td"},"pcrs")," stands for \"projected coordinate reference system\". Note that because pcrs is an 'infinite canvas', there exist locations for which a transformation from pcrs coordinates to gcrs coordinates is undefined.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"northing")),(0,i.kt)("td",{parentName:"tr",align:null},"pcrs"),(0,i.kt)("td",{parentName:"tr",align:null},"Vertical axis, positive to the right. The origin is defined a geographic location. Units are ususally meters, although for some projections (specifically WGS84), the transformation from geographic CRS, i.e. from latitude to northing is the ",(0,i.kt)("a",{parentName:"td",href:"https://www.thefreedictionary.com/Identity+transformation"},"identity transformation"),", in which case the northing values could be ",(0,i.kt)("em",{parentName:"td"},"said")," to be decimal degrees. Note that because pcrs is an 'infinite canvas', there exist locations for which a transformation from pcrs coordinates to gcrs coordinates is undefined.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"latitude")),(0,i.kt)("td",{parentName:"tr",align:null},"gcrs"),(0,i.kt)("td",{parentName:"tr",align:null},"The latitude of a point on an ellipsoid is the angle between a line perpendicular to the surface of the ellipsoid at the given point and the plane of the equator. ",(0,i.kt)("strong",{parentName:"td"},"gcrs"),' stands for "geographic coordinate reference system".')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"longitude")),(0,i.kt)("td",{parentName:"tr",align:null},"gcrs"),(0,i.kt)("td",{parentName:"tr",align:null},"The longitude of a point specifies its east\u2013west position on the reference body's (Earth's) surface.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"x")),(0,i.kt)("td",{parentName:"tr",align:null},"tcrs"),(0,i.kt)("td",{parentName:"tr",align:null},"Horizontal axis, positive to the right. The origin is at the upper left. Units are defined-size pixels. Each zoom level is a distinct tcrs, so coordinate values apply only to that zoom level. ",(0,i.kt)("strong",{parentName:"td"},"tcrs"),' stands for "tiled coordinate reference system".  The tiles of each ',(0,i.kt)("strong",{parentName:"td"},"tilematrix")," crs are defined as aggregations of pixels in the corresponding zoom level ",(0,i.kt)("strong",{parentName:"td"},"tcrs"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"y")),(0,i.kt)("td",{parentName:"tr",align:null},"tcrs"),(0,i.kt)("td",{parentName:"tr",align:null},"Vertical axis, positive down the screen. The origin is at the upper left. Units are defined-size pixels. The origin is at the upper left. Units are scaled pixels. Each zoom level is a distinct tcrs, so coordinate values apply only to that zoom level.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"i")),(0,i.kt)("td",{parentName:"tr",align:null},"tile, map"),(0,i.kt)("td",{parentName:"tr",align:null},"Horizontal axis, positive to the right. Each tile, and the map viewport, has a defined-size pixel-based crs that has its origin at the upper left (of each tile in the case of the ",(0,i.kt)("strong",{parentName:"td"},"tile")," crs, and of the map viewport, in the case of the ",(0,i.kt)("strong",{parentName:"td"},"map")," crs).")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"j")),(0,i.kt)("td",{parentName:"tr",align:null},"tile, map"),(0,i.kt)("td",{parentName:"tr",align:null},"Vertical axis, positive down the screen. Each individual tile, and the map viewport has a defined-size pixel-based crs that has its origin at the upper left (of each tile in the case of the ",(0,i.kt)("strong",{parentName:"td"},"tile")," crs, and of the map viewport, in the case of the ",(0,i.kt)("strong",{parentName:"td"},"map")," crs).")))),(0,i.kt)("p",null,"When requesting a the coordinate axis of whole tile in the ",(0,i.kt)("inlineCode",{parentName:"p"},"OSMTILE")," projection,\na location input might use a ",(0,i.kt)("inlineCode",{parentName:"p"},'<map-input name="y" type="location" units="tilematrix" axis="row">'),"\ninput to establish a variable named ",(0,i.kt)("strong",{parentName:"p"},"y"),", referenced by ",(0,i.kt)("inlineCode",{parentName:"p"},"{y}")," in an associated URL template,\nwhich would serialize the ",(0,i.kt)("strong",{parentName:"p"},"tilematrix")," crs ",(0,i.kt)("inlineCode",{parentName:"p"},"row")," axis values.  A series of\nlocation events is genereated by the polyfill as required by the map to cover\nthe viewport in tiles.  "),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"units"},(0,i.kt)("inlineCode",{parentName:"h3"},"units")),(0,i.kt)("p",null,'Identifies the associated specific coordinate reference system that a location\ninput event is referred to.  The term "projection" in MapML is synonymous with the set\nof CRS that are related together by the projection name. In all cases for any projection,\nthere exist a set of CRS that are related mathematically. These CRS are known\nand identified within the namespace of the projection name by the following\ntable of keyword values:'),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"CRS"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"tcrs"),(0,i.kt)("td",{parentName:"tr",align:null},"For each zoom level (i.e. at a pre-defined scale denominator value), locations are expressed in terms of scaled pixels, with the origin of pixel space at the upper left corner.  The pixel coordinates of a location at a single zoom level are independent of the pixel coordinates of a location any other zoom level.  In other words, you need to know the zoom level of a tcrs coordinate in order to locate it on a map or otherwise process it.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"tilematrix"),(0,i.kt)("td",{parentName:"tr",align:null},"Each zoom level has an array of tiles, called a tilematrix.  The individual tiles constitute the coordinates in this CRS, and the axes are know as ",(0,i.kt)("inlineCode",{parentName:"td"},"row")," and ",(0,i.kt)("inlineCode",{parentName:"td"},"column"),".  The tiles are defined as squares of 256 pixels in the associated tcrs of the particular zoom level.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"pcrs"),(0,i.kt)("td",{parentName:"tr",align:null},'Projected CRS (pcrs) are defined by a mathematical relationship with an underlying gcrs, using a technique called "projection". pcrs coordinates are scale- and zoom level-independent, and are designed to represent geographic coordinates on a planar surface, such as a device screen. The measurement units of pcrs coordinates is ',(0,i.kt)("em",{parentName:"td"},"usually")," meters (a notable exception being pcrs coordinates in the ",(0,i.kt)("inlineCode",{parentName:"td"},"WGS84")," projection).")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"gcrs"),(0,i.kt)("td",{parentName:"tr",align:null},"Geographic coordinates are referenced to various ellipsoids, and are not necessarily comparable across projections.  A common ellipsoid today is WGS 84, which is defined and used by the global positioning satellite (GPS) constellation.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"map"),(0,i.kt)("td",{parentName:"tr",align:null},"The map CRS is dynamic, in the sense that it has its origin at the upper left of the user's viewport, with scaled pixels as units.  This is used to identify image coordinates for use, typically by WMS and similar services which use a virtual image to enable query of map feature property information, without necessarily transferring the features over the network.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"tile"),(0,i.kt)("td",{parentName:"tr",align:null},"Each tile in any zoom level has an implicit scaled-pixel coordinate system ranging from 0 to 255 in both horizontal and vertical directions. These coordinates are used by WMTS and similar services to identify a pixel for query of feature property values, without transferring the feature geometry over the network.")))),(0,i.kt)("p",null,'Sometimes, location inputs are used to generate "brownie-cutter" (square) requests\nfor tiles from WMS and similar un-tiled services.  In such a case, it is possible\nfor the ',(0,i.kt)("inlineCode",{parentName:"p"},"units")," to be specified as ",(0,i.kt)("inlineCode",{parentName:"p"},"tilematrix"),", implying that the location event\nexpected is that of a tile, and the ",(0,i.kt)("inlineCode",{parentName:"p"},"position")," keyword is then used to describe\nthe corner of the tile for which the coordinate should be serialized.  In such a\ncase, the ",(0,i.kt)("inlineCode",{parentName:"p"},"axis")," value may be specified as ",(0,i.kt)("inlineCode",{parentName:"p"},"easting")," or other axis name",(0,i.kt)("br",{parentName:"p"}),"\n","associated with the projection, to obtain coordinate of the corner of the tile\nthat is being processed by the polyfill: "),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'<map-input name="xmin" type="location" units="tilematrix" position="top-left" axis="easting">')),(0,i.kt)("p",null,"Internally, the crs of the requested coordinate is deduced from the axis\nname, instead of requiring the author to explicitly specify the axis' crs as an\nadditional attribute of the ",(0,i.kt)("inlineCode",{parentName:"p"},"<map-input>"),". "),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"position"},(0,i.kt)("inlineCode",{parentName:"h3"},"position")),(0,i.kt)("p",null,"Allows the author to specify a predefined corner of the viewport or tile to be used\nas the location value to be serialized. If ",(0,i.kt)("inlineCode",{parentName:"p"},"position")," is not present, the input\nlocation coordinates will be generated by user click or touch on the map, which\nis used to generate interactive server queries."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"position keyword"),(0,i.kt)("th",{parentName:"tr",align:null},"keyword description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"top-left"),(0,i.kt)("td",{parentName:"tr",align:null},"Identifies the location at the top left corner of the tile or viewport")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"top-right"),(0,i.kt)("td",{parentName:"tr",align:null},"Identifies the location at the top right corner of the tile or viewport")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"bottom-left"),(0,i.kt)("td",{parentName:"tr",align:null},"Identifies the location at the bottom left corner of the tile or viewport")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"bottom-right"),(0,i.kt)("td",{parentName:"tr",align:null},"Identifies the location at the bottom right corner of the tile or viewport")))),(0,i.kt)("p",null,"Other values of ",(0,i.kt)("inlineCode",{parentName:"p"},"position")," are possible, but are not implemented yet."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"rel"},(0,i.kt)("inlineCode",{parentName:"h3"},"rel")),(0,i.kt)("p",null,"Specifies the entity to which the ",(0,i.kt)("inlineCode",{parentName:"p"},"position")," applies. Possible values are ",(0,i.kt)("inlineCode",{parentName:"p"},"tile")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"image"),".\nThe default value, if unspecified, is ",(0,i.kt)("inlineCode",{parentName:"p"},"image"),".  It is used to help identify what crs the\ncoordinate serialized by the input exists in. "),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"min"},(0,i.kt)("inlineCode",{parentName:"h3"},"min")),(0,i.kt)("p",null,"Establishes the minimum of the axis on the server .  Requests for coordinates less than\nthis value will not be created by the polyfill. "),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"max"},(0,i.kt)("inlineCode",{parentName:"h3"},"max")),(0,i.kt)("p",null,"Establishes the maximum of the axis on the server.  Requests for coordinates greater than\nthis value will not be created by the polyfill."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"step"},(0,i.kt)("inlineCode",{parentName:"h3"},"step")),(0,i.kt)("p",null,"Sets the zoom interval according to which resources will be requested within the\nzoom range. The step is always calculated from a base value of 0.  At zoom values\nthat fall within a step interval, resources will be requested as required, and\nscaled to the current zoom level.  For example, with a min=0 and a max=7 for\na given zoom input with a step=4, tiles will be requested at only zoom=0 and scaled\nto zoom values of 1, 2 and 3 as the map is rendered at those levels.  Use of this\nattribute can conserve user bandwidth while having little visual effect, depending\non the nature of the content."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"shard"},(0,i.kt)("inlineCode",{parentName:"h3"},"shard")),(0,i.kt)("p",null,"The boolean ",(0,i.kt)("inlineCode",{parentName:"p"},"shard")," attribute is used with a ",(0,i.kt)("inlineCode",{parentName:"p"},"hidden")," variable."),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},'<map-input shard list="datalist-id>')," indicates that a set of values specified\nby an associated ",(0,i.kt)("inlineCode",{parentName:"p"},"map-datalist")," element will be used in a round-robin fashion for\ntemplate variable substitution and submission in map requests.  This is useful for\n",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Glossary/Domain_sharding"},"domain sharding"),",\nimplemented by OpenStreetMap (for example), to increase parallelism of tile requests\nand thereby to improve performance. "),(0,i.kt)("p",null,"When specifying a boolean attribute such as ",(0,i.kt)("inlineCode",{parentName:"p"},"shard")," in MapML,\ncare must be taken to encode the attribute according to the document / media type in\nwhich the element is being used.  In XML documents, boolean attributes must be\nencoded as ",(0,i.kt)("inlineCode",{parentName:"p"},'shard="anything"'),", so as to respect XML parsing rules. In the\nHTML document, i.e. as inline layer content, the attribute should be encoded per\nHTML's ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes#boolean_attributes"},"boolean attribute rules"),"."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"list"},(0,i.kt)("inlineCode",{parentName:"h3"},"list")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},'<map-input list="...">')," attribute associates a ",(0,i.kt)("inlineCode",{parentName:"p"},"<map-datalist>")," element that\nprovides the values to be used (via the ",(0,i.kt)("inlineCode",{parentName:"p"},"<map-datalist>"),"'s child ",(0,i.kt)("inlineCode",{parentName:"p"},"<map-option>"),"\nelements).  See ",(0,i.kt)("a",{parentName:"p",href:"#shard"},"shard")," for more details."),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("h3",{id:"input-step"},"Input step"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<mapml-viewer projection="OSMTILE" zoom="0" lat="45.409071" lon="-75.703411" controls>\n  <layer- label="OpenStreetMap" checked>\n    <map-extent units="OSMTILE" >\n      <map-input name="z" type="zoom"  value="18" min="0" max="18" step="3"></map-input>\n      <map-input name="s" type="hidden" shard="true" list="servers"></map-input>\n      <map-datalist id="servers">\n        <map-option value="a"></map-option>\n        <map-option value="b"></map-option>\n        <map-option value="c"></map-option>\n      </map-datalist>\n      <map-input name="x" type="location" units="tilematrix" axis="column" min="0"  max="262144" ></map-input>\n      <map-input name="y" type="location" units="tilematrix" axis="row" min="0"  max="262144" ></map-input>\n      <map-link rel="tile" tref="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />\n    </map-extent>\n  </layer->\n</mapml-viewer>\n')),(0,i.kt)("h3",{id:"input-reltile-to-generate-wms-requests-for-tiles"},"Input rel=tile to generate WMS requests for tiles"),(0,i.kt)("p",null,"WMS behaviour can seem slow, even when it is fast. Painting the map using tiles\ngenerated by individual WMS GetMap requests can improve users' impression of your\nmap, although it is not advisable when the layer being requested contains text\nlabels, which may be duplicated on adjacent tiles many times over."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<mapml-viewer projection="CBMTILE" lat="60" lon="-95" zoom="2" controls>\n  <layer- label="Tiled WMS GetMap" checked>\n    <map-extent units="CBMTILE">\n      \x3c!-- the units and axis attributes here appear at odds --\x3e \n      \x3c!-- however for rel="tile" and units="tilematrix" together tell the map that\n           the event being serialized is relative to a tile in a tilematrix coordinate\n           system (tcrs) --\x3e\n      <map-input name="txmin" type="location" rel="tile" position="top-left" axis="easting" units="tilematrix" ></map-input>\n      \x3c!-- in this case, position refers to a position on the tile that is to be fetched --\x3e\n      <map-input name="tymin" type="location" rel="tile" position="bottom-left" axis="northing" units="tilematrix" ></map-input>\n      <map-input name="txmax" type="location" rel="tile" position="top-right" axis="easting" units="tilematrix" ></map-input>\n      <map-input name="tymax" type="location" rel="tile" position="top-left" axis="northing" units="tilematrix" ></map-input>\n      <map-link rel="tile" tref="https://datacube.services.geo.ca/ows/msi?SERVICE=WMS&REQUEST=GetMap&FORMAT=image/png&TRANSPARENT=TRUE&STYLES=msi-color&VERSION=1.3.0&LAYERS=msi&WIDTH=256&HEIGHT=256&CRS=EPSG:3978&BBOX={txmin},{tymin},{txmax},{tymax}" ></map-link>\n      \x3c!-- a zoom input is necessary, but that\'s a bug: \n           https://github.com/Maps4HTML/Web-Map-Custom-Element/issues/669 --\x3e\n      <map-input name="z" type="zoom" value="25" min="0" max="25"/>\n    </map-extent>\n  </layer->\n</mapml-viewer>\n')),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"specifications"},"Specifications"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://maps4html.org/MapML/spec/#the-input-element-0"},"MapML input element"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://html.spec.whatwg.org/multipage/input.html#the-input-element"},"HTML input element"))))),(0,i.kt)("hr",null),(0,i.kt)("blockquote",null,(0,i.kt)("ul",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/Maps4HTML/web-map-doc/edit/main/docs/elements/input.md"},"Edit this page on ",(0,i.kt)("strong",{parentName:"a"},"Github"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://gitter.im/Maps4HTML/chat"},"Chat with us on ",(0,i.kt)("strong",{parentName:"a"},"Gitter"))))))}m.isMDXComponent=!0}}]);