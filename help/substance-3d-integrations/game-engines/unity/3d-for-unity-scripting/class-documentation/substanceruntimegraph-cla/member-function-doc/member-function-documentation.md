---
title: "Member Function Documentation"
description: "Detailed documentation for all member functions of the SubstanceRuntimeGraph class in Unity scripting."
helpx_description: "Ecosystems and Plugins > Game Engines > Unity > Substance 3D for Unity Scripting > Class Documentation > SubstanceRuntimeGraph Class > Member Function Documentation"
helpx_url: "https://helpx.adobe.com/substance-3d-integrations/game-engines/unity/substance-3d-for-unity-scripting/class-documentation/substanceruntimegraph-class/member-function-documentation.html"
---

# Member Function Documentation

## AttachGraph()

```

void Adobe.Substance.Runtime.SubstanceRuntimeGraph.AttachGraph  

( SubstanceGraphSO graph ) [inline]
```


Attaches a new graph object to this runtime handler.

**Parameters**

|  |  |
| --- | --- |
| graph | Target substance graph. |

### CreatePresetFromCurrentState()

```

string Adobe.Substance.Runtime.SubstanceRuntimeGraph.CreatePresetFromCurrentState ( ) [inline]
```


Saves the current graph state into a preset XML.

**Returns**

Preset created using the current state of the graph inputs.

### GetGeneratedTextures()

```

List< Texture2D > Adobe.Substance.Runtime.SubstanceRuntimeGraph.GetGeneratedTextures ( ) [inline]
```


Returns a list with all output textures for the substance instance.

**Returns**

Output texture.

### GetInputBool()

```

bool Adobe.Substance.Runtime.SubstanceRuntimeGraph.GetInputBool ( string inputName ) [inline]
```


Get Substance Boolean Input.

**Parameters**

|  |  |
| --- | --- |
| inputName | Name of the input in the SBSAR. |


**Returns**

Current input value.

### GetInputColor()

```

Color Adobe.Substance.Runtime.SubstanceRuntimeGraph.GetInputColor ( string inputName ) [inline]
```


Get Substance Color

**Parameters**

|  |  |
| --- | --- |
| inputName | Name of the input in the SBSAR |


**Returns**

Current input value.

### GetInputDescription()

```

SubstanceInputDescription Adobe.Substance.Runtime.SubstanceRuntimeGraph.GetInputDescription ( string inputName ) [inline]
```


Returns the complete input description for the target input name.

**Parameters**

|  |  |
| --- | --- |
| inputName | Target input name. |


**Returns**

Complete input description for the target input.

### GetInputFloat()

```

float Adobe.Substance.Runtime.SubstanceRuntimeGraph.GetInputFloat ( string inputName ) [inline]
```


Get Substance Float Input

**Parameters**

|  |  |
| --- | --- |
| inputName | Name of the input in the SBSAR |


**Returns**

Current input value.

### GetInputInt()

```

int Adobe.Substance.Runtime.SubstanceRuntimeGraph.GetInputInt ( string inputName ) [inline]
```


Get Substance Int Input

**Parameters**

|  |  |
| --- | --- |
| inputName | Name of the input in the SBSAR |


**Returns**

Current input value.

### GetInputString()

```

string Adobe.Substance.Runtime.SubstanceRuntimeGraph.GetInputString ( string inputName ) [inline]
```


Get Substance string input.

**Parameters**

|  |  |
| --- | --- |
| inputName | Name of the input in the SBSAR |


**Returns**

Input current value.

### GetInputVector2()

```

Vector2 Adobe.Substance.Runtime.SubstanceRuntimeGraph.GetInputVector2 ( string inputName ) [inline]
```


Get Substance Vector2 Input

**Parameters**

|  |  |
| --- | --- |
| inputName | Name of the input in the SBSAR |


**Returns**

Current input value.

### GetInputVector2Int()

```

Vector2Int Adobe.Substance.Runtime.SubstanceRuntimeGraph.GetInputVector2Int ( string inputName ) [inline]
```


Get array of 2 int.

**Parameters**

|  |  |
| --- | --- |
| inputName | Name of the input in the SBSAR |


**Returns**

Current input value.

### GetInputVector3()

```

Vector3 Adobe.Substance.Runtime.SubstanceRuntimeGraph.GetInputVector3 ( string inputName ) [inline]
```


Get Substance Vector3 Input.

**Parameters**

|  |  |
| --- | --- |
| inputName | Name of the input in the SBSAR |


**Returns**

Current input value.

### GetInputVector3Int()

```

Vector3Int Adobe.Substance.Runtime.SubstanceRuntimeGraph.GetInputVector3Int ( string inputName ) [inline]
```


Get array of 3 int (Vector3Int’s x, y &amp; z values)

**Parameters**

|  |  |
| --- | --- |
| inputName | Name of the input in the SBSAR |


**Returns**

Current input value.

### GetInputVector4()

```

Vector4 Adobe.Substance.Runtime.SubstanceRuntimeGraph.GetInputVector4 ( string inputName ) [inline]
```


Get Substance Vector4 Input

**Parameters**

|  |  |
| --- | --- |
| inputName | Name of the input in the SBSAR |


**Returns**

Current input value.

### GetInputVector4Int()

```

int[] Adobe.Substance.Runtime.SubstanceRuntimeGraph.GetInputVector4Int ( string inputName ) [inline]
```


Get array of 4 int (Vector4Int’s x, y, z &amp; w values)

**Parameters**

|  |  |
| --- | --- |
| inputName | Name of the input in the SBSAR |


**Returns**

Current input value.

### GetOutputTexture()

```

Texture2D Adobe.Substance.Runtime.SubstanceRuntimeGraph.GetOutputTexture ( string outputName ) [inline]
```


Returns the output texture for a given output name.

**Parameters**

|  |  |
| --- | --- |
| outputName | Output name. |


**Returns**

Output texture.

### GetTexturesResolution()

```

Vector2Int Adobe.Substance.Runtime.SubstanceRuntimeGraph.GetTexturesResolution ( ) [inline]
```


Returns instance texture output resolution.

**Returns**

Current output resolution.

### HasInput()

```

bool Adobe.Substance.Runtime.SubstanceRuntimeGraph.HasInput ( string inputName ) [inline]
```


Returns true if this substance instance has an input with a given name.

**Parameters**

|  |  |
| --- | --- |
| inputName | Input name. |


**Returns**

TRUE if the substance instance has input with the given name.

### LoadPreset()

```

void Adobe.Substance.Runtime.SubstanceRuntimeGraph.LoadPreset ( string presetXML ) [inline]
```


Uses a preset XML to set graph input parameters.

**Parameters**

|  |  |
| --- | --- |
| presetXML | Preset XML data. |

### RenderAsync()

```

Task Adobe.Substance.Runtime.SubstanceRuntimeGraph.RenderAsync ( ) [inline]
```


Renders the substance instance asynchronously.

**Returns**

Task that will finish once render is done.

### SetInputBool()

```

void Adobe.Substance.Runtime.SubstanceRuntimeGraph.SetInputBool ( string inputName, 

bool value ) [inline]
```


Update Substance Boolean Input

**Parameters**

|  |  |
| --- | --- |
| inputName | Name of the input in the SBSAR |
| value | Value used to update parameter |

### SetInputColor()

```

void Adobe.Substance.Runtime.SubstanceRuntimeGraph.SetInputColor ( string inputName, 

Color value ) [inline]
```


Update Substance Color Input

**Parameters**

|  |  |
| --- | --- |
| inputName | Name of the input in the SBSAR |
| value | Value used to update parameter |

### SetInputFloat()

```

void Adobe.Substance.Runtime.SubstanceRuntimeGraph.SetInputFloat ( string inputName, 

float value ) [inline]
```


Update Substance Float Input

**Parameters**

|  |  |
| --- | --- |
| inputName | Name of the input in the SBSAR |
| value | Value used to update parameter |

### SetInputInt()

```

void Adobe.Substance.Runtime.SubstanceRuntimeGraph.SetInputInt ( string inputName, 

int value ) [inline]
```


Update Substance Int Input

**Parameters**

|  |  |
| --- | --- |
| inputName | Name of the input in the SBSAR |
| value | Value used to update parameter |

### SetInputString()

```

void Adobe.Substance.Runtime.SubstanceRuntimeGraph.SetInputString ( string inputName, 

string value ) [inline]
```


Update Substance string Input.

**Parameters**

|  |  |
| --- | --- |
| inputName | Name of the input in the SBSAR |
| value | Value used to update parameter |

### SetInputTexture()

```

void Adobe.Substance.Runtime.SubstanceRuntimeGraph.SetInputTexture (string inputName, 

Texture2D value ) [inline]
```


Update Substance Texture2D Input.

**Parameters**

|  |  |
| --- | --- |
| inputName | Name of the input in the SBSAR |
| value | Value used to update parameter |

### SetInputVector2()

```

void Adobe.Substance.Runtime.SubstanceRuntimeGraph.SetInputVector2 ( string inputName, 

Vector2 value ) [inline]
```


Update Substance Vector2 Input

**Parameters**

|  |  |
| --- | --- |
| inputName | Name of the input in the SBSAR |
| value | Value used to update parameter |

### SetInputVector2Int()

```

void Adobe.Substance.Runtime.SubstanceRuntimeGraph.SetInputVector2Int ( string inputName, 

Vector2Int value ) [inline]
```


Update Substance Vector2Int Input.

**Parameters**

|  |  |
| --- | --- |
| inputName | Name of the input in the SBSAR |
| value | Value used to update parameter |

### SetInputVector3()

```

void Adobe.Substance.Runtime.SubstanceRuntimeGraph.SetInputVector3 ( string inputName, 

Vector3 value ) [inline]
```


Update Substance Vector3 Input

**Parameters**

|  |  |
| --- | --- |
| inputName | Name of the input in the SBSAR |
| value | Value used to update parameter |

### SetInputVector3Int()

```

void Adobe.Substance.Runtime.SubstanceRuntimeGraph.SetInputVector3Int ( string inputName, 

Vector3Int value ) [inline]
```


Update Substance Vector3Int Input.

**Parameters**

|  |  |
| --- | --- |
| inputName | Name of the input in the SBSAR |
| value | Value used to update parameter |

### SetInputVector4()

```

void Adobe.Substance.Runtime.SubstanceRuntimeGraph.SetInputVector4 ( string inputName, 

Vector4 value ) [inline]
```


Update Substance Vector4 Input

**Parameters**

|  |  |
| --- | --- |
| inputName | Name of the input in the SBSAR |
| value | Value used to update parameter |

### SetInputVector4Int()

```

void Adobe.Substance.Runtime.SubstanceRuntimeGraph.SetInputVector4Int ( string inputName, 

int x, 

int y, 

int z, 

int w ) [inline]
```


Update Substance Vector4Int Input

**Parameters**

|  |  |
| --- | --- |
| inputName | Name of the input in the SBSAR |
| x | Value used to update the parameter |
| y | Value used to update the parameter |
| z | Value used to update the parameter |
| w | Value used to update the parameter |

### SetTexturesResolution()

```

void Adobe.Substance.Runtime.SubstanceRuntimeGraph.SetTexturesResolution ( Vector2Int size ) [inline]
```


Sets instance texture output resolution.

**Parameters**

|  |  |
| --- | --- |
| size |  |
