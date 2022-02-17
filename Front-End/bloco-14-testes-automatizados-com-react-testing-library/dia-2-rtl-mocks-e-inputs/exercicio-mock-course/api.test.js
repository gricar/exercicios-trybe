const serviceAPI = require('./fetchAPI');

// Mocke a requisição e crie dois testes

describe("testando a requisição", () => {
  serviceAPI.fetchDog = jest.fn();
  afterEach(serviceAPI.fetchDog.mockReset);

  it('a requisição se resolveu e teve como valor "request sucess"', async () => {
    serviceAPI.fetchDog.mockResolvedValue("request sucess");

    serviceAPI.fetchDog();
    expect(serviceAPI.fetchDog).toHaveBeenCalled();
    expect(serviceAPI.fetchDog).toHaveBeenCalledTimes(1);
    await expect(serviceAPI.fetchDog()).resolves.toBe("request sucess");
    expect(serviceAPI.fetchDog).toHaveBeenCalledTimes(2);
  });

  it('a requisição falhou e tem como valor "request failed"', async () => {
    serviceAPI.fetchDog.mockRejectedValue("request failed");

    expect(serviceAPI.fetchDog).toHaveBeenCalledTimes(0);
    await expect(serviceAPI.fetchDog()).rejects.toMatch("request failed");
    expect(serviceAPI.fetchDog).toHaveBeenCalledTimes(1);
  });
});
