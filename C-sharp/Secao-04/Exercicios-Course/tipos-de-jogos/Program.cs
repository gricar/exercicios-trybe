public class Program
{
  public static void Main()
  {
      Game myGame = new(GameType.Adventure);
      Console.WriteLine(myGame.Type);

      myGame.Type = GameType.Sports;
      Console.WriteLine((int)myGame.Type);
  }
}