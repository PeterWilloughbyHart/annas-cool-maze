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
      start: 1,
      endRow: this.props.element.maze.rows,
      endColumn: this.props.element.maze.columns,
      tile: ""
    };
    this.createMazeObject = this.createMazeObject.bind(this);
    this.setPiece = this.setPiece.bind(this);
  }
  createMazeObject() {
    debugger;
    // creates an object to send in .post
    let { maze } = this.state;
    let object = {
      name: this.props.element.name,
      rows: this.props.element.rows,
      columns: this.props.element.columns,
      maze
    };
    let index = this.props.mazes.findIndex(
      thing => thing === this.props.element
    );
    this.props.updateMaze(index, object);
    this.props.pageHandler("find");
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
      maze[row - 1][column - 1].tile = "tile_" + tile;
      maze[row - 1][column - 1].show = "";
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
          {/* Grid displays the maze passed in */}
          <Grid maze={this.props.element.maze} />

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
