import React from 'react';

import VideoPlayer from './VideoPlayer';

export default class CompanyCard extends React.PureComponent {
  render() {
    const {
      videoUrl,
      videoStill,
      logo,
      title,
      subtitle,
      about,
      onDetail,
    } = this.props;

    const firstLetter = title.slice(0, 1);
    const imagePlaceholder = `http://via.placeholder.com/96x96?text=${firstLetter}`;
    const finalLogo = logo || imagePlaceholder;

    return (
      <div className="">
        <div className="card">
          <div className="card-image">
            <VideoPlayer videoUrl={videoUrl} videoStill={videoStill} />
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-left">
                <figure className="image is-48x48">
                  <img src={finalLogo} alt="company" />
                </figure>
              </div>
              <div className="media-content">
                <p className="title is-4">{title}</p>
                <p className="subtitle is-6">{subtitle}</p>
              </div>
            </div>

            <div className="content">{about}</div>

            <button
              className="button has-background-info has-text-white"
              onClick={onDetail}
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
