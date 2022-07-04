import readline from "readline-sync";
import Months from "./Months";
import Seasons from "./Seasons";

const monthsNames = Object.values(Months);
const choiceMonth = readline.keyInSelect(monthsNames, 'Escolha um mês do ano')

// Criamos um objeto onde suas chaves são as estações
// e seus valores são os meses. Note abaixo um segundo
// objeto onde, sendo do hemisfério oposto, as estações
// são opostas também

const seasonsSouth = {
  [Seasons.Autumn]: [Months.MARCO, Months.ABRIL, Months.MAIO, Months.JUNHO],
  [Seasons.Winter]: [Months.JUNHO, Months.JULHO, Months.AGOSTO, Months.SETEMBRO],
  [Seasons.Spring]: [Months.SETEMBRO, Months.OUTUBRO, Months.NOVEMBRO, Months.DEZEMBRO],
  [Seasons.Summer]: [Months.DEZEMBRO, Months.JANEIRO, Months.FEVEREIRO, Months.MARCO],
}

const seasonsNorth = {
  [Seasons.Spring]: seasonsSouth[Seasons.Autumn],
  [Seasons.Summer]: seasonsSouth[Seasons.Winter],
  [Seasons.Autumn]: seasonsSouth[Seasons.Spring],
  [Seasons.Winter]: seasonsSouth[Seasons.Summer],
}

const hemispheres = {
  "Norte": seasonsNorth,
  "Sul": seasonsSouth
}

const choiceHemisphere = readline.keyInSelect(Object.keys(hemispheres), "Escolha um hemisfério");

const month = Object.values(Months)[choiceMonth];

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

    if (months.includes(month)) console.log(seasons);
});