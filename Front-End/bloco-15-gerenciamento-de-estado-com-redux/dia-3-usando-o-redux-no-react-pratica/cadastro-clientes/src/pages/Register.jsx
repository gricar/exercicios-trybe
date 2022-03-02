import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addRegister } from '../redux/actions';

class Register extends Component {
  constructor () {
    super();
    this.state = {
      name: '',
      age: '',
      email: '',
    }
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    })
  }

  validateRegister = (event) => {
    event.preventDefault();
    const { name, age, email } = this.state;
    const { dispatch } = this.props;
    dispatch(addRegister({ name, age, email }));
    
    this.setState({
      name: '',
      age: '',
      email: '',
    });
  }

  render() {
    const { name, age, email } = this.state;
    const { userLogin } = this.props;
    if (!userLogin.email) return <h2>Login não efetuado!</h2>
    return (
      <div>
        <form>
          <input
            type="text"
            name="name"
            placeholder="Nome"
            value={ name }
            onChange={ this.handleChange }
          />
          <input
            type="number"
            name="age"
            placeholder="Age"
            value={ age }
            onChange={ this.handleChange }
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={ email }
            onChange={ this.handleChange }
          />
          <button
            onClick={ this.validateRegister }
          >
          Registrar Cliente
          </button>
        </form>
        <Link to="/clients">Ver clientes cadastrados</Link>
      </div>
    );
  }
}

const mapStateToProps = ({ loginReducer }) => ({
  userLogin: loginReducer,
});

export default connect(mapStateToProps)(Register);
