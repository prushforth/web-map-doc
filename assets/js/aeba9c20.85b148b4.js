"use strict";(self.webpackChunkmapml_viewer_doc=self.webpackChunkmapml_viewer_doc||[]).push([[493],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),i=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=i(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),u=i(n),d=r,h=u["".concat(s,".").concat(d)]||u[d]||c[d]||o;return n?a.createElement(h,l(l({ref:t},m),{},{components:n})):a.createElement(h,l({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var i=2;i<o;i++)l[i]=n[i];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8832:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>p,toc:()=>i});var a=n(7462),r=(n(7294),n(3905));const o={id:"span",title:"<map-span>",slug:"/other-elements/span/"},l=void 0,p={unversionedId:"elements/span",id:"elements/span",title:"<map-span>",description:"The ` element is useful when used together with html global attributes such as class. This element allows you to wrap the coordinate pairs in a ` element, allowing the wrapped coordinates to be targeted by CSS selectors, and thus independently styled.",source:"@site/docs/elements/span.md",sourceDirName:"elements",slug:"/other-elements/span/",permalink:"/web-map-doc/docs/other-elements/span/",draft:!1,tags:[],version:"current",frontMatter:{id:"span",title:"<map-span>",slug:"/other-elements/span/"},sidebar:"sidebar",previous:{title:"<map-properties>",permalink:"/web-map-doc/docs/elements/properties/"},next:{title:"<map-a>",permalink:"/web-map-doc/docs/other-elements/map-a/"}},s={},i=[{value:"Examples",id:"examples",level:2},{value:"Styling Polygon Holes",id:"styling-polygon-holes",level:3},{value:"Specifications",id:"specifications",level:2}],m={toc:i};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"<map-span>")," element is useful when used together with html global attributes such as ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/class"},"class"),". This element allows you to wrap the coordinate pairs in a ",(0,r.kt)("inlineCode",{parentName:"p"},"<map-coordinates>")," element, allowing the wrapped coordinates to be targeted by CSS selectors, and thus independently styled."),(0,r.kt)("iframe",{src:"../../../demo/map-span-demo/",title:"MapML Demo",height:"410",width:"100%",scrolling:"no",frameBorder:"0"}),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("h3",{id:"styling-polygon-holes"},"Styling Polygon Holes"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<mapml-viewer projection="OSMTILE" zoom="10" lon="-75.7" lat="45.4" controls>\n  <layer- label="OpenStreetMap" src="../data/osm.mapml" checked></layer->\n  <layer- label="Polygon" checked>\n    <map-meta name="projection" content="OSMTILE"></map-meta>\n    <map-feature>\n      <map-featurecaption>Polygon</map-featurecaption>\n      \x3c!-- Setting the geometry coordinates to gcrs, as the default is pcrs --\x3e\n      <map-geometry cs="gcrs">\n        <map-polygon>\n          <map-coordinates>-75.5859375 45.4656690 -75.6813812 45.4533876 -75.6961441 45.4239978 -75.7249832 45.4083331 -75.7792282 45.3772317 -75.7534790 45.3294614 -75.5831909 45.3815724 -75.6024170 45.4273712 -75.5673981 45.4639834 -75.5859375 45.4656690</map-coordinates>\n          <map-coordinates><map-span class="hole">-75.6467062 45.4215881 -75.6889363 45.4049585 -75.6693647 45.3767494 -75.6270640 45.3924229 -75.6467062 45.4215881</map-span></map-coordinates>\n        </map-polygon>\n      </map-geometry>\n      <map-properties><h2>This is a Polygon</h2></map-properties>\n    </map-feature>\n  </layer->\n</mapml-viewer>\n')),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"specifications"},"Specifications"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-span-element"},"HTML span element"))))),(0,r.kt)("hr",null),(0,r.kt)("blockquote",null,(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/Maps4HTML/web-map-doc/edit/main/docs/elements/span.md"},"Edit this page on ",(0,r.kt)("strong",{parentName:"a"},"Github"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://gitter.im/Maps4HTML/chat"},"Chat with us on ",(0,r.kt)("strong",{parentName:"a"},"Gitter"))))))}c.isMDXComponent=!0}}]);