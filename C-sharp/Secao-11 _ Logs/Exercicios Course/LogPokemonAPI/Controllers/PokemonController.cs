using Microsoft.AspNetCore.Mvc;

namespace LogPokemonAPI.Controllers;

[ApiController]
[Route("[controller]")]
public class PokemonController : ControllerBase
{
  private readonly HttpClient _client;
  private readonly ILogger<PokemonController> _logger;
  public PokemonController(HttpClient client, ILogger<PokemonController> logger)
  {
    _client = client;
    _logger = logger;
  }

  [HttpGet("{name}")]
  public async Task<ActionResult> GetPokemon(string name)
  {
    string url = $"https://pokeapi.co/api/v2/pokemon/{name}"; //bulbasaur

    HttpResponseMessage response = await _client.GetAsync(url);

    if (response.IsSuccessStatusCode)
    {
      var content = await response.Content.ReadAsStringAsync();

      _logger.LogInformation("Pokemon retrieved: {name}", name); //log aparece no terminal

      return Content(content, "application/json");
    }

    _logger.LogWarning("Error: Pokemon '{name}' not found", name); //log aparece no terminal

    return NotFound("Pokemon not found");
  }
}