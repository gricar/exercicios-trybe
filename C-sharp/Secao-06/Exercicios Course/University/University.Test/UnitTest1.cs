using Xunit;
using FluentAssertions;

namespace University.Test;

public class UnitTest1
{
  public class CountryTest
  {
    public static TheoryData<Student[], Student> TestDataGetStudentsHighScore = new TheoryData<Student[], Student>
    {
        {
            new Student[] {
              new Student { Name="Maria", Scores=new int[] { 60, 65, 55, 75, 85 } },
              new Student { Name="João", Scores=new int[] { 90, 95, 85, 75, 65 } },
            },
            new Student { Name="João", Scores=new int[] { 90, 95, 85, 75, 65 } }
        },
    };
    [Theory(DisplayName = "GetStudentWithHighestScore deveria retornar o estudante com maior nota")]
    [MemberData(nameof(TestDataGetStudentsHighScore))]
    public void TestGetStudentWithHighestScore(Student[] studentsEntry, Student expected)
    {
      School instance = new()
      {
        students = studentsEntry
      };

      var result = instance.GetStudentWithHighestScore();

      result.Should().BeEquivalentTo(expected);
    }

    public static TheoryData<Student[], Student> TestDataGetStudentLowScore = new TheoryData<Student[], Student>
    {
        {
            new Student[] {
              new Student { Name="Maria", Scores=new int[] { 60, 65, 55, 75, 85 } },
              new Student { Name="João", Scores=new int[] { 90, 95, 85, 75, 65 } },
            },
            new Student { Name="Maria", Scores=new int[] { 60, 65, 55, 75, 85 } }
        },
    };
    [Theory(DisplayName = "GetStudentWithLowestScore deveria retornar o estudante com menor nota")]
    [MemberData(nameof(TestDataGetStudentLowScore))]
    public void TestGetStudentWithLowestScore(Student[] studentsEntry, Student expected)
    {
      School instance = new()
      {
        students = studentsEntry
      };

      var result = instance.GetStudentWithLowestScore();

      result.Should().BeEquivalentTo(expected);
    }
  }
}
