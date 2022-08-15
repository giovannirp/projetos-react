import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../Nav/Nav';
import './header.css';
import Logo  from './user.png';

export default class Header extends Component {
  render() {
    return (
      <header>
        <h1>
          <Link to="/">
            <img src={Logo} alt='Logo' width='80' />          
          </Link>
        </h1>
      </header>
    )
  }
}
