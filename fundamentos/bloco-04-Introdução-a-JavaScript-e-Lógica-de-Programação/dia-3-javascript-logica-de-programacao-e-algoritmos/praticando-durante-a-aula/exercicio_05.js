//5. Crie um algoritmo que recebe a idade de Carolzita , Murilo e Baêta e imprime quem é a pessoa mais nova no formato:
// "Pessoa" é a mais nova.
const carolzita = 30;
const murilo = 25;
const baeta = 40;

if (carolzita < murilo && carolzita < baeta) {
    console.log('Carolzita é a mais nova.')
} else if (murilo < carolzita && murilo < baeta) {
    console.log('Murilo é o mais novo.')
} else if (baeta < carolzita && baeta < murilo) {
    console.log('Baeta é o mais novo.')
} else {
    console.log("Os tres possuem as mesmas idades.")
}