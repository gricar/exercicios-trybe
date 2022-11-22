
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Auth.Models;
using AuthJWT.Constants;
using Microsoft.IdentityModel.Tokens;

namespace AuthJWT.Services;

public class TokenGenerator
{
  public string Generate(User user)
  {
    var tokenHandler = new JwtSecurityTokenHandler();

    var key = Encoding.ASCII.GetBytes(TokenConstant.Secret);

    var tokenDescriptor = new SecurityTokenDescriptor()
    {
      SigningCredentials = new SigningCredentials(
        new SymmetricSecurityKey(key),
        SecurityAlgorithms.HmacSha256Signature
      ),
      Expires = DateTime.Now.AddDays(1),
      Subject = new ClaimsIdentity(new Claim[]
      {
        new Claim(ClaimTypes.Name, user.Name)
      })
    };

    var token = tokenHandler.CreateToken(tokenDescriptor);

    return tokenHandler.WriteToken(token);
  }
}