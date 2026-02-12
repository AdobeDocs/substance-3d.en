---
title: Installing To Source Builds - UE5
description: ""
helpx_description: Substance 3D Integrations
helpx_url: "https://helpx.adobe.com/substance-3d-integrations/game-engines/unreal-engine/unreal-engine-5/installing-to-source-builds-ue5.html"
helpx_tags:
  - SG_SUBSTANCE_INTEGRATIONS
---




# Installing To Source Builds - UE5

The Substance plugin can be used with versions of Unreal Engine built from source. To do this, the plugin can be installed to either a C++project folder or the engine folder of a source build.

>[!NOTE]
>
> These methods require that you have a version of the plugin downloaded from the marketplace. The Substance plugin folder can be transferred between computers and UE builds.

## Installing to a C++ project folder

1. In the project's folder, create a Plugins folder if one does not exist already.
1. Inside the Plugins folder, Create a Runtime folder.
1. Place the Substance folder inside the Runtime folder. LINUX USERS: After step 3, locate the "include" folder in the Substance folder and rename it to capitalize the "i" (include &gt; Include).
1. Launch Unreal Engine.
1. Open the C++ project via the launcher.
1. After launching the project, Unreal Engine will prompt asking if you'd like to rebuild plugin components before launching, select yes. This will be done via Microsoft Visual Studio (Windows, Linux) or Xcode (Mac).
1. Unreal Engine will close, but the components will build in the background. This process can take about 5 minutes. Once it is done, the project will open. If it fails, you will see an error window.

## Installing to the Engine Folder

>[!NOTE]
>
> The steps above must be followed to rebuild the plugin Binaries folder before the plugin can be installed to the Engine folder.

1. Copy the Substance folder from the within the Project Folder &gt; Plugins &gt; Runtime.
1. Open the Unreal Engine version folder and navigate to Engine &gt; Plugins &gt; Marketplace.
1. Paste the Substance folder.
1. Open the Unreal Engine Editor. Create a new project if desired.
1. Open the Plugins menu and verify that the Substance Plugin is enabled.
