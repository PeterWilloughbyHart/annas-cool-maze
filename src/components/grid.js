import React, { Component } from "react";

export default class Grid extends Component {
  render() {
    let display = this.props.maze.map((element, index) => {
      return (
        <div class="row">
          {element.map(element => {
            return <div class="tile">?</div>;
          })}
        </div>
      );
    });
    return <div id="display_box">{display}</div>;
  }
}
