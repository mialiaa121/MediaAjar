MediaAjar.registerCategory({
  name: 'Game Edu Racing',
  icon: '🏎️',
  desc: 'Balapan kuis: jawab benar agar pembalap melaju lebih cepat.',
  typeLabel: 'Jenis Babak',
  order: 2,
  // Kolom tambahan yang muncul di form (hanya untuk media ini)
  fields: [
    {
      id: 'tema', label: 'Tema Balapan', type: 'select', required: true,
      options: ['Mobil', 'Motor', 'Sepeda', 'Perahu', 'Kuda', 'Pesawat', 'Roket', 'Lari (tanpa kendaraan)']
    }
  ]
});
