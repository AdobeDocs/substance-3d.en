---
title: "Curvature from Mesh (deprecated)"
description: ""
helpx_description: "bakers > Bakers Settings > Curvature from Mesh (deprecated)"
helpx_url: "https://helpx.adobe.com/substance-3d-bake/bakers-settings/curvature-from-mesh-deprecated.html"
---

# Curvature from Mesh (deprecated)

The Curvature from mesh baker generates a curvature texture from high-poly meshes. It is slower than the base [curvature](../curvature/curvature.md) baker but produce more accurate results.

**Available in:**

* Substance Designer
* Substance Automation Toolkit

>[!NOTE]
>
> Since Substance Designer 2019.3 this baker is deprecated and we recommend using the new [Curvature from mesh](../curvature-from-mesh/curvature-from-mesh.md) baker instead.

## Parameters

| *Parameter* | *Description* |
| --- | --- |
| **Intensity** | How strong the curvature details will be. This parameter is disabled if **Soft Saturate** is enabled. |
| **Soft**  **Saturate** | If enabled, the curvature details will be softened. |
| **Maximize Range** | If enabled, the curvature details will be fit inside the texture range capacity. This means very strong values will be defined as the maximum and all the other values will be scaled according to that extreme. |
