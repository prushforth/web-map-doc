"use strict";(self.webpackChunkmapml_viewer_doc=self.webpackChunkmapml_viewer_doc||[]).push([[3217],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=o,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9803:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],l={id:"installation",title:"Installation"},s=void 0,c={unversionedId:"installation",id:"installation",title:"Installation",description:"Install the `` suite of custom elements",source:"@site/docs/installation.md",sourceDirName:".",slug:"/installation",permalink:"/web-map-doc/docs/installation",tags:[],version:"current",frontMatter:{id:"installation",title:"Installation"},sidebar:"sidebar",previous:{title:"Introduction",permalink:"/web-map-doc/docs/"},next:{title:"Building from source",permalink:"/web-map-doc/docs/building"}},p=[{value:"Install the <code>&lt;mapml-viewer&gt;</code> suite of custom elements",id:"install-the-mapml-viewer-suite-of-custom-elements",children:[{value:"Requirements",id:"requirements",children:[{value:"Add the Script to a Web page",id:"add-the-script-to-a-web-page",children:[],level:4}],level:3}],level:2}],u={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"install-the-mapml-viewer-suite-of-custom-elements"},"Install the ",(0,a.kt)("inlineCode",{parentName:"h2"},"<mapml-viewer>")," suite of custom elements"),(0,a.kt)("h3",{id:"requirements"},"Requirements"),(0,a.kt)("p",null,"To install the ",(0,a.kt)("inlineCode",{parentName:"p"},"<mapml-viewer>")," in your web site project, you use the Node Package Manager (npm), so to get that you must install ",(0,a.kt)("a",{parentName:"p",href:"https://nodejs.org/en/download/"},"node.js"),". npm should be installed by the linked installers.  You can now obtain the latest version of the ",(0,a.kt)("inlineCode",{parentName:"p"},"<mapml-viewer>")," suite of custom elements, by installing it in the node_modules directory of your web site directory, using the following commands:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ cd ../test\n\n$ npm install @maps4html/web-map-custom-element\n\n+ @maps4html/web-map-custom-element@0.8.3\nadded 1 package from 2 contributors and audited 1 package in 1.605s\nfound 0 vulnerabilities\n\n$\n")),(0,a.kt)("p",null,"Once installation is complete, you will have a node_modules/@maps4html/web-map-custom-element subdirectory, containing a ",(0,a.kt)("inlineCode",{parentName:"p"},"dist")," folder with the required JavaScript, CSS and HTML files to support the ",(0,a.kt)("inlineCode",{parentName:"p"},"<mapml-viewer>"),".  "),(0,a.kt)("h4",{id:"add-the-script-to-a-web-page"},"Add the Script to a Web page"),(0,a.kt)("p",null,"Add the following to the ",(0,a.kt)("inlineCode",{parentName:"p"},"<head>")," of your HTML code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<script type="module" src="./node_modules/@maps4html/web-map-custom-element/dist/mapml-viewer.js"><\/script>\n')),(0,a.kt)("p",null,"You can now use ",(0,a.kt)("inlineCode",{parentName:"p"},"<mapml-viewer>"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"<layer->")," and the other elements described here on your web pages."))}m.isMDXComponent=!0}}]);