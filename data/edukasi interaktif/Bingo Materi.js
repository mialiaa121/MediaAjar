MediaAjar.register({
  title: 'Bingo Materi',
  description: 'Bingo dengan kartu berisi jawaban dari materi.',
  order: 22,
  prompt: `Kamu adalah pengembang game edukasi sekaligus desainer pembelajaran yang berpengalaman. Buatkan game edukasi interaktif "Bingo Materi" berdasarkan data berikut:

[INPUT]

Mekanik permainan yang harus diterapkan:
1. Kartu bingo 3x3, 4x4, atau 5x5 (sesuai kesulitan) berisi istilah atau jawaban acak dari materi; komputer membacakan soal atau petunjuk satu per satu tanpa pengulangan.
2. Pemain menandai kotak yang cocok dengan jawaban soal; menandai kotak yang salah memberi umpan balik tanpa menandainya.
3. Bingo terjadi bila satu baris, kolom, atau diagonal terpenuhi; tombol Bingo divalidasi sistem, dan klaim yang keliru hanya meminta pemain melanjutkan tanpa hukuman.
4. Sediakan mode kartu tunggal dan mode kelas (tiap siswa/tim mendapat kartu unik lewat tombol Kartu Baru). Pastikan jumlah soal cukup agar bingo mungkin tercapai.

Ketentuan umum:
- Isi soal/konten harus sesuai jenjang, kelas, mata pelajaran, topik, tingkat kesulitan, dan bahan ajar di atas; bahasa mudah dipahami, tidak berulang, dan urutan serta posisi jawaban diacak setiap kali main.
- Jika bahan ajar diberikan, jadikan itu sumber utama isi; jika tidak ada, susun isi dari topik sesuai Kurikulum Merdeka dan pastikan faktanya akurat.
- Jawaban salah selalu diikuti jawaban yang benar beserta penjelasan singkat (1–2 kalimat) agar pemain belajar, bukan sekadar kalah.
- Terapkan Gaya Visual, Jumlah Soal, dan Fitur Tambahan sesuai data di atas. Bila Narasi bersuara dipilih, gunakan Web Speech API berbahasa Indonesia dengan tombol aktif/nonaktif; bila Bintang, Level, atau Rapor dipilih, tampilkan sesuai deskripsinya.
- Susun layar menjadi: pembuka (judul, petunjuk singkat, tombol Mulai) → bermain → hasil (skor, ringkasan capaian, tombol Main Lagi).
- Tampilan responsif untuk HP dan proyektor kelas: tombol besar, teks terbaca jelas, kontras baik, dan dapat dimainkan dengan sentuhan maupun mouse/keyboard.
- Semua aset visual dibuat sendiri lewat kode (SVG/CSS/emoji); jangan memakai gambar atau karakter berhak cipta, dan jangan memuat unsur kekerasan grafis.`
});
