---
helpx_url: "https://helpx.adobe.com/substance-3d-bake/common-questions/why-is-matching-by-name-not-working-with-ambient-occlusion-thickness.html"
breadcrumb-title: ""
description: Understand why Matching by Name doesn't work with Ambient Occlusion and Thickness bakers and find alternatives.
helpx_creative_field: ""
helpx_description: "bakers > Common Questions > Why is Matching by Name not working with Ambient OcclusionThickness "
helpx_experience_level: ""
helpx_learn_topic: ""
helpx_tags: ""
title: "Why is Matching by Name not working with Ambient OcclusionThickness "
user-guide-description: ""
user-guide-title: ""
---



# Why is Matching by Name not working with Ambient Occlusion/Thickness ?

>[!WARNING]
>
> **Question**
> 
> I enabled [Matching By Name](../../features/matching-by-name/matching-by-name.md) in the [common parameters](../../bakers-settings/common-parameters/common-parameters.md) to filter and sort my low and high poly meshes, why does the Ambient Occlusion baker ignores it ?

>[!NOTE]
>
> **Explanation**
> 
> The Ambient Occlusion, Thickness and Bent Normals baker launch secondary rays when they compute their textures. These rays have their own Matching By Name setting.

>[!NOTE]
>
> **Solution : Substance Painter**
> 
> Solution: enable the matching by name filtering for the secondary rays in the baker parameters.
