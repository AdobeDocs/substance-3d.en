---
helpx_url: "https://helpx.adobe.com/substance-3d-bake/common-questions/what-is-the-difference-between-the-opengl-and-directx-normal-format.html"
breadcrumb-title: ""
description: Learn the differences between OpenGL and DirectX normal map formats and when to use each one.
helpx_creative_field: ""
helpx_description: "bakers > Common Questions > What is the difference between the OpenGL and DirectX normal format "
helpx_experience_level: ""
helpx_learn_topic: ""
helpx_tags: ""
title: "What is the difference between the OpenGL and DirectX normal format "
user-guide-description: ""
user-guide-title: ""
---



# What is the difference between the OpenGL and DirectX normal format ?

>[!WARNING]
>
> **Question**
> 
> What is the difference between the OpenGL and DirectX normal format ?

>[!NOTE]
>
> **Explanation**
> 
> OpenGL and DirectX are two graphic APIs (sets of functions) that programmers use in their application to dialog with the GPU (Graphic Processing Unit). In terms of normal maps, the difference result in how the green channel of a RGB texture should be interpreted. OpenGL expects the first pixel to be at the bottom while DirectX expects it to be at the top. This is often why in various technical discussion it is recommended to try to invert the green channel of a normal map to see if it behave better as it reverses the pixel values (first becomes last). OpenGL can be referred as **Y+** (bottom-up) while DirectX is referred as **Y-** (top-down).
> 
> To know which format to use, refer to the target application in which your textures will be used.
