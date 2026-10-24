MediaAjar.register({
  title: 'Ular Tangga',
  description: 'Ular tangga multi-pemain dengan kotak soal.',
  order: 2,
  prompt: `Kamu adalah pengembang game edukasi sekaligus desainer pembelajaran yang berpengalaman. Buatkan game papan edukasi bergaya ULAR TANGGA berdasarkan data berikut:

[INPUT]

Mekanik permainan yang harus diterapkan:
1. Papan 100 kotak dengan dadu animasi untuk 2–4 pemain/tim bergiliran.
2. Mendarat di kotak mana pun menuntut jawaban soal: benar memberi bonus langkah kecil, salah tidak mengurangi langkah.
3. Kaki tangga hanya dapat dinaiki bila jawaban benar; mendarat di kepala ular, jawaban benar membuat pion selamat tetap di tempat, jawaban salah membuatnya turun.
4. Pemenang adalah yang pertama mencapai kotak 100.

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
