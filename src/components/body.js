import React, { Component } from "react";
import Search from "./search";
import Create from "./create";
import Play from "./play";

export default class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mazes: []
    };
  }
  render() {
    return (
      <body>
        {this.props.page === "search" ? (
          <Search page={this.props.page} mazes={this.state.mazes} />
        ) : this.props.page === "create" ? (
          <Create page={this.props.page} mazes={this.state.mazes} />
        ) : this.props.page === "play" ? (
          <Play />
        ) : (
          <p>Error! I'm broke</p>
        )}
      </body>
    );
  }
}
