export default class Person {
  private _name;

  constructor(name: string) {
    this._name = name;
  }

  get name() { return this._name; }
}