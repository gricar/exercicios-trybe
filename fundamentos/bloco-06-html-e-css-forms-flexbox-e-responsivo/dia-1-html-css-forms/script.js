const estados = document.querySelector('#todosEstados');
const initialDate = document.querySelector('#dataInicio');
const btnEnviar = document.querySelector('#submit');

function createState() {
    const stateOptions = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];
    const brasilState = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará','Distrito Federal','Espírito Santo', 'Goiás','Maranhão','Mato Grosso','Mato Grosso do Sul','Minas Gerais','Pará','Paraíba','Paraná','Pernambuco','Piauí','Rio de Janeiro','Rio Grande do Norte','Rio Grande do Sul','Rondônia','Roraima', 'Santa Catarina','São Paulo','Sergipe','Tocantins' ];

    for (let i = 0; i < brasilState.length; i += 1) {
        const estadoLine = document.createElement('option');
        estadoLine.innerHTML = brasilState[i];
        estadoLine.value = stateOptions[i];
        estados.appendChild(estadoLine);
    }
    
}

window.onload = function () {
    createState();
    initialDate.addEventListener('blur', validarData);
    btnEnviar.addEventListener('click', submitButton);

}

function validarData() {
    const splitDate = initialDate.value.split('/');
    if (splitDate[0] >= 01 && splitDate[0] <= 31) {
            if (splitDate[1] >= 01 && splitDate[1] <= 12) {
                if (splitDate[2] >= 0) {
                    return true;
                }
            }
    }
}



function submitButton(event) {
    event.preventDefault(); //não carrega a pagina para nao perder info
    if (validarData()) {
        //return true;
        console.log('Foi')
    } else {
        console.log('nao')
    }
}