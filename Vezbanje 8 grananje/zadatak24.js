// Napisati program koji za uneta četiri prirodna broja a,b,c,d određuje koliko njih je deljivo sa 2, koliko sa 5, a koliko sa 2 i 5 i štampa odgovarajuće poruke.

let a = 10;
let b = 7;
let c = 30;
let d = 45;

dvaiPet = 0;
saPet = 0;
saDva = 0;

if (a % 2 == 0 && a % 5 == 0) {
  dvaiPet++;
} else if (a % 5 == 0) {
  saPet++;
} else if (a % 2 == 0) {
  saDva++;
}

if (b % 2 == 0 && b % 5 == 0) {
  dvaiPet++;
} else if (b % 5 == 0) {
  saPet++;
} else if (b % 2 == 0) {
  saDva++;
}

if (c % 2 == 0 && c % 5 == 0) {
  dvaiPet++;
} else if (c % 5 == 0) {
  saPet++;
} else if (c % 2 == 0) {
  saDva++;
}

if (d % 2 == 0 && d % 5 == 0) {
  dvaiPet++;
} else if (d % 5 == 0) {
  saPet++;
} else if (d % 2 == 0) {
  saDva++;
}

console.log(dvaiPet, saPet, saDva);
