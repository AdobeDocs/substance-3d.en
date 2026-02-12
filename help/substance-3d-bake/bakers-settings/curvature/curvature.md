---
title: "Curvature"
description: ""
helpx_description: "bakers > Bakers Settings > Curvature"
helpx_url: "https://helpx.adobe.com/substance-3d-bake/bakers-settings/curvature.html"
---

# Curvature

The Curvature baker allows to extract a curvature texture. This texture contains cavities and edges information related to the geometry.

The texture properties are defined as:

* Black values represent concave areas.
* White values represent convex areas.
* Gray values represent neutral areas (mainly flat).

**Available in :**

* Substance Designer
* Substance Automation Toolkit
* Substance Painter

## Parameters

| *Parameter* | *Description* |
| --- | --- |
| **Algorithm** | Defines how the curvature information will be computed on the mesh. |
| **Details** | Controls how strong the information in the curvature will be. A high value can produce more details but less subtle. |
| **Enable Seams** | If enabled, the baker will try to reduce seams between UV islands by copying the texels at the borders from one side to the other. |
| **Seams** **Intensity** | If **Enable Seams** is enabled, this parameter controls how strong the seam fixing is. |
