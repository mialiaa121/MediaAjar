MediaAjar.register({
  title: 'Labirin Jawaban',
  description: 'Jelajahi labirin dengan memilih jalur jawaban yang benar.',
  order: 9,
  prompt: `Kamu adalah pengembang game edukasi sekaligus desainer pembelajaran yang berpengalaman. Buatkan game edukasi interaktif "Labirin Jawaban" berdasarkan data berikut:

[INPUT]

Mekanik permainan yang harus diterapkan:
1. Pemain menggerakkan karakter (swipe, D-pad, atau tombol panah) melewati labirin; di persimpangan atau gerbang muncul soal dan tiap jalur berisi satu pilihan jawaban.
2. Jalur benar membuka rute menuju pintu keluar; jalur salah menjadi buntu atau terhalang sementara sambil menampilkan penjelasan.
3. Sediakan beberapa labirin dengan kerumitan naik sesuai kesulitan, serta bantuan terbatas (mis. petunjuk arah).
4. Hasil menampilkan skor, jumlah jalur benar, dan rekap soal.

Ketentuan umum:
- Isi soal/konten harus sesuai jenjang, kelas, mata pelajaran, topik, tingkat kesulitan, dan bahan ajar di atas; bahasa mudah dipahami, tidak berulang, dan urutan serta posisi jawaban diacak setiap kali main.
- Jika bahan ajar diberikan, jadikan itu sumber utama isi; jika tidak ada, susun isi dari topik sesuai Kurikulum Merdeka dan pastikan faktanya akurat.
- Jawaban salah selalu diikuti jawaban yang benar beserta penjelasan singkat (1–2 kalimat) agar pemain belajar, bukan sekadar kalah.
- Terapkan Gaya Visual, Jumlah Soal, dan Fitur Tambahan sesuai data di atas. Bila Narasi bersuara dipilih, gunakan Web Speech API berbahasa Indonesia dengan tombol aktif/nonaktif; bila Bintang, Level, atau Rapor dipilih, tampilkan sesuai deskripsinya.
- Susun layar menjadi: pembuka (judul, petunjuk singkat, tombol Mulai) → bermain → hasil (skor, ringkasan capaian, tombol Main Lagi).
- Tampilan responsif untuk HP dan proyektor kelas: tombol besar, teks terbaca jelas, kontras baik, dan dapat dimainkan dengan sentuhan maupun mouse/keyboard.
- Semua aset visual dibuat sendiri lewat kode (SVG/CSS/emoji); jangan memakai gambar atau karakter berhak cipta, dan jangan memuat unsur kekerasan grafis.`
});
