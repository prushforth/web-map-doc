"use strict";(self.webpackChunkmapml_viewer_doc=self.webpackChunkmapml_viewer_doc||[]).push([[8190],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>u});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=s(a),h=r,u=d["".concat(p,".").concat(h)]||d[h]||c[h]||l;return a?n.createElement(u,i(i({ref:t},m),{},{components:a})):n.createElement(u,i({ref:t},m))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=h;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[d]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},4157:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const l={id:"link",title:"<map-link>",slug:"/elements/link/"},i=void 0,o={unversionedId:"elements/link",id:"elements/link",title:"<map-link>",description:"The ` element is an extended HTML link` element, for use in Web",source:"@site/docs/elements/link.md",sourceDirName:"elements",slug:"/elements/link/",permalink:"/web-map-doc/docs/elements/link/",draft:!1,tags:[],version:"current",frontMatter:{id:"link",title:"<map-link>",slug:"/elements/link/"},sidebar:"sidebar",previous:{title:"<map-select>",permalink:"/web-map-doc/docs/elements/select/"},next:{title:"<map-meta>",permalink:"/web-map-doc/docs/elements/meta/"}},p={},s=[{value:"Attributes",id:"attributes",level:2},{value:"<code>rel</code>",id:"rel",level:3},{value:"<code>type</code>",id:"type",level:3},{value:"<code>title</code>",id:"title",level:3},{value:"<code>href</code>",id:"href",level:3},{value:"<code>hreflang</code>",id:"hreflang",level:3},{value:"<code>tref</code>",id:"tref",level:3},{value:"<code>tms</code>",id:"tms",level:3},{value:"<code>projection</code>",id:"projection",level:3},{value:"Examples",id:"examples",level:2},{value:"Tile Mapping Specification (tms)",id:"tile-mapping-specification-tms",level:3},{value:"Accessibility",id:"accessibility",level:2},{value:"Specifications",id:"specifications",level:2},{value:"Requirements",id:"requirements",level:2}],m={toc:s},d="wrapper";function c(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"<map-link>")," element is an extended HTML ",(0,r.kt)("inlineCode",{parentName:"p"},"link")," element, for use in Web\nmaps.  Most of the extensions center on proposed new values of the ",(0,r.kt)("inlineCode",{parentName:"p"},"rel")," attribute."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"<map-link>")," has several uses:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"include layer data attribution / licensing links in the bottom right-hand corner of the map"),(0,r.kt)("li",{parentName:"ul"},"provide links to different styles of the layer, via ",(0,r.kt)("inlineCode",{parentName:"li"},"style")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"self")," rel values. These links are rendered as user affordances, and can be used to switch, for example, from satellite to map view of a layer."),(0,r.kt)("li",{parentName:"ul"},"provide links to alternate projections for a layer, via the ",(0,r.kt)("inlineCode",{parentName:"li"},"alternate")," rel value, in conjunction with the ",(0,r.kt)("inlineCode",{parentName:"li"},'projection="..."')," attribute. Such links are automatically followed by the polyfill when appropriate."),(0,r.kt)("li",{parentName:"ul"},"provide a URL template that is processed and converted to a URL and fetched by the polyfill, each time the map requires new content to render, such as a tile, via the ",(0,r.kt)("inlineCode",{parentName:"li"},"tile"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"image"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"feature")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"query")," rel values, in conjunction with the ",(0,r.kt)("inlineCode",{parentName:"li"},'tref="..."')," attribute. Such links are automatically created and followed / imported when appropriate."),(0,r.kt)("li",{parentName:"ul"},"include links to legend graphics for a layer.  Currently such links are rendered as hyperlinks, not as graphics."),(0,r.kt)("li",{parentName:"ul"},"provide links to CSS stylesheets via the ",(0,r.kt)("inlineCode",{parentName:"li"},"stylesheet")," rel value, which are imported by the polyfill automatically."),(0,r.kt)("li",{parentName:"ul"},"provide links to layers at next native zoom level via ",(0,r.kt)("inlineCode",{parentName:"li"},"zoomin"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"zoomout")," rel values.  Such links are automatically followed by the polyfill when appropriate.")),(0,r.kt)("iframe",{src:"../../../demo/map-link-demo/",title:"MapML Demo",height:"410",width:"100%",scrolling:"no",frameBorder:"0"}),(0,r.kt)("h2",{id:"attributes"},"Attributes"),(0,r.kt)("h3",{id:"rel"},(0,r.kt)("inlineCode",{parentName:"h3"},"rel")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"rel")," attribute designates the type of resource that is linked to. MapML\ndefines several uses of existing and new ",(0,r.kt)("inlineCode",{parentName:"p"},"rel")," keyword values."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"license")),(0,r.kt)("td",{parentName:"tr",align:null},"The ",(0,r.kt)("inlineCode",{parentName:"td"},"href")," value links to a license description resource for the layer. The ",(0,r.kt)("inlineCode",{parentName:"td"},"title")," attribute is used as the text to display for the link. The hyperlink is presented in the attribution control, at the lower right corner of the map viewport.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"alternate")),(0,r.kt)("td",{parentName:"tr",align:null},"The ",(0,r.kt)("inlineCode",{parentName:"td"},"alternate")," rel value is used with the ",(0,r.kt)("inlineCode",{parentName:"td"},"projection"),' attribute to provide the link to an equivalent layer resource in a different projection than that provided by the current resource.  This can be very useful for providing an author-friendly experience, where a map document may be added as a layer to a map that declares a different projection than that of the layer.  The polyfill will automatically "redirect" to the alternate projection document that matches that of the map.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"self")),(0,r.kt)("td",{parentName:"tr",align:null},"The ",(0,r.kt)("inlineCode",{parentName:"td"},"self style")," (or ",(0,r.kt)("inlineCode",{parentName:"td"},"style self"),") link rel indicates that the current document is one of a set of named alternate styles for a layer.  Other members of the set are ",(0,r.kt)("inlineCode",{parentName:"td"},"<map-link>")," elements tagged with the ",(0,r.kt)("inlineCode",{parentName:"td"},"style")," link relation. Other members of the set of alternate / different styles for the layer are presented to the user as a set of mutually exclusive choices.  User selection of one of the choices replaces the current layer entirely.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"style")),(0,r.kt)("td",{parentName:"tr",align:null},"The ",(0,r.kt)("inlineCode",{parentName:"td"},"style")," link relation by itself designates that link as an alternate or different style of the current layer style. This is often used to switch between, for example, satellite and cartographic views of the same layer. When used in conjunction with the ",(0,r.kt)("inlineCode",{parentName:"td"},"self")," link relation, i.e. ",(0,r.kt)("inlineCode",{parentName:"td"},'rel="self style"'),", the current document is identified as a member of the set of alternate styles, and is selected in the layer control affordance for changing styles.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"tile")),(0,r.kt)("td",{parentName:"tr",align:null},"This link relation is used in conjunction with the ",(0,r.kt)("inlineCode",{parentName:"td"},'tref="..."')," attribute to define a URL template that identifies native (server) tile resources. Can be used in conjunction with the ",(0,r.kt)("inlineCode",{parentName:"td"},'type="..."')," attribute to indicate the media type of the remote resource, for example: ",(0,r.kt)("inlineCode",{parentName:"td"},'type="text/mapml"')," tells the polyfill to parse and render the fetched resource as map feature content. This link relation is used with standard Web Map Tile Services (WMTS), and its non-standard equivalents.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"image")),(0,r.kt)("td",{parentName:"tr",align:null},"The ",(0,r.kt)("inlineCode",{parentName:"td"},"image")," link relation is used similarly to the ",(0,r.kt)("inlineCode",{parentName:"td"},"tile")," link relation, except it tells the polyfill that the remote resources to be fetched are images that will be trimmed (by the server) to exactly match the width and height of the map viewport.  This link relation is used with standard Web Map Services (WMS) and its non-standard equivalents.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"features")),(0,r.kt)("td",{parentName:"tr",align:null},"The ",(0,r.kt)("inlineCode",{parentName:"td"},"features")," link relation tells the polyfill to parse and render the fetched resource as map feature content.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"zoomin")),(0,r.kt)("td",{parentName:"tr",align:null},"The link ",(0,r.kt)("inlineCode",{parentName:"td"},"href")," is followed automatically by the polyfill when the map is zoomed in by the user to a value greater than the maximimum value of the zoom range of the current layer.  The referenced map layer resource replaces the current map layer.  The polyfill does not represent this link as a user-visible affordance, it is followed automatically. If the remote resource does not contain a reciprocal ",(0,r.kt)("inlineCode",{parentName:"td"},"zoomout")," link, the map state change is one-way i.e. the layer is permanently replaced.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"zoomout")),(0,r.kt)("td",{parentName:"tr",align:null},"The link ",(0,r.kt)("inlineCode",{parentName:"td"},"href")," is followed automatically by the polyfill when the map is zoomed out by the user to a value less than the minimum value of the zoom range of the current layer.  The referenced map layer resource replaces the current map layer.  The polyfill does not represent this link as a user-visible affordance, it is followed automatically.  If the remote resource does not contain a reciprocal ",(0,r.kt)("inlineCode",{parentName:"td"},"zoomin")," link, the map state change is one-way i.e. the layer is permanently replaced.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"legend")),(0,r.kt)("td",{parentName:"tr",align:null},"The ",(0,r.kt)("inlineCode",{parentName:"td"},"legend")," link relation designates a link to metadata, typically an image, describing the symbology used by the current layer.  Currently, the polyfill creates a hyperlink for the label of the layer in the layer control, which opens in a new browsing context.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"query")),(0,r.kt)("td",{parentName:"tr",align:null},"The ",(0,r.kt)("inlineCode",{parentName:"td"},"query")," link relation is used in combination with the ",(0,r.kt)("inlineCode",{parentName:"td"},'tref="..."')," attribute to establish a URL template that composes a map query URL based on user map gestures such as click or touch. These URLs are fetched and the response presented on top of the map as a popup. Such queries can return text/html or text/mapml responses. In the latter case, the response may contain more than one feature, in which case a 'paged' popup is generated, allowing the user to cycle through the features' individual metadata.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"stylesheet")),(0,r.kt)("td",{parentName:"tr",align:null},"The link imports a CSS stylesheet from the ",(0,r.kt)("inlineCode",{parentName:"td"},"href")," value.")))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"type"},(0,r.kt)("inlineCode",{parentName:"h3"},"type")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"type")," attribute defines the expected\n",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types"},"MIME media type"),"\nof the remote resource. Depending on the ",(0,r.kt)("a",{parentName:"p",href:"#rel"},(0,r.kt)("inlineCode",{parentName:"a"},"rel")," value"),", the ",(0,r.kt)("inlineCode",{parentName:"p"},"type")," may play a significant role in determining\nthe polyfill behaviour."),(0,r.kt)("p",null,"Common values of ",(0,r.kt)("inlineCode",{parentName:"p"},"type")," include ",(0,r.kt)("strong",{parentName:"p"},"text/html"),", ",(0,r.kt)("strong",{parentName:"p"},"text/mapml"),", and ",(0,r.kt)("strong",{parentName:"p"},"image/","*"),"."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"title"},(0,r.kt)("inlineCode",{parentName:"h3"},"title")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"title")," of the linked resource is usually rendered or presented to the user,\nfor example, the ",(0,r.kt)("inlineCode",{parentName:"p"},'<map-link rel="license" title="Copyright FooBar Inc.">')," link\nis rendered as a hyperlink in the attribution control entry for the current\nlayer."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"href"},(0,r.kt)("inlineCode",{parentName:"h3"},"href")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"href")," of a ",(0,r.kt)("inlineCode",{parentName:"p"},"<map-link>")," must be a URL value of a resource that can be fetched.\nThe URL can be absolute or relative."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"hreflang"},(0,r.kt)("inlineCode",{parentName:"h3"},"hreflang")),(0,r.kt)("p",null,"Advisory ",(0,r.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/rfc5646"},"language designation")," about remote resource."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"tref"},(0,r.kt)("inlineCode",{parentName:"h3"},"tref")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"tref")," attribute contains a string that, once processed, will be treated as\na URL and fetched automatically by the polyfill. The string is known as a URL\ntemplate.  The processing that takes place prior to a URL template becoming a\nvalid URL is ",(0,r.kt)("em",{parentName:"p"},"variable reference substitution"),".  Variables are created by\n",(0,r.kt)("inlineCode",{parentName:"p"},'<map-input name="foo">')," elements.  The name of the variable can be\nreferenced in the URL template string contained in the ",(0,r.kt)("inlineCode",{parentName:"p"},"tref")," value, using the\n",(0,r.kt)("inlineCode",{parentName:"p"},"{foo}")," syntax notation.  A URL template string can contain 0 or more variable\nreferences.  Processing will remove variable references that are valid. That is,\nall variables that have been created by ",(0,r.kt)("inlineCode",{parentName:"p"},"<map-input>"),"s that are referenced in the\ntemplate will be replaced with the value of the variable at the time of processing."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"tms"},(0,r.kt)("inlineCode",{parentName:"h3"},"tms")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"tms")," boolean attribute tells the polyfill that the row (vertical) axis of the\nremote tile server follows ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.osgeo.org/wiki/Tile_Map_Service_Specification"},"the tms convention"),"\nof the y (row) axis being reversed (compared with ",(0,r.kt)("a",{parentName:"p",href:"https://gist.github.com/tmcw/4954720#converting"},"convention"),"),\nwith the positive direction of tile row values being up/north.  This convention is not a\nstandard, yet has unfortunately become popular among open source GIS professionals."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"projection"},(0,r.kt)("inlineCode",{parentName:"h3"},"projection")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"projection")," attribute identifies the projection of the remote layer resource.\nThis attribute is used in conjunction with the ",(0,r.kt)("a",{parentName:"p",href:"#rel"},(0,r.kt)("inlineCode",{parentName:"a"},"rel=alternate")," rel value"),"."),(0,r.kt)("p",null,"Projection values ",(0,r.kt)("a",{parentName:"p",href:"../mapml-viewer#projection"},"defined by the polyfill")," include:\n",(0,r.kt)("inlineCode",{parentName:"p"},"OSMTILE"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"WGS84"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"CBMTILE")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"APSTILE"),".  Projection values are case-sensitive."),(0,r.kt)("hr",null),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories"},"Content categories")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories#metadata_content"},"Metadata content"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Permitted content"),(0,r.kt)("td",{parentName:"tr",align:null},"None. Like the HTML ",(0,r.kt)("inlineCode",{parentName:"td"},"<link>")," element ",(0,r.kt)("inlineCode",{parentName:"td"},"<map-link>")," is an empty element.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Tag omission"),(0,r.kt)("td",{parentName:"tr",align:null},"While the HTML ",(0,r.kt)("inlineCode",{parentName:"td"},"<link>")," element is a void element, the polyfill must have an end tag.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Permitted parents"),(0,r.kt)("td",{parentName:"tr",align:null},"Any element that accepts metadata element children.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Implicit ARIA role"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://w3c.github.io/aria/#link"},"link")," with ",(0,r.kt)("inlineCode",{parentName:"td"},"href")," attribute.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Permitted ARIA roles"),(0,r.kt)("td",{parentName:"tr",align:null},"No roles permitted.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DOM Interface"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/API/HTMLLinkElement"},"HTMLLinkElement"))))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("h3",{id:"tile-mapping-specification-tms"},"Tile Mapping Specification (tms)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<mapml-viewer  projection="OSMTILE" zoom="1" lat="0" lon="0" controls>\n <layer- label="OpenStreetMap" src="https://geogratis.gc.ca/mapml/en/osmtile/osm/" checked hidden  ></layer->\n <layer- label="TMS COG Source" checked>\n   <map-extent units="OSMTILE">\n       <map-input name="zoom" type="zoom"  min="1" max="12"></map-input>\n       <map-input name="row" type="location" axis="row" units="tilematrix" ></map-input>\n       <map-input name="col" type="location" axis="column" units="tilematrix"></map-input>\n       \x3c!-- use the tms attribute to indicate that remote tile cache follows tms conventions --\x3e\n       <map-link tms rel="tile" tref="https://s3-eu-west-1.amazonaws.com/vito-lcv/global/2019/cog-grass-colored-fraction_grass/{zoom}/{col}/{row}.png">\n   </map-link>\n   </map-extent>\n   </layer->\n</mapml-viewer>\n')),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"accessibility"},"Accessibility"),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"specifications"},"Specifications"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://maps4html.org/MapML/spec/#the-link-element-0"},"MapML link element"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://html.spec.whatwg.org/multipage/semantics.html#the-link-element"},"HTML link element"))))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"requirements"},"Requirements"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Maps4HTML/HTML-Map-Element-UseCases-Requirements/issues/new?title=-SUMMARIZE+THE+PROBLEM-&body=-DESCRIBE+THE+PROBLEM-"},"Report problems with these requirements on GitHub")),(0,r.kt)("p",null,(0,r.kt)("b",null,(0,r.kt)("span",{class:"requirement"},"requirement"),(0,r.kt)("span",{class:"enhancement"},"enhancement"),(0,r.kt)("span",{class:"impractical"},"impractical"),(0,r.kt)("span",{class:"undecided"},"undecided"),(0,r.kt)("span",{class:"discussion"},"under discussion"))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"}),(0,r.kt)("th",{parentName:"tr",align:"center"},"Spec"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Viewer"),(0,r.kt)("th",{parentName:"tr",align:"center"},"API"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://maps4html.org/HTML-Map-Element-UseCases-Requirements/#map-viewers-capabilities-vectors"},(0,r.kt)("strong",{parentName:"a"},"Vector features and overlays (5.2)"))),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("div",{class:"requirement"},"Display map data attribution and links (5.2.4)")),(0,r.kt)("td",{parentName:"tr",align:"center"},"full"),(0,r.kt)("td",{parentName:"tr",align:"center"},"full"),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://maps4html.org/HTML-Map-Element-UseCases-Requirements/#map-viewers-capabilities-user-navigation"},(0,r.kt)("strong",{parentName:"a"},"User navigation (pan and zoom) (5.4)"))),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("div",{class:"discussion"},"Hide or show (and maybe dynamically load) vector features and labels on zoom\xa0(5.4.7)")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://maps4html.org/MapML/spec/#link-rel-features"},"full")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://maps4html.org/web-map-doc/docs/elements/link/#rel"},"full")),(0,r.kt)("td",{parentName:"tr",align:"center"})))),(0,r.kt)("hr",null),(0,r.kt)("blockquote",null,(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/Maps4HTML/web-map-doc/edit/main/docs/elements/link.md"},"Edit this page on ",(0,r.kt)("strong",{parentName:"a"},"Github"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://gitter.im/Maps4HTML/chat"},"Chat with us on ",(0,r.kt)("strong",{parentName:"a"},"Gitter"))))))}c.isMDXComponent=!0}}]);