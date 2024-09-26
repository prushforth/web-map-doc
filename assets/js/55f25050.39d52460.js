"use strict";(self.webpackChunkmapml_viewer_doc=self.webpackChunkmapml_viewer_doc||[]).push([[3689],{2808:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var a=n(4848),i=n(8453);const s={id:"getting-started",title:"MapML Introduction",slug:"/user-guide/getting-started"},o=void 0,r={id:"user-guide/getting-started",title:"MapML Introduction",description:"To make a web map, all you need is a little bit of knowledge of HTML, some of which you can find here.  You will find that HTML is a language that fills a bigger role for you as your knowledge of it grows.  There are many excellent free resources available on the web for learning HTML in all its richness.  We will try to give you what you need to get started with maps here.",source:"@site/docs/user-guide/getting-started.md",sourceDirName:"user-guide",slug:"/user-guide/getting-started",permalink:"/web-map-doc/docs/user-guide/getting-started",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"getting-started",title:"MapML Introduction",slug:"/user-guide/getting-started"},sidebar:"sidebar",previous:{title:"Using mvt styles",permalink:"/web-map-doc/docs/user-guide/using-styles"},next:{title:"Modifying the Map",permalink:"/web-map-doc/docs/user-guide/modifying-map"}},l={},d=[];function h(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",img:"img",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"To make a web map, all you need is a little bit of knowledge of HTML, some of which you can find here.  You will find that HTML is a language that fills a bigger role for you as your knowledge of it grows.  There are many excellent free resources available on the web for learning HTML in all its richness.  We will try to give you what you need to get started with maps here."}),"\n",(0,a.jsxs)(t.p,{children:["A web page is an 'application-inside-an-application', in which the content of a textual document (your page ",(0,a.jsx)(t.em,{children:"is"})," a textual HTML document) is activated or run by the browser (the 'outside' application)."]}),"\n",(0,a.jsx)(t.p,{children:"To begin, we will create a simple web page with some text, an image and a map.  You can copy-and-paste the HTML code you find here to first create and then progressively update your page to add more content."}),"\n",(0,a.jsx)(t.p,{children:"Let us start with some text paragraphs, and we will add an image and a map after that."}),"\n",(0,a.jsxs)(t.p,{children:["An HTML5 document starts with some 'boilerplate' text, and is followed by some text 'tags' (or elements \u2013 the parts of the document that begin with ",(0,a.jsx)(t.code,{children:"<"})," and end with ",(0,a.jsx)(t.code,{children:">"}),") which define sections of the document:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-html",children:"<!DOCTYPE html>\n<html>\n      <head>\n          <title>My First Web Map</title>  \n      </head>\n      <body>    \n          <p>Web pages are easy-peasy</p>  \n      </body>\n</html>\n"})}),"\n",(0,a.jsx)(t.p,{children:"The elements are the instructions which tell the browser what to do, and where."}),"\n",(0,a.jsxs)(t.p,{children:["If you copy-and-paste the above text into a text editor (for example 'Notepad' on MS Windows), starting with ",(0,a.jsx)(t.code,{children:"<!DOCTYPE html> "}),"and ending with ",(0,a.jsx)(t.code,{children:"</html>"}),", and save it as 'mymap.html', you should be able to view it with a web browser by double-clicking on 'mymap.html' in the operating system. It should look something like this:"]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Web pages are easy peasy",src:n(958).A+"",width:"687",height:"638"})}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.code,{children:"<p></p>"})," element is used to wrap text paragraphs. Paragraphs are one of the basic building blocks of documents. Another building block is images or pictures. An image can be included in an HTML document 'by reference'. That is, even though an image is not text (images are another form of 'binary' data), it can be included in a text document by using the appropriate element and referring to it by its URL. The browser will lay out the document, fetch the image and include it in the flow of the text where the ",(0,a.jsx)(t.code,{children:"<img>"})," element occurs."]}),"\n",(0,a.jsx)(t.p,{children:"Let us include an image in our document now:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-html",children:'<!DOCTYPE html>\n<html>\n     <head>    \n         <title>My First Web Map</title>\n     </head>  \n     <body>\n         <p>Web pages are easy-peasy</p>\n\t\t // highlight-next-line\n         <img src="sunset.jpg" alt="Sunset on the river"/>  \n     </body>\n</html>\n'})}),"\n",(0,a.jsx)(t.p,{children:"Once you save the change highlighted above, you can refresh the document (by clicking on the browser refresh button) you will see a page that looks like this:"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Web images are easy peasy",src:n(3036).A+"",width:"687",height:"638"})}),"\n",(0,a.jsx)(t.p,{children:"So far so good. Let us replace that image with a map now."}),"\n",(0,a.jsxs)(t.p,{children:["You have learned how to include resources like images in your web page, and now we will do something similar with a map. Today's browsers do not yet support maps directly, but that is OK, because they ",(0,a.jsx)(t.em,{children:"do"})," support 'custom elements'. Custom elements are like regular HTML elements that we have already seen (e.g. ",(0,a.jsx)(t.code,{children:"<p>"})," element), except their behaviour is provided by JavaScript programs. In order for your browser to use the custom ",(0,a.jsx)(t.code,{children:"<mapml-viewer>"})," element, we have to include a couple of web resources (JavaScript programs) into our HTML document. That is pretty easy, and you achieve that similarly (but differently) to the technique you used to include an image above. Include the highlighted lines below at the same location (that is, within the ",(0,a.jsx)(t.code,{children:"<head>"})," element) in your evolving HTML document:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-html",children:'<!DOCTYPE html>\n<html>\n    <head>\n       <title>My First Web Map</title>\n\t   // highlight-next-line\n       <script type="module" src="https://cdn.jsdelivr.net/npm/@maps4html/mapml/dist/mapml.js" crossorigin><\/script>\n    </head>\n    <body>\n      <p>Web pages are easy-peasy</p>\n      <img src="sunset.jpg" alt="Sunset on the river"/>\n  </body>\n</html>\n'})}),"\n",(0,a.jsxs)(t.p,{children:["It is worth noting that in the future, we are hopeful that browsers will begin to support web maps with the new ",(0,a.jsx)(t.code,{children:"<mapml-viewer>"})," element syntax, but for now we can accomplish everything we need to without waiting for that day to come."]}),"\n",(0,a.jsxs)(t.p,{children:["The next step in our lesson is to remove the image and replace it with a map, using the ",(0,a.jsx)(t.code,{children:"<mapml-viewer>"})," element with a single layer. To create a dynamic web map in our page now is as easy as including the lines highlighted below, and saving:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-html",children:'<!DOCTYPE html>\n<html>\n      <head>\n          <title>My First Web Map</title>\n          <script type="module" src="https://cdn.jsdelivr.net/npm/@maps4html/mapml/dist/mapml.js" crossorigin><\/script>\n      </head>\n      <body>\n         <p>Web <s>pages</s> maps are easy-peasy</p>\n\t\t // highlight-start\n         <mapml-viewer projection="OSMTILE" zoom="2" lat="67.6" lon="-100.9" width="400" height="300" controls>\n             <layer- src="https://geogratis.gc.ca/mapml/en/osmtile/osm/" label="Open Street Map" checked ></layer->\n         </mapml-viewer>\n\t\t // highlight-end\n      </body>\n</html>\n'})}),"\n",(0,a.jsx)(t.p,{children:"If you save, and then press the 'Refresh' button, you should see a simple map that looks something like this:"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Web maps are easy peasy",src:n(6579).A+"",width:"690",height:"640"})}),"\n",(0,a.jsx)(t.admonition,{type:"tip",children:(0,a.jsxs)(t.p,{children:["View the final page ",(0,a.jsx)(t.a,{href:"https://maps4html.org/web-map-doc/demo/Tutorial/Getting%20Started/",children:"here"}),"."]})}),"\n",(0,a.jsx)(t.p,{children:"You will notice that if you use the mouse or keyboard on the map that you can zoom and pan, as well as turn the layer off and on."}),"\n",(0,a.jsxs)(t.p,{children:["Congratulations! You have just created your first web map. You are ready to proceed to more advanced mapping tasks using the web ",(0,a.jsx)(t.code,{children:"<mapml-viewer>"})," custom element."]})]})}function c(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},3036:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/web_images_are_easy_peasy_en-533cb701f18987645e003a9be0dc98db.png"},6579:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/web_maps_are_easy_peasy_en-6e630898d3262642db0376f75f7ba74e.png"},958:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/web_pages_are_easy_peasy_en-03953378fd65bbcc10490f3e6e6f6b1b.png"},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>r});var a=n(6540);const i={},s=a.createContext(i);function o(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);