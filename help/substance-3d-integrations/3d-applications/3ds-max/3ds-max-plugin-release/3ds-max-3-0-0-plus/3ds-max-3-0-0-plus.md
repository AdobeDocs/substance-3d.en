---
helpx_url: "https://helpx.adobe.com/substance-3d-integrations/3d-applications/3ds-max/3ds-max-plugin-release-notes/3ds-max-3-0-0-plus.html"
breadcrumb-title: ""
description: Review release notes for 3ds Max plugin version 3.0.0 and later to learn about new features, improvements, and bug fixes.
helpx_creative_field: ""
helpx_description: Ecosystems and Plugins > 3D Applications > 3ds Max > 3ds Max Plugin Release Notes > 3ds Max 3.0.0
helpx_experience_level: ""
helpx_learn_topic: ""
helpx_tags: ""
title: 3Ds Max 3.0.0
user-guide-description: ""
user-guide-title: ""
---

# 3ds Max 3.0.0+

## 3ds Max 3.0.4

<b>Added/Updated:</b>

* Updated Substance plugin icons with the latest icons.
* Added support for sending and receiving presets using Connector in the plugin.
* Integrated Menu Manager from the notification parameter to replace the use of the Core Interface.

<b>Fixed:</b>

* Resolved issue where Substance 2 materials might fail to render in IR/Production with Corona when the Slate Material Editor is open and the Substance2 texture map is selected.
* Resolved issue where Sampler Connector updates were creating new Substance2 nodes instead of updating existing ones.
* Resolved crash issue in the 3ds Max plugin when adding a Substance2 node and ensured that using Batch Import to load .sbsar files no longer opens the script editor.
* Resolved issue where the 3DSMax 2025 plugin failed to load due to an incompatible .dll file when using the .msi installer.

## 3ds Max 3.0.2

<b>Added/Updated:</b>

* Standardized icon management in the Substance plugin by incorporating all existing icons into qrc and rcc files, aligning with Autodesk's preferred methods and ensuring consistent loading in the SBSAR graph panel.
* Enhanced the responsiveness of the Substance Settings window in the plugin to ensure that input fields and their descriptions fit properly when adjusting the window size.
* The Substance plugin is now compatible with Corona 11.

<b>Fixed:</b>

* Resolved an issue where Sheen color and Sheen roughness did not automatically connect in V-Ray materials. Now, both properties will automatically link when creating a workflow in V-Ray and Arnold.
* Fixed a UI issue in the plugin where adjusting the CPU Cores Limit setting would incorrectly display two-digit values if the saved value was a single digit.
* Fixed a rendering error in the console for 3ds Max plugin v3.0.0 related to the Substance Compatibility feature. Now, substance nodes created using the Substance Batch Import menu render as expected.
