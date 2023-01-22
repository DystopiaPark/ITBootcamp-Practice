class Automobil {
  constructor(maksBrzina, minBrzina, trenutnaBrzina) {
    this.maksBrzina = maksBrzina;
    this.minBrzina = minBrzina;
    this.trenutnaBrzina = trenutnaBrzina;
  }
  // maksBrzina GET/SET
  get maksBrzina() {
    return this.maksBrzina;
  }
  set maksBrzina(b) {
    if (b > 0) {
      this._maksBrzina = b;
    } else {
      this._maksBrzina = undefined;
    }
  }
  // minBrzina GET/SET
  get minBrzina() {
    return this.minBrzina;
  }
  set minBrzina(b) {
    if (b > 0) {
      this._minBrzina = b;
    } else {
      this._minBrzina = undefined;
    }
  }
  // trenutnaBrzina GET/SET
  get trenutnaBrzina() {
    return this.trenutnaBrzina;
  }
  set trenutnaBrzina(b) {
    if (b > 0) {
      this._trenutnaBrzina = b;
    } else {
      this._trenutnaBrzina = undefined;
    }
  }
  // ubrzaj METODA
  ubrzaj(u) {
    if (this._trenutnaBrzina + u > this._maksBrzina) {
      this._trenutnaBrzina = this._maksBrzina;
    } else {
      this._trenutnaBrzina += u;
    }
  }
  // uspori METODA
  uspori(u) {
    if (this._trenutnaBrzina - u < this._minBrzina) {
      this._trenutnaBrzina = this._minBrzina;
    } else {
      this._trenutnaBrzina -= u;
    }
  }
}

export { Automobil };
