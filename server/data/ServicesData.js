const database = require('../infra/database');

exports.createService = async function (service){
    let data = null;

    try{
        data = await database.one(`
            insert into payments.service (description, price, term)
            values ($1,$2,$3) returning *`, [
                service.description, 
                service.price, 
                service.term
            ]);
    
    }catch(error){
        data = false;
    }

    return data;
}

exports.getAllValidServices = async function(){
    let data = null;

    try{
        data = await database.any('select id, description, price, term from payments.service where deleted_at is null');
    }catch(error){
        data = false;
    }

    return data;
}