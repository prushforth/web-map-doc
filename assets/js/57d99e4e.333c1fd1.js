"use strict";(self.webpackChunkmapml_viewer_doc=self.webpackChunkmapml_viewer_doc||[]).push([[5380],{3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return u}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function m(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?m(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):m(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},m=Object.keys(e);for(n=0;n<m.length;n++)a=m[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(e);for(n=0;n<m.length;n++)a=m[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),i=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=i(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,m=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=i(a),u=r,h=d["".concat(p,".").concat(u)]||d[u]||c[u]||m;return a?n.createElement(h,o(o({ref:t},s),{},{components:a})):n.createElement(h,o({ref:t},s))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var m=a.length,o=new Array(m);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var i=2;i<m;i++)o[i]=a[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},6746:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return i},toc:function(){return s},default:function(){return d}});var n=a(7462),r=a(3366),m=(a(7294),a(3905)),o=["components"],l={id:"feature",title:"<map-feature>: The Feature element",slug:"/elements/feature"},p=void 0,i={unversionedId:"elements/feature",id:"elements/feature",isDocsHomePage:!1,title:"<map-feature>: The Feature element",description:"Map features are real or imaginary location objects represented in 2D according to a standard model, called the Simple Features model. There exists a wide variety of formats that allow the encoding of the Simple Features model, famously including: GeoJSON, Keyhole Markup Language (KML), and shape files (.shp), among many others.",source:"@site/docs/elements/feature.md",sourceDirName:"elements",slug:"/elements/feature",permalink:"/web-map-doc/docs/elements/feature",tags:[],version:"current",frontMatter:{id:"feature",title:"<map-feature>: The Feature element",slug:"/elements/feature"},sidebar:"sidebar",previous:{title:"<map-meta>: The metadata element",permalink:"/web-map-doc/docs/elements/meta"},next:{title:"<map-a>: The Anchor element",permalink:"/web-map-doc/docs/other-elements/map-a"}},s=[{value:"An inline HTML map-feature",id:"an-inline-html-map-feature",children:[]},{value:"A map-feature in a fetched XHTML MapML document",id:"a-map-feature-in-a-fetched-xhtml-mapml-document",children:[]},{value:"35059.mapml:",id:"35059mapml",children:[]},{value:"Associated Elements",id:"associated-elements",children:[{value:"<code>&lt;map-feature&gt;</code>",id:"map-feature",children:[]},{value:"<code>&lt;map-properties&gt;</code>",id:"map-properties",children:[]},{value:"<code>&lt;map-geometry&gt;</code>",id:"map-geometry",children:[]}]},{value:"Additional Context",id:"additional-context",children:[{value:"<code>&lt;map-link rel=&quot;license&quot;&gt;</code>",id:"map-link-rellicense",children:[]},{value:"<code>&lt;map-meta name=&quot;zoom&quot;&gt;</code>",id:"map-meta-namezoom",children:[]},{value:"<code>&lt;map-meta name=&quot;projection&quot;&gt;</code>",id:"map-meta-nameprojection",children:[]},{value:"<code>&lt;map-meta name=&quot;cs&quot;&gt;</code>",id:"map-meta-namecs",children:[]},{value:"<code>&lt;map-meta name=&quot;extent&quot;&gt;</code>",id:"map-meta-nameextent",children:[]}]},{value:"Full Examples",id:"full-examples",children:[]}],c={toc:s};function d(e){var t=e.components,a=(0,r.Z)(e,o);return(0,m.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,m.kt)("p",null,"Map ",(0,m.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Geographical_feature"},"features")," are real or imaginary location objects represented in 2D according to a standard model, called the ",(0,m.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Simple_Features"},"Simple Features model"),". There exists a wide variety of formats that allow the encoding of the Simple Features model, famously including: GeoJSON, Keyhole Markup Language (KML), and shape files (.shp), among many others."),(0,m.kt)("p",null,"Map features are represented in HTML MapML using a ",(0,m.kt)("inlineCode",{parentName:"p"},"<map-feature>")," element, which is rendered on the map through translation to SVG. This allows the feature to scale without distortion, as you zoom in and out. "),(0,m.kt)("p",null,"A ",(0,m.kt)("inlineCode",{parentName:"p"},"<map-feature>")," element is a container for a feature's accessible name (",(0,m.kt)("inlineCode",{parentName:"p"},"<map-featurecaption>"),"), scalar properties (",(0,m.kt)("inlineCode",{parentName:"p"},"<map-properties>"),") and its geometry (",(0,m.kt)("inlineCode",{parentName:"p"},"<map-geometry>"),").  The ",(0,m.kt)("inlineCode",{parentName:"p"},"<map-feature>")," element can be modeled as inline HTML content as a child of the ",(0,m.kt)("inlineCode",{parentName:"p"},"<layer->")," element, or in an XHTML MapML document, as a child of the ",(0,m.kt)("inlineCode",{parentName:"p"},"<map-body>")," element."),(0,m.kt)("h2",{id:"an-inline-html-map-feature"},"An inline HTML map-feature"),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-html"},'<layer- label="My Feature Layer" checked>\n    <map-feature id="mem35059" zoom="17">\n      <map-properties>\n        <table>\n          <tr><th>code</th><td>1200020</td></tr>\n          <tr><th>accuracy</th><td>26</td></tr>\n          <tr><th>valdate</th><td>1995</td></tr>          \n          <tr>\n            <th>image</th>\n            <td>\n              <a href="https://www.veterans.gc.ca/eng/remembrance/memorials/national-inventory-canadian-memorials/details/9304">\n                <img src="https://www.veterans.gc.ca/images/remembrance/memorials/national-inventory-canadian-memorials/mem/35059-173a.jpg" width="60" height="60">\n              </a>\n            </td>\n          </tr>\n          <tr><th>theme</th><td>FO</td></tr>\n          <tr><th>type</th><td>2</td></tr>\n          <tr><th>elevation</th><td>61</td></tr>\n          <tr><th>altiaccu</th><td>5</td></tr>\n        </table>\n      </map-properties>\n      <map-geometry>\n        <map-point>\n          <map-coordinates>-75.705278 45.397778</map-coordinates>\n        </map-point>\n      </map-geometry>\n    </map-feature>\n</layer->\n')),(0,m.kt)("h2",{id:"a-map-feature-in-a-fetched-xhtml-mapml-document"},"A map-feature in a fetched XHTML MapML document"),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-html"},'<layer- label="My Feature Layer" src="https://example.org/mem/35059.mapml"></layer->\n')),(0,m.kt)("h2",{id:"35059mapml"},"35059.mapml:"),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-html"},'<mapml- lang="en" xmlns="http://www.w3.org/1999/xhtml">\n  <map-head>\n    <map-title>The Man With Two Hats</map-title>\n    <map-meta http-equiv="Content-Type" content="text/mapml"></map-meta>\n    <map-meta charset="utf-8"></map-meta>\n    <map-meta name="projection" content="OSMTILE"></map-meta>\n    <map-meta name="cs" content="gcrs"></map-meta>\n    <map-link rel="license" href="http://open.canada.ca/en/open-government-licence-canada" title="Open Government License"/>\n  </map-head>\n  <map-body>\n    <map-feature id="mem35059">\n      <map-properties>\n        <table>\n          <tr><th>code</th><td>1200020</td></tr>\n          <tr><th>accuracy</th><td>26</td></tr>\n          <tr><th>valdate</th><td>1995</td></tr>          \n          <tr>\n            <th>image</th>\n            <td>\n              <a href="https://www.veterans.gc.ca/eng/remembrance/memorials/national-inventory-canadian-memorials/details/9304">\n                <img src="https://www.veterans.gc.ca/images/remembrance/memorials/national-inventory-canadian-memorials/mem/35059-173a.jpg" width="60" height="60" />\n              </a>\n            </td>\n          </tr>\n          <tr><th>theme</th><td>FO</td></tr>\n          <tr><th>type</th><td>2</td></tr>\n          <tr><th>elevation</th><td>61</td></tr>\n          <tr><th>altiaccu</th><td>5</td></tr>\n        </table>\n      </map-properties>\n      <map-geometry>\n        <map-point>\n          <map-coordinates>-75.705278 45.397778</map-coordinates>\n        </map-point>\n      </map-geometry>\n    </map-feature>\n  </map-body>\n</mapml->\n')),(0,m.kt)("h2",{id:"associated-elements"},"Associated Elements"),(0,m.kt)("h3",{id:"map-feature"},(0,m.kt)("inlineCode",{parentName:"h3"},"<map-feature>")),(0,m.kt)("p",null,"Parent element that contains the ",(0,m.kt)("inlineCode",{parentName:"p"},"<map-properties>")," and ",(0,m.kt)("inlineCode",{parentName:"p"},"<map-geometry>")," elements"),(0,m.kt)("h4",{id:"attributes"},"Attributes"),(0,m.kt)("ul",null,(0,m.kt)("li",{parentName:"ul"},(0,m.kt)("inlineCode",{parentName:"li"},"zoom"),(0,m.kt)("ul",{parentName:"li"},(0,m.kt)("li",{parentName:"ul"},"This allows you to set the zoom level the feature is rendered at. The zoom value should fall within the range of 0 to the maximum zoom level of the map's ",(0,m.kt)("a",{parentName:"li",href:"http://example.org/"},"projection"),".")))),(0,m.kt)("hr",null),(0,m.kt)("h3",{id:"map-properties"},(0,m.kt)("inlineCode",{parentName:"h3"},"<map-properties>")),(0,m.kt)("p",null,"This element contains the contents of the popup associated to a given feature."),(0,m.kt)("hr",null),(0,m.kt)("h3",{id:"map-geometry"},(0,m.kt)("inlineCode",{parentName:"h3"},"<map-geometry>")),(0,m.kt)("p",null,"This element contains the different points, lines and polygons that will be drawn. Details on the geometry elements and it's syntax can be found ",(0,m.kt)("a",{parentName:"p",href:"http://example.org/"},"here"),"."),(0,m.kt)("h4",{id:"attributes-1"},"Attributes"),(0,m.kt)("ul",null,(0,m.kt)("li",{parentName:"ul"},(0,m.kt)("inlineCode",{parentName:"li"},"cs"),(0,m.kt)("ul",{parentName:"li"},(0,m.kt)("li",{parentName:"ul"},"This allows you to set the ",(0,m.kt)("a",{parentName:"li",href:"http://example.org/"},"coordinate system")," of the points, lines and polygons."),(0,m.kt)("li",{parentName:"ul"},"Defaults to gcrs, but can be set to tilematrix | pcrs | gcrs explicitly.")))),(0,m.kt)("hr",null),(0,m.kt)("h2",{id:"additional-context"},"Additional Context"),(0,m.kt)("p",null,"You can also provide a set of elements to further define the static feature layer. This is the list of available additions with examples."),(0,m.kt)("h3",{id:"map-link-rellicense"},(0,m.kt)("inlineCode",{parentName:"h3"},'<map-link rel="license">')),(0,m.kt)("p",null,"Sets the attribution link of the layer. Example:"),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-html"},'<map-link rel="license" href="https://www.nrcan.gc.ca/earth-sciences/geography/topographic-information/free-data-geogratis/licence/17285" title="Canada Base Map \xa9 Natural Resources Canada"></map-link>\n')),(0,m.kt)("hr",null),(0,m.kt)("h3",{id:"map-meta-namezoom"},(0,m.kt)("inlineCode",{parentName:"h3"},'<map-meta name="zoom">')),(0,m.kt)("p",null,"Sets the native minimum and maximum ",(0,m.kt)("a",{parentName:"p",href:"http://example.org/"},"native zoom"),". It also allows you to set a value, this is the default zoom of all features in the case the ",(0,m.kt)("inlineCode",{parentName:"p"},"<map-feature>")," is missing a zoom attribute."),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-html"},'<map-meta name="zoom" content="min=1,max=5,value=0"></map-meta>\n')),(0,m.kt)("hr",null),(0,m.kt)("h3",{id:"map-meta-nameprojection"},(0,m.kt)("inlineCode",{parentName:"h3"},'<map-meta name="projection">')),(0,m.kt)("p",null,"Sets the ",(0,m.kt)("a",{parentName:"p",href:"http://example.org/"},"projection")," of the layer. "),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-html"},'<map-meta name="projection" content="CBMTILE"></map-meta>\n')),(0,m.kt)("hr",null),(0,m.kt)("h3",{id:"map-meta-namecs"},(0,m.kt)("inlineCode",{parentName:"h3"},'<map-meta name="cs">')),(0,m.kt)("p",null,"Sets the default ",(0,m.kt)("a",{parentName:"p",href:"http://example.org/"},"coordinate system")," of the layer. If a feature is missing the cs attribute, it will default to this, and if this is missing it will default to gcrs."),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-html"},'<map-meta name="cs" content="gcrs"></map-meta>\n')),(0,m.kt)("hr",null),(0,m.kt)("h3",{id:"map-meta-nameextent"},(0,m.kt)("inlineCode",{parentName:"h3"},'<map-meta name="extent">')),(0,m.kt)("p",null,"Sets the ",(0,m.kt)("a",{parentName:"p",href:"http://example.org/"},"extent")," of the layer."),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-html"},'<map-meta name="extent" content="zoom=0,top-left-column=0,top-left-row=0,bottom-right-column=5,bottom-right-row=5"></map-meta>\n')),(0,m.kt)("hr",null),(0,m.kt)("h2",{id:"full-examples"},"Full Examples"),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-html"},'  <mapml-viewer style="height: 500px;width:500px;" projection="CBMTILE" zoom="2" lat="45.5052040" lon="-75.2202344"\n    controls>\n\n    <layer- label="Arizona" checked>\n      <map-meta name="projection" content="CBMTILE"></map-meta>\n      <map-meta name="zoom" content="min=1,max=5,value=0"></map-meta>\n      <map-meta name="cs" content="gcrs"></map-meta>\n      <map-meta name="extent" content="zoom=0,top-left-column=0,top-left-row=0,bottom-right-column=5,bottom-right-row=5"></map-meta>\n      <map-link id="first" rel="stylesheet" type="text/css" href="first.css"></map-link>\n      <map-feature zoom="2" class="refDiff">\n        <map-properties>\n          <h1>Test</h1>\n          <a href="http://example.org/">test</a>\n        </map-properties>\n        <map-geometry cs="tilematrix">\n          <map-polygon>\n            <map-coordinates>11 11 12 11 12 12 11 12</map-coordinates>\n          </map-polygon>\n        </map-geometry>\n      </map-feature>\n\n      <map-feature zoom="2" class="refDiff">\n        <map-properties>\n          <h1>Test</h1>\n        </map-properties>\n        <map-geometry cs="pcrs">\n          <map-polygon>\n            <map-coordinates>257421 -3567196 -271745 1221771 -3896544 242811 -3183549 -2613313</map-coordinates>\n          </map-polygon>\n        </map-geometry>\n      </map-feature>\n\n      <map-feature zoom="2" class="refDiff">\n        <map-properties>\n          <h1>Test</h1>\n        </map-properties>\n        <map-geometry cs="tcrs">\n          <map-polygon>\n            <map-coordinates>2771 3106 2946 3113 2954 3210 2815 3192</map-coordinates>\n          </map-polygon>\n        </map-geometry>\n      </map-feature>\n\n      <map-feature zoom="2" class="refDiff">\n        <map-properties>\n          <h1>Arizona</h1>\n        </map-properties>\n        <map-geometry>\n          <map-polygon>\n            <map-coordinates>-109.042503 37.000263 -109.04798 31.331629 -111.074448 31.331629 -112.246513 31.704061\n              -114.815198 32.492741 -114.72209 32.717295 -114.524921 32.755634 -114.470151 32.843265 -114.524921\n              33.029481 -114.661844 33.034958 -114.727567 33.40739 -114.524921 33.54979 -114.497536 33.697668\n              -114.535874 33.933176 -114.415382 34.108438 -114.256551 34.174162 -114.136058 34.305608 -114.333228\n              34.448009 -114.470151 34.710902 -114.634459 34.87521 -114.634459 35.00118 -114.574213 35.138103\n              -114.596121 35.324319 -114.678275 35.516012 -114.738521 36.102045 -114.371566 36.140383 -114.251074\n              36.01989 -114.152489 36.025367 -114.048427 36.195153 -114.048427 37.000263 -110.499369 37.00574\n              -109.042503 37.000263</map-coordinates>\n          </map-polygon>\n        </map-geometry>\n      </map-feature>\n    </layer->\n  </mapml-viewer>\n')),(0,m.kt)("p",null,"[ADD MAP HERE]"))}d.isMDXComponent=!0}}]);