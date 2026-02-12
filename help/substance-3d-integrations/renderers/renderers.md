---
title: "Renderers"
description: ""
helpx_description: "Ecosystems and Plugins > Renderers"
helpx_url: "https://helpx.adobe.com/substance-3d-integrations/renderers.html"
---

# Renderers

Substance materials provided in [Substance Source](https://source.substance3d.com/) contain outputs for Physically-based shaders and support both the [Metallic/Roughness (default workflow) and Specular/Glossiness workflows](https://academy.substance3d.com/courses/pbrguides). It's important to understand the the workflow your renderer material supports. Depending on the renderer, you may be able to use Substance material outputs directly or you may need to convert the output textures. Custom Substance materials or materials you download from Substance Share may not contain the appropriate outputs needed for a given renderer.

![](outputs-2.png){width="200px"}

For example with Arnold or Vray Next, you can use metallic/roughness outputs directly. However, with Renderman's pxrSurface, the basecolor/metallic outputs need to be converted to diffuse and specular face color. A Substance integration plugin will handle these conversions automatically if the renderer is supported.

With Substance Painter, you can choose an [Output Template](https://helpx.adobe.com/substance-3d-painter/getting-started/export/export-window.html) that will create the appropriate map types needed for a given renderer. If you renderer is not supported by default, you can also create custom Output Templates.  
  
**Substance Painter Output Template**

![](output-template.png){width="500px"}

## Renderer Guides

* [Converting Substance outputs](converting-outputs/converting-substance-outputs.md)
* [Color Management](color-management/color-management.md)
* [Arnold](arnold/arnold.md)
* [Vray](vray/vray.md)
* [Renderman](renderman/renderman.md)
* [Redshift](redshift/redshift.md)
* [Maxwell](maxwell/maxwell.md)
* [Corona](corona/corona.md)
* [Octane](octane/octane.md)
* [Keyshot](keyshot/keyshot.md)
* [Thea](thea/thea.md)
* [Maverick](maverick/maverick.md)
* [Toolbag](toolbag/toolbag.md)
* [Cycles and Eevee](cycles-and-eevee/cycles-and-eevee.md)
