import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Customer.css'

class Customer extends Component {
  constructor(props){
    super(props);
    this.state = {
      id: this.props.id,
      name: this.props.name,
      registered_at: this.props.registered_at,
      address: this.props.address,
      city: this.props.city,
      state: this.props.state,
      postal_code: this.props.postal_code,
      account_credit: this.props.account_credit,
      movies_checked_out_count: this.props.movies_checked_out_count,
    }
  }

  selectCustomerRental = () => {
    this.props.selectCustomerToRent(this.props.title);
  }

  renderCustomerDetails = () => {
  return (
    <section>
      <p className="customer__content-dets">
        Name: { this.props.name }
        Movies Checked Out: { this.props.movies_checked_out_count}
      </p>
    </section>
  )

  }

  render() {
    const renderedcustomerDetails = this.renderCustomerDetails()
    return(
      <section className="customer">
        <div className="customer__content">
          { renderedcustomerDetails }
        </div>
        <button className="customer__rental"
          onClick={this.selectCustomerRental}>
          Select Customer
        </button>
      </section>
    )
  }
}

Customer.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  registered_at: PropTypes.string,
  address: PropTypes.func,
  city: PropTypes.string,
  state: PropTypes.string,
  postal_code: PropTypes.string,
  account_credit: PropTypes.func,
  movies_checked_out_count: PropTypes.string,
};

export default Customer;
