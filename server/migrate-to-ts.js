// Simple migration script to remove .js files if .ts exists
import fs from 'fs';
import path from 'path';

const dirs = ['.', './models', './routes'];
for (const dir of dirs) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    if (file.endsWith('.js')) {
      const tsFile = file.replace(/\.js$/, '.ts');
      if (files.includes(tsFile)) {
        fs.unlinkSync(path.join(dir, file));
        console.log(`Removed ${dir}/${file}`);
      }
    }
  }
}
