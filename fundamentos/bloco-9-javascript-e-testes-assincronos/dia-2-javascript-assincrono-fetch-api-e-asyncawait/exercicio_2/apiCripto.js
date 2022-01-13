//const fetch = require('node-fetch');

const fetchCripto = async () => {
  const url = 'https://api.coincap.io/v2/assets';

  const coins = await fetch(url)
    .then(response => response.json())  
    .then(data => data.data)
    .catch((error) => error.toString());

  //console.log(coins);
  return coins;
};

//fetchCripto();

const setCoins = async () => {
  const coins = await fetchCripto();

  const coinsList = document.getElementById('cripto-list');

  coins
  .filter((coin) => Number(coin.rank) <= 10)  //rank é a propriedade do obj - ver no console.log linha 11
  //.filter((_, index) => index < 10)  // utilizamos o index disponível pela HOF `filter` para pegar os 10 primeiros valores do array de moedas.
  .forEach((coin) => {
    const newLi = document.createElement('li');
    const usdPrice = Number(coin.priceUsd);

    newLi.innerText = `${coin.name} (${coin.symbol}): ${usdPrice.toFixed(2)}`;

    coinsList.appendChild(newLi);
  });
}

window.onload = () => setCoins();