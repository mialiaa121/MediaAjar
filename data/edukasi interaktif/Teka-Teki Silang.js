MediaAjar.register({
  title: 'Teka-Teki Silang',
  description: 'Isi kisi silang dengan petunjuk mendatar dan menurun.',
  order: 8,
  prompt: `Kamu adalah pengembang game edukasi sekaligus desainer pembelajaran yang berpengalaman. Buatkan game edukasi interaktif "Teka-Teki Silang" berdasarkan data berikut:

[INPUT]

Mekanik permainan yang harus diterapkan:
1. Buat kisi teka-teki silang yang valid (kata saling bersilang secara konsisten) dengan nomor dan daftar petunjuk Mendatar/Menurun dari istilah materi; ukuran kisi dan jumlah kata menyesuaikan kesulitan (sekitar 5–15 kata). Validasi penempatan kata lewat kode agar tidak ada huruf yang bentrok.
2. Ketuk kotak lalu ketik huruf (sediakan keyboard layar untuk HP); sorot kata aktif beserta petunjuknya.
3. Sediakan tombol Cek Jawaban, Tampilkan Satu Huruf (terbatas), dan penanda kata yang sudah selesai.
4. Hasil menampilkan skor, kata yang benar, kunci jawaban, dan arti tiap kata.

Ketentuan umum:
- Isi soal/konten harus sesuai jenjang, kelas, mata pelajaran, topik, tingkat kesulitan, dan bahan ajar di atas; bahasa mudah dipahami, tidak berulang, dan urutan serta posisi jawaban diacak setiap kali main.
- Jika bahan ajar diberikan, jadikan itu sumber utama isi; jika tidak ada, susun isi dari topik sesuai Kurikulum Merdeka dan pastikan faktanya akurat.
- Jawaban salah selalu diikuti jawaban yang benar beserta penjelasan singkat (1–2 kalimat) agar pemain belajar, bukan sekadar kalah.
- Terapkan Gaya Visual, Jumlah Soal, dan Fitur Tambahan sesuai data di atas. Bila Narasi bersuara dipilih, gunakan Web Speech API berbahasa Indonesia dengan tombol aktif/nonaktif; bila Bintang, Level, atau Rapor dipilih, tampilkan sesuai deskripsinya.
- Susun layar menjadi: pembuka (judul, petunjuk singkat, tombol Mulai) → bermain → hasil (skor, ringkasan capaian, tombol Main Lagi).
- Tampilan responsif untuk HP dan proyektor kelas: tombol besar, teks terbaca jelas, kontras baik, dan dapat dimainkan dengan sentuhan maupun mouse/keyboard.
- Semua aset visual dibuat sendiri lewat kode (SVG/CSS/emoji); jangan memakai gambar atau karakter berhak cipta, dan jangan memuat unsur kekerasan grafis.`
});
