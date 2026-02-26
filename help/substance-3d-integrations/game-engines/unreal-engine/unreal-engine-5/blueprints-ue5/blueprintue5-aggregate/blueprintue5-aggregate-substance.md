---
helpx_url: "https://helpx.adobe.com/substance-3d-integrations/game-engines/unreal-engine/unreal-engine-5/blueprints-ue5/blueprintue5-aggregate-substance.html"
breadcrumb-title: ""
description: Combine multiple Substance materials at runtime in Unreal Engine 5 using Blueprint aggregate nodes for advanced workflows.
helpx_creative_field: ""
helpx_description: Ecosystems and Plugins > Game Engines > Unreal Engine > Unreal Engine 5 > Blueprints - UE5 > Blueprint(UE5) Aggregate Substance
helpx_experience_level: ""
helpx_learn_topic: ""
helpx_tags: ""
title: Blueprint(UE5) Aggregate Substance
user-guide-description: ""
user-guide-title: ""
---



# Blueprint(UE5): Aggregate Substance

1. Use the “Create Aggregate Substance Factory” node and set the Output and Input Factory. The Output factory should have a texture map that would be used as an Input Image in the Input factory parameters.
1. Make SubstanceConnection objects for each output texture being used as an input with the names of the corresponding values (the output name from the output graph and the input parameter name from the input graph)
1. Add a Create Graph Instance node and plug the result of the “Create Aggregate Substance Factory” node into the Factory input along with a parent material to act as a template (this can be one of the default\_substance materials included with the plugin).
1. Create a Substance Graph Instance variable and store the result of the previous node.
1. Optional: Set any desired substance parameters (this example is setting a new resolution for the graph outputs).
1. Create an Async or Sync rendering node and connect the Instances to Render to the Substance Graph Instance Variable.
1. Use the “Get Dynamic Material Instance” function from the graph instance to create or get an existing material instance. Leaving Name and In Parent Material empty will use the parameters used when generating the instance in step 3.
1. Add a Set Material Node and set the value of the MID variable as the Material Input. For the target, set it to the object you want to apply the material.
