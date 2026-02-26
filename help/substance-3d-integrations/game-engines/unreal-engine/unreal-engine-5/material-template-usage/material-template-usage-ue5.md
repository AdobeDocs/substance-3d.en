---
helpx_url: "https://helpx.adobe.com/substance-3d-integrations/game-engines/unreal-engine/unreal-engine-5/material-template-usage-ue5.html"
breadcrumb-title: ""
description: Create and use material templates in Unreal Engine 5 to define how Substance output nodes connect to material inputs.
helpx_creative_field: ""
helpx_description: Ecosystems and Plugins > Game Engines > Unreal Engine > Unreal Engine 5 > Material Template Usage - UE5
helpx_experience_level: ""
helpx_learn_topic: ""
helpx_tags: ""
title: Material Template Usage - UE5
user-guide-description: ""
user-guide-title: ""
---



# Material Template Usage - UE5

Material Templates allow the user to create a base material for substances to use as a template for connecting their output nodes to inputs in the material.   
 Outputs sharing the same name and type as a material input will automatically be used. This Parent Material example has a “baseColor” texture sample node that will get filled in if the Substance has a texture output also named “baseColor”.   
  ![](../../../../assets/parent-material-sample.png)

Substance outputs support updating textures, single float, or int scalar values, and vector (2-4) values. To use float or int outputs at runtime you must get the dynamicMaterialInstance from the graph as constantMaterialInstances (any materials generated in editor) cannot change scalar values at runtime.

![](https://helpx-prod.scene7.com/is/image/HelpxProd/scalar-value?$png$&amp;jpegSize=100&amp;wid=245)

The substance graph instance will attempt to fill in all relevant output values at the time of creation.

![](https://helpx-prod.scene7.com/is/image/HelpxProd/screen-shot-2022-04-01-at-4-38-31-pm?$png$&amp;jpegSize=200&amp;wid=1076)
