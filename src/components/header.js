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
        {this.props.page === "play" ? (
          <nav />
        ) : (
          <nav>
            <input
              placeholder="search by name"
              onChange={e => this.setState({ name: e.target.value })}
            />
            <button onClick={() => this.props.searchMazes(this.state.name)}>
              search
            </button>
            {/* <button
              className="navButton"
              onClick={() => this.props.pageHandler("home")}
            >
              Home
            </button> */}
            <button
              className="navButton"
              onClick={() => this.props.pageHandler("create")}
            >
              Create
            </button>
            <button
              className="navButton"
              onClick={() => this.props.pageHandler("viewAll")}
            >
              View All
            </button>
          </nav>
        )}
      </header>
    );
  }
}
