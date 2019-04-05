const express = require("express");
const app = express();

let mazes = [
  {
    name: "Anna",
    rows: 3,
    columns: 3,
    maze: [
      [
        {
          nWall: false,
          eWall: false,
          sWall: false,
          wWall: false,
          tile: "tile_1",
          show: ""
        },
        {
          nWall: false,
          eWall: false,
          sWall: false,
          wWall: false,
          tile: "tile_7",
          show: ""
        },
        {
          nWall: false,
          eWall: false,
          sWall: false,
          wWall: false,
          tile: "tile_4",
          show: ""
        }
      ],
      [
        {
          nWall: false,
          eWall: false,
          sWall: false,
          wWall: false,
          tile: "tile_13",
          show: ""
        },
        {
          nWall: false,
          eWall: false,
          sWall: false,
          wWall: false,
          tile: "tile_2",
          show: ""
        },
        {
          nWall: false,
          eWall: false,
          sWall: false,
          wWall: false,
          tile: "tile_14",
          show: ""
        }
      ],
      [
        {
          nWall: false,
          eWall: false,
          sWall: false,
          wWall: false,
          tile: "tile_3",
          show: ""
        },
        {
          nWall: false,
          eWall: false,
          sWall: false,
          wWall: false,
          tile: "tile_9",
          show: ""
        },
        {
          nWall: false,
          eWall: false,
          sWall: false,
          wWall: false,
          tile: "tile_2",
          show: ""
        }
      ]
    ]
  }
];

module.exports = {
  mazes
};
