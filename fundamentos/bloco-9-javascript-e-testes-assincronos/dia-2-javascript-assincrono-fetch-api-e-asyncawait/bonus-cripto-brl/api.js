// Bonus
// 1.Que tal usarmos uma API para converter o preço das crypto moedas do exercício anterior para a nossa moeda local ao invés de mostrar o seu valor em dólar?

const fetchCoins = async () => {
  const url = 'https://api.coincap.io/v2/assets';

  const coins = await fetch(url)
    .then((response) => response.json())
    .then((data) => data.data)
    .catch((error) => error.toString());

  return coins;
};

const fetchUsdCurrencies = async () => {
  // url do gabarito do course - eu preferi resumir
  //const baseUrl = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest'
  //const usdEndpoint = '/currencies/usd.min.json'
  //const url = baseUrl.concat(usdEndpoint);
  const url = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.json'

  const usdCurrencies = await fetch(url)
    .then((response) => response.json())
    .then((data) => data.usd)
    .catch((error) => error.toString());

  return usdCurrencies;
};

const setCoins = async () => {
  const coins = await fetchCoins();
  const usdCurrencies = await fetchUsdCurrencies();

  const coinsList = document.getElementById('coins-list');

  coins
    .filter((coin) => Number(coin.rank) <= 10)
    .forEach((coin) => {
      const newLi = document.createElement('li');
      const usdPrice = Number(coin.priceUsd);
      const brlPrice = usdPrice * usdCurrencies.brl;

      newLi.innerText = `${coin.name} (${coin.symbol}): R$ ${brlPrice.toFixed(2)}`;

      coinsList.appendChild(newLi);
    });
};

window.onload = () => setCoins();