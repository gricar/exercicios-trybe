using Xunit;
using FluentAssertions;

namespace CastExample.Test;

public class UnitTest1
{
    [Fact]
    public void TestVariableCreation()
    {
        Class1 instance = new();

        var response = instance.someString is string;
        response.Should().Be(true);
    }

    [Theory(DisplayName="Deve converter de 'inteiro' para 'double'")]
    [InlineData(42, 42.0)]
    [InlineData(-39, -39.0)]
    public void TestVariableTransformation(int entry, double expected)
    {
        Class1 instance = new();

        instance.intEntry = entry;
        var intTypeCheck = instance.intEntry is int;
        intTypeCheck.Should().Be(true);

        instance.Transform();

        instance.doubleResponse.Should().Be(expected);
        var doubleTypeCheck = instance.doubleResponse is double;
        doubleTypeCheck.Should().Be(true);
    }

    [Theory(DisplayName="Deve converter de 'string' para 'inteiro'")]
    [InlineData("69", 69)]
    public void TestVariableConversion(string entry, int expected)
    {
        Class1 instance = new();

        instance.strEntry = entry;
        var strTypeCheck = instance.strEntry is string;
        strTypeCheck.Should().Be(true);

        instance.DoConversion();

        instance.intResponse.Should().Be(expected);
        var intTypeCheck = instance.intResponse is int;
        intTypeCheck.Should().Be(true);
    }
}