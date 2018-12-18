import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './CustomerList.css';
import Customer from './Customer';


class CustomerList extends Component {
  constructor() {
    super();

    this.state = {
      customers: [],
    };
  }

  componentDidMount() {
    console.log("hi maddy I am mounting the DOM");
    const GET_THE_CUSTOMERS_LIST = "http://localhost:3000/customers";

    axios.get(GET_THE_CUSTOMERS_LIST)
    .then((response)=> {
      this.setState({
        customers: response.data,
      });
    })
    .catch((error) => {
      this.setState({
        error: error.message
      });
    });
  }

  render() {
    let customerList = this.state.customers;

    const list = customerList.map((customer) => {
      return <Customer
      key={customer.id}
      id={customer.id}
      name={customer.name}
      movies_checked_out_count={customer.movies_checked_out_count}
      />
    });

    return (
      <div className="customer-list">
      { list  }
      </div>
    )
  }
}

CustomerList.propTypes = {

};

export default CustomerList;
