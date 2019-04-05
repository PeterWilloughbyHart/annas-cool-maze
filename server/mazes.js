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
          tile: "tile_1",
          show: ""
        },
        {
          tile: "tile_7",
          show: ""
        },
        {
          tile: "tile_4",
          show: ""
        }
      ],
      [
        {
          tile: "tile_13",
          show: ""
        },
        {
          tile: "tile_2",
          show: ""
        },
        {
          tile: "tile_14",
          show: ""
        }
      ],
      [
        {
          tile: "tile_3",
          show: ""
        },
        {
          tile: "tile_9",
          show: ""
        },
        {
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
