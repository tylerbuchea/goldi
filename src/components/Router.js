/* exported React */
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import DiscoverFeed from './DiscoverFeed';
import CompanyList from './CompanyList';
import CompanyDetail from './CompanyDetail';

const root = () => (
  <Router>
    <div>
      <nav className="navbar has-shadow is-spaced">
        <div class="navbar-brand">
          <a class="navbar-item" href="https://bulma.io">
            <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
          </a>
          <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div class="navbar-menu">
          <div className="navbar-start">
            <Link to="/" className="navbar-item">Discover</Link>
            <Link to="/companies" className="navbar-item">Companies</Link>
          </div>
        </div>
      </nav>

      <div className="section">
        <Route exact path="/" component={DiscoverFeed} />
        <Route path="/companies" component={CompanyList} />
        <Route path="/companies/:id" component={CompanyDetail} />
      </div>
    </div>
  </Router>
);

export default root;
