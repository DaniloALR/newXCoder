const { validationResult } = require('express-validator')
const getInfoDatabase = require("../utils/getInfoDatabase")

const loginController = {
    login: (req,res)=>{
        res.render('login', {user: req.session.user})
    },
    loginUser: (req,res)=>{
        const { email, senha, salvarInfo } = req.body
        let errors = validationResult(req)
        const users = getInfoDatabase('users');

        
        if(errors.isEmpty()){
            
        } else {
            return res.render('login', {errors: errors.mapped()})
        };
        
        
        const usersExist = users.find(usuario => {
            return usuario.email === email && usuario.senha == senha
        });
        
        req.session.user = usersExist
        
        if(salvarInfo !== undefined){
            res.cookie('salvarInfo', usersExist.email, {maxAge: 600000})
        };


        if(usersExist) {
            return res.redirect('/')
        } else {

            return res.redirect('/login')
        };

    },
}

module.exports = loginController