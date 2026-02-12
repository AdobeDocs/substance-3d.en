---
title: "Transferred Texture from Mesh"
description: ""
helpx_description: "bakers > Bakers Settings > Transferred Texture from Mesh"
helpx_url: "https://helpx.adobe.com/substance-3d-bake/bakers-settings/transferred-texture-from-mesh.html"
---

# Transferred Texture from Mesh

The Transferred texture from mesh baker allows to convert a texture from one a mesh to another based on their respective UVs. This baker also supports the transfer or normal maps (which require special conversions). In order to work, both meshes need UV definitions.

**Available in :**

* Substance Designer
* Substance Automation Toolkit

## Parameters

| *Parameter* | *Description* |
| --- | --- |
| **Texture File** | Path to the input texture file that will be transferred. |
| **UV Set** | Mesh UVs to use on the high-poly mesh to read the texture and project it onto the low-poly mesh. |
| **Filtering Mode** | Defines how the pixel interpolation of the texture should be done.Possible values:<ul data-preserve-html="true"><li data-preserve-html="true"><strong>Nearest</strong>: No interpolation, use the closest pixel found to a given position. Precise but can create aliasing.</li><li data-preserve-html="true"><strong>Bilinear</strong> (default): Use the four nearest pixels to a given position. No aliasing but can be blurry.</li></ul> |
| **Normal Map** | If enabled, indicates to the baker that the input texture to transfer is a normal map. This indicates the baker to apply special conversions to the texture to make it compatible with the target mesh. |
| **Map Type** | Defines what type of normal map the input texture is.Possible values:<ul data-preserve-html="true"><li data-preserve-html="true"><strong>World Space</strong></li><li data-preserve-html="true"><strong>Tangent Space</strong> (default)</li></ul> |
| **Normal Orientation** | Defines the normal format of the input texture if **Map Type** is set to **Tangent Space**.Possible values:<ul data-preserve-html="true"><li data-preserve-html="true"><strong>OpenGL</strong></li><li data-preserve-html="true"><strong>DirectX</strong> (default)</li></ul> |
