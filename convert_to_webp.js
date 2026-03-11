import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dir = path.join(__dirname, 'public', 'Imágenes');

async function processDirectory(directory) {
    const files = fs.readdirSync(directory);
    for (const file of files) {
        const fullPath = path.join(directory, file);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
            await processDirectory(fullPath);
        } else {
            const ext = path.extname(file).toLowerCase();
            if (ext === '.jpg' || ext === '.jpeg' || ext === '.png') {
                const webpPath = fullPath.substring(0, fullPath.lastIndexOf('.')) + '.webp';
                console.log(`Converting ${fullPath} to ${webpPath}`);
                try {
                    await sharp(fullPath)
                        .webp({ quality: 80 })
                        .toFile(webpPath);
                    fs.unlinkSync(fullPath); // Elimina el original
                } catch (err) {
                    console.error(`Error converting ${fullPath}:`, err);
                }
            }
        }
    }
}

console.log("Starting conversion...");
await processDirectory(dir);
console.log("Done");
