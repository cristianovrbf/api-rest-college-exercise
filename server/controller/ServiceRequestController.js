const ServiceRequestService = require('../service/ServiceRequestService');
const LoginService = require('../service/loginService');


exports.getServiceRequest = async (req, res) => {
    try {

        const userData = await LoginService.makeLogin({email: req.params.email});
        
        if(!userData){
            return {
                status: 401,
                message: 'Usuário não encontrado!',
                data: {
                    status: false
                }
            };
        }
        
        const serviceRequests = await ServiceRequestService.getServiceRequestOfUser({id: userData.id});

        if(!userData){
            return {
                status: 401,
                message: 'Não foram encontradas solicitações de serviços do usuário!',
                data: {
                    status: false
                }
            };
        }

        if(serviceRequests.length == 0){
            return {
                status: 404,
                message: 'Não foram encontradas solicitações de serviços do usuário!',
                data: {
                    status: false
                }
            };
        }

        return {
            status: 200,
            message: 'Successo!',
            data: {
                service_requests: serviceRequests,
                status: true
            }
        };
    } catch (error){

        return {
            status: 500,
            message: 'Erro ao listar solicitações de serviços do usuário!',
            data:{
                status: false
            }
        };
    }
}

exports.updateServiceRequest = async (req, res) => {
    try {

        const userData = await LoginService.makeLogin({email: req.body.user.email});
        
        if(!userData){
            return {
                status: 401,
                message: 'Usuário não encontrado!',
                data: {
                    status: false
                }
            };
        }
        
        const deletedServiceRequests = await ServiceRequestService.deleteAllServiceRequestsByUserId({id: userData.id});

        if(!deletedServiceRequests){
            return {
                status: 401,
                message: 'Erro ao deletar antigas solicitações de serviços do usuário!',
                data: {
                    status: false
                }
            };
        }

        const newServiceRequests = await ServiceRequestService.insertMultipleServiceRequestFromUser(userData, req.body.serviceRequests);

        if(!newServiceRequests){
            return {
                status: 401,
                message: 'Erro ao atualizar novas solicitações de serviços do usuário!',
                data: {
                    status: false
                }
            };
        }

        return {
            status: 200,
            message: 'Successo!',
            data: {
                status: true
            }
        };
    } catch (error){

        return {
            status: 500,
            message: 'Erro ao atualizar novas solicitações de serviços do usuário!',
            data:{
                status: false
            }
        };
    }
}