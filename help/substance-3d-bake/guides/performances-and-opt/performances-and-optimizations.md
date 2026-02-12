---
title: "Performances and optimizations"
description: ""
helpx_description: "bakers > Guides > Performances and optimizations"
helpx_url: "https://helpx.adobe.com/substance-3d-bake/guides/performances-and-optimizations.html"
---

# Performances and optimizations

## Minimum Hardware Requirements

There are no minimum requirements for using Substance Bakers, however it is important to note the following :

* A good CPU will offer reduced computation times (multiple cores will speed up the computation of **from mesh** bakers that use raytracing).
* A decent amount of memory (RAM) will allow to load meshes with a lot of details (polygons).
* A good GPU will allow to generate textures at big resolutions (like 8K).

## Triangulation

The bakers work internally with triangulated meshes; if the 3D models (low and high poly) are not triangulated, the bakers will triangulate the meshes themselves. This process can take a long time and will increase linearly in relation to the amount of polygons contained in the model. It is generally advised to triangulate the meshes (especially the high poly mesh) in order to avoid this process occurring during baking.

If your workflow is based on FBX, you can triangulate the mesh at export time using an option in the DCC application.

## Geometry Cache

See the following page for more information : [Geometry Cache](../../features/geometry-cache/geometry-cache.md)

## Anti-Aliasing

The bakers can use super sampling to perform anti-aliasing. Supersampling means the bakers will cast more rays per pixel in order to smooth the result. The baking time can be dramatically affected by this setting; this is particularly true for bakers where lots of rays are required, such as the ambient occlusion from mesh baker.

As an example:

* an AA setting of 2x2 means the baker will cast 4 times the initial amount of rays. For a 2048\*2048 px texture, the resulting computation is equivalent to baking a 4096\*4096px texture and should take around 4 times more time to compute.
* an AA setting of 8x8 means the baker will cast 64 times the initial amount of rays. For a 2048\*2048 px texture, the resulting computation time is equivalent to baking a 16384\*16384px texture and should take around 64 times more time to compute.

**Taking these numbers into consideration, the 8x8 setting should be used with care**.

In order to reduce the noise presence, it is generally advised to increase the number of secondary rays (for the ambient occlusion, thickness and bent normals bakers) and keep a 2x2 or 4x4 AA setting rather than using a low amount of secondary rays and a high AA setting.

>[!NOTE]
>
> A good performance/quality setting for ambient occlusion from mesh is to use AA 2x2 and at least 128 secondary rays.

## File Format

Exporting files on disk can take a significant amount of time depending on the file format, resolution, bitdepth and compression settings. Compression settings can be modified in the Preferences / Projects / General / File Format options. Disabling compression can decrease the export time at the expanse of larger files.

## Crashes and TDR

Crashes can be caused by multiple factors, one of them being the TDR (Timeout Detection Recovery). The TDR is a Windows mechanism built to detect and recover from situations where the GPU seems to be not responding. Because of a low default value for the TDR delay detection, crashes can be experienced when using specific bakers in some situations:

* when baking dense meshes with the Ambient Occlusion baker
* when using the DXR accelerated bakers with very dense high poly meshes (more than 60 Million triangles)

You can find additional information about the TDR and a step by step guide to how you can modify its associated settings here: [GPU drivers crash with long computations (TDR crash)](https://helpx.adobe.com/substance-3d/unlisted/documentation/spdoc/gpu-drivers-crash-with-long-computations-128745489.html)
