"use strict";(self.webpackChunkmapml_viewer_doc=self.webpackChunkmapml_viewer_doc||[]).push([[5476],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return c}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=s(n),c=i,h=u["".concat(p,".").concat(c)]||u[c]||d[c]||l;return n?a.createElement(h,r(r({ref:t},m),{},{components:n})):a.createElement(h,r({ref:t},m))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var s=2;s<l;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9503:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return m},default:function(){return u}});var a=n(7462),i=n(3366),l=(n(7294),n(3905)),r=["components"],o={id:"datalist",title:"<map-datalist>",slug:"/elements/datalist/"},p=void 0,s={unversionedId:"elements/datalist",id:"elements/datalist",title:"<map-datalist>",description:"The ` element is an extension of HTML . It is a child of the  element and is used by the list attribute of the  element by linking the id of `:",source:"@site/docs/elements/datalist.md",sourceDirName:"elements",slug:"/elements/datalist/",permalink:"/web-map-doc/docs/elements/datalist/",tags:[],version:"current",frontMatter:{id:"datalist",title:"<map-datalist>",slug:"/elements/datalist/"},sidebar:"sidebar",previous:{title:"<map-input>",permalink:"/web-map-doc/docs/elements/input/"},next:{title:"<map-link>",permalink:"/web-map-doc/docs/elements/link/"}},m=[{value:"Attributes",id:"attributes",children:[{value:"<code>id</code>",id:"id",children:[],level:3}],level:2},{value:"Child Elements",id:"child-elements",children:[{value:"<code>&lt;map-option&gt;</code>",id:"map-option",children:[{value:"Attributes",id:"attributes-1",children:[],level:4}],level:3}],level:2},{value:"Specifications",id:"specifications",children:[],level:2}],d={toc:m};function u(e){var t=e.components,n=(0,i.Z)(e,r);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"<map-datalist>")," element is an extension of HTML ",(0,l.kt)("inlineCode",{parentName:"p"},"<datalist>"),". It is a child of the ",(0,l.kt)("inlineCode",{parentName:"p"},"<map-extent>")," element and is used by the ",(0,l.kt)("inlineCode",{parentName:"p"},"list")," attribute of the ",(0,l.kt)("inlineCode",{parentName:"p"},"<map-input>")," element by linking the ",(0,l.kt)("inlineCode",{parentName:"p"},"id")," of ",(0,l.kt)("inlineCode",{parentName:"p"},"<map-datalist>"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<map-input name="s" type="hidden" shard="true" list="servers"></map-input>\n<map-datalist id="servers">\n  <map-option value="a"></map-option>\n  <map-option value="b"></map-option>\n  <map-option value="c"></map-option>\n</map-datalist>\n')),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"<map-datalist>")," is used alongside the ",(0,l.kt)("inlineCode",{parentName:"p"},"shard")," attribute of ",(0,l.kt)("inlineCode",{parentName:"p"},"<map-input>"),". It can list a set of values that will be used in a round-robin fashion for template variable substitution. This is useful for ",(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Glossary/Domain_sharding"},"domain sharding")," to increase parallelism of tile requests. Read more about it ",(0,l.kt)("a",{parentName:"p",href:"http://localhost:3000/web-map-doc/docs/elements/input/#shard"},"here"),"."),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"<map-datalist>")," element contains one or more ",(0,l.kt)("inlineCode",{parentName:"p"},"<map-option>")," elements."),(0,l.kt)("iframe",{src:"../../../demo/map-datalist-demo/",title:"MapML Demo",height:"410",width:"100%",scrolling:"no",frameBorder:"0"}),(0,l.kt)("h2",{id:"attributes"},"Attributes"),(0,l.kt)("h3",{id:"id"},(0,l.kt)("inlineCode",{parentName:"h3"},"id")),(0,l.kt)("p",null,"Sets the id of the ",(0,l.kt)("inlineCode",{parentName:"p"},"<map-datalist>")," element. This id is used by the ",(0,l.kt)("inlineCode",{parentName:"p"},"list")," attribute of the ",(0,l.kt)("inlineCode",{parentName:"p"},"<map-input>")," element, allowing it to link to the datalist."),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Click to view an example of the link between <map-datalist> and <map-input>"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<map-input name="s" type="hidden" shard="true" list="servers"></map-input>\n<map-datalist id="servers">\n  <map-option value="a"></map-option>\n  <map-option value="b"></map-option>\n  <map-option value="c"></map-option>\n</map-datalist>\n'))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"child-elements"},"Child Elements"),(0,l.kt)("h3",{id:"map-option"},(0,l.kt)("inlineCode",{parentName:"h3"},"<map-option>")),(0,l.kt)("p",null,"This element contains the values for the datalist. A ",(0,l.kt)("inlineCode",{parentName:"p"},"<map-datalist>")," element can contain one or more ",(0,l.kt)("inlineCode",{parentName:"p"},"<map-option>")," elements."),(0,l.kt)("h4",{id:"attributes-1"},"Attributes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"value"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"This allows you to set the value of the the datalist option.")))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"specifications"},"Specifications"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://maps4html.org/MapML/spec/#the-datalist-element-0"},"MapML datalist element"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://html.spec.whatwg.org/dev/form-elements.html#the-datalist-element"},"HTML datalist element"))))),(0,l.kt)("hr",null),(0,l.kt)("blockquote",null,(0,l.kt)("ul",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/Maps4HTML/web-map-doc/edit/main/docs/elements/datalist.md"},"Edit this page on ",(0,l.kt)("strong",{parentName:"a"},"Github"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://gitter.im/Maps4HTML/chat"},"Chat with us on ",(0,l.kt)("strong",{parentName:"a"},"Gitter"))))))}u.isMDXComponent=!0}}]);