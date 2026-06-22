# Markdown to PDF converter

This folder contains a preprocessing and conversion script for generating PDF versions of documentation pages from this repository.

## Why this exists

The documentation source files use Adobe platform-specific markdown syntax (accordion blocks, alert callouts, and image-attribute extensions) that standard markdown tools do not understand. This script normalises that syntax and converts the file to a PDF using [md-to-pdf](https://github.com/simonhaenisch/md-to-pdf), while also compressing images to keep the output file size manageable.

## Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later)
- Dependencies are already installed in `node_modules/`. If you need to reinstall them, run `npm ci` from this folder.

## Usage

Run the script from the **repository root**, passing the path to the markdown file you want to convert:

```
node "scripts/Md to PDF converter/preprocess-for-pdf.js" <path/to/file.md>
```

**Example:**

```
node "scripts/Md to PDF converter/preprocess-for-pdf.js" help/substance-3d-general/openpbr/openpbr-overview.md
```

The PDF is written to the **same directory as the source file**. Temporary files created during conversion (`*.pdf-ready.md` and `_pdf-images/`) are deleted automatically on success. If the conversion fails, they are left in place to aid debugging.

## What the script does

| Source syntax | PDF output |
|---|---|
| `+++Title` / `+++` accordion blocks | `#####` heading with content always visible |
| `>[!NOTE]` alert callouts | Standard blockquote with bold **Note:** prefix |
| `![](path){width="N"}` image attributes | `<img>` tag preserving the specified width |
| Markdown image links to `.pdf` files | Removed (web-only self-download references) |
| `hold:` frontmatter key | Removed (platform-only metadata) |
| All images | Resized to max 1200 px wide, re-encoded as JPEG at 80% quality |
| All tables | Borders and backgrounds removed via injected CSS |
