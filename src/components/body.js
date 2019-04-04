import React, { Component } from "react";
import Search from "./search";
import Create from "./create";
import Play from "./play";
import axios from "axios";

export default class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mazes: []
    };
    this.loadMazes = this.loadMazes.bind(this);
    this.addMaze = this.addMaze.bind(this);
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
  render() {
    return (
      <div>
        {/* conditionally renders the body of the page.
        I passed in page for anticipated future use in play component  */}
        {this.props.page === "search" ? (
          <Search
            loadMazes={this.loadMazes}
            page={this.props.page}
            mazes={this.state.mazes}
          />
        ) : this.props.page === "create" ? (
          <Create
            addMaze={this.addMaze}
            page={this.props.page}
            mazes={this.state.mazes}
          />
        ) : this.props.page === "play" ? (
          <Play />
        ) : (
          <p>Error! I'm broke</p>
        )}
      </div>
    );
  }
}
