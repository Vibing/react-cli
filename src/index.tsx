import 'antd/dist/antd.less';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import routes from './routes';
import Decorator from './decorator';
import loadable from 'async-loadable';

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
    return routes.map((item, i) => (
      <Route
        exact
        path={item.path}
        component={loadable({ component: item.render })}
      />
    ));
  };
}

ReactDOM.render(<App />, document.getElementById('root'));
