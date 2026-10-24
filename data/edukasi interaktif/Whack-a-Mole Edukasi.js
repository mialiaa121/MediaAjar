MediaAjar.register({
  title: 'Whack-a-Mole Edukasi',
  description: 'Ketuk karakter yang membawa jawaban benar.',
  order: 18,
  prompt: `Kamu adalah pengembang game edukasi sekaligus desainer pembelajaran yang berpengalaman. Buatkan game edukasi interaktif "Whack-a-Mole Edukasi" berdasarkan data berikut:

[INPUT]

Mekanik permainan yang harus diterapkan:
1. Sediakan lubang 3x3 atau 3x4; karakter lucu muncul membawa papan jawaban, sementara soal tampil di atas. Pemain mengetuk karakter yang membawa jawaban benar.
2. Salah ketuk mengurangi poin kecil disertai getaran halus; efek ketukan berupa letupan bintang, tanpa menyakiti karakter.
3. Kecepatan kemunculan naik sesuai kesulitan; satu ronde berisi 5–10 soal dengan kombo.
4. Hasil menampilkan skor, akurasi, dan rekap soal.

Ketentuan umum:
- Isi soal/konten harus sesuai jenjang, kelas, mata pelajaran, topik, tingkat kesulitan, dan bahan ajar di atas; bahasa mudah dipahami, tidak berulang, dan urutan serta posisi jawaban diacak setiap kali main.
- Jika bahan ajar diberikan, jadikan itu sumber utama isi; jika tidak ada, susun isi dari topik sesuai Kurikulum Merdeka dan pastikan faktanya akurat.
- Jawaban salah selalu diikuti jawaban yang benar beserta penjelasan singkat (1–2 kalimat) agar pemain belajar, bukan sekadar kalah.
- Terapkan Gaya Visual, Jumlah Soal, dan Fitur Tambahan sesuai data di atas. Bila Narasi bersuara dipilih, gunakan Web Speech API berbahasa Indonesia dengan tombol aktif/nonaktif; bila Bintang, Level, atau Rapor dipilih, tampilkan sesuai deskripsinya.
- Susun layar menjadi: pembuka (judul, petunjuk singkat, tombol Mulai) → bermain → hasil (skor, ringkasan capaian, tombol Main Lagi).
- Tampilan responsif untuk HP dan proyektor kelas: tombol besar, teks terbaca jelas, kontras baik, dan dapat dimainkan dengan sentuhan maupun mouse/keyboard.
- Semua aset visual dibuat sendiri lewat kode (SVG/CSS/emoji); jangan memakai gambar atau karakter berhak cipta, dan jangan memuat unsur kekerasan grafis.`
});
