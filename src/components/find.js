import React, { Component } from "react";
import Grid from "./grid";
import Update from "./update";
import Play from "./play";

export default class Find extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page2: "find",
      element: {}
    };
    this.togglePage2 = this.togglePage2.bind(this);
  }
  componentDidMount() {
    this.props.loadMazes();
  }
  triggerChange(e, element) {
    this.setState({ page2: e.target.value, element: element });
  }
  togglePage2() {
    this.setState({ page2: "find" });
  }

  render() {
    return (
      <div>
        {this.state.page2 === "find" ? (
          <div className="display">
            {/* <div>
          <label>name:</label>
          <input onChange={e => this.setState({ name: e.target.value })} />
        </div>
        <div>
          <label># of rows:</label>
          <input onChange={e => this.setState({ rows: e.target.value })} />
        </div>
        <div>
          <label># of columns:</label>
          <input onChange={e => this.setState({ collums: e.target.value })} />
        </div>
        <button onClick={this.searchMazes()}>Search</button> */}
            {this.props.mazes.map((element, index) => {
              return (
                <div key={index}>
                  <Grid maze={element.maze} />

                  <button
                    value={"update"}
                    onClick={e => this.triggerChange(e, element)}
                  >
                    Edit
                  </button>
                  <button
                    value={"play"}
                    onClick={e => this.triggerChange(e, element)}
                  >
                    Play
                  </button>
                  <button onClick={() => this.props.deleteMaze(index)}>
                    Delete
                  </button>
                </div>
              );
            })}
          </div>
        ) : this.state.page2 === "update" ? (
          <Update
            togglePage2={this.togglePage2}
            updateMaze={this.props.updateMaze}
            element={this.state.element}
            mazes={this.props.mazes}
          />
        ) : this.state.page2 === "play" ? (
          <Play element={this.state.element} />
        ) : (
          <p>oop! I'm broke again</p>
        )}
      </div>
    );
  }
}
