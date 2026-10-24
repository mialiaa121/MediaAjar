MediaAjar.register({
  title: 'Balap Poin / Kumpul Poin',
  description: 'Kumpulkan poin sebanyak mungkin dengan menjawab soal.',
  order: 14,
  prompt: `Kamu adalah pengembang game edukasi sekaligus desainer pembelajaran yang berpengalaman. Buatkan game edukasi interaktif "Balap Poin / Kumpul Poin" berdasarkan data berikut:

[INPUT]

Mekanik permainan yang harus diterapkan:
1. Pemain mengumpulkan poin sebanyak mungkin dalam beberapa ronde; soal bernilai berbeda sesuai tingkat kesulitannya (mis. 10/20/30 poin).
2. Jawaban benar beruntun menambah pengali (kombo); jawaban salah menghentikan kombo tanpa mengurangi poin dasar.
3. Tampilkan papan skor melawan bot atau target poin, lengkap dengan power-up kecil (poin 2x, tambahan waktu).
4. Dapat dimainkan solo atau tim; hasil menampilkan peringkat dan rekap soal.

Ketentuan umum:
- Isi soal/konten harus sesuai jenjang, kelas, mata pelajaran, topik, tingkat kesulitan, dan bahan ajar di atas; bahasa mudah dipahami, tidak berulang, dan urutan serta posisi jawaban diacak setiap kali main.
- Jika bahan ajar diberikan, jadikan itu sumber utama isi; jika tidak ada, susun isi dari topik sesuai Kurikulum Merdeka dan pastikan faktanya akurat.
- Jawaban salah selalu diikuti jawaban yang benar beserta penjelasan singkat (1–2 kalimat) agar pemain belajar, bukan sekadar kalah.
- Terapkan Gaya Visual, Jumlah Soal, dan Fitur Tambahan sesuai data di atas. Bila Narasi bersuara dipilih, gunakan Web Speech API berbahasa Indonesia dengan tombol aktif/nonaktif; bila Bintang, Level, atau Rapor dipilih, tampilkan sesuai deskripsinya.
- Susun layar menjadi: pembuka (judul, petunjuk singkat, tombol Mulai) → bermain → hasil (skor, ringkasan capaian, tombol Main Lagi).
- Tampilan responsif untuk HP dan proyektor kelas: tombol besar, teks terbaca jelas, kontras baik, dan dapat dimainkan dengan sentuhan maupun mouse/keyboard.
- Semua aset visual dibuat sendiri lewat kode (SVG/CSS/emoji); jangan memakai gambar atau karakter berhak cipta, dan jangan memuat unsur kekerasan grafis.`
});
