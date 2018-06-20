import React from 'react';
import idx from 'idx';

import redux from '../redux';

// @redux()
export class CompanyList extends React.PureComponent {
  componentDidMount() {
    this.props.asyncFetchCompanies();
  }

  renderItem = (item) => {
    return (
      <div className="company">
        <img src={item.image} alt="company image" />
        <div>{item.name}</div>
        <div>{item.location}</div>
      </div>
    );
  }

  render() {
    const companies = idx(this.props.companies, _ => _.data.results) || [];

    return (
      <div>
        <h1>Company List</h1>
        <div className="companies">
          {companies.map(this.renderItem)}
        </div>
      </div>
    );
  }
}

export default redux()(CompanyList);
