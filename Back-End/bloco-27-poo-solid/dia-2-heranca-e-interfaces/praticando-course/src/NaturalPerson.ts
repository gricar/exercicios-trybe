import Person from "./Person"

export default class NaturalPerson extends Person {
  private _cpf;

  constructor(name: string, cpf: string) {
    super(name);
    this._cpf = cpf;
  }

  get cpf() { return this._cpf; }
}