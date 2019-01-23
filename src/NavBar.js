import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
//import './NavBar.css';
// import styled from 'styled-components';

class NavBar extends Component {
  render() {
    return (
      <div className="NavBar">
        <h1>Microblogly</h1>
        <h5>Get in the Rithm of blogging! </h5>
        <span>
          <p>
            <NavLink exact to="/">
              Home
            </NavLink>
          </p>
          <p>
            <NavLink exact to="/new">
              Add a new post
            </NavLink>
          </p>
        </span>
      </div>
    );
  }
}

export default NavBar;
