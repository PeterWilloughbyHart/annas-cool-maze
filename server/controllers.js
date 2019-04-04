const express = require("express");
const app = express();
const { mazes } = require("./mazes");

const getMazes = (req, res) => {
  res.status(200).json(mazes);
};
const addMaze = (req, res) => {
  mazes = mazes + req.body;
  res.status(200).json(mazes);
};

module.exports = {
  getMazes,
  addMaze
};
