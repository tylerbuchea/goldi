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
    const companies = idx(this.props.companies, _ => _.data.results) || [];

    return (
      <div className="container">
        <h1 className="title">Browse</h1>
        <div className="companies" style={styles.grid}>
          {companies.map(this.renderItem)}
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
    flex: '1 1 auto',
    maxWidth: 300,
    margin: 10,
  },
};
