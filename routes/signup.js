var express = require("express");
var router = express.Router();
const { User } = require("../models");
/* GET home page. */
router.get("/signup", function (req, res, next) {
  res.render("signup");
});

router.post("/signup", (req, res) => {
  let { name, email, password } = req.body;

  console.log(name, email, password);
  User.create({
    userName: name,
    password: password,
    email: email,
  })
    .then((result) => {
      if (result) {
        res.redirect("/login");
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({message: err.errors[0].message});
    });
});

module.exports = router;
