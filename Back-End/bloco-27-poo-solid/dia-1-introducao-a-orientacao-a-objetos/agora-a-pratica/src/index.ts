import Student from "./class/Student";

const personOne = new Student('202001011', 'Gabigol');

// console.log(personOne);
console.log('Nome:', personOne.name);

personOne.examsGrades = [4, 7, 8, 10];
console.log('Notas das provas: ', personOne.examsGrades);

personOne.worksGrades = [8, 6.5]; //só pode ter duas notas, senão lança erro.
console.log('Notas de trabalho', personOne.worksGrades);

console.log('Média geral das notas:', personOne.sumAverageGrade());