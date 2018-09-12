import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './scss/index.scss';

import Operations from './scenes/Operations';
import About from './scenes/About';

export default class App extends Component {
  render() {
    return (
      <div>
        <header>
          <nav>
            {/*<Link to="/">Home</Link>*/}
            {/*<Link to="/about-us">About</Link>*/}
          </nav>
        </header>

        <main>
          <Route exact path="/" component={Operations} />
          <Route exact path="/about-us" component={About} />
        </main>
      </div>

    );
  }
}