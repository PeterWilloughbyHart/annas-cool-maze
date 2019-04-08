import React, { Component } from "react";

export default class ViewAll extends Component {
  componentDidMount() {
    this.props.loadMazes();
  }

  render() {
    let display = this.props.mazes.map((element, index) => {
      return (
        <div
          key={index}
          onClick={e => this.props.searchMazes(element.name)}
          className="mazeListItem"
        >
          {element.name + " "}
          size:{element.rows}/{element.columns}
        </div>
      );
    });
    return (
      <div className="viewAllContainer">
        <div className="mazeListContainer">{display}</div>
      </div>
    );
  }
}
