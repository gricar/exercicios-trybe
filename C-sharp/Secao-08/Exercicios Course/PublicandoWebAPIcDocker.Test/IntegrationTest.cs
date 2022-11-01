using Xunit;
using FluentAssertions;
using Microsoft.AspNetCore.Mvc.Testing;
using System;
using System.Threading.Tasks;

namespace PublicandoWebAPIcDocker.Test;

public class TestWeatherForecast : IClassFixture<WebApplicationFactory<Program>>  // Herdar da classe IClassFixture<> passando a Factory por parâmetro WebApplicationFactory<Program>:
{
  private readonly WebApplicationFactory<Program> _factory;

  public TestWeatherForecast(WebApplicationFactory<Program> factory)  // Receber a Factory com injeção de dependências (isso é um bom padrão):
  {
    _factory = factory;
  }

  [Theory(DisplayName = "WeatherForecast deve responder com status com 200 ~ 299 para rotas")]
  [InlineData("/weatherforecast")]  // rotas de entrada para a função de teste
  public async Task GetEndpointsReturnSuccess(string url)
  {
    var client = _factory.CreateClient();  // cria uma instância do objeto HttpClient que serve para criar requisições, respostas, redirecionamentos e identificadores de cookies.
    var response = await client.GetAsync(url);  // Enviar uma requisição para o client com a url da rota:
    response.EnsureSuccessStatusCode();  // Garantir que o status code está na família 200
    response.Content.Headers.ContentType.ToString().Should().Be("application/json; charset=utf-8");  // garantir que o tipo de resposta é um json:
  }
}