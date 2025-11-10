// Ambil data laporan dari localStorage
const laporanList = JSON.parse(localStorage.getItem('laporanList')) || [];

// Tampilkan total laporan di halaman beranda
const totalEl = document.getElementById('totalLaporan');
if (totalEl) {
  // animasi angka naik
  let count = 0;
  const total = laporanList.length;
  const speed = 50;
  const counter = setInterval(() => {
    if (count < total) {
      count++;
      totalEl.textContent = count;
    } else {
      clearInterval(counter);
    }
  }, speed);
}

// Tampilkan tanggal hari ini
const tanggalEl = document.getElementById('tanggalSekarang');
if (tanggalEl) {
  const today = new Date();
  const formatted = today.toLocaleDateString('id-ID', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
  tanggalEl.textContent = formatted;
}