const service = require('./service');

describe('testando implementações randomFunction', () => {
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
  
  // 3 - Use a mesma função do primeiro exercício
  test('mockando função para receber 3 parâmetros e retornar sua multiplicação', () => {
    service.randomNumber = jest.fn().mockImplementationOnce((a, b, c) => a * b * c);  // Utilize o mock e desenvolva uma nova implementação que receba três parâmetros
  
    expect(service.randomNumber(2, 5, 7)).toBe(70);
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
  });

  // 3.a - Resete sua implementação e crie uma nova, que receba apenas um parâmetro e retorne o dobro.
  test('mockando função que recebe um parâmetro e retorna seu dobro', () => {
    service.randomNumber.mockReset();
    expect(service.randomNumber).toHaveBeenCalledTimes(0);

    service.randomNumber = jest.fn().mockImplementationOnce((a) => a * 2);
    expect(service.randomNumber(5)).toBe(10);
    expect(service.randomNumber).toHaveBeenCalled();
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
    expect(service.randomNumber).toHaveBeenCalledWith(5);
  });
});

describe('testando implementações others functions', () => {
  test('mockando função para retornar a string em caixa baixa.', () => {
    const mockFirstFunction = jest.spyOn(service, 'transformStringToUpper').mockImplementationOnce((value) => value.toLowerCase());

    expect(mockFirstFunction('GabriEL')).toBe('gabriel');
    expect(mockFirstFunction).toHaveBeenCalledTimes(1);
    expect(mockFirstFunction).toHaveBeenCalledWith('GabriEL');
  });

  test('mockando função para retornar a última letra de uma string', () => {
    const mockSecondFunction = jest.spyOn(service, 'returnFirstLetterOnly').mockImplementationOnce((str) => str.charAt(str.length -1));

    expect(mockSecondFunction('Ultima')).toBe('a');
    expect(mockSecondFunction).toHaveBeenCalledTimes(1);
  });

  test('mockando função deve receber três strings e concatená-las', () => {
    const mockThirdFunction = jest.spyOn(service, 'concatTwoWords').mockImplementationOnce((str1, str2, str3) => str1.concat(str2, str3));

    expect(mockThirdFunction('Tr', 'yb', 'e!')).toBe('Trybe!');
    expect(mockThirdFunction).toHaveBeenCalledTimes(1);
  });
});