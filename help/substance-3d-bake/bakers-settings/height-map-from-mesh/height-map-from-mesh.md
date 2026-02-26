---
helpx_url: "https://helpx.adobe.com/substance-3d-bake/bakers-settings/height-map-from-mesh.html"
breadcrumb-title: ""
description: Create height maps from high-poly meshes to capture surface detail and geometry information for texturing.
helpx_creative_field: ""
helpx_description: bakers > Bakers Settings > Height Map from Mesh
helpx_experience_level: ""
helpx_learn_topic: ""
helpx_tags: ""
title: Height Map from Mesh
user-guide-description: ""
user-guide-title: ""
---



# Height Map from Mesh

The Height Map from mesh baker allows you to create a height map from a high poly mesh.**Available in:**

* Painter
* Designer
* Automation Toolkit

## Parameters

| *Parameter* | *Description* |
| --- | --- |
| ****Normalization**** | Defines how the height range of values should be saved down into the texture.Possible values:<ul data-preserve-html="true"><li data-preserve-html="true"><strong>Relative to ray distance</strong>:</li><li data-preserve-html="true"><strong>Relative to low poly mesh (per UV Tile)</strong> (default)</li><li data-preserve-html="true"><strong>Relative to Min/Max (per UV Tile)</strong></li><li data-preserve-html="true"><strong>Manual</strong></li></ul> |
| **Scaling divisor** | Define how much the height values should be multiplied or divided.Only available when the **Normalization** is set to **Manual**. |
