function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = weekDays[index];
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
// Escreva seu código abaixo.

/* Exercício 1: 
Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days" . */

function diasDoCalendario() {
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    const getDiasSemana = document.querySelector('#days');

    for (let i = 0; i < dezDaysList.length; i += 1) {
        const diasSemanaItem = document.createElement('li');
        diasSemanaItem.innerHTML = dezDaysList[i];
        diasSemanaItem.className = 'day';
        if (dezDaysList[i] === 24 || dezDaysList[i] === 25 || dezDaysList[i] === 31) {
            diasSemanaItem.classList.add('holiday');  //consultado conforme W3Schools - https://www.w3schools.com/howto/howto_js_add_class.asp
        }
        if (dezDaysList[i] === 4 || dezDaysList[i] === 11 || dezDaysList[i] === 18 || dezDaysList[i] === 25) {
            diasSemanaItem.classList.add('friday');
        }

        getDiasSemana.appendChild(diasSemanaItem);
    }
};

diasDoCalendario();


