MediaAjar.register({
  title: 'Pertahanan Menara',
  description: 'Tower defense: jawab benar untuk memperkuat menara.',
  order: 13,
  prompt: `Kamu adalah pengembang game edukasi sekaligus desainer pembelajaran yang berpengalaman. Buatkan game edukasi interaktif "Pertahanan Menara" berdasarkan data berikut:

[INPUT]

Mekanik permainan yang harus diterapkan:
1. Gelombang musuh lucu berjalan di jalur menuju markas; pemain menjaga markas dengan menjawab soal.
2. Jawaban benar membangun atau meng-upgrade menara dan menembakkan serangan; jawaban salah membuat musuh maju atau menara melambat. Efek serangan bergaya kartun tanpa kekerasan grafis.
3. Gelombang meningkat bertahap sesuai kesulitan, dengan satu bos di gelombang akhir; markas punya nyawa terbatas.
4. Hasil menampilkan gelombang yang berhasil dilewati, skor, dan rekap soal.

Ketentuan umum:
- Isi soal/konten harus sesuai jenjang, kelas, mata pelajaran, topik, tingkat kesulitan, dan bahan ajar di atas; bahasa mudah dipahami, tidak berulang, dan urutan serta posisi jawaban diacak setiap kali main.
- Jika bahan ajar diberikan, jadikan itu sumber utama isi; jika tidak ada, susun isi dari topik sesuai Kurikulum Merdeka dan pastikan faktanya akurat.
- Jawaban salah selalu diikuti jawaban yang benar beserta penjelasan singkat (1–2 kalimat) agar pemain belajar, bukan sekadar kalah.
- Terapkan Gaya Visual, Jumlah Soal, dan Fitur Tambahan sesuai data di atas. Bila Narasi bersuara dipilih, gunakan Web Speech API berbahasa Indonesia dengan tombol aktif/nonaktif; bila Bintang, Level, atau Rapor dipilih, tampilkan sesuai deskripsinya.
- Susun layar menjadi: pembuka (judul, petunjuk singkat, tombol Mulai) → bermain → hasil (skor, ringkasan capaian, tombol Main Lagi).
- Tampilan responsif untuk HP dan proyektor kelas: tombol besar, teks terbaca jelas, kontras baik, dan dapat dimainkan dengan sentuhan maupun mouse/keyboard.
- Semua aset visual dibuat sendiri lewat kode (SVG/CSS/emoji); jangan memakai gambar atau karakter berhak cipta, dan jangan memuat unsur kekerasan grafis.`
});
