"use strict";(self.webpackChunkmapml_viewer_doc=self.webpackChunkmapml_viewer_doc||[]).push([[5584],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return u}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),h=p(n),u=i,c=h["".concat(s,".").concat(u)]||h[u]||m[u]||r;return n?a.createElement(c,l(l({ref:t},d),{},{components:n})):a.createElement(c,l({ref:t},d))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},974:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return d},default:function(){return h}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),l=["components"],o={id:"input",title:"<map-input>: The Input element",slug:"/elements/input"},s=void 0,p={unversionedId:"elements/input",id:"elements/input",isDocsHomePage:!1,title:"<map-input>: The Input element",description:"The ` element is an extended HTML input by type` for use in Web",source:"@site/docs/elements/input.md",sourceDirName:"elements",slug:"/elements/input",permalink:"/web-map-doc/docs/elements/input",tags:[],version:"current",frontMatter:{id:"input",title:"<map-input>: The Input element",slug:"/elements/input"},sidebar:"sidebar",previous:{title:"<map-extent>: The Extent element",permalink:"/web-map-doc/docs/elements/extent"},next:{title:"<map-link>: The Link element",permalink:"/web-map-doc/docs/elements/link"}},d=[{value:"Attributes",id:"attributes",children:[{value:"<code>name</code>",id:"name",children:[]},{value:"<code>type</code>",id:"type",children:[]},{value:"<code>value</code>",id:"value",children:[]},{value:"<code>axis</code>",id:"axis",children:[]},{value:"<code>units</code>",id:"units",children:[]},{value:"<code>position</code>",id:"position",children:[]},{value:"<code>rel</code>",id:"rel",children:[]},{value:"<code>min</code>",id:"min",children:[]},{value:"<code>max</code>",id:"max",children:[]},{value:"<code>shard</code>",id:"shard",children:[]},{value:"<code>list</code>",id:"list",children:[]}]}],m={toc:d};function h(e){var t=e.components,n=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"<map-input>")," element is an extended HTML ",(0,r.kt)("inlineCode",{parentName:"p"},"input")," by ",(0,r.kt)("inlineCode",{parentName:"p"},"type")," for use in Web\nmap ",(0,r.kt)("inlineCode",{parentName:"p"},"<map-extent>")," elements.  The attributes that apply to the input depend on\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"type")," attribute.  There are several types of ",(0,r.kt)("inlineCode",{parentName:"p"},"<map-input>")," that can be used."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"<map-input>")," declares a variable that will be set and used by the polyfill\naccording to its attributes, as the map changes viewport extent in response to\nuser gestures."),(0,r.kt)("h2",{id:"attributes"},"Attributes"),(0,r.kt)("h3",{id:"name"},(0,r.kt)("inlineCode",{parentName:"h3"},"name")),(0,r.kt)("p",null,"Sets the name of the variable created by the input. The variable can then be\nreferenced by the URL template ",(0,r.kt)("inlineCode",{parentName:"p"},"<map-link>")," ",(0,r.kt)("a",{parentName:"p",href:"./link#tref"},"tref attribute"),",\nusing the ",(0,r.kt)("inlineCode",{parentName:"p"},"{name}")," variable reference notation."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"type"},(0,r.kt)("inlineCode",{parentName:"h3"},"type")),(0,r.kt)("p",null,"  Sets the ",(0,r.kt)("strong",{parentName:"p"},"type")," of the input."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"zoom"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer value that ranges from 0 to some fixed number of values, depending on the projection, less than or equal to 25.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"location"),(0,r.kt)("td",{parentName:"tr",align:null},"A location input captures ",(0,r.kt)("strong",{parentName:"td"},"one")," ",(0,r.kt)("inlineCode",{parentName:"td"},"axis")," value of a two-dimensional point ( represented by a coordinate pair) from the map extent, e.g. ",(0,r.kt)("inlineCode",{parentName:"td"},"top-right"),", or, for server queries, the location in the map where the user clicks or touches.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"width"),(0,r.kt)("td",{parentName:"tr",align:null},"A width input captures the width of the map viewport's extent in standardized pixels")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"height"),(0,r.kt)("td",{parentName:"tr",align:null},"A height input captures the height of the map viewport's extent in standardized pixels")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"hidden"),(0,r.kt)("td",{parentName:"tr",align:null},"Establishes a variable that may be used to pass a fixed or fixed domain of values to the server when requesting map resources.")))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"value"},(0,r.kt)("inlineCode",{parentName:"h3"},"value")),(0,r.kt)("p",null,"In general, the ",(0,r.kt)("inlineCode",{parentName:"p"},"value")," is set and used by the polyfill when generating URLs from\n",(0,r.kt)("a",{parentName:"p",href:"./link#tref"},"URL templates"),", for fetching server resources such as tiles, images\nand map documents."),(0,r.kt)("p",null,"In particular, ",(0,r.kt)("inlineCode",{parentName:"p"},"value")," is used by authors  to specify values for inputs of\n",(0,r.kt)("inlineCode",{parentName:"p"},'type="zoom"'),". In the case of ",(0,r.kt)("inlineCode",{parentName:"p"},'type="zoom"'),", ",(0,r.kt)("inlineCode",{parentName:"p"},"value")," defines the zoom level of\n",(0,r.kt)("em",{parentName:"p"},"associated")," ",(0,r.kt)("strong",{parentName:"p"},"sibling")," ",(0,r.kt)("inlineCode",{parentName:"p"},'<map-input type="location">')," elements' ",(0,r.kt)("inlineCode",{parentName:"p"},"min")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"max"),"\nattribute values.  Allows authors to establish native / server resource bounds,\non a per-",(0,r.kt)("inlineCode",{parentName:"p"},'<map-link tref="...">')," basis."),(0,r.kt)("p",null,"Inputs are ",(0,r.kt)("em",{parentName:"p"},"associated")," by their variables being referenced by a\n",(0,r.kt)("inlineCode",{parentName:"p"},'<map-link tref="https://example.org/{z}/{col}/{row}/" ...>')," value.  The ",(0,r.kt)("inlineCode",{parentName:"p"},"{z}"),",\n",(0,r.kt)("inlineCode",{parentName:"p"},"{row}"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"{col}")," variable references in the above example associate the\nvariables (",(0,r.kt)("inlineCode",{parentName:"p"},"<map-input>"),"'s) named ",(0,r.kt)("strong",{parentName:"p"},"z"),", ",(0,r.kt)("strong",{parentName:"p"},"row")," and ",(0,r.kt)("strong",{parentName:"p"},"col"),"."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"axis"},(0,r.kt)("inlineCode",{parentName:"h3"},"axis")),(0,r.kt)("p",null,"This attribute applies only to inputs of ",(0,r.kt)("inlineCode",{parentName:"p"},'type="location"'),". It establishes the axis\nof the coordinate to be serialized as ",(0,r.kt)("a",{parentName:"p",href:"#"},"a named variable"),". This value also\nidentifies the axis that the ",(0,r.kt)("inlineCode",{parentName:"p"},"min")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"max")," attributes apply to, so that the\npolyfill will not make requests for spatial resources (tiles etc) outside the\nnative axis bounds. Possible values of ",(0,r.kt)("inlineCode",{parentName:"p"},"axis")," are:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Axis name"),(0,r.kt)("th",{parentName:"tr",align:null},"CRS"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"row")),(0,r.kt)("td",{parentName:"tr",align:null},"tilematrix"),(0,r.kt)("td",{parentName:"tr",align:null},"Vertical axis, positive down the screen. The origin is at the upper left. Units are tiles. Each zoom level is a distinct tilematrix crs, so coordinate values apply only to that zoom level.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"column")),(0,r.kt)("td",{parentName:"tr",align:null},"tilematrix"),(0,r.kt)("td",{parentName:"tr",align:null},"Horizontal axis, positive to the right. The origin is at the upper left. Units are tiles. Each zoom level is a distinct tilematrix crs, so coordinate values apply only to that zoom level.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"easting")),(0,r.kt)("td",{parentName:"tr",align:null},"pcrs"),(0,r.kt)("td",{parentName:"tr",align:null},"Horizontal axis, positive to the right. The origin is defined a geographic location. Units are ususally meters, although for some TCRS (specifically WGS84), the transformation from geographic CRS, i.e. from longitude to easting is the identity transformation, in which case the easting values could be said to be in decimal degrees. ",(0,r.kt)("strong",{parentName:"td"},"pcrs"),' stands for "projected coordinate reference system".')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"northing")),(0,r.kt)("td",{parentName:"tr",align:null},"pcrs"),(0,r.kt)("td",{parentName:"tr",align:null},"Vertical axis, positive to the right. The origin is defined a geographic location. Units are ususally meters, although for some TCRS (specifically WGS84), the transformation from geographic CRS, i.e. from longitude to easting is the identity transformation, in which case the northing values could be said to be decimal degrees.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"latitude")),(0,r.kt)("td",{parentName:"tr",align:null},"gcrs"),(0,r.kt)("td",{parentName:"tr",align:null},"The latitude of a point on an ellipsoid is the angle between a line perpendicular to the surface of the ellipsoid at the given point and the plane of the equator. ",(0,r.kt)("strong",{parentName:"td"},"gcrs"),' stands for "geographic coordinate reference system".')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"longitude")),(0,r.kt)("td",{parentName:"tr",align:null},"gcrs"),(0,r.kt)("td",{parentName:"tr",align:null},"The longitude of a point specifies its east\u2013west position on the reference body's (Earth's) surface.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"x")),(0,r.kt)("td",{parentName:"tr",align:null},"tcrs"),(0,r.kt)("td",{parentName:"tr",align:null},"Horizontal axis, positive to the right. The origin is at the upper left. Units are defined-size pixels. Each zoom level is a distinct tcrs, so coordinate values apply only to that zoom level. ",(0,r.kt)("strong",{parentName:"td"},"tcrs"),' stands for "tiled coordinate reference system".  The tiles of each ',(0,r.kt)("strong",{parentName:"td"},"tilematrix")," crs are defined as aggregations of pixels in the corresponding zoom level ",(0,r.kt)("strong",{parentName:"td"},"tcrs"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"y")),(0,r.kt)("td",{parentName:"tr",align:null},"tcrs"),(0,r.kt)("td",{parentName:"tr",align:null},"Vertical axis, positive down the screen. The origin is at the upper left. Units are defined-size pixels. The origin is at the upper left. Units are scaled pixels. Each zoom level is a distinct tcrs, so coordinate values apply only to that zoom level.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"i")),(0,r.kt)("td",{parentName:"tr",align:null},"tile, map"),(0,r.kt)("td",{parentName:"tr",align:null},"Horizontal axis, positive to the right. Each tile, and the map viewport, has a defined-size pixel-based crs that has its origin at the upper left (of each tile in the case of the ",(0,r.kt)("strong",{parentName:"td"},"tile")," crs, and of the map viewport, in the case of the ",(0,r.kt)("strong",{parentName:"td"},"map")," crs).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"j")),(0,r.kt)("td",{parentName:"tr",align:null},"tile, map"),(0,r.kt)("td",{parentName:"tr",align:null},"Vertical axis, positive down the screen. Each individual tile, and the map viewport has a defined-size pixel-based crs that has its origin at the upper left (of each tile in the case of the ",(0,r.kt)("strong",{parentName:"td"},"tile")," crs, and of the map viewport, in the case of the ",(0,r.kt)("strong",{parentName:"td"},"map")," crs).")))),(0,r.kt)("p",null,"Internally, the crs of the location is deduced by the polyfill from the axis\nname, instead of requiring the author to explicitly specify the crs as an attribute\nof the ",(0,r.kt)("inlineCode",{parentName:"p"},"<map-input>"),". For example, when requesting a tile in the ",(0,r.kt)("inlineCode",{parentName:"p"},"OSMTILE")," projection,\na location input might use a ",(0,r.kt)("inlineCode",{parentName:"p"},'<map-input name="y" type="location" axis="row" ...>'),"\ninput to establish a variable named ",(0,r.kt)("strong",{parentName:"p"},"y"),", referenced by ",(0,r.kt)("inlineCode",{parentName:"p"},"{y}")," in an associated URL template,\nwhich would serialize ",(0,r.kt)("strong",{parentName:"p"},"tilematrix")," crs ",(0,r.kt)("inlineCode",{parentName:"p"},"row")," axis values, as required by the map\nto cover the viewport in tiles."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"units"},(0,r.kt)("inlineCode",{parentName:"h3"},"units")),(0,r.kt)("p",null,'Identifies the associated specific coordinate reference system that a location\ninput is referred to.  The term "projection" in MapML is synonymous with the set\nof CRS that are related together by the projection name. In all cases for any projection,\nthere exist a set of CRS that are related mathematically. These CRS are known\nand identified within the "namespace" of a projection name by the following\ntable of keyword values:'),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"CRS"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tcrs"),(0,r.kt)("td",{parentName:"tr",align:null},"For each zoom level (i.e. at a pre-defined scale denominator value), locations are expressed in terms of scaled pixels, with the origin of pixel space at the upper left corner.  The pixel coordinates of a location at a single zoom level are independent of the pixel coordinates of a location any other zoom level.  In other words, you need to know the zoom level of a tcrs coordinate in order to locate it on a map or otherwise process it.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tilematrix"),(0,r.kt)("td",{parentName:"tr",align:null},"Each zoom level has an array of tiles, called a tilematrix.  The individual tiles constitute the coordinates in this CRS, and the axes are know as ",(0,r.kt)("inlineCode",{parentName:"td"},"row")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"column"),".  The tiles are defined as squares of 256 pixels in the associated tcrs of the particular zoom level.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"pcrs"),(0,r.kt)("td",{parentName:"tr",align:null},'Projected CRS (pcrs) are defined by a mathematical relationship with an underlying gcrs, using a technique called "projection". pcrs coordinates are scale- and zoom level-independent, and are designed to represent geographic coordinates on a planar surface, such as a device screen. The measurement units of pcrs coordinates is ',(0,r.kt)("em",{parentName:"td"},"usually")," meters (a notable exception being pcrs coordinates in the ",(0,r.kt)("inlineCode",{parentName:"td"},"WGS84")," projection).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"gcrs"),(0,r.kt)("td",{parentName:"tr",align:null},"Geographic coordinates are referenced to various ellipsoids, and are not necessarily comparable across projections.  A common ellipsoid today is WGS 84, which is defined and used by the global positioning satellite (GPS) constellation.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"map"),(0,r.kt)("td",{parentName:"tr",align:null},"The map CRS is dynamic, in the sense that it has its origin at the upper left of the user's viewport, with scaled pixels as units.  This is used to identify image coordinates for use, typically by WMS and similar services which use a virtual image to enable query of map feature property information, without necessarily transferring the features over the network.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tile"),(0,r.kt)("td",{parentName:"tr",align:null},"Each tile in any zoom level has an implicit scaled-pixel coordinate system ranging from 0 to 255 in both horizontal and vertical directions. These coordinates are used by WMTS and similar services to identify a pixel for query of feature property values, without transferring the feature geometry over the network.")))),(0,r.kt)("p",null,"Sometimes, location inputs are used to generate requests for tiles from WMS and\nsimilar un-tiled services.  In such a case, it is possible for the ",(0,r.kt)("inlineCode",{parentName:"p"},"units")," to be\nspecified as ",(0,r.kt)("inlineCode",{parentName:"p"},"tilematrix"),", implying that the location event expected is that of\na tile, while the ",(0,r.kt)("inlineCode",{parentName:"p"},"axis")," value may be specified as ",(0,r.kt)("inlineCode",{parentName:"p"},"easting")," or other axis name.\nThe"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"position"},(0,r.kt)("inlineCode",{parentName:"h3"},"position")),(0,r.kt)("p",null,"Allows the author to specify a predefined corner of the viewport or tile to be used\nas the location value to be serialized. If ",(0,r.kt)("inlineCode",{parentName:"p"},"position")," is not present, the input\nlocation coordinates will be generated by user click or touch on the map, which\nis used to generate interactive server queries."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"position keyword"),(0,r.kt)("th",{parentName:"tr",align:null},"keyword description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"top-left"),(0,r.kt)("td",{parentName:"tr",align:null},"Identifies the location at the top left corner of the tile or viewport")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"top-right"),(0,r.kt)("td",{parentName:"tr",align:null},"Identifies the location at the top right corner of the tile or viewport")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"bottom-left"),(0,r.kt)("td",{parentName:"tr",align:null},"Identifies the location at the bottom left corner of the tile or viewport")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"bottom-right"),(0,r.kt)("td",{parentName:"tr",align:null},"Identifies the location at the bottom right corner of the tile or viewport")))),(0,r.kt)("p",null,"Other values of ",(0,r.kt)("inlineCode",{parentName:"p"},"position")," are possible, but are not implemented yet."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"rel"},(0,r.kt)("inlineCode",{parentName:"h3"},"rel")),(0,r.kt)("p",null,"Specifies the entity to which the ",(0,r.kt)("inlineCode",{parentName:"p"},"position")," applies. Possible values are ",(0,r.kt)("inlineCode",{parentName:"p"},"tile")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"image"),".\nThe default value, if unspecified, is ",(0,r.kt)("inlineCode",{parentName:"p"},"image"),".  It is used to help identify what crs the\ncoordinate serialized by the input exists in. "),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"min"},(0,r.kt)("inlineCode",{parentName:"h3"},"min")),(0,r.kt)("p",null,"Establishes the minimum of the axis on the server.  Requests for coordinates less than\nthis value will not be created by the polyfill."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"max"},(0,r.kt)("inlineCode",{parentName:"h3"},"max")),(0,r.kt)("p",null,"Establishes the maximum of the axis on the server.  Requests for coordinates greater than\nthis value will not be created by the polyfill."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"shard"},(0,r.kt)("inlineCode",{parentName:"h3"},"shard")),(0,r.kt)("p",null,"The boolean ",(0,r.kt)("inlineCode",{parentName:"p"},"shard")," attribute creates a hidden variable."),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},'<map-input shard list="datalist-id>')," indicates that a set of values specified\nby an associated ",(0,r.kt)("inlineCode",{parentName:"p"},"map-datalist")," element will be used in a round-robin fashion for\ntemplate variable substitution and submission in map requests.  This is useful for\n",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Glossary/Domain_sharding"},"domain sharding"),",\nimplemented by OpenStreetMap (for example), to increase parallelism of tile requests\nand thereby to improve performance. "),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"list"},(0,r.kt)("inlineCode",{parentName:"h3"},"list")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},'<map-input list="...">')," attribute associates a ",(0,r.kt)("inlineCode",{parentName:"p"},"<map-datalist>")," element that\nprovides the values to be used (via the ",(0,r.kt)("inlineCode",{parentName:"p"},"<map-datalist>"),"'s child ",(0,r.kt)("inlineCode",{parentName:"p"},"<map-option>"),"\nelements.  See ",(0,r.kt)("a",{parentName:"p",href:"#shard"},"shard")," for more details."),(0,r.kt)("hr",null))}h.isMDXComponent=!0}}]);