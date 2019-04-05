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
      tile: "",
      key: 0
    };
    this.makeGrid = this.makeGrid.bind(this);
    this.createMazeObject = this.createMazeObject.bind(this);
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

  makeGrid() {
    //makes a maze based on rows and columns put in with default tiles
    let { maze, key, rows, columns, name } = this.state;
    if (!name) {
      alert("Please enter a name for your maze");
    } else {
      if (rows > 0 && rows <= 15 && columns > 0 && columns <= 15) {
        for (let i = 0; i < rows; i++) {
          let row = [];
          for (let j = 0; j < columns; j++) {
            row.push({
              // wall values will be important in the play componenet later if I have time
              key: key,
              tile: "tile",
              show: "?"
            });
          }
          maze.push(row);
          key++;
          this.setState({ key: key });
        }

        this.setState({ maze });
      } else {
        alert("Invalid rows or columns number");
      }
    }
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
    console.log(object);
    this.props.addMaze(object);
    this.props.pageHandler("find");
  }
  resetGrid() {
    this.setState({ maze: [] });
  }

  render() {
    return (
      <main id="createMain">
        <TilesDisplayed />
        <div className="createBox">
          {this.state.maze[0] ? (
            // Grid displays the maze passed in
            <Grid maze={this.state.maze} />
          ) : (
            <div>
              {/* criteria for maze size is entered */}
              <p>There is a max of a 15/15 maze</p>
              <input
                placeholder="name"
                onChange={event => this.setState({ name: event.target.value })}
              />
              <input
                placeholder="rows"
                type="number"
                onChange={event => this.setState({ rows: event.target.value })}
              />
              <input
                placeholder="columns"
                type="number"
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
          <div>
            <button onClick={() => this.createMazeObject()}>Publish</button>
            <button onClick={() => this.resetGrid()}>Reset</button>
          </div>
        </div>
      </main>
    );
  }
}
