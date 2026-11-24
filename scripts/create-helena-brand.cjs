const fs = require("node:fs/promises");
const path = require("node:path");
const sharp = require(require.resolve("sharp", { paths: [require.resolve("next/package.json")] }));

const destination = path.resolve(__dirname, "../public/images/helena-duarte");

function monogram(color) {
  return `<g fill="${color}"><path d="M18 18h24v3h-7v77h7v3H18v-3h7V21h-7zM67 18h24v3h-7v77h7v3H67v-3h7V21h-7z"/><path d="M33 57h45v4H33z"/><path d="M51 5h33c34 0 55 21 55 54S118 113 84 113H51v-3h14V8H51zm24 3v102h8c28 0 44-19 44-51S111 8 83 8z"/></g>`;
}

function logo(color) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="580" height="160" viewBox="0 0 580 160"><g transform="translate(0 20)">${monogram(color)}</g><path d="M166 28v104" stroke="${color}" stroke-opacity=".35"/><text x="193" y="86" font-family="Georgia,serif" font-size="64" letter-spacing="-2" fill="${color}">helena duarte</text><text x="198" y="120" font-family="Arial,sans-serif" font-size="14" letter-spacing="6" fill="${color}">CURADORIA IMOBILIÁRIA</text></svg>`;
}

async function main() {
  await fs.mkdir(destination, { recursive: true });
  for (const [name, color] of [["green", "#183e35"], ["white", "#f7f7f2"]]) {
    const source = logo(color);
    await fs.writeFile(path.join(destination, `logo-${name}.svg`), source);
    await sharp(Buffer.from(source), { density: 240 }).resize(1160, 320).webp({ lossless: true }).toFile(path.join(destination, `logo-${name}.webp`));
    await fs.writeFile(path.join(destination, `monogram-${name}.svg`), `<svg xmlns="http://www.w3.org/2000/svg" width="150" height="120" viewBox="0 0 150 120">${monogram(color)}</svg>`);
  }
  const photo = await sharp(path.join(destination, "helena.webp")).resize(1400, 1120, { fit: "cover", position: "north" }).toBuffer();
  const shade = Buffer.from(`<svg width="1400" height="1120"><defs><linearGradient id="shade" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#102d26" stop-opacity=".1"/><stop offset=".5" stop-color="#102d26" stop-opacity=".38"/><stop offset="1" stop-color="#102d26" stop-opacity=".6"/></linearGradient></defs><rect width="1400" height="1120" fill="url(#shade)"/></svg>`);
  const mark = await sharp(Buffer.from(logo("#ffffff")), { density: 240 }).trim().resize(1020).png().toBuffer();
  const markInfo = await sharp(mark).metadata();
  await sharp(photo).composite([{ input: shade }, { input: mark, left: 190, top: Math.round((1120 - markInfo.height) / 2) }]).webp({ quality: 91 }).toFile(path.join(destination, "project-cover.webp"));
  console.log("Logos, monogramas e capa com marca centralizada criados.");
}

main().catch(error => { console.error(error); process.exitCode = 1; });
