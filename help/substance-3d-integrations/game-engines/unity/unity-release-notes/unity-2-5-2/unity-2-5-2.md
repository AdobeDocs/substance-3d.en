---
title: "Unity 2.5.2"
description: ""
helpx_description: "Ecosystems and Plugins > Game Engines > Unity > Unity Release Notes > Unity 2.5.2"
---

# Unity 2.5.2

Released July 23rd, 2020

Added:

* "IsProcessing()" function that states if the renderer is busy, or Idle (not busy)

Fixed:

* No longer display an error when setting 2048 clamp and 4096 target settings
* Material properties will carry over when upgrading to HDRP and/or URP from Standard
* Scripts altering Substance materials will work as expected when deploying to mobile
* Red Channel no longer copied to Alpha and defaulting Alpha to White
* Crash altering Target Settings on Mac
* Removed NullReferenceException error when creating Unity Material
* Removed error when exiting Play Mode after editing tiling properties
* Enable GPU Instancing can be Enabled
* Materials using Transparency will not disappear or incorrectly turn black when existing Play Mode
* Substance materials will not be destroyed in HDRP project when upgrading the plugin
