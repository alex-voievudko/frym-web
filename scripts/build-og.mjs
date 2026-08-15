/**
 * Generates public/og.png.
 *
 * The brand fonts only exist here as the woff2 files Astro downloaded, and
 * librsvg (which sharp renders SVG with) reads fonts through fontconfig, not
 * from a file path. So: decompress the woff2 to TTF into a temp dir, point a
 * throwaway fontconfig file at that dir, and render. Nothing is installed
 * into the system font path.
 *
 * Run with `bun run og`. Output is committed; this is not part of the build.
 */
import { readFileSync, writeFileSync, mkdirSync, readdirSync } from 'node:fs';
import { resolve, dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { tmpdir } from 'node:os';
import woff2 from 'wawoff2';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const fontCache = resolve(root, 'node_modules/.astro/fonts');
const fontDir = join(tmpdir(), 'frym-og-fonts');
const fcFile = join(fontDir, 'fonts.conf');

mkdirSync(fontDir, { recursive: true });

const woff2Files = readdirSync(fontCache).filter((f) => f.endsWith('.woff2'));
if (woff2Files.length === 0) {
	throw new Error('No fonts in node_modules/.astro/fonts — run `astro build` first.');
}

for (const file of woff2Files) {
	const ttf = Buffer.from(
		await woff2.decompress(readFileSync(join(fontCache, file))),
	);
	writeFileSync(join(fontDir, file.replace(/\.woff2$/, '.ttf')), ttf);
}

writeFileSync(
	fcFile,
	`<?xml version="1.0"?>
<!DOCTYPE fontconfig SYSTEM "fonts.dtd">
<fontconfig>
  <dir>${fontDir}</dir>
  <cachedir>${join(fontDir, 'cache')}</cachedir>
</fontconfig>`,
);

// Must be set before sharp initialises librsvg, hence the dynamic import.
process.env.FONTCONFIG_FILE = fcFile;
const { default: sharp } = await import('sharp');

const W = 1200;
const H = 630;
const PAD = 80;
const CW = W - PAD * 2;

const SANS = 'Instrument Sans';
const MONO = 'IBM Plex Mono';

const TOTAL = 4000;
const SEGMENTS = [
	[1800, '#141718'],
	[900, '#7A8B72'],
	[1300, '#D0D1CA'],
];

const GAP = 2;
const barUsable = CW - GAP * (SEGMENTS.length - 1);
let cursor = PAD;
const bars = SEGMENTS.map(([value, fill]) => {
	const width = barUsable * (value / TOTAL);
	const rect = `<rect x="${cursor}" y="546" width="${width}" height="14" fill="${fill}"/>`;
	cursor += width + GAP;
	return rect;
}).join('');

const M = 52;
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <rect width="${W}" height="${H}" fill="#F7F5EF"/>

  <clipPath id="mark"><rect x="${PAD}" y="${PAD}" width="${M}" height="${M}" rx="${M * 0.3}"/></clipPath>
  <g clip-path="url(#mark)">
    <rect x="${PAD}" y="${PAD}" width="${M}" height="${M}" fill="#141718"/>
    <rect x="${PAD}" y="${PAD + M - M * 0.3 - M * 0.077}" width="${M}" height="${M * 0.077}" fill="#AAB5A4"/>
  </g>
  <text x="${PAD + M + 16}" y="${PAD + 38}" font-family="${SANS}" font-weight="700" font-size="42" letter-spacing="-2" fill="#141718">Freem</text>

  <text x="${PAD}" y="260" font-family="${SANS}" font-weight="600" font-size="74" letter-spacing="-3.7" fill="#141718">Know what you can</text>
  <text x="${PAD}" y="336" font-family="${SANS}" font-weight="600" font-size="74" letter-spacing="-3.7" fill="#141718">actually spend.</text>

  <text x="${PAD}" y="424" font-family="${MONO}" font-weight="500" font-size="18" letter-spacing="3.6" fill="#8E918A">FREE TO SPEND</text>
  <text x="${PAD}" y="492" font-family="${SANS}" font-weight="600" font-size="64" letter-spacing="-3" fill="#141718">€1.800<tspan font-size="28" letter-spacing="-1" fill="#ADAFA7">,00</tspan></text>

  ${bars}
  <text x="${PAD}" y="600" font-family="${MONO}" font-weight="400" font-size="15" letter-spacing="2.2" fill="#8E918A">45% OF €4.000,00 · FREE · RESERVED · LOCKED</text>
</svg>`;

await sharp(Buffer.from(svg))
	.png({ compressionLevel: 9 })
	.toFile(resolve(root, 'public/og.png'));

console.log('wrote public/og.png (1200x630)');
