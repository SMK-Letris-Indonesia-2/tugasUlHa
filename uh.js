// ualngan harian

//no 1
function cetakfuntion (z){
    return `halo nama saya ` + z;
}
console.log(cetakfuntion("hanif"));






//no 2
function myfuntion (a,b){
    return a + b;
}
var a= 20;
var b= 7;
var hasil= myfuntion(a,b);

console.log(hasil);
  





//no 3
function hello(){

    return "hello"

}
const m =hello ((ES6) => hello );
console.log(m);






//no 4
let obj = [
    {
        nama : "jhon",
        umur : 22,
        bahasa : "indonesia",
    },
]
const i = obj.filter((obj) => obj.bahasa = "indonesia");
console.log(i);






//no 5
let objdaftarpeserta = {
    nama : "jhon doe",
    jenis_kelamin : "laki-laki",
    hobi : "baca buku",
    tahun_lahir : "1992"
}
console.log(objdaftarpeserta)






//no 6 
var buah = [
    {
        nama : 'nanas',
        warna : 'kuning',
        ada_bijinya : 'tidak',
        harganya : '9000',
        jenis : 1,
    },
    {
        nama : 'jeruk',
        warna :  'oranye',
        ada_bijinya : 'ada',
        harganya : '8000',
        jenis : 2,
    },
    {
        nama : 'semangka',
        warna : 'hijau & merah',
        ada_bijinya : 'ada',
        harganya : '10000',
        jenis : 2,
    },
    {
        nama : 'pisang',
        warnanya : 'kuning',
        ada_bijinya : 'tidak',
        harganya : '6000',
        jenis : 1,
    },
    {
        nama : 'durian',
        warnanya : 'kuning & hijau',
        ada_bijinya : 'ada',
        harganya : '7000',
        jenis : 2,
    },
    {
        nama : 'jambu crystal',
        warnanya : 'putih & hijau',
        ada_bijinya : 'tidak',
        harganya : '12000',
        jenis : 1,
    },
]
let p = parseInt(prompt("anda memilih buah yang ada bijinya(ketik 2) atau tidak(ketik 1) "));
const dak = buah.filter((buah) => buah.jenis === p);
console.log(dak);
