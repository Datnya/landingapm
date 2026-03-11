import fs from 'fs';
import path from 'path';
import { globSync } from 'glob';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Buscar todos los archivos de React, TS y HTML
const files = globSync('src/**/*.{tsx,ts}', { cwd: __dirname, absolute: true });
files.push(path.join(__dirname, 'index.html'));

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;
  
  // Reemplazar de manera global las extensiones a .webp
  content = content.replace(/\.jpg|\.jpeg|\.png|\.JPG|\.PNG/g, '.webp');
  
  if (content !== original) {
    fs.writeFileSync(file, content);
    console.log(`Actualizado: ${file}`);
  }
}
console.log("Reemplazo completado.");
