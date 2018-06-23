import React from 'react';
import idx from 'idx';

import redux from '../redux';
import CompanyCard from '../components/CompanyCard';

@redux()
export default class CompanyList extends React.PureComponent {
  componentDidMount() {
    this.props.asyncFetchCompanies();
  }

  renderItem = company => (
    <div key={company.id} style={styles.gridItem}>
      <CompanyCard company={company} />
    </div>
  );

  render() {
    const { companies } = this.props;
    const companiesList = idx(companies, _ => _.data.results) || [];

    return (
      <div className="container">
        <h1 className="title">
          Browse &nbsp;
          {companies.state.loaded || <div className="fas fa-spinner fa-spin" />}
        </h1>
        <div className="companies" style={styles.grid}>
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
    maxWidth: 250,
    margin: 10,
  },
};
