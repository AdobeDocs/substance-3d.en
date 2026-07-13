---
title: Frequently asked questions
description: Find out answers to common questions about OpenPBR and Substance 3D.
hold: 'true'
---

# OpenPBR Frequently asked questions

+++What is OpenPBR, and which version does Painter support?

OpenPBR is an open material specification hosted by the Academy Software Foundation, defining a standardized shading model designed to work consistently across applications. You can learn more about OpenPBR in Painter here.

+++

+++What does it actually mean when an application claims to "support OpenPBR"?

There is no formal certification process, so the claim can mean different things. At minimum it means the application exposes an OpenPBR-compatible material. In practice, implementations vary — some cover the full spec, others only a subset of it, leaving out features like thin-film, dispersion, or certain subsurface behaviors. The only reliable way to confirm what's supported is to check the application's documentation directly.

Note that "MaterialX support" and "OpenPBR support" are not the same thing. An application may support one without fully implementing the other. When portability matters, verify that the specific OpenPBR nodes and MaterialX features your materials rely on are supported at every point in your pipeline.

+++

+++If I build a material library using OpenPBR natively, can those materials be used across other applications?

 In principle yes — portability is a core promise of OpenPBR. The most robust exchange path is via USD with MaterialX bindings, which provides a standardized, renderer-agnostic container for material descriptions. That said, workflows for exporting materials as standalone assets — without an associated model, for use in a shared library — are still being actively developed and not yet fully supported everywhere. The infrastructure is close, but before committing to a library architecture that depends on it, validate your specific pipeline against current capabilities.

+++How does OpenPBR relate to MaterialX and MDL — and what is the difference between them?

They operate at different levels. OpenPBR is a material model — it defines how a material responds to light and what parameters it exposes. MaterialX is a file format and framework for storing and exchanging those material descriptions in a renderer-agnostic way; OpenPBR's reference implementation lives within MaterialX. MDL (Material Definition Language), developed by NVIDIA, serves a broadly similar purpose to MaterialX — a language for defining and exchanging materials across tools — but is a distinct standard with different technical approaches and industry adoption.

A useful analogy: if OpenPBR is a recipe, MaterialX and MDL are two different kitchens in which you can prepare it. OpenPBR does not require MaterialX specifically, but MaterialX is its primary reference implementation and the most widely adopted interchange path in current pipelines.

+++

+++Do I need to learn OpenUSD or MaterialX to use OpenPBR?

No. For most artists, OpenPBR is simply the material model built into the tools they already use. Substance 3D Painter, Maya 2025.3+, and 3ds Max 2026+ all use OpenPBR as their default material — working with it just means working with the standard shader. USD and MaterialX only become relevant when materials need to move between applications. For single-application workflows, the native support is sufficient; for multi-DCC pipelines, USD and MaterialX provide the interchange infrastructure — but largely behind the scenes.

+++

+++Can I convert an existing Adobe Standard Material (ASM) project to OpenPBR?

There is no automatic conversion — migration is manual. Select the OpenPBR shader in the Shader settings window, then add the relevant OpenPBR channels via Texture Set settings > Add or remove channels. Once that's done, review your existing layers to make sure their content targets the intended channels.

+++Can I still use the Adobe Standard Material (ASM) workflow?

Yes. Existing ASM projects keep their current shader when opened, and ASM templates remain available for new projects.

+++Can OpenPBR guarantee identical results across different applications and renderers?

Not entirely — and this is by design. OpenPBR defines a shared material model, but final appearance is also shaped by lighting, rendering algorithms, color management, and how closely each implementation conforms to the spec. For the closest possible consistency, combine OpenPBR with MaterialX and USD. Together these provide a stable, renderer-agnostic foundation — though some implementation-level differences may always remain.

+++Can I create car paint materials with OpenPBR?

Yes — with a couple of caveats. OpenPBR doesn’t include a specialized car paint shader, so it may prove insufficient for certain uses within the automotive industry. Moreover, it simply depends on the type of car paint — some car paints will always have properties that fall outside the scope of any given shader. But with those points in mind, car paint maps naturally onto OpenPBR's layered architecture. Use the Base layer for the metallic flake component and the Coat layer for the clear-coat lacquer, which acts as a physically separate surface with its own IOR, roughness, and color. For paints with angular color shifts, the Thin-film layer can add iridescent effects on top.

Note, however, that OpenPBR is a parametric model — it produces convincing, physically plausible car paint, but cannot match the precision of measured material formats such as X-Rite AxF, which capture actual optical data from a physical sample. For general production work OpenPBR is well suited; for applications requiring exact sample matching, a measured format may be more appropriate.

+++

+++Are there materials that OpenPBR cannot accurately represent?

Yes. OpenPBR is a parametric model — it describes materials through parameters like roughness, metalness, and IOR, which cover the vast majority of production use cases well. What it cannot replicate is the precision of measured material formats such as X-Rite AxF, which capture actual optical data from a physical sample across a wide range of angles and conditions. Effects like the precise angular color shifts and sparkle of automotive paint flake structures can be represented in a measured format with an accuracy that no parametric model can match. For concept and look development work, OpenPBR is entirely appropriate; for applications requiring exact physical sample matching, a measured format may be needed.

+++

+++If I author materials using OpenPBR, how can I be confident they will look correct when they reach other studios or renderers?

OpenPBR provides a shared definition — any application that correctly implements the spec will interpret your parameters the same way. In practice, maximizing that guarantee means: exporting via USD with MaterialX bindings; validating the round-trip early using the ASWF's OpenPBR Shader Playground rather than at the end of production; confirming your vendors' support levels for any advanced features you use; and agreeing upfront on which features will and won't be used in shared materials. Portability should be actively validated, not assumed.

+++

+++How do I create a new OpenPBR project in Painter?

A project created without a template uses the OpenPBR shader by default — it is now the first option in the new project window, replacing ASM. Dedicated templates are also available for specific workflows (Anisotropy, Coat, Fuzz, Subsurface Scattering), and importing a USD file that contains an OpenPBR material will configure the project automatically.

+++

+++Are there example projects I can refer to?

Yes — the sample projects shipped with Painter have been updated to use the OpenPBR workflow, and are a good starting point for getting familiar with how it works in practice.

+++

+++With so many parameters available in OpenPBR, where should I focus my attention?

Start simple. For most opaque surfaces, Base Color, Specular Roughness, and Metalness account for the majority of visible differences between materials. Add IOR if accurate reflectivity matters; refine Specular Color if the material has a grazing-angle tint. Enable transmission, subsurface, coat, fuzz, thin-film, and dispersion only when you have a clear, reference-driven reason to do so — each adds complexity and potential render cost. Hiding or collapsing unused parameter groups keeps your workspace focused and reduces the risk of unintended effects.

+++

+++Do my custom shaders need to be updated for OpenPBR?

No — existing custom shaders continue to work, as the relevant shader libraries are deprecated rather than removed. However, migrating to the new shader libraries is recommended; they are cleaner and easier to work with. See the shader API changelog in the Help menu for details.

+++

+++Why does transmission behave unexpectedly, particularly when scattering is involved?

Two things catch people out. First, Transmission Color is not a simple tint — its effect depends on how far light travels through the object, controlled by Transmission Depth. At low depth values, even thin parts of the mesh appear dark and saturated; at high values, color builds up slowly and only the thickest areas show strong color. Second, Scatter Color controls a separate journey light can take — bouncing around inside the material rather than passing straight through. Because scattering is directional, the result also changes depending on where your light source is placed. Adjusting one without considering the other is a common source of unexpected results.

+++

+++ I have a roughness map — should I plug it into Base Diffuse Roughness or Specular Roughness?

Specular Roughness — this controls reflection sharpness and is the direct equivalent of the roughness input in other PBR workflows. Base Diffuse Roughness is a separate, specialized parameter affecting diffuse scattering only; for most workflows it can stay at its default.

+++

+++Why does changing Base Color have no effect when Subsurface Weight is set to 1?

OpenPBR has a ‘hierarchy of priority’, which determines how much influence each parameter has over the final appearance of the material. Like so:

* Metalness has top priority
* Transmission Weight comes next
* Subsurface Weight comes after this
* Diffuse Base Color is lowest priority; it governs everything

And so, in the stated example, if Subsurface Weight is set to 1 — that is, its maximum value — then it governs all appearance data that reaches this level in the hierarchy. Changing the Base Color value has no effect, because there is essentially no data reaching this level for it to control.

Conversely, if Metalness is set to its maximum value of 1, then changing the values of Transmission Weight, Subsurface Weight, and Diffuse Base Color will not have any effect on the final appearance of the material.

+++

+++Why does my mesh appear very dark when I enable transmission?

Check Transmission Depth — it's probably too low. This parameter defines how far light travels before Transmission Color reaches full saturation; at low values even thin geometry appears dark and dense. Increase it to match the approximate physical scale of your object. If the material then looks too clear, adjust Transmission Color and Depth together to find the right balance.

+++

+++I've enabled Thin-film but can't see any effect — what am I missing?

Check the Thickness value first. Counterintuitively, thinner values produce more visible iridescence — most effects occur between 0 and 1 micrometer. If the effect is still subtle, adjust the IOR, which shifts both the intensity and color of the interference. Also confirm that Thin-film Weight is above zero.

+++

+++How do I export textures with the OpenPBR naming convention?

You can use the new naming convention dropdown in the Export Textures window. This defaults to OpenPBR automatically when at least one shader in the project uses it.

+++
