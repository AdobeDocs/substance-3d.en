---
helpx_url: "https://helpx.adobe.com/substance-3d-integrations/3d-applications/maya/maya-plugin-release-notes/maya-2-1-0.html"
breadcrumb-title: ""
description: Review release notes for Maya plugin version 2.1.0 to learn about new features, improvements, and bug fixes.
helpx_creative_field: ""
helpx_description: Ecosystems and Plugins > 3D Applications > Maya > Maya Plugin Release Notes > Maya 2.1.0
helpx_experience_level: ""
helpx_learn_topic: ""
helpx_tags: ""
title: Maya 2.1.0
user-guide-description: ""
user-guide-title: ""
---


# Maya 2.1.0

Substance in Maya 2.1.0 changelog

* Ensured compatibility with Python 3
* Substance Engines updated to version 7.2.9
* Fixed error with conflicting global mel variable names when applying a workflow
* Redshift workflow now sets fresnel to metalness
* Added new plugin file, substancelink, which handles interoperability with other Substance programs and the Substance Launcher
* Opening Substance Source now will open the Substance Launcher to the Source tab if the substancelink plugin is loaded
* The substancelink plugin allows the Launcher to, when the UI is added, send Substance Source materials to the Maya integration
* Scripting commands added to get internal library versions, as well as to open the substance launcher to the source page
* Website links now open to [substance3d.com](http://substance3d.com) instead of [allegorithmic.com](http://allegorithmic.com)
* Documentation and source links, when opening a web page, will now open the user-set default browser
* On Windows, internet explorer is no longer opened
* Added new link in the shelf and menu to Substance Share
* Added new commands to query the Substance Linker version and hash
* In Maya LT, the version has been removed from the settings menu
* About menu is no longer written in PySide2 and Python, but in native code using Qt instead. It is now available in Maya LT, where it previously was not.
* The about menu has different diagnostic information; it now displays the git hash to match the change in source control
* The about menu copy to clipboard will now also have this git hash, along with the version of Maya that the plugin is built for.
* The licenses in the about window now open as a text file
* Added support for Maya 2017
* Workflow script generator no longer outputs strings for the 'ordering' member. Any existing workflows will be properly handled

Scripting commands added:  
 substancemaya:  
 \* substanceUtilityGetLinkerVersion  
 \* substanceUtilityGetLinkerHash  
 \* substanceUiOpenAboutWindow  
 \* substanceUiOpenSourceWebsite  
 \* substanceUiOpenDocumentation  
 \* substanceUiOpenShareWebsite  
   
 substancelink:  
 \* substanceLinkGetLinkVersion  
 \* substanceLinkGetPortalCliVersion  
 \* substanceLinkOpenLauncher  
   
This version is released for Maya 2017, 2018, 2019 and 2020 on Windows,  
Linux and Macos. It is also released for Maya LT 2018, 2019 and 2020 on  
Windows and MacOS.
