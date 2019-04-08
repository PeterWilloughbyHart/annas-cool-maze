import React from "react";

export default function TilesDisplayed(props) {
  return (
    <div className="exampleBox">
      <div>
        <p>1</p>
        <div
          onClick={e => props.selectPiece(e.target.className)}
          className="tile_1"
        />
      </div>
      <div>
        <p>2</p>
        <div
          onClick={e => props.selectPiece(e.target.className)}
          className="tile_2"
        />
      </div>
      <div>
        <p>3</p>
        <div
          onClick={e => props.selectPiece(e.target.className)}
          className="tile_3"
        />
      </div>
      <div>
        <p>4</p>
        <div
          onClick={e => props.selectPiece(e.target.className)}
          className="tile_4"
        />
      </div>
      <div>
        <p>5</p>
        <div
          onClick={e => props.selectPiece(e.target.className)}
          className="tile_5"
        />
      </div>
      <div>
        <p>6</p>
        <div
          onClick={e => props.selectPiece(e.target.className)}
          className="tile_6"
        />
      </div>
      <div>
        <p>7</p>
        <div
          onClick={e => props.selectPiece(e.target.className)}
          className="tile_7"
        />
      </div>
      <div>
        <p>8</p>
        <div
          onClick={e => props.selectPiece(e.target.className)}
          className="tile_8"
        />
      </div>
      <div>
        <p>9</p>
        <div
          onClick={e => props.selectPiece(e.target.className)}
          className="tile_9"
        />
      </div>
      <div>
        <p>10</p>
        <div
          onClick={e => props.selectPiece(e.target.className)}
          className="tile_10"
        />
      </div>
      <div>
        <p>11</p>
        <div
          onClick={e => props.selectPiece(e.target.className)}
          className="tile_11"
        />
      </div>
      <div>
        <p>12</p>
        <div
          onClick={e => props.selectPiece(e.target.className)}
          className="tile_12"
        />
      </div>
      <div>
        <p>13</p>
        <div
          onClick={e => props.selectPiece(e.target.className)}
          className="tile_13"
        />
      </div>
      <div>
        <p>14</p>
        <div
          onClick={e => props.selectPiece(e.target.className)}
          className="tile_14"
        />
      </div>
      <div>
        <p>15</p>
        <div
          onClick={e => props.selectPiece(e.target.className)}
          className="tile_15"
        />
      </div>
    </div>
  );
}
