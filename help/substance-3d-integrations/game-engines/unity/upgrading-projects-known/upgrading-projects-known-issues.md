---
title: "Upgrading ProjectsKnown Issues"
description: ""
helpx_description: "Ecosystems and Plugins > Game Engines > Unity > Upgrading ProjectsKnown Issues"
---

# Upgrading Projects/Known Issues

>[!WARNING]
>
> The Substance 3D plugin for Unity 3.0.0 does not support backward compatibility. So, please make sure to use Unity 2020.3.27x and higher.
> 
> Unity changed the default build architecture to x86 instead of x86\_64.  
> Scripts will not run if they reference Substances. You will need to change back to x86\_64 and the build will work.

## Known Issues

* "*Assertion failed on expression" error when navigating panel folders.*  
  * This is an error that occurs on the Unity end when changes are made to the UI, usually thumbnail changes, are should be a harmless message.
* *Image inputs appear to be locked to 8bits*
  * This is fixed in version 3.8.0-3. The correct workflow would be for the users to change Unity's default format for the texture to RGBA64. The plugin will take care of properly sending that information to Substance Engine.
