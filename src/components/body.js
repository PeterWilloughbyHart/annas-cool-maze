import React, { Component } from "react";
import Find from "./find";
import Create from "./create";
// import Play from "./play";
import axios from "axios";

export default class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mazes: [],
      maze: []
    };
    this.loadMazes = this.loadMazes.bind(this);
    this.addMaze = this.addMaze.bind(this);
    this.deleteMaze = this.deleteMaze.bind(this);
    this.updateMaze = this.updateMaze.bind(this);
  }
  loadMazes() {
    axios
      .get("/api/mazes")
      .then(res => {
        this.setState({ mazes: res.data });
      })
      .catch(errors => console.log(errors));
  }
  addMaze(object) {
    axios
      .post("/api/mazes", object)
      .then(res => this.setState({ mazes: res.data }))
      .catch(errors => console.log(errors));
  }
  deleteMaze(index) {
    axios
      .delete("/api/mazes/" + index)
      .then(res => this.setState({ mazes: res.data }))
      .catch(errors => console.log(errors));
  }
  updateMaze(index, object) {
    axios
      .put("/api/mazes/" + index, object)
      .then(res => this.setState({ mazes: res.data }))
      .catch(errors => console.log(errors));
  }

  render() {
    return (
      <div>
        {/* conditionally renders the body of the page */}
        {this.props.page === "find" ? (
          <Find
            loadMazes={this.loadMazes}
            mazes={this.state.mazes}
            deleteMaze={this.deleteMaze}
            pageHandler={this.props.pageHandler}
            updateMaze={this.updateMaze}
            page2={this.props.page2}
          />
        ) : this.props.page === "create" ? (
          <Create
            addMaze={this.addMaze}
            mazes={this.state.mazes}
            pageHandler={this.props.pageHandler}
          />
        ) : (
          <p>Error! I'm broke</p>
        )}
      </div>
    );
  }
}
