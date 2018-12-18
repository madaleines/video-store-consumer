import React, { Component } from 'react';
import './App.css';
import MovieLibrary from './components/MovieLibrary'
import CustomersList from './components/CustomersList'

class App extends Component {

  // constructor() {
  //   super();
  //
  //   this.state = {
  //     movie: null,
  //     customer: null
  //   }
  // }
// for the movies to be added after <MovieLibrary/>
  render() {
    return (
      <div className="App">
      <h1>Does this render??</h1>
      <CustomersList/>
      </div>
    );
  }
}

export default App;
