import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';
import QuoteList from './QuoteList'
import { LoginForm } from './LoginForm';

export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor (props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar () {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render () {
    return (
      <header>
        <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" light>
          <Container>
            <NavbarBrand tag={Link} to="/">Apak Quoting</NavbarBrand>
            <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
            <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
                <ul className="navbar-nav flex-grow">
                         
                            <NavItem>
                                <NavLink tag={Link} className="text-dark" to="/">Home</NavLink>
                            </NavItem>             
                            
                            <NavItem>
                                <NavLink tag={Link} className="text-dark" to="/" onClick={() => { localStorage.clear() }}>
                                    Sign Out
                                </NavLink>
                            </NavItem>
                            {(localStorage.getItem('token')) ? (

                                <NavItem>
                                    <NavLink className="text-dark"><b> Hello {localStorage.getItem('user')}!</b></NavLink>
                                </NavItem>
                            ) : (
                                    <NavItem>
                                        <NavLink tag={Link} className="text-dark" to="/login"><b>Sign In</b></NavLink>
                                    </NavItem>
                                    )
                                }
              </ul>
            </Collapse>
          </Container>
        </Navbar>
      </header>
    );
  }
}
