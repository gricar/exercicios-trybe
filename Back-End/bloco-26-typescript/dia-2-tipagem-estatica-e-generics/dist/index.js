"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Car_1 = __importDefault(require("./Car"));
const Colors_1 = __importDefault(require("./Colors"));
const teste = new Car_1.default('corolla', Colors_1.default.BLACK, 7);
console.log(teste.turnOn());
console.log(teste.speedUp);
