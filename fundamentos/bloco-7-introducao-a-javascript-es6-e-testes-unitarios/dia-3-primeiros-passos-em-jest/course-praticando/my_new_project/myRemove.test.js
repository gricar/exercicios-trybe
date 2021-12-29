const myRemove = require('./myRemove');

describe('testa a função myRemove', () => {
  const arrayInput = [1, 2, 3, 4];
  it('deve retornar o array correto', () => {
    expect(myRemove(arrayInput, 3)).toEqual([1, 2, 4]);
    expect(myRemove(arrayInput, 3)).not.toEqual(arrayInput);
    expect(myRemove(arrayInput, 5)).toEqual(arrayInput);
  })
})