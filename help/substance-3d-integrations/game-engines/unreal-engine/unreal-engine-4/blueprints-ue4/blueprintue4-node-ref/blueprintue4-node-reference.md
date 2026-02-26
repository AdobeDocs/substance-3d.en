---
helpx_url: "https://helpx.adobe.com/substance-3d-integrations/game-engines/unreal-engine/unreal-engine-4/blueprints-ue4/blueprintue4-node-reference.html"
breadcrumb-title: ""
description: Reference guide for all Substance Blueprint nodes available in Unreal Engine 4 for material operations.
helpx_creative_field: ""
helpx_description: Ecosystems and Plugins > Game Engines > Unreal Engine > Unreal Engine 4 > Blueprints - UE4 > Blueprint(UE4) Node Reference
helpx_experience_level: ""
helpx_learn_topic: ""
helpx_tags: ""
title: Blueprint(UE4) Node Reference
user-guide-description: ""
user-guide-title: ""
---



# Blueprint(UE4): Node Reference

## General Substance Nodes:

| Name | Inputs | Description |
| --- | --- | --- |
| **GetSubstances** | Material | Returns an array of Substance Graph Instances used by a material. If you create a material that uses texture outputs from two different graph instance, this function will return those two graph instances. |
| **GetSubstanceTextures** | **SubstanceGraphInstance** | Returns an array of all enabled and currently computed textures from the Substance Graph Instance input parameter. |
| **GetGraphName** | **SubstanceGraphInstance** | Returns the graph name as set in Designer. |
| **GetFactoryName** | **SubstanceGraphInstance** | Returns the name of the **GraphInstanceFactory** that was used to create the **SubstanceGraphInstance** that is passed into this node. |
| **GetSubstanceLoadingProgress** | NONE | Returns a float between 0 and 1 with the percentage of how many substances have been fully loaded. |
| **CreateGraphInstance** | Input: **SubstanceInstanceFactory** - The factory which you want to create a graph instance from.Input: **GraphIndex** (int) - The index of the graph you want to create. Input: **InstanceName** (FString) - The name you want your new Instance to have. | Returns a new standalone graph instance that will persist until your application closes. |
| **DuplicateGraphInstance** | **SubstanceGraphInstance** - The graph instance you would like to create a copy of. | Returns a new standalone graph instance that will persist until your application closes. |
| **EnableInstanceOutputs** | Input: **SubstanceGraphInstance** - The graph instance containing the output to enable Input: **OutputIndices** (int32 Array) - The indices of the outputs you want to enable. (Subject to change) | If previously disabled, creates the texture output(s) of passed in **SubstanceGraphInstance**. This has the same functionality as enabling an output from the **SubstanceGraphInstance** Editor. *NOTE: This will not update your material with the newly created texture. This needs to be handled by setting a sampler parameter at runtime using the new output.* |
| **DisableInstanceOutputs** | Input: **SubstanceGraphInstance** - The graph instance you want to apply values to.Input: **SubstanceGraphInstance** - The graph instance you want to get the values from. | Restores all of the changed input values of the Substance Graph Instance input parameter. |
| **SetGraphInstanceOutputSize** | Input: **SubstanceGraphInstance**Input: Width - Texture Resolution of the X coordinateInput: Height - Texture Resolution of the Y coordinate | Sets texture resolution of all of the outputs generated from this graph instance with the sizes passed in from the parameters. Note - Max 2048 on CPU EngineNote - Max 4096 on GPU Engine |
| **AsyncRendering** | **SubstanceGraphInstance** | Recomputes output textures of the Substance Graph Instance input. (Non blocking) |
| **SyncRendering** | **SubstanceGraphInstance** | Recomputes output textures of the Substance Graph Instance input. (Blocking) |

## Graph Instance Specific Functions:

Can only be called from a graph instance

| Name | Input | Description |
| --- | --- | --- |
| **GetInputNames** | NONE | Returns an array of Strings containing all of the input parameter names. |
| **GetInputType** | NONE | Returns the data type associated with this input. |
| **SetInputInt** | Input: **Identifier** (String)Input: **InputValues** (int array) | Change the value of an input found by the Identifier. From within a game, must render substance using **AyncRender** or **SyncRender** for changes to be applied. |
| **SetInputFloat** | Input: **Identifier** (String)Input: **InputValues** (float array) | Change the value of an input found by the Identifier. From within a game, must render substance using **AyncRender** or **SyncRender** for changes to be applied. |
| **GetInputInt** | Input: **Identifier** (String) | Returns an array of ints with the current values of an input parameter. |
| **GetInputFloat** | Identifier (String) | Returns an array of floats with the current values of an input parameter. |
| **SetInputBool** | Input: **Bool** (Boolean)Input: **Identifier** (String) | Takes in a boolean value to assign a togglable input value type. Previously, this was only achievable by setting an int value of either a 1 or a 0 casted to a bool. |
| **GetInputBool** | Input: **Identifier** (String) | Returns the current boolean value of an input. |
| **SetIputColor** | Input: **Color** (LinearColor)Input: **Identifier** (FString) | Takes in a FLinearColor value to assign a color input value type to. Previously, this was only achievable by setting a float value and passing in an array of floats. |
| **GetInputColor** | Input: Identifier (FString) | Returns the current color value in UE4 format. |
| **CreateAggregateSubstanceFactory** | Input: **Output Factory** (SubstanceInstanceFactory)*The factory creating the outputs that will be used as input to the Input factory.*Input: **Output Factory Graph Index** (Integer)*Which graph within the substance you would like to use to combine.* Input: **Input Factory** (SubstanceInputFactory)*The factory using the outputs as input images from the Output Factory.*Input: **Connections** (Array of SubstanceConnections)*This can be created using the blueprint node Make Array. A substance connection is how you can the aggregate node which inputs to link to which outputs.* **Return (SubstanceInstanceFactory)***Can be used to create a graph instance of the new combined instance.* | The new aggregate substance node allows you to take two substance instance factories and create a new instance factory at runtime, which can be used to create a new graph instance. What makes this special is that you can connect output textures from one of the combined graph instances to input images of the other combined graph instance. To create a substance graph instance from this new factory, see our documentation on runtime graph instances. |
| **SubstanceConnectionStruct** | Input: **Output Identifier** (FString)*The identifier of the texture output to chain into an input.* Input: **Input Identifier** (FString) | Used by Create Aggregate Substance Factory to specify how to chain each output texture with new input textures. |
