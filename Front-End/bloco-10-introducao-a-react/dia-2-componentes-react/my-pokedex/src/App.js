import React from 'react';
import './App.css';
import pokemons from './Data';
import Pokedex from './Pokedex';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Pokedex</h1>
        <Pokedex allPokemons={pokemons}/>
      </div>
    );
  }
}

export default App;
