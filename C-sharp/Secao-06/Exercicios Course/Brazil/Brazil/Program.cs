namespace Brazil;

public class Program
{
  static void Main()
  {
    Pais country = new()
    {
      cities = new City[] {
    new City { Name = "SJC", StateAbbreviation = "SP" },
    new City { Name = "Manaus", StateAbbreviation = "AM" },
    new City { Name = "Taubaté", StateAbbreviation = "SP" },
    new City { Name = "Recife", StateAbbreviation = "PE" },
    new City { Name = "Jacareí", StateAbbreviation = "SP" }
    },

      states = new State[] {
    new State { Name="Amazonas", Abbreviation="AM", Region="Norte" },
    new State { Name = "São Paulo", Abbreviation = "SP", Region = "Sudeste" },
    new State { Name = "Pernambuco", Abbreviation = "PE", Region = "Nordeste" },
    }
    };

    var numberOfCitiesPerState = country.GetNumberOfCitiesForEachState();

    foreach (var state in numberOfCitiesPerState)
    {

      Console.WriteLine(state);
    }

  }
}