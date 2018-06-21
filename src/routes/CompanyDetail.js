import React from 'react';
import idx from 'idx';

import redux from '../redux';

@redux()
export default class CompanyDetail extends React.PureComponent {
  componentDidMount() {
    const id = idx(this.props.match, _ => _.params.id);
    this.props.asyncFetchCompanyDetail({ id });
  }

  render() {
    const companyDetail = idx(this.props.companyDetail, _ => _.data.results);
    
    if (!companyDetail) return null;
    return (
      <div className="container">
        <h1>Company Detail</h1>
        <img src={companyDetail.image} alt="company" />
        <div>{companyDetail.name}</div>
        <div>{companyDetail.location}</div>
      </div>
    );
  }
}