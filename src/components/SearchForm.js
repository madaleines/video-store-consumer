import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import './SearchForm.css';
import Movie from './Movie';


class SearchForm extends Component {
  constructor(props) {
    super(props);
    const resetState = {
      query: '',
      searchResults: []
    };

    this.state = {...resetState};
    this.resetState = {...resetState}
  }

  onFieldChange = (event) => {
    const { name, value } = event.target;
    const updatedField = {};
    updatedField[name] = value;
    this.setState(updatedField);
  };

  submitForm = (event) => {
    event.preventDefault();
    const query = this.state.query;
    const SEARCH_URL = `http://localhost:3000/movies?query=${query}`;
    console.log(SEARCH_URL)
    axios.get(SEARCH_URL)
    .then((response) => {
      console.log(response)

      this.setState({
        searchResults: response.data
      })
    })
    .catch((error) => {
      this.setState({ message: error.message});
    })


    console.log(query)
    console.log(this.state.searchResults)

    this.setState(this.resetState);
  }


  render() {
    let searchList = this.state.searchResults

    const list = searchList.map((movie) => {
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
      <section className="search-form">
        <h3 className="search-form__header"></h3>
        <form onSubmit={ this.submitForm } className="search-form__form">
          <label htmlFor="text" className="search-form__form-label">Movie Title: </label>
          <textarea name="query" value={this.state.query}
            onChange={ this.onFieldChange } className="search-form__form-text"/>
          <input type="submit" value="Search" className="search-form__form-button"/>
        </form>
        <div>{ list }</div>
      </section>
    )
  }
}

SearchForm.propTypes = {
};

export default SearchForm;
