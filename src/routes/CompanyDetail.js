import React from 'react';
import idx from 'idx';

import redux from '../redux';

// @redux()
export class CompanyDetail extends React.PureComponent {
  componentDidMount() {
    console.log(this.props);
    // this.props.asyncFetchCompanyDetail({ id });
  }

  render() {
    const companyDetail = idx(this.props.companyDetail, _ => _.data.results);

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

export default redux()(CompanyDetail);