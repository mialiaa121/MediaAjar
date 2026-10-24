MediaAjar.register({
  title: 'Cocokkan Pasangan',
  description: 'Menjodohkan dua kolom (istilah–arti, soal–jawaban, gambar–nama).',
  order: 1,
  prompt: `Kamu adalah pengembang game edukasi sekaligus desainer pembelajaran yang berpengalaman. Buatkan game edukasi "Cocokkan Pasangan" berdasarkan data berikut:

[INPUT]

Aturan permainan yang harus diterapkan:
1. Tampilkan dua kelompok kartu/kolom yang harus dipasangkan (mis. istilah–pengertian, soal–jawaban, gambar–nama). Pemain memilih satu kartu dari tiap sisi, atau menyeret kartu ke pasangannya.
2. Pasangan benar terkunci dengan animasi dan suara; pasangan salah bergetar lalu kembali, tanpa mengurangi semangat pemain.
3. Bagi permainan menjadi beberapa ronde kecil (4–6 pasangan per ronde), isi pasangan sesuai jenjang, kelas, mata pelajaran, topik, dan tingkat kesulitan di atas.
4. Posisi kartu diacak setiap kali main. Sediakan tombol petunjuk (hint) yang terbatas jumlahnya.
5. Setelah semua pasangan benar, tampilkan ringkasan: skor, jumlah salah, dan daftar pasangan beserta penjelasan singkatnya.`
});
