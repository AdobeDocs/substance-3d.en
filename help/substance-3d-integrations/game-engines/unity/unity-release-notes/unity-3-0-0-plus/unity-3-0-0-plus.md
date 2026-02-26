---
helpx_url: "https://helpx.adobe.com/substance-3d-integrations/game-engines/unity/unity-release-notes/unity-3-0-0-plus.html"
breadcrumb-title: ""
description: Review release notes for Unity plugin version 3.0.0 and later to learn about new features and improvements.
helpx_creative_field: ""
helpx_description: Ecosystems and Plugins > Game Engines > Unity > Unity Release Notes > Unity 3.0.0
helpx_experience_level: ""
helpx_learn_topic: ""
helpx_tags: ""
title: Unity 3.0.0
user-guide-description: ""
user-guide-title: ""
---



# Unity 3.0.0+

## Unity 3.12.0

<b>Added/Updated:</b>

* Support for Substance 3D Connector in Unity, enabling SendTo functionality for sending assets between Substance 3D Sampler and Unity.
* Support for renaming and republishing .sbsar graphs from Designer to Unity, ensuring that changes made in Designer persist when the updated graph is re-imported into the Unity plugin.
* Documentation for sharing .sbsar files between Unity projects.
* Community contribution page to the Unity plugin documentation: https://helpx.adobe.com/substance-3d-integrations/game-engines/unity/community-contributions.html.

<b>Fixed:</b>

* An issue where the material miniature in the Unity Project Assets Folder does not update after republishing a .sbsar file, displaying the previous material instead of the current one.

## Unity 3.11.0

<b>Added/Updated:</b>

* Improved performance for projects with 1000+ Substance graphs, significantly reducing UI response times when inspecting sbsar files in the Assets folder.
* Added a reset button to revert sbsar files to their original state, enhancing workflow efficiency.
* Updated documentation with a workaround for "Image inputs locked to 8-bit" issue, available at: [Substance 3D Integrations in Unity - Upgrading Projects &amp; Known Issues](../../../../game-engines/unity/upgrading-projects-known/upgrading-projects-known-issues.md).
* Updated documentation to address the "Assertion failed on expression" error encountered when navigating panel folders in Unity: [Substance 3D Integrations in Unity - Upgrading Projects &amp; Known Issues](../../../../game-engines/unity/upgrading-projects-known/upgrading-projects-known-issues.md).

<b>Fixed:</b>

* Fixed an issue causing the plugin to break on Linux platforms.
* Fixed compatibility issues with the Unity plugin in version 2023.

## Unity 3.10.1

<b>Fixed:</b>

* Fixed an issue where the Substance Engine failed to load due to a problem with sbsario.dll in the Substance 3D for Unity plugin.

## Unity 3.10.0

<b>Added/Updated:</b>

* Updated the comments section for the RenderInstanceAsync API in the plugin

<b>Fixed:</b>

* Addressed a memory leak issue in the C++ code of the plugin, ensuring complete memory recovery upon disposal of objects.
* Fixed an issue on Linux where importing the Unity plugin package resulted in a 'SubstanceException: An invalid argument was given to the API' error, now allowing for the successful import of SBSAR files.
* Resolved an issue where SubstanceGraphSO.CurrentStatePreset was not functioning correctly for loading presets with a custom editor window script in Unity; a corrective script is now available on our Substance documentation(HelpX) page: https://helpx.adobe.com/substance-3d-integrations/game-engines/unity/substance-3d-for-unity-scripting.html
* Fixed a bug where graph properties were disappearing upon re-selection in the Unity editor.
* Addressed the 'Unknown managed type referenced' issue related to SubstanceGraphSO in the Unity plugin, improving compatibility and functionality on Android platforms, particularly for Unity 2022.1 and potentially across all Unity versions.
* Fixed an issue where the 'NORMAL FORMAT' selection in the TECHNICAL PARAMETERS section was incorrectly displayed as a number input field, instead of the expected dropdown list with DirectX and OpenGL options.

## Unity 3.9.0

<b>Added/Updated:</b>

* Sbsar files can now be dragged and dropped into the project. The .sbsar object can be applied to a mesh as expected in Unity 2022.3.
* Enhanced documentation for the plugin.

<b>Fixed:</b>

* Fixed an issue where the Unity plugin was not functional on Android.
* Addressed naming constraints in the Unity plugin. When a file name contained a ".", the plugin didn't load the file correctly.
* Fixed an issue where unchecking "Generate all outputs" didn't automatically delete the extra texture.
* Fixed the incorrect import of SBSAR materials in Unity 2021.3 standard projects. Now, in the standard template project, SBSAR materials can be imported into the assets folder and applied to a 3D mesh without errors.
* Fixed the incorrect import of SBSAR materials in Unity 2021/2022 HDRP projects. Now, in the HDRP template project, SBSAR materials can be imported into the assets folder and applied to a 3D mesh without errors.
* Fixed a compilation error when generating the Android build to produce the APK: "Compilation failed; see the compiler error output for details."
* Fixed an issue causing the build project process to fail with errors on Windows.
* Fixed an issue causing the build project process to fail with errors on Android: UnityEditor.BuildPlayerWindow+BuildMethodException.
* Addressed the UnityException encountered when changing SubstanceGraph inputs at runtime. Previously, invoking the SubstanceRuntimeGraph.SetTexturesResolution and the SubstanceRuntimeGraph.Render() led the SubstanceGraph to render incorrect results.
* Corrected a typographical error in SubstanceEditorTools.cs.

## Unity 3.8.0

<b>Added/Updated:</b>

* Introduced support for parameters with conditional visibility (Visible If feature).
* Upgraded the Substance engine to version 9.
* Updated documentation to address an issue with NativeGraph.InRenderWork not functioning in a custom editor window script. Further details can be found here: [Substance 3D for Unity Scripting - Class Documentation](../../../../game-engines/unity/3d-for-unity-scripting/class-documentation/substanceruntime-class/substanceruntime-class.md)

<b>Fixed:</b>

* Resolved an issue affecting normal maps in Android projects.
* Addressed a bug where dragging an sbsar object into the scene view inadvertently caused all moused-over objects to have their materials overridden by the sbsar object material.
* Fixed a bug that caused an error when inspecting a material marked as Runtime Only in Runtime mode and opening the Output Texture Mapping.

## Unity 3.7.0

<b>Added/Updated:</b>

* Support for embedded and external presets
* Compatibility with Unity 2022.2

<b>Fixed:</b>

* Error when creating a new graph for an sbsar file using the copy graph button: “Unexpected recursive transfer of scripted class”
* Extra material folder creation on Mac after reopening a project
* SubstanceFileSO array not updating when creating/deleting graph instances
* Incorrect input options display when duplicating a Substance
* Empty label fields in .sbsprs file exports
* Errors during preset export/import in the editor: EndLayoutGroup: BeginLayoutGroup must be called first.

<b>Removed:</b>

* Channels section from Unity Plugin due to lack of user value

## Unity 3.6.0

<b>Added/Updated:</b>

* The ability to make individual Int 4 values independently editable.

<b>Fixed:</b>

* An issue where materials were reverting to a previous state when reopening a project
* An error where the message "No graphs found" was displayed when trying to modify the material graph
* An issue where the input values for the Rotation Offset parameter in the Physical Size feature were not changing
* An issue where duplicated graph instances had incorrect GraphID values for inputs
* An issue where the Substance generator was not initializing properly in the editor while using editor scripts (custom editor window) to change a graph
* An issue where exporting a SubstanceGraphSO.CurrentStatePreset from a custom editor window script exported a cached version of the graph
* An issue where parameter changes didn't save when the inspector window was locked
* An issue where the manual keyboard input in the Position Offset section of the Physical Size options had no effect on the material in Editor mode
* An error that occurred when manually typing parameter values in the SBSAR object

## Unity 3.5.0

<b>Added/Updated:</b>

* Support for users to change how output textures are assigned to the Unity material
* Plugin compatibility with the latest Unity 2022.2 version

<b>Fixed:</b>

* Null reference error when materials have an Int4 input
* Error with Int4 inputs, the W value is assigned to Data2 instead of Data3
* Typo in the function name "\_OcclusionStrength"

## Unity 3.4.0

<b>Added/Updated:</b>

* Position offset controls to translate the texture across the surface in physical size panel
* Links to download Adobe Substance 3D Assets and Substance Community Assets in the project settings

## Unity 3.3.0

<b>Added/Updated:</b>

* The physical size feature for HDRP, which allows materials to be applied and scaled based on their real-world sizes
* UI for GPU enablement in the project settings

<b>Removed:</b>

* graphIDs from most of the API calls

## Unity 3.2.1

<b>Fixed:</b>

* The issue with upgrading the plugin from 3.0.0 and 3.1.0 to the latest version.

## Unity 3.2.0

<b>Added/Updated:</b>

* Performance improvement on script recompilation

<b>Fixed:</b>

* Asset import failed in the Unity plugin when importing custom Sbsar materials
* "ArgumentException: Value does not fall within the expected range" error
* "ArgumentOutOfRangeException: Index was out of range" error

## Unity 3.1.0

<b>Added/Updated:</b>

* 1.38x performance improvement for Mac
* GPU engine on the Mac uses Metal instead of OpenGL

<b>Fixed:</b>

* Mac issue where the R and B channels of the output textures will be flipped

## Unity 3.0.0

<b>Added/Updated:</b>

* Apple Silicon support
* New YouTube tutorial on how to use the plugin
* New scripting documentation

<b>Fixed:</b>

* Bug in the inspector display when hitting the randomize button over and over
* Null texture inputs breaking Substance updates
* “Generate All Outputs”, “Generate Mip Maps” and “Runtime only” toggle not working
* Issues with the Namespaces
* Null Reference error when entering play mode with graph asset selected
* Issue with HDRP and URP for the latest 2021.3 LTS version of Unity when using Runtime only materials
