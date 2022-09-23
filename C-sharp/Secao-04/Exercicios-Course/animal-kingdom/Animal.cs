namespace animal_kingdom;

public abstract class Animal
{
  public abstract string ScientificName { get; }
  public abstract bool CanEatMeat { get; }
  public abstract bool CanEatVegetables { get; }

  public void Eat()
  {
    var animal = this.GetType().Name.ToLower();
    string food;

    if (CanEatMeat && CanEatVegetables)
    {
      Random random = new();
      food = random.Next(0, 2) == 0 ? "meat" : "vegetables";
    }
    else if (CanEatMeat) food = "meat";
    else if (CanEatVegetables) food = "vegetables";
    else throw new InvalidOperationException($"{animal} can't eat anything!");

    Console.WriteLine($"The {animal} has eaten some {food}");
  }
}