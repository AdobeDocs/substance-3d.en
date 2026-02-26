---
helpx_url: "https://helpx.adobe.com/substance-3d-integrations/game-engines/unity/unity-release-notes/unity-2-3-4.html"
breadcrumb-title: ""
description: Review release notes for Unity plugin version 2.3.4 to learn about new features, improvements, and bug fixes.
helpx_creative_field: ""
helpx_description: Ecosystems and Plugins > Game Engines > Unity > Unity Release Notes > Unity 2.3.4
helpx_experience_level: ""
helpx_learn_topic: ""
helpx_tags: ""
title: Unity 2.3.4
user-guide-description: ""
user-guide-title: ""
---


# Unity 2.3.4

>[!WARNING]
>
> **Using the plugin with Unity 2019.2 will produce the following error:**
> 
> InspectorSubstanceImporter.OnInspectorGUI must call ApplyRevertGUI to avoid unexpected behavior.  
> UnityEditor.Experimental.AssetImporters.AssetImporterEditor:OnDisable()  
> Substance.Editor.InspectorSubstanceImporter:OnDisable()
> 
> This error can be cleared and will not affect the functionality of the plugin

>[!WARNING]
>
> **Please read: Substance materials breaking:**  
> Substance materials that contain a custom output with a blank usage will break on import. Also, Substance materials containing duplicate usages will break.   
> Older sbsar files from GameTextures.com are not currently compatible with the Substance in Unity plugin. These materials which contain unsupported Usage outputs are breaking. Before using the plugin, be sure to make a backup of your project.

## New Features:

* Added support for Substance Engine v7
* Added Linux support

### Bug Fixes:

* Fixed issues related to importing a Substance without any texture maps
* Fixed an issue with the reflection process not working correctly in Unity 2019.x
* Fixed prefab handling issues when importing a package containing prefabs with Substance materials
* Fixed material/texture assignments not being carried over after the reflection process
* Fixed an issue related to changing shaders causing materials to break
* Fixed an issue where roughness was not being packed into the metallic alpha channel
* Fixed an issue where when the Substance plugin was installed, changing import settings for non-substance textures reverted certain options.
* Fixed an issue where Substance Source would not open on Mac

## Known Issues:

**Core Substance Plugin**

* User must disable 'Enable Bitcode' in the Build Settings menu in Xcode to build for iOS
* Substances do not work with Asset Bundles
* Substance preview icons in the Asset Browser all change to the Substance S icon after a reimport
* Custom Substance materials that have an output with usage set to blank will break the material
* Custom Substance materials that have duplicate usages will break the material
* The Editor has to be restarted after the plugin is imported on Linux

**Scripting**

* Scripting does not work at runtime if the project is set to x86 in the build settings
* Issues using il2cpp scripting backend with certain build platforms

**Substance Painter Live Link**

* Building a project after painting with Substance Live Link will set the painted mesh back to a default material
* AO channel not sent with Painter live link
* Meshes with multiple materials do not work in Unity Live Link
* The way Unity LiveLink uses SimpleJson clashes with other instances of SimpleJson in a project
