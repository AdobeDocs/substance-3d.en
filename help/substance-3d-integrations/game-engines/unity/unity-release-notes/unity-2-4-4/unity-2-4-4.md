---
title: "Unity 2.4.4"
description: ""
helpx_description: "Ecosystems and Plugins > Game Engines > Unity > Unity Release Notes > Unity 2.4.4"
helpx_url: "https://helpx.adobe.com/substance-3d-integrations/game-engines/unity/unity-release-notes/unity-2-4-4.html"
---

# Unity 2.4.4

Released Feb 2020

* Added: Proper support for 2019.3: Fixed Unity API changes that broke the Substance plugin scriptable object. Reworked objects to work with 2019.3 API updates. Fixed - Using custom material causes material to go black on exiting play
* Fixed - Crash when using the Duplicate() function in a script, then entering and exiting play.
* Fixed - Material tiling, settings, and shader reset in 2019.3
* Fixed - HDRP Material Shader is not Refreshing a parameter changes
* Fixed - HDRP Mask Map not updating
* Fixed - Add string parameter for Duplicate function
* Fixed - Fix Linux support in latest Unity Stable
* Fixed - Address issue of bitcode having to be disabled for iOS

Known Issues:

* Renaming the HDRP Asset will cause the plugin to not generate a Mask Map.
* While using the Substance plugin in a HDRP project, using Raw compression sets greyscale textures to Alpha8.
* GameObjects will de-selected in Play mode
* Clicking 'Generate Mip Maps' on a Substance graph while in Play mode, then changing parameters results in an infinite hang.
