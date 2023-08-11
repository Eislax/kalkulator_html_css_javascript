//Tombol selain angka 1-9, C dan DEL
function insert(item) {
  document.getElementById("userInput").value += item;
}
//Tombol angka 1-9
function num(i){
  document.getElementById("userInput").value += i;
}

// Fungsi untuk membersihkan nilai input
function clean() {
  document.getElementById("userInput").value = "";
}

// Fungsi untuk menghapus satu karakter dari nilai input
function del() {
  let userInput = document.getElementById("userInput").value;
  document.getElementById("userInput").value = userInput.slice(0, -1);
}

// Fungsi untuk melakukan perhitungan matematika atau tombol =
function equal() {
  let hasil = document.getElementById("userInput").value;
  document.getElementById("userInput").value = eval(hasil);
}

