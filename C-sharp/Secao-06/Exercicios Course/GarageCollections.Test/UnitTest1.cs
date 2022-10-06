using Xunit;
using FluentAssertions;

namespace GarageCollections.Test;

public class UnitTest1
{
  public static TheoryData<List<string>, string, List<string>> TestAddVehicleData = new()
    {
        {
            // parâmetro "vehiclesEntry"
            new List<string>{"Bicicleta", "Moto"},

            // parâmetro "vehicle"
            "Carro",

            // parâmetro "vehiclesExpected"
            new List<string>{"Bicicleta", "Moto", "Carro"}
        }
    };

  [Theory(DisplayName = "Deve inserir corretamente um carro na garagem")]
  [MemberData(nameof(TestAddVehicleData))] // List<string> é uma instância de classe e não podemos utilizar InlineData. Então vamos criar um atributo para ser nossos dados de entrada e utilizar MemberData.
  public void TestAddVehicle(List<string> vehiclesEntry, string vehicle, List<string> vehiclesExpected)
  {
    // Cria nova garagem
    Garage instance = new();

    // Atribui os valores de entrada
    instance.Vehicles = vehiclesEntry;

    var numberVehicles = instance.AddVehicle(vehicle);

    // Verifica se os veículos na garagem equivalem aos esperados
    instance.Vehicles.Should().BeEquivalentTo(vehiclesExpected);

    // Verifica se a quantidade retornada é igual a quantidade de veídulos esperados
    numberVehicles.Should().Be(vehiclesExpected.Count);
  }

  public static TheoryData<List<string>, string, List<string>> TestRemoveVehicleData = new()
    {
        {
            new List<string>{"Bicicleta", "Moto", "Carro"},
            "Moto",
            new List<string>{"Bicicleta", "Carro"}
        }
    };

  [Theory(DisplayName = "Deve remover corretamente um carro da garagem")]
  [MemberData(nameof(TestRemoveVehicleData))]
  public void TestRemoveVehicle(List<string> vehiclesEntry, string vehicle, List<string> vehiclesExpected)
  {
    var instance = new Garage
    {
      Vehicles = vehiclesEntry
    };

    var numberVehicles = instance.RemoveVehicle(vehicle);

    instance.Vehicles.Should().BeEquivalentTo(vehiclesExpected);
    numberVehicles.Should().Be(vehiclesExpected.Count);
  }

  public static TheoryData<List<string>, string, int> TestFindVehiclePositionData = new()
    {
        {
            new List<string>{"Bicicleta", "Moto", "Carro"},
            "Carro",
            2
        }
    };

  [Theory(DisplayName = "Deve encontrar a posição do carro na garagem")]
  [MemberData(nameof(TestFindVehiclePositionData))]
  public void TestFindVehiclePosition(List<string> vehiclesEntry, string vehicle, int position)
  {
    Garage instance = new()
    {
      Vehicles = vehiclesEntry
    };

    var numberVehicles = instance.FindVehiclePosition(vehicle);
    numberVehicles.Should().Be(position);
  }
}