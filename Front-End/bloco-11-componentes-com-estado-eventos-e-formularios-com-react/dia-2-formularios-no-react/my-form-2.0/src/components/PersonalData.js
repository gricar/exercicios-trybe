import React, { Component } from 'react';

const states = ['Rio de Janeiro', 'Minas Gerais', 'Amapá', 'Amazonas', 'São Paulo', 'Ceará', 'Distrito Federal'];

class PersonalData extends Component {
  render() {

    const { handleChange, onBlurHandler, currentState } = this.props;
    console.log(currentState.cidade);

    return (
      <fieldset>
        <legend>Informações pessoais</legend>
        <label htmlFor="nome">
          Nome:
          <input
            name="nome"
            type="text"
            maxLength="40"
            onChange={ handleChange }
            required
          />
        </label>

        <label htmlFor="email">
          Email:
          <input
            name="email"
            type="text"
            maxLength="50"
            onChange={ handleChange }
            required
          />
        </label>

        <label htmlFor="cpf">
          CPF:
          <input
            name="cpf"
            type="text"
            maxLength="11"
            onChange={ handleChange }
            required
          />
        </label>

        <label htmlFor="endereco">
          Endereço:
          <input
            name="endereco"
            type="text"
            maxLength="200"
            onChange={ handleChange }
            required
          />
        </label>

        <label htmlFor="cidade">
          Cidade:
          <input
            name="cidade"
            type="text"
            maxLength="28"
            required
            value={ currentState.cidade }
            onChange={ handleChange }
            onBlur={ onBlurHandler }
          />
        </label>

        <label htmlFor="estado">Estado:</label>
        <select
          name="estado"
          required
          onChange={ handleChange }
          defaultValue=""
        >
          <option value="">Selecione</option>
          { states
              .sort()
              .map((state, index) => (
                <option key={ index }>{ state }</option>
              )) }
        </select>

         <div>
          <label htmlFor="casa">
            <input
              name="moradia"
              id="casa"
              type="radio"
              value="casa"
              onChange={ handleChange }
              required
            />
          Casa
          </label>

          <label htmlFor="apto">
            <input
              name="moradia"
              id="apto"
              value="apto"
              type="radio"
              onChange={ handleChange }
              required
            />
          Apartamento
          </label>
        </div>
      </fieldset>
    );
  }
}

export default PersonalData;
