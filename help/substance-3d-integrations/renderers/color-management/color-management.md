---
helpx_url: "https://helpx.adobe.com/substance-3d-integrations/renderers/color-management.html"
breadcrumb-title: ""
description: Understand color management and gamma correction when using Substance materials with different renderers.
helpx_creative_field: ""
helpx_description: Ecosystems and Plugins > Renderers > Color Management
helpx_experience_level: ""
helpx_learn_topic: ""
helpx_tags: ""
title: Color Management
user-guide-description: ""
user-guide-title: ""
---


# Color Management

We will take a simplistic approach in stating that linear space rendering provides the correct math for lighting calculations. It creates an environment that allows light interactions to be represented in a credible real-world manner. For a discussion on linear space rendering, we must introduce the concept of gamma correction. When encoding images for display and storage purposes, gamma correction is the optimization process of reducing bandwidth and bit allocation. This process leverages the human eye’s perception of brightness, which approximately follows the cube root of luminance.

>[!NOTE]
>
> Linear space rendering is a highly complex subject. For more information, please take a look at the free [PBR GUIDE VOLUME ONE](https://academy.substance3d.com/courses/the-pbr-guide-part-1) on [Substance Academy](https://academy.substance3d.com/).

## Color Management

The purpose of this document is to detail the process of working with textures exported from **Substance Painter** and **Substance Designer** in [3D software](https://www.adobe.com/products/substance3d/3d-augmented-reality.html) and renderers.

The correct way to interpret an image used as an input to a material channel depends on how the image is used in the scene. The color space, encoding and whether the color values are proportional to **scene-referred luminance** or **display-referred luminance** also plays an important role.

* Images used to represent **non-color data** should not be transformed. These are typically, **normal**, **roughness**, **metallic**, **displacement** and **ambient** **occlusion** maps.
* Images that represent color that we see can have multiple scenarios. For example, images that are already **scene-linear** typically do not need to be converted such as **high-dynamic range** images stored in formats like **OpenEXR** and **HDR**.
* Images that were created for display (**display-referred**) will need to have their gamma removed. These include most formats such as **PNG**, **JPEG** and **BMP**. These images are **base** **color**, **diffuse**, **specular** and **emissive**.

While this is an over simplification, it can be helpful to think of the process as follows:

* "scene-referred (ex. linear)" : Don't apply a conversion
* "display-referred (ex. sRGB)" : Apply the inverse transform to "linearize" the image for proper calculation

>[!NOTE]
>
> The sRGB decoding function (EOTF) converting from gamma space to linear space is used in Substance Painter and Substance Designer, and is defined by the IEC 61966-2-1:1999 Standard

Substance Designer can be configured to use [OpenColorIO](https://opencolorio.org/) for Color Management. This allows you to have *consistent* color transforms and image display across multiple applications. In this mode, Substance Designer will work internally with **linear RGB** colors. Since 8-bit depth is usually not enough to represent linear colors, it is recommended to use *at least* **16-bit** depth for color textures in the [graph](https://docs.substance3d.com/display/SDDOC/Graph+View).

![](https://helpx-prod.scene7.com/is/image/HelpxProd/sd-cm?$png$&amp;jpegSize=200&amp;wid=686)

When we introduced [ACES](https://www.oscars.org/science-technology/sci-tech-projects/aces), we now have two different color spaces, the linear sRGB (the no gamma version of sRGB) and [ACEScg](https://acescolorspace.com/), which is a wide-gamut ("scene-referred" or linear) color space better suited for CG rendering.

*Gamut plot graphic - <https://acescolorspace.com/>*  
  
Substance Designer also supports **Adobe Color Engine (ACE)**. With **ACE**, you can choose your working color space between **sRGB**, **linear sRGB** and **ACEScg**. When using **sRGB**, **ACE** is pretty much the same as legacy mode. When using a linear color space, **ACE** is more or less like [OpenColorIO](https://opencolorio.org/index.html).

## Substance plugins

When using Substance materials via the Substance Integration plugin, outputs are flagged for linear/gamma automatically via the integration and the host application’s color management. However, it’s important to understand the process: when Substance maps are used as exported bitmaps rather than Substance materials, you may need to manually flag the textures as **gamma-encoded** or **raw** depending on the renderer you are using. Usually 8 or 16 bit .png, .jpg, .tga or .tif files are gamma-encoded while **sRGB OETF** and .exr files are linear.

## 3D Applications

### Working with Textures

* [Substance textures in Maya](../../renderers/color-management/textures-in-maya/substance-textures-in-maya.md)
* [Substance textures in 3ds Max](../../renderers/color-management/textures-in-3ds-max/substance-textures-in-3ds-max.md)
