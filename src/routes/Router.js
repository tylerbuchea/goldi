/* exported React */
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Nav from '../components/Nav';
import DiscoverFeed from './DiscoverFeed';
import CompanyList from './CompanyList';
import CompanyDetail from './CompanyDetail';

const root = () => (
  <Router>
    <div>
      <Nav />
      <div className="section">
        <Route exact path="/" component={DiscoverFeed} />
        <Route exact path="/company" component={CompanyList} />
        <Route path="/company/:id" component={CompanyDetail} />
      </div>
    </div>
  </Router>
);

export default root;
