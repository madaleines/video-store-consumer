import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Movie.css';

class Movie extends Component {
  constructor(props) {
    super(props);
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
};

export default Movie;
