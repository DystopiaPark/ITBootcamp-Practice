// ZADATAK 4 FUNKCIJE
// Napisati funkciju maks2 koja vraća veći od dva prosleđena realna broja. Zatim
// napisati funkciju maks4 koja vraća najveći od četiri prosleđena realna broja.

let maks2 = (a, b) => {
  if (a > b) {
    return a;
  } else {
    return b;
  }
};

let maks4 = (a, b, c, d) => {
  return maks2(maks2(a, b), maks2(c, d));
};
console.log(maks4(1, 2, 3, 4));

// ZADATAK 7 FUNKCIJE
// Napisati program koji sadrži funkciju sedmiDan koja za uneti broj n ispisuje n-ti dan u nedelji (npr. za 0 ispisuje “Nedelja”, za 1 se ispisuje „Ponedeljak“, za 2 se ispisuje „Utorak“, ... ,  a za 7 opet “Nedelja”).
// Pitanje: Kako bismo realizovali ovaj zadatak da se tražio n-ti mesec u godini?

let sedmiDan = (n) => {
  if (n % 7 == 0) {
    console.log(`Nedelja`);
  } else if (n % 7 == 1) {
    console.log(`Ponedeljak`);
  } else if (n % 7 == 2) {
    console.log(`Utorak`);
  } else if (n % 7 == 3) {
    console.log(`Sreda`);
  } else if (n % 7 == 4) {
    console.log(`Cetvrtak`);
  } else if (n % 7 == 5) {
    console.log(`Petak`);
  } else if (n % 7 == 6) {
    console.log(`Subota`);
  }
};
sedmiDan(8);

// ZADATAK 14 FUNKCIJE
// Napisati funkciju koja pet puta ispisuje istu rečenicu, a veličina fonta rečenice treba da bude jednaka vrednosti iteratora.
let petRecenia = (n) => {
  for (let i = n; i <= n + 4; i++) {
    document.write(`<p style="font-size:${i}px">Kvaka</p>`);
  }
};
petRecenia(14);
// ZADATAK 15 FUNKCIJE
// Dobili ste plaćenu programersku praksu u trajanju od n meseci. Prvog meseca, plata
// će biti a dinara, a ako budete vredno radili svakog narednog meseca ćete dobiti
// povišicu od d dinara u odnosu na platu prethodnog meseca. Brojeve n, a i d
// određujete sami.
// Napišite funkciju praksa kojoj se prosleđuju brojevi n i a. Funkcija treba da vrati
// vrednosti koliko ćete ukupno navca zaraditi, ukoliko svakog meseca budete dobijali
// povišicu u odnosu na prethodni mesec.
// Testirati zadatak (pozvati funkciju i ispisati vrednost koju ona vraća).

let praksa = (n, a, d) => {
  let ukupno = a;
  for (let i = 2; i <= n; i++) {
    a += d;
    ukupno += a;
  }
  return ukupno;
};
console.log(praksa(5, 10000, 5000));

// ZADATAK 16 FUNKCIJE
// Na igrama bez granica, ekipi je postavljen zadatak da za što kraće vreme pređe stazu na kojoj se nalazi pokretni most. Takmičaru ove ekipe od polazne tačke do mosta treba t sekundi. Tačno p sekundi od kada takmičar može da krene sa polazne tačke (tj. od početka merenja) most počinje da se podiže. Od trenutka podizanja pa do spuštanja mosta protiče n sekundi i prelaz preko mosta za to vreme nije moguć. Nakon toga most ostaje spušten. Takmičari za čekanje kod mosta dobijaju negativne poene, pa je tim rešio da napravi program koji će im tačno odrediti u kojoj sekundi treba da pođu sa startne pozicije kako ne bi dobijali negativne poene. Pomozite timu da napravi funkciju na osnovu prosleđenih vrednosti t, p i n. Funkcija vraća koliko sekundi nakon početka merenja vremena treba da pođe, kako bi prošli poligon bez zaustavljanja.
// npr: t=15, p=20, n=25, čekanje je 0s
// npr: t=15, p=10, n=12, čekanje je 7s

// let t = 15 Vreme potrebno da takmicar dodje do mosta
// p = 20; Most se podize toliko sekundi posle otpocetka
// n = 25; Vreme koje je neprohodno da se most podigne i spusti

let igre = (t, p, n) => {
  let cekanje;
  if (t < p || t > p + n) {
    cekanje = 0;
  } else {
    cekanje = p + n - t;
  }
  return cekanje;
};

console.log(igre(25, 20, 5));

// ZADATAK 2 FUNKCIJE VEZBANJA
// Napisati funkciju godine kojoj se prosleđuje parametar godRodjenja.
// Parametar godRodjenja predstavlja godinu rođenja neka osobe. Funkcija treba da
// vrati koliko godina ima ta (prosleđena) osoba.
// Broj godina osobe izračunati na osnovu prosleđene godine rođenja i trenutne godine
// koju preuzimate sa računara.
// Pozvati funkciju i dobijeni rezultat ispisati u konzoli.

let godinaRodjenja = (godRodjenja) => {
  let date = new Date();
  let year = date.getFullYear();
  return year - godRodjenja;
};
console.log(godinaRodjenja(1990));

// ZADATAK 4 FUNKCIJE VEZBANJA
/* Pilot želi da napravi program gde unosi vreme polatanja (sat poletanja između 0 i 23 
minut poletanja aviona između 0 i 59) i vreme sletanja aviona (sat sletanja između 0 i
23 i minut sletanja aviona između 0 i 59). Napisati funkciju pilot kojoj se prosleđuje
vreme poletanja i vreme sletanja aviona, a ona pilotu u konzoli ispisuje koliko časova
i minuta je trajao njegov let. Pretpostaviti da su poletanje i sletanje aviona u istom
danu i da je ispravno uneo vrednosti poletanja i sletanja. */

let pilot = (
  vremePoletanjaSat,
  vremePoletanjaMinut,
  vremeSletanjaSat,
  vremeSletanjaMinut
) => {
  let vreme;
  if (vremeSletanjaMinut >= vremePoletanjaMinut) {
    vreme = `${vremeSletanjaSat - vremePoletanjaSat} sata i ${
      vremeSletanjaMinut - vremePoletanjaMinut
    } minuta`;
  } else {
    vreme = `${vremeSletanjaSat - 1 - vremePoletanjaSat} sata i ${
      vremeSletanjaMinut + 60 - vremePoletanjaMinut
    } minuta`;
  }
  return vreme;
};

console.log(pilot(12, 30, 12, 55));

// ZADATAK 5 FUNKCIJE VEZBANJA
// // Specijalitet jedne poslastičare je slatkiš po imenu jaban koje se pravi od jabuka i
// banana. Za jednu porciju ovog slatkiša potrebme su 2 jabuke i 3 banane.
// Poslastičara jabuke i banane dobija od jednog lokalnog dobavljača. U svakoj isporuci
// ima 20% oštećenih jabuka koje se ne mogu iskoristiti za pripremu jaban slatkiša.
// Napisati funkciju jaban koja za prosleđeni broj isporučenih jabuka i prosleđeni broj
// isporučenih banana, određuje i vraća koliko porcija jaban slatkiša je moguće da
// poslastičar napravi. Broj oštećenih jabuka zaokružiti na najbliži ceo broj.

let jaban = (jabuke, banane) => {
  let jabukeT = Math.round(jabuke - (jabuke / 100) * 20);
  let jabanK;
  if (banane / 3 >= jabukeT / 2) {
    jabanK = Math.floor(jabukeT / 2);
  } else {
    jabanK = Math.floor(banane / 3);
  }
  return jabanK;
};
console.log(jaban(40, 52));
