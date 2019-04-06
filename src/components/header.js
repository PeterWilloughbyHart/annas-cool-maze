import React, { Component } from "react";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
  }

  render() {
    return (
      <header>
        <h2>Maze Creator</h2>
        <nav>
          <input
            placeholder="name of maze"
            onChange={e => this.setState({ name: e.target.value })}
          />
          <button onClick={() => this.props.searchMazes(this.state.name)}>
            Search
          </button>
          <button
            className="navButton"
            onClick={() => this.props.pageHandler("find")}
          >
            Home
          </button>
          <button
            className="navButton"
            onClick={() => this.props.pageHandler("create")}
          >
            Create
          </button>
        </nav>
      </header>
    );
  }
}
