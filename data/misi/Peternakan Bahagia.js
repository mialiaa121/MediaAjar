MediaAjar.register({
  title: 'Peternakan Bahagia',
  description: 'Rawat hewan dan kebun di peternakan.',
  order: 46,
  prompt: `Kamu adalah pengembang game edukasi sekaligus desainer pembelajaran yang berpengalaman. Buatkan game misi edukasi bertema "Peternakan Bahagia" berdasarkan data berikut:

[INPUT]

Mekanik permainan yang harus diterapkan:
1. Tugas seperti memberi pakan, memerah susu, dan memanen telur diselesaikan lewat soal.
2. Produksi meningkat seiring jawaban benar dan hasilnya dijual untuk memperluas peternakan.
3. Kesejahteraan hewan menjadi indikator utama peternakan yang sehat.

Ketentuan umum:
- Layar pembuka berisi cerita singkat dan tujuan misi dengan tokoh yang ramah anak; sertakan bar progres misi, skor, dan nyawa/energi (maksimal 3).
- Setiap jawaban benar memajukan misi; jawaban salah mengurangi nyawa/energi atau menunda kemajuan, tetapi pemain tetap bisa melanjutkan setelah membaca penjelasan.
- Tutup dengan cerita penutup yang menyenangkan saat misi berhasil, dan dorongan mencoba lagi bila belum berhasil.
- Isi soal/konten harus sesuai jenjang, kelas, mata pelajaran, topik, tingkat kesulitan, dan bahan ajar di atas; bahasa mudah dipahami, tidak berulang, dan urutan serta posisi jawaban diacak setiap kali main.
- Jika bahan ajar diberikan, jadikan itu sumber utama isi; jika tidak ada, susun isi dari topik sesuai Kurikulum Merdeka dan pastikan faktanya akurat.
- Jawaban salah selalu diikuti jawaban yang benar beserta penjelasan singkat (1–2 kalimat) agar pemain belajar, bukan sekadar kalah.
- Terapkan Gaya Visual, Jumlah Soal, dan Fitur Tambahan sesuai data di atas. Bila Narasi bersuara dipilih, gunakan Web Speech API berbahasa Indonesia dengan tombol aktif/nonaktif; bila Bintang, Level, atau Rapor dipilih, tampilkan sesuai deskripsinya.
- Susun layar menjadi: pembuka (judul, petunjuk singkat, tombol Mulai) → bermain → hasil (skor, ringkasan capaian, tombol Main Lagi).
- Tampilan responsif untuk HP dan proyektor kelas: tombol besar, teks terbaca jelas, kontras baik, dan dapat dimainkan dengan sentuhan maupun mouse/keyboard.
- Semua aset visual dibuat sendiri lewat kode (SVG/CSS/emoji); jangan memakai gambar atau karakter berhak cipta, dan jangan memuat unsur kekerasan grafis.`
});
