const ServicesData = require('../data/ServicesData');

exports.createNewService = (service) => {
    return ServicesData.createService(service);
}

exports.getServices = () => {
    return ServicesData.getAllValidServices();
}