GREENSKY CO-LIVING — WEBSITE (HTML & JavaScript biasa)
=====================================================

Isi folder:
  index.html      -> halaman Home (buka file ini)
  home.html       -> halaman Home (sama seperti index.html)
  villa.html      -> halaman Villa
  contact.html    -> halaman Contact + form WhatsApp
  css/style.css   -> semua gaya
  js/main.js      -> menu, animasi, dan form WhatsApp
  images/         -> foto-foto
  favicon.ico, robots.txt

Cara membuka:
  1. Double-click index.html — situs langsung tampil di browser.
  2. Untuk online: upload seluruh isi folder ini ke hosting mana pun
     (Netlify, Vercel, GitHub Pages, cPanel, shared hosting).
     Tidak perlu database, tidak perlu build, tidak perlu npm.

Formulir Contact:
  Saat pengunjung menekan "Kirim via WhatsApp", WhatsApp terbuka ke
  +62 811 3811 6867 dengan pesan otomatis berisi nama, email, lokasi,
  tanggal masuk, durasi, dan pesan.
  Nomor tujuan bisa diubah di baris pertama file js/main.js:
      var WA_NUMBER = "6281138116867";
