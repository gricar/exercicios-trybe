namespace Poligonos;

public static class Poligono
{
  public static string IdentifyPolygon(int sideCount)
  {
      var name = string.Empty;
      switch (sideCount)
      {
          case < 3:
              name = "Não é um polígono";
              break;
          case 3:
              name = "Triângulo";
              break;
          case 4:
              name = "Quadrado";
              break;
          case 5:
              name = "Pentágono";
              break;
          default:
              name = "Polígono não identificado";
              break;
      }
      return name;
  }
}
