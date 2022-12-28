// 1) Zadatak (20 poena)
// Odrediti sumu i broj brojeva, u intervalu od n do m (uključujući brojeve n i m), koji su deljivi
// sa 7 i neparni su. Vrednosti promenljivih n i m odredite sami.
// ZADATAK 2
// U konzoli ispisati:
// ● U prvom redu ispisati sumu
// ● U drugom redu ispisati broj brojeva
// ● U trećem redu ispisati proizvod sume i broja brojeva

// Napraviti funkciju indeksTelesneMase kojoj se prosleđuju dva parametra tezina (težina u
// kilogramima) i visina (visina u centimetrima). Funkcija na osnovu prosleđenih parametara
// (težine i visine) izračunava i vraća indeks telesne mase (BMI).
// BMI računati koristeći sledeću formulu:
let indeksTelesneMase = (tezina, visina) => {
  let bmi = tezina / Math.pow(visina / 100, 2);
  console.log(bmi);
  if (bmi <= 18.5) {
    console.log(`pothranjenost`);
  } else if (bmi > 18.5 && bmi < 24.9) {
    console.log(`normalna tezina`);
  } else if (bmi >= 24.9 && bmi <= 30) {
    console.log(`povisena tezina`);
  } else {
    console.log(`gojaznost`);
  }
};
indeksTelesneMase(105, 190);
// ZADATAK 3
let racunanje = (br1, br2, operacija) => {
  let rezultat;
  if (operacija == `+`) {
    rezultat = br1 + br2;
  } else if (operacija == `-`) {
    rezultat = br1 - br2;
  } else if (operacija == `*`) {
    rezultat = br1 * br2;
  } else if (operacija == `/`) {
    rezultat = br1 / br2;
  } else {
    rezultat = `pogresan unos`;
  }
  return rezultat;
};
console.log(racunanje(2, 2, `/`));

// ZADATAK 4
// Napisati funkciju razlika koja računa razliku zbira parnih brojeva od n do m koji su deljivi sa 3 i
// broja brojeva od n do m kojima je poslednja cifra 3.
// Funkcija kao parametre prima dva broja, n i m, a kao rezultat vraća traženu razliku.
// Pozvati ovu funkciju i njen rezultat ispisati u konzoli.

// Množiti članove niza sve dok je proizvod manji od 541.

let niz = [2, 3, 7, 9, 6, 5, 4, 10, 22];
let proizvod = 1;

for (let i = 0; i < niz.length; i++) {
  if (proizvod < 541) {
    proizvod *= niz[i];
  }
}
console.log(proizvod);
