const form = document.getElementById("laporanForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const laporan = {
    nama: document.getElementById("nama").value.trim(),
    kelas: document.getElementById("kelas").value.trim(),
    judul: document.getElementById("judul").value.trim(),
    nilai: document.getElementById("nilai").value.trim(),
    tanggal: new Date().toLocaleDateString("id-ID", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    }),
  };

  if (!laporan.nama || !laporan.kelas || !laporan.judul || !laporan.nilai) {
    alert("⚠️ Mohon isi semua data sebelum menyimpan!");
    return;
  }

  const laporanList = JSON.parse(localStorage.getItem("laporanList")) || [];
  laporanList.push(laporan);
  localStorage.setItem("laporanList", JSON.stringify(laporanList));

  // Notifikasi kecil di layar
  const notif = document.createElement("div");
  notif.className = "notif";
  notif.textContent = "✅ Laporan berhasil disimpan!";
  document.body.appendChild(notif);

  setTimeout(() => notif.remove(), 2500);

  form.reset();
});