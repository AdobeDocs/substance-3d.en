---
helpx_url: "https://helpx.adobe.com/substance-3d-integrations/3d-applications/blender/release-notes/add-on-0-9-1.html"
breadcrumb-title: ""
description: Review release notes for Blender add-on version 0.9.1 to learn about new features, improvements, and bug fixes.
helpx_creative_field: ""
helpx_description: Ecosystems and Plugins > 3D Applications > Blender > Release Notes > Add-on 0.9.1
helpx_experience_level: ""
helpx_learn_topic: ""
helpx_tags: ""
title: Add-on 0.9.1
user-guide-description: ""
user-guide-title: ""
---



# Add-on 0.9.1

**Release notes for Addon version 0.91+**

* Note: *Plugin version 0.91+ has no backward compatibility with the previous versions of the plugin!*
* Re-architecture of the internal codebase to improve the performance and stability of the plugin
* Revamped UI to improve the overall user experience
* Added UI to provide the ability to modify the default tiling
* Added support for updating textures in cycles render view
* Added error handling in the console to notify if a substance failed to load
* Updated the floating menu with quick actions

**Preferences Section: Added/Updated:**

* Export Image Format parameter; when images generated within Blender are used as image inputs for a Substance material, this format is used to save that image to the Temporal folder.
* Sbsar library path; specifies the folder that is opened by default when the Load button is used to search for a substance file.
* A default texture export path (Temporal folder) that emulates the path that is used by Substance 3d Painter to handle unsaved file exports
* Texture relative path same as above, with the option to use keys like $matName to create subfolders
* Sbsar files relative path to creating a subfolder that packages the sbsar files used in your blend file when you save your project
* Ability to dynamically set different shader networks in preferences - In the shader network, ability to set different variables per shader depending on the shader needs
* In the outputs section of the shader network, you have the ability to set if an output is enabled by default
* Ability to set the colorspace (this will support aces, linear exr and blender filmic workflows, not only srgb)
* The default selection of the image format and bitdepth
* A generic output to set up the values for output usages not defined in the shader, for example if you have another output that is not used by default by the shader, for examples,like a mask.
* A filter to change the type of outputs(1 Only enabled outputs, 2 All outputs that are in the shader and in the Substance, 3 All outputs available in the Substance)
* Support for custom shortcuts (edited)

**Substance 3D Panel Section: Added/Updated:**

* Ability to adjust and lock the tiling and resolution parameter value
* Updated preset UI - The shader type dropdown to change the type of graph that users want to have
* Changed the image input parameter to the standard image input used in Blender. You can now use blender images and not just files
* Ability to work in multiple Blender instances at any time
* Support for auto-highlighting of the materials in the Substance 3D panel when the material is selected in the viewport
