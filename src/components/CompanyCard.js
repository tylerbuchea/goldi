import React from 'react';

export default class CompanyCard extends React.PureComponent {
  render() {
    const { company } = this.props;

    return (
      <div className="tile">
        <div className="card">
          <div className="card-image">
            <figure className="image is-4by3">
              <img src={company.video_still} alt="company" />
            </figure>
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-left">
                <figure className="image is-48x48">
                  <img src={company.image} alt="company" />
                </figure>
              </div>
              <div className="media-content">
                <p className="title is-4">{company.name}</p>
                <p className="subtitle is-6">{company.location}</p>
              </div>
            </div>

            <div className="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Phasellus nec iaculis mauris. <a>@bulmaio</a>.
              <a href="google.com">#css</a> <a href="google.com">#responsive</a>
              <br />
              <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
            </div>
          </div>
        </div>
      </div>
    );
  }
}