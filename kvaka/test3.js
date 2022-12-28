// ZADATAK 1
// ➢ (10 poena)
// Napraviti objekat sportista koji od polja ima:
// ○ imePrezime (string - ime i prezime sportiste)
// ○ visina (decimalni broj koji predstavlja visinu sportiste u metrima)
// ○ timovi (niz stringova - različiti timovi u kojima je sve ovaj sportista igrao)

let sportista1 = {
  imePrezime: `Luka Doncic`,
  visina: 2.2,
  timovi: ["dalas", "paok", "real madrid", "crvena zvezda"],
};
let sportista2 = {
  imePrezime: `Kobe Bryant`,
  visina: 2.2,
  timovi: ["lakers", "nets", "hornets"],
};
let sportista3 = {
  imePrezime: `Nikola Jokic`,
  visina: 2.2,
  timovi: ["nuggets", "timberwolves", "crvena zvezda", "partizan"],
};
let sportista4 = {
  imePrezime: `Zdravko Colic`,
  visina: 2.2,
  timovi: ["nuggets", "timberwolves", "crvena zvezda", "partizan"],
};
let sportista5 = {
  imePrezime: `Thom Yorke`,
  visina: 2.2,
  timovi: ["nuggets", "timberwolves", "crvena zvezda", "partizan"],
};
let sportista6 = {
  imePrezime: `Jimmy Page`,
  visina: 2.2,
  timovi: ["nuggets", "timberwolves", "crvena zvezda", "partizan"],
};
let sportista7 = {
  imePrezime: `Robert Plant`,
  visina: 2.2,
  timovi: ["nuggets", "timberwolves", "crvena zvezda", "partizan"],
};
let sportista8 = {
  imePrezime: `Robert Plant`,
  visina: 2.1,
  timovi: ["nuggets", "timberwolves", "crvena zvezda", "partizan"],
};

let sportisti = [
  sportista1,
  sportista2,
  sportista3,
  sportista4,
  sportista5,
  sportista6,
  sportista7,
  sportista8,
];

// ZADATAK 2
// Napisati funkciju prosečnaVisina kojoj se prosleđuje niz sportista, a ona vraća
// prosečnu visinu sportista. Pozvati funkciju i rezultat ispisati u konzoli.

let prosecnaVisina = (niz) => {
  let zbir = 0;
  let br = 0;
  niz.forEach((el) => {
    zbir += el.visina;
    br++;
  });
  return zbir / br;
};
console.log(prosecnaVisina(sportisti));

// ZADATAK 3
// Napisati funkciju igraliZaTim kojoj se prosleđuje niz sportista i naziv tima, a funkcija
// prebrojava koliko puta se prosleđeni tim pojavljuje među timovima za koje su
// sportisti igrali i vraća taj broj

let igraliZaTim = (niz, tim) => {
  let br = 0;
  niz.forEach((el) => {
    el.timovi.forEach((el2) => {
      if (el2 == tim) {
        br++;
      }
    });
  });
  return br;
};

console.log(igraliZaTim(sportisti, `crvena zvezda`));

// ZADATAK 4
// Napisati funkciju najmanjeTransfera kojoj se prosleđuje niz sportista, a funkcija
// vraća ime i prezime onog sportiste koji je imao najmanji broj transfera (najmanje
// puta je promenio tim). Pozvati funkciju i rezultat ispisati u konzoli. Ukoliko postoji
// više takvih sportista, vratiti ime i prezime bilo kog od takvih sportista.

let najmanjeTransfera = (niz) => {
  let minTimova = sportisti[0].timovi.length;
  let minImePrezime = sportisti[0].imePrezime;
  niz.forEach((el) => {
    let br = 0;
    // let tekuciBrTransfera = el.timovi.length
    el.timovi.forEach((el2) => {
      br++;
    });
    if (br < minTimova) {
      minTimova = br;
      minImePrezime = el.imePrezime;
    }
  });
  return minImePrezime;
};
console.log(najmanjeTransfera(sportisti));

// ZADATAK 5
// Trener igrače na treningu deli u dva tima kako bi se što bolje pripremili za utakmicu.
// Kada trener dobije spisak sportista (niz sportista) on ih deli na sledeći način:
// ○ Ukoliko je na spisku paran broj igrača, trener u prvi tim stavlja prvu polovinu
// igrača sa spiska, dok drugi tim čine igrači sa druge polovine liste

// ○ Ukoliko je na spisku neparan broj igrača, trener u prvi tim stavlja jednog
// igrača više nego u drugi tim.

// Napisati funkciju višiTimPodela, kojoj se prosleđuje niz sportista a funkcija ispisuje
// na ekranu tekst “Viši je prvi tim” ukoliko je prosečna visina igrača u prvom timu veća
// od prosečne visine igrača u drugom timu. U suprotnom funkcija na ekranu ispisuje
// “Viši je drugi tim”. Ako su te dve prosečne visine iste, funkcija ispisuje tekst “Oba
// tima su u proseku iste visine”. Pozvati funkciju.

let visiTimPodela = (sportisti) => {
  let prosek1 = 0;
  let zbir1 = 0;
  let prosek2 = 0;
  let zbir2 = 0;

  if (sportisti.length % 2 == 0) {
    for (let i = 0; i < sportisti.length / 2; i++) {
      zbir1 += sportisti[i].visina;
    }
    prosek1 = zbir1 / sportisti.length / 2;
    for (let i = sportisti.length / 2; i < sportisti.length; i++) {
      zbir2 += sportisti[i].visina;
    }
    prosek2 = zbir2 / sportisti.length / 2;
  } else {
    for (let i = 0; i < sportisti.length / 2; i++) {
      zbir1 += sportisti[i].visina;
    }
    prosek1 = zbir1 / Math.ceil(sportisti.length / 2);
    for (let i = Math.ceil(sportisti.length / 2); i < sportisti.length; i++) {
      zbir2 += sportisti[i].visina;
    }
    prosek2 = zbir2 / Math.floor(sportisti.length / 2);
  }
  if (prosek2 == prosek1) {
    console.log(`Oba tima su u proseku iste visine`);
  } else if (prosek1 > prosek2) {
    console.log(`Visi je prvi tim`);
  } else {
    console.log(`Visi je drugi tim`);
  }
};
visiTimPodela(sportisti);

// ========================================================================
let visiTimPodela2 = (niz) => {
  let prviTim = [];
  let drugiTim = [];

  //Sportisti prvog tima
  for (let i = 0; i < Math.ceil(niz.length / 2); i++) {
    prviTim.push(niz[i]);
  }

  //Sportisti drugog tima
  for (let j = Math.ceil(niz.length / 2); j < niz.length; j++) {
    drugiTim.push(niz[j]);
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
visiTimPodela2(nizSportista);

// ZADATAK 6
// Napisati funkciju ​ trenerVidi ​kojoj se prosleđuje niz sportista a funkcija vraća
// vrednost (ceo broj) koliko sportista trener vidi.
// Pretpostavimo da sportisti stoje u vrsti, kao na sledećoj slici, a da trener stoji pre
// prvog sportiste u vrsti(pre nultog elementa u nizu).
// Vaš zadatak je da prebrojite koliko sportista trener može da vidi sa svoje pozicije.
// Na primer on vidi sportistu sa rednim brojem 0 koji je visok ​ 2.04​(videti sliku).
// Zatim on ne vidi sportiste sa rednim brojevima 1,2,3,4 i 5 jer su niži od sportiste koji
// je visok 2.04 i on ih zaklanja. Sledećeg vidi sportistu koji na dresu nosi broj 6 koji je
// visok ​ 2.05​i na kraju vidi sportostu koji na dresu nosi broj 7 i koji je visok ​ 2.10​ .
// Zaključujemo da na ovom primeru trener vidi trojicu sportista, te bi funkcija u ovom
// slučaju trebalo kao rezultat da vrati broj 3

let trenerVidi = (niz) => {
  let br = 0; // let br = 1;
  let najvisi = 0; //   let najvisi = niz[0].visina;
  niz.forEach((el) => {
    if (el.visina > najvisi) {
      br++;
      najvisi = el.visina;
    }
  });
  return br;
};
console.log(trenerVidi(sportisti));
