---
helpx_url: "https://helpx.adobe.com/substance-3d-integrations/game-engines/unity/unity-release-notes/unity-2-4-5.html"
breadcrumb-title: ""
description: Review release notes for Unity plugin version 2.4.5 to learn about new features, improvements, and bug fixes.
helpx_creative_field: ""
helpx_description: Ecosystems and Plugins > Game Engines > Unity > Unity Release Notes > Unity 2.4.5
helpx_experience_level: ""
helpx_learn_topic: ""
helpx_tags: ""
title: Unity 2.4.5
user-guide-description: ""
user-guide-title: ""
---



# Unity 2.4.5

Released April 6th 2020

* Added: HDRP Asset check using the 2019.3 API
* Added: Substance Engine 7.2 update - fixes some substance materials from Source not working
* Added: Update Target Settings to Match CPU Resolution
* Added: CPU Engine Max Resolution Setting (4k or 2k Setting)
* Added: Convert non-HDRP Substance(s) within a HDRP project
* Fixed: Crash when importing large amount of Substances
* Fixed: Exception when clicking reimport in Play Mode after changing Substance parameters
* Fixed: Validate output (texture) resolution ( API to cap CPU engine to 2K) User preference to set default to 4K
* Fixed: Clicking 'Generate Mip Maps' on a Substance graph while in Play mode, then changing parameters results in an infinite hang
* Fixed: While using the Substance plugin in a HDRP project, using Raw compression sets greyscale textures to Alpha8
* Fixed: GameObject de-selected in Play mode
* Fixed: Roughness map is not updating with parameter change
* Fixed: The mask output is not generated correctly for some Substance files in HDRP
* Fixed: Crash when switching packed alpha map dropdown between two options
* Fixed: The GPU Instancing checkbox is reverted when clicking away from the Substance material.
* Fixed: When using the Duplicate() function, the duplicated Substance graph does not have the smoothness packed into the alpha of the metallic properly.
* Fixed: Switching the build target to Android results in textures being the wrong format until they are manually reimported.
* Fixed: Deleting a Substance file in Unity will cause a NullReferenceException.
* Fixed: Disable use of Unity 2019.3 HDRP API for previous versions

Known Issues:

* The emission checkbox is not enabled by default, and the HDR value is set to black on import of a Substance.
* Material properties from packages with standard substance materials don’t carry over on import.
* Update from 2017-2019/2020 doesn’t work in HDRP
* Clicking the 2048 clamp option in the settings menu while having 4096 selected in the target settings (without clicking apply) results in an error in the Console Log
