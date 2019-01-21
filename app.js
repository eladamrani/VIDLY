const express = require("express");
const app = express();
const Joi = require("joi");

app.use(express.json());

//PORT SETUP
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`PORT ${port} is connect...`);
});

// DATA
const genres = [
  { id: 1, genre: "Action" },
  { id: 2, genre: "Drama" },
  { id: 3, genre: "Mystery" },
  { id: 4, genre: "Comedy" }
];

//GET HOMEPAGE
app.get("/", (req, res) => {
  res.send("HOME PAGE");
});
//GET ALL
app.get("/api/genres", (req, res) => {
  res.send(genres);
});
//GET ONE
app.get("/api/genres/:id", (req, res) => {
  const genre = genres.find(c => c.id === parseInt(req.params.id));
  if (!genre) return res.status(400).send(`Genre " ${genre} " not found`);

  res.send(genre);
});
//POST
app.get("/api/genres/:id", (req, res) => {});
//PUT
app.get("/api/genres/:id", (req, res) => {});
//DELETE
app.get("/api/genres/:id", (req, res) => {});
