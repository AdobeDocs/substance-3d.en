---
title: "Unity 2.5.1"
helpx_description: "Ecosystems and Plugins > Game Engines > Unity > Unity Release Notes > Unity 2.5.1"
---

# Unity 2.5.1

Released May 21st 2020

Added

* Universal Render Pipeline Support: Substance textures will automatically use URP shaders and materials

Fixed

* Substance CPU Engine Max Resolution Setting:  
  * Updated the Field name in the Substance Settings menu from “Texture Clamp \*\*” to “Substance CPU Engine Max Resolution”
  * Warning notification will display indicating that all substance materials will be re-imported, when setting is modified
* Removed unnecessary Debug message that displayed upon install (“TextureClamp = 4096 Unity.Engine.Debug:Log(Object)“)
* HDRP project: Material properties that are in both standard and HDRP materials will carry over when packages are imported that include Substances
* Reflection and HDRP masks will create and work as expected when a Substance material from a Substance package that was in previous Unity version, is imported
* Duplicated Substance material will be the intended color and no longer yellow when using the duplicate function
* Substance source will load as expected after closing and re-opening Unity
* Crashes when importing a package into HDRP project (intermittently)
* Slider works as expected for Substance materials with a exposed parameter that has the Editor set to Color(Grayscale)
* Crash when clicking “Reset Preset to Default” with Substance graphs that have no default Resolution
* Crash when changing output size of a Substance material when output size parameter is not exposed
* Building for iOS will not fail
* Scripts using Substance materials will execute when building for Windows Standalone
