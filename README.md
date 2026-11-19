# devfolio

Website portofolio pribadi yang responsif, dengan dark/light mode dan efek ketik. Dibangun dengan HTML, CSS, dan JavaScript murni tanpa framework atau build step.

**Demo:** https://wisnu-agustya2.github.io/devfolio/ (aktifkan GitHub Pages dulu, lihat di bawah)

## Fitur
- Tampilan responsif untuk desktop dan mobile
- Dark/light mode, pilihan tersimpan di `localStorage`
- Daftar skill dan project dirender dari data di `script.js`
- Navigasi sticky dengan smooth scroll

## Menjalankan
```bash
git clone https://github.com/wisnu-agustya2/devfolio.git
cd devfolio
# buka index.html di browser, atau:
python3 -m http.server 8000
```

## Deploy ke GitHub Pages
Settings → Pages → Source: `main` branch, folder `/ (root)`.

## Kustomisasi
Ubah array `skills` dan `projects` di `script.js`, lalu teks di `index.html`.

## Lisensi
MIT
