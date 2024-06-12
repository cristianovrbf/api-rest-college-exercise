const express = require('express');
const router = express.Router();
const ServiceRequestController = require('../controller/ServiceRequestController');
const AuthController = require('../controller/AuthController');

router.get('/service-request/:email', AuthController.verifyAuthorization, async function(req, res){
    const data = await ServiceRequestController.getServiceRequest(req, res);
    res.json(data);
})

router.post('/service-request/', AuthController.verifyAuthorization, async function(req, res){
    const data = await ServiceRequestController.updateServiceRequest(req, res);
    res.json(data);
})

module.exports = router;