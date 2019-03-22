import React, { Component } from 'react';
import './App.css';
import UserAuthenticate from './components/login';

class App extends Component {
  render() {
    return (
      <div className="App">
        <UserAuthenticate/>
      </div>
    );
  }
}

export default App;
