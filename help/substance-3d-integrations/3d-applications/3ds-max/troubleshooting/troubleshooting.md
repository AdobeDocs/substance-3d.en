---
title: "Troubleshooting"
description: ""
helpx_description: "Ecosystems and Plugins > 3D Applications > 3ds Max > Troubleshooting"
helpx_url: "https://helpx.adobe.com/substance-3d-integrations/3d-applications/3ds-max/troubleshooting.html"
---

# Troubleshooting

The Scripting Listener can be used to diagnose errors encountered while using the plugin. To open the script listener, navigating to Scripting Menu &gt; Script Listener. When an errors occurs during plugin use, a corresponding error message prints to this  Script Listener window. Visit the [official Script Editor documentation](https://help.autodesk.com/view/3DSMAX/2023/ENU/?guid=GUID-C8019A8A-207F-48A0-985E-18D47FAD8F36) for more information.

To report a bug, please join the #3dsmax-plugin channel on the [Substance Discord server](https://discord.com/invite/substance3d) or visit [Adobe communities](https://community.adobe.com/t5/substance-3d-plugins/ct-p/ct-substance-3d-plugins?page=1&amp;sort=latest_replies&amp;lang=all&amp;tabid=all&amp;topics=label-autodesk3dsmax). Relevant information from the console log and any reproductions steps for the issue can be included in reports.

## Known Issues

* *Replacing an .sbsar that uses a diffuse output with a .sbsar that does not use a diffuse leads to black render due to disconnection of the missing diffuse.*
  * This is expected behavior for multi output nodes. Instead of loading these .sbsars using the same node, it is recommended to use different Substance nodes for each.
