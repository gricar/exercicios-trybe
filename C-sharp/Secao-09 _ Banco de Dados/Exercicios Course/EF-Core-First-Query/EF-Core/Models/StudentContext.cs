using Microsoft.EntityFrameworkCore;

namespace Models
{
  //classe para se conectar ao Banco de dados
  public class StudentContext : DbContext
  {
    public StudentContext(DbContextOptions<StudentContext> options) : base(options) { }

    public StudentContext() { }

    //tabela no BD -> nome: "Students"
    public DbSet<Student> Students { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
      var connectionString = Environment.GetEnvironmentVariable("DOTNET_CONNECTION_STRING");
      if (connectionString == null)
      {
        throw new InvalidOperationException("Connection string not found");
      }
      optionsBuilder.UseSqlServer(connectionString); //provider
    }
  }
}