---
description: Review release notes for 3ds Max plugin version 3.0.0 and later to learn about new features, improvements, and bug fixes.
title: 3Ds Max 3.1.0+
---

# 3ds Max 3.1.0+

## 3ds Max 3.1.1

**Release date:** November 18, 2026

**Compatible with:** 3ds Max 2025 and later

### Added/Updated

* Substance Engine update (9.6.1.) including security fixes
* OpenPBR support for 3ds Max 2025, 2026 and 2027 (Arnold and V-Ray)

### Known Limitations

* Emission weight: The emission_weight parameter is not part of the OpenPBR 1.1 specification and is not connected automatically. After applying the workflow, manually set the Emission Weight value in the OpenPBR node if your material uses emission.
* Visual differences between renderers: Some variation between the material preview in Substance 3D Designer and the rendered result in Arnold or V-Ray is due to differences in each renderer’s implementation of the OpenPBR specification and will improve as implementations converge.
* SBSAR files exported from Substance 3D Painter 12.2.0. or earlier may not connect correctly when using an OpenPBR workflow

## 3ds Max 3.1.0

**Release date:** November 18, 2026

**Compatible with:** 3ds Max 2024

### Added/Updated

* Substance Engine update (9.6.1.) including security fixes
