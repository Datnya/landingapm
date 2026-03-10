import sharp from 'sharp';
import { existsSync } from 'fs';
import { resolve } from 'path';

const BASE = './public/Imágenes/Carrusel';

const files = ['P2', 'P3', 'P4'];

for (const name of files) {
    const input = resolve(BASE, `${name}.DNG`);
    const output = resolve(BASE, `${name}.jpg`);

    if (!existsSync(input)) {
        console.error(`❌ Not found: ${input}`);
        continue;
    }

    console.log(`⏳ Converting ${name}.DNG → ${name}.jpg ...`);
    try {
        await sharp(input)
            .jpeg({ quality: 88, mozjpeg: true })
            .toFile(output);
        console.log(`✅ Done: ${name}.jpg`);
    } catch (err) {
        console.error(`❌ Failed to convert ${name}:`, err.message);
    }
}

console.log('\n🎉 Conversion complete.');
