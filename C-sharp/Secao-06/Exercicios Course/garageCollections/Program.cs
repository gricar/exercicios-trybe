namespace GarageCollections;

public class Program
{
  static void Main()
  {
    Garage myGarage = new()
    {
      Vehicles = new List<string> { "Ferrari", "BMW", "Porsche" }
    };

    foreach (string vehicle in myGarage.Vehicles)
    {
      Console.WriteLine(vehicle);
    }
  }
}