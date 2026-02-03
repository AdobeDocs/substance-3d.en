---
title: "Substance 3D for Unity Scripting"
description: ""
helpx_description: "Ecosystems and Plugins > Game Engines > Unity > Substance 3D for Unity Scripting"
---

# Substance 3D for Unity Scripting

This section of the documentation contains details on the Substance 3D API that we provide via the Substance 3D plugin for Unity. Using the Substance APIs, you can write scripts to update and change Substance parameters at runtime.

## API Overview

The plugin is divided into 3 different assemblies.

* Adobe.Substance
* Adobe.Substance.Editor
* Adobe.Substance.Runtime

### Adobe.Substance

Contains shared components for interacting with the Substance SDK and generating matching Unity objects. It also has marshaling data structures for communicating between C# and the Substance SDK C++ API.

#### Adobe.Substance.Editor

Contains editor-specific classes for handling the display of information about the Unity Substance objects as well as handling the import pipeline for when sbsar files are added to the project. The SubstanceEditorEngine class is a singleton that handles the lifetime of the substance engine and all its managed instances.

#### Adobe.Substance.Runtime

This class has components that will handle the creation and management of Substance objects during runtime execution. The SubstanceRuntime is the equivalent of the SubstanceEditorEngine class for runtime. It will handle the initialization of the substance engine as well as the instantiation of any substance instance that user scripts will interact with.

## Runtime usage

In order for the Substance Instance inputs to be modified at runtime, it is required to add a SubstanceRuntime←- Material to your scene (idealy to the same GameObject as you substance material). This class acts as a helper to set up the material using Adobe.Substance.Runtime.SubstanceRuntime singleton that manages the instantiation of Substance SDK objects at runtime.

## Code examples

The following example shows how to change input parameters at runtime using the SubstanceRuntimeGraph.

### Changing Parameters

```

using System.Collections; 

using System.Collections.Generic; 

using UnityEngine; 

using Adobe.Substance.Runtime; 

public class scifiScript: MonoBehaviour { 

  public Adobe.Substance.Runtime.SubstanceRuntimeGraph mySubstance; 

  // Use this for initialization 

  void Start() { 

    UpdateSubstance(); 

  } 

  public void UpdateSubstance() { 

    // panel color 

    mySubstance.SetInputColor("paint_color", new Color(0.237 f, 0.834 f, 0.045 f, 1.0 f)); 

    // panel size 

    mySubstance.SetInputVector2("square_open", new Vector2(0.101 f, 0.209 f)); 

    // wear level 

    mySubstance.SetInputFloat("wear_level", 0.977 f); 

    // Submit async render. 

    mySubstance.RenderAsync(); 

  } 

}
```


You can also use the SubstanceRuntimeGraph to have access to input and output information about your Substance Material.

#### Get Input Information

```

using System.Collections; 

using System.Collections.Generic; 

using UnityEngine; 

using Adobe.Substance.Runtime; 

public class scifiScript: MonoBehaviour { 

  public Adobe.Substance.Runtime.SubstanceRuntimeGraph mySubstance; 

  // Use this for initialization 

  void Start() { 

    UpdateSubstance(); 

  } 

  public void UpdateSubstance() { 

    SubstanceInputDescription desc = mySubstance.GetInputDescription("paint_color"); 

    Debug.Log($ "Input: {desc.Identifier}"); 

    Debug.Log($ "Index: {desc.Index}"); 

    Debug.Log($ "Type: {desc.Type}"); 

    Debug.Log($ "Label: {desc.Label}"); 

  } 

}
```


The following example shows how to create a custom preset menu in the editor with the SubstanceEditorTools.

##### Creating preset controls.

```

using System.Collections; 

using System.Collections.Generic; 

using UnityEngine; 

using Adobe.Substance.Runtime; 

public class scifiScript: MonoBehaviour { 

  public Adobe.Substance.Runtime.SubstanceRuntimeGraph mySubstance; 

  // Use this for initialization 

  void Start() { 

    UpdateSubstance(); 

  } 

  public void UpdateSubstance() { 

    SubstanceInputDescription desc = mySubstance.GetInputDescription("paint_color"); 

    Debug.Log($ "Input: {desc.Identifier}"); 

    Debug.Log($ "Index: {desc.Index}"); 

    Debug.Log($ "Type: {desc.Type}"); 

    Debug.Log($ "Label: {desc.Label}"); 

  } 

}
```
