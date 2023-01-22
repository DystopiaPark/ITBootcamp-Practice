// Zadatak 9. Ulazni podaci su poˇcetak i kraj nekog vremenskog intervala, izraˇzeni u satima i minutima:
// (sat1,min1) i (sat2,min2). Napisati program kojim se odredjuje duˇzina vremenskog intervala izraˇzena u satima
// i minutima

let sat1 = 15;
let min1 = 20;

let sat2 = 20;
let min2 = 15;

rezSat = sat2 - sat1;

if (min2 >= min1) {
  rezMin = min2 - min1;
} else rezMin = min2 + 60 - min1;

console.log(rezSat, rezMin);
