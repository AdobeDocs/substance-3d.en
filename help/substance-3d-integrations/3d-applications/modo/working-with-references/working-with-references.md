---
title: "Working with References"
description: ""
helpx_description: "Ecosystems and Plugins > 3D Applications > MODO > Working with References"
helpx_url: "https://helpx.adobe.com/substance-3d-integrations/3d-applications/modo/working-with-references.html"
---

# Working with References

## Working with References

Substance materials can be used with referenced scenes. However, if you need to disable an output for a Substance in a referenced scene, you will need to manually remove the outputs. Simply unchecking the output on the Substance properties will not remove outputs for referenced Substances when using MODO's default referencing preferences.   
To allow the referenced Substance material to delete its own generated outputsTo manually remove the outputs, you must first change the Reference Overrides for the scene. Go to Item&gt;References&gt;Edit Reference Overrides and set Deletions to "If allowed by item." This will allow you to manually remove Substance outputs   
from the shader tree and clip browser for any scene that is opened or created after this change has been made.

Please refer to the MODO documentation for more information on Reference Overrides.  
<http://modo.docs.thefoundry.co.uk/modo/801/help/pages/modointerface/ImportReference.html>
