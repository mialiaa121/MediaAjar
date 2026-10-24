MediaAjar.register({
  title: 'Sambung Kata',
  description: 'Rantai kata dari istilah materi dengan petunjuk makna.',
  order: 29,
  prompt: `Kamu adalah pengembang game edukasi sekaligus desainer pembelajaran yang berpengalaman. Buatkan game edukasi interaktif "Sambung Kata" berdasarkan data berikut:

[INPUT]

Mekanik permainan yang harus diterapkan:
1. Pemain membentuk rantai kata: setiap kata baru diawali huruf (atau suku kata) terakhir dari kata sebelumnya, dengan petunjuk makna untuk tiap kata.
2. Pemain memilih dari bank huruf atau mengetik; rantai memanjang secara visual di layar.
3. Kata hanya berasal dari daftar istilah materi yang valid. Susun daftar yang memang dapat disambung dan validasi lewat kode agar rantai selalu mungkin diselesaikan.
4. Mudah: pilihan kata tersedia. Sulit: mengetik tanpa pilihan. Akhiri dengan rantai lengkap beserta arti tiap kata.

Ketentuan umum:
- Isi soal/konten harus sesuai jenjang, kelas, mata pelajaran, topik, tingkat kesulitan, dan bahan ajar di atas; bahasa mudah dipahami, tidak berulang, dan urutan serta posisi jawaban diacak setiap kali main.
- Jika bahan ajar diberikan, jadikan itu sumber utama isi; jika tidak ada, susun isi dari topik sesuai Kurikulum Merdeka dan pastikan faktanya akurat.
- Jawaban salah selalu diikuti jawaban yang benar beserta penjelasan singkat (1–2 kalimat) agar pemain belajar, bukan sekadar kalah.
- Terapkan Gaya Visual, Jumlah Soal, dan Fitur Tambahan sesuai data di atas. Bila Narasi bersuara dipilih, gunakan Web Speech API berbahasa Indonesia dengan tombol aktif/nonaktif; bila Bintang, Level, atau Rapor dipilih, tampilkan sesuai deskripsinya.
- Susun layar menjadi: pembuka (judul, petunjuk singkat, tombol Mulai) → bermain → hasil (skor, ringkasan capaian, tombol Main Lagi).
- Tampilan responsif untuk HP dan proyektor kelas: tombol besar, teks terbaca jelas, kontras baik, dan dapat dimainkan dengan sentuhan maupun mouse/keyboard.
- Semua aset visual dibuat sendiri lewat kode (SVG/CSS/emoji); jangan memakai gambar atau karakter berhak cipta, dan jangan memuat unsur kekerasan grafis.`
});
