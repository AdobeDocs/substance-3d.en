---
helpx_url: "https://helpx.adobe.com/substance-3d-integrations/3d-applications/modo/environment-and-rendering-setup.html"
breadcrumb-title: ""
description: Configure environment and rendering settings in MODO to optimize Substance material appearance and quality.
helpx_creative_field: ""
helpx_description: Ecosystems and Plugins > 3D Applications > MODO > Environment and Rendering Setup
helpx_experience_level: ""
helpx_learn_topic: ""
helpx_tags: ""
title: Environment and Rendering Setup
user-guide-description: ""
user-guide-title: ""
---



# Environment and Rendering Setup

## Environment Setup and Rendering

For the best results with physically-based rendering and Advanced Viewport setup, you need to use an HDR map in the Environment. MODO ships with several Environment presets that can be found in the Layout Tab.   
Once you have an HDR environment loaded, you need to set the Advanced Viewport Lighting and Background options. You can hit the O key to bring up the 3D Viewport Properties and in the Advanced Options, set the  
Lighting and Environment to the Environment option. Alternatively, you can use Scene + Environment for the Lighting if you have scene lights.

![](../../../assets/env.png)

## Importance Sampling

The Substance Designer 3D viewport uses importance sampling. For the best results when rendering, you should enable Importance Sampling for the MODO renderer. You can do this on the Global Illumination tab of the Render Settings.

![](../../../assets/is-39.png)
