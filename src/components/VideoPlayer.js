import React from 'react';

export default class VideoPlayer extends React.PureComponent {
  render() {
    return (
      <div className="video-container">
        <video src={video} />
        <img src={video_still} />
      </div>
    );
  }
}