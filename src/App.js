import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import TitleBar from './components/TitleBar'
import {Switch, Route, Link} from 'react-router-dom'
import LandingPage from './components/pages/LandingPage'
import CityPage from './components/pages/CityPage'

class App extends Component {
  render() {
    return (
      <Fragment>
        <div className="App">
          <header><TitleBar /></header>
          <main>
          <Switch>
            <Route exact path = '/' component = {LandingPage}/>
            <Route path = '/cities' component = {CityPage}/>
            <Route path = '/city/:id' component = {CityPage}/>
          </Switch>
          </main>
        </div>
      </Fragment>
    );
  }
}

export default App;
