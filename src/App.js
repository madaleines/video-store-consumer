import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import './App.css';
import SearchForm from './components/SearchForm'
import MovieLibrary from './components/MovieLibrary'
import CustomersList from './components/CustomersList'
import Checkout from './components/Checkout';
import PropTypes from 'prop-types';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';



class App extends Component {

  constructor() {
    super();

    this.state = {
      movie: null,
      customer: null,
      selectedCustomer: "None",
      selectedMovie: "None",
    }
  }

  // rerender selected movie
  addToRentMovie = (movie) => {
    this.setState({
      movie: movie.title,
      selectedMovie: movie.title
    })
  }

  // rerender selected customer
  addCustomerToRent = (customer) => {
    this.setState({
      customer: customer.id,
      selectedCustomer: customer.name
    })
  }


  createRental = () => {
    axios.post(
      `http://localhost:3000/rentals/${this.state.movie}/check-out`,
      {customer_id: this.state.customer}
    )
    .then((response) => {
      alert(`Successfully checked out!`)
      console.log(response.data)
      console.log(this.state.customer.id)
      console.log(this.state.movie.id)
      this.setState({
        message: "Successfully saved Rental",
        customer: null,
        movie: null
      })
    })
    .catch((error) => {
      this.setState({ message: error.message })
    });
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

            <div className="checkout-buttons">
              <div className="selected">
                {this.state.selectedMovie}
              </div>
              <div className="selected">
                {this.state.selectedCustomer}
              </div>
              <button Checkout></button>
            </div>

            <button
              type="button"
              onClick={this.createRental}
              >
              Checkout
            </button>
          </nav>

          <div className="lists">
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
