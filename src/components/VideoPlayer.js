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

        <div
          className={`overlay ${isPlaying ? '' : 'active'}`}
          onClick={this.play}
        >
          <figure className="image">
            <img src={videoStill} alt="company" />
          </figure>
          <button className="play-button fa fa-play" />
        </div>
      </div>
    );
  }
}
