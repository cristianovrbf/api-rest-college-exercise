const ServicesService = require('../service/ServicesService');


exports.createService = async(req, res) => {
    try {

        const newService = await ServicesService.createNewService(req.body.service);

        if(!newService){
            return {
                status: 401,
                message: 'Erro ao cadastrar novo serviço de TI!',
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
            message: 'Erro ao cadastrar novo serviço de TI!',
            data:{
                status: false
            }
        };
    }
}

exports.getServices = async (req, res) => {
    try {

        const services = await ServicesService.getServices();

        if(!services){
            return {
                status: 401,
                message: 'Erro ao listar serviços de TI!',
                data: {
                    status: false
                }
            };
        }

        if(services.length == 0){
            return {
                status: 404,
                message: 'Não foram encontrados serviços de TI!',
                data: {
                    status: false
                }
            };
        }

        return {
            status: 200,
            message: 'Successo!',
            data: {
                services: services,
                status: true
            }
        };
    } catch (error){

        return {
            status: 500,
            message: 'Erro ao listar serviços de TI!',
            data:{
                status: false
            }
        };
    }
}