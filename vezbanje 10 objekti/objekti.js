// Zadatak 1.
// Objekat Student sadrži njegovo ime (string), prezime (string), godinu studija (ceo broj između 1 i 5), kao i niz ocena do sada položenih ispita (niz celih brojeva, gde je svaki od brojeva u intervalu od 6 do 10).
// Kreirati niz od barem 4 studenta. Napisati sledeće arrow funkcije:
let student1 = {
  ime: `Filip`,
  prezime: `Stojanovic`,
  godinaStudija: 3,
  nizOcena: [7, 9, 8, 7, 9],
};

let student2 = {
  ime: `Nikola`,
  prezime: `Stefanovic`,
  godinaStudija: 1,
  nizOcena: [10, 10, 10, 10, 10],
};
let student3 = {
  ime: `Vuk`,
  prezime: `Jovanovic`,
  godinaStudija: 2,
  nizOcena: [10, 10, 10, 10, 10, 10],
};
let student4 = {
  ime: `Petar`,
  prezime: `Petrovic`,
  godinaStudija: 4,
  nizOcena: [6, 6, 6, 6, 6, 6, 6],
};
let student5 = {
  ime: `Mitar`,
  prezime: `Miric`,
  godinaStudija: 4,
  nizOcena: [6, 6, 6, 6, 7, 6, 7],
};

let nizStudenata = [student1, student2, student3, student4, student5];

// 1 Funkciji se prosleđuje niz studenata i string koji sadrži jedan karakter, a štampa imena i prezimena svih studenata čije prezime počinje na zadato slovo.
let prvoSlovo = (niz, slovo) => {
  niz.forEach((el) => {
    if (el.ime.charAt(0) == slovo.toUpperCase()) {
      console.log(el.ime, el.prezime);
    }
  });
};

prvoSlovo(nizStudenata, `v`);

// 2 Funkciji se prosleđuje niz studenata i dva stringa, a štampa imena i prezimena svih studenata čije ime sadrži prvi string, a prezime sadrži drugi string..

let prvoSlovo2 = (niz, slovo1, slovo2) => {
  niz.forEach((el) => {
    if (el.ime.includes(slovo1) && el.prezime.includes(slovo2)) {
      console.log(el.ime, el.prezime);
    }
  });
};

prvoSlovo2(nizStudenata, `i`, `o`);

// 3 Funkciji se prosleđuje niz studenata i ceo broj između 1 i 5 koji predstavlja godinu studija, a vraća broj studenata koji se nalaze na prosleđenoj godini studija.

let brStudentaNaGodini = (niz, godina) => {
  let br = 0;
  niz.forEach((el) => {
    if (el.godinaStudija == godina) {
      br++;
    }
  });
  return br;
};

console.log(brStudentaNaGodini(nizStudenata, 2));

// 4 Funkciji se prosleđuje niz studenata, a ona ispisuje ime i prezime studenta sa maksimalnim prosekom. Ukoliko ima više takvih studenata, ispisati ime i prezime bilo kog takvog studenta.

// 1. nacin==================================================================
let maksimalniProsek = (niz) => {
  niz.forEach((el) => {
    let nizOcena = el.nizOcena; // skladistimo nizOcena konkretnog elementa
    let zbir = 0;
    let br = 0;
    nizOcena.forEach((el2) => {
      zbir += el2;
      br++;
    });
    let prosek = zbir / br;
    if (prosek == 10) {
      console.log(el.ime, el.prezime);
    }
  });
};

maksimalniProsek(nizStudenata);

// 2. nacin================================================================

let student11 = {
  ime: "Dragan",
  prezime: "Aetrovic",
  godStudija: 3,
  ocene: [8, 9, 7, 8, 8, 10, 9, 10, 10, 10, 10, 10, 10, 10, 10],
};
let student22 = {
  ime: "Milan",
  prezime: "Markovic",
  godStudija: 4,
  ocene: [8, 9, 7, 8, 9, 10, 9, 7, 9, 9, 7, 8, 10, 8],
};
let student33 = {
  ime: "Milos",
  prezime: "Zarkovic",
  godStudija: 4,
  ocene: [8, 9, 7, 8, 8, 10, 9, 10, 10, 10, 10, 10, 10, 10, 10],
};
let student44 = {
  ime: "Mosa",
  prezime: "Aijade",
  godStudija: 4,
  ocene: [8, 9, 7, 8, 9, 6, 6, 8, 7, 8, 9, 8, 7],
};
let studenti = [student11, student22, student33, student44];

let prosecnaOcena = (ocene) => {
  let sum = 0;
  ocene.forEach((o) => {
    sum += o;
  });
  return sum / ocene.length;
};

let najStudent = (studenti) => {
  let naj = studenti[0];

  studenti.forEach((student) => {
    if (prosecnaOcena(naj.ocene) < prosecnaOcena(student.ocene)) {
      naj = student;
    }
  });
  return `${naj.ime} ${naj.prezime}`;
};
console.log(najStudent(studenti));

// 3. nacin =======================================================================

let najStudent1 = (studenti) => {
  let ime_najboljeg = "";
  let prezime_najboljeg = "";
  let prosek_najboljeg = -1;

  studenti.forEach((student) => {
    let zbir = 0;
    student.ocene.forEach((ocena) => {
      zbir += ocena;
    });
    let prosek = zbir / student.ocene.length;
    if (prosek > prosek_najboljeg) {
      //vraca prvog najboljeg, da ima => vraca poslednjeg
      prosek_najboljeg = prosek;
      ime_najboljeg = student.ime;
      prezime_najboljeg = student.prezime;
    }
  });
  return `${ime_najboljeg} ${prezime_najboljeg}`;
};
console.log(najStudent1(studenti));

// 4. nacin =================================================================

let sviNajStudenti = (studenti) => {
  let prosek_najboljeg = -1;
  // 1. Izracunamo koji je najveci prosek
  studenti.forEach((student) => {
    let zbir = 0;
    student.ocene.forEach((ocena) => {
      zbir += ocena;
    });
    let prosek = zbir / student.ocene.length;
    if (prosek > prosek_najboljeg) {
      //vraca prvog najboljeg, da ima => vraca poslednjeg
      prosek_najboljeg = prosek;
    }
  });

  // 2. Trazimo sve studente koji imaju prosek koji smo dobili kao najveci u 1.
  studenti.forEach((student) => {
    if (prosek_najboljeg == prosecnaOcena(student.ocene)) {
      console.log(`${student.ime} ${student.prezime}`);
    }
  });
};
sviNajStudenti(studenti);

// 5 Student je prosečan ako nema nijednu šesticu i nijednu desetku. Funkciji se prosleđuje niz studenata, a ona ispisuje sve prosečne studente.

let prosecanStudent = (niz) => {
  niz.forEach((el) => {
    let nizOcena = el.nizOcena;
    let prosecan = true;
    nizOcena.forEach((el2) => {
      if (el2 == 6 || el2 == 10) {
        prosecan = false;
      }
    });
    if (prosecan == true) {
      console.log(el.ime, el.prezime);
    }
  });
};

prosecanStudent(nizStudenata);

// 6 Student je “ekstra” ako je polagao ispite samo sa devetkama i desetkama, i pri tome je broj desetki barem duplo veći od broja devetki. Funkciji se prosleđuje niz studenata, a ona ispisuje sve ekstra studente.

let ekstraStudent = (niz) => {
  niz.forEach((el) => {
    let nizOcena = el.nizOcena;
    let brojDevetki = 0;
    let brojDesetki = 0;
    let drugeOcene = 0;
    nizOcena.forEach((el2) => {
      if (el2 < 9) {
        drugeOcene++;
      } else if (el2 == 9) {
        brojDevetki++;
      } else {
        brojDesetki++;
      }
    });
    if (drugeOcene > 0) {
    } else if (brojDesetki >= brojDevetki * 2) {
      console.log(el.ime, el.prezime);
    } else {
    }
  });
};

ekstraStudent(nizStudenata);

// 7. Student “kida” ako je polagao ispite samo samo sa devetkama i desetkama, a broj devetki je manji od godine studije na kojoj se student nalazi. Funkciji se prosleđuje niz studenata, a ona ispisuje sve studente koji kidaju.

let studentKida = (niz) => {
  niz.forEach((el) => {
    let nizOcena = el.nizOcena;
    let brDevetki = 0;
    let brojDesetki = 0;
    let drugeOcene = 0;
    nizOcena.forEach((el2) => {
      if (el2 < 9) {
        drugeOcene++;
      } else if (el2 == 9) {
        brDevetki++;
      } else {
        brojDesetki++;
      }
    });
    if (drugeOcene > 0) {
    } else if (brDevetki < el.godinaStudija) {
      console.log(el.ime, el.prezime);
    }
  });
};

studentKida(nizStudenata);

// 8. Student “razbija” ako je sve ispite položio sa ocenom deset. Pri tome, broj desetki ne sme biti manji od broja 5 * (godina_studija - 1). (Dakle, ne može student na trećoj godini da razbija ako je položio jedan ispit, kao što nijedan student prve godine još ne može da razbija, jer još nije položio sve ispite iz tekuće godine). Funkciji se prosleđuje niz studenata, a ona ispisuje sve studente koji razbijaju.
// ???????????????????????????????????????????????????????????????????????
let studentRazbija = (niz) => {
  niz.forEach((el) => {
    let nizOcena = el.nizOcena;
    let brojDesetki = 0;
    let diskvalifikacija = 0;
    nizOcena.forEach((el) => {
      if (el != 10) {
        diskvalifikacija++;
      } else {
        brojDesetki++;
      }
    });
    if (diskvalifikacija > 0) {
    } else if (brojDesetki > 5 * (el.godinaStudija - 1)) {
      console.log(el.ime, el.prezime);
    }
  });
};

studentRazbija(nizStudenata);

// 9. Student je “aljkav” ako nijedan ispit nije položio sa ocenom većom od 7. Funkciji se prosleđuje niz studenata, a ona prebrojava sve aljkave studente.

let aljkavStudent = (niz) => {
  let aljkav = 0;
  niz.forEach((el) => {
    let nizOcena = el.nizOcena;
    let diskvalifikacija = 0;
    nizOcena.forEach((el) => {
      if (el > 7) {
        diskvalifikacija++;
      }
    });
    if (diskvalifikacija > 0) {
    } else {
      aljkav++;
    }
  });
  return aljkav;
};

console.log(aljkavStudent(nizStudenata));

// 10. Student se “bruka” ako nije student prve godine, a broj položenih ispita je manji od broja 3 * (godina_studija - 1), i pri tome nijedna ocena nije veća od 7. Funkciji se prosleđuje niz studenata, a ona prebrojava sve studente koji se brukaju.

let brukaStudent = (niz) => {
  niz.forEach((el) => {
    let nizOcena = el.nizOcena;
    nizOcena.forEach((el2) => {
      if (el2 > 7) {
      }
    });
  });
};
