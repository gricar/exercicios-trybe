const service = require('./service');

test('Validando a função "randomNumber"', () => {
  service.randomNumber = jest.fn().mockReturnValue(10);  // Utilize o mock e defina o retorno padrão como 10.

  expect(service.randomNumber()).toBe(10);  // Teste qual seu retorno
  expect(service.randomNumber).toHaveBeenCalled();  // Teste se a função foi chamada
  expect(service.randomNumber).toHaveBeenCalledTimes(1); // Teste quantas vezes foi chamada
});

// 2 - Com a mesma função do exercício anterior, utilizando o mock, crie uma nova implementação, que deve receber dois parâmetros e retornar a divisão do primeiro pelo segundo. Essa implementação deve ocorrer uma única vez.
test('testando se a função foi chamada, qual seu retorno, quantas vezes foi chamada e com quais parâmetros', () => {
  service.randomNumber = jest.fn().mockImplementationOnce((a, b) => a / b);  // Defina o mock da função para a nova funcionalidade da função.

  expect(service.randomNumber(45, 9)).toBe(5);  // Teste se a nova implementação de divisão foi aplicada
  expect(service.randomNumber).toHaveBeenCalled();  // Teste se a nova função foi chamada
  expect(service.randomNumber).toHaveBeenCalledTimes(1); // Teste quantas vezes foi chamada
  expect(service.randomNumber).toHaveBeenCalledWith(45, 9);
});