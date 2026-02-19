---
title: "Sharing sbsar Files Between Projects"
description: "Share Substance SBSAR files between Unity projects while preserving parameter adjustments using preset files."
helpx_description: "Ecosystems and Plugins > Game Engines > Unity >Sharing sbsar Files Between Projects"
helpx_url: "https://helpx.adobe.com/substance-3d-integrations/game-engines/unity/sharing-sbsar-files-between-projects.html"
---

# Sharing sbsar Files Between Projects

It is possible to share .sbsar files between projects and computers while keeping the same parameter adjustments with the use of .sbsprs files.

After the material in the original project has been modified to the settings that will be shared, navigate to the preset settings in the inspector panel. In the preset settings, create a new preset and name it. This new named preset will appear in the list of presets for this material. Once that is done, export the preset to save it locally.

When using the .sbsar in another project or computer, include the exported preset file as well. Once the sbsar has been imported into the Unity project, navigate to the preset settings and chose the import option. Select the preset file from the previous step and import it. A preset with the settings from the previous project should be added to the preset list.

Repeat for all materials being shared.
