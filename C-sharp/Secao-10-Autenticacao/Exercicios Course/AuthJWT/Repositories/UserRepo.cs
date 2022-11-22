using Auth.Models;

namespace AuthJWT.Repositories;

public static class UserRepo
{
  public static User Get(string username, string password)
  {
    var users = new List<User>()
    {
        new () { Name = "Gabriel", Password = "Trybe2022" },
        new () { Name = "Natalia", Password = "Beaut*Salon" }
    };

    return users.FirstOrDefault(x => x.Name == username && x.Password == password);
  }
}