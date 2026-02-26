---
helpx_url: "https://helpx.adobe.com/substance-3d-integrations/3d-applications/maya/maya-plugin-release-notes/maya-2-2-1.html"
breadcrumb-title: ""
description: Review release notes for Maya plugin version 2.2.1 to learn about new features, improvements, and bug fixes.
helpx_creative_field: ""
helpx_description: Ecosystems and Plugins > 3D Applications > Maya > Maya Plugin Release Notes > Maya 2.2.1
helpx_experience_level: ""
helpx_learn_topic: ""
helpx_tags: ""
title: Maya 2.2.1
user-guide-description: ""
user-guide-title: ""
---

# Maya 2.2.1

Maya 2.2.1 Release:

* Update Substance Engine to 8.3.0
* Add native support for Arnold, removing the need for cache to disk
* This can be used after enabling rendering extensions in the settings and restarting Maya
* The supported versions are:
* Maya 2017 - MtoA 3.1.0/Arnold 5.2.0
* Maya 2018 - MtoA 4.0.0/Arnold 6.0.0, MtoA 4.2.0/Arnold 6.2.0
* Maya 2019 - MtoA 4.0.0/Arnold 6.0.0, MtoA 4.2.0/Arnold 6.2.0, MtoA 5.0.0/Arnold 7.0.0
* Maya 2020 - MtoA 4.0.0/Arnold 6.0.0, MtoA 4.2.0/Arnold 6.2.0, MtoA 5.0.0/Arnold 7.0.0
* Maya 2022 - MtoA 4.2.1/Arnold 6.2.0, MtoA 5.0.0/Arnold 7.0.0
* Updated install directory on Windows and MacOS
* Binaries on MacOS/Windows are now signed using Adobe certificates
* Channel toggles are now hidden when the author of the sbsar is either Allegorithmic or Adobe, instead of just Allegorithmic
* Added new worfklow UI, with added functionality for duplicating, overwriting, renaming and deleting workflows

Added the following new scripting commands:

substancemaya

substanceGetEnableRenderingExtensions

substanceSetEnableRenderingExtensions

substanceworkflow.py

substanceWorkflowIsReadOnly

substanceWorkflowRenameWorkflow

substanceWorkflowDuplicateWorkflow

substanceWorkflowOverwriteWorkflow

substanceWorkflowRemoveWorkflow

Bug Fixes:

* Fix error when opening the Settings dialog
* Workflow functions no longer fail when a pyc was generated

This version is released for Maya 2017, 2018, 2019, 2020 and 2022 on Linux, MacOS and Windows, and Maya LT 2018, 2019 and 2020 on MacOS and Windows
