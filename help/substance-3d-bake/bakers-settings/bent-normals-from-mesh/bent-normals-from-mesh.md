---
title: "Bent Normals from Mesh"
description: "Compute bent normals textures that describe the average direction of ambient lighting from high-poly meshes."
helpx_description: "bakers > Bakers Settings > Bent Normals from Mesh"
helpx_url: "https://helpx.adobe.com/substance-3d-bake/bakers-settings/bent-normals-from-mesh.html"
---

# Bent Normals from Mesh

The Bent Normals from mesh baker computes a texture that describes the average direction of ambient lighting. This baker is derived from the [Ambient Occlusion from Mesh](../ambient-occlusion-from/ambient-occlusion-from-mesh.md) baker.

**Available in:**

* Painter
* Designer
* Automation Toolkit

## Parameters

| *Parameter* | *Description* |
| --- | --- |
| **Secondary Rays** | Amount of occlusion rays. A high value will produce less noise but will be longer to compute. |
| **Min Occluder Distance** | Minimum distance where the occlusion rays will hit the high poly geometry**.** |
| **Max Occluder Distance** | Maximum distance where the occlusion rays will hit the high poly geometry. |
| **Relative to Bounding Box** | If enabled, ray distance computations are based on the normalized space (0 to 1) of the low-poly mesh. If disabled, the ray distance computation is based on units specified in the low-poly mesh when it was exported (meters, centimeters, etc). |
| **Spread Angle** | Maximum spread angle of occlusion rays. Default is 180. |
| **Distribution** | Angular distribution of occlusion rays.Possible values:<ul data-preserve-html="true"><li data-preserve-html="true"><strong>Cosine</strong> (default)</li><li data-preserve-html="true"><strong>Uniform</strong></li></ul> |
| **Ignore Backface** | If enabled, occlusion rays ignore hits on a backface (if the high poly normal faces the opposite direction as the low poly from where the ray is fired). Most of the time this setting should be enabled to avoid artifacts. |
| **Self Occlusion** | Matching by name for occlusion rays. Indicates how the bakers should match low and high-poly geometry. It can be used to filter the baking process without the need to manually move apart (explode) meshes.Possible values:<ul data-preserve-html="true"><li data-preserve-html="true"><strong>Always</strong> (default): Low-poly mesh is matched with every high-poly meshes.</li><li data-preserve-html="true"><strong>By Mesh Name</strong>: Filter the meshes by their name to avoid matching with unwanted geometry.</li></ul>To learn more about matching geometry see: [Matching by Name](../../features/matching-by-name/matching-by-name.md). |
| **Map Type** | Defines the type of the output texture.Possible values:<ul data-preserve-html="true"><li data-preserve-html="true"><strong>World space</strong></li><li data-preserve-html="true"><strong>Tangent space</strong> (default)</li></ul> |
| **Normal Orientation** | Controls the normal format of the output texture if **Mat Type** is set to Tangent Space.Possible values:<ul data-preserve-html="true"><li data-preserve-html="true"><strong>OpenGL</strong> <strong> <br/></strong></li><li data-preserve-html="true"><strong>DirectX</strong> (default)<strong> <br/></strong></li></ul> |
