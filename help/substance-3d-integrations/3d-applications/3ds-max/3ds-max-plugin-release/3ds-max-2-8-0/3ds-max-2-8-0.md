---
title: "3ds Max 2.8.0"
helpx_description: "Substance 3D Integrations"
---

# 3ds Max 2.8.0

<b>Added/Updated:
</b>

* Support for conditional visibility of parameters ('visible if'); parameters will now be hidden when conditions are not met, with their respective groups remaining visible.
* Upgraded the Corona Renderer to version 10 in the 3ds Max plugin, enhancing rendering capabilities and
* The latest update significantly improves rendering speed and CPU utilization in 3ds Max 2024 when using Substance, aligning its performance more closely with the efficiency observed in 3ds Max 2022.

<b>Fixed:</b>

* Enhanced the Substance plugin to restrict keyboard input values within the practical range for each parameter, preventing issues with slider control and manual value adjustments.
* Resolved an issue where copying Substance2 texture conversions (.sbsar) within the Slate Material Editor led to unintended instancing of the copied node, potentially causing crashes related to d3d11.dll
* Resolved a crash issue in 3ds Max when rendering customized/edited copied material substances (.sbsar) with Corona Interactive
* Fixed an issue in 3ds Max's Substance2 Node where sliders for Integer 3 and 4 values were unresponsive and only manual numeric entry updated the values. Additionally, these values were incorrectly displayed in float format. Sliders are now functional and accurately reflect the intended value types.
* Addressed an issue in 3ds Max 2021 with Corona Render where Substance materials appeared correctly in the viewport but rendered as gray when files were transferred to another PC. Users no longer need to set up materials from scratch or load presets for proper rendering.
* Resolved a crash issue in the 3ds Max plugin when attempting to duplicate Substance nodes in the Slate Material Editor.
* Resolved an issue where the CPU Cores Limit setting in the Substance plugin was not being saved after restarting 3ds Max, ensuring user-configured values now persist across sessions.

This version is released for 3ds Max 2021, 2022, and 2023
