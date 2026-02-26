---
helpx_url: "https://helpx.adobe.com/substance-3d-integrations/3d-applications/maya/working-with-outputs.html"
breadcrumb-title: ""
description: Enable and disable Substance material outputs in Maya to control which textures are computed and used.
helpx_creative_field: ""
helpx_description: Ecosystems and Plugins > 3D Applications > Maya > Working with Outputs
helpx_experience_level: ""
helpx_learn_topic: ""
helpx_tags: ""
title: Working with Outputs
user-guide-description: ""
user-guide-title: ""
---

# Working with Outputs

You can enable/disable outputs manually in the Outputs section.

![](../../../assets/outputs-1.png){width="800px"}

A closed circle indicates that the output has been created. In the image above, you can see that the Base Color has been created. Because Cache Outputs to Disk was enabled, a Substance Output was created as well as a Maya file node. The file node reads in the cached texture on disk and is automatically updated whenever the Substance Engine processes the textures. Click on the closed circle again to disable the output and remove the nodes.

![](../../../assets/enabled-3.png)

Click the eyeglass icon to select the Substance output or the file node. If the file node has been created, it will be selected when clicking the eyeglass icon. If a file node is not present, the Substance output will be selected. This allows you to quickly navigate to an output or file node. *\*Tip: Hit the F key to frame the selected node in the node editor. This is handy when you have many outputs and need to find a specific file node.*
