import React, { Component } from "react";
import Grid from "./grid";

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      rows: 0,
      columns: 0
    };
  }
  componentDidMount() {
    this.props.loadMazes();
  }

  searchMazes() {}
  render() {
    return (
      <div>
        <div>
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
        <button onClick={this.searchMazes()}>Search</button>
        {this.props.mazes.map(element => {
          let key = 0;
          key++;
          return <Grid key={key} maze={element.maze} />;
        })}
      </div>
    );
  }
}
