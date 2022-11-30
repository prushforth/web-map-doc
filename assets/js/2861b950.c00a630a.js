"use strict";(self.webpackChunkmapml_viewer_doc=self.webpackChunkmapml_viewer_doc||[]).push([[7404],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>d});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function m(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=m(e,["components","mdxType","originalType","parentName"]),u=p(a),d=r,h=u["".concat(i,".").concat(d)]||u[d]||c[d]||o;return a?n.createElement(h,l(l({ref:t},s),{},{components:a})):n.createElement(h,l({ref:t},s))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=u;var m={};for(var i in t)hasOwnProperty.call(t,i)&&(m[i]=t[i]);m.originalType=e,m.mdxType="string"==typeof e?e:r,l[1]=m;for(var p=2;p<o;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},6792:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>m,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const o={id:"static-features",title:"Static Features Layer",slug:"/layers/static-features"},l=void 0,m={unversionedId:"layers/static-features",id:"layers/static-features",title:"Static Features Layer",description:"In this section, we will learn about creating a static feature layer. A static feature is an inline feature that is rendered on the map as SVG. This allows the feature to scale",source:"@site/docs/layers/static-features.md",sourceDirName:"layers",slug:"/layers/static-features",permalink:"/web-map-doc/docs/layers/static-features",draft:!1,tags:[],version:"current",frontMatter:{id:"static-features",title:"Static Features Layer",slug:"/layers/static-features"}},i={},p=[{value:"Adding a single feature",id:"adding-a-single-feature",level:2},{value:"Associated Elements",id:"associated-elements",level:2},{value:"<code>&lt;map-feature&gt;</code>",id:"map-feature",level:3},{value:"Attributes",id:"attributes",level:4},{value:"<code>&lt;map-properties&gt;</code>",id:"map-properties",level:3},{value:"<code>&lt;map-geometry&gt;</code>",id:"map-geometry",level:3},{value:"Attributes",id:"attributes-1",level:4},{value:"Additional Context",id:"additional-context",level:2},{value:"<code>&lt;map-link rel=&quot;license&quot;&gt;</code>",id:"map-link-rellicense",level:3},{value:"<code>&lt;map-meta name=&quot;zoom&quot;&gt;</code>",id:"map-meta-namezoom",level:3},{value:"<code>&lt;map-meta name=&quot;projection&quot;&gt;</code>",id:"map-meta-nameprojection",level:3},{value:"<code>&lt;map-meta name=&quot;cs&quot;&gt;</code>",id:"map-meta-namecs",level:3},{value:"<code>&lt;map-meta name=&quot;extent&quot;&gt;</code>",id:"map-meta-nameextent",level:3},{value:"Full Examples",id:"full-examples",level:2}],s={toc:p};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In this section, we will learn about creating a static feature layer. A static feature is an inline feature that is rendered on the map as SVG. This allows the feature to scale\nas you zoom in and out without distortion."),(0,r.kt)("h2",{id:"adding-a-single-feature"},"Adding a single feature"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<layer- label="My Feature Layer" checked>\n  <map-feature zoom="2">\n    <map-properties>\n      <h1>Feature Popup Text</h1>\n      <a href="http://example.org/">Feature Popup Link</a>\n    </map-properties>\n    <map-geometry cs="tilematrix">\n      <map-polygon>\n        <map-coordinates>11 11 12 11 12 12 11 12</map-coordinates>\n      </map-polygon>\n    </map-geometry>\n  </map-feature>\n</layer->\n')),(0,r.kt)("h2",{id:"associated-elements"},"Associated Elements"),(0,r.kt)("h3",{id:"map-feature"},(0,r.kt)("inlineCode",{parentName:"h3"},"<map-feature>")),(0,r.kt)("p",null,"Parent element that contains the ",(0,r.kt)("inlineCode",{parentName:"p"},"<map-properties>")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"<map-geometry>")," elements"),(0,r.kt)("h4",{id:"attributes"},"Attributes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"zoom"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"This allows you to set the zoom level the feature is rendered at. The zoom value should fall within the range of 0 to the maximum zoom level of the map's ",(0,r.kt)("a",{parentName:"li",href:"http://example.org/"},"projection"),".")))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"map-properties"},(0,r.kt)("inlineCode",{parentName:"h3"},"<map-properties>")),(0,r.kt)("p",null,"This element contains the contents of the popup associated to a given feature."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"map-geometry"},(0,r.kt)("inlineCode",{parentName:"h3"},"<map-geometry>")),(0,r.kt)("p",null,"This element contains the different points, lines and polygons that will be drawn. Details on the geometry elements and it's syntax can be found ",(0,r.kt)("a",{parentName:"p",href:"http://example.org/"},"here"),"."),(0,r.kt)("h4",{id:"attributes-1"},"Attributes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"cs"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"This allows you to set the ",(0,r.kt)("a",{parentName:"li",href:"http://example.org/"},"coordinate system")," of the points, lines and polygons."),(0,r.kt)("li",{parentName:"ul"},"Defaults to gcrs, but can be set to tilematrix | pcrs | gcrs explicitly.")))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"additional-context"},"Additional Context"),(0,r.kt)("p",null,"You can also provide a set of elements to further define the static feature layer. This is the list of available additions with examples."),(0,r.kt)("h3",{id:"map-link-rellicense"},(0,r.kt)("inlineCode",{parentName:"h3"},'<map-link rel="license">')),(0,r.kt)("p",null,"Sets the attribution link of the layer. Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<map-link rel="license" href="https://www.nrcan.gc.ca/earth-sciences/geography/topographic-information/free-data-geogratis/licence/17285" title="Canada Base Map \xa9 Natural Resources Canada"></map-link>\n')),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"map-meta-namezoom"},(0,r.kt)("inlineCode",{parentName:"h3"},'<map-meta name="zoom">')),(0,r.kt)("p",null,"Sets the native minimum and maximum ",(0,r.kt)("a",{parentName:"p",href:"http://example.org/"},"native zoom"),". It also allows you to set a value, this is the default zoom of all features in the case the ",(0,r.kt)("inlineCode",{parentName:"p"},"<map-feature>")," is missing a zoom attribute."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<map-meta name="zoom" content="min=1,max=5,value=0"></map-meta>\n')),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"map-meta-nameprojection"},(0,r.kt)("inlineCode",{parentName:"h3"},'<map-meta name="projection">')),(0,r.kt)("p",null,"Sets the ",(0,r.kt)("a",{parentName:"p",href:"http://example.org/"},"projection")," of the layer. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<map-meta name="projection" content="CBMTILE"></map-meta>\n')),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"map-meta-namecs"},(0,r.kt)("inlineCode",{parentName:"h3"},'<map-meta name="cs">')),(0,r.kt)("p",null,"Sets the default ",(0,r.kt)("a",{parentName:"p",href:"http://example.org/"},"coordinate system")," of the layer. If a feature is missing the cs attribute, it will default to this, and if this is missing it will default to gcrs."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<map-meta name="cs" content="gcrs"></map-meta>\n')),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"map-meta-nameextent"},(0,r.kt)("inlineCode",{parentName:"h3"},'<map-meta name="extent">')),(0,r.kt)("p",null,"Sets the ",(0,r.kt)("a",{parentName:"p",href:"http://example.org/"},"extent")," of the layer."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<map-meta name="extent" content="zoom=0,top-left-column=0,top-left-row=0,bottom-right-column=5,bottom-right-row=5"></map-meta>\n')),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"full-examples"},"Full Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'  <mapml-viewer style="height: 500px;width:500px;" projection="CBMTILE" zoom="2" lat="45.5052040" lon="-75.2202344"\n    controls>\n\n    <layer- label="Arizona" checked>\n      <map-meta name="projection" content="CBMTILE"></map-meta>\n      <map-meta name="zoom" content="min=1,max=5,value=0"></map-meta>\n      <map-meta name="cs" content="gcrs"></map-meta>\n      <map-meta name="extent" content="zoom=0,top-left-column=0,top-left-row=0,bottom-right-column=5,bottom-right-row=5"></map-meta>\n      <map-link id="first" rel="stylesheet" type="text/css" href="first.css"></map-link>\n      <map-feature zoom="2" class="refDiff">\n        <map-properties>\n          <h1>Test</h1>\n          <a href="http://example.org/">test</a>\n        </map-properties>\n        <map-geometry cs="tilematrix">\n          <map-polygon>\n            <map-coordinates>11 11 12 11 12 12 11 12</map-coordinates>\n          </map-polygon>\n        </map-geometry>\n      </map-feature>\n\n      <map-feature zoom="2" class="refDiff">\n        <map-properties>\n          <h1>Test</h1>\n        </map-properties>\n        <map-geometry cs="pcrs">\n          <map-polygon>\n            <map-coordinates>257421 -3567196 -271745 1221771 -3896544 242811 -3183549 -2613313</map-coordinates>\n          </map-polygon>\n        </map-geometry>\n      </map-feature>\n\n      <map-feature zoom="2" class="refDiff">\n        <map-properties>\n          <h1>Test</h1>\n        </map-properties>\n        <map-geometry cs="tcrs">\n          <map-polygon>\n            <map-coordinates>2771 3106 2946 3113 2954 3210 2815 3192</map-coordinates>\n          </map-polygon>\n        </map-geometry>\n      </map-feature>\n\n      <map-feature zoom="2" class="refDiff">\n        <map-properties>\n          <h1>Arizona</h1>\n        </map-properties>\n        <map-geometry>\n          <map-polygon>\n            <map-coordinates>-109.042503 37.000263 -109.04798 31.331629 -111.074448 31.331629 -112.246513 31.704061\n              -114.815198 32.492741 -114.72209 32.717295 -114.524921 32.755634 -114.470151 32.843265 -114.524921\n              33.029481 -114.661844 33.034958 -114.727567 33.40739 -114.524921 33.54979 -114.497536 33.697668\n              -114.535874 33.933176 -114.415382 34.108438 -114.256551 34.174162 -114.136058 34.305608 -114.333228\n              34.448009 -114.470151 34.710902 -114.634459 34.87521 -114.634459 35.00118 -114.574213 35.138103\n              -114.596121 35.324319 -114.678275 35.516012 -114.738521 36.102045 -114.371566 36.140383 -114.251074\n              36.01989 -114.152489 36.025367 -114.048427 36.195153 -114.048427 37.000263 -110.499369 37.00574\n              -109.042503 37.000263</map-coordinates>\n          </map-polygon>\n        </map-geometry>\n      </map-feature>\n    </layer->\n  </mapml-viewer>\n')),(0,r.kt)("p",null,"[ADD MAP HERE]"))}c.isMDXComponent=!0}}]);