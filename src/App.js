import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from './pages/home.js';
import './App.css';
import Verify from './pages/verify';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="main-container container">
          <div className="center top-logo-container">
            <img className="top-logo" src="/img/logo-sm.png" />
          </div>
          <div className="content">
            <Route exact path="/" component={Verify} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
