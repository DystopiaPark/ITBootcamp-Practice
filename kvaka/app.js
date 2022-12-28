// Link ka propratnom video materijalu
// https://photos.app.goo.gl/bdo4CYEAMaEynVYe8

console.log("Test4");

//  1. Zadatak
let sportista1 = {
  imePrezime: "Vlade Divac",
  visina: 2.12,
  timovi: ["Partizan", "Lakers", "Charlote", "Sacramento"],
};
let sportista2 = {
  imePrezime: "Predrag Stojakovic",
  visina: 2.06,
  timovi: ["Sacramento", "Toronto", "Dalas", "Indiana", "New Orleans"],
};
let sportista3 = {
  imePrezime: "Lebron James",
  visina: 1.97,
  timovi: ["Clevlend", "Miami", "Lakers"],
};
let sportista4 = {
  imePrezime: "Luka Doncic",
  visina: 2.01,
  timovi: ["Real Madrid", "Dalas"],
};
let sportista5 = {
  imePrezime: "Dirk Nowitzki",
  visina: 2.13,
  timovi: ["Vircburg", "Dalas"],
};
let nizSportista = [sportista1, sportista2, sportista3, sportista4, sportista5];

/*
2. Zadatak
Napisati funkciju prosečnaVisina kojoj se prosleđuje niz sportista, a ona vraća
prosečnu visinu sportista. Pozvati funkciju i rezultat ispisati u konzoli.
*/
let prosecnaVisina = (sportisti) => {
  let sumVisina = 0;
  sportisti.forEach((element) => {
    sumVisina += element.visina;
  });

  let arsrVisina = sumVisina / sportisti.length;
  return arsrVisina;
};
console.log("2. Zadatak - " + prosecnaVisina(nizSportista));

/*
3. Zadatak
Napisati funkciju igraliZaTim kojoj se prosleđuje niz sportista i naziv tima, a funkcija
prebrojava koliko puta se prosleđeni tim pojavljuje među timovima za koje su
sportisti igrali i vraća taj broj.
*/
let igraliZaTim = (sportisti, nazivTima) => {
  let brPonavljanja = 0;
  sportisti.forEach((sportista) => {
    let timoviSportiste = sportista.timovi;
    timoviSportiste.forEach((tim) => {
      if (tim == nazivTima) {
        brPonavljanja++;
      }
    });
  });

  return brPonavljanja;
};
console.log("3. Zadatak - " + igraliZaTim(nizSportista, "Dalas"));

/*
4. Zadatak
Napisati funkciju najmanjeTransfera kojoj se prosleđuje niz sportista, a funkcija
vraća ime i prezime onog sportiste koji je imao najmanji broj transfera (najmanje
puta je promenio tim). Pozvati funkciju i rezultat ispisati u konzoli. Ukoliko postoji
više takvih sportista, vratiti ime i prezime bilo kog od takvih sportista.
*/
let najmanjeTransfera = (sportisti) => {
  //Pretpostavka za sportistu koji je promenio najmanje timova
  let minTransfera = sportisti[0].timovi.length;
  let minImePrezime = sportisti[0].imePrezime;

  sportisti.forEach((sportista) => {
    let tekuciBrTransfera = sportista.timovi.length;
    if (tekuciBrTransfera < minTransfera) {
      minTransfera = tekuciBrTransfera;
      minImePrezime = sportista.imePrezime;
    }
  });

  return minImePrezime;
};

console.log("4. Zadatak - " + najmanjeTransfera(nizSportista));

/*
5. Zadatak
*/
let visiTimPodela = (sportisti) => {
  let prviTim = [];
  let drugiTim = [];

  //Sportisti prvog tima
  for (let i = 0; i < Math.ceil(sportisti.length / 2); i++) {
    prviTim.push(sportisti[i]);
  }

  //Sportisti drugog tima
  for (let j = Math.ceil(sportisti.length / 2); j < sportisti.length; j++) {
    drugiTim.push(sportisti[j]);
  }

  if (prosecnaVisina(prviTim) > prosecnaVisina(drugiTim)) {
    console.log("Viši je prvi tim");
  } else if (prosecnaVisina(prviTim) < prosecnaVisina(drugiTim)) {
    console.log("Viši je drugi tim");
  } else {
    console.log("Oba tima su u proseku iste visine");
  }
};

console.log("5. Zadatak");
visiTimPodela(nizSportista);

/*
6. Zadatak
Napisati funkciju trenerVidi kojoj se prosleđuje niz sportista a funkcija vraća
vrednost (ceo broj) koliko sportista trener vidi.
Pretpostavimo da sportisti stoje u vrsti, kao na sledećoj slici, a da trener stoji pre
prvog sportiste u vrsti(pre nultog elementa u nizu).
Vaš zadatak je da prebrojite koliko sportista trener može da vidi sa svoje pozicije.
Na primer on vidi sportistu sa rednim brojem 0 koji je visok 2.04 (videti sliku).
Zatim on ne vidi sportiste sa rednim brojevima 1,2,3,4 i 5 jer su niži od sportiste koji
je visok 2.04 i on ih zaklanja. Sledećeg vidi sportistu koji na dresu nosi broj 6 koji je
visok 2.05 i na kraju vidi sportostu koji na dresu nosi broj 7 i koji je visok 2.10.
Zaključujemo da na ovom primeru trener vidi trojicu sportista, te bi funkcija u ovom
slučaju trebalo kao rezultat da vrati broj 3.
*/
let trenerVidi = (sportisti) => {
  let maxVisina = sportisti[0].visina;
  let brojVidljivih = 1;

  sportisti.forEach((sportista) => {
    if (sportista.visina > maxVisina) {
      maxVisina = sportista.visina;
      brojVidljivih++;
    }
  });

  return brojVidljivih;
};
console.log("6. Zadatak - " + trenerVidi(nizSportista));

//Primer
let vratiDva = (a, b) => {
  a++;
  b++;
  return [a, b];
};
let pVratiDva = vratiDva(3, 5);
console.log(pVratiDva[0], pVratiDva[1]);
