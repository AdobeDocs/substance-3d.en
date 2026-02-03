---
title: "Corona"
helpx_description: "Ecosystems and Plugins > Renderers > Corona"
---

# Corona

For rendering with Corona you can use maps exported from Substance Painter or the Substance plugin. Corona is using the Specular/Glossiness workflow with a 1/IOR map. You will need the following maps:

* Diffuse
* Reflection (Specular)
* Glossiness
* 1/IOR (Converted)

The 1/IOR map can only be converted from the metallic/roughness workflow which is the default workflow in both Substance Designer and Substance Painter.

1. Export maps from Substance Painter using the Corona preset.
1. For custom Substances, you can use the basecolor\_metallic\_roughness converted node set to the Vray preset to create the custom outputs.
1. For 3ds Max and Cinema 4D, you use a layered Corona material to handle metal and dielectric materials and bypass the need to convert a 1/IOR map.

## Table of Contents

* [Corona for 3ds Max](corona-for-3ds-max/corona-for-3ds-max.md)
* [Corona - Substance Painter](corona-substance-painter/corona-substance-painter.md)
