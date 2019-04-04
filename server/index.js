const express = require("express");
const app = express();
const PORT = 5055;
const { getMazes, addMaze, deleteMaze, updateMaze } = require("./controllers");

app.use(express.json());

app.get("/api/mazes", getMazes);
app.post("/api/mazes", addMaze);
app.delete("/api/mazes/:index", deleteMaze);
app.put("/api/mazes/:index", updateMaze);

app.listen(PORT, () => console.log("I'm listening"));
