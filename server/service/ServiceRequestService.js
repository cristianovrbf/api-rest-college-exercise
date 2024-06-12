const ServiceRequestData = require('../data/ServiceRequestData')

exports.getServiceRequestOfUser = (user) => {
    return ServiceRequestData.getServiceRequestOfUser(user);
}

exports.deleteAllServiceRequestsByUserId = (user) => {
    return ServiceRequestData.deleteAllServiceRequestsOfUser(user);
}

exports.insertMultipleServiceRequestFromUser = (user, serviceRequests) => {
    return ServiceRequestData.bulkInsertServiceRequestsFromUser(user, serviceRequests);
}