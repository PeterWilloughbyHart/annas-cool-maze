import React, { Component } from "react";

//displays the maze
export default class Grid extends Component {
  render() {
    let display;
    let mazeName;
    if (this.props.page === "create" || this.props.page === "update") {
      if (this.props.page === "create") {
        mazeName = this.props.name;
      } else {
        mazeName = this.props.element.name;
      }
      display = this.props.maze.map((array, index) => {
        return (
          <div key={index} className="row">
            {array.map((element2, index2) => {
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
      mazeName = this.props.element.name;
      display = this.props.maze.map((array, index) => {
        return (
          <div key={index} className="row">
            {array.map((element2, index2) => {
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
    return (
      <div className="display_box">
        <p className="mazeName">Maze Name :{mazeName}</p>
        {display}
      </div>
    );
  }
}
