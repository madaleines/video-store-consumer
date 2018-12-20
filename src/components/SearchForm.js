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

  onClickAddMovie(event, movie) {
    const externalId = movie.external_id;
    const ADD_MOVIE_URL = `http://localhost:3000/movies` + '?external_id=' + externalId;
    axios.post(ADD_MOVIE_URL)
    .then((response) => {
      console.log(ADD_MOVIE_URL);
      console.log(response);
      alert(`Successfully added ${movie.title} to Library`)
    })
    .catch((error) => {
      console.log(error);
      console.log(ADD_MOVIE_URL);
      this.setState({
        error: error.message
      });
    });

  }

  render() {
    let searchList = this.state.searchResults

    const list = searchList.map((movie, index) => {
      return (
        <div key={index}>
        <Movie
        title={movie.title}
        movie={movie}
        />
        <button onClick={ (event) => this.onClickAddMovie(event, movie) } >
        Add to Library
        </button>
        </div>
      )
    });


    return (
      <section className="search-form">
      <h3 className="search-form__header"></h3>
      <form onSubmit={ this.submitForm } className="search-form__form">
      <label htmlFor="text" className="search-form__form-label">Movie Title: </label>
      <textarea type= "text" name="query" value={this.state.query}
      onChange={ this.onFieldChange } className="search-form__form-text"/>
      <input type="submit" value="Search" className="search-form__form-button"/>
      </form>
      <div>{ list }</div>
      </section>
    )
  }
}

SearchForm.propTypes = {
  addMovie: PropTypes.func.isRequired,
};

export default SearchForm;
