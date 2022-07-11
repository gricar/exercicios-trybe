import Student from "./class/Student";
import Client from "./class/Client";
import OrderItem from "./class/OrderItem";
import Order from "./class/Order";

const personOne = new Student('202001011', 'Gabigol');

// console.log(personOne);
console.log('Nome:', personOne.name);

personOne.examsGrades = [4, 7, 8, 10];
console.log('Notas das provas: ', personOne.examsGrades);

personOne.worksGrades = [8, 6.5]; //só pode ter duas notas, senão lança erro.
console.log('Notas de trabalho', personOne.worksGrades);

console.log('Média geral das notas:', personOne.sumAverageGrade());

/* ----------------------------------------------------------------------------------- */
console.log('---------RESTAURANTE---------');

const client = new Client('Josias');

const sanduba = new OrderItem('Sanduíche Natural', 10);
const juice = new OrderItem('Suco de Abacaxi', 5.00);
const dessert = new OrderItem('Gelatina de Uva', 2.50);

const order = new Order(client, [sanduba, juice, dessert], 'money', 0.1);

console.log(order);
console.log('Valor normal: ', order.calculateTotal());
console.log('Valor com desconto: ', order.calculateTotalWithDiscount());