MediaAjar.register({
  title: 'Cocokkan Pasangan',
  description: 'Menjodohkan dua kolom: istilah–arti, soal–jawaban, gambar–nama.',
  order: 3,
  prompt: `Kamu adalah pengembang game edukasi sekaligus desainer pembelajaran yang berpengalaman. Buatkan game edukasi interaktif "Cocokkan Pasangan" berdasarkan data berikut:

[INPUT]

Mekanik permainan yang harus diterapkan:
1. Tampilkan dua kelompok kartu/kolom yang harus dipasangkan (istilah–pengertian, soal–jawaban, atau gambar–nama); pemain memilih satu kartu dari tiap sisi atau menyeret kartu ke pasangannya.
2. Pasangan benar terkunci dengan animasi dan suara; pasangan salah bergetar lalu kembali.
3. Bagi permainan menjadi beberapa ronde kecil (4–6 pasangan per ronde); sediakan tombol petunjuk dengan jumlah terbatas.
4. Setelah semua cocok, tampilkan ringkasan: skor, jumlah salah, dan daftar pasangan beserta penjelasan singkatnya.

Ketentuan umum:
- Isi soal/konten harus sesuai jenjang, kelas, mata pelajaran, topik, tingkat kesulitan, dan bahan ajar di atas; bahasa mudah dipahami, tidak berulang, dan urutan serta posisi jawaban diacak setiap kali main.
- Jika bahan ajar diberikan, jadikan itu sumber utama isi; jika tidak ada, susun isi dari topik sesuai Kurikulum Merdeka dan pastikan faktanya akurat.
- Jawaban salah selalu diikuti jawaban yang benar beserta penjelasan singkat (1–2 kalimat) agar pemain belajar, bukan sekadar kalah.
- Terapkan Gaya Visual, Jumlah Soal, dan Fitur Tambahan sesuai data di atas. Bila Narasi bersuara dipilih, gunakan Web Speech API berbahasa Indonesia dengan tombol aktif/nonaktif; bila Bintang, Level, atau Rapor dipilih, tampilkan sesuai deskripsinya.
- Susun layar menjadi: pembuka (judul, petunjuk singkat, tombol Mulai) → bermain → hasil (skor, ringkasan capaian, tombol Main Lagi).
- Tampilan responsif untuk HP dan proyektor kelas: tombol besar, teks terbaca jelas, kontras baik, dan dapat dimainkan dengan sentuhan maupun mouse/keyboard.
- Semua aset visual dibuat sendiri lewat kode (SVG/CSS/emoji); jangan memakai gambar atau karakter berhak cipta, dan jangan memuat unsur kekerasan grafis.`
});
