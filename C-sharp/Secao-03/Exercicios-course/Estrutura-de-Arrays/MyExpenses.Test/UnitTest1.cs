namespace MyExpenses.Test;

public class UnitTest1
{
    [Theory(DisplayName = "Deve retornar corretamente a soma da diagonal da matriz")]
    [InlineData(new int[] {
        1, 2, 3, 
        4, 5, 6,
        7, 8, 9,
    },
    3m,
    15
    )]
    [InlineData(new int[] {
        1,  2,  3,  4,
        5,  6,  7,  8,
        9,  10, 11, 12,
        13, 14, 15, 16
    },
    4,
    34
    )]
    public void TestGetSumDiagonal(int[] intArrayEntry, int entryLines, int expected)
    {
        // Primeiro transformamos o array pois a função que vamos testar espera um array de 2 dimensões  
        int[,] multiDimArray = FromArrayToTwoDimArray(intArrayEntry, entryLines, entryLines);

        // Passamos o array de 2 dimensões criado e comparamos com a resposta esperada
        GetSumDiagonal(multiDimArray).Should().Be(expected);
    }
}