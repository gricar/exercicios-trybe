import React from "react";
import Pokemon from "./Pokemon";

class Pokedex extends React.Component {
  render() {
    const { allPokemons } = this.props;
    return (
      <div className="pokedex">
        {allPokemons.map(pokemonData => <Pokemon key={pokemonData.id} pokemon={pokemonData} />)}
      </div>
    )
  }
}

export default Pokedex;