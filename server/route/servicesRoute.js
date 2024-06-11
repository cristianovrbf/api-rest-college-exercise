const express = require('express');
const router = express.Router();
const AuthController = require('../controller/AuthController');
const ServicesController = require('../controller/ServicesController');

router.post('/service', async function(req, res){
    const data = await ServicesController.createService(req, res);
    res.json(data);
})

router.get('/service', async function(req, res){
    const data = await ServicesController.getServices(req, res);
    res.json(data);
})

module.exports = router;