import React from 'react';
import redux from '../redux';

// @redux()
export class CompanyList extends React.PureComponent {
  componentDidMount() {
    this.props.asyncFetchCompanies();
  }

  render() {
    console.log(this.props.companies.state);
    return (
      <div style={{ backgroundColor: 'white' }}>
        <h1>Company List</h1>
      </div>
    );
  }
}

export default redux()(CompanyList);
