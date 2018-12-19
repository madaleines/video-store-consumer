import React, { Component } from 'react';
import './App.css';
import MovieLibrary from './components/MovieLibrary'
import CustomersList from './components/CustomersList'
import PropTypes from 'prop-types';

import 'bootstrap/dist/css/bootstrap.min.css';



class App extends Component {

  constructor() {
    super();

    this.state = {
      movies: null,
      customer: null,
    }
  }
// for the movies to be added after <MovieLibrary/>
  // showMovies = (e) => {
  //   console.log("movies are about to be shown");
  //   this.props.showMoviesCallback(this.props.movies)
  // }

// put a button down bellow for the movies

  render() {

    return (
      <div className="App">
      <h1>Does this render??</h1>

      <MovieLibrary/>
      </div>
    );
  }
}

App.defaultProps = {
  title: PropTypes.string,
  movies: PropTypes.string,
}

export default App;
