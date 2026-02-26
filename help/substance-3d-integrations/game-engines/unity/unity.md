---
helpx_url: "https://helpx.adobe.com/substance-3d-integrations/game-engines/unity.html"
breadcrumb-title: ""
description: Import and use Substance materials in Unity game engine with native plugin support and runtime parameter control.
helpx_creative_field: ""
helpx_description: Ecosystems and Plugins > Game Engines > Unity
helpx_experience_level: ""
helpx_learn_topic: ""
helpx_tags: ""
title: Unity
user-guide-description: ""
user-guide-title: ""
---

# Unity

![](../../assets/unity.png)

>[!NOTE]
>
> **Unity Supported Versions**
> 
> The Adobe Substance 3D plugin for Unity version 3.0.0 currently supports Unity 2020.3.27x and higher. It can be downloaded from the [Unity Asset Store](https://assetstore.unity.com/packages/tools/utilities/substance-3d-for-unity-beta-213208).

>[!WARNING]
>
> Before upgrading or using the plugin, check the [upgrading project page](https://helpx.adobe.com/substance-3d/unlisted/documentation/integrations/upgrading-projects-182256244.html).

>[!WARNING]
>
> Be sure to check the [Optimization Guidelines](../../game-engines/unity/optimization-guidelines/optimization-guidelines.md) page before authoring custom Substance materials.

## Table of Contents

* [Unity Release Notes](https://helpx.adobe.com/substance-3d/unlisted/documentation/integrations/beta-release-information-170460277.html) — What's new in the Substance in Unity plugin by version
* [Downloading Substance 3D Plugin in Unity](../../game-engines/unity/downloading-plugin-unity/downloading-substance-3d-plugin-in-unity.md) — The Adobe Substance 3D for Unity is available in the Unity Asset Store https://assetstore.unity.com/packages/tools/utilities/substance-in-unity-110555.
* [Unity Plugin Overview](../../game-engines/unity/unity-plugin-overview/unity-plugin-overview.md)
* [Unity Preferences](../../game-engines/unity/unity-preferences/unity-preferences.md) — The Substance preference window allows you to set user-defined options for the plugin.
* [Optimization Guidelines](../../game-engines/unity/optimization-guidelines/optimization-guidelines.md) — When creating your own custom Substance materials, be sure to check the following optimization guidelines.
* [Upgrading Projects/Known Issues](https://helpx.adobe.com/substance-3d/unlisted/documentation/integrations/upgrading-projects-182256244.html) — Known issues with the Substance in Unity plugin
* [Managing Substance Graphs](https://helpx.adobe.com/substance-3d/unlisted/documentation/integrations/managing-and-navigating-substance-graphs-170459636.html) — You can create new materials based on the Substance material using the Substance Graph Manager (SGM)
* [Changing parameters](../../game-engines/unity/changing-parameters/changing-parameters.md) — Parameters for the Substance material are accessible on the Substance Graph Object (SGO).
* [Generated Textures (Packing)](../../game-engines/unity/generated-textures-pac/generated-textures-packing.md) — The Generated Textures show the outputs from the Substance that are computed by the Substance Engine to create textures
* [Rendering Color Space](../../game-engines/unity/rendering-color-space/rendering-color-space.md) — For the best results, you should set the color space to linear in the Unity Player Settings.
* [Using Image Inputs](../../game-engines/unity/using-image-inputs/using-image-inputs.md)
* [Publishing for Mobile](../../game-engines/unity/publishing-for-mobile/publishing-for-mobile.md) — Guidelines for publishing on mobile platforms
* [Substance 3D for Unity Scripting](../../game-engines/unity/3d-for-unity-scripting/substance-3d-for-unity-scripting.md) — Using the Substance API, you can write scripts to update and change Substance parameters at runtime.
* [Scripting in Unity (Deprecated)](https://helpx.adobe.com/substance-3d/unlisted/documentation/integrations/scripting-in-unity-170459644.html) — Using the Substance API, you can write scripts to update and change Substance parameters at runtime.
* [Substance 3D Assets Library Usage](https://helpx.adobe.com/substance-3d/unlisted/documentation/integrations/substance-3d-assets-library-225970070.html)
* [Removing Substance Plugin](../../game-engines/unity/removing-plugin/removing-substance-plugin.md)
* [Substance 3D in Unity Tutorials](../../game-engines/unity/3d-in-unity-tutorials/substance-3d-in-unity-tutorials.md)
* [Physical Size in Unity](../../game-engines/unity/physical-size-in-unity/physical-size-in-unity.md)
* [Sharing sbsar Files Between Projects](https://helpx.adobe.com/sharing-sbsar-files-between-projects.html)[](../../game-engines/unity/sharing-sbsar-files-bet/sharing-sbsar-files-between-projects.md)

**&#91;FORM FOUND - RULES REQUIRED&#93;**

>[!WARNING]
>
> Before upgrading or using the plugin, check the [upgrading project page](https://helpx.adobe.com/substance-3d/unlisted/documentation/integrations/upgrading-projects-182256244.html).

>[!WARNING]
>
> Be sure to check the [Optimization Guidelines](../../game-engines/unity/optimization-guidelines/optimization-guidelines.md) page before authoring custom Substance materials.

### Table of Contents

* [Unity Release Notes](https://helpx.adobe.com/substance-3d/unlisted/documentation/integrations/beta-release-information-170460277.html) — What's new in the Substance in Unity plugin by version
* [Downloading Substance 3D Plugin in Unity](../../game-engines/unity/downloading-plugin-unity/downloading-substance-3d-plugin-in-unity.md) — The Adobe Substance 3D for Unity is available in the Unity Asset Store https://assetstore.unity.com/packages/tools/utilities/substance-in-unity-110555.
* [Unity Plugin Overview](../../game-engines/unity/unity-plugin-overview/unity-plugin-overview.md)
* [Unity Preferences](../../game-engines/unity/unity-preferences/unity-preferences.md) — The Substance preference window allows you to set user-defined options for the plugin.
* [Optimization Guidelines](../../game-engines/unity/optimization-guidelines/optimization-guidelines.md) — When creating your own custom Substance materials, be sure to check the following optimization guidelines.
* [Upgrading Projects/Known Issues](https://helpx.adobe.com/substance-3d/unlisted/documentation/integrations/upgrading-projects-182256244.html) — Known issues with the Substance in Unity plugin
* [Managing Substance Graphs](https://helpx.adobe.com/substance-3d/unlisted/documentation/integrations/managing-and-navigating-substance-graphs-170459636.html) — You can create new materials based on the Substance material using the Substance Graph Manager (SGM)
* [Changing parameters](../../game-engines/unity/changing-parameters/changing-parameters.md) — Parameters for the Substance material are accessible on the Substance Graph Object (SGO).
* [Generated Textures (Packing)](../../game-engines/unity/generated-textures-pac/generated-textures-packing.md) — The Generated Textures show the outputs from the Substance that are computed by the Substance Engine to create textures
* [Rendering Color Space](../../game-engines/unity/rendering-color-space/rendering-color-space.md) — For the best results, you should set the color space to linear in the Unity Player Settings.
* [Using Image Inputs](../../game-engines/unity/using-image-inputs/using-image-inputs.md)
* [Publishing for Mobile](../../game-engines/unity/publishing-for-mobile/publishing-for-mobile.md) — Guidelines for publishing on mobile platforms
* [Substance 3D for Unity Scripting](../../game-engines/unity/3d-for-unity-scripting/substance-3d-for-unity-scripting.md) — Using the Substance API, you can write scripts to update and change Substance parameters at runtime.
* [Scripting in Unity (Deprecated)](https://helpx.adobe.com/substance-3d/unlisted/documentation/integrations/scripting-in-unity-170459644.html) — Using the Substance API, you can write scripts to update and change Substance parameters at runtime.
* [Substance 3D Assets Library Usage](https://helpx.adobe.com/substance-3d/unlisted/documentation/integrations/substance-3d-assets-library-225970070.html)
* [Removing Substance Plugin](../../game-engines/unity/removing-plugin/removing-substance-plugin.md)
* [Substance 3D in Unity Tutorials](../../game-engines/unity/3d-in-unity-tutorials/substance-3d-in-unity-tutorials.md)
* [Physical Size in Unity](../../game-engines/unity/physical-size-in-unity/physical-size-in-unity.md)
