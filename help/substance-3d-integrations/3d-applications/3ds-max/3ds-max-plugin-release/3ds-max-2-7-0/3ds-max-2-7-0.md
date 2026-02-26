---
helpx_url: "https://helpx.adobe.com/substance-3d-integrations/3d-applications/3ds-max/3ds-max-plugin-release-notes/3ds-max-2-7-0.html"
breadcrumb-title: ""
description: Review release notes for 3ds Max plugin version 2.7.0 to learn about new features, improvements, and bug fixes.
helpx_creative_field: ""
helpx_description: Substance 3D Integrations
helpx_experience_level: ""
helpx_learn_topic: ""
helpx_tags: ""
title: 3ds Max 2.7.0
user-guide-description: ""
user-guide-title: ""
---

# 3ds Max 2.7.0

<b>Added/Updated:</b>

* Upgraded the Substance engine to version 9 in 3ds Max plugin, enhancing performance and compatibility.

<b>Fixed:</b>

* Fixed a crash issue in 3ds Max versions 2019, 2022, 2023, and 2024, where dragging a Substance 2 node into the Slate Material Editor caused the program to crash. The Substance 2 Node can now be safely dragged and dropped into the Slate Material Editor.
* Resolved a problem in the Substance plugin for 3ds Max, where selecting 'Substance to Arnold' and other workflows did not create relevant nodes in the Material Slate Editor, but erroneously opened a Maxscript with a compile error. Nodes for workflows like Arnold are now correctly generated and connected automatically.
* Addressed a issue where exporting starting assets/presets (.sbsar - Substance2 texture map) from Substance 3D Sampler and converting them to Corona Renderer (versions 6 to 9hf1) within 3ds Max resulted in corrupted materials, rendering with black base color and broken bump normals. Additionally, this update resolves the inaccessibility of the Substance properties tab in the materials, a problem that also affected conversions to Vray.
* Fixed an issue in 3ds Max plugin where plugging or unplugging inputs from Substance2 textures to Corona Material was causing crashes
* Addressed the compatibility issue in 3ds Max 2024 where Python scripts embedded or called within a MaxScript file were not allowed by default
* Fixed an issue in 3Ds Max plugin where importing and running the Substance to Corona plugin resulted in materials appearing black and shiny in shader previews and renders. This issue has now been successfully addressed, ensuring correct display and rendering of Substance maps with the Corona renderer.

This version is released for 3ds Max 2021, 2022, and 2023
