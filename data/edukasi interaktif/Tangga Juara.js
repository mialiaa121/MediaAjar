MediaAjar.register({
  title: 'Tangga Juara',
  description: 'Kuis bertingkat dengan tangga hadiah dan bantuan sekali pakai.',
  order: 21,
  prompt: `Kamu adalah pengembang game edukasi sekaligus desainer pembelajaran yang berpengalaman. Buatkan game edukasi interaktif "Tangga Juara" berdasarkan data berikut:

[INPUT]

Mekanik permainan yang harus diterapkan:
1. Rangkaian 10–15 soal pilihan ganda dengan tingkat kesulitan yang naik; tampilkan tangga poin di samping dan titik aman (checkpoint) setiap beberapa soal.
2. Sediakan tiga bantuan sekali pakai: 50:50, Tanya Kelas (grafik suara simulasi yang akurasinya mengikuti kesulitan soal), dan Ganti Soal.
3. Jawaban dikunci lebih dulu dengan tombol Kunci Jawaban, lalu diungkap dengan jeda dramatis singkat.
4. Jawaban salah mengembalikan pemain ke checkpoint terakhir disertai penjelasan, bukan langsung berakhir. Sediakan mode kelas di mana guru menekan pilihan atas nama tim. Jangan memakai nama atau logo acara TV tertentu.

Ketentuan umum:
- Isi soal/konten harus sesuai jenjang, kelas, mata pelajaran, topik, tingkat kesulitan, dan bahan ajar di atas; bahasa mudah dipahami, tidak berulang, dan urutan serta posisi jawaban diacak setiap kali main.
- Jika bahan ajar diberikan, jadikan itu sumber utama isi; jika tidak ada, susun isi dari topik sesuai Kurikulum Merdeka dan pastikan faktanya akurat.
- Jawaban salah selalu diikuti jawaban yang benar beserta penjelasan singkat (1–2 kalimat) agar pemain belajar, bukan sekadar kalah.
- Terapkan Gaya Visual, Jumlah Soal, dan Fitur Tambahan sesuai data di atas. Bila Narasi bersuara dipilih, gunakan Web Speech API berbahasa Indonesia dengan tombol aktif/nonaktif; bila Bintang, Level, atau Rapor dipilih, tampilkan sesuai deskripsinya.
- Susun layar menjadi: pembuka (judul, petunjuk singkat, tombol Mulai) → bermain → hasil (skor, ringkasan capaian, tombol Main Lagi).
- Tampilan responsif untuk HP dan proyektor kelas: tombol besar, teks terbaca jelas, kontras baik, dan dapat dimainkan dengan sentuhan maupun mouse/keyboard.
- Semua aset visual dibuat sendiri lewat kode (SVG/CSS/emoji); jangan memakai gambar atau karakter berhak cipta, dan jangan memuat unsur kekerasan grafis.`
});
