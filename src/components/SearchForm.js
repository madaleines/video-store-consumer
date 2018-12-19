import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SearchForm.css';

class SearchForm extends Component {
  constructor(props) {
    super(props);

    const resetState = {
      text: '',
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
    // link this up above?
    this.props.searchCallback(query);
    this.setState(this.resetState);
  };

  render() {
    return (
      <section className="search-form">
        <h3 className="search-form__header">Create a New Inspiration</h3>
        <form onSubmit={ this.submitForm } className="search-form__form">
          <label htmlFor="text" className="search-form__form-label">Movie Title: </label>
          <textarea name="text" value={this.state.text}
          onChange={ this.onFieldChange } className="search-form__form-textarea"/>
          <input type="submit" value="Search" className="search-form__form-button"/>
        </form>
      </section>
    )
  }
}

SearchForm.propTypes = {
  searchCallback: PropTypes.func.isRequired
};

export default SearchForm;
