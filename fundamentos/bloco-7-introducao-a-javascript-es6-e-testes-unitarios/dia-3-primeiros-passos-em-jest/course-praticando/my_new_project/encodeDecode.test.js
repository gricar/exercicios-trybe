// 4 - Para as funções encode e decode crie os seguintes testes usando Jest:



// encodeDecode.test.js
const { encode, decode } = require('./encodeDecode.js');

describe('Testa a função encode e decode', () => {
  it('a função encode é definida', () => {
    expect(encode).toBeDefined();
  });
  it('encode é uma função', () => {
    expect(typeof encode).toEqual('function'); // 1 - Teste se encode e decode são funções
  });
  it('converte apenas a vogal "a" no número 1', () => {
    expect(encode('ana')).toEqual('1n1'); //2 - Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente;
  });
  it('converte a vogal "e" no número 2', () => {
    expect(encode('ele')).toEqual('2l2'); //4 - Teste se as demais letras/números não são convertidos para cada caso;
  });
  it('converte a vogal "i" no número 3', () => {
    expect(encode('xixi')).toEqual('x3x3');
  });
  it('converte a vogal "o" no número 4', () => {
    expect(encode('ovo')).toEqual('4v4');
  });
  it('converte a vogal "u" no número 5', () => {
    expect(encode('nu')).toEqual('n5');
  });
  it('checa se o retorno da função tem o mesmo número de caracteres', () => {
    expect(encode('trybe').length).toEqual(5);; //5 - Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro.
  });

  it('a função decode é definida', () => {
    expect(decode).toBeDefined();
  });
  it('decode é uma função', () => {
    expect(typeof decode).toEqual('function');
  });
  it('converte apenas o número 1 na vogal a', () => {
    expect(decode('1n1')).toEqual('ana'); //3 - Para a função decode teste se os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u , respectivamente;
  });
  it('converte apenas o número 2 na vogal e', () => {
    expect(decode('2l2')).toEqual('ele');
  });
  it('converte apenas o número 3 na vogal i', () => {
    expect(decode('x3x3')).toEqual('xixi');
  });
  it('converte apenas o número 4 na vogal o', () => {
    expect(decode('4v4')).toEqual('ovo');
  });
  it('converte apenas o número 5 na vogal u', () => {
    expect(decode('n5')).toEqual('nu');
  });
  it('checa se o retorno da função tem o mesmo número de caracteres', () => {
    expect(decode('trybe').length).toEqual(5);
  });
});