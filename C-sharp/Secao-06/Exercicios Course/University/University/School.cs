namespace University;

public class School
{
  public Student[] students = {
        new Student { Name="Maria", Scores=new int[] { 60, 65, 55, 75, 85 } },
        new Student { Name="João", Scores=new int[] { 90, 95, 85, 75, 65 } },
    };

  public Student GetStudentWithHighestScore()
  {
    var studentWithLowestScore =
        from student in students
        orderby student.Scores.Max() descending
        select student;

    return studentWithLowestScore.First();
  }

  public Student GetStudentWithLowestScore()
  {
    var studentWithLowestScore =
        from student in students
        orderby student.Scores.Min()
        select student;

    return studentWithLowestScore.First();
  }
}