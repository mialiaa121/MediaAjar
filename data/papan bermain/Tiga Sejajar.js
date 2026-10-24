MediaAjar.register({
  title: 'Tiga Sejajar',
  description: 'Tic-tac-toe berisi soal pada tiap petak.',
  order: 6,
  prompt: `Kamu adalah pengembang game edukasi sekaligus desainer pembelajaran yang berpengalaman. Buatkan game papan edukasi bergaya TIGA SEJAJAR berdasarkan data berikut:

[INPUT]

Mekanik permainan yang harus diterapkan:
1. Kisi 3x3 untuk mudah, 4x4 atau 5x5 untuk sedang dan sulit (menang dengan 3 atau 4 tanda sejajar); dua pemain/tim memakai tanda X dan O.
2. Memilih petak berarti menjawab soal: jawaban benar menaruh tanda, jawaban salah membuat petak terbuka bagi lawan untuk diperebutkan dengan soal yang sama.
3. Format best-of 3; ada animasi garis kemenangan dan layar rekap soal.

Ketentuan umum:
- Dukung 2–4 pemain atau tim di satu layar; pemain dapat mengetik nama/tim di layar pembuka dan giliran selalu jelas ditandai.
- Setiap giliran melibatkan satu soal sebelum aksi permainan dijalankan, sehingga belajar menjadi bagian dari permainan.
- Akhiri dengan pengumuman pemenang, skor tiap pemain, dan rekap soal.
- Isi soal/konten harus sesuai jenjang, kelas, mata pelajaran, topik, tingkat kesulitan, dan bahan ajar di atas; bahasa mudah dipahami, tidak berulang, dan urutan serta posisi jawaban diacak setiap kali main.
- Jika bahan ajar diberikan, jadikan itu sumber utama isi; jika tidak ada, susun isi dari topik sesuai Kurikulum Merdeka dan pastikan faktanya akurat.
- Jawaban salah selalu diikuti jawaban yang benar beserta penjelasan singkat (1–2 kalimat) agar pemain belajar, bukan sekadar kalah.
- Terapkan Gaya Visual, Jumlah Soal, dan Fitur Tambahan sesuai data di atas. Bila Narasi bersuara dipilih, gunakan Web Speech API berbahasa Indonesia dengan tombol aktif/nonaktif; bila Bintang, Level, atau Rapor dipilih, tampilkan sesuai deskripsinya.
- Susun layar menjadi: pembuka (judul, petunjuk singkat, tombol Mulai) → bermain → hasil (skor, ringkasan capaian, tombol Main Lagi).
- Tampilan responsif untuk HP dan proyektor kelas: tombol besar, teks terbaca jelas, kontras baik, dan dapat dimainkan dengan sentuhan maupun mouse/keyboard.
- Semua aset visual dibuat sendiri lewat kode (SVG/CSS/emoji); jangan memakai gambar atau karakter berhak cipta, dan jangan memuat unsur kekerasan grafis.`
});
