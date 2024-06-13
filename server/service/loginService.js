const loginData = require('../data/loginData');

exports.makeLogin = (user) => {
    return loginData.getUserByEmail(user);
}

exports.updateUserPassword = (user) => {
    return loginData.updateUserPassword(user);
}

exports.createNewUser = (user) => {
    return loginData.createUser(user);
}

exports.validatedNewUser = (user) => {
    return loginData.validateIfNotExistRepeatedUser(user);
}