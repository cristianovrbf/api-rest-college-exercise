const express = require('express');
const router = express.Router();
const PaymentReceiversService = require('../service/paymentReceiverServices');
const AuthController = require('../controller/AuthController');

router.get('/payment-receivers', AuthController.verifyAuthorization, async function(req, res){
    const data = await PaymentReceiversService.getPaymentReceivers();
    res.json(data);
})


module.exports = router;