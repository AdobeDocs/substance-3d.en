---
title: "Seams are visible after baking a normal texture"
description: ""
helpx_description: "bakers > Common Issues > Seams are visible after baking a normal texture"
helpx_url: "https://helpx.adobe.com/substance-3d-bake/common-issues/seams-are-visible-after-baking-a-normal-texture.html"
---

# Seams are visible after baking a normal texture

>[!WARNING]
>
> **Issue**
> 
> Normal map seams are visible at the UV borders of the mesh even after a clean bake.

>[!NOTE]
>
> **Explanation**
> 
> Even after a perfect bake, seams can still be visible. The main reason being that a normal approximate surface information into a texture. Sometimes the texture lack precision or has to compensate too much between the low and high poly geometry to be accurate enough. In some other situation, the way the geometry is tendered with its normal map can affect how good it looks.

>[!NOTE]
>
> **Solution**
> 
> A few possible solutions can be tried to reduce the intensity of seams with normal maps:
> 
> * Often UVs are not aligned to pixels which leads to aliasing and produces seams. See [this page](../aliasing-on-uv-seams/aliasing-on-uv-seams.md) for more information.
>   * Increasing the texture resolution can be a way to reduce this effect.
>   * Aligning the UV borders to pixels is another way to reduce this effect.
> * Increase the shader **quality** setting. The shader quality can affect how specular reflections are computed. If some UV islands are rotated and this parameter is too low it can produce visible seams. See [this page](https://helpx.adobe.com/substance-3d/unlisted/documentation/spdoc/pbr-metal-rough-172818827.html) for more information.
