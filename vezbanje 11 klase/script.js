// 1. BOJA========================================================================

import { Boja } from "./BOJA/boja.js";

let boja1 = new Boja(480, 50, 80);
let boja2 = new Boja(560, 90, 30);
let boja3 = new Boja(480, 50, 80);

let nizBoja = [boja1, boja2, boja3];

// Ispitaj Slicnost

let ispitajSlicnost = (boja1, boja2) => {
  if (
    boja1.talasnaDuzina == boja2.talasnaDuzina &&
    boja1.zasicenje == boja2.zasicenje &&
    boja1.intenzitet == boja2.intenzitet
  ) {
    return true;
  } else {
    return false;
  }
};
console.log(ispitajSlicnost(boja1, boja3));
console.log(ispitajSlicnost(boja1, boja2));

// Srednja talsna duzina

let srednjaTalasnaDuzina = (niz) => {
  let zbir = 0;
  niz.forEach((boja) => {
    zbir += boja.talasnaDuzina;
  });
  return zbir / niz.length;
};
console.log(srednjaTalasnaDuzina(nizBoja));

// 2. DATUM========================================================================

import { Datum } from "./DATUM/datum.js";

let dat1 = new Datum(5, 6, 2022);
let dat2 = new Datum(6, 6, 2022);
let dat3 = new Datum(5, 8, 2019);
console.log(dat1);
let ranijiDatum = (datum1, datum2) => {
  if (datum1.godina < datum2.godina) {
    console.log(`${datum1.dan}.${datum1.mesec}.${datum1.godina} je raniji`);
  } else if (datum2.godina < datum1.godina) {
    console.log(`${datum2.dan}.${datum2.mesec}.${datum2.godina} je raniji`);
  } else {
    if (datum1.mesec < datum2.mesec) {
      console.log(`${datum1.dan}.${datum1.mesec}.${datum1.godina} je raniji`);
    } else if (datum2.mesec < datum1.mesec) {
      console.log(`${datum2.dan}.${datum2.mesec}.${datum2.godina} je raniji`);
    } else {
      if (datum1.dan < datum2.dan) {
        console.log(`${datum1.dan}.${datum1.mesec}.${datum1.godina} je raniji`);
      } else if (datum2.dan < datum1.dan) {
        console.log(`${datum2.dan}.${datum2.mesec}.${datum2.godina} je raniji`);
      } else {
        console.log("Datumi su jednaki");
      }
    }
  }
};
ranijiDatum(dat1, dat2);

// 3. RADNIK========================================================================

import { Radnik } from "./RADNIK/radnik.js";

let rad1 = new Radnik("Nikola Stojkovic", 50000);
let rad2 = new Radnik("Milan Vukadinovic", 130000);
let rad3 = new Radnik("Cvetko Pasadzic", 85000);
let rad4 = new Radnik("Misko Milosevic", 130000);

let nizRadnika = [rad1, rad2, rad3, rad4];

// Maks Plata
let maksPlata = (niz) => {
  let max = niz[0].plata;
  niz.forEach((radnik) => {
    if (max < radnik.plata) {
      max = radnik.plata;
    }
  });
  return max;
};
console.log(maksPlata(nizRadnika));

// Maks Plata Osoba

let maksPlataOsoba = (niz) => {
  let maxPay = maksPlata(niz);
  niz.forEach((radnik) => {
    if (radnik.plata == maxPay) {
      console.log(radnik);
    }
  });
};

maksPlataOsoba(nizRadnika);

// 4. AUTOBUS========================================================================

import { Autobus } from "./AUTOBUS/autobus.js";

let a1 = new Autobus(8846, 75);
let a2 = new Autobus(8832, 125);
let a3 = new Autobus(8736, 55);

let nizAutobusa = [a1, a2, a3];

// Ukupno Sedista
let ukupnoSedista = (niz) => {
  let zbir = 0;
  niz.forEach((autobus) => {
    zbir += autobus.brojSedista;
  });
  return zbir;
};

console.log(ukupnoSedista(nizAutobusa));

// Maks Sedista

let maksSedista = (niz) => {
  let max = niz[0].brojSedista;
  let maxB = niz[0];
  niz.forEach((autobus) => {
    if (max < autobus.brojSedista) {
      max = autobus.brojSedista;
      maxB = autobus;
    }
  });
  return maxB;
};

console.log(maksSedista(nizAutobusa));

// Ljudi

let ljudi = (niz, ljudi) => {
  let ukupno = ukupnoSedista(niz);
  if (ukupno >= ljudi) {
    return true;
  } else {
    return false;
  }
};

console.log(ljudi(nizAutobusa, 256));

// 5. RADIO========================================================================

import { FMRadio } from "./RADIO/radio.js";

let r1 = new FMRadio("Kuba", 90.5, 10);
let r2 = new FMRadio("Kuba", 104.5, 19);
let r3 = new FMRadio("Kuba", 98.5, 17);

let nizStanica = [r1, r2, r3];

// Testovi Metoda
console.log(r1.jacinaTona);
r1.promeniZvuk("+");
console.log(r1.jacinaTona);
console.log(r1.frekvencija);
r1.frekvencijaIskljuci();
console.log(r1.frekvencija);

// Srednja Frekvencija

let srednjaFrekvencija = (niz) => {
  let zbir = 0;
  niz.forEach((stanica) => {
    zbir += stanica.frekvencija;
  });
  return zbir / niz.length;
};
console.log(srednjaFrekvencija(nizStanica));

// Najblizi Maks Frekvenciji

let maks = (niz) => {
  let max = niz[0].frekvencija;
  niz.forEach((stanica) => {
    if (stanica.frekvencija > max) {
      max = stanica.frekvencija;
    }
  });
  return max;
};

let najbliziMaks = (niz) => {
  let max = maks(niz);
  let najblizi = niz[0];
  let najbliziVrednost = niz[0].frekvencija;
  niz.forEach((stanica) => {
    if (stanica.frekvencija != max)
      if (najbliziVrednost < stanica.frekvencija) {
        najbliziVrednost = stanica.frekvencija;
        najblizi = stanica;
      }
  });
  return najblizi;
};
console.log(najbliziMaks(nizStanica));

// 6. KRUG========================================================================

import { Krug } from "./KRUG/krug.js";

let k1 = new Krug(5);
let k2 = new Krug(7);
let k3 = new Krug(10);
let k4 = new Krug(9);

let nizKrugova = [k1, k2, k3, k4];

// Upisani Krug

let upisaniKrug = (krug1, krug2) => {
  if (krug1.poluprecnik > krug2.poluprecnik) {
    return true;
  } else {
    return false;
  }
};
console.log(upisaniKrug(k1, k2));

// Rastuci

let rastuci = (niz) => {
  let vrednost = true;
  for (let i = 0; i < niz.length - 1; i++) {
    if (niz[i].poluprecnik > niz[i + 1].poluprecnik) {
      vrednost = false;
      break;
    }
  }
  return vrednost;
};

console.log(rastuci(nizKrugova));

// 7. CIPELA=====================================================================

import { Cipela } from "./CIPELA/cipela.js";

let c1 = new Cipela("Nike", 45, ["zalepi", "zameni", "izglancaj"]);
let c2 = new Cipela("Adidas", 39, ["usij", "zameni"]);
let c3 = new Cipela("Nike", 45, ["zalepi", "prosiri"]);

let nizCipela = [c1, c2, c3];

// Radi

let radi = (cipela) => {
  cipela.nizPrepravki.forEach((prepravka) => {
    if (prepravka == "zalepi") {
      cipela.zalepi();
    } else if (prepravka == "usij") {
      cipela.usij();
    } else if (prepravka == "prosiri") {
      cipela.prosiri();
    } else {
      console.log("Nepoznata prepravka");
    }
  });
};
radi(c1);

// Najvise Prepravki

let maksPrepravke = (niz) => {
  let max = niz[0].nizPrepravki.length;
  niz.forEach((cipela) => {
    if (max < cipela.nizPrepravki.length) {
      max = cipela.nizPrepravki.length;
    }
  });
  return max;
};

let najvisePrepravki = (niz) => {
  let max = maksPrepravke(niz);
  niz.forEach((cipela) => {
    if (cipela.nizPrepravki.length == max) {
      console.log(cipela);
    }
  });
};

najvisePrepravki(nizCipela);

// Broj Prepravki

let brojPrepravki = (niz, prepravka) => {
  let array = [];
  niz.forEach((cipela) => {
    cipela.nizPrepravki.forEach((prep) => {
      if (prep == prepravka) {
        array.push(cipela.brojCipele);
      }
    });
  });
  return array;
};
console.log(brojPrepravki(nizCipela, "zalepi"));

// 8. STUDENT=====================================================================

import { Student } from "./STUDENT/student.js";

let s1 = new Student("0203990740060", "Filip", "Kvakaric", [8, 6, 7, 9, 10]);
let s2 = new Student("0512990740060", "Nemanja", "Stojcic", [8, 9, 7, 9, 9]);
let s3 = new Student("1503002867855", "Filip", "Kvakaric", [6, 6, 6, 9, 8]);

let nizStudenata = [s1, s2, s3];

// imePrezime fukncija

let imePrezime = (ime, prezime, niz) => {
  let br = 0;
  niz.forEach((el) => {
    if (el.ime == ime && el.prezime == prezime) {
      br++;
    }
  });
  return br;
};
console.log(imePrezime("Filip", "Kvakaric", nizStudenata));

// srednjaOcena funkcija

let srednjaOcena = (niz) => {
  let zbir = 0;
  let br = 0;
  niz.forEach((el) => {
    el.nizOcena.forEach((el2) => {
      zbir += el2;
      br++;
    });
  });
  return zbir / br;
};

console.log(srednjaOcena(nizStudenata));

// osrednji funkcija
// Napraviti funkciju osrednji koja ispisuje studenta koji ima prosek najbliži srednjoj oceni svih studenata.
let osrednji = (niz) => {
  let prosecnaOcena = srednjaOcena(niz);
  let najblizaRazlika = Math.abs(niz[0].prosecnaOcena - prosecnaOcena);
  let najbliziStudentProsecnoj = niz[0];
  niz.forEach((el) => {
    if (Math.abs(el.prosecnaOcena - prosecnaOcena) < najblizaRazlika) {
      najblizaRazlika = Math.abs(el.prosecnaOcena - prosecnaOcena);
      najbliziStudentProsecnoj = el;
    }
  });
  return najbliziStudentProsecnoj;
};

console.log(osrednji(nizStudenata));

// Napraviti ocenu najmanjaOcenaNajboljeg koja određuje najboljeg studenta i na ekranu ispisuje njegovu najslabiju ocenu.

let najmanjaOcenaNajboljeg = (niz) => {
  let najboljiStudentOcena = niz[0].prosecnaOcena;
  let najboljiStudent = niz[0];
  niz.forEach((el) => {
    if (el.prosecnaOcena > najboljiStudentOcena) {
      najboljiStudentOcena = el.prosecnaOcena;
      najboljiStudent = el;
    }
  });
  let minNajboljiStudentOcena = najboljiStudent.nizOcena[0];
  najboljiStudent.nizOcena.forEach((el) => {
    if (el < minNajboljiStudentOcena) {
      najboljiStudentOcena = el;
    }
  });
  return najboljiStudentOcena;
};

console.log(najmanjaOcenaNajboljeg(nizStudenata));

// Napisati funkciju najmanjaOcena koja vraća koja je najmanja ocena, uzimajući u obzir ocene svih ocena koje su studenti dobijali.

let najmanjaOcena = (niz) => {
  let najmanja = niz[0].nizOcena[0];
  niz.forEach((el) => {
    el.nizOcena.forEach((el2) => {
      if (el2 < najmanja) {
        najmanja = el2;
      }
    });
  });
  return najmanja;
};

console.log(najmanjaOcena(nizStudenata));

// Napisati funkciju najcescaOcena koja vraća ocenu koju su studenti najčešće dobijali.

let najcescaOcena = (niz) => {
  let nizOcenaNovi = [];
  niz.forEach((el) => {
    el.nizOcena.forEach((el2) => {
      nizOcenaNovi.push(el2);
    });
  });
  let pretpostavkaNajucestalijiElem = nizOcenaNovi[0];
  let brPojavljivanjaPretpostavke = 1; // Sigurno se jednom pojavljivala ta ocena
  for (let i = 0; i < nizOcenaNovi.length; i++) {
    let tekuci = nizOcenaNovi[i]; // zvezdica
    let tekuciBrPojavljivanja = 0;

    for (let j = 0; j < nizOcenaNovi.length; j++) {
      if (tekuci == nizOcenaNovi[j]) {
        tekuciBrPojavljivanja++;
        // nasli smo isti element i treba povecati broj pojavljivanja tekuceg
      }
    }
    if (tekuciBrPojavljivanja > brPojavljivanjaPretpostavke) {
      brPojavljivanjaPretpostavke = tekuciBrPojavljivanja;
      pretpostavkaNajucestalijiElem = tekuci;
    }
  }
  return pretpostavkaNajucestalijiElem;
};

console.log(najcescaOcena(nizStudenata));

// Napisati funkciju rodjeniGodine kojoj se prosleđuje godina, a funkcija na ekranu ispisuje sve studente koji su rodjeni te godine. Godinu rođenja preuzeti (odrediti) iz JMBG-a studenta.

let rodjeniGodine = (niz, godina) => {
  let uporedi;
  if (godina < 2000) {
    uporedi = godina - 1000;
    console.log(uporedi);
  } else {
    uporedi = godina - 2000;
    console.log(uporedi);
  }
  niz.forEach((el) => {
    console.log(el.jmbg.slice(4, 7));
    if (el.jmbg.slice(4, 7) == uporedi) {
      console.log(el);
    }
  });
};

rodjeniGodine(nizStudenata, 1990);

// 9. PLIVAC=====================================================================

import { Plivac } from "./PLIVAC/plivac.js";

let p1 = new Plivac("Marko", 1989, 55);
let p2 = new Plivac("Milan", 1994, 53);
let p3 = new Plivac("Stevan", 1992, 58);
let p4 = new Plivac("Zeljko", 1982, 50);
let p5 = new Plivac("Filip", 1980, 49);
let p6 = new Plivac("Zdravko", 1999, 63);
let p7 = new Plivac("Stefan", 1993, 61);
let p8 = new Plivac("Milivoje", 1985, 50);
let p9 = new Plivac("Milos", 2000, 66);
let p10 = new Plivac("Nemanja", 1981, 75);
let p11 = new Plivac("Ivan", 1984, 37);
let p12 = new Plivac("Jovan", 1985, 52);

let nizPlivaca = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12];

// Napraviti funkciju topTen koja kao rezultat vraća niz od 10 najboljih rezultata ove godine.

let topTen = (niz) => {
  let noviNiz = [];
  niz.forEach((el) => {
    noviNiz.push(el.najboljiRezOveGodine);
  });
  noviNiz.sort((a, b) => a - b);
  return noviNiz.slice(0, 10);
};

console.log(topTen(nizPlivaca));

// Napraviti funkciju norma kojoj se prosleđuje norma i niz plivača, a funkcija vraća niz onih plivača koji ispunjavaju ovu normu.

let norma = (norma, niz) => {
  let noviNiz = [];
  niz.forEach((el) => {
    if (el.najboljiRezOveGodine <= norma) {
      noviNiz.push(el);
    }
  });
  return noviNiz;
};

console.log(norma(60, nizPlivaca));

// Napisati funkciju normaNajmladji koja treba da na ekranu ispiše sve podatke o najmlađem igraču koji zadovoljava normu koja je zadata prethodnom funkcijom.

let normaNajmladji = (niz) => {
  let normaNiz = norma(60, niz);
  let najmladjiRodjenje = normaNiz[0].godinaRodjenja;
  let najmladji = normaNiz[0];
  normaNiz.forEach((el) => {
    if (el.godinaRodjenja > najmladjiRodjenje) {
      najmladjiRodjenje = el.godinaRodjenja;
      najmladji = el;
    }
  });
  return najmladji;
};

console.log(normaNajmladji(nizPlivaca));

// 10. Automobil=====================================================================

import { Automobil } from "./AUTOMOBIL/automobil.js";

let auto1 = new Automobil(100, 30, 55);

// Napraviti metodu  ubrzaj kojoj se prosledjuje vrednost za koliko treba uvećati trenutnu brzinu. Ukoliko nije moguće izvršiti toliko ubrzanje, trenutnu brzinu postaviti na maksimalnu vrednost brzine, u suprotnom uvećati za traženu vrednost.

console.log(auto1);
auto1.ubrzaj(50);
console.log(auto1);

// Napraviti metodu uspori kojoj se prosledjuje vrednost za koliko treba smanjiti trenutnu brzinu. Ukoliko nije moguće izvršiti toliko usporenje, trenutnu brzinu postaviti na minimalnu vrednost brzine, u suprotnom umanjiti brzinu za traženu vrednost.

console.log(auto1);
auto1.uspori(80);
console.log(auto1);
