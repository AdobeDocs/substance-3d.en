---
helpx_url: "https://helpx.adobe.com/substance-3d-bake/common-issues/aliasing-on-uv-seams.html"
breadcrumb-title: ""
description: Fix aliasing artifacts that appear on UV seams during baking by adjusting anti-aliasing and padding settings.
helpx_creative_field: ""
helpx_description: bakers > Common Issues > Aliasing on UV Seams
helpx_experience_level: ""
helpx_learn_topic: ""
helpx_tags: ""
title: Aliasing on UV Seams
user-guide-description: ""
user-guide-title: ""
---

# Aliasing on UV Seams

>[!WARNING]
>
> **Issue**
> 
> Dark spots or dots appear on the border of the UV Seams after baking:
> 
> ![](../../assets/edge-aliasing.png)

>[!NOTE]
>
> **Explanation**
> 
> When the Baker writes down information into the texture it has to be converted from geometry to pixels. The processing of this information may introduce [aliasing](https://en.wikipedia.org/wiki/Aliasing). Aliasing often occurs because the geometry of the UVs is not aligned with the pixel grid or because the UVs don't cover enough pixels to provide enough resolution.
> 
> In the following images the geometry is the red overlay. The baker will mark a pixel as full if more than half of its surface is covered by the geometry (white squares are full pixels and black squares are empty pixels). On the right image the pixel grid is double the resolution which allows more accurate representation of the geometry.
> 
> ![](../../assets/aliasing-example-large.png)
> 
> ![](../../assets/aliasing-example-small.png)

>[!NOTE]
>
> **Solution**
> 
> * Increase the output texture resolution of the Bakers.
> * Increase the Anti-aliasing setting (note : it may take more time to compute).
> * Align the UVs to the pixel grid in the UV editor of the 3D modeling software.
> * Give a better Texel Ratio to UVs.
