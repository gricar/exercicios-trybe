namespace Poligonos;
public class Triangulo
{
  public static string IdentifyTriangle(double xSide, double ySide, double zSide)
  {       
      var name = "";


      if(xSide == ySide && xSide == zSide)
      {
          name = "Triângulo Equilátero";
      }
      else if((xSide == ySide) || (xSide == zSide) || (ySide ==zSide))
      {
          name = "Triângulo Isóscele";
      }
      else
      {
          name = "Triângulo Escaleno";
      }
      return name;
  }
}
