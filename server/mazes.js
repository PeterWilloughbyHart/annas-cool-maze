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
          key: 1,
          nWall: false,
          eWall: false,
          sWall: false,
          wWall: false,
          tile: "tile_1",
          show: ""
        },
        {
          key: 2,
          nWall: false,
          eWall: false,
          sWall: false,
          wWall: false,
          tile: "tile_7",
          show: ""
        },
        {
          key: 3,
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
          key: 4,
          nWall: false,
          eWall: false,
          sWall: false,
          wWall: false,
          tile: "tile_10",
          show: ""
        },
        {
          key: 5,
          nWall: false,
          eWall: false,
          sWall: false,
          wWall: false,
          tile: "tile_5",
          show: ""
        },
        {
          key: 6,
          nWall: false,
          eWall: false,
          sWall: false,
          wWall: false,
          tile: "tile_10",
          show: ""
        }
      ],
      [
        {
          key: 7,
          nWall: false,
          eWall: false,
          sWall: false,
          wWall: false,
          tile: "tile_3",
          show: ""
        },
        {
          key: 8,
          nWall: false,
          eWall: false,
          sWall: false,
          wWall: false,
          tile: "tile_9",
          show: ""
        },
        {
          key: 9,
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
