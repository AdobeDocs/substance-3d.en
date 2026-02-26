---
helpx_url: "https://helpx.adobe.com/substance-3d-bake/bakers-settings/ambient-occlusion.html"
breadcrumb-title: ""
description: Learn how to use the Ambient Occlusion baker to generate ambient shadow textures using fast GPU-accelerated algorithms.
helpx_creative_field: ""
helpx_description: bakers > Bakers Settings > Ambient Occlusion
helpx_experience_level: ""
helpx_learn_topic: ""
helpx_tags: ""
title: Ambient Occlusion
user-guide-description: ""
user-guide-title: ""
---



# Ambient Occlusion

The Ambient Occlusion baker allows to bake an ambient shadow texture. This baker uses a fast algorithm executed on the GPU.

**Available in:**

* Substance Designer
* Substance Automation Toolkit

>[!WARNING]
>
> * This baker may not be supported on old GPUs.
> * Baking at high resolution on low-end / mobile GPUs can lead to a crash.

## Parameters

| *Name* | *Description* |
| --- | --- |
| **Normal Map** | Input normal map file that can be used to provide additional geometry details on the surface of the mesh to be taken into account during the baker computation. This parameter is optional. |
| **World Space** | If enabled, specify that the input normal map is in World Space (instead of Tangent Space). If no input normal map is provided, this parameters is ignored/disabled. |
| **Invert Normal** | Compute the ambient occlusion map with inverted normals (can be used to generate a thickness map). |
| **Use Unselected Mesh Parts** | Use unselected mesh parts of the mesh to bake the ambient occlusion map. |
| **Quality** | Choose the quality of the Ambient Occlusion map. A higher quality is slower to compute.Available values:<ul data-preserve-html="true"><li data-preserve-html="true"><strong>Low</strong> (3 pass)</li><li data-preserve-html="true"><strong>Medium</strong> (default, 5 pass)</li><li data-preserve-html="true"><strong>High</strong> (10 pass)</li><li data-preserve-html="true"><strong>Very High</strong> (16 pass)</li></ul> |
| **Precision Bias** | Precision of the ambient occlusion. A lower value will give a higher precision, but can produce bigger artefacts. |
| **Distance Fade** | Spread of the ambient occlusion. |
