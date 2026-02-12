---
title: "Baker output is fully black or empty"
description: ""
helpx_description: "bakers > Common Issues > Baker output is fully black or empty"
helpx_url: "https://helpx.adobe.com/substance-3d-bake/common-issues/baker-output-is-fully-black-or-empty.html"
---

# Baker output is fully black or empty

>[!WARNING]
>
> **Issue**
> 
> The result of a baker is a black or empty texture:
> 
> ![](black.png)

>[!NOTE]
>
> **Explanation**
> 
> A black texture means the baker wasn't able to find the information required to output a result. For example the baking process didn't find the high-poly mesh to match with the low-poly resulting in nothing to compare against.

>[!NOTE]
>
> **Solution**
> 
> * Verify if the high-poly mesh necessary for the baker was properly loaded (refer to the log file/window for any errors).
> * Verify that the low-poly or high-poly meshes are not too big (more than a kilometer) or too small (less than a centimeter).
> * Verify if the baker was able to read/process the mesh (refer to the log file/window for any errors).
> * Verify if the [Matching by Name](../../features/matching-by-name/matching-by-name.md) feature was not properly setup (some objects may exclude each other and never overlap).
> * Verify that the low-poly UVs are within the 0-1 range.
