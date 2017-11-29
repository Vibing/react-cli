import 'antd/dist/antd.less';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import routes from './routes';
import Decorator from './decorator';
import AsyncRoute from '../common/async-loader';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Decorator>{this.renderRoute()}</Decorator>
        </Switch>
      </Router>
    );
  }

  renderRoute = () => {
    return routes.map((item, i) => <AsyncRoute {...item} />);
  };
}

ReactDOM.render(<App />, document.getElementById('root'));
