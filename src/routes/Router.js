/* exported React */
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import DiscoverFeedContainer from './DiscoverFeedContainer';
import CompanyListContainer from './CompanyListContainer';
import CompanyDetailContainer from './CompanyDetailContainer';

const root = () => (
  <Router>
    <div>
      {/* <ul>
        <li><Link to="/">Discover</Link></li>
        <li><Link to="/companies">Browse</Link></li>
      </ul> */}
      <nav className="navbar">
        <div className="navbar-start">
          <a className="navbar-item" href="https://bulma.io/">
            Home
          </a>
          <Link to="/" className="navbar-item">Discover</Link>
          <Link to="/companies" className="navbar-item">Companies</Link>
        </div>
      </nav>

      <hr/>
      <div className="section">
        <Route exact path="/" component={DiscoverFeedContainer} />
        <Route path="/companies" component={CompanyListContainer} />
        <Route path="/companies/:id" component={CompanyDetailContainer} />
      </div>
    </div>
  </Router>
);

export default root;
