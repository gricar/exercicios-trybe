import Student from "./class/Student";
import Subject from "./class/Subject";
import Teacher from "./class/Teacher";

const carol = new Student('Carol', new Date('1996/02/1995'));

console.log(carol);

const math = new Subject('Matemática');
const manoel = new Teacher('Manoel', new Date('1970/03/30'), 3000, math);

console.log(manoel);