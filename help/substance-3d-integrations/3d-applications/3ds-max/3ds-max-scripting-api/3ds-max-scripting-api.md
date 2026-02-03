---
title: "3ds MAX Scripting API"
description: ""
helpx_description: "Ecosystems and Plugins > 3D Applications > 3ds Max > 3ds MAX Scripting API"
---

# 3ds MAX Scripting API

Below is the list of commands and properties for the Substance 2 node.

## Properties:

| Property | Description | Type |
| --- | --- | --- |
| name | Name of the Substance2 Node. Default is “Substance2” | String |

## Commands:

| Command | Description | Return | Return Type: | Parameter |
| --- | --- | --- | --- | --- |
| getCurrentPackageName | Get the base file name of the loaded package (sbsar file loaded in the graph node) | The file name (without the prefixing directory) of the loaded package (sbsar file) | String |  |
| getCurrentGraphName | Get the name of the current graph | identifier of the current graph instance | String |  |
| getOutputsNamesFromCurrentGraph | Get the list of output usage names for enabled outputs | Table containing list of channel names for enabled outputs | List |  |
| getPresetIdentifiers | Get the list of presets from the Substance graph | Table containing the list of string identifiers for all presets | List |  |
| setPackageAndGraphNames | Load a sbsar file from disk into the graph node | True on success, False on failure | Boolean | ***String parameter***: **substancePackageFilePath** The path to the sbsar file on disk***String parameter***: **graphInstanceNameToSelect** The string identifier of the graph |
| setInputInt | Set an integer input with a new value |  |  | ***Integer parameter***: **value** Integer value to set the input to***String parameter***: **inputIdentifier** The unique string identifier of the input |
| setInputFloat | Set a float input with a new value |  |  | ***Float parameter***: **value** Float value to set the input to***String parameter***: **inputIdentifier** The unique string identifier of the input |
| setInputString | Set a string input with a new value |  |  | ***String parameter***: **value** String value to set the input to***String parameter***: **inputIdentifier** The unique string identifier of the input |
| setInputBool | Set a boolean input with a new value |  |  | ***Boolean parameter:* value** Boolean value to set the input to***String parameter***: **inputIdentifier** The unique string identifier of the input |
| setInputVec2 | Set a vector input with two elements |  |  | ***Point2 parameter:*****value** Max point2 value to set the input to***String parameter***: **inputIdentifier** The unique string identifier of the input |
| setInputVec3 | Set a vector input with three elements |  |  | ***Point3 parameter:* value** Max point3 value to set the input to***String parameter***: **inputIdentifier** The unique string identifier of the input |
| setInputVec4 | Set a vector input with four elements |  |  | ***Point4 parameter***: **value** Max point4 value to set the input to***String parameter:* inputIdentifier** The unique string identifier of the input |
| setInputColor | Set a color input with a new value |  |  | ***Color parameter***: **value** Max color value to set the input to***String parameter:* inputIdentifier** The unique string identifier of the input |
| setInputComboSelection | Set the currently selected value in a combo box input |  |  | ***Integer parameter***: **value** Index of the combo box widget***String parameter***: **inputIdentifier** The unique string identifier of the input |
| getInputInt | Get the input value for an integer input type | The current integer value of the input | Integer | ***String parameter:* inputIdentifier** The unique string identifier of the input |
| getInputFloat | Get the input value for a float input type | The current float value of the input | Float | ***String parameter:* inputIdentifier** The unique string identifier of the input |
| getInputString | Get the input value for a string input type | The current string value of the input | String | ***String parameter:* inputIdentifier** The unique string identifier of the input |
| getInputBool | Get the input value for a boolean input type | The current boolean value of the input | Boolean | ***String parameter:* inputIdentifier** The unique string identifier of the input |
| getInputVec2 | Get the input value for a point2 input type | The current max point2 value of the input | Point2 | ***String parameter:* inputIdentifier** The unique string identifier of the input |
| getInputVec3 | Get the input value for a point3 input type | The current max point3 value of the input | Point3 | ***String parameter:* inputIdentifier** The unique string identifier of the input |
| getInputVec4 | Get the input value for a point4 input type | The current max point4 value of the input | Point4 | ***String parameter:* inputIdentifier** The unique string identifier of the input |
| getInputColor | Get the input value for a color input type | The current value of the input as a color | Color | ***String parameter:* inputIdentifier** The unique string identifier of the input |
| getInputComboSelection | Get the index of the combobox selection based on identifier | The index of the selected combobox item | Integer | ***String parameter:* inputIdentifier** The unique string identifier of the input |
| getMaterialDependentCount | Get the number of material dependencies | The number of dependent references that are of a material type | Integer |  |
| ApplyValuesToSelectedPreset | Overrides the currently selected preset with the current input values |  |  |  |
| RemoveAllPresets | Remove all of the presets in the current graph node |  |  |  |
| CreatePreset | Create a new preset from the current inputs |  |  | ***String parameter:* newPresetName** Display name for the new preset |
| RemoveOnePreset | Remove the preset with the given name |  |  | ***String parameter:* selectedPresetName** Name of the preset to remove |
| ImportPreset | Import the sbsprs file into the current presets |  |  | ***String parameter:*****filePath** String containing the file path to import the preset from |
| ExportPreset**\*deprecated** To remove in 2.5.0\* | Export the currently selected preset to an sbsprs file |  |  | ***String parameter***: **filePath** String containing the file path to export the preset to |
| exportPresetList | Export the given presets to a single preset file |  |  | ***String parameter***: **filePath** String containing the file path to export the presets to***List parameter***: **presets** List containing the names of the presets to export |
| BakeOutputsOfSelectedGraph | Bake the bitmaps of the selected graph instance to disk |  |  | ***String parameter:* filePath** The root path directory to write the images to***String parameter***: **imageFormatExtension** The file extension/format to write the images as |
