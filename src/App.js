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

          <div className="main">

              <div className="title">
                <h2 id="header">Mad Kat Videos </h2>
              </div>

            <nav>
              <section className="links">
                <div className="search-movies-customer">
                  <button type="button" className="btn btn-secondary btn-margin">
                    <Link to="/search" className="movie-search">Movie Search</Link>
                  </button>
                  <button type="button" className="btn btn-secondary btn-margin">
                    <Link to="/library" className="movie-library">Movie Library</Link>
                  </button>
                  <button type="button" className="btn btn-secondary" >
                    <Link to="/customers" className="customer-search">Customer List</Link>
                  </button>
                </div>

                <div className="checkout-buttons">
                  <div className="selected">
                    <h4>Selected Movie</h4>
                    {this.state.selectedMovie}
                  </div>
                  <div className="selected">
                    <h4>Selected Customer</h4>
                    {this.state.selectedCustomer}
                  </div>
                  <button type="button" className="btn btn-secondary">Check Out</button>
                </div>

              </section>
            </nav>

            <div className="lists">
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
                    <Route path="/search"
                      render={ (props) => <SearchForm {...props}
                      addMovie={ (movie) => this.addMovie(movie)}  />}
                      />

                  </div>
                </Router>
              );
            }
          }

          App.defaultProps = {
            title: PropTypes.string,
            movies: PropTypes.string,
          }

          export default App;
