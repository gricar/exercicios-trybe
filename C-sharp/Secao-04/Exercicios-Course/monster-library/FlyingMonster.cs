namespace monster_library;

public class FlyingMonster : Monster
{
  // public string Name { get; set; }  // já está implementado na classe base Monster

  public bool isFlying { get; set; } = false;

  public void Fly()
  {
    Console.WriteLine($"{Name} is flying now!");
    isFlying = true;
  }
}