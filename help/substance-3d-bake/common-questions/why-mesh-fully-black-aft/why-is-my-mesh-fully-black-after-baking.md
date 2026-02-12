---
title: "Why is my mesh fully black after baking "
description: ""
helpx_description: "bakers > Common Questions > Why is my mesh fully black after baking "
helpx_url: "https://helpx.adobe.com/substance-3d-bake/common-questions/why-is-my-mesh-fully-black-after-baking.html"
---

# Why is my mesh fully black after baking ?

>[!WARNING]
>
> **Question**
> 
> Why is my mesh fully black in the viewport after I just finished baking in Substance Painter ?

>[!NOTE]
>
> **Explanation**
> 
> The viewport being fully black after baking is because one of the baked textures is fully black as well. If the Ambient Occlusion texture is black it will darken all the lighting in the viewport for example.

>[!NOTE]
>
> **Solution : Substance Painter**
> 
> There are two possible solutions :
> 
> * Fix your baking setup to avoid black textures, see : [Baker output is fully black or empty](https://helpx.adobe.com/substance-3d/unlisted/documentation/bake/baker-output-is-fully-black-159451835.html)
> * Remove the black texture from the [Texture Set Settings](https://helpx.adobe.com/substance-3d-painter/interface/texture-set/texture-set-settings.html).
