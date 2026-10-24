MediaAjar.register({
  title: 'Memory Kartu',
  description: 'Balik kartu dan temukan pasangan konsep yang berkaitan.',
  order: 20,
  prompt: `Kamu adalah pengembang game edukasi sekaligus desainer pembelajaran yang berpengalaman. Buatkan game edukasi interaktif "Memory Kartu" berdasarkan data berikut:

[INPUT]

Mekanik permainan yang harus diterapkan:
1. Sediakan kisi kartu tertutup (mis. 3x4 untuk mudah, 4x4 untuk sedang, 4x5 atau 5x6 untuk sulit). Pemain membalik dua kartu per giliran untuk mencari pasangan yang berhubungan secara konsep (istilah–arti, gambar–nama, soal–jawaban), bukan sekadar gambar kembar.
2. Saat pasangan cocok, tampilkan kartu penjelasan singkat sebelum kartu menghilang agar kecocokan menjadi momen belajar.
3. Hitung langkah dan waktu; bintang diberikan berdasarkan efisiensi langkah. Sediakan tombol intip dengan jumlah terbatas.
4. Dukung 1 pemain atau 2 pemain/tim bergiliran (yang berhasil mencocokkan mendapat giliran lagi). Desain kartu tidak boleh bergantung pada warna saja agar mudah dibedakan.

Ketentuan umum:
- Isi soal/konten harus sesuai jenjang, kelas, mata pelajaran, topik, tingkat kesulitan, dan bahan ajar di atas; bahasa mudah dipahami, tidak berulang, dan urutan serta posisi jawaban diacak setiap kali main.
- Jika bahan ajar diberikan, jadikan itu sumber utama isi; jika tidak ada, susun isi dari topik sesuai Kurikulum Merdeka dan pastikan faktanya akurat.
- Jawaban salah selalu diikuti jawaban yang benar beserta penjelasan singkat (1–2 kalimat) agar pemain belajar, bukan sekadar kalah.
- Terapkan Gaya Visual, Jumlah Soal, dan Fitur Tambahan sesuai data di atas. Bila Narasi bersuara dipilih, gunakan Web Speech API berbahasa Indonesia dengan tombol aktif/nonaktif; bila Bintang, Level, atau Rapor dipilih, tampilkan sesuai deskripsinya.
- Susun layar menjadi: pembuka (judul, petunjuk singkat, tombol Mulai) → bermain → hasil (skor, ringkasan capaian, tombol Main Lagi).
- Tampilan responsif untuk HP dan proyektor kelas: tombol besar, teks terbaca jelas, kontras baik, dan dapat dimainkan dengan sentuhan maupun mouse/keyboard.
- Semua aset visual dibuat sendiri lewat kode (SVG/CSS/emoji); jangan memakai gambar atau karakter berhak cipta, dan jangan memuat unsur kekerasan grafis.`
});
