import PessoaFisica from "./PessoaFisica";
import PessoaJuridica from "./PessoaJuridica";

const gabriel = new PessoaFisica(72369345623, 'gabriel');

console.log(gabriel.identificar());
console.log('CPF:', gabriel.documento.cpf);

const bradescoCompany = new PessoaJuridica(123456789, 'Bradesco');
console.log(bradescoCompany.identificar());
console.log('CNPJ:', bradescoCompany.documento.cnpj);