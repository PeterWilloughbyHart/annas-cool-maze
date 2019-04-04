const express = require("express");
const app = express();
const PORT = 5055;
const { getMazes, addMaze } = require("./controllers");

app.use(express.json());

app.get("/api/mazes", getMazes);
app.post("/api/mazes", addMaze);

app.listen(PORT, () => console.log("I'm listening"));
