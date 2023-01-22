class Student {
  constructor(jmbg, ime, prezime, nizOcena) {
    this.jmbg = jmbg;
    this.ime = ime;
    this.prezime = prezime;
    this.nizOcena = nizOcena;
    this.prosecnaOcena = this.prosecnaOcenaMetod();
  }
  // JMBG GET/SET
  get jmbg() {
    return this._jmbg;
  }
  set jmbg(b) {
    if (b.length == 13) {
      this._jmbg = b;
    } else {
      this._jmbg = "Pogresan unos";
    }
  }
  // Ime GET/SET
  get ime() {
    return this._ime;
  }
  set ime(i) {
    this._ime = i;
  }
  // prezime GET/SET
  get prezime() {
    return this._prezime;
  }
  set prezime(p) {
    this._prezime = p;
  }
  // Niz Ocena GET/SET
  get nizOcena() {
    return this._nizOcena;
  }
  set nizOcena(b) {
    let noviNiz = [];
    b.forEach((el) => {
      if (el > 5 && el < 11) {
        noviNiz.push(el);
      } else {
        noviNiz.push(undefined);
      }
    });
    this._nizOcena = noviNiz;
  }
  // Prosecna Ocena GET/SET
  get prosecnaOcena() {
    return this._prosecnaOcena;
  }
  set prosecnaOcena(o) {
    if (o > 5 && o < 11) {
      this._prosecnaOcena = o;
    } else {
      this._prosecnaOcena = undefined;
    }
  }

  // Prosecna Ocena Metod
  prosecnaOcenaMetod() {
    let zbir = 0;
    this.nizOcena.forEach((ocena) => {
      zbir += ocena;
    });
    return zbir / this.nizOcena.length;
  }

  // Ispis Metod
  ispis() {
    console.log(this);
  }
}

export { Student };
