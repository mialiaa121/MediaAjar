MediaAjar.register({
  title: 'Keliling Dunia',
  description: 'Kumpulkan stempel paspor dari kota ke kota.',
  order: 9,
  prompt: `Kamu adalah pengembang game edukasi sekaligus desainer pembelajaran yang berpengalaman. Buatkan game papan edukasi bergaya KELILING DUNIA berdasarkan data berikut:

[INPUT]

Mekanik permainan yang harus diterapkan:
1. Papan jalur melingkar berisi 20–30 kota atau negara; pemain bergerak dengan dadu dan memiliki paspor untuk stempel.
2. Di tiap kota, pemain memperoleh stempel dengan menjawab soal bertema materi; stempel disertai fakta singkat tentang kota tersebut.
3. Kartu kejadian (tiket pesawat cepat, kereta ekspres, penundaan ringan) menambah variasi. Pastikan fakta geografis akurat.
4. Pemenang adalah pemain dengan stempel terbanyak setelah satu atau dua putaran penuh.

Ketentuan umum:
- Dukung 2–4 pemain atau tim di satu layar; pemain dapat mengetik nama/tim di layar pembuka dan giliran selalu jelas ditandai.
- Setiap giliran melibatkan satu soal sebelum aksi permainan dijalankan, sehingga belajar menjadi bagian dari permainan.
- Akhiri dengan pengumuman pemenang, skor tiap pemain, dan rekap soal.
- Isi soal/konten harus sesuai jenjang, kelas, mata pelajaran, topik, tingkat kesulitan, dan bahan ajar di atas; bahasa mudah dipahami, tidak berulang, dan urutan serta posisi jawaban diacak setiap kali main.
- Jika bahan ajar diberikan, jadikan itu sumber utama isi; jika tidak ada, susun isi dari topik sesuai Kurikulum Merdeka dan pastikan faktanya akurat.
- Jawaban salah selalu diikuti jawaban yang benar beserta penjelasan singkat (1–2 kalimat) agar pemain belajar, bukan sekadar kalah.
- Terapkan Gaya Visual, Jumlah Soal, dan Fitur Tambahan sesuai data di atas. Bila Narasi bersuara dipilih, gunakan Web Speech API berbahasa Indonesia dengan tombol aktif/nonaktif; bila Bintang, Level, atau Rapor dipilih, tampilkan sesuai deskripsinya.
- Susun layar menjadi: pembuka (judul, petunjuk singkat, tombol Mulai) → bermain → hasil (skor, ringkasan capaian, tombol Main Lagi).
- Tampilan responsif untuk HP dan proyektor kelas: tombol besar, teks terbaca jelas, kontras baik, dan dapat dimainkan dengan sentuhan maupun mouse/keyboard.
- Semua aset visual dibuat sendiri lewat kode (SVG/CSS/emoji); jangan memakai gambar atau karakter berhak cipta, dan jangan memuat unsur kekerasan grafis.`
});
