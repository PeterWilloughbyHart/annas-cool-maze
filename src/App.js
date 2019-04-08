import React, { Component } from "react";
import "./App.css";
import Header from "./components/header";
import Body from "./components/body";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //page controlls the conditional rendering in the Body component
      page: "home",
      mazes: []
    };
    this.pageHandler = this.pageHandler.bind(this);
    this.loadMazes = this.loadMazes.bind(this);
    this.addMaze = this.addMaze.bind(this);
    this.deleteMaze = this.deleteMaze.bind(this);
    this.updateMaze = this.updateMaze.bind(this);
    this.searchMazes = this.searchMazes.bind(this);
  }

  pageHandler(page) {
    this.setState({ page: page });
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
  searchMazes(name) {
    axios
      .get("/api/mazes/" + name)
      .then(res => {
        this.pageHandler("home");
        this.setState({ mazes: res.data });
      })
      .catch(errors => console.log(errors));
  }
  componentDidMount() {
    this.loadMazes();
  }
  render() {
    return (
      <div className="App">
        <Header
          pageHandler={this.pageHandler}
          searchMazes={this.searchMazes}
          page={this.state.page}
        />
        <Body
          page={this.state.page}
          pageHandler={this.pageHandler}
          mazes={this.state.mazes}
          addMaze={this.addMaze}
          updateMaze={this.updateMaze}
          deleteMaze={this.deleteMaze}
          loadMazes={this.loadMazes}
        />
      </div>
    );
  }
}

export default App;
