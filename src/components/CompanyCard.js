import React from 'react';

import VideoPlayer from './VideoPlayer';

export default class CompanyCard extends React.PureComponent {
  navTo = id => this.props.navTo(id);

  render() {
    const { company } = this.props;
    const title = company.name || company.title || '';
    const subtitle = company.location || company.subtitle;
    const firstLetter = title.slice(0, 1);
    const imagePlaceholder = `http://via.placeholder.com/96x96?text=${firstLetter}`;
    const image = company.image || imagePlaceholder;
    const id = company.id;

    return (
      <div className="">
        <div className="card">
          <div className="card-image">
            <VideoPlayer
              videoUrl={company.binary}
              videoStill={company.video_still}
            />
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-left">
                <figure className="image is-48x48">
                  <img src={image} alt="company" />
                </figure>
              </div>
              <div className="media-content">
                <p className="title is-4">{title}</p>
                <p className="subtitle is-6">{subtitle}</p>
              </div>
            </div>

            <div className="content">{company.about}</div>

            <button
              className="button has-background-info has-text-white"
              onClick={() => this.navTo(id)}
              style={{ display: 'block', margin: 'auto' }}
            >
              Apply
            </button>
          </div>
        </div>
      </div>
    );
  }
}
