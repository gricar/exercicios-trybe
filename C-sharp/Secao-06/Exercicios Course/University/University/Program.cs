namespace University;

public class Program
{
  static void Main()
  {
    School myFacul = new();

    Student bestStudent = myFacul.GetStudentWithHighestScore();
    Student worstStudent = myFacul.GetStudentWithLowestScore();

    Console.WriteLine($"Melhor aluno: {bestStudent.Name} \nMelhor nota: {bestStudent.Scores.Max()}");
    Console.WriteLine($"Melhor aluno: {worstStudent.Name} \nPior nota: {worstStudent.Scores.Min()}");
  }
}