import './App.css';
import React, { Component } from 'react';
import Form from './components/Form';
import DadosFormToDisplay from './components/DadosFormToDisplay';

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
  submitted: false,
}

class App extends Component {

  constructor() {
    super()
    this.state = INITIAL_STATE;

    this.handleChange = this.handleChange.bind(this);
    this.onBlurHandler = this.onBlurHandler.bind(this);

  }

  handleChange({ target }) {
    let { name, value } = target;

    if (name === 'name') value = value.toUpperCase();
    if (name === 'endereco') value = this.validateEndereco(value);

    this.updateState(name, value);
  }

  onBlurHandler({ target }) {
    let { name, value } = target;

    if (name === 'cidade') value = value.replace(/[1-9]/g, '');

    this.updateState(name, value);
  }

  updateState(name, value) {
    this.setState((state) => ({
      [name] : value, 
    }))
  }

  validateEndereco = (value) => value.replace(/[^\w\s]/gi, '');

  sendForm = () => { this.setState({ submitted: true }) }

  resetForm = () => { this.setState(INITIAL_STATE) }

  render() {
    const { submitted } = this.state;

    return (
      <main>
        <Form 
        handleChange={ this.handleChange }
        onBlurHandler = { this.onBlurHandler }
        currentState={ this.state }
        sendForm={ this.sendForm }
        resetForm={ this.resetForm }
        />

      { submitted && <DadosFormToDisplay currentState={ this.state } /> }

      </main>
    );
  }
}

export default App;
