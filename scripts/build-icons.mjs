/**
 * Generates the raster icons from the mark.
 *
 * Run with `bun run icons` after changing public/favicon.svg. Output is
 * committed, so this is not part of the build.
 */
import { writeFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const pub = (name) => resolve(root, 'public', name);

const INK = '#141718';
const GREEN = '#AAB5A4';

/** @param {number} size @param {number} radius */
const mark = (size, radius) => `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${size} ${size}">
  <defs><clipPath id="c"><rect width="${size}" height="${size}" rx="${radius}" ry="${radius}"/></clipPath></defs>
  <g clip-path="url(#c)">
    <rect width="${size}" height="${size}" fill="${INK}"/>
    <rect y="${size - size * 0.3 - size * 0.077}" width="${size}" height="${size * 0.077}" fill="${GREEN}"/>
  </g>
</svg>`;

const png = (svg, size) =>
	sharp(Buffer.from(svg)).resize(size, size).png({ compressionLevel: 9 }).toBuffer();

/**
 * Minimal single-image .ico. The format allows a PNG payload verbatim, so
 * this is a 22-byte header plus the PNG — no encoder needed, and sharp has
 * no ICO output of its own.
 */
function ico(pngBuffer, size) {
	const header = Buffer.alloc(6);
	header.writeUInt16LE(0, 0); // reserved
	header.writeUInt16LE(1, 2); // type: icon
	header.writeUInt16LE(1, 4); // one image

	const entry = Buffer.alloc(16);
	entry.writeUInt8(size === 256 ? 0 : size, 0); // width (0 means 256)
	entry.writeUInt8(size === 256 ? 0 : size, 1); // height
	entry.writeUInt8(0, 2); // palette
	entry.writeUInt8(0, 3); // reserved
	entry.writeUInt16LE(1, 4); // colour planes
	entry.writeUInt16LE(32, 6); // bits per pixel
	entry.writeUInt32LE(pngBuffer.length, 8);
	entry.writeUInt32LE(header.length + entry.length, 12); // offset

	return Buffer.concat([header, entry, pngBuffer]);
}

// Rounded at 30% of the edge, matching the mark on the page.
const rounded = mark(512, 512 * 0.3);
// Apple applies its own mask, so the touch icon ships square and full-bleed.
const square = mark(512, 0);

const [ico32, touch180] = await Promise.all([
	png(rounded, 32),
	png(square, 180),
]);

writeFileSync(pub('favicon.ico'), ico(ico32, 32));
writeFileSync(pub('apple-touch-icon.png'), touch180);

console.log('wrote public/favicon.ico (32) and public/apple-touch-icon.png (180)');
