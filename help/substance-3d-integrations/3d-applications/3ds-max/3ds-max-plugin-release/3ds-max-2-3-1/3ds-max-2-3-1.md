---
title: "3ds Max 2.3.1"
helpx_description: "Ecosystems and Plugins > 3D Applications > 3ds Max > 3ds Max Plugin Release Notes > 3ds Max 2.3.1"
---

# 3ds Max 2.3.1

Released Feburary 13, 2020

The plugin now installs outside of the 3ds Max directory into C:\ProgramData\Autodesk\ApplicationPlugins\SubstanceIn3dsMax. It should now work anywhere that 3ds Max is told to look for plugins, so it should now function installed on a network drive, etc.  
Note that the switch to the Application Plugin and the install directory change make it so that an upgrade from 2.1.1 versions and prior will not work correctly. These should be manually removed for 3ds Max 2018 and 2019. The 2.2.0 version should upgrade correctly.  
For some of the issues not addressed in this release, another one is planned soon to fix these and any other issues that may arise.  
  
This version is released currently for 3ds Max 2018, 2019, 2020 and 2021.

* Load sbsar now looks in the project images folder first
* Renderer compatibility dialog only now appears for VRay RT and VUE File Renderer
* Drag and drop for the Slate Material Editor disabled to remove issues with Max batch
* Render Dialog no longer displays in 3ds Max silent mode
* Smaller python scripts now compatible with Python 3
* Added support for the Substance Launcher to send Substance Source assets to 3ds Max. This will require changes in the Launcher, but support in the plugin will be there as the feature is added.
* Redshift renderer script now uses the new node names set in Redshift 2.6.24
* Max no longer crashes when an empty path is assigned to the Substance2 SubstanceFilePath
* Remove name collision of SubstanceOutput type with the old plugin
* Renamed SubstanceOutput class to Substance2Output
* Renamed Substance Menu Manager class to Substance2MenuManager
* Param block ids are now forcefully cleared when a scene is opened, removing collisions between scene files. This should fix issues with invalid parameter blocks on load when alternating between scenes. Importing may still have issues, as that requires more complex changes
* The plugin is now installed outside of 3ds Max. All paths have been changed to relative from the load location.
* The plugin now uses the Autodesk Application plugin system.
