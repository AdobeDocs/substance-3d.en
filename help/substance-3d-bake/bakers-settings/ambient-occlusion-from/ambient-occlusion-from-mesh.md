---
title: "Ambient Occlusion from Mesh"
description: ""
helpx_description: "bakers > Bakers Settings > Ambient Occlusion from Mesh"
---

# Ambient Occlusion from Mesh

The Ambient Occlusion from mesh baker allows to bake an Ambient Occlusion texture from high poly meshes. It is slower than the base [ambient occlusion](../ambient-occlusion/ambient-occlusion.md) baker but produce more accurate results.

**Available in:**

* Substance Designer
* Substance Automation Toolkit
* Substance Painter

## Parameters

| *Parameter* | *Description* |
| --- | --- |
| **Secondary Rays** | Amount of occlusion rays. A high value will produce less noise but take longer to compute. Default is 64. |
| **Min Occluder Distance** | Minimum distance where the occlusion rays will hit the high poly geometry. Default is 0.00001. |
| **Max Occluder Distance** | Maximum distance where the occlusion rays will hit the high poly geometry. Default is 0.1. |
| **Relative to Bounding Box** | If enabled, units are relative to the bounding box of the object (1.0 being the diagonal length of the bounding box). If disabled, units used for the minimum and maximum occluder distances are the ones defined when exporting your mesh (meters, centimeters or whatever units the exported scene is). |
| **Spread Angle** | Maximum spread angle of occlusion rays. Default is 180. |
| **Distribution** | Angular distribution of occlusion rays. Defines how the rays are scattered inside a cone of the size of the spread angle.Possible values:<ul data-preserve-html="true"><li data-preserve-html="true"><strong>Cosine</strong> (default): Realistic but can lead to white line in very thin occluded areas. More suited for shading and lighting.</li><li data-preserve-html="true"><strong>Uniform</strong>: Useful to create linear gradients. More suited for layer masking and other filtering.</li></ul> |
| **Ignore Backface** | This parameters defines if occlusion rays ignore hits on a backface (if the high poly normal faces the opposite direction as the low poly from where the ray is fired). Most of the time this setting should be enabled to avoid artifacts. Possible values:<ul data-preserve-html="true"><li data-preserve-html="true"><strong>Nevers</strong> (default): Backfaces are never ignored</li><li data-preserve-html="true"><strong>Always</strong>: Backfaces are always ignored</li><li data-preserve-html="true"><strong>By Mesh Name</strong>: Backfaces are ignored only for meshes that match the suffix keyword. See the [common parameters](../common-parameters/common-parameters.md).</li></ul> |
| **Self Occlusion** | Matching by name for occlusion rays. Indicates how the bakers should match low and high-poly geometry. It can be used to filter the baking process without the need to manually move apart (explode) meshes.Possible values:<ul data-preserve-html="true"><li data-preserve-html="true"><strong>Always</strong> (default): Low-poly mesh is matched with every high-poly meshes.</li><li data-preserve-html="true"><strong>By Mesh Name</strong>: Filter the meshes by their name to avoid matching with unwanted geometry.</li></ul>To learn more about matching geometry see: [Matching by Name](../../features/matching-by-name/matching-by-name.md). |
| **Normal Map** | Optional path to a normal texture. Can be used to replace the internal computation of the baker. |
| **World Space** | If enabled, the normal texture is interpreted as a World Space normal instead of a Tangent Space. |
| **Normal Orientation** | Format of the Normal texture if in Tangent Space.Possible values:<ul data-preserve-html="true"><li data-preserve-html="true"><strong>DirectX</strong> (default)</li><li data-preserve-html="true"><strong>OpenGL</strong></li></ul> |
| **Attenuation** | Defines how occlusion is attenuated by occluder distance.Possible values:<ul data-preserve-html="true"><li data-preserve-html="true"><strong>None</strong>: no attenuation.</li><li data-preserve-html="true"><strong>Linear</strong> (default) : progressive attenuation.</li><li data-preserve-html="true"><strong>Smooth</strong>: soft attenuation.</li></ul> |
| **Ground Plane** | If enabled, simulate a plane under the mesh bounding box on the XZ axis to collide with secondary rays. This simulate shadowing coming from an invisible floor plan. |
| **Ground Plane Offset** | Allows to shift the plan away from the mesh to reduce the intensity of the effect. The value is absolute and not relative to the mesh size. |
