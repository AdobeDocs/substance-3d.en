---
title: Frequently asked questions
description: Find out answers to common questions about OpenPBR and Substance 3D.
---

# OpenPBR Frequently asked questions

## The OpenPBR model

+++What is OpenPBR, and which version does Painter support?

OpenPBR is an open material specification hosted by the Academy Software Foundation, defining a standardized shading model designed to work consistently across applications. [Painter's documentation has more information about using OpenPBR](https://experienceleague.adobe.com/en/docs/substance-3d-painter/using/home).

+++

+++What does it mean when an application claims to "support OpenPBR", and how can I find out how well a specific application supports it?

There is no formal certification process, so the claim can mean different things. In practice, implementations vary: some cover the full spec, others only a subset, leaving out features like thin-film, dispersion, or certain subsurface behaviors. Note also that "MaterialX support" and "OpenPBR support" are not the same thing; an application may support one without fully implementing the other.

To find out what a specific application actually supports, use a combination of approaches: check the release notes (support is often added incrementally); load the ASWF's OpenPBR Shader Playground and compare against a reference render to surface gaps quickly; or for studios with significant pipeline investment, ask the vendor directly about supported features and their roadmap.

+++

+++Can OpenPBR guarantee identical results across different applications and renderers?

Not entirely, and this is by design. OpenPBR defines a shared material model, but final appearance is also shaped by lighting, rendering algorithms, color management, and how closely each implementation conforms to the spec.

In practice, maximizing that guarantee means: exporting via USD with MaterialX integration; validating the round-trip early using the ASWF's OpenPBR Shader Playground rather than at the end of production; confirming your vendors' support levels for any advanced features you use; and agreeing upfront on which features will and won't be used in shared materials. Portability should be actively validated, not assumed.

+++

+++Are there materials that OpenPBR cannot accurately represent?

Yes. OpenPBR is a parametric model. Parameters like roughness, metalness, and IOR cover the vast majority of production use cases, but cannot replicate the precision of measured material formats such as X-Rite AxF, which capture actual optical data from a physical sample. For general production work OpenPBR is well suited; for applications requiring exact sample matching, a measured format may be more appropriate.

Car paint is a useful illustration. It is possible to create car paint in OpenPBR with a couple of caveats. OpenPBR doesn’t include a specialized car paint shader, so it may be insufficient for certain automotive industry uses. Moreover, it simply depends on the type of car paint — some car paints will always have properties that fall outside the scope of any given shader. But with those points in mind, car paint maps naturally onto OpenPBR's layered architecture.

+++

## Setup and conversion

+++Do I need to learn OpenUSD or MaterialX to use OpenPBR?

No. For most artists, OpenPBR is simply the material model built into the tools they already use. Substance 3D Painter, Maya 2025.3, and 3ds Max 2026 all use OpenPBR as their default material; working with it just means working with the standard shader. USD and MaterialX only become relevant when materials need to move between applications. For single-application workflows, the native support is sufficient; for multi-DCC pipelines, USD and MaterialX provide the interchange infrastructure, but largely behind the scenes.

That said, the most robust exchange path for shared material libraries is via USD with MaterialX integration, which provides a standardized, renderer-agnostic container for material descriptions. Workflows for exporting materials as standalone assets (without an associated model, for use in a shared library) are still under active development and not yet fully supported everywhere. Before committing to a library architecture that depends on this, validate your specific pipeline against current capabilities.

+++

+++How do I create a new OpenPBR project in Substance 3D Painter?

A project created without a template uses the OpenPBR shader by default. The OpenPBR shader is now the first option in the new project window, replacing ASM. Dedicated templates are also available for specific workflows (Anisotropy, Coat, Fuzz, Subsurface Scattering), and importing a USD file that contains an OpenPBR material will configure the project automatically. The sample projects shipped with Substance 3D Painter have also been updated to use the OpenPBR workflow, and are a good starting point for getting familiar with how it works in practice.

+++

+++Can I convert an existing Adobe Standard Material (ASM) project to OpenPBR?

There is no automatic conversion. Existing ASM projects keep their current shader when opened, and ASM templates remain available for new projects.

To migrate to OpenPBR manually, select the OpenPBR shader in the Shader settings window, then add the relevant OpenPBR channels via Texture Set settings > Add or remove channels. Once that's done, review your existing layers to make sure their content targets the intended channels.

+++

+++Do my custom shaders need to be updated for OpenPBR?

No — existing custom shaders continue to work, as the relevant shader libraries are deprecated rather than removed. However, migrating to the new shader libraries is recommended; they are cleaner and easier to work with. See the shader API changelog in the Help menu for details.

+++

## In-app usage

+++With so many parameters available in OpenPBR, where should I focus my attention?

Start simple. For most opaque surfaces, Base Color, Specular Roughness, and Metalness account for the majority of visible differences between materials. Add IOR if accurate reflectivity matters; refine Specular Color if the material has a grazing-angle tint. Enable transmission, subsurface, coat, fuzz, thin-film, and dispersion only when you have a clear, reference-driven reason to do so, since each additional channel adds complexity and potential render cost. Hiding or collapsing unused parameter groups keeps your workspace focused and reduces the risk of unintended effects.

+++

+++I have a roughness map — should I plug it into Base Diffuse Roughness or Specular Roughness?

Specular Roughness — this controls reflection sharpness and is the direct equivalent of the roughness input in other PBR workflows. Base Diffuse Roughness is a separate, specialized parameter affecting diffuse scattering only; for most workflows it can stay at its default.

+++

+++Why does changing Base Color have no effect when I'm using subsurface scattering?

There is a 'hierarchy of priority' that determines how much influence each parameter has on the final appearance of the material. Like so:

* Metalness comes first: when Metalness=1, the Subsurface and Transmission parts are turned off.
* Transmission Weight comes next: if Transmission Weight=1, Subsurface will be absent.
* Subsurface Weight comes after this.
* Diffuse Base Color comes last: the base diffuse only contributes when none of the above are set to 1.

And so, in the stated example, if Subsurface Weight is set to 1 (its maximum value) then it governs all the appearance. Changing the Base Color value has no effect because the Base Diffuse makes essentially no contribution. Conversely, if Metalness is set to its maximum value of 1, then changing the values of Transmission Weight, Subsurface Weight, and Diffuse Base Color will not have any effect on the final appearance of the material. Transmission, Subsurface and Diffuse are all dielectric (non-metal), so setting Metalness to 1 is removing any non-metal contribution.

+++

+++Why does transmission behave unexpectedly? For example, why does my mesh appear very dark when I enable it?

The most common culprit is Transmission Depth being set too low. This parameter defines how far light travels before Transmission Color reaches full saturation; at low values even thin geometry appears dark and dense. Increase it to match the approximate physical scale of your object. If the material then looks too clear, adjust Transmission Color and Depth together to find the right balance.

Scattering can add a further layer of complexity. Transmission Color is not a simple tint — its effect depends on how far light travels through the object, controlled by Transmission Depth. Scatter Color, meanwhile, controls a separate journey light can take — bouncing around inside the material rather than passing straight through. Because scattering is directional, the result also changes depending on where your light source is placed. Adjusting one without considering the other is a common source of unexpected results.

+++

+++I've enabled Thin-film but can't see any effect. What am I missing?

Check the Thickness value first. Counterintuitively, thinner values produce more visible iridescence — most effects occur between 0 and 1 micrometer. If the effect is still subtle, adjust the IOR, which shifts both the intensity and color of the interference. Also confirm that Thin-film Weight is above zero.

+++
