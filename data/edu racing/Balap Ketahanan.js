MediaAjar.register({
  title: 'Balap Ketahanan',
  description: 'Balapan panjang dengan meter stamina.',
  order: 9,
  prompt: `Kamu adalah pengembang game edukasi sekaligus desainer pembelajaran yang berpengalaman. Buatkan game balapan edukasi untuk babak "Balap Ketahanan" berdasarkan data berikut:

[INPUT]

Mekanik permainan yang harus diterapkan:
1. Balapan banyak lap; meter stamina atau bahan bakar menipis seiring waktu dan diisi ulang oleh jawaban benar.
2. Kesulitan soal naik setiap beberapa lap; stamina rendah tampak pada visual (kecepatan menurun).
3. Jawaban salah beruntun memicu kondisi kritis dengan soal pemulihan yang lebih mudah agar permainan tetap adil.
4. Hasil menampilkan grafik stamina dan akurasi per lap.

Ketentuan umum:
- Seluruh visual, efek suara, dan istilah (kendaraan/pembalap, lintasan, finis) mengikuti Tema Balapan yang dipilih di atas.
- Jawaban benar membuat pembalap melaju lebih cepat; jawaban salah memperlambat sebentar dan tidak pernah membuat pemain tersingkir.
- Isi soal/konten harus sesuai jenjang, kelas, mata pelajaran, topik, tingkat kesulitan, dan bahan ajar di atas; bahasa mudah dipahami, tidak berulang, dan urutan serta posisi jawaban diacak setiap kali main.
- Jika bahan ajar diberikan, jadikan itu sumber utama isi; jika tidak ada, susun isi dari topik sesuai Kurikulum Merdeka dan pastikan faktanya akurat.
- Jawaban salah selalu diikuti jawaban yang benar beserta penjelasan singkat (1–2 kalimat) agar pemain belajar, bukan sekadar kalah.
- Terapkan Gaya Visual, Jumlah Soal, dan Fitur Tambahan sesuai data di atas. Bila Narasi bersuara dipilih, gunakan Web Speech API berbahasa Indonesia dengan tombol aktif/nonaktif; bila Bintang, Level, atau Rapor dipilih, tampilkan sesuai deskripsinya.
- Susun layar menjadi: pembuka (judul, petunjuk singkat, tombol Mulai) → bermain → hasil (skor, ringkasan capaian, tombol Main Lagi).
- Tampilan responsif untuk HP dan proyektor kelas: tombol besar, teks terbaca jelas, kontras baik, dan dapat dimainkan dengan sentuhan maupun mouse/keyboard.
- Semua aset visual dibuat sendiri lewat kode (SVG/CSS/emoji); jangan memakai gambar atau karakter berhak cipta, dan jangan memuat unsur kekerasan grafis.`
});
