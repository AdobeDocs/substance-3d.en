---
helpx_url: 'https://helpx.adobe.com/substance-3d-general/ecosystem/general-system-requirements.html'
breadcrumb-title: ''
description: 'Check system requirements for Substance 3D applications to ensure your hardware meets minimum, recommended, or optimal specifications.'
helpx_creative_field: ''
helpx_description: General Knowledge > Ecosystem > General system requirements
helpx_experience_level: ''
helpx_learn_topic: ''
helpx_tags: ''
title: General system requirements
user-guide-description: ''
user-guide-title: ''
---

# General system requirements

## Hardware requirements

+++Windows

|  | Minimum | Recommended | Optimal |
| --- | --- | --- | --- |
| **OS** | Windows 11 64-bit Version 23H2 | Windows 11 64-bit Version 24H1 | Windows 11 64-bit Version 24H2 |
| **CPU** | Intel Core i5 AMD Ryzen 5 | Intel Core i7 AMD Ryzen 7 | Intel Core i9 AMD Ryzen 9 |
| **GPU** | NVIDIA GeForce RTX 2060 Super NVIDIA Quadro RTX 4000 AMD Radeon RX 5700 XT AMD Radeon Pro W5700 | NVIDIA GeForce RTX 3080 NVIDIA Quadro RTX A4000 AMD Radeon RX 6800 XT AMD Radeon Pro W7700 | NVIDIA GeForce RTX 4090 NVIDIA Quadro RTX 5000 Ada Generation AMD Radeon RX 7900 XTX AMD Radeon Pro W7800 |
| **VRAM** | 8 GB | 16 GB | 24 GB |
| **RAM** | 16 GB | 32 GB | 64 GB |
| **Storage** | SSD with 30 GB of available space | SSD with 50 GB of available space | SSD with 70 GB of available space |

+++

+++macOS

|  | Minimum | Recommended | Optimal |
| --- | --- | --- | --- |
| **OS** | macOS 15 Sequoia | macOS 27 Golden Gate | macOS 27 Golden Gate |
| **CPU** | Apple M1 | Apple M2 Pro | Apple M4 Pro |
| **GPU** | Apple M1 | Apple M2 Pro | Apple M4 Pro |
| **RAM** | 16 GB | 32 GB | 64 GB |
| **Storage** | SSD with 30 GB of available space | SSD with 50 GB of available space | SSD with 70 GB of available space |

>[!WARNING]
>
> For pipelines built with the VFX Reference Platform in mind, it is still possible to install and use Substance 3D apps on macOS 14 Sonoma. However the applications are no longer tested on this platform, and stability is not guaranteed. We strongly recommend updating to a more recent OS version.

+++

+++Linux

|  | Minimum | Recommended | Optimal |
| --- | --- | --- | --- |
| **OS** | **Enterprise ETLA** RHEL 8.6 or later or RHEL 9.2 or later **Steam** Ubuntu 22.04.1 LTS | **Enterprise ETLA** RHEL 8.6 or later or RHEL 9.4 or later **Steam** Ubuntu 22.04.1 LTS or later | **Enterprise ETLA** RHEL 8.6 or later or RHEL 9.4 or later **Steam** Ubuntu 22.04.1 LTS or later |

**Red Hat Enterprise Linux (RHEL) 9.x**: The xcb-util-cursor package required by our applications was removed from the EPEL 9 repository on 10 May 2024. From this date, the package is supported by the default RHEL 9 repository, coinciding with the release of RHEL 9.4. Customers using versions of RHEL prior to 9.4 will no longer be able to source the xcb-util-cursor package from the EPEL 9 repository after 10 May 2024.

For more information about this package's availability in the default RHEL 9 repository, please refer to: [Red Hat Enterprise Linux 9 - Package manifest - AppStream repository](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/9/html-single/package_manifest/index#AppStream-repository)

For more information on this change, please refer to: [Red Hat Bugzilla – Bug 2238273](https://bugzilla.redhat.com/show_bug.cgi?id=2238273) , [Red Hat Bugzilla – Bug 2212302](https://bugzilla.redhat.com/show_bug.cgi?id=2212302)

+++

+++VR

| Brand | Models |
| --- | --- |
| Meta | Rift, Rift S, Quest, Quest 2 (with Link), Quest Pro |

+++

For more details, take a look at the requirements of each application:

<table>
  <tr style="border: 0;">
    <td style="border: 0;" valign="top"><img src="../../assets/sa-appicon-noshadow-256.png" alt="Substance 3D Sampler icon" width="64px"/><br><a href="https://experienceleague.adobe.com/en/docs/substance-3d-sampler/using/getting-started/system-requirements">Substance 3D Sampler</a></td>
    <td style="border: 0;" valign="top"><img src="../../assets/ds-appicon-noshadow-256.png" alt="Substance 3D Designer icon" width="64px"/><br><a href="https://experienceleague.adobe.com/en/docs/substance-3d-designer/using/getting-started/system-requirements">Substance 3D</a> <a href="https://experienceleague.adobe.com/en/docs/substance-3d-designer/using/getting-started/system-requirements">Designer</a></td>
    <td style="border: 0;" valign="top"><img src="../../assets/pt-appicon-noshadow-256.png" alt="Substance 3D Painter icon" width="64px"/><br><a href="https://experienceleague.adobe.com/en/docs/substance-3d-painter/using/getting-started/system-requirements">Substance 3D Painter</a></td>
  </tr>
</table>

<table>
  <tr style="border: 0;">
    <td style="border: 0;" valign="top"><img src="../../assets/md-appicon-noshadow-256.png" alt="Substance 3D Modeler icon" width="64px"/><br><a href="https://helpx.adobe.com/substance-3d-modeler/getting-started/system-requirements.html">Substance 3D Modeler</a></td>
    <td style="border: 0;" valign="top"><img src="../../assets/sg-appicon-noshadow-256.png" alt="Substance 3D Stager icon" width="64px"/><br><a href="https://helpx.adobe.com/substance-3d-stager/getting-started/system-requirements.html">Substance 3D Stager</a></td>
    <td style="border: 0;" valign="top"></td>
  </tr>
</table>

## Additional notes

### Unsupported configuration

* Apple computer configurations with eGPUs and user installed GPUs are not supported.
* Windows virtual machines are not supported.
* Windows server operating system is not supported.