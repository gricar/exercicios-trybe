// aula ao vivo - murilo
// ex 1
const bestGuy = {
  nome: 'Rodrigo Hilbert',
  birthplace: 'Santa Catarina',
  jobs: ['Piloto', 'Cozinheiro', 'Nadador', 'Modelo', 'Ator', 'Caçador', 'Sniper']
};

const { nome, birthplace } = bestGuy;
const [ ,, job2, job3, ...jobs] = bestGuy.jobs;

console.log(`${nome} nasceu em ${birthplace} e algumas das profissões são: ${job2}, ${jobs[0]} e ${jobs[2]}`)


/* ---------------------------------------------------------------------------------------------- */


// ex 2 - rest

const dateInfo = ['1981', '7', '31', '22', '47', '12'];

//com rest
const formatDateRest = (year, month, day, ...rest) => {
    return `${day}/${month}/${year} - ${rest[0]}:${rest[1]}:${rest[2]}`
};
const formattedDateRest = formatDateRest(...dateInfo);
console.log(formattedDateRest);

//normal
const formatDate = (year, month, day, hour, min, sec) => {
    return `${day}/${month}/${year} - ${hour}:${min}:${sec}`
};

const formattedDate = formatDate(...dateInfo);
console.log(formattedDate);
