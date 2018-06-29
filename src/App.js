import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import TitleBar from './components/TitleBar'
import {Switch, Route, Link} from 'react-router-dom'
import LandingPage from './components/pages/LandingPage'

class App extends Component {
  render() {
    return (
      <Fragment>
        <div className="App">
          <header><TitleBar /></header>
          <main>
            <LandingPage />
          </main>
        </div>
      </Fragment>
    );
  }
}

export default App;
