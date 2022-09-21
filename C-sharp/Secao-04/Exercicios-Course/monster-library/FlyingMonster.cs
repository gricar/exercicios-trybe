public class FlyingMonster
{
  public string Name { get; set; }

  public bool isFlying { get; set; } = false;

  public void Fly()
  {
    Console.WriteLine($"{Name} is flying now!");
    isFlying = true;
  }
}