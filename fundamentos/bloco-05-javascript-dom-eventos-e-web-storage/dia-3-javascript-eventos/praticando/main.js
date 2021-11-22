const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');

// 1. Copie esse arquivo e edite apenas ele;
// 1.1. Antes de começar os exercícios, use o LiveServer para dar uma olhada em como está a página no navegador.
// 1.2. Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?
/* Pois existe a classe 'tech' que possui um estilo que reposiciona o elemento na vertical */

// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
function recebeClick(evento) {   //parametro do evento criado para manipular dps - lista: type, target, currentTarget
  //console.log('evento: ' + evento)
  let changeTech = document.querySelector('.tech');
  changeTech.classList.remove('tech');
  evento.target.classList.add('tech');
  input.value = '';  //limpa o input, onde digita para alterar a tecnologia
  //console.log(document.getElementsByTagName('ul')[0]);
}

firstLi.addEventListener('click', recebeClick);   // pode acessar direto via id
secondLi.addEventListener('click', recebeClick);
thirdLi.addEventListener('click', recebeClick);

// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento com a classe 'tech';
input.addEventListener('input', entrada); //invoca a função na barra de input

function entrada (event) {
    let changeTextInput = document.querySelector('.tech'); //pega quem tem a classe tech, logo, é o quadro que foi clicado;
    //changeTextInput.style.border = '10px solid coral';  //só pra deixar mais claro a ordem dos movimentos
    changeTextInput.innerText = event.target.value;  //pega o valor da barra input que foi escrito pelo usuário
}

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portifólio?
myWebpage.addEventListener('dblclick', function() {
    window.open('https://github.com/gricar', '_blank'); //conforme consulta no stackoverflow: https://stackoverflow.com/questions/4907843/open-a-url-in-a-new-tab-and-not-a-new-window
});

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere a cor do mesmo;
myWebpage.addEventListener('mouseover', function(event) {
    event.target.style.color = 'coral';
});

myWebpage.addEventListener('mouseleave', function(event) {
    event.target.style.color = 'white';
})

// Segue abaixo um exemplo do uso de event.target:
function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target, que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio navegador fará esse trabalho por você, não é legal? Desse jeito, o event.target na nossa função retornará o objeto 'firstLi'.