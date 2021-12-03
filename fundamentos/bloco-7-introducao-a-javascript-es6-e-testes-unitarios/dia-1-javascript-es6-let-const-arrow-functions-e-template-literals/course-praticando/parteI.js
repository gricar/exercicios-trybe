/* Bloco 7.1 - JavaScript ES6 - let, const, arrow functions e template literals
Parte I - praticando course */

//Exercício 1
/*Faça as modificações necessárias na função para que o seu comportamento respeite o escopo no qual cada variável foi declarada.*/
//Modifique a estrutura da função para que ela seja uma arrow function .
//Modifique as concatenações para template literals .

/* function testingScope(escopo) {
  if (escopo === true) {
    var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
    console.log(ifScope);
  } else {
    var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
  console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
}

testingScope(false); */

/* ------------------------------------------------------------------ 
------------------------------Solução-1------------------------------
--------------------------------------------------------------------*/

const testingScope = escopo => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo`;
    console.log(ifScope);
  } else {
      let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
      console.log(elseScope);
  }
}
//testingScope(true);

/* ------------------------------------------------------------------ 
-------------------------Solução-1-alternativa-----------------------
------------------------------------------------------------------- */

const ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
const elseScope = 'Não devo ser utilizada fora meu escopo (else)';

/* const testingScope = escopo => ( 
  escopo === true ? `${ifScope} ótimo, fui utilizada no escopo` : `${elseScope}`
); */

//console.log(testingScope(false));


//Exercício 2
/* Utilize template literals para que a chamada console.log(<seu código>oddsAndEvens<seu código>); retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!". */

const oddsAndEvens = [13, 3, 4, 10, 7, 2];
/* let teste = oddsAndEvens.sort(function(a, b){return a-b});  //https://www.w3schools.com/js/js_array_sort.asp
console.log(teste); */

const orderdedArray = array => {
  let ascendentOrder = array.sort( function(a, b) {return a-b})
  return ascendentOrder;
}
const sortedArray = orderdedArray(oddsAndEvens);

console.log(`Os números ${sortedArray} se encontram ordenados de forma crescente !`);