---
title: "Plugin Settings - UE4"
description: ""
helpx_description: "Ecosystems and Plugins > Game Engines > Unreal Engine > Unreal Engine 4 > Plugin Settings - UE4"
---

# Plugin Settings - UE4

To access the settings, go to Edit&gt;Project Settings and scroll down to the Plugins category and click on Substance.

![](settings-36.png){width="400px"}

## Hardware Budget

The memory budget is the max amount of memory to use for the substance engine. Can be increased to improve speed of substance processing but will consume more system resources. (Not always a helpful increase at a project level).

The CPU Cores is how many cores the Substance engine is allowed to use. This includes both physical cores and hyper threads. (If the number assigned is greater than the available cores on a system, this will default to using all available.

## Cooking

Mip Level count removed during cooking will alter how textures are created for a package. This setting can greatly improve load times and reduce package size because the larger texture mip levels will no longer need to be loaded. The lower resolution / smaller LOD's will be loaded and the highest will be defaulted by the UE4. The substances are then processed through the substance engine and updated at run time with the high resolution LODs.

The Substance Engine can be CPU or GPU. The GPU engine will allow you to create 4K textures. The CPU engine is capped at 2K.

## Default Generation:

The Substance Generation Mode (SGM) controls how the textures are generated. This is a global setting for Substances. The SGM can be changed on a per Substance Basis on the Substance Factory.

**SGM Baked**: Bakes the substance textures. You loose ability to change parameters at runtime.

**SGM on Load Sync**: Blocks the application while the Substances are loading.

**SGM on Load Sync and Cache**: Caches an intermediate result of the texture on disk.

**SGM on Load Async**: Non-blocking. Substances are generated in the background.

**SGM on Load Async and Cache**: Caches an intermediate result of the texture on disk.

***Platform Default is Load Async and Cache***

## Substance Factory

To change the SGM for a Substance, right-click on the Substance Factory&gt;Asset Actions&gt;Bulk Edit via Property Matrix. You can then change the SGM.

![](sgm.png){width="800px"}

## Optimization:

This limits how many async substances can be passed to the substance engine each batch. Lower numbers will speed up how quickly an async task will complete and be updated where higher numbers will batch renders and process multiple substance at a time. (The higher the number, the more choppy texture updates become because the time in between the updates is longer).

## Async/Sync Rendering

Sync rendering is a blocking rendering call. This will pass a substance graph instance to the substance engine to be recomputed but it will stop execution until the substance engine has finished processing the substance before continuing on to any further code execution. The result will also be updated on your screen as soon as the process has finished.

Async will add your graph to a queue and send multiple graphs to the substance engine at a time (set from within substance settings) within the plugin update. Unlike sync rendering, as soon as they are sent off, the program keeps running like usual instead of waiting around for the substance engine to be complete. When the substance engine has finished that batch, it sends the results back, we apply them to the outputs, and we kick off another batch.
