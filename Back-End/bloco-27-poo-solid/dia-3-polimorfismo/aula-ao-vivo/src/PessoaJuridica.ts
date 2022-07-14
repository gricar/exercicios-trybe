import { IPessoaJuridica } from "./interfaces/IPessoaFisica";
import Pessoa from "./Pessoa";

export default class PessoaJuridica extends Pessoa<IPessoaJuridica> {
  constructor(cnpj: number, nome: string) {
    super(nome);
    
    this._documento = { cnpj };
  }

  identificar(): string {
    return `Sou uma pessoa Juridica - ${this._nome}: ${this.documento.cnpj}`;
  }
}