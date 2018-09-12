import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'



import Home from './scenes/Home';
import About from './scenes/About';

export default class App extends Component {
  render() {
    return (
      <div>
        <header>
          <Link to="/">Home</Link>
          <Link to="/about-us">About</Link>
        </header>

        <main>
          <Route exact path="/" component={Home} />
          <Route exact path="/about-us" component={About} />
        </main>
      </div>

    );
  }
}