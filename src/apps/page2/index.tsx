import React, { Component } from 'react';
import styled from 'styled-components';

export default class Page2 extends Component {
    render() {
        return (
            <Wrap>
                This is Page2！
            </Wrap>
        );
    }
}


const Wrap = styled.div`
    color: #249D7F;
    font-size:30px;
    padding:20px;
`