const express = require("express");
const router = express.Router();

//GET HOMEPAGE - Done
router.get("/", (req, res) => {
  // res.sendFile("views/index.html", { root: __dirname });
  res.render("index", { title: "pageTitle", msg: "Work!" });
});

module.exports = router;
