import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Movie.css';

class Movie extends Component {
  constructor(props) {
    super(props);

    // movie params: id, title, overview, release_date, image_url, external_id
    this.state = {
      id: this.props.id,
      title: this.props.title,
      overview: this.props.overview,
      release_date: this.props.release_date,
      image: this.props.image_url,
      external_id: this.props.external_id,

    }
  }

  render(){
    return(
      <ul>
        { this.props.title }
      </ul>
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
