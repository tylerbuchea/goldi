import React from 'react';
import redux from '../redux';

// @redux()
export class DiscoverFeed extends React.PureComponent {
  render() {
    return (
      <div style={{ backgroundColor: 'white' }}>
        <h1>Discover Feed</h1>
      </div>
    );
  }
}

export default redux()(DiscoverFeed);