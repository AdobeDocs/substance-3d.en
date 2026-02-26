---
helpx_url: "https://helpx.adobe.com/substance-3d-bake/bakers-settings/color-map-from-mesh.html"
breadcrumb-title: ""
description: Project color properties from high-poly meshes into textures to bake polypaint or material IDs for selection masks.
helpx_creative_field: ""
helpx_description: bakers > Bakers Settings > Color Map from Mesh
helpx_experience_level: ""
helpx_learn_topic: ""
helpx_tags: ""
title: Color Map from Mesh
user-guide-description: ""
user-guide-title: ""
---


# Color Map from Mesh

This Color Map from mesh baker projects color properties from a high definition mesh into a texture. It can be used to bake polypaint or material IDs to create selection masks.

**Available in:**

* Substance Designer
* Substance Automation Toolkit
* Substance Painter

## Parameters

| *Parameter* | *Description* |
| --- | --- |
| **Color Source** | Controls from which property of the high-poly mesh the color generation should be based on.Possible values:<ul data-preserve-html="true"><li data-preserve-html="true"><strong>Vertex Color</strong>: reads the vertex color save it into the texture. Color are interpolated from vertex to vertex.</li><li data-preserve-html="true"><strong>Material Color</strong>: reads the material color assigned to a polygon face.</li><li data-preserve-html="true"><strong>Mesh ID</strong>: assign a color per object found.</li><li data-preserve-html="true"><strong>Polygroup / Submesh ID</strong>: assign a color per sub-object (also called element).</li></ul> |
| **Color Generator** | Defines how the color is generated when the **Color Source** is set to **Mesh ID** or **Polygroup/Submesh ID**.Possible values:<ul data-preserve-html="true"><li data-preserve-html="true"><strong>Random</strong>: each object or sub-object is colored by a randomly generated color.</li><li data-preserve-html="true"><strong>Hue Shift</strong>: each object or sub-object is colored by a unique color based on a hue.</li><li data-preserve-html="true"><strong>Grayscale</strong>: each object or sub-object is colored by a unique grayscale value.</li></ul> |
