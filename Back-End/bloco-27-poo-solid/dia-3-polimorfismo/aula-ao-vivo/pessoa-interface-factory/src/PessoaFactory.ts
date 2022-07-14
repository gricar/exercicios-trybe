import { TipoPessoas } from "./PessoaEnum";
import PessoaFisica from "./PessoaFisica";
import PessoaJuridica from "./PessoaJuridica";

export default class PessoaFactory {

  private static pessoasDisponiveis = {
    [TipoPessoas.FISICA]: PessoaFisica,
    [TipoPessoas.JURIDICA]: PessoaJuridica
  }

  public static create(type: TipoPessoas, doc: string, nome: string) {
    const p = new PessoaFactory.pessoasDisponiveis[type](doc, nome);

    return p;
  }
}