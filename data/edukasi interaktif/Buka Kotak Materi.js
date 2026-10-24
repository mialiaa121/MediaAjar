MediaAjar.register({
  title: 'Buka Kotak Materi',
  description: 'Pilih kotak untuk membuka soal atau kejutan.',
  order: 15,
  prompt: `Kamu adalah pengembang game edukasi sekaligus desainer pembelajaran yang berpengalaman. Buatkan game edukasi interaktif "Buka Kotak Materi" berdasarkan data berikut:

[INPUT]

Mekanik permainan yang harus diterapkan:
1. Tampilkan banyak kotak bernomor (kado atau peti); pemain memilih satu kotak untuk membuka isinya.
2. Isi kotak bervariasi: soal, bonus poin, kartu fakta materi, tantangan cepat, dan kejutan (poin 2x). Tidak ada kotak yang memberi hukuman kasar.
3. Kotak yang sudah dibuka tidak bisa dipilih lagi; sediakan mode kelas dengan tim bergiliran.
4. Hasil menampilkan skor tiap tim dan rangkuman isi semua kotak.

Ketentuan umum:
- Isi soal/konten harus sesuai jenjang, kelas, mata pelajaran, topik, tingkat kesulitan, dan bahan ajar di atas; bahasa mudah dipahami, tidak berulang, dan urutan serta posisi jawaban diacak setiap kali main.
- Jika bahan ajar diberikan, jadikan itu sumber utama isi; jika tidak ada, susun isi dari topik sesuai Kurikulum Merdeka dan pastikan faktanya akurat.
- Jawaban salah selalu diikuti jawaban yang benar beserta penjelasan singkat (1–2 kalimat) agar pemain belajar, bukan sekadar kalah.
- Terapkan Gaya Visual, Jumlah Soal, dan Fitur Tambahan sesuai data di atas. Bila Narasi bersuara dipilih, gunakan Web Speech API berbahasa Indonesia dengan tombol aktif/nonaktif; bila Bintang, Level, atau Rapor dipilih, tampilkan sesuai deskripsinya.
- Susun layar menjadi: pembuka (judul, petunjuk singkat, tombol Mulai) → bermain → hasil (skor, ringkasan capaian, tombol Main Lagi).
- Tampilan responsif untuk HP dan proyektor kelas: tombol besar, teks terbaca jelas, kontras baik, dan dapat dimainkan dengan sentuhan maupun mouse/keyboard.
- Semua aset visual dibuat sendiri lewat kode (SVG/CSS/emoji); jangan memakai gambar atau karakter berhak cipta, dan jangan memuat unsur kekerasan grafis.`
});
