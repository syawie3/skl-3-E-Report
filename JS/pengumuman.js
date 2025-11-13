// Data pengumuman
const announcements = [
  { title: "Ujian Tengah Semester", desc: "Ujian akan dilaksanakan pada 10-15 November 2025. Persiapkan diri sebaik mungkin." },
  { title: "Workshop Coding", desc: "Workshop akan diadakan pada 20 November 2025 di lab komputer. Semua siswa diharapkan hadir." },
  { title: "Pengumpulan Tugas", desc: "Tugas proyek e-report harus dikumpulkan paling lambat 25 November 2025." },
  { title: "Libur Sekolah", desc: "Libur nasional pada 17 November 2025. Tidak ada kegiatan belajar mengajar." }
];

// Target container
const container = document.getElementById("announcementContainer");

// Buat card pengumuman
announcements.forEach((item, index) => {
  const card = document.createElement("div");
  card.classList.add("announcement-card");
  card.innerHTML = `<h4>${item.title}</h4><p>${item.desc}</p>`;
  container.appendChild(card);

  // Animasi fade-in dengan delay
  setTimeout(() => card.classList.add("show"), index * 200);
});