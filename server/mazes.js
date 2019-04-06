const express = require("express");
const app = express();

let mazes = [
  {
    name: "Test",
    rows: 10,
    columns: 10,
    maze: [
      [
        {
          tile: "tile_3",
          show: ""
        },
        {
          tile: "tile_4",
          show: ""
        },
        {
          tile: "tile_3",
          show: ""
        },
        {
          tile: "tile_4",
          show: ""
        },
        {
          tile: "tile_1",
          show: ""
        },
        {
          tile: "tile_9",
          show: ""
        },
        {
          tile: "tile_11",
          show: ""
        },
        {
          tile: "tile_8",
          show: ""
        },
        {
          tile: "tile_4",
          show: ""
        }
      ],
      [
        {
          tile: "tile_4",
          show: ""
        },
        {
          tile: "tile_13",
          show: ""
        },
        {
          tile: "tile_9",
          show: ""
        },
        {
          tile: "tile_14",
          show: ""
        },
        {
          tile: "tile_10",
          show: ""
        },
        {
          tile: "tile_1",
          show: ""
        },
        {
          tile: "tile_2",
          show: ""
        },
        {
          tile: "tile_1",
          show: ""
        },
        {
          tile: "tile_8",
          show: ""
        }
      ],
      [
        {
          tile: "tile_10",
          show: ""
        },
        {
          tile: "tile_10",
          show: ""
        },
        {
          tile: "tile_1",
          show: ""
        },
        {
          tile: "tile_2",
          show: ""
        },
        {
          tile: "tile_10",
          show: ""
        },
        {
          tile: "tile_3",
          show: ""
        },
        {
          tile: "tile_9",
          show: ""
        },
        {
          tile: "tile_15",
          show: ""
        },
        {
          tile: "tile_11",
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
          tile: "tile_13",
          show: ""
        },
        {
          tile: "tile_11",
          show: ""
        },
        {
          tile: "tile_15",
          show: ""
        },
        {
          tile: "tile_9",
          show: ""
        },
        {
          tile: "tile_14",
          show: ""
        },
        {
          tile: "tile_1",
          show: ""
        },
        {
          tile: "tile_2",
          show: ""
        }
      ],
      [
        {
          tile: "tile_3",
          show: ""
        },
        {
          tile: "tile_11",
          show: ""
        },
        {
          tile: "tile_2",
          show: ""
        },
        {
          tile: "tile_10",
          show: ""
        },
        {
          tile: "tile_10",
          show: ""
        },
        {
          tile: "tile_6",
          show: ""
        },
        {
          tile: "tile_10",
          show: ""
        },
        {
          tile: "tile_5",
          show: ""
        },
        {
          tile: "tile_10",
          show: ""
        }
      ],
      [
        {
          tile: "tile_2",
          show: ""
        },
        {
          tile: "tile_13",
          show: ""
        },
        {
          tile: "tile_8",
          show: ""
        },
        {
          tile: "tile_10",
          show: ""
        },
        {
          tile: "tile_5",
          show: ""
        },
        {
          tile: "tile_10",
          show: ""
        },
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
      ],
      [
        {
          tile: "tile_3",
          show: ""
        },
        {
          tile: "tile_12",
          show: ""
        },
        {
          tile: "tile_4",
          show: ""
        },
        {
          tile: "tile_10",
          show: ""
        },
        {
          tile: "tile_7",
          show: ""
        },
        {
          tile: "tile_15",
          show: ""
        },
        {
          tile: "tile_9",
          show: ""
        },
        {
          tile: "tile_9",
          show: ""
        },
        {
          tile: "tile_4",
          show: ""
        }
      ],
      [
        {
          tile: "tile_6",
          show: ""
        },
        {
          tile: "tile_7",
          show: ""
        },
        {
          tile: "tile_14",
          show: ""
        },
        {
          tile: "tile_3",
          show: ""
        },
        {
          tile: "tile_9",
          show: ""
        },
        {
          tile: "tile_14",
          show: ""
        },
        {
          tile: "tile_7",
          show: ""
        },
        {
          tile: "tile_4",
          show: ""
        },
        {
          tile: "tile_5",
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
          tile: "tile_12",
          show: ""
        },
        {
          tile: "tile_9",
          show: ""
        },
        {
          tile: "tile_8",
          show: ""
        },
        {
          tile: "tile_3",
          show: ""
        },
        {
          tile: "tile_9",
          show: ""
        },
        {
          tile: "tile_12",
          show: ""
        },
        {
          tile: "tile_8",
          show: ""
        }
      ]
    ]
  }
];

module.exports = {
  mazes
};
