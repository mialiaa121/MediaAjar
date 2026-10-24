/* =========================================================
   Media Ajar Generator — by Evegrow Digital
   config.js : opsi form, model AI, panduan, dan "registry" data.
   Hampir semua yang sering diubah ada di file ini.
   ========================================================= */

window.MediaAjar = {
  /* ---------- Registry (diisi otomatis oleh file di folder /data) ---------- */
  categories: {}, // folder -> info kategori (dari _kategori.js, opsional)
  items: {},      // folder -> daftar prompt (dari tiap file .js)

  // Dipanggil oleh setiap file prompt, mis. data/papan bermain/Ludo.js
  register(arg) {
    const el = document.currentScript;
    const folder = el && el.dataset.folder;
    const file = el && el.dataset.file;
    if (!folder) return console.warn('register() harus dipanggil dari file di folder /data');
    const def = typeof arg === 'string' ? { prompt: arg } : (arg || {});
    (this.items[folder] = this.items[folder] || []).push({
      file,
      title: def.title || file.replace(/\.js$/i, '').replace(/[-_]+/g, ' '),
      description: def.description || '',
      order: typeof def.order === 'number' ? def.order : 999,
      prompt: def.prompt || ''
    });
  },

  // Dipanggil oleh data/<folder>/_kategori.js (opsional)
  registerCategory(meta) {
    const el = document.currentScript;
    const folder = el && el.dataset.folder;
    if (folder) this.categories[folder] = meta || {};
  },

  /* ---------- Default untuk folder baru yang tidak punya _kategori.js ---------- */
  defaults: {
    namePrefix: 'Game ',        // folder "puzzle" -> "Game Puzzle"
    icon: 'gamepad',   // nama ikon: dice, gamepad, map, flag, bulb, star (atau emoji)
    typeLabel: 'Jenis Game'
  },

  /* ---------- Batas teks bahan ajar (agar prompt tidak kepanjangan) ---------- */
  maxMaterialChars: 12000,

  /* ---------- Jenjang, kelas, dan mata pelajaran ---------- */
  jenjang: [
    {
      id: 'PAUD/TK', label: 'PAUD / TK',
      kelas: ['TK A', 'TK B'],
      mapel: [
        'Nilai Agama dan Budi Pekerti',
        'Jati Diri',
        'Literasi Dasar (Bahasa)',
        'Numerasi (Matematika Dasar)',
        'Sains Dasar',
        'Teknologi dan Rekayasa Sederhana',
        'Seni dan Kreativitas'
      ]
    },
    {
      id: 'SD', label: 'SD',
      kelas: ['Kelas 1', 'Kelas 2', 'Kelas 3', 'Kelas 4', 'Kelas 5', 'Kelas 6'],
      mapel: ['Pendidikan Agama', 'Pendidikan Pancasila', 'Bahasa Indonesia', 'Matematika', 'IPAS', 'Seni Budaya', 'PJOK', 'Bahasa Inggris', 'Muatan Lokal']
    },
    {
      id: 'SMP', label: 'SMP',
      kelas: ['Kelas 7', 'Kelas 8', 'Kelas 9'],
      mapel: ['Pendidikan Agama', 'Pendidikan Pancasila', 'Bahasa Indonesia', 'Matematika', 'IPA', 'IPS', 'Seni Budaya', 'PJOK', 'Bahasa Inggris', 'Informatika', 'Prakarya']
    },
    {
      id: 'SMA', label: 'SMA',
      kelas: ['Kelas 10', 'Kelas 11', 'Kelas 12'],
      mapel: ['Pendidikan Agama', 'Pendidikan Pancasila', 'Bahasa Indonesia', 'Matematika', 'Fisika', 'Biologi', 'Kimia', 'Ekonomi', 'Geografi', 'Sosiologi', 'Sejarah', 'Informatika', 'Seni Budaya', 'PJOK', 'Bahasa Inggris']
    },
    {
      id: 'SMK', label: 'SMK', hasProgram: true,
      kelas: ['Kelas 10', 'Kelas 11', 'Kelas 12'],
      mapel: ['Pendidikan Agama', 'Pendidikan Pancasila', 'Bahasa Indonesia', 'Matematika', 'Informatika', 'Seni Budaya', 'PJOK', 'Bahasa Inggris', 'Projek IPAS', 'Projek Kreatif & Kewirausahaan', 'Konsentrasi Keahlian']
    }
  ],
  mapelCustomLabel: '✍️ Isi sendiri…',
  programPlaceholder: 'Contoh: Tata Boga / Akuntansi / Teknik Komputer & Jaringan',

  /* ---------- Tingkat kesulitan ---------- */
  kesulitan: [
    { id: 'Mudah', text: 'Mudah' },
    { id: 'Sedang', text: 'Sedang' },
    { id: 'Sulit', text: 'Sulit' },
    { id: 'Campuran', text: 'Campuran (mudah → sulit bertahap)' }
  ],

  /* ---------- Gaya visual (dikelompokkan agar mudah dicari) ---------- */
  gayaOtomatis: 'Otomatis dipilihkan AI',
  gayaVisual: [
    { group: 'Ceria & ramah anak', items: ['Kartun Ceria', 'Ilustrasi Buku Cerita', 'Chibi / Karakter Imut', 'Kawaii', 'Komik / Manga', 'Stiker Lucu'] },
    { group: 'Formal & profesional', items: ['Formal Korporat', 'Elegan Minimalis', 'Semi Formal Modern', 'Profesional Bersih', 'Akademik', 'Editorial / Majalah', 'Infografis Korporat'] },
    { group: '3D & dimensi', items: ['3D Disney', 'Clay', 'Low-poly', 'Diorama Miniatur', 'Isometrik 3D', '3D Water Color'] },
    { group: 'Seni tangan & tekstur', items: ['Crayon', 'Doodle', 'Line Art', 'Pop Art', 'Cat Minyak', 'Felt Art', 'Paper Cut', 'Kolase', 'Mozaik'] },
    { group: 'Retro, futuristik & budaya', items: ['Pixel Art', 'Neon Futuristik', 'Retro 90-an', 'Poster Sci-Fi Retro', 'Wayang'] },
    { group: 'Fotografi', items: ['Fotografi Produk', 'Fotografis Realistis'] }
  ],

  /* ---------- Fitur tambahan (boleh pilih lebih dari satu) ---------- */
  fitur: [
    { id: 'narasi', label: 'Narasi bersuara', detail: 'Narasi bersuara (text-to-speech Bahasa Indonesia yang membacakan soal & umpan balik, dengan tombol aktif/nonaktif)' },
    { id: 'bintang', label: 'Bintang', detail: 'Sistem bintang (1–3 bintang berdasarkan skor)' },
    { id: 'level', label: 'Level', detail: 'Level bertingkat (naik level secara bertahap)' },
    { id: 'rapor', label: 'Rapor', detail: 'Rapor hasil belajar di akhir (skor, jawaban benar/salah, ringkasan capaian, saran belajar ulang)' }
  ],

  /* ---------- Model AI: prompt tambahan, tombol, dan panduan ---------- */
  models: [
    {
      id: 'gemini', name: 'Gemini', button: 'Buka Gemini',
      url: 'https://gemini.google.com/app',
      prefillParam: null, // Gemini belum mendukung isi otomatis lewat URL
      prompt: 'wujudkan sebagai SATU file HTML interaktif lengkap (HTML+CSS+JS) — tampilan (kamu tentukan sendiri) — pilih yang paling sesuai untuk audiens & konteksnya; boleh kartun ceria untuk PAUD/SD, formal/elegan untuk SMA/SMK/dewasa, atau gaya lain yang lebih pas — jangan asal pukul rata, tombol besar ramah anak, skor & umpan balik otomatis, layar pembuka–bermain–hasil. Manfaatkan kemampuanmu membuat gambar untuk menghasilkan aset/ilustrasi game langsung bila diperlukan.',
      guide: [
        'Klik tombol <b>Buka Gemini</b> di bawah. Prompt otomatis tersalin ke clipboard.',
        'Di Gemini, masuk dengan akun Google, lalu <b>tempel</b> prompt di kolom chat (Ctrl+V, atau di HP tekan lama lalu pilih Tempel) dan kirim.',
        'Tunggu Gemini selesai menulis kode. Bila diminta, aktifkan <b>Canvas</b> agar game bisa langsung dimainkan di panel pratinjau.',
        'Untuk menyimpan: salin kode HTML-nya, tempel ke Notepad, simpan sebagai <b>game.html</b>, lalu buka di browser.',
        'Mau mengubah sesuatu? Ketik revisinya di chat yang sama, misalnya “perbesar tombol” atau “tambah 5 soal”.'
      ]
    },
    {
      id: 'canva', name: 'Canva Code', button: 'Buka Canva Code',
      url: 'https://www.canva.com/',
      prefillParam: null,
      prompt: 'wujudkan sebagai satu komponen HTML/CSS/JavaScript yang bisa dijalankan & di-embed di desain Canva — tampilan (kamu tentukan sendiri) — pilih yang paling sesuai untuk audiens & konteksnya; boleh kartun ceria untuk PAUD/SD, formal/elegan untuk SMA/SMK/dewasa, atau gaya lain yang lebih pas — jangan asal pukul rata, tombol besar ramah anak, skor otomatis, umpan balik langsung. Sertakan kode lengkapnya, dan sebutkan elemen/aset Canva yang cocok dipadukan.',
      guide: [
        'Klik tombol <b>Buka Canva Code</b> di bawah. Prompt otomatis tersalin ke clipboard.',
        'Di beranda Canva, pilih <b>Canva AI</b>, lalu klik <b>Code</b> (atau “Code for me”). Bisa juga lewat ikon <b>&lt;/&gt; Code</b> di dalam desain.',
        '<b>Tempel</b> prompt di kotak prompt (Ctrl+V, atau di HP tekan lama lalu pilih Tempel), lalu kirim.',
        'Setelah game jadi, tambahkan elemen Canva yang disarankan AI (ilustrasi, bingkai, stiker) lewat panel <b>Elemen</b>.',
        'Bagikan lewat tombol <b>Bagikan/Publikasikan</b>. Revisi bisa diketik di chat samping — setiap revisi menjadi versi baru.'
      ]
    },
    {
      id: 'claude', name: 'Claude', button: 'Buka Claude',
      url: 'https://claude.ai/new',
      prefillParam: 'q', // https://claude.ai/new?q=...
      prompt: 'wujudkan sebagai SATU artifact HTML interaktif yang lengkap & rapi (HTML+CSS+JS jadi satu file) — manfaatkan kekuatanmu menulis kode bersih. Tampilan (kamu tentukan sendiri) — pilih yang paling sesuai untuk audiens & konteksnya; boleh kartun ceria untuk PAUD/SD, formal/elegan untuk SMA/SMK/dewasa, atau gaya lain yang lebih pas — jangan asal pukul rata, tombol besar ramah anak, skor & umpan balik otomatis, ada layar pembuka–bermain–hasil, mulus di HP maupun proyektor.',
      guide: [
        'Klik tombol <b>Buka Claude</b> di bawah. Prompt otomatis tersalin (dan terisi di kolom chat bila memungkinkan).',
        'Masuk ke akun Claude. Jika kolom chat masih kosong, <b>tempel</b> prompt (Ctrl+V, atau di HP tekan lama lalu pilih Tempel), lalu kirim.',
        'Game akan muncul sebagai <b>artifact</b> di panel samping. Pastikan fitur Artifacts aktif di Pengaturan.',
        'Mainkan langsung di panel itu. Untuk menyimpan, buka artifact lalu <b>unduh</b> atau salin kodenya ke file <b>game.html</b>.',
        'Mau revisi? Ketik permintaanmu di chat yang sama, dan artifact akan diperbarui.'
      ]
    },
    {
      id: 'chatgpt', name: 'ChatGPT', button: 'Buka ChatGPT',
      url: 'https://chatgpt.com/',
      prefillParam: 'q', // https://chatgpt.com/?q=...
      prompt: 'wujudkan sebagai SATU file HTML interaktif lengkap (HTML+CSS+JS) — tampilan (kamu tentukan sendiri) — pilih yang paling sesuai untuk audiens & konteksnya; boleh kartun ceria untuk PAUD/SD, formal/elegan untuk SMA/SMK/dewasa, atau gaya lain yang lebih pas — jangan asal pukul rata, tombol besar ramah anak, skor & umpan balik otomatis, layar pembuka–bermain–hasil. Bila perlu, buatkan pula ilustrasi pendukung; rapikan agar mudah aku salin/jalankan (bisa juga di Canvas).',
      guide: [
        'Klik tombol <b>Buka ChatGPT</b> di bawah. Prompt otomatis tersalin (dan terisi di kolom chat bila memungkinkan).',
        'Masuk ke akun ChatGPT. Jika kolom chat masih kosong, <b>tempel</b> prompt (Ctrl+V, atau di HP tekan lama lalu pilih Tempel), lalu kirim.',
        'Agar kode rapi dan mudah dijalankan, minta ChatGPT membukanya di <b>Canvas</b> bila ia belum melakukannya.',
        'Salin seluruh kode HTML, simpan sebagai <b>game.html</b>, lalu buka di browser (Chrome disarankan).',
        'Revisi cukup diketik di chat yang sama, misalnya “ganti warna jadi lebih cerah”.'
      ]
    }
  ]
};
