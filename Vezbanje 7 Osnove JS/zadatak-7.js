// Bankomat raspolaze novcanicama od 1000din, 500din, 100din, i 1din. Odrediti najmanju kolicinu novcanica kojom bankomat moze isplatiti iznos od n dinara podrazumevajuci da bankomat raspolaze dovoljnom kolicinom svake novcanice

let n = 7835;

let hiljade = Math.floor(n / 1000);
n = n % 1000;
let petstotine = Math.floor(n / 500);
n = n % 500;
let stotine = Math.floor(n / 100);
n = n % 100;
let jedinice = Math.floor(n / 1);

console.log(
  `Potrebno je ${hiljade} hiljada, ${petstotine} petstotina, ${stotine} stotina i ${jedinice} jedinica`
);
