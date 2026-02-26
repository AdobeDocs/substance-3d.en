---
helpx_url: "https://helpx.adobe.com/substance-3d-integrations/3d-applications/3ds-max/3ds-max-plugin-release-notes/3ds-max-2-3-2.html"
breadcrumb-title: ""
description: Review release notes for 3ds Max plugin version 2.3.2 to learn about new features, improvements, and bug fixes.
helpx_creative_field: ""
helpx_description: Ecosystems and Plugins > 3D Applications > 3ds Max > 3ds Max Plugin Release Notes > 3ds Max 2.3.2
helpx_experience_level: ""
helpx_learn_topic: ""
helpx_tags: ""
title: 3ds Max 2.3.2
user-guide-description: ""
user-guide-title: ""
---


# 3ds Max 2.3.2

Released April 8, 2020

Today we have released the 2.3.2 version of the plugin, which is mostly a bugfix release on top of 2.3.1.  
  
2.3.2 Release:

* Updated Substance Engines to 7.2.9
* Fixed issue with rendering with Redshift/VRay crashing in 3ds Max 2018, 2019 and 2020
* Debug assert errors will no longer appear
* Substance2 node now correctly has the scripting interfaces for iMultipleOutputChannelsWithValues
* The Substance source entry on the menu will now open the Substance Launcher to the Source tab if it is installed
* Substance materials should now update correctly when working with the Corona renderer
* Substance outputs are no longer temporarily replaced with images when used with VRay Next
* Render compatibility dialog removed from automatically apppearing. It is still available in the settings dialog if needed
* Fixed possible issue with exporting an fbx while substance material is applied in 3ds Max 2021

Known Issues:

* In 3ds Max 2018, exporting an fbx with a Substance material attached to the object will crash in the fbxmax.dlu plugin. We are currently talking with Autodesk to see if there is something on our end that can be done or whether it is a limitation of the older release of the fbx integration. The previous workaround was unreliable and was removed. This does not occur in 3ds Max 2019 or newer.

This version is released for 3ds Max 2018, 2019, 2020 and 2021.
