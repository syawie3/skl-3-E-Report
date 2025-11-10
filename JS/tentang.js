// Tombol dan elemen tim
const btnTeam = document.getElementById("btnTeam");
const teamSection = document.getElementById("teamSection");
const teamCards = document.getElementById("teamCards");

// Data anggota tim
const team = [
  { name: "Bastian AbiManyu", role: "Front-End Developer", img: "https://cdn-icons-png.flaticon.com/512/219/219970.png" },
  { name: "Adinda", role: "UI/UX Designer", img: "https://cdn-icons-png.flaticon.com/512/4140/4140047.png" },
  { name: "Yusuf Kamal", role: "Back-End Developer", img: "https://cdn-icons-png.flaticon.com/512/2202/2202112.png" }
];

// Event klik tombol
btnTeam.addEventListener("click", () => {
  teamSection.classList.toggle("show");

  // Tambahkan card tim hanya saat pertama kali
  if (!teamCards.hasChildNodes()) {
    team.forEach(member => {
      const card = document.createElement("div");
      card.classList.add("team-card");
      card.innerHTML = `
        <img src="${member.img}" alt="${member.name}">
        <h4>${member.name}</h4>
        <p>${member.role}</p>
      `;
      teamCards.appendChild(card);
    });
  }

  btnTeam.textContent = teamSection.classList.contains("show")
    ? "Sembunyikan Tim"
    : "Lihat Tim Pengembang";
});