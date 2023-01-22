// Za ucitani dvocifren broj izracunati broj zapisan istim ciframa ali u obrnutom poretku.

let n = 25;

let prvaCifra = Math.floor(n / 10);
let drugaCifra = n % 10;

let inv = drugaCifra * 10 + prvaCifra;
console.log(inv);
