students_reprovados = []

with open("arquivo.txt") as file:
    for student in file:
        student_grade = student.split(" ")
        if int(student_grade[1]) < 6:
            students_reprovados.append(student_grade[0] + "\n")


with open("recuStudents.txt", mode="w") as recuStudentsFile:
    recuStudentsFile.writelines(students_reprovados)
