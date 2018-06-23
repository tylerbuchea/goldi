import React from 'react';
import { Link } from 'react-router-dom';

export default class Nav extends React.PureComponent {
  state = { showMenu: false };

  toggleMenu = () => this.setState({ showMenu: !this.state.showMenu });

  render() {
    const { showMenu } = this.state;

    return (
      <nav className="navbar has-shadow is-spaced">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://goldi.com/">
            <svg
              className="logo"
              xmlns="http://www.w3.org/2000/svg"
              width="94"
              height="36"
              viewBox="0 0 94 36"
            >
              {' '}
              <path
                fill="#000"
                fillRule="nonzero"
                d="M9.222 27.223c3.898 0 5.8-2.314 6.212-3.043 0 .92.031 1.617.031 2.536 0 2.947-1.49 5.165-4.88 5.165-5.102 0-5.166-3.549-5.166-3.549H1.014c.222 3.961 3.518 7.479 9.159 7.479 5.324 0 9.539-2.725 9.539-9.444V7.29h-4.12v2.662C14.04 7.986 12.012 6.91 9.285 6.91 3.803 6.909 0 11.409 0 17.399c0 5.45 3.74 9.824 9.222 9.824zm6.18-10.11c0 3.486-1.996 6.275-5.134 6.275-3.803 0-5.641-2.852-5.641-6.085 0-3.327 1.743-6.401 5.42-6.401 3.675 0 5.355 3.01 5.355 6.211zm6.75-.095c0 6.116 4.627 10.205 10.458 10.205 6.401 0 10.236-4.564 10.236-10.205 0-5.672-4.278-10.236-10.3-10.236-5.736 0-10.394 4.532-10.394 10.236zm10.331-6.116c3.993 0 5.895 2.916 5.895 6.211 0 3.296-2.092 6.085-5.895 6.085-3.58 0-5.831-2.852-5.831-6.148s2.282-6.148 5.831-6.148zm12.93 15.845h4.5V1.965h-4.5v24.782zm16.638.476c4.183 0 6.306-3.043 6.306-3.043v2.567h4.12V1.965H68.23v7.701C66.52 7.733 64.87 6.94 62.21 6.94c-6.117 0-9.38 4.659-9.38 10.078 0 5.23 3.01 10.205 9.221 10.205zm6.084-10.3c0 3.423-1.743 6.528-5.45 6.528-3.201 0-5.262-2.535-5.262-6.306 0-3.423 1.839-6.338 5.483-6.338 3.201 0 5.23 2.662 5.23 6.116zm8.144 9.824h4.5V7.29h-4.5v19.458zm-.538-23.926a2.827 2.827 0 0 0 2.82 2.82 2.827 2.827 0 0 0 2.82-2.82A2.827 2.827 0 0 0 78.562 0a2.827 2.827 0 0 0-2.82 2.82zM88.492.737V0H85v.737h1.333V4h.826V.737h1.333zM91.578 4l.94-3.225V4h.8V0h-1.22l-.901 3.048L90.32 0h-1.27v4h.812V.8l.915 3.2h.8z"
              />{' '}
            </svg>
          </a>
          <a
            role="button"
            className="navbar-burger"
            onClick={this.toggleMenu}
            aria-label="menu"
            aria-expanded="false"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>
        <div className={`navbar-menu ${showMenu ? 'is-active' : ''}`}>
          <div className="navbar-start">
            <Link to="/" className="navbar-item" onClick={this.toggleMenu}>
              Discover
            </Link>
            <Link
              to="/company"
              className="navbar-item"
              onClick={this.toggleMenu}
            >
              Browse
            </Link>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="field is-grouped">
                <p className="control">
                  <a
                    className="bd-tw-button button"
                    data-social-network="Twitter"
                    data-social-action="tweet"
                    data-social-target="https://goldi.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://twitter.com/intent/tweet?text=Checkout goldi video job search&amp;hashtags=goldi&amp;url=https://goldi.com&amp;via=jgthms"
                  >
                    <span className="icon">
                      <i className="fab fa-twitter" />
                    </span>
                    <span>Tweet</span>
                  </a>
                </p>
                <p className="control">
                  <a
                    className="button is-primary"
                    href="https://itunes.apple.com/us/app/goldi-video-job-search/id1246991071?ls=111&mt=888"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="icon">
                      <i className="fas fa-download" />
                    </span>
                    <span>Install</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
