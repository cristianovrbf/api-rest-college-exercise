const PaymentReceiversData = require('../data/paymentReceiverData')

exports.getPaymentReceivers = () => {
    return PaymentReceiversData.getPaymentReceivers();
}