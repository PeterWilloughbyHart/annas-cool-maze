import React from "react";

export default function Header(props) {
  return (
    <header>
      <h2>Maze Creator</h2>
      <nav>
        <button onClick={() => props.pageHandler("search")}>Find</button>
        <button onClick={() => props.pageHandler("create")}>Create</button>
        {/* <button onClick={() => props.pageHandler("play")}>Play</button> */}
      </nav>
    </header>
  );
}
