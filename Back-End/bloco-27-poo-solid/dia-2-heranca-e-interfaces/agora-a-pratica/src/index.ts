import Subject from './class/Subject';
import Teacher from './class/Teacher';

const math = new Subject('Matemática');
const history = new Subject('História');
const philosophy = new Subject('Filosofia');

const marta = new Teacher('Marta da Silva', new Date('1980/03/30'), 2000, math);
const joao = new Teacher('João Antônio da Costa', new Date('1982/04/21'), 2000, history);
const lucio = new Teacher('Lucio Teixeira', new Date('1986/01/29'), 2000, philosophy);

console.log(marta);
console.log(joao);
console.log(lucio);

/* Simulando erros */
// const invalidTeacherSalary = new Teacher('GABIGOLLLL', new Date('1980/03/30'), -2000, math);
// console.log(invalidTeacherSalary);

// // deve retornar erro
// const today = new Date();
// today.setDate(today.getDate() + 1)
// const tomorrow = today;
// marta.admissionDate = tomorrow;