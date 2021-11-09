//Ex.2 - Faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base.
const n = 5;
let triangulo = '';

if (n > 1) {
  for (let i = 0; i < n; i++) {
    triangulo += "*";
    console.log(triangulo);
  }
} else {
  console.log("O numero deve ser maior que 1")
}
