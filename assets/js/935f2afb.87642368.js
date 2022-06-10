"use strict";(self.webpackChunkmapml_viewer_doc=self.webpackChunkmapml_viewer_doc||[]).push([[53],{1109:function(e){e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"sidebar":[{"type":"category","collapsed":true,"collapsible":true,"label":"Getting Started","items":[{"type":"link","label":"Introduction","href":"/web-map-doc/docs/","docId":"intro"},{"type":"link","label":"Installation","href":"/web-map-doc/docs/installation","docId":"installation"},{"type":"link","label":"Building from source","href":"/web-map-doc/docs/building","docId":"building"}]},{"type":"category","collapsed":true,"collapsible":true,"label":"Mapping Elements","items":[{"type":"link","label":"<mapml-viewer>: The Map element","href":"/web-map-doc/docs/elements/mapml-viewer/","docId":"elements/mapml-viewer"},{"type":"link","label":"<layer->: The Layer element","href":"/web-map-doc/docs/layers/layer/","docId":"elements/layer"},{"type":"link","label":"<map-extent>: The Extent element","href":"/web-map-doc/docs/elements/extent/","docId":"elements/extent"},{"type":"link","label":"<map-input>: The Input element","href":"/web-map-doc/docs/elements/input/","docId":"elements/input"},{"type":"link","label":"<map-link>: The Link element","href":"/web-map-doc/docs/elements/link/","docId":"elements/link"},{"type":"link","label":"<map-meta>: The metadata element","href":"/web-map-doc/docs/elements/meta/","docId":"elements/meta"},{"type":"link","label":"<map-feature>: The Feature element","href":"/web-map-doc/docs/elements/feature/","docId":"elements/feature"},{"type":"link","label":"<map-a>: The Anchor element","href":"/web-map-doc/docs/other-elements/map-a/","docId":"elements/map-a"}]},{"type":"category","collapsed":true,"collapsible":true,"label":"API","items":[{"type":"link","label":"HTMLMapmlViewerElement","href":"/web-map-doc/docs/api/mapml-viewer-api","docId":"api/mapml-viewer-api"},{"type":"link","label":"HTMLLayerElement","href":"/web-map-doc/docs/api/layer-api","docId":"api/layer-api"},{"type":"link","label":"Custom Projections API","href":"/web-map-doc/docs/api/custom-projections","docId":"api/custom-projections"},{"type":"link","label":"Custom Rendering API","href":"/web-map-doc/docs/api/custom-rendering","docId":"api/custom-rendering"},{"type":"link","label":"GeoJSON API","href":"/web-map-doc/docs/api/geojson-api","docId":"api/geojson-api"}]},{"type":"category","collapsed":true,"collapsible":true,"label":"Resources","items":[{"type":"link","label":"Debug Mode","href":"/web-map-doc/docs/resources/debug-mode","docId":"resources/debug-mode"},{"type":"link","label":"Resources","href":"/web-map-doc/docs/resources/resources","docId":"resources/resources"}]}]},"docs":{"api/custom-projections":{"id":"api/custom-projections","title":"Custom Projections API","description":"Introduction","sidebar":"sidebar"},"api/custom-rendering":{"id":"api/custom-rendering","title":"Custom Rendering API","description":"The Custom Rendering API allows developers to circumvent MapML\'s rendering and draw anything within","sidebar":"sidebar"},"api/geojson-api":{"id":"api/geojson-api","title":"GeoJSON API","description":"Introduction","sidebar":"sidebar"},"api/layer-api":{"id":"api/layer-api","title":"HTMLLayerElement","description":"Properties","sidebar":"sidebar"},"api/mapml-viewer-api":{"id":"api/mapml-viewer-api","title":"HTMLMapmlViewerElement","description":"The HTMLMapmlViewerElement interface represents the `` element.","sidebar":"sidebar"},"building":{"id":"building","title":"Building from source","description":"Build the project from source code","sidebar":"sidebar"},"elements/element":{"id":"elements/element","title":"<map->: The foo element","description":"The ` element is an extended HTML foo` element, for use in Web"},"elements/extent":{"id":"elements/extent","title":"<map-extent>: The Extent element","description":"The `` element is a hypertext control that is associated to and represents the","sidebar":"sidebar"},"elements/feature":{"id":"elements/feature","title":"<map-feature>: The Feature element","description":"Map features are real or imaginary location objects represented in 2D according to a standard model, called the Simple Features model. There exists a wide variety of formats that allow the encoding of the Simple Features model, famously including: GeoJSON, Keyhole Markup Language (KML), and shape files (.shp), among many others.","sidebar":"sidebar"},"elements/input":{"id":"elements/input","title":"<map-input>: The Input element","description":"The ` element is an extended HTML input by type` for use in Web","sidebar":"sidebar"},"elements/layer":{"id":"elements/layer","title":"<layer->: The Layer element","description":"Maps have one or more layers. Map layers are implemented by the `` custom element.","sidebar":"sidebar"},"elements/link":{"id":"elements/link","title":"<map-link>: The Link element","description":"The ` element is an extended HTML link` element, for use in Web","sidebar":"sidebar"},"elements/map-a":{"id":"elements/map-a","title":"<map-a>: The Anchor element","description":"The `` element is a proposal to extend the Web to include links between maps and locations.","sidebar":"sidebar"},"elements/mapml-viewer":{"id":"elements/mapml-viewer","title":"<mapml-viewer>: The Map element","description":"The `` element is the main element you can use to put a custom Web map on your page.  To create a (really) simple Web map, you might use it like this:","sidebar":"sidebar"},"elements/meta":{"id":"elements/meta","title":"<map-meta>: The metadata element","description":"The ` element is an extended HTML meta` element, for use in Web","sidebar":"sidebar"},"elements/web-map":{"id":"elements/web-map","title":"<map is=\\"web-map\\">","description":"The HTML `` element has been deployed and in use in browsers since the mid-90\'s. It was used to provide visually appealing yet accessible home pages, by giving the Web developer the ability to design links as invisible yet interactive polygonal areas on top of one or more images.  Use of this facility became known as \\"client side image maps\\", and was often used to provide site navigation links."},"installation":{"id":"installation","title":"Installation","description":"Install the `` suite of custom elements","sidebar":"sidebar"},"intro":{"id":"intro","title":"Introduction","description":"The web-map custom element suite provides a Web map viewer which is modelled after the HTML5 `` tag. It is a simple way to get started publishing Web maps.","sidebar":"sidebar"},"layers/static-features":{"id":"layers/static-features","title":"Static Features Layer","description":"In this section, we will learn about creating a static feature layer. A static feature is an inline feature that is rendered on the map as SVG. This allows the feature to scale"},"layers/static-images":{"id":"layers/static-images","title":"Static Images Layer","description":"Needs To Be Implemented, Refer To Github Issue #261"},"layers/static-tiles":{"id":"layers/static-tiles","title":"Static Tiles Layer","description":"In this section, we will learn about creating a static tile layer. A static tile is a single image that occupies an entry on the map grid. You can specify the column, row and zoom"},"layers/templated-features":{"id":"layers/templated-features","title":"Templated Features Layer","description":"In this section, we will learn how to create a templated feature layer. A templated feature layer is a layer that fetches a single .mapml file on pans and zooms."},"layers/templated-images":{"id":"layers/templated-images","title":"Templated Images Layer","description":"In this section, we will learn how to create a templated image layer. A templated image layer is a layer that fetches a single image file on pans and zooms."},"layers/templated-tiles":{"id":"layers/templated-tiles","title":"Templated Tiles Layer","description":"In this section, we will learn how to create a templated tile layer. A templated layer is a layer that makes HTTP requests for it\'s data. In this case requests are made to fill in the grid of tiles available on the map\'s viewport."},"resources/debug-mode":{"id":"resources/debug-mode","title":"Debug Mode","description":"This function allows users to debug both the map and the coordinate system of the map. It adds","sidebar":"sidebar"},"resources/resources":{"id":"resources/resources","title":"Resources","description":"Under construction","sidebar":"sidebar"}}}')}}]);