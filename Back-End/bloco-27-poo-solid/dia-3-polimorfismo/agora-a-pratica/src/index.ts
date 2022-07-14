import EvaluationResult from "./class/EvaluationResult";
import Exam from "./class/Exam";
import Student from "./class/Student";
import Subject from "./class/Subject";
import Teacher from "./class/Teacher";
import Work from "./class/Work";

const carol = new Student('Carol', new Date('1996/02/1995'));

// console.log(carol);

const math = new Subject('Matemática');
const history = new Subject('História');

const manoel = new Teacher('Manoel', new Date('1970/03/30'), 3000, math);
const joao = new Teacher('João Antônio da Costa', new Date('1982/04/21'), 2000, history);

// console.log(manoel);

const examMath = new Exam(25, manoel);
const workMath = new Work(50, manoel);
const examHistory = new Exam(25, joao);
const workHistory = new Work(50, joao);

carol.addEvaluationResult(new EvaluationResult(examMath, 23));
carol.addEvaluationResult(new EvaluationResult(workMath, 42));
carol.addEvaluationResult(new EvaluationResult(examHistory, 25));
carol.addEvaluationResult(new EvaluationResult(workHistory, 50));

console.log('Avaliações: ', carol.evaluationsResults);
console.log('Soma das notas: ', carol.sumGrades());
console.log('Média das notas: ', carol.sumAverageGrade());