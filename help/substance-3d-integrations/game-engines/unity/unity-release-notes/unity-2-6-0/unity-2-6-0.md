---
helpx_url: "https://helpx.adobe.com/substance-3d-integrations/game-engines/unity/unity-release-notes/unity-2-6-0.html"
breadcrumb-title: ""
description: Review release notes for Unity plugin version 2.6.0 to learn about new features, improvements, and bug fixes.
helpx_creative_field: ""
helpx_description: Ecosystems and Plugins > Game Engines > Unity > Unity Release Notes > Unity 2.6.0
helpx_experience_level: ""
helpx_learn_topic: ""
helpx_tags: ""
title: Unity 2.6.0
user-guide-description: ""
user-guide-title: ""
---


# Unity 2.6.0

Released June 7th, 2021

Updated/Added:

* New workflow for accessing Substance Source! The Substance Source action now accesses the Source tab within the Substance Launcher allowing assets to be sent directly to Unity
* Plugin version information can be copied to clipboard
* “Generate on load” removed from Target settings

Fixes:

* In HDRP projects, Displacement mode will revert to the default value (Tessallation) when a change is made to the material setting
* Resolution size does not display in Inspector window
* Unable to install plugin to Unity versions 2020.2 and higher

Known issues:

* Access denied error and/or crash occurs when updating the plugin from prior versions 2.5.4 and lower
  * Workaround: Prior plugin versions 2.5.4 and lower, need to be uninstalled from Unity project versions 2020.2 and higher before installing plugin version 2.6.0
* Texture previews for image files will not display in the inspector when the Substance plugin is installed
  * The source of this issue exists within Unity and is planned to be fixed by Unity within their 2021.2 versions (currently in beta)
