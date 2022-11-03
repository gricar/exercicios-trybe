using System.Globalization;
using Models;

public class Program
{
  public static void Main()
  {
    var context = new StudentContext();

    context.Database.EnsureCreated(); //garantir que a conexão com o DB seja realizada com sucesso

    Console.WriteLine("Digite o nome da pessoa estudante:");
    var name = Console.ReadLine() ?? "";
    Console.WriteLine("Digite a data de nascimento da pessoa estudante:");
    var birthday = Console.ReadLine() ?? "";
    Console.WriteLine("Digite o endereço da pessoa estudante:");
    var address = Console.ReadLine() ?? "";

    var studentToInsert = new Student
    {
      Name = name,
      Birthday = DateTime.ParseExact(birthday, "dd/MM/yyyy", CultureInfo.InvariantCulture),
      Address = address,
    };

    context.Students.Add(studentToInsert);
    context.SaveChanges();
    Console.WriteLine("Estudante salvo com sucesso!");

    Console.WriteLine("Pessoas estudantes cadastradas no banco de dados:");
    var students = context.Students.ToList();
    foreach (var student in students)
    {
      Console.WriteLine($"{student.Id} - {student.Name} - {student.Birthday} - {student.Address}");
    }
  }
}