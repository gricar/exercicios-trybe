namespace animal_kingdom;
public class Program
{
  public static void Main(string[] args)
  {
    Wolf wolf = new();
    Cow cow = new();

    AnimalInfo(wolf);
    AnimalInfo(cow);
  }

  public static void AnimalInfo(Animal animal)
  {
    Console.WriteLine($"{animal.GetType().Name} is also known as {animal.ScientificName}");
    animal.Eat();
  }
}