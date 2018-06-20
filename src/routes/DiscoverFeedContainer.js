import React from 'react';

import DiscoverFeed from '../components/DiscoverFeed';

export default class DiscoverFeedContainer extends React.PureComponent {
  render() {
    return (
      <div style={{ backgroundColor: 'white' }}>
        <DiscoverFeed />
      </div>
    );
  }
}
