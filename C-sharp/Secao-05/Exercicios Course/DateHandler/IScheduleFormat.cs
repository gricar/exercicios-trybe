namespace DateHandler;

public interface IScheduleFormat
{
  string NextEvent();
  void AddEventAtDays(int days);
  void RemoveFirstEvent();
}