import React from "react";

export default function Header(props) {
  return (
    <header>
      <h2>Maze Creator</h2>
      <nav>
        <button className="navButton" onClick={() => props.pageHandler("find")}>
          Find
        </button>
        <button
          className="navButton"
          onClick={() => props.pageHandler("create")}
        >
          Create
        </button>
      </nav>
    </header>
  );
}
