import React, { Component } from 'react';

class JobData extends Component {
  render() {

    const { handleChange } = this.props;

    return (
      <fieldset>
        <legend>Informações sobre o último emprego:</legend>
        <label htmlFor="curriculo">
          Resumo do currículo:
          <textarea
          name="curriculo"
          maxLength="1000"
          onChange={ handleChange }
          />
        </label>

        <label htmlFor="cargo">
          Cargo:
          <textarea
          name="cargo"
          maxLength="40"
          onChange={ handleChange }
          onMouseEnter={() => {
            alert('Preencha com cuidado esta informação!');
          }}
          />
        </label>

        <label htmlFor="descricao">
          Descrição do cargo:
          <textarea
            name="descricao"
            type="text"
            maxLength="500"
            onChange={ handleChange }
          />
        </label>

      </fieldset>
    );
  }
}

export default JobData;
