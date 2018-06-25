import React from 'react';
import idx from 'idx';

import redux from '../redux';
import CompanyCard from '../components/CompanyCard';

@redux()
export default class DiscoverFeed extends React.PureComponent {
  componentDidMount() {
    this.props.asyncFetchDiscover();
  }

  navToDetail = id => this.props.history.push(`/company/${id}`);

  renderItem = discover => {
    return (
      <div key={discover.id} style={styles.gridItem}>
        <CompanyCard
          videoUrl={discover.binary}
          videoStill={discover.video_still}
          logo={discover.image}
          title={discover.title}
          subtitle={discover.subtitle}
          about={discover.about}
          onDetail={() => this.navToDetail(discover.action.id)}
        />
      </div>
    );
  };

  render() {
    const { discover } = this.props;
    const discoverList = idx(discover, _ => _.data.results) || [];

    return (
      <div className="container">
        <h1 className="title">
          Discover &nbsp;
          {discover.state.loading && <div className="fas fa-spinner fa-spin" />}
        </h1>
        <div style={styles.grid}>
          {discoverList.map(this.renderItem)}
          {discover.state.error && (
            <h2>There was an issue retrieving listings.</h2>
          )}
        </div>
      </div>
    );
  }
}

const styles = {
  grid: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  gridItem: {
    flex: '0 0 auto',
    maxWidth: 254,
    margin: 10,
  },
};
