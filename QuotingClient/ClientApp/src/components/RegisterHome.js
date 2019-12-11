import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class RegisterHome extends Component {
  static displayName = RegisterHome.name;

    render() {
            return (
                <div>
                    <h1>Would you like to register so your quote will be saved?</h1>
                    <Link to="/registerForm">
                        <button type="button" class="btn btn-primary btn-lg">Yes</button>
                    </Link>
                    <Link to="/QuoteForm">
                        <button type="button" class="btn btn-primary btn-lg">No</button>
                    </Link>
                </div>
            );
    }
}

