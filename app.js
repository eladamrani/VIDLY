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
  { id: 1, name: "Action" },
  { id: 2, name: "Drama" },
  { id: 3, name: "Mystery" },
  { id: 4, name: "Comedy" }
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
  if (!genre) return res.status(404).send(`Genre "${req.params.id}" not found`);

  res.send(genre);
});

//POST - New
app.post("/api/genres", (req, res) => {
  const { error } = validateGenre(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const newGenre = {
    id: genres.length + 1,
    name: req.body.name
  };

  genres.push(newGenre);
  res.send(`Genre ${newGenre.name} is added`);
});

//PUT - Update
app.put("/api/genres/:id", (req, res) => {
  const genre = genres.find(c => c.id === parseInt(req.params.id));
  if (!genre) return res.status(404).send(`Genre ${req.params.id} not found`);

  const { error } = validateGenre(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  genre.name = req.body.name;
  res.send(genre);
});

//DELETE
app.delete("/api/genres/:id", (req, res) => {
  const genre = genres.find(c => c.id === parseInt(req.params.id));
  if (!genre) return res.status(404).send(`Genre ${req.params.id} not found`);

  const index = genres.indexOf(genre);
  genres.splice(index, 1);

  res.send(`Genre "${genre.name}" is removed`);
});

function validateGenre(genre) {
  const schema = {
    name: Joi.string()
      .min(3)
      .required()
  };
  return Joi.validate(genre, schema);
}
