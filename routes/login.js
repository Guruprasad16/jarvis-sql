var express = require("express");
var router = express.Router();
const { User } = require("../models");
/* GET home page. */
router.get("/login", function (req, res, next) {
  res.render("login");
});

router.post("/login", (req, res) => {
  let { email, password } = req.body;

  User.findOne({ where: { email: email, password: password } })
  .then((result)=>{
    if(result){
      res.redirect('/');
    }
    else{
      res.status(500).json({message: "Invalid User!!!"});
    }
  })
  .catch((err) => {
    console.log(err);
    res.send(err);
  });

});

module.exports = router;
