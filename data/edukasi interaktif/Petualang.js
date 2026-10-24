MediaAjar.register({
  title: 'Petualang',
  description: 'Petualangan di peta dengan pos-pos soal.',
  order: 10,
  prompt: `Kamu adalah pengembang game edukasi sekaligus desainer pembelajaran yang berpengalaman. Buatkan game edukasi interaktif "Petualang" berdasarkan data berikut:

[INPUT]

Mekanik permainan yang harus diterapkan:
1. Buat peta petualangan bertema materi (mis. desa → hutan → gua → puncak); karakter bergerak antarpos, dan tiap pos berisi soal atau tantangan.
2. Jawaban benar memberi koin atau item dan membuka pos berikutnya; jawaban salah mengurangi energi, bukan game over keras, dan pemain boleh mengulang setelah membaca penjelasan.
3. Sediakan inventaris sederhana dan satu tantangan akhir yang menggabungkan seluruh materi.
4. Hasil menampilkan item terkumpul, skor, dan ringkasan perjalanan.

Ketentuan umum:
- Isi soal/konten harus sesuai jenjang, kelas, mata pelajaran, topik, tingkat kesulitan, dan bahan ajar di atas; bahasa mudah dipahami, tidak berulang, dan urutan serta posisi jawaban diacak setiap kali main.
- Jika bahan ajar diberikan, jadikan itu sumber utama isi; jika tidak ada, susun isi dari topik sesuai Kurikulum Merdeka dan pastikan faktanya akurat.
- Jawaban salah selalu diikuti jawaban yang benar beserta penjelasan singkat (1–2 kalimat) agar pemain belajar, bukan sekadar kalah.
- Terapkan Gaya Visual, Jumlah Soal, dan Fitur Tambahan sesuai data di atas. Bila Narasi bersuara dipilih, gunakan Web Speech API berbahasa Indonesia dengan tombol aktif/nonaktif; bila Bintang, Level, atau Rapor dipilih, tampilkan sesuai deskripsinya.
- Susun layar menjadi: pembuka (judul, petunjuk singkat, tombol Mulai) → bermain → hasil (skor, ringkasan capaian, tombol Main Lagi).
- Tampilan responsif untuk HP dan proyektor kelas: tombol besar, teks terbaca jelas, kontras baik, dan dapat dimainkan dengan sentuhan maupun mouse/keyboard.
- Semua aset visual dibuat sendiri lewat kode (SVG/CSS/emoji); jangan memakai gambar atau karakter berhak cipta, dan jangan memuat unsur kekerasan grafis.`
});
