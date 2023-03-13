var express = require("express");
const {Data} = require("../models");
var router = express.Router();

router.post("/insertData", function (req, res, next) {

    try {
        const { datasetId, datasetName, datasetVersion, datasetDescription, datasetUrl } =
        req.body;

        Data.create({
            datasetId: datasetId,
            datasetName: datasetName,
            datasetVersion: datasetVersion,
            datasetDescription: datasetDescription,
            datasetUrl: datasetUrl
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

router.post('/editDataset', (req, res)=>{
    try {
        let update = {};
        const { datasetId }  = req.body;

        if(req.body.datasetName){
            update.datasetName = req.body.datasetName;
        }
        if(req.body.datasetVersion){
            update.datasetVersion = req.body.datasetVersion;
        }
        if(req.body.datasetDescription){
            update.datasetDescription = req.body.datasetDescription;
        }
        if(req.body.datasetUrl){
            update.datasetUrl = req.body.datasetUrl;
        }

        Data.update( update, {
            where: {
                datasetId: datasetId
            }
        })
        .then((respone)=>{
            if(respone[0]!=0){
                res.status(200).json({
                    message: "Dataset is updated",
                    datasetId: datasetId,
                    data: respone
                })
            }
            else{
                res.status(422).json({
                    message: "Dataset ID is invalid",
                    datasetId: datasetId,
                    data: respone
                })
            }
        })
        .catch((e)=>{
            console.log(e);
            res.status(500).json({
                message: "Dataset not updated",
                error: e
            })
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Dataset not updated!!",
            error: error
        })
    }
})

router.post('/deleteDataset', (req, res)=>{
    try {
    
        const { datasetId }  = req.body;

        Data.destroy({
            where: {
                datasetId: datasetId
            }
        })
        .then((respone)=>{
            if(respone!=0){
                res.status(200).json({
                    message: "Dataset is deleted",
                    datasetId: datasetId,
                    data: respone
                })
            }
            else{
                res.status(422).json({
                    message: "Dataset ID is invalid",
                    datasetId: datasetId,
                    data: respone
                })
            }
        })
        .catch((e)=>{
            console.log(e);
            res.status(500).json({
                message: "Dataset not deleted",
                error: e
            })
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Dataset not deleted!!",
            error: error
        })
    }
})

module.exports = router;
