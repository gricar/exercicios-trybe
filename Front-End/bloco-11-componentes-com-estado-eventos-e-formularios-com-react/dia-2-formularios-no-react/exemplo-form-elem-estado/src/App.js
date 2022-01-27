import React, { Component } from 'react';
import './App.css';
import Input from './components/Input';

class App extends Component {

  constructor() {
    super()
    this.state = {
      teamSelected: '',
      name: '',
      cpf: '',
      email: '',
      description: '',
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({
      [event.target.name] : event.target.value
    })
  }

  render () {
    const { teamSelected, name, cpf, email, description } = this.state;
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

          <Input type="text" name="name" value={ name } onInputChange={ this.handleChange }/>
          <Input type="number" name="cpf" value={ cpf } onInputChange={ this.handleChange }/>
          <Input type="email" name="email" value={ email } onInputChange={ this.handleChange }/>

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
