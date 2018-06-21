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
      <nav className="navbar">
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
