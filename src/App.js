import React, { Component } from 'react';
import './App.css';
import MovieLibrary from './components/MovieLibrary'

class App extends Component {

  constructor() {
    super();

    this.state = {
      movie: null,
      customer: null
    }
  }

  render() {
    return (
      <div className="App">
      // { MovieLibrary }
      <h1>Does this render??</h1>
      <MovieLibrary/>
      </div>
    );
  }
}

export default App;
