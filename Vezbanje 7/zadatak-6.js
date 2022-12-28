// Napisati program koji za uneti brojilac i imenilac ispisuje odgovarajuci broj u mesovitom obliku. Mesoviti oblik se oznacava celim delom i razlomkom gde je brojilac manji od imenioca (npr. 8/3 = 2 cela i 2/3)

let brojilac = 8;
let imenilac = 3;

let prviDeo = Math.floor(brojilac / imenilac);
let drugiDeo = brojilac % imenilac;

console.log(prviDeo + " cela i " + drugiDeo + "/" + imenilac);
