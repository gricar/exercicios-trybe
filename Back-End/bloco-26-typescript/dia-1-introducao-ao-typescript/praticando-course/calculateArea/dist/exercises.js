"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.circle = exports.rectangle = exports.triangle = exports.sumArray = exports.add = exports.personAge = exports.greeter = void 0;
const greeter = (name) => `Olá ${name}`;
exports.greeter = greeter;
const personAge = (name, age) => `${name} tem ${age} anos!`;
exports.personAge = personAge;
const add = (x, y) => x + y;
exports.add = add;
const sumArray = (numbers) => numbers.reduce(exports.add, 0);
exports.sumArray = sumArray;
const triangle = (base, height) => (base * height) / 2;
exports.triangle = triangle;
const rectangle = (base, height) => base * height;
exports.rectangle = rectangle;
const circle = (radius) => {
    const PI = 3.14;
    return PI * radius ** 2;
};
exports.circle = circle;