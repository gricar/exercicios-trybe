using Xunit;
using FluentAssertions;

namespace tipos_de_jogos.Test;

public class GameTest
{
    [Theory(DisplayName="Validando o enum")]
    [InlineData(GameType.Action)]
    [InlineData(GameType.Strategy)]
    public void GameTypeValidation(GameType gameType)
    {
        Game myGame = new(gameType);

        myGame.Type.Should().Be(gameType);
        myGame.Type.ToString().Should().BeEquivalentTo(gameType.ToString());
    }
}