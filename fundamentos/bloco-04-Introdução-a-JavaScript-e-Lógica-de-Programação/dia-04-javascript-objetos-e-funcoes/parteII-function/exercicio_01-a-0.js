//Ex.1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
//palíndromo é uma palavra, frase ou número que permanece igual quando lida de trás para diante.
function verificaPalidrome (palavra) {
    let invertida = palavra.split('').reverse().join('');
    if (palavra === invertida) {
        console.log('Verdadeiro')
        return true;
    } else {
        console.log('Falso')
        return false;
    }
}

verificaPalidrome ('arara'); //Verdadeiro
verificaPalidrome ('joao');  //Falso
console.log('\n');

//Ex.2 - Crie uma função que receba um array de inteiros e retorne o índice (chave) do maior valor.
let numeros = [2, 3, 6, 7, 10, 1]; 

function maior (array) {
    let indiceMaior = 0;
    for (let i in array) {
        if (array[indiceMaior] > array[i]){
        }                                       //se sim, mantem o valor do indice  
        else {
            indiceMaior = i;                    //se nao, troca a posição do indice
        }
    }
    console.log('O indice de maior valor é', indiceMaior);
    return indiceMaior;
};

maior (numeros);
console.log('\n');

//Ex.3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
numeros_ex3 = [2, 4, 6, 7, 10, 0, -3];

function menor (array) {
    let menorValor = 0;
    for (let i in array) {
        if (array[menorValor] > array[i]) {
            menorValor = i;
        }
    }
    console.log('O indice de menor valor é', menorValor);
    return menorValor;
};

menor(numeros_ex3);
console.log('\n');

//Ex.4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
let nomes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function maiorCaracteres (array) {
    let indiceMaior = 0;
    for (let i in array) {
        if (array[indiceMaior].length < array[i].length){
            indiceMaior = i;
        }
    }
    console.log('O nome com maior qtde de caracteres é', array[indiceMaior]);    
    return indiceMaior;
};

maiorCaracteres (nomes);
