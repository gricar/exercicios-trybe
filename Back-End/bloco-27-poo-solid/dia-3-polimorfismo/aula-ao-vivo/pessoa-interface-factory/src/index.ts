import { TipoPessoas } from "./PessoaEnum";
import PessoaFactory from "./PessoaFactory";

const gabigol = PessoaFactory.create(TipoPessoas.FISICA, '45678912363', 'Gabigol');
console.log(gabigol.identificar());

const empresa = PessoaFactory.create(TipoPessoas.JURIDICA, '321654987321', 'Empresa');
console.log(empresa.identificar());