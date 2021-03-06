import React, { Component } from 'react';

export class QuoteList extends Component {
  static displayName = QuoteList.name;

  constructor(props) {
    super(props);
    this.state = { quotes: [], loading: true };
  }

  componentDidMount() {
    this.populateQuoteData();
  }

  static renderQuotesTable(quotes) {
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
          {quotes.map(quote =>
            <tr key={quote.quoteNumber}>
              <td>{quote.description}</td>
              <td>{quote.quantity}</td>
              <td>{quote.bindingType}</td>
              <td>{quote.totalPrice}</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : QuoteList.renderQuotesTable(this.state.quotes);

    return (
      <div>
        <h1 id="tabelLabel" >Apak Quotes</h1>
        <p>A List of all the Quotes in the Database.</p>
        {contents}
      </div>
    );
  }

  async populateQuoteData() {
      const response = await fetch('https://localhost:44342/customers');
    const data = await response.json();
    this.setState({ quotes: data, loading: false });
  }
}
