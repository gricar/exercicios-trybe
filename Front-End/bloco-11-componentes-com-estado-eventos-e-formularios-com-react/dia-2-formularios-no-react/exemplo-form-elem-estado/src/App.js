import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor() {
    super()
    this.state = {
      teamSelected: '',
      name: '',
      cpf: '',
      description: '',
    }

    this.handleChange = this.handleChange.bind(this)
    /* this.handleChangeTeam = this.handleChangeTeam.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeTextArea = this.handleChangeTextArea.bind(this); */
  }

  handleChange(event) {
    this.setState({
      [event.target.name] : event.target.value
    })
  }

  /* handleChangeTeam(event){
    this.setState({ teamSelected: event.target.value })
  }

  handleChangeName(event) {
    this.setState({ nome: event.target.value })
  }

  handleChangeTextArea(event) {
    this.setState({ description: event.target.value })
  } */

  render () {
    const { teamSelected, nome, cpf, description } = this.state;
    return (
      <div>
        <h1>Formulário</h1>
        <h3>Selecione seu time favorito</h3>
        <form>
          <select name="teamSelected" value={ teamSelected } onChange={ this.handleChange }>
            <option selected value="selecione">Selecione</option>
            <option value="cor">Corinthians</option>
            <option value="bah">Bahia</option>
            <option value="bra">Bragantino</option>
          </select>

          <label htmlFor="name">
            name:
            <input 
              type="text"
              id="name"
              name="name"
              onChange={ this.handleChange }
              value={ nome }
            />
          </label>

          <label htmlFor="cpf">
            CPF:
            <input
            type="number"
            id="cpf"
            name="cpf"
            onChange={ this.handleChange }
            value={ cpf }
          />
          </label>

          <label>
            Dissertação:
            <textarea name="description" value={ description } onChange={ this.handleChange } />
          </label>
        </form>
      </div>
    );
  }
}

export default App;
