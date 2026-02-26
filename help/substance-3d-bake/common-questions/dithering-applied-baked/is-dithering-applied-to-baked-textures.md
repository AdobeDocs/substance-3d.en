---
helpx_url: "https://helpx.adobe.com/substance-3d-bake/common-questions/is-dithering-applied-to-baked-textures.html"
breadcrumb-title: ""
description: Understand whether dithering is applied to baked textures and how it affects texture quality.
helpx_creative_field: ""
helpx_description: "bakers > Common Questions > Is dithering applied to baked textures "
helpx_experience_level: ""
helpx_learn_topic: ""
helpx_tags: ""
title: "Is dithering applied to baked textures "
user-guide-description: ""
user-guide-title: ""
---



# Is dithering applied to baked textures ?

>[!WARNING]
>
> **Question**
> 
> Does the Bakers support texture [dithering](https://en.wikipedia.org/wiki/Dither) and if so when is it applied ?

>[!NOTE]
>
> **Explanation**
> 
> Dithering is applied to avoid banding in 8bit normal maps for example :
> 
> ![](../../assets/dither.jpg)

>[!NOTE]
>
> **Solution : Substance Designer**
> 
> Dithering is automatically applied in the following situations :
> 
> * When a Baker output is saved into an 8bit texture file
> * When a Baker output is used in a bitmap node of a graph set to 8bits.

>[!NOTE]
>
> **Solution : Substance Painter**
> 
> Dithering is an option that can be enabled or disabled during the export process. It is only applied when exporting to 8bit file format for the Normal, Displacement and Height channel.

>[!NOTE]
>
> **Solution : Substance Automation Toolkit**
> 
> Dithering is not supported at the moment.
