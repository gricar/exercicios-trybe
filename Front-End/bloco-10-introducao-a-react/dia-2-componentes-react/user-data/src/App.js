import React from 'react';
import './App.css';
import UserProfile from './UserProfile';
import contents from './UserContents';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        {contents.map((userData) => <UserProfile key={userData.id} user={userData} />)}
      </div>
    );
  }
}

export default App;