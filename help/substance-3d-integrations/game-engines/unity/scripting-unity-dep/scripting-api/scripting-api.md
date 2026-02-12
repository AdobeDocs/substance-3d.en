---
title: "Scripting API"
description: ""
helpx_description: "Ecosystems and Plugins > Game Engines > Unity > Scripting in Unity (Deprecated) > Scripting API"
helpx_url: "https://helpx.adobe.com/substance-3d-integrations/game-engines/unity/scripting-in-unity-deprecated/scripting-api.html"
---

# Scripting API

## Substance in Unity API - 2.2.0

## Substance material parameters

| Public Method | Description | Parameter |
| --- | --- | --- |
| public **float** *GetInputFloat*(**string** inputName) | Get Substance **Float** Input | **String** *inputName* Name of the input in the SBSAR |
| public **int** *SetInputFloat*(**string** inputName, **float** value) | Update Substance **Float** Input | **String** i*nputName* Name of the input in the SBSAR  **Float** *value* Value used to update parameter |
| public **void** *SetInputVector2*(**string** inputName, **Vector2** value) | Update Substance **Vector2** Input | **String** *inputName* Name of the input in the SBSAR **Vector2** *input* Values used to update parameter |
| public **vector2** *GetInputVector2*(**string** inputName) | Get Substance **Vector2** Input | **String** "inputName" Name of the input in the SBSAR |
| public **void** *SetInputVector3*(**string** inputName, **Vector3** value) | Update Substance **Vector3** Input | **String** *inputName* Name of the input in the SBSAR **Vector3** *value* Values used to update parameter |
| public **vector3** *GetInputVector3*(**string** inputName) | Get Substance **Vector3** Input | **String** *inputName* Name of the input in the SBSAR |
| public **void** *SetInputVector4*(**string** inputName, **Vector4** value) | Update Substance **Vector4** Input | **String** *inputName* Name of the input in the SBSAR **Vector4** *value* Values used to update parameter |
| public **vector4** *GetInputVector4*(**string** inputName) | Get Substance **Vector4** Input | **String** inputName Name of the input in the SBSAR |
| public **void** *SetInputColor*(**string** inputName, **Color** value) | Update Substance **Color** Input | **String** inputName Name of the input in the SBSAR **Color** Value used to update the parameter |
| public **color** *GetInputColor*(**string** inputName, **int** dataType) | Get Substance **Color** | **String** *inputName* Name of the input in the SBSAR **Int** *dataType* |
| public **void** *SetInputBool*(**string** inputName, **bool** value) | Update Substance **Boolean** Input | **String** *inputName* Name of the input in the SBSAR **Bool** *value* Value used to update the parameter |
| public **bool** *GetInputBool*(**string** inputName) | Get Substance **Boolean** Input | **String** *inputName* Name of the input in the SBSAR |
| public **void** *SetInputInt*(**string** inputName, **int** value) | Update Substance **Int** Input | **String** *inputName* Name of the input in the SBSAR **Int** *value* Value used to update the parameter |
| public **int** *GetInputInt*(**string** inputName) | Get Substance **Int** Input | **String** *inputName* Name of the input in the SBSAR |
| public **void** *SetInputVector2Int*(**string** inputName, **int** x, **int** y) | Update Substance **Vector2Int** Input | **String** *inputName* Name of the input in the SBSAR **Int** *x* Value used to update the parameter **Int** y Value used to update the parameter |
| **int&#91;&#93; Substance.Game.SubstanceGraph**.*GetInputVector2Int*( string inputName) | Get array of 2 int (Vector2Int’s x &amp; y values) | **String** *inputName* Name of the input in the SBSAR **Int** *x* Value used to update the parameter **Int** y Value used to update the parameter |
| **void Substance.Game.SubstanceGraph**.*SetInputVector3Int*( string inputName, int x, int y, int z) | Update Substance Vector3Int Input | **String** *inputName* Name of the input in the SBSAR **Int** *x* Value used to update the parameter **Int** y Value used to update the parameter **Int** z Value used to update the parameter |
| **int&#91;&#93; Substance.Game.SubstanceGraph**.*GetInputVector3Int*( string inputName) | Get array of 3 int (Vector3Int’s x, y &amp; z values) | **String** *inputName* Name of the input in the SBSAR **Int** *x* Value used to update the parameter **Int** y Value used to update the parameter **Int** z Value used to update the parameter |
| **void Substance.Game.SubstanceGraph**.*SetInputVector4Int*( string inputName, int x, int y, int z, int w) | Update Substance Vector4Int Input | **String** *inputName* Name of the input in the SBSAR **Int** *x* Value used to update the parameter **Int** y Value used to update the parameter **Int** z Value used to update the parameter **Int** w Value used to update the parameter |
| **int&#91;&#93; Substance.Game.SubstanceGraph**.*GetInputVector4Int*( string inputName) | Get array of 4 int (Vector4Int’s x, y, z &amp; w values) | **String** *inputName* Name of the input in the SBSAR **Int** *x* Value used to update the parameter **Int** y Value used to update the parameter **Int** z Value used to update the parameter **Int** w Value used to update the parameter |
| **void Substance.Game.SubstanceGraph**.*SetInputString*( string inputName, string value) | Update Substance string Input | **String** *inputName* Name of the input in the SBSAR **String** *value* used to update the parameter |
| **string Substance.Game.SubstanceGraph**.*GetInputString*( string inputName) | Get Substance string input | **String** *inputName* Name of the input in the SBSAR |
| **void Substance.Game.SubstanceGraph**.*SetInputTexture*( string inputName, Texture2D value) | Update Substance Texture2D Input | **String** *inputName* Name of the input in the SBSAR **Texture2D** *value* used to update the parameter |
| **Texture2D Substance.Game.SubstanceGraph**.*GetInputTexture*( string inputName) | Get Substance Texture2D Input | **String** *inputName* Name of the input in the SBSAR |
| **VectorInt Substance.Game.SubstanceGraph**.*GetTexturesResolution*() | Get the graph’s Target Settings textures resolution (Vector4Int’s x = width, y = height, values can be 32, 64, 128, 256, 512, 1024, 2048 &amp; 4096) | None |
| **int Substance.Game.SubstanceGraph**.*SetTexturesResolution*( Vector2Int size) | Set the graph’s Target Settings textures resolution (Vector2Int’s x = width, y = height, values can be 32, 64, 128, 256, 512, 1024, 2048 &amp; 4096) Returns 0 if success, otherwise: -1. | **Vector2Int** *size* used to update the parameter**.** |
| **List Substance.Game.SubstanceGraph**.*GetGeneratedTextures*() | Returns all Substance Texture2D objects used by the graph’s material shader. | None |
| **int Substance.Game.SubstanceGraph**.*Bake*( Texture2D texture, string absolutePath) | Generate .png files for all Substance Texture2D objects used by the graph’s material shader. | None |
| ****Substance.Game.**SubstanceGraph**.*Duplicate*() | Duplicate a Substance Graph | None |
| **Substance.Game.SubstanceGraph**.*Duplicate*(string newGraphName) | Duplicate a Substance Graph and give it a name (the corresponding material will also have the same name) | **String newGraphName** |
| ****Substance.Game.**SubstanceGraph**.*GetInputProperties*() | Query procedural input information, returns an array of 'InputProperties', with:public struct InputProperties { public string name; // inputName public string label; // widget’s label in GUI public string group; // widget’s group in GUIpublic string&#91;&#93; componentLabels; // for sliders (up to 4 labels) public string&#91;&#93; enumOptions; // for optionMenupublic InputPropertiesType type;public Vector4 maximum; // for sliders public Vector4 minimum; // for sliders public float step; // for sliders }public enum InputPropertiesType { Boolean = 0,// 0 Float, // 1 Vector2, // 2 Vector3, // 3 Vector4, // 4 Color, // 5 Enum, // 6 Texture, // 7 String, // 8 Invalid = -1// -1 }; | None |
| **bool** **Substance.Game.SubstanceGraph**.*HasInput*(**string** inputName) | Check if an input exists in a graph, returns true/false: | **String** *inputName* Name of the input in the SBSAR |
| **bool** **Substance.Game.SubstanceGraph**.*IsInputVisible*(**string** inputName) | Check if a visibleif input is visible, returns true/false | **String** *inputName* Name of the input in the SBSAR |

## Rendering

| Public Method | Description | Parameter |
| --- | --- | --- |
| public **void** *QueueForRender*() | Add Substance graph to queue | None |
| ***mySubstance.**RenderAsync()* | Render all queued Substance graphs asynchronously | None |
| ***mySubstance.**RenderSync()* | Render all queued Substance graphs synchronously | None |

## Scripting in Editor mode:

In order to make graph modifications permanent in Editor mode, a re-import of each corresponding Substance must be performed. This is done with the following function:

```

static void ReImportSubstance(Substance.Game.Substance pSubstance)

{



// Re-import Substance object:

SubstanceImporter importer = AssetImporter.GetAtPath(pSubstance.assetPath) as SubstanceImporter;

importer.CommitSubstanceToImporter(pSubstance); // plugin function

EditorUtility.SetDirty(importer);

importer.SaveAndReimport();



}
```


(with ‘CommitSubstanceToImporter’, a Substance plugin function: copy all modified graph parameters and/or inputs to the Substance importer object, which is then serialized to disk via Unity’s importer mechanism)
