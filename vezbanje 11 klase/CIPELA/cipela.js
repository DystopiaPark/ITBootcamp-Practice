class Cipela {
  constructor(naziv, brojCipele, nizPrepravki) {
    this.naziv = naziv;
    this.brojCipele = brojCipele;
    this.nizPrepravki = nizPrepravki;
  }
  // Naziv GET/SET
  get naziv() {
    return this._naziv;
  }
  set naziv(n) {
    this._naziv = n;
  }
  // Broj cipele GET/SET
  get brojCipele() {
    return this._brojCipele;
  }
  set brojCipele(b) {
    this._brojCipele = b;
  }
  // niz prepravki GET/SET
  get nizPrepravki() {
    return this._nizPrepravki;
  }
  set nizPrepravki(n) {
    this._nizPrepravki = n;
  }
  // METODA Zalepi
  zalepi() {
    console.log("Zalepljena cipela");
  }
  // METODA Prosiri
  prosiri() {
    console.log("Prosirena cipela");
  }
  // METODA Usij
  usij() {
    console.log("Usivena cipela");
  }
}

export { Cipela };
