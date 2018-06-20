import React from 'react';

import CompanyList from '../components/CompanyList';

export default class CompanyListContainer extends React.PureComponent {
  render() {
    return (
      <div style={{ backgroundColor: 'white' }}>
        <CompanyList />
      </div>
    );
  }
}
