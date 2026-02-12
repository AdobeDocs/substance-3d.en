---
title: "Geometry Cache"
description: ""
helpx_description: "bakers > Features > Geometry Cache"
helpx_url: "https://helpx.adobe.com/substance-3d-bake/features/geometry-cache.html"
---

# Geometry Cache

When baking, meshes are pre-processed to clean them up and converted in a format compatible with the baking process. The geometry cache is a way to preserve this pre-processed geometry in a way that is fast to reload in order to avoid redoing this operation later (unless the source mesh change).

* In **Substance Designer** the geometry cache is created after a first bake has been executed. The cache is then kept in memory until the baker window is closed.
* In **Substance Painter** the geometry cache is saved as a file with the extension **assbin** next to the source file after the first bake.

Reusing the geometry cache speed up quite a lot the baking process, especially when tweaking the baker settings to achieve the perfect result.
