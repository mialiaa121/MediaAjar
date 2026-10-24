MediaAjar.register({
  title: 'Menara Penyelamat',
  description: 'Naik menara untuk menyelamatkan tokoh: setiap jawaban benar membuka satu anak tangga.',
  order: 1,
  prompt: `Kamu adalah pengembang game edukasi sekaligus desainer pembelajaran yang berpengalaman. Buatkan game misi "Menara Penyelamat" berdasarkan data berikut:

[INPUT]

Alur dan aturan yang harus diterapkan:
1. Cerita singkat di layar pembuka: seorang tokoh terjebak di puncak menara, dan pemain harus naik dengan menjawab soal.
2. Setiap jawaban benar membuka anak tangga dan menaikkan karakter; jawaban salah membuat karakter turun satu langkah atau kehilangan satu nyawa (maksimal 3 nyawa), disertai penjelasan jawaban yang benar.
3. Menara memiliki beberapa lantai dengan tema berbeda; tingkat kesulitan soal naik bertahap sesuai pengaturan di atas.
4. Soal sesuai jenjang, kelas, mata pelajaran, dan topik di atas, bervariasi dan diacak.
5. Layar akhir menampilkan hasil misi (berhasil/belum), skor, dan tombol "Main Lagi".`
});
