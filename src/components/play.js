import React, { Component } from "react";
import Grid from "./grid";

export default class Play extends Component {
  constructor(props) {
    super(props);
    this.state = {
      maze: this.props.element.maze,
      currRow: 1,
      currColumn: 1
    };
  }
  moveMarker(direction) {}
  render() {
    return (
      <div className="play">
        <div className="playBox">
          <Grid maze={this.props.element.maze} />
          <div className="playButtonBox">
            <button
              className="playButton"
              value="up"
              onClick={e => this.moveMarker(e.target.value)}
            >
              &uarr;
            </button>
            <div>
              <button
                className="playButton"
                value="left"
                onClick={e => this.moveMarker(e.target.value)}
              >
                &larr;
              </button>
              <button
                className="playButton"
                value="right"
                onClick={e => this.moveMarker(e.target.value)}
              >
                &rarr;
              </button>
            </div>
            <button
              className="playButton"
              value="down"
              onClick={e => this.moveMarker(e.target.value)}
            >
              &darr;
            </button>
          </div>
        </div>
      </div>
    );
  }
}
