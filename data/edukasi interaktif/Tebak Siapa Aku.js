MediaAjar.register({
  title: 'Tebak Siapa Aku',
  description: 'Tebak objek rahasia dari petunjuk yang terbuka bertahap.',
  order: 28,
  prompt: `Kamu adalah pengembang game edukasi sekaligus desainer pembelajaran yang berpengalaman. Buatkan game edukasi interaktif "Tebak Siapa Aku" berdasarkan data berikut:

[INPUT]

Mekanik permainan yang harus diterapkan:
1. Satu objek rahasia dari materi (tokoh, benda, hewan, tempat, atau konsep); 5–6 petunjuk dibuka satu per satu dari yang paling samar ke yang paling jelas.
2. Semakin sedikit petunjuk yang dibuka saat menebak benar, semakin tinggi poinnya; tebakan salah mengurangi sedikit poin dan membuka petunjuk berikutnya.
3. Mudah: pilihan jawaban tersedia. Sulit: mengetik jawaban dengan toleransi ejaan.
4. Petunjuk harus benar dan tidak ambigu. Setelah terjawab, tampilkan kartu profil singkat objek tersebut.

Ketentuan umum:
- Isi soal/konten harus sesuai jenjang, kelas, mata pelajaran, topik, tingkat kesulitan, dan bahan ajar di atas; bahasa mudah dipahami, tidak berulang, dan urutan serta posisi jawaban diacak setiap kali main.
- Jika bahan ajar diberikan, jadikan itu sumber utama isi; jika tidak ada, susun isi dari topik sesuai Kurikulum Merdeka dan pastikan faktanya akurat.
- Jawaban salah selalu diikuti jawaban yang benar beserta penjelasan singkat (1–2 kalimat) agar pemain belajar, bukan sekadar kalah.
- Terapkan Gaya Visual, Jumlah Soal, dan Fitur Tambahan sesuai data di atas. Bila Narasi bersuara dipilih, gunakan Web Speech API berbahasa Indonesia dengan tombol aktif/nonaktif; bila Bintang, Level, atau Rapor dipilih, tampilkan sesuai deskripsinya.
- Susun layar menjadi: pembuka (judul, petunjuk singkat, tombol Mulai) → bermain → hasil (skor, ringkasan capaian, tombol Main Lagi).
- Tampilan responsif untuk HP dan proyektor kelas: tombol besar, teks terbaca jelas, kontras baik, dan dapat dimainkan dengan sentuhan maupun mouse/keyboard.
- Semua aset visual dibuat sendiri lewat kode (SVG/CSS/emoji); jangan memakai gambar atau karakter berhak cipta, dan jangan memuat unsur kekerasan grafis.`
});
