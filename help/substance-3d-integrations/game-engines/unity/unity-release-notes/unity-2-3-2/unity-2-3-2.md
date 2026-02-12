---
title: "Unity 2.3.2"
description: ""
helpx_description: "Ecosystems and Plugins > Game Engines > Unity > Unity Release Notes > Unity 2.3.2"
helpx_url: "https://helpx.adobe.com/substance-3d-integrations/game-engines/unity/unity-release-notes/unity-2-3-2.html"
---

# Unity 2.3.2

## New Features:

* Material Serialization
* Reflection: The plugin now allows for importing of old Substance files in packages (automatically updated to new Substance data on import)
* Material properties are carried over on import of packages with Substance data  
  * Note: This only applies for packages created using the 2.3.0 update or later
* Added Bake Texture button to Substance graph menu

### Bug Fixes:

* Fixed an issue where the Substance material tiling would be reset if the Library folder was removed
* Improved speed coming out of Play mode
* Fixed a crash when updating the plugin while the Substance DLL is in use
* The Allegorithmic folder now cannot be deleted within Unity.  
  * Note: The contents of the Allegorithmic folder cannot be modified. Deleting it within Unity can cause multiple issues, causing the Allegorithmic folder to magically reappear when Unity is closed and reopened. There is now a warning that informs the user to delete it with Unity closed manually from the project's Assets folder
* Improved speed coming out of Play mode
* Fixed a bug that reset the Substance material properties when the Library folder was removed

## Known Issues:

**Core Substance Plugin**

* User must disable 'Enable Bitcode' in the Build Settings menu in Xcode to build for iOS
* Substances do not work with Asset Bundles
* Substance preview icons in the Asset Browser all change to the Substance S icon after a reimport

**Scripting**

* Scripting does not work at runtime if the project is set to x86 in the build settings
* Issues using il2cpp scripting backend with certain build platforms

**Substance Painter Live Link**

* Building a project after painting with Substance Live Link will set the painted mesh back to a default material
* AO channel not sent with Painter live link
* Meshes with multiple materials do not work in Unity Live Link
* The way Unity LiveLink uses SimpleJson clashes with other instances of SimpleJson in a project
