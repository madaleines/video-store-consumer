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
      selectedCustomer: "None",
      selectedMovie: "None",
    }
  }

// rerender selected movie
  addToRentMovie = (movie) => {
    this.setState({
      selectedMovie: movie.title,
    })
  }

// rerender selected customer
  addCustomerToRent = (customer) => {
    this.setState({
      selectedCustomer: customer.name,
    })
  }

  addMovie = (movie) => {
    const ADD_MOVIE_URL = `http://localhost:3000/movies`;
    axios.post(ADD_MOVIE_URL, movie)
    .then(() => {
      this.setState({
        message: `Added movie` });
      })
      .catch((error) => {
        this.setState( {error: error.message} );
      })
    }

    render() {
      return (
        <Router>
          <section className="navbar__nav">
            <h1 className="app-heading">
              <Link to="/" className="route-link">Maddy Kat Video Store</Link>
            </h1>
            <nav>
              <div className="navbar__nav ">

                  <Link to="/search" className="navbar__nav-item">Movie Search</Link>


                  <Link to="/library" className="navbar__nav-item">Movie Library</Link>


                  <Link to="/customers" className="navbar__nav-item">Customer List</Link>
                  <div>
                    {this.state.selectedMovie}
                  </div>
                  <div>
                    {this.state.selectedCustomer}

                  </div>

              </div>
            </nav>

            <div className="main-container">
              <Route path="/search"
                render={ (props) => <SearchForm {...props}
                addMovie={ (movie) => this.addMovie(movie)}  />}
                />

              <Route path="/library"
                render={ (props) =>
                  <MovieLibrary
                    {...props}
                    addMovieRental = {this.addToRentMovie}
                     />}
                />
              <Route path="/customers"
                render={ (props) =>
                  <CustomersList
                    {...props}
                    addCustomerRental = {this.addCustomerToRent}
                     />}
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
