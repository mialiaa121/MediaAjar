MediaAjar.register({
  title: 'Gelembung Tembak (Bidik Jawaban)',
  description: 'Tembak gelembung berlabel jawaban yang benar.',
  order: 16,
  prompt: `Kamu adalah pengembang game edukasi sekaligus desainer pembelajaran yang berpengalaman. Buatkan game arkade edukasi "Gelembung Tembak (Bidik Jawaban)" berdasarkan data berikut:

[INPUT]

Mekanik permainan yang harus diterapkan:
1. Gelembung berlabel pilihan jawaban tersusun di atas; pemain membidik dengan menggeser jari dan menembak gelembung jawaban yang benar.
2. Gelembung benar meletus berikut kelompok di sekitarnya; tembakan ke jawaban salah membuat barisan turun satu baris.
3. Bila barisan mencapai garis bawah, satu nyawa berkurang. Garis bantu bidik tersedia untuk pemain muda.

Ketentuan umum:
- Dukung kontrol sentuhan (HP) sekaligus mouse/keyboard (proyektor), sediakan tombol Pause, dan beri tiga nyawa.
- Kecepatan dan kerumitan naik per level sesuai tingkat kesulitan, tetapi tetap adil dan mudah dikendalikan anak-anak.
- Penjelasan jawaban salah ditampilkan singkat agar alur permainan tidak terputus.
- Isi soal/konten harus sesuai jenjang, kelas, mata pelajaran, topik, tingkat kesulitan, dan bahan ajar di atas; bahasa mudah dipahami, tidak berulang, dan urutan serta posisi jawaban diacak setiap kali main.
- Jika bahan ajar diberikan, jadikan itu sumber utama isi; jika tidak ada, susun isi dari topik sesuai Kurikulum Merdeka dan pastikan faktanya akurat.
- Jawaban salah selalu diikuti jawaban yang benar beserta penjelasan singkat (1–2 kalimat) agar pemain belajar, bukan sekadar kalah.
- Terapkan Gaya Visual, Jumlah Soal, dan Fitur Tambahan sesuai data di atas. Bila Narasi bersuara dipilih, gunakan Web Speech API berbahasa Indonesia dengan tombol aktif/nonaktif; bila Bintang, Level, atau Rapor dipilih, tampilkan sesuai deskripsinya.
- Susun layar menjadi: pembuka (judul, petunjuk singkat, tombol Mulai) → bermain → hasil (skor, ringkasan capaian, tombol Main Lagi).
- Tampilan responsif untuk HP dan proyektor kelas: tombol besar, teks terbaca jelas, kontras baik, dan dapat dimainkan dengan sentuhan maupun mouse/keyboard.
- Semua aset visual dibuat sendiri lewat kode (SVG/CSS/emoji); jangan memakai gambar atau karakter berhak cipta, dan jangan memuat unsur kekerasan grafis.`
});
