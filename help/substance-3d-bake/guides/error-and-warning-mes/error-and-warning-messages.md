---
title: "Error and Warning Messages"
helpx_description: "bakers > Guides > Error and Warning Messages"
---

# Error and Warning Messages

Below is the list of all the error messages that can appear when baking with Substance software.

## Any Bakers

| *Message* | *Description* |
| --- | --- |
| Baker not available. | This error message is generally followed by additional error messages, often related to GPU issues. It can happen if the GPU is too old and doesn't meet the [technical requirements](https://www.allegorithmic.com/products/tech-specs) of the software. |
| UV set &#91;X&#93; doesn't exist. | The Baker tried to work with a given UV set that is not present in the low-poly mesh. |
| Unable to load scene from URL. | This message means the baker wasn't able to load the mesh file, usually the high poly mesh. A few reasons can be the source of this message:<ul data-preserve-html="true"><li data-preserve-html="true">The mesh file referenced doesn't exist anymore.</li><li data-preserve-html="true">The mesh file is corrupted or broken and cannot be read.</li><li data-preserve-html="true">The mesh is currently being edited by another application and cannot be read.</li></ul> |

## UV to SVG Baker

| *Message* | *Description* |
| --- | --- |
| Couldn't find UVs for mesh &#91;mesh name&#93;. | No UVs were found regarding a specific mesh. This can happen if multiple meshes are imported but only a few of them have UVs. |
| The scene doesn't have UVs. Cancelling bake. | If no mesh in the scene have UVs, the bake process is cancelled. |

## Position Baker

| *Message* | *Description* |
| --- | --- |
| Mesh &#91;mesh name&#93; doesn't have positions. | Low poly mesh doesn't have vertex positions. |
| Mesh &#91;mesh name&#93; doesn't have UVs for uv set &#91;X&#93;. | The Baker tried to work with a given UV set that is not present in the low-poly mesh. |

## Any "From Mesh" Baker

| *Message* | *Description* |
| --- | --- |
| Could not find vertex normals in mesh &#91;mesh name&#93;. | No vertex normals were found in the given mesh. Normally never happen because vertex normals are recomputed if the mesh doesn't have them. It could maybe happen because of a faulty custom tangent space plugin. |
| Could not find vertex tangents in mesh &#91;mesh name&#93;. | Same as above. |
| Could not find vertex binormals in mesh &#91;mesh name&#93;. | Same as above. |
| Could not find vertex colors in mesh &#91;mesh name&#93;. | No vertex colors were found in the given mesh. This can happen if at least one sub-mesh in the high-poly mesh doesn't have any vertex colors defined. |
| Not enough data in the high poly to use selected baker. Aborting bake. | Preceded by at least one of the above messages. Normally, if only a bit of data is missing in the scene (example : only one mesh in high poly scene doesn't have vertex colors), the baking process fill the missing data with zeros, and keep baking. If too much data is missing this message is outputed and the baking process is stopped. |

## Transferred Texture From Mesh

| *Message* | *Description* |
| --- | --- |
| Detail texture loading failed. | The texture defined in the baker settings couldn't be loaded. It could be because the file is actually missing on disk or because it is corrupted and not readable. |
