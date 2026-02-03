---
title: "Compatible 3D software"
description: ""
helpx_description: "bakers > Getting Started > Compatible 3D software"
---

# Compatible 3D software

Most 3D software is compatible with the Substance Bakers as long as they export mesh geometry as polygons in file formats supported by the applications.

However not all software is on par in terms of feature and quality when exporting these meshes. This is why it is important to clean a mesh properly and making it sure it will be compatible with the bakers. For more information on how to prepare a mesh see the various [Guides](../../guides/performances-and-opt/performances-and-optimizations.md).

## Software Compatibility

Below is a list of commonly known 3D software and their compatibility with the bakers:

| *Name* | *Status* |
| --- | --- |
| **Blender** | Compatible: requires to flatten modifiers before export. |
| **Maya** | Compatible: requires a freeze transform and delete history before export. |
| **3DS Max** | Compatible: requires a reset xForm before export. |
| **MODO** | Compatible: recommended to use the Game Tab exporter set to "Unreal Static Mesh". |
| **Cinema 4D** | Compatible: requires to flatten modifiers before export. |
| **zBrush** | Not Compatible: low-poly meshes need to be processed and cleaned in another 3D application first. Compatible: high-poly meshes for baking. |

## File format

When baking geometry it is important to take into account the file format used as well. The file format will define the quantity of information that will be saved in the mesh.

Having too much information can sometimes be detrimental and lead to errors. We usually recommend to try different file formats when errors happen as it can be an easy way to troubleshoot issues and determine if the culprit is in the baker itself or coming from the 3D software.

Bellow is a quick overview of the two most common file format supported by the bakers:

| File format | Information |
| --- | --- |
| **FBX** | Autodesk FBX (Filmbox) is the main file format used by Autodesk Software, it can be wrote as text or binary.  It supports :<ul data-preserve-html="true"><li data-preserve-html="true">UVs (multiples sets)</li><li data-preserve-html="true">Vertex, Tangent and Binormals</li><li data-preserve-html="true">Vertex colors</li><li data-preserve-html="true">Triangle face, Quad face and N-Gon face</li><li data-preserve-html="true">Cameras</li><li data-preserve-html="true">Lights</li><li data-preserve-html="true">Mesh subdivisions</li><li data-preserve-html="true">Smoothing groups</li><li data-preserve-html="true">Material information (such as color)</li><li data-preserve-html="true">Bitmap</li></ul> |
| **OBJ** | Wavefront OBJ is a very simple text based file format that supports :<ul data-preserve-html="true"><li data-preserve-html="true">UVs (only one set)</li><li data-preserve-html="true">Vertex Normals</li><li data-preserve-html="true">Vertex Colors (only if exported from Pixologic zBrush)</li><li data-preserve-html="true">Triangle face, Quad face, and N-Gon face</li><li data-preserve-html="true">Material color (if <strong>mtl</strong> file is present)</li></ul> |
