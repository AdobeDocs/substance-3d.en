---
helpx_url: "https://helpx.adobe.com/substance-3d-integrations/3d-applications/blender/troubleshooting.html"
breadcrumb-title: ""
description: Diagnose and resolve common issues with the Substance 3D add-on in Blender using the system console.
helpx_creative_field: ""
helpx_description: Ecosystems and Plugins > 3D Applications > Blender > Troubleshooting
helpx_experience_level: ""
helpx_learn_topic: ""
helpx_tags: ""
title: Troubleshooting
user-guide-description: ""
user-guide-title: ""
---


# Troubleshooting

The system console can be used to diagnose errors encountered while using the add-on. Blender's system console window is opened differently depending on your operating system. For detailed instructions, follow the steps on Blender's system console [documentation page](https://docs.blender.org/manual/en/2.79/advanced/command_line/introduction.html#console-window-status-and-error-messages). The console output can be helpful when encountering unexpected issues, such as textures not loading or materials stuck in processing.

To report a bug, please join the #substance-blender-beta channel on the [Substance Discord server](https://discord.com/invite/substance3d) or visit [Adobe communities](https://community.adobe.com/t5/substance-3d-plugins/ct-p/ct-substance-3d-plugins?page=1&amp;sort=latest_replies&amp;lang=all&amp;tabid=all&amp;topics=label-blender). Relevant information from the console log and any reproductions steps for the issue can be included in reports.

## Common Issues and Solutions

* *WMIC related console errors.*
  * *Occasionally Windows installs will not include WMIC, which is necessary in this case. Here is how you can fix this manually:*
    * Go to Settings - System - Optional features
    * Select "view features" then select " Add Option feature"
    * This will bring up a new window, scroll down the list to find WMIC, tick the checkbox, then press next, in the next window press Add.
    * You should now to be taken to a new window which shows the progress of the WMIC install under recent actions.
    * *Note this may take a few minutes to download. After this, reset your computer and restart Blender and the addon. When you click on the load in the Substance 3D Panel, the file browser window should now display.*
  * If this does not resolve the issue, you may also need to define WMIC in your PATH variables. Please refer to documentation for your specific version of Windows.
* *Not all settings appear in the Substance 3D Panel after updating the add-on and loading a material.*
  * This may happen when removing an older version of the add-on and installing a newer version in the same session, since older files may still be cached in the system.  
    Restarting Blender should allow the changes to take effect.
* *Issues when installing the add-on./ Materials are stuck processing in between sessions. / Materials do not generate textures in between sessions. / Errors when loading .sbsar files.*
  * This may be an issue with the Integration tools installation and is usually fixed by manually removing the tools manually. Visit the [Uninstalling the Add-on](../../../3d-applications/blender/uninstalling-the-add-on/uninstalling-the-add-on.md) page for manual removal instructions.
* *Materials do not update in Cycles render view*.
  * By default, the add-on does not update textures in Cycles render view. However, they can be force-updated by enabling <b>Cycles Auto-update textures</b>in the add-on preferences.
* Parameters appear to revert after saving while in Cycles render view.  
  * This is a known caching issue on the Blender side that is visual only. When saving, no message is being sent to the remote engine to update the generated texture files. The textures will appear normal after leaving Cycles render view and switching back to it.
* *Materials are no longer updating after undoing/changing parameters.*
  * Materials may fail to update after undoing actions. While the parameters will revert to the previous state, the textures will not undo to match. To make the texture update again, use the refresh button to return the parameters to default and reload the textures.
* *Colors set in Substance Designer appear slightly differently in Blender's color picker, and the color values are not the same.*
  * Blender applies a gamma correction to colors for Blender's color picker only. While this causes a discrepancy in the color picker, the colors that appear in textures are accurate to the values set in Substance apps.
* *"wmic is not recognized" console error when loading a material in Windows.*
  * This issue occurs when C:\Windows\System32\wbem\ is not included in PATH system variables. Please refer to documentation for your specific version of Windows.
* *"Bad CPU type is executable" error on Mac.*
  * This issue occurs when Rosetta is not enabled on ARM Mac machines. See [Apple's Rosetta page](https://support.apple.com/en-us/102527) for more information. Additionally, see this [installation guide](https://medium.com/@jithmisha/fix-for-macbook-air-m1-m2-bad-cpu-type-in-executable-error-3719a0a1cb6) for further instructions.
* *Modifications to the shader graph are undone when using the Refresh button or updating parameters.*
  * The add-on refreshed connections in the graph after changes or refreshes. To work around this, duplicate the blender material created from the .sbsar and give it a new name of your choice. Add your nodes only to the duplicate. The textures will update in the node group while keeping user-added nodes. When refreshing, copy these nodes and paste them back into a new graph after the refresh.
