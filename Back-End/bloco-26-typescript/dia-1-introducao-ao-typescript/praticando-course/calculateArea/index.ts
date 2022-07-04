import * as Exercise from './exercises';

console.log(Exercise.greeter('Maria'));
console.log(Exercise.personAge('Maria', 40));
console.log(`A soma do array é igual a ${Exercise.sumArray([3, 6, 9])}`);

console.log(`Triângulo de base 10cm e altura 25cm: ${Exercise.triangle(10, 25)}cm²`);
console.log(`Triângulo de base 5cm e altura 30cm: ${Exercise.triangle(5, 30)}cm²`);

console.log(`Retângulo de base 7cm e altura 7cm: ${Exercise.rectangle(7, 7)}cm²`);

console.log(`Círculo com raio igual a 12,5cm: ${Exercise.circle(4)}cm²`);
