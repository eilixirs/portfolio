import { readdir, readFile, writeFile, mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

import { encode } from "blurhash";

const pdfjs = await import("pdfjs-dist/legacy/build/pdf.mjs");

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const PDF_DIR = path.join(ROOT, "public", "pdfs");
const OUT_FILE = path.join(ROOT, "src", "data", "pdf-previews.json");

const RASTER_WIDTH = 32;
const COMPONENTS_X = 4;
const COMPONENTS_Y = 3;

async function rasterizePage(canvasFactory, page) {
  const base = page.getViewport({ scale: 1 });
  const scale = RASTER_WIDTH / base.width;
  const viewport = page.getViewport({ scale });
  const width = Math.round(viewport.width);
  const height = Math.round(viewport.height);

  const { canvas, context } = canvasFactory.create(width, height);

  context.fillStyle = "#ffffff";
  context.fillRect(0, 0, width, height);

  await page.render({ canvasContext: context, viewport, canvas }).promise;

  const { data } = context.getImageData(0, 0, width, height);
  const result = { data, width, height, aspect: base.width / base.height };
  canvasFactory.destroy({ canvas, context });
  return result;
}

async function processPdf(filePath, publicPath) {
  const raw = new Uint8Array(await readFile(filePath));
  const doc = await pdfjs.getDocument({
    data: raw,
    useWorkerFetch: false,
    isEvalSupported: false,
    // Don't reach for OS-installed fonts — keeps output identical on a dev Mac
    // and headless CI. Embedded + standard fonts are enough for a blurry hash.
    useSystemFonts: false,
  }).promise;

  const canvasFactory = doc.canvasFactory;
  const pages = [];
  for (let i = 1; i <= doc.numPages; i++) {
    const page = await doc.getPage(i);
    const { data, width, height, aspect } = await rasterizePage(
      canvasFactory,
      page,
    );
    const hash = encode(
      new Uint8ClampedArray(data),
      width,
      height,
      COMPONENTS_X,
      COMPONENTS_Y,
    );
    pages.push({ hash, aspect: Number(aspect.toFixed(4)) });
    page.cleanup();
  }
  await doc.destroy();

  console.log(`  ${publicPath} — ${pages.length} page(s)`);
  return pages;
}

async function main() {
  let files;
  try {
    files = (await readdir(PDF_DIR)).filter((f) =>
      f.toLowerCase().endsWith(".pdf"),
    );
  } catch {
    console.warn(`No ${PDF_DIR} directory — skipping PDF previews.`);
    files = [];
  }

  const manifest = {};
  for (const file of files.sort()) {
    const publicPath = `/pdfs/${file}`;
    manifest[publicPath] = await processPdf(
      path.join(PDF_DIR, file),
      publicPath,
    );
  }

  await mkdir(path.dirname(OUT_FILE), { recursive: true });
  await writeFile(OUT_FILE, JSON.stringify(manifest, null, 2) + "\n");
  console.log(
    `Wrote ${Object.keys(manifest).length} PDF preview(s) → ${path.relative(ROOT, OUT_FILE)}`,
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
