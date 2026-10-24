MediaAjar.register({
  title: 'Susun Kata / Kalimat',
  description: 'Susun huruf menjadi kata atau potongan kata menjadi kalimat.',
  order: 6,
  prompt: `Kamu adalah pengembang game edukasi sekaligus desainer pembelajaran yang berpengalaman. Buatkan game edukasi interaktif "Susun Kata / Kalimat" berdasarkan data berikut:

[INPUT]

Mekanik permainan yang harus diterapkan:
1. Sediakan dua mode sesuai mata pelajaran: huruf acak menjadi kata istilah, dan potongan kata acak menjadi kalimat/rumus/ungkapan yang benar.
2. Pemain menyeret atau mengetuk potongan ke slot, dengan tombol hapus, acak ulang, dan Periksa.
3. Sediakan petunjuk terbatas; tingkat kesulitan menentukan panjang kata/kalimat dan jumlah potongan pengecoh.
4. Tampilkan susunan benar beserta penjelasan atau terjemahan bila relevan.

Ketentuan umum:
- Isi soal/konten harus sesuai jenjang, kelas, mata pelajaran, topik, tingkat kesulitan, dan bahan ajar di atas; bahasa mudah dipahami, tidak berulang, dan urutan serta posisi jawaban diacak setiap kali main.
- Jika bahan ajar diberikan, jadikan itu sumber utama isi; jika tidak ada, susun isi dari topik sesuai Kurikulum Merdeka dan pastikan faktanya akurat.
- Jawaban salah selalu diikuti jawaban yang benar beserta penjelasan singkat (1–2 kalimat) agar pemain belajar, bukan sekadar kalah.
- Terapkan Gaya Visual, Jumlah Soal, dan Fitur Tambahan sesuai data di atas. Bila Narasi bersuara dipilih, gunakan Web Speech API berbahasa Indonesia dengan tombol aktif/nonaktif; bila Bintang, Level, atau Rapor dipilih, tampilkan sesuai deskripsinya.
- Susun layar menjadi: pembuka (judul, petunjuk singkat, tombol Mulai) → bermain → hasil (skor, ringkasan capaian, tombol Main Lagi).
- Tampilan responsif untuk HP dan proyektor kelas: tombol besar, teks terbaca jelas, kontras baik, dan dapat dimainkan dengan sentuhan maupun mouse/keyboard.
- Semua aset visual dibuat sendiri lewat kode (SVG/CSS/emoji); jangan memakai gambar atau karakter berhak cipta, dan jangan memuat unsur kekerasan grafis.`
});
