import React, { Component } from 'react';

export class CustomerHome extends Component {
  static displayName = CustomerHome.name;

    render() {
            return (
                <div>
                    <h1>Hello, {localStorage.user}!  Would you like a quote?</h1>
                    <h3>Things a Customer can do</h3>
                    <ul>
                        <li>
                            Search by quote number to return a specific quote
                    </li>
                        <li>
                            Search by Date Range to return a range of quotes from a date range
                    </li>
                        <li>
                            Update Profile
                    </li>
                        <li>
                            Create New Quote
                        </li>
                    </ul>
                </div>
            );
    }
}

