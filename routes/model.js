var express = require('express');
var router = express.Router();
const {Model} = require('../models');
const {v4: uuidv4} = require('uuid');

router.post('/insertModel', (req, res) => {

    try {
        
        let modelId = uuidv4();
        const { modelName, modelViewUrl, modelRunUrl, modelTags } = req.body;
        console.log(modelId, req.body);
    
        Model.create({
            modelId: modelId,
            modelName: modelName,
            modelViewUrl: modelViewUrl,
            modelRunUrl: modelRunUrl,
            modelTags: modelTags
        })
        .then(()=>{
            res.status(200).json({
                message: "Model is inserted",
                modelId: modelId,
                modelName: modelName
            })
        })
        .catch((e)=>{
            res.status(500).json({
                message: "Model not inserted",
                modelId: modelId,
                modelName: modelName,
                error: e
            })
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Model not inserted!!",
            error: error})
        // res.status(500).render("error.ejs", {errorMessage: error});
    }
});

router.post('/retrieveModels', (req, res)=>{
    try {
    
        Model.findAll()
        .then((respone)=>{
            res.status(200).json({
                message: "Models are retrieved",
                data: respone
            })
        })
        .catch((e)=>{
            res.status(500).json({
                message: "Models not retrieved",
                error: e
            })
        })
    } catch (error) {
        res.status(500).json({
            message: "Models not retrieved!!",
            error: error
        })
    }
})

router.post('/editModel', (req, res)=>{
    try {
    
        let update = {};
        const { modelId }  = req.body;

        if(req.body.modelName){
            update.modelName = req.body.modelName;
        }
        if(req.body.modelTags){
            update.modelTags = req.body.modelTags;
        }

        Model.update(update, {
            where: {
                modelId: modelId
            }
        })
        .then((respone)=>{
            if(respone[0]!=0){
                res.status(200).json({
                    message: "Model is updated",
                    modelId: modelId,
                    data: respone
                })
            }
            else{
                res.status(422).json({
                    message: "Model ID is invalid",
                    modelId: modelId,
                    data: respone
                })
            }
        })
        .catch((e)=>{
            console.log(e);
            res.status(500).json({
                message: "Model not updated",
                error: e
            })
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Model not updated!!",
            error: error
        })
    }
})


router.post('/deleteModel', (req, res)=>{
    try {
    
        const { modelId }  = req.body;

        Model.destroy({
            where: {
                modelId: modelId
            }
        })
        .then((respone)=>{
            if(respone!=0){
                res.status(200).json({
                    message: "Model is deleted",
                    modelId: modelId,
                    data: respone
                })
            }
            else{
                res.status(422).json({
                    message: "Model ID is invalid",
                    modelId: modelId,
                    data: respone
                })
            }
        })
        .catch((e)=>{
            console.log(e);
            res.status(500).json({
                message: "Model not deleted",
                error: e
            })
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Model not deleted!!",
            error: error
        })
    }
})

module.exports = router;
