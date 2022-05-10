const readline = require('readline-sync');

const name = readline.question('What is your name? ');  // A função question interpreta a resposta como uma string comum
const age = readline.questionInt('How old are you? ');  // a função questionInt converte a resposta para número

console.log(`Hello, ${name}! You are ${age} years old!`);

// console.log('Hello, world from Node.js! :)');
