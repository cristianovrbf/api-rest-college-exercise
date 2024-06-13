const express = require('express');
const router = express.Router();
const AuthController = require('../controller/AuthController');

router.post('/login', async function(req, res){
    const data = await AuthController.login(req, res);
    res.json(data);
})

router.put('/change-password', async function(req, res){
    const data = await AuthController.changePassword(req, res);
    res.json(data);
})

router.post('/user', async function(req, res){
    const data = await AuthController.createUser(req, res);
    res.json(data);
})


module.exports = router;