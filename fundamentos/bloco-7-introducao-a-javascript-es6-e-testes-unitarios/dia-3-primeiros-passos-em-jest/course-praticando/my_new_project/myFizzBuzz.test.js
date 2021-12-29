const myFizzBuzz = require('./myFizzBuzz');

describe('testa a função myFizzBuzz', () => {
  it('deve retornar o valor esperado de acordo com o parametro recebido', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
    expect(myFizzBuzz(9)).toBe('fizz');
    expect(myFizzBuzz(20)).toBe('buzz');
    expect(myFizzBuzz(4)).toBe(4);
    expect(myFizzBuzz('falha')).toBe(false);
  })
})