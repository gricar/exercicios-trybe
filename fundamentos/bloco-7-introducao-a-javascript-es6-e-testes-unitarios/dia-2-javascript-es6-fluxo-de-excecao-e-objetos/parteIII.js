/* Bloco 7.2 JavaScript ES6 - Fluxo de exceção e Objetos
Parte III */

const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

//1 - Crie uma função para adicionar o turno da noite na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.
const addTurno = (object, key, value) => {
  object[key] = value;
}
addTurno(lesson2, 'turno', 'noite');
//console.log(lesson2);

//2 - Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
const listKeys = (obj) =>  Object.keys(obj);
//console.log(listKeys(lesson1));

//3 - Crie uma função para mostrar o tamanho de um objeto.
const objLength = obj => Object.keys(obj).length;
//console.log(objLength(lesson1));

//4 - Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
const listValues = (obj) =>  Object.values(obj);
//console.log(listValues(lesson1));

//5 - Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3.
const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });
//console.log(allLessons)

//6 - Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.
const countStudents = obj => {
  let total = 0;
  const array = Object.keys(obj);
  for (i in array) {
    total += obj[array[i]].numeroEstudantes;
  }
  return total;
  
  /* solução arcaica
  const studLesson1 = obj.lesson1.numeroEstudantes;
  const studLesson2 = obj.lesson2.numeroEstudantes;
  const studLesson3 = obj.lesson3.numeroEstudantes;
  return studLesson1 + studLesson2 + studLesson3; */
}

//console.log(countStudents(allLessons));

//7 - Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto.
const getValueByNumber = (obj, position) => Object.values(obj)[position];
//console.log(getValueByNumber(lesson1, 0));

//8 - Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave.
const verifyPair = (obj, key, value) => {
  let answer = false;
  const arrKeyValue = Object.entries(obj);
  for (let i in arrKeyValue) {
    if (arrKeyValue[i][0] === key && arrKeyValue[i][1] === value) {
      answer = true;
    }
  }
  
  /* solução alternativa 
  const chave = Object.keys(obj);
  const valor = Object.values(obj);
  
  for (let i = 0; i < chave.length; i += 1) {
    if (chave[i] === key && valor[i] === value) {
      answer = true;
    }
  } */
  
  return answer;
}

//console.log(verifyPair(lesson3, 'turno', 'noite')); // Output: true,
//console.log(verifyPair(lesson3, 'materia', 'Maria Clara')); // Output: false
//console.log(verifyPair(lesson2,'professor','Carlos'));

//Bônus
//Ex 1 - Crie uma função para contar quantos estudantes assistiram às aulas de matemática. Use o objeto criado no exercício 5.
const studentsMath = obj => {
  let math = 0;
  const chaves = Object.keys(obj);
  for (let i in chaves) {
    if (obj[chaves[i]].materia === 'Matemática'){
      math += obj[chaves[i]].numeroEstudantes;
    }
  }
  return math;
}
//console.log(studentsMath(allLessons))

//Ex 2 - Crie uma função que deverá retornar um objeto que representa o relatório do professor ou professora, as aulas que ele ou ela ministrou e o número total de estudantes. Use o objeto criado no exercício 5:
const getInfo = (obj, teacher) => {
  let classroom = [];
  let students = 0;
  const lessons = Object.values(obj);
  for (let index in lessons) {
    if (lessons[index].professor === teacher) {
      classroom.push(lessons[index].materia);
      students += lessons[index].numeroEstudantes;
    }
  }
  return { classroom, students };
}

const createReport = (allLessons, teacher) => {
  const report = {};
  report.teacher = teacher;
  Object.assign(report, getInfo(allLessons, teacher));
  return report;
}
//console.log(createReport(allLessons, 'Maria Clara'));
