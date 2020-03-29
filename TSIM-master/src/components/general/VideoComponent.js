import React, { Component } from "react";
import ReactPlayer from "react-player";
import styles from "./VideoComponent.css";
// import Modal from "./Modal";
import Media from "react-media";
export default class VideoPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showScreen: false
    };
    this.myRef = React.createRef();
  }

  onProgress = props => {
    const playedSeconds = props && Math.floor(props.playedSeconds);
    const played = props && Math.ceil(props.played);

    if (this.props.onProgress) {
      this.props.onProgress(playedSeconds, played);
    }
  };

  onPause = props => {
    const pausedSeconds = props && Math.floor(props.seconds);
    if (this.props.onPause) {
      this.props.onPause(pausedSeconds);
    }
  };

  onBuffer = props => {
    const bufferedSeconds = props && Math.floor(props.seconds);
    if (this.props.onBuffer) {
      this.props.onBuffer(bufferedSeconds);
    }
  };

  onSeek = props => {
    const seekedSeconds = props && Math.floor(props);
    if (this.props.onSeek) {
      this.props.onSeek(seekedSeconds);
    }
  };

  onEnded = () => {
    if (this.props.onEnd) {
      this.props.onEnd();
    }
  };

  onError = props => {
    const onErrorSeconds = props && Math.floor(props.seconds);
    if (this.props.onError) {
      this.props.onError(onErrorSeconds);
    }
  };

  onPlay = () => {
    if (this.props.onPlay) {
      this.props.onPlay();
    }
  };

  render() {
    return (
      <div className={styles.parentWrapper}>
        <Media query="(min-width:769px)">
          <React.Fragment>
            <div className={styles.playerwrapper}>
              <ReactPlayer
                url={this.props.url}
                playingModal={this.props.playing}
                width="100%"
                height="100%"
                playing={this.props.playing}
                // style={{ position: "absolute", left: 0, top: 0 }}
                ref={this.myRef}
                onPlay={this.onPlay}
                onProgress={this.onProgress}
                onPause={this.onPause}
                onBuffer={this.onBuffer}
                onSeek={this.onSeek}
                onEnded={this.onEnded}
                onError={this.onError}
                controls={true}
              />
            </div>
            <div>
              {/* {this.state.showScreen && (
                <Modal handleModal={this.state.showScreen} />
              )} */}
            </div>
          </React.Fragment>
        </Media>
        <Media query="(max-width:768px)">
          <React.Fragment>
            <div className={styles.playerwrapper}>
              <ReactPlayer
                url={this.props.url}
                playing={this.props.playing}
                width="100%"
                height="100%"
                ref={this.myRef}
                onPlay={this.onPlay}
                onProgress={this.onProgress}
                onPause={this.onPause}
                onBuffer={this.onBuffer}
                onSeek={this.onSeek}
                onEnded={this.onEnded}
                onError={this.onError}
                controls={true}
              />
            </div>
            <div>
              {/* {this.state.showScreen && (
                <Modal handleModal={this.state.showScreen} />
              )} */}
            </div>
          </React.Fragment>
        </Media>
      </div>
    );
  }
}
