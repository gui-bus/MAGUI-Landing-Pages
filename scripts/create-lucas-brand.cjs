const fs = require("node:fs/promises");
const path = require("node:path");
const sharp = require(require.resolve("sharp", { paths: [require.resolve("next/package.json")] }));
const directory = path.resolve(__dirname, "../public/images/lucas-martins");

function logo(light = false) {
  const text = light ? "#ffffff" : "#181818";
  return `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="170" viewBox="0 0 600 170"><g fill="none" stroke="${light ? "#ff685e" : "#c52d32"}" stroke-width="2.1" stroke-linecap="square" stroke-linejoin="miter"><path d="M23 31v105h89M46 110V40l28 47 28-47v70"/><path d="M10 20h105M124 45v104H35" opacity=".3"/></g><text x="151" y="85" font-family="Arial,sans-serif" font-size="39" letter-spacing="2.4" fill="${text}">LUCAS MARTINS</text><text x="153" y="116" font-family="Arial,sans-serif" font-size="10.5" letter-spacing="4.9" fill="${text}">PRIMEIRO IMÓVEL</text></svg>`;
}

async function main() {
  await fs.mkdir(directory, { recursive: true });
  for (const [variant, light] of [["red-dark", false], ["red-light", true]]) {
    const svg = logo(light);
    await fs.writeFile(path.join(directory, `logo-${variant}.svg`), svg);
    await sharp(Buffer.from(svg), { density: 240 }).resize(1200, 340).webp({ lossless: true }).toFile(path.join(directory, `logo-${variant}.webp`));
  }
  const photograph = await sharp(path.join(directory, "condominio.webp")).resize(1400, 1120, { fit: "cover", position: "centre" }).toBuffer();
  const overlay = Buffer.from('<svg width="1400" height="1120"><rect width="1400" height="1120" fill="#181818" opacity=".58"/></svg>');
  const mark = await sharp(Buffer.from(logo(true)), { density: 240 }).trim().resize(1040).png().toBuffer();
  const info = await sharp(mark).metadata();
  await sharp(photograph).composite([{ input: overlay }, { input: mark, left: 180, top: Math.round((1120 - info.height) / 2) }]).webp({ quality: 91 }).toFile(path.join(directory, "project-cover.webp"));
  console.log("Marca editorial e capa atualizadas.");
}
main().catch(error => { console.error(error); process.exitCode = 1; });
