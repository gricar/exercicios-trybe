import { IPessoaFisica } from "./interfaces/IPessoaFisica";
import Pessoa from "./Pessoa";

export default class PessoaFisica extends Pessoa<IPessoaFisica> {
  constructor(cpf: number, nome: string) {
    super(nome);
    
    this._documento = { cpf };
  }

  identificar(): string {
    return `Sou uma pessoa Física - ${this._nome}: ${this.documento.cpf}`;
  }
}