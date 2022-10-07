class Program
{
  static void Main()
  {
    Pet[] pets = {
      new Pet { Name = "Zen", Age = 2 },
      new Pet { Name = "Dino", Age = 7 },
      new Pet { Name = "Tobby", Age = 5 },
    };

    int sumAge = pets.Sum(pet => pet.Age);
    Console.WriteLine($"A somatóra das idades dos cachorros é {sumAge}");

    int maxage = pets.Max(pet => pet.Age);
    Console.WriteLine($"O cachorro mais velho tem {maxage} anos");

    double averageAge = pets.Average(pet => pet.Age);
    Console.WriteLine($"A média das idades dos cachorros é {averageAge:F}");
  }
}