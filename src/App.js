import React, { Component } from 'react';
import './App.css';
import MovieLibrary from './components/MovieLibrary'
import CustomersList from './components/CustomersList'
import PropTypes from 'prop-types';

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
  showMoviesClickHandler = (event) => {
    console.log("movies are about to be shown");
    this.props.showMoviesCallback(this.props.title)

  }
  render() {

    return (
      <div className="App">
      <h1>Does this render??</h1>
      <CustomersList/>
      </div>
    );
  }
}

App.defaultProps = {
  title: PropTypes.string,


}

export default App;
