import { useState, useEffect } from 'react';

function useTimer() {
  const [number, setNumber] = useState(1);
  const [isMultiple, setMultiple] = useState(false);
  const [timer, setTimer] = useState(1);

  const TIMER_INTERVAL = 1000;
  const NUMBER_TIMEOUT = 10000;
  const MESSAGE_TIMEOUT = 4000;
  const MIN_RANDOM = 1;
  const MAX_RANDOM = 100;

  const increaseTimerInterval = () => setTimer(timer => timer + 1);

  const verifyMultiple = randomNumber => {
    if (randomNumber % 3 === 0 || randomNumber % 5 === 0) {
      setMultiple(true);
      setTimeout(() => setMultiple(false), MESSAGE_TIMEOUT);  //A mensagem de acerto é removida 4 segundos depois de ser exibida;
    }
  };

  const handleRandomNumber = () => {
    // Vamos retornar um número aleatório de 1 a 100.
    const randomNumber = Math.round(
      /* O Math.random retorna um valor entre 0 e 1, com o 0 incluso, então o cálculo será multiplicar o valor aleatório por 100, e com o uso do Math.floor o resultado será um valor entre 0 e 99, após somar mais 1, o menor valor será 1 e o maior valor será 100 */
      Math.floor(Math.random() * MAX_RANDOM) + MIN_RANDOM
    );
    verifyMultiple(randomNumber);
    setNumber(randomNumber);
    setTimer(0);
  };

  useEffect(() => {
    const interval = setInterval(handleRandomNumber, NUMBER_TIMEOUT);
    const setTimerInterval = setInterval(increaseTimerInterval, TIMER_INTERVAL);
    //willUnmount
    return () => {
      clearInterval(interval);
      clearInterval(setTimerInterval);
    };
  }, []);

  return { number, isMultiple, timer };
}

export default useTimer;