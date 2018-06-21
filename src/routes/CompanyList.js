import React from 'react';
import idx from 'idx';

import redux from '../redux';
import CompanyCard from '../components/CompanyCard';

// @redux()
export class CompanyList extends React.PureComponent {
  componentDidMount() {
    this.props.asyncFetchCompanies();
  }

  renderItem = company => <CompanyCard company={company} />

  render() {
    const companies = idx(this.props.companies, _ => _.data.results) || [];

    return (
      <div className="container">
        <h1>Company List</h1>
        <div className="companies tile is-ancestor">
          {companies.map(this.renderItem)}
        </div>
      </div>
    );
  }
}

export default redux()(CompanyList);
