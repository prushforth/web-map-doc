"use strict";(self.webpackChunkmapml_viewer_doc=self.webpackChunkmapml_viewer_doc||[]).push([[7539],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return h}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),s=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(a),h=n,m=u["".concat(c,".").concat(h)]||u[h]||d[h]||l;return a?r.createElement(m,o(o({ref:t},p),{},{components:a})):r.createElement(m,o({ref:t},p))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var s=2;s<l;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},5782:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return u}});var r=a(7462),n=a(3366),l=(a(7294),a(3905)),o=["components"],i={id:"layer-api",title:"HTMLLayerElement",slug:"/api/layer-api"},c="HTMLLayerElement",s={unversionedId:"api/layer-api",id:"api/layer-api",isDocsHomePage:!1,title:"HTMLLayerElement",description:"Properties",source:"@site/docs/api/layer-api.md",sourceDirName:"api",slug:"/api/layer-api",permalink:"/web-map-doc/docs/api/layer-api",tags:[],version:"current",frontMatter:{id:"layer-api",title:"HTMLLayerElement",slug:"/api/layer-api"},sidebar:"sidebar",previous:{title:"HTMLMapmlViewerElement",permalink:"/web-map-doc/docs/api/mapml-viewer-api"},next:{title:"Custom Projections API",permalink:"/web-map-doc/docs/api/custom-projections"}},p=[{value:"Properties",id:"properties",children:[{value:"checked",id:"checked",children:[]},{value:"hidden",id:"hidden",children:[]},{value:"disabled",id:"disabled",children:[]}]},{value:"map viewport.",id:"map-viewport",children:[{value:"src",id:"src",children:[]},{value:"opacity",id:"opacity",children:[]}]},{value:"Methods",id:"methods",children:[{value:"focus()",id:"focus",children:[]}]},{value:"Events",id:"events",children:[]}],d={toc:p};function u(e){var t=e.components,a=(0,n.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"htmllayerelement"},"HTMLLayerElement"),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("h3",{id:"checked"},"checked"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"HTMLLayerElement.checked")," is a boolean read/write value that turns the layer on and off,\nand reflects the checked attribute. The checked state is reflected in the layer\ncontrol user interface for the layer via a checkbox next to the layer name.  The\nchecked property can be used to programatically change the checked state of the layer.\nThe checked property can't be changed if the disabled property is set."),(0,l.kt)("p",null,"To set the checked state of a layer to on:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"let layer = document.querySelector('layer-');\nlayer.checked = true; // valid values are true | false\n")),(0,l.kt)("p",null,"To read the checked state of the layer:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"let layer = document.querySelector('layer-');\nlet isChecked = layer.checked;\n")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"hidden"},"hidden"),(0,l.kt)("p",null,"HTMLLayerElement.hidden is a boolean  read/write value that hides or unhides the\nlayer in the layer control only.  The hidden state has no bearing on the presence\nof layer content on the map, it only affects the layer presence layer control.\nThis can be useful for managing short-lived layers, such as search results, to the map without\nforcing the user to manage the layer state, which is done by your application.\nIt can also be useful for managing a permanent base layer without cluttering the\nuser interface."),(0,l.kt)("p",null,'To set/update whether the layer is "hidden":'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"let layer = document.querySelector('layer-');\nlayer.hidden = true; // valid values are true | false\n")),(0,l.kt)("p",null,"To get the ",(0,l.kt)("inlineCode",{parentName:"p"},"<layer->"),"'s hidden value:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"let layer = document.querySelector('layer-');\nlet isHidden = layer.hidden;\n")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"disabled"},"disabled"),(0,l.kt)("p",null,"HTMLLayerElement.disabled provides READ-ONLY access to the disabled state of the\nlayer.  A layer becomes disabled if its contents are not rendered, either by being\ncompletely outside the current map extent or by having an error associated to the\nlayer processing, such as being in a projection that is incompatible with the\nprojection of the map. When a layer is disabled, the user can't interact with it\nin the layer control, and it will not be visible in the map viewport.  If a layer\nbecomes not-disabled, through manipulation of the map, for example, the layer\nwill become interactable in the layer control, and should be visible in the "),(0,l.kt)("h2",{id:"map-viewport"},"map viewport."),(0,l.kt)("p",null,"HTMLLayerElement.label provides read/write access to the label used in the layer control for\nthe layer."),(0,l.kt)("p",null,"To set/update the ",(0,l.kt)("inlineCode",{parentName:"p"},"<layer->"),"'s label:"),(0,l.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Needs To Be Implemented, Currently doesn't update the label in layer controls"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"let layer = document.querySelector('layer-');\nlayer.label = \"New Title\";\n")),(0,l.kt)("p",null,"To get the ",(0,l.kt)("inlineCode",{parentName:"p"},"<layer->"),"'s label value:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"let layer = document.querySelector('layer-');\nlet label = layer.label;\n")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"src"},"src"),(0,l.kt)("p",null,"HTMLLayerElement.src reflects the src HTML attribute, and specifies the URL of the\nMapML document for the layer.  The src property may be undefined if the layer\ncontains inline content.  If the src property returns a value, any inline content\nwill be ignored.\nTo set/update the ",(0,l.kt)("inlineCode",{parentName:"p"},"<layer->"),"'s src:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"let layer = document.querySelector('layer-');\nlayer.src = \"https://example.org\";\n")),(0,l.kt)("p",null,"To get the ",(0,l.kt)("inlineCode",{parentName:"p"},"<layer->"),"'s src value (URL):"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"let layer = document.querySelector('layer-');\nlet url = layer.src;\n")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"opacity"},"opacity"),(0,l.kt)("p",null,"HTMLLayerElement.opacity read/write access to the opacity % value, reflected in\nthe layer control opacity input slider control."),(0,l.kt)("p",null,"To set/update the ",(0,l.kt)("inlineCode",{parentName:"p"},"<layer->"),"'s opacity:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"let layer = document.querySelector('layer-');\nlayer.opacity = 0.5; // valid values from 0 to 1\n")),(0,l.kt)("p",null,"To get the ",(0,l.kt)("inlineCode",{parentName:"p"},"<layer->"),"'s opacity value:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"let layer = document.querySelector('layer-');\nlet opacity = layer.opacity;\n")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"methods"},"Methods"),(0,l.kt)("h3",{id:"focus"},"focus()"),(0,l.kt)("p",null,"HTMLLayerElement.focus() Zoom to the layer's extent. Note: this method is mis-named. It will\nbe renamed, per ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/Maps4HTML/Web-Map-Custom-Element/issues/587"},"this issue"),".        "),(0,l.kt)("p",null,"To fit the layer's extent in the map as much as possible:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"let layer = document.querySelector('layer-');\nlayer.focus();\n")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"events"},"Events"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Event name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"changestyle"),(0,l.kt)("td",{parentName:"tr",align:null},"Fired before the layer changes src due to user selecting alternate style in layer control")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"changeprojection"),(0,l.kt)("td",{parentName:"tr",align:null},"Fired before the layer changes projection due to its declared projection being not equal to that of the map")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"extentload"),(0,l.kt)("td",{parentName:"tr",align:null},"Fired when the metadata for a layer has loaded, but before loading tiles, features and other content")))),(0,l.kt)("hr",null))}u.isMDXComponent=!0}}]);