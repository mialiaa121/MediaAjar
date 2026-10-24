MediaAjar.register({
  title: 'Duel Satu Lawan Satu',
  description: 'Adu cepat head-to-head dengan soal yang sama.',
  order: 6,
  prompt: `Kamu adalah pengembang game edukasi sekaligus desainer pembelajaran yang berpengalaman. Buatkan game balapan edukasi untuk babak "Duel Satu Lawan Satu" berdasarkan data berikut:

[INPUT]

Mekanik permainan yang harus diterapkan:
1. Dua pembalap (pemain melawan bot, atau dua tim di satu layar) berlaga di lintasan paralel dengan soal yang sama untuk keduanya.
2. Jawaban benar yang lebih cepat mendapat boost lebih besar; bila keduanya benar, selisih waktu menentukan; bila keduanya salah, tidak ada yang maju.
3. Format best-of 3 atau 5 lap pendek, dengan garis selisih jarak dan replay singkat tiap lap.
4. Hasil menampilkan pemenang, skor adu cepat, dan rekap soal.

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
