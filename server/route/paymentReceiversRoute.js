const express = require('express');
const router = express.Router();
const PaymentReceiversService = require('../service/paymentReceiverServices');

router.get('/payment-receivers', async function(req, res){
    const data = await PaymentReceiversService.getPaymentReceivers();
    res.json(data);
})


module.exports = router;