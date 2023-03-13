var express = require("express");
var router = express.Router();
const { v4: uuidv4 } = require("uuid");
const { Solution } = require("../models");

router.post("/insertSolution", (req, res) => {
  try {
    let solutionId = uuidv4();
    const { solutionName, solutionViewUrl, solutionTags, solutionDescription } =
      req.body;

    Solution.create({
      solutionId: solutionId,
      solutionName: solutionName,
      solutionViewUrl: solutionViewUrl,
      solutionTags: solutionTags,
      solutionDescription: solutionDescription,
    })
      .then(() => {
        res.status(200).json({
          message: "Solution is inserted",
          solutionId: solutionId,
          solutionName: solutionName,
        });
      })
      .catch((e) => {
        console.log("error1 ---", e);
        res.status(500).json({
          message: "Solution not inserted",
          solutionId: solutionId,
          solutionName: solutionName,
          error: e,
        });
      });
  } catch (error) {
    console.log("error2 ---", error);
    res.status(500).json({
      message: "Solution not inserted!!",
      error: error,
    });
  }
});

router.post("/retrieveSolutions", (req, res) => {
  try {
    Solution.findAll()
      .then((respone) => {
        res.status(200).json({
          message: "Solutions are retrieved",
          data: respone,
        });
      })
      .catch((e) => {
        res.status(500).json({
          message: "Solutions not retrieved",
          error: e,
        });
      });
  } catch (error) {
    res.status(500).json({
      message: "Solutions not retrieved!!",
      error: error,
    });
  }
});

router.post("/editSolution", (req, res) => {
  try {
    let update = {};
    const { solutionId } = req.body;

    if (req.body.solutionName) {
      update.solutionName = req.body.solutionName;
    }
    if (req.body.solutionVersion) {
      update.solutionVersion = req.body.solutionVersion;
    }
    if (req.body.solutionDescription) {
      update.solutionDescription = req.body.solutionDescription;
    }

    Solution.update(update, {
      where: {
        solutionId: solutionId,
      },
    })
      .then((respone) => {
        if (respone[0] != 0) {
          res.status(200).json({
            message: "Solution is updated",
            solutionId: solutionId,
            data: respone,
          });
        } else {
          res.status(422).json({
            message: "Solution ID is invalid",
            solutionId: solutionId,
            data: respone,
          });
        }
      })
      .catch((e) => {
        console.log(e);
        res.status(500).json({
          message: "Solution not updated",
          error: e,
        });
      });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Solution not updated!!",
      error: error,
    });
  }
});

router.post("/deleteSolution", (req, res) => {
  try {
    const { solutionId } = req.body;

    Solution.destroy({
      where: {
        solutionId: solutionId,
      },
    })
      .then((respone) => {
        if (respone != 0) {
          res.status(200).json({
            message: "Solution is deleted",
            solutionId: solutionId,
            data: respone,
          });
        } else {
          res.status(422).json({
            message: "Solution ID is invalid",
            solutionId: solutionId,
            data: respone,
          });
        }
      })
      .catch((e) => {
        console.log(e);
        res.status(500).json({
          message: "Solution not deleted",
          error: e,
        });
      });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Solution not deleted!!",
      error: error,
    });
  }
});

module.exports = router;
