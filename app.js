const express = require("express");
const app = express();
const helmet = require("helmet");
const morgan = require("morgan");
const config = require("config");
const debug = require("debug")("app:startup");
const genres = require("./routes/genres");
const home = require("./routes/home");

app.set("view engine", "pug");
app.set("views", "./views");

app.use(express.json()); //Now you can use req.body
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(helmet());
app.use("/api/genres", genres);
app.use("/", home);

//Configuration
debug(`Application Name: ${config.get("name")}`);
debug(`Mail Server: ${config.get("mail.host")}`);
debug(`Mail Password: ${config.get("mail.password")}`);

if (app.get("env") === "development") {
  app.use(morgan(`tiny`));
  debug("Morgan enabled...");
}

//PORT SETUP
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`PORT ${port} is connect...`);
});
