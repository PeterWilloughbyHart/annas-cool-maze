const express = require("express");
const app = express();
const PORT = 5055;
const {
  getMazes,
  addMaze,
  deleteMaze,
  updateMaze,
  searchMazes
} = require("./controllers");

app.use(express.json());

app.get("/api/mazes", getMazes);
app.post("/api/mazes", addMaze);
app.delete("/api/mazes/:id", deleteMaze);
app.put("/api/mazes/:id", updateMaze);
app.get("/api/mazes/:name", searchMazes);

app.listen(PORT, () => console.log("I'm listening"));
