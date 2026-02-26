---
helpx_url: "https://helpx.adobe.com/substance-3d-integrations/3d-applications/blender/release-notes/add-on-0-9-3/add-on-2-0-0-plus.html"
breadcrumb-title: ""
description: Review release notes for Blender add-on version 2.0.0 and later to learn about new features and improvements.
helpx_creative_field: ""
helpx_description: Ecosystems and Plugins > 3D Applications > Blender > Release Notes > Add-on 2.0.0
helpx_experience_level: ""
helpx_learn_topic: ""
helpx_tags: ""
title: Add-on 2.0.0
user-guide-description: ""
user-guide-title: ""
---


# Add-on 2.0.0+

## Add-on 2.2

<b>Added:</b>

* Support for Octane renderer
* Initial support for Redshift
* Initial support for Renderman

<b>Updated:</b>

* Upgraded to the latest version of Connector
* Added functionality to receive presets using the Connector
* Enhanced the import preset functionality: now, all instances of an SBSAR that include the material will add the preset
* Standardized Connector functionality

<b>Fixed:</b>

* Persistence bug where the input image was not working after saving the blend file
* Issue with shader network not functioning when updating the shader preset
* Incorrect URL in the download plugin button
* Inverted tiling in Octane
* Non-functioning input values with third-party renderers
* Issue where float input value parameter was not created
* Renderman color spaces not functioning correctly
* Shader presets not filtering by available renderer

## Add-on 2.1.1

This update includes support for Blender 4.0+ and several new features in the Addon Preferences. We've also added support for Substance Connector for seamlessly transferring data between Substance 3D Sampler and Blender (Send To) and addressed some bugs. Please find the detailed release notes below.

<b>Added/Updated:</b>

* Added Substance Connector functionality (supports SBSAR files and USD files).
* Support for Blender 4.0+.
* Support for SRE version 2.1.0.
* In Addon Preferences:
  * Ability to choose the Substance Integration Tools install path.
  * Button to reset the Integration Tools to the default path.
  * Button to open the Integration Tools folder.
  * Added Apply type to assign material (Insert: set it as main material, Append: add it to the bottom of the list).
  * Added checkbox to select the default behavior of the Input groups (collapsed/expanded).
  * Added checkbox to select the default behavior of the only update textures property.
  * Automatically start the Substance Remote Engine when opening Blender (important to be enabled if using Connector).
* In Addon:
  * Added Only update textures (allows changing the parameters without remaking the node graph).
  * Added expand all groups and collapse all groups buttons.
  * Added Input Image group to group all input images if needed in an SBSAR.
  * Parameter Inputs are now shown in the same order as Designer.
  * Added thumbnail preview of each Substance material.

<b>Fixed:</b>

* Fixed bug of empty General input group.

<b>Known Issues:</b>

* The functionality to auto-select SBSAR when selecting an object is not working at the moment, so it is disabled.

## Add-on 2.0.0

The Substance 3D Addon 2.0 marks a transformative update for Blender users, featuring a completely refactored plugin architecture. This redesign focuses on seamless integration, enhanced performance, and a flexible foundation for future expansions. It represents not just an upgrade, but a reimagining of how Substance materials are handled within Blender, catering to the evolving needs of 3D professionals.

<b>Highlights of Version 2.0:</b>

* Refactored architecture – improved plugin structure for enhanced performance and integration
* Future expansion support – the update lays the groundwork for easily adding new features in the future
* Broader compatibility – fully compatible with Blender versions 3.0 and above, including support for Mac users

<b>Added/Updated:</b>

* &#91;SRE&#93; Substance Engine selection support (GPU is the default)
* &#91;SRE&#93; New image formats to export the textures
* &#91;SRE&#93; Bit depth selection for each map type
* &#91;BLD&#93; Value outputs support
* &#91;BLD&#93; String input support
* &#91;SRE&#93; Added option to select the default temporary folder for the image export destination

<b>Fixed:</b>

* &#91;SRE&#93; Overall performance improvement
* &#91;BLD&#93; Fixed communication issues between the Integration Tools and Blender
* &#91;BLD&#93; Integration Tools fail to install/start
* &#91;BLD&#93; Integration Tools fail to end when you close Blender
* &#91;BLD&#93; Material not updating when changing the file type of a map
* &#91;SRE&#93; All maps of the materials are exported all the time
* &#91;SRE&#93; Integration Tools export normal maps with stair-stepping
* &#91;SRE&#93; Substance load never finishes
* &#91;SRE&#93; Physical Size units are not adjusted to the scene
* &#91;BLD&#93; Presets generated in Blender don't work with other integrations
* &#91;BLD&#93; Material doesn't update in Cycles
* &#91;BLD&#93; Soft and hard limits of inputs are ignored
* &#91;BLD&#93; Color intensity not updating correctly when adjusting a parameter
* &#91;SRE&#93; Integration Tools uninstall fails
* &#91;SRE&#93; We’ve fixed the issue where duplicating materials multiple times caused an error.
* &#91;SRE&#93; The color space of image nodes now correctly matches user preferences.

<b>Known issues:</b>

* When using Blender v4.0+ the sockets are not in order after enabling and disabling multiple times
* Cltr+Z to undo changes might cause errors
* Loading an empty file or a folder instead of a .sbsar file might break the plugin
* Support for Blender headless mode
