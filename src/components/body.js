import React, { Component } from "react";
import Home from "./home";
import Create from "./create";
import Play from "./play";
import Update from "./update";

export default class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      element: {}
    };

    this.saveMazeClicked = this.saveMazeClicked.bind(this);
  }

  saveMazeClicked(element) {
    this.setState({ element });
  }

  render() {
    return (
      <div>
        {/* conditionally renders the body of the page */}
        {this.props.page === "home" ? (
          <Home
            mazes={this.props.mazes}
            deleteMaze={this.props.deleteMaze}
            pageHandler={this.props.pageHandler}
            updateMaze={this.props.updateMaze}
            saveMazeClicked={this.saveMazeClicked}
            page={this.props.page}
          />
        ) : this.props.page === "create" ? (
          <Create
            addMaze={this.props.addMaze}
            mazes={this.props.mazes}
            pageHandler={this.props.pageHandler}
            page={this.props.page}
          />
        ) : this.props.page === "update" ? (
          <Update
            updateMaze={this.props.updateMaze}
            pageHandler={this.props.pageHandler}
            element={this.state.element}
            mazes={this.props.mazes}
            page={this.props.page}
          />
        ) : this.props.page === "play" ? (
          <Play
            element={this.state.element}
            pageHandler={this.props.pageHandler}
            page={this.props.page}
          />
        ) : (
          <p>Error! I'm broke</p>
        )}
      </div>
    );
  }
}
