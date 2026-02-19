---
title: "What are Assbin files "
description: "Learn what Assbin files are and how they're used as geometry cache files to speed up baking operations."
helpx_description: "bakers > Common Questions > What are Assbin files "
helpx_url: "https://helpx.adobe.com/substance-3d-bake/common-questions/what-are-assbin-files.html"
---

# What are Assbin files ?

>[!WARNING]
>
> **Question**
> 
> After baking in Substance Painter I found one or multiple files next to my high-poly meshes with the file extension "assbin", what are they ? Can I remove them safely ?

>[!NOTE]
>
> **Solution**
> 
> Assbin files pre-processed versions of the high-poly meshes used during the baking process. They are faster to read than the original mesh files which allows to re-bake more quickly when iterating on the Bakers settings. They can be removed safely. Substance Painter will regenerate them if necessary. However this may impact baking performances.
> 
> It is possible to never generate these files by going into the Substance Painter [main preferences](https://helpx.adobe.com/substance-3d/unlisted/documentation/spdoc/general-71008262.html) and disable the option "Save preprocessed scene files".
