MediaAjar.register({
  title: 'Turnamen Lengkap (Kualifikasi → Grand Prix)',
  description: 'Tiga tahap: kualifikasi, race utama, lalu final grand prix.',
  order: 1,
  prompt: `Kamu adalah pengembang game edukasi sekaligus desainer pembelajaran yang berpengalaman. Buatkan game balapan edukasi untuk babak "Turnamen Lengkap (Kualifikasi → Grand Prix)" berdasarkan data berikut:

[INPUT]

Mekanik permainan yang harus diterapkan:
1. Mainkan tiga tahap berurutan: Kualifikasi (time trial solo), Race Utama (melawan pembalap bot), dan Final Grand Prix, dengan layar peta tahapan di antaranya.
2. Hasil kualifikasi menentukan posisi start di race utama, dan poin race utama menentukan posisi start di final; tampilkan klasemen poin kumulatif.
3. Kesulitan soal naik di tiap babak; Power Up terbuka mulai race utama.
4. Akhiri dengan seremoni podium, piala, dan rapor turnamen.

Ketentuan umum:
- Seluruh visual, efek suara, dan istilah (kendaraan/pembalap, lintasan, finis) mengikuti Tema Balapan yang dipilih di atas.
- Jawaban benar membuat pembalap melaju lebih cepat; jawaban salah memperlambat sebentar dan tidak pernah membuat pemain tersingkir.
- Isi soal/konten harus sesuai jenjang, kelas, mata pelajaran, topik, tingkat kesulitan, dan bahan ajar di atas; bahasa mudah dipahami, tidak berulang, dan urutan serta posisi jawaban diacak setiap kali main.
- Jika bahan ajar diberikan, jadikan itu sumber utama isi; jika tidak ada, susun isi dari topik sesuai Kurikulum Merdeka dan pastikan faktanya akurat.
- Jawaban salah selalu diikuti jawaban yang benar beserta penjelasan singkat (1–2 kalimat) agar pemain belajar, bukan sekadar kalah.
- Terapkan Gaya Visual, Jumlah Soal, dan Fitur Tambahan sesuai data di atas. Bila Narasi bersuara dipilih, gunakan Web Speech API berbahasa Indonesia dengan tombol aktif/nonaktif; bila Bintang, Level, atau Rapor dipilih, tampilkan sesuai deskripsinya.
- Susun layar menjadi: pembuka (judul, petunjuk singkat, tombol Mulai) → bermain → hasil (skor, ringkasan capaian, tombol Main Lagi).
- Tampilan responsif untuk HP dan proyektor kelas: tombol besar, teks terbaca jelas, kontras baik, dan dapat dimainkan dengan sentuhan maupun mouse/keyboard.
- Semua aset visual dibuat sendiri lewat kode (SVG/CSS/emoji); jangan memakai gambar atau karakter berhak cipta, dan jangan memuat unsur kekerasan grafis.`
});
