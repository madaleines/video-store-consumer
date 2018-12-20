import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './MovieLibrary.css';
import Movie from './Movie';


class MovieLibrary extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    console.log("hi maddy I am mounting the DOM");
    const GET_THE_LIBRARY_MOVIES = "http://localhost:3000/movies";
    axios.get(GET_THE_LIBRARY_MOVIES)
    .then((response)=> {
      this.setState({
        movies: response.data,
      });
    })
    .catch((error) => {
      this.setState({
        error: error.message
      });
    });
  }

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
      addToRentClickHandler={() =>
        this.props.addMovieRental(movie)}

      />
    });

    return (
      <div className="movie-list">
      { list  }
      </div>
    )
  }
}

MovieLibrary.propTypes = {
};

export default MovieLibrary;
