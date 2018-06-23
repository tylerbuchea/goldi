import React from 'react';

import VideoPlayer from './VideoPlayer';

export default class CompanyCard extends React.PureComponent {
  render() {
    const { company } = this.props;
    const title = company.name || company.title;
    const subtitle = company.location || company.subtitle;
    const imagePlaceholder = `http://via.placeholder.com/96x96?text=${title.slice(
      0,
      1
    )}`;
    const image = company.image || imagePlaceholder;

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

            <div className="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              nec iaculis mauris. <a href="example.com">example.com</a>
              <br />
              <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
