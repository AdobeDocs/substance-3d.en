---
helpx_url: "https://helpx.adobe.com/substance-3d-integrations/3d-applications/3ds-max/substance-in-3ds-max-overview.html"
breadcrumb-title: ""
description: Learn about the Substance plugin for 3ds Max and how to import and use Substance materials in your projects.
helpx_creative_field: ""
helpx_description: Ecosystems and Plugins > 3D Applications > 3ds Max > Substance in 3ds Max Overview
helpx_experience_level: ""
helpx_learn_topic: ""
helpx_tags: ""
title: Substance in 3ds Max Overview
user-guide-description: ""
user-guide-title: ""
---

# Substance in 3ds Max Overview

## Plugin Overview

## Opening a Substance

1. Open the Slate editor, search for Substance and drag the Substance2 node to the view.
1. Double click the Substance node to activate the properties and under Substance Package Browser, load a Substance.

   >[!NOTE]
   >
   > You can also drag and drop the .sbsar file into the Slate Editor to automatically create the node and import the sbar.

1. If a Substance contains multiple graphs, you can choose the graph you want to output as a material in the Selected Graph drop down menu.

   ![](../../../assets/max1.png)

1. With the Substance node selected, go to the Substance menu and choose a supported renderer. The material will be created and ready to be applied to the object. Substance textures are hooked into the rendering material.

>[!NOTE]
>
> Once the **« Substance2 »** node is selected, you need to click first on the **Load Substance...** to select a sbsar file, and then select a supported renderer from the top menu (e.g. "Substance to Arnold").
>
>Supported Renderers include Arnold, V-Ray, Corona and Octane. [Learn about workflows in 3DS Max to find out how to use OpenPBR materials.](../using-workflows-3ds-max/using-workflows-in-3ds-max.md)

   ![](../../../assets/max3.png)

## Changing Resolution

1. Set the desired resolution for the computed Substance textures in the Substance Output Settings.
1. For resolution up to 8K, make sure you are using the GPU engine, which is set in the [Substance Settings](../../../3d-applications/3ds-max/settings-1/substance-settings.md).

   ![](../../../assets/max6.png)

## Changing Parameters

1. Double click on the Substance node to load the Substance parameters in the parameter window.
1. Change the parameters to update the Substance textures automatically.

   ![](https://helpx-prod.scene7.com/is/image/HelpxProd/max4?$png$&amp;jpegSize=200&amp;wid=1276){width="500px"}

## Setting Output Preview

You can set a specific channel for the thumbnail for the Substance node.

1. In the Output Preview drop down, choose the channel you want to use for the node thumbnail.

   ![](../../../assets/max7.png)

## Tiling Substances

You can use the Coordinates properties to tile Substance textures and set Map Channels.

![](../../../assets/max10.png)

## OpenPBR Workflows

Two OpenPBR workflows are available in the **Workflows list** from the **Substance menu**: **Substance to OpenPBR** and **Substance to V-Ray OpenPBR**. These workflows are designed for use with SBSAR files authored using the OpenPBR material model in Substance 3D Designer or Sampler (OpenPBR has been the default model since Designer V16.0+ and Sampler V6.0+).

![](../../../assets/maya-max-v3-1/3ds-max-openpbr-node-preview.png)

### What is OpenPBR?

OpenPBR is an open, physically-based material shading model developed by Adobe and Autodesk and contributed to the Academy Software Foundation (ASWF). It provides a unified material definition compatible across renderers. For more information, visit the [OpenPBR documentation](https://experienceleague.adobe.com/en/docs/substance-3d/general-knowledge/openpbr/openpbr-overview).

### When to use an OpenPBR workflow

Use an OpenPBR workflow when your SBSAR file was authored using the OpenPBR material model in Substance 3D Designer or Substance 3D Sampler. If your SBSAR was authored using Adobe standard material model (ASM), use the legacy workflow compatible with your renderer (Arnold, V-Ray or V-Ray 6).

>[!NOTE]
>
> If you apply an OpenPBR workflow to an ASM material, or a standard workflow to an OpenPBR SBSAR, the plug-in will only connect outputs that are common to both material models. The result may be incomplete.

### Available OpenPBR workflows

**OpenPBR**

Uses the native 3ds Max openPBRSurface node. Compatible with Arnold and V-Ray. This is the recommended workflow for most users working with OpenPBR materials in 3ds Max.

**OpenPBR - V-Ray**

Uses the V-Ray material (VRayMtl) in OpenPBR mode. Recommended for users whose pipeline is specifically built around V-Ray material setups.

### How to apply an OpenPBR workflow

![](../../../assets/maya-max-v3-1/3dsmax-substance-to-openpbr.png)

1. Select your SBSAR file (OpenPBR) using the Load Substance button.
1. On the top menu, select OpenPBR or OpenPBR - V-Ray.
1. Click Create Network to create the shader network in the Slate Material Editor.
1. The plug-in automatically connects the SBSAR outputs to the corresponding inputs of the OpenPBR node.
1. Assign the material to your mesh as usual.

![](../../../assets/maya-max-v3-1/3ds-max-openpbr-overview.png)
