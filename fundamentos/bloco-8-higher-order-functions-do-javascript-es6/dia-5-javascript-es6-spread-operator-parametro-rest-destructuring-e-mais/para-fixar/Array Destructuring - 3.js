// Array Destructuring
// 3 - O array abaixo possui alguns números que não condizem com o conteúdo que ele deveria possuir. Através de array destructuring, faça com que existam apenas números pares na variável numerosPares.
let numerosPares = [1, 3, 5, 6, 8, 10, 12];

[,,, ...numPares] = numerosPares;  //as tres virgulas no inicio ignoram os 3 primeiros elementos

console.log(numPares); // [6, 8, 10, 12];