---
title: "Baking failed with Color Map from Mesh"
description: ""
helpx_description: "bakers > Common Issues > Baking failed with Color Map from Mesh"
helpx_url: "https://helpx.adobe.com/substance-3d-bake/common-issues/baking-failed-with-color-map-from-mesh.html"
---

# Baking failed with Color Map from Mesh

>[!WARNING]
>
> **Issue**
> 
> Possible error message:
> 
> > 
> 
> &#91; Baking &#93; Baking failed &#40;Color Map from Mesh&#41;   
> Could not find vertex colors

>[!NOTE]
>
> **Explanation**
> 
> The default settings for the [Color Map from Mesh](../../bakers-settings/color-map-from-mesh/color-map-from-mesh.md) is to bake the high-poly mesh vertex colors into a texture based on the mesh UVs. However it is often the case where the high-poly mesh doesn't have any vertex colors information. Therefore the baker can't write information that don't exist.

>[!NOTE]
>
> **Solution**
> 
> Different solutions are available to avoid this error message :
> 
> * Use an high-poly mesh that has vertex colors
> * Set the Color Map from Mesh baker with different settings
> * Don't use the Color Map from Mesh baker if you don't need it
