const inputName = document.querySelector('#inputName');
const btnEnviar = document.querySelector('#buttonSubmit');
const nameUser = document.querySelector('#nameUser');

btnEnviar.addEventListener('click', getUserValue);

function getUserValue(event) {
    event.preventDefault(); //Não submete a informação; não envia para o servidor, com isso a pag nao atualiza; mantem os dados
    console.log(inputName.value);
    nameUser.innerHTML = inputName.value;
}