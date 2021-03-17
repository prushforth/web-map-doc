(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{107:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=p(n),u=a,d=m["".concat(l,".").concat(u)]||m[u]||b[u]||o;return n?r.a.createElement(d,i(i({ref:t},s),{},{components:n})):r.a.createElement(d,i({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},79:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),o=(n(0),n(107)),l={id:"static-features",title:"Static Features Layer",slug:"/layers/static-features"},i={unversionedId:"layers/static-features",id:"layers/static-features",isDocsHomePage:!1,title:"Static Features Layer",description:"In this section, we will learn about creating a static feature layer. A static feature is an inline feature that is rendered on the map as SVG. This allows the feature to scale",source:"@site/docs/layers/static-features.md",slug:"/layers/static-features",permalink:"/web-map-doc/docs/layers/static-features",version:"current",sidebar:"someSidebar",previous:{title:"Static Tiles Layer",permalink:"/web-map-doc/docs/layers/static-tiles"},next:{title:"Static Images Layer",permalink:"/web-map-doc/docs/layers/static-images"}},c=[{value:"Adding a single feature",id:"adding-a-single-feature",children:[]},{value:"Associated Elements",id:"associated-elements",children:[{value:"<code>&lt;feature&gt;</code>",id:"feature",children:[]},{value:"<code>&lt;properties&gt;</code>",id:"properties",children:[]},{value:"<code>&lt;geometry&gt;</code>",id:"geometry",children:[]}]},{value:"Additional Context",id:"additional-context",children:[]},{value:"Full Examples",id:"full-examples",children:[]}],s={toc:c};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"In this section, we will learn about creating a static feature layer. A static feature is an inline feature that is rendered on the map as SVG. This allows the feature to scale\nas you zoom in and out without distortion."),Object(o.b)("h2",{id:"adding-a-single-feature"},"Adding a single feature"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-html"},'<layer- label="My Feature Layer" checked>\n  <feature zoom="2">\n    <properties>\n      <h1>Feature Popup Text</h1>\n      <a href="http://example.org/">Feature Popup Link</a>\n    </properties>\n    <geometry cs="tilematrix">\n      <polygon>\n        <coordinates>11 11 12 11 12 12 11 12</coordinates>\n      </polygon>\n    </geometry>\n  </feature>\n</layer->\n\n')),Object(o.b)("h2",{id:"associated-elements"},"Associated Elements"),Object(o.b)("h3",{id:"feature"},Object(o.b)("inlineCode",{parentName:"h3"},"<feature>")),Object(o.b)("p",null,"Parent element that contains the ",Object(o.b)("inlineCode",{parentName:"p"},"<properties>")," and ",Object(o.b)("inlineCode",{parentName:"p"},"<geometry>")," elements"),Object(o.b)("h4",{id:"attributes"},"Attributes"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"zoom"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"This allows you to set the zoom level the feature is rendered at. The zoom value should fall within the range of 0 to the maximum zoom level of the map's ",Object(o.b)("a",{parentName:"li",href:"http://example.org/"},"projection"),".")))),Object(o.b)("hr",null),Object(o.b)("h3",{id:"properties"},Object(o.b)("inlineCode",{parentName:"h3"},"<properties>")),Object(o.b)("p",null,"This element contains the contents of the popup associated to a given feature."),Object(o.b)("hr",null),Object(o.b)("h3",{id:"geometry"},Object(o.b)("inlineCode",{parentName:"h3"},"<geometry>")),Object(o.b)("p",null,"This element contains the different points, lines and polygons that will be drawn. Details on the geometry elements and it's syntax can be found ",Object(o.b)("a",{parentName:"p",href:"http://example.org/"},"here"),"."),Object(o.b)("h4",{id:"attributes-1"},"Attributes"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"cs"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"This allows you to set the ",Object(o.b)("a",{parentName:"li",href:"http://example.org/"},"coordinate system")," of the points, lines and polygons."),Object(o.b)("li",{parentName:"ul"},"Defaults to gcrs, but can be set to tilematrix | pcrs | gcrs explicity.")))),Object(o.b)("hr",null),Object(o.b)("h2",{id:"additional-context"},"Additional Context"),Object(o.b)("p",null,"You can also provide a set of elements to further define the static feature layer. This is the list of availble additions with examples."),Object(o.b)("h4",{id:"link-rellicense"},Object(o.b)("inlineCode",{parentName:"h4"},'<link rel="license">')),Object(o.b)("p",null,"Sets the attribution link of the layer. Example:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-html"},'<link rel="license" href="https://www.nrcan.gc.ca/earth-sciences/geography/topographic-information/free-data-geogratis/licence/17285" title="Canada Base Map \xa9 Natural Resources Canada">\n')),Object(o.b)("hr",null),Object(o.b)("h4",{id:"meta-namezoom"},Object(o.b)("inlineCode",{parentName:"h4"},'<meta name="zoom">')),Object(o.b)("p",null,"Sets the native minumum and maximum ",Object(o.b)("a",{parentName:"p",href:"http://example.org/"},"native zoom"),". It also allows you to set a value, this is the default zoom of all features in the case the ",Object(o.b)("inlineCode",{parentName:"p"},"<feature>")," is missing a zoom attribute."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-html"},'<meta name="zoom" content="min=1,max=5,value=0" />\n')),Object(o.b)("hr",null),Object(o.b)("h4",{id:"meta-nameprojection"},Object(o.b)("inlineCode",{parentName:"h4"},'<meta name="projection">')),Object(o.b)("p",null,"Sets the ",Object(o.b)("a",{parentName:"p",href:"http://example.org/"},"projection")," of the layer. "),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-html"},'<meta name="projection" content="CBMTILE">\n')),Object(o.b)("hr",null),Object(o.b)("h4",{id:"meta-namecs"},Object(o.b)("inlineCode",{parentName:"h4"},'<meta name="cs">')),Object(o.b)("p",null,"Sets the default ",Object(o.b)("a",{parentName:"p",href:"http://example.org/"},"coordinate system")," of the layer. If a feature is missing the cs attribute, it will default to this, and if this is missing it will default to gcrs."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-html"},'<meta name="cs" content="gcrs">\n')),Object(o.b)("hr",null),Object(o.b)("h4",{id:"meta-nameextent"},Object(o.b)("inlineCode",{parentName:"h4"},'<meta name="extent">')),Object(o.b)("p",null,"Sets the ",Object(o.b)("a",{parentName:"p",href:"http://example.org/"},"extent")," of the layer."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-html"},'<meta name="extent" content="zoom=0,top-left-column=0,top-left-row=0,bottom-right-column=5,bottom-right-row=5" />\n')),Object(o.b)("hr",null),Object(o.b)("h2",{id:"full-examples"},"Full Examples"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-html"},'  <mapml-viewer style="height: 500px;width:500px;" projection="CBMTILE" zoom="2" lat="45.5052040" lon="-75.2202344"\n    controls>\n\n    <layer- label="Arizona" checked>\n      <meta name="projection" content="CBMTILE" />\n      <meta name="zoom" content="min=1,max=5,value=0" />\n      <meta name="cs" content="gcrs" />\n      <meta name="extent" content="zoom=0,top-left-column=0,top-left-row=0,bottom-right-column=5,bottom-right-row=5" />\n      <link id="first" rel="stylesheet" type="text/css" href="first.css">\n      <feature zoom="2" class="refDiff">\n        <properties>\n          <h1>Test</h1>\n          <a href="http://example.org/">test</a>\n        </properties>\n        <geometry cs="tilematrix">\n          <polygon>\n            <coordinates>11 11 12 11 12 12 11 12</coordinates>\n          </polygon>\n        </geometry>\n      </feature>\n\n      <feature zoom="2" class="refDiff">\n        <properties>\n          <h1>Test</h1>\n        </properties>\n        <geometry cs="pcrs">\n          <polygon>\n            <coordinates>257421 -3567196 -271745 1221771 -3896544 242811 -3183549 -2613313</coordinates>\n          </polygon>\n        </geometry>\n      </feature>\n\n      <feature zoom="2" class="refDiff">\n        <properties>\n          <h1>Test</h1>\n        </properties>\n        <geometry cs="tcrs">\n          <polygon>\n            <coordinates>2771 3106 2946 3113 2954 3210 2815 3192</coordinates>\n          </polygon>\n        </geometry>\n      </feature>\n\n      <feature zoom="2" class="refDiff">\n        <properties>\n          <h1>Arizona</h1>\n        </properties>\n        <geometry>\n          <polygon>\n            <coordinates>-109.042503 37.000263 -109.04798 31.331629 -111.074448 31.331629 -112.246513 31.704061\n              -114.815198 32.492741 -114.72209 32.717295 -114.524921 32.755634 -114.470151 32.843265 -114.524921\n              33.029481 -114.661844 33.034958 -114.727567 33.40739 -114.524921 33.54979 -114.497536 33.697668\n              -114.535874 33.933176 -114.415382 34.108438 -114.256551 34.174162 -114.136058 34.305608 -114.333228\n              34.448009 -114.470151 34.710902 -114.634459 34.87521 -114.634459 35.00118 -114.574213 35.138103\n              -114.596121 35.324319 -114.678275 35.516012 -114.738521 36.102045 -114.371566 36.140383 -114.251074\n              36.01989 -114.152489 36.025367 -114.048427 36.195153 -114.048427 37.000263 -110.499369 37.00574\n              -109.042503 37.000263</coordinates>\n          </polygon>\n        </geometry>\n      </feature>\n    </layer->\n  </mapml-viewer>\n')),Object(o.b)("p",null,"[ADD MAP HERE]"))}p.isMDXComponent=!0}}]);