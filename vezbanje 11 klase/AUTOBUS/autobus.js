class Autobus {
  constructor(registarskiBroj, brojSedista) {
    this.registarskiBroj = registarskiBroj;
    this.brojSedista = brojSedista;
  }
  // Registarski Broj GET/SET
  get registarskiBroj() {
    return this._registarskiBroj;
  }
  set registarskiBroj(b) {
    if (b > 0) {
      this._registarskiBroj = b;
    } else {
      this._registarskiBroj = 0;
    }
  }
  // Broj Sedista GET/SET
  get brojSedista() {
    return this._brojSedista;
  }
  set brojSedista(b) {
    if (b > 50) {
      this._brojSedista = b;
    } else {
      this._brojSedista = 50;
    }
  }
}

export { Autobus };
