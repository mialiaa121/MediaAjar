MediaAjar.register({
  title: 'Cari Kesalahan',
  description: 'Temukan dan perbaiki kesalahan pada teks, langkah, atau pernyataan.',
  order: 26,
  prompt: `Kamu adalah pengembang game edukasi sekaligus desainer pembelajaran yang berpengalaman. Buatkan game edukasi interaktif "Cari Kesalahan" berdasarkan data berikut:

[INPUT]

Mekanik permainan yang harus diterapkan:
1. Tampilkan teks, kalimat, langkah hitung, kode, atau pernyataan yang sengaja disisipi satu atau beberapa kesalahan; pemain mengetuk bagian yang salah.
2. Jenis kesalahan mengikuti mata pelajaran: ejaan dan tata bahasa (Bahasa), langkah penyelesaian (Matematika/IPA), miskonsepsi (IPA/IPS), galat sederhana (Informatika), atau prosedur dan istilah (SMK).
3. Setelah menandai, pemain memilih perbaikan yang tepat dari beberapa pilihan, sehingga yang dilatih adalah memperbaiki, bukan sekadar menemukan.
4. Mengetuk bagian yang sebenarnya benar mengurangi sedikit poin dan menjelaskan mengapa bagian itu sudah benar. Mudah: 1 kesalahan jelas; sulit: banyak kesalahan dan ada bagian benar yang tampak meragukan.

Ketentuan umum:
- Isi soal/konten harus sesuai jenjang, kelas, mata pelajaran, topik, tingkat kesulitan, dan bahan ajar di atas; bahasa mudah dipahami, tidak berulang, dan urutan serta posisi jawaban diacak setiap kali main.
- Jika bahan ajar diberikan, jadikan itu sumber utama isi; jika tidak ada, susun isi dari topik sesuai Kurikulum Merdeka dan pastikan faktanya akurat.
- Jawaban salah selalu diikuti jawaban yang benar beserta penjelasan singkat (1–2 kalimat) agar pemain belajar, bukan sekadar kalah.
- Terapkan Gaya Visual, Jumlah Soal, dan Fitur Tambahan sesuai data di atas. Bila Narasi bersuara dipilih, gunakan Web Speech API berbahasa Indonesia dengan tombol aktif/nonaktif; bila Bintang, Level, atau Rapor dipilih, tampilkan sesuai deskripsinya.
- Susun layar menjadi: pembuka (judul, petunjuk singkat, tombol Mulai) → bermain → hasil (skor, ringkasan capaian, tombol Main Lagi).
- Tampilan responsif untuk HP dan proyektor kelas: tombol besar, teks terbaca jelas, kontras baik, dan dapat dimainkan dengan sentuhan maupun mouse/keyboard.
- Semua aset visual dibuat sendiri lewat kode (SVG/CSS/emoji); jangan memakai gambar atau karakter berhak cipta, dan jangan memuat unsur kekerasan grafis.`
});
