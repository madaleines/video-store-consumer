import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import './App.css';
import SearchForm from './components/SearchForm'
import MovieLibrary from './components/MovieLibrary'
import CustomersList from './components/CustomersList'
import PropTypes from 'prop-types';
import axios from 'axios';


import 'bootstrap/dist/css/bootstrap.min.css';



class App extends Component {

  constructor() {
    super();

    this.state = {
      movies: null,
      customer: null,
    }
  }

  addMovie = (movie) => {
    const ADD_MOVIE_URL = `http://localhost:3000/movies`;
    axios.post(ADD_MOVIE_URL, movie)
    .then(() => {
      this.setState({
        message: `Added mvoie` });
      })
      .catch((error) => {
        this.setState( {error: error.message} );
      })
    }

    render() {
      return (
        <Router>
          <section className="heading-container">
            <h1 className="app-heading">
              <Link to="/" className="route-link">Home</Link>
            </h1>
            <nav>
              <ul className="link-container">
                <li>
                  <Link to="/search" className="route-link">Movie Search</Link>
                </li>
                <li>
                  <Link to="/library" className="route-link">Movie Library</Link>
                </li>
                <li>
                  <Link to="/customers" className="route-link">Customer List</Link>
                </li>
              </ul>
            </nav>

            <div className="main-container">
              <Route path="/search"
                render={ (props) => <SearchForm {...props}
                addMovie={ (movie) => this.addMovie(movie)}  />}
                />

              <Route path="/library"
                render={ (props) => <MovieLibrary {...props}  />}
                />
              <Route path="/customers"
                render={ (props) => <CustomersList {...props}  />}
                />
            </div>
          </section>
        </Router>
      );
    }
  }

  App.defaultProps = {
    title: PropTypes.string,
    movies: PropTypes.string,
  }

  export default App;
