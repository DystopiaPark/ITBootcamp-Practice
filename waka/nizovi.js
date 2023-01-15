// Množiti članove niza sve dok je proizvod manji od 541.
let niz = [5, 6, 3, 2, 9];
// ZADATAK 4
// Odrediti srednju vrednost elemenata celobrojnog niza.
let zbir = 0;
niz.forEach((el) => {
  zbir += el;
});
let aS = zbir / niz.length;
console.log(aS);
// ZADATAK 5
// Odrediti maksimalnu vrednost u celobrojnom nizu.

let max = niz[0];
niz.forEach((el) => {
  if (el > max) {
    max = el;
  }
});
console.log(max);
// ZADATAK 7
// Odrediti indeks maksimalnog elementa celobrojnog
// niza.
let max1 = niz[0];
let indeks = 0;
niz.forEach((el, i) => {
  if (el > max1) {
    max1 = el;
    indeks = i;
  }
});
console.log(indeks);

// sa casa vraca indeks poslednjeg maksimuma

// ZADATAK 12
// Odrediti broj parnih elemenata sa neparnim indeksom.
let br = 0;
for (let i = 0; i < niz.length; i++) {
  if (niz[i] % 2 == 0 && i % 2 != 0) {
    br++;
  }
}
console.log(br);

// ZADATAK 14
// Promeniti znak svakom elementu celobrojnog niza.

for (let i = 0; i < niz.length; i++) {
  niz[i] = -niz[i];
}

for (let i = 0; i < niz.length; i++) {
  niz[i] = -niz[i];
}
console.log(niz);
// ZADATAK 16
// Dat je niz stavki za kupovinu (članovi niza su stringovi).
// Prolaskom kroz niz napraviti neuređenu listu i ispisati je u
// html dokument.

let niz2 = ["carape", "Aanane", "aleko", "jogurt", "caselomimruke"];

let neuredjenaLista = (niz) => {
  let lista = `<ul>`;
  niz.forEach((el) => {
    lista += `
   <li>${el}</li>
  `;
  });
  lista += `</ul>`;
  return lista;
};
document.body.innerHTML += neuredjenaLista(niz2);

// ZADATAK 17
// Dat je niz imena košarkaškog tima. Prolaskom kroz niz
// formirati tabelu u čijim su redovima imena tima, i tabelu
// ispisati u html dokument.

let kosarkasi = (niz) => {
  let table = `<table border= 1>`;
  niz.forEach((el) => {
    table += `
   <tr>
    <td>${el}</td>
   </tr>
  `;
  });
  table += `</table>`;
  return table;
};
document.body.innerHTML += kosarkasi(niz2);

// ZADATAK 19
// Ispisati dužinu svakog elementa u nizu stringova.

let ispisDuzine = (niz) => {
  niz.forEach((el) => {
    console.log(el.length);
  });
};
ispisDuzine(niz2);
// ZADATAK 20
// Odrediti element u nizu stringova sa najvećom dužinom.

let najduziString = (niz) => {
  let najduzi = niz[0].length;
  niz.forEach((el) => {
    if (el.length > najduzi) {
      najduzi = el.length;
    }
  });
  return najduzi;
};
console.log(najduziString(niz2));
// ZADATAK 21
// Odrediti broj elemenata u nizu stringova čija je dužina
// veća od prosečne dužine svih stringova u nizu.

let aSr = (niz) => {
  let zbir = 0;
  niz.forEach((el) => {
    zbir += el.length;
  });
  return zbir / niz.length;
};

let greaterAsr = (niz) => {
  let br = 0;
  let arSr = aSr(niz2);
  console.log(arSr);
  niz.forEach((el) => {
    if (el.length > arSr) {
      br++;
    }
  });
  return br;
};
console.log(greaterAsr(niz2));

// ZADATAK 22
// Odrediti broj elemenata u nizu stringova koji sadrže slovo
// 'a’.
let br2 = 0;
niz2.forEach((el) => {
  if (el.includes("a")) {
    br2++;
  }
});
console.log(br2);
// ZADATAK 23
// Odrediti broj elemenata u nizu stringova koji počinju na
// slovo 'a' ili 'A’.

let br3 = 0;
niz2.forEach((el) => {
  if (el[0] == "a" || el[0] == "A") {
    br3++;
  }
});
console.log(br3);
