MediaAjar.register({
  title: 'Beri Label Gambar',
  description: 'Seret label ke bagian diagram yang tepat.',
  order: 23,
  prompt: `Kamu adalah pengembang game edukasi sekaligus desainer pembelajaran yang berpengalaman. Buatkan game edukasi interaktif "Beri Label Gambar" berdasarkan data berikut:

[INPUT]

Mekanik permainan yang harus diterapkan:
1. Tampilkan diagram, bagan, atau peta sederhana buatan sendiri lewat SVG yang relevan dengan topik (mis. bagian tumbuhan, alat musik, rangkaian, alur proses) dengan titik penanda kosong. Jika topik tidak cocok digambar, gunakan bagan alur atau tabel berlabel.
2. Pemain menyeret label dari bank label ke titik yang tepat (atau mengetuk label lalu titik); label yang tepat menempel, yang salah kembali dengan getaran lembut.
3. Mudah: label sedikit dengan garis penunjuk jelas. Sulit: label banyak, ada label pengecoh, dan sebagian harus diketik.
4. Setelah selesai, setiap bagian pada gambar berlabel dapat diketuk untuk membaca fungsi atau penjelasan singkatnya. Pastikan diagram akurat secara ilmiah.

Ketentuan umum:
- Isi soal/konten harus sesuai jenjang, kelas, mata pelajaran, topik, tingkat kesulitan, dan bahan ajar di atas; bahasa mudah dipahami, tidak berulang, dan urutan serta posisi jawaban diacak setiap kali main.
- Jika bahan ajar diberikan, jadikan itu sumber utama isi; jika tidak ada, susun isi dari topik sesuai Kurikulum Merdeka dan pastikan faktanya akurat.
- Jawaban salah selalu diikuti jawaban yang benar beserta penjelasan singkat (1–2 kalimat) agar pemain belajar, bukan sekadar kalah.
- Terapkan Gaya Visual, Jumlah Soal, dan Fitur Tambahan sesuai data di atas. Bila Narasi bersuara dipilih, gunakan Web Speech API berbahasa Indonesia dengan tombol aktif/nonaktif; bila Bintang, Level, atau Rapor dipilih, tampilkan sesuai deskripsinya.
- Susun layar menjadi: pembuka (judul, petunjuk singkat, tombol Mulai) → bermain → hasil (skor, ringkasan capaian, tombol Main Lagi).
- Tampilan responsif untuk HP dan proyektor kelas: tombol besar, teks terbaca jelas, kontras baik, dan dapat dimainkan dengan sentuhan maupun mouse/keyboard.
- Semua aset visual dibuat sendiri lewat kode (SVG/CSS/emoji); jangan memakai gambar atau karakter berhak cipta, dan jangan memuat unsur kekerasan grafis.`
});
