import React, { Component } from 'react';

export class CustomerDetail extends Component {
  static displayName = CustomerDetail.name;

  constructor(props) {
    super(props);
    this.state = { customers: [], loading: true };
  }

  componentDidMount() {
    this.populateCustomerData();
  }

  static renderCustomersTable(customers) {
      return (
         
      <table className='table table-striped' aria-labelledby="tabelLabel">
        <thead>
          <tr>
            <th>Description</th>
            <th>Quantity</th>
            <th>Binding Type</th>
            <th>Total Price</th>
          </tr>
        </thead>
        <tbody>
          {customers.map(customer =>
            <tr key={customer.quoteNumber}>
              <td>{customer.description}</td>
              <td>{customer.quantity}</td>
              <td>{customer.bindingType}</td>
              <td>{customer.totalPrice}</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }

  render() {
    let contents = this.state.loading
        ? <p><em>Loading...</em></p>
        : CustomerDetail.renderCustomersTable(this.state.customers);

    return (
      <div>
        <h1 id="tabelLabel" >Customer Detail Page</h1>
        <p>A Specific Customer from the Database.</p>
        {contents}
      </div>
    );
  }

  async populateCustomerData() {
      const response = await fetch('https://localhost:44342/');
    const data = await response.json();
    this.setState({ quotes: data, loading: false });
  }
}
