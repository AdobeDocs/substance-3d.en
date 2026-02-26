---
helpx_url: "https://helpx.adobe.com/substance-3d-integrations/game-engines/unity/rendering-color-space.html"
breadcrumb-title: ""
description: Configure Unity's color space settings to ensure proper rendering of Substance materials with physically-based shaders.
helpx_creative_field: ""
helpx_description: Ecosystems and Plugins > Game Engines > Unity > Rendering Color Space
helpx_experience_level: ""
helpx_learn_topic: ""
helpx_tags: ""
title: Rendering Color Space
user-guide-description: ""
user-guide-title: ""
---



# Rendering Color Space

Substance textures are designed to be used with a Physically-based shader. For the best results, you should set the color space to linear in the Unity Player Settings.

1. Go to Edit&gt;Project Settings&gt;Player
1. In the Rendering section, change the Color Space to Linear. (Unity defaults to Gamma space, which is incorrect and will result in your texture color looking wrong).

   >[!NOTE]
   >
   > **Info**
   > 
   > sRGB options on textures are disabled if the Color Space Setting in Unity is set to Gamma

   ![](../../../assets/rendering-4.png){width="600px"}
