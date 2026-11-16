/**
 * One-off: normalize public/img to image_1..image_N.jpeg.
 * Dry run: node scripts/rename-img-sequential.mjs
 * Apply:   node scripts/rename-img-sequential.mjs --write
 */
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const IMG_DIR = path.join(__dirname, "..", "public", "img");
const KEEP_MAX = 22;
const EXPECTED_EXTRAS = 34;
const write = process.argv.includes("--write");

const KEEP_RE = /^image_(\d+)\.jpeg$/i;

function parseWhatsAppSortKey(filename) {
  const m = filename.match(
    /WhatsApp Image (\d{4}-\d{2}-\d{2}) at (\d{1,2})\.(\d{2})\.(\d{2}) (AM|PM)(?: \((\d+)\))?/i
  );
  if (!m) return null;
  const [, date, h12, min, sec, ampm, dup] = m;
  let h = parseInt(h12, 10);
  if (ampm.toUpperCase() === "PM" && h !== 12) h += 12;
  if (ampm.toUpperCase() === "AM" && h === 12) h = 0;
  const ts = Date.parse(
    `${date}T${String(h).padStart(2, "0")}:${min}:${sec}`
  );
  const dupN = dup ? parseInt(dup, 10) : 0;
  return { ts, dupN };
}

function sortKey(filename) {
  const wa = parseWhatsAppSortKey(filename);
  if (wa) {
    return [0, wa.ts, wa.dupN, filename];
  }
  return [1, 0, 0, filename];
}

function compareFiles(a, b) {
  const ka = sortKey(a);
  const kb = sortKey(b);
  for (let i = 0; i < ka.length; i++) {
    if (ka[i] < kb[i]) return -1;
    if (ka[i] > kb[i]) return 1;
  }
  return 0;
}

function isKept(name) {
  const m = name.match(KEEP_RE);
  if (!m) return false;
  const n = parseInt(m[1], 10);
  return n >= 1 && n <= KEEP_MAX;
}

async function main() {
  const entries = await fs.readdir(IMG_DIR);
  const files = entries.filter((f) => {
    const lower = f.toLowerCase();
    return (
      !lower.startsWith("__renaming_") &&
      (lower.endsWith(".jpeg") || lower.endsWith(".jpg"))
    );
  });

  const kept = files.filter(isKept);
  const extras = files.filter((f) => !isKept(f)).sort(compareFiles);

  const numberedHigh = files.filter((f) => {
    const m = f.match(KEEP_RE);
    if (!m) return false;
    return parseInt(m[1], 10) > KEEP_MAX;
  });

  if (numberedHigh.length) {
    console.error(
      `Unexpected image_${KEEP_MAX + 1}+ already present: ${numberedHigh.join(", ")}`
    );
    process.exit(1);
  }

  if (extras.length !== EXPECTED_EXTRAS) {
    console.error(
      `Expected ${EXPECTED_EXTRAS} files to rename, found ${extras.length}.`
    );
    console.error("Extras:", extras);
    process.exit(1);
  }

  const plan = extras.map((from, i) => ({
    from,
    n: KEEP_MAX + 1 + i,
    temp: `__renaming_${KEEP_MAX + 1 + i}.jpeg`,
    to: `image_${KEEP_MAX + 1 + i}.jpeg`,
  }));

  console.log(`Mode: ${write ? "WRITE" : "dry run"}`);
  console.log(`Keeping ${kept.length} files (image_1..image_${KEEP_MAX})`);
  console.log("Mapping:");
  for (const row of plan) {
    console.log(`  ${row.from}  →  ${row.to}`);
  }

  if (!write) {
    console.log("\nPass --write to apply renames.");
    return;
  }

  for (const row of plan) {
    const fromPath = path.join(IMG_DIR, row.from);
    const tempPath = path.join(IMG_DIR, row.temp);
    await fs.rename(fromPath, tempPath);
  }

  for (const row of plan) {
    const tempPath = path.join(IMG_DIR, row.temp);
    const toPath = path.join(IMG_DIR, row.to);
    await fs.rename(tempPath, toPath);
  }

  const after = await fs.readdir(IMG_DIR);
  const images = after
    .filter((f) => KEEP_RE.test(f))
    .map((f) => parseInt(f.match(KEEP_RE)[1], 10))
    .sort((a, b) => a - b);

  const expected = KEEP_MAX + EXPECTED_EXTRAS;
  if (images.length !== expected) {
    console.error(`After rename: expected ${expected} image_*.jpeg, got ${images.length}`);
    process.exit(1);
  }
  for (let i = 1; i <= expected; i++) {
    if (images[i - 1] !== i) {
      console.error(`Missing or duplicate image_${i}.jpeg in folder.`);
      process.exit(1);
    }
  }
  console.log(`\nDone. ${expected} files: image_1.jpeg .. image_${expected}.jpeg`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});