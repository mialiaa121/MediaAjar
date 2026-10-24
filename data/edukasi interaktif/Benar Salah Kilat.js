MediaAjar.register({
  title: 'Benar/Salah Kilat',
  description: 'Tentukan benar atau salah dengan cepat.',
  order: 19,
  prompt: `Kamu adalah pengembang game edukasi sekaligus desainer pembelajaran yang berpengalaman. Buatkan game edukasi interaktif "Benar/Salah Kilat" berdasarkan data berikut:

[INPUT]

Mekanik permainan yang harus diterapkan:
1. Pernyataan muncul satu per satu; pemain menggeser atau mengetuk Benar atau Salah sebelum bar waktu habis (lama waktu mengikuti kesulitan).
2. Beruntun benar menambah pengali poin; pernyataan salah sebaiknya berupa miskonsepsi umum agar mendidik.
3. Setelah tiap jawaban tampilkan penjelasan satu kalimat.
4. Rekap akhir mencantumkan pernyataan yang keliru beserta koreksinya.

Ketentuan umum:
- Isi soal/konten harus sesuai jenjang, kelas, mata pelajaran, topik, tingkat kesulitan, dan bahan ajar di atas; bahasa mudah dipahami, tidak berulang, dan urutan serta posisi jawaban diacak setiap kali main.
- Jika bahan ajar diberikan, jadikan itu sumber utama isi; jika tidak ada, susun isi dari topik sesuai Kurikulum Merdeka dan pastikan faktanya akurat.
- Jawaban salah selalu diikuti jawaban yang benar beserta penjelasan singkat (1–2 kalimat) agar pemain belajar, bukan sekadar kalah.
- Terapkan Gaya Visual, Jumlah Soal, dan Fitur Tambahan sesuai data di atas. Bila Narasi bersuara dipilih, gunakan Web Speech API berbahasa Indonesia dengan tombol aktif/nonaktif; bila Bintang, Level, atau Rapor dipilih, tampilkan sesuai deskripsinya.
- Susun layar menjadi: pembuka (judul, petunjuk singkat, tombol Mulai) → bermain → hasil (skor, ringkasan capaian, tombol Main Lagi).
- Tampilan responsif untuk HP dan proyektor kelas: tombol besar, teks terbaca jelas, kontras baik, dan dapat dimainkan dengan sentuhan maupun mouse/keyboard.
- Semua aset visual dibuat sendiri lewat kode (SVG/CSS/emoji); jangan memakai gambar atau karakter berhak cipta, dan jangan memuat unsur kekerasan grafis.`
});
