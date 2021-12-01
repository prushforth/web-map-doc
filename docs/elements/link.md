---
id: link
title: "<map-link>: The Link element"
slug: /elements/link
---

The `<map-link>` element is an extended HTML `link` element, for use in Web 
maps.  Most of the extensions center on proposed new values of the `rel` attribute.

`<map-link>` has several uses:

- include layer data attribution / licensing links in the bottom right-hand corner of the map
- provide links to different styles of the layer, via `style` and `self` rel values. These links are rendered as user affordances, and can be used to switch, for example, from satellite to map view of a layer.
- provide links to alternate projections for a layer, via the `alternate` rel value, in conjunction with the `projection="..."` attribute. Such links are automatically followed by the polyfill when appropriate.
- provide a URL template that is processed and converted to a URL and fetched by the polyfill, each time the map requires new content to render, such as a tile, via the `tile`, `image`, `feature` and `query` rel values, in conjunction with the `tref="..."` attribute. Such links are automatically created and followed / imported when appropriate.
- include links to legend graphics for a layer.  Currently such links are rendered as hyperlinks, not as graphics.
- provide links to CSS stylesheets via the `stylesheet` rel value, which are imported by the polyfill automatically.
- provide links to layers at next native zoom level via `zoomin`, `zoomout` rel values.  Such links are automatically followed by the polyfill when appropriate.

<!-- demo / example -->


## Attributes

### `rel`

The `rel` attribute designates the type of resource that is linked to. MapML 
defines several uses of existing and new `rel` keyword values.

| Value         | Description                                          	  |
|--------------	|--------------------------------------------------------	|
| `license`       | The `href` value links to a license description resource for the layer. The `title` attribute is used as the text to display for the link. The hyperlink is presented in the attribution control, at the lower right corner of the map viewport.
| `alternate`     | The `alternate` rel value is used with the `projection` attribute to provide the link to an equivalent layer resource in a different projection than that provided by the current resource.  This can be very useful for providing an author-friendly experience, where a map document may be added as a layer to a map that declares a different projection than that of the layer.  The polyfill will automatically "redirect" to the alternate projection document that matches that of the map. |
| `self`       | The `self style` (or `style self`) link rel indicates that the current document is one of a set of named alternate styles for a layer.  Other members of the set are `<map-link>` elements tagged with the `style` link relation. Other members of the set of alternate / different styles for the layer are presented to the user as a set of mutually exclusive choices.  User selection of one of the choices replaces the current layer entirely. |
| `style`      | The `style` link relation by itself designates that link as an alternate or different style of the current layer style. This is often used to switch between, for example, satellite and cartographic views of the same layer. When used in conjunction with the `self` link relation, i.e. `rel="self style"`, the current document is identified as a member of the set of alternate styles, and is selected in the layer control affordance for changing styles. |
| `tile`       | This link relation is used in conjunction with the `tref="..."` attribute to define a URL template that identifies native (server) tile resources. Can be used in conjunction with the `type="..."` attribute to indicate the media type of the remote resource, for example: `type="text/mapml"` tells the polyfill to parse and render the fetched resource as map feature content. This link relation is used with standard Web Map Tile Services (WMTS), and its non-standard equivalents. |
| `image`      | The `image` link relation is used similarly to the `tile` link relation, except it tells the polyfill that the remote resources to be fetched are images that will be trimmed (by the server) to exactly match the width and height of the map viewport.  This link relation is used with standard Web Map Services (WMS) and its non-standard equivalents. |
| `features`    | The `feature` link relation tells the polyfill to parse and render the fetched resource as map feature content.  It is conceptually equivalent to a link relation of `image` combined with a `type="text/mapml"` media type (which is not actually implemented). |
| `zoomin`     | The link `href` is followed automatically by the polyfill when the map is zoomed in by the user to a value greater than the maximimum value of the zoom range of the current layer.  The referenced map layer resource replaces the current map layer.  The polyfill does not represent this link as a user-visible affordance, it is followed automatically. If the remote resource does not contain a reciprocal `zoomout` link, the map state change is one-way i.e. the layer is permanently replaced. |
| `zoomout`    | The link `href` is followed automatically by the polyfill when the map is zoomed out by the user to a value less than the minimum value of the zoom range of the current layer.  The referenced map layer resource replaces the current map layer.  The polyfill does not represent this link as a user-visible affordance, it is followed automatically.  If the remote resource does not contain a reciprocal `zoomin` link, the map state change is one-way i.e. the layer is permanently replaced.  |
| `legend`     | The `legend` link relation designates a link to metadata, typically an image, describing the symbology used by the current layer.  Currently, the polyfill creates a hyperlink for the label of the layer in the layer control, which opens in a new browsing context. |
| `query`      | The `query` link relation is used in combination with the `tref="..."` attribute to establish a URL template that composes a map query URL based on user map gestures such as click or touch. These URLs are fetched and the response presented on top of the map as a popup. Such queries can return text/html or text/mapml responses. In the latter case, the response may contain more than one feature, in which case a 'paged' popup is generated, allowing the user to cycle through the features' individual metadata. |
| `stylesheet` | The link imports a CSS stylesheet from the `href` value. |


---

### `type`

The `type` attribute defines the expected 
[MIME media type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) 
of the remote resource. Depending on the [`rel` value](#rel), the `type` may play a significant role in determining
the polyfill behaviour.

Common values of `type` include **text/html**, **text/mapml**, and **image/\***.

---
### `title`

The `title` of the linked resource is usually rendered or presented to the user, 
for example, the `<map-link rel="license" title="Copyright FooBar Inc.">` link
is rendered as a hyperlink in the attribution control entry for the current 
layer.

---
### `href`

The `href` of a `<map-link>` must be a URL value of a resource that can be fetched. 
The URL can be absolute or relative.

---
### `hreflang`

Advisory language designation about remote resource.

---
### `tref`

The `tref` attribute contains a string that, once processed, will be treated as 
a URL and fetched automatically by the polyfill. The string is known as a URL
template.  The processing that takes place prior to a URL template becoming a
valid URL is _variable reference substitution_.  Variables are created by 
`<map-input name="foo">` elements.  The name of the variable can be
referenced in the URL template string contained in the `tref` value, using the
`{foo}` syntax notation.  A URL template string can contain 0 or more variable
references.  Processing will remove variable references that are valid. That is,
all variables that have been created by `<map-input>`s that are referenced in the
template will be replaced with the value of the variable at the time of processing.


---
### `projection`

The `projection` attribute designates the projection of the remote layer resource.
This attribute is used in conjunction with the [`rel=alternate` rel value](#rel).

Projection values [defined by the polyfill](mapml-viewer#projection) include: 
`OSMTILE`, `WGS84`, `CBMTILE` and `APSTILE`.  

---



| <!-- -->    | <!-- -->    |
|-------------|-------------|
| [Content categories](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories) | List of links to MDN content categories that apply |
| Permitted content | Content / elements / nodes that can be children of this  |
| Tag omission | Is this an existing void element or can you omit the end tag in theory? |
| Permitted parents | Of what elements can this be a child? |
| Implicit ARIA role   | [See example](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#properties) |
| Permitted ARIA roles | [See example](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#properties) |

---

## Events

---

## Examples

---

## Security and privacy

---

## Accessibility

---

## Specifications

| Specification                                                |
|--------------------------------------------------------------|
| [link to MapML\#fragment](https://maps4html.org/MapML/spec/) |

---

## Requirements

---

## See Also

---

