import Person from "./Person";

export default class LegalPerson extends Person {
  private _cnpj;

  constructor(name: string, cnpj: string) {
    super(name);
    this._cnpj = cnpj;
  }
}