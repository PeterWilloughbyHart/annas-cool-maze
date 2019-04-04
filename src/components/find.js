import React, { Component } from "react";
import Grid from "./grid";
import Update from "./update";

export default class Find extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // name: "",
      // rows: 0,
      // columns: 0,
      edit: false,
      maze: []
    };
  }
  componentDidMount() {
    this.props.loadMazes();
  }
  triggerUpdate(element) {
    this.setState({ edit: true, maze: element.maze });
  }

  render() {
    return (
      <div>
        {!this.state.edit ? (
          <div>
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

                  <button onClick={() => this.triggerUpdate(element)}>
                    Edit
                  </button>
                  <button onClick={() => this.props.deleteMaze(index)}>
                    Delete
                  </button>
                </div>
              );
            })}
          </div>
        ) : (
          <Update
            pageHandler={this.props.pageHandler}
            updateMaze={this.props.updateMaze}
            maze={this.state.maze}
          />
        )}
      </div>
    );
  }
}
