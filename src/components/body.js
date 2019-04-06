import React, { Component } from "react";
import Find from "./find";
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
        {this.props.page === "find" ? (
          <Find
            loadMazes={this.props.loadMazes}
            mazes={this.props.mazes}
            deleteMaze={this.props.deleteMaze}
            pageHandler={this.props.pageHandler}
            updateMaze={this.props.updateMaze}
            saveMazeClicked={this.saveMazeClicked}
            searchMazes={this.props.searchMazes}
          />
        ) : this.props.page === "create" ? (
          <Create
            addMaze={this.props.addMaze}
            mazes={this.props.mazes}
            pageHandler={this.props.pageHandler}
          />
        ) : this.props.page === "update" ? (
          <Update
            updateMaze={this.props.updateMaze}
            pageHandler={this.props.pageHandler}
            element={this.state.element}
            mazes={this.props.mazes}
          />
        ) : this.props.page === "play" ? (
          <Play element={this.state.element} />
        ) : (
          <p>Error! I'm broke</p>
        )}
      </div>
    );
  }
}
