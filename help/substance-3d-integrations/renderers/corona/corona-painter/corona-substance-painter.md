---
helpx_url: "https://helpx.adobe.com/substance-3d-integrations/renderers/corona/corona-substance-painter.html"
breadcrumb-title: ""
description: Export Substance Painter textures for Corona renderer using Specular/Glossiness workflow and proper conversions.
helpx_creative_field: ""
helpx_description: Ecosystems and Plugins > Renderers > Corona > Corona - Substance Painter
helpx_experience_level: ""
helpx_learn_topic: ""
helpx_tags: ""
title: Corona - Substance Painter
user-guide-description: ""
user-guide-title: ""
---

# Corona - Substance Painter

For rendering with Corona you can use maps exported from Substance Painter or the Substance plugin. Corona is using the Specular/Glossiness workflow with a 1/IOR map. You will need the following maps:

* Diffuse
* Reflection (Specular)
* Glossiness
* 1/IOR (Converted)

Using the Corona Output Template, Substance Painter will export the converted map types needed.

![](../../../assets/corona-paintetr.png)

>[!NOTE]
>
> Maps that represent data will need to be interpreted correctly. Please see the [Color Management ](../../../renderers/color-management/color-management.md)page for more information.
