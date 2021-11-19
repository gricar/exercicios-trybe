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
function daysCalendarPosition() {
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    const getDaysPosition = document.querySelector('#days');

    for(let i = 0; i < dezDaysList.length; i += 1) {
        const daysItem = document.createElement('li');
        daysItem.innerHTML = dezDaysList[i];
        if(dezDaysList[i] == 24 | dezDaysList[i] == 31) {
        daysItem.className = 'day';
        daysItem.classList.add('holiday');
        getDaysPosition.appendChild(daysItem);
        } else if(dezDaysList[i] == 4 | dezDaysList[i] == 11 | dezDaysList[i] == 18) {
        daysItem.className = 'day friday';
        getDaysPosition.appendChild(daysItem);
        } 
        else if(dezDaysList[i] == 25) {
            daysItem.className = 'day holiday friday';
            getDaysPosition.appendChild(daysItem);
        } else {
        daysItem.className = 'day';
        getDaysPosition.appendChild(daysItem);
        }
    }
    console.log()
}
daysCalendarPosition()

/*Exercício 2:
Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".*/
//Adicione a este botão a ID "btn-holiday" .
//Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .

function botaoFeriado(name) {
    const getBtn = document.querySelector(".buttons-container");
    const tagBtn = document.createElement('button');
    tagBtn.innerHTML = name;
    tagBtn.id = 'btn-holiday';
    getBtn.appendChild(tagBtn);
    //console.log(getBtn);
}

botaoFeriado('Feriados');

/* Exercício 3:
Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday". 
possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicia*/
function btnColorFeriado() {
    const getBtn = document.querySelector('#btn-holiday');
    const getDiasHoliday = document.querySelectorAll(".holiday");

    getBtn.addEventListener('click', function() {
        for (let i = 0; i < getDiasHoliday.length; i += 1) {
            if (getDiasHoliday[i].style.backgroundColor == 'coral') {
                getDiasHoliday[i].style.backgroundColor = "#eee";     /* rgb(238,238,238) */
            } else {
                getDiasHoliday[i].style.backgroundColor = "coral";   
            }
        }
    })
}

btnColorFeriado()

/* Exercício 4:
Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira". */

function btnSexta(name) {
    const getBtnSexta = document.querySelector('.buttons-container');
    const btnSexta = document.createElement('button');
    btnSexta.innerHTML = name;
    btnSexta.id = 'btn-friday';
    getBtnSexta.appendChild(btnSexta);
    //console.log(btnSexta.parentElement)
}

btnSexta("Sexta-feira");

/* Exercício 5:
Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.*/

function botaoSexta() {
    const getBtnFriday = document.querySelector('#btn-friday');
    const getFridayDays = document.querySelectorAll('.friday');
    let diasSexta = [4, 11, 18, 25]

    getBtnFriday.addEventListener('click', function() {
        for(let i = 0; i < getFridayDays.length; i += 1) {
            if (getFridayDays[i].innerHTML == 'Sextou') {
                getFridayDays[i].innerHTML = diasSexta[i];
            } else {
                getFridayDays[i].innerText = 'Sextou';
            }
        }
    })
}

botaoSexta();

