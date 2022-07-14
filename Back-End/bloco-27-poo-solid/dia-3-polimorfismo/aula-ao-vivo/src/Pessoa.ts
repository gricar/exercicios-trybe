export default abstract class Pessoa<T> {
  protected _nome!: string;  //utilizamos o "!" quando não desejamos inicializar o parametro por meio do constructor 
  protected _documento!: T;

  abstract identificar(): string;

  constructor (nome: string) {
    this._nome = nome;
  }

  get documento(): T {
    return this._documento;
  }
}