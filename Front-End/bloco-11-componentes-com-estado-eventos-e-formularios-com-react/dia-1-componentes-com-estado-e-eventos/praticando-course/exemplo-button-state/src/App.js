import React, { Component } from "react";

class App extends Component {

  constructor() {
    super()
    this.state = {
      clickBtnOne: 0,  // Inicializando um componente, dando a ele um estado pré-definido;
      clickBtnTwo: 0,
    }

    this.handleClickBtnOne = this.handleClickBtnOne.bind(this);
    this.handleClickBtnTwo = this.handleClickBtnTwo.bind(this);
  }

  handleClickBtnOne() {  // Atualizar o estado de um componente.
    this.setState((estadoAnterior, _props) => (  // A atualização do estado é assíncrona e, por isso, se você quiser garantir que uma atualização ocorrerá depois da outra, tal atualização deverá ser definida via callback passada à função this.setState
      {
        clickBtnOne: estadoAnterior.clickBtnOne + 1,
      }
    ))
  }
  handleClickBtnTwo() {
    this.setState(({ clickBtnTwo }) => ({
      clickBtnTwo: clickBtnTwo + 1,
    }))
  }

  getBtnColor(numClicks) {
    return numClicks % 2 === 0 ? 'green' : 'white';
  }

  render() {
    const { clickBtnOne } = this.state;
    return (
      <div>
        {/* Capturar eventos utilizando a sintaxe do React */}
        {/* lógica que quando o número de cliques no botão for par, ele deve ser verde. */}
        <button 
          onClick={this.handleClickBtnOne}  
          style={{ backgroundColor: this.getBtnColor(clickBtnOne) }}
          // Para renderizar as cores, precisamos acrescentar "inline style", passando o estado correspondente como parâmetro
        >
          Botão 1 | Count = {clickBtnOne}
        </button>

        <button onClick={this.handleClickBtnTwo}>
        Botão 2 | Count = {this.state.clickBtnTwo}
        </button>
      </div>
    );
  }
}

export default App;