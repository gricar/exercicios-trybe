import React, { Component } from "react";

class DadosFormToDisplay extends Component {
  render() {

    const { currentState: { nome, email, cpf, endereco, cidade, estado, moradia, curriculo, cargo, descricao } } = this.props;

    return (
      <div>
        <h2>Dados enviados</h2>
        <h3>Pessoal</h3>
        <div> Name: { nome }</div>
        <div> Email: { email }</div>
        <div> CPF: { cpf }</div>
        <div> Endereço: { endereco }</div>
        <div> Cidade: { cidade }</div>
        <div> Estado: { estado }</div>
        <div> Tipo de residência: { moradia }</div>
        <h3>Profissional</h3>
        <div> Currículo: { curriculo }</div>
        <div> Cargo: { cargo }</div>
        <div> Descrição do cargo: { descricao }</div>
      </div>
    );
  }
}

export default DadosFormToDisplay;
