# Media Ajar Generator — by Evegrow Digital

Aplikasi web statis (HTML + CSS + JS, tanpa framework) untuk membuat prompt media ajar
yang siap ditempel ke Gemini, Canva Code, Claude, atau ChatGPT.

## Cara menjalankan
Buka `index.html` di browser (butuh internet untuk font, logo, dan pembaca DOCX/PDF).

## Menambah media / game baru
1. Buat folder di `data/` — tanpa kata "Game". Contoh: `data/papan bermain/`
2. Simpan prompt di dalam folder itu, 1 file = 1 pilihan. Contoh: `data/papan bermain/Ludo.js`
   (nama panjang boleh, mis. `Ludokilat.js`; judul yang tampil diatur di dalam file).
3. Jalankan **`update-data.bat`** (atau `node build-manifest.js`) lalu muat ulang halaman.

Hanya itu. Folder baru otomatis jadi kartu media di beranda dengan nama "Game <Nama Folder>".
Jika di-hosting (Netlify/Vercel/Cloudflare Pages), isi *Build command* dengan
`node build-manifest.js` dan *Publish directory* dengan `.` — maka langkah 3 otomatis
setiap kali kamu mengunggah perubahan.

## Format file prompt
```js
MediaAjar.register({
  title: 'Ludo',                       // nama di dropdown (opsional, default: nama file)
  description: 'Papan Ludo 2–4 pemain', // teks bantu (opsional)
  order: 1,                            // urutan di dropdown (opsional)
  prompt: `Tulis template prompt di sini...

[INPUT]

...lanjutan prompt...`
});
```
- `[INPUT]` diganti otomatis dengan seluruh isian user (jenjang, kelas, mapel, topik, tujuan,
  jenis, kesulitan, gaya visual, jumlah soal, fitur tambahan, bahan ajar).
  Jika `[INPUT]` tidak ditulis, data user ditaruh di akhir prompt.
- Penanda opsional untuk bagian tertentu: `[JENJANG] [KELAS] [MAPEL] [PROGRAM] [TOPIK] [TUJUAN]
  [JENIS] [KESULITAN] [GAYA] [JUMLAH] [FITUR]`.
- Di dalam prompt, jangan memakai tanda backtick (`) kecuali ditulis `\``.
- Prompt tambahan per model AI (Gemini/Canva Code/Claude/ChatGPT) ditambahkan otomatis di akhir.

## Opsi tambahan per media (opsional)
Buat `data/<folder>/_kategori.js` untuk mengatur nama, ikon, deskripsi, urutan, label
dropdown, dan kolom tambahan. Contoh ada di `data/edu racing/_kategori.js` (Tema Balapan).

## Mengubah pilihan umum
Semua ada di `js/config.js`: daftar jenjang/kelas/mapel, gaya visual, fitur tambahan,
prompt & panduan tiap model AI, serta URL tombol "Buka …".
