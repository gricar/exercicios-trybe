import React, { Component } from 'react';

class Input extends Component {
  render () {
    const { name, value, onInputChange, type="text" } = this.props;
    return (
      <label htmlFor={ name } >
            { name }
            <input 
              type={ type }
              id={ name }
              name={ name }
              onChange={ onInputChange }
              value={ value }
            />
          </label>
    );
  }
}

export default Input;
