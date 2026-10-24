MediaAjar.register({
  title: 'Terbang Lewati Gerbang (Ketuk untuk Terbang)',
  description: 'Ketuk layar agar karakter terbang melewati gerbang jawaban yang benar.',
  order: 1,
  prompt: `Kamu adalah pengembang game edukasi sekaligus desainer pembelajaran yang berpengalaman. Buatkan game arkade edukasi "Terbang Lewati Gerbang (Ketuk untuk Terbang)" berdasarkan data berikut:

[INPUT]

Mekanik permainan yang harus diterapkan:
1. Karakter terbang otomatis ke kanan dan jatuh pelan; pemain mengetuk layar (atau menekan spasi) untuk terbang naik.
2. Soal tampil di atas layar; gerbang-gerbang berisi pilihan jawaban muncul di jalur terbang dan karakter harus melewati gerbang yang benar.
3. Menabrak gerbang yang salah atau tepi layar mengurangi satu nyawa.

Ketentuan umum:
- Dukung kontrol sentuhan (HP) sekaligus mouse/keyboard (proyektor), sediakan tombol Pause, dan beri tiga nyawa.
- Kecepatan dan kerumitan naik per level sesuai tingkat kesulitan, tetapi tetap adil dan mudah dikendalikan anak-anak.
- Penjelasan jawaban salah ditampilkan singkat agar alur permainan tidak terputus.
- Isi soal/konten harus sesuai jenjang, kelas, mata pelajaran, topik, tingkat kesulitan, dan bahan ajar di atas; bahasa mudah dipahami, tidak berulang, dan urutan serta posisi jawaban diacak setiap kali main.
- Jika bahan ajar diberikan, jadikan itu sumber utama isi; jika tidak ada, susun isi dari topik sesuai Kurikulum Merdeka dan pastikan faktanya akurat.
- Jawaban salah selalu diikuti jawaban yang benar beserta penjelasan singkat (1–2 kalimat) agar pemain belajar, bukan sekadar kalah.
- Terapkan Gaya Visual, Jumlah Soal, dan Fitur Tambahan sesuai data di atas. Bila Narasi bersuara dipilih, gunakan Web Speech API berbahasa Indonesia dengan tombol aktif/nonaktif; bila Bintang, Level, atau Rapor dipilih, tampilkan sesuai deskripsinya.
- Susun layar menjadi: pembuka (judul, petunjuk singkat, tombol Mulai) → bermain → hasil (skor, ringkasan capaian, tombol Main Lagi).
- Tampilan responsif untuk HP dan proyektor kelas: tombol besar, teks terbaca jelas, kontras baik, dan dapat dimainkan dengan sentuhan maupun mouse/keyboard.
- Semua aset visual dibuat sendiri lewat kode (SVG/CSS/emoji); jangan memakai gambar atau karakter berhak cipta, dan jangan memuat unsur kekerasan grafis.`
});
