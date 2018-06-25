import React from 'react';
import idx from 'idx';

import redux from '../redux';
import CompanyCard from '../components/CompanyCard';

@redux()
export default class CompanyList extends React.PureComponent {
  componentDidMount() {
    return this.props.asyncFetchCompanies();
  }

  navToDetail = id => this.props.history.push(`/company/${id}`);

  renderItem = company => {
    return (
      <div key={company.id} style={styles.gridItem}>
        <CompanyCard
          videoUrl={company.binary}
          videoStill={company.video_still}
          logo={company.image}
          title={company.name}
          subtitle={company.location}
          about={company.about}
          onDetail={() => this.navToDetail(company.id)}
        />
      </div>
    );
  };

  render() {
    const { companies } = this.props;
    const companiesList = idx(companies, _ => _.data.results) || [];

    return (
      <div className="container">
        <h1 className="title">
          Browse &nbsp;
          {companies.state.loading && (
            <div className="fas fa-spinner fa-spin" />
          )}
        </h1>
        <div style={styles.grid}>
          {companiesList.map(this.renderItem)}
          {companies.state.error && (
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
