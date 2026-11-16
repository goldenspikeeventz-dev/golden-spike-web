import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const BRAND_DIR = path.join(ROOT, "public", "brand");
const SOURCE_DIR = path.join(BRAND_DIR, "source");

const BLACK_THRESHOLD = 14;
const BLACK_SUM_THRESHOLD = 36;
const WHITE_MIN = 248;
const WHITE_FEATHER = 12;
const UPSCALE = 4;
const MARK_WIDTH_RATIO = 0.34;
const OG_SIZE = { width: 1200, height: 630 };
const SURFACE_DARK = "#12100e";

const DEFAULT_SOURCE_CANDIDATES = [
  path.join(SOURCE_DIR, "logo-source.jpg"),
  path.join(
    ROOT,
    "assets",
    "WhatsApp_Image_2026-11-15_at_6.43.40_PM-ec11a4b2-9448-4754-9555-c0131ae1eb9b.jpg"
  ),
  "C:\\Users\\tamim\\.cursor\\projects\\c-Users-tamim-development-New-folder-golden-spike-web\\assets\\WhatsApp_Image_2026-11-15_at_6.43.40_PM-ec11a4b2-9448-4754-9555-c0131ae1eb9b.jpg",
];

async function resolveSource() {
  const arg = process.argv[2];
  if (arg) {
    return path.resolve(arg);
  }
  for (const candidate of DEFAULT_SOURCE_CANDIDATES) {
    try {
      await fs.access(candidate);
      return candidate;
    } catch {
      /* try next */
    }
  }
  throw new Error(
    "Logo source not found. Place JPEG at public/brand/source/logo-source.jpg or pass a path."
  );
}

function removeBlackBackground(rgba, width, height) {
  const out = Buffer.from(rgba);
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const i = (y * width + x) * 4;
      const r = out[i];
      const g = out[i + 1];
      const b = out[i + 2];
      const lum = Math.max(r, g, b);
      const sum = r + g + b;
      const isTrueBlack =
        lum <= BLACK_THRESHOLD && sum <= BLACK_SUM_THRESHOLD;
      if (isTrueBlack) {
        out[i + 3] = 0;
      } else if (
        lum <= BLACK_THRESHOLD + 10 &&
        sum <= BLACK_SUM_THRESHOLD + 24
      ) {
        const edge = (lum - BLACK_THRESHOLD) / 10;
        out[i + 3] = Math.min(255, Math.max(0, Math.round(edge * 255)));
      }
    }
  }
  return out;
}

function removeWhiteBackground(rgba, width, height) {
  const out = Buffer.from(rgba);
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const i = (y * width + x) * 4;
      const r = out[i];
      const g = out[i + 1];
      const b = out[i + 2];
      const min = Math.min(r, g, b);
      const spread = Math.max(r, g, b) - min;
      if (min >= WHITE_MIN && spread <= 8) {
        out[i + 3] = 0;
      } else if (min >= WHITE_MIN - WHITE_FEATHER && spread <= 14) {
        const edge = (WHITE_MIN - min) / WHITE_FEATHER;
        out[i + 3] = Math.min(255, Math.max(0, Math.round(edge * 255)));
      }
    }
  }
  return out;
}

const GENERATED = {
  dark: [
    path.join(SOURCE_DIR, "logo-gen-dark.jpg"),
    "C:\\Users\\tamim\\.cursor\\projects\\c-Users-tamim-development-New-folder-golden-spike-web\\assets\\logo-gen-dark.jpg",
  ],
  light: [
    path.join(SOURCE_DIR, "logo-gen-light.jpg"),
    "C:\\Users\\tamim\\.cursor\\projects\\c-Users-tamim-development-New-folder-golden-spike-web\\assets\\logo-gen-light.jpg",
  ],
};

async function firstExisting(paths) {
  for (const candidate of paths) {
    try {
      await fs.access(candidate);
      return candidate;
    } catch {
      /* next */
    }
  }
  return null;
}

async function keyedPng(sourcePath, mode) {
  const { data, info } = await sharp(sourcePath)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });
  const cleaned =
    mode === "white"
      ? removeWhiteBackground(data, info.width, info.height)
      : removeBlackBackground(data, info.width, info.height);
  return sharp(cleaned, {
    raw: { width: info.width, height: info.height, channels: 4 },
  })
    .sharpen({ sigma: 0.6, m1: 0.8, m2: 0.4, x1: 2, y2: 8, y3: 16 })
    .png({ compressionLevel: 6, adaptiveFiltering: true })
    .toBuffer();
}

async function exportGenerated(darkSource, lightSource) {
  await fs.mkdir(SOURCE_DIR, { recursive: true });
  await fs.mkdir(BRAND_DIR, { recursive: true });

  const darkCopy = path.join(SOURCE_DIR, "logo-gen-dark.jpg");
  const lightCopy = path.join(SOURCE_DIR, "logo-gen-light.jpg");
  if (path.resolve(darkSource) !== path.resolve(darkCopy)) {
    await fs.copyFile(darkSource, darkCopy);
  }
  if (path.resolve(lightSource) !== path.resolve(lightCopy)) {
    await fs.copyFile(lightSource, lightCopy);
  }

  const pad = {
    top: 16,
    bottom: 16,
    left: 16,
    right: 16,
    background: { r: 0, g: 0, b: 0, alpha: 0 },
  };
  const darkBuf = await sharp(await keyedPng(darkCopy, "black"))
    .trim({ threshold: 2 })
    .extend(pad)
    .png()
    .toBuffer();
  const lightBuf = await sharp(await keyedPng(lightCopy, "white"))
    .trim({ threshold: 2 })
    .extend(pad)
    .png()
    .toBuffer();

  const darkPath = path.join(BRAND_DIR, "logo-on-dark.png");
  const lightPath = path.join(BRAND_DIR, "logo-on-light.png");
  const legacyPath = path.join(BRAND_DIR, "logo-lockup-2x.png");
  await sharp(darkBuf).toFile(darkPath);
  await sharp(darkBuf).toFile(legacyPath);
  await sharp(lightBuf).toFile(lightPath);

  const darkMeta = await sharp(darkBuf).metadata();
  const lightMeta = await sharp(lightBuf).metadata();
  const lw = darkMeta.width ?? 1;
  const lh = darkMeta.height ?? 1;
  const markW = Math.round(lw * MARK_WIDTH_RATIO);

  const markPath = path.join(BRAND_DIR, "logo-mark-2x.png");
  const markInfo = await sharp(darkBuf)
    .extract({ left: 0, top: 0, width: markW, height: lh })
    .resize(markW, markW, {
      fit: "contain",
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .png({ compressionLevel: 9 })
    .toFile(markPath);

  const markBuf = await sharp(markPath).toBuffer();
  await sharp(markBuf).resize(32, 32).png().toFile(path.join(BRAND_DIR, "icon.png"));
  await sharp(markBuf)
    .resize(180, 180)
    .png()
    .toFile(path.join(BRAND_DIR, "apple-icon.png"));

  const ogLockup = await sharp(darkBuf)
    .resize({
      width: Math.round(OG_SIZE.width * 0.72),
      height: Math.round(OG_SIZE.height * 0.65),
      fit: "inside",
      withoutEnlargement: true,
    })
    .png()
    .toBuffer();
  const ogMeta = await sharp(ogLockup).metadata();
  const left = Math.round((OG_SIZE.width - (ogMeta.width ?? 0)) / 2);
  const top = Math.round((OG_SIZE.height - (ogMeta.height ?? 0)) / 2);
  await sharp({
    create: {
      width: OG_SIZE.width,
      height: OG_SIZE.height,
      channels: 3,
      background: SURFACE_DARK,
    },
  })
    .composite([{ input: ogLockup, left, top }])
    .jpeg({ quality: 90 })
    .toFile(path.join(BRAND_DIR, "og-image.jpg"));

  const dimensions = {
    onDark: { width: darkMeta.width, height: darkMeta.height },
    onLight: { width: lightMeta.width, height: lightMeta.height },
    lockup: { width: darkMeta.width, height: darkMeta.height },
    mark: { width: markInfo.width, height: markInfo.height },
  };
  await fs.writeFile(
    path.join(BRAND_DIR, "dimensions.json"),
    JSON.stringify(dimensions, null, 2)
  );
  console.log("Generated brand assets written to public/brand/");
  console.log(JSON.stringify(dimensions, null, 2));
}

async function pipelineFromSource(sourcePath) {
  await fs.mkdir(SOURCE_DIR, { recursive: true });
  await fs.mkdir(BRAND_DIR, { recursive: true });

  const destSource = path.join(SOURCE_DIR, "logo-source.jpg");
  if (path.resolve(sourcePath) !== path.resolve(destSource)) {
    await fs.copyFile(sourcePath, destSource);
  }

  const meta = await sharp(destSource).metadata();
  const baseW = meta.width ?? 0;
  const baseH = meta.height ?? 0;

  const { data, info } = await sharp(destSource)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const cleaned = removeBlackBackground(data, info.width, info.height);

  let lockup = sharp(cleaned, {
    raw: { width: info.width, height: info.height, channels: 4 },
  })
    .resize(baseW * UPSCALE, baseH * UPSCALE, {
      kernel: sharp.kernel.lanczos3,
    })
    .sharpen({ sigma: 0.9, m1: 1, m2: 0.55, x1: 2, y2: 8, y3: 16 });

  const lockupPath = path.join(BRAND_DIR, "logo-lockup-2x.png");
  const lockupInfo = await lockup
    .png({ compressionLevel: 6, adaptiveFiltering: true })
    .toFile(lockupPath);

  const lockupBuf = await sharp(lockupPath).ensureAlpha().toBuffer();
  const lockupMeta = await sharp(lockupBuf).metadata();
  const lw = lockupMeta.width ?? 1;
  const lh = lockupMeta.height ?? 1;

  const markW = Math.round(lw * MARK_WIDTH_RATIO);
  const markH = lh;
  const markPath = path.join(BRAND_DIR, "logo-mark-2x.png");
  const markInfo = await sharp(lockupBuf)
    .extract({ left: 0, top: 0, width: markW, height: markH })
    .resize(markW, markW, {
      fit: "contain",
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .png({ compressionLevel: 9 })
    .toFile(markPath);

  const iconPath = path.join(BRAND_DIR, "icon.png");
  const applePath = path.join(BRAND_DIR, "apple-icon.png");
  const markBuf = await sharp(markPath).toBuffer();
  await sharp(markBuf).resize(32, 32).png().toFile(iconPath);
  await sharp(markBuf).resize(180, 180).png().toFile(applePath);

  const ogLockup = await sharp(lockupBuf)
    .resize({
      width: Math.round(OG_SIZE.width * 0.72),
      height: Math.round(OG_SIZE.height * 0.65),
      fit: "inside",
      withoutEnlargement: true,
    })
    .png()
    .toBuffer();
  const ogLockupMeta = await sharp(ogLockup).metadata();
  const ogPath = path.join(BRAND_DIR, "og-image.jpg");
  const left = Math.round((OG_SIZE.width - (ogLockupMeta.width ?? 0)) / 2);
  const top = Math.round((OG_SIZE.height - (ogLockupMeta.height ?? 0)) / 2);

  await sharp({
    create: {
      width: OG_SIZE.width,
      height: OG_SIZE.height,
      channels: 3,
      background: SURFACE_DARK,
    },
  })
    .composite([{ input: ogLockup, left, top }])
    .jpeg({ quality: 88 })
    .toFile(ogPath);

  const dimensions = {
    lockup: { width: lockupInfo.width, height: lockupInfo.height },
    mark: { width: markInfo.width, height: markInfo.height },
  };

  await fs.writeFile(
    path.join(BRAND_DIR, "dimensions.json"),
    JSON.stringify(dimensions, null, 2)
  );

  console.log("Brand assets written to public/brand/");
  console.log(JSON.stringify(dimensions, null, 2));
}

const darkGenerated = await firstExisting(GENERATED.dark);
const lightGenerated = await firstExisting(GENERATED.light);
if (darkGenerated && lightGenerated) {
  await exportGenerated(darkGenerated, lightGenerated);
} else {
  const source = await resolveSource();
  await pipelineFromSource(source);
}