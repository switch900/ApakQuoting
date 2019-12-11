import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { LoginForm } from './LoginForm';
import 'bootstrap/dist/css/bootstrap.min.css';

export class Home extends Component {
  static displayName = Home.name;

    render() {
        if (localStorage.getItem('token')) {
            return (
                <div>
                    <h1>Hello, welcome to Apak Quoting!</h1>
                    <Link to="/quoteForm">
                        <button type="button" class="btn btn-primary btn-lg">Create A new Quote</button>
                     </Link>
                </div>
            );
        }
        else {
            return (
                <div>
                    <h1>Hello, welcome to Apak Quoting!</h1>
                    <table class="table">
                        <tbody>
                            <tr>
                                <td><h3>Sign in to create a new quote.</h3></td>
                                <td>
                                    <Link to="/login">
                                        <button type="button" class="btn btn-primary btn-lg">Sign In</button>
                                    </Link>
                                </td>
                            </tr>
                            <tr>
                                <td><h3>Register as a new user</h3></td>
                                <td>
                                    <Link to="/registerHome">
                                        <button type="button" class="btn btn-primary btn-lg">Register</button>
                                    </Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>   
                </div>
                )
        };
    }
}

