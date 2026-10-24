MediaAjar.register({
  title: 'Sambung Garis',
  description: 'Tarik garis untuk menghubungkan pasangan yang berkaitan.',
  order: 25,
  prompt: `Kamu adalah pengembang game edukasi sekaligus desainer pembelajaran yang berpengalaman. Buatkan game edukasi interaktif "Sambung Garis" berdasarkan data berikut:

[INPUT]

Mekanik permainan yang harus diterapkan:
1. Dua kolom titik (kiri dan kanan) berisi 4–8 pasangan; pemain menarik garis dari item kiri ke item kanan yang berpasangan (sentuh-geser, atau klik dua titik).
2. Garis dapat dihapus atau diubah sebelum menekan Periksa; hasil memberi warna hijau atau merah pada tiap garis, disertai ikon agar tidak bergantung pada warna.
3. Tiap ronde menuliskan jenis hubungannya dengan jelas (mis. Hubungkan negara dengan ibu kotanya) agar tidak ambigu.
4. Sulit: tambahkan item pengecoh di kolom kanan. Setelah semua benar, tampilkan ringkasan hubungan dan penjelasannya.

Ketentuan umum:
- Isi soal/konten harus sesuai jenjang, kelas, mata pelajaran, topik, tingkat kesulitan, dan bahan ajar di atas; bahasa mudah dipahami, tidak berulang, dan urutan serta posisi jawaban diacak setiap kali main.
- Jika bahan ajar diberikan, jadikan itu sumber utama isi; jika tidak ada, susun isi dari topik sesuai Kurikulum Merdeka dan pastikan faktanya akurat.
- Jawaban salah selalu diikuti jawaban yang benar beserta penjelasan singkat (1–2 kalimat) agar pemain belajar, bukan sekadar kalah.
- Terapkan Gaya Visual, Jumlah Soal, dan Fitur Tambahan sesuai data di atas. Bila Narasi bersuara dipilih, gunakan Web Speech API berbahasa Indonesia dengan tombol aktif/nonaktif; bila Bintang, Level, atau Rapor dipilih, tampilkan sesuai deskripsinya.
- Susun layar menjadi: pembuka (judul, petunjuk singkat, tombol Mulai) → bermain → hasil (skor, ringkasan capaian, tombol Main Lagi).
- Tampilan responsif untuk HP dan proyektor kelas: tombol besar, teks terbaca jelas, kontras baik, dan dapat dimainkan dengan sentuhan maupun mouse/keyboard.
- Semua aset visual dibuat sendiri lewat kode (SVG/CSS/emoji); jangan memakai gambar atau karakter berhak cipta, dan jangan memuat unsur kekerasan grafis.`
});
