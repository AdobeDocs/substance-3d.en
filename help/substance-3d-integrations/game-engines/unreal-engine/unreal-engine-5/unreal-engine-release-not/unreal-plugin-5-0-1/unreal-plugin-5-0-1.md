---
title: "Unreal plugin 5.0.1"
description: ""
helpx_description: "Ecosystems and Plugins > Game Engines > Unreal Engine > Unreal Engine 5 > Unreal Engine 5 Release Notes > Unreal plugin 5.0.1"
---

# Unreal plugin 5.0.1

Updated/Added:

* Support for the Unreal Engine version 5.0.0+
* Unreal Engine 5 Plugin documentation
* Support for the new Tri-planar material template
* Support for the new "Physical Size" feature
* *Revamped* the Substance Standard Template and Substance Refraction Template
* The ability to modify the XYZ value for the world space
* Python scripting
* Auto set physicalsize material nodes with values from substance outputs

Removed:

* The float4 parameter in UE 5 plugin

Fixed:

* Packaged UE5 project crashes when material parameters are adjusted via blueprints
* Plugin closes parameter window when Substance Graph Instance's output is unchecked
* Fixed occasional render lag that caused delayed parameter changes

Known issues:
