import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from '../redux/actions';

class Login extends Component {
  constructor () {
    super();
    this.state = {
      email: '',
      password: '',
    }
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    })
  }

  render() {
    const { email, password } = this.state;
    return (
      <div>
        <form>
          <input
            type="text"
            name="email"
            placeholder="Email"
            onChange={ this.handleChange }
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={ this.handleChange }
          />
        </form>
        <Link
          to="/clients"
          onClick={ () => this.props.loginDispatch({ email, password }) }
        >
        Entre
        </Link>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  loginDispatch: userInfo => dispatch(login(userInfo))
})

export default connect(null, mapDispatchToProps)(Login);
