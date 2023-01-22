class Datum {
  constructor(dan, mesec, godina) {
    this.dan = dan;
    this.mesec = mesec;
    this.godina = godina;
  }
  // Dan
  get dan() {
    return this._dan;
  }
  set dan(d) {
    if (d <= 31 && d >= 1) {
      this._dan = d;
    } else {
      this._dan = 1;
    }
  }
  // Mesec
  get mesec() {
    return this._mesec;
  }
  set mesec(m) {
    if (m <= 12 && m >= 1) {
      this._mesec = m;
    } else {
      this._mesec = 1;
    }
  }
  // Godina
  get godina() {
    return this._godina;
  }
  set godina(g) {
    if ((g) => 0) {
      this._godina = g;
    } else {
      this._godina = 2022;
    }
  }
}

export { Datum };
