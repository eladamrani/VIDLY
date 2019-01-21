const express = require("express");
const app = express();
const Joi = require("joi");

app.use(express.json());
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`PORT ${port} is connect...`);
});

// DATA
const genres = [
  { id: 1, genre: "Action" },
  { id: 1, genre: "Drama" },
  { id: 1, genre: "Mystery" },
  { id: 1, genre: "Comedy" }
];

//GET HOMEPAGE
app.get("/", (req, res) => {
  res.send("HOME PAGE");
});
//GET ALL
app.get("/api/genres", (req, res) => {});
//GET ONE
app.get("/api/genres/:id", (req, res) => {});
//POST
app.get("/api/genres/:id", (req, res) => {});
//PUT
app.get("/api/genres/:id", (req, res) => {});
//DELETE
app.get("/api/genres/:id", (req, res) => {});
