import React from 'react';
import idx from 'idx';

import redux from '../redux';
import CompanyCard from '../components/CompanyCard';

@redux()
export default class DiscoverFeed extends React.PureComponent {
  componentDidMount() {
    this.props.asyncFetchDiscover();
  }

  navTo = id => this.props.history.push(`/company/${id}`);

  renderItem = company => (
    <div key={company.id} style={styles.gridItem}>
      <CompanyCard company={company} navTo={id => this.navTo(id)} />
    </div>
  );

  render() {
    const { discover } = this.props;
    const discoverList = idx(discover, _ => _.data.results) || [];

    return (
      <div className="container">
        <h1 className="title">
          Discover &nbsp;
          {discover.state.loaded || <div className="fas fa-spinner fa-spin" />}
        </h1>
        <div className="companies" style={styles.grid}>
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
