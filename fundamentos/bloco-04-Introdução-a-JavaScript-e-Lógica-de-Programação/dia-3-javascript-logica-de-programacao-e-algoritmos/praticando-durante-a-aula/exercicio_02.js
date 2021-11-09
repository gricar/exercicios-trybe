//2. Crie um algoritmo que conte quantos números do intervalo entre 2 e 150 são divisíveis por 3.
// Caso a quantidade seja igual a 50, exiba uma mensagem secreta.
let divisivel = 0
let contagem = 0

for (let i = 2; i <= 150; i += 1) {
    divisivel = i%3;
    if (divisivel == 0) {
        contagem += 1;
    }
}

if (contagem == 50) {
    console.log("Mensagem secreta: existem 50 numeros divisiveis por 3")
}

console.log(contagem);
