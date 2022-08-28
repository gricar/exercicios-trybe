namespace CastExample;
public class Class1
{
  public string someString = "oi";
  public int intEntry = 42;
  public double doubleResponse;

  public void Transform()
  {
    doubleResponse = (double) intEntry;
  }

    public string strEntry = "69";
    public int intResponse;

    public void DoConversion()
    {
        if(strEntry is string)
        {
            intResponse = Convert.ToInt32(strEntry);
        }
    }
}
