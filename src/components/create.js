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
      tile: "",
      key: 0
    };
    this.makeGrid = this.makeGrid.bind(this);
    this.createMazeObject = this.createMazeObject.bind(this);
    this.setPiece = this.setPiece.bind(this);
    this.selectPiece = this.selectPiece.bind(this);
  }
  selectPiece(className) {
    this.setState({ tile: className });
  }

  setPiece(row, column) {
    // changes a specific spot from the default div to a new one
    let { maze, tile } = this.state;
    if (tile) {
      maze[row][column].tile = tile;
      maze[row][column].show = "";
      this.setState({ maze });
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

        this.setState({ maze, endRow: rows, endColumn: columns });
      } else {
        alert("Invalid rows or columns number");
      }
    }
  }
  createMazeObject() {
    // creates an object to send in .post
    let { name, rows, columns, maze } = this.state;
    let object = {
      id: this.props.id,
      name,
      rows,
      columns,
      maze
    };
    this.props.increaseId();
    this.props.addMaze(object);
    this.props.searchMazes(name);
  }
  resetGrid() {
    this.setState({ maze: [] });
  }

  render() {
    return (
      <main id="createMain">
        <TilesDisplayed selectPiece={this.selectPiece} />
        <div className="createBox">
          {this.state.maze[0] ? (
            // Grid displays the maze passed in
            <Grid
              maze={this.state.maze}
              setPiece={this.setPiece}
              page={this.props.page}
              name={this.state.name}
            />
          ) : (
            <div>
              {/* criteria for maze size is entered */}
              <p>There is a max of a 15/15 maze</p>
              <p>All mazes start in the top left corner for now</p>
              <p>
                Leave an opening somewhere in the outerwall of your maze to be
                your finish
              </p>
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
          <div>
            <button onClick={() => this.createMazeObject()}>Publish</button>
            <button onClick={() => this.resetGrid()}>Reset</button>
          </div>
        </div>
      </main>
    );
  }
}
