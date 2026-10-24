MediaAjar.register({
  title: 'Teka-Teki / Tebak Kata',
  description: 'Tebak kata dari petunjuk dengan kotak huruf.',
  order: 5,
  prompt: `Kamu adalah pengembang game edukasi sekaligus desainer pembelajaran yang berpengalaman. Buatkan game edukasi interaktif "Teka-Teki / Tebak Kata" berdasarkan data berikut:

[INPUT]

Mekanik permainan yang harus diterapkan:
1. Tampilkan petunjuk (definisi, ciri-ciri, atau gambar dari emoji/SVG) dan kotak huruf kosong; pemain menebak lewat keyboard huruf di layar.
2. Sediakan petunjuk tambahan (huruf pertama, jumlah huruf) yang mengurangi sedikit poin; salah tebak mengurangi nyawa berbentuk bintang atau hati, bukan gambar yang menakutkan.
3. Kata diambil dari istilah penting materi; kesulitan menentukan panjang kata dan kejelasan petunjuk.
4. Setelah kata terjawab atau nyawa habis, tampilkan kata beserta artinya.

Ketentuan umum:
- Isi soal/konten harus sesuai jenjang, kelas, mata pelajaran, topik, tingkat kesulitan, dan bahan ajar di atas; bahasa mudah dipahami, tidak berulang, dan urutan serta posisi jawaban diacak setiap kali main.
- Jika bahan ajar diberikan, jadikan itu sumber utama isi; jika tidak ada, susun isi dari topik sesuai Kurikulum Merdeka dan pastikan faktanya akurat.
- Jawaban salah selalu diikuti jawaban yang benar beserta penjelasan singkat (1–2 kalimat) agar pemain belajar, bukan sekadar kalah.
- Terapkan Gaya Visual, Jumlah Soal, dan Fitur Tambahan sesuai data di atas. Bila Narasi bersuara dipilih, gunakan Web Speech API berbahasa Indonesia dengan tombol aktif/nonaktif; bila Bintang, Level, atau Rapor dipilih, tampilkan sesuai deskripsinya.
- Susun layar menjadi: pembuka (judul, petunjuk singkat, tombol Mulai) → bermain → hasil (skor, ringkasan capaian, tombol Main Lagi).
- Tampilan responsif untuk HP dan proyektor kelas: tombol besar, teks terbaca jelas, kontras baik, dan dapat dimainkan dengan sentuhan maupun mouse/keyboard.
- Semua aset visual dibuat sendiri lewat kode (SVG/CSS/emoji); jangan memakai gambar atau karakter berhak cipta, dan jangan memuat unsur kekerasan grafis.`
});
