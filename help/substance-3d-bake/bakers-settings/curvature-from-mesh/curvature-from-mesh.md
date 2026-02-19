---
title: "Curvature from Mesh"
description: "Generate accurate curvature textures from high-poly meshes using ray tracing for precise edge detection."
helpx_description: "bakers > Bakers Settings > Curvature from Mesh"
helpx_url: "https://helpx.adobe.com/substance-3d-bake/bakers-settings/curvature-from-mesh.html"
---

# Curvature from Mesh

The Curvature from mesh baker generates a curvature texture from high-poly meshes. It is slower than the base [curvature](../curvature/curvature.md) baker but produce more accurate results.

**Available in:**

* Substance Designer
* Substance Automation Toolkit
* Substance Painter

## Parameters

| *Parameter* | *Description* |
| --- | --- |
| **Secondary Rays** | Amount of rays emitted to read the nearby geometry. A high value will produce less noise but take longer to compute. Default is 32. |
| **Sampling Radius** | How far the nearby geometry is taken into account to compute the curvature at the surface of the geometry. High values may produce stronger edges while lower values may produce thinner edges but miss information. |
| **Relative To Bounding Box** | Defines if the sampling radius is relative to the size of the mesh or if it defined as a unit based distance. |
| **Self Intersection** | Matching by name of curvature rays. Indicates how the bakers should match low and high-poly geometry. It can be used to filter the baking process without the need to manually move apart (explode) meshes.Possible values:<ul data-preserve-html="true"><li data-preserve-html="true"><strong>Always</strong> (default): Low-poly mesh is matched with every high-poly meshes.</li><li data-preserve-html="true"><strong>By Mesh Name</strong>: Filter the meshes by their name to avoid matching with unwanted geometry.</li></ul>To learn more about matching geometry see: [Matching by Name](../../features/matching-by-name/matching-by-name.md). |
| **Automatic Tonemapping bounds** | Controls how the curvature values should be wrote into the texture. If enabled, the range of value will be normalized between 0 and 1 based on the minimum and maximum value found during the baking process. If disabled, the minimum and maximum value are defined manually.  **Note:**  When baking UDIMs/UV Tiles, this parameter should be disabled to make the tonemapping uniform and not specific per tile, otherwise this could create seams between each textures. To find the right min/max values manually, bake first with this setting enabled then take a look at the console/log to see which values the baker did output. |
| **Tonemapping Min** | If **Automatic Tonemapping bounds** is disabled, defines the minimum value to scale the curvature result to fit into the texture. |
| **Tonemapping Max** | If **Automatic Tonemapping bounds** is disabled, defines the maximum value to scale the curvature result to fit into the texture. |
| **Normal Map** | Optional path to a normal texture. Can be used to replace the internal computation of the baker. |
| **World Space** | If enabled, the normal texture is interpreted as a World Space normal instead of a Tangent Space. |
| **Normal Orientation** | Format of the Normal texture if in Tangent Space.Possible values:<ul data-preserve-html="true"><li data-preserve-html="true"><strong>DirectX</strong> (default)</li><li data-preserve-html="true"><strong>OpenGL</strong></li></ul> |
