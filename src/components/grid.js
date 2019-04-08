import React, { Component } from "react";

//displays the maze
export default class Grid extends Component {
  render() {
    let display;
    if (this.props.page === "create" || this.props.page === "update") {
      display = this.props.maze.map((element, index) => {
        return (
          <div key={index} className="row">
            {element.map((element2, index2) => {
              return (
                <div
                  onClick={() => this.props.setPiece(index, index2)}
                  key={index2}
                  className={element2.tile}
                >
                  {element2.show}
                </div>
              );
            })}
          </div>
        );
      });
    } else {
      display = this.props.maze.map((element, index) => {
        return (
          <div key={index} className="row">
            {element.map((element2, index2) => {
              return (
                <div key={index2} className={element2.tile}>
                  {element2.show}
                </div>
              );
            })}
          </div>
        );
      });
    }
    return <div id="display_box">{display}</div>;
  }
}
