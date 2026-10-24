/* Membaca isi folder /data lalu membuat data/manifest.js otomatis.
   Jalankan:  node build-manifest.js   (atau klik dua kali update-data.bat)
   Aturan:
   - 1 folder di /data = 1 media (mis. "papan bermain")
   - 1 file .js di dalam folder = 1 pilihan/prompt (mis. "Ludo.js")
   - file bernama _kategori.js (opsional) = nama, ikon, deskripsi, dan kolom tambahan media */
const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, 'data');
const categories = fs.readdirSync(dataDir, { withFileTypes: true })
  .filter((d) => d.isDirectory() && !d.name.startsWith('.') && !d.name.startsWith('_'))
  .map((d) => {
    const all = fs.readdirSync(path.join(dataDir, d.name)).filter((f) => f.toLowerCase().endsWith('.js'));
    return {
      folder: d.name,
      meta: all.includes('_kategori.js') ? '_kategori.js' : null,
      files: all.filter((f) => !f.startsWith('_')).sort((a, b) => a.localeCompare(b, 'id'))
    };
  })
  .filter((c) => c.files.length > 0)
  .sort((a, b) => a.folder.localeCompare(b.folder, 'id'));

const manifest = { version: String(Date.now()), categories };
fs.writeFileSync(
  path.join(dataDir, 'manifest.js'),
  '/* File ini dibuat otomatis oleh build-manifest.js — jangan diedit manual. */\n' +
  'window.MEDIA_MANIFEST = ' + JSON.stringify(manifest, null, 2) + ';\n'
);

console.log('manifest.js diperbarui:');
categories.forEach((c) => console.log(`  - ${c.folder}: ${c.files.length} prompt`));
