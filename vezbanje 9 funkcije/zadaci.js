// ZADATAK 1
// Napisati funkciju suma kojoj se prosleđuju parametri n i m, dok funkcija vraća sumu
// kubova brojeva od n do m.
// Pozvati funkciju i njen rezultat ispisati u konzoli..

// arrow function

let kubovi = (n, m) => {
  let suma = 0;
  for (n; n <= m; n++) {
    suma += Math.pow(n, 3);
  }
  return suma;
};

console.log(kubovi(2, 4));

// standard

function kubovi2(n, m) {
  let suma = 0;
  for (n; n <= m; n++) {
    suma += Math.pow(n, 3);
  }
  return suma;
}

console.log(kubovi2(2, 4));

// ZADATAK 2
// Napisati funkciju godine kojoj se prosleđuje parametar godRodjenja.
// Parametar godRodjenja predstavlja godinu rođenja neka osobe. Funkcija treba da
// vrati koliko godina ima ta (prosleđena) osoba.
// Broj godina osobe izračunati na osnovu prosleđene godine rođenja i trenutne godine
// koju preuzimate sa računara.
// Pozvati funkciju i dobijeni rezultat ispisati u konzoli.

let godine = (godRodjenja) => {
  let date = new Date();
  let year = date.getFullYear();
  let godina = year - godRodjenja;
  return godina;
};

console.log(godine(1990));

// ZADATAK 3
// Napisati funkciju deljiv kojoj se prosleđuju tri parametra n, m i k. Funkcija na ekranu
// treba da ispiše broj brojeva od n do m koji su deljivi brojem k. Pozvati funkciju.

let deljiv = (n, m, k) => {
  let brBrojeva = 0;
  let i = n;
  for (i; i <= m; i++) {
    if (i % k == 0) {
      brBrojeva++;
    }
  }
  document.write(
    `U rasponu od ${n} do ${m} ima ${brBrojeva} brojeva deljivih brojem ${k}`
  );
};
deljiv(3, 10, 3);

// ZADATAK 4
// Pilot želi da napravi program gde unosi vreme polatanja (sat poletanja između 0 i 23 i minut poletanja aviona između 0 i 59) i vreme sletanja aviona (sat sletanja između 0 i 23 i minut sletanja aviona između 0 i 59). Napisati funkciju pilot kojoj se prosleđuje vreme poletanja i vreme sletanja aviona, a ona pilotu u konzoli ispisuje koliko časova i minuta je trajao njegov let. Pretpostaviti da su poletanje i sletanje aviona u istom danu i da je ispravno uneo vrednosti poletanja i sletanja.

let pilot = (pS, pM, sS, sM) => {
  let letS;
  let letM;
  if (sM < pM) {
    letM = sM + 60 - pM;
    letS = sS - 1 - pS;
  } else {
    letM = sM - pM;
    letS = sS - pS;
  }
  let vreme = `Let je trajao ${letS}:${letM}`;
  return vreme;
};

console.log(pilot(5, 20, 23, 10));

// ZADATAK 5
// Specijalitet jedne poslastičare je slatkiš po imenu jaban koje se pravi od jabuka i
// banana. Za jednu porciju ovog slatkiša potrebme su 2 jabuke i 3 banane.
// Poslastičara jabuke i banane dobija od jednog lokalnog dobavljača. U svakoj isporuci
// ima 20% oštećenih jabuka koje se ne mogu iskoristiti za pripremu jaban slatkiša.
// Napisati funkciju jaban koja za prosleđeni broj isporučenih jabuka i prosleđeni broj
// isporučenih banana, određuje i vraća koliko porcija jaban slatkiša je moguće da
// poslastičar napravi. Broj oštećenih jabuka zaokružiti na najbliži ceo broj.

let jaban = (jabuke, banane) => {
  let jaban = 0;
  let korisneJabuke = jabuke - Math.round((20 / 100) * jabuke);
  if (korisneJabuke / 2 > banane / 3) {
    jaban = Math.floor(korisneJabuke / 2);
    console.log(korisneJabuke);
  } else {
    jaban = Math.floor(banane / 3);
    console.log(banane);
  }
  return jaban;
};

console.log(jaban(33, 33));

// ZADATAK 6
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
  for (i = 1; i < n; i++) {
    a += d;
    ukupno += a;
  }
  return ukupno;
};

console.log(praksa(5, 10000, 5000));

// ZADATAK 7
// Programirati funkciju za mašinu za izradu nogara za stolove u jednoj fabrici drveta.
// Prva noga stola je duža od druge noge stola isto koliko druga noga stola od treće noge
// stola, isto kao i treća noga stola od četvrte noge stola. Dužina prve noge stola i još
// dve noge stola su poznate, a četvrta nije poznata. Funkcija fabrika određuje i vraća
// dužinu izostale noge stola ako se funkciji prosleđuju poznate dužine ostale tri noge
// stola (dužina prve noge stola i dužine neke dve noge stola).

// let fabrika = (a, b, c) => {
//   let d;
//   let y;

// };
// console.log(fabrika(34, 13, 27));

// ZADATAK 8
// Napisati funkciju prethodniDan kojoj se prosleđuju tri pozitivna cela broja koja
// predstavljaju dan, mesec i godinu jednog ispravnog datuma (najuporniji mogu da
// ispituju i da li su dobre prosleđene vrednosti :) ). Funkcija ispisuje tri cela broja koja
// predstavljaju dan, mesec i godinu jučerašnjeg datuma. Svi brojevi se ispisuju u
// jednom redu, a iza svakog broja navodi se tačka.

// TREBA DA NAPRAVIM USLOV DA IZBACUJE GRESKU AKO JE PREKO 30 DANA U MESECIMA U KOJIMA IMA 30 i za FEBRUAR DA NEMA VISE OD 28 ILI 29

let prethodniDan = (dan, mesec, godina) => {
  let dan2;
  let mesec2;
  let godina2;
  let datum;
  let greska = `Pogresan unos!`;
  if (dan == 1) {
    // prestupna godina
    if (mesec == 3) {
      if ((godina % 4 == 0 && godina % 100 != 0) || godina % 400 == 0) {
        dan2 = 29;
        mesec2 = 2;
        godina2 = godina;
        datum = `${dan2}.${mesec2}.${godina2}`;
        return datum;
      } else {
        dan2 = 28;
        mesec2 = 2;
        godina2 = godina;
        datum = `${dan2}.${mesec2}.${godina2}`;
        return datum;
      }
      // prvi prvi
    } else if (mesec == 1) {
      dan2 = 31;
      mesec2 = 12;
      godina2 = godina - 1;
      datum = `${dan2}.${mesec2}.${godina2}`;
      return datum;
    } else if (
      mesec == 2 ||
      mesec == 4 ||
      mesec == 6 ||
      mesec == 8 ||
      mesec == 9 ||
      mesec == 11
    ) {
      dan2 = 31;
      mesec2 = mesec - 1;
      godina2 = godina;
      datum = `${dan2}.${mesec2}.${godina2}`;
      return datum;
    } else if (mesec == 5 || mesec == 7 || mesec == 10 || mesec == 12) {
      dan2 = 30;
      mesec2 = mesec - 1;
      godina2 = godina;
      datum = `${dan2}.${mesec2}.${godina2}`;
      return datum;
    } else {
      return greska;
    }
  } else if (dan > 1 && dan <= 31) {
    dan2 = dan - 1;
    mesec2 = mesec;
    godina2 = godina;
    datum = `${dan2}.${mesec2}.${godina2}`;
    return datum;
  } else {
    return greska;
  }
};

console.log(prethodniDan(31, 2, 2004));

// ZADATAK 9
// Napisati funkciju naredniDan kojoj se prosleđuju tri pozitivna cela broja koja
// predstavljaju dan, mesec i godinu jednog ispravnog datuma (najuporniji mogu da
// ispituju i da li su dobre prosleđene vrednosti :) ). Funkcija ispisuje tri cela broja koja
// predstavljaju dan, mesec i godinu sutrašnjeg datuma. Svi brojevi se ispisuju u
// jednom redu, a iza svakog broja navodi se tačka.Napisati funkciju prethodniDan kojoj
// se prosleđuju tri pozitivna cela broja koja predstavljaju dan, mesec i godinu jednog
// ispravnog datuma (najuporniji mogu da ispituju i da li su dobre prosleđene vrednosti
// :) ). Funkcija ispisuje tri cela broja koja predstavljaju dan, mesec i godinu jučerašnjeg
// datuma. Svi brojevi se ispisuju u jednom redu, a iza svakog broja navodi se tačka.
