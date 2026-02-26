---
helpx_url: "https://helpx.adobe.com/substance-3d-integrations/game-engines/unity/publishing-for-mobile.html"
breadcrumb-title: ""
description: Optimize Substance materials for mobile platforms in Unity by adjusting settings and texture resolutions.
helpx_creative_field: ""
helpx_description: Ecosystems and Plugins > Game Engines > Unity > Publishing for Mobile
helpx_experience_level: ""
helpx_learn_topic: ""
helpx_tags: ""
title: Publishing for Mobile
user-guide-description: ""
user-guide-title: ""
---


# Publishing for Mobile

>[!NOTE]
>
> **Texture size on mobile devices**
> 
> The resolution of the texture set in the Unity Editor will be the size that is published in the app binary. Lowering the resolution of the Substance material will create textures with smaller file sizes.

## Platforms

## Apple iOS

1. Make sure that the iOS module is downloaded for the corresponding Unity version.
1. In Unity, change the build target to iOS.
1. Open the Player Settings and change the 'Identification - Bundle Identifier' field to something more unique. (for example: com.Adobe.iosProject)
1. Build and Run the game.
1. In Xcode, click on the iOS device and change the 'Signing - Team' dropdown to your developer team ID.
1. On the iOS device, go to 'Settings - General - Device Management' and click 'Trust' on the developer team ID that appears.
1. Run the Xcode build again by clicking the 'Build and Run current scheme' button (the Play button).
1. The game should be running on the iOS device.

## Android OS

1. Make sure that the Android module is downloaded for the corresponding Unity version.
1. In Unity, change the build target to Android.
1. Open the Player Settings and change the 'Identification - Bundle Identifier' field to something more unique. (for example: com.Adobe.androidProject)
1. Build and Run the game.
1. The game should be running on the Android device.
