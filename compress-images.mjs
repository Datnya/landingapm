import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const PUBLIC_DIR = 'C:\\Users\\user}\\Desktop\\Yo\\Páginas web APM\\APM LANDING\\public\\Imágenes';

const formatOptions = {
    jpeg: { quality: 80, progressive: true },
    webp: { quality: 80, effort: 6 },
    png: { compressionLevel: 9, palette: true }
};

const processDirectory = async (dir) => {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            await processDirectory(fullPath);
        } else if (stat.isFile() && stat.size > 200 * 1024) { // Compress images larger than 200KB
            const ext = path.extname(file).toLowerCase();
            if (['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) {
                console.log(`Compressing: ${fullPath} (${(stat.size / 1024 / 1024).toFixed(2)} MB)`);
                try {
                    const tempPath = fullPath + '.tmp';
                    let image = sharp(fullPath);
                    const metadata = await image.metadata();

                    // Resize if width > 1920
                    if (metadata.width > 1920) {
                        image = image.resize({ width: 1920, withoutEnlargement: true });
                    }

                    if (ext === '.jpg' || ext === '.jpeg') {
                        await image.jpeg(formatOptions.jpeg).toFile(tempPath);
                    } else if (ext === '.png') {
                        await image.png(formatOptions.png).toFile(tempPath);
                    } else if (ext === '.webp') {
                        await image.webp(formatOptions.webp).toFile(tempPath);
                    }

                    const tempStat = fs.statSync(tempPath);
                    if (tempStat.size < stat.size) {
                        fs.renameSync(tempPath, fullPath);
                        console.log(`  -> Reduced to ${(tempStat.size / 1024 / 1024).toFixed(2)} MB`);
                    } else {
                        fs.unlinkSync(tempPath);
                        console.log(`  -> Compression did not reduce size. Kept original.`);
                    }
                } catch (err) {
                    console.error(`  -> Failed to compress ${fullPath}:`, err.message);
                }
            }
        }
    }
};

processDirectory(PUBLIC_DIR)
    .then(() => console.log('Compression complete!'))
    .catch(console.error);
