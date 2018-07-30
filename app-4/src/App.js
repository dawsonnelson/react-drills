import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Components/Login'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Login />
        </div>
      
      </div>
    );
  }
}
   
export default App;
