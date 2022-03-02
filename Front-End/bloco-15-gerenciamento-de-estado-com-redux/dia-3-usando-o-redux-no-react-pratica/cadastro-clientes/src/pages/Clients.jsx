import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Clients extends Component {
  render() {
    const { registers, userLogin } = this.props;
    if (!userLogin.email) return <h2>Login não efetuado!</h2>;

    if (registers.length < 1) {
      return (
        <div>
          <h3>Nenhum cliente cadastrado!</h3>
          <Link to="/register">Cadastre-se</Link>
        </div>
      )
    }

    return (
      <div>
        <Link to="/register">Cadastre outros!</Link>
        <div>
          {registers.map((register, index) => {
            return (
              <div key={register.email}>
                <p>ID de registro: {index + 1}</p>
                <p>Nome: {register.name}</p>
                <p>Idade: {register.age}</p>
                <p>Email: {register.email}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ registerReducer, loginReducer }) => ({
  registers: registerReducer,
  userLogin: loginReducer,
});

export default connect(mapStateToProps)(Clients);
