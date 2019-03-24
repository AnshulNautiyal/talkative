import React, { Component } from 'react';
import './App.css';
import UserAuthenticate from './components/login';
import Chat from './components/chatUI';
import { BrowserRouter, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
      <BrowserRouter>
          <Route path="/" exact component={UserAuthenticate} />
          <Route path="/talkative" exact component={Chat} />
      </BrowserRouter>      
      </div>
    );
  }
}

export default App;
