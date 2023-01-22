class Plivac {
  constructor(ime, godinaRodjenja, najboljiRezOveGodine) {
    this.ime = ime;
    this.godinaRodjenja = godinaRodjenja;
    this.najboljiRezOveGodine = najboljiRezOveGodine;
  }
  // Ime GET/SET
  get ime() {
    return this._ime;
  }
  set ime(i) {
    if (typeof i == "number") {
      this._ime = "Pogresan unos";
    } else {
      this._ime = i;
    }
  }
  // Godina Rodjenja GET/SET
  get godinaRodjenja() {
    return this._godinaRodjenja;
  }
  set godinaRodjenja(g) {
    if (g >= 0) {
      this._godinaRodjenja = g;
    } else if (g < 0) {
      this._godinaRodjenja = `${g} p.n.e`;
    } else {
      this._godinaRodjenja = "Pogresan unos";
    }
  }
  // Najbolji Rez GET/SET
  get najboljiRezOveGodine() {
    return this._najboljiRezOveGodine;
  }
  set najboljiRezOveGodine(g) {
    if (g > 0) {
      this._najboljiRezOveGodine = g;
    } else {
      this._najboljiRezOveGodine = undefined;
    }
  }
  ispisi() {
    console.log(this);
  }
}

export { Plivac };
