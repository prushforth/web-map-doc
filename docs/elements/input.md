---
id: input
title: "<map-input>: The Input element"
slug: /elements/input
---

The `<map-input>` element is an extended HTML `input` by `type` for use in Web 
map `<map-extent>` elements.  The attributes that apply to the input depend on
the `type` attribute.  There are several types of `<map-input>` that can be used.

The `<map-input>` declares a variable that will be set and used by the polyfill 
according to its attributes, as the map changes viewport extent in response to 
user gestures.


## Attributes

### `name`
Sets the name of the variable created by the input. The variable can then be 
referenced by the URL template `<map-link>` [tref attribute](./link#tref), 
using the `{name}` variable reference notation.

---
### `type`
  Sets the **type** of the input.

| Type          | Description                                          	|
|--------------	|--------------------------------------------------------	|
| zoom          | Integer value that ranges from 0 to some fixed number of values, depending on the projection, less than or equal to 25.|
| location      | A location input captures **one** `axis` value of a two-dimensional point ( represented by a coordinate pair) from the map extent, e.g. `top-right`, or, for server queries, the location in the map where the user clicks or touches. |
| width         | A width input captures the width of the map viewport's extent in standardized pixels  |
| height        | A height input captures the height of the map viewport's extent in standardized pixels |
| hidden        | Establishes a variable that may be used to pass a fixed or [fixed domain of values](#shard) to the server when requesting map resources. |
---

### `value`
In general, the `value` is set and used by the polyfill when generating URLs from
[URL templates](./link#tref), for fetching server resources such as tiles, images 
and map documents.

In particular, `value` is used by authors  to specify values for inputs of 
`type="zoom"`. In the case of `type="zoom"`, `value` defines the zoom level of 
_associated_ **sibling** `<map-input type="location">` elements' `min` and `max`
attribute values.  Allows authors to establish native / server resource bounds, 
on a per-`<map-link tref="...">` basis.

Inputs are _associated_ by their variables being referenced by a 
`<map-link tref="https://example.org/{z}/{col}/{row}/" ...>` value.  The `{z}`, 
`{row}`, and `{col}` variable references in the above example associate the 
variables (`<map-input>`'s) named **z**, **row** and **col**.

---
### `axis`
This attribute applies only to inputs of `type="location"`. It establishes the axis 
of the coordinate to be serialized as [a named variable](#). This value also 
identifies the axis that the `min` and `max` attributes apply to, so that the 
polyfill will not make requests for spatial resources (tiles etc) outside the 
native axis bounds. Possible values of `axis` are:

| Axis name | CRS | Description                                          	|
|-----------|-----|------------------------------------------------------	|
|`row`      | tilematrix |Vertical axis, positive down the screen. The origin is at the upper left. Units are tiles. Each zoom level is a distinct tilematrix crs, so coordinate values apply only to that zoom level. |
|`column`   | tilematrix |Horizontal axis, positive to the right. The origin is at the upper left. Units are tiles. Each zoom level is a distinct tilematrix crs, so coordinate values apply only to that zoom level.|
|`easting`  | pcrs |Horizontal axis, positive to the right. The origin is defined a geographic location. Units are ususally meters, although for some projections (specifically WGS84), the transformation from geographic CRS, i.e. from longitude to easting is the [identity transformation](https://www.thefreedictionary.com/Identity+transformation), in which case the easting values could be _said_ to be in decimal degrees. **pcrs** stands for "projected coordinate reference system". Note that because pcrs is an 'infinite canvas', there exist locations for which a transformation from pcrs coordinates to gcrs coordinates is undefined. |
|`northing` | pcrs |Vertical axis, positive to the right. The origin is defined a geographic location. Units are ususally meters, although for some projections (specifically WGS84), the transformation from geographic CRS, i.e. from latitude to northing is the [identity transformation](https://www.thefreedictionary.com/Identity+transformation), in which case the northing values could be _said_ to be decimal degrees. Note that because pcrs is an 'infinite canvas', there exist locations for which a transformation from pcrs coordinates to gcrs coordinates is undefined.|
|`latitude` | gcrs | The latitude of a point on an ellipsoid is the angle between a line perpendicular to the surface of the ellipsoid at the given point and the plane of the equator. **gcrs** stands for "geographic coordinate reference system".|
|`longitude`| gcrs | The longitude of a point specifies its east–west position on the reference body's (Earth's) surface.| 
|`x`        | tcrs | Horizontal axis, positive to the right. The origin is at the upper left. Units are defined-size pixels. Each zoom level is a distinct tcrs, so coordinate values apply only to that zoom level. **tcrs** stands for "tiled coordinate reference system".  The tiles of each **tilematrix** crs are defined as aggregations of pixels in the corresponding zoom level **tcrs**.|
|`y`        | tcrs | Vertical axis, positive down the screen. The origin is at the upper left. Units are defined-size pixels. The origin is at the upper left. Units are scaled pixels. Each zoom level is a distinct tcrs, so coordinate values apply only to that zoom level.|
|`i`        | tile, map | Horizontal axis, positive to the right. Each tile, and the map viewport, has a defined-size pixel-based crs that has its origin at the upper left (of each tile in the case of the **tile** crs, and of the map viewport, in the case of the **map** crs). |
|`j`        | tile, map | Vertical axis, positive down the screen. Each individual tile, and the map viewport has a defined-size pixel-based crs that has its origin at the upper left (of each tile in the case of the **tile** crs, and of the map viewport, in the case of the **map** crs).|

When requesting a the coordinate axis of whole tile in the `OSMTILE` projection, 
a location input might use a `<map-input name="y" type="location" units="tilematrix" axis="row">` 
input to establish a variable named **y**, referenced by `{y}` in an associated URL template, 
which would serialize the **tilematrix** crs `row` axis values.  A series of 
location events is genereated by the polyfill as required by the map to cover 
the viewport in tiles.  

---
### `units`

Identifies the associated specific coordinate reference system that a location 
input event is referred to.  The term "projection" in MapML is synonymous with the set
of CRS that are related together by the projection name. In all cases for any projection,
there exist a set of CRS that are related mathematically. These CRS are known
and identified within the namespace of the projection name by the following
table of keyword values:


| CRS | Description |
|------|-------------|
| tcrs | For each zoom level (i.e. at a pre-defined scale denominator value), locations are expressed in terms of scaled pixels, with the origin of pixel space at the upper left corner.  The pixel coordinates of a location at a single zoom level are independent of the pixel coordinates of a location any other zoom level.  In other words, you need to know the zoom level of a tcrs coordinate in order to locate it on a map or otherwise process it. |
| tilematrix | Each zoom level has an array of tiles, called a tilematrix.  The individual tiles constitute the coordinates in this CRS, and the axes are know as `row` and `column`.  The tiles are defined as squares of 256 pixels in the associated tcrs of the particular zoom level. |
| pcrs | Projected CRS (pcrs) are defined by a mathematical relationship with an underlying gcrs, using a technique called "projection". pcrs coordinates are scale- and zoom level-independent, and are designed to represent geographic coordinates on a planar surface, such as a device screen. The measurement units of pcrs coordinates is _usually_ meters (a notable exception being pcrs coordinates in the `WGS84` projection). |
| gcrs | Geographic coordinates are referenced to various ellipsoids, and are not necessarily comparable across projections.  A common ellipsoid today is WGS 84, which is defined and used by the global positioning satellite (GPS) constellation. |
| map | The map CRS is dynamic, in the sense that it has its origin at the upper left of the user's viewport, with scaled pixels as units.  This is used to identify image coordinates for use, typically by WMS and similar services which use a virtual image to enable query of map feature property information, without necessarily transferring the features over the network. |
| tile | Each tile in any zoom level has an implicit scaled-pixel coordinate system ranging from 0 to 255 in both horizontal and vertical directions. These coordinates are used by WMTS and similar services to identify a pixel for query of feature property values, without transferring the feature geometry over the network. |

Sometimes, location inputs are used to generate "brownie-cutter" (square) requests 
for tiles from WMS and similar un-tiled services.  In such a case, it is possible 
for the `units` to be specified as `tilematrix`, implying that the location event 
expected is that of a tile, and the `position` keyword is then used to describe
the corner of the tile for which the coordinate should be serialized.  In such a
case, the `axis` value may be specified as `easting` or other axis name  
associated with the projection, to obtain coordinate of the corner of the tile 
that is being processed by the polyfill: 

`<map-input name="xmin" type="location" units="tilematrix" position="top-left" axis="easting">`

Internally, the crs of the requested coordinate is deduced from the axis 
name, instead of requiring the author to explicitly specify the axis' crs as an 
additional attribute of the `<map-input>`. 

---

### `position`

Allows the author to specify a predefined corner of the viewport or tile to be used
as the location value to be serialized. If `position` is not present, the input
location coordinates will be generated by user click or touch on the map, which 
is used to generate interactive server queries.

| position keyword | keyword description|
|------------------|--------------------|
| top-left | Identifies the location at the top left corner of the tile or viewport |
| top-right | Identifies the location at the top right corner of the tile or viewport |
| bottom-left | Identifies the location at the bottom left corner of the tile or viewport |
| bottom-right | Identifies the location at the bottom right corner of the tile or viewport |

Other values of `position` are possible, but are not implemented yet.

---
### `rel`

Specifies the entity to which the `position` applies. Possible values are `tile` and `image`.
The default value, if unspecified, is `image`.  It is used to help identify what crs the 
coordinate serialized by the input exists in. 

---
### `min`
Establishes the minimum of the axis on the server .  Requests for coordinates less than
this value will not be created by the polyfill. 

---
### `max`
Establishes the maximum of the axis on the server.  Requests for coordinates greater than
this value will not be created by the polyfill.

---
### `shard`

The boolean `shard` attribute is used with a `hidden` variable.

A `<map-input shard list="datalist-id>` indicates that a set of values specified 
by an associated `map-datalist` element will be used in a round-robin fashion for 
template variable substitution and submission in map requests.  This is useful for 
[domain sharding](https://developer.mozilla.org/en-US/docs/Glossary/Domain_sharding), 
implemented by OpenStreetMap (for example), to increase parallelism of tile requests
and thereby to improve performance. 

When specifying a boolean attribute such as `shard` in MapML,
care must be taken to encode the attribute according to the document / media type in
which the element is being used.  In XML documents, boolean attributes must be
encoded as `shard="anything"`, so as to respect XML parsing rules. In the
HTML document, i.e. as inline layer content, the attribute should be encoded per
HTML's [boolean attribute rules](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes#boolean_attributes).

---
### `list`
  
The `<map-input list="...">` attribute associates a `<map-datalist>` element that
provides the values to be used (via the `<map-datalist>`'s child `<map-option>`
elements).  See [shard](#shard) for more details.

---
