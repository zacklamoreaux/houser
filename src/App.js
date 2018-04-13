import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard'
import Header from './Components/Header/Header'
import House from './Components/House/House'
import Wizard from './Components/Wizard/Wizard'
import route from './route'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        { route }
      </div>
    );
  }
}

export default App;
        
