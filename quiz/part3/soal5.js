// Problem buatlah bintang seperti berikut
let input = 5;
//hasilnya
//*
//**
//***
//****
//*****
let hasil = "";
for(let i = 1; i <= input; i++) {
    for(let j = 1; j <= i; j++) {
        hasil += "*";
    }
    hasil += "\n";
}
console.log(hasil);