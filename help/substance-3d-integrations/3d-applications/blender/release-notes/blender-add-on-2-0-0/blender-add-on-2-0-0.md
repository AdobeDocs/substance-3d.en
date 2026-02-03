---
title: "Add-on 2.0.0"
helpx_description: "Substance 3D Integrations"
---

# Add-on 2.0.0

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
