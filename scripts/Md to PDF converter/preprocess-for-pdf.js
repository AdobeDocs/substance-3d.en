#!/usr/bin/env node
// Converts Adobe platform-specific markdown to PDF via md-to-pdf.
// Images are downscaled to reduce file size. Temp files are cleaned up automatically.
//
// Requires: npm install sharp  (already present in this folder's node_modules)
// Usage:    node "scripts/Md to PDF converter/preprocess-for-pdf.js" <path/to/file.md>
//
// Transformations:
//   +++Title / +++   accordion blocks  →  ##### heading, content unchanged
//   >[!NOTE]         callouts          →  standard blockquote with bold "Note:" prefix
//   ![](path){width="N"}              →  <img src="path" width="N" />
//   all images                        →  resized to max 1200px wide, JPEG 80% quality
//   hold: frontmatter key             →  stripped (platform-only metadata)
//   all tables                        →  borderless, no background (injected CSS)

const fs   = require('fs');
const path = require('path');
const { execSync } = require('child_process');

let sharp;
try {
  sharp = require('sharp');
} catch {
  console.error('Error: sharp is not installed. Run: npm install sharp');
  process.exit(1);
}

const inputFile = process.argv[2];
if (!inputFile) {
  console.error('Usage: node preprocess-for-pdf.js <input.md>');
  process.exit(1);
}

const absInput = path.resolve(inputFile);
const inputDir = path.dirname(absInput);
const baseName = path.basename(absInput, '.md');
const mdReady  = path.join(inputDir, `${baseName}.pdf-ready.md`);
const imgDir   = path.join(inputDir, '_pdf-images');
const pdfOut   = path.join(inputDir, `${baseName}.pdf`);
const pdfTemp  = path.join(inputDir, `${baseName}.pdf-ready.pdf`); // md-to-pdf's auto-generated name

// Deduplicated map: original src → resized relative path
const imgCache = new Map();

async function resizeImage(src) {
  if (imgCache.has(src)) return imgCache.get(src);
  if (/^https?:\/\//.test(src)) return src;

  const absImg = path.resolve(inputDir, src);
  if (!fs.existsSync(absImg)) {
    console.warn(`  Warning: image not found, keeping original path: ${src}`);
    imgCache.set(src, src);
    return src;
  }

  // Flatten the source path to a unique filename in _pdf-images/
  const flatName = src
    .replace(/^(\.\.\/)+/, '')
    .replace(/[/\\]/g, '_')
    .replace(/\.[^.]+$/, '.jpg');

  try {
    await sharp(absImg)
      .resize({ width: 1200, withoutEnlargement: true })
      .jpeg({ quality: 80 })
      .toFile(path.join(imgDir, flatName));
  } catch (e) {
    console.warn(`  Warning: could not resize ${src} (${e.message}), keeping original`);
    imgCache.set(src, src);
    return src;
  }

  const relOut = '_pdf-images/' + flatName;
  imgCache.set(src, relOut);
  return relOut;
}

// Rewrites all image src values in a single line (HTML <img> tags and markdown ![alt](src))
async function rewriteImagePaths(line) {
  const imgTagRe = /(<img\s[^>]*src=")([^"]+)(")/g;
  const mdImgRe  = /!\[([^\]]*)\]\(([^)]+)\)/g;

  // Collect all src values, resize each once, then apply replacements
  const pending = new Map();
  for (const [, , src] of line.matchAll(imgTagRe)) pending.set(src, null);
  for (const [, , src] of line.matchAll(mdImgRe))  pending.set(src, null);
  for (const src of pending.keys()) pending.set(src, await resizeImage(src));

  return line
    .replace(imgTagRe, (_, pre, src, post) => pre + (pending.get(src) ?? src) + post)
    .replace(mdImgRe,  (_, alt, src)       => `![${alt}](${pending.get(src) ?? src})`);
}

async function main() {
  fs.mkdirSync(imgDir, { recursive: true });

  const lines = fs.readFileSync(absInput, 'utf8').split('\n');
  const out = [];
  let i = 0;

  // Frontmatter: preserve title/description, strip platform-only keys
  if (lines[0] === '---') {
    out.push('---');
    i = 1;
    while (i < lines.length && lines[i] !== '---') {
      if (!lines[i].startsWith('hold:')) out.push(lines[i]);
      i++;
    }
    out.push('---');
    i++;
  }

  // Override md-to-pdf's default table borders and backgrounds
  out.push('<style>');
  out.push('table, tr, th, td { border: none !important; background: transparent !important; }');
  out.push('</style>');
  out.push('');

  // Main content
  while (i < lines.length) {
    const line = lines[i];

    // +++Title accordion opener → ##### heading
    if (/^\+\+\+\S/.test(line)) {
      out.push(`##### ${line.slice(3).trim()}`);
      i++; continue;
    }

    // Closing +++ → drop
    if (line.trim() === '+++') {
      i++; continue;
    }

    // >[!NOTE] callout → standard blockquote with bold prefix
    if (line.trim() === '>[!NOTE]') {
      i++;
      const noteLines = [];
      while (i < lines.length && lines[i].startsWith('>')) {
        noteLines.push(lines[i].replace(/^>\s?/, ''));
        i++;
      }
      while (noteLines.length && noteLines[0].trim() === '') noteLines.shift();
      while (noteLines.length && noteLines[noteLines.length - 1].trim() === '') noteLines.pop();
      if (noteLines.length) {
        out.push(`> **Note:** ${noteLines.join(' ')}`);
        out.push('');
      }
      continue;
    }

    // Drop markdown image links to PDFs — these are web-only self-download references
    if (/!\[[^\]]*\]\([^)]+\.pdf\)/i.test(line)) {
      i++; continue;
    }

    // {width="N"} image attribute → <img width="N"> (must run before rewriteImagePaths)
    let processed = line.replace(
      /!\[([^\]]*)\]\(([^)]+)\)\{width="(\d+)"\}/g,
      (_, alt, src, width) => `<img src="${src}" alt="${alt}" width="${width}" />`
    );

    processed = await rewriteImagePaths(processed);
    out.push(processed);
    i++;
  }

  fs.writeFileSync(mdReady, out.join('\n'), 'utf8');
  console.log(`Resized ${imgCache.size} images into ${path.relative(process.cwd(), imgDir)}`);
  console.log('Converting to PDF...\n');

  try {
    execSync(`npx --yes md-to-pdf "${mdReady}"`, { stdio: 'inherit' });
  } catch {
    console.error('\nmd-to-pdf failed. Temp files kept for debugging:');
    console.error(`  ${mdReady}`);
    console.error(`  ${imgDir}`);
    process.exit(1);
  }

  // md-to-pdf names the PDF after the .md input; rename to the clean base name
  fs.renameSync(pdfTemp, pdfOut);
  console.log(`\nPDF written to: ${path.relative(process.cwd(), pdfOut)}`);

  // Clean up temp files — only reached on success
  fs.rmSync(mdReady);
  fs.rmSync(imgDir, { recursive: true, force: true });
  console.log('Temp files cleaned up.');
}

main().catch(err => { console.error(err); process.exit(1); });
