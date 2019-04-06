import React, { Component } from "react";
import Grid from "./grid";

export default class Play extends Component {
  constructor(props) {
    super(props);
    this.state = {
      maze: this.props.element.maze,
      row: 1,
      column: 1,
      noUpWall: [2, 3, 5, 10, 12, 13, 14, 15],
      noRightWall: [1, 3, 7, 9, 11, 12, 13, 15],
      noDownWall: [1, 4, 6, 10, 11, 13, 14, 15],
      noLeftWall: [2, 4, 8, 9, 11, 12, 14, 15]
    };
    this.componentDidMount = this.componentDidMount.bind(this);
  }
  componentDidMount() {
    let { maze } = this.state;
    maze[0][0].show = <div className="dot" />;
    this.setState({ maze });
  }

  moveMarker(direction) {
    let {
      maze,
      row,
      column,
      noDownWall,
      noLeftWall,
      noRightWall,
      noUpWall
    } = this.state;
    if (
      (direction === "up" && row > 1) ||
      (direction === "left" && column > 1) ||
      (direction === "down" && row < this.props.element.rows - 1) ||
      (direction === "right" && column < this.props.element.columns - 1)
    ) {
      let newTile = "";
      let arr1 = maze[row - 1][column - 1].tile.split("");
      let arr2 = [];
      let currTile = "";
      let arr3 = [];
      if (arr1[arr1.length - 2] === "_") {
        currTile = arr1.pop();
      } else {
        arr3 = arr1.splice(arr1.length - 2, 2);
        currTile = arr3.join("");
      }
      switch (direction) {
        case "up":
          arr2 = maze[row - 2][column - 1].tile.split("");
          if (arr2[arr2.length - 2] === "_") {
            newTile = arr2.pop();
          } else {
            arr3 = arr2.splice(arr2.length - 2, 2);
            newTile = arr3.join("");
          }
          break;
        case "left":
          arr2 = maze[row - 1][column - 2].tile.split("");
          if (arr2[arr2.length - 2] === "_") {
            newTile = arr2.pop();
          } else {
            arr3 = arr2.splice(arr2.length - 2, 2);
            newTile = arr3.join("");
          }
          break;
        case "right":
          arr2 = maze[row - 1][column].tile.split("");
          if (arr2[arr2.length - 2] === "_") {
            newTile = arr2.pop();
          } else {
            arr3 = arr2.splice(arr2.length - 2, 2);
            newTile = arr3.join("");
          }
          break;
        case "down":
          arr2 = maze[row][column - 1].tile.split("");
          if (arr2[arr2.length - 2] === "_") {
            newTile = arr2.pop();
          } else {
            arr3 = arr2.splice(arr2.length - 2, 2);
            newTile = arr3.join("");
          }
          break;
        default:
          console.log("oops");
      }
      if (direction === "up") {
        if (noUpWall.includes(+currTile)) {
          if (noDownWall.includes(+newTile)) {
            maze[row - 1][column - 1].show = "";
            maze[row - 2][column - 1].show = <div className="dot" />;
            this.setState({ maze: maze, row: row - 1 });
          }
        }
      } else if (direction === "left") {
        if (noLeftWall.includes(+currTile)) {
          if (noRightWall.includes(+newTile)) {
            maze[row - 1][column - 1].show = "";
            maze[row - 1][column - 2].show = <div className="dot" />;
            this.setState({ maze: maze, column: column - 1 });
          }
        }
      } else if (direction === "right") {
        if (noRightWall.includes(+currTile)) {
          if (noLeftWall.includes(+newTile)) {
            maze[row - 1][column - 1].show = "";
            maze[row - 1][column].show = <div className="dot" />;
            this.setState({ maze: maze, column: column + 1 });
          }
        }
      } else if (direction === "down") {
        if (noDownWall.includes(+currTile)) {
          if (noUpWall.includes(+newTile)) {
            maze[row - 1][column - 1].show = "";
            maze[row][column - 1].show = <div className="dot" />;
            this.setState({ maze: maze, row: row + 1 });
          }
        }
      } else {
        console.log("I broke in dot moving logic");
      }
    } else {
      return;
    }
  }
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
