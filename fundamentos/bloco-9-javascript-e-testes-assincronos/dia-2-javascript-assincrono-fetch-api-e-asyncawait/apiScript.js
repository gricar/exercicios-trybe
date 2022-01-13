const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const myObject = {
    method: 'GET',  // tipo de request
    headers: { 'Accept': 'application/json' }  // formato da resposta: or -> "Accept: text/plain"
  };

  fetch(API_URL, myObject)
    .then(response => response.json())  // Esse método converte o conteúdo do body da Response e retorna uma outra Promise , que, quando bem-sucedida, retorna um JSON contendo as informações da piada.  
    /*.then(data => console.log(data));  // visualizar com live server */
    .then(data => 
      document.getElementById("jokeContainer").innerHTML = data.joke  // Recebemos um objeto, certo? A partir daí, faça a piada aparecer no DOM da sua página!
      );
  
};

window.onload = () => fetchJoke();