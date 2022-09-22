namespace monster_library;
public class Monster
{
  public string Name { get; set; }
  public Armor MonsterArmor { get; set; }

  public void Attack()
  {
    Console.WriteLine($"{Name} has attacked");
  }

  public void Move(string location)
  {
    Console.WriteLine($"{Name} has moved to {location}");
  }
}
