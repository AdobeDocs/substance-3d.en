---
helpx_url: "https://helpx.adobe.com/substance-3d-bake/bakers-settings/position-map-from-mesh.html"
breadcrumb-title: ""
description: Compute accurate position maps from high-poly meshes to capture precise geometry location information.
helpx_creative_field: ""
helpx_description: bakers > Bakers Settings > Position map from Mesh
helpx_experience_level: ""
helpx_learn_topic: ""
helpx_tags: ""
title: Position map from Mesh
user-guide-description: ""
user-guide-title: ""
---

# Position map from Mesh

The Position map from mesh baker computes the location of the high-poly mesh geometry and save into a texture. It is similar to the base position baker but can produce more accurate results.

**Available in:**

* Substance Designer
* Substance Automation Toolkit

## Parameters

| *Parameter* | *Description* |
| --- | --- |
| **Mode** | Controls which information will be computed into the position texture.Possible values:<ul data-preserve-html="true"><li data-preserve-html="true"><strong>All axes:</strong> Bakes the position of the X, Y, and Z axes into the RGB channels of the output texture.</li><li data-preserve-html="true"><strong>One axis:</strong> Bakes a single axis into the output texture as a grayscale image.</li></ul> |
| **Axis** | Defines which axis should be computed if the **Mode** parameter is set to **One axis**. |
| **Normalization Type** | Defines how to scale the position values per axis.Possible values:<ul data-preserve-html="true"><li data-preserve-html="true"><strong>BBox:</strong> normalize each axis according to the mesh volume (bounding box length).</li><li data-preserve-html="true"><strong>BSphere:</strong> normalize all axes according to the mesh volume radius (bounding sphere).</li></ul> |
| **Normalization Scale** | Defines how to scale the position values based on the mesh.Possible values:<ul data-preserve-html="true"><li data-preserve-html="true"><strong>Per Material</strong>: values are scaled to be between 0 and 1 for each material (Texture Set).</li><li data-preserve-html="true"><strong>Full Scene</strong> (default): values are scaled to take the whole mesh into account. This allows continuous position values across objects and materials (Texture Sets).</li></ul> |
