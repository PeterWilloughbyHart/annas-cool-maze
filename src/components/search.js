import React, { Component } from "react";

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      rows: 0,
      columns: 0
    };
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
      </div>
    );
  }
}
