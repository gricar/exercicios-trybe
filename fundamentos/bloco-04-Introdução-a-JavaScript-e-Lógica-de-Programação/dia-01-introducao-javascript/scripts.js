const a = 10;
const b = 8;
const c = 5;

let adicao = a+b;
let subtracao = a-b;
let multiplicacao = a*b;
let divisao = a/b;
let modulo = a%b;

console.log(adicao, subtracao, multiplicacao, divisao, modulo);

//Ex.2 - Faça um programa que retorne o maior de dois números
if (a>b) {
    console.log(a);
} else {
    console.log(b);
}

//Ex.3 - Faça um programa que retorne o maior de três números
if (a>b && a>c) {
    console.log(a);
} else if (b>a && b>c) {
    console.log(b);
} else {
    console.log(c);
}

//Ex.4 - Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.
const variavel = 5;

if (variavel > 0) {
    console.log("Positivo");
} else if (variavel<0) {
    console.log("Negativo");
} else {
    console.log("Zero-");
}

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