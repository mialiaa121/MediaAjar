MediaAjar.register({
  title: 'Cari Kata',
  description: 'Temukan kata-kata kunci di dalam kisi huruf.',
  order: 11,
  prompt: `Kamu adalah pengembang game edukasi sekaligus desainer pembelajaran yang berpengalaman. Buatkan game edukasi interaktif "Cari Kata" berdasarkan data berikut:

[INPUT]

Mekanik permainan yang harus diterapkan:
1. Buat kisi huruf (ukuran sesuai kesulitan) yang menyembunyikan kata-kata kunci materi secara mendatar, menurun, dan diagonal; penempatan kata dibuat lewat kode tanpa bentrok.
2. Pemain menggeser jari/mouse untuk memilih huruf; kata yang ditemukan tersorot dan dicoret dari daftar.
3. Daftar bisa berupa kata langsung (mudah) atau definisi/petunjuk (sulit); ketuk kata untuk melihat artinya.
4. Sediakan petunjuk terbatas dan, bila sesuai, penghitung waktu yang ramah.

Ketentuan umum:
- Isi soal/konten harus sesuai jenjang, kelas, mata pelajaran, topik, tingkat kesulitan, dan bahan ajar di atas; bahasa mudah dipahami, tidak berulang, dan urutan serta posisi jawaban diacak setiap kali main.
- Jika bahan ajar diberikan, jadikan itu sumber utama isi; jika tidak ada, susun isi dari topik sesuai Kurikulum Merdeka dan pastikan faktanya akurat.
- Jawaban salah selalu diikuti jawaban yang benar beserta penjelasan singkat (1–2 kalimat) agar pemain belajar, bukan sekadar kalah.
- Terapkan Gaya Visual, Jumlah Soal, dan Fitur Tambahan sesuai data di atas. Bila Narasi bersuara dipilih, gunakan Web Speech API berbahasa Indonesia dengan tombol aktif/nonaktif; bila Bintang, Level, atau Rapor dipilih, tampilkan sesuai deskripsinya.
- Susun layar menjadi: pembuka (judul, petunjuk singkat, tombol Mulai) → bermain → hasil (skor, ringkasan capaian, tombol Main Lagi).
- Tampilan responsif untuk HP dan proyektor kelas: tombol besar, teks terbaca jelas, kontras baik, dan dapat dimainkan dengan sentuhan maupun mouse/keyboard.
- Semua aset visual dibuat sendiri lewat kode (SVG/CSS/emoji); jangan memakai gambar atau karakter berhak cipta, dan jangan memuat unsur kekerasan grafis.`
});
