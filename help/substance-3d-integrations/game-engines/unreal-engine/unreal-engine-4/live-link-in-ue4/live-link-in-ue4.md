---
title: "Live Link in UE4"
description: ""
helpx_description: "Ecosystems and Plugins > Game Engines > Unreal Engine > Unreal Engine 4 > Live Link in UE4"
---

# Live Link in UE4

>[!WARNING]
>
> Live Link in Unreal Engine is no longer supported. Users with an older version of the plugin where Live Link is used will still be able to use the feature.

>[!WARNING]
>
> Live Link doesn't work with UE4 BSP meshes. The asset you send needs to be a model file imported into your UE4 project

## Establishing link to Substance Painter

1. Open Substance Painter
1. Right-click the asset you want to send to Painter in the Content Browser and choose "Send to Painter."

   ![](link1-22.png){width="400px"}
1. The mesh will appear in Substance Painter and you can begin texturing. As you work, textures will be sent to UE4 and applied to the materials. The green dot on the UE4 icon in the toolbar indicates that the link is live and sending textures.

   ![](icon-12.png)

   1. You can pause the streaming of data in the Configure options for the plugin. Go to Plugins&gt;dcc-live-link and choose Configure. Disable the Enable Streaming to pause data from being sent to UE4.

      ![](https://helpx-prod.scene7.com/is/image/HelpxProd/config-6?$png$&amp;jpegSize=100&amp;wid=393)
1. Textures from Painter will appear in the Content Browser and will be applied to the material in UE4.

   ![](link3-11.png){width="500px"}
1. A Substance Painter project (.spp) will be created in the UE4 project folder in a folder labeled ".sp"

   ![](link4-5.png)

## Reestablishing a link to Substance Painter

You can pick up where you left off after closing Painter or Unity.

1. Open the .spp project in Substance Painter located in your Unity project&gt;assets&gt;.sp folder.
1. Right-click the mesh in the Content Browser and choose "Send to Painter" to reestablish the link.

   ![](link5-3.png){width="600px"}
