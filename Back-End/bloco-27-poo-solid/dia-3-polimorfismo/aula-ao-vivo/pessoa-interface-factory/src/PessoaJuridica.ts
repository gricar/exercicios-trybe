import IPessoa from "./interface/IPessoa";

export default class PessoaJuridica implements IPessoa {
  private _nome: string;
  private _cnpj: string;

  constructor (cnpj: string, nome: string) {
    this._cnpj = cnpj;
    this._nome = nome;
  }

  get nome(): string {
    return this._nome;
  }

  get cnpj(): string {
    return this._cnpj;
  }

  identificar(): string {
    return `Sou uma pessoa Jurídica - ${this.nome}: ${this._cnpj}`;
  }
}