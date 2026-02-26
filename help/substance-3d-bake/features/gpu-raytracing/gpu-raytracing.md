---
helpx_url: "https://helpx.adobe.com/substance-3d-bake/features/gpu-raytracing.html"
breadcrumb-title: ""
description: Enable hardware-accelerated GPU raytracing to speed up baking computations by 25x or more for faster workflows.
helpx_creative_field: ""
helpx_description: bakers > Features > GPU Raytracing
helpx_experience_level: ""
helpx_learn_topic: ""
helpx_tags: ""
title: GPU Raytracing
user-guide-description: ""
user-guide-title: ""
---


# GPU Raytracing

<table>
<tr style="border: 0;">
<td style="border: 0;" valign="top">

Some bakers support hardware acceleration of raytracing on the GPU, which usually increases computation speed by a factor of 25 or more.

## Hardware requirements

Ray tracing will automatically be enabled if the system follows these requirements:

* A compatible GPU is installed\* (RTX series, Titan V or GeForce 10xx)
* GPU drivers are up to date
* Windows 10 'Fall Creator' / October update (ver 1809) or higher is installed\*\*

</td>
<td style="border: 0;" valign="top">

![GPU raytracing on/off comparison](../../assets/rtx-ao-demo.gif "GPU raytracing on/off comparison"){zoomable="yes"}

</td>
</tr>
</table>

\*: Compatible NVIDIA GPUs include all GPU using the Pascal architecture or more recent. I.e., the GTX 10 series, Titan V series, RTX 20 series, or more recent.

\*\*: To check your Windows version, click on the Start menu, type 'winver' and press Enter.  
You can get the update through the [dedicated page](https://support.microsoft.com/en-us/help/4028685/windows-10-get-the-update) on the Microsoft support website.

>[!TIP]
>
> In case you run into issues, GPU raytracing can be disabled in the application preferences.

## Supported bakers

The tables below lists GPU raytracing support for every baker, according to the Substance 3D bakers version:

+++Version 3 and higher

| Baker | Supports GPU raytracing |
| --- | --- |
| Ambient occlusion | <div><img alt="(tick)" data-preserve-html="true" src="check.svg"/></div> |
| Bent normal | <div><img alt="(tick)" data-preserve-html="true" src="check.svg"/></div> |
| Color | <div><img alt="(tick)" data-preserve-html="true" src="check.svg"/></div> |
| Curvature | <div><img alt="(tick)" data-preserve-html="true" src="check.svg"/></div> |
| Height | <div><img alt="(tick)" data-preserve-html="true" src="check.svg"/></div> |
| Normal | <div><img alt="(tick)" data-preserve-html="true" src="check.svg"/></div> |
| Normal world space | <div><img alt="(error)" data-preserve-html="true" src="error.svg"/></div> |



| Baker | Supports GPU raytracing |
| --- | --- |
| Opacity mask | <div><img alt="(tick)" data-preserve-html="true" src="check.svg"/></div> |
| Position | <div><img alt="(tick)" data-preserve-html="true" src="check.svg"/></div> |
| Position low | <div><img alt="(error)" data-preserve-html="true" src="error.svg"/></div> |
| Thickness | <div><img alt="(tick)" data-preserve-html="true" src="check.svg"/></div> |
| Transferred texture | <div><img alt="(tick)" data-preserve-html="true" src="check.svg"/></div> |
| World to tangent | <div><img alt="(error)" data-preserve-html="true" src="error.svg"/></div> |


+++

+++Version 2

| Baker | Supports GPU raytracing |
| --- | --- |
| Ambient occlusion | <div><img alt="(error)" data-preserve-html="true" src="error.svg"/></div> |
| Ambient occlusion from mesh | <div><img alt="(tick)" data-preserve-html="true" src="check.svg"/></div> \* |
| Bent normals from mesh | <div><img alt="(tick)" data-preserve-html="true" src="check.svg"/></div> \* |
| Color from mesh | <div><img alt="(error)" data-preserve-html="true" src="error.svg"/></div> \* |
| Convert UV to SVG | <div><img alt="(error)" data-preserve-html="true" src="error.svg"/></div> |
| Curvature from mesh | <div><img alt="(tick)" data-preserve-html="true" src="check.svg"/></div> \* |
| Height from mesh | <div><img alt="(error)" data-preserve-html="true" src="error.svg"/></div> \* |
| Normal from mesh | <div><img alt="(error)" data-preserve-html="true" src="error.svg"/></div> \* |



| Baker | Supports GPU raytracing |
| --- | --- |
| Opacity mask from mesh | <div><img alt="(error)" data-preserve-html="true" src="error.svg"/></div> \* |
| Position from mesh | <div><img alt="(error)" data-preserve-html="true" src="error.svg"/></div> \* |
| Position | <div><img alt="(error)" data-preserve-html="true" src="error.svg"/></div> |
| Thickness from mesh | <div><img alt="(tick)" data-preserve-html="true" src="check.svg"/></div> \* |
| Transferred texture from mesh | <div><img alt="(error)" data-preserve-html="true" src="error.svg"/></div> \* |
| World space direction | <div><img alt="(error)" data-preserve-html="true" src="error.svg"/></div> |
| World space normals | <div><img alt="(error)" data-preserve-html="true" src="error.svg"/></div> |


\*: Supports CPU raytracing, which is significantly slower than GPU raytracing.

+++
