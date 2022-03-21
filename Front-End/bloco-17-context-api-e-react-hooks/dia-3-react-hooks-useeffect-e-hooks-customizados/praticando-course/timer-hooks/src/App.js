import React from 'react';
import useTimer from './components/useTimer';

function App() {
  const { number, isMultiple, timer } = useTimer();
  return (
    <div className='App'>
      <p>{`Número aleatório: ${number}`}</p>
      <p>{isMultiple && 'Acerto'}</p>  {/* Se o número for múltiplo de 3 ou 5, uma mensagem "Acerto" é exibida na tela; */}
      <p>Tempo: { timer }</p>
    </div>
  );
}

export default App;