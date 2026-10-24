MediaAjar.register({
  title: 'Gambar Tersamarkan (Progressive Reveal)',
  description: 'Gambar terbuka sedikit demi sedikit setiap jawaban benar.',
  order: 17,
  prompt: `Kamu adalah pengembang game edukasi sekaligus desainer pembelajaran yang berpengalaman. Buatkan game edukasi interaktif "Gambar Tersamarkan (Progressive Reveal)" berdasarkan data berikut:

[INPUT]

Mekanik permainan yang harus diterapkan:
1. Tampilkan gambar yang relevan dengan topik (dibuat sendiri lewat SVG/CSS/emoji) yang tertutup petak, blur, atau pixel; tiap jawaban benar membuka sebagian gambar.
2. Pemain boleh menebak gambar kapan saja: tebakan lebih cepat bernilai poin lebih tinggi, tebakan salah mengurangi sedikit poin.
3. Sediakan beberapa gambar; kerumitan gambar dan jumlah petak mengikuti kesulitan.
4. Setelah gambar terungkap, tampilkan fakta singkat tentang gambar tersebut.

Ketentuan umum:
- Isi soal/konten harus sesuai jenjang, kelas, mata pelajaran, topik, tingkat kesulitan, dan bahan ajar di atas; bahasa mudah dipahami, tidak berulang, dan urutan serta posisi jawaban diacak setiap kali main.
- Jika bahan ajar diberikan, jadikan itu sumber utama isi; jika tidak ada, susun isi dari topik sesuai Kurikulum Merdeka dan pastikan faktanya akurat.
- Jawaban salah selalu diikuti jawaban yang benar beserta penjelasan singkat (1–2 kalimat) agar pemain belajar, bukan sekadar kalah.
- Terapkan Gaya Visual, Jumlah Soal, dan Fitur Tambahan sesuai data di atas. Bila Narasi bersuara dipilih, gunakan Web Speech API berbahasa Indonesia dengan tombol aktif/nonaktif; bila Bintang, Level, atau Rapor dipilih, tampilkan sesuai deskripsinya.
- Susun layar menjadi: pembuka (judul, petunjuk singkat, tombol Mulai) → bermain → hasil (skor, ringkasan capaian, tombol Main Lagi).
- Tampilan responsif untuk HP dan proyektor kelas: tombol besar, teks terbaca jelas, kontras baik, dan dapat dimainkan dengan sentuhan maupun mouse/keyboard.
- Semua aset visual dibuat sendiri lewat kode (SVG/CSS/emoji); jangan memakai gambar atau karakter berhak cipta, dan jangan memuat unsur kekerasan grafis.`
});
