using Microsoft.AspNetCore.Mvc;

namespace LogPokemonAPI.Controllers;

[ApiController]
[Route("[controller]")]
public class PokemonController : ControllerBase
{
  HttpClient _client;
  public PokemonController(HttpClient client)
  {
    _client = client;
  }

  [HttpGet("{name}")]
  public async Task<ActionResult> GetPokemon(string name)
  {
    string url = $"https://pokeapi.co/api/v2/pokemon/{name}"; //bulbasaur

    HttpResponseMessage response = await _client.GetAsync(url);

    if (response.IsSuccessStatusCode)
    {
      var content = await response.Content.ReadAsStringAsync();

      return Content(content, "application/json");
    }

    return NotFound("Pokemon not found");
  }
}