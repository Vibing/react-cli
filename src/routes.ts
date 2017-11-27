export default [
  {
    exact: true,
    path: '/home',
    render: props => System.import(/* webpackChunkName: "home" */ './apps/home')
  },
  {
    exact: true,
    path: '/page1',
    render: props =>
      System.import(/* webpackChunkName: "page1" */ './apps/page1')
  },
  {
    exact: true,
    path: '/page2',
    render: props =>
      System.import(/* webpackChunkName: "page2" */ './apps/page2')
  }
];
