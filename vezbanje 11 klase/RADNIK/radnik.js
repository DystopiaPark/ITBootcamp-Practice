class Radnik {
  constructor(ime, plata) {
    this.ime = ime;
    this.plata = plata;
  }
  // IME GET/SET
  get ime() {
    return this._ime;
  }
  set ime(i) {
    if (typeof i === "string") {
      this._ime = i;
    } else {
      this._ime = "N.N.";
    }
  }
  // PLATA GET/SET
  get plata() {
    return this._plata;
  }
  set plata(p) {
    if (p > 40000) {
      this._plata = p;
    } else {
      this._plata = 40000;
    }
  }
}

export { Radnik };
