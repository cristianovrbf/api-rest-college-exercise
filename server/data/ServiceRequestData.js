const database = require('../infra/database');
const moment = require('moment');

exports.getServiceRequestOfUser = async function(user){
    let data = null;
    
    try{
        data = await database.any(`
            select 
                service_request.request_date,
                service_request.id as request_number,
                service.description,
                service_request.status,
                service.price,
                service.id as service,
                service_request.predicted_realize_date,
                users.id as user_id,
                users.name
            from payments.service_request as service_request
            inner join payments.service as service
                on service.id = service_request.service_id
            inner join payments.users as users
                on users.id = service_request.user_id
            where
                service_request.deleted_at is null
            and
                service.deleted_at is null
            and
                users.deleted_at is null
            and
                users.id = $1
            order by service_request.request_date ASC
        `, [user.id]);
    }catch(error){
        data = false;
    }

    return data;
};


exports.deleteAllServiceRequestsOfUser = async function(user){
    let data = true;
    
    try{
        await database.none(`
            update payments.service_request set deleted_at = $1 where user_id = $2
            `, [moment(), user.id]);
    }catch(error){
        data = false;
    }

    return data;
};

exports.bulkInsertServiceRequestsFromUser = async function(user, serviceRequests){
    
    let data = true;
    
    const insertPromises = serviceRequests.map((request) => {
        return database.one(`INSERT INTO payments.service_request 
            (request_date, predicted_realize_date, status, service_id, user_id)
            VALUES ($1, $2, $3, $4, $5) RETURNING *`, [
                request.request_date,
                request.predicted_realize_date,
                request.status,
                request.service,
                user.id
            ]);
    });
    
    try {
        const insertResults = await Promise.all(insertPromises);
    } catch (error) {
        data = false;
    }

    return data;
}