class Boja {
  constructor(talasnaDuzina, zasicenje, intenzitet) {
    this.talasnaDuzina = talasnaDuzina;
    this.zasicenje = zasicenje;
    this.intenzitet = intenzitet;
  }
  // Talasna Duzina GET/SET
  get talasnaDuzina() {
    return this._talsnaDuzina;
  }
  set talasnaDuzina(d) {
    if (d > 380 && d < 740) {
      this._talsnaDuzina = d;
    } else {
      this._talsnaDuzina = 560;
    }
  }
  // Zasicenje GET/SET
  get zasicenje() {
    return this._zasicenje;
  }
  set zasicenje(z) {
    if (z > 0 && z <= 100) {
      this._talsnaDuzina = z;
    } else {
      this._talsnaDuzina = 50;
    }
  }
  // Intenzitet GET/SET
  get intenzitet() {
    return this._intenzitet;
  }
  set intenzitet(i) {
    if (i > 0 && i <= 100) {
      this._talintenzitet = i;
    } else {
      this._talintenzitet = 50;
    }
  }
}

export { Boja };
