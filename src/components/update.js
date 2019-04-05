import React, { Component } from "react";
import TilesDisplayed from "./tilesDisplayed";
import Grid from "./grid";

export default class Update extends Component {
  constructor(props) {
    super(props);
    this.state = {
      maze: this.props.element.maze,
      row: 0,
      column: 0,
      tile: ""
    };
    this.createMazeObject = this.createMazeObject.bind(this);
    this.setPiece = this.setPiece.bind(this);
  }
  createMazeObject() {
    // creates an object to send in .post
    let { name, rows, columns, maze } = this.state;
    let object = {
      name,
      rows,
      columns,
      maze
    };
    let index = this.props.mazes.findIndex(
      objext => object === this.props.element
    );
    this.props.updateMaze(index, object);
    this.props.toggleEdit();
  }
  setPiece() {
    // changes a specific spot from the default div to a new one
    let { maze, column, row, tile } = this.state;
    if (
      row > 0 &&
      row <= maze.length &&
      column > 0 &&
      column <= maze[row - 1].length &&
      tile > 0 &&
      tile <= 14
    ) {
      switch (+tile) {
        case 1:
          maze[row - 1][column - 1].nWall = true;
          maze[row - 1][column - 1].wWall = true;
          break;
        case 2:
          maze[row - 1][column - 1].eWall = true;
          maze[row - 1][column - 1].sWall = true;
          break;
        case 3:
          maze[row - 1][column - 1].wWall = true;
          maze[row - 1][column - 1].sWall = true;
          break;
        case 4:
          maze[row - 1][column - 1].nWall = true;
          maze[row - 1][column - 1].eWall = true;
          break;
        case 5:
          maze[row - 1][column - 1].eWall = true;
          maze[row - 1][column - 1].sWall = true;
          maze[row - 1][column - 1].wWall = true;
          break;
        case 6:
          maze[row - 1][column - 1].eWall = true;
          maze[row - 1][column - 1].nWall = true;
          maze[row - 1][column - 1].wWall = true;
          break;
        case 7:
          maze[row - 1][column - 1].nWall = true;
          maze[row - 1][column - 1].sWall = true;
          maze[row - 1][column - 1].wWall = true;
          break;
        case 8:
          maze[row - 1][column - 1].eWall = true;
          maze[row - 1][column - 1].sWall = true;
          maze[row - 1][column - 1].nWall = true;
          break;
        case 9:
          maze[row - 1][column - 1].nWall = true;
          maze[row - 1][column - 1].sWall = true;
          break;
        case 10:
          maze[row - 1][column - 1].eWall = true;
          maze[row - 1][column - 1].wWall = true;
          break;
        case 11:
          maze[row - 1][column - 1].nWall = true;
          break;
        case 12:
          maze[row - 1][column - 1].sWall = true;
          break;
        case 13:
          maze[row - 1][column - 1].wWall = true;
          break;
        case 14:
          maze[row - 1][column - 1].eWall = true;
          break;
        default:
          console.log("nope");
          break;
      }
      maze[row - 1][column - 1].tile = "tile_" + tile;
      maze[row - 1][column - 1].show = "";
      console.log(maze);
      this.setState({ maze });
    } else {
      alert("Not a valid position or tile");
    }
  }

  render() {
    return (
      <main id="createMain">
        <TilesDisplayed />
        <div className="createBox">
          {
            // Grid displays the maze passed in
            <Grid maze={this.props.element.maze} />
          }
          {/* input feilds to control what tile goes where */}
          <div>
            <input
              placeholder="tile number"
              onChange={event => this.setState({ tile: event.target.value })}
            />
            <input
              placeholder="row number"
              onChange={event => this.setState({ row: event.target.value })}
            />
            <input
              placeholder="column number"
              onChange={event => this.setState({ column: event.target.value })}
            />
            <button onClick={() => this.setPiece()}>Set</button>
          </div>
          <button onClick={() => this.createMazeObject()}>Update</button>
        </div>
      </main>
    );
  }
}
