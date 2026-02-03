---
title: "Unity 3.0.0"
description: ""
helpx_description: "Ecosystems and Plugins > Game Engines > Unity > Unity Release Notes > Unity 3.0.0"
---

# Unity 3.0.0

Released June 27th, 2021

Updated/Added:

* Apple Silicon support
* New YouTube tutorial on how to use the plugin
* New scripting documentation
* Support for control-z in the Substance Graph editor and main substance file editor
* Improved performance when loading a large number of sbsar files
* Support for substance materials with multiple graphs
* Changed the UI for managing Substance graphs
* Exposed API to load a preset via C#
* Updated online documentation

Fixed:

* Bug in the inspector display when hitting the randomize button over and over
* Null texture inputs breaking Substance updates
* “Generate All Outputs”, “Generate Mip Maps” and “Runtime only” toggle not working
* Issues with the Namespaces
* Null Reference error when entering play mode with graph asset selected
* An issue with HDRP and URP for the latest 2021.3 LTS version of Unity when using Runtime only materials
* Performance issues with sbsar files with multiple inputs
* "The Handle has already been released" errors
* "Shifted blue on play mode enter" issue
* The height-map issue with the sbsar files
* An issue with image inputs reading unreadable textures

Known issues:

* Fix for a Mac issue where the R and B channels of the output textures will be flipped
* Major performance improvements for Mac
