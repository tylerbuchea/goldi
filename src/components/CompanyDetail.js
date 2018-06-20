import React from 'react';
import redux from '../redux';

// @redux()
export class CompanyDetail extends React.PureComponent {
  render() {
    return (
      <div style={{ backgroundColor: 'white' }}>
        <h1>Company Detail</h1>
      </div>
    );
  }
}

export default redux()(CompanyDetail);