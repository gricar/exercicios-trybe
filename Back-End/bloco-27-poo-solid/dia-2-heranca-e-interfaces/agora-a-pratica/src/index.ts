import Person from "./class/Person";
import Student from "./class/Student";

// const gabriel = new Person('Gabriel', new Date('1996/02/16'));
const gabrielEstudante = new Student('Gabriel', new Date('1996/02/16'));

console.log(gabrielEstudante);
gabrielEstudante.examsGrades = [10, 7, 5, 6];
console.log(gabrielEstudante);
