class Krug {
  constructor(poluprecnik) {
    this.poluprecnik = poluprecnik;
  }
  // Poluprecnik GET/SET
  get poluprecnik() {
    return this._poluprecnik;
  }
  set poluprecnik(p) {
    this._poluprecnik = p;
  }
  // METOD Obim Kruga
  obimKruga() {
    return 2 * this._poluprecnik * Math.PI;
  }
  // METOD Povrsina Kruga
  povrsinaKruga() {
    return Math.pow(this._poluprecnik, 2) * Math.PI;
  }
}

export { Krug };
