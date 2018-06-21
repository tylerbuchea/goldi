import React from 'react';
import 'bulma/css/bulma.css'

import Router from './Router';
// import redux from '../redux';
// import LockUp from '../components/LockUp';
// import Toast from '../components/Toast';

// @redux()
export default class Root extends React.PureComponent {
  async componentDidMount() {
    // this.props.initRedux();
  }

  render() {
    return (
      <div>
        <Router />
      </div>
    );
  }
}
