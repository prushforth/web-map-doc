"use strict";(self.webpackChunkmapml_viewer_doc=self.webpackChunkmapml_viewer_doc||[]).push([[8190],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return c}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),h=d(n),c=r,u=h["".concat(p,".").concat(c)]||h[c]||s[c]||l;return n?a.createElement(u,i(i({ref:t},m),{},{components:n})):a.createElement(u,i({ref:t},m))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=h;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},4157:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return m},default:function(){return h}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),i=["components"],o={id:"link",title:"<map-link>: The Link element",slug:"/elements/link"},p=void 0,d={unversionedId:"elements/link",id:"elements/link",isDocsHomePage:!1,title:"<map-link>: The Link element",description:"The ` element is an extended HTML link` element, for use in Web",source:"@site/docs/elements/link.md",sourceDirName:"elements",slug:"/elements/link",permalink:"/web-map-doc/docs/elements/link",tags:[],version:"current",frontMatter:{id:"link",title:"<map-link>: The Link element",slug:"/elements/link"},sidebar:"sidebar",previous:{title:"<map-input>: The Input element",permalink:"/web-map-doc/docs/elements/input"},next:{title:"<map-meta>: The metadata element",permalink:"/web-map-doc/docs/elements/meta"}},m=[{value:"Attributes",id:"attributes",children:[{value:"<code>rel</code>",id:"rel",children:[]},{value:"<code>type</code>",id:"type",children:[]},{value:"<code>title</code>",id:"title",children:[]},{value:"<code>href</code>",id:"href",children:[]},{value:"<code>hreflang</code>",id:"hreflang",children:[]},{value:"<code>tref</code>",id:"tref",children:[]},{value:"<code>projection</code>",id:"projection",children:[]}]},{value:"Examples",id:"examples",children:[]},{value:"Accessibility",id:"accessibility",children:[]},{value:"Specifications",id:"specifications",children:[]},{value:"Requirements",id:"requirements",children:[]}],s={toc:m};function h(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"<map-link>")," element is an extended HTML ",(0,l.kt)("inlineCode",{parentName:"p"},"link")," element, for use in Web\nmaps.  Most of the extensions center on proposed new values of the ",(0,l.kt)("inlineCode",{parentName:"p"},"rel")," attribute."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"<map-link>")," has several uses:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"include layer data attribution / licensing links in the bottom right-hand corner of the map"),(0,l.kt)("li",{parentName:"ul"},"provide links to different styles of the layer, via ",(0,l.kt)("inlineCode",{parentName:"li"},"style")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"self")," rel values. These links are rendered as user affordances, and can be used to switch, for example, from satellite to map view of a layer."),(0,l.kt)("li",{parentName:"ul"},"provide links to alternate projections for a layer, via the ",(0,l.kt)("inlineCode",{parentName:"li"},"alternate")," rel value, in conjunction with the ",(0,l.kt)("inlineCode",{parentName:"li"},'projection="..."')," attribute. Such links are automatically followed by the polyfill when appropriate."),(0,l.kt)("li",{parentName:"ul"},"provide a URL template that is processed and converted to a URL and fetched by the polyfill, each time the map requires new content to render, such as a tile, via the ",(0,l.kt)("inlineCode",{parentName:"li"},"tile"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"image"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"feature")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"query")," rel values, in conjunction with the ",(0,l.kt)("inlineCode",{parentName:"li"},'tref="..."')," attribute. Such links are automatically created and followed / imported when appropriate."),(0,l.kt)("li",{parentName:"ul"},"include links to legend graphics for a layer.  Currently such links are rendered as hyperlinks, not as graphics."),(0,l.kt)("li",{parentName:"ul"},"provide links to CSS stylesheets via the ",(0,l.kt)("inlineCode",{parentName:"li"},"stylesheet")," rel value, which are imported by the polyfill automatically."),(0,l.kt)("li",{parentName:"ul"},"provide links to layers at next native zoom level via ",(0,l.kt)("inlineCode",{parentName:"li"},"zoomin"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"zoomout")," rel values.  Such links are automatically followed by the polyfill when appropriate.")),(0,l.kt)("h2",{id:"attributes"},"Attributes"),(0,l.kt)("h3",{id:"rel"},(0,l.kt)("inlineCode",{parentName:"h3"},"rel")),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"rel")," attribute designates the type of resource that is linked to. MapML\ndefines several uses of existing and new ",(0,l.kt)("inlineCode",{parentName:"p"},"rel")," keyword values."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Value"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"license")),(0,l.kt)("td",{parentName:"tr",align:null},"The ",(0,l.kt)("inlineCode",{parentName:"td"},"href")," value links to a license description resource for the layer. The ",(0,l.kt)("inlineCode",{parentName:"td"},"title")," attribute is used as the text to display for the link. The hyperlink is presented in the attribution control, at the lower right corner of the map viewport.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"alternate")),(0,l.kt)("td",{parentName:"tr",align:null},"The ",(0,l.kt)("inlineCode",{parentName:"td"},"alternate")," rel value is used with the ",(0,l.kt)("inlineCode",{parentName:"td"},"projection"),' attribute to provide the link to an equivalent layer resource in a different projection than that provided by the current resource.  This can be very useful for providing an author-friendly experience, where a map document may be added as a layer to a map that declares a different projection than that of the layer.  The polyfill will automatically "redirect" to the alternate projection document that matches that of the map.')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"self")),(0,l.kt)("td",{parentName:"tr",align:null},"The ",(0,l.kt)("inlineCode",{parentName:"td"},"self style")," (or ",(0,l.kt)("inlineCode",{parentName:"td"},"style self"),") link rel indicates that the current document is one of a set of named alternate styles for a layer.  Other members of the set are ",(0,l.kt)("inlineCode",{parentName:"td"},"<map-link>")," elements tagged with the ",(0,l.kt)("inlineCode",{parentName:"td"},"style")," link relation. Other members of the set of alternate / different styles for the layer are presented to the user as a set of mutually exclusive choices.  User selection of one of the choices replaces the current layer entirely.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"style")),(0,l.kt)("td",{parentName:"tr",align:null},"The ",(0,l.kt)("inlineCode",{parentName:"td"},"style")," link relation by itself designates that link as an alternate or different style of the current layer style. This is often used to switch between, for example, satellite and cartographic views of the same layer. When used in conjunction with the ",(0,l.kt)("inlineCode",{parentName:"td"},"self")," link relation, i.e. ",(0,l.kt)("inlineCode",{parentName:"td"},'rel="self style"'),", the current document is identified as a member of the set of alternate styles, and is selected in the layer control affordance for changing styles.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"tile")),(0,l.kt)("td",{parentName:"tr",align:null},"This link relation is used in conjunction with the ",(0,l.kt)("inlineCode",{parentName:"td"},'tref="..."')," attribute to define a URL template that identifies native (server) tile resources. Can be used in conjunction with the ",(0,l.kt)("inlineCode",{parentName:"td"},'type="..."')," attribute to indicate the media type of the remote resource, for example: ",(0,l.kt)("inlineCode",{parentName:"td"},'type="text/mapml"')," tells the polyfill to parse and render the fetched resource as map feature content. This link relation is used with standard Web Map Tile Services (WMTS), and its non-standard equivalents.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"image")),(0,l.kt)("td",{parentName:"tr",align:null},"The ",(0,l.kt)("inlineCode",{parentName:"td"},"image")," link relation is used similarly to the ",(0,l.kt)("inlineCode",{parentName:"td"},"tile")," link relation, except it tells the polyfill that the remote resources to be fetched are images that will be trimmed (by the server) to exactly match the width and height of the map viewport.  This link relation is used with standard Web Map Services (WMS) and its non-standard equivalents.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"features")),(0,l.kt)("td",{parentName:"tr",align:null},"The ",(0,l.kt)("inlineCode",{parentName:"td"},"feature")," link relation tells the polyfill to parse and render the fetched resource as map feature content.  It is conceptually equivalent to a link relation of ",(0,l.kt)("inlineCode",{parentName:"td"},"image")," combined with a ",(0,l.kt)("inlineCode",{parentName:"td"},'type="text/mapml"')," media type (which is not actually implemented).")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"zoomin")),(0,l.kt)("td",{parentName:"tr",align:null},"The link ",(0,l.kt)("inlineCode",{parentName:"td"},"href")," is followed automatically by the polyfill when the map is zoomed in by the user to a value greater than the maximimum value of the zoom range of the current layer.  The referenced map layer resource replaces the current map layer.  The polyfill does not represent this link as a user-visible affordance, it is followed automatically. If the remote resource does not contain a reciprocal ",(0,l.kt)("inlineCode",{parentName:"td"},"zoomout")," link, the map state change is one-way i.e. the layer is permanently replaced.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"zoomout")),(0,l.kt)("td",{parentName:"tr",align:null},"The link ",(0,l.kt)("inlineCode",{parentName:"td"},"href")," is followed automatically by the polyfill when the map is zoomed out by the user to a value less than the minimum value of the zoom range of the current layer.  The referenced map layer resource replaces the current map layer.  The polyfill does not represent this link as a user-visible affordance, it is followed automatically.  If the remote resource does not contain a reciprocal ",(0,l.kt)("inlineCode",{parentName:"td"},"zoomin")," link, the map state change is one-way i.e. the layer is permanently replaced.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"legend")),(0,l.kt)("td",{parentName:"tr",align:null},"The ",(0,l.kt)("inlineCode",{parentName:"td"},"legend")," link relation designates a link to metadata, typically an image, describing the symbology used by the current layer.  Currently, the polyfill creates a hyperlink for the label of the layer in the layer control, which opens in a new browsing context.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"query")),(0,l.kt)("td",{parentName:"tr",align:null},"The ",(0,l.kt)("inlineCode",{parentName:"td"},"query")," link relation is used in combination with the ",(0,l.kt)("inlineCode",{parentName:"td"},'tref="..."')," attribute to establish a URL template that composes a map query URL based on user map gestures such as click or touch. These URLs are fetched and the response presented on top of the map as a popup. Such queries can return text/html or text/mapml responses. In the latter case, the response may contain more than one feature, in which case a 'paged' popup is generated, allowing the user to cycle through the features' individual metadata.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"stylesheet")),(0,l.kt)("td",{parentName:"tr",align:null},"The link imports a CSS stylesheet from the ",(0,l.kt)("inlineCode",{parentName:"td"},"href")," value.")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"type"},(0,l.kt)("inlineCode",{parentName:"h3"},"type")),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"type")," attribute defines the expected\n",(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types"},"MIME media type"),"\nof the remote resource. Depending on the ",(0,l.kt)("a",{parentName:"p",href:"#rel"},(0,l.kt)("inlineCode",{parentName:"a"},"rel")," value"),", the ",(0,l.kt)("inlineCode",{parentName:"p"},"type")," may play a significant role in determining\nthe polyfill behaviour."),(0,l.kt)("p",null,"Common values of ",(0,l.kt)("inlineCode",{parentName:"p"},"type")," include ",(0,l.kt)("strong",{parentName:"p"},"text/html"),", ",(0,l.kt)("strong",{parentName:"p"},"text/mapml"),", and ",(0,l.kt)("strong",{parentName:"p"},"image/","*"),"."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"title"},(0,l.kt)("inlineCode",{parentName:"h3"},"title")),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"title")," of the linked resource is usually rendered or presented to the user,\nfor example, the ",(0,l.kt)("inlineCode",{parentName:"p"},'<map-link rel="license" title="Copyright FooBar Inc.">')," link\nis rendered as a hyperlink in the attribution control entry for the current\nlayer."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"href"},(0,l.kt)("inlineCode",{parentName:"h3"},"href")),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"href")," of a ",(0,l.kt)("inlineCode",{parentName:"p"},"<map-link>")," must be a URL value of a resource that can be fetched.\nThe URL can be absolute or relative."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"hreflang"},(0,l.kt)("inlineCode",{parentName:"h3"},"hreflang")),(0,l.kt)("p",null,"Advisory ",(0,l.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/rfc5646"},"language designation")," about remote resource."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"tref"},(0,l.kt)("inlineCode",{parentName:"h3"},"tref")),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"tref")," attribute contains a string that, once processed, will be treated as\na URL and fetched automatically by the polyfill. The string is known as a URL\ntemplate.  The processing that takes place prior to a URL template becoming a\nvalid URL is ",(0,l.kt)("em",{parentName:"p"},"variable reference substitution"),".  Variables are created by\n",(0,l.kt)("inlineCode",{parentName:"p"},'<map-input name="foo">')," elements.  The name of the variable can be\nreferenced in the URL template string contained in the ",(0,l.kt)("inlineCode",{parentName:"p"},"tref")," value, using the\n",(0,l.kt)("inlineCode",{parentName:"p"},"{foo}")," syntax notation.  A URL template string can contain 0 or more variable\nreferences.  Processing will remove variable references that are valid. That is,\nall variables that have been created by ",(0,l.kt)("inlineCode",{parentName:"p"},"<map-input>"),"s that are referenced in the\ntemplate will be replaced with the value of the variable at the time of processing."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"projection"},(0,l.kt)("inlineCode",{parentName:"h3"},"projection")),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"projection")," attribute identifies the projection of the remote layer resource.\nThis attribute is used in conjunction with the ",(0,l.kt)("a",{parentName:"p",href:"#rel"},(0,l.kt)("inlineCode",{parentName:"a"},"rel=alternate")," rel value"),"."),(0,l.kt)("p",null,"Projection values ",(0,l.kt)("a",{parentName:"p",href:"mapml-viewer#projection"},"defined by the polyfill")," include:\n",(0,l.kt)("inlineCode",{parentName:"p"},"OSMTILE"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"WGS84"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"CBMTILE")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"APSTILE"),".  Projection values are case-sensitive."),(0,l.kt)("hr",null),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories"},"Content categories")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories#metadata_content"},"Metadata content"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Permitted content"),(0,l.kt)("td",{parentName:"tr",align:null},"None. Like the HTML ",(0,l.kt)("inlineCode",{parentName:"td"},"<link>")," element ",(0,l.kt)("inlineCode",{parentName:"td"},"<map-link>")," is an empty element.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Tag omission"),(0,l.kt)("td",{parentName:"tr",align:null},"While the HTML ",(0,l.kt)("inlineCode",{parentName:"td"},"<link>")," element is a void element, the polyfill must have an end tag.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Permitted parents"),(0,l.kt)("td",{parentName:"tr",align:null},"Any element that accepts metadata element children.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Implicit ARIA role"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://w3c.github.io/aria/#link"},"link")," with ",(0,l.kt)("inlineCode",{parentName:"td"},"href")," attribute.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Permitted ARIA roles"),(0,l.kt)("td",{parentName:"tr",align:null},"No roles permitted.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DOM Interface"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/API/HTMLLinkElement"},"HTMLLinkElement"))))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"accessibility"},"Accessibility"),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"specifications"},"Specifications"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://maps4html.org/MapML/spec/#the-link-element-0"},"MapML link element"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://html.spec.whatwg.org/multipage/semantics.html#the-link-element"},"HTML link element"))))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"requirements"},"Requirements"),(0,l.kt)("hr",null))}h.isMDXComponent=!0}}]);