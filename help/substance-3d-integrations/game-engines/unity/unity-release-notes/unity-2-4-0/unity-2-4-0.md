---
helpx_url: "https://helpx.adobe.com/substance-3d-integrations/game-engines/unity/unity-release-notes/unity-2-4-0.html"
breadcrumb-title: ""
description: Review release notes for Unity plugin version 2.4.0 to learn about new features, improvements, and bug fixes.
helpx_creative_field: ""
helpx_description: Ecosystems and Plugins > Game Engines > Unity > Unity Release Notes > Unity 2.4.0
helpx_experience_level: ""
helpx_learn_topic: ""
helpx_tags: ""
title: Unity 2.4.0
user-guide-description: ""
user-guide-title: ""
---



# Unity 2.4.0

>[!WARNING]
>
> Unity changed the default build architecture to x86 instead of x86\_64.   
> Scripts will not run if they reference Substances. You will need to change back to x86\_64 and the build will work.

## New Features:

* HDRP project support added (preview)
* Added Preferences in the Substance menu
* Added ability to set default Substance resolution import setting
* Added ability to set default Normal compression
* Added ability to generate all outputs on an import of a Substance
* Support for custom outputs + outputs with the same usage
* Added Platform Resolution settings
* Added IL2CPP support Bug Fixes

### Bug Fixes:

* Fixed a bug where opening Substance Source on Mac OS would give a Linux error
* Reduced time that it takes when switching platforms. Texture conversion for mobile platforms is now done on build rather than when switching target platform.
* Assertion failed error when importing sbsar
* Upgrading projects using .NET 3.5 causes substance materials to break
* Substance source not supported in linux dialog appearing on OS X
* Graph name change destroys prefabs &amp; scene file in ForceText serialization mode
* Substance materials with multiple outputs using the same usage will break Plugin doesn't support custom outputs in sbsar

### Known Issues:

* When upgrading a project from 2017-2018/2019, after the user imports the Substance plugin, Unity must be restarted for the project to be updated.  
  Workaround: Create a package of the assets/project and import that package into a newer project with the 2.4.0 plugin. The Substance files should be converted correctly.
* Unity has changed the default build architechture to x86. Currently, the Substance plugin only supports x86\_64.

**No Longer Fully Supported:**

* Substance Live Link has been removed from the Asset Store package. (The package can still be downloaded from Substance Share)
