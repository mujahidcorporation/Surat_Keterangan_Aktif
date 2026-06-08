function buatSurat() {
document.getElementById("s_nomor").textContent =
    document.getElementById("nomor").value;

document.getElementById("s_nama").textContent =
    document.getElementById("nama").value;

document.getElementById("s_nisn").textContent =
    document.getElementById("nisn").value;

document.getElementById("s_ttl").textContent =
    document.getElementById("ttl").value;

document.getElementById("s_kelas").textContent =
    document.getElementById("kelas").value;

document.getElementById("s_tapel").textContent =
    document.getElementById("tapel").value;

const tanggal = new Date();

document.getElementById("tanggal").textContent =
    tanggal.toLocaleDateString("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric"
    });

document.getElementById("surat").style.display = "block";
}

function masukAplikasi(){

document.getElementById("landing-page").style.display = "none";

document.querySelector(".form-container").style.display = "block";

document.querySelector(".aksi").style.display = "block";

}
