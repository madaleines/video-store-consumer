import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import './App.css';
import SearchForm from './components/SearchForm'
import MovieLibrary from './components/MovieLibrary'
import CustomersList from './components/CustomersList'
import PropTypes from 'prop-types';

import 'bootstrap/dist/css/bootstrap.min.css';



class App extends Component {

  constructor() {
    super();

    this.state = {
      movies: null,
      customer: null,
    }
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
              render={ (props) => <SearchForm {...props}  />}
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
