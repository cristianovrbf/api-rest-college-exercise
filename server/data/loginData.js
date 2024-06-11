const database = require('../infra/database');
const moment = require('moment');

exports.getUserByEmail = async function(user){
    let data = null;
    try{
        data = await database.one("SELECT * FROM payments.users WHERE email = $1", [user.email]);
    } catch (error){
        data = false;
    }
    return data;
};


exports.updateUserPassword = async function(user){
    let data = null;
    
    try{
        data = await database.one('update payments.users set password = $1, updated_at = $2 where id = $3 returning *', [user.new_password, moment(), user.id]);
    }catch(error){
        data = false;
    }

    return data;
}

exports.createUser = async function (user){
    let data = null;
    
    try{
        data = await database.one(`
            insert into payments.users (name, password, email, cpf, birthdate, cellphone, marital_status, scholarity)
            values ($1,$2,$3,$4,$5,$6,$7,$8) returning *`, [
                user.name, 
                user.password, 
                user.email, 
                user.cpf, 
                user.birthdate, 
                user.cellphone, 
                user.marital_status, 
                user.scholarity
            ]);
    
    }catch(error){
        data = false;
    }

    return data;
}