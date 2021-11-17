/* Colocando a cor do Administrador de Tempo da Trybe como na imagem abaixo usando apenas o JavaScript! */

const cabecalho = document.getElementById('header-container');
cabecalho.style.background = 'rgb(0, 176, 105)';
cabecalho.style.color = 'white';  

const tarefaImportante = document.querySelector('.emergency-tasks');
tarefaImportante.style.background = 'rgb(255, 159, 132)';

const cabecalhoTarefaImportante = document.querySelectorAll('.emergency-tasks h3');
for (let i = 0; i < cabecalhoTarefaImportante.length; i += 1) {
    cabecalhoTarefaImportante[i].style.background = 'rgb(165, 0, 243)';
}

const tarefaNaoImportante = document.querySelector('.no-emergency-tasks');
tarefaNaoImportante.style.background = 'rgb(249, 219, 94)';

const cabecalhoTarefaNaoImportante = document.querySelectorAll('.no-emergency-tasks h3');
for (let i = 0; i < cabecalhoTarefaNaoImportante.length; i += 1) {
    cabecalhoTarefaNaoImportante[i].style.background = 'rgb(35, 37, 37)';
}

const rodape = document.getElementsByTagName('footer')[0];
rodape.style.background = 'rgb(0, 53, 51)';