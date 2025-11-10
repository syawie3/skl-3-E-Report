const tbody = document.querySelector("#tabelLaporan tbody");
const laporanList = JSON.parse(localStorage.getItem("laporanList")) || [];
const hapusSemuaBtn = document.getElementById("hapusSemua");

// Fungsi render tabel
function renderTable() {
  tbody.innerHTML = "";

  if (laporanList.length === 0) {
    tbody.innerHTML = '<tr><td colspan="8" style="color:#b07200;">Belum ada data laporan</td></tr>';
    return;
  }

  laporanList.forEach((lap, index) => {
    const status = lap.nilai >= 75 ? "Lulus" : "Tidak Lulus";
    const statusClass = lap.nilai >= 75 ? "status-lulus" : "status-tidak";

    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${lap.nama}</td>
      <td>${lap.kelas}</td>
      <td>${lap.judul}</td>
      <td>${lap.nilai}</td>
      <td class="${statusClass}">${status}</td>
      <td>${lap.tanggal}</td>
      <td><button class="btn-hapus-item" data-index="${index}">X</button></td>
    `;
    tbody.appendChild(row);
  });
}

renderTable();

// Hapus satu
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('btn-hapus-item')) {
    const index = e.target.dataset.index;
    laporanList.splice(index, 1);
    localStorage.setItem("laporanList", JSON.stringify(laporanList));
    renderTable();
    showNotif("✅ Data berhasil dihapus!");
  }
});

// Hapus semua
hapusSemuaBtn.addEventListener('click', () => {
  if (confirm("Yakin ingin menghapus semua data?")) {
    localStorage.removeItem("laporanList");
    laporanList.length = 0;
    renderTable();
    showNotif("🗑️ Semua data berhasil dihapus!");
  }
});

// Fungsi notifikasi
function showNotif(msg) {
  const notif = document.createElement("div");
  notif.className = "notif";
  notif.textContent = msg;
  document.body.appendChild(notif);

  setTimeout(() => notif.remove(), 2500);
}