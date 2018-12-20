import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Movie.css';

class Movie extends Component {
  constructor(props) {
    super(props);

  }

  selectMovieRental = () => {
    this.props.addToRentClickHandler(this.props.title);

  }



  renderMovieDetails = () => {
    return (
      <section>
        <img src={ this.props.image } />

        <p className="movie__content-dets">
          { this.props.title  }
          { this.props.overview  }
          { this.props.release_date  }
        </p>
      </section>
    )
  }

  render() {
    const renderedmovieDetails = this.renderMovieDetails()
    return(
      <section className="movie">
        <div className="movie__content">
          { renderedmovieDetails }
        </div>
        <button className="movie__rental" onClick={this.selectMovieRental}>
          Select For Rental
        </button>
      </section>
    )
  }
}

Movie.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  overview: PropTypes.string,
  release_date: PropTypes.string,
  image: PropTypes.string,
  external_id: PropTypes.string,
  selectMovieRental: PropTypes.func,
};

export default Movie;
