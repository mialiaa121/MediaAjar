/* =========================================================
   Media Ajar Generator — by Evegrow Digital
   app.js : memuat data, membangun form, menyusun prompt.
   ========================================================= */
(function () {
  'use strict';

  const CFG = window.MediaAjar;
  const MANIFEST = window.MEDIA_MANIFEST || { version: '', categories: [] };

  const $ = (sel, root = document) => root.querySelector(sel);
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const titleCase = (s) => s.replace(/[-_]+/g, ' ').replace(/\b\p{L}/gu, (m) => m.toUpperCase());

  const LIBS = {
    mammoth: 'https://cdnjs.cloudflare.com/ajax/libs/mammoth/1.6.0/mammoth.browser.min.js',
    pdfjs: 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js',
    pdfWorker: 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js'
  };

  let categories = [];
  const state = { fileName: '', fileText: '' };

  /* ---------------------------------------------------------
     Memuat file prompt dari /data (daftar dari data/manifest.js)
     --------------------------------------------------------- */
  function loadScript(src, dataset) {
    return new Promise((resolve) => {
      const s = document.createElement('script');
      s.src = src;
      Object.assign(s.dataset, dataset);
      s.onload = () => resolve(true);
      s.onerror = () => { console.warn('Gagal memuat:', src); resolve(false); };
      document.head.appendChild(s);
    });
  }

  function dataUrl(folder, file) {
    const v = MANIFEST.version ? '?v=' + encodeURIComponent(MANIFEST.version) : '';
    return ['data', folder, file].map(encodeURIComponent).join('/') + v;
  }

  async function loadData() {
    const jobs = [];
    MANIFEST.categories.forEach((c) => {
      if (c.meta) jobs.push(loadScript(dataUrl(c.folder, c.meta), { folder: c.folder, file: c.meta }));
      c.files.forEach((f) => jobs.push(loadScript(dataUrl(c.folder, f), { folder: c.folder, file: f })));
    });
    await Promise.all(jobs);

    categories = MANIFEST.categories
      .map((c, i) => {
        const meta = CFG.categories[c.folder] || {};
        const items = (CFG.items[c.folder] || []).slice().sort((a, b) => a.order - b.order || a.title.localeCompare(b.title, 'id'));
        return {
          folder: c.folder,
          name: meta.name || CFG.defaults.namePrefix + titleCase(c.folder),
          icon: meta.icon || CFG.defaults.icon,
          desc: meta.desc || '',
          typeLabel: meta.typeLabel || CFG.defaults.typeLabel,
          fields: meta.fields || [],
          order: typeof meta.order === 'number' ? meta.order : 100 + i,
          items
        };
      })
      .filter((c) => c.items.length)
      .sort((a, b) => a.order - b.order);
  }

  /* ---------------------------------------------------------
     Toast & salin
     --------------------------------------------------------- */
  let toastTimer;
  function toast(msg) {
    const t = $('#toast');
    t.textContent = msg;
    t.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove('show'), 3200);
  }

  function legacyCopy(text) {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.cssText = 'position:fixed;opacity:0;top:0;left:0';
    document.body.appendChild(ta);
    ta.select();
    let ok = false;
    try { ok = document.execCommand('copy'); } catch (e) { /* abaikan */ }
    ta.remove();
    return ok;
  }

  function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text).then(() => true).catch(() => legacyCopy(text));
    }
    return Promise.resolve(legacyCopy(text));
  }

  /* ---------------------------------------------------------
     Halaman beranda
     --------------------------------------------------------- */
  function renderHome() {
    const grid = $('#media-grid');
    if (!categories.length) {
      grid.innerHTML = `
        <div class="empty">
          <h3>Belum ada media yang terbaca</h3>
          <p>Pastikan folder <code>data/</code> berisi folder media dengan file prompt <code>.js</code>, lalu jalankan
          <code>update-data.bat</code> (atau <code>node build-manifest.js</code>) dan muat ulang halaman ini.</p>
        </div>`;
      return;
    }
    grid.innerHTML = categories.map((c, i) => `
      <a class="media-card tint-${i % 5}" href="#/${encodeURIComponent(c.folder)}">
        <span class="media-icon" aria-hidden="true">${esc(c.icon)}</span>
        <span class="media-body">
          <strong>${esc(c.name)}</strong>
          <span>${esc(c.desc || 'Pilih jenis dan isi detail materinya.')}</span>
          <small>${c.items.length} pilihan</small>
        </span>
      </a>`).join('');
  }

  /* ---------------------------------------------------------
     Halaman form
     --------------------------------------------------------- */
  function selectOptions(list, placeholder) {
    return `<option value="" disabled selected>${esc(placeholder)}</option>` +
      list.map((v) => `<option value="${esc(v)}">${esc(v)}</option>`).join('');
  }

  function field(id, label, control, opts = {}) {
    return `
      <div class="field${opts.wide ? ' wide' : ''}" data-field="${id}">
        <label for="${id}">${esc(label)}${opts.optional ? ' <span class="opt">(opsional)</span>' : ''}</label>
        ${control}
        ${opts.hint ? `<p class="hint">${opts.hint}</p>` : ''}
        <p class="error" role="alert"></p>
      </div>`;
  }

  function extraFieldHtml(f) {
    const id = 'x_' + f.id;
    if (f.type === 'select') {
      return field(id, f.label, `<select id="${id}">${selectOptions(f.options, 'Pilih ' + f.label.toLowerCase())}</select>`, { optional: !f.required });
    }
    return field(id, f.label, `<input id="${id}" type="text" placeholder="${esc(f.placeholder || '')}">`, { optional: !f.required });
  }

  function openForm(cat) {
    state.fileName = '';
    state.fileText = '';

    const gayaOptions = `<option value="${esc(CFG.gayaOtomatis)}" selected>${esc(CFG.gayaOtomatis)}</option>` +
      CFG.gayaVisual.map((g) => `<optgroup label="${esc(g.group)}">${g.items.map((i) => `<option value="${esc(i)}">${esc(i)}</option>`).join('')}</optgroup>`).join('');

    const root = $('#form-root');
    root.innerHTML = `
      <a class="btn btn-quiet back" href="#/">← Semua media</a>
      <div class="form-head">
        <span class="media-icon big" aria-hidden="true">${esc(cat.icon)}</span>
        <div>
          <h2>${esc(cat.name)}</h2>
          <p>${esc(cat.desc || 'Isi detail di bawah, lalu buat prompt-nya.')}</p>
        </div>
      </div>

      <form id="gen" novalidate>
        <fieldset class="panel">
          <legend>Kelas dan mata pelajaran</legend>
          <div class="grid2">
            ${field('jenjang', 'Jenjang', `<select id="jenjang">${selectOptions(CFG.jenjang.map((j) => j.id), 'Pilih jenjang')}</select>`)}
            ${field('kelas', 'Kelas', `<select id="kelas" disabled><option value="" disabled selected>Pilih jenjang dulu</option></select>`)}
            ${field('mapel', 'Mata pelajaran', `<select id="mapel" disabled><option value="" disabled selected>Pilih jenjang dulu</option></select>`)}
            ${field('mapelCustom', 'Nama mata pelajaran', `<input id="mapelCustom" type="text" placeholder="Ketik mata pelajaran">`)}
            ${field('program', 'Program keahlian', `<input id="program" type="text" placeholder="${esc(CFG.programPlaceholder)}">`, { wide: true })}
          </div>
        </fieldset>

        <fieldset class="panel">
          <legend>Materi pembelajaran</legend>
          ${field('topik', 'Topik / materi', `<input id="topik" type="text" placeholder="Contoh: Pecahan senilai" autocomplete="off">`, { wide: true })}
          ${field('tujuan', 'Tujuan pembelajaran', `<textarea id="tujuan" rows="2" placeholder="Contoh: Peserta didik dapat menentukan pecahan yang senilai"></textarea>`, { optional: true, wide: true })}
          <div class="field wide" data-field="bahan">
            <label for="bahanFile">Bahan ajar <span class="opt">(opsional)</span></label>
            <div class="upload">
              <label class="btn btn-soft" for="bahanFile">📎 Unggah file</label>
              <input id="bahanFile" type="file" accept=".docx,.pdf,.txt" hidden>
              <span class="upload-note">DOCX, PDF, atau TXT · maks. 10 MB</span>
            </div>
            <div id="fileChip" class="chip-file" hidden></div>
            <textarea id="bahanText" rows="4" placeholder="…atau tempel teks bahan ajar di sini"></textarea>
            <p class="hint">Teks yang terbaca dibatasi sekitar ${CFG.maxMaterialChars.toLocaleString('id-ID')} karakter agar prompt tetap muat.</p>
            <p class="error" role="alert"></p>
          </div>
        </fieldset>

        <fieldset class="panel">
          <legend>Pengaturan media</legend>
          <div class="grid2">
            ${field('jenis', cat.typeLabel, `<select id="jenis">${selectOptions(cat.items.map((i) => i.title), 'Pilih ' + cat.typeLabel.toLowerCase())}</select>`, { wide: true, hint: '<span id="jenisDesc"></span>' })}
            ${cat.fields.map(extraFieldHtml).join('')}
            ${field('gaya', 'Gaya visual', `<select id="gaya">${gayaOptions}</select>`)}
            ${field('jumlah', 'Jumlah soal', `<input id="jumlah" type="number" min="1" max="100" inputmode="numeric" placeholder="Kosongkan = ditentukan AI">`, { optional: true })}
          </div>
          <div class="field wide" data-field="kesulitan">
            <span class="label">Tingkat kesulitan</span>
            <div class="seg" role="radiogroup" aria-label="Tingkat kesulitan">
              ${CFG.kesulitan.map((k, i) => `
                <label class="seg-opt"><input type="radio" name="kesulitan" value="${esc(k.id)}" ${k.id === 'Sedang' ? 'checked' : ''}><span>${esc(k.text)}</span></label>`).join('')}
            </div>
          </div>
        </fieldset>

        <fieldset class="panel">
          <legend>Fitur tambahan dan model AI</legend>
          <div class="field wide">
            <span class="label">Fitur tambahan <span class="opt">(boleh pilih lebih dari satu)</span></span>
            <div class="pills">
              ${CFG.fitur.map((f) => `<label class="pill"><input type="checkbox" name="fitur" value="${esc(f.id)}"><span>${esc(f.label)}</span></label>`).join('')}
            </div>
          </div>
          <div class="field wide" data-field="model">
            <span class="label">Model AI yang akan kamu pakai</span>
            <div class="seg" role="radiogroup" aria-label="Model AI">
              ${CFG.models.map((m, i) => `<label class="seg-opt"><input type="radio" name="model" value="${esc(m.id)}" ${i === 0 ? 'checked' : ''}><span>${esc(m.name)}</span></label>`).join('')}
            </div>
          </div>
        </fieldset>

        <button class="btn btn-lg btn-block" type="submit">✨ Buat prompt</button>
      </form>

      <div id="result"></div>`;

    bindForm(cat);
    window.scrollTo({ top: 0 });
  }

  function bindForm(cat) {
    const jenjangSel = $('#jenjang'), kelasSel = $('#kelas'), mapelSel = $('#mapel');
    const customWrap = $('[data-field="mapelCustom"]'), programWrap = $('[data-field="program"]');
    customWrap.hidden = true;
    programWrap.hidden = true;

    jenjangSel.addEventListener('change', () => {
      const j = CFG.jenjang.find((x) => x.id === jenjangSel.value);
      kelasSel.disabled = mapelSel.disabled = false;
      kelasSel.innerHTML = selectOptions(j.kelas, 'Pilih kelas');
      mapelSel.innerHTML = selectOptions(j.mapel, 'Pilih mata pelajaran') +
        `<option value="__custom">${esc(CFG.mapelCustomLabel)}</option>`;
      customWrap.hidden = true;
      programWrap.hidden = !j.hasProgram;
    });

    mapelSel.addEventListener('change', () => {
      customWrap.hidden = mapelSel.value !== '__custom';
      if (!customWrap.hidden) $('#mapelCustom').focus();
    });

    const jenisSel = $('#jenis');
    jenisSel.addEventListener('change', () => {
      const item = cat.items.find((i) => i.title === jenisSel.value);
      $('#jenisDesc').textContent = (item && item.description) || '';
    });

    $('#bahanFile').addEventListener('change', onFilePicked);
    $('#fileChip').addEventListener('click', (e) => {
      if (e.target.closest('[data-remove]')) clearFile();
    });

    $('#gen').addEventListener('input', (e) => {
      const wrap = e.target.closest('.field');
      if (wrap) { wrap.classList.remove('invalid'); }
    });
    $('#gen').addEventListener('change', (e) => {
      const wrap = e.target.closest('.field');
      if (wrap) wrap.classList.remove('invalid');
    });

    $('#gen').addEventListener('submit', (e) => {
      e.preventDefault();
      generate(cat);
    });
  }

  /* ---------------------------------------------------------
     Unggah file bahan ajar (DOCX / PDF / TXT)
     --------------------------------------------------------- */
  function loadLib(src) {
    return new Promise((resolve, reject) => {
      const s = document.createElement('script');
      s.src = src;
      s.onload = resolve;
      s.onerror = () => reject(new Error('Gagal memuat pustaka pembaca file. Periksa koneksi internet.'));
      document.head.appendChild(s);
    });
  }

  async function extractText(file) {
    const ext = file.name.split('.').pop().toLowerCase();
    if (ext === 'txt') return file.text();
    if (ext === 'docx') {
      if (!window.mammoth) await loadLib(LIBS.mammoth);
      const res = await window.mammoth.extractRawText({ arrayBuffer: await file.arrayBuffer() });
      return res.value;
    }
    if (ext === 'pdf') {
      if (!window.pdfjsLib) await loadLib(LIBS.pdfjs);
      window.pdfjsLib.GlobalWorkerOptions.workerSrc = LIBS.pdfWorker;
      const pdf = await window.pdfjsLib.getDocument({ data: new Uint8Array(await file.arrayBuffer()) }).promise;
      let out = '';
      for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        const tc = await page.getTextContent();
        out += tc.items.map((it) => it.str).join(' ') + '\n\n';
        if (out.length > CFG.maxMaterialChars * 1.5) break;
      }
      return out;
    }
    throw new Error('Format belum didukung. Gunakan DOCX, PDF, atau TXT.');
  }

  function clearFile() {
    state.fileName = '';
    state.fileText = '';
    $('#bahanFile').value = '';
    const chip = $('#fileChip');
    chip.hidden = true;
    chip.innerHTML = '';
  }

  async function onFilePicked(e) {
    const file = e.target.files[0];
    if (!file) return;
    const chip = $('#fileChip');
    const wrap = $('[data-field="bahan"]');
    wrap.classList.remove('invalid');
    if (file.size > 10 * 1024 * 1024) {
      clearFile();
      return showError(wrap, 'File terlalu besar. Maksimal 10 MB.');
    }
    chip.hidden = false;
    chip.innerHTML = `<span>⏳ Membaca ${esc(file.name)}…</span>`;
    try {
      const text = (await extractText(file)).replace(/[ \t]+/g, ' ').replace(/\n{3,}/g, '\n\n').trim();
      if (!text) {
        clearFile();
        return showError(wrap, 'Tidak ada teks yang terbaca. Jika ini PDF hasil scan, tempel teksnya manual.');
      }
      state.fileName = file.name;
      state.fileText = text;
      chip.innerHTML = `<span>📄 ${esc(file.name)} · ${text.length.toLocaleString('id-ID')} karakter</span>
        <button type="button" class="chip-x" data-remove aria-label="Hapus file">✕</button>`;
    } catch (err) {
      clearFile();
      showError(wrap, err.message || 'File tidak bisa dibaca.');
    }
  }

  /* ---------------------------------------------------------
     Validasi
     --------------------------------------------------------- */
  function showError(wrap, msg) {
    wrap.classList.add('invalid');
    $('.error', wrap).textContent = msg;
  }

  function validate(cat) {
    let first = null;
    const need = (id, msg, ok) => {
      const wrap = $(`[data-field="${id}"]`);
      if (!ok) { showError(wrap, msg); first = first || wrap; }
    };
    const v = (id) => ($('#' + id).value || '').trim();

    need('jenjang', 'Pilih jenjang.', v('jenjang'));
    need('kelas', 'Pilih kelas.', v('kelas'));
    need('mapel', 'Pilih mata pelajaran.', v('mapel'));
    if (v('mapel') === '__custom') need('mapelCustom', 'Ketik nama mata pelajaran.', v('mapelCustom'));
    need('topik', 'Isi topik atau materi.', v('topik'));
    need('jenis', 'Pilih ' + cat.typeLabel.toLowerCase() + '.', v('jenis'));
    cat.fields.filter((f) => f.required).forEach((f) => need('x_' + f.id, 'Pilih ' + f.label.toLowerCase() + '.', v('x_' + f.id)));

    if (first) first.scrollIntoView({ behavior: 'smooth', block: 'center' });
    return !first;
  }

  /* ---------------------------------------------------------
     Menyusun prompt
     --------------------------------------------------------- */
  function collect(cat) {
    const v = (id) => ($('#' + id).value || '').trim();
    const j = CFG.jenjang.find((x) => x.id === v('jenjang'));
    const mapel = v('mapel') === '__custom' ? v('mapelCustom') : v('mapel');
    const kesulitan = (document.querySelector('input[name="kesulitan"]:checked') || {}).value || 'Sedang';
    const model = CFG.models.find((m) => m.id === (document.querySelector('input[name="model"]:checked') || {}).value) || CFG.models[0];
    const fitur = [...document.querySelectorAll('input[name="fitur"]:checked')].map((c) => CFG.fitur.find((f) => f.id === c.value));
    const item = cat.items.find((i) => i.title === v('jenis'));

    // Gabungkan bahan ajar dari file + teks tempel
    let bahan = [state.fileText, v('bahanText')].filter(Boolean).join('\n\n');
    let dipotong = false;
    if (bahan.length > CFG.maxMaterialChars) { bahan = bahan.slice(0, CFG.maxMaterialChars); dipotong = true; }

    return {
      jenjang: j.id, kelas: v('kelas'), mapel, program: j.hasProgram ? v('program') : '',
      topik: v('topik'), tujuan: v('tujuan'), bahan, dipotong,
      item, kesulitan, gaya: v('gaya'), jumlah: v('jumlah'), fitur, model,
      extras: cat.fields.map((f) => ({ id: f.id, label: f.label, value: v('x_' + f.id) })).filter((x) => x.value)
    };
  }

  function buildInputBlock(cat, d) {
    const L = [];
    L.push(`Jenjang: ${d.jenjang}`);
    L.push(`Kelas: ${d.kelas}`);
    L.push(`Mata Pelajaran: ${d.mapel}`);
    if (d.program) L.push(`Program Keahlian: ${d.program}`);
    L.push(`Topik/Materi: ${d.topik}`);
    L.push(`Tujuan Pembelajaran: ${d.tujuan || 'Tidak diisi — rumuskan sendiri yang sesuai dengan topik dan Kurikulum Merdeka'}`);
    L.push(`${cat.typeLabel}: ${d.item.title}`);
    d.extras.forEach((x) => L.push(`${x.label}: ${x.value}`));
    L.push(`Tingkat Kesulitan: ${d.kesulitan === 'Campuran' ? 'Campuran (mudah, sedang, dan sulit secara bertahap)' : d.kesulitan}`);
    L.push(`Gaya Visual: ${d.gaya === CFG.gayaOtomatis ? 'Otomatis — pilihkan gaya yang paling sesuai untuk jenjang dan mata pelajaran ini' : d.gaya}`);
    L.push(`Jumlah Soal: ${d.jumlah || 'Tentukan sendiri jumlah yang ideal'}`);
    L.push(`Fitur Tambahan: ${d.fitur.length ? '\n' + d.fitur.map((f) => '- ' + f.detail).join('\n') : 'Tidak ada'}`);
    if (d.bahan) {
      L.push(`Bahan Ajar (gunakan sebagai sumber utama isi soal/konten):\n"""\n${d.bahan}\n"""${d.dipotong ? '\n(Catatan: bahan ajar dipotong karena terlalu panjang.)' : ''}`);
    } else {
      L.push('Bahan Ajar: Tidak ada — susun materi sendiri berdasarkan topik di atas.');
    }
    return L.join('\n');
  }

  function buildPrompt(cat, d) {
    let text = d.item.prompt || '';

    // Penanda opsional per bagian, mis. [JENJANG], [TOPIK]
    const tokens = {
      JENJANG: d.jenjang, KELAS: d.kelas, MAPEL: d.mapel, PROGRAM: d.program, TOPIK: d.topik,
      TUJUAN: d.tujuan, JENIS: d.item.title, KESULITAN: d.kesulitan, GAYA: d.gaya,
      JUMLAH: d.jumlah, FITUR: d.fitur.map((f) => f.label).join(', ')
    };
    text = text.replace(/\[(JENJANG|KELAS|MAPEL|PROGRAM|TOPIK|TUJUAN|JENIS|KESULITAN|GAYA|JUMLAH|FITUR)\]/g, (_, k) => tokens[k] || '-');

    // [INPUT] diganti dengan seluruh data dari user
    const input = buildInputBlock(cat, d);
    text = text.includes('[INPUT]') ? text.split('[INPUT]').join(input) : text.trim() + '\n\n' + input;

    return text.trim() + '\n\n' + d.model.prompt;
  }

  /* ---------------------------------------------------------
     Hasil: prompt + panduan + tombol buka AI
     --------------------------------------------------------- */
  function generate(cat) {
    if (!validate(cat)) { toast('Lengkapi dulu kolom yang ditandai.'); return; }
    const d = collect(cat);
    const prompt = buildPrompt(cat, d);
    const m = d.model;

    const res = $('#result');
    res.innerHTML = `
      <section class="panel result" id="resultCard" aria-live="polite">
        <div class="result-head">
          <h3>Prompt kamu sudah siap</h3>
          <span class="meta" id="promptMeta"></span>
        </div>
        <textarea id="promptOut" rows="9" spellcheck="false" aria-label="Prompt hasil"></textarea>
        <div class="row">
          <button type="button" class="btn btn-soft" id="copyBtn">📋 Salin prompt</button>
          <span class="hint">Boleh diedit dulu sebelum disalin.</span>
        </div>

        <h4>Panduan memakai prompt di ${esc(m.name)}</h4>
        <ol class="steps">${m.guide.map((s) => `<li>${s}</li>`).join('')}</ol>

        <div class="open-ai">
          <button type="button" class="btn btn-lg btn-block" id="openAi">🚀 ${esc(m.button)}</button>
          <p class="hint">Saat tombol ini diklik, prompt otomatis disalin dan ${esc(m.name)} terbuka di tab baru.</p>
        </div>
      </section>`;

    const out = $('#promptOut');
    out.value = prompt;
    const meta = () => { $('#promptMeta').textContent = out.value.length.toLocaleString('id-ID') + ' karakter · untuk ' + m.name; };
    meta();
    out.addEventListener('input', meta);

    $('#copyBtn').addEventListener('click', () => {
      copyText(out.value).then((ok) => toast(ok ? 'Prompt tersalin ✓' : 'Gagal menyalin. Pilih teks lalu salin manual.'));
    });

    $('#openAi').addEventListener('click', () => {
      const text = out.value;
      copyText(text).then((ok) => toast(ok ? `Prompt tersalin. Tempel di ${m.name} bila kolom chat kosong.` : 'Salin manual dulu prompt di atas, lalu tempel di AI.'));
      let url = m.url;
      if (m.prefillParam) {
        const q = encodeURIComponent(text);
        if (q.length <= 6000) url += (url.includes('?') ? '&' : '?') + m.prefillParam + '=' + q;
      }
      window.open(url, '_blank', 'noopener');
    });

    $('#resultCard').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  /* ---------------------------------------------------------
     Routing sederhana (hash)
     --------------------------------------------------------- */
  function route() {
    const hash = decodeURIComponent(location.hash.replace(/^#\/?/, ''));
    const cat = categories.find((c) => c.folder === hash);
    const home = $('#view-home'), form = $('#view-form');
    if (cat) {
      home.hidden = true; form.hidden = false;
      openForm(cat);
      document.title = cat.name + ' — Media Ajar Generator';
    } else {
      form.hidden = true; home.hidden = false;
      document.title = 'Media Ajar Generator — by Evegrow Digital';
      window.scrollTo({ top: 0 });
    }
  }

  async function init() {
    await loadData();
    renderHome();
    window.addEventListener('hashchange', route);
    route();
  }

  init();
})();
