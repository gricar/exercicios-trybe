import Character from "./Character";

export default class LongRangeCharacter extends Character {
  constructor(private _name: string, private _specialMoveName: string) {
    super();
  }

  talk(): void {
    /* Entra aqui uma implementação exclusiva para os personagens de longo alcance */
    console.log(`Hi, I'm ${this._name}. I attack at long range.`);
  }

  specialMove(): void {
    /* Entra aqui uma implementação exclusiva para os personagens de longo alcance */
    console.log(this._specialMoveName);
  }
}