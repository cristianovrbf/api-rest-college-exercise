const database = require('../infra/database');

exports.getPaymentReceivers = async function(){
    const data = await database.any("SELECT * FROM payments.payment_receiver");
    return data;
};