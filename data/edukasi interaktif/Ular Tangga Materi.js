MediaAjar.register({
  title: 'Ular Tangga Materi',
  description: 'Ular tangga bertema materi dengan kotak soal.',
  order: 12,
  prompt: `Kamu adalah pengembang game edukasi sekaligus desainer pembelajaran yang berpengalaman. Buatkan game edukasi interaktif "Ular Tangga Materi" berdasarkan data berikut:

[INPUT]

Mekanik permainan yang harus diterapkan:
1. Papan ular tangga (36–100 kotak sesuai kesulitan) dengan dadu animasi untuk 1–4 pemain/tim bergiliran.
2. Setiap pion yang mendarat wajib menjawab satu soal. Tangga hanya dipakai bila jawaban benar; ular hanya menurunkan pion bila jawaban salah.
3. Beri tanda khusus pada kotak bonus (soal bernilai ganda) dan kotak istirahat.
4. Pemenang adalah yang pertama mencapai kotak akhir; tampilkan skor tiap pemain dan rekap soal.

Ketentuan umum:
- Isi soal/konten harus sesuai jenjang, kelas, mata pelajaran, topik, tingkat kesulitan, dan bahan ajar di atas; bahasa mudah dipahami, tidak berulang, dan urutan serta posisi jawaban diacak setiap kali main.
- Jika bahan ajar diberikan, jadikan itu sumber utama isi; jika tidak ada, susun isi dari topik sesuai Kurikulum Merdeka dan pastikan faktanya akurat.
- Jawaban salah selalu diikuti jawaban yang benar beserta penjelasan singkat (1–2 kalimat) agar pemain belajar, bukan sekadar kalah.
- Terapkan Gaya Visual, Jumlah Soal, dan Fitur Tambahan sesuai data di atas. Bila Narasi bersuara dipilih, gunakan Web Speech API berbahasa Indonesia dengan tombol aktif/nonaktif; bila Bintang, Level, atau Rapor dipilih, tampilkan sesuai deskripsinya.
- Susun layar menjadi: pembuka (judul, petunjuk singkat, tombol Mulai) → bermain → hasil (skor, ringkasan capaian, tombol Main Lagi).
- Tampilan responsif untuk HP dan proyektor kelas: tombol besar, teks terbaca jelas, kontras baik, dan dapat dimainkan dengan sentuhan maupun mouse/keyboard.
- Semua aset visual dibuat sendiri lewat kode (SVG/CSS/emoji); jangan memakai gambar atau karakter berhak cipta, dan jangan memuat unsur kekerasan grafis.`
});
