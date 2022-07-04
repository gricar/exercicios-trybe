"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
const Months_1 = __importDefault(require("./Months"));
const Seasons_1 = __importDefault(require("./Seasons"));
const monthsNames = Object.values(Months_1.default);
const choiceMonth = readline_sync_1.default.keyInSelect(monthsNames, 'Escolha um mês do ano');
// Criamos um objeto onde suas chaves são as estações
// e seus valores são os meses. Note abaixo um segundo
// objeto onde, sendo do hemisfério oposto, as estações
// são opostas também
const seasonsSouth = {
    [Seasons_1.default.Autumn]: [Months_1.default.MARCO, Months_1.default.ABRIL, Months_1.default.MAIO, Months_1.default.JUNHO],
    [Seasons_1.default.Winter]: [Months_1.default.JUNHO, Months_1.default.JULHO, Months_1.default.AGOSTO, Months_1.default.SETEMBRO],
    [Seasons_1.default.Spring]: [Months_1.default.SETEMBRO, Months_1.default.OUTUBRO, Months_1.default.NOVEMBRO, Months_1.default.DEZEMBRO],
    [Seasons_1.default.Summer]: [Months_1.default.DEZEMBRO, Months_1.default.JANEIRO, Months_1.default.FEVEREIRO, Months_1.default.MARCO],
};
const seasonsNorth = {
    [Seasons_1.default.Spring]: seasonsSouth[Seasons_1.default.Autumn],
    [Seasons_1.default.Summer]: seasonsSouth[Seasons_1.default.Winter],
    [Seasons_1.default.Autumn]: seasonsSouth[Seasons_1.default.Spring],
    [Seasons_1.default.Winter]: seasonsSouth[Seasons_1.default.Summer],
};
const hemispheres = {
    "Norte": seasonsNorth,
    "Sul": seasonsSouth
};
const choiceHemisphere = readline_sync_1.default.keyInSelect(Object.keys(hemispheres), "Escolha um hemisfério");
const month = Object.values(Months_1.default)[choiceMonth];
const hemisphere = Object.keys(hemispheres)[choiceHemisphere];
console.log(`Mês: \n${month}`);
console.log(`Hemisfério: \n${hemisphere}`);
console.log(`Estações:`);
const chosenHemisphereSeasons = Object.values(hemispheres)[choiceHemisphere];
Object.entries(chosenHemisphereSeasons).map((entry) => {
    const seasons = entry[0];
    const months = entry[1];
    // São os meses de cada estação. Caso esteja
    // incluído em mais de uma estação, o console
    // abaixo irá adicionar
    if (months.includes(month))
        console.log(seasons);
});
