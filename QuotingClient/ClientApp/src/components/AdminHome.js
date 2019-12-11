import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class AdminHome extends Component {
  static displayName = AdminHome.name;

    render() {
        return (
            <div>
                <h1>Admin Home Page</h1>
                <h3>Things an Admin can do</h3>
                <ul>
                    <li>
                        Search by user to return a list of all quotes from that user
                        <Link to="/quoteList">
                            <button type="button" class="btn btn-primary btn-lg">Get all Quotes By User</button>
                        </Link>
                    </li>
                    <li>
                        Search by user to return account details from a specific user
                        <Link to="/customerDetail">
                            <button type="button" class="btn btn-primary btn-lg">Get user Details</button>
                        </Link>
                    </li>
                    <li>
                        Search by quote number to return a specific quote
                        <Link to="/quoteDetail">
                            <button type="button" class="btn btn-primary btn-lg">Search By Quote Number</button>
                        </Link>
                    </li>
                    <li>
                        Search by Date Range to return a range of quotes from a date range
                        <Link to="/quoteList">
                            <button type="button" class="btn btn-primary btn-lg">Search By Date Range</button>
                        </Link>
                    </li>
                    <li>
                        Search by binding type to return a list of quotes from a certain service
                        <Link to="/quoteList">
                            <button type="button" class="btn btn-primary btn-lg">Search By Service</button>
                        </Link>
                    </li>
                </ul>
            </div>
        );       
    }
}