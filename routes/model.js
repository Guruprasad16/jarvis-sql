var express = require('express');
var router = express.Router();
const {Model} = require('../models/Model');
const {v4: uuidv4} = require('uuid');

router.post('/insertModel', (req, res) => {

    try {
        
        let modelId = uuidv4();
        const { modelName, modelViewUrl, modelRunUrl, modelTags } = req.body;
    
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
                modelId: modelId
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
        res.status(500).json({
            message: "model not inserted",
            error: error
        })
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

module.exports = router;
