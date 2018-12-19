import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import './Search.css';
import SearchForm from './SearchForm'

class Search extends Component{
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
    }
  }

  searchMovie = (title) => {
    console.log("searching...searching...");
    SEARCH_URL = "localhost3000/movies "
    axios.get(SEARCH_URL + title)
    //promise
    .then((response) => ({
      this.setState({
        movies: response.data
      })
    )
    // if there are errors contact the proper authority
    catch((error) => {
      this.setState({
        error: error.message
      });
    });

  }))

}

render() {
  return (
    <SearchForm callback>


  )

}







}
