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

//console.log(getUser(userFullName)); // complete p o retorno: "Hello! My name is Ivan Ivanovich"
//console.log(getUser(userNationality)); // complete p o retorno: "Ivan is Russian"


//2 - Passe, como parâmetro e como retorno, uma callback para a função getUser 
const delay = (maxMilliseconds = 5000) => Math.floor(Math.random() * maxMilliseconds);

const getUserTwo = paramCallbk => {  //Insira uma callback como parâmetro da função getUserTwo;
  setTimeout(() => {
    const user = {
      firstName: "Ivan",
      lastName: "Ivanovich",
      nationality: "Russian",
    };
    console.log(paramCallbk(user));  //Retorne a callback passada como parâmetro na função getUser ;
  }, delay());
  
};
//Obs.: Analise o comportamento assíncrono da função getUser ao chamar getUser(userFullName) seguido de getUser(userNationality). Tem hora que o nome da pessoa é impresso antes e tem hora que a nacionalidade da pessoa é impressa antes! -> assincronicidade.

getUserTwo(userFullName); // deve imprimir "Hello! My name is Ivan Ivanovich" depois de um certo tempo
getUserTwo(userNationality); // deve imprimir "Ivan is Russian" depois de um certo tempo