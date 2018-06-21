import React from 'react';
// import idx from 'idx';

import redux from '../redux';

@redux()
export default class DiscoverFeed extends React.PureComponent {
  render() {
    return (
      <div className="container">
        <h1>Discover Feed</h1>
      </div>
    );
  }
}