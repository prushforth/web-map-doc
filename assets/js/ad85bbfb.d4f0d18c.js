"use strict";(self.webpackChunkmapml_viewer_doc=self.webpackChunkmapml_viewer_doc||[]).push([[9009],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=a.createContext({}),p=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(m.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,m=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=p(n),d=r,f=c["".concat(m,".").concat(d)]||c[d]||u[d]||i;return n?a.createElement(f,o(o({ref:t},s),{},{components:n})):a.createElement(f,o({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l[c]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9973:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={id:"custom-rendering",title:"Custom Rendering API",slug:"/api/custom-rendering"},o=void 0,l={unversionedId:"api/custom-rendering",id:"api/custom-rendering",title:"Custom Rendering API",description:"The Custom Rendering API allows developers to circumvent MapML's rendering and draw anything within",source:"@site/docs/api/custom-rendering.md",sourceDirName:"api",slug:"/api/custom-rendering",permalink:"/web-map-doc/docs/api/custom-rendering",draft:!1,tags:[],version:"current",frontMatter:{id:"custom-rendering",title:"Custom Rendering API",slug:"/api/custom-rendering"},sidebar:"sidebar",previous:{title:"Custom Projections API",permalink:"/web-map-doc/docs/api/custom-projections"},next:{title:"About Extension",permalink:"/web-map-doc/docs/extension/about"}},m={},p=[{value:"Custom Tiles",id:"custom-tiles",level:2},{value:"<code>tileloadstart</code> Event",id:"tileloadstart-event",level:3},{value:"Example",id:"example",level:3},{value:"Custom Image",id:"custom-image",level:2}],s={toc:p},c="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The Custom Rendering API allows developers to circumvent MapML's rendering and draw anything within\nHTML's domain onto the map."),(0,r.kt)("h2",{id:"custom-tiles"},"Custom Tiles"),(0,r.kt)("p",null,"To render custom tiles using JavaScript, listen for the ",(0,r.kt)("inlineCode",{parentName:"p"},"tileloadstart")," event on a templated layer's ",(0,r.kt)("inlineCode",{parentName:"p"},'<map-link rel="tile">')," element."),(0,r.kt)("h3",{id:"tileloadstart-event"},(0,r.kt)("inlineCode",{parentName:"h3"},"tileloadstart")," Event"),(0,r.kt)("p",null,"This event is fired when a tile is first being created, the event contains the following structure in its detail property:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"{\n  x: 1,    // tilematrix x value of the tile loaded\n  y: 2,    // tilematrix y value of the tile loaded\n  zoom: 3, // zoom level of the tile loaded\n  appendTile: function appendTile ( customTile ) {...} // pass custom tile as an argument to function\n}\n")),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("p",null,"The map:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<mapml-viewer projection="OSMTILE" zoom="0" lat="45" lon="-75" controls>\n  <layer- label="Custom Tiles" checked>\n    <map-meta name="zoom" content="min=0,max=23" ></map-meta>\n    <map-extent units="OSMTILE">\n      <map-input name="zoomLevel" type="zoom" min="0" max="23" value="1" ></map-input>\n      <map-input name="row" type="location" axis="row" units="tilematrix" min="0" max="2" ></map-input>\n      <map-input name="col" type="location" axis="column" units="tilematrix" min="0" max="2" ></map-input>\n      \x3c!-- listen for the tileloadstart event on this element --\x3e\n      <map-link rel="tile" title="" tref="" ></map-link>\n    </map-extent>\n  </layer->\n</mapml-viewer>\n')),(0,r.kt)("p",null,"The JavaScript for creating custom tiles:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'let layer = document.querySelector("body > mapml-viewer > layer- > map-extent > map-link");\n    layer.addEventListener("tileloadstart", (e) => {\n      let customTile = document.createElement("p");\n      customTile.innerHTML = `x: {e.detail.x} y: {e.detail.y} zoom: {e.detail.zoom}`;\n      e.detail.appendTile(customTile);\n    });\n')),(0,r.kt)("p",null,"In this example the ",(0,r.kt)("inlineCode",{parentName:"p"},"customTile")," is an HTML ",(0,r.kt)("inlineCode",{parentName:"p"},"<p>"),", but you can use any HTML Element. Simply append the\ncreated element using the ",(0,r.kt)("inlineCode",{parentName:"p"},"(tileloadstart event).detail.appendTile()")," function, passing the custom tile as an argument of the function."),(0,r.kt)("h2",{id:"custom-image"},"Custom Image"),(0,r.kt)("admonition",{type:"important"},(0,r.kt)("p",{parentName:"admonition"},"Needs to be implemented.")))}u.isMDXComponent=!0}}]);