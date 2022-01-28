import React, { Component } from "react";
import JobData from "./JobData";
import PersonalData from "./PersonalData";



class Form extends Component {
  render() {
    const { handleChange, onBlurHandler, currentState, sendForm, resetForm } = this.props;

    return(
      <form>
        <PersonalData 
          handleChange={ handleChange }
          onBlurHandler={ onBlurHandler }
          currentState= { currentState }
        />
        <JobData
          handleChange={ handleChange }
        />
        <input
          type="button"
          value="Enviar"
          onClick={ sendForm }
        />
        <input
          type="reset"
          value="Limpar"
          onClick={ resetForm }
        />
      </form>
    );
  }
}

export default Form;