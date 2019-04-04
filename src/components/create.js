import React, { Component } from "react";
import Grid from "./grid";
import tilesDisplayed from "./tilesDisplayed";
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
    let { maze, column, row, tile } = this.state;
    maze[row - 1][column - 1] = <div class={"tile_" + tile} />;
    this.setState({ maze });
    console.log(maze);
  }

  makeGrid() {
    let { maze } = this.state;
    for (let i = 0; i < this.state.rows; i++) {
      let row = [];
      for (let j = 0; j < this.state.columns; j++) {
        row.push(j);
      }
      maze.push(row);
    }
    console.log(maze);
    this.setState({ maze });
  }

  render() {
    return (
      <main id="createMain">
        <TilesDisplayed />
        <div>
          {this.state.maze[0] ? (
            <Grid maze={this.state.maze} />
          ) : (
            <div>
              <input
                onChange={event =>
                  this.setState({ columns: event.target.value })
                }
              />
              <input
                onChange={event => this.setState({ rows: event.target.value })}
              />
              <button onClick={() => this.makeGrid()}>Make Grid</button>
            </div>
          )}
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
      </main>
    );
  }
}
