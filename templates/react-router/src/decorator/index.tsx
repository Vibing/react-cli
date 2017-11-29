import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Title>Hello React</Title>
        <Menu>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/page1">Page1</Link>
          </li>
          <li>
            <Link to="/page2">Page2</Link>
          </li>
        </Menu>
        {this.props.children}
      </div>
    );
  }
}

const Title = styled.div`
  text-align: center;
  font-size: 38px;
  color: #108ee9;
  padding: 20px;
`;

const Menu = styled.ul`
  list-style-type: none;
  text-align: center;
  li {
    display: inline;
    margin: 15px;
    a {
      font-size: 20px;
      color: #108ee9;
    }
  }
`;
