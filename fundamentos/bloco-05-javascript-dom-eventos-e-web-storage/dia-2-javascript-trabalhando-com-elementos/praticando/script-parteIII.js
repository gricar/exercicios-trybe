//1. Crie um irmão para elementoOndeVoceEsta.
const pai = document.getElementById('pai'); //busca a localização a ser inserida
const irmao = document.createElement('section');  //tag a ser criada vazia, abaixo da ultima section class='quartoEUltimoFilho'
irmao.id = 'irmao';          //nomeando uma id para esta nova section
irmao.className = 'irmao';   //nomeando uma class para esta nova section
pai.appendChild(irmao);
//console.log(pai)

//2. Crie um filho para elementoOndeVoceEsta.
const ondeVcTa = document.getElementById('elementoOndeVoceEsta');
const filho = document.createElement('p');
filho.className = 'filho-paragrafo';
filho.innerText = 'Paragrafo inserido via JS pelo exercicio 2';
ondeVcTa.appendChild(filho);
//console.log(ondeVcTa);

//3. Crie um filho para primeiroFilhoDoFilho.
const primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho')
const filhoPrimeiroFilhoDoFilho = document.createElement('section');
filhoPrimeiroFilhoDoFilho.id = 'filhoPrimeiroFilhoDoFilho';
primeiroFilhoDoFilho.appendChild(filhoPrimeiroFilhoDoFilho);
//console.log(primeiroFilhoDoFilho);

//4. A partir desse filho criado, acesse terceiroFilho.
/*const one = document.getElementById('filhoPrimeiroFilhoDoFilho').parentElement.parentElement.nextElementSibling;
console.log(one);*/
//ou
const terceiroFilho = filhoPrimeiroFilhoDoFilho
      .parentElement // primeiroFilhoDoFilho
      .parentElement // elementoOndeVoceEsta
      .nextElementSibling; // terceiroFilho
console.log(terceiroFilho);