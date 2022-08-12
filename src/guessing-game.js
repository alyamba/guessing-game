class GuessingGame {
  constructor() {
    this.min = null;
    this.max = null;
    this.pivot = null;
  }

  setRange(min, max) {
    this.min = min;
    this.max = max;
  }

  guess() {
    this.pivot = Math.round((this.min + this.max) / 2);
    return this.pivot;
  }

  lower() {
    this.max = this.pivot;
    this.guess();
  }

  greater() {
    this.min = this.pivot;
    this.guess();
  }
}

module.exports = GuessingGame;
