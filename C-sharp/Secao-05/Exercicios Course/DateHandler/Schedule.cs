namespace DateHandler;

public class Schedule : IScheduleFormat
{
  public DateTime[] nextEvents { get; }

  public Schedule()
  {
    nextEvents = new DateTime[10]; // todas as posições são iniciadas com o valor padrão de DateTime, que é um novo objeto com data configurada em 01/01/0001 00:00:00.
  }

  public string NextEvent()
  {
    if (nextEvents[0] == new DateTime()) return "Não há eventos marcados";
    else return nextEvents[0].ToString("D");
  }

  public void AddEventAtDays(int days)
  {
    for (int index = 0; index < nextEvents.Length - 1; index++)
    {
      if (nextEvents[index] == new DateTime())
      {
        nextEvents[index] = (DateTime.Now).AddDays(days);
        return;
      }
    }
    throw new ArgumentException("Não espaço disponível para o evento!");
  }

  public void RemoveFirstEvent()
  {

  }
}