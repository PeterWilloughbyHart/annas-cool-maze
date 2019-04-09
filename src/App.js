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
      page: "create",
      mazes: [],
      id: 1
    };
    this.pageHandler = this.pageHandler.bind(this);
    this.loadMazes = this.loadMazes.bind(this);
    this.addMaze = this.addMaze.bind(this);
    this.deleteMaze = this.deleteMaze.bind(this);
    this.updateMaze = this.updateMaze.bind(this);
    this.searchMazes = this.searchMazes.bind(this);
    this.increaseId = this.increaseId.bind(this);
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
  deleteMaze(id) {
    axios
      .delete("/api/mazes/" + id)
      .then(res => {
        this.pageHandler("viewAll");
        this.setState({ mazes: res.data });
      })
      .catch(errors => console.log(errors));
  }
  updateMaze(id, object) {
    axios
      .put("/api/mazes/" + id, object)
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
  increaseId() {
    let id = this.state.id;
    id++;
    this.setState({ id });
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
          searchMazes={this.searchMazes}
          increaseId={this.increaseId}
          id={this.state.id}
        />
      </div>
    );
  }
}

export default App;
