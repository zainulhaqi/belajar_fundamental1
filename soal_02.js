var hargaBarang = 25000;
var jumlahBarang = 4;
var diskonPersen = 10;

var totalSebelumDiskon = hargaBarang * jumlahBarang;
var besaranDiskon = (diskonPersen / 100) * totalSebelumDiskon;
var totalPembayaran = totalSebelumDiskon - besaranDiskon;

console.log("Total Sebelum Diskon: Rp" + totalSebelumDiskon);
console.log("Besaran Diskon: Rp" + besaranDiskon);
console.log("Total Pembayaran: Rp" + totalPembayaran);