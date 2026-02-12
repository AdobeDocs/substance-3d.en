---
title: "Thickness Map from Mesh"
description: ""
helpx_description: "bakers > Bakers Settings > Thickness Map from Mesh"
helpx_url: "https://helpx.adobe.com/substance-3d-bake/bakers-settings/thickness-map-from-mesh.html"
---

# Thickness Map from Mesh

The Thickness map from mesh is very similar to the ambient occlusion baker, but it casts rays from the surface of the mesh to the inside. This texture can be used in a Sub Surface Scattering (SSS) shader or for masking textures.

The texture properties are defined as:

* Black values represent the thin parts of the model.
* White values represent the thick parts of the model.

**Available in:**

* Substance Painter
* Substance Designer
* Substance Automation Toolkit

## Parameters

| *Parameter* | *Description* |
| --- | --- |
| **Secondary Rays** | Amount of occlusion rays. A high value will produce less noise but take longer to compute. Default is 64. |
| **Min Occluder Distance** | Minimum distance where the occlusion rays will hit the high poly geometry. Default is 0.00001. |
| **Max Occluder Distance** | Maximum distance where the occlusion rays will hit the high poly geometry. Default is 0.1. |
| **Relative to Bounding Box** | If enabled, units are relative to the bounding box of the object (1.0 being the diagonal length of the bounding box). If disabled, units used for the minimum and maximum occluder distances are the ones defined when exporting your mesh (meters, centimeters or whatever units the exported scene is). |
| **Spread Angle** | Maximum spread angle of occlusion rays. Default is 180. |
| **Distribution** | Angular distribution of occlusion rays.Possible values:<ul data-preserve-html="true"><li data-preserve-html="true"><strong>Cosine</strong> (default)</li><li data-preserve-html="true"><strong>Uniform</strong></li></ul> |
| **Ignore Backface** | If enabled, occlusion rays ignore hits on a backface (if the high poly normal faces the opposite direction as the low poly from where the ray is fired). Most of the time this setting should be enabled to avoid artifacts. |
| **Self Occlusion** | Matching by name for occlusion rays. Indicates how the bakers should match low and high-poly geometry. It can be used to filter the baking process without the need to manually move apart (explode) meshes.Possible values:<ul data-preserve-html="true"><li data-preserve-html="true"><strong>Always</strong> (default): Low-poly mesh is matched with every high-poly meshes.</li><li data-preserve-html="true"><strong>By Mesh Name</strong>: Filter the meshes by their name to avoid matching with unwanted geometry.</li></ul>To learn more about matching geometry see: [Matching by Name](../../features/matching-by-name/matching-by-name.md). |
| **Automatic Normalization** | Defines if the output values should be scaled to fit within a 0-1 range (the brightest point is set to pure white and the darkest point is set to pure black). |
