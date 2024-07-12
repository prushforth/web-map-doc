"use strict";(self.webpackChunkmapml_viewer_doc=self.webpackChunkmapml_viewer_doc||[]).push([[6945],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>k});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function m(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):m(m({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=p(a),u=r,k=s["".concat(i,".").concat(u)]||s[u]||c[u]||o;return a?n.createElement(k,m(m({ref:t},d),{},{components:a})):n.createElement(k,m({ref:t},d))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,m=new Array(o);m[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[s]="string"==typeof e?e:r,m[1]=l;for(var p=2;p<o;p++)m[p]=a[p];return n.createElement.apply(null,m)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},2036:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>m,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const o={id:"meta",title:"<map-meta>",slug:"/elements/meta/"},m=void 0,l={unversionedId:"elements/meta",id:"elements/meta",title:"<map-meta>",description:"The ` element is an extended HTML meta` element, for use in Web",source:"@site/docs/elements/meta.md",sourceDirName:"elements",slug:"/elements/meta/",permalink:"/web-map-doc/docs/elements/meta/",draft:!1,tags:[],version:"current",frontMatter:{id:"meta",title:"<map-meta>",slug:"/elements/meta/"},sidebar:"sidebar",previous:{title:"<map-link>",permalink:"/web-map-doc/docs/elements/link/"},next:{title:"<map-feature>",permalink:"/web-map-doc/docs/elements/feature/"}},i={},p=[{value:"Attributes",id:"attributes",level:2},{value:"<code>name</code>",id:"name",level:3},{value:"<code>content</code>",id:"content",level:3},{value:"Examples",id:"examples",level:2},{value:"Setting zoom",id:"setting-zoom",level:3},{value:"Setting extent",id:"setting-extent",level:3},{value:"Fallback cs for &lt;map-geometry&gt;",id:"fallback-cs-for-map-geometry",level:3},{value:"Default metadata",id:"default-metadata",level:3},{value:"Specifications",id:"specifications",level:2},{value:"Requirements",id:"requirements",level:2},{value:"See Also",id:"see-also",level:2}],d={toc:p},s="wrapper";function c(e){let{components:t,...o}=e;return(0,r.kt)(s,(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"<map-meta>")," element is an extended HTML ",(0,r.kt)("inlineCode",{parentName:"p"},"meta")," element, for use in Web\nmaps."),(0,r.kt)("iframe",{src:"../../../demo/map-meta-demo/",title:"MapML Demo",height:"410",width:"100%",scrolling:"no",frameBorder:"0"}),(0,r.kt)("h2",{id:"attributes"},"Attributes"),(0,r.kt)("h3",{id:"name"},(0,r.kt)("inlineCode",{parentName:"h3"},"name")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," attribute identifies the type of metadata that is being set. Possible\nvalues of ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," related to maps include:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"projection"),(0,r.kt)("td",{parentName:"tr",align:null},"Set the ",(0,r.kt)("a",{parentName:"td",href:"../mapml-viewer/#projection"},"projection")," for the document")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"extent"),(0,r.kt)("td",{parentName:"tr",align:null},"Define the bounds of the document in terms of corner position keywords and axis names, potentially combined with a zoom value if necessary (depending on coordinate system).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cs"),(0,r.kt)("td",{parentName:"tr",align:null},"Identifies the default coordinate reference system of coordinate strings found in the document.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"zoom"),(0,r.kt)("td",{parentName:"tr",align:null},"Specify the zoom range min, max and default zoom value for displaying the document contents. The 'native' zoom range of ",(0,r.kt)("a",{parentName:"td",href:"../link#tref"},"templated map content")," is specified by the min/max attributes of associated ",(0,r.kt)("a",{parentName:"td",href:"../input#type"},"zoom inputs"),".  If templated content is not described by associated zoom input min/max/value attributes, the values specified in a ",(0,r.kt)("inlineCode",{parentName:"td"},"<map-meta name=zoom>")," will be used as fallback, if it exists.  If no ",(0,r.kt)("inlineCode",{parentName:"td"},"<map-meta name=zoom>")," exists, the corresponding min/max values from the projection will be used.")))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"content"},(0,r.kt)("inlineCode",{parentName:"h3"},"content")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"th"},"name")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"th"},"content")," value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"projection"),(0,r.kt)("td",{parentName:"tr",align:null},"A case-sensitive ",(0,r.kt)("a",{parentName:"td",href:"../mapml-viewer#projection"},"projection name"),", or a ",(0,r.kt)("a",{parentName:"td",href:"../../api/mapml-viewer-api#definecustomprojectionoptions"},"custom projection name"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"extent"),(0,r.kt)("td",{parentName:"tr",align:null},"(","(",(0,r.kt)("em",{parentName:"td"},(0,r.kt)("a",{parentName:"em",href:"../input#position"},"position keyword")),")","-","(",(0,r.kt)("em",{parentName:"td"},(0,r.kt)("a",{parentName:"em",href:"../input#axis"},"axis name")),")","=","(",(0,r.kt)("em",{parentName:"td"},"axis value"),")","(",",",")",")","4","(",",",")","(","zoom=","(",(0,r.kt)("em",{parentName:"td"},"zoom value"),")",")","0,1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cs"),(0,r.kt)("td",{parentName:"tr",align:null},"A case-sensitive ",(0,r.kt)("a",{parentName:"td",href:"../input#units"},"coordinate system abbreviation"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"zoom"),(0,r.kt)("td",{parentName:"tr",align:null},"(min=",(0,r.kt)("em",{parentName:"td"},"minimum zoom value"),",max=",(0,r.kt)("em",{parentName:"td"},"maximum zoom value"),",)(value=",(0,r.kt)("em",{parentName:"td"},"current zoom value"),")")))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"The grammar rules for the ",(0,r.kt)("inlineCode",{parentName:"p"},'<map-meta name="extent" content="..."></map-meta>'),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"content")," attribute require that you specify coordinates of the top-left and\nbottom-right corners of the extent being marked up. You must specify the axis values of the\nextent as values for a set of four comma-separated keys which identify the coordinate\nsystem being used (i.e. pcrs, gcrs, tile, tilematrix, map or tcrs) by virtue of\nthe axis names. For example ",(0,r.kt)("inlineCode",{parentName:"p"},"top-left-easting=-8433179")," identifies that the\ncoordinate system being used is pcrs.  You cannot mix coordinate systems within\na single ",(0,r.kt)("inlineCode",{parentName:"p"},"content")," attribute value, for example ",(0,r.kt)("inlineCode",{parentName:"p"},"top-left-easting=-8433179, top-left-latitude=49.02174,..."),"\nis not legal."),(0,r.kt)("p",{parentName:"admonition"},"You can copy a correctly marked-up ",(0,r.kt)("inlineCode",{parentName:"p"},'<map-meta name="extent" content="...">')," value\nonto the clipboard for the current map viewport, in pcrs coordinates (by default),\nvia the map context menu Copy > Extent item as shown below:"),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("img",{alt:"Copy extent context menu",src:a(5568).Z,width:"360",height:"254"}))),(0,r.kt)("hr",null),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories"},"Content categories")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories#metadata_content"},"Metadata content"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Permitted content"),(0,r.kt)("td",{parentName:"tr",align:null},"None, it is an ",(0,r.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Glossary/Empty_element"},"empty element"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Tag omission"),(0,r.kt)("td",{parentName:"tr",align:null},"While the HTML ",(0,r.kt)("inlineCode",{parentName:"td"},"<meta>")," element is a void element, the polyfill ",(0,r.kt)("inlineCode",{parentName:"td"},"<map-link>")," must have an end tag.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Permitted parents"),(0,r.kt)("td",{parentName:"tr",align:null},"Inline: the ",(0,r.kt)("inlineCode",{parentName:"td"},"<layer->")," element. In a MapML document: the ",(0,r.kt)("inlineCode",{parentName:"td"},"<map-head>")," element.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Implicit ARIA role"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role"},"No corresponding role"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Permitted ARIA roles"),(0,r.kt)("td",{parentName:"tr",align:null},"No role permitted")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DOM interface"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/API/HTMLMetaElement"},"HTMLMetaElement extension"))))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("h3",{id:"setting-zoom"},"Setting zoom"),(0,r.kt)("p",null,"Using the ",(0,r.kt)("inlineCode",{parentName:"p"},"<map-meta>")," element to specify the native zoom and fallback zoom range\nfor a ",(0,r.kt)("inlineCode",{parentName:"p"},"<map-feature>"),".  The coordinate encoding is narrowly determined for the feature,\nby the ",(0,r.kt)("inlineCode",{parentName:"p"},'<map-geometry cs="gcrs">')," attribute, which tells the polyfill how to parse and\nprocess strings of coordinates found in descendant ",(0,r.kt)("inlineCode",{parentName:"p"},"<map-coordinates>")," elements."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<layer- label="Favourite Restaurant" checked>\n  <map-meta name="projection" content="OSMTILE"></map-meta>\n  <map-meta name="zoom" content="min=0,max=22,value=3"></map-meta>\n  <map-feature>\n    <map-featurecaption>Big Daddy\'s Crab Shack</map-featurecaption>\n      <map-geometry cs="gcrs">\n          <map-point>\n            <map-coordinates>-75.690276 45.41868</map-coordinates>\n          </map-point>\n      </map-geometry>\n  </map-feature>\n</layer->\n')),(0,r.kt)("h3",{id:"setting-extent"},"Setting extent"),(0,r.kt)("p",null,"Using the ",(0,r.kt)("inlineCode",{parentName:"p"},"<map-meta>")," element to establish the pcrs (easting,northing) ",(0,r.kt)("strong",{parentName:"p"},"extent")," of\na map layer, the coordinates of which are encoded as gcrs pairs. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<layer- label="Favourite Restaurant" checked>\n  <map-meta name="projection" content="OSMTILE"></map-meta>\n  <map-meta name="zoom" content="min=0,max=22,value=3"></map-meta>\n  <map-meta name="extent" content="top-left-easting=-8433179, top-left-northing=5689316, bottom-right-easting=-8420968,bottom-right-northing=5683139"></map-meta>\n  <map-feature>\n    <map-featurecaption>Big Daddy\'s Crab Shack</map-featurecaption>\n      <map-geometry cs="gcrs">\n          <map-point>\n            <map-coordinates>-75.690276 45.41868</map-coordinates>\n          </map-point>\n      </map-geometry>\n  </map-feature>\n</layer->\n')),(0,r.kt)("h3",{id:"fallback-cs-for-map-geometry"},"Fallback cs for ","<","map-geometry",">"),(0,r.kt)("p",null,"Using the ",(0,r.kt)("inlineCode",{parentName:"p"},"<map-meta>")," to specify a fallback coordinate encoding for geometries in\nthe layer. The encoding of the coordinates is identified by the use of the\n",(0,r.kt)("inlineCode",{parentName:"p"},'<map-meta name="cs" content="gcrs">')," element. Such a declaration tells the\npolyfill how to parse and process any coordinates that don't have an ancestor\n",(0,r.kt)("inlineCode",{parentName:"p"},'<map-geometry cs="">')," coordinate encoding declaration.  Note that the zoom level\nat which the feature should be displayed is not specified, nor the extent. Both\nvalues will fall back to the default values for the projection. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<layer- label="Favourite Restaurant" checked>\n  <map-meta name="projection" content="OSMTILE"></map-meta>\n  <map-meta name="cs" content="gcrs" ></map-meta>\n  <map-feature>\n    <map-featurecaption>Big Daddy\'s Crab Shack</map-featurecaption>\n      <map-geometry>\n          <map-point>\n            <map-coordinates>-75.690276 45.41868</map-coordinates>\n          </map-point>\n      </map-geometry>\n  </map-feature>\n</layer->\n')),(0,r.kt)("h3",{id:"default-metadata"},"Default metadata"),(0,r.kt)("p",null,"Allowing all metadata values to default to those of the map's projection.  The\nfeature will be displayed at all zoom levels, and the coordinates are by default\ninterpreted to be ",(0,r.kt)("inlineCode",{parentName:"p"},"gcrs")," (longitude latitude).  The extent of the layer defaults\nto that of the projection."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<layer- label="Favourite Restaurant" checked>\n  <map-feature>\n    <map-featurecaption>Big Daddy\'s Crab Shack</map-featurecaption>\n      <map-geometry>\n          <map-point>\n            <map-coordinates>-75.690276 45.41868</map-coordinates>\n          </map-point>\n      </map-geometry>\n  </map-feature>\n</layer->\n')),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"specifications"},"Specifications"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://maps4html.org/MapML/spec/#the-meta-element-0"},"MapML meta element"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://html.spec.whatwg.org/multipage/semantics.html#the-meta-element"},"HTML meta element"))))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"requirements"},"Requirements"),(0,r.kt)("p",null,"Need to be documented."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"see-also"},"See Also"),(0,r.kt)("hr",null),(0,r.kt)("blockquote",null,(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/Maps4HTML/web-map-doc/edit/main/docs/elements/meta.md"},"Edit this page on ",(0,r.kt)("strong",{parentName:"a"},"Github"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://gitter.im/Maps4HTML/chat"},"Chat with us on ",(0,r.kt)("strong",{parentName:"a"},"Gitter"))))))}c.isMDXComponent=!0},5568:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/map-context-menu-copy-extent-196c715b18d338f669bd75d152b28bdb.png"}}]);