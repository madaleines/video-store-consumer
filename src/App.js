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

            <header >
              <Link to="/" className="route-link">Maddy Kat Video Store</Link>
              </header>

              <nav>

                <div className="search-movies-customer">

                  <Link to="/search" className="movie-search">Movie Search</Link>


                  <Link to="/library" className="movie-library">Movie Library</Link>


                  <Link to="/customers" className="customer-search">Customer List</Link>
                  </div>

                  <div className="selected">
                    {this.state.selectedMovie}
                  </div>

                  <div className="selected">
                    {this.state.selectedCustomer}
                  </div>

                  <button Checkout></button>




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
                          </nav>



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
