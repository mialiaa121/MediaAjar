MediaAjar.register({
  title: 'Flashcard Kuis',
  description: 'Belajar dengan kartu flip, lalu diuji dari kartu yang sama.',
  order: 27,
  prompt: `Kamu adalah pengembang game edukasi sekaligus desainer pembelajaran yang berpengalaman. Buatkan game edukasi interaktif "Flashcard Kuis" berdasarkan data berikut:

[INPUT]

Mekanik permainan yang harus diterapkan:
1. Dua fase: Fase Belajar (kartu flip bolak-balik; geser ke kanan untuk Sudah Ingat dan ke kiri untuk Perlu Diulang) dan Fase Uji (kuis dari kartu yang sama).
2. Kartu Perlu Diulang muncul lebih sering (pengulangan berjarak sederhana), sedangkan kartu Sudah Ingat dikurangi.
3. Sisi depan berisi istilah atau pertanyaan; sisi belakang berisi jawaban beserta contoh singkat. Bila Narasi bersuara aktif, sediakan tombol putar suara (berguna untuk Bahasa Inggris).
4. Fase Uji berupa pilihan ganda atau isian singkat; hasil akhir menampilkan kartu yang masih lemah untuk dipelajari ulang.

Ketentuan umum:
- Isi soal/konten harus sesuai jenjang, kelas, mata pelajaran, topik, tingkat kesulitan, dan bahan ajar di atas; bahasa mudah dipahami, tidak berulang, dan urutan serta posisi jawaban diacak setiap kali main.
- Jika bahan ajar diberikan, jadikan itu sumber utama isi; jika tidak ada, susun isi dari topik sesuai Kurikulum Merdeka dan pastikan faktanya akurat.
- Jawaban salah selalu diikuti jawaban yang benar beserta penjelasan singkat (1–2 kalimat) agar pemain belajar, bukan sekadar kalah.
- Terapkan Gaya Visual, Jumlah Soal, dan Fitur Tambahan sesuai data di atas. Bila Narasi bersuara dipilih, gunakan Web Speech API berbahasa Indonesia dengan tombol aktif/nonaktif; bila Bintang, Level, atau Rapor dipilih, tampilkan sesuai deskripsinya.
- Susun layar menjadi: pembuka (judul, petunjuk singkat, tombol Mulai) → bermain → hasil (skor, ringkasan capaian, tombol Main Lagi).
- Tampilan responsif untuk HP dan proyektor kelas: tombol besar, teks terbaca jelas, kontras baik, dan dapat dimainkan dengan sentuhan maupun mouse/keyboard.
- Semua aset visual dibuat sendiri lewat kode (SVG/CSS/emoji); jangan memakai gambar atau karakter berhak cipta, dan jangan memuat unsur kekerasan grafis.`
});
