/* 9.1 - Para fixar */

//callbacks
//1 - Adicione uma callback como parâmetro da funcão getUser .
const userFullName = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;
const userNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

const getUser = (paramCallback) => { //Insira uma callback como parâmetro da função getUser;
  const userToReturn = {
    firstName: "Ivan",
    lastName: "Ivanovich",
    nationality: "Russian"
  };
  // Insira o retorno da função `getUser`
  return paramCallback(userToReturn);
};

console.log(getUser(userFullName)); // complete p o retorno: "Hello! My name is Ivan Ivanovich"
console.log(getUser(userNationality)); // complete p o retorno: "Ivan is Russian"