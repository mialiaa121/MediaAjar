MediaAjar.register({
  title: 'Garis Waktu',
  description: 'Letakkan peristiwa atau tahapan pada garis waktu yang benar.',
  order: 24,
  prompt: `Kamu adalah pengembang game edukasi sekaligus desainer pembelajaran yang berpengalaman. Buatkan game edukasi interaktif "Garis Waktu" berdasarkan data berikut:

[INPUT]

Mekanik permainan yang harus diterapkan:
1. Tampilkan garis waktu dengan slot kosong; pemain meletakkan kartu peristiwa pada posisi yang benar.
2. Untuk Sejarah gunakan tahun yang nyata; untuk proses (siklus, tahap kerja, prosedur) gunakan urutan tahap. Jangan memaksakan tahun bila tidak relevan.
3. Mudah: sebagian peristiwa sudah terpasang sebagai jangkar. Sulit: tanpa jangkar dan ada peristiwa yang waktunya berdekatan.
4. Beri umpan balik per kartu, lalu tampilkan garis waktu lengkap dengan hubungan sebab-akibat singkat. Sertakan satu ronde pemanasan Mana yang Lebih Dulu? berisi dua kartu.

Ketentuan umum:
- Isi soal/konten harus sesuai jenjang, kelas, mata pelajaran, topik, tingkat kesulitan, dan bahan ajar di atas; bahasa mudah dipahami, tidak berulang, dan urutan serta posisi jawaban diacak setiap kali main.
- Jika bahan ajar diberikan, jadikan itu sumber utama isi; jika tidak ada, susun isi dari topik sesuai Kurikulum Merdeka dan pastikan faktanya akurat.
- Jawaban salah selalu diikuti jawaban yang benar beserta penjelasan singkat (1–2 kalimat) agar pemain belajar, bukan sekadar kalah.
- Terapkan Gaya Visual, Jumlah Soal, dan Fitur Tambahan sesuai data di atas. Bila Narasi bersuara dipilih, gunakan Web Speech API berbahasa Indonesia dengan tombol aktif/nonaktif; bila Bintang, Level, atau Rapor dipilih, tampilkan sesuai deskripsinya.
- Susun layar menjadi: pembuka (judul, petunjuk singkat, tombol Mulai) → bermain → hasil (skor, ringkasan capaian, tombol Main Lagi).
- Tampilan responsif untuk HP dan proyektor kelas: tombol besar, teks terbaca jelas, kontras baik, dan dapat dimainkan dengan sentuhan maupun mouse/keyboard.
- Semua aset visual dibuat sendiri lewat kode (SVG/CSS/emoji); jangan memakai gambar atau karakter berhak cipta, dan jangan memuat unsur kekerasan grafis.`
});
