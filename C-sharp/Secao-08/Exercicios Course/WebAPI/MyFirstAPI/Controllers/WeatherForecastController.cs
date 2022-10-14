using Microsoft.AspNetCore.Mvc;

namespace MyFirstAPI.Controllers;

[ApiController] //Indicar para o compilador que uma classe tem como função servir respostas às requisições HTTP feitas para a API. -> a utilização desse atributo permite que a aplicação identifique, de forma inteligente, se as informações enviadas para a api vêm do body, do header ou de queries na própria url.
[Route("[controller]")] //indicar qual a rota pela qual o controller em questão é acessado -> é utilizado também o token replacement definir automaticamente os valores entre colchetes ([, ]) com base no nome da classe que define o controller -> "WeatherForecast"
public class WeatherForecastController : ControllerBase
{
  private static readonly string[] Summaries = new[]
  {
        "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
    };

  private readonly ILogger<WeatherForecastController> _logger;

  public WeatherForecastController(ILogger<WeatherForecastController> logger)
  {
    _logger = logger;
  }

  [HttpGet(Name = "GetWeatherForecast")] //Definem os tipos de requisição aos quais os métodos poderão responder, baseado nos verbos HTTP.
  public IEnumerable<WeatherForecast> Get()
  {
    return Enumerable.Range(1, 5).Select(index => new WeatherForecast
    {
      Date = DateTime.Now.AddDays(index),
      TemperatureC = Random.Shared.Next(-20, 55),
      Summary = Summaries[Random.Shared.Next(Summaries.Length)]
    })
    .ToArray();
  }
}
