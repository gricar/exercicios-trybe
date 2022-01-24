import React from 'react';
import './App.css';
import UserProfile from './UserProfile';
import contents from './UserContents';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        {contents.map((item) => <UserProfile user={item} />)}
      </div>
    );
  }
}

export default App;