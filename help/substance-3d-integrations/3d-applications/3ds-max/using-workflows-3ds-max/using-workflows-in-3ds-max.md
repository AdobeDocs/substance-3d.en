---
helpx_url: "https://helpx.adobe.com/substance-3d-integrations/3d-applications/3ds-max/using-workflows-in-3ds-max.html"
breadcrumb-title: ""
description: Use render workflows in 3ds Max to automatically create shader networks for different renderers from Substance materials.
helpx_creative_field: ""
helpx_description: Ecosystems and Plugins > 3D Applications > 3ds Max > Using Workflows in 3ds Max
helpx_experience_level: ""
helpx_learn_topic: ""
helpx_tags: ""
title: Using Workflows in 3ds Max
user-guide-description: ""
user-guide-title: ""
---

# Using Workflows in 3ds Max

The Substance in 3ds Max plugin contains workflows for automatically creating a shader network to support renderers. The render workflows can be found in the Substance menu.

![](../../../assets/maya-max-v3-1/3dsmax-all-presets.png)

To use a workflow, select the Substance node in the material editor and then choose the workflow from the Substance menu.

![](../../../assets/max-workflow.gif)

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
