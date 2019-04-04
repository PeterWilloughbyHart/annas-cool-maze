import React, { Component } from "react";
import "./App.css";
import Header from "./components/header";
import Body from "./components/body";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //page controlls the conditional rendering in the Body component
      page: "search"
    };
    this.pageHandler = this.pageHandler.bind(this);
  }
  pageHandler(page) {
    this.setState({ page: page });
  }

  render() {
    return (
      <div className="App">
        <Header pageHandler={this.pageHandler} />
        <Body page={this.state.page} />
      </div>
    );
  }
}

export default App;
