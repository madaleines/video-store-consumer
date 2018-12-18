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

  render() {

    return(

      <ul>
      { this.props.name }
      { this.props.movies_checked_out_count}
      </ul>
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
