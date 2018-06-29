import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TitleBar from './components/TitleBar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <TitleBar />
      </div>
    );
  }
}

export default App;
