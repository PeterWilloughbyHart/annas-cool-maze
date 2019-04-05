import React, { Component } from "react";
import Grid from "./grid";
import Update from "./update";

export default class Find extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
      element: {}
    };
    this.toggleEdit = this.toggleEdit.bind(this);
  }
  componentDidMount() {
    this.props.loadMazes();
  }
  triggerUpdate(element) {
    this.setState({ edit: true, element: element });
  }
  toggleEdit() {
    this.setState({ edit: false });
  }

  render() {
    return (
      <div>
        {!this.state.edit ? (
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
            toggleEdit={this.toggleEdit}
            updateMaze={this.props.updateMaze}
            element={this.state.element}
            mazes={this.props.mazes}
          />
        )}
      </div>
    );
  }
}
