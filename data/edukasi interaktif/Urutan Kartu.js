MediaAjar.register({
  title: 'Urutan Kartu',
  description: 'Susun kartu langkah, peristiwa, atau tahapan dengan urutan yang benar.',
  order: 1,
  prompt: `Kamu adalah pengembang game edukasi sekaligus desainer pembelajaran yang berpengalaman. Buatkan game edukasi interaktif "Urutan Kartu" berdasarkan data berikut:

[INPUT]

Mekanik permainan yang harus diterapkan:
1. Tampilkan 4–7 kartu acak berisi langkah, peristiwa, atau tahapan dari materi; pemain menyeret (atau mengetuk berurutan) untuk menyusunnya dari awal sampai akhir.
2. Tombol Periksa menandai kartu yang sudah tepat (hijau) dan yang salah posisi (merah) tanpa langsung membuka seluruh jawaban; pemain boleh memperbaiki dengan batas percobaan.
3. Mainkan dalam beberapa ronde; jumlah kartu dan kemiripan antarkartu naik bertahap sesuai tingkat kesulitan.
4. Setelah selesai, tampilkan urutan yang benar dengan penjelasan singkat tiap langkah.

Ketentuan umum:
- Isi soal/konten harus sesuai jenjang, kelas, mata pelajaran, topik, tingkat kesulitan, dan bahan ajar di atas; bahasa mudah dipahami, tidak berulang, dan urutan serta posisi jawaban diacak setiap kali main.
- Jika bahan ajar diberikan, jadikan itu sumber utama isi; jika tidak ada, susun isi dari topik sesuai Kurikulum Merdeka dan pastikan faktanya akurat.
- Jawaban salah selalu diikuti jawaban yang benar beserta penjelasan singkat (1–2 kalimat) agar pemain belajar, bukan sekadar kalah.
- Terapkan Gaya Visual, Jumlah Soal, dan Fitur Tambahan sesuai data di atas. Bila Narasi bersuara dipilih, gunakan Web Speech API berbahasa Indonesia dengan tombol aktif/nonaktif; bila Bintang, Level, atau Rapor dipilih, tampilkan sesuai deskripsinya.
- Susun layar menjadi: pembuka (judul, petunjuk singkat, tombol Mulai) → bermain → hasil (skor, ringkasan capaian, tombol Main Lagi).
- Tampilan responsif untuk HP dan proyektor kelas: tombol besar, teks terbaca jelas, kontras baik, dan dapat dimainkan dengan sentuhan maupun mouse/keyboard.
- Semua aset visual dibuat sendiri lewat kode (SVG/CSS/emoji); jangan memakai gambar atau karakter berhak cipta, dan jangan memuat unsur kekerasan grafis.`
});
