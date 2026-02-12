---
title: "Unity 2.2.0"
description: ""
helpx_description: "Ecosystems and Plugins > Game Engines > Unity > Unity Release Notes > Unity 2.2.0"
helpx_url: "https://helpx.adobe.com/substance-3d-integrations/game-engines/unity/unity-release-notes/unity-2-2-0.html"
---

# Unity 2.2.0

## 2.2.0 Release notes

**release date: 1/10/2019**

### Core Plugin:

* Updated Substance Engine
* Improved code stability
* **Unity 2018.3 support**
* **.NET 4.x support**
* Substance Source support in 2018.3
* Substance Source coloring issue has been fixed
* The graph, and corresponding material, now have the same object name
* Added Unity Pro skin GUI readability improvements
* Added support for material's output assignments
* Fixed a bug with sRGB handling
* Fixed a bug where an user could could delete all instances of a graph
* Fixed a bug where attempting to render Substances while changing parameters at runtime would only cause two to be able to rendered at a time
* When importing a package that contains old Substance files, the plugin will now let the user know that it contains old Substance data and delete the package files when Unity is attempting to import them (this is so the user does not have to delete everything manually if it came in broken)
* Added an 'About' button in the Substance menu to show Substance plugin related build information
* Added mouse-over tooltips in the Substance GUI to show exposed Substance parameter names
* Added Navigation buttons in the Substance GUI to link to Substance graph and materials
* Added new icons for the Substance graph/material/textures in the Content Browser
* Updated the Substance thumbnails in the content browser
* Removed the .mat from the front of Substance material names
* Added the ability to rename Substance graphs and materials
* When changing Substance graph resolution, the apply/revert popup will no longer appear forcing the user to commit the change at that moment
* Fixed a bug where the Reflection process would only use the default Substance resolution, instead of one defined by the user
* Added a mouseover warning to the Substance GUI that informs the user if the color space is set to Gamma
* Changed functionality of Substance graph instances: Users can now create graph instances in a Substance without being prompted for each created instance in the Substance graph GUI

### Scripting:

* We have hidden some functions not meant for script support
* Added function to duplicate Substance graph instances through script: Duplicate()
* Added function to query procedural input information via C#, returns an array of 'InputProperties' elements: GetInputProperties()
* Added function to check if an input exists in a graph, returns true/false: HasInput(string inputName)
* Added function to check if a visibleif input is visible, returns true/false: IsInputVisible(string inputName)
* The rendering scheme has been re-designed. As such, RenderSubstancesAsync() has been deprecated, this has been changed to graphName.RenderAsync()

## Known Issues:

**Core Substance Plugin**

* User must disable 'Enable Bitcode' in the Build Settings menu in Xcode to build for iOS
* Substance object previews in the Content Browser show up black when the build target is set to Android/iOS
* The Alpha button and Mip Map preview slider are missing on the non-Substance texture GUI after importing the Substance plugin
* The user has to use powers of two to define a Substance graph resolution through script
* Substance materials are not persistent when exported/imported using a Unity package
* Substances do not work with Asset Bundles
* Substance preview icons in the Asset Browser all change to the Substance S icon after a reimport
* Renaming a Substance graph that has a material in the scene will remove that material from the objects it is placed on
* (Mac only) Updating the plugin on Mac removes Substance materials from prefabs in the scene|

**Scripting**

* Scripting does not work at runtime if the project is set to x86 in the build settings
* Issues using il2cpp scripting backend with certain build platforms

**Substance Painter Live Link**

* Building a project after painting with Substance Live Link will set the painted mesh back to a default material
* AO channel not sent with Painter live link
* Meshes with multiple materials do not work in Unity Live Link
* The way Unity LiveLink uses SimpleJson clashes with other instances of SimpleJson in a project
