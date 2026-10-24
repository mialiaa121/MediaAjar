MediaAjar.register({
  title: 'Ludo',
  description: 'Papan Ludo 2–4 pemain. Pion maju setelah menjawab soal dengan benar.',
  order: 1,
  prompt: `Kamu adalah pengembang game edukasi sekaligus desainer pembelajaran yang berpengalaman. Buatkan game edukasi bergaya LUDO berdasarkan data berikut:

[INPUT]

Aturan permainan yang harus diterapkan:
1. Papan Ludo klasik untuk 2–4 pemain (atau tim) yang bermain bergiliran di satu layar; pemain bisa mengetik nama/tim di layar pembuka.
2. Pada gilirannya, pemain melempar dadu animasi. Sebelum pion boleh melangkah, pemain harus menjawab satu soal. Jawaban benar = pion maju sesuai angka dadu; jawaban salah = giliran berpindah dan jawaban yang benar ditampilkan beserta penjelasan singkat.
3. Terapkan aturan Ludo: butuh angka 6 untuk keluar dari kandang, pion bisa "memakan" pion lawan, dan pemenang adalah yang pertama membawa semua pionnya ke tujuan.
4. Soal harus sesuai jenjang, kelas, mata pelajaran, topik, dan tingkat kesulitan di atas, bervariasi (pilihan ganda, benar/salah, isian singkat), tidak berulang, dan menyertakan penjelasan jawaban.
5. Setiap soal diacak urutannya, dan posisi jawaban benar diacak.
6. Berikan umpan balik langsung (suara/animasi/warna) untuk jawaban benar dan salah.
7. Layar akhir menampilkan pemenang, skor tiap pemain, dan tombol "Main Lagi".`
});
