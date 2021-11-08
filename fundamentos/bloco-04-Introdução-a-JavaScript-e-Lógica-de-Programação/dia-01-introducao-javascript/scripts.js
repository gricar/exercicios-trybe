const a = 10;
const b = 8;
const c = 5;

let adicao = a+b;
let subtracao = a-b;
let multiplicacao = a*b;
let divisao = a/b;
let modulo = a%b;

console.log('Ex 01: ', adicao, subtracao, multiplicacao, divisao, modulo);
console.log('\n');

//Ex.2 - Faça um programa que retorne o maior de dois números
if (a>b) {
    console.log(a);
} else {
    console.log(b);
}

console.log('\n');


//Ex.3 - Faça um programa que retorne o maior de três números
if (a>b && a>c) {
    console.log(a);
} else if (b>a && b>c) {
    console.log(b);
} else {
    console.log(c);
}

console.log('\n');


//Ex.4 - Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.
const variavel = 5;

if (variavel > 0) {
    console.log("Positivo");
} else if (variavel<0) {
    console.log("Negativo");
} else {
    console.log("Zero-");
}

console.log('\n');


//Ex.5 - Defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
const ang1 = 60;
const ang2 = 80;
const ang3 = 40;
const triangulo = ang1 + ang2 + ang3; //Deve ser 180º
const angulos = ang1 > 0 && ang2 > 0 && ang3 > 0;

if (angulos) {
    if (triangulo === 180) {
        console.log(true);
    } else {
        console.log(false);
    };

} else {
    console.log("Erro, angulo inválido.")
}

console.log('\n');


//Ex.6 - Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
const pecaXadrez = "Dama";

switch (pecaXadrez.toLocaleLowerCase()) {
    case "rei":
        console.log("O Rei move um lado apenas.");
        break;    
    case "dama":
        console.log("A Dama pode mexer livremente");
        break;
    case "cavalo":
        console.log("O Cavalo anda em 'L'");
        break;
    default:
        console.log("Esta peça não existe no jogo da Xadrez")
}

console.log('\n');


//Ex.7 - Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F
const nota = 80;

if (nota >= 90) {
    console.log("A");
} else if (nota >= 80) {
    console.log("B");
} else if (nota >= 70) {
    console.log("C");
} else if (nota >= 60) {
    console.log("D");
} else if (nota >= 50) {
    console.log("E");
} else if (nota < 50) {
    console.log("F");
} else if (nota < 0 && nota > 100) {
    console.log("Erro");
}

console.log('\n');


//8 - Escreva um programa que defina três números em constantes e retorne true se pelo menos uma dos três for par. Caso contrário, ele retorna false. ***Bonus: use somente um if.

const num1 = 5;
const num2 = 10;
const num3 = 38;

let ehPar = false;

let par1 = num1 % 2;
let par2 = num2 % 2;
let par3 = num3 % 2;

if (par1 == 0 || par2 == 0 || par3 == 0) {
  ehPar = true;
};

console.log('Ex 08', ehPar);
console.log('\n');


//9 - Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false. ***Bonus: use somente um if.
const num1_1 = 5;
const num2_1 = 10;
const num3_1 = 38;

let ehImpar = false;

let impar1 = num1_1 % 2;
let impar2 = num2_1 % 2;
let impar3 = num3_1 % 2;

if (impar1 == 1 || impar2 == 1 || impar3 == 1) {
  ehImpar = true;
};

console.log('Ex 09', ehImpar);
console.log('\n');

//10 - Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.

const custoBruto = 100;
const venda = 500;

const impostoSobreOCusto = custoBruto*0.2; //imposto de 20%
const custoTotal = custoBruto + impostoSobreOCusto;

if (custoBruto >= 0 && venda >=0) {
  let lucro = (venda - custoTotal)*1000;
  console.log(lucro);
} else {
  console.log("Erro, os valores de entrada devem ser maior do que zero");  //Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
}

//11 -Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido descontados de seu salário bruto o INSS e o IR.
const salarioBruto = 3000;
console.log("Salário Bruto: R$" + salarioBruto);
let aliquotaINSS = 0;

//INSS
if (salarioBruto <= 1556.94) {  
  aliquotaINSS = 0.08;
} else if (salarioBruto < 2594.92) {
  aliquotaINSS = 0.09;
} else if (salarioBruto < 5189.82) {
  aliquotaINSS = 0.11;
} else {
  descontoINSS = 570.88;
  console.log('Maxima');
};
console.log("Taxa de INSS: " + (aliquotaINSS*100) + "%");

let descontoINSS = aliquotaINSS * salarioBruto; //Em reais
let salarioDescontoINSS = salarioBruto - descontoINSS; //Em reais
console.log("Desconto do INSS: R$" + descontoINSS);
console.log("Salario descontado o INSS, Base para IR: R$" + salarioDescontoINSS);


//Imposto de Renda - deduzido o INSS
let aliquotaIR = 0;
let parcelaIR = 0; //Parcela a deduzir o IR

if (salarioDescontoINSS <= 1903.98) {  
  descontoIR = 0;
  console.log('Isento');
} else if (salarioDescontoINSS < 2826.65) {
  aliquotaIR = 0.075;
  parcelaIR = 142.80;
} else if (salarioDescontoINSS < 3751.05) {
  aliquotaIR = 0.15;
  parcelaIR = 354.80;
} else if (salarioDescontoINSS < 4664.68) {
  aliquotaIR = 0.225;
  parcelaIR = 636.13;
} else {
  aliquotaIR = 0.275;
  parcelaIR = 869.36;
};
console.log("Taxa de IR: " + (aliquotaIR*100) + "%");

let descontoIR = (aliquotaIR * salarioDescontoINSS) - parcelaIR; //Em reais
console.log("Desconto do IR: R$" + descontoIR);

//Salario Luquido
let salarioLiquido = salarioDescontoINSS - descontoIR;
console.log("Salário Liquido: R$" + salarioLiquido);