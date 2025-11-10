const laporanList = JSON.parse(localStorage.getItem('laporanList')) || [];
const filterInput = document.getElementById('filterInput');
const tbody = document.querySelector('#hasilFilter tbody');

filterInput.addEventListener('keyup', function() {
    const keyword = filterInput.value.toLowerCase();
    tbody.innerHTML = '';

    const hasil = laporanList.filter(lap => lap.kelas.toLowerCase().includes(keyword));

    if (hasil.length === 0) {
        tbody.innerHTML = `<tr><td colspan="7">Tidak ada data ditemukan</td></tr>`;
    } else {
        hasil.forEach((lap, i) => {
            const status = lap.nilai >= 75 ? 'Lulus' : 'Tidak Lulus';
            const statusClass = lap.nilai >= 75 ? 'status-lulus' : 'status-tidak';

            tbody.innerHTML += `<tr>
                <td>${i + 1}</td>
                <td>${lap.nama}</td>
                <td>${lap.kelas}</td>
                <td>${lap.judul}</td>
                <td>${lap.nilai}</td>
                <td class="${statusClass}">${status}</td>
                <td>${lap.tanggal}</td>
            </tr>`;
        });
    }
});