var express = require("express");
const Data = require("../models");
var router = express.Router();

router.post("/insertData", function (req, res, next) {

    try {
        const { datasetId, datasetName, datasetVersion, datasetDescription } =
        req.body;

        Data.create({
            datasetId: datasetId,
            datasetName: datasetName,
            datasetVersion: datasetVersion,
            datasetDescription: datasetDescription
        })
        .then(()=>{
            res.status(200).json({
                message: "Dataset is inserted",
                datasetId: datasetId,
                datasetName: datasetName
            })
        })
        .catch((e)=>{
            res.status(500).json({
                message: "Dataset not inserted",
                datasetId: datasetId,
                datasetName: datasetName,
                error: e
            })
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Dataset not inserted!!",
            error: error
        })
    }
});

router.post('/retrieveDatasets', (req, res)=>{
    try {
    
        Data.findAll()
        .then((respone)=>{
            res.status(200).json({
                message: "Datasets are retrieved",
                data: respone
            })
        })
        .catch((e)=>{
            res.status(500).json({
                message: "Datasets not retrieved",
                error: e
            })
        })
    } catch (error) {
        res.status(500).json({
            message: "Datasets not retrieved!!",
            error: error
        })
    }
})

module.exports = router;
