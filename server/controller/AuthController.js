require('dotenv').config();

const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET;
const loginService = require('../service/loginService');

exports.login = async(req, res) => {
    
    try {
        const user = await loginService.makeLogin({email: req.body.email});

        if(!user){
            return {
                status: 401,
                message: 'User not found!',
                data: {
                    email: req.body.email,
                    status: false
                }
            };
        }

        const passwordValidate = user.password == req.body.password;

        if(!passwordValidate){
            return {
                status: 401,
                message: 'Unauthorized access',
                data: {
                    email: req.body.email,
                    status: false
                }
            };
        }

        const token = jwt.sign({name: user.name}, secret);

        return {
            status: 200,
            message: 'Success',
            data: {
                token: token,
                user_login: user.email,
                user_name: user.name,
                status: true
            }
        };
    } catch (error){
        console.error(error);
        return {
            status: 500,
            message: 'Unauthorized access',
            data:{
                status: false
            }
        };
    }
}

exports.verifyAuthorization = async (req, res, next) => {

    const headerToken = req.headers["authorization"];
    
    const token = headerToken.split(" ")[1] ?? headerToken;
    

    if(!token){
        return res.status(401).json({
            status: 401,
            message: 'Unauthorized access',    
        });
    }

    try{

        jwt.verify(token, secret);
        next();

    }catch(error){
        return res.status(401).json({
            status: 401,
            message: 'Invalid Token',    
        });
    }
}

exports.changePassword = async (req, res) => {
    try {
        const user = await loginService.makeLogin({email: req.body.email});

        if(!user){
            return {
                status: 401,
                message: 'User not found!',
                data: {
                    email: req.body.email,
                    status: false
                }
            };
        }

        const passwordValidate = user.password == req.body.password;

        if(!passwordValidate){
            return {
                status: 401,
                message: 'Senha atual digita está incorreta!',
                data: {
                    email: req.body.email,
                    status: false
                }
            };
        }

        const updatedUserData = await loginService.updateUserPassword({id: user.id, new_password: req.body.new_password});

        if(!updatedUserData){
            return {
                status: 401,
                message: 'Erro ao atualizar a senha do usuário!',
                data: {
                    email: req.body.email,
                    status: false
                }
            };
        }

        return {
            status: 200,
            message: 'Success',
            data: {
                user_login: user.email,
                user_name: user.name,
                status: true
            }
        };
    } catch (error){
        console.error(error);
        return {
            status: 500,
            message: 'Unauthorized access',
            data:{
                status: false
            }
        };
    }
}


exports.createUser = async(req, res) => {
    try {

        const newUser = await loginService.createNewUser(req.body.user);

        if(!newUser){
            return {
                status: 401,
                message: 'Erro ao cadastrar novo usuário!',
                data: {
                    status: false
                }
            };
        }

        return {
            status: 200,
            message: 'Successo!',
            data: {
                user_login: newUser.email,
                user_name: newUser.name,
                status: true
            }
        };
    } catch (error){

        return {
            status: 500,
            message: 'Erro ao cadastrar novo usuário!',
            data:{
                status: false
            }
        };
    }
}