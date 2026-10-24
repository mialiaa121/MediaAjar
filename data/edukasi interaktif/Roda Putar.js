MediaAjar.register({
  title: 'Roda Putar',
  description: 'Putar roda untuk menentukan soal atau bonus.',
  order: 16,
  prompt: `Kamu adalah pengembang game edukasi sekaligus desainer pembelajaran yang berpengalaman. Buatkan game edukasi interaktif "Roda Putar" berdasarkan data berikut:

[INPUT]

Mekanik permainan yang harus diterapkan:
1. Roda berwarna 6–12 segmen berputar dengan animasi halus lalu berhenti di satu segmen yang menentukan kategori soal atau bonus.
2. Jawaban benar memberi poin sesuai segmen; sediakan segmen khusus seperti Bonus 2x, Lewati, Putar Lagi, dan Kesempatan Kedua. Tidak ada segmen yang menghapus seluruh poin.
3. Dukung mode solo dan tim bergiliran; soal tidak boleh muncul dua kali.
4. Hasil menampilkan skor dan rekap soal per kategori.

Ketentuan umum:
- Isi soal/konten harus sesuai jenjang, kelas, mata pelajaran, topik, tingkat kesulitan, dan bahan ajar di atas; bahasa mudah dipahami, tidak berulang, dan urutan serta posisi jawaban diacak setiap kali main.
- Jika bahan ajar diberikan, jadikan itu sumber utama isi; jika tidak ada, susun isi dari topik sesuai Kurikulum Merdeka dan pastikan faktanya akurat.
- Jawaban salah selalu diikuti jawaban yang benar beserta penjelasan singkat (1–2 kalimat) agar pemain belajar, bukan sekadar kalah.
- Terapkan Gaya Visual, Jumlah Soal, dan Fitur Tambahan sesuai data di atas. Bila Narasi bersuara dipilih, gunakan Web Speech API berbahasa Indonesia dengan tombol aktif/nonaktif; bila Bintang, Level, atau Rapor dipilih, tampilkan sesuai deskripsinya.
- Susun layar menjadi: pembuka (judul, petunjuk singkat, tombol Mulai) → bermain → hasil (skor, ringkasan capaian, tombol Main Lagi).
- Tampilan responsif untuk HP dan proyektor kelas: tombol besar, teks terbaca jelas, kontras baik, dan dapat dimainkan dengan sentuhan maupun mouse/keyboard.
- Semua aset visual dibuat sendiri lewat kode (SVG/CSS/emoji); jangan memakai gambar atau karakter berhak cipta, dan jangan memuat unsur kekerasan grafis.`
});
