---
helpx_url: "https://helpx.adobe.com/substance-3d-integrations/game-engines/unreal-engine/unreal-engine-4/tiling-substance-ue4.html"
breadcrumb-title: ""
description: Tile Substance textures in Unreal Engine 4 by adding Texture Coordinate nodes and scalar parameters to materials.
helpx_creative_field: ""
helpx_description: Ecosystems and Plugins > Game Engines > Unreal Engine > Unreal Engine 4 > Tiling Substance - UE4
helpx_experience_level: ""
helpx_learn_topic: ""
helpx_tags: ""
title: Tiling Substance - UE4
user-guide-description: ""
user-guide-title: ""
---



# Tiling Substance - UE4

To tile a substance texture you will need to add a Texture Coordinate node and multiply this by scalar parameter.

<https://docs.unrealengine.com/latest/INT/Engine/Rendering/Materials/ExpressionReference/Coordinates/#texturecoordinate>

To create parameters for both the U and V tile, you can use an Append Vector and multiply this by the TexCoord. This allows you to independently set the U and V tile amounts.

![](../../../../assets/tiling-3.png){width="800px"}
