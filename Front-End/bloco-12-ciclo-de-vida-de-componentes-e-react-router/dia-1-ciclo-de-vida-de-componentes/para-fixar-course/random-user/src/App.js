import React, { Component } from 'react';
import './App.css';
import Loading from './Loading';
import PersonalCard from './PersonalCard'

class App extends Component {
  constructor() {
    super()
    
    this.state = {
      loading: true,
      userData: '',
    }
  }
  
  componentDidMount() {
    fetch('https://api.randomuser.me/')
    .then(response => response.json())
    .then(data => {
      this.setState({
        userData: data.results,
        loading: false,
      });
    });
  }
  
  getUserElements({ name, email, dob, picture }) {
    return {
      name: `${name.first} ${name.last}`,
      email: email,
      age: dob.age,
      image: picture.thumbnail,
    }
  }

  render() {
    const { loading, userData } = this.state;
    if (loading) return <Loading />
    return (
      <div>
        {
          userData.map((currUser, index) => (
            <PersonalCard key={ index } userCard={ this.getUserElements(currUser) } />
          ))

        }
        <div>
        </div>
      </div>
    );
  }
}

export default App;
