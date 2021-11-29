"use strict";(self.webpackChunkmapml_viewer_doc=self.webpackChunkmapml_viewer_doc||[]).push([[695],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(t),d=o,f=p["".concat(s,".").concat(d)]||p[d]||m[d]||i;return t?r.createElement(f,a(a({ref:n},u),{},{components:t})):r.createElement(f,a({ref:n},u))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=p;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},487:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var r=t(7462),o=t(3366),i=(t(7294),t(3905)),a=["components"],l={id:"building",title:"Building from source"},s=void 0,c={unversionedId:"building",id:"building",isDocsHomePage:!1,title:"Building from source",description:"Build the project from source code",source:"@site/docs/building.md",sourceDirName:".",slug:"/building",permalink:"/web-map-doc/docs/building",tags:[],version:"current",frontMatter:{id:"building",title:"Building from source"},sidebar:"sidebar",previous:{title:"Installation",permalink:"/web-map-doc/docs/installation"},next:{title:"<mapml-viewer>: The Map element",permalink:"/web-map-doc/docs/maps/mapml-viewer"}},u=[{value:"Build the project from source code",id:"build-the-project-from-source-code",children:[]}],m={toc:u};function p(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"build-the-project-from-source-code"},"Build the project from source code"),(0,i.kt)("p",null,"As an alternative to installing a published version of the library with npm, you may wish to build the latest changes from the project from a clone of the source code. You will first require a working installation of node.js and npm. "),(0,i.kt)("p",null,"Clone the project using git:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ git clone https://github.com/Maps4HTML/Web-Map-Custom-Element.git web-map-custom-element\nCloning into 'web-map-custom-element'...\nremote: Enumerating objects: 23005, done.\nremote: Counting objects: 100% (959/959), done.\nremote: Compressing objects: 100% (472/472), done.\nremote: Total 23005 (delta 602), reused 746 (delta 473), pack-reused 22046\nReceiving objects: 100% (23005/23005), 92.76 MiB | 34.93 MiB/s, done.\nResolving deltas: 100% (8424/8424), done.\nUpdating files: 100% (217/217), done.\n\n$\n")),(0,i.kt)("p",null,'Change directories, into the cloned directory and run "npm install" to install the project\'s development dependencies:'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"prushfor@DESKTOP-8T9A8T8 MINGW64 ~/Documents/web-map-custom-element (main)\n$ cd web-map-custom-element\n$ npm install\n...\nadded 976 packages from 513 contributors and audited 978 packages in 33.576s\n\nprushfor@DESKTOP-8T9A8T8 MINGW64 ~/Documents/web-map-custom-element (main)\n$\n")),(0,i.kt)("p",null,'Finally, build the project from source with "grunt", which should have been installed by npm in the previous step:'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'$ grunt default\nRunning "clean:dist" (clean) task\n>> 1 path cleaned.\n\nRunning "copy:main" (copy) task\nMODIFYING:  node_modules/leaflet/dist/leaflet-src.js\nMODIFYING:  node_modules/proj4/dist/proj4-src.js\nPATCHING:  node_modules/proj4leaflet/src/proj4leaflet.js\nMODIFYING:  node_modules/@runette/leaflet-fullscreen/dist/Leaflet.fullscreen.js\nMODIFYING:  index.html\nCopied 12 files\n\nRunning "copy:images" (copy) task\nCopied 5 files\n\nRunning "jshint:files" (jshint) task\n>> 30 files lint free.\n\nRunning "rollup:main" (rollup) task\n\nRunning "uglify:dist" (uglify) task\n>> 1 file created 259.75 kB \u0393\xe5\xc6 125.97 kB\n\nDone.\n\nprushfor@DESKTOP-8T9A8T8 MINGW64 ~/Documents/web-map-custom-element (main)\n$\n')),(0,i.kt)("p",null,"As reported by the last command, you should now have a folder named 'dist' in your project directory, containing the build artifacts that are necessary to create Web pages containing maps. You can copy the ",(0,i.kt)("inlineCode",{parentName:"p"},"dist")," folder into your Web site, where you create HTML pages that refer to the root JavaScript module that encompasses the ",(0,i.kt)("inlineCode",{parentName:"p"},"<mapml-viewer>")," custom elements. For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'prushfor@DESKTOP-8T9A8T8 MINGW64 ~/Documents/web-map-custom-element/mysite (main)\n$ mkdir mysite\n$ cp -r dist mysite\n$ cd mysite\n$ cat > index.html << EOF\n<!doctype html>\n<html lang="en">\n  <head>\n    <meta charset="utf-8">\n    <meta name="viewport" content="width=device-width,initial-scale=1">\n    <title>index.html</title>\n    <script type="module" src="dist/mapml-viewer.js"><\/script>\n    <style>\n      html,body {height: 100%;}\n      * {padding: 0;margin: 0;padding: 0;}\n      mapml-viewer:defined {max-width: 100%;width: 100%;height: 100%;border: none;vertical-align: middle;}\n    </style>\n  </head>\n  <body>\n    <mapml-viewer projection="CBMTILE" zoom="2" lat="45" lon="-90" controls>\n      <layer- label="Canada Base Map" src="https://geogratis.gc.ca/mapml/en/cbmtile/cbmt/" checked></layer->\n    </mapml-viewer>\n  </body>\n</html>\nEOF\nprushfor@DESKTOP-8T9A8T8 MINGW64 ~/Documents/web-map-custom-element/mysite (main)\n$ \n')),(0,i.kt)("p",null,"You can serve your mysite directory with any Web server. If you load index.html in a Web browser, you should see a full-size interactive Web map of Canada."))}p.isMDXComponent=!0}}]);