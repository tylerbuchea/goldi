import React from 'react';
import './VideoPlayer.css';

export default class VideoPlayer extends React.PureComponent {
  state = { isPlaying: false };

  play = () => this.setState({ isPlaying: true });

  render() {
    const { videoStill, videoUrl } = this.props;
    const { isPlaying } = this.state;

    return (
      <div className="video-container">
        <video
          controls
          autoPlay
          src={isPlaying ? videoUrl : ''}
          className={isPlaying ? 'active' : ''}
          type="video/mp4"
        />
        <figure className={`image ${isPlaying ? '' : 'active'}`}>
          <img src={videoStill} onClick={this.play} alt="company" />
        </figure>
      </div>
    );
  }
}
