import IPessoa from "./interface/IPessoa";

export default class PessoaFisica implements IPessoa {
  private _nome: string;
  private _cpf: string;

  constructor (cpf: string, nome: string) {
    this._cpf = cpf;
    this._nome = nome;
  }

  get nome(): string {
    return this._nome;
  }

  get cpf(): string {
    return this._cpf;
  }

  identificar(): string {
    return `Sou uma pessoa Física - ${this.nome}: ${this._cpf}`;
  }
}