import React, { Component } from 'react';
import styled from 'styled-components';

export default class Home extends Component {
  render() {
    return <Wrap>This is HomePage！</Wrap>;
  }
}

const Wrap = styled.div`
  color: #249d7f;
  font-size: 30px;
  padding: 20px;
  text-align: center;
`;
