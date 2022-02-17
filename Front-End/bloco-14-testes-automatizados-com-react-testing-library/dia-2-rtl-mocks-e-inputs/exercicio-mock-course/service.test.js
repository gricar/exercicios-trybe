const service = require('./service');

test('Validando a função "randomNumber"', () => {
  service.randomNumber = jest.fn().mockReturnValue(10);  // Utilize o mock e defina o retorno padrão como 10.

  expect(service.randomNumber()).toBe(10);  // Teste qual seu retorno
  expect(service.randomNumber).toHaveBeenCalled();  // Teste se a função foi chamada
  expect(service.randomNumber).toHaveBeenCalledTimes(1); // Teste quantas vezes foi chamada
});