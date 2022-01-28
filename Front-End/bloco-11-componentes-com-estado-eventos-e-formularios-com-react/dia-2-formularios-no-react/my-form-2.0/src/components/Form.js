import React, { Component } from "react";
import JobData from "./JobData";
import PersonalData from "./PersonalData";



class Form extends Component {
  render() {
    const { handleChange, onBlurHandler, currentState } = this.props;

    return(
      <main>
        <PersonalData 
          handleChange={ handleChange }
          onBlurHandler={ onBlurHandler }
          currentState= { currentState }
        />
        <JobData
          handleChange={ handleChange }
        />
      </main>
    );
  }
}

export default Form;