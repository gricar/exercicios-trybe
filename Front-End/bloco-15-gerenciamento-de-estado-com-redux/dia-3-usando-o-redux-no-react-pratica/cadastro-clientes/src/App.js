import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Clients from './pages/Clients';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Home }/>
          <Route path="/login" component={ Login }/>
          <Route path="/register" component={ Register }/>
          <Route path="/clients" component={ Clients }/>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
