import React from 'react';
import redux from '../redux';

// @redux()
export class CompanyDetail extends React.PureComponent {
  componentDidMount() {
    this.props.asyncFetchCompanyDetail({ id });
  }

  render() {
    const companyDetail = idx(this.props.companyDetail, _ => _.data.results);

    return (
      <div className="company-detail">
        <h1>Company Detail</h1>
        <img src={companyDetail.image} alt="company image" />
        <div>{companyDetail.name}</div>
        <div>{companyDetail.location}</div>
      </div>
    );
  }
}

export default redux()(CompanyDetail);