import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Checkout.css';

class Checkout extends Component {
  static propTypes = {
    movie: PropTypes.string,
    customer: PropTypes.string,
    submitRental: PropTypes.func.isRequired
  }

  renderSelection = (field) => {
    return this.props[field];
  }

  submitForm = (event) => {
    event.preventDefault();
    if (this.props.movie && this.props.customer) {
      this.props.submitRental();
    } else {
      alert("Must select both Customer and Movie");
    }
  }

  render() {
    return (
         <form onSubmit={ this.submitForm } className="checkout-container">
           <div className="selection-container">
             <label className="selection-label">Movie: </label>
             <p className="selection-value">{ this.renderSelection("movie") }</p>
           </div>
           <div className="selection-container">
             <label className="selection-label">Customer: </label>
             <p className="selection-value">{ this.renderSelection("customer") }</p>
           </div>
           <input type="submit" value="Checkout Rental" className="button"/>
         </form>
    )
  }

}


export default Checkout;
