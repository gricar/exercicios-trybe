import React, { Component } from 'react';

class NameInput extends Component {
  render () {
    const { name , onInputChange} = this.props;
    return (
      <label htmlFor="name">
            name:
            <input 
              type="text"
              id="name"
              name="name"
              onChange={ onInputChange }
              value={ name }
            />
          </label>
    );
  }
}

export default NameInput;
