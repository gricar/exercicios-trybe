// Array Destructuring
// 2 - A seguir, temos alguns valores que estão descritos em variáveis incoerentes. Através da desestruturação de arrays, corrija os valores das variáveis.
let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

//console.log(comida, animal, bebida); // arroz gato água -> estão classificados errados

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo
[food, bicho, drink] = [bebida, comida, animal]; // Criando o array e o desestruturando
console.log(food, bicho, drink); // arroz gato água