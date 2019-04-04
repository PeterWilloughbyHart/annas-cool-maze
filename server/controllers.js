const express = require("express");
const app = express();
const { mazes } = require("./mazes");

const getMazes = (req, res) => {
  res.status(200).json(mazes);
};
const addMaze = (req, res) => {
  mazes.unshift(req.body);
  res.status(200).json(mazes);
};
const deleteMaze = (req, res) => {
  mazes.splice(req.params.index, 1);
  res.status(200).json(mazes);
};
const updateMaze = (req, res) => {
  mazes.splice(req.params.index, 1, req.body);
  res.status(200).json(mazes);
};

module.exports = {
  getMazes,
  addMaze,
  deleteMaze,
  updateMaze
};
