// Ambil data laporan dari localStorage
const laporanList = JSON.parse(localStorage.getItem('laporanList')) || [];

// Total laporan
const totallaporanEl = document.getElementById('totallaporan');
animateNumber(totallaporanEl, laporanList.length, 1500);

// Laporan hari ini
const laporanHariIniEl = document.getElementById('laporanHariIni');
const today = new Date().toLocaleDateString();
const todayCount = laporanList.filter(l => l.tanggal === today).length;
animateNumber(laporanHariIniEl, todayCount, 1500);

// Total siswa unik
const totalSiswaEl = document.getElementById('totalSiswa');
const siswaUnik = [...new Set(laporanList.map(l => l.nama))].length;
animateNumber(totalSiswaEl, siswaUnik, 1500);

// Fungsi animasi angka naik
function animateNumber(el, target, duration) {
  let start = 0;
  const stepTime = Math.abs(Math.floor(duration / target));
  const timer = setInterval(() => {
    start += 1;
    el.textContent = start;
    if (start >= target) clearInterval(timer);
  }, stepTime);
}