var express = require('express');
var router = express.Router();
const { v4: uuidv4 } = require('uuid');
const { Solution } = require('../models');

router.post('/insertSolution', (req, res) => {
    try {
        
        let solutionId = uuidv4();
        const { solutionName, solutionViewUrl, solutionRunUrl, solutionTags } = req.body;
    
        Solution.create({
            solutionId: solutionId,
            solutionName: solutionName,
            solutionViewUrl: solutionViewUrl,
            solutionRunUrl: solutionRunUrl,
            solutionTags: solutionTags
        })
        .then(()=>{
            res.status(200).json({
                message: "Solution is inserted",
                modelId: solutionId
            })
        })
        .catch((e)=>{
            console.log("error1 ---" , e);
            res.status(500).json({
                message: "Solution not inserted",
                modelId: solutionId,
                modelName: solutionName,
                error: e
            })
        })
    } catch (error) {
        console.log("error2 ---" , error);
        res.status(500).json({
            message: "Solution not inserted",
            error: error
        })

    }
});

module.exports = router;
