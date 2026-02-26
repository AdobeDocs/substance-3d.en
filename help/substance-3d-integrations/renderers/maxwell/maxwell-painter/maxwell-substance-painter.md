---
helpx_url: "https://helpx.adobe.com/substance-3d-integrations/renderers/maxwell/maxwell-substance-painter.html"
breadcrumb-title: ""
description: Export Substance Painter textures for Maxwell renderer using proper output templates and material settings.
helpx_creative_field: ""
helpx_description: Ecosystems and Plugins > Renderers > Maxwell > Maxwell - Substance Painter
helpx_experience_level: ""
helpx_learn_topic: ""
helpx_tags: ""
title: Maxwell - Substance Painter
user-guide-description: ""
user-guide-title: ""
---



# Maxwell - Substance Painter

Substance Painter 2020.1 (6.1.0) supports Maxwell [Output Templates](https://helpx.adobe.com/substance-3d-painter/getting-started/export.html) for metallic/roughness and specular/glossiness. You can simply export using the Maxwell Output Template**.   
Maxwell 5.1.0** has an integration with Substance Painter that allows you to easily import textures and automatically setup a Maxwell material.

## Exporting textures

You can choose the Maxwell (Metallic Roughness) or Maxwell (Specular Glossiness) Output Templates to export textures for rendering in Maxwell.

![](../../../assets/maxwell-output.png){width="500px"}

## Applying Textures in Maxwell

You can use the Substance Painter integration in Maxwell to automatically create a material with the exported maps from Substance Painter applied.   
To begin, right-click in the Material List and choose **New&gt;Substance Painter**.

![](https://helpx-prod.scene7.com/is/image/HelpxProd/maxwell-painter?$png$&amp;jpegSize=100&amp;wid=413)

Browse to the location you exported the Substance Painter textures and select one of the maps such as base color. When you click open, the integration will create a new Maxwell material with the maps assigned.   
If you have multiple texture sets exported from Substance Painter, the integration will use the naming convention for the texture to assign matching texture maps.

![](https://helpx-prod.scene7.com/is/image/HelpxProd/image-material?$png$&amp;jpegSize=100&amp;wid=620){width="600px"}

You can then assign the material to the asset in your scene.

![](../../../assets/assigned.png){width="500px"}

All materials applied using the Substance Painter integration.

![](https://helpx-prod.scene7.com/is/image/HelpxProd/materials-assigned?$pjpeg$&amp;jpegSize=300&amp;wid=1511){width="800px"}
