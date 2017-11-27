import React, { Component } from 'react';
import { Route } from 'react-router-dom';
type TLoaderFn = () => Promise<any>;

export default class AsyncRoute extends Component<any, any> {
  render() {
    return (
      <Route
        {...this.props}
        render={props => <AsyncLoader loader={this.props.render} {...props} />}
      />
    );
  }
}

class AsyncLoader extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      Component: null
    };
  }

  async componentDidMount() {
    try {
      const module = await this.props.loader();
      this.setState({
        Component: module.default || module
      });
    } catch (err) {
      this.setState({
        Component: <div>抱歉，没有找到页面</div>
      });
    }
  }

  render() {
    const { Component } = this.state;
    return Component ? <Component {...this.props} /> : <div>页面加载中...</div>;
  }
}
