---
helpx_url: "https://helpx.adobe.com/substance-3d-integrations/3d-applications/maya/maya-plugin-release-notes/maya-3-0-0-plus.html"
breadcrumb-title: ""
description: Review release notes for Maya plugin version 3.0.0 and later to learn about new features, improvements, and bug fixes.
helpx_creative_field: ""
helpx_description: Ecosystems and Plugins > 3D Applications > 3ds Max > 3ds Max Plugin Release Notes > Maya 3.0.0
helpx_experience_level: ""
helpx_learn_topic: ""
helpx_tags: ""
title: Maya 3.0.0
user-guide-description: ""
user-guide-title: ""
---



# Maya 3.0.0+

## Maya 3.0.3

<b>Added/Updated:</b>

* Enhanced Maya plugin's caching system to only cache once upon initial network creation, with manual recaching enabled.
* Provided an option to change the location of the "substance" folder in the Maya plugin.
* Updated Maya plugin's workflow import system to ensure compatibility with Autodesk's update to Python 3.12.
* Updated Substance plugin icons with the latest icons.
* Added support for sending and receiving presets using Connector in the plugin.

<b>Fixed:</b>

* Resolved issue where loading/unloading the Substance plugin for Maya produces an error screen and crashes.
* Fixed caching issues, specifically ensuring .exr files reference correctly, and reducing caching-related freezes in large scenes.
* Resolved issue where the material preview in the Sample window is not displayed when an SBSAR file is loaded in the Maya plugin.
* Resolved issue where Connector fails to receive SBSAR file if at least one SBSAR is already in Hypershade.
