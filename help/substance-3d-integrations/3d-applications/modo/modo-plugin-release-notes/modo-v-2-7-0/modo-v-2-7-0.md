---
helpx_url: "https://helpx.adobe.com/substance-3d-integrations/3d-applications/modo/modo-plugin-release-notes/modo-v-2-7-0.html"
breadcrumb-title: ""
description: Review release notes for MODO plugin version 2.7.0 to learn about new features, improvements, and bug fixes.
helpx_creative_field: ""
helpx_description: Ecosystems and Plugins > 3D Applications > MODO > Modo Plugin Release Notes > Modo v. 2.7.0
helpx_experience_level: ""
helpx_learn_topic: ""
helpx_tags: ""
title: Modo v. 2.7.0
user-guide-description: ""
user-guide-title: ""
---



# Modo v. 2.7.0

* Numerous crash fixes
* 32 bit float support
* 4k textures in the CPU engine and 8k textures in the GPU engine
* new LPK format for the plugin release
* new Kit menu for the Substance plugin
* glTF / Principled shader support for MODO 12.0
* Added relative pathing for Substance files
* Linux support
* New UI for loading and saving presets
* Embedded presets are loaded from Designer
* Removed GPU memory warning box
* Edited preset loading/saving commands   
    
  The new commands available are:   
    
  **substance.getsbsname** Convert a substance object's identifier to its internal name   
    
  All of these expect a proper internal name acquired from substance.getsbsname:   
    
  **substance.setpreset** Sets a Substance's current preset to the index **substance.getpresetindex** Gets the current preset index **substance.getpresetat**Returns the string name of a preset at a given **index substance.getpresetcount** Returns the number of presets a Substance has**substance.savepresetfile** Saves a preset of the current configuration to the given file path **substance.loadpresetfile** Loads a preset file to the Substance given a file path   
    
  UI Commands:   
    
  **substance.loadpresetui** UI command for loading a preset **substance.savepresetui** UI command for saving a preset **substance.selectpresetui** UI command for setting the preset
