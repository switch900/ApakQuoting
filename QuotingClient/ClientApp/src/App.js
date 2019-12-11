import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { AdminHome } from './components/AdminHome';
import { CustomerDetail } from './components/CustomerDetail';
import { CustomerHome } from './components/CustomerHome';
import { CustomerList } from './components/CustomerList';
import { Goodbye } from './components/Goodbye';
import { Home } from './components/Home';
import { LoginForm } from './components/LoginForm';
import { QuoteDetail } from './components/QuoteDetail';
import { QuoteList } from './components/QuoteList';
import { QuoteForm } from './components/QuoteForm';
import { QuoteListByCustomer } from './components/QuoteListByCustomer';
import { QuoteRequest } from './components/QuoteRequest';
import { RegisterHome } from './components/RegisterHome';
import { RegisterForm } from './components/RegisterForm';

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
            <Route exact path='/' component={Home} />          
            <Route path='/adminHome' component={AdminHome} />
            <Route path='/customerDetail' component={CustomerDetail} />
            <Route path='/customerHome' component={CustomerHome} />
            <Route path='/customerList' component={CustomerList} />
            <Route path='/goodbye' component={Goodbye} />
            <Route path='/home' component={Home} />
            <Route path='/login' component={LoginForm} />
            <Route path='/quoteDetail' component={QuoteDetail} />
            <Route path='/quoteForm' component={QuoteForm} />
            <Route path='/quoteList' component={QuoteList} />
            <Route path='/quoteListByCustomer' component={QuoteListByCustomer} />
            <Route path='/quoteRequest' component={QuoteRequest} />
            <Route path='/registerForm' component={RegisterForm} />
            <Route path='/registerHome' component={RegisterHome} />
      </Layout>
    );
  }
}
