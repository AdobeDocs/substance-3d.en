---
title: "Should I enable"
description: ""
helpx_description: "bakers > Common Questions > Should I enable"
helpx_url: "https://helpx.adobe.com/substance-3d-bake/common-questions/should-i-enable-compute-tangent-space-per-fragment.html"
---

# Should I enable "Compute tangent space per fragment" ?

>[!WARNING]
>
> **Question**
> 
> What does the setting "Compute tangent space per fragment" means and what is it's usage ?

>[!NOTE]
>
> **Explanation**
> 
> When enabled this setting tells the baker to perform the Tangent Space computation in the Fragment Shader (also called Pixel Shader) instead of the Vertex Shader. Meaning that the computation will be done per pixel instead of being interpolated from vertex to vertex. This settings is used by the normal map baker to know how to encode the texture. It also used to know how to read the texture by the shaders.
> 
> Enabling or disabled this parameter usually requires to rebake the textures to sync them with the 3D viewports and rendering engines (such as Iray).

>[!NOTE]
>
> **Solution**
> 
> Depending of the software or game engine targeted to render the texture, this setting may be disabled or enabled:
> 
> | *Software* | *Compute tangent space per fragment* |
> | --- | --- |
> | **Unreal Engine 4** | Enabled |
> | **Unity** | Disabled |
