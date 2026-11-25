const fs = require("node:fs/promises");
const path = require("node:path");
const sharp = require(require.resolve("sharp", { paths: [require.resolve("next/package.json")] }));
const covers = require("../src/components/home/portrait-covers.json");

async function main() {
  for (const [slug, cover] of Object.entries(covers)) {
    const directory = path.resolve(__dirname, "../public/images", cover.directory);
    const width = 900;
    const height = 2100;
    const shade = Buffer.from(`<svg width="${width}" height="${height}"><defs><linearGradient id="shade" x2="0" y2="1"><stop stop-color="#10130f" stop-opacity=".12"/><stop offset=".5" stop-color="#10130f" stop-opacity=".42"/><stop offset="1" stop-color="#10130f" stop-opacity=".24"/></linearGradient></defs><rect width="100%" height="100%" fill="url(#shade)"/></svg>`);
    await sharp(path.join(directory, cover.photo))
      .resize(width, height, { fit: "cover", position: cover.position ?? "centre" })
      .composite([{ input: shade }])
      .webp({ quality: 94, effort: 6 })
      .toFile(path.join(directory, "project-cover-portrait.webp"));
    if (cover.logo) {
      await sharp(path.join(directory, cover.logo))
        .trim()
        .resize({ width: 1100, height: 900, fit: "inside" })
        .webp({ lossless: true })
        .toFile(path.join(directory, "project-cover-mark.webp"));
    }
    console.log(`${slug}: 900 × 2100`);
  }
}

main().catch((error) => { console.error(error); process.exitCode = 1; });
