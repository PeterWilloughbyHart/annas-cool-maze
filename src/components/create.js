import React, { Component } from "react";
import Grid from "./grid";
import TilesDisplayed from "./tilesDisplayed";

export default class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      rows: 0,
      columns: 0,
      maze: [],
      row: 0,
      column: 0,
      tile: ""
    };
    this.makeGrid = this.makeGrid.bind(this);
  }

  setPiece() {
    // changes a specific spot from the default div to a new one
    let { maze, column, row, tile } = this.state;
    maze[row - 1][column - 1].tile = "tile_" + tile;
    maze[row - 1][column - 1].show = "";
    this.setState({ maze });
    console.log(maze);
  }

  makeGrid() {
    //makes a maze based on rows and columns put in with default tiles
    let { maze } = this.state;
    let key = 1;
    for (let i = 0; i < this.state.rows; i++) {
      let row = [];
      for (let j = 0; j < this.state.columns; j++) {
        row.push({
          // wall values will be important in the play componenet later if I have time
          key,
          nWall: false,
          eWall: false,
          sWall: false,
          wWall: false,
          tile: "tile",
          show: "?"
        });
        key++;
      }
      maze.push(row);
    }

    this.setState({ maze });
  }
  createMazeObject() {
    let { name, rows, columns, maze } = this.state;
    let object = {
      name,
      rows,
      columns,
      maze
    };
    this.props.addMaze(object);
  }

  render() {
    return (
      <main id="createMain">
        <TilesDisplayed />
        <div>
          {this.state.maze[0] ? (
            // Grid displays the maze passed in
            <Grid maze={this.state.maze} />
          ) : (
            <div>
              {/* criteria for maze size is entered */}
              <input
                placeholder="name"
                onChange={event => this.setState({ name: event.target.value })}
              />
              <input
                placeholder="rows"
                onChange={event => this.setState({ rows: event.target.value })}
              />
              <input
                placeholder="columns"
                onChange={event =>
                  this.setState({ columns: event.target.value })
                }
              />
              <button onClick={() => this.makeGrid()}>Make Grid</button>
            </div>
          )}
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
        </div>
        <button onClick={() => this.createMazeObject()}>Publish</button>
      </main>
    );
  }
}
