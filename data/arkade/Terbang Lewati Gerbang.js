MediaAjar.register({
  title: 'Terbang Lewati Gerbang (Ketuk untuk Terbang)',
  description: 'Ketuk layar agar karakter terbang melewati gerbang jawaban yang benar.',
  order: 1,
  prompt: `Kamu adalah pengembang game edukasi sekaligus desainer pembelajaran yang berpengalaman. Buatkan game arkade "Terbang Lewati Gerbang" (gaya ketuk-untuk-terbang) berdasarkan data berikut:

[INPUT]

Aturan permainan yang harus diterapkan:
1. Karakter terbang otomatis ke kanan dan jatuh pelan; pemain mengetuk layar (atau menekan spasi) untuk terbang naik.
2. Setiap soal ditampilkan di bagian atas; gerbang-gerbang berisi pilihan jawaban muncul di jalur terbang. Karakter harus melewati gerbang dengan jawaban yang benar.
3. Menabrak gerbang yang salah atau tepi layar mengurangi satu nyawa (maksimal 3 nyawa) dan menampilkan jawaban yang benar beserta penjelasan singkat.
4. Kecepatan naik bertahap sesuai tingkat kesulitan di atas, tetapi tetap adil dan mudah dikendalikan di HP maupun proyektor.
5. Soal sesuai jenjang, kelas, mata pelajaran, dan topik di atas, diacak dan tidak berulang.
6. Layar akhir menampilkan skor, jumlah benar, dan tombol "Main Lagi".`
});
