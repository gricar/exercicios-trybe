import IAnimal from "./interfaces/IAnimal";

export default class Bird implements IAnimal {
  constructor(public name: string, private birthDate: Date) {}

  get age() {
    let timeDiff = Math.abs(Date.now() - new Date(this.birthDate).getTime());
    return Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
  }

  getBirthDate(): Date {
    return this.birthDate;
  }

  fly() { console.log(`${this.name} está voando!`); }
}