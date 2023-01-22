class FMRadio {
  constructor(stanica, frekvencija, jacinaTona) {
    this.stanica = stanica;
    this.frekvencija = frekvencija;
    this.jacinaTona = jacinaTona;
  }
  // Stanica GET/SET
  get stanica() {
    return this._stanica;
  }
  set stanica(s) {
    if (typeof s === "string") {
      this._stanica = s;
    } else {
      this._stanica = "Radio Stanica";
    }
  }
  // Frekvencija GET/SET
  get frekvencija() {
    return this._frekvencija;
  }
  set frekvencija(f) {
    if (f >= 87.5 && f <= 108) {
      this._frekvencija = f;
    } else {
      this._frekvencija = 90;
    }
  }
  // Jacina Tona GET/SET
  get jacinaTona() {
    return this._jacinaTona;
  }
  set jacinaTona(t) {
    if (t >= 0 && t <= 20) {
      this._jacinaTona = t;
    } else {
      this._jacinaTona = 10;
    }
  }
  // METOD Promeni Zvuk
  promeniZvuk(operator) {
    if (operator === "+") {
      if (this._jacinaTona < 20) {
        this._jacinaTona++;
      } else {
        if (this._jacinaTona > 0) {
          this._jacinaTona--;
        }
      }
    }
  }
  // METOD Frekvencija Iskljuci
  frekvencijaIskljuci() {
    this._frekvencija = 87.5;
  }
}

export { FMRadio };
