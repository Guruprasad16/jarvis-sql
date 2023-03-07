var express = require('express');
var router = express.Router();
const { v4: uuidv4 } = require('uuid');
const { Solution } = require('../models');

router.post('/insertSolution', (req, res) => {
    try {
        
        let solutionId = uuidv4();
        const { solutionName, solutionViewUrl, solutionTags } = req.body;
    
        Solution.create({
            solutionId: solutionId,
            solutionName: solutionName,
            solutionViewUrl: solutionViewUrl,
            solutionTags: solutionTags
        })
        .then(()=>{
            res.status(200).json({
                message: "Solution is inserted",
                solutionId: solutionId,
                solutionName: solutionName
            })
        })
        .catch((e)=>{
            console.log("error1 ---" , e);
            res.status(500).json({
                message: "Solution not inserted",
                solutionId: solutionId,
                solutionName: solutionName,
                error: e
            })
        })
    } catch (error) {
        console.log("error2 ---" , error);
        res.status(500).json({
            message: "Solution not inserted!!",
            error: error
        })

    }
});

router.post('/retrieveSolutions', (req, res)=>{
    try {
    
        Solution.findAll()
        .then((respone)=>{
            res.status(200).json({
                message: "Solutions are retrieved",
                data: respone
            })
        })
        .catch((e)=>{
            res.status(500).json({
                message: "Solutions not retrieved",
                error: e
            })
        })
    } catch (error) {
        res.status(500).json({
            message: "Solutions not retrieved!!",
            error: error
        })
    }
})

module.exports = router;
