import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './MovieLibrary.css';
import Movie from './Movie';


class MovieLibrary extends Component {
  constructor() {
    super();

    // initial state is an empty array
    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    console.log("hi maddy I am mounting the DOM");
    const GET_THE_LIBRARY_MOVIES = "http://localhost:3000/movies";

    // promise
    axios.get(GET_THE_LIBRARY_MOVIES)
    .then((response)=> {
      this.setState({
        movies: response.data,
      });
    })
    // if nothing is retrieved, cancel Xmas
    .catch((error) => {
      this.setState({
        error: error.message
      });
    });
  }

  // movie params: id, title, overview, release_date, image_url, external_id
  // put a click event handler function up here to be called down below in the show movies callback
  render() {
    let movieList = this.state.movies;

    const list = movieList.map((movie) => {
      return <Movie
      key={movie.id}
      id={movie.id}
      title={movie.title}
      overview={movie.overview}
      release_date={movie.release_date}
      image={movie.image_url}
      />
    });

    return (
      <div className="movie-list">
     showMoviesCallback = { list  }
      </div>
    )
  }
}

MovieLibrary.propTypes = {
  showMoviesCallback: PropTypes.func
};

export default MovieLibrary;
