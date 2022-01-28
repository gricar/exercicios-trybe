import './App.css';
import React, { Component } from 'react';
import Form from './components/Form';

const INITIAL_STATE = {
  nome: '',
  email: '',
  cpf: '',
  endereco: '',
  cidade: '',
  estado: '',
  moradia: '',
  curriculo: '',
  cargo: '',
  descricao: '',
}

class App extends Component {

  constructor() {
    super()
    this.state = INITIAL_STATE;

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    let { name, value } = target;

    if (name === 'name') value = value.toUpperCase();
    if (name === 'endereco') value = this.validateEndereco(value);

    this.updateState(name, value);
  }

  updateState(name, value) {
    this.setState((state) => ({
      [name] : value,
    }))
  }

  validateEndereco = (value) => value.replace(/[^\w\s]/gi, '');

  render() {
    return (
      <main>
        <Form 
        handleChange={ this.handleChange }
        />
      </main>
    );
  }
}

export default App;
