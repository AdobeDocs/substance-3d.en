---
title: "Texture baked outside of Substance software looks incorrect"
description: "Troubleshoot why textures baked outside Substance software look incorrect and learn how to fix color space issues."
helpx_description: "bakers > Common Questions > Texture baked outside of Substance software looks incorrect"
helpx_url: "https://helpx.adobe.com/substance-3d-bake/common-questions/texture-baked-outside-of-substance-software-looks-incorrect.html"
---

# Texture baked outside of Substance software looks incorrect

>[!WARNING]
>
> **Question**
> 
> Why do the texture I baked with an external application and not the Substance Bakers look incorrect in Substance Painter ?

>[!NOTE]
>
> **Solution**
> 
> There is no immediate solution to this problem as many factors can contribute to the problem :
> 
> * Verify that the normal format between the Substance software and the external application is the same. OpenGL is &#91;X+, Y+, Z+&#93; and DirectX is &#91;X+, Y-, Z+&#93;
>   * In Substance Painter the normal format can be changed in the [project configuration](https://helpx.adobe.com/substance-3d-painter/interface/project-configuration.html).
>   * In Substance Designer the normal format can be changed in the [project preferences](https://helpx.adobe.com/substance-3d-designer/interface/preferences-window/project-settings.html).
> * Verify that the mesh has been triangulated before baking and importing it in the Substance software. See [this page](../../guides/triangulating-before-bak/triangulating-before-baking.md) for more information.
