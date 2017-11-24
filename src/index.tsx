import 'antd/dist/antd.less'; 
import React, { Component } from "react";
import ReactDOM from 'react-dom'
import { Button,Pagination } from "antd";
import styled from "styled-components";
class App extends Component {
  render() {
    return (
      <div>
        <Title>Hello React</Title>
        <Pagination showSizeChanger onShowSizeChange={()=>{}} defaultCurrent={3} total={500} />
        <Button type="primary">你好 Hello antd Button</Button>  
      </div>
    );
  }
}

const Title = styled.div`
  text-align:center;
  font-size:38px;
  color:#108ee9;
  padding:20px;
`


ReactDOM.render(
  <App/> ,
  document.getElementById('root')
);
