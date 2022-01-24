import React from "react";
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
  render() {
    const { name, type, averageWeight:{ value, measurementUnit }, image } = this.props.pokemon
    return (
      <section className="pokemonCard">
        <div className="pokemonDescription">
          <h3>{ name }</h3>
          <p>{ type }</p>
          <p>{`Average weight: ${value} ${measurementUnit}`}</p>
        </div>
        <img src={ image } alt={ `${name} sprite` }></img>
      </section>
    )
  }
}

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.shape({
      value: PropTypes.number,
      measurementUnit: PropTypes.string,
    }),
    image: PropTypes.string,
  }).isRequired,
};

export default Pokemon;