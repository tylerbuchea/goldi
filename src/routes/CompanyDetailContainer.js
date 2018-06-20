import React from 'react';

import CompanyDetail from '../components/CompanyDetail';

export default class CompanyDetailContainer extends React.PureComponent {
  render() {
    return (
      <div style={{ backgroundColor: 'white' }}>
        <CompanyDetail />
      </div>
    );
  }
}
