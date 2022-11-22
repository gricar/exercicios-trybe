using Auth.Models;
using AuthJWT.Repositories;
using AuthJWT.Services;
using Microsoft.AspNetCore.Mvc;

namespace AuthJWT.Controllers;

[Route("api/[controller]")]
[ApiController]
public class LoginController : ControllerBase
{
  [HttpPost]
  public async Task<string> Authenticate(User model)
  {
    User user = UserRepo.Get(model.Name, model.Password);

    if (user is null) throw new Exception("Usuário ou senha inválida");

    string token = new TokenGenerator().Generate(user);

    return token;
  }
}