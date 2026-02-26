---
helpx_url: "https://helpx.adobe.com/substance-3d-bake/bakers-settings/world-space-direction.html"
breadcrumb-title: ""
description: Compute vector directions in world space and save them into textures for directional effects and masking.
helpx_creative_field: ""
helpx_description: bakers > Bakers Settings > World Space Direction
helpx_experience_level: ""
helpx_learn_topic: ""
helpx_tags: ""
title: World Space Direction
user-guide-description: ""
user-guide-title: ""
---

# World Space Direction

The World Space Direction baker allows to compute a vector direction in world space into a texture.

**Available in :**

* Substance Designer
* Substance Automation Toolkit

## Parameters

| *Parameter* | *Description* |
| --- | --- |
| **Input Direction** | Defines from which input the direction is computed.Possible values:<ul data-preserve-html="true"><li data-preserve-html="true"><strong>From Texture</strong>: the vector direction is defined by an input texture.</li><li data-preserve-html="true"><strong>From Uniform Vector</strong> (default): the vector direction is defined with the X, Y, Z sliders.</li></ul> |
| **Normal Orientation** | Defines if the normal format of the output texture. This inverts the green channel depending on the format.Possible values:<ul data-preserve-html="true"><li data-preserve-html="true"><strong>OpenGL</strong></li><li data-preserve-html="true"><strong>DirectX</strong> (default)</li></ul> |
| **X Y Z** | Sliders to define the 3 components of the direction vector, if **Input Direction** is set to **From Uniform Vector**. |
| **Direction File** | Path to the input texture file to define the direction vector, if **Input Direction** is set to **From Texture**. |
