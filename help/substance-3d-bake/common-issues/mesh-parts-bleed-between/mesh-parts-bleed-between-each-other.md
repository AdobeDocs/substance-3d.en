---
helpx_url: "https://helpx.adobe.com/substance-3d-bake/common-issues/mesh-parts-bleed-between-each-other.html"
breadcrumb-title: ""
description: Prevent mesh parts from bleeding into each other during baking by using Matching by Name or adjusting distances.
helpx_creative_field: ""
helpx_description: bakers > Common Issues > Mesh parts bleed between each other
helpx_experience_level: ""
helpx_learn_topic: ""
helpx_tags: ""
title: Mesh parts bleed between each other
user-guide-description: ""
user-guide-title: ""
---



# Mesh parts bleed between each other

>[!WARNING]
>
> **Issue**
> 
> Mesh geometry bleeds on other parts and create artifacts.
> 
> ![](../../assets/bleed-example.png)

>[!NOTE]
>
> **Explanation**
> 
> The baking process sends rays from the low-poly mesh surface to hit the high-poly mesh to create a match. Sometimes the rays go too far and hit the wrong geometry, creating the bleeding and artifacts.

>[!NOTE]
>
> **Solution**
> 
> A few solutions are available to avoid this issue :
> 
> * Use the [Matching by Name](../../features/matching-by-name/matching-by-name.md) feature to isolate the meshes
> * Use a [cage](https://helpx.adobe.com/substance-3d/unlisted/documentation/bake/cage-projection-172822982.html) to limit the ray distance.
> * Change the default ray distance in the common baker settings to a lower value.
