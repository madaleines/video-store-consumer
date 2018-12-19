import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import './SearchForm.css';

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
    const query = {...this.state};
    const SEARCH_URL = `http://localhost:3000/movies?query=${query}`;
    axios.get(SEARCH_URL)
    .then((response) => {
      this.setState({searchResults: response.data})
    })
    .catch((error) => {
      this.setState({ message: error.message});
    })

    console.log(query)
    console.log(this.state.searchResults)

    this.setState(this.resetState);
  }


  render() {
    return (
      <section className="search-form">
        <h3 className="search-form__header">Create a New Inspiration</h3>
        <form onSubmit={ this.submitForm } className="search-form__form">
          <label htmlFor="text" className="search-form__form-label">Movie Title: </label>
          <textarea name="query" value={this.state.query}
          onChange={ this.onFieldChange } className="search-form__form-textarea"/>
          <input type="submit" value="Search" className="search-form__form-button"/>
        </form>
      </section>
    )
  }
}

SearchForm.propTypes = {
};

export default SearchForm;
